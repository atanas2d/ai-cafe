/**
 * JSON Adapter for Database Service
 * Reads data from local JSON files for Phase 1 implementation
 */
import type { DatabaseAdapter, Meeting, Tool, MeetingFilters, MeetingSearchResult, ToolFilters, ToolSearchResult } from '@/types';
export declare class JSONAdapter implements DatabaseAdapter {
    private baseUrl;
    private cache;
    private static readonly CACHE_DURATION;
    constructor(baseUrl?: string);
    /**
     * Fetch data from JSON files with caching
     */
    private fetchJSON;
    /**
     * Get all meetings
     */
    getMeetings(): Promise<Meeting[]>;
    /**
     * Get all tools
     */
    getTools(): Promise<Tool[]>;
    /**
     * Get meeting by ID
     */
    getMeetingById(id: string): Promise<Meeting | null>;
    /**
     * Get tool by ID
     */
    getToolById(id: string): Promise<Tool | null>;
    /**
     * Search meetings with filters
     */
    searchMeetings(query: string, filters?: MeetingFilters): Promise<MeetingSearchResult>;
    /**
     * Search tools with filters
     */
    searchTools(query: string, filters?: ToolFilters): Promise<ToolSearchResult>;
    /**
     * Clear cache (useful for testing or forced refresh)
     */
    clearCache(): void;
    /**
     * Get cache stats for debugging
     */
    getCacheStats(): {
        size: number;
        keys: string[];
    };
}
//# sourceMappingURL=JSONAdapter.d.ts.map