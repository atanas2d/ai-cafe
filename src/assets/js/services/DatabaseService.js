/**
 * Database Service
 * Main service for data operations with swappable adapters
 * Based on CLAUDE.md architecture for phased implementation
 */
import { JSONAdapter } from './JSONAdapter';
export class DatabaseService {
    constructor() {
        // Initialize with JSONAdapter for Phase 1
        // In Phase 2/3, this could be SupabaseAdapter or other implementations
        this.adapter = new JSONAdapter();
    }
    /**
     * Singleton pattern for global access
     */
    static getInstance() {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseService();
        }
        return DatabaseService.instance;
    }
    /**
     * Switch adapter (for testing or phase transitions)
     */
    setAdapter(adapter) {
        this.adapter = adapter;
    }
    /**
     * Get current adapter type for debugging
     */
    getAdapterType() {
        return this.adapter.constructor.name;
    }
    // Delegate all methods to the current adapter
    async getMeetings() {
        try {
            return await this.adapter.getMeetings();
        }
        catch (error) {
            console.error('DatabaseService: Error fetching meetings:', error);
            throw new Error('Failed to fetch meetings');
        }
    }
    async getTools() {
        try {
            return await this.adapter.getTools();
        }
        catch (error) {
            console.error('DatabaseService: Error fetching tools:', error);
            throw new Error('Failed to fetch tools');
        }
    }
    async getMeetingById(id) {
        try {
            return await this.adapter.getMeetingById(id);
        }
        catch (error) {
            console.error(`DatabaseService: Error fetching meeting ${id}:`, error);
            return null;
        }
    }
    async getToolById(id) {
        try {
            return await this.adapter.getToolById(id);
        }
        catch (error) {
            console.error(`DatabaseService: Error fetching tool ${id}:`, error);
            return null;
        }
    }
    async searchMeetings(query, filters) {
        try {
            return await this.adapter.searchMeetings(query, filters);
        }
        catch (error) {
            console.error('DatabaseService: Error searching meetings:', error);
            return {
                meetings: [],
                total: 0,
                query,
                filters
            };
        }
    }
    async searchTools(query, filters) {
        try {
            return await this.adapter.searchTools(query, filters);
        }
        catch (error) {
            console.error('DatabaseService: Error searching tools:', error);
            return {
                tools: [],
                total: 0,
                query,
                filters
            };
        }
    }
    /**
     * Get recent meetings (for homepage)
     */
    async getRecentMeetings(limit = 3) {
        const meetings = await this.getMeetings();
        return meetings
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, limit);
    }
    /**
     * Get featured tools (for homepage)
     */
    async getFeaturedTools(limit = 6) {
        const tools = await this.getTools();
        return tools
            .filter(tool => tool.accessLevel === 'corporate')
            .slice(0, limit);
    }
    /**
     * Get meetings by presenter
     */
    async getMeetingsByPresenter(presenterName) {
        const meetings = await this.getMeetings();
        return meetings.filter(meeting => meeting.presenters.some(presenter => presenter.name.toLowerCase().includes(presenterName.toLowerCase())));
    }
    /**
     * Get tools by category
     */
    async getToolsByCategory(category) {
        const tools = await this.getTools();
        return tools.filter(tool => tool.category === category);
    }
    /**
     * Get meeting statistics
     */
    async getMeetingStats() {
        const meetings = await this.getMeetings();
        const presenters = new Set();
        const tools = new Set();
        let totalAttendance = 0;
        let meetingsWithAttendance = 0;
        meetings.forEach(meeting => {
            meeting.presenters.forEach(presenter => presenters.add(presenter.id));
            meeting.tools.forEach(tool => tools.add(tool));
            if (meeting.attendeeCount) {
                totalAttendance += meeting.attendeeCount;
                meetingsWithAttendance++;
            }
        });
        return {
            total: meetings.length,
            totalPresenters: presenters.size,
            totalTools: tools.size,
            avgAttendance: meetingsWithAttendance > 0 ? Math.round(totalAttendance / meetingsWithAttendance) : 0
        };
    }
}
// Export singleton instance for global use
export const dbService = DatabaseService.getInstance();
//# sourceMappingURL=DatabaseService.js.map