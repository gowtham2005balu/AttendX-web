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
  'why-attendx': {
    title: 'Why Choose Workzi for Workforce Management?',
    description: 'Discover how Workzi supports employee attendance, scheduling and workforce coordination through a centralized workforce management platform.'
  },
  'attendx-vs-manual-hr': {
    title: 'Workforce Management Software vs Manual HR | Workzi',
    description: 'Explore the differences between manual HR processes and workforce management software for attendance tracking, scheduling and employee records.'
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

function getMetaDescriptionTag(): HTMLMetaElement {
  let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!tag) {
    tag = document.createElement('meta');
    tag.name = 'description';
    document.head.appendChild(tag);
  }
  return tag;
}

/**
 * Call inside App (or any top-level component) with the resolved currentView
 * string and the raw currentPath. Updates document.title + meta description
 * on every navigation.
 */
export function useSEO(currentView: string, currentPath: string): void {
  useEffect(() => {
    // Derive a lookup key
    const pathKey = currentPath.replace(/^[#/]+/, '');
    
    // First try the exact path without leading slash, then fallback to currentView, then home
    const meta =
      SEO_MAP[pathKey] ??
      SEO_MAP[currentView] ??
      SEO_MAP[''];

    if (meta) {
      document.title = meta.title;
      getMetaDescriptionTag().content = meta.description;
    }
  }, [currentView, currentPath]);
}
