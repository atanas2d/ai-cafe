/**
 * AI Cafe Website - Main JavaScript
 * Trane Technologies AI Learning Initiative
 */

// Utility Functions
const utils = {
  // Debounce function for performance optimization
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for scroll events
  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  },

  // Check if element is in viewport
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Smooth scroll to element
  scrollToElement(element, offset = 0) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  },

  // Get header height for scroll offset
  getHeaderHeight() {
    const header = document.querySelector('.header');
    return header ? header.offsetHeight : 0;
  }
};

// Navigation Module
const Navigation = {
  init() {
    this.setupMobileMenu();
    this.setupSmoothScrolling();
    this.setupActiveNavigation();
    this.setupStickyHeader();
  },

  setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!navToggle || !navMenu) return;

    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = !isExpanded ? 'hidden' : '';
    });

    // Close menu when clicking on nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Handle escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
        navToggle.focus();
      }
    });
  },

  setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerHeight = utils.getHeaderHeight();
          utils.scrollToElement(targetElement, headerHeight + 20);
        }
      });
    });
  },

  setupActiveNavigation() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (sections.length === 0 || navLinks.length === 0) return;

    const updateActiveNav = utils.throttle(() => {
      const scrollPosition = window.scrollY + utils.getHeaderHeight() + 100;
      
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }, 100);

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
  },

  setupStickyHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    const handleScroll = utils.throttle(() => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll);
  }
};

// Animation Module
const Animations = {
  init() {
    this.setupScrollAnimations();
    this.setupCounterAnimations();
    this.setupHoverEffects();
  },

  setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.highlight-card, .tool-card, .team-card, .timeline-item');
    
    if (animatedElements.length === 0) return;

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

    animatedElements.forEach(element => {
      element.classList.add('animate-ready');
      observer.observe(element);
    });
  },

  setupCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number, .stat-value');
    
    if (counters.length === 0) return;

    const animateCounter = (element) => {
      const target = element.textContent;
      const isNumeric = /^\d+\+?$/.test(target);
      
      if (!isNumeric) return;
      
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
        } else {
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

    counters.forEach(counter => {
      observer.observe(counter);
    });
  },

  setupHoverEffects() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
          ripple.remove();
        }, 600);
      });
    });
  }
};

// Performance Module
const Performance = {
  init() {
    this.setupLazyLoading();
    this.setupImageOptimization();
    this.preloadCriticalResources();
  },

  setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => {
      img.classList.add('lazy');
      imageObserver.observe(img);
    });
  },

  setupImageOptimization() {
    // Add loading="lazy" to images below the fold
    const images = document.querySelectorAll('img:not([loading])');
    const heroSection = document.querySelector('.hero');
    
    images.forEach(img => {
      if (heroSection && !heroSection.contains(img)) {
        img.setAttribute('loading', 'lazy');
      }
    });
  },

  preloadCriticalResources() {
    // Avoid path issues on nested pages by NOT preloading CSS with a relative path.
    // Stylesheets are already included via <link rel="stylesheet"> on every page.
    // We only optimize fonts here and gracefully noop if the URL fails.
    const resources = [
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' }
    ];

    resources.forEach(resource => {
      try {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.as === 'style') {
          link.onload = function() {
            this.onload = null;
            this.rel = 'stylesheet';
          };
        }
        document.head.appendChild(link);
      } catch (e) {
        // Silently ignore preload errors
        console.warn('Preload skipped:', resource.href, e);
      }
    });
  }
};

// Accessibility Module
const Accessibility = {
  init() {
    this.setupKeyboardNavigation();
    this.setupFocusManagement();
    this.setupARIAUpdates();
    this.setupReducedMotion();
  },

  setupKeyboardNavigation() {
    // Handle keyboard navigation for custom components
    const cards = document.querySelectorAll('.highlight-card, .tool-card, .team-card');
    
    cards.forEach(card => {
      const link = card.querySelector('a');
      if (link) {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        
        card.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            link.click();
          }
        });
      }
    });
  },

  setupFocusManagement() {
    // Ensure focus is visible and properly managed
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
      element.addEventListener('focus', () => {
        element.classList.add('focused');
      });
      
      element.addEventListener('blur', () => {
        element.classList.remove('focused');
      });
    });
  },

  setupARIAUpdates() {
    // Update ARIA labels dynamically
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
      const observer = new MutationObserver(() => {
        const isOpen = navMenu.classList.contains('active');
        navToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      });
      
      observer.observe(navMenu, { attributes: true, attributeFilter: ['class'] });
    }
  },

  setupReducedMotion() {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleMotionPreference = (mediaQuery) => {
      if (mediaQuery.matches) {
        document.body.classList.add('reduce-motion');
      } else {
        document.body.classList.remove('reduce-motion');
      }
    };
    
    handleMotionPreference(prefersReducedMotion);
    prefersReducedMotion.addEventListener('change', handleMotionPreference);
  }
};

// Error Handling Module
const ErrorHandling = {
  init() {
    this.setupGlobalErrorHandler();
    this.setupImageErrorHandling();
  },

  setupGlobalErrorHandler() {
    window.addEventListener('error', (e) => {
      console.error('Global error:', e.error);
      // In production, you might want to send this to an error tracking service
    });

    window.addEventListener('unhandledrejection', (e) => {
      console.error('Unhandled promise rejection:', e.reason);
      // In production, you might want to send this to an error tracking service
    });
  },

  setupImageErrorHandling() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      img.addEventListener('error', () => {
        // Replace with placeholder or hide broken images
        img.style.display = 'none';
        console.warn('Failed to load image:', img.src);
      });
    });
  }
};

// Main Application
const AICafeApp = {
  init() {
    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeModules());
    } else {
      this.initializeModules();
    }
  },

  initializeModules() {
    try {
      Navigation.init();
      Animations.init();
      Performance.init();
      Accessibility.init();
      ErrorHandling.init();
      
      console.log('AI Cafe website initialized successfully');
    } catch (error) {
      console.error('Error initializing AI Cafe website:', error);
    }
  }
};

// Initialize the application
AICafeApp.init();

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AICafeApp, Navigation, Animations, Performance, Accessibility, utils };
}