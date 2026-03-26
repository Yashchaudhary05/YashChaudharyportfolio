import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/resume'
import './styles/Projects.css'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label animate-in">04. Projects</p>
      <h2 className="section-heading animate-in">What I&apos;ve Built</h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card animate-in">
            <div className="project-card-top">
              <FiFolder className="project-icon" />
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <FiGithub />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
