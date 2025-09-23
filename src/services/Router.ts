/**
 * Simple Client-Side Router for SPA Navigation
 * Handles route changes and component loading
 */

import type { Route, RouterState } from '@/types';

export class Router {
  private static instance: Router;
  private routes: Map<string, Route> = new Map();
  private currentState: RouterState = {
    currentPath: '/',
    params: {},
    query: {}
  };
  private listeners: Set<(state: RouterState) => void> = new Set();

  private constructor() {
    this.init();
  }

  static getInstance(): Router {
    if (!Router.instance) {
      Router.instance = new Router();
    }
    return Router.instance;
  }

  private init(): void {
    // Listen for browser navigation events
    window.addEventListener('popstate', this.handlePopState.bind(this));
    
    // Listen for programmatic navigation
    window.addEventListener('navigate', this.handleNavigate.bind(this));
    
    // Handle initial route
    this.handleRoute(window.location.pathname + window.location.search);
  }

  /**
   * Register a route
   */
  addRoute(path: string, component: string, title: string, requiresAuth = false): void {
    this.routes.set(path, {
      path,
      component,
      title,
      requiresAuth
    });
  }

  /**
   * Register multiple routes
   */
  addRoutes(routes: Route[]): void {
    routes.forEach(route => {
      this.addRoute(route.path, route.component, route.title, route.requiresAuth);
    });
  }

  /**
   * Navigate to a path
   */
  navigate(path: string, options: { replace?: boolean } = {}): void {
    if (options.replace) {
      window.history.replaceState(null, '', path);
    } else {
      window.history.pushState(null, '', path);
    }
    
    this.handleRoute(path);
  }

  /**
   * Go back in history
   */
  back(): void {
    window.history.back();
  }

  /**
   * Go forward in history
   */
  forward(): void {
    window.history.forward();
  }

  /**
   * Get current route state
   */
  getCurrentState(): RouterState {
    return { ...this.currentState };
  }

  /**
   * Subscribe to route changes
   */
  subscribe(callback: (state: RouterState) => void): () => void {
    this.listeners.add(callback);
    
    // Return unsubscribe function
    return () => {
      this.listeners.delete(callback);
    };
  }

  /**
   * Handle popstate events (browser back/forward)
   */
  private handlePopState(event: PopStateEvent): void {
    this.handleRoute(window.location.pathname + window.location.search);
  }

  /**
   * Handle custom navigate events
   */
  private handleNavigate(event: Event): void {
    const customEvent = event as CustomEvent & { detail: { path: string; replace?: boolean } };
    this.navigate(customEvent.detail.path, { replace: customEvent.detail.replace });
  }

  /**
   * Process a route change
   */
  private handleRoute(fullPath: string): void {
    const [pathname, queryString] = fullPath.split('?');
    const params = this.extractParams(pathname);
    const query = this.parseQueryString(queryString || '');

    // Find matching route
    const route = this.findMatchingRoute(pathname);
    
    if (!route) {
      console.warn(`No route found for path: ${pathname}`);
      this.handle404();
      return;
    }

    // Update state
    this.currentState = {
      currentPath: pathname,
      params,
      query
    };

    // Update document title
    document.title = route.title + ' - AI Cafe';

    // Notify listeners
    this.notifyListeners();

    // Load component
    this.loadComponent(route);
  }

  /**
   * Find route that matches the current path
   */
  private findMatchingRoute(pathname: string): Route | null {
    // First try exact match
    if (this.routes.has(pathname)) {
      return this.routes.get(pathname)!;
    }

    // Try pattern matching for dynamic routes
    for (const [pattern, route] of this.routes) {
      if (this.matchesPattern(pathname, pattern)) {
        return route;
      }
    }

    return null;
  }

