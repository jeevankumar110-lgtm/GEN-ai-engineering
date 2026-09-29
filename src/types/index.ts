export interface Project {
  id: string;
  title: string;
  category: 'genai' | 'python' | 'web';
  categoryLabel: string;
  shortDescription: string;
  fullDescription: string;
  problemSolved: string;
  keyFeatures: string[];
  techStack: string[];
  whatILearned: string;
  status: 'Completed' | 'In Progress' | 'Prototype';
  githubUrl: string;
  demoUrl?: string;
  image?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Proficient in Basics", "Active Learning & Building", "Conceptual & Exploring"
    context: string;
  }[];
}

export interface HackathonExperience {
  id: string;
  title: string;
  event: string;
  date: string;
  role: string;
  achievement: string;
  description: string;
  takeaways: string[];
  projectTitle: string;
  techUsed: string[];
}

export interface TimelineMilestone {
  period: string;
  phase: string;
  title: string;
  description: string;
  focusPoints: string[];
  status: 'Completed' | 'Current Focus' | 'Upcoming';
}
