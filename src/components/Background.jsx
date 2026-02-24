import { useEffect, useRef } from 'react'

const STARS = Array.from({ length: 80 }, function(_, i) {
  return {
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.1,
    delay: Math.random() * 4,
  }
})

const CONSTELLATIONS = [
  { points: [[10,15],[14,12],[18,16],[14,20],[10,15]], delay: 0 },
  { points: [[70,10],[75,8],[80,12],[76,16],[72,13],[70,10]], delay: 1.5 },
  { points: [[85,55],[90,50],[95,54],[92,60],[86,58],[85,55]], delay: 3 },
  { points: [[20,70],[25,65],[30,68],[28,75],[22,73],[20,70]], delay: 2 },
  { points: [[50,80],[55,77],[60,81],[57,87],[51,85],[50,80]], delay: 4 },
  { points: [[40,30],[44,25],[50,28],[47,35],[41,33],[40,30]], delay: 2.5 },
]

export default function Background() {
  const canvasRef = useRef(null)

  useEffect(function() {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let startTime = Date.now()

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      const elapsed = (Date.now() - startTime) / 1000
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw static stars
      STARS.forEach(function(star) {
        const twinkle = 0.5 + 0.5 * Math.sin(elapsed * 1.5 + star.delay * 10)
        ctx.beginPath()
        ctx.arc(star.x / 100 * canvas.width, star.y / 100 * canvas.height, star.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,' + (star.opacity * twinkle) + ')'
        ctx.fill()
      })

      // Draw constellations
      CONSTELLATIONS.forEach(function(constellation) {
        const progress = Math.min(1, Math.max(0, (elapsed - constellation.delay) / 3))
        if (progress <= 0) return

        const pts = constellation.points
        const totalSegments = pts.length - 1
        const drawUpTo = progress * totalSegments

        ctx.strokeStyle = 'rgba(100,180,255,0.25)'
        ctx.lineWidth = 0.8
        ctx.setLineDash([3, 5])

        for (let i = 0; i < Math.floor(drawUpTo); i++) {
          ctx.beginPath()
          ctx.moveTo(pts[i][0] / 100 * canvas.width, pts[i][1] / 100 * canvas.height)
          ctx.lineTo(pts[i+1][0] / 100 * canvas.width, pts[i+1][1] / 100 * canvas.height)
          ctx.stroke()
        }

        // Partial last segment
        const partial = drawUpTo - Math.floor(drawUpTo)
        if (partial > 0 && Math.floor(drawUpTo) < totalSegments) {
          const i = Math.floor(drawUpTo)
          const x1 = pts[i][0] / 100 * canvas.width
          const y1 = pts[i][1] / 100 * canvas.height
          const x2 = pts[i+1][0] / 100 * canvas.width
          const y2 = pts[i+1][1] / 100 * canvas.height
          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x1 + (x2 - x1) * partial, y1 + (y2 - y1) * partial)
          ctx.stroke()
        }

        // Draw dots at each completed vertex
        pts.forEach(function(pt, idx) {
          if (idx / totalSegments <= progress) {
            ctx.beginPath()
            ctx.arc(pt[0] / 100 * canvas.width, pt[1] / 100 * canvas.height, 1.5, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(150,200,255,0.6)'
            ctx.fill()
          }
        })
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return function() {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.9,
      }}
    />
  )
}
