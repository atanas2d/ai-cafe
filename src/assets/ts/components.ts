/**
 * AI Cafe Website - Components TypeScript
 * Interactive UI Components and Data Management
 */

import type {
  Meeting,
  Tool,
  TeamMember
} from '../../types/index';

// Meeting Data Management
class MeetingDataManager {
  private meetings: Meeting[] = [
    {
      id: 8,
      date: '2024-09-01',
      title: 'Sapient AI & Google Nano Banana',
      participants: ['Atanas Rusev', 'Team'],
      presenter: 'Atanas Rusev',
      topics: [
        'Sapient - Self-Evolving Machine Intelligence',
        'Google Nano Banana image generation',
        'Hierarchical Reasoning Model (HRM)',
        'Google Translate live translation features'
      ],
      toolsDemonstrated: ['Sapient HRM', 'Google Nano Banana', 'Google Translate'],
      resources: [
        {
          title: 'Sapient HRM Model on Hugging Face',
          url: 'https://huggingface.co/sapientinc/HRM-checkpoint-ARC-2'
        },
        {
          title: 'Understanding HRM Architecture - YouTube',
          url: 'https://youtube.com/watch?v=example'
        }
      ],
      summary: 'Exploration of breakthrough AI architecture and advanced image generation tools ' +
        'that are revolutionizing creative workflows.',
      highlights: [
        'Open source breakthrough in AI architecture',
        'Adobe integration with Nano Banana',
        'Revolutionary language learning in Google Translate'
      ]
    },
    {
      id: 7,
      date: '2024-08-25',
      title: 'Eva 2.0 Beta Features',
      participants: ['Team'],
      topics: [
        'Eva 2.0 Beta functionality overview',
        'Corporate AI integration',
        'Canvas feature demonstration',
        'Prompt templates for company use'
      ],
      toolsDemonstrated: ['Eva 2.0', 'GPT-4.1', 'Canvas'],
      summary: 'Comprehensive overview of Eva 2.0 Beta and its corporate AI ' +
        'functionalities for workplace productivity.',
      highlights: [
        'File upload capabilities',
        'Specialized agents beyond Eva',
        'Company-specific prompt templates',
        'PDF export functionality'
      ]
    },
    {
      id: 6,
      date: '2024-08-18',
      title: 'Gemini vs GPT Tasks Comparison',
      participants: ['Team'],
      topics: [
        'Gemini Scheduled Actions',
        'GPT Tasks automation',
        'Auto-generated news website demo',
        'Weekly content generation'
      ],
      toolsDemonstrated: ['Gemini', 'GPT Tasks', 'Automation'],
      resources: [
        {
          title: 'AI Cafe News Site',
          url: 'https://ai-cafe.tiiny.site'
        }
      ],
      summary: 'Comparison between Gemini Scheduled Actions and GPT Tasks with practical automation demonstrations.',
      highlights: [
        'Automated weekly news generation',
        'Scheduled content creation',
        'Platform comparison insights'
      ]
    },
    {
      id: 5,
      date: '2024-08-11',
      title: 'OpenAI Advanced Features',
      participants: ['Team'],
      topics: [
        'Gemini vs OpenAI GPT interface comparison',
        'GPT Custom Instances',
        'GPTs store exploration',
        'OpenAI Projects deep dive',
        'OpenAI Codex integration',
        'GPT-5 preview'
      ],
      toolsDemonstrated: ['OpenAI GPT', 'Custom GPTs', 'OpenAI Projects', 'Codex'],
      summary: 'Advanced exploration of OpenAI\'s ecosystem including custom instances, ' +
        'projects, and development tools.',
      highlights: [
        'Private repository integration',
        'Code quality analysis',
        'GPT-5 early preview',
        'Custom GPT development'
      ]
    },
    {
      id: 4,
      date: '2024-08-04',
      title: 'Gemini Gems & Dynamic Context',
      participants: ['Team'],
      topics: [
        'Gemini Gems in action',
        'Dynamic context with Google Drive',
        'Instruction writing optimization',
        'n8n automation basics'
      ],
      toolsDemonstrated: ['Gemini Gems', 'Google Drive', 'n8n'],
      summary: 'Hands-on demonstration of Gemini Gems with dynamic context and automation workflows.',
      highlights: [
        'Google Drive document integration',
        'Optimized instruction writing',
        'Automation workflow introduction'
      ]
    },
    {
      id: 3,
      date: '2024-07-28',
      title: 'OpenAI Agent Containers',
      participants: ['Nino', 'Team'],
      presenter: 'Nino',
      topics: [
        'OpenAI new features discussion',
        'Agent container creation',
        'Task execution for simple users',
        'General AI topic discussion'
      ],
      toolsDemonstrated: ['OpenAI Agents', 'Container Technology'],
      summary: 'General discussion focused on OpenAI\'s new agent features and container-based task execution.',
      highlights: [
        'Agent self-container creation',
        'Simplified user task execution',
        'Community knowledge sharing'
      ]
    },
    {
      id: 2,
      date: '2024-07-21',
      title: 'WindSurf Coding Tool Success',
      participants: ['Nino', 'Team'],
      presenter: 'Nino (non-developer)',
      topics: [
        'WindSurf coding tool presentation',
        'AI-powered development workflow',
        'Non-developer success story'
      ],
      toolsDemonstrated: ['WindSurf'],
      summary: 'Highly successful demonstration of WindSurf AI-powered coding tool by non-developer colleague Nino.',
      highlights: [
        'Non-developer creating applications',
        'AI-assisted coding workflow',
        'Inspiring community success story'
      ]
    },
    {
      id: 1,
      date: '2024-07-14',
      title: 'AI Infrastructure Introduction',
      participants: ['Team'],
      topics: [
        'Gemini infrastructure showcase',
        'OpenAI GPT infrastructure and basics',
        'Foundation for AI journey'
      ],
      toolsDemonstrated: ['Google Gemini', 'OpenAI GPT'],
      summary: 'Foundational meeting introducing core AI platforms and establishing ' +
        'the basis for our learning journey.',
      highlights: [
        'First AI Cafe meeting',
        'Platform introductions',
        'Community foundation'
      ]
    }
  ];

