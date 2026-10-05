import { useEffect } from 'react';

interface SEOMeta {
  title: string;
  description: string;
}

const SEO_MAP: Record<string, SEOMeta> = {
  // 1. Main website pages
  '': {
    title: 'Workzi – AI-Powered Workforce Management Software',
    description: 'Simplify workforce management with Workzi. Manage employee attendance, shifts, tasks and workforce operations through one intelligent platform.'
  },
  'home': {
    title: 'Workzi – AI-Powered Workforce Management Software',
    description: 'Simplify workforce management with Workzi. Manage employee attendance, shifts, tasks and workforce operations through one intelligent platform.'
  },
  'features': {
    title: 'Workforce Management Features | Workzi',
    description: 'Explore Workzi features for attendance tracking, leave management, shift scheduling, task management, employee self-service and workforce visibility.'
  },
  'solutions': {
    title: 'Workforce Management Solutions by Workzi',
    description: 'Discover workforce management solutions from Workzi for HR teams, IT, sales, healthcare, retail, education and businesses across industries.'
  },
  'employee-app': {
    title: 'Employee Workforce Management App | Workzi',
    description: 'Give employees convenient access to attendance, schedules, leave requests and workplace updates with the Workzi employee app.'
  },
  'hr-manager': {
    title: 'HR Management Software for HR Teams | Workzi',
    description: 'Simplify HR operations with Workzi. Manage attendance, employee records, shifts and workforce activities from one centralized platform.'
  },
  'pricing': {
    title: 'Workzi Pricing | Workforce Management Plans',
    description: 'Explore Workzi pricing and workforce management plans for your business. Find the right solution for employee attendance, scheduling and HR operations.'
  },

  // 2. Feature pages
  'features/attendance-management': {
    title: 'Employee Attendance Management Software | Workzi',
    description: "Track employee attendance, monitor work hours and simplify attendance reporting with Workzi's workforce management software."
  },
  'attendance-management': {
    title: 'Attendance Tracking Software for Businesses | Workzi',
    description: 'Manage employee attendance and work-hour records with Workzi. Improve workforce visibility and simplify everyday attendance tracking.'
  },
  'features/time-off-management': {
    title: 'Employee Leave Management Software | Workzi',
    description: 'Simplify employee leave requests, approvals and time-off tracking with Workzi. Keep leave records organized and improve workforce planning.'
  },
  'time-off-management': {
    title: 'Leave Tracking and Approval Software | Workzi',
    description: "Manage employee leave requests, approval workflows and time-off records with Workzi's streamlined workforce management platform."
  },
  'features/shift-management': {
    title: 'Employee Shift Scheduling Software | Workzi',
    description: 'Plan employee shifts, organize work schedules and coordinate staffing with Workzi. Simplify shift management for teams and growing businesses.'
  },
  'shift-management': {
    title: 'Workforce Scheduling and Shift Planning | Workzi',
    description: 'Create and manage employee work schedules with Workzi. Improve staffing visibility and coordinate shifts across teams and departments.'
  },
  'features/task-management': {
    title: 'Employee Task Management Software | Workzi',
    description: 'Assign tasks, organize team responsibilities and track work progress with Workzi. Keep workforce activities visible and teams coordinated.'
  },
  'task-management': {
    title: 'Team Task Tracking and Work Management | Workzi',
    description: "Organize employee tasks, monitor progress and coordinate daily work with Workzi's workforce management platform."
  },
  'features/employee-self-service': {
    title: 'Employee Self-Service Portal Software | Workzi',
    description: "Help employees access work schedules, attendance information and leave requests through Workzi's employee self-service experience."
  },
  'employee-self-service': {
    title: 'Employee Self-Service Software for HR | Workzi',
    description: 'Simplify everyday employee requests with Workzi. Give your workforce convenient access to essential attendance and leave management functions.'
  },
  'features/organization-management': {
    title: 'Employee and Organization Management Software | Workzi',
    description: 'Organize employee information, teams and departments with Workzi. Keep workforce records structured and support efficient HR operations.'
  },
  'organization-management': {
    title: 'Organization Structure and Employee Management | Workzi',
    description: "Manage employee records, team structures and organizational information in one place with Workzi's workforce management platform."
  },
  'features/ai-assistant': {
    title: 'AI Workforce Management Assistant | Workzi',
    description: 'Explore AI-assisted workforce management with Workzi. Support everyday workforce operations and help teams access relevant work information.'
  },
  'ai-assistant': {
    title: 'AI Assistant for Workforce Operations | Workzi',
    description: "Discover how Workzi's AI-assisted capabilities can support workforce operations, improve access to information and simplify everyday tasks."
  },
  'features/security-access-control': {
    title: 'Workforce Software Security and Access Control | Workzi',
    description: 'Manage access to workforce information with Workzi. Explore access-control capabilities designed to support secure employee and HR operations.'
  },
  'security-access-control': {
    title: 'Employee Access Control Software | Workzi',
    description: "Support controlled access to workforce data and employee management functions with Workzi's workforce management platform."
  },
  'features/mobile-experience': {
    title: 'Mobile Workforce Management Software | Workzi',
    description: 'Access workforce management features on the go with Workzi. Support mobile access to attendance, schedules and essential employee information.'
  },
  'mobile-experience': {
    title: 'Mobile Employee Attendance and Scheduling | Workzi',
    description: 'Make workforce information accessible on mobile with Workzi. Help employees and managers stay connected to schedules and attendance information.'
  },
  'features/integrations': {
    title: 'Workforce Management Software Integrations | Workzi',
    description: 'Explore Workzi integrations for connected workforce operations. Simplify information sharing between your workforce platform and supported business tools.'
  },
  'integrations': {
    title: 'Workzi Integrations for Business Workflows',
    description: 'Discover supported Workzi integrations and ways to connect workforce management with your existing business systems and workflows.'
  },

  // 3. Industry and department solution pages
  'solutions/hr': {
    title: 'Workforce Management Software for HR Teams | Workzi',
    description: "Help HR teams manage employee attendance, leave, schedules and workforce records with Workzi's centralized workforce management platform."
  },
  'solutions/it': {
    title: 'Workforce Management Solutions for IT Teams | Workzi',
    description: 'Coordinate employee schedules, attendance and daily responsibilities with Workzi. Support workforce visibility for IT teams and technology businesses.'
  },
  'solutions/engineering': {
    title: 'Workforce Management Software for Engineering Teams | Workzi',
    description: "Coordinate engineering team schedules, attendance and work responsibilities with Workzi's workforce management tools."
  },
  'solutions/sales': {
    title: 'Workforce Management Software for Sales Teams | Workzi',
    description: "Organize sales team schedules, employee attendance and daily responsibilities with Workzi's workforce management platform."
  },
  'solutions/marketing': {
    title: 'Workforce Management Software for Marketing Teams | Workzi',
    description: "Coordinate marketing team schedules, attendance and employee responsibilities with Workzi's workforce management solution."
  },
  'solutions/customer-service': {
    title: 'Workforce Management for Customer Service Teams | Workzi',
    description: 'Coordinate customer service staffing, employee schedules and attendance with Workzi. Support better workforce visibility across service teams.'
  },
  'solutions/project-management': {
    title: 'Workforce Management for Project Teams | Workzi',
    description: "Coordinate project team schedules, assign workforce responsibilities and monitor daily activities with Workzi's workforce management platform."
  },
  'solutions/education': {
    title: 'Workforce Management Software for Education | Workzi',
    description: "Organize staff attendance, work schedules and workforce records for educational institutions with Workzi's workforce management platform."
  },
  'solutions/healthcare': {
    title: 'Workforce Scheduling Software for Healthcare | Workzi',
    description: 'Coordinate healthcare staff schedules, attendance and workforce availability with Workzi. Support organized staffing and day-to-day operations.'
  },
  'solutions/financial-services': {
    title: 'Workforce Management for Financial Services | Workzi',
    description: 'Manage employee schedules, attendance and workforce information with Workzi for financial services teams and business operations.'
  },
  'solutions/manufacturing-auto-energy': {
    title: 'Workforce Management for Manufacturing and Energy | Workzi',
    description: 'Coordinate employee attendance, shifts and workforce operations across manufacturing, automotive and energy businesses with Workzi.'
  },
  'solutions/manufacturing': {
    title: 'Workforce Management for Manufacturing and Energy | Workzi',
    description: 'Coordinate employee attendance, shifts and workforce operations across manufacturing, automotive and energy businesses with Workzi.'
  },
  'solutions/retail': {
    title: 'Retail Workforce Management and Shift Scheduling | Workzi',
    description: 'Manage retail employee schedules, attendance and staffing coordination with Workzi. Organize workforce operations across retail teams.'
  },
  'solutions/technology': {
    title: 'Workforce Management Software for Technology Companies | Workzi',
    description: "Simplify employee scheduling, attendance tracking and workforce coordination for technology companies with Workzi's workforce management platform."
  },
  'solutions/media': {
    title: 'Workforce Management for Media and Creative Teams | Workzi',
    description: "Coordinate media and creative team schedules, attendance and workforce responsibilities with Workzi's workforce management tools."
  },
  'solutions/small-business': {
    title: 'Workforce Management Software for Small Businesses | Workzi',
    description: 'Simplify employee attendance, leave tracking and shift scheduling with Workzi. Manage everyday workforce operations as your small business grows.'
  },

  // 4. Business, comparison and trust pages
  'why-workzi': {
    title: 'Why Choose Workzi for Workforce Management?',
    description: 'Discover how Workzi supports employee attendance, scheduling and workforce coordination through a centralized workforce management platform.'
  },
  'why-attendx': {
    title: 'Why Choose Workzi for Workforce Management?',
    description: 'Discover how Workzi supports employee attendance, scheduling and workforce coordination through a centralized workforce management platform.'
  },
  'workzi-vs-manual-hr': {
    title: 'Workforce Management Software vs Manual HR | Workzi',
    description: 'Explore the differences between manual HR processes and workforce management software for attendance tracking, scheduling and employee records.'
  },
  'attendx-vs-manual-hr': {
    title: 'Workforce Management Software vs Manual HR | Workzi',
    description: 'Explore the differences between manual HR processes and workforce management software for attendance tracking, scheduling and employee records.'
  },
  'workzi-vs-traditional-hrms': {
    title: 'Workforce Management Software vs Traditional HRMS | Workzi',
    description: 'Compare workforce management tools with traditional HRMS platforms across attendance tracking, shift scheduling and everyday workforce operations.'
  },
  'attendx-vs-traditional-hrms': {
    title: 'Workforce Management Software vs Traditional HRMS | Workzi',
    description: 'Compare workforce management tools with traditional HRMS platforms across attendance tracking, shift scheduling and everyday workforce operations.'
  },
  'for-enterprise': {
    title: 'Enterprise Workforce Management Software | Workzi',
    description: 'Support workforce coordination across teams and departments with Workzi. Explore workforce management capabilities for enterprise operations.'
  },
  'for-small-business': {
    title: 'Workzi for Small Business Workforce Management',
    description: 'Manage employee attendance, schedules and everyday workforce operations with Workzi. Explore workforce management for growing small businesses.'
  },
  'scale-with-workzi': {
    title: 'Scalable Workforce Management Software | Workzi',
    description: 'Support changing workforce needs with Workzi. Organize attendance, scheduling and employee operations as your business grows.'
  },
  'scale-with-attendx': {
    title: 'Scalable Workforce Management Software | Workzi',
    description: 'Support changing workforce needs with Workzi. Organize attendance, scheduling and employee operations as your business grows.'
  },
  'trust-and-security': {
    title: 'Workzi Security and Data Protection',
    description: "Learn about Workzi's approach to workforce data protection, platform security and access management. Review the security measures available for your organization."
  },

  // 5. Blog, help centre and support pages
  'blog': {
    title: 'Workzi Blog | HR, Attendance and Workforce Management',
    description: 'Explore Workzi articles on employee attendance, shift scheduling, HR operations and workforce management strategies for modern businesses.'
  },
  'blog-article': {
    title: 'Workzi Blog | Workforce Management Insights',
    description: 'Read practical insights from Workzi on workforce management, employee attendance, scheduling and HR operations.'
  },
  'help-center': {
    title: 'Workzi Help Center | Product Guides and Support',
    description: 'Find Workzi product guides and support resources to help you navigate workforce management features, attendance tracking and scheduling.'
  },
  'help-article': {
    title: 'Workzi Help Guide | Product Support',
    description: 'Find guidance on using Workzi features and managing everyday workforce operations with helpful product instructions.'
  },
  'contact-support': {
    title: 'Contact Workzi Support',
    description: 'Need help with Workzi? Contact our support team for assistance with product questions, workforce management features and account-related issues.'
  },
  'faq': {
    title: 'Workzi FAQs | Workforce Management Questions',
    description: 'Find answers to frequently asked questions about Workzi, including workforce management features, employee attendance, scheduling and platform usage.'
  },

  // 6. About, careers and recruitment pages
  'about-us': {
    title: 'About Workzi | Workforce Management Platform',
    description: 'Learn about Workzi and its approach to simplifying employee attendance, scheduling and workforce operations for modern businesses.'
  },
  'careers': {
    title: 'Careers at Workzi | Explore Job Opportunities',
    description: 'Explore career opportunities at Workzi and learn about joining a team focused on workforce management, technology and better workplace operations.'
  },
  'open-roles-page': {
    title: 'Open Positions at Workzi | Current Job Vacancies',
    description: 'Explore current job openings at Workzi, review role requirements and discover opportunities to contribute to workforce management technology.'
  },
  'job-details': {
    title: 'Job Details and Requirements | Workzi Careers',
    description: 'Review job responsibilities, qualifications and application details for opportunities at Workzi. Explore the role that matches your experience.'
  },
  'apply-page': {
    title: 'Apply for a Job at Workzi',
    description: 'Submit your application for a Workzi career opportunity. Review the application requirements and share your details for consideration.'
  },
  'application-success': {
    title: 'Application Submitted | Workzi Careers',
    description: 'Your job application has been submitted. Thank you for your interest in joining Workzi.'
  },

  // 7. Legal and privacy pages
  'privacy-policy': {
    title: 'Privacy Policy | Workzi',
    description: 'Read the Workzi Privacy Policy to understand how personal information is collected, used, protected and handled when you use our services.'
  },
  'terms-of-service': {
    title: 'Terms of Service | Workzi',
    description: 'Review the Workzi Terms of Service, including the terms and conditions that apply when accessing and using the Workzi platform.'
  },
  'cookie-settings': {
    title: 'Cookie Settings and Policy | Workzi',
    description: 'Learn about cookie preferences and how cookies are used on Workzi. Review the available settings for managing your cookie choices.'
  }
};

