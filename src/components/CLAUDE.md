# Components - Claude Code Context

## Component Architecture Philosophy
All components in this project follow a strict TypeScript-first, modular design pattern with clear separation between logic, presentation, and styling.

## Component Structure Template
```typescript
// ComponentName.tsx
import { FC, memo } from 'react';
import styles from './ComponentName.module.scss';
import { ComponentNameProps } from './ComponentName.types';

export const ComponentName: FC<ComponentNameProps> = memo(({ 
  prop1, 
  prop2,
  ...rest 
}) => {
  // Component logic here
  
  return (
    <div className={styles.container} {...rest}>
      {/* Component JSX */}
    </div>
  );
});

ComponentName.displayName = 'ComponentName';
```

## Core Components

### MeetingCard Component
**Purpose**: Display meeting information in a card format
**Props**:
- `meeting`: Meeting object with title, date, description, attendees
- `variant`: 'compact' | 'expanded' | 'featured'
- `onAction`: Callback for user interactions

**Key Features**:
- Lazy-loaded presenter images
- Expandable description
- Tags for AI tools discussed
- Attendance counter

### ToolCard Component
**Purpose**: Showcase AI tools with interactive demos
**Props**:
- `tool`: Tool object with name, category, description, features
- `showDemo`: Boolean to enable demo mode
- `accessLevel`: User's access level for gated features

**Key Features**:
- Interactive preview
- Feature comparison matrix
- Usage statistics
- Integration status with corporate systems

### Navigation Component
**Purpose**: Responsive navigation with role-based menu items
**Features**:
- Mobile hamburger menu
- Active route highlighting
- Access level indicators
- Search functionality

### AdminPanel Component
**Purpose**: Content management interface (Future)
**Sections**:
- Meeting management
- Tool catalog editor
- News publisher
- AI generation sandbox
- Analytics dashboard

## Component Development Guidelines

### 1. Type Safety
```typescript
// Always define explicit types
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger';
  size: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
}
```

### 2. Accessibility Requirements
- All interactive elements must have keyboard support
- ARIA labels for screen readers
- Focus management for modals/dropdowns
- Color contrast ratio > 4.5:1

### 3. Performance Optimization
```typescript
// Use memo for expensive computations
const expensiveValue = useMemo(() => 
  calculateComplexValue(prop1, prop2), 
  [prop1, prop2]
);

// Lazy load heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

### 4. Styling Approach
```scss
// ComponentName.module.scss
.container {
  // Use CSS variables for theming
  background: var(--bg-primary);
  color: var(--text-primary);
  
  // Mobile-first responsive design
  padding: var(--spacing-2);
  
  @media (min-width: 768px) {
    padding: var(--spacing-4);
  }
}
```

### 5. Testing Requirements
```typescript
// ComponentName.test.tsx
describe('ComponentName', () => {
  it('should render with required props', () => {
    // Test implementation
  });
  
  it('should handle user interactions', () => {
    // Test implementation
  });
  
  it('should be accessible', () => {
    // Accessibility tests
  });
});
```

## Icon System
Using Lucide React for consistent iconography:
```typescript
import { Calendar, Users, Code, Sparkles } from 'lucide-react';

// Consistent sizing
<Calendar size={20} className={styles.icon} />
```

## Animation Guidelines
```scss
// Use CSS transitions for simple animations
.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-elevated);
  }
}

// Use Framer Motion for complex animations
import { motion } from 'framer-motion';
```

## Data Fetching Pattern
```typescript
// Use custom hooks for data fetching
const useMeetings = () => {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  
  useEffect(() => {
    DataService.getMeetings()
      .then(setMeetings)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);
  
  return { meetings, loading, error };
};
```

## Error Boundary Implementation
```typescript
class ErrorBoundary extends Component {
  // Catch and display component errors gracefully
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Component error:', error, errorInfo);
    // Log to monitoring service
  }
}
```

## Component Documentation
Each component must have:
1. JSDoc comments for props
2. Usage examples in Storybook
3. Accessibility notes
4. Performance considerations
5. Browser compatibility notes

## Common Patterns

### Loading States
```typescript
if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
return <ComponentContent data={data} />;
```

### Empty States
```typescript
if (!data?.length) {
  return <EmptyState 
    message="No meetings scheduled" 
    action={{ label: "Schedule Meeting", onClick: handleSchedule }}
  />;
}
```

### Permission Gates
```typescript
if (!hasPermission(user, 'view_meetings')) {
  return <AccessDenied />;
}
```