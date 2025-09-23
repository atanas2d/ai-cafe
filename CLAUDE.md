AI Cafe - Claude Code Context
Project Overview
AI Cafe is a corporate learning initiative web application for Trane Technologies (acquired by Nuvolo) that showcases AI tools, meetings, and educational content to help colleagues stay updated with AI developments.
Core Architecture Principles

TypeScript-First Development: All source code in TypeScript, compiled to production JavaScript
Component-Based Structure: Modular, reusable components with clear separation of concerns
Data-Driven Design: JSON/Database-ready architecture for content management
Progressive Enhancement: Start simple, add complexity incrementally
Corporate Security: Consider internal hosting and access control requirements

Project Structure
ai-cafe/
├── src/                      # Source TypeScript files
│   ├── components/           # Reusable UI components
│   │   ├── MeetingCard/
│   │   ├── ToolCard/
│   │   ├── Navigation/
│   │   └── Footer/
│   ├── pages/               # Page components
│   │   ├── Home/
│   │   ├── Meetings/
│   │   ├── Tools/
│   │   ├── News/
│   │   └── Admin/          # Future admin panel
│   ├── styles/             # SASS/CSS modules
│   │   ├── base/           # Reset, variables, mixins
│   │   ├── components/     # Component-specific styles
│   │   └── layouts/        # Page layouts
│   ├── data/               # JSON data files (pre-database)
│   │   ├── meetings.json
│   │   ├── tools.json
│   │   └── news.json
│   ├── services/           # API and data services
│   │   ├── DataService.ts
│   │   └── AIService.ts   # Future AI generation features
│   ├── types/              # TypeScript type definitions
│   │   ├── Meeting.ts
│   │   ├── Tool.ts
│   │   └── User.ts
│   └── utils/              # Utility functions
│       ├── auth.ts         # Access control utilities
│       └── helpers.ts
├── dist/                   # Production build output
├── config/                 # Configuration files
│   ├── webpack.config.js
│   └── deployment.config.js
└── docs/                   # Documentation
Key Technical Decisions
1. Build System

TypeScript Compilation: Use tsc for type checking and webpack for bundling
CSS Processing: SASS compilation with PostCSS for autoprefixing
Asset Optimization: Image compression, code splitting, tree shaking

2. Data Management Evolution
Phase 1 (Current): JSON files in /src/data/
Phase 2: GitHub-based CMS using GitHub API
Phase 3: ServiceNow integration or dedicated database
3. Authentication & Access Control

Level 0: Public access (news, general tools info)
Level 1: Corporate email verification (meetings, presentations)
Level 2: Admin access (content management, AI features)

4. Deployment Strategy
Option A - ServiceNow Integration:

Host as ServiceNow Portal application
Leverage corporate SSO
Full corporate security compliance

Option B - batnas.com/ai-cafe:

Cloudflare Pages or Vercel deployment
Custom auth with corporate email verification
Progressive access levels

5. AI Features Implementation

Safe Sandbox Environment: Isolated container for AI-generated components
Template-Based Generation: Pre-approved component templates
Review Pipeline: Generated content requires approval before live deployment

Coding Standards
TypeScript Guidelines

Strict mode enabled
Explicit return types for all functions
Interface-first design for data structures
No any types without justification

Component Standards
typescript// Example component structure
interface ComponentProps {
  // Always define props interface
}

export const ComponentName: React.FC<ComponentProps> = (props) => {
  // Implementation
};
Styling Conventions

BEM methodology for class naming
CSS variables for theming
Mobile-first responsive design
Accessibility-first approach (WCAG 2.1 AA)

Git Workflow

Feature branches: feature/description
Commit format: type(scope): message
PR templates with checklist
Automated testing before merge

Icon & Asset Management

Icons: Lucide React or Heroicons for consistency
Images: WebP with fallbacks, lazy loading
Fonts: Variable fonts for performance

Performance Targets

First Contentful Paint: < 1.5s
Time to Interactive: < 3.5s
Lighthouse Score: > 95
Bundle size: < 200KB initial

Security Considerations

Content Security Policy headers
Input sanitization for admin panel
Rate limiting for AI generation features
Audit logging for sensitive actions

Future Enhancements

Real-time Updates: WebSocket for live meeting notifications
AI Assistant: Claude integration for Q&A
Analytics Dashboard: Usage metrics and engagement tracking
Mobile App: PWA or React Native companion app

Development Commands
bash# Install dependencies
npm install

# Development server with hot reload
npm run dev

# Type checking
npm run type-check

# Build for production
npm run build

# Run tests
npm run test

# Deploy to staging
npm run deploy:staging

# Deploy to production
npm run deploy:prod
Environment Variables
envNODE_ENV=development|production
API_URL=https://api.example.com
AUTH_DOMAIN=tranetechnologies.com
FEATURE_AI_GENERATION=false
Contact & Support

Project Lead: Atanas Yanev (Bat Nas)
Teams Channel: AI Cafe - Trane Technologies
GitHub Issues: For bug reports and feature requests