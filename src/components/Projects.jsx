import { useState, useRef, useEffect, useCallback } from 'react'
import { FiGithub, FiExternalLink, FiLock, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import gsap from 'gsap'
import { projects } from '../data/resume'
import './styles/Projects.css'

const gradients = [
  'linear-gradient(135deg, #64ffda 0%, #0ea5e9 100%)',
  'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
  'linear-gradient(135deg, #10b981 0%, #3b82f6 100%)',
  'linear-gradient(135deg, #f97316 0%, #eab308 100%)',
]

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const slideRef = useRef(null)
  const touchStart = useRef(null)
  const project = projects[current]

  const animateIn = useCallback(() => {
    const el = slideRef.current
    if (!el) return
    gsap.fromTo(el,
      { opacity: 0, y: 30, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out' },
    )
    // Stagger features
    const items = el.querySelectorAll('.project-features li, .project-tech span')
    gsap.fromTo(items,
      { opacity: 0, x: -12 },
      { opacity: 1, x: 0, duration: 0.35, stagger: 0.05, ease: 'power2.out', delay: 0.15 },
    )
  }, [])

  const goTo = useCallback((idx) => {
    if (idx === current) return
    const el = slideRef.current
    if (!el) { setCurrent(idx); return }
    gsap.to(el, {
      opacity: 0, y: -20, scale: 0.97, duration: 0.25, ease: 'power2.in',
      onComplete: () => { setCurrent(idx) },
    })
  }, [current])

  useEffect(() => { animateIn() }, [current, animateIn])

  const prev = () => goTo(current === 0 ? projects.length - 1 : current - 1)
  const next = () => goTo(current === projects.length - 1 ? 0 : current + 1)

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  // Touch swipe
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    touchStart.current = null
  }

  // 3D tilt on hover
  const onMouseMove = (e) => {
    const el = slideRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(el, {
      rotateY: x * 6,
      rotateX: -y * 4,
      duration: 0.4,
      ease: 'power2.out',
    })
  }
  const onMouseLeave = () => {
    gsap.to(slideRef.current, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power3.out' })
  }

  const isActive = project.period?.includes('Present')

  return (
    <section className="section" id="projects">
      <p className="section-label animate-in">04. Projects</p>
      <h2 className="section-heading animate-in">What I&apos;ve Built</h2>

      <div
        className="projects-carousel animate-in"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          ref={slideRef}
          className="project-slide"
          onMouseMove={onMouseMove}
          onMouseLeave={onMouseLeave}
        >
          {/* Accent gradient bar */}
          <div
            className="project-accent-bar"
            style={{ background: gradients[current % gradients.length] }}
          />

          {/* Left column — info */}
          <div className="project-slide-left">
            <div className="project-slide-header">
              <span className="project-number">
                {String(current + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
              </span>
              {project.period && <span className="project-period">{project.period}</span>}
              {isActive && <span className="project-status-badge">Active</span>}
            </div>

            <h3 className="project-title">{project.title}</h3>

            {project.confidential && (
              <div className="project-confidential">
                <FiLock size={12} /> Confidential — Cisco Internal
              </div>
            )}

            <p className="project-description">{project.description}</p>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FiGithub size={14} /> Source
                </a>
              )}
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <FiExternalLink size={14} /> Live Demo
                </a>
              )}
              {!project.github && !project.live && !project.confidential && (
                <span className="project-no-link">No public links</span>
              )}
            </div>
          </div>

          {/* Right column — features & tech */}
          <div className="project-slide-right">
            {project.features && project.features.length > 0 && (
              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="carousel-controls">
          <button className="carousel-btn" onClick={prev} aria-label="Previous project">
            <FiChevronLeft />
          </button>

          <div className="carousel-dots">
            {projects.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === current ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>

          <button className="carousel-btn" onClick={next} aria-label="Next project">
            <FiChevronRight />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div className="project-thumbs">
          {projects.map((p, i) => (
            <button
              key={i}
              className={`project-thumb${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
