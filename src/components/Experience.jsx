import { experience } from '../data/resume'
import './styles/Experience.css'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section-label animate-in">03. Experience</p>
      <h2 className="section-heading animate-in">Where I&apos;ve Worked</h2>

      <div className="experience-list">
        {experience.map((exp, i) => (
          <div key={i} className="exp-card animate-in">
            <div className="exp-header">
              <h3 className="exp-role">
                {exp.role} <span className="company">@ {exp.company}</span>
              </h3>
              <div className="exp-meta">
                <span>{exp.period}</span>
                <span>{exp.location}</span>
              </div>
            </div>
            <ul className="exp-highlights">
              {exp.highlights.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
