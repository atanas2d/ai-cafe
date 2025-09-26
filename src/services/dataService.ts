import { meetings } from '@/data/meetings';
import { tools } from '@/data/tools';
import type { Meeting, Tool } from '@/types';

const DELAY_MS = 500; // Simulate network latency

export const DataService = {
  async getMeetings(): Promise<Meeting[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([...meetings].sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        ));
      }, DELAY_MS);
    });
  },
  async getMeeting(id: string): Promise<Meeting | undefined> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getMeetings().then(meetings => meetings.find(meeting => meeting.id === id)));
      }, DELAY_MS);
    });
  },
  async getTools(): Promise<Tool[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([...tools].sort((a, b) => a.name.localeCompare(b.name)));
      }, DELAY_MS);
    });
  },
  async getTool(id: string): Promise<Tool | undefined> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getTools().then(tools => tools.find(tool => tool.id === id)));
      }, DELAY_MS);
    });
  },
  async searchMeetings(term: string): Promise<Meeting[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        const query = term.trim().toLowerCase();
        if (!query) resolve(this.getMeetings().then(meetings => meetings));
        resolve(this.getMeetings().then(meetings => meetings.filter(meeting =>
          meeting.title.toLowerCase().includes(query) ||
          meeting.description.toLowerCase().includes(query) ||
          meeting.topics.some(topic => topic.toLowerCase().includes(query)) ||
          meeting.presenters.some(presenter => presenter.name.toLowerCase().includes(query))
        )));
      }, DELAY_MS);
    });
  },
  async searchTools(term: string): Promise<Tool[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        const query = term.trim().toLowerCase();
        if (!query) resolve(this.getTools().then(tools => tools));
        resolve(this.getTools().then(tools => tools.filter(tool =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          tool.tags?.some(tag => tag.toLowerCase().includes(query))
        )));
      }, DELAY_MS);
    });
  }
};