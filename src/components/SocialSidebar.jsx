import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { personalInfo } from '../data/resume'
import './styles/SocialSidebar.css'

export default function SocialSidebar() {
  return (
    <>
      <div className="social-sidebar">
        <a
          href={personalInfo.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FiGithub />
        </a>
        <a
          href={personalInfo.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FiLinkedin />
        </a>
        <a href={`mailto:${personalInfo.email}`} aria-label="Email">
          <FiMail />
        </a>
      </div>

      <div className="email-sidebar">
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </div>
    </>
  )
}
