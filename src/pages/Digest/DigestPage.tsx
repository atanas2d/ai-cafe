import { useEffect, useState } from 'react';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';

interface NewsItem {
    id: string;
    title: string;
    summary: string;
    detail?: string;
    source: string;
    url: string;
    date: string;
    tags: string[];
    highlight?: boolean;
    image?: string;
    stat?: { value: string; label: string };
}

interface TrendItem {
    icon: string;
    title: string;
    description: string;
    color: string;
}

const hotNews: NewsItem[] = [
    {
        id: '1',
        title: 'OpenAI Retiring GPT-4o on February 13',
        summary: 'Only 0.1% of users still choose GPT-4o daily after GPT-5 launch.',
        detail: 'GPT-4o, GPT-4.1, GPT-4.1 mini, and o4-mini will be retired from ChatGPT. This marks the end of an era as GPT-5 dominates user preference with its superior reasoning capabilities.',
        source: 'OpenAI',
        url: 'https://openai.com/index/retiring-gpt-4o-and-older-models/',
        date: 'Jan 30, 2026',
        tags: ['GPT-5', 'Model Lifecycle'],
        highlight: true,
        stat: { value: '0.1%', label: 'daily GPT-4o users' },
    },
    {
        id: '2',
        title: 'Nvidia-OpenAI $100B Megadeal On Ice',
        summary: 'The partnership announced in September is being rethought.',
        detail: 'Discussions now focus on a smaller equity investment as part of OpenAI\'s current funding round. The original $100B compute deal may be restructured significantly.',
        source: 'Wall Street Journal',
        url: 'https://www.wsj.com/tech/ai/',
        date: 'Jan 31, 2026',
        tags: ['Nvidia', 'Investment'],
        highlight: true,
        stat: { value: '$100B', label: 'deal reconsidered' },
    },
    {
        id: '3',
        title: 'Anthropic Expands Cowork with Domain Expert Plugins',
        summary: 'New plugins allow Cowork to act as domain expert.',
        detail: 'Sales, legal, finance, marketing, data analysis, customer support - Claude can now specialize in your field with deep contextual knowledge.',
        source: 'Anthropic',
        url: 'https://claude.com/blog/cowork-research-preview',
        date: 'Jan 30, 2026',
        tags: ['Agentic AI', 'Claude'],
    },
    {
        id: '4',
        title: 'Tesla Invests $2B in xAI',
        summary: 'Major investment to deploy AI products at scale.',
        detail: 'Tesla disclosed investment in Musk\'s xAI to enhance ability to develop and deploy AI products into the physical world at scale.',
        source: 'Tesla',
        url: 'https://ir.tesla.com/',
        date: 'Jan 28, 2026',
        tags: ['Tesla', 'xAI'],
        stat: { value: '$2B', label: 'investment' },
    },
    {
        id: '5',
        title: 'Rabbit Announces Project Cyberdeck',
        summary: 'Portable device for vibe-coding plus r1 OTA update.',
        detail: 'Making it a plug-and-play computer controller with OpenClaw integration - the future of AI-assisted development.',
        source: 'Rabbit',
        url: 'https://rabbit.tech/',
        date: 'Jan 30, 2026',
        tags: ['AI Hardware', 'Agentic AI'],
    },
    {
        id: '6',
        title: 'Google Gemini in Maps - Your Personal Tour Guide',
        summary: 'Ask questions while navigating.',
        detail: '"What neighborhood am I in?" or "What are top-rated restaurants nearby?" - AI-powered exploration rolling out on iOS and Android.',
        source: 'Google',
        url: 'https://blog.google/',
        date: 'Jan 29, 2026',
        tags: ['Gemini', 'Mobile AI'],
    },
    {
        id: '7',
        title: 'Google AI Plus Plan at $7.99/month',
        summary: 'More affordable AI plan for consumers.',
        detail: 'Gemini 3 Pro, Nano Banana Pro image model, and 200GB storage. Rolling out in 35+ countries.',
        source: 'Google',
        url: 'https://blog.google/',
        date: 'Jan 27, 2026',
        tags: ['Pricing', 'Consumer AI'],
        stat: { value: '$7.99', label: 'per month' },
    },
    {
        id: '8',
        title: 'ServiceNow Zurich Release with Enhanced Now Assist',
        summary: 'The future of enterprise work with AI as the interface.',
        detail: 'Latest platform release focuses on AI Experience - comprehensive AI Skills for building custom enterprise agents.',
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
        color: 'linear-gradient(135deg, #f59e0b, #d97706)',
    },
    {
        icon: 'pi pi-chart-line',
        title: 'Efficiency Over Size',
        description: 'Claude Opus 4.5 brought "dramatically improved token efficiency". The race is now about doing more with less compute.',
        color: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
    },
    {
        icon: 'pi pi-building',
        title: 'Enterprise AI Maturity',
        description: 'ServiceNow Zurich, Microsoft Copilot Studio templates - enterprise AI is moving from demos to production workflows.',
        color: 'linear-gradient(135deg, #10b981, #059669)',
    },
    {
        icon: 'pi pi-shield',
        title: 'AI Governance Rising',
        description: 'NYC chatbot failures, Google exploring opt-out in UK - governance and responsible AI are becoming critical.',
        color: 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
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
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 5;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                setActiveSlide(prev => Math.min(prev + 1, totalSlides - 1));
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                setActiveSlide(prev => Math.max(prev - 1, 0));
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const scrollToSlide = (index: number) => {
        setActiveSlide(index);
        const slides = document.querySelectorAll('.digest-slide');
        slides[index]?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="digest-page">
            {/* Slide Navigation */}
            <nav className="digest-nav">
                {['Intro', 'Hot News', 'More News', 'Trends', 'ServiceNow'].map((label, idx) => (
                    <button
                        key={idx}
                        className={`digest-nav__dot ${activeSlide === idx ? 'digest-nav__dot--active' : ''}`}
                        onClick={() => scrollToSlide(idx)}
                        aria-label={`Go to ${label}`}
                    >
                        <span className="digest-nav__label">{label}</span>
                    </button>
                ))}
            </nav>

            {/* SLIDE 1: Hero Intro */}
            <section className="digest-slide digest-slide--hero" data-slide={0}>
                <div className="digest-slide__content">
                    <div className="digest-hero__badge">
                        <i className="pi pi-bolt"></i>
                        <span>AI CAFE DIGEST</span>
                    </div>
                    <h1 className="digest-hero__title">February 2026</h1>
                    <p className="digest-hero__subtitle">
                        AI Industry Pulse: Latest trends, hot topics, and what matters for your AI Buildathon
                    </p>
                    <div className="digest-hero__stats">
                        <div className="digest-stat">
                            <span className="digest-stat__value">8</span>
                            <span className="digest-stat__label">News Stories</span>
                        </div>
                        <div className="digest-stat">
                            <span className="digest-stat__value">4</span>
                            <span className="digest-stat__label">Key Trends</span>
                        </div>
                        <div className="digest-stat">
                            <span className="digest-stat__value">1</span>
                            <span className="digest-stat__label">Focus Area</span>
                        </div>
                    </div>
                    <div className="digest-hero__cta">
                        <Button 
                            label="Start Reading" 
                            icon="pi pi-arrow-down" 
                            className="p-button-lg digest-hero__btn"
                            onClick={() => scrollToSlide(1)}
                        />
                    </div>
                    <p className="digest-hero__hint">
                        <i className="pi pi-info-circle"></i>
                        Use arrow keys to navigate slides
                    </p>
                </div>
            </section>

            {/* SLIDE 2: Hot News (Featured) */}
            <section className="digest-slide digest-slide--news" data-slide={1}>
                <div className="digest-slide__content">
                    <header className="digest-section__header">
                        <div className="digest-section__icon" style={{ background: 'linear-gradient(135deg, #f97316, #ea580c)' }}>
                            <i className="pi pi-fire"></i>
                        </div>
                        <div>
                            <h2 className="digest-section__title">Hot This Week</h2>
                            <p className="digest-section__subtitle">Jan 27 - Feb 1, 2026</p>
                        </div>
                    </header>

                    <div className="digest-news-featured">
                        {hotNews.filter(n => n.highlight).map(news => (
                            <article key={news.id} className="digest-news-card digest-news-card--featured">
                                <div className="digest-news-card__header">
                                    <Tag value="🔥 HOT" className="digest-tag--hot" />
                                    <span className="digest-news-card__meta">{news.source} • {news.date}</span>
                                </div>
                                {news.stat && (
                                    <div className="digest-news-card__stat">
                                        <span className="digest-news-card__stat-value">{news.stat.value}</span>
                                        <span className="digest-news-card__stat-label">{news.stat.label}</span>
                                    </div>
                                )}
                                <h3 className="digest-news-card__title">{news.title}</h3>
                                <p className="digest-news-card__detail">{news.detail}</p>
                                <div className="digest-news-card__footer">
                                    <div className="digest-news-card__tags">
                                        {news.tags.map(tag => (
                                            <Tag key={tag} value={tag} className="digest-tag" />
                                        ))}
                                    </div>
                                    <a href={news.url} target="_blank" rel="noopener noreferrer" className="digest-news-card__link">
                                        Read more <i className="pi pi-external-link"></i>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLIDE 3: More News */}
            <section className="digest-slide digest-slide--more-news" data-slide={2}>
                <div className="digest-slide__content">
                    <header className="digest-section__header">
                        <div className="digest-section__icon" style={{ background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)' }}>
                            <i className="pi pi-newspaper"></i>
                        </div>
                        <div>
                            <h2 className="digest-section__title">More Headlines</h2>
                            <p className="digest-section__subtitle">What else is happening in AI</p>
                        </div>
                    </header>

                    <div className="digest-news-grid">
                        {hotNews.filter(n => !n.highlight).map(news => (
                            <article key={news.id} className="digest-news-card">
                                <div className="digest-news-card__header">
                                    <span className="digest-news-card__source">{news.source}</span>
                                    <span className="digest-news-card__date">{news.date}</span>
                                </div>
                                {news.stat && (
                                    <div className="digest-news-card__stat digest-news-card__stat--small">
                                        <span className="digest-news-card__stat-value">{news.stat.value}</span>
                                        <span className="digest-news-card__stat-label">{news.stat.label}</span>
                                    </div>
                                )}
                                <h3 className="digest-news-card__title">{news.title}</h3>
                                <p className="digest-news-card__summary">{news.detail || news.summary}</p>
                                <div className="digest-news-card__footer">
                                    <div className="digest-news-card__tags">
                                        {news.tags.slice(0, 2).map(tag => (
                                            <Tag key={tag} value={tag} className="digest-tag digest-tag--small" />
                                        ))}
                                    </div>
                                    <a href={news.url} target="_blank" rel="noopener noreferrer" className="digest-news-card__link">
                                        <i className="pi pi-external-link"></i>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLIDE 4: Trends */}
            <section className="digest-slide digest-slide--trends" data-slide={3}>
                <div className="digest-slide__content">
                    <header className="digest-section__header">
                        <div className="digest-section__icon" style={{ background: 'linear-gradient(135deg, #8b5cf6, #6d28d9)' }}>
                            <i className="pi pi-chart-line"></i>
                        </div>
                        <div>
                            <h2 className="digest-section__title">Key Trends</h2>
                            <p className="digest-section__subtitle">Patterns shaping the AI landscape</p>
                        </div>
                    </header>

                    <div className="digest-trends-grid">
                        {trends.map((trend, idx) => (
                            <div key={idx} className="digest-trend-card">
                                <div className="digest-trend-card__icon" style={{ background: trend.color }}>
                                    <i className={trend.icon}></i>
                                </div>
                                <h3 className="digest-trend-card__title">{trend.title}</h3>
                                <p className="digest-trend-card__description">{trend.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SLIDE 5: ServiceNow Focus */}
            <section className="digest-slide digest-slide--servicenow" data-slide={4}>
                <div className="digest-slide__content">
                    <header className="digest-section__header">
                        <div className="digest-section__icon" style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}>
                            <i className="pi pi-server"></i>
                        </div>
                        <div>
                            <h2 className="digest-section__title">ServiceNow & Now Assist</h2>
                            <Tag value="AI Buildathon Focus" severity="success" className="ml-2" />
                        </div>
                    </header>

                    <div className="digest-sn-grid">
                        {servicenowUpdates.map((item, idx) => (
                            <div key={idx} className="digest-sn-card">
                                <div className="digest-sn-card__icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="digest-sn-card__content">
                                    <h4 className="digest-sn-card__title">{item.title}</h4>
                                    <p className="digest-sn-card__description">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="digest-sn-cta">
                        <div className="digest-sn-cta__content">
                            <span className="digest-sn-cta__emoji">🚀</span>
                            <h3 className="digest-sn-cta__title">AI Buildathon Opportunity</h3>
                            <p className="digest-sn-cta__description">
                                Now Assist AI Skills = Your chance to build custom enterprise AI agents on the Now Platform
                            </p>
                            <Button 
                                label="Explore Now Assist" 
                                icon="pi pi-external-link" 
                                className="p-button-lg digest-sn-cta__btn"
                                onClick={() => window.open('https://www.servicenow.com/now-platform/now-assist.html', '_blank')} 
                            />
                        </div>
                    </div>

                    <div className="digest-discussion">
                        <h4 className="digest-discussion__title">
                            <i className="pi pi-comments"></i>
                            Discussion Questions
                        </h4>
                        <ol className="digest-discussion__list">
                            <li>Which AI trend will have the biggest impact on your work?</li>
                            <li>How can you leverage Now Assist AI Skills for automation?</li>
                            <li>What agentic workflows would you like to build?</li>
                        </ol>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="digest-footer">
                <p>Prepared by NasAI for AI Cafe • February 2026</p>
                <p className="digest-footer__sources">Sources: The Verge, Anthropic, ServiceNow Community, OpenAI</p>
            </footer>

            <style>{`
                .digest-page {
                    background: var(--surface-ground);
                    min-height: 100vh;
                }

                .digest-nav {
                    position: fixed;
                    right: 2rem;
                    top: 50%;
                    transform: translateY(-50%);
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                    z-index: 100;
                }

                @media (max-width: 768px) {
                    .digest-nav {
                        right: 1rem;
                        gap: 0.5rem;
                    }
                }

                .digest-nav__dot {
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    border: 2px solid rgba(148, 163, 184, 0.5);
                    background: transparent;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .digest-nav__dot:hover {
                    border-color: var(--primary-500);
                    transform: scale(1.2);
                }

                .digest-nav__dot--active {
                    background: var(--primary-500);
                    border-color: var(--primary-500);
                    transform: scale(1.3);
                }

                .digest-nav__label {
                    position: absolute;
                    right: 24px;
                    top: 50%;
                    transform: translateY(-50%);
                    white-space: nowrap;
                    font-size: 0.75rem;
                    font-weight: 600;
                    color: var(--text-color);
                    opacity: 0;
                    transition: opacity 0.2s ease;
                    pointer-events: none;
                    padding: 0.25rem 0.5rem;
                    background: var(--surface-card);
                    border-radius: 0.5rem;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }

                .digest-nav__dot:hover .digest-nav__label {
                    opacity: 1;
                }

                .digest-slide {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4rem 2rem;
                    scroll-snap-align: start;
                }

                @media (max-width: 768px) {
                    .digest-slide {
                        padding: 2rem 1rem;
                        min-height: auto;
                    }
                }

                .digest-slide__content {
                    max-width: 1100px;
                    width: 100%;
                    margin: 0 auto;
                }

                /* HERO SLIDE */
                .digest-slide--hero {
                    background: linear-gradient(135deg, var(--primary-600) 0%, var(--purple-600) 50%, var(--pink-500) 100%);
                    position: relative;
                    overflow: hidden;
                }

                .digest-slide--hero::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent 50%),
                                radial-gradient(circle at 80% 80%, rgba(0,0,0,0.1), transparent 50%);
                    pointer-events: none;
                }

                .digest-slide--hero .digest-slide__content {
                    text-align: center;
                    position: relative;
                    z-index: 1;
                }

                .digest-hero__badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: rgba(255,255,255,0.15);
                    backdrop-filter: blur(10px);
                    padding: 0.5rem 1rem;
                    border-radius: 9999px;
                    font-size: 0.85rem;
                    font-weight: 700;
                    letter-spacing: 0.15em;
                    color: rgba(255,255,255,0.95);
                    margin-bottom: 1.5rem;
                }

                .digest-hero__title {
                    font-size: clamp(3rem, 8vw, 5rem);
                    font-weight: 800;
                    color: white;
                    margin: 0 0 1rem;
                    line-height: 1.1;
                    text-shadow: 0 4px 20px rgba(0,0,0,0.2);
                }

                .digest-hero__subtitle {
                    font-size: clamp(1.1rem, 2.5vw, 1.4rem);
                    color: rgba(255,255,255,0.9);
                    max-width: 600px;
                    margin: 0 auto 2.5rem;
                    line-height: 1.6;
                }

                .digest-hero__stats {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    flex-wrap: wrap;
                    margin-bottom: 2.5rem;
                }

                .digest-stat {
                    background: rgba(255,255,255,0.1);
                    backdrop-filter: blur(10px);
                    padding: 1.25rem 2rem;
                    border-radius: 1.5rem;
                    border: 1px solid rgba(255,255,255,0.2);
                    min-width: 140px;
                }

                .digest-stat__value {
                    display: block;
                    font-size: 2.5rem;
                    font-weight: 800;
                    color: white;
                }

                .digest-stat__label {
                    display: block;
                    font-size: 0.9rem;
                    color: rgba(255,255,255,0.8);
                    margin-top: 0.25rem;
                }

                .digest-hero__btn {
                    background: white !important;
                    color: var(--primary-700) !important;
                    border: none !important;
                    border-radius: 9999px !important;
                    padding: 1rem 2.5rem !important;
                    font-weight: 700 !important;
                    box-shadow: 0 8px 30px rgba(0,0,0,0.2) !important;
                    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
                }

                .digest-hero__btn:hover {
                    transform: translateY(-2px) !important;
                    box-shadow: 0 12px 40px rgba(0,0,0,0.3) !important;
                }

                .digest-hero__hint {
                    font-size: 0.85rem;
                    color: rgba(255,255,255,0.6);
                    margin-top: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                }

                /* SECTION HEADERS */
                .digest-section__header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .digest-section__icon {
                    width: 56px;
                    height: 56px;
                    border-radius: 1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.5rem;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
                }

                .digest-section__title {
                    font-size: 2rem;
                    font-weight: 800;
                    margin: 0;
                    color: var(--text-color);
                }

                .digest-section__subtitle {
                    font-size: 1rem;
                    color: var(--text-color-secondary);
                    margin: 0.25rem 0 0;
                }

                /* NEWS CARDS */
                .digest-news-featured {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                    gap: 1.5rem;
                }

                @media (max-width: 768px) {
                    .digest-news-featured {
                        grid-template-columns: 1fr;
                    }
                }

                .digest-news-card {
                    background: var(--surface-card);
                    border-radius: 1.5rem;
                    padding: 1.5rem;
                    border: 1px solid var(--nav-border);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
                    transition: transform 0.2s ease, box-shadow 0.2s ease;
                }

                .digest-news-card:hover {
                    transform: translateY(-4px);
                    box-shadow: 0 16px 48px rgba(0,0,0,0.12);
                }

                .digest-news-card--featured {
                    padding: 2rem;
                }

                .digest-news-card__header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 1rem;
                }

                .digest-news-card__meta,
                .digest-news-card__source,
                .digest-news-card__date {
                    font-size: 0.85rem;
                    color: var(--text-color-secondary);
                }

                .digest-news-card__stat {
                    margin-bottom: 1rem;
                }

                .digest-news-card__stat-value {
                    font-size: 3rem;
                    font-weight: 800;
                    color: var(--primary-500);
                    display: block;
                    line-height: 1;
                }

                .digest-news-card__stat-label {
                    font-size: 0.9rem;
                    color: var(--text-color-secondary);
                }

                .digest-news-card__stat--small .digest-news-card__stat-value {
                    font-size: 2rem;
                }

                .digest-news-card__title {
                    font-size: 1.35rem;
                    font-weight: 700;
                    margin: 0 0 0.75rem;
                    color: var(--text-color);
                    line-height: 1.3;
                }

                .digest-news-card__detail,
                .digest-news-card__summary {
                    font-size: 1rem;
                    color: var(--text-color-secondary);
                    line-height: 1.6;
                    margin: 0 0 1rem;
                }

                .digest-news-card__footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .digest-news-card__tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .digest-tag {
                    background: var(--primary-100) !important;
                    color: var(--primary-700) !important;
                    border-radius: 9999px !important;
                    padding: 0.35rem 0.75rem !important;
                    font-size: 0.8rem !important;
                    font-weight: 600 !important;
                }

                :root[data-theme='midnight'] .digest-tag {
                    background: rgba(99, 102, 241, 0.2) !important;
                    color: var(--primary-300) !important;
                }

                .digest-tag--hot {
                    background: linear-gradient(135deg, #f97316, #ea580c) !important;
                    color: white !important;
                }

                .digest-tag--small {
                    padding: 0.25rem 0.5rem !important;
                    font-size: 0.75rem !important;
                }

                .digest-news-card__link {
                    color: var(--primary-500);
                    font-weight: 600;
                    font-size: 0.9rem;
                    text-decoration: none;
                    display: inline-flex;
                    align-items: center;
                    gap: 0.35rem;
                    transition: color 0.2s ease;
                }

                .digest-news-card__link:hover {
                    color: var(--primary-700);
                }

                /* MORE NEWS GRID */
                .digest-news-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.25rem;
                }

                /* TRENDS */
                .digest-trends-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1.5rem;
                }

                .digest-trend-card {
                    background: var(--surface-card);
                    border-radius: 1.5rem;
                    padding: 2rem;
                    border: 1px solid var(--nav-border);
                    box-shadow: 0 8px 32px rgba(0,0,0,0.08);
                    text-align: center;
                    transition: transform 0.2s ease;
                }

                .digest-trend-card:hover {
                    transform: translateY(-4px);
                }

                .digest-trend-card__icon {
                    width: 72px;
                    height: 72px;
                    border-radius: 1.25rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 2rem;
                    margin: 0 auto 1.25rem;
                    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
                }

                .digest-trend-card__title {
                    font-size: 1.2rem;
                    font-weight: 700;
                    margin: 0 0 0.75rem;
                    color: var(--text-color);
                }

                .digest-trend-card__description {
                    font-size: 0.95rem;
                    color: var(--text-color-secondary);
                    line-height: 1.6;
                    margin: 0;
                }

                /* SERVICENOW */
                .digest-sn-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .digest-sn-card {
                    display: flex;
                    align-items: flex-start;
                    gap: 1rem;
                    background: var(--surface-card);
                    border-radius: 1rem;
                    padding: 1.25rem;
                    border: 1px solid var(--nav-border);
                }

                .digest-sn-card__icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 0.75rem;
                    background: linear-gradient(135deg, #10b981, #059669);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-size: 1.25rem;
                    flex-shrink: 0;
                }

                .digest-sn-card__title {
                    font-size: 1rem;
                    font-weight: 700;
                    margin: 0 0 0.25rem;
                    color: var(--text-color);
                }

                .digest-sn-card__description {
                    font-size: 0.9rem;
                    color: var(--text-color-secondary);
                    margin: 0;
                    line-height: 1.5;
                }

                .digest-sn-cta {
                    background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(5, 150, 105, 0.05));
                    border-radius: 1.5rem;
                    padding: 2.5rem;
                    text-align: center;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                    margin-bottom: 2rem;
                }

                .digest-sn-cta__emoji {
                    font-size: 3rem;
                    display: block;
                    margin-bottom: 1rem;
                }

                .digest-sn-cta__title {
                    font-size: 1.5rem;
                    font-weight: 800;
                    margin: 0 0 0.75rem;
                    color: var(--text-color);
                }

                .digest-sn-cta__description {
                    font-size: 1.1rem;
                    color: var(--text-color-secondary);
                    margin: 0 0 1.5rem;
                    max-width: 500px;
                    margin-left: auto;
                    margin-right: auto;
                }

                .digest-sn-cta__btn {
                    background: linear-gradient(135deg, #10b981, #059669) !important;
                    border: none !important;
                    border-radius: 9999px !important;
                    padding: 0.875rem 2rem !important;
                    font-weight: 700 !important;
                }

                /* DISCUSSION */
                .digest-discussion {
                    background: var(--surface-card);
                    border-radius: 1.5rem;
                    padding: 2rem;
                    border: 1px solid var(--nav-border);
                }

                .digest-discussion__title {
                    font-size: 1.25rem;
                    font-weight: 700;
                    margin: 0 0 1rem;
                    color: var(--text-color);
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .digest-discussion__title i {
                    color: var(--purple-500);
                }

                .digest-discussion__list {
                    margin: 0;
                    padding-left: 1.5rem;
                    color: var(--text-color);
                    line-height: 2;
                    font-size: 1.05rem;
                }

                /* FOOTER */
                .digest-footer {
                    text-align: center;
                    padding: 3rem 2rem;
                    background: var(--surface-section);
                    border-top: 1px solid var(--nav-border);
                }

                .digest-footer p {
                    margin: 0;
                    color: var(--text-color-secondary);
                    font-size: 0.95rem;
                }

                .digest-footer__sources {
                    font-size: 0.85rem !important;
                    margin-top: 0.5rem !important;
                    opacity: 0.7;
                }
            `}</style>
        </div>
    );
};
