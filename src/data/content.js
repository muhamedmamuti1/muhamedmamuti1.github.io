const CAREER_START = new Date(2021, 1, 1)
const YEAR_MS = 365.25 * 24 * 60 * 60 * 1000

const yearsOfExperience = Math.floor((Date.now() - CAREER_START) / YEAR_MS)

export const profile = {
  name: 'Muhamed Mamuti',
  role: 'Backend Developer',
  currentCompany: 'Vitec Memorix',
  location: 'Tetovo, North Macedonia',
  email: 'muhamedmamuti1999@gmail.com',
  github: 'https://github.com/muhamedmamuti1',
  linkedin: 'https://www.linkedin.com/in/muhamed-mamuti',
  photo: '/profile-picture.jpg',
  cv: '/Muhamed-Mamuti-CV.pdf',
}

export const navLinks = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const heroStats = [
  { value: `${yearsOfExperience}+ yrs`, label: 'Shipping production systems' },
  { value: 'Kotlin · Java · Node.js', label: 'Primary stack' },
  { value: 'Startups → Enterprise', label: 'Teams I have shipped with' },
]

export const experiences = [
  {
    role: 'Backend Developer',
    company: 'Vitec Memorix B.V.',
    via: 'K Resourcing',
    period: 'Feb 2025 - Present',
    location: 'Skopje · Hybrid',
    current: true,
    summary: 'Building and maintaining backend services for Vitec Memorix, engaged through K Resourcing.',
    highlights: [
      'Develop and improve functionality with the team and product owner, with a focus on long-term improvements.',
      'Support fellow developers and participate in code reviews.',
    ],
    stack: ['Kotlin', 'PostgreSQL', 'Elasticsearch', 'Docker', 'Kubernetes', 'GitLab CI/CD', 'Argo CD'],
  },
  {
    role: 'Backend Developer',
    company: 'Infinitcode',
    period: 'Feb 2024 - Feb 2025',
    location: 'Gostivar · Hybrid',
    summary:
      'Developed backend applications and adhered to top coding standards and architectural practices.',
    highlights: [
      'Created clean, readable codebases for easy maintenance and collaboration within the team.',
      'Collaborated closely with teammates to build custom backend solutions from scratch, meeting client needs effectively.',
    ],
    stack: ['Node.js', 'Prisma', 'PostgreSQL', 'AWS'],
  },
  {
    role: 'Android Developer',
    company: 'Drivosity',
    period: 'Nov 2022 - Nov 2023',
    location: 'Tetovo · Hybrid',
    summary: 'Developed and maintained Android applications for a fleet management software company.',
    highlights: [
      'Worked with cross-functional teams to understand requirements and delivered quality software in a timely manner.',
      'Implemented new features, fixed bugs and optimized code for performance.',
    ],
    stack: ['Kotlin', 'Android', 'Compose', 'Firebase'],
  },
  {
    role: 'Software Developer',
    company: 'HotelKey',
    period: 'Feb 2021 - Nov 2022',
    location: 'Tetovo · Hybrid',
    summary: 'Contributed to the development of hotel management software.',
    highlights: [
      'Collaborated with the team to design and implement software modules.',
      'Conducted code reviews and resolved issues to maintain code quality and efficiency.',
    ],
    stack: ['Java', 'MySQL', 'REST', 'JasperReports'],
  },
]

export const projects = [
  {
    name: 'kotlin-web-app',
    description: 'A server-side web application written in Kotlin.',
    language: 'Kotlin',
    href: 'https://github.com/muhamedmamuti1/kotlin-web-app',
  },
  {
    name: 'dog-breeds-api',
    description: 'A JavaScript API for browsing and querying dog breed data.',
    language: 'JavaScript',
    href: 'https://github.com/muhamedmamuti1/dog-breeds-api',
  },
]

export const skillGroups = [
  {
    title: 'Backend & Platforms',
    icon: 'server',
    items: [
      'Kotlin / Java',
      'Node.js · NestJS',
      'REST & gRPC APIs',
      'PostgreSQL · MongoDB',
      'AWS · Jenkins · GitHub Actions',
    ],
  },
  {
    title: 'Architecture & Quality',
    icon: 'layers',
    items: [
      'Domain-driven design',
      'Event-driven systems',
      'Clean code & testing rituals',
      'Observability & tracing',
      'Secure SDLC practices',
    ],
  },
  {
    title: 'Creative & Product',
    icon: 'pen',
    items: [
      'Adobe Suite (Ps, Ai, Id, Ae)',
      'Rapid prototyping',
      'Stakeholder facilitation',
      'Strategic planning',
      'Mentoring & knowledge sharing',
    ],
  },
]

export const contactChannels = [
  {
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'in/muhamed-mamuti',
    href: profile.linkedin,
  },
  {
    type: 'github',
    label: 'GitHub',
    value: 'muhamedmamuti1',
    href: profile.github,
  },
  {
    type: 'whatsapp',
    label: 'WhatsApp',
    value: '+389 71 397 985',
    href: 'https://wa.me/38971397985',
  },
  {
    type: 'location',
    label: 'Location',
    value: profile.location,
    href: null,
  },
]
