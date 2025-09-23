/**
 * Meeting Type Definitions
 * Based on CLAUDE.md data architecture
 */
export interface Meeting {
    id: string;
    meetingNumber: number;
    title: string;
    date: string;
    duration: number;
    description: string;
    presenters: Presenter[];
    topics: string[];
    tools: string[];
    recordings?: Recording[];
    materials?: Material[];
    attendeeCount?: number;
    highlights: string[];
    visibility: 'public' | 'internal' | 'restricted';
    createdAt: string;
    updatedAt: string;
}
export interface Presenter {
    id: string;
    name: string;
    role: string;
    department?: string;
    avatar?: string;
    bio?: string;
}
export interface Recording {
    type: 'video' | 'audio';
    url: string;
    duration: number;
    platform: 'teams' | 'zoom' | 'youtube';
}
export interface Material {
    type: 'slides' | 'document' | 'code' | 'demo';
    title: string;
    url: string;
    size?: number;
}
export interface MeetingsResponse {
    meetings: Meeting[];
    lastUpdated: string;
    version: string;
}
export interface MeetingFilters {
    presenter?: string;
    tool?: string;
    topic?: string;
    visibility?: Meeting['visibility'];
    dateRange?: {
        start: string;
        end: string;
    };
}
export interface MeetingSearchResult {
    meetings: Meeting[];
    total: number;
    query: string;
    filters?: MeetingFilters;
}
//# sourceMappingURL=Meeting.d.ts.map