  getMeetingById(id: number): Meeting | undefined {
    return this.meetings.find(meeting => meeting.id === id);
  }

  getRecentMeetings(count: number = 3): Meeting[] {
    return this.meetings.slice(0, count);
  }

  getAllMeetings(): Meeting[] {
    return [...this.meetings];
  }

  getMeetingsByTool(toolName: string): Meeting[] {
    return this.meetings.filter(meeting =>
      meeting.toolsDemonstrated.some(tool =>
        tool.toLowerCase().includes(toolName.toLowerCase())
      )
    );
  }

  getMeetingsByPresenter(presenterName: string): Meeting[] {
    return this.meetings.filter(meeting =>
      meeting.presenter?.toLowerCase().includes(presenterName.toLowerCase())
    );
  }
}

// Tools Data Management
class ToolsDataManager {
  private tools: Tool[] = [
    {
      id: 'openai-gpt',
      name: 'OpenAI GPT',
      category: 'Language Models',
      description: 'Advanced language model with custom instances, projects, and Codex ' +
        'integration for AI-powered development.',
      features: ['Custom GPTs', 'Projects', 'Codex', 'API Integration'],
      logo: 'src/assets/images/tools/openai-logo.svg',
      website: 'https://openai.com',
      documentation: 'https://platform.openai.com/docs',
      meetingsFeatured: [1, 3, 5],
      status: 'active'
    },
    {
      id: 'google-gemini',
      name: 'Google Gemini',
      category: 'Language Models',
      description: 'Advanced AI model with Gems, scheduled actions, and dynamic context for intelligent automation.',
      features: ['Gems', 'Scheduled Actions', 'Dynamic Context', 'Google Integration'],
      logo: 'src/assets/images/tools/gemini-logo.svg',
      website: 'https://gemini.google.com',
      documentation: 'https://ai.google.dev/docs',
      meetingsFeatured: [1, 4, 6],
      status: 'active'
    },
    {
      id: 'windsurf',
      name: 'WindSurf',
      category: 'Development Tools',
      description: 'AI-powered coding tool that enables non-developers to create sophisticated applications.',
      features: ['AI Coding', 'No-Code Development', 'Rapid Prototyping', 'User-Friendly'],
      logo: 'src/assets/images/tools/windsurf-logo.svg',
      website: 'https://windsurf.ai',
      documentation: 'https://docs.windsurf.ai',
      meetingsFeatured: [2],
      status: 'active'
    },
    {
      id: 'eva-2',
      name: 'Eva 2.0',
      category: 'Corporate AI',
      description: 'Trane\'s corporate AI assistant built on GPT-4.1 for workplace productivity and automation.',
      features: ['Corporate Integration', 'GPT-4.1', 'Canvas', 'File Upload'],
      logo: 'src/assets/images/tools/eva-logo.svg',
      website: 'https://trane.com/eva',
      documentation: 'https://trane.com/eva/docs',
      meetingsFeatured: [7],
      status: 'active'
    },
    {
      id: 'sapient-hrm',
      name: 'Sapient HRM',
      category: 'AI Research',
      description: 'Revolutionary Hierarchical Reasoning Model representing a breakthrough in AI architecture.',
      features: ['Open Source', 'HRM Architecture', 'Self-Evolving', 'Research-Grade'],
      logo: 'src/assets/images/tools/sapient-logo.svg',
      website: 'https://sapientinc.ai',
      documentation: 'https://huggingface.co/sapientinc/HRM-checkpoint-ARC-2',
      meetingsFeatured: [8],
      status: 'active'
    },
    {
      id: 'nano-banana',
      name: 'Google Nano Banana',
      category: 'Image Generation',
      description: 'Hyper-efficient image generation tool revolutionizing creative workflows and design processes.',
      features: ['Image Generation', 'Adobe Integration', 'Efficient Processing', 'Creative Tools'],
      logo: 'src/assets/images/tools/nano-banana-logo.svg',
      website: 'https://google.com/nano-banana',
      documentation: 'https://developers.google.com/nano-banana',
      meetingsFeatured: [8],
      status: 'active'
    }
  ];

