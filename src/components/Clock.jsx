import { useState, useEffect } from 'react'

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 10)
    return () => clearInterval(timer)
  }, [])

  const pad = (n, len) => String(n).padStart(len || 2, '0')
  const h = pad(time.getHours())
  const m = pad(time.getMinutes())
  const s = pad(time.getSeconds())
  const ms = pad(Math.floor(time.getMilliseconds() / 10))

  return (
    <div
      style={{
        border: '1px solid rgba(37,99,235,0.5)',
        boxShadow: '0 0 30px rgba(37,99,235,0.25)',
        background: 'rgba(5,5,15,0.85)',
        margin: '16px 0 0 16px',
      }}
      className="px-6 py-3 rounded-xl"
    >
      <div className="font-mono text-blue-400 text-3xl tracking-widest font-bold">
        {h}:{m}:{s}
        <span className="text-blue-600 text-lg">.{ms}</span>
      </div>
    </div>
  )
}
