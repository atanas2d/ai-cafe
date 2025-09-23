/**
 * Central Type Exports
 * Main entry point for all type definitions
 */
export type { Meeting, Presenter, Recording, Material, MeetingsResponse, MeetingFilters, MeetingSearchResult } from './Meeting';
export type { Tool, Feature, Pricing, PricingTier, Integration, UseCase, Review, ToolsResponse, ToolFilters, ToolSearchResult } from './Tool';
export { ToolCategory } from './Tool';
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
import type { Meeting, MeetingFilters, MeetingSearchResult } from './Meeting';
import type { Tool, ToolFilters, ToolSearchResult } from './Tool';
export interface DatabaseAdapter {
    getMeetings(): Promise<Meeting[]>;
    getTools(): Promise<Tool[]>;
    getMeetingById(id: string): Promise<Meeting | null>;
    getToolById(id: string): Promise<Tool | null>;
    searchMeetings(query: string, filters?: MeetingFilters): Promise<MeetingSearchResult>;
    searchTools(query: string, filters?: ToolFilters): Promise<ToolSearchResult>;
}
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
export interface PerformanceMetrics {
    firstContentfulPaint: number;
    timeToInteractive: number;
    totalBlockingTime: number;
    cumulativeLayoutShift: number;
    loadTime: number;
}
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
export interface CustomEventDetail<T = any> {
    detail: T;
}
//# sourceMappingURL=index.d.ts.map