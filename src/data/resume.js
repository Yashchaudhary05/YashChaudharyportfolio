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
    title: 'AI-Powered Observability Dashboard',
    period: 'Apr 2025 — Present',
    description:
      'Built an AI-driven observability platform with anomaly detection and root cause analysis using LLM-based pipelines, improving system usability and interaction efficiency by 80%.',
    features: [
      'GPT-4.1 powered KPI anomaly detection system',
      'Natural language interface for querying system metrics',
      'Automated root cause analysis with parametric prompting',
      'Guard-railed AI workflows with SQL-safe query generation',
    ],
    tech: ['Python', 'GPT-4.1', 'MongoDB', 'Prompt Engineering', 'AIOps'],
    github: null,
    live: null,
    confidential: true,
  },
  {
    title: 'DevOps CI/CD Pipeline — End-to-End',
    period: 'Mar 2026 — Present',
    description:
      'Production-grade CI/CD pipeline automating the entire software delivery lifecycle — from code commit to containerized deployment using Docker, GitHub Actions, and Ansible with zero manual intervention.',
    features: [
      'Fully automated pipeline: Test → Build → Push → Deploy',
      'Multi-stage Docker builds with Alpine (46.8MB image)',
      'Ansible-driven deployment with health check verification',
      'GitHub Actions with caching, secrets, and artifact management',
    ],
    tech: ['Docker', 'GitHub Actions', 'Ansible', 'Node.js', 'IaC'],
    github: 'https://github.com/Yashchaudhary05/Automated_Portfolio',
    live: null,
    confidential: false,
  },
  {
    title: 'Certification Exam Prep — Mock Quiz System',
    period: 'Sep 2024 — Present',
    description:
      'Multi-certification mock exam platform supporting AWS CSA C03, CCNA, and Salesforce AI Specialist with 300+ questions, real-time scoring, and performance analytics.',
    features: [
      'Supports AWS CSA, CCNA & Salesforce AI Specialist exams',
      'Interactive quiz interface with 500+ questions',
      'Real-time result tracking and performance analytics',
      'Deployable on AWS EC2 with high availability',
    ],
    tech: ['AWS EC2', 'Apache', 'JavaScript', 'HTML/CSS'],
    github: null,
    live: 'https://yashchaudhary05.github.io/aws_csa_c03-practice-quiz-website/',
    confidential: false,
  },
  {
    title: 'T2DM Diabetes Detection System',
    period: 'Sep 2023 — Jul 2024',
    description:
      'AI-powered Type 2 Diabetes detection system using machine learning algorithms to predict diabetes risk with exceptional 99% accuracy, trained on comprehensive healthcare datasets.',
    features: [
      'Machine learning model with 99% accuracy',
      'Trained on comprehensive healthcare datasets',
      'User-friendly prediction interface',
      'Real-time risk assessment and recommendations',
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    github: 'https://github.com/Yashchaudhary05/pima',
    live: null,
    confidential: false,
  },
  {
    title: 'Social Media Dashboard',
    period: 'Feb 2024 — Present',
    description:
      'Full-stack social media analytics dashboard with real-time data rendering, interactive Chart.js trend graphs, glassmorphism UI, PWA support, and production CI/CD pipelines deploying to both GitHub Pages and AWS (EC2 + ALB via CloudFormation & Terraform).',
    features: [
      '6-platform analytics with live auto-refresh every 30s',
      'Dark/light glassmorphism toggle persisted in localStorage',
      'Dockerized Nginx deployment with security headers & health checks',
      'AWS infra as code — CloudFormation + Terraform (VPC, EC2, ALB, ASG)',
    ],
    tech: ['JavaScript', 'Chart.js', 'Docker', 'GitHub Actions', 'AWS', 'Terraform', 'Nginx'],
    github: 'https://github.com/Yashchaudhary05/Social_Media_Dashboard',
    live: 'https://yashchaudhary05.github.io/Social_Media_Dashboard/',
    confidential: false,
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
