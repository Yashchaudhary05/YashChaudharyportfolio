export const personalInfo = {
  name: 'Yash Chaudhary',
  role: 'Cloud & DevOps Engineer',
  location: 'Bengaluru, India',
  email: 'yashch1077@gmail.com',
  phone: '+91-9456218599',
  resumeUrl: 'https://github.com/Yashchaudhary05/resume/blob/main/Yash_Chaudhary_Resume.pdf',
  social: {
    github: 'https://github.com/Yashchaudhary05',
    linkedin: 'https://linkedin.com/in/yashchaudhary',
    portfolio: 'https://github.com/Yashchaudhary05/YashChaudharyportfolio',
  },
}

export const aboutText = [
  "I'm a Cloud and DevOps Engineer at Cisco, where I build AI-powered observability systems and automate infrastructure at scale.",
  "I specialize in designing scalable CI/CD pipelines, infrastructure automation, and leveraging AI for intelligent system monitoring. My work bridges the gap between development and operations — making systems more reliable, deployments faster, and debugging smarter.",
  "When I'm not architecting cloud infrastructure, I'm exploring new ways to apply AI to operations, contributing to open source, or diving deep into system design challenges.",
]

export const skills = {
  'DevOps & CI/CD': [
    'GitHub Actions',
    'Jenkins',
    'Docker',
    'Ansible',
    'Terraform',
  ],
  'Cloud (AWS)': [
    'EC2',
    'S3',
    'RDS',
    'Lambda',
    'VPC',
    'IAM',
  ],
  'Programming': [
    'Python',
    'Node.js',
    'React',
    'JavaScript',
  ],
  'Concepts': [
    'Infrastructure as Code',
    'Microservices',
    'Observability',
    'AIOps',
    'System Design',
  ],
  'Tools': [
    'Git',
    'Linux',
    'JIRA',
    'MongoDB',
  ],
}

export const experience = [
  {
    company: 'Cisco',
    role: 'Software Engineer Trainee',
    location: 'Bengaluru, India',
    period: 'Apr 2025 — Present',
    highlights: [
      'Designed an AI-powered KPI anomaly detection and observability system using GPT-4.1 with structured prompt engineering, improving user engagement by 80%',
      'Architected guard-railed AI workflows with SQL-safe query generation and controlled prompt pipelines for secure data access',
      'Built an AI-driven root cause analysis (RCA) pipeline leveraging MongoDB-based context queries for automated insight generation',
      'Developed a natural language interface for querying system metrics, enabling dynamic filtering and contextual insights from telemetry data',
      'Delivered 200+ test cases and executed 1000+ regression tests in production-like environments',
      'Automated Method of Procedure (MOP) workflows using Ansible, reducing manual steps by 50+ commands per workflow',
      'Co-designed a day-2 operations dashboard for database cleanup, routing, and onboarding',
      'Recognized in Connected Cisco for contributions to AI system design and automation',
    ],
  },
  {
    company: 'SSDN Technologies Pvt Ltd.',
    role: 'Cloud Intern',
    location: 'Remote',
    period: 'Aug 2024 — Dec 2024',
    highlights: [
      'Deployed microservices on AWS using EC2, S3, RDS, and Lambda, improving scalability and service availability',
      'Built CI/CD pipelines using Jenkins and GitHub Actions, enabling automated build, test, and deployment workflows',
      'Reduced manual deployment effort through pipeline automation, improving consistency and delivery speed',
    ],
  },
]

export const projects = [
  {
    title: 'End-to-End CI/CD Pipeline',
    description:
      'Fully automated CI/CD pipeline using GitHub Actions, Docker, and Ansible with zero manual intervention. Multi-stage Docker images with optimized layering and secure configurations. Infrastructure as Code for reproducible deployments.',
    tech: ['GitHub Actions', 'Docker', 'Ansible', 'IaC'],
    github: '#', // TODO: add actual link
    live: null,
  },
  {
    title: 'AI-Powered Observability Dashboard',
    description:
      'AI-driven observability platform with anomaly detection and root cause analysis using LLM-based pipelines. Natural language interface for querying system metrics. Modular architecture integrating telemetry ingestion, prompt pipelines, and structured response generation.',
    tech: ['Python', 'GPT-4.1', 'MongoDB', 'React'],
    github: '#', // TODO: add actual link
    live: null,
  },
]

export const certifications = [
  {
    name: 'AWS Solutions Architect Associate',
    code: 'SAA-C03',
    icon: '☁️',
  },
  {
    name: 'CCNA',
    code: 'Cisco Certified Network Associate',
    icon: '🌐',
  },
  {
    name: 'Salesforce AI Specialist',
    code: 'Salesforce',
    icon: '🤖',
  },
]

export const education = {
  degree: 'B.Tech in Computer Science',
  institution: 'SRMS College of Engineering & Technology',
  year: '2024',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
