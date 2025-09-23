AI Features & Deployment - Claude Code Context
AI-Powered Features Architecture (Future Enhancement)
Browser-Based AI Sandbox
Since this is a SPA, the "sandbox" will be a client-side safety mechanism using iframes and content sanitization, not server-side containers.

Implementation Planning
Safe Preview System (Future)
Use isolated iframes with sandbox attribute for previewing AI-generated content
Template-based constraints to limit what AI can generate
Manual review workflow before adding to production
All AI generation happens via API calls to protect API keys
AI Feature Examples (Planned)
Meeting tile design variations
Logo generation for events
Auto-summarization of meeting notes
Tool recommendation engine
Note: These features require moving beyond static hosting to a platform with serverless functions (Vercel/Netlify) to protect API keys.

Deployment Strategy - Single Public Website
Architecture Overview
Deploy AI Cafe as a single, professional public website with built-in authentication and role-based access control. This approach provides modern web capabilities while maintaining security through proper access control implementation.

Infrastructure
yaml
Domain: batnas.com/ai-cafe
Hosting: Vercel or Cloudflare Pages
Database: Supabase or PlanetScale (Phase 3)
CDN: Cloudflare (global distribution)
SSL: Auto-provisioned HTTPS

Authentication:
  Public Access: No auth required for news/tools
  Corporate Access: Email verification (@tranetechnologies.com)
  Admin Access: Role-based with approval workflow

Security:
  WAF: Cloudflare Web Application Firewall
  DDoS: Built-in protection
  Rate Limiting: API and auth endpoints
  CSP: Content Security Policy headers
Access Control Implementation
typescript
// Three-tier access control system
enum AccessLevel {
  PUBLIC = 0,    // Anyone can view
  CORPORATE = 1, // Verified corporate email
  ADMIN = 2      // Admin privileges
}

// Middleware for route protection
export class AccessControl {
  static middleware(requiredLevel: AccessLevel) {
    return async (req: Request, res: Response, next: Next) => {
      const user = await AuthService.getCurrentUser(req);
      
      if (!user && requiredLevel > AccessLevel.PUBLIC) {
        return res.status(401).json({ 
          error: 'Authentication required',
          loginUrl: '/ai-cafe/login'
        });
      }
      
      if (user && user.accessLevel < requiredLevel) {
        return res.status(403).json({ 
          error: 'Insufficient permissions',
          required: AccessLevel[requiredLevel],
          current: AccessLevel[user.accessLevel]
        });
      }
      
      next();
    };
  }
}

// Route configuration examples
app.get('/api/news', AccessControl.middleware(AccessLevel.PUBLIC), getNews);
app.get('/api/meetings', AccessControl.middleware(AccessLevel.CORPORATE), getMeetings);
app.post('/api/admin/generate', AccessControl.middleware(AccessLevel.ADMIN), generateWithAI);
Authentication Service
typescript
class AuthService {
  // Magic link authentication
  async sendMagicLink(email: string): Promise<void> {
    // Validate email format
    if (!this.isValidEmail(email)) {
      throw new Error('Invalid email format');
    }
    
    // Generate secure token
    const token = crypto.randomBytes(32).toString('hex');
    const expires = Date.now() + 10 * 60 * 1000; // 10 minutes
    
    // Store token with expiry
    await this.storeToken(token, email, expires);
    
    // Send email
    await EmailService.send({
      to: email,
      subject: 'AI Cafe - Sign In Link',
      html: `
        <p>Click the link below to sign in to AI Cafe:</p>
        <a href="https://batnas.com/ai-cafe/verify?token=${token}">
          Sign In to AI Cafe
        </a>
        <p>This link expires in 10 minutes.</p>
      `
    });
  }
  
