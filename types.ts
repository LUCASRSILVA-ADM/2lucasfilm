
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI/ML';
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
