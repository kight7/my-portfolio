import { useEffect, useRef } from 'react'

const STARS = Array.from({ length: 100 }, function() {
  return {
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 1.5 + 0.3,
    opacity: Math.random() * 0.6 + 0.1,
    speed: Math.random() * 2 + 1,
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

function drawNebula(ctx, w, h) {
  // Helix-like nebula — bottom left area
  const cx = w * 0.18
  const cy = h * 0.72

  // Outer glow rings
  for (let i = 5; i >= 0; i--) {
    const r = 180 + i * 30
    const grad = ctx.createRadialGradient(cx, cy, r * 0.3, cx, cy, r)
    grad.addColorStop(0, 'rgba(0,200,180,0.0)')
    grad.addColorStop(0.4, 'rgba(0,180,220,' + (0.018 - i * 0.002) + ')')
    grad.addColorStop(0.7, 'rgba(100,50,200,' + (0.012 - i * 0.001) + ')')
    grad.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.beginPath()
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.fillStyle = grad
    ctx.fill()
  }

  // Inner eye
  const innerGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 80)
  innerGrad.addColorStop(0, 'rgba(200,240,255,0.06)')
  innerGrad.addColorStop(0.5, 'rgba(50,150,200,0.04)')
  innerGrad.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.beginPath()
  ctx.arc(cx, cy, 80, 0, Math.PI * 2)
  ctx.fillStyle = innerGrad
  ctx.fill()

  // Second nebula — top right (Eye nebula vibe)
  const cx2 = w * 0.78
  const cy2 = h * 0.25
  for (let i = 4; i >= 0; i--) {
    const r = 140 + i * 25
    const grad2 = ctx.createRadialGradient(cx2, cy2, r * 0.2, cx2, cy2, r)
    grad2.addColorStop(0, 'rgba(0,0,0,0)')
    grad2.addColorStop(0.35, 'rgba(180,80,220,' + (0.015 - i * 0.002) + ')')
    grad2.addColorStop(0.65, 'rgba(80,30,180,' + (0.02 - i * 0.003) + ')')
    grad2.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.beginPath()
    ctx.arc(cx2, cy2, r, 0, Math.PI * 2)
    ctx.fillStyle = grad2
    ctx.fill()
  }

  // Pink core of second nebula
  const core2 = ctx.createRadialGradient(cx2, cy2, 0, cx2, cy2, 50)
  core2.addColorStop(0, 'rgba(255,180,255,0.05)')
  core2.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.beginPath()
  ctx.arc(cx2, cy2, 50, 0, Math.PI * 2)
  ctx.fillStyle = core2
  ctx.fill()
}

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

      // Nebulae first (behind everything)
      drawNebula(ctx, canvas.width, canvas.height)

      // Twinkling stars
      STARS.forEach(function(star) {
        const twinkle = 0.5 + 0.5 * Math.sin(elapsed * star.speed + star.x * 10)
        ctx.beginPath()
        ctx.arc(star.x / 100 * canvas.width, star.y / 100 * canvas.height, star.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255,255,255,' + (star.opacity * twinkle) + ')'
        ctx.fill()
      })

      // Constellations drawing in
      CONSTELLATIONS.forEach(function(constellation) {
        const progress = Math.min(1, Math.max(0, (elapsed - constellation.delay) / 3))
        if (progress <= 0) return
        const pts = constellation.points
        const totalSegments = pts.length - 1
        const drawUpTo = progress * totalSegments

        ctx.strokeStyle = 'rgba(100,180,255,0.22)'
        ctx.lineWidth = 0.8
        ctx.setLineDash([3, 5])

        for (let i = 0; i < Math.floor(drawUpTo); i++) {
          ctx.beginPath()
          ctx.moveTo(pts[i][0] / 100 * canvas.width, pts[i][1] / 100 * canvas.height)
          ctx.lineTo(pts[i+1][0] / 100 * canvas.width, pts[i+1][1] / 100 * canvas.height)
          ctx.stroke()
        }

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

        ctx.setLineDash([])
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
      }}
    />
  )
}
