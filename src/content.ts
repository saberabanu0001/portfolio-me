export const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export const heroContent = {
  greeting: 'Hello, I’m',
  name: 'Sabera Banu',
  title: 'Python Developer crafting AI-powered web experiences',
  description:
    'Computer Science student at Sejong University and Junior Python Developer at JBRSOFT Limited. I focus on NLP, LLMs, and accessible digital products that solve everyday problems.',
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Download Résumé', href: '#contact' },
  tertiaryCta: { label: 'Let’s Collaborate', href: '#contact' },
  location: 'Seoul, South Korea',
  availability: 'Available for internships & collaborations',
}

export const aboutContent = {
  heading: 'About Sabera',
  paragraphs: [
    'I am an international Computer Science student at Sejong University, currently working as a Junior Python Developer at JBRSOFT Limited. I love transforming research-backed ideas into practical, human-centered AI products.',
    'As the team lead for PDF Quizzard and other AI initiatives, I thrive at the intersection of natural language processing, retrieval-augmented generation, and thoughtful user experience design.',
    'My guiding principle is simple: deeds, not words. I believe that technology should be empathetic, inclusive, and measurable in its impact.',
  ],
  highlights: [
    { label: 'Focus', value: 'AI, NLP & retrieval-augmented experiences' },
    { label: 'Currently Learning', value: 'Computer Vision and LangChain' },
    { label: 'Strength', value: 'Empathetic leadership & clear communication' },
  ],
  principles: ['Listen first, build second', 'Measure the impact', 'Keep learning'],
}

export const projects = [
  {
    title: 'PDF Quizzard',
    description:
      'AI-powered quiz generator that transforms dense research PDFs into study-ready questions. Led the 4-person team, built retrieval-augmented pipelines, and improved quiz accuracy through evaluation loops.',
    tags: ['Python', 'NLP', 'LangChain', 'RAG'],
    liveUrl: undefined,
    repoUrl: 'https://github.com/saberabanu0001/EduPDF-Quiz-Maker',
    status: 'Featured',
  },
  {
    title: 'CalmMateAI',
    description:
      'Mental health companion chatbot with voice input, seriousness detection, and emergency resource routing to ensure timely, compassionate support.',
    tags: ['Python', 'AI', 'NLP', 'Voice UI'],
    liveUrl: undefined,
    repoUrl: 'https://github.com/saberabanu0001/NewCalmateAI',
    status: 'Featured',
  },
  {
    title: 'EventBuddy',
    description:
      'University-wide information hub delivering campus news and events through curated dashboards and a lightweight content management workflow.',
    tags: ['Python', 'Django', 'Product Strategy'],
    liveUrl: undefined,
    repoUrl: 'https://github.com/saberabanu0001',
    status: 'In progress',
  },
  {
    title: 'JobConnect',
    description:
      'CLI-based job management platform connecting international students with part-time opportunities, featuring SQLite storage and workflow automation.',
    tags: ['C++', 'SQLite'],
    liveUrl: undefined,
    repoUrl: 'https://github.com/saberabanu0001/JobConnect',
    status: 'Case Study',
  },
]

export const skills = {
  categories: [
    {
      name: 'Backend & AI',
      items: [
        { label: 'Python', level: 95 },
        { label: 'Django', level: 85 },
        { label: 'Flask', level: 80 },
        { label: 'LangChain & RAG', level: 75 },
      ],
    },
    {
      name: 'Data & NLP',
      items: [
        { label: 'LLMs & Prompting', level: 85 },
        { label: 'NLP Pipelines', level: 80 },
        { label: 'Computer Vision', level: 60 },
        { label: 'SQL / SQLite', level: 70 },
      ],
    },
    {
      name: 'Frontend & Tools',
      items: [
        { label: 'HTML, CSS, JavaScript', level: 75 },
        { label: 'Git & GitHub', level: 90 },
        { label: 'VS Code / PyCharm', level: 85 },
        { label: 'Deployment & CI basics', level: 65 },
      ],
    },
  ],
  softSkills: ['Team Leadership', 'Mentoring', 'Public Speaking', 'Research Translation'],
  learning: ['Computer Vision', 'Advanced LangChain orchestration'],
}

export const experiences = [
  {
    role: 'Junior Python Developer',
    organization: 'JBRSOFT Limited',
    period: '2024 — Present',
    location: 'Remote',
    bullets: [
      'Develop NLP and LLM-driven features for enterprise knowledge bases with a focus on accuracy and safety.',
      'Collaborate with cross-functional teams to deploy retrieval-augmented applications supporting customer support and analytics.',
      'Experiment with prompt engineering and evaluation frameworks to improve response quality.',
    ],
  },
  {
    role: 'Team Lead & Researcher',
    organization: 'PDF Quizzard (Capstone)',
    period: '2023 — 2024',
    location: 'Sejong University',
    bullets: [
      'Coordinated a four-person team to transform research PDFs into interactive quizzes for students.',
      'Designed RAG pipeline and evaluation metrics to align generated questions with academic outcomes.',
      'Presented findings in departmental showcases, receiving recognition for practical impact.',
    ],
  },
]

export const education = [
  {
    institution: 'Sejong University',
    degree: 'B.S. in Computer Science',
    period: '2021 — Present',
    location: 'Seoul, South Korea',
    details: ['International Student', 'Research focus: NLP & AI systems', 'Capstone: Robotics & Hardware learning journal'],
  },
]

export const activities = [
  'Maintaining a robotics and hardware learning journal during a four-month capstone journey.',
  'Leading community study groups on AI fundamentals and prompt engineering.',
  'Building calm technology prototypes to support student well-being.',
]

export const contact = {
  email: 'saberabanu677@gmail.com',
  socials: [
    { name: 'GitHub', href: 'https://github.com/saberabanu0001', icon: 'github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sabera-banu-6047a02b3/', icon: 'linkedin' },
    { name: 'Facebook', href: 'https://facebook.com/sabera6537', icon: 'facebook' },
  ],
  note:
    'Whether you are looking for a collaborator, hiring for a Python/NLP role, or just want to chat about mindful AI, my inbox is open. I aim to reply within two business days.',
}
