# AI Cafe - Claude Code Context

## Project Overview
AI Cafe is a corporate learning initiative web application for Trane Technologies (acquired by Nuvolo) that showcases AI tools, meetings, and educational content to help colleagues stay updated with AI developments.

## Core Architecture Principles

- **React + TypeScript**: Modern React 18 with TypeScript for type safety
- **PrimeReact UI Framework**: Comprehensive component library with theming support
- **Component-Based Structure**: Modular, reusable components with clear separation of concerns
- **Data-Driven Design**: JSON/Database-ready architecture for content management
- **Progressive Enhancement**: Start simple, add complexity incrementally
- **Corporate Security**: Consider internal hosting and access control requirements

## Current Project Structure
```
ai-cafe/
├── src/                          # Source TypeScript/React files
│   ├── components/               # Reusable UI components
│   │   ├── Hero.tsx             # Hero section with banner switching
│   │   ├── MeetingCard.tsx      # Meeting display component
│   │   ├── ToolCard.tsx         # Tool showcase component
│   │   ├── NewsCard.tsx         # News article component
│   │   ├── ThemeToggle.tsx      # PrimeReact theme switcher
│   │   └── TeamMemberCard.tsx   # Team member profile card
│   ├── pages/                   # React page components
│   │   ├── Home/                # Homepage with hero and sections
│   │   ├── Meetings/            # Meeting recaps and timeline
│   │   ├── Tools/               # AI tools showcase
│   │   ├── Resources/           # Learning resources
│   │   ├── News/                # AI news and updates
│   │   └── Animations/          # Animation previews
│   ├── layout/                  # Layout components
│   │   └── MainLayout.tsx       # Main app layout with navigation
│   ├── styles/                  # CSS styling
│   │   └── global.css           # Global styles and theme overrides
│   ├── theme/                   # Theme management
│   │   └── themeManager.ts      # PrimeReact theme switching logic
│   ├── data/                    # JSON data files
│   │   ├── meetings.json        # Meeting data
│   │   ├── tools.json           # Tools information
│   │   └── news.json            # News articles
│   ├── types/                   # TypeScript type definitions
│   │   ├── Meeting.ts
│   │   ├── Tool.ts
│   │   └── index.ts
│   ├── assets/                  # Static assets
│   │   └── images/              # Image assets
│   ├── scripts/                 # Build and utility scripts
│   ├── App.tsx                  # Main React application
│   └── main.tsx                 # React application entry point
├── public/                      # Static public assets
├── dist/                        # Vite build output
├── docs/                        # Documentation
├── .github/                     # GitHub workflows and templates
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies and scripts
```
## Key Technical Decisions

### 1. Build System & Framework Stack
- **Vite**: Modern build tool with fast HMR and optimized production builds
- **React 18**: Latest React with concurrent features and improved performance
- **TypeScript**: Strict type checking for better code quality and developer experience
- **PrimeReact**: Enterprise-grade UI component library with comprehensive theming
- **PrimeFlex**: CSS utility framework for responsive design
- **React Router**: Client-side routing for SPA navigation

### 2. UI/UX Architecture
- **PrimeReact Theming**: Dynamic theme switching (classic, dark, light modes)
- **Responsive Design**: Mobile-first approach with PrimeFlex utilities
- **Component Composition**: Reusable components with proper TypeScript interfaces
- **Accessibility**: WCAG compliance through PrimeReact's built-in accessibility features

### 3. Data Management Evolution
- **Phase 1 (Current)**: JSON files in `/src/data/` for static content
- **Phase 2**: GitHub-based CMS using GitHub API for dynamic content management
- **Phase 3**: ServiceNow integration or dedicated database for enterprise features

### 4. State Management & Architecture
- **Local State**: React useState and useEffect for component state
- **Theme Management**: Custom theme manager with localStorage persistence
- **Navigation**: React Router with programmatic navigation
- **Data Loading**: Suspense with loading fallbacks for better UX

