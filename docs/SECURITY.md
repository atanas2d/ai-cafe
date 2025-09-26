# Security Policy

## Supported Versions

We actively maintain and provide security updates for the following versions of the AI Cafe website:

| Version | Supported          |
| ------- | ------------------ |
| 1.x.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

The AI Cafe team takes security seriously. If you discover a security vulnerability, please follow these steps:

### 1. Do Not Create Public Issues
Please do not report security vulnerabilities through public GitHub issues, discussions, or any other public forum.

### 2. Contact Us Privately
Send details of the vulnerability to:
- **Email**: [Create a private security advisory on GitHub]
- **Teams**: Direct message to AI Cafe administrators
- **GitHub**: Use the "Report a vulnerability" feature in the Security tab

### 3. Include These Details
When reporting a vulnerability, please include:
- **Description**: Clear description of the vulnerability
- **Impact**: Potential impact and severity
- **Steps to Reproduce**: Detailed reproduction steps
- **Proof of Concept**: If applicable, include PoC code
- **Suggested Fix**: If you have ideas for remediation

### 4. Response Timeline
- **Initial Response**: Within 48 hours
- **Status Update**: Within 7 days
- **Resolution**: Varies based on complexity and severity

## Security Measures

### Website Security
- **HTTPS Enforcement**: All traffic encrypted via TLS
- **Content Security Policy**: Strict CSP headers implemented
- **Input Sanitization**: All user inputs properly sanitized
- **Dependency Scanning**: Regular vulnerability scans of dependencies

### GitHub Repository Security
- **Branch Protection**: Main branch requires reviews
- **Dependency Alerts**: Automated vulnerability notifications
- **Secret Scanning**: Automatic detection of exposed secrets
- **Code Scanning**: Static analysis for security issues

### Data Protection
- **No Sensitive Data**: No personal or confidential information stored
- **Public Repository**: All code is open source and transparent
- **Meeting Content**: Only public information from AI Cafe meetings

## Security Best Practices

### For Contributors
- Keep dependencies updated
- Follow secure coding practices
- Use strong authentication (2FA enabled)
- Review code for security issues
- Report suspicious activity

### For Users
- Keep browsers updated
- Use secure networks when accessing the site
- Report any suspicious behavior
- Verify site authenticity (check URL and certificate)

## Vulnerability Disclosure Process

1. **Report Received**: We acknowledge receipt within 48 hours
2. **Initial Assessment**: We evaluate the report within 7 days
3. **Investigation**: We investigate and develop a fix
4. **Coordination**: We coordinate with the reporter on disclosure
5. **Fix Deployment**: We deploy the fix to production
6. **Public Disclosure**: We publish details after fix is deployed

## Security Updates

Security updates are released as soon as possible after a vulnerability is confirmed and fixed. Updates are communicated through:

- GitHub Security Advisories
- Repository releases and changelogs
- AI Cafe Teams channel notifications
- Website banner notifications (if critical)

## Scope

This security policy covers:
- The AI Cafe website and its components
- GitHub repository and associated workflows
- Build and deployment processes
- Third-party dependencies and integrations

## Out of Scope

The following are outside the scope of this policy:
- Social engineering attacks
- Physical security of Trane Technologies infrastructure
- Third-party services beyond our control
- Issues in browsers or operating systems

## Recognition

We appreciate security researchers and community members who help keep AI Cafe secure. Contributors who report valid security vulnerabilities will be:

- Acknowledged in our security advisories (with permission)
- Listed in our contributors section
- Recognized in AI Cafe meetings

## Contact Information

For security-related questions or concerns:
- **GitHub Security**: Use the Security tab in this repository
- **Teams**: AI Cafe security team
- **General Questions**: Create a GitHub Discussion

## Legal

This security policy is provided in good faith. We commit to:
- Not pursuing legal action against good-faith security researchers
- Working with researchers to understand and fix issues
- Providing credit where appropriate
- Maintaining confidentiality until issues are resolved

---

Thank you for helping keep the AI Cafe community secure! 🔒