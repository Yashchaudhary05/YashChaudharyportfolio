import { certifications } from '../data/resume'
import './styles/Certifications.css'

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <p className="section-label animate-in">05. Certifications</p>
      <h2 className="section-heading animate-in">Credentials</h2>

      <div className="certs-grid">
        {certifications.map((cert, i) => (
          <div key={i} className="cert-card animate-in">
            <span className="cert-icon" aria-hidden="true">{cert.icon}</span>
            <div className="cert-info">
              <div className="cert-name">{cert.name}</div>
              <div className="cert-code">{cert.code}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
