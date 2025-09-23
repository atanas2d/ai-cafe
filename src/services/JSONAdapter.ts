/**
 * JSON Adapter for Database Service
 * Reads data from local JSON files for Phase 1 implementation
 */

import type { 
  DatabaseAdapter, 
  Meeting, 
  Tool, 
  MeetingFilters, 
  MeetingSearchResult, 
  ToolFilters, 
  ToolSearchResult,
  MeetingsResponse,
  ToolsResponse
} from '@/types';

export class JSONAdapter implements DatabaseAdapter {
  private cache: Map<string, any> = new Map();
  private static readonly CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

  constructor(private baseUrl: string = '/src/data') {}

  /**
   * Fetch data from JSON files with caching
   */
  private async fetchJSON<T>(filename: string): Promise<T> {
    const cacheKey = filename;
    const cached = this.cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < JSONAdapter.CACHE_DURATION) {
      return cached.data;
    }

    try {
      const response = await fetch(`${this.baseUrl}/${filename}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${filename}: ${response.statusText}`);
      }
      
      const data = await response.json();
      this.cache.set(cacheKey, {
        data,
        timestamp: Date.now()
      });
      
      return data;
    } catch (error) {
      console.error(`Error fetching ${filename}:`, error);
      throw error;
    }
  }

  /**
   * Get all meetings
   */
  async getMeetings(): Promise<Meeting[]> {
    const response = await this.fetchJSON<MeetingsResponse>('meetings.json');
    return response.meetings;
  }

  /**
   * Get all tools
   */
  async getTools(): Promise<Tool[]> {
    const response = await this.fetchJSON<ToolsResponse>('tools.json');
    return response.tools;
  }

  /**
   * Get meeting by ID
   */
  async getMeetingById(id: string): Promise<Meeting | null> {
    const meetings = await this.getMeetings();
    return meetings.find(meeting => meeting.id === id) || null;
  }

  /**
   * Get tool by ID
   */
  async getToolById(id: string): Promise<Tool | null> {
    const tools = await this.getTools();
    return tools.find(tool => tool.id === id) || null;
  }

  /**
   * Search meetings with filters
   */
  async searchMeetings(query: string, filters?: MeetingFilters): Promise<MeetingSearchResult> {
    const meetings = await this.getMeetings();
    let results = meetings;

    // Apply text search
    if (query.trim()) {
      const normalizedQuery = query.toLowerCase();
      results = results.filter(meeting => 
        meeting.title.toLowerCase().includes(normalizedQuery) ||
        meeting.description.toLowerCase().includes(normalizedQuery) ||
        meeting.topics.some(topic => 
          topic.toLowerCase().includes(normalizedQuery)
        ) ||
        meeting.presenters.some(presenter => 
          presenter.name.toLowerCase().includes(normalizedQuery)
        ) ||
        meeting.tools.some(tool => 
          tool.toLowerCase().includes(normalizedQuery)
        )
      );
    }

    // Apply filters
    if (filters) {
      if (filters.presenter) {
        results = results.filter(meeting =>
          meeting.presenters.some(presenter =>
            presenter.name.toLowerCase().includes(filters.presenter!.toLowerCase())
          )
        );
      }

      if (filters.tool) {
        results = results.filter(meeting =>
          meeting.tools.some(tool =>
            tool.toLowerCase().includes(filters.tool!.toLowerCase())
          )
        );
      }

      if (filters.topic) {
        results = results.filter(meeting =>
          meeting.topics.some(topic =>
            topic.toLowerCase().includes(filters.topic!.toLowerCase())
          )
        );
      }

      if (filters.visibility) {
        results = results.filter(meeting => meeting.visibility === filters.visibility);
      }

      if (filters.dateRange) {
        const startDate = new Date(filters.dateRange.start);
        const endDate = new Date(filters.dateRange.end);
        results = results.filter(meeting => {
          const meetingDate = new Date(meeting.date);
          return meetingDate >= startDate && meetingDate <= endDate;
        });
      }
    }

    return {
      meetings: results,
      total: results.length,
      query,
      filters
    };
  }

  /**
   * Search tools with filters
   */
  async searchTools(query: string, filters?: ToolFilters): Promise<ToolSearchResult> {
    const tools = await this.getTools();
    let results = tools;

    // Apply text search
    if (query.trim()) {
      const normalizedQuery = query.toLowerCase();
      results = results.filter(tool => 
        tool.name.toLowerCase().includes(normalizedQuery) ||
        tool.description.toLowerCase().includes(normalizedQuery) ||
        tool.vendor.toLowerCase().includes(normalizedQuery) ||
        tool.tags.some(tag => 
          tag.toLowerCase().includes(normalizedQuery)
        ) ||
        tool.features.some(feature => 
          feature.name.toLowerCase().includes(normalizedQuery) ||
          feature.description.toLowerCase().includes(normalizedQuery)
        )
      );
    }

    // Apply filters
    if (filters) {
      if (filters.category) {
        results = results.filter(tool => tool.category === filters.category);
      }

      if (filters.vendor) {
        results = results.filter(tool => 
          tool.vendor.toLowerCase().includes(filters.vendor!.toLowerCase())
        );
      }

      if (filters.accessLevel) {
        results = results.filter(tool => tool.accessLevel === filters.accessLevel);
      }

      if (filters.priceModel) {
        results = results.filter(tool => tool.pricing.model === filters.priceModel);
      }

      if (filters.integration) {
        results = results.filter(tool => {
          const integrationKey = filters.integration!;
          return tool.integration[integrationKey] === true;
        });
      }
    }

    return {
      tools: results,
      total: results.length,
      query,
      filters
    };
  }

  /**
   * Clear cache (useful for testing or forced refresh)
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Get cache stats for debugging
   */
  getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }
}