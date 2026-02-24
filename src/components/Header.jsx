import Clock from './Clock'
import NavBar from './NavBar'
import Globe from './Globe'

export default function Header() {
  return (
    <>
      {/* Clock - fixed top left */}
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 50, pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto' }}>
          <Clock />
        </div>
      </div>

      {/* NavBar - fixed top center */}
      <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 50, pointerEvents: 'auto' }}>
        <NavBar />
      </div>

      {/* Globe - fixed top right, never moves */}
      <div style={{ position: 'fixed', top: 0, right: 0, width: 320, height: 320, zIndex: 50, pointerEvents: 'none' }}>
        <Globe />
      </div>
    </>
  )
}