Data Management - Claude Code Context
Data Architecture Evolution Strategy
Phase 1: JSON Files (Current Implementation)
Migrate hardcoded HTML content to structured JSON files for immediate improvement in maintainability. Works perfectly with GitHub Pages and static hosting.

Phase 2: Database Integration (Recommended: Supabase)
When ready to add authentication and dynamic content:

Supabase: PostgreSQL with built-in auth, real-time updates, generous free tier
Firebase: Alternative if preferring NoSQL
Cloudflare D1: If using Cloudflare Pages
Database-Ready Architecture
All data operations go through a DatabaseService with swappable adapters:

JSONAdapter for Phase 1 (reads from /data/*.json files)
SupabaseAdapter for Phase 2 (connects to Supabase)
Easy switching via environment variable
Data Models
Meeting Model
typescript
interface Meeting {
  id: string;                    // UUID
  meetingNumber: number;          // Sequential number
  title: string;
  date: Date;
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
  createdAt: Date;
  updatedAt: Date;
}

interface Presenter {
  id: string;
  name: string;
  role: string;
  department?: string;
  avatar?: string;
  bio?: string;
}

interface Recording {
  type: 'video' | 'audio';
  url: string;
  duration: number;
  platform: 'teams' | 'zoom' | 'youtube';
}

interface Material {
  type: 'slides' | 'document' | 'code' | 'demo';
  title: string;
  url: string;
  size?: number;
}
Tool Model
typescript
interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  vendor: string;
  description: string;
  features: Feature[];
  pricing: Pricing;
  integration: Integration;
  useCases: UseCase[];
  alternatives: string[];        // Tool IDs
  rating?: number;
  reviews?: Review[];
  documentation?: string;
  accessLevel: 'public' | 'corporate' | 'beta';
  tags: string[];
  lastUpdated: Date;
}

interface Feature {
  name: string;
  description: string;
  availability: 'free' | 'paid' | 'enterprise';
}

interface Pricing {
  model: 'free' | 'freemium' | 'subscription' | 'enterprise';
  tiers?: PricingTier[];
  corporateLicense?: boolean;
}

interface Integration {
  servicenow: boolean;
  teams: boolean;
  office365: boolean;
  customAPI: boolean;
  webhooks: boolean;
}

interface UseCase {
  title: string;
  description: string;
  department?: string;
  impact: 'low' | 'medium' | 'high';
}

enum ToolCategory {
  LLM = 'Large Language Models',
  CODE = 'Code Generation',
  IMAGE = 'Image Generation',
  AUTOMATION = 'Automation',
  ANALYTICS = 'Analytics',
  WORKFLOW = 'Workflow',
  ENTERPRISE = 'Enterprise AI'
}
News/Update Model
typescript
interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;               // Markdown
  category: NewsCategory;
  source?: string;
  author?: string;
  publishedAt: Date;
  tags: string[];
  featured: boolean;
  relatedTools?: string[];       // Tool IDs
  relatedMeetings?: string[];    // Meeting IDs
  externalLinks?: Link[];
  visibility: 'public' | 'internal';
}

enum NewsCategory {
  RELEASE = 'Product Release',
  UPDATE = 'Tool Update',
  RESEARCH = 'AI Research',
  CORPORATE = 'Corporate News',
  INDUSTRY = 'Industry Trends',
  TUTORIAL = 'Tutorial'
}
JSON File Structure (Phase 1)
/src/data/meetings.json
json
{
  "meetings": [
    {
      "id": "meet-001",
      "meetingNumber": 8,
      "title": "Sapient AI & Google Nano",
      "date": "2025-12-15T14:00:00Z",
      "duration": 60,
      "description": "Exploring Sapient AI architecture breakthrough...",
      "presenters": [
        {
          "id": "pres-001",
          "name": "Nino",
          "role": "AI Specialist",
          "department": "Innovation Lab"
        }
      ],
      "topics": [
        "Sapient AI Architecture",
        "Google Nano Banana",
        "Image Generation"
      ],
      "tools": ["tool-sapient", "tool-gemini"],
      "attendeeCount": 45,
      "highlights": [
        "Live demo of Sapient reasoning",
        "Comparison with GPT-4"
      ],
      "visibility": "internal"
    }
  ]
}
/src/data/tools.json
json
{
  "tools": [
    {
      "id": "tool-gpt",
      "name": "OpenAI GPT",
      "category": "LLM",
      "vendor": "OpenAI",
      "description": "Advanced language model with custom instances...",
      "features": [
        {
          "name": "Custom GPTs",
          "description": "Create specialized AI assistants",
          "availability": "paid"
        }
      ],
      "pricing": {
        "model": "subscription",
        "corporateLicense": true
      },
      "integration": {
        "servicenow": true,
        "teams": true,
        "office365": true,
        "customAPI": true,
        "webhooks": true
      },
      "accessLevel": "corporate"
    }
  ]
}
Data Service Implementation
DataService.ts
typescript
class DataService {
  private static instance: DataService;
  private cache: Map<string, any> = new Map();
  
  // Singleton pattern
  static getInstance(): DataService {
    if (!DataService.instance) {
      DataService.instance = new DataService();
    }
    return DataService.instance;
  }
  
  // Phase 1: Load from JSON files
  async getMeetings(): Promise<Meeting[]> {
    if (this.cache.has('meetings')) {
      return this.cache.get('meetings');
    }
    
    const response = await fetch('/data/meetings.json');
    const data = await response.json();
    this.cache.set('meetings', data.meetings);
    return data.meetings;
  }
  
  // Phase 2: GitHub API integration
  async getMeetingsFromGitHub(): Promise<Meeting[]> {
    const response = await fetch(
      'https://api.github.com/repos/atanas2d/ai-cafe/contents/data/meetings.json',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'Authorization': `token ${process.env.GITHUB_TOKEN}`
        }
      }
    );
    
    const file = await response.json();
    const content = atob(file.content);
    return JSON.parse(content).meetings;
  }
  
  // Phase 3: Database queries
  async getMeetingsFromDB(): Promise<Meeting[]> {
    const response = await fetch('/api/meetings', {
      headers: {
        'Authorization': `Bearer ${AuthService.getToken()}`
      }
    });
    return response.json();
  }
  
  // Unified interface
  async getMeetingsData(): Promise<Meeting[]> {
    const dataSource = process.env.DATA_SOURCE || 'json';
    
    switch (dataSource) {
      case 'github':
        return this.getMeetingsFromGitHub();
      case 'database':
        return this.getMeetingsFromDB();
      default:
        return this.getMeetings();
    }
  }
}
Migration Scripts
migrate-html-to-json.ts
typescript
// Script to extract data from existing HTML files
import { JSDOM } from 'jsdom';
import fs from 'fs/promises';

async function migrateHTMLToJSON() {
  const htmlFiles = await fs.readdir('./src/pages/meetings');
  const meetings: Meeting[] = [];
  
  for (const file of htmlFiles) {
    const html = await fs.readFile(`./src/pages/meetings/${file}`, 'utf-8');
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Extract meeting data from HTML structure
    const meeting: Meeting = {
      id: generateId(),
      title: document.querySelector('h1')?.textContent || '',
      date: new Date(document.querySelector('.date')?.textContent || ''),
      description: document.querySelector('.description')?.textContent || '',
      // ... extract other fields
    };
    
    meetings.push(meeting);
  }
  
  // Save to JSON
  await fs.writeFile(
    './src/data/meetings.json',
    JSON.stringify({ meetings }, null, 2)
  );
}
Admin Panel Data Management
Meeting Editor Component
typescript
const MeetingEditor: FC<{ meeting?: Meeting }> = ({ meeting }) => {
  const [formData, setFormData] = useState<Meeting>(
    meeting || getEmptyMeeting()
  );
  
  const handleSave = async () => {
    if (meeting?.id) {
      await DataService.updateMeeting(meeting.id, formData);
    } else {
      await DataService.createMeeting(formData);
    }
  };
  
  return (
    <form onSubmit={handleSave}>
      {/* Form fields for all meeting properties */}
    </form>
  );
};
Database Options for Phase 3
Option 1: ServiceNow Tables
Custom application tables
Leverage existing infrastructure
Built-in access control
REST API available
Option 2: Supabase
PostgreSQL with real-time subscriptions
Built-in authentication
Row-level security
Good for rapid development
Option 3: Firebase
NoSQL document store
Real-time updates
Google authentication integration
Good for unstructured data
Caching Strategy
typescript
class CacheManager {
  private static CACHE_DURATION = 5 * 60 * 1000; // 5 minutes
  
