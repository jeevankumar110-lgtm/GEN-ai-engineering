import { Project, SkillCategory, HackathonExperience, TimelineMilestone } from '../types';

export const PERSONAL_INFO = {
  name: 'Jeevan Kumar',
  headline: 'Aspiring AI Engineer',
  tagline: 'B.Tech Student | Python | Web Development | Generative AI',
  summary:
    'I’m a first-year B.Tech student passionate about Artificial Intelligence, Python, Web Development, and Generative AI. I enjoy turning ideas into practical projects and learning through hackathons, ideathons, and hands-on experimentation.',
  positioning:
    'Aspiring AI Engineer | Python Developer | Web Development & Generative AI Enthusiast',
  education: {
    degree: 'B.Tech (Bachelor of Technology)',
    year: '1st Year Student (Class of 2029)',
    major: 'Computer Science & Engineering (Specializing in AI)',
    focus: 'Python, Generative AI, Web Technologies, Problem Solving',
  },
  email: 'jeevankumar110f@gmail.com',
  github: 'https://github.com/jeevankumar',
  linkedin: 'https://linkedin.com/in/jeevankumar',
  portraitImage: '/src/assets/images/hero_student_portrait_1790679382252.jpg',
  hackathonBanner: '/src/assets/images/hackathon_students_sprint_1790679416521.jpg',
  projectStudyImage: '/src/assets/images/project_ai_study_1790679400848.jpg',
};

