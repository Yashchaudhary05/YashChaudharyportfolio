import { skills } from '../data/resume'
import './styles/Skills.css'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <p className="section-label animate-in">02. Skills</p>
      <h2 className="section-heading animate-in">What I Work With</h2>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category animate-in">
            <h3 className="skill-category-title">{category}</h3>
            <div className="skill-tags">
              {items.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
