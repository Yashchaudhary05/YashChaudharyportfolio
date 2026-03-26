import { aboutText, education } from '../data/resume'
import './styles/About.css'

const highlights = [
  { number: '1+', label: 'Year at Cisco' },
  { number: '1000+', label: 'Regression Tests' },
  { number: '80%', label: 'Engagement Increase' },
  { number: '3', label: 'Certifications' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <p className="section-label animate-in">01. About Me</p>
      <h2 className="section-heading animate-in">Who I Am</h2>

      <div className="about">
        <div className="about-text">
          {aboutText.map((para, i) => (
            <p key={i} className="animate-in">{para}</p>
          ))}
        </div>

        <div className="about-highlights">
          {highlights.map((h, i) => (
            <div key={i} className="highlight-card animate-in">
              <div className="number">{h.number}</div>
              <div className="label">{h.label}</div>
            </div>
          ))}

          <div className="about-education animate-in">
            <div className="degree">{education.degree}</div>
            <div className="school">{education.institution}, {education.year}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
