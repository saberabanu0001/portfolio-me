export const navigationLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Awards', href: '#awards' },
  { name: 'Hackathons', href: '#hackathons' },
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
  microIntro: '🚀 Passionate about turning data into intelligent, human-centered AI solutions.',
  paragraphs: [
    "I'm an international Computer Science student at Sejong University and a Junior Python Developer at JBRSOFT Limited. I'm passionate about transforming research-driven ideas into intelligent, human-centered AI products.",
    'As a Teaching Assistant at Sejong University and a contributor to the Physical AI Assistant robotics project, I thrive at the intersection of computer vision, intelligent mobility, human-robot interaction, and thoughtful product design.',
  ],
  impact: 'Our robotics system combines real-time vision processing, intelligent navigation, and natural interaction capabilities to create practical AI solutions that bridge the physical and digital worlds.',
  personalNote: 'Beyond coding, I love mentoring students and exploring how AI can make learning more inclusive.',
  highlights: [
    { label: 'Focus', value: 'AI, NLP & retrieval-augmented experiences', icon: '🧠' },
    { label: 'Currently Learning', value: 'Computer Vision and LangChain', icon: '📚' },
    { label: 'Strength', value: 'Empathetic leadership & clear communication', icon: '💬' },
  ],
  principles: [
    { icon: '🎧', text: 'Listen first. Build second.' },
    { icon: '📊', text: 'Measure the impact.' },
    { icon: '🌱', text: 'Keep learning always.' },
  ],
}

