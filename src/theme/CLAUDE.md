# AI Cafe Theme Management - Claude Code Context

## Overview
This directory contains the theme management system for the AI Cafe application, built on top of PrimeReact's theming capabilities.

## Theme Architecture

### Design Principles
- **PrimeReact Foundation**: Built on PrimeReact's robust theming system
- **Dynamic Switching**: Runtime theme changes without page reload
- **Persistence**: User preferences saved to localStorage
- **Accessibility**: High contrast and accessibility-compliant themes
- **Corporate Branding**: Aligned with Trane Technologies/Nuvolo brand guidelines

### Theme Manager Structure
```typescript
// Core theme management types
export type ThemeMode = 'classic' | 'light' | 'dark';

// Theme initialization and management
export const initializeTheme = (): ThemeMode => { /* ... */ };
export const applyTheme = (mode: ThemeMode): void => { /* ... */ };
export const persistTheme = (mode: ThemeMode): void => { /* ... */ };
```

## Available Themes

### 1. Classic Theme (Default)
- **File**: PrimeReact's default classic theme
- **Use Case**: Professional, corporate-friendly appearance
- **Colors**: Blue primary, neutral grays, high contrast
- **Accessibility**: WCAG 2.1 AA compliant

### 2. Light Themes
- **Material Light**: Google Material Design inspired
- **Bootstrap Light**: Bootstrap-style light theme
- **Tailwind Light**: Tailwind CSS inspired colors
- **Use Case**: Clean, modern interface for day use

### 3. Dark Themes
- **Material Dark**: Dark variant of Material theme
- **Bootstrap Dark**: Dark variant of Bootstrap theme
- **Luna Dark**: PrimeReact's Luna dark theme
- **Use Case**: Reduced eye strain for low-light environments

## Theme Implementation

### Theme Manager (`themeManager.ts`)
```typescript
const THEME_STORAGE_KEY = 'aicafe_theme';
const THEME_CSS_ID = 'theme-css';

// Available themes with their CSS paths
const THEMES: Record<ThemeMode, string> = {
  classic: 'primereact/resources/themes/saga-blue/theme.css',
  light: 'primereact/resources/themes/mira/theme.css',
  dark: 'primereact/resources/themes/luna-blue/theme.css'
};

// Initialize theme from localStorage or default
export const initializeTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'classic';

  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    return (saved as ThemeMode) || 'classic';
  } catch {
    return 'classic';
  }
};

// Apply theme by updating CSS link
export const applyTheme = (mode: ThemeMode): void => {
  if (typeof window === 'undefined') return;

  const themeLink = document.getElementById(THEME_CSS_ID) as HTMLLinkElement;
  if (themeLink) {
    themeLink.href = THEMES[mode];
  }
};

// Persist user preference
export const persistTheme = (mode: ThemeMode): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch (error) {
    console.warn('Failed to persist theme preference:', error);
  }
};
```

### Theme Toggle Component
The `ThemeToggle` component provides user interface for theme switching:

```typescript
interface ThemeToggleProps {
  value: ThemeMode;
  onChange: (theme: ThemeMode) => void;
}

export const ThemeToggle = ({ value, onChange }: ThemeToggleProps) => {
  const themes = [
    { label: 'Classic', value: 'classic', icon: 'pi-palette' },
    { label: 'Light', value: 'light', icon: 'pi-sun' },
    { label: 'Dark', value: 'dark', icon: 'pi-moon' }
  ];

  return (
    <Dropdown
      value={value}
      options={themes}
      onChange={(e) => onChange(e.value)}
      optionLabel="label"
      optionValue="value"
    />
  );
};
```

## Integration with Application

### App Level Integration
```typescript
// App.tsx - Main application integration
const App = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'classic';
    return initializeTheme();
  });

  useEffect(() => {
    applyTheme(themeMode);
    persistTheme(themeMode);
  }, [themeMode]);

  return (
    <Routes>
      <Route
        element={
          <MainLayout
            themeMode={themeMode}
            onThemeChange={setThemeMode}
          />
        }
      >
        {/* Routes */}
      </Route>
    </Routes>
  );
};
```

### Layout Integration
```typescript
// MainLayout.tsx - Layout level integration
interface MainLayoutProps {
  onThemeChange?: (mode: ThemeMode) => void;
  themeMode?: ThemeMode;
}

export const MainLayout = ({ onThemeChange, themeMode }: MainLayoutProps) => {
  return (
    <div className="min-h-screen surface-ground">
      <header>
        <ThemeToggle
          value={themeMode}
          onChange={onThemeChange}
        />
      </header>
      {/* Rest of layout */}
    </div>
  );
};
```

