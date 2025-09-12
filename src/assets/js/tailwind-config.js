// External Tailwind CDN configuration (shared across pages)
// Keep this small; CDN builds on the fly using this object.
window.tailwind = window.tailwind || {};
window.tailwind.config = {
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      colors: {
        'nuvolo-blue': '#1E3A8A',
        'nuvolo-light': '#3B82F6',
        'nuvolo-orange': '#F97316',
        'nuvolo-green': '#10B981',
        'trane-blue': '#0066CC',
        'trane-red': '#E53E3E',
        'accent-green': '#10B981'
      }
    }
  }
};