  getToolById(id: string): Tool | undefined {
    return this.tools.find(tool => tool.id === id);
  }

  getToolsByCategory(category: string): Tool[] {
    return this.tools.filter(tool => tool.category === category);
  }

  getActiveTools(): Tool[] {
    return this.tools.filter(tool => tool.status === 'active');
  }

  getAllTools(): Tool[] {
    return [...this.tools];
  }

  getToolCategories(): string[] {
    return [...new Set(this.tools.map(tool => tool.category))];
  }
}

// Team Data Management
class TeamDataManager {
  private members: TeamMember[] = [
    {
      id: 'nino',
      name: 'Nino',
      role: 'AI Enthusiast & Presenter',
      avatar: 'src/assets/images/team/nino-avatar.jpg',
      description: 'Non-developer who successfully demonstrated WindSurf coding tool and OpenAI agent ' +
        'capabilities, inspiring the community with practical AI applications.',
      contributions: ['WindSurf Demo', 'OpenAI Agents', 'Community Leadership'],
      meetingsPresented: [2, 3],
      specialties: ['AI Tools', 'Practical Applications', 'Community Engagement'],
      achievements: [
        'First non-developer to successfully demo coding tools',
        'Inspired automation initiatives across the team',
        'Regular presenter and community leader'
      ]
    },
    {
      id: 'plamen-tanev',
      name: 'Plamen Tanev',
      role: 'QA Automation Specialist',
      avatar: 'src/assets/images/team/plamen-avatar.jpg',
      description: 'Inspired by Nino\'s presentations, developed automated testing solutions ' +
        'for websites using AI tools, achieving excellent QA results.',
      contributions: ['QA Automation', 'AI Testing', 'Innovation'],
      meetingsPresented: [],
      specialties: ['Quality Assurance', 'Test Automation', 'AI Integration'],
      achievements: [
        'Developed AI-powered testing frameworks',
        'Achieved significant QA improvements',
        'Bridge between AI tools and practical testing'
      ]
    },
    {
      id: 'atanas-yanev',
      name: 'Atanas Yanev',
      role: 'Technical Lead & AI Researcher',
      avatar: 'src/assets/images/team/atanas-avatar.jpg',
      description: 'Technical expert running local AI models and providing in-depth ' +
        'demonstrations of cutting-edge AI technologies and architectures.',
      contributions: ['Local Models', 'Technical Demos', 'AI Research'],
      meetingsPresented: [8],
      specialties: ['AI Research', 'Local Models', 'Technical Architecture'],
      achievements: [
        'Local AI model implementation expert',
        'Advanced AI architecture researcher',
        'Technical community leader'
      ]
    }
  ];

