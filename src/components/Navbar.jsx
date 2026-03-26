import { useState, useEffect, useRef } from 'react'
import { navLinks, personalInfo } from '../data/resume'
import './styles/Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > 72 && currentY > lastScrollY.current)
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar${hidden ? ' nav-hidden' : ''}`} role="navigation" aria-label="Main navigation">
      <a href="#" className="nav-logo" aria-label="Yash Chaudhary home">
        <span>Y</span>C<span>.</span>
      </a>

      {/* Desktop links */}
      <div className="nav-links">
        {navLinks.map((link, i) => (
          <a key={link.href} href={link.href} data-index={`0${i + 1}.`}>
            {link.label}
          </a>
        ))}
        <a
          className="nav-resume-btn"
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className={`nav-hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        {navLinks.map((link, i) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            0{i + 1}. {link.label}
          </a>
        ))}
        <a
          className="nav-resume-btn"
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Resume
        </a>
      </div>
    </nav>
  )
}
