import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ backgroundColor: '#05050f', minHeight: '100vh' }}>
      <Header />
      <div id="profile" style={{ paddingTop: '80px' }}>
        <Hero />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </div>
  )
}

export default App
