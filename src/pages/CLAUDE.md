# AI Cafe Pages - Claude Code Context

## Overview
This directory contains React page components for the AI Cafe application, implementing the main application routes and content sections.

## Page Architecture

### Design Principles
- **Route-based Organization**: Each directory represents a main application route
- **Component Composition**: Pages compose smaller components for functionality
- **Data Integration**: Pages handle data loading and state management
- **Responsive Layout**: All pages work across mobile, tablet, and desktop
- **SEO Friendly**: Proper semantic structure and meta information

### Standard Page Structure
```typescript
// Standard page component pattern
interface PageProps {
  // Any page-specific props
}

export const PageName = (props: PageProps): JSX.Element => {
  // Data loading hooks
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  // Effects for data loading
  useEffect(() => {
    // Load page data
  }, []);

  return (
    <div className="page-container">
      <Section title="Page Title">
        {/* Page content using reusable components */}
      </Section>
    </div>
  );
};
```

## Page Catalog

### **Home** (`/`)
**Location**: `Home/HomePage.tsx`
**Purpose**: Landing page with hero section and overview of AI Cafe

**Key Features**:
- Hero component with banner switching
- Quick stats display
- Navigation to other sections
- Featured content highlights

**Components Used**:
- `Hero` - Main hero section
- `Section` - Content organization
- `ToolCard` - Featured tools preview
- `MeetingCard` - Recent meetings preview

### **Meetings** (`/meetings`)
**Location**: `Meetings/MeetingsPage.tsx`
**Purpose**: Meeting recaps, schedules, and presentation archives

**Key Features**:
- Meeting timeline/calendar view
- Meeting recap cards
- Presentation downloads
- Participant information

**Data Source**: `src/data/meetings.json`

### **Tools** (`/tools`)
**Location**: `Tools/ToolsPage.tsx`
**Purpose**: AI tools showcase and demonstration hub

**Key Features**:
- Tool catalog with filtering
- Category-based organization
- Tool demonstrations and tutorials
- Integration guides

**Data Source**: `src/data/tools.json`

### **Resources** (`/resources`)
**Location**: `Resources/ResourcesPage.tsx`
**Purpose**: Learning materials, guides, and educational content

**Key Features**:
- Resource categories
- Learning tracks
- Documentation links
- Best practices guides

**Components Used**:
- `ResourceCategoryCard` - Category display
- `LearningTrackCard` - Learning path display

### **News** (`/news`)
**Location**: `News/NewsPage.tsx`
**Purpose**: AI news, updates, and industry developments

**Key Features**:
- News article cards
- Filtering by date/category
- External link integration
- Archive functionality

**Data Source**: `src/data/news.json`

### **Animations** (`/animations`)
**Location**: `Animations/AnimationsPage.tsx`
**Purpose**: Animation previews and CSS demonstrations

**Key Features**:
- Animation showcases
- Interactive previews
- Code examples
- Performance demonstrations

## Page Development Guidelines

### 1. Data Loading Pattern
```typescript
// Standard data loading hook
const usePageData = <T>(dataSource: string) => {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch(dataSource);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [dataSource]);

  return { data, loading, error };
};
```

### 2. Responsive Layout Structure
```typescript
// Standard responsive page layout
<div className="page-wrapper">
  <div className="page-header px-4 md:px-6 lg:px-8">
    <h1 className="page-title">Page Title</h1>
    <p className="page-description">Page description</p>
  </div>

  <div className="page-content px-4 md:px-6 lg:px-8">
    <div className="grid">
      <div className="col-12 lg:col-8">
        {/* Main content */}
      </div>
      <div className="col-12 lg:col-4">
        {/* Sidebar content */}
      </div>
    </div>
  </div>
</div>
```

### 3. Error Handling
```typescript
// Page-level error handling
if (error) {
  return (
    <div className="page-error p-6">
      <Message
        severity="error"
        text={`Failed to load page: ${error}`}
      />
    </div>
  );
}
```

### 4. Loading States
```typescript
// Page loading state
if (loading) {
  return (
    <div className="page-loading p-6">
      <ProgressBar mode="indeterminate" />
      <p className="text-center mt-3">Loading content...</p>
    </div>
  );
}
```

## Data Integration

### JSON Data Sources
All pages currently use static JSON files for content:

```typescript
// Data loading from JSON files
const loadMeetings = () => import('../data/meetings.json');
const loadTools = () => import('../data/tools.json');
const loadNews = () => import('../data/news.json');
```

### Data Types
Each page works with strongly typed data:

```typescript
// Example: Meeting data type
interface Meeting {
  id: string;
  title: string;
  date: string;
  description: string;
  presenter?: string;
  recording?: string;
  materials?: string[];
}
```

## SEO and Accessibility

### Meta Information
```typescript
// Page-specific meta information
useEffect(() => {
  document.title = `Page Title - AI Cafe`;
  document.querySelector('meta[name="description"]')
    ?.setAttribute('content', 'Page description for SEO');
}, []);
```

### Semantic Structure
```typescript
// Proper semantic HTML structure
<main className="page-main">
  <header className="page-header">
    <h1>Page Title</h1>
  </header>

  <section className="page-section">
    <h2>Section Title</h2>
    <article>Content</article>
  </section>
</main>
```

### Accessibility Features
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels and roles where needed
- Keyboard navigation support
- Screen reader friendly content
- High contrast theme support

## Performance Optimization

### Code Splitting
```typescript
// Lazy loading for heavy pages
const LazyAnimationsPage = lazy(() => import('./Animations/AnimationsPage'));

// Usage in router
<Route
  path="animations"
  element={
    <Suspense fallback={<LoadingFallback />}>
      <LazyAnimationsPage />
    </Suspense>
  }
/>
```

### Data Optimization
- Implement data caching for static content
- Use React.memo for components with stable props
- Optimize images with WebP format and lazy loading
- Minimize re-renders with proper dependency arrays

## Future Enhancements

### Planned Features
- **Search Functionality**: Global search across all pages
- **Filtering**: Advanced filtering for content lists
- **Pagination**: For large content sets
- **Bookmarking**: Save favorite content
- **Sharing**: Social sharing capabilities

### Technical Improvements
- **Dynamic Data Loading**: Replace JSON files with API calls
- **Caching Strategy**: Implement proper data caching
- **Offline Support**: PWA capabilities for offline access
- **Real-time Updates**: WebSocket integration for live content
- **Analytics**: Track page views and user interactions

## Testing Guidelines

### Page Testing Checklist
- [ ] Page loads without errors
- [ ] Data displays correctly
- [ ] Loading states work properly
- [ ] Error states are handled gracefully
- [ ] Responsive design works on all devices
- [ ] Navigation works correctly
- [ ] SEO meta tags are set
- [ ] Accessibility features function

### Manual Testing
1. Test page load with slow network
2. Verify responsive behavior
3. Check keyboard navigation
4. Test with screen reader
5. Validate with different data scenarios
6. Test error scenarios (network failures, etc.)

## Component Dependencies

### Common Dependencies
```typescript
// React and routing
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// PrimeReact components
import { ProgressBar } from 'primereact/progressbar';
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';

// Custom components
import { Section } from '../../components/Section';
import { MeetingCard } from '../../components/MeetingCard';
```

### Shared Utilities
- Data loading hooks
- Navigation helpers
- Error handling utilities
- Responsive design helpers