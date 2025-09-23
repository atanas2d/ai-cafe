/**
 * AI Cafe Website - Components TypeScript
 * Interactive UI Components and Data Management
 */
import type { Meeting, Tool, TeamMember } from '../../types/index';
declare class MeetingDataManager {
    private meetings;
    getMeetingById(id: string): Meeting | undefined;
    getRecentMeetings(count?: number): Meeting[];
    getAllMeetings(): Meeting[];
    getMeetingsByTool(toolName: string): Meeting[];
    getMeetingsByPresenter(presenterName: string): Meeting[];
}
declare class ToolsDataManager {
    private tools;
    getToolById(id: string): Tool | undefined;
    getToolsByCategory(category: string): Tool[];
    getActiveTools(): Tool[];
    getAllTools(): Tool[];
    getToolCategories(): string[];
}
declare class TeamDataManager {
    private members;
    getMemberById(id: string): TeamMember | undefined;
    getAllMembers(): TeamMember[];
    getPresenters(): TeamMember[];
    getMembersBySpecialty(specialty: string): TeamMember[];
}
declare class InteractiveComponents {
    private filterButtons;
    private searchInput;
    private modalTriggers;
    private modals;
    init(): void;
    private setupMeetingFilters;
    private setupToolFilters;
    private setupSearchFunctionality;
    private setupModalComponents;
}
declare class DataRenderer {
    private static resolveToolLink;
    static renderMeetingCard(meeting: Meeting): string;
    static renderToolCard(tool: Tool): string;
    static renderTeamCard(member: TeamMember): string;
    static formatDate(dateString: string): string;
}
declare const MeetingData: MeetingDataManager;
declare const ToolsData: ToolsDataManager;
declare const TeamData: TeamDataManager;
export { MeetingDataManager, ToolsDataManager, TeamDataManager, InteractiveComponents, DataRenderer, MeetingData, ToolsData, TeamData };
declare global {
    interface Window {
        MeetingData?: MeetingDataManager;
        ToolsData?: ToolsDataManager;
        TeamData?: TeamDataManager;
        DataRenderer?: {
            renderMeetingCard(meeting: unknown): string;
        };
    }
}
//# sourceMappingURL=components.d.ts.map