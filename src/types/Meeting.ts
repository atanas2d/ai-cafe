/**
 * Meeting Type Definitions
 * Based on CLAUDE.md data architecture
 */

export interface Meeting {
  id: string;                    // UUID format: meet-001
  meetingNumber: number;          // Sequential number
  title: string;
  date: string;                   // ISO date string
  duration: number;               // Minutes
  description: string;
  presenters: Presenter[];
  topics: string[];
  tools: string[];                // Tool IDs referenced
  recordings?: Recording[];
  materials?: Material[];
  attendeeCount?: number;
  highlights: string[];
  visibility: 'public' | 'internal' | 'restricted';
  createdAt: string;              // ISO date string
  updatedAt: string;              // ISO date string
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

// API Response types
export interface MeetingsResponse {
  meetings: Meeting[];
  lastUpdated: string;
  version: string;
}

// Filter and search types
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