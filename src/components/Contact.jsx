import { personalInfo } from '../data/resume'
import './styles/Contact.css'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="contact">
        <p className="section-label animate-in">06. What&apos;s Next?</p>
        <h2 className="section-heading animate-in">Get In Touch</h2>

        <p className="contact-text animate-in">
          I&apos;m currently open to new opportunities where I can contribute to
          building scalable cloud infrastructure and intelligent automation
          systems. Whether you have a question or just want to say hi, my inbox
          is always open.
        </p>

        <a
          href={`mailto:${personalInfo.email}`}
          className="contact-cta animate-in"
        >
          Say Hello →
        </a>
      </div>

      <footer className="footer">
        <div>
          Built by{' '}
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Yash Chaudhary
          </a>
        </div>
        <div className="footer-line">
          Cloud &amp; DevOps · {personalInfo.location}
        </div>
      </footer>
    </section>
  )
}
