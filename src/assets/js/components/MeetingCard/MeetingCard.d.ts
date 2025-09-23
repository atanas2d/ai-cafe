/**
 * MeetingCard Component
 * TypeScript component for displaying meeting information
 */
import type { Meeting } from '@/types';
export interface MeetingCardProps {
    meeting: Meeting;
    variant?: 'default' | 'compact' | 'timeline';
    showActions?: boolean;
    className?: string;
}
export declare class MeetingCard {
    private element;
    private props;
    constructor(props: MeetingCardProps);
    /**
     * Create the DOM element for the meeting card
     */
    private createElement;
    /**
     * Render the card content based on variant
     */
    private renderContent;
    /**
     * Render default card variant
     */
    private renderDefaultVariant;
    /**
     * Render compact card variant
     */
    private renderCompactVariant;
    /**
     * Render timeline card variant (for legacy compatibility)
     */
    private renderTimelineVariant;
    /**
     * Render tags/topics
     */
    private renderTags;
    /**
     * Render action buttons
     */
    private renderActions;
    /**
     * Bind event listeners
     */
    private bindEvents;
    /**
     * Handle viewing meeting details
     */
    private handleViewDetails;
    /**
     * Handle tag click for filtering
     */
    private handleTagClick;
    /**
     * Format date for display
     */
    private formatDate;
    /**
     * Truncate text to specified length
     */
    private truncateText;
    /**
     * Escape HTML to prevent XSS
     */
    private escapeHtml;
    /**
     * Update the component props and re-render if needed
     */
    updateProps(newProps: Partial<MeetingCardProps>): void;
    /**
     * Get the DOM element
     */
    getElement(): HTMLElement;
    /**
     * Destroy the component and clean up event listeners
     */
    destroy(): void;
}
/**
 * Factory function to create meeting cards
 */
export declare function createMeetingCard(props: MeetingCardProps): HTMLElement;
/**
 * Render multiple meeting cards into a container
 */
export declare function renderMeetingCards(meetings: Meeting[], container: HTMLElement, options?: {
    variant?: MeetingCardProps['variant'];
    showActions?: boolean;
    className?: string;
}): void;
//# sourceMappingURL=MeetingCard.d.ts.map