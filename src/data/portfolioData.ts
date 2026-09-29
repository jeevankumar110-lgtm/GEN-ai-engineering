import { Project, SkillCategory, HackathonEntry, JourneyStage } from '../types';

export const PERSONAL_INFO = {
  name: 'Jeevan Kumar',
  headline: 'Aspiring AI Engineer',
  tagline: 'B.Tech Student | Python | Web Development | Generative AI',
  intro:
    'I’m a first-year B.Tech student passionate about Artificial Intelligence, Python, Web Development, and Generative AI. I enjoy turning ideas into practical projects and learning through hackathons, ideathons, and hands-on experimentation.',
  positioning:
    'Aspiring AI Engineer | Python Developer | Web Development & Generative AI Enthusiast',
  academicStatus: '1st-year B.Tech Student',
  github: 'https://github.com/jeevankumar110-lgtmand',
  linkedin: 'https://www.linkedin.com/in/jeevan-undefined-16373943b/',
  emailPlaceholder: 'your-email@example.com',
};

export const CURRENTLY_EXPLORING = [
  'Artificial Intelligence',
  'Generative AI',
  'Python Development',
  'Web Development',
  'Problem Solving',
];

export const SKILL_CATEGORIES: Record<string, SkillCategory> = {
  programming: {
    title: 'Programming',
    skills: [
      { name: 'Python', status: 'Learning' },
    ],
  },
  webDevelopment: {
    title: 'Web Development',
    skills: [
      { name: 'HTML', status: 'Learning' },
      { name: 'CSS', status: 'Learning' },
      { name: 'JavaScript', status: 'Beginner' },
    ],
  },
  ai: {
    title: 'AI',
    skills: [
      { name: 'Generative AI', status: 'Exploring' },
      { name: 'Artificial Intelligence fundamentals', status: 'Exploring' },
      { name: 'AI tools and experimentation', status: 'Learning' },
    ],
  },
  other: {
    title: 'Other',
    skills: [
      { name: 'Problem Solving', status: 'Learning' },
      { name: 'Hackathons', status: 'Exploring' },
      { name: 'Ideathons', status: 'Exploring' },
      { name: 'Git/GitHub', status: 'Beginner' },
    ],
  },
};

export const PROJECTS: Project[] = [
  {
    id: 'voter-eligibility',
    title: 'Voter Eligibility Calculator',
    projectType: 'Beginner / Academic Project',
    description:
      'A beginner-friendly application designed to determine voter eligibility based on age-related eligibility criteria. This project helped me practice programming logic, conditional statements, and user input handling.',
    keyConcepts: [
      'Conditional statements (if-elif-else)',
      'User input parsing and type conversion',
      'Input validation & edge case handling',
      'Clean terminal output formatting',
    ],
    techTags: ['Python', 'Conditional Logic', 'User Input', 'CLI'],
    githubUrl: 'https://github.com/jeevankumar110-lgtmand',
  },
  {
    id: 'atm-management',
    title: 'ATM Management System',
    projectType: 'Beginner / Practice Project',
    description:
      'A beginner-level ATM management project created to practice programming fundamentals and simulate common ATM operations such as account interaction and transaction handling.',
    keyConcepts: [
      'Conditional logic',
      'Functions',
      'User input',
      'Transaction logic',
      'Basic application flow',
    ],
    techTags: ['Python', 'Functions', 'Transaction Logic', 'Flow Control'],
    githubUrl: 'https://github.com/jeevankumar110-lgtmand',
  },
  {
    id: 'student-grade-calc',
    title: 'Student Grade Calculator',
    projectType: 'Beginner / Academic Project',
    description:
      'A simple application that calculates student grades based on entered marks. This project helped me practice calculations, conditional statements, input handling, and basic programming logic.',
    keyConcepts: [
      'Arithmetic calculations and percentages',
      'Grade grading scale boundary logic',
      'Input validation for marks',
      'Structured result display',
    ],
    techTags: ['Python', 'Calculations', 'Conditional Statements', 'Input Handling'],
    githubUrl: 'https://github.com/jeevankumar110-lgtmand',
  },
];

export const HACKATHON_ENTRIES: HackathonEntry[] = [
  {
    id: 'hackathon-1',
    eventName: 'Campus Ideathon / Hackathon Event',
    role: 'Participant / Team Member',
    whatIExplored:
      '[Add project or idea details here: e.g. Collaborated with teammates to explore how technology can solve everyday campus challenges and brainstormed functional application workflows.]',
    whatILearned:
      '[Add learning outcome here: e.g. Practiced problem decomposition, collaborative ideation under time constraints, and presenting ideas to peers and mentors.]',
    isPlaceholder: true,
  },
  {
    id: 'hackathon-2',
    eventName: 'Student Innovation Sprint',
    role: 'Participant / Team Member',
    whatIExplored:
      '[Add project or idea details here: e.g. Explored beginner AI and software concepts to address practical student learning and utility needs.]',
    whatILearned:
      '[Add learning outcome here: e.g. Gained hands-on experience structuring application flow, prioritizing essential features, and sharing code with teammates.]',
    isPlaceholder: true,
  },
  {
    id: 'hackathon-3',
    eventName: 'Upcoming Hackathons & Ideathons',
    role: 'Active Registrant / Learner',
    whatIExplored:
      '[Preparing for upcoming collegiate coding competitions and ideathons to apply Python, web development, and generative AI concepts in real-time sprints.]',
    whatILearned:
      '[Building strong teamwork, rapid prototyping skills, and continuous experimentation habits.]',
    isPlaceholder: true,
  },
];

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    stageNumber: 'Stage 1',
    title: 'Programming Foundations',
    description: 'Learning Python and programming fundamentals.',
    status: 'In Progress',
  },
  {
    stageNumber: 'Stage 2',
    title: 'Web Development',
    description: 'Learning how to build websites using HTML, CSS and JavaScript.',
    status: 'In Progress',
  },
  {
    stageNumber: 'Stage 3',
    title: 'Artificial Intelligence',
    description: 'Exploring AI concepts and applications.',
    status: 'In Progress',
  },
  {
    stageNumber: 'Stage 4',
    title: 'Generative AI',
    description: 'Learning about modern Generative AI tools, applications, and workflows.',
    status: 'In Progress',
  },
  {
    stageNumber: 'Stage 5',
    title: 'Future Goal',
    description:
      'Develop stronger skills in AI engineering, machine learning, software development, and real-world AI applications.',
    status: 'Future Goal',
  },
];

export const CURRENT_FOCUS_ITEMS = [
  'Python',
  'Web Development',
  'Generative AI',
  'AI fundamentals',
  'Building practical projects',
  'Improving problem-solving skills',
  'Participating in hackathons and ideathons',
];

export const FUTURE_LEARNING_AREAS = [
  'Machine Learning',
  'Deep Learning',
  'Generative AI',
  'AI Agents',
  'Data Structures & Algorithms',
  'Backend Development',
  'AI-powered applications',
];
