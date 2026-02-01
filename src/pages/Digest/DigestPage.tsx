import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Divider } from 'primereact/divider';
import { Button } from 'primereact/button';

interface NewsItem {
    id: string;
    title: string;
    summary: string;
    source: string;
    url: string;
    date: string;
    tags: string[];
    highlight?: boolean;
}

interface TrendItem {
    icon: string;
    title: string;
    description: string;
}

const hotNews: NewsItem[] = [
    {
        id: '1',
        title: 'OpenAI Retiring GPT-4o on February 13',
        summary: 'Only 0.1% of users still choose GPT-4o daily after GPT-5 launch. GPT-4o, GPT-4.1, GPT-4.1 mini, and o4-mini will be retired from ChatGPT.',
        source: 'OpenAI',
        url: 'https://openai.com/index/retiring-gpt-4o-and-older-models/',
        date: 'Jan 30, 2026',
        tags: ['GPT-5', 'Model Lifecycle'],
        highlight: true,
    },
    {
        id: '2',
        title: 'Nvidia-OpenAI $100B Megadeal On Ice',
        summary: 'The partnership announced in September is being rethought. Discussions now focus on a smaller equity investment as part of OpenAI\'s current funding round.',
        source: 'Wall Street Journal',
        url: 'https://www.wsj.com/tech/ai/',
        date: 'Jan 31, 2026',
        tags: ['Nvidia', 'Investment'],
        highlight: true,
    },
    {
        id: '3',
        title: 'Anthropic Expands Cowork with Domain Expert Plugins',
        summary: 'New plugins allow Cowork to act as domain expert in sales, legal, finance, marketing, data analysis, customer support, and more.',
        source: 'Anthropic',
        url: 'https://claude.com/blog/cowork-research-preview',
        date: 'Jan 30, 2026',
        tags: ['Agentic AI', 'Claude'],
    },
    {
        id: '4',
        title: 'Tesla Invests $2B in xAI',
        summary: 'Tesla disclosed investment in Musk\'s xAI to enhance ability to develop and deploy AI products into the physical world at scale.',
        source: 'Tesla',
        url: 'https://ir.tesla.com/',
        date: 'Jan 28, 2026',
        tags: ['Tesla', 'xAI'],
    },
    {
        id: '5',
        title: 'Rabbit Announces Project Cyberdeck',
        summary: 'New portable device for vibe-coding plus r1 OTA update making it a plug-and-play computer controller with OpenClaw integration.',
        source: 'Rabbit',
        url: 'https://rabbit.tech/',
        date: 'Jan 30, 2026',
        tags: ['AI Hardware', 'Agentic AI'],
    },
    {
        id: '6',
        title: 'Google Gemini in Maps - Your Personal Tour Guide',
        summary: 'Ask "What neighborhood am I in?" or "What are top-rated restaurants nearby?" while navigating. Rolling out on iOS and Android.',
        source: 'Google',
        url: 'https://blog.google/',
        date: 'Jan 29, 2026',
        tags: ['Gemini', 'Mobile AI'],
    },
    {
        id: '7',
        title: 'Google AI Plus Plan at $7.99/month',
        summary: 'More affordable AI plan with Gemini 3 Pro, Nano Banana Pro image model, and 200GB storage. Rolling out in 35+ countries.',
        source: 'Google',
        url: 'https://blog.google/',
        date: 'Jan 27, 2026',
        tags: ['Pricing', 'Consumer AI'],
    },
    {
        id: '8',
        title: 'ServiceNow Zurich Release with Enhanced Now Assist',
        summary: 'Latest platform release focuses on AI Experience - the future of enterprise work with AI as the interface.',
        source: 'ServiceNow',
        url: 'https://www.servicenow.com/',
        date: 'Jan 25, 2026',
        tags: ['ServiceNow', 'Now Assist'],
    },
];

const trends: TrendItem[] = [
    {
        icon: 'pi pi-bolt',
        title: 'Agentic AI is the Theme of 2026',
        description: 'From chatbots to AI agents that take action. Anthropic Cowork plugins, OpenClaw, Rabbit controller - all pointing to autonomous AI.',
    },
    {
        icon: 'pi pi-chart-line',
        title: 'Efficiency Over Size',
        description: 'Claude Opus 4.5 brought "dramatically improved token efficiency". The race is now about doing more with less compute.',
    },
    {
        icon: 'pi pi-building',
        title: 'Enterprise AI Maturity',
        description: 'ServiceNow Zurich, Microsoft Copilot Studio templates - enterprise AI is moving from demos to production workflows.',
    },
    {
        icon: 'pi pi-shield',
        title: 'AI Governance Rising',
        description: 'NYC chatbot failures, Google exploring opt-out in UK - governance and responsible AI are becoming critical.',
    },
];

