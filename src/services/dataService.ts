import meetingsRaw from '@/data/meetings.json';
import toolsRaw from '@/data/tools.json';
import type { Meeting, MeetingsResponse, Tool, ToolsResponse } from '@/types';

const meetings = (meetingsRaw as MeetingsResponse).meetings;
const tools = (toolsRaw as unknown as ToolsResponse).tools;

export const DataService = {
  getMeetings(): Meeting[] {
    return [...meetings].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  },
  getMeeting(id: string): Meeting | undefined {
    return this.getMeetings().find(meeting => meeting.id === id);
  },
  getTools(): Tool[] {
    return [...tools].sort((a, b) => a.name.localeCompare(b.name));
  },
  getTool(id: string): Tool | undefined {
    return this.getTools().find(tool => tool.id === id);
  },
  searchMeetings(term: string): Meeting[] {
    const query = term.trim().toLowerCase();
    if (!query) return this.getMeetings();
    return this.getMeetings().filter(meeting =>
      meeting.title.toLowerCase().includes(query) ||
      meeting.description.toLowerCase().includes(query) ||
      meeting.topics.some(topic => topic.toLowerCase().includes(query)) ||
      meeting.presenters.some(presenter => presenter.name.toLowerCase().includes(query))
    );
  },
  searchTools(term: string): Tool[] {
    const query = term.trim().toLowerCase();
    if (!query) return this.getTools();
    return this.getTools().filter(tool =>
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.tags?.some(tag => tag.toLowerCase().includes(query))
    );
  }
};