const CANONICAL_ALIASES: Record<string, string> = {
  '': '/',
  'home': '/',
  'attendance-management': '/features/attendance-management',
  'time-off-management': '/features/time-off-management',
  'shift-management': '/features/shift-management',
  'task-management': '/features/task-management',
  'employee-self-service': '/features/employee-self-service',
  'organization-management': '/features/organization-management',
  'ai-assistant': '/features/ai-assistant',
  'security-access-control': '/features/security-access-control',
  'mobile-experience': '/features/mobile-experience',
  'integrations': '/features/integrations',
  'why-attendx': '/why-workzi',
  'attendx-vs-manual-hr': '/workzi-vs-manual-hr',
  'attendx-vs-traditional-hrms': '/workzi-vs-traditional-hrms',
  'scale-with-attendx': '/scale-with-workzi',
  'solutions/manufacturing': '/solutions/manufacturing-auto-energy',
};

function setMetaTag(attributeName: 'name' | 'property', key: string, content: string): void {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attributeName}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attributeName, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setCanonicalTag(url: string): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
}

function setStructuredDataTag(data: object): void {
  let script = document.querySelector<HTMLScriptElement>('script#workzi-dynamic-seo');
  if (!script) {
    script = document.createElement('script');
    script.id = 'workzi-dynamic-seo';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

function getBreadcrumbs(canonicalPath: string, title: string) {
  const parts = canonicalPath.split('/').filter(Boolean);
  if (parts.length === 0) return null;

  const breadcrumbs: Array<{ '@type': string; position: number; name: string; item: string }> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.workzi.app/',
    },
  ];

  if (parts[0] === 'features' && parts.length > 1) {
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Features',
      item: 'https://www.workzi.app/features',
    });
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 3,
      name: title.split('|')[0].replace('–', '-').trim(),
      item: `https://www.workzi.app${canonicalPath}`,
    });
  } else if (parts[0] === 'solutions' && parts.length > 1) {
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Solutions',
      item: 'https://www.workzi.app/solutions',
    });
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 3,
      name: title.split('|')[0].replace('–', '-').trim(),
      item: `https://www.workzi.app${canonicalPath}`,
    });
  } else if (['why-workzi', 'workzi-vs-manual-hr', 'workzi-vs-traditional-hrms', 'for-enterprise', 'for-small-business', 'scale-with-workzi', 'trust-and-security'].includes(parts[0])) {
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Why Workzi',
      item: 'https://www.workzi.app/why-workzi',
    });
    if (parts[0] !== 'why-workzi') {
      breadcrumbs.push({
        '@type': 'ListItem',
        position: 3,
        name: title.split('|')[0].replace('–', '-').trim(),
        item: `https://www.workzi.app${canonicalPath}`,
      });
    }
  } else if (['open-roles-page', 'job-details', 'apply-page'].includes(parts[0])) {
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Careers',
      item: 'https://www.workzi.app/careers',
    });
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 3,
      name: title.split('|')[0].replace('–', '-').trim(),
      item: `https://www.workzi.app${canonicalPath}`,
    });
  } else if (parts[0] === 'blog-article') {
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Blog',
      item: 'https://www.workzi.app/blog',
    });
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 3,
      name: title.split('|')[0].replace('–', '-').trim(),
      item: `https://www.workzi.app${canonicalPath}`,
    });
  } else {
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 2,
      name: title.split('|')[0].replace('–', '-').trim(),
      item: `https://www.workzi.app${canonicalPath}`,
    });
  }

  return {
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs,
  };
}

