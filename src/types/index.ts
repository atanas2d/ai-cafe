/**
 * AI Cafe Website - Type Definitions
 * TypeScript interfaces and types for the application
 */

// Meeting related types
export interface Meeting {
  id: number;
  date: string;
  title: string;
  participants: string[];
  presenter?: string;
  topics: string[];
  tools_demonstrated: string[];
  resources?: Resource[];
  summary: string;
  highlights?: string[];
}

export interface Resource {
  title: string;
  url: string;
}

// Tool related types
export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  description: string;
  features: string[];
  logo: string;
  website: string;
  documentation: string;
  meetings_featured: number[];
  status: ToolStatus;
}

export type ToolCategory = 
  | 'Language Models'
  | 'Development Tools'
  | 'Corporate AI'
  | 'AI Research'
  | 'Image Generation'
  | 'Automation';

export type ToolStatus = 'active' | 'deprecated' | 'beta';

// Team related types
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  description: string;
  contributions: string[];
  meetings_presented: number[];
  specialties: string[];
  achievements: string[];
}

// News related types
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  category: NewsCategory;
  date: string;
  author?: string;
  tags: string[];
  image?: string;
  url?: string;
  featured?: boolean;
}

export type NewsCategory = 
  | 'research'
  | 'tools'
  | 'industry'
  | 'weekly'
  | 'community';

export interface WeeklyRoundup {
  id: string;
  title: string;
  date: string;
  highlights: string[];
  url?: string;
}

// Learning resources types
export interface LearningPath {
  id: string;
  title: string;
  description: string;
  level: SkillLevel;
  duration: string;
  modules: string[];
  moduleCount: number;
  icon: string;
}

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Guide {
  id: string;
  title: string;
  description: string;
  readTime: string;
  difficulty: SkillLevel;
  tool?: string;
  url: string;
  icon?: string;
}

export interface Template {
  id: string;
  title: string;
  description: string;
  formats: string[];
  downloadUrl: string;
  icon: string;
}

// UI Component types
export interface FilterOption {
  value: string;
  label: string;
  active?: boolean;
}

export interface ModalConfig {
  id: string;
  title: string;
  content: string;
  actions?: ModalAction[];
}

export interface ModalAction {
  label: string;
  action: () => void;
  primary?: boolean;
}

// Utility types
export interface AnimationConfig {
  duration: number;
  easing: string;
  delay?: number;
}

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}

// DOM related types
export interface ElementPosition {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface ScrollPosition {
  x: number;
  y: number;
}

// Event handler types
export type EventHandler<T = Event> = (event: T) => void;
export type AsyncEventHandler<T = Event> = (event: T) => Promise<void>;

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Configuration types
export interface AppConfig {
  apiEndpoint?: string;
  enableAnalytics: boolean;
  enableServiceWorker: boolean;
  debugMode: boolean;
  version: string;
}

export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontFamily: string;
  darkMode: boolean;
}

// Search and filter types
export interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  type: 'meeting' | 'tool' | 'news' | 'resource';
  url: string;
  relevance: number;
}

export interface FilterState {
  category?: string;
  dateRange?: DateRange;
  tags?: string[];
  searchQuery?: string;
}

export interface DateRange {
  start: Date;
  end: Date;
}

// Form types
export interface FormField {
  name: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'checkbox';
  label: string;
  required?: boolean;
  placeholder?: string;
  options?: string[];
  validation?: ValidationRule[];
}

export interface ValidationRule {
  type: 'required' | 'email' | 'minLength' | 'maxLength' | 'pattern';
  value?: any;
  message: string;
}

export interface FormData {
  [key: string]: string | boolean | string[];
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
  external?: boolean;
  children?: NavigationItem[];
}

// Statistics types
export interface Statistic {
  label: string;
  value: string | number;
  trend?: 'up' | 'down' | 'stable';
  change?: string;
}

// Error types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
}

// Accessibility types
export interface A11yConfig {
  announcePageChanges: boolean;
  respectReducedMotion: boolean;
  highContrastMode: boolean;
  focusManagement: boolean;
}

// Analytics types
export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  customDimensions?: Record<string, string>;
}

// Export utility type helpers
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};