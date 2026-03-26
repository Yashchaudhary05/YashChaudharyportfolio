import { useState } from 'react'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import SocialSidebar from './components/SocialSidebar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import useScrollAnimations from './hooks/useScrollAnimations'
import './App.css'

export default function App() {
  const [loading, setLoading] = useState(true)

  // Activate scroll animations after loading screen finishes
  useScrollAnimations(!loading)

  return (
    <>
      {loading && <Loading onComplete={() => setLoading(false)} />}

      <div className="app" style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <a href="#about" className="skip-link">Skip to main content</a>
        <Cursor />
        <Navbar />
        <SocialSidebar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Contact />
        </main>
      </div>
    </>
  )
}
