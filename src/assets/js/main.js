/**
 * AI Cafe Website - Main TypeScript
 * Trane Technologies AI Learning Initiative
 */
// Utility Functions
class Utils {
    // Debounce function for performance optimization
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    // Throttle function for scroll events
    static throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
    // Check if element is in viewport
    static isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth));
    }
    // Smooth scroll to element
    static scrollToElement(element, offset = 0) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    // Get header height for scroll offset
    static getHeaderHeight() {
        const header = document.querySelector('.header');
        return header ? header.offsetHeight : 0;
    }
    // Type-safe query selector
    static querySelector(selector, parent = document) {
        return parent.querySelector(selector);
    }
    // Type-safe query selector all
    static querySelectorAll(selector, parent = document) {
        return parent.querySelectorAll(selector);
    }
}
// Navigation Module
class Navigation {
    constructor() {
        this.navToggle = null;
        this.navMenu = null;
        this.navLinks = null;
        this.sections = null;
    }
    init() {
        this.setupMobileMenu();
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
        this.setupStickyHeader();
    }
    setupMobileMenu() {
        this.navToggle = Utils.querySelector('.nav-toggle');
        this.navMenu = Utils.querySelector('.nav-menu');
        if (!this.navToggle || !this.navMenu)
            return;
        this.navToggle.addEventListener('click', this.handleToggleClick.bind(this));
        // Close menu when clicking on nav links
        this.navLinks = Utils.querySelectorAll('.nav-link');
        this.navLinks.forEach(link => {
            link.addEventListener('click', this.closeMenu.bind(this));
        });
        // Close menu when clicking outside
        document.addEventListener('click', this.handleOutsideClick.bind(this));
        // Handle escape key
        document.addEventListener('keydown', this.handleEscapeKey.bind(this));
    }
    handleToggleClick() {
        if (!this.navToggle || !this.navMenu)
            return;
        const isExpanded = this.navToggle.getAttribute('aria-expanded') === 'true';
        this.navToggle.setAttribute('aria-expanded', (!isExpanded).toString());
        this.navToggle.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        // Prevent body scroll when menu is open
        document.body.style.overflow = !isExpanded ? 'hidden' : '';
    }
    closeMenu() {
        if (!this.navToggle || !this.navMenu)
            return;
        this.navToggle.setAttribute('aria-expanded', 'false');
        this.navToggle.classList.remove('active');
        this.navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
    handleOutsideClick(e) {
        const target = e.target;
        if (!this.navToggle || !this.navMenu)
            return;
        if (!this.navToggle.contains(target) && !this.navMenu.contains(target)) {
            this.closeMenu();
        }
    }
    handleEscapeKey(e) {
        if (e.key === 'Escape' && this.navMenu?.classList.contains('active')) {
            this.closeMenu();
            this.navToggle?.focus();
        }
    }
    setupSmoothScrolling() {
        const navLinks = Utils.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href')?.substring(1);
                if (!targetId)
                    return;
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    const headerHeight = Utils.getHeaderHeight();
                    Utils.scrollToElement(targetElement, headerHeight + 20);
                }
            });
        });
    }
    setupActiveNavigation() {
        this.sections = Utils.querySelectorAll('section[id]');
        this.navLinks = Utils.querySelectorAll('.nav-link');
        if (this.sections.length === 0 || !this.navLinks || this.navLinks.length === 0)
            return;
        const updateActiveNav = Utils.throttle(() => {
            const scrollPosition = window.scrollY + Utils.getHeaderHeight() + 100;
            let currentSection = '';
            this.sections?.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute('id') || '';
                }
            });
            this.navLinks?.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${currentSection}`) {
                    link.classList.add('active');
                }
            });
        }, 100);
        window.addEventListener('scroll', updateActiveNav);
        updateActiveNav(); // Initial call
    }
    setupStickyHeader() {
        const header = Utils.querySelector('.header');
        if (!header)
            return;
        const handleScroll = Utils.throttle(() => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            }
            else {
                header.classList.remove('scrolled');
            }
        }, 100);
        window.addEventListener('scroll', handleScroll);
    }
}
// Animation Module
class Animations {
    constructor() {
        this.animatedElements = null;
        this.counters = null;
    }
    init() {
        this.setupScrollAnimations();
        this.setupCounterAnimations();
        this.setupHoverEffects();
    }
    setupScrollAnimations() {
        this.animatedElements = Utils.querySelectorAll('.highlight-card, .tool-card, .team-card, .timeline-item');
        if (this.animatedElements.length === 0)
            return;
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        this.animatedElements.forEach(element => {
            element.classList.add('animate-ready');
            observer.observe(element);
        });
    }
    setupCounterAnimations() {
        this.counters = Utils.querySelectorAll('.stat-number, .stat-value');
        if (this.counters.length === 0)
            return;
        const animateCounter = (element) => {
            const target = element.textContent || '';
            const isNumeric = /^\d+\+?$/.test(target);
            if (!isNumeric)
                return;
            const finalNumber = parseInt(target.replace('+', ''));
            const hasPlus = target.includes('+');
            const duration = 2000;
            const steps = 60;
            const increment = finalNumber / steps;
            const stepDuration = duration / steps;
            let current = 0;
            element.textContent = '0';
            const timer = setInterval(() => {
                current += increment;
                if (current >= finalNumber) {
                    element.textContent = finalNumber + (hasPlus ? '+' : '');
                    clearInterval(timer);
                }
                else {
                    element.textContent = Math.floor(current) + (hasPlus ? '+' : '');
                }
            }, stepDuration);
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        this.counters.forEach(counter => {
            observer.observe(counter);
        });
    }
    setupHoverEffects() {
        // Add ripple effect to buttons
        const buttons = Utils.querySelectorAll('.btn');
        buttons.forEach(button => {
            button.addEventListener('click', function (e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                ripple.classList.add('ripple');
                this.appendChild(ripple);
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
}
// Performance Module
class Performance {
    constructor() {
        this.metrics = {
            loadTime: 0,
            renderTime: 0,
            interactionTime: 0
        };
    }
    init() {
        this.setupLazyLoading();
        this.setupImageOptimization();
        this.preloadCriticalResources();
        this.measurePerformance();
    }
    setupLazyLoading() {
        const images = Utils.querySelectorAll('img[data-src]');
        if (images.length === 0)
            return;
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const dataSrc = img.dataset.src;
                    if (dataSrc) {
                        img.src = dataSrc;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        images.forEach(img => {
            img.classList.add('lazy');
            imageObserver.observe(img);
        });
    }
    setupImageOptimization() {
        // Add loading="lazy" to images below the fold
        const images = Utils.querySelectorAll('img:not([loading])');
        const heroSection = Utils.querySelector('.hero');
        images.forEach(img => {
            if (heroSection && !heroSection.contains(img)) {
                img.setAttribute('loading', 'lazy');
            }
        });
    }
    preloadCriticalResources() {
        // Preload critical CSS and fonts
        const criticalResources = [
            { href: 'src/assets/css/main.css', as: 'style' },
            { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' }
        ];
        criticalResources.forEach(resource => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.href = resource.href;
            link.as = resource.as;
            if (resource.as === 'style') {
                link.onload = () => {
                    link.onload = null;
                    link.rel = 'stylesheet';
                };
            }
            document.head.appendChild(link);
        });
    }
    measurePerformance() {
        // Measure page load performance
        window.addEventListener('load', () => {
            const navigation = performance.getEntriesByType('navigation')[0];
            this.metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart;
            // Log performance metrics in development
            // Log performance metrics in development
            console.log('Performance Metrics:', this.metrics);
        });
    }
    getMetrics() {
        return { ...this.metrics };
    }
}
// Accessibility Module
class Accessibility {
    init() {
        this.setupKeyboardNavigation();
        this.setupFocusManagement();
        this.setupARIAUpdates();
        this.setupReducedMotion();
    }
    setupKeyboardNavigation() {
        // Handle keyboard navigation for custom components
        const cards = Utils.querySelectorAll('.highlight-card, .tool-card, .team-card');
        cards.forEach(card => {
            const link = card.querySelector('a');
            if (link) {
                card.setAttribute('tabindex', '0');
                card.setAttribute('role', 'button');
                card.addEventListener('keydown', (e) => {
                    const keyEvent = e;
                    if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
                        keyEvent.preventDefault();
                        link.click();
                    }
                });
            }
        });
    }
    setupFocusManagement() {
        // Ensure focus is visible and properly managed
        const focusableElements = Utils.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
        focusableElements.forEach(element => {
            element.addEventListener('focus', () => {
                element.classList.add('focused');
            });
            element.addEventListener('blur', () => {
                element.classList.remove('focused');
            });
        });
    }
    setupARIAUpdates() {
        // Update ARIA labels dynamically
        const navToggle = Utils.querySelector('.nav-toggle');
        const navMenu = Utils.querySelector('.nav-menu');
        if (navToggle && navMenu) {
            const observer = new MutationObserver(() => {
                const isOpen = navMenu.classList.contains('active');
                navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
            });
            observer.observe(navMenu, { attributes: true, attributeFilter: ['class'] });
        }
    }
    setupReducedMotion() {
        // Respect user's motion preferences
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        const handleMotionPreference = (mediaQuery) => {
            if (mediaQuery.matches) {
                document.body.classList.add('reduce-motion');
            }
            else {
                document.body.classList.remove('reduce-motion');
            }
        };
        handleMotionPreference(prefersReducedMotion);
        prefersReducedMotion.addEventListener('change', (e) => {
            handleMotionPreference(e.target);
        });
    }
}
// Error Handling Module
class ErrorHandling {
    constructor() {
        this.errors = [];
    }
    init() {
        this.setupGlobalErrorHandler();
        this.setupImageErrorHandling();
    }
    setupGlobalErrorHandler() {
        window.addEventListener('error', (e) => {
            this.logError(e.error);
            // In production, you might want to send this to an error tracking service
        });
        window.addEventListener('unhandledrejection', (e) => {
            this.logError(new Error(e.reason));
            // In production, you might want to send this to an error tracking service
        });
    }
    setupImageErrorHandling() {
        const images = Utils.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('error', () => {
                // Replace with placeholder or hide broken images
                img.style.display = 'none';
                console.warn('Failed to load image:', img.src);
            });
        });
    }
    logError(error) {
        this.errors.push(error);
        console.error('Application error:', error);
    }
    getErrors() {
        return [...this.errors];
    }
}
// Main Application Class
class AICafeApp {
    constructor() {
        this.navigation = new Navigation();
        this.animations = new Animations();
        this.performance = new Performance();
        this.accessibility = new Accessibility();
        this.errorHandling = new ErrorHandling();
    }
    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initializeModules());
        }
        else {
            this.initializeModules();
        }
    }
    initializeModules() {
        try {
            this.navigation.init();
            this.animations.init();
            this.performance.init();
            this.accessibility.init();
            this.errorHandling.init();
            console.log('AI Cafe website initialized successfully');
        }
        catch (error) {
            console.error('Error initializing AI Cafe website:', error);
        }
    }
    // Public API methods
    getPerformanceMetrics() {
        return this.performance.getMetrics();
    }
    getErrors() {
        return this.errorHandling.getErrors();
    }
}
// Initialize the application
const app = new AICafeApp();
app.init();
// Export for potential use in other modules
export { AICafeApp, Navigation, Animations, Performance, Accessibility, Utils };
if (typeof window !== 'undefined') {
    window.AICafeApp = app;
}
//# sourceMappingURL=main.js.map
