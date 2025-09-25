/**
 * Central Type Exports
 * Main entry point for all type definitions
 */

// Meeting types
export type {
  Meeting,
  Presenter,
  Recording,
  Material,
  MeetingsResponse,
  MeetingFilters,
  MeetingSearchResult
} from './Meeting';

// Tool types
export type {
  Tool,
  Feature,
  Pricing,
  PricingTier,
  Integration,
  UseCase,
  Review,
  ToolsResponse,
  ToolFilters,
  ToolSearchResult
} from './Tool';

export { ToolCategory } from './Tool';

// Common utility types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// Import types for use in interfaces
import type { Meeting, MeetingFilters, MeetingSearchResult } from './Meeting';
import type { Tool, ToolFilters, ToolSearchResult } from './Tool';

// Database adapter types
export interface DatabaseAdapter {
  getMeetings(): Promise<Meeting[]>;
  getTools(): Promise<Tool[]>;
  getMeetingById(id: string): Promise<Meeting | null>;
  getToolById(id: string): Promise<Tool | null>;
  searchMeetings(query: string, filters?: MeetingFilters): Promise<MeetingSearchResult>;
  searchTools(query: string, filters?: ToolFilters): Promise<ToolSearchResult>;
}

// Team Member type (for backwards compatibility with existing components)
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  description: string;
  contributions: string[];
  meetingsPresented: number[];
  specialties: string[];
  achievements: string[];
}

// Performance Metrics type (for backwards compatibility)
export interface PerformanceMetrics {
  firstContentfulPaint: number;
  timeToInteractive: number;
  totalBlockingTime: number;
  cumulativeLayoutShift: number;
  loadTime: number;
}

// Router types
export interface Route {
  path: string;
  component: string;
  title: string;
  requiresAuth?: boolean;
}

export interface RouterState {
  currentPath: string;
  params: Record<string, string>;
  query: Record<string, string>;
}

// Event types - Custom event interface that extends browser CustomEvent
export interface CustomEventDetail<T = unknown> {
  detail: T;
}
export type { NewsArticle, ResourceCategory, ResourceLink, LearningTrack, AnimationPreset, PartnerLogo, TimelineEvent } from './content';
