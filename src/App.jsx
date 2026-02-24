import Background from './components/Background'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Globe from './components/Globe'
import Clock from './components/Clock'
import NavBar from './components/NavBar'

function App() {
  return (
    <div style={{ backgroundColor: '#05050f', minHeight: '100vh' }}>

      {/* These three are completely outside any relative container */}
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 999 }}>
        <Clock />
      </div>
      <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 999 }}>
        <NavBar />
      </div>
      <div style={{ position: 'fixed', top: 0, right: 0, width: 320, height: 320, zIndex: 999, pointerEvents: 'none' }}>
        <Globe />
      </div>

      <Background />

      {/* All scrollable content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div id="profile" style={{ paddingTop: '80px' }}>
          <Hero />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects" style={{ marginTop: '120px' }}>
          <Projects />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>

    </div>
  )
}

export default App