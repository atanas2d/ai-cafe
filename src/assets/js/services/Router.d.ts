/**
 * Simple Client-Side Router for SPA Navigation
 * Handles route changes and component loading
 */
import type { Route, RouterState } from '@/types';
export declare class Router {
    private static instance;
    private routes;
    private currentState;
    private listeners;
    private constructor();
    static getInstance(): Router;
    private init;
    /**
     * Register a route
     */
    addRoute(path: string, component: string, title: string, requiresAuth?: boolean): void;
    /**
     * Register multiple routes
     */
    addRoutes(routes: Route[]): void;
    /**
     * Navigate to a path
     */
    navigate(path: string, options?: {
        replace?: boolean;
    }): void;
    /**
     * Go back in history
     */
    back(): void;
    /**
     * Go forward in history
     */
    forward(): void;
    /**
     * Get current route state
     */
    getCurrentState(): RouterState;
    /**
     * Subscribe to route changes
     */
    subscribe(callback: (state: RouterState) => void): () => void;
    /**
     * Handle popstate events (browser back/forward)
     */
    private handlePopState;
    /**
     * Handle custom navigate events
     */
    private handleNavigate;
    /**
     * Process a route change
     */
    private handleRoute;
    /**
     * Find route that matches the current path
     */
    private findMatchingRoute;
    /**
     * Check if path matches a route pattern
     */
    private matchesPattern;
    /**
     * Extract parameters from path
     */
    private extractParams;
    /**
     * Parse query string to object
     */
    private parseQueryString;
    /**
     * Load and render the component for the route
     */
    private loadComponent;
    /**
     * Handle 404 errors
     */
    private handle404;
    /**
     * Handle general errors
     */
    private handleError;
    /**
     * Notify all listeners of state change
     */
    private notifyListeners;
}
export declare function navigateTo(path: string, replace?: boolean): void;
export declare const router: Router;
//# sourceMappingURL=Router.d.ts.map