/**
 * Call inside App with currentView and raw currentPath.
 * Synchronizes title, description, canonical link, Open Graph,
 * Twitter Cards, robots directive, and JSON-LD structured data.
 */
export function useSEO(currentView: string, currentPath: string): void {
  useEffect(() => {
    // Derive lookup key
    const pathKey = currentPath.replace(/^[#/]+/, '');
    
    // First try exact path without leading slash, then fallback to currentView, then home
    const meta =
      SEO_MAP[pathKey] ??
      SEO_MAP[currentView] ??
      SEO_MAP[''];

    const isNotFound = currentView === 'not-found';
    const resolvedTitle = isNotFound ? 'Page Not Found | Workzi' : meta.title;
    const resolvedDesc = isNotFound ? 'The requested page could not be found on Workzi.' : meta.description;

    // Update document title
    document.title = resolvedTitle;

    // Standard Meta Tags
    setMetaTag('name', 'description', resolvedDesc);
    setMetaTag('name', 'robots', isNotFound ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'author', 'Workzi');

    // Canonical URL resolution
    const canonicalPath = CANONICAL_ALIASES[pathKey] ?? (pathKey ? `/${pathKey}` : '/');
    const canonicalUrl = `https://www.workzi.app${canonicalPath === '/' ? '/' : canonicalPath}`;
    setCanonicalTag(canonicalUrl);

    // Open Graph
    const ogImage = 'https://www.workzi.app/hero.home.png';
    setMetaTag('property', 'og:title', resolvedTitle);
    setMetaTag('property', 'og:description', resolvedDesc);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', pathKey === 'blog-article' ? 'article' : 'website');
    setMetaTag('property', 'og:site_name', 'Workzi');
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:locale', 'en_US');

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:site', '@workziapp');
    setMetaTag('name', 'twitter:creator', '@workziapp');
    setMetaTag('name', 'twitter:title', resolvedTitle);
    setMetaTag('name', 'twitter:description', resolvedDesc);
    setMetaTag('name', 'twitter:image', ogImage);

    // Dynamic JSON-LD Structured Data
    if (!isNotFound) {
      const graphItems: object[] = [];

      // WebPage node
      graphItems.push({
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: resolvedTitle,
        description: resolvedDesc,
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://www.workzi.app/#website',
          name: 'Workzi',
          url: 'https://www.workzi.app'
        }
      });

      // Breadcrumbs
      const breadcrumbData = getBreadcrumbs(canonicalPath, resolvedTitle);
      if (breadcrumbData) {
        graphItems.push(breadcrumbData);
      }

      // Route-specific schemas
      if (canonicalPath.startsWith('/features')) {
        graphItems.push({
          '@type': 'SoftwareApplication',
          '@id': `${canonicalUrl}#software`,
          name: resolvedTitle.split('|')[0].trim(),
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Web, iOS, Android',
          description: resolvedDesc,
          provider: {
            '@type': 'Organization',
            name: 'Workzi',
            url: 'https://www.workzi.app'
          }
        });
      } else if (canonicalPath === '/faq') {
        graphItems.push({
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How does geolocation tracking work in Workzi?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Workzi utilizes secure mobile GPS to verify employee locations when clocking in or out. Geofenced boundaries can be configured by HR managers to restrict check-ins to specific office boundaries or remote sites.'
              }
            },
            {
              '@type': 'Question',
              name: 'Can Workzi integrate with existing payroll software?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Workzi supports automated timesheet exports (CSV/Excel) and offers modern API integration endpoints that connect seamlessly with leading payroll platforms.'
              }
            },
            {
              '@type': 'Question',
              name: 'Does the Workzi application work in offline mode?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. Employees can log attendance or request time off offline. Data is stored locally and syncs automatically once connection is restored.'
              }
            },
            {
              '@type': 'Question',
              name: 'Is employee data secure and compliant in Workzi?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Workzi uses AES-256 encryption at rest, TLS 1.3 in transit, and follows SOC 2 Type II and GDPR compliance standards.'
              }
            }
          ]
        });
      }

      setStructuredDataTag({
        '@context': 'https://schema.org',
        '@graph': graphItems
      });
    }
  }, [currentView, currentPath]);
}
