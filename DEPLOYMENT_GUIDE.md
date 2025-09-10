# AI Cafe Website - Deployment Guide

## 🚀 Quick Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Git installed locally
- Basic knowledge of GitHub Pages

### Step 1: Repository Setup

1. **Create a new GitHub repository**
   ```bash
   # Create repository on GitHub (via web interface)
   # Repository name: ai-cafe-website
   # Make it public for GitHub Pages
   ```

2. **Clone and push the project**
   ```bash
   git clone https://github.com/YOUR-USERNAME/ai-cafe-website.git
   cd ai-cafe-website
   
   # Copy all project files to this directory
   # Then commit and push
   git add .
   git commit -m "Initial AI Cafe website implementation"
   git push origin main
   ```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The deployment workflow will automatically trigger

### Step 3: Configure Domain (Optional)

1. In repository **Settings** → **Pages**
2. Add your custom domain (e.g., `ai-cafe.trane.com`)
3. Update the URLs in the following files:
   - `index.html` (meta tags)
   - `src/pages/news/index.html` (meta tags)
   - `src/pages/resources/index.html` (meta tags)
   - `README.md` (badge links)

### Step 4: Verify Deployment

1. Check the **Actions** tab for deployment status
2. Visit your site at `https://YOUR-USERNAME.github.io/ai-cafe-website`
3. Test all pages and functionality

## 🔧 Local Development

### Setup Local Environment

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/ai-cafe-website.git
cd ai-cafe-website

# Install dependencies
npm install

# Start local development server
npm run dev
# or
python -m http.server 8000

# Open browser to http://localhost:8000
```

### Development Workflow

1. **Make changes** to HTML, CSS, or JavaScript files
2. **Test locally** using the development server
3. **Commit changes** with descriptive messages
4. **Push to GitHub** - automatic deployment will trigger

## 📁 Project Structure Overview

```
ai-cafe-website/
├── .github/
│   └── workflows/
│       ├── ci.yml              # Continuous Integration
│       └── deploy.yml          # GitHub Pages Deployment
├── src/
│   ├── assets/
│   │   ├── css/               # Stylesheets
│   │   ├── js/                # JavaScript files
│   │   └── images/            # Images and assets
│   └── pages/
│       ├── news/              # AI News Hub
│       └── resources/         # Learning Resources
├── index.html                 # Homepage
├── package.json              # Project configuration
├── README.md                 # Project documentation
├── LICENSE                   # MIT License
├── CONTRIBUTING.md           # Contribution guidelines
├── CODE_OF_CONDUCT.md        # Community guidelines
├── SECURITY.md               # Security policy
└── Configuration files (.htmlhintrc, .stylelintrc.json, .eslintrc.json)
```

## 🎨 Customization Guide

### Brand Colors
Update CSS custom properties in `src/assets/css/main.css`:
```css
:root {
  --color-primary: #0066CC;      /* Trane Blue */
  --color-secondary: #2C3E50;    /* Tech Gray */
  --color-accent: #00D4AA;       /* AI Green */
}
```

### Content Updates

1. **Meeting Data**: Update `src/assets/js/components.js` → `MeetingData.meetings`
2. **Team Information**: Update `src/assets/js/components.js` → `TeamData.members`
3. **Tools Showcase**: Update `src/assets/js/components.js` → `ToolsData.tools`

### Adding New Pages

1. Create HTML file in appropriate directory
2. Follow existing structure and include:
   - Proper meta tags for SEO
   - Navigation header
   - Semantic HTML structure
   - Footer
   - JavaScript includes

## 🔍 SEO Optimization

### Meta Tags
Each page includes comprehensive meta tags:
- Title and description
- Open Graph for social sharing
- Twitter Cards
- Canonical URLs

### Performance
- Optimized images with lazy loading
- Minified CSS and JavaScript
- Efficient caching strategies
- Mobile-first responsive design

## 🛡️ Security Features

- Content Security Policy headers
- HTTPS enforcement
- Input sanitization
- Dependency vulnerability scanning
- Secret scanning in CI/CD

## 📊 Analytics & Monitoring

### GitHub Pages Analytics
- Built-in GitHub Pages analytics
- Repository insights and traffic data

### Performance Monitoring
- Lighthouse CI in deployment pipeline
- Core Web Vitals tracking
- Performance budgets

### Error Tracking
- JavaScript error handling
- Console logging for debugging
- CI/CD pipeline monitoring

## 🔄 Continuous Integration

### Automated Checks
- HTML validation with HTMLHint
- CSS linting with Stylelint
- JavaScript linting with ESLint
- Security vulnerability scanning
- Link checking
- Performance auditing

### Quality Gates
- All checks must pass before deployment
- Pull request reviews required
- Automated testing on multiple Node.js versions

## 🚨 Troubleshooting

### Common Issues

1. **Deployment Fails**
   - Check Actions tab for error details
   - Verify all required files are present
   - Ensure proper file permissions

2. **Images Not Loading**
   - Verify image paths are correct
   - Check file extensions match references
   - Ensure images are committed to repository

3. **CSS/JS Not Applied**
   - Check file paths in HTML
   - Verify files are in correct directories
   - Clear browser cache

4. **Mobile Layout Issues**
   - Test responsive design at different breakpoints
   - Check viewport meta tag is present
   - Verify CSS media queries

### Getting Help

1. **Check Documentation**
   - Review README.md
   - Check GitHub Issues
   - Consult GitHub Pages documentation

2. **Community Support**
   - Create GitHub Issue
   - Contact AI Cafe team via Teams
   - Review Contributing Guidelines

## 📈 Performance Targets

### Lighthouse Scores
- **Performance**: > 90
- **Accessibility**: > 95
- **Best Practices**: > 90
- **SEO**: > 95

### Loading Times
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔮 Future Enhancements

### Planned Features
- Meeting RSVP system
- Interactive tool demos
- Multilingual support (Bulgarian)
- Advanced search functionality
- User authentication
- Content management system

### Integration Opportunities
- Microsoft Teams integration
- AI news API automation
- GitHub contributor recognition
- Social media sharing
- Email newsletter system

---

**Ready to deploy?** Follow the steps above to get your AI Cafe website live on GitHub Pages! 🎉

For questions or support, contact the AI Cafe community via Teams or create a GitHub Issue.