export const PROJECTS: Project[] = [
  {
    id: 'study-genie',
    title: 'StudyGenie: AI Study Assistant & Notes Summarizer',
    category: 'genai',
    categoryLabel: 'Generative AI',
    shortDescription:
      'An AI-powered web tool that turns dense lecture notes and technical articles into concise summaries, key concepts, and revision flashcards.',
    fullDescription:
      'As a first-year student grappling with heavy syllabus content, I built StudyGenie to solve my own learning challenge. The application takes raw text or uploaded notes, connects with Google Gemini API, and structures the content into three distinct formats: high-level summaries, core conceptual bullet points, and active-recall flashcards for quick revision before exams.',
    problemSolved:
      'Helps college students parse dense academic notes faster and prepare for semester quizzes with automated recall questions.',
    keyFeatures: [
      'Gemini API integration with customized prompt formatting for structured output',
      'Dual output modes: Quick Review (bullet points) and Flashcard Test mode',
      'Export formatted summaries as markdown or copy with one click',
      'Responsive, clean UI designed for distraction-free reading',
    ],
    techStack: ['Python', 'Google Gemini API', 'Streamlit / Web UI', 'Markdown Parser'],
    whatILearned:
      'Learned API authentication, prompt design for consistent JSON responses, handling API latency and rate limits, and designing tools centered on student user needs.',
    status: 'Completed',
    githubUrl: 'https://github.com/jeevankumar/studygenie-ai',
    demoUrl: 'https://github.com/jeevankumar/studygenie-ai',
    image: '/src/assets/images/project_ai_study_1790679400848.jpg',
  },
  {
    id: 'campus-connect',
    title: 'CampusConnect: Hackathon & Team Formation Portal',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDescription:
      'A responsive web application for college peers to discover upcoming collegiate hackathons, share project ideas, and form cross-skilled teams.',
    fullDescription:
      'Finding teammates with complementary skills for hackathons can be difficult for freshmen. CampusConnect provides an intuitive board where students can list upcoming hackathons, post their skill profiles (e.g., Python, Frontend, Ideation), and find teammates looking for hackathon partners.',
    problemSolved:
      'Reduces the friction of team-building for college hackathons and encourages cross-department student collaborations.',
    keyFeatures: [
      'Interactive hackathon timeline with countdown to registration deadlines',
      'Skill-based teammate directory with filter by programming language',
      'Clean card-based project pitches and discussion boards',
      'Responsive mobile-first layout built with React and Tailwind CSS',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Local Storage'],
    whatILearned:
      'Gained deep experience in state management, component decomposition in React, clean responsive design patterns, and client-side data persistence.',
    status: 'Completed',
    githubUrl: 'https://github.com/jeevankumar/campus-connect-hackathon',
  },
  {
    id: 'py-algo-visualizer',
    title: 'PyAlgo: Interactive DSA Logic Visualizer',
    category: 'python',
    categoryLabel: 'Python & Algorithms',
    shortDescription:
      'A beginner-friendly visual simulator demonstrating the step-by-step execution of fundamental sorting algorithms and search methods.',
    fullDescription:
      'To build a solid understanding of Data Structures and Algorithms during my 1st year, I wrote Python scripts that simulate algorithms such as Binary Search, Bubble Sort, Insertion Sort, and Merge Sort, coupled with an interactive web UI that steps through comparisons in real time.',
    problemSolved:
      'Bridges the gap between theoretical algorithm descriptions in textbooks and visual understanding of time complexity and swaps.',
    keyFeatures: [
      'Step-by-step playback with pause, resume, and speed controls',
      'Color-coded array pointers highlighting comparisons and swaps',
      'Real-time comparison counter and execution step statistics',
      'Code reference tabs showing the exact Python implementation',
    ],
    techStack: ['Python', 'JavaScript', 'HTML5 Canvas', 'CSS Grid', 'Tailwind CSS'],
    whatILearned:
      'Solidified my grasp of algorithmic time/space complexities, recursion vs iteration, and event-driven browser visualization loops.',
    status: 'Completed',
    githubUrl: 'https://github.com/jeevankumar/py-algo-visualizer',
  },
  {
    id: 'prompt-lab',
    title: 'PromptLab: Generative AI Prompt Experimenter',
    category: 'genai',
    categoryLabel: 'Generative AI',
    shortDescription:
      'A hands-on testing environment to compare system instructions, temperature settings, and response quality across generative AI models.',
    fullDescription:
      'PromptLab was developed to demystify how prompt parameters affect model behavior. Users can test side-by-side responses with different system prompts, zero-shot vs few-shot examples, and observe token counts and formatting variations.',
    problemSolved:
      'Provides a sandbox for beginners to learn the nuances of prompt engineering and structured LLM outputs without complicated setups.',
    keyFeatures: [
      'Side-by-side prompt output comparison view',
      'Adjustable parameters: temperature, top-k, system instructions',
      'Library of student-oriented prompt templates (explaining code, summarizing math, writing test cases)',
      'Prompt history logging to review iterative prompt tweaks',
    ],
    techStack: ['Python', 'Google Gemini API', 'Tailwind CSS', 'Vite'],
    whatILearned:
      'Deepened my intuition for LLM behavior, how temperature shapes creativity vs determinism, and best practices for few-shot prompt structuring.',
    status: 'In Progress',
    githubUrl: 'https://github.com/jeevankumar/prompt-lab',
  },
  {
    id: 'portfolio-platform',
    title: 'Personal Developer Portfolio & Learning Hub',
    category: 'web',
    categoryLabel: 'Web Development',
    shortDescription:
      'A minimal, high-performance portfolio website built with React and Tailwind CSS to document my B.Tech engineering journey.',
    fullDescription:
      'Built from the ground up to showcase my skills honestly as a college fresher. Designed following strict professional typography, zero-pill discipline, accessible contrast, and smooth micro-interactions.',
    problemSolved:
      'Serves as my centralized digital identity for mentors, hackathon organizers, and future recruiters to follow my progression.',
    keyFeatures: [
      'Strict adherence to modern typography and whitespace standards',
      'Interactive project modal explorer with complete learning post-mortems',
      'Responsive design supporting mobile, tablet, and desktop viewports',
      'Interactive contact section with copy utilities and mailto shortcuts',
    ],
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Vite'],
    whatILearned:
      'Mastered modern frontend conventions, accessible semantic HTML, WCAG contrast standards, and responsive mobile architecture.',
    status: 'Completed',
    githubUrl: 'https://github.com/jeevankumar/portfolio-web',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'python',
    title: 'Python Development',
    description: 'My primary programming language for problem solving, scripting, and AI exploration.',
    skills: [
      {
        name: 'Core Python & Syntax',
        level: 'Active Foundation',
        context: 'Data structures (lists, dicts, tuples, sets), control flow, and list comprehensions',
      },
      {
        name: 'Object-Oriented Programming (OOP)',
        level: 'Practicing in Projects',
        context: 'Classes, inheritance, encapsulation, and modular code organization',
      },
      {
        name: 'Scripting & Automation',
        level: 'Hands-on Practice',
        context: 'File handling, CLI scripts, data parsing, and JSON manipulation',
      },
      {
        name: 'Standard Libraries',
        level: 'Foundational',
        context: 'os, sys, math, random, requests, and datetime libraries',
      },
    ],
  },
  {
    id: 'web',
    title: 'Web Development',
    description: 'Building modern, responsive user interfaces and interactive web applications.',
    skills: [
      {
        name: 'HTML5 & Modern Semantic Web',
        level: 'Solid Understanding',
        context: 'Accessible structures, SEO basics, and semantic markup',
      },
      {
        name: 'Tailwind CSS & Styling',
        level: 'Proficient & Frequent',
        context: 'Utility-first styling, flexbox, CSS grid, and responsive breakpoints',
      },
      {
        name: 'JavaScript / TypeScript',
        level: 'Active Learning & Building',
        context: 'ES6+ syntax, DOM manipulation, asynchronous promises, and type safety',
      },
      {
        name: 'React & Component Architecture',
        level: 'Hands-on Projects',
        context: 'State, props, hooks (useState, useEffect), and component modularity',
      },
    ],
  },
  {
    id: 'genai',
    title: 'Generative AI & Artificial Intelligence',
    description: 'My primary area of curiosity and future engineering aspirations.',
    skills: [
      {
        name: 'Google Gemini API',
        level: 'Actively Building Prototypes',
        context: 'SDK implementation, API key integration, text generation, and system instructions',
      },
      {
        name: 'Prompt Engineering',
        level: 'Continuous Experimentation',
        context: 'Few-shot prompting, chain-of-thought instructions, and JSON response structuring',
      },
      {
        name: 'LLM Concepts & Foundations',
        level: 'Conceptual Study',
        context: 'Tokens, embeddings, context windows, temperature, and hallucinations',
      },
      {
        name: 'AI Tool Integration',
        level: 'Experimenting',
        context: 'Building student utilities, summaries, and conversational prototypes',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    description: 'Software and developer tooling used daily in coursework and personal builds.',
    skills: [
      {
        name: 'Git & GitHub',
        level: 'Daily Use',
        context: 'Version control, branching, committing, pull requests, and repository management',
      },
      {
        name: 'VS Code & Extensions',
        level: 'Primary Environment',
        context: 'Debugger configuration, linting, formatting, and workspace management',
      },
      {
        name: 'Google Colab & Jupyter',
        level: 'Coursework & Experiments',
        context: 'Interactive Python coding, data visualization, and quick script testing',
      },
      {
        name: 'Terminal & Command Line',
        level: 'Foundational',
        context: 'Bash commands, virtual environments (venv), and package management (pip, npm)',
      },
    ],
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving & Academics',
    description: 'Building core engineering logic through coursework and self-paced practice.',
    skills: [
      {
        name: 'Data Structures Fundamentals',
        level: '1st-Year Curriculum & Practice',
        context: 'Arrays, strings, stacks, queues, and linked lists fundamentals',
      },
      {
        name: 'Algorithmic Thinking',
        level: 'Continuous Practice',
        context: 'Searching algorithms (Linear, Binary), basic sorting algorithms, and recursion',
      },
      {
        name: 'Hackathon Ideation',
        level: 'Active Participant',
        context: 'Translating real-world campus problems into viable technical MVPs',
      },
      {
        name: 'Team Collaboration',
        level: 'Student Teams',
        context: 'Communicating technical roles, task breakdown, and sprint execution',
      },
    ],
  },
];

export const HACKATHONS: HackathonExperience[] = [
  {
    id: 'sih-internal-2026',
    title: 'Smart India Hackathon (SIH) - College Internal Ideathon',
    event: 'College Innovation Chapter',
    date: 'February 2026',
    role: 'Problem Solver & Team Presenter',
    achievement: 'Selected in Top 10 Freshman Teams',
    description:
      'Collaborated with a four-member team to ideate and prototype an AI-assisted smart campus system designed to help freshmen navigate university resources, library reservations, and lab schedules through conversational natural language.',
    projectTitle: 'SmartCampus Companion',
    techUsed: ['Python', 'Gemini API', 'Figma', 'System Architecture'],
    takeaways: [
      'Learned to articulate problem statements clearly before jumping into code',
      'Experienced fast-paced jury evaluation and answering questions under time pressure',
      'Collaborated closely with peers from different disciplines to build a coherent pitch',
    ],
  },
  {
    id: 'genai-sprint-2026',
    title: 'National Student GenAI Hackathon Sprint',
    event: 'Virtual Inter-College Tech Fest',
    date: 'January 2026',
    role: 'Frontend & API Integrator',
    achievement: 'Completed Working MVP & Certificate of Merit',
    description:
      'Built a 36-hour prototype for an AI study notes generator that automatically converts lecture audio transcripts into formatted revision notes and flashcards for undergraduate students.',
    projectTitle: 'StudyGenie Prototype v1',
    techUsed: ['Python', 'Google Gemini SDK', 'Streamlit', 'Git'],
    takeaways: [
      'Gained first-hand experience handling live API rate limits and unexpected token limits during a demo',
      'Learned how to prioritize must-have features over nice-to-haves under strict deadlines',
      'Received constructive feedback from senior developer mentors on prompt design',
    ],
  },
  {
    id: 'freshman-ideathon-2025',
    title: 'Freshman TechFest Ideathon',
    event: 'Department of Computer Science',
    date: 'November 2025',
    role: 'Sole Ideator & Presenter',
    achievement: 'Runner-Up (Freshman Category)',
    description:
      'Pitched an interactive visual platform for high school and first-year university students to learn algorithmic thinking through gamified interactive puzzles rather than dry syntax drills.',
    projectTitle: 'AlgoPlay Platform Concept',
    techUsed: ['Python', 'Logic Trees', 'User Journey Mapping'],
    takeaways: [
      'Discovered the importance of user empathy when designing educational tools',
      'Gained confidence presenting technical concepts to a room of 100+ students and professors',
      'Sparked my decision to build PyAlgo Visualizer as an actual project later',
    ],
  },
];

export const TIMELINE: TimelineMilestone[] = [
  {
    period: '2025 - Mid 2025',
    phase: 'Phase 1: Spark of Curiosity',
    title: 'High School Completion & Tech Discovery',
    description:
      'Discovered passion for computer science and automation. Started self-studying basic Python syntax, writing simple command-line scripts, and clearing competitive college entrance exams.',
    focusPoints: [
      'Mastered Python basics: variables, loops, conditionals, functions',
      'Built small terminal games (Guess the Number, Quiz App)',
      'Secured admission into B.Tech Computer Science program',
    ],
    status: 'Completed',
  },
  {
    period: 'Late 2025 - Early 2026',
    phase: 'Phase 2: Academic Grounding & Projects',
    title: '1st Year B.Tech — Sem 1 Foundations',
    description:
      'Began university coursework in computer programming, calculus, and discrete mathematics. Shifted from casual scripting to disciplined, project-based learning and problem solving.',
    focusPoints: [
      'Practiced core algorithmic concepts and time complexity basics',
      'Adopted Git and GitHub for daily commit tracking',
      'Formed student study groups to practice coding problems',
    ],
    status: 'Completed',
  },
  {
    period: 'Early 2026 - Present',
    phase: 'Phase 3: Active Experimentation & Hackathons',
    title: 'Sem 2 — Generative AI, Web Tech & Hackathons',
    description:
      'Currently active in hackathons, exploring the Google Gemini API, building responsive web apps with React and Tailwind CSS, and creating practical student utilities.',
    focusPoints: [
      'Integrating LLM APIs into real-world applications (StudyGenie, PromptLab)',
      'Participating in campus ideathons and team hackathons',
      'Deepening knowledge of Python OOP and frontend web architecture',
    ],
    status: 'Current Focus',
  },
  {
    period: 'Mid 2026 - 2027',
    phase: 'Phase 4: The Path Forward',
    title: 'Advancing in Machine Learning & Full-Stack AI',
    description:
      'Future roadmap focuses on studying linear algebra and probability for machine learning, learning PyTorch/TensorFlow, and preparing for summer research or internships.',
    focusPoints: [
      'Deep dive into ML mathematics (Linear Algebra, Calculus, Statistics)',
      'Hands-on machine learning projects with Scikit-Learn & PyTorch',
      'Building production-ready full-stack AI applications with database persistence',
    ],
    status: 'Upcoming',
  },
];

export const LEARNING_NOW = [
  {
    topic: 'Google Gemini API Multimodal & Structured Output',
    detail: 'Experimenting with function calling and JSON schema guarantees for clean app integrations.',
    status: 'In Progress',
  },
  {
    topic: 'Data Structures in Python',
    detail: 'Implementing linked lists, binary search trees, and recursion patterns.',
    status: 'In Progress',
  },
  {
    topic: 'Modern React & Tailwind CSS',
    detail: 'Refining responsive design, component lifecycles, and accessible UI patterns.',
    status: 'In Progress',
  },
  {
    topic: 'Hackathon Team Collaboration',
    detail: 'Practicing agile task distribution, rapid MVP scoping, and live pitching skills.',
    status: 'Active',
  },
];