### 5. Deployment Strategy
**Option A - GitHub Pages (Current)**:
- Static site deployment via GitHub Actions
- Base path configuration for GitHub Pages hosting
- Automated CI/CD pipeline on push to main branch

**Option B - ServiceNow Integration (Future)**:
- Host as ServiceNow Portal application
- Leverage corporate SSO and authentication
- Full corporate security compliance

## Coding Standards

### TypeScript Guidelines
- **Strict mode enabled**: Full TypeScript strict configuration
- **Explicit return types**: All functions must have explicit return type annotations
- **Interface-first design**: Define interfaces before implementation
- **No `any` types**: Avoid `any` without clear justification and documentation

### React Component Standards
```typescript
// Component interface definition
interface ComponentProps {
  title: string;
  description?: string;
  onAction?: () => void;
}

// Functional component with proper typing
export const ComponentName = ({ title, description, onAction }: ComponentProps): JSX.Element => {
  // Implementation with hooks and TypeScript
  return (
    <div className="component-wrapper">
      {/* JSX implementation */}
    </div>
  );
};
```

### PrimeReact Integration Standards
- **Import PrimeReact components**: Use named imports for better tree shaking
- **Theme-aware styling**: Leverage PrimeReact CSS variables and utility classes
- **Accessibility**: Use PrimeReact's built-in ARIA attributes and keyboard navigation
- **Performance**: Implement lazy loading for heavy components

### Styling Conventions
- **PrimeFlex Utilities**: Use PrimeFlex classes for layout and spacing
- **CSS Custom Properties**: Leverage CSS variables for consistent theming
- **Component-scoped styles**: Use CSS modules or styled-components when needed
- **Mobile-first responsive design**: Design for mobile first, enhance for desktop

### Git Workflow
- **Feature branches**: `feature/description` naming convention
- **Commit format**: `type(scope): message` following conventional commits
- **PR templates**: Use provided templates with checklist for consistency
- **Automated testing**: ESLint and TypeScript checking before merge

### Icon & Asset Management
- **Icons**: PrimeIcons (included with PrimeReact) for consistency
- **Images**: WebP format with fallbacks, implement lazy loading
- **Fonts**: System fonts for performance, custom fonts only when needed
- **Asset optimization**: Vite handles automatic asset optimization and bundling

## Performance Targets
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: > 95
- **Bundle size**: < 500KB initial (adjusted for PrimeReact)
- **Core Web Vitals**: Pass all metrics for good user experience

## Security Considerations
- **Content Security Policy**: Implement CSP headers for XSS protection
- **Input sanitization**: Sanitize all user inputs and content
- **Dependency security**: Regular security audits of npm dependencies
- **Safe deployment**: GitHub Actions with secure environment variables

## Future Enhancements
- **Real-time Updates**: WebSocket integration for live meeting notifications
- **AI Assistant**: Claude integration for Q&A and content assistance
- **Analytics Dashboard**: Usage metrics and engagement tracking
- **Progressive Web App**: PWA features for mobile app-like experience
- **ServiceNow Integration**: Enterprise authentication and data integration

## Development Commands
```bash
# Install dependencies
npm install

# Development server with hot reload
npm run dev

# Type checking only
npm run type-check

# Lint TypeScript code
npm run lint

# Build TypeScript files
npm run build:ts

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Configuration
- **NODE_ENV**: development|production
- **Base URL**: `/ai-cafe/` for GitHub Pages deployment
- **Vite Config**: See `vite.config.ts` for build configuration
- **TypeScript**: Strict mode enabled in `tsconfig.json`
## Contact & Support
- **Project Lead**: Atanas Dimitrov (Bat Nas)
- **Teams Channel**: AI Cafe - Trane Technologies
- **GitHub Repository**: [ai-cafe](https://github.com/atanas2d/ai-cafe)
- **Issues & Bug Reports**: Use GitHub Issues for technical problems
- **Live Website**: [AI Cafe](https://atanas2d.github.io/ai-cafe)