## Custom Styling

### CSS Custom Properties
The application uses CSS custom properties for consistent theming:

```css
/* global.css - Custom theme properties */
:root {
  --brand-primary: #1976d2;
  --brand-secondary: #424242;
  --brand-accent: #ff6f00;

  /* Spacing system */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;

  /* Border radius */
  --border-radius: 6px;
  --border-radius-large: 12px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### Theme-Specific Overrides
```css
/* Component-specific theme overrides */
.hero {
  background: linear-gradient(
    135deg,
    var(--primary-color),
    var(--primary-600)
  );
}

.app-brand {
  color: var(--primary-color);
}

/* Dark theme specific adjustments */
[data-theme="dark"] {
  --hero-overlay: rgba(0, 0, 0, 0.7);
}

/* Light theme specific adjustments */
[data-theme="light"] {
  --hero-overlay: rgba(255, 255, 255, 0.1);
}
```

## Performance Considerations

### CSS Loading Strategy
```typescript
// Preload theme CSS for better performance
const preloadTheme = (mode: ThemeMode): void => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = THEMES[mode];
  document.head.appendChild(link);
};

// Preload all themes on app initialization
Object.keys(THEMES).forEach(theme => {
  preloadTheme(theme as ThemeMode);
});
```

### Avoiding FOUC (Flash of Unstyled Content)
```html
<!-- index.html - Prevent FOUC -->
<style>
  /* Critical CSS for initial render */
  body {
    margin: 0;
    font-family: system-ui, sans-serif;
    background: #f8f9fa;
  }

  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
```

## Accessibility Features

### High Contrast Support
```css
/* High contrast mode detection */
@media (prefers-contrast: high) {
  :root {
    --primary-color: #0066cc;
    --text-color: #000000;
    --surface-color: #ffffff;
  }
}
```

### Reduced Motion Support
```css
/* Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Color Blind Accessibility
All themes are tested for color blind accessibility:
- Deuteranopia (red-green color blindness)
- Protanopia (red color blindness)
- Tritanopia (blue-yellow color blindness)

## Testing Guidelines

### Theme Testing Checklist
- [ ] All themes load without errors
- [ ] Theme switching works smoothly
- [ ] User preferences persist across sessions
- [ ] No FOUC during theme changes
- [ ] All components work in each theme
- [ ] Accessibility requirements met
- [ ] Performance impact is minimal

### Manual Testing
1. Test theme switching in different browsers
2. Verify localStorage persistence
3. Check accessibility with screen readers
4. Test high contrast mode compatibility
5. Validate color contrast ratios
6. Test with reduced motion preferences

## Future Enhancements

### Planned Features
- **Custom Theme Builder**: Allow users to create custom themes
- **System Theme Detection**: Auto-switch based on OS theme
- **Time-based Switching**: Automatic day/night theme switching
- **Per-page Themes**: Different themes for different sections
- **Corporate Themes**: Trane/Nuvolo specific brand themes

### Technical Improvements
- **CSS-in-JS Integration**: Consider styled-components or emotion
- **Theme Variables API**: Programmatic theme customization
- **Performance Optimization**: Lazy load non-critical theme assets
- **A11y Enhancements**: More accessibility options and preferences

## Common Patterns

### Component Theme Awareness
```typescript
// Hook for theme-aware components
const useTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const isDark = theme === 'dark';
  const isLight = theme === 'light';

  return { theme, setTheme, isDark, isLight };
};

// Usage in components
const MyComponent = () => {
  const { isDark } = useTheme();

  return (
    <div className={`component ${isDark ? 'dark-variant' : 'light-variant'}`}>
      Content
    </div>
  );
};
```

### Theme-Specific Styling
```typescript
// Conditional styling based on theme
const getThemeSpecificClass = (theme: ThemeMode, baseClass: string) => {
  return `${baseClass} ${baseClass}--${theme}`;
};

// Usage
<div className={getThemeSpecificClass(themeMode, 'hero')}>
  Hero content
</div>
```

## Dependencies

### Required Packages
```json
{
  "primereact": "^10.9.7",
  "primeicons": "^7.0.0",
  "primeflex": "^4.0.0"
}
```

### Optional Enhancements
- `color`: For color manipulation utilities
- `chroma-js`: For advanced color operations
- `styled-components`: For CSS-in-JS theming
- `framer-motion`: For smooth theme transitions