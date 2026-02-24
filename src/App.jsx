import Background from './components/Background'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ backgroundColor: '#05050f', minHeight: '100vh', position: 'relative' }}>
      <Background />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
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
