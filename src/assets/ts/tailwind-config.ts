const tailwind = (window as any).tailwind || {};
tailwind.config = {
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        'nuvolo-blue': '#1E3A8A',
        'nuvolo-light': '#00AEEF',
        'trane-blue': '#0066CC',
        'accent-green': '#10B981'
      }
    }
  }
};
(window as any).tailwind = tailwind;
export {};