export const projects = [
  {
    title: 'Capstone Robotics Project',
    description:
      'Physical AI Assistant robot with real-time vision, intelligent mobility, and human-robot interaction capabilities. Award-winning project recognized for innovation in AI-driven physical assistants.',
    tags: ['Python', 'Computer Vision', 'Robotics', 'NLP'],
    liveUrl: undefined,
    repoUrl: 'https://github.com/saberabanu0001/CapstoneRoboticsProject',
    status: 'Award Winner',
    image: '/robot.jpg',
    imageAlt: 'Physical AI Assistant robot with computer vision sensors',
  },
  {
    title: 'ApplySmart (Trae Hackathon)',
    description:
      'A multi-agent AI system designed to help international students navigate scholarship applications. Featuring a "Critic Agent" that analyzes CVs and goals to block unsuitable applications while recommending optimal paths and generating tailored documents.',
    tags: ['FastAPI', 'Multi-agent Systems', 'LLM Reasoning', 'Tailwind'],
    liveUrl: undefined,
    repoUrl: 'https://github.com/saberabanu0001/ApplySmart',
    status: 'Hackathon Project',
    image: undefined,
    imageAlt: undefined,
  },
  {
    title: 'CalmMateAI',
    description:
      'Mental health companion chatbot with voice input, seriousness detection, and emergency resource routing to ensure timely, compassionate support.',
    tags: ['Python', 'AI', 'NLP', 'Voice UI'],
    liveUrl: undefined,
    repoUrl: 'https://github.com/saberabanu0001/NewCalmateAI',
    status: 'Featured',
    image: '/calmate-ai-dashboard.png',
    imageAlt: 'CalmMateAI dashboard preview',
  },
  {
    title: 'EventBuddy',
    description:
      'University-wide information hub delivering campus news and events through curated dashboards and a lightweight content management workflow.',
    tags: ['Python', 'Django', 'Product Strategy'],
    repoUrl: 'https://github.com/saberabanu0001',
    status: 'In progress',
  },
  {
    title: 'PrescriptionPro',
    description:
      'AI-powered clinic management tool that digitizes handwritten medical prescriptions using Vision Language Models (VLMs) and the Groq API to extract structured patient and medication data.',
    tags: ['FastAPI', 'React Native', 'Groq API', 'Vision AI', 'Docker'],
    liveUrl: 'https://v0-prescription-pro.vercel.app',
    repoUrl: 'https://github.com/saberabanu0001/PrescriptionPro',
    status: 'Production',
    image: undefined,
    imageAlt: undefined,
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
    role: 'Teaching Assistant',
    organization: 'Sejong University',
    period: 'Sep 2024 — Present',
    location: 'Seoul, South Korea',
    url: 'https://sejong.ac.kr',
    image: '/teaching-assistant-classroom.jpeg',
    imageAlt: 'Sabera Banu teaching students in a computer lab as a Teaching Assistant at Sejong University',
    bullets: [
      'Assist professors in Algorithms and Data Structures courses through problem-solving sessions, grading, and mentoring.',
      'Support debugging and code quality reviews to help students adopt best practices.',
      'Coordinate study groups and provide tailored feedback to improve learning outcomes.',
    ],
  },
  {
    role: 'Python Instructor',
    organization: 'JBRSOFT Limited Academy',
    period: 'Jan 2025 — Present',
    location: 'Remote',
    url: 'https://academy.jbrsoft.com',
    bullets: [
      'Teach Python fundamentals, OOP, and AI applications to 15+ students from multiple universities.',
      'Design structured lesson plans that combine theory with real-world projects.',
      'Provide mentorship, code reviews, and project guidance to help learners ship production-ready apps.',
    ],
  },
  {
    role: 'ML/AI Developer',
    organization: 'JBRSOFT Limited',
    period: '2024 — Present',
    location: 'Remote',
    url: 'https://jbrsoft.com',
    bullets: [
      'Develop machine learning and AI solutions for enterprise applications, focusing on NLP and data science.',
      'Collaborate with cross-functional teams to build intelligent systems that solve real-world challenges.',
      'Apply cutting-edge AI techniques to drive innovation and deliver impactful software solutions.',
    ],
  },
  {
    role: 'Programmer',
    organization: 'Incell Bangladesh',
    period: 'Jun 2024 — Present',
    location: 'Remote',
    url: 'https://incell.com.bd/',
    bullets: [
      'Manage full-stack development across product ordering, payment handling, and live chatbot support.',
      'Maintain PHP/MySQL infrastructure and coordinate releases with the development team.',
      'Collaborate with stakeholders to gather requirements and deliver features on schedule.',
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
    logo: '/image.png',
  },
]

export const activities = [
  'Maintaining a robotics and hardware learning journal during a four-month capstone journey.',
  'Leading community study groups on AI fundamentals and prompt engineering.',
  'Building calm technology prototypes to support student well-being.',
]

export const awards = [
  {
    title: 'Capstone Design Best Innovation Award',
    project: 'Physical AI Assistant',
    organization: 'Sejong University',
    department: 'Department of Computer Science and Engineering',
    date: 'December 12, 2025',
    description:
      'Awarded for outstanding excellence and superior performance in the 2025-2 Capstone Design course. Recognized for innovative work on a physical AI assistant robot with real-time vision, intelligent mobility, and human-robot interaction capabilities.',
    teamMembers: [
      'Samijonov Boymirzo',
      'Toshtemirov Dilmurod',
      'Sabera Banu',
      'Shodmonova Nilyufar',
      'Bakhtiyor Ganijon',
    ],
    image: '/awards.jpg',
    imageAlt: 'Capstone Design Best Innovation Award ceremony',
    professors: [
      { name: 'Abolghasem Sadeghi-Niaraki, Ph.D.', role: 'Associate Professor' },
      { name: 'Rajendra Dhakal, Ph.D.', role: 'Associate Professor' },
    ],
  },
]

export const hackathons = [
  {
    event: 'Trae Hackathon',
    project: 'ApplySmart',
    description:
      'Built a multi-agent AI system that acts as a personal scholarship advisor. It analyzes student profiles (GitHub, CV, goals) to match, rank, and block unsuitable applications using a "Critic Agent" for smarter decision-making.',
    tech: ['FastAPI', 'Multi-agent Systems', 'LLM Reasoning'],
    date: 'March 2026',
    status: 'Featured Project',
  },
  {
    event: 'Gemini 3 Seoul Hackathon',
    organization: 'Google DeepMind & Cerebral Valley',
    description:
      'Selected as one of 250 participants from 1,000+ applicants to build AI solutions using Google’s Gemini models. Focused on high-speed prototyping and leveraging state-of-the-art vision and language capabilities.',
    tech: ['Gemini API', 'Google Cloud', 'AI Prototyping'],
    date: 'February 2026',
    status: 'Selected Participant',
  },
  {
    event: 'World Build Korea Hackathon',
    organization: 'Worldcoin (Tools for Humanity)',
    project: 'INHUMAN',
    description:
      'Explored human-centric digital systems using World ID to distinguish real humans from bots. Built "INHUMAN" to enable human-only access to digital reviews and rewards while ensuring user privacy.',
    tech: ['World ID', 'Web3', 'Authentication'],
    date: '2025',
    status: 'Innovation Track',
  },
  {
    event: 'ITX Healthcare Hackathon',
    project: 'Medi Port AI',
    description:
      'Prototyped a patient-centric medical assistant designed to simplify complex medical jargon and improve access to healthcare information for the general public.',
    tech: ['NLP', 'Healthcare AI', 'UI/UX'],
    date: '2024',
    status: 'Prototype Phase',
  },
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
