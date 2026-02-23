import Clock from './Clock'
import NavBar from './NavBar'
import Globe from './Globe'

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-start justify-between pointer-events-none" style={{ overflow: 'visible' }}>
      <div className="pointer-events-auto">
        <Clock />
      </div>
      <div className="pointer-events-auto" style={{ marginTop: '20px' }}>
        <NavBar />
      </div>
      <div style={{ width: 320, height: 320, flexShrink: 0 }} className="pointer-events-none">
        <Globe />
      </div>
    </div>
  )
}