  // Verify token and create session
  async verifyToken(token: string): Promise<User> {
    const stored = await this.getStoredToken(token);
    
    if (!stored || stored.expires < Date.now()) {
      throw new Error('Invalid or expired token');
    }
    
    // Determine access level
    const accessLevel = stored.email.endsWith('@tranetechnologies.com')
      ? AccessLevel.CORPORATE
      : AccessLevel.PUBLIC;
    
    // Check for admin users (from config/database)
    const isAdmin = await this.isAdminEmail(stored.email);
    if (isAdmin) {
      accessLevel = AccessLevel.ADMIN;
    }
    
    // Create user session
    const user = {
      id: generateUserId(),
      email: stored.email,
      accessLevel,
      createdAt: new Date()
    };
    
    // Clean up used token
    await this.deleteToken(token);
    
    return this.createSession(user);
  }
}
Deployment Configuration
Vercel Configuration
json
// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "functions": {
    "api/**/*.ts": {
      "maxDuration": 10
    }
  },
  "rewrites": [
    { "source": "/ai-cafe", "destination": "/index.html" },
    { "source": "/ai-cafe/(.*)", "destination": "/$1" }
  ],
  "headers": [
    {
      "source": "/ai-cafe/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ],
  "env": {
    "JWT_SECRET": "@jwt-secret",
    "EMAIL_API_KEY": "@email-api-key",
    "DATABASE_URL": "@database-url"
  }
}
Environment Variables
bash
# .env.production
NEXT_PUBLIC_APP_URL=https://batnas.com/ai-cafe
NEXT_PUBLIC_API_URL=https://batnas.com/ai-cafe/api

# Authentication
JWT_SECRET=<generate-secure-random-string>
JWT_EXPIRES_IN=15m
REFRESH_TOKEN_EXPIRES_IN=7d
MAGIC_LINK_SECRET=<generate-secure-random-string>

# Email Service (SendGrid/Resend/AWS SES)
EMAIL_SERVICE=sendgrid
EMAIL_API_KEY=<your-api-key>
EMAIL_FROM=noreply@batnas.com
EMAIL_REPLY_TO=support@batnas.com

# Corporate Configuration
CORPORATE_EMAIL_DOMAIN=tranetechnologies.com
ADMIN_EMAILS=atanas@tranetechnologies.com,admin@tranetechnologies.com

# Database (Phase 3)
DATABASE_URL=postgresql://user:pass@host:5432/aicafe
REDIS_URL=redis://localhost:6379

# AI Features
OPENAI_API_KEY=<your-openai-key>
AI_GENERATION_ENABLED=true
AI_RATE_LIMIT=10/hour

# Analytics
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
SENTRY_DSN=<your-sentry-dsn>
Future ServiceNow Integration (Optional)
While the main deployment is the public website, you can optionally add ServiceNow integration for specific features:

typescript
// Optional ServiceNow connector for specific needs
class ServiceNowConnector {
  // Pull employee directory for email validation
  async validateCorporateEmail(email: string): Promise<boolean> {
    try {
      const response = await fetch(`${SERVICENOW_URL}/api/now/table/sys_user`, {
        headers: {
          'Authorization': `Basic ${SERVICENOW_AUTH}`,
          'Accept': 'application/json'
        },
        params: { email }
      });
      
      return response.ok && response.data.result.length > 0;
    } catch {
      // Fallback to domain check if ServiceNow is unavailable
      return email.endsWith('@tranetechnologies.com');
    }
  }
  
  // Optional: Sync meeting data to ServiceNow
  async syncMeetingToServiceNow(meeting: Meeting): Promise<void> {
    // Only if needed for corporate reporting
  }
}
CI/CD Pipeline
GitHub Actions Workflow
yaml
name: Deploy AI Cafe

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Type check
        run: npm run type-check
      
      - name: Run tests
        run: npm test
      
      - name: Security scan
        run: npm audit

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Build TypeScript
        run: npm run build:ts
      
      - name: Build SASS
        run: npm run build:sass
      
      - name: Optimize assets
        run: npm run optimize
      
      - name: Generate static pages
        run: npm run generate

  deploy-staging:
    needs: build
    if: github.ref != 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to staging
        run: |
          npx vercel --prod=false --token=${{ secrets.VERCEL_TOKEN }}

  deploy-production:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: |
          npx vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
      
      - name: Notify Teams channel
        run: |
          curl -X POST ${{ secrets.TEAMS_WEBHOOK }} \
            -H 'Content-Type: application/json' \
            -d '{"text": "AI Cafe deployed to production"}'
Monitoring & Analytics
Performance Monitoring
typescript
// Using Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric: Metric) {
  // Send to your analytics endpoint
  fetch('/api/analytics', {
    method: 'POST',
    body: JSON.stringify(metric),
    headers: { 'Content-Type': 'application/json' }
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
Usage Analytics
typescript
class Analytics {
  static track(event: string, properties?: Record<string, any>): void {
    // Track user interactions
    if (window.gtag) {
      window.gtag('event', event, properties);
    }
    
    // Internal analytics
    fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({ event, properties, timestamp: Date.now() })
    });
  }
  
  static trackAIGeneration(feature: string, success: boolean): void {
    this.track('ai_generation', {
      feature,
      success,
      user: getCurrentUser()?.id
    });
  }
}
Security Considerations
AI Generation Security
Input Sanitization: All user inputs sanitized before AI processing
Output Validation: Generated code scanned for malicious patterns
Sandbox Isolation: AI generation in isolated containers
Rate Limiting: Prevent abuse of AI features
Audit Logging: All AI generations logged for review
Deployment Security
Secret Management: Use environment variables, never commit secrets
HTTPS Only: Force SSL for all connections
CSP Headers: Strict Content Security Policy
CORS Configuration: Whitelist allowed origins
Regular Updates: Automated dependency updates
Access Control
JWT Tokens: Short-lived tokens with refresh mechanism
Role-Based Access: Granular permissions system
API Rate Limiting: Prevent abuse
Session Management: Secure session handling
Audit Trail: Log all sensitive operations