  /**
   * Check if path matches a route pattern
   */
  private matchesPattern(path: string, pattern: string): boolean {
    // Convert pattern like '/meeting/:id' to regex
    const regexPattern = pattern
      .replace(/:[^/]+/g, '([^/]+)')  // Replace :param with capture group
      .replace(/\//g, '\\/');        // Escape forward slashes
    
    const regex = new RegExp(`^${regexPattern}$`);
    return regex.test(path);
  }

  /**
   * Extract parameters from path
   */
  private extractParams(pathname: string): Record<string, string> {
    // Find the matching route pattern
    for (const [pattern] of this.routes) {
      if (this.matchesPattern(pathname, pattern)) {
        const paramNames = pattern.match(/:([^/]+)/g)?.map(p => p.slice(1)) || [];
        const regexPattern = pattern.replace(/:[^/]+/g, '([^/]+)');
        const regex = new RegExp(`^${regexPattern}$`);
        const matches = pathname.match(regex);
        
        if (matches && paramNames.length > 0) {
          const params: Record<string, string> = {};
          paramNames.forEach((name, index) => {
            params[name] = matches[index + 1];
          });
          return params;
        }
      }
    }
    
    return {};
  }

  /**
   * Parse query string to object
   */
  private parseQueryString(queryString: string): Record<string, string> {
    const params: Record<string, string> = {};
    
    if (!queryString) return params;
    
    queryString.split('&').forEach(pair => {
      const [key, value] = pair.split('=');
      if (key) {
        params[decodeURIComponent(key)] = decodeURIComponent(value || '');
      }
    });
    
    return params;
  }

  /**
   * Load and render the component for the route
   */
  private async loadComponent(route: Route): Promise<void> {
    try {
      const container = document.getElementById('app-content');
      if (!container) {
        console.error('App content container not found');
        return;
      }

      // Show loading state
      container.innerHTML = '<div class="loading">Loading...</div>';

      // Emit route change event
      window.dispatchEvent(new CustomEvent('route-change', {
        detail: { route, state: this.currentState }
      }));

      // For now, just show a placeholder
      // In a full implementation, this would dynamically import components
      container.innerHTML = `
        <div class="route-content">
          <h1>${route.title}</h1>
          <p>Component: ${route.component}</p>
          <p>Path: ${this.currentState.currentPath}</p>
          ${Object.keys(this.currentState.params).length > 0 ? 
            `<p>Params: ${JSON.stringify(this.currentState.params)}</p>` : ''}
          ${Object.keys(this.currentState.query).length > 0 ? 
            `<p>Query: ${JSON.stringify(this.currentState.query)}</p>` : ''}
        </div>
      `;

    } catch (error) {
      console.error('Error loading component:', error);
      this.handleError(error);
    }
  }

  /**
   * Handle 404 errors
   */
  private handle404(): void {
    const container = document.getElementById('app-content');
    if (container) {
      container.innerHTML = `
        <div class="error-page">
          <h1>404 - Page Not Found</h1>
          <p>The page you're looking for doesn't exist.</p>
          <a href="/" class="btn btn-primary">Go Home</a>
        </div>
      `;
    }
  }

  /**
   * Handle general errors
   */
  private handleError(error: any): void {
    const container = document.getElementById('app-content');
    if (container) {
      container.innerHTML = `
        <div class="error-page">
          <h1>Something went wrong</h1>
          <p>We encountered an error while loading this page.</p>
          <button onclick="location.reload()" class="btn btn-primary">Reload Page</button>
        </div>
      `;
    }
  }

  /**
   * Notify all listeners of state change
   */
  private notifyListeners(): void {
    this.listeners.forEach(callback => {
      try {
        callback(this.currentState);
      } catch (error) {
        console.error('Error in route listener:', error);
      }
    });
  }
}

// Helper function to dispatch navigation events
export function navigateTo(path: string, replace = false): void {
  window.dispatchEvent(new CustomEvent('navigate', {
    detail: { path, replace }
  }));
}

// Export singleton instance
export const router = Router.getInstance();