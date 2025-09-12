/**
 * AI Cafe Website - Main TypeScript
 * Trane Technologies AI Learning Initiative
 */
import type { PerformanceMetrics } from '../../types/index';
declare class Utils {
    static debounce<T extends (...args: unknown[]) => unknown>(func: T, wait: number): (...args: Parameters<T>) => void;
    static throttle<T extends (...args: unknown[]) => unknown>(func: T, limit: number): (...args: Parameters<T>) => void;
    static isInViewport(element: Element): boolean;
    static scrollToElement(element: Element, offset?: number): void;
    static getHeaderHeight(): number;
    static querySelector<T extends Element = Element>(selector: string, parent?: Document | Element): T | null;
    static querySelectorAll<T extends Element = Element>(selector: string, parent?: Document | Element): NodeListOf<T>;
}
declare class Navigation {
    private navToggle;
    private navMenu;
    private navLinks;
    private sections;
    init(): void;
    private setupMobileMenu;
    private handleToggleClick;
    private closeMenu;
    private handleOutsideClick;
    private handleEscapeKey;
    private setupSmoothScrolling;
    private setupActiveNavigation;
    private setupStickyHeader;
}
declare class Animations {
    private animatedElements;
    private counters;
    init(): void;
    private setupScrollAnimations;
    private setupCounterAnimations;
    private setupHoverEffects;
}
declare class Performance {
    private metrics;
    init(): void;
    private setupLazyLoading;
    private setupImageOptimization;
    private preloadCriticalResources;
    private measurePerformance;
    getMetrics(): PerformanceMetrics;
}
declare class Accessibility {
    init(): void;
    private setupKeyboardNavigation;
    private setupFocusManagement;
    private setupARIAUpdates;
    private setupReducedMotion;
}
declare class AICafeApp {
    private navigation;
    private animations;
    private performance;
    private accessibility;
    private errorHandling;
    constructor();
    init(): void;
    private initializeModules;
    getPerformanceMetrics(): PerformanceMetrics;
    getErrors(): Error[];
}
export { AICafeApp, Navigation, Animations, Performance, Accessibility, Utils };
declare global {
    interface Window {
        AICafeApp: AICafeApp;
    }
}
//# sourceMappingURL=main.d.ts.map