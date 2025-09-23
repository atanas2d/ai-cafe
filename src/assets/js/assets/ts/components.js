/**
 * AI Cafe Website - Components TypeScript
 * Interactive UI Components and Data Management
 */
import { ToolCategory } from '../../types/index';
// Meeting Data Management
class MeetingDataManager {
    constructor() {
        this.meetings = [
            {
                id: '8',
                date: '2024-09-01',
                title: 'Sapient AI & Google Nano Banana',
                presenters: [{ id: 'atanas-rusev', name: 'Atanas Rusev', role: 'Technical Lead' }],
                meetingNumber: 8,
                description: 'Exploration of breakthrough AI architecture and advanced image generation tools that are revolutionizing creative workflows.',
                duration: 60,
                visibility: 'internal',
                topics: [
                    'Sapient - Self-Evolving Machine Intelligence',
                    'Google Nano Banana image generation',
                    'Hierarchical Reasoning Model (HRM)',
                    'Google Translate live translation features'
                ],
                tools: ['Sapient HRM', 'Google Nano Banana', 'Google Translate'],
                materials: [],
                createdAt: '2024-09-01T00:00:00Z',
                updatedAt: '2024-09-01T00:00:00Z',
                highlights: [
                    'Open source breakthrough in AI architecture',
                    'Adobe integration with Nano Banana',
                    'Revolutionary language learning in Google Translate'
                ]
            },
            {
                id: '7',
                date: '2024-08-25',
                title: 'Eva 2.0 Beta Features',
                presenters: [{ id: 'team', name: 'Team', role: 'Collective' }],
                meetingNumber: 7,
                description: 'Comprehensive overview of Eva 2.0 Beta and its corporate AI functionalities for workplace productivity.',
                duration: 60,
                visibility: 'internal',
                topics: [
                    'Eva 2.0 Beta functionality overview',
                    'Corporate AI integration',
                    'Canvas feature demonstration',
                    'Prompt templates for company use'
                ],
                tools: ['Eva 2.0', 'GPT-4.1', 'Canvas'],
                materials: [],
                highlights: [
                    'File upload capabilities',
                    'Specialized agents beyond Eva',
                    'Company-specific prompt templates',
                    'PDF export functionality'
                ],
                createdAt: '2024-08-25T00:00:00Z',
                updatedAt: '2024-08-25T00:00:00Z'
            },
            {
                id: '6',
                date: '2024-08-18',
                title: 'Gemini vs GPT Tasks Comparison',
                presenters: [{ id: 'team', name: 'Team', role: 'Collective' }],
                meetingNumber: 6,
                description: 'Comparison between Gemini Scheduled Actions and GPT Tasks with practical automation demonstrations.',
                duration: 60,
                visibility: 'internal',
                topics: [
                    'Gemini Scheduled Actions',
                    'GPT Tasks automation',
                    'Auto-generated news website demo',
                    'Weekly content generation'
                ],
                tools: ['Gemini', 'GPT Tasks', 'Automation'],
                materials: [],
                createdAt: '2024-08-18T00:00:00Z',
                updatedAt: '2024-08-18T00:00:00Z',
                highlights: [
                    'Automated weekly news generation',
                    'Scheduled content creation',
                    'Platform comparison insights'
                ]
            },
            {
                id: '5',
                date: '2024-08-11',
                title: 'OpenAI Advanced Features',
                presenters: [{ id: 'team', name: 'Team', role: 'Collective' }],
                meetingNumber: 5,
                description: 'Advanced exploration of OpenAI\'s ecosystem including custom instances, projects, and development tools.',
                duration: 60,
                visibility: 'internal',
                topics: [
                    'Gemini vs OpenAI GPT interface comparison',
                    'GPT Custom Instances',
                    'GPTs store exploration',
                    'OpenAI Projects deep dive',
                    'OpenAI Codex integration',
                    'GPT-5 preview'
                ],
                tools: ['OpenAI GPT', 'Custom GPTs', 'OpenAI Projects', 'Codex'],
                materials: [],
                highlights: [
                    'Private repository integration',
                    'Code quality analysis',
                    'GPT-5 early preview',
                    'Custom GPT development'
                ],
                createdAt: '2024-08-11T00:00:00Z',
                updatedAt: '2024-08-11T00:00:00Z'
            },
            {
                id: '4',
                date: '2024-08-04',
                title: 'Gemini Gems & Dynamic Context',
                presenters: [{ id: 'team', name: 'Team', role: 'Collective' }],
                meetingNumber: 4,
                description: 'Hands-on demonstration of Gemini Gems with dynamic context and automation workflows.',
                duration: 60,
                visibility: 'internal',
                topics: [
                    'Gemini Gems in action',
                    'Dynamic context with Google Drive',
                    'Instruction writing optimization',
                    'n8n automation basics'
                ],
                tools: ['Gemini Gems', 'Google Drive', 'n8n'],
                materials: [],
                highlights: [
                    'Google Drive document integration',
                    'Optimized instruction writing',
                    'Automation workflow introduction'
                ],
                createdAt: '2024-08-04T00:00:00Z',
                updatedAt: '2024-08-04T00:00:00Z'
            },
            {
                id: '3',
                date: '2024-07-28',
                title: 'OpenAI Agent Containers',
                presenters: [{ id: 'nino', name: 'Nino', role: 'AI Enthusiast' }],
                meetingNumber: 3,
                description: 'General discussion focused on OpenAI\'s new agent features and container-based task execution.',
                duration: 60,
                visibility: 'internal',
                topics: [
                    'OpenAI new features discussion',
                    'Agent container creation',
                    'Task execution for simple users',
                    'General AI topic discussion'
                ],
                tools: ['OpenAI Agents', 'Container Technology'],
                materials: [],
                highlights: [
                    'Agent self-container creation',
                    'Simplified user task execution',
                    'Community knowledge sharing'
                ],
                createdAt: '2024-07-28T00:00:00Z',
                updatedAt: '2024-07-28T00:00:00Z'
            },
            {
                id: '2',
                date: '2024-07-21',
                title: 'WindSurf Coding Tool Success',
                presenters: [{ id: 'nino', name: 'Nino', role: 'AI Enthusiast (non-developer)' }],
                meetingNumber: 2,
                description: 'Highly successful demonstration of WindSurf AI-powered coding tool by non-developer colleague Nino.',
                duration: 60,
                visibility: 'internal',
                topics: [
                    'WindSurf coding tool presentation',
                    'AI-powered development workflow',
                    'Non-developer success story'
                ],
                tools: ['WindSurf'],
                materials: [],
                highlights: [
                    'Non-developer creating applications',
                    'AI-assisted coding workflow',
                    'Inspiring community success story'
                ],
                createdAt: '2024-07-21T00:00:00Z',
                updatedAt: '2024-07-21T00:00:00Z'
            },
            {
                id: '1',
                date: '2024-07-14',
                title: 'AI Infrastructure Introduction',
                presenters: [{ id: 'team', name: 'Team', role: 'Collective' }],
                meetingNumber: 1,
                description: 'Foundational meeting introducing core AI platforms and establishing the basis for our learning journey.',
                duration: 60,
                visibility: 'internal',
                topics: [
                    'Gemini infrastructure showcase',
                    'OpenAI GPT infrastructure and basics',
                    'Foundation for AI journey'
                ],
                tools: ['Google Gemini', 'OpenAI GPT'],
                materials: [],
                highlights: [
                    'First AI Cafe meeting',
                    'Platform introductions',
                    'Community foundation'
                ],
                createdAt: '2024-07-14T00:00:00Z',
                updatedAt: '2024-07-14T00:00:00Z'
            }
        ];
    }
    getMeetingById(id) {
        return this.meetings.find(meeting => meeting.id === id);
    }
    getRecentMeetings(count = 3) {
        return this.meetings.slice(0, count);
    }
    getAllMeetings() {
        return [...this.meetings];
    }
    getMeetingsByTool(toolName) {
        return this.meetings.filter(meeting => meeting.tools.some(tool => tool.toLowerCase().includes(toolName.toLowerCase())));
    }
    getMeetingsByPresenter(presenterName) {
        return this.meetings.filter(meeting => meeting.presenters.some(presenter => presenter.name.toLowerCase().includes(presenterName.toLowerCase())));
    }
}
// Tools Data Management
class ToolsDataManager {
    constructor() {
        this.tools = [
            {
                id: 'openai-gpt',
                name: 'OpenAI GPT',
                category: ToolCategory.LLM,
                description: 'Advanced language model with custom instances, projects, and Codex ' +
                    'integration for AI-powered development.',
                vendor: 'OpenAI',
                features: [
                    { name: 'Custom GPTs', description: 'Create custom AI assistants', availability: 'paid' },
                    { name: 'Projects', description: 'Organize work with contexts', availability: 'paid' },
                    { name: 'Codex', description: 'AI-powered code generation', availability: 'paid' },
                    { name: 'API Integration', description: 'Programmatic access', availability: 'paid' }
                ],
                pricing: { model: 'subscription', corporateLicense: true },
                integration: { servicenow: false, teams: true, office365: false, customAPI: true, webhooks: true },
                useCases: [],
                alternatives: [],
                accessLevel: 'corporate',
                tags: ['AI', 'Language Model', 'Code Generation'],
                lastUpdated: '2024-01-01',
                documentation: 'https://platform.openai.com/docs'
            },
            {
                id: 'google-gemini',
                name: 'Google Gemini',
                category: ToolCategory.LLM,
                description: 'Advanced AI model with Gems, scheduled actions, and dynamic context for intelligent automation.',
                vendor: 'Google',
                features: [
                    { name: 'Gems', description: 'Customizable AI assistants', availability: 'free' },
                    { name: 'Scheduled Actions', description: 'Automated task execution', availability: 'free' },
                    { name: 'Dynamic Context', description: 'Context-aware responses', availability: 'free' },
                    { name: 'Google Integration', description: 'Seamless Google Workspace integration', availability: 'free' }
                ],
                pricing: { model: 'freemium', corporateLicense: false },
                integration: { servicenow: false, teams: false, office365: false, customAPI: true, webhooks: false },
                useCases: [],
                alternatives: [],
                accessLevel: 'public',
                tags: ['AI', 'Google', 'Automation'],
                lastUpdated: '2024-01-01',
                documentation: 'https://ai.google.dev/docs'
            },
            {
                id: 'windsurf',
                name: 'WindSurf',
                category: ToolCategory.CODE,
                description: 'AI-powered coding tool that enables non-developers to create sophisticated applications.',
                vendor: 'Codeium',
                features: [
                    { name: 'AI Coding', description: 'AI-powered code generation', availability: 'free' },
                    { name: 'No-Code Development', description: 'Visual development interface', availability: 'free' },
                    { name: 'Rapid Prototyping', description: 'Quick application development', availability: 'free' },
                    { name: 'User-Friendly', description: 'Easy to use for non-developers', availability: 'free' }
                ],
                pricing: { model: 'freemium', corporateLicense: true },
                integration: { servicenow: false, teams: false, office365: false, customAPI: false, webhooks: false },
                useCases: [],
                alternatives: [],
                accessLevel: 'public',
                tags: ['Coding', 'No-Code', 'Development'],
                lastUpdated: '2024-01-01',
                documentation: 'https://docs.windsurf.ai'
            },
            {
                id: 'eva-2',
                name: 'Eva 2.0',
                category: ToolCategory.ENTERPRISE,
                description: 'Trane\'s corporate AI assistant built on GPT-4.1 for workplace productivity and automation.',
                vendor: 'Trane Technologies',
                features: [
                    { name: 'Corporate Integration', description: 'Seamless corporate workflow integration', availability: 'enterprise' },
                    { name: 'GPT-4.1', description: 'Latest AI model capabilities', availability: 'enterprise' },
                    { name: 'Canvas', description: 'Visual collaboration interface', availability: 'enterprise' },
                    { name: 'File Upload', description: 'Document processing capabilities', availability: 'enterprise' }
                ],
                pricing: { model: 'enterprise', corporateLicense: true },
                integration: { servicenow: true, teams: true, office365: true, customAPI: true, webhooks: true },
                useCases: [],
                alternatives: [],
                accessLevel: 'corporate',
                tags: ['Corporate AI', 'Productivity', 'Enterprise'],
                lastUpdated: '2024-01-01',
                documentation: 'https://trane.com/eva/docs'
            },
            {
                id: 'sapient-hrm',
                name: 'Sapient HRM',
                category: ToolCategory.LLM,
                description: 'Revolutionary Hierarchical Reasoning Model representing a breakthrough in AI architecture.',
                vendor: 'Sapient Inc',
                features: [
                    { name: 'Open Source', description: 'Freely available source code', availability: 'free' },
                    { name: 'HRM Architecture', description: 'Hierarchical Reasoning Model', availability: 'free' },
                    { name: 'Self-Evolving', description: 'Continuous learning capabilities', availability: 'free' },
                    { name: 'Research-Grade', description: 'Academic research quality', availability: 'free' }
                ],
                pricing: { model: 'free', corporateLicense: false },
                integration: { servicenow: false, teams: false, office365: false, customAPI: true, webhooks: false },
                useCases: [],
                alternatives: [],
                accessLevel: 'public',
                tags: ['Research', 'Open Source', 'AI Architecture'],
                lastUpdated: '2024-01-01',
                documentation: 'https://huggingface.co/sapientinc/HRM-checkpoint-ARC-2'
            },
            {
                id: 'nano-banana',
                name: 'Google Nano Banana',
                category: ToolCategory.IMAGE,
                description: 'Hyper-efficient image generation tool revolutionizing creative workflows and design processes.',
                vendor: 'Google',
                features: [
                    { name: 'Image Generation', description: 'High-quality image creation', availability: 'free' },
                    { name: 'Adobe Integration', description: 'Seamless Adobe Creative Suite integration', availability: 'paid' },
                    { name: 'Efficient Processing', description: 'Fast image generation', availability: 'free' },
                    { name: 'Creative Tools', description: 'Advanced creative capabilities', availability: 'free' }
                ],
                pricing: { model: 'freemium', corporateLicense: false },
                integration: { servicenow: false, teams: false, office365: false, customAPI: true, webhooks: false },
                useCases: [],
                alternatives: [],
                accessLevel: 'public',
                tags: ['Image Generation', 'Creative', 'Google'],
                lastUpdated: '2024-01-01',
                documentation: 'https://developers.google.com/nano-banana'
            }
        ];
    }
    getToolById(id) {
        return this.tools.find(tool => tool.id === id);
    }
    getToolsByCategory(category) {
        return this.tools.filter(tool => tool.category === category);
    }
    getActiveTools() {
        return this.tools;
    }
    getAllTools() {
        return [...this.tools];
    }
    getToolCategories() {
        return [...new Set(this.tools.map(tool => tool.category))];
    }
}
// Team Data Management
class TeamDataManager {
    constructor() {
        this.members = [
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
    }
    getMemberById(id) {
        return this.members.find(member => member.id === id);
    }
    getAllMembers() {
        return [...this.members];
    }
    getPresenters() {
        return this.members.filter(member => member.meetingsPresented.length > 0);
    }
    getMembersBySpecialty(specialty) {
        return this.members.filter(member => member.specialties.some(s => s.toLowerCase().includes(specialty.toLowerCase())));
    }
}
// Interactive Components
class InteractiveComponents {
    constructor() {
        this.filterButtons = null;
        this.searchInput = null;
        this.modalTriggers = null;
        this.modals = null;
    }
    init() {
        this.setupMeetingFilters();
        this.setupToolFilters();
        this.setupSearchFunctionality();
        this.setupModalComponents();
    }
    setupMeetingFilters() {
        this.filterButtons = document.querySelectorAll('[data-filter-meetings]');
        const meetingItems = document.querySelectorAll('[data-meeting-id]');
        if (this.filterButtons.length === 0)
            return;
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
                    }
                    else {
                        item.style.display = 'none';
                        item.classList.remove('fade-in');
                    }
                });
            });
        });
    }
    setupToolFilters() {
        const categoryButtons = document.querySelectorAll('[data-filter-tools]');
        const toolCards = document.querySelectorAll('[data-tool-category]');
        if (categoryButtons.length === 0)
            return;
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
                    }
                    else {
                        card.style.display = 'none';
                        card.classList.remove('fade-in');
                    }
                });
            });
        });
    }
    setupSearchFunctionality() {
        this.searchInput = document.querySelector('[data-search]');
        if (!this.searchInput)
            return;
        const searchableItems = document.querySelectorAll('[data-searchable]');
        const performSearch = (query) => {
            const searchTerm = query.toLowerCase().trim();
            searchableItems.forEach(item => {
                const searchText = item.dataset.searchable?.toLowerCase() || '';
                const isMatch = searchText.includes(searchTerm);
                if (searchTerm === '' || isMatch) {
                    item.style.display = 'block';
                    item.classList.add('fade-in');
                }
                else {
                    item.style.display = 'none';
                    item.classList.remove('fade-in');
                }
            });
        };
        // Debounced search
        let searchTimeout;
        this.searchInput.addEventListener('input', (e) => {
            const target = e.target;
            clearTimeout(searchTimeout);
            searchTimeout = window.setTimeout(() => {
                performSearch(target.value);
            }, 300);
        });
    }
    setupModalComponents() {
        this.modalTriggers = document.querySelectorAll('[data-modal-trigger]');
        this.modals = document.querySelectorAll('[data-modal]');
        const modalCloses = document.querySelectorAll('[data-modal-close]');
        // Open modals
        this.modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const modalId = trigger.dataset.modalTrigger;
                const modal = document.querySelector(`[data-modal="${modalId}"]`);
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                    // Focus management
                    const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                    if (firstFocusable) {
                        firstFocusable.focus();
                    }
                }
            });
        });
        // Close modals
        modalCloses.forEach(closeBtn => {
            closeBtn.addEventListener('click', () => {
                const modal = closeBtn.closest('[data-modal]');
                if (modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
        // Close on backdrop click
        this.modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
        });
        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                const activeModal = document.querySelector('[data-modal].active');
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
    static resolveToolLink(name) {
        const mapping = {
            'OpenAI GPT': 'https://openai.com',
            'Google Gemini': 'https://ai.google.dev',
            WindSurf: 'https://codeium.com/windsurf',
            'Eva 2.0': 'https://trane.com/eva',
            'Sapient HRM': 'https://huggingface.co/sapientinc/HRM-checkpoint-ARC-2',
            'Google Nano Banana': 'https://ai.google.dev/explore',
            'Google Translate': 'https://blog.google/products/translate/'
        };
        if (mapping[name])
            return mapping[name];
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            if (typeof ToolsData !== 'undefined') {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const tool = ToolsData.getAllTools().find((t) => t.name.toLowerCase().includes(name.toLowerCase()));
                if (tool && tool.website)
                    return tool.website;
            }
        }
        catch {
            // ignore lookup errors
        }
        return 'src/pages/tools/';
    }
    static renderMeetingCard(meeting) {
        const toolTags = meeting.tools
            .map(tool => {
            const href = this.resolveToolLink(tool);
            return `<a class="tag" href="${href}" target="_blank" rel="noopener noreferrer">${tool}</a>`;
        })
            .join('');
        const presenterInfo = meeting.presenters.length > 0
            ? `<p class="timeline-presenter">Presented by: ${meeting.presenters.map(p => p.name).join(', ')}</p>`
            : '';
        return `
      <article class="timeline-item" data-meeting-id="${meeting.id}" 
               data-searchable="${meeting.title} ${meeting.description} ${meeting.topics.join(' ')}">
        <div class="timeline-marker">
          <span class="timeline-number">${meeting.meetingNumber}</span>
        </div>
        <div class="timeline-content">
          <h3 class="timeline-title">${meeting.title}</h3>
          <p class="timeline-date">${this.formatDate(meeting.date)}</p>
          <p class="timeline-description">${meeting.description}</p>
          <div class="timeline-tags">
            ${toolTags}
          </div>
          ${presenterInfo}
        </div>
      </article>
    `;
    }
    static renderToolCard(tool) {
        const features = tool.features
            .map(feature => `<span class="feature">${feature.name}</span>`)
            .join('');
        const featureText = tool.features.map(f => f.name).join(' ');
        return `
      <article class="tool-card" data-tool-category="${tool.category}" 
               data-searchable="${tool.name} ${tool.description} ${featureText}">
        <div class="tool-icon">
          <span class="tool-icon-placeholder">${tool.name.charAt(0)}</span>
        </div>
        <h3 class="tool-title">${tool.name}</h3>
        <p class="tool-description">${tool.description}</p>
        <div class="tool-features">
          ${features}
        </div>
        <a href="${tool.documentation}" class="tool-link" target="_blank" rel="noopener noreferrer">Learn More</a>
      </article>
    `;
    }
    static renderTeamCard(member) {
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
    static formatDate(dateString) {
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
export { MeetingDataManager, ToolsDataManager, TeamDataManager, InteractiveComponents, DataRenderer, MeetingData, ToolsData, TeamData };
if (typeof window !== 'undefined') {
    window.MeetingData = MeetingData;
    window.ToolsData = ToolsData;
    window.TeamData = TeamData;
}
//# sourceMappingURL=components.js.map