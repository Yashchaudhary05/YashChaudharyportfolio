import { aboutText, education } from '../data/resume'
import useCountUp from '../hooks/useCountUp'
import './styles/About.css'

function CountCard({ end, suffix = '', label }) {
  const [ref, value] = useCountUp(end, 2000)
  return (
    <div ref={ref} className="highlight-card animate-in">
      <div className="number">{value}{suffix}</div>
      <div className="label">{label}</div>
    </div>
  )
}

const highlights = [
  { end: 1, suffix: '+', label: 'Year at Cisco' },
  { end: 1000, suffix: '+', label: 'Regression Tests' },
  { end: 80, suffix: '%', label: 'Engagement Increase' },
  { end: 3, suffix: '', label: 'Certifications' },
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
            <CountCard key={i} end={h.end} suffix={h.suffix} label={h.label} />
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
