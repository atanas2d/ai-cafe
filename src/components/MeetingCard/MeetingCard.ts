/**
 * MeetingCard Component
 * TypeScript component for displaying meeting information
 */

import type { Meeting } from '@/types';
import { navigateTo } from '@/services/Router';

export interface MeetingCardProps {
  meeting: Meeting;
  variant?: 'default' | 'compact' | 'timeline';
  showActions?: boolean;
  className?: string;
}

export class MeetingCard {
  private element: HTMLElement;
  private props: MeetingCardProps;

  constructor(props: MeetingCardProps) {
    this.props = props;
    this.element = this.createElement();
    this.bindEvents();
  }

  /**
   * Create the DOM element for the meeting card
   */
  private createElement(): HTMLElement {
    const { meeting, variant = 'default', showActions = true, className = '' } = this.props;
    
    const article = document.createElement('article');
    article.className = `meeting-card meeting-card--${variant} ${className}`.trim();
    article.setAttribute('data-meeting-id', meeting.id);
    article.setAttribute('data-testid', `meeting-card-${meeting.id}`);

    // Add searchable attributes for legacy compatibility
    const searchTerms = [
      meeting.title,
      meeting.description,
      ...meeting.topics,
      ...meeting.presenters.map(p => p.name),
      ...meeting.tools
    ].join(' ');
    article.setAttribute('data-searchable', searchTerms);

    article.innerHTML = this.renderContent();

    return article;
  }

  /**
   * Render the card content based on variant
   */
  private renderContent(): string {
    const { meeting, variant } = this.props;

    switch (variant) {
      case 'timeline':
        return this.renderTimelineVariant();
      case 'compact':
        return this.renderCompactVariant();
      default:
        return this.renderDefaultVariant();
    }
  }

  /**
   * Render default card variant
   */
  private renderDefaultVariant(): string {
    const { meeting, showActions } = this.props;
    
    return `
      <div class="meeting-card__content">
        <header class="meeting-card__header">
          <div class="meeting-card__meta">
            <span class="meeting-card__number">Meeting ${meeting.meetingNumber}</span>
            <time class="meeting-card__date" datetime="${meeting.date}">
              ${this.formatDate(meeting.date)}
            </time>
          </div>
          <h3 class="meeting-card__title">${this.escapeHtml(meeting.title)}</h3>
        </header>
        
        <div class="meeting-card__body">
          <p class="meeting-card__description">
            ${this.escapeHtml(this.truncateText(meeting.description, 200))}
          </p>
          
          ${meeting.presenters.length > 0 ? `
            <div class="meeting-card__presenters">
              <span class="meeting-card__label">Presented by:</span>
              ${meeting.presenters.map(presenter => `
                <span class="meeting-card__presenter">${this.escapeHtml(presenter.name)}</span>
              `).join(', ')}
            </div>
          ` : ''}
          
          ${meeting.highlights.length > 0 ? `
            <ul class="meeting-card__highlights">
              ${meeting.highlights.slice(0, 3).map(highlight => `
                <li class="meeting-card__highlight">${this.escapeHtml(highlight)}</li>
              `).join('')}
            </ul>
          ` : ''}
          
          ${this.renderTags()}
        </div>
        
        ${showActions ? this.renderActions() : ''}
      </div>
    `;
  }

  /**
   * Render compact card variant
   */
  private renderCompactVariant(): string {
    const { meeting } = this.props;
    
    return `
      <div class="meeting-card__content meeting-card__content--compact">
        <div class="meeting-card__meta">
          <span class="meeting-card__number">#${meeting.meetingNumber}</span>
          <time class="meeting-card__date" datetime="${meeting.date}">
            ${this.formatDate(meeting.date, 'short')}
          </time>
        </div>
        <h4 class="meeting-card__title">${this.escapeHtml(meeting.title)}</h4>
        ${meeting.presenters.length > 0 ? `
          <div class="meeting-card__presenter">
            by ${meeting.presenters[0].name}
          </div>
        ` : ''}
      </div>
    `;
  }

