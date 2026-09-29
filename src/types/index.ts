export interface Project {
  id: string;
  title: string;
  projectType: string;
  description: string;
  keyConcepts: string[];
  techTags: string[];
  githubUrl: string;
  demoUrl?: string;
  demoType?: 'interactive' | 'link';
}

export interface SkillItem {
  name: string;
  status: 'Beginner' | 'Learning' | 'Exploring';
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface HackathonEntry {
  id: string;
  eventName: string;
  role: string;
  whatIExplored: string;
  whatILearned: string;
  isPlaceholder?: boolean;
}

export interface JourneyStage {
  stageNumber: string;
  title: string;
  description: string;
  status: 'Completed' | 'In Progress' | 'Future Goal';
}
