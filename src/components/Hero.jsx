import { personalInfo } from '../data/resume'
import ParticleNetwork from './ParticleNetwork'
import useTypingEffect from '../hooks/useTypingEffect'
import './styles/Hero.css'
import './styles/Effects.css'

const phrases = ['the cloud', 'infrastructure', 'CI/CD pipelines', 'observability']

export default function Hero() {
  const typedText = useTypingEffect(phrases, 80, 2200)

  return (
    <section className="hero" id="hero">
      <ParticleNetwork />
      <div className="hero-orb" aria-hidden="true" />

      <p className="hero-greeting animate-in">Hi, my name is</p>

      <h1 className="hero-name animate-in">{personalInfo.name}.</h1>

      <h2 className="hero-tagline animate-in">
        I build things for <span className="accent-word">{typedText}</span>
        <span className="typing-cursor" aria-hidden="true" />
      </h2>

      <p className="hero-description animate-in">
        Cloud &amp; DevOps Engineer at <strong>Cisco</strong>, specializing in
        scalable CI/CD pipelines, infrastructure automation, and AI-driven
        observability systems. I make deployments faster, systems more reliable,
        and debugging smarter.
      </p>

      <div className="hero-cta-group animate-in">
        <a href="#projects" className="hero-cta primary">
          View My Work ↓
        </a>
        <a
          href={`mailto:${personalInfo.email}`}
          className="hero-cta"
        >
          Get In Touch
        </a>
      </div>

      {/* Decorative terminal card — desktop only */}
      <div className="hero-terminal animate-in" aria-hidden="true">
        <div className="hero-terminal-bar">
          <div className="hero-terminal-dot" />
          <div className="hero-terminal-dot" />
          <div className="hero-terminal-dot" />
          <span>yash@cisco ~</span>
        </div>
        <div className="hero-terminal-body">
          <div><span className="cmd">$</span> whoami</div>
          <div className="output">yash.chaudhary — cloud &amp; devops engineer</div>
          <br />
          <div><span className="cmd">$</span> cat skills.yml</div>
          <div className="output">cloud: [AWS, EC2, S3, Lambda, VPC]</div>
          <div className="output">devops: [Docker, Ansible, Terraform]</div>
          <div className="output">ci_cd: [GitHub Actions, Jenkins]</div>
          <div className="output">lang: [Python, Node.js, React]</div>
          <br />
          <div><span className="cmd">$</span> uptime</div>
          <div className="output">1+ year @ Cisco, shipping daily ▮</div>
        </div>
      </div>
    </section>
  )
}
