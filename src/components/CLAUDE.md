# AI Cafe Components - Claude Code Context

## Overview
This directory contains reusable React components for the AI Cafe application, built with PrimeReact and TypeScript.

## Component Architecture

### Design Principles
- **PrimeReact Integration**: All components use PrimeReact components as base
- **TypeScript First**: Strict typing with proper interfaces
- **Responsive Design**: Mobile-first approach using PrimeFlex utilities
- **Accessibility**: WCAG compliance through PrimeReact's built-in features
- **Theme Aware**: Support for dynamic theme switching

### Component Standards
```typescript
// Standard component structure
interface ComponentProps {
  // Required props
  title: string;
  // Optional props with defaults
  variant?: 'primary' | 'secondary';
  // Event handlers
  onAction?: () => void;
}

export const ComponentName = ({
  title,
  variant = 'primary',
  onAction
}: ComponentProps): JSX.Element => {
  return (
    <div className="component-wrapper">
      {/* PrimeReact component usage */}
    </div>
  );
};
```

## Component Catalog

### Layout Components
- **MainLayout** (`../layout/MainLayout.tsx`): Main application layout with navigation
- **Section** (`Section.tsx`): Content section wrapper with consistent spacing

### Content Display Components
- **Hero** (`Hero.tsx`): Homepage hero section with banner switching
- **MeetingCard** (`MeetingCard.tsx`): Meeting information display card
- **ToolCard** (`ToolCard.tsx`): AI tool showcase card
- **NewsCard** (`NewsCard.tsx`): News article preview card
- **TeamMemberCard** (`TeamMemberCard.tsx`): Team member profile card
- **ResourceCategoryCard** (`ResourceCategoryCard.tsx`): Resource category display

### Interactive Components
- **ThemeToggle** (`ThemeToggle.tsx`): PrimeReact theme switcher
- **AnimationPreview** (`AnimationPreview.tsx`): Animation preview component

### Utility Components
- **LearningTrackCard** (`LearningTrackCard.tsx`): Learning path display
- **PartnerStrip** (`PartnerStrip.tsx`): Partner/sponsor display strip

## PrimeReact Integration Guidelines

### Common PrimeReact Components Used
```typescript
// Button components
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

// Layout components
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';

// Navigation components
import { Menubar } from 'primereact/menubar';
import { Sidebar } from 'primereact/sidebar';
```

### Styling Best Practices
- Use PrimeFlex utility classes for layout: `flex`, `grid`, `gap-3`, etc.
- Leverage PrimeReact CSS variables for theming
- Apply responsive classes: `hidden lg:flex`, `md:col-6`, etc.
- Use semantic color classes: `text-primary`, `surface-section`, etc.

### Theme Integration
Components should work with all PrimeReact themes:
- **Classic Theme**: Default professional theme
- **Light Themes**: Material, Bootstrap, etc.
- **Dark Themes**: Dark variants with proper contrast

## Component Development Guidelines

### 1. Props Interface Design
```typescript
// Good: Clear, typed interface
interface ToolCardProps {
  tool: Tool;
  onClick?: (tool: Tool) => void;
  variant?: 'compact' | 'detailed';
}

// Avoid: Loose typing
interface BadProps {
  data: any;
  callback?: Function;
}
```

### 2. Event Handling
```typescript
// Standard event handler pattern
const handleClick = useCallback((event: React.MouseEvent) => {
  event.preventDefault();
  onAction?.(data);
}, [onAction, data]);
```

### 3. Responsive Design
```typescript
// Use PrimeFlex classes for responsive behavior
<div className="grid">
  <div className="col-12 md:col-6 lg:col-4">
    <Card>Content</Card>
  </div>
</div>
```

### 4. Accessibility
- Use proper ARIA labels and roles
- Ensure keyboard navigation works
- Provide alternative text for images
- Maintain proper heading hierarchy

## Testing Guidelines

### Component Testing Checklist
- [ ] Props are properly typed and validated
- [ ] Component renders without errors
- [ ] Responsive behavior works across breakpoints
- [ ] Theme switching doesn't break styling
- [ ] Accessibility features are functional
- [ ] Event handlers work as expected

### Manual Testing
1. Test in different PrimeReact themes
2. Verify responsive behavior on mobile/tablet/desktop
3. Check keyboard navigation
4. Validate with screen reader
5. Test with different data scenarios

## Common Patterns

### Loading States
```typescript
const MyComponent = ({ data, loading }: Props) => {
  if (loading) {
    return <ProgressBar mode="indeterminate" />;
  }

  return <div>{/* content */}</div>;
};
```

### Error Handling
```typescript
const MyComponent = ({ data, error }: Props) => {
  if (error) {
    return <Message severity="error" text={error.message} />;
  }

  return <div>{/* content */}</div>;
};
```

### Conditional Rendering
```typescript
// Use proper TypeScript guards
const hasContent = data && data.length > 0;

return (
  <div>
    {hasContent ? (
      <DataView value={data} />
    ) : (
      <Message severity="info" text="No data available" />
    )}
  </div>
);
```

## Performance Considerations

### Optimization Techniques
- Use `React.memo()` for components that receive stable props
- Implement `useCallback()` for event handlers
- Use `useMemo()` for expensive calculations
- Lazy load heavy components with `React.lazy()`

### Bundle Size Management
- Import PrimeReact components individually
- Avoid importing entire PrimeReact library
- Use tree shaking-friendly imports

```typescript
// Good: Individual imports
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';

// Avoid: Barrel imports
import * as PrimeReact from 'primereact';
```

## Future Component Needs

### Planned Components
- **SearchComponent**: Global search functionality
- **FilterPanel**: Advanced filtering for content
- **NotificationCenter**: In-app notification system
- **AdminPanel**: Content management interface
- **ChatWidget**: AI assistant integration

### Enhancement Opportunities
- Add skeleton loading states to existing components
- Implement virtual scrolling for large lists
- Add drag-and-drop capabilities
- Create component composition utilities