  static set(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  }
  
  static get(key: string): any | null {
    const cached = localStorage.getItem(key);
    if (!cached) return null;
    
    const { data, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > this.CACHE_DURATION) {
      localStorage.removeItem(key);
      return null;
    }
    
    return data;
  }
}
Search Implementation
typescript
class SearchService {
  static searchMeetings(query: string, meetings: Meeting[]): Meeting[] {
    const normalizedQuery = query.toLowerCase();
    
    return meetings.filter(meeting => 
      meeting.title.toLowerCase().includes(normalizedQuery) ||
      meeting.description.toLowerCase().includes(normalizedQuery) ||
      meeting.topics.some(topic => 
        topic.toLowerCase().includes(normalizedQuery)
      ) ||
      meeting.presenters.some(presenter => 
        presenter.name.toLowerCase().includes(normalizedQuery)
      )
    );
  }
  
  static searchTools(query: string, tools: Tool[]): Tool[] {
    // Similar implementation for tools
  }
}
Data Validation
typescript
import { z } from 'zod';

const MeetingSchema = z.object({
  id: z.string().uuid(),
  meetingNumber: z.number().positive(),
  title: z.string().min(1).max(200),
  date: z.date(),
  duration: z.number().min(15).max(480),
  description: z.string().max(5000),
  presenters: z.array(PresenterSchema).min(1),
  topics: z.array(z.string()).min(1),
  tools: z.array(z.string()),
  visibility: z.enum(['public', 'internal', 'restricted'])
});

function validateMeeting(data: unknown): Meeting {
  return MeetingSchema.parse(data);
}