const servicenowUpdates = [
    {
        title: 'Zurich Release Live',
        description: 'Major platform release with significant Now Assist improvements',
        icon: 'pi pi-check-circle',
    },
    {
        title: 'Knowledge 2026',
        description: 'Registration now open - secure your spot',
        icon: 'pi pi-calendar',
    },
    {
        title: 'CRM AI Academy',
        description: 'Designing Agentic Workflows - Feb 5, 2026',
        icon: 'pi pi-graduation-cap',
    },
    {
        title: 'CIS-DF Exam Free',
        description: 'Data Foundations certification now free since Dec 15',
        icon: 'pi pi-gift',
    },
];

export const DigestPage = (): JSX.Element => {
    return (
        <div className="surface-ground">
            {/* Hero Header */}
            <header className="px-4 py-6" style={{ background: 'linear-gradient(135deg, var(--primary-600) 0%, var(--purple-600) 100%)' }}>
                <div className="mx-auto" style={{ maxWidth: '1200px' }}>
                    <div className="flex align-items-center gap-2 mb-2">
                        <i className="pi pi-bolt text-2xl text-white"></i>
                        <span className="text-sm font-semibold uppercase text-white-alpha-80" style={{ letterSpacing: '0.1em' }}>AI Cafe Digest</span>
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-3">February 2026</h1>
                    <p className="text-xl text-white-alpha-90 line-height-3" style={{ maxWidth: '600px' }}>
                        AI Industry Pulse: Latest trends, hot topics, and what matters for your AI Buildathon
                    </p>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        <Tag value="8 News" icon="pi pi-newspaper" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }} />
                        <Tag value="4 Trends" icon="pi pi-chart-line" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }} />
                        <Tag value="ServiceNow Focus" icon="pi pi-server" style={{ background: 'rgba(255,255,255,0.2)', color: 'white' }} />
                    </div>
                </div>
            </header>

            <div className="mx-auto px-4 py-5" style={{ maxWidth: '1200px' }}>
                {/* Hot News Section */}
                <section className="mb-6">
                    <div className="flex align-items-center gap-3 mb-4">
                        <i className="pi pi-fire text-2xl text-orange-500"></i>
                        <h2 className="text-2xl font-bold m-0">Hot This Week</h2>
                        <span className="text-sm text-color-secondary">Jan 27 - Feb 1, 2026</span>
                    </div>

                    {/* Featured News (highlighted) */}
                    <div className="grid mb-4">
                        {hotNews.filter(n => n.highlight).map(news => (
                            <div key={news.id} className="col-12 md:col-6">
                                <Card className="h-full border-2 border-orange-200" style={{ background: 'var(--orange-50)' }}>
                                    <div className="flex flex-column h-full">
                                        <div className="flex align-items-center gap-2 mb-2">
                                            <Tag value="🔥 HOT" severity="warning" />
                                            <span className="text-xs text-color-secondary">{news.source} • {news.date}</span>
                                        </div>
                                        <h3 className="text-lg font-bold mb-2 m-0">{news.title}</h3>
                                        <p className="text-sm text-color-secondary flex-grow-1 line-height-3 m-0">{news.summary}</p>
                                        <div className="flex align-items-center justify-content-between mt-3">
                                            <div className="flex gap-1 flex-wrap">
                                                {news.tags.map(tag => (
                                                    <Tag key={tag} value={tag} severity="info" className="text-xs" />
                                                ))}
                                            </div>
                                            <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-primary font-medium no-underline hover:underline text-sm">
                                                Read more →
                                            </a>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>

                    {/* Regular News List */}
                    <div className="flex flex-column gap-3">
                        {hotNews.filter(n => !n.highlight).map(news => (
                            <div key={news.id} className="surface-card border-round border-1 surface-border p-3 flex gap-3 align-items-start hover:surface-hover">
                                <div className="flex-grow-1" style={{ minWidth: 0 }}>
                                    <div className="flex align-items-center gap-2 mb-1">
                                        <span className="text-xs text-color-secondary">{news.source}</span>
                                        <span className="text-xs text-color-secondary">•</span>
                                        <span className="text-xs text-color-secondary">{news.date}</span>
                                    </div>
                                    <h4 className="font-semibold m-0 mb-1">{news.title}</h4>
                                    <p className="text-sm text-color-secondary m-0 line-height-3 white-space-nowrap overflow-hidden text-overflow-ellipsis" style={{ maxWidth: '100%' }}>{news.summary}</p>
                                </div>
                                <div className="flex flex-column align-items-end gap-2 flex-shrink-0">
                                    <div className="flex gap-1">
                                        {news.tags.slice(0, 2).map(tag => (
                                            <Tag key={tag} value={tag} className="text-xs" />
                                        ))}
                                    </div>
                                    <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-primary text-xs no-underline hover:underline">
                                        Read →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <Divider />

                {/* Trends Section */}
                <section className="mb-6">
                    <div className="flex align-items-center gap-3 mb-4">
                        <i className="pi pi-chart-line text-2xl text-blue-500"></i>
                        <h2 className="text-2xl font-bold m-0">Key Trends</h2>
                    </div>

                    <div className="grid">
                        {trends.map((trend, idx) => (
                            <div key={idx} className="col-12 md:col-6">
                                <Card className="h-full">
                                    <div className="flex gap-3 align-items-start">
                                        <div className="flex-shrink-0 border-circle bg-primary-100 flex align-items-center justify-content-center" style={{ width: '48px', height: '48px' }}>
                                            <i className={`${trend.icon} text-xl text-primary-600`}></i>
                                        </div>
                                        <div className="flex-grow-1" style={{ minWidth: 0 }}>
                                            <h4 className="font-bold m-0 mb-2">{trend.title}</h4>
                                            <p className="text-sm text-color-secondary m-0 line-height-3">{trend.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </section>

                <Divider />

                {/* ServiceNow Section */}
                <section className="mb-6">
                    <div className="flex align-items-center gap-3 mb-4">
                        <i className="pi pi-server text-2xl text-green-500"></i>
                        <h2 className="text-2xl font-bold m-0">ServiceNow & Now Assist</h2>
                        <Tag value="AI Buildathon" severity="success" />
                    </div>

                    <Card style={{ background: 'linear-gradient(135deg, var(--green-50) 0%, var(--blue-50) 100%)' }}>
                        <div className="grid">
                            {servicenowUpdates.map((item, idx) => (
                                <div key={idx} className="col-12 md:col-6 lg:col-3">
                                    <div className="flex align-items-start gap-3">
                                        <i className={`${item.icon} text-xl text-green-600 flex-shrink-0`}></i>
                                        <div style={{ minWidth: 0 }}>
                                            <h5 className="font-semibold m-0 mb-1 text-sm">{item.title}</h5>
                                            <p className="text-xs text-color-secondary m-0 line-height-3">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Divider />

                        <div className="text-center">
                            <h4 className="font-bold m-0 mb-2">🚀 AI Buildathon Opportunity</h4>
                            <p className="text-sm text-color-secondary mb-4">
                                Now Assist AI Skills = Your chance to build custom enterprise AI agents on the Now Platform
                            </p>
                            <Button label="Explore Now Assist" icon="pi pi-external-link" size="small" onClick={() => window.open('https://www.servicenow.com/now-platform/now-assist.html', '_blank')} />
                        </div>
                    </Card>
                </section>

                {/* Discussion Questions */}
                <section>
                    <Card style={{ background: 'var(--purple-50)' }}>
                        <div className="flex align-items-center gap-3 mb-4">
                            <i className="pi pi-comments text-2xl text-purple-500"></i>
                            <h3 className="text-xl font-bold m-0">Discussion Questions</h3>
                        </div>
                        <ol className="m-0 pl-4 line-height-3">
                            <li className="mb-2">Which AI trend will have the biggest impact on your work?</li>
                            <li className="mb-2">How can you leverage Now Assist AI Skills for automation?</li>
                            <li>What agentic workflows would you like to build?</li>
                        </ol>
                    </Card>
                </section>
            </div>

            {/* Footer */}
            <footer className="px-4 py-5 surface-100 text-center">
                <p className="text-sm text-color-secondary m-0">
                    Prepared by NasAI for AI Cafe • February 2026
                </p>
                <p className="text-xs text-color-secondary mt-2 m-0">
                    Sources: The Verge, Anthropic, ServiceNow Community, OpenAI
                </p>
            </footer>
        </div>
    );
};
