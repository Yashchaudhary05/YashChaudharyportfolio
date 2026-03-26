import { useState } from 'react'
import { FiGithub, FiExternalLink, FiLock, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { projects } from '../data/resume'
import './styles/Projects.css'

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const project = projects[current]

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1))

  return (
    <section className="section" id="projects">
      <p className="section-label animate-in">04. Projects</p>
      <h2 className="section-heading animate-in">What I&apos;ve Built</h2>

      <div className="projects-carousel animate-in">
        <div className="project-slide" key={current}>
          {/* Left column — info */}
          <div className="project-slide-left">
            <div className="project-slide-header">
              <span className="project-number">
                {String(current + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
              </span>
              {project.period && <span className="project-period">{project.period}</span>}
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
                  <FiExternalLink size={14} /> Live
                </a>
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
                onClick={() => setCurrent(i)}
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
              onClick={() => setCurrent(i)}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
