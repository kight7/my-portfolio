import Background from './components/Background'
import Globe from './components/Globe'
import Clock from './components/Clock'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ backgroundColor: '#05050f', minHeight: '100vh' }}>
      <Background />
      <Globe />
      <div style={{ position: 'fixed', top: 0, left: 0, zIndex: 999 }}>
        <Clock />
      </div>
      <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 999 }}>
        <NavBar />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div id="profile" style={{ paddingTop: '80px' }}>
          <Hero />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects" style={{ marginTop: '400px' }}>
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
