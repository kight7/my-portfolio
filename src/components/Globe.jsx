import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Simplified continent outlines as lat/lng polygons [lat, lng]
const CONTINENTS = [
  // North America
  [
    [70,-140],[70,-60],[50,-55],[25,-80],[15,-85],[8,-77],[8,-78],
    [20,-87],[22,-90],[30,-110],[32,-117],[48,-124],[60,-140],[70,-140]
  ],
  // South America
  [
    [12,-72],[12,-62],[5,-52],[-5,-35],[-20,-40],[-35,-57],[-55,-68],
    [-55,-64],[-40,-62],[-20,-40],[-5,-80],[0,-80],[8,-77],[12,-72]
  ],
  // Europe
  [
    [71,28],[60,30],[55,25],[45,30],[36,28],[36,5],[43,-5],
    [48,-5],[52,2],[58,5],[65,14],[71,28]
  ],
  // Africa
  [
    [37,10],[37,35],[15,42],[0,42],[-10,38],[-35,20],[-35,18],
    [-10,12],[0,8],[15,0],[30,-5],[37,10]
  ],
  // Asia
  [
    [70,30],[70,180],[50,140],[35,135],[22,120],[10,105],[0,105],
    [10,78],[22,70],[30,60],[45,60],[60,55],[65,40],[71,28],[70,30]
  ],
  // Australia
  [
    [-15,130],[-15,138],[-20,148],[-38,146],[-38,140],[-32,125],
    [-22,114],[-18,122],[-15,130]
  ],
]

function latLngToVec3(lat, lng, r) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  )
}

export default function Globe() {
  const mountRef = useRef(null)

  useEffect(() => {
    const w = mountRef.current.clientWidth
    const h = mountRef.current.clientHeight

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(w, h)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000)
    camera.position.z = 2.5

    const globeGroup = new THREE.Group()
    scene.add(globeGroup)

    const R = 1

    // Blue wireframe grid
    const gridMat = new THREE.LineBasicMaterial({ color: 0x2563eb, transparent: true, opacity: 0.5 })
    const dimMat = new THREE.LineBasicMaterial({ color: 0x1e3a8a, transparent: true, opacity: 0.25 })

    // Latitude lines
    for (let lat = -80; lat <= 80; lat += 20) {
      const phi = (90 - lat) * (Math.PI / 180)
      const pts = []
      for (let i = 0; i <= 128; i++) {
        const theta = (i / 128) * Math.PI * 2
        pts.push(new THREE.Vector3(Math.sin(phi) * Math.cos(theta), Math.cos(phi), Math.sin(phi) * Math.sin(theta)))
      }
      globeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lat === 0 ? gridMat : dimMat))
    }

    // Longitude lines
    for (let lon = 0; lon < 360; lon += 20) {
      const theta = lon * (Math.PI / 180)
      const pts = []
      for (let i = 0; i <= 64; i++) {
        const phi = (i / 64) * Math.PI
        pts.push(new THREE.Vector3(Math.sin(phi) * Math.cos(theta), Math.cos(phi), Math.sin(phi) * Math.sin(theta)))
      }
      globeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lon === 0 || lon === 180 ? gridMat : dimMat))
    }

    // Green continent outlines
    const contMat = new THREE.LineBasicMaterial({ color: 0x22c55e, transparent: true, opacity: 0.9 })
    CONTINENTS.forEach(coords => {
      const pts = coords.map(([lat, lng]) => latLngToVec3(lat, lng, R + 0.01))
      pts.push(pts[0]) // close loop
      globeGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), contMat))
    })

    // Continent fill — green translucent sphere segments using small dots
    const dotMat = new THREE.MeshBasicMaterial({ color: 0x16a34a, transparent: true, opacity: 0.35 })
    CONTINENTS.forEach(coords => {
      // Sample interior points from bounding box
      const lats = coords.map(c => c[0])
      const lngs = coords.map(c => c[1])
      const minLat = Math.min(...lats), maxLat = Math.max(...lats)
      const minLng = Math.min(...lngs), maxLng = Math.max(...lngs)
      for (let la = minLat; la <= maxLat; la += 4) {
        for (let ln = minLng; ln <= maxLng; ln += 4) {
          const pos = latLngToVec3(la, ln, R + 0.005)
          const dot = new THREE.Mesh(new THREE.SphereGeometry(0.018, 4, 4), dotMat)
          dot.position.copy(pos)
          globeGroup.add(dot)
        }
      }
    })

    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      globeGroup.rotation.y += 0.003
      globeGroup.rotation.x = 0.25
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
}
