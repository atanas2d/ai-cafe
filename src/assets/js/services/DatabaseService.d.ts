/**
 * Database Service
 * Main service for data operations with swappable adapters
 * Based on CLAUDE.md architecture for phased implementation
 */
import type { DatabaseAdapter, Meeting, Tool, MeetingFilters, MeetingSearchResult, ToolFilters, ToolSearchResult } from '@/types';
export declare class DatabaseService {
    private static instance;
    private adapter;
    private constructor();
    /**
     * Singleton pattern for global access
     */
    static getInstance(): DatabaseService;
    /**
     * Switch adapter (for testing or phase transitions)
     */
    setAdapter(adapter: DatabaseAdapter): void;
    /**
     * Get current adapter type for debugging
     */
    getAdapterType(): string;
    getMeetings(): Promise<Meeting[]>;
    getTools(): Promise<Tool[]>;
    getMeetingById(id: string): Promise<Meeting | null>;
    getToolById(id: string): Promise<Tool | null>;
    searchMeetings(query: string, filters?: MeetingFilters): Promise<MeetingSearchResult>;
    searchTools(query: string, filters?: ToolFilters): Promise<ToolSearchResult>;
    /**
     * Get recent meetings (for homepage)
     */
    getRecentMeetings(limit?: number): Promise<Meeting[]>;
    /**
     * Get featured tools (for homepage)
     */
    getFeaturedTools(limit?: number): Promise<Tool[]>;
    /**
     * Get meetings by presenter
     */
    getMeetingsByPresenter(presenterName: string): Promise<Meeting[]>;
    /**
     * Get tools by category
     */
    getToolsByCategory(category: string): Promise<Tool[]>;
    /**
     * Get meeting statistics
     */
    getMeetingStats(): Promise<{
        total: number;
        totalPresenters: number;
        totalTools: number;
        avgAttendance: number;
    }>;
}
export declare const dbService: DatabaseService;
//# sourceMappingURL=DatabaseService.d.ts.map