  getMemberById(id: string): TeamMember | undefined {
    return this.members.find(member => member.id === id);
  }

  getAllMembers(): TeamMember[] {
    return [...this.members];
  }

  getPresenters(): TeamMember[] {
    return this.members.filter(member => member.meetingsPresented.length > 0);
  }

  getMembersBySpecialty(specialty: string): TeamMember[] {
    return this.members.filter(member =>
      member.specialties.some(s =>
        s.toLowerCase().includes(specialty.toLowerCase())
      )
    );
  }
}

// Interactive Components
class InteractiveComponents {
  private filterButtons: NodeListOf<HTMLButtonElement> | null = null;
  private searchInput: HTMLInputElement | null = null;
  private modalTriggers: NodeListOf<HTMLElement> | null = null;
  private modals: NodeListOf<HTMLElement> | null = null;

  init(): void {
    this.setupMeetingFilters();
    this.setupToolFilters();
    this.setupSearchFunctionality();
    this.setupModalComponents();
  }

  private setupMeetingFilters(): void {
    this.filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-filter-meetings]');
    const meetingItems = document.querySelectorAll<HTMLElement>('[data-meeting-id]');

    if (this.filterButtons.length === 0) return;

    this.filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.dataset.filterMeetings;

        // Update active button
        this.filterButtons?.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter meetings
        meetingItems.forEach(item => {
          const meetingId = item.dataset.meetingId;
          if (filterValue === 'all' || meetingId === filterValue) {
            item.style.display = 'block';
            item.classList.add('fade-in');
          } else {
            item.style.display = 'none';
            item.classList.remove('fade-in');
          }
        });
      });
    });
  }

  private setupToolFilters(): void {
    const categoryButtons = document.querySelectorAll<HTMLButtonElement>('[data-filter-tools]');
    const toolCards = document.querySelectorAll<HTMLElement>('[data-tool-category]');

    if (categoryButtons.length === 0) return;

    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.dataset.filterTools;

        // Update active button
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter tools
        toolCards.forEach(card => {
          const category = card.dataset.toolCategory;
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'block';
            card.classList.add('fade-in');
          } else {
            card.style.display = 'none';
            card.classList.remove('fade-in');
          }
        });
      });
    });
  }

  private setupSearchFunctionality(): void {
    this.searchInput = document.querySelector<HTMLInputElement>('[data-search]');
    if (!this.searchInput) return;

    const searchableItems = document.querySelectorAll<HTMLElement>('[data-searchable]');

    const performSearch = (query: string): void => {
      const searchTerm = query.toLowerCase().trim();

      searchableItems.forEach(item => {
        const searchText = item.dataset.searchable?.toLowerCase() || '';
        const isMatch = searchText.includes(searchTerm);

        if (searchTerm === '' || isMatch) {
          item.style.display = 'block';
          item.classList.add('fade-in');
        } else {
          item.style.display = 'none';
          item.classList.remove('fade-in');
        }
      });
    };

    // Debounced search
    let searchTimeout: number;
    this.searchInput.addEventListener('input', (e: Event) => {
      const target = e.target as HTMLInputElement;
      clearTimeout(searchTimeout);
      searchTimeout = window.setTimeout(() => {
        performSearch(target.value);
      }, 300);
    });
  }

  private setupModalComponents(): void {
    this.modalTriggers = document.querySelectorAll<HTMLElement>('[data-modal-trigger]');
    this.modals = document.querySelectorAll<HTMLElement>('[data-modal]');
    const modalCloses = document.querySelectorAll<HTMLElement>('[data-modal-close]');

    // Open modals
    this.modalTriggers.forEach(trigger => {
      trigger.addEventListener('click', (e: Event) => {
        e.preventDefault();
        const modalId = trigger.dataset.modalTrigger;
        const modal = document.querySelector<HTMLElement>(`[data-modal="${modalId}"]`);

        if (modal) {
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';

          // Focus management
          const firstFocusable = modal.querySelector<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (firstFocusable) {
            firstFocusable.focus();
          }
        }
      });
    });

    // Close modals
    modalCloses.forEach(closeBtn => {
      closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest<HTMLElement>('[data-modal]');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close on backdrop click
    this.modals.forEach(modal => {
      modal.addEventListener('click', (e: Event) => {
        if (e.target === modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector<HTMLElement>('[data-modal].active');
        if (activeModal) {
          activeModal.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  }
}

// Data Rendering Functions
class DataRenderer {
  private static resolveToolLink(name: string): string {
    const mapping: Record<string, string> = {
      'OpenAI GPT': 'https://openai.com',
      'Google Gemini': 'https://ai.google.dev',
      WindSurf: 'https://codeium.com/windsurf',
      'Eva 2.0': 'https://trane.com/eva',
      'Sapient HRM': 'https://huggingface.co/sapientinc/HRM-checkpoint-ARC-2',
      'Google Nano Banana': 'https://ai.google.dev/explore',
      'Google Translate': 'https://blog.google/products/translate/'
    };
    if (mapping[name]) return mapping[name];
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (typeof (ToolsData as any) !== 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const tool = (ToolsData as any).getAllTools().find((t: any) =>
          t.name.toLowerCase().includes(name.toLowerCase())
        );
        if (tool && tool.website) return tool.website;
      }
    } catch {
      // ignore lookup errors
    }
    return 'src/pages/tools/';
  }
  static renderMeetingCard(meeting: Meeting): string {
    const toolTags = meeting.toolsDemonstrated
      .map(tool => {
        const href = this.resolveToolLink(tool);
        return `<a class="tag" href="${href}" target="_blank" rel="noopener noreferrer">${tool}</a>`;
      })
      .join('');

    const presenterInfo = meeting.presenter
      ? `<p class="timeline-presenter">Presented by: ${meeting.presenter}</p>`
      : '';

    return `
      <article class="timeline-item" data-meeting-id="${meeting.id}" 
               data-searchable="${meeting.title} ${meeting.summary} ${meeting.topics.join(' ')}">
        <div class="timeline-marker">
          <span class="timeline-number">${meeting.id}</span>
        </div>
        <div class="timeline-content">
          <h3 class="timeline-title">${meeting.title}</h3>
          <p class="timeline-date">${this.formatDate(meeting.date)}</p>
          <p class="timeline-description">${meeting.summary}</p>
          <div class="timeline-tags">
            ${toolTags}
          </div>
          ${presenterInfo}
        </div>
      </article>
    `;
  }

  static renderToolCard(tool: Tool): string {
    const features = tool.features
      .map(feature => `<span class="feature">${feature}</span>`)
      .join('');

    return `
      <article class="tool-card" data-tool-category="${tool.category}" 
               data-searchable="${tool.name} ${tool.description} ${tool.features.join(' ')}">
        <div class="tool-icon">
          <img src="${tool.logo}" alt="${tool.name} Logo" loading="lazy">
        </div>
        <h3 class="tool-title">${tool.name}</h3>
        <p class="tool-description">${tool.description}</p>
        <div class="tool-features">
          ${features}
        </div>
        <a href="${tool.website}" class="tool-link" target="_blank" rel="noopener noreferrer">Learn More</a>
      </article>
    `;
  }

  static renderTeamCard(member: TeamMember): string {
    const contributions = member.contributions
      .map(contribution => `<span class="contribution">${contribution}</span>`)
      .join('');

    return `
      <article class="team-card" data-searchable="${member.name} ${member.role} ${member.description}">
        <div class="team-avatar">
          <img src="${member.avatar}" alt="${member.name}'s Avatar" loading="lazy">
        </div>
        <h3 class="team-name">${member.name}</h3>
        <p class="team-role">${member.role}</p>
        <p class="team-description">${member.description}</p>
        <div class="team-contributions">
          ${contributions}
        </div>
      </article>
    `;
  }

  static formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }
}

// Create singleton instances
const MeetingData = new MeetingDataManager();
const ToolsData = new ToolsDataManager();
const TeamData = new TeamDataManager();

// Initialize components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const interactiveComponents = new InteractiveComponents();
  interactiveComponents.init();
});

// Export for use in other modules
export {
  MeetingDataManager,
  ToolsDataManager,
  TeamDataManager,
  InteractiveComponents,
  DataRenderer,
  MeetingData,
  ToolsData,
  TeamData
};

// Global instances for debugging
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

if (typeof window !== 'undefined') {
  window.MeetingData = MeetingData;
  window.ToolsData = ToolsData;
  window.TeamData = TeamData;
}