  /**
   * Render timeline card variant (for legacy compatibility)
   */
  private renderTimelineVariant(): string {
    const { meeting } = this.props;
    
    return `
      <div class="timeline-marker">
        <span class="timeline-number">${meeting.meetingNumber}</span>
      </div>
      <div class="timeline-content">
        <h3 class="timeline-title">${this.escapeHtml(meeting.title)}</h3>
        <p class="timeline-date">${this.formatDate(meeting.date)}</p>
        <p class="timeline-description">
          ${this.escapeHtml(meeting.description)}
        </p>
        
        ${this.renderTags('timeline-tags')}
        
        ${meeting.presenters.length > 0 ? `
          <p class="timeline-presenter">
            Presented by: ${meeting.presenters.map(p => p.name).join(', ')}
          </p>
        ` : ''}
        
        ${meeting.highlights.length > 0 ? `
          <div class="timeline-highlights">
            <h4>Key Highlights:</h4>
            <ul>
              ${meeting.highlights.map(highlight => `
                <li>${this.escapeHtml(highlight)}</li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
    `;
  }

  /**
   * Render tags/topics
   */
  private renderTags(containerClass = 'meeting-card__tags'): string {
    const { meeting } = this.props;
    const allTags = [...meeting.tools, ...meeting.topics];
    
    if (allTags.length === 0) return '';
    
    return `
      <div class="${containerClass}">
        ${allTags.map(tag => `
          <span class="tag" data-tag="${this.escapeHtml(tag)}">
            ${this.escapeHtml(tag)}
          </span>
        `).join('')}
      </div>
    `;
  }

  /**
   * Render action buttons
   */
  private renderActions(): string {
    const { meeting } = this.props;
    
    return `
      <footer class="meeting-card__actions">
        <button 
          class="btn btn--secondary btn--small" 
          data-action="view-details"
          aria-label="View details for ${this.escapeHtml(meeting.title)}"
        >
          View Details
        </button>
        ${meeting.attendeeCount ? `
          <span class="meeting-card__attendance">
            ${meeting.attendeeCount} attendees
          </span>
        ` : ''}
      </footer>
    `;
  }

  /**
   * Bind event listeners
   */
  private bindEvents(): void {
    const { meeting } = this.props;

    // Handle click to view details
    this.element.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      
      if (target.matches('[data-action="view-details"]')) {
        event.preventDefault();
        this.handleViewDetails();
      } else if (target.matches('.tag')) {
        event.preventDefault();
        const tag = target.getAttribute('data-tag');
        if (tag) {
          this.handleTagClick(tag);
        }
      } else if (!target.matches('button, a')) {
        // Click on card body - navigate to details
        this.handleViewDetails();
      }
    });

    // Handle keyboard navigation
    this.element.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        if (event.target === this.element) {
          event.preventDefault();
          this.handleViewDetails();
        }
      }
    });

    // Make card focusable for keyboard navigation
    this.element.setAttribute('tabindex', '0');
    this.element.setAttribute('role', 'button');
    this.element.setAttribute('aria-label', `View details for ${meeting.title}`);
  }

  /**
   * Handle viewing meeting details
   */
  private handleViewDetails(): void {
    const { meeting } = this.props;
    navigateTo(`/meeting/${meeting.id}`);
    
    // Dispatch custom event for analytics/tracking
    window.dispatchEvent(new CustomEvent('meeting-card-click', {
      detail: { meetingId: meeting.id, title: meeting.title }
    }));
  }

  /**
   * Handle tag click for filtering
   */
  private handleTagClick(tag: string): void {
    navigateTo(`/meetings?tag=${encodeURIComponent(tag)}`);
  }

  /**
   * Format date for display
   */
  private formatDate(dateString: string, format: 'long' | 'short' = 'long'): string {
    const date = new Date(dateString);
    
    if (format === 'short') {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        year: 'numeric' 
      });
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  /**
   * Truncate text to specified length
   */
  private truncateText(text: string, maxLength: number): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
  }

  /**
   * Escape HTML to prevent XSS
   */
  private escapeHtml(text: string): string {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Update the component props and re-render if needed
   */
  updateProps(newProps: Partial<MeetingCardProps>): void {
    const hasChanges = Object.keys(newProps).some(key => {
      return (newProps as any)[key] !== (this.props as any)[key];
    });
    
    if (hasChanges) {
      this.props = { ...this.props, ...newProps };
      this.element.innerHTML = this.renderContent();
    }
  }

  /**
   * Get the DOM element
   */
  getElement(): HTMLElement {
    return this.element;
  }

  /**
   * Destroy the component and clean up event listeners
   */
  destroy(): void {
    this.element.remove();
  }
}

/**
 * Factory function to create meeting cards
 */
export function createMeetingCard(props: MeetingCardProps): HTMLElement {
  const card = new MeetingCard(props);
  return card.getElement();
}

/**
 * Render multiple meeting cards into a container
 */
export function renderMeetingCards(
  meetings: Meeting[], 
  container: HTMLElement,
  options: {
    variant?: MeetingCardProps['variant'];
    showActions?: boolean;
    className?: string;
  } = {}
): void {
  container.innerHTML = '';
  
  meetings.forEach(meeting => {
    const card = createMeetingCard({
      meeting,
      ...options
    });
    container.appendChild(card);
  });
}