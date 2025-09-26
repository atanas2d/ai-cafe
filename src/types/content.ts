export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  source: string;
  url: string;
  publishedAt: string;
  tags: string[];
}

export interface ResourceLink {
  label: string;
  description?: string;
  url: string;
  icon?: string;
  external?: boolean;
}

export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  links: ResourceLink[];
}

export interface LearningTrack {
  id: string;
  title: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  focusArea: string;
  outline: string[];
  resources: ResourceLink[];
}

export interface AnimationPreset {
  id: string;
  name: string;
  description: string;
  gradient: string[];
  accent: string;
  backdrop?: string;
}

export interface PartnerLogo {
  id: string;
  name: string;
  caption: string;
  image: string;
  url: string;
  type: 'partner' | 'tool';
  spanColumns?: boolean;
}

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  icon?: string;
  status?: 'planned' | 'completed' | 'in-progress';
}
