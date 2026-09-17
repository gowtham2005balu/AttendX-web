import { useEffect } from 'react';

interface SEOMeta {
  title: string;
  description: string;
}

/**
 * Maps a currentView (from getBaseView) + raw currentHash to the correct
 * SEO title & description, then imperatively syncs document.title and the
 * <meta name="description"> tag.
 */
const SEO_MAP: Record<string, SEOMeta> = {
  // ── Homepage ──────────────────────────────────────────────────────────────
  home: {
    title: 'Workzi | Attendance, Time-off & Workforce Management Platform',
    description:
      'Track attendance, manage Time-off, and run HR operations from one platform. Workzi gives employees, managers, and HR teams everything they need in one place. Book a demo today.',
  },

  // ── About Us & Legal ──────────────────────────────────────────────────────
  'about-us': {
    title: 'About Us | Building the Future of Workforce Management — Workzi',
    description:
      'We help modern teams simplify attendance, payroll, and people operations with one connected HRMS platform built from the ground up.',
  },
  'cookie-settings': {
    title: 'Cookie Settings | Workzi',
    description:
      'Manage your cookie preferences and control how Workzi uses cookies and similar technologies.',
  },
  'terms-of-service': {
    title: 'Terms of Service | Workzi',
    description:
      'The terms and conditions that govern your use of Workzi workforce management services and platform.',
  },
  'privacy-policy': {
    title: 'Privacy Policy | Workzi',
    description:
      'How Workzi collects, uses, protects, and manages your information when you use our website and services.',
  },

  // ── Features ──────────────────────────────────────────────────────────────
  features: {
    title: 'Features | Workzi',
    description:
      'Explore all Workzi features — attendance tracking, Time-off management, shift scheduling, task management, and more for modern HR teams.',
  },
  'attendance-management': {
    title: 'Attendance Management Software | Workzi',
    description:
      'Track and manage employee attendance in real time with Workzi. Automated records, absence alerts, and powerful reporting in one platform.',
  },
  'Time-off-management': {
    title: 'Time-off Management Software | Workzi',
    description:
      'Automate Time-off requests, approvals, and balances with Workzi Time-off Management. Give employees self-service Time-off tracking and HR full visibility.',
  },
  'task-management': {
    title: 'Task Management Software | Workzi',
    description:
      'Assign, track, and manage employee tasks in real time with Workzi Task Management. Keep teams aligned and productivity visible in one dashboard.',
  },
  'employee-management': {
    title: 'Employee Management Software | Workzi',
    description:
      'Centralize employee records, roles, and performance data with Workzi Employee Management. One system for your entire workforce.',
  },
  'shift-management': {
    title: 'Shift Management Software | Workzi',
    description:
      'Plan, assign, and adjust employee shifts effortlessly with Workzi Shift Management. Reduce scheduling conflicts and no-shows.',
  },
  'organization-management': {
    title: 'Organization Management Software | Workzi',
    description:
      'Structure departments, teams, and reporting lines with Workzi Organization Management. Keep your org chart accurate and accessible.',
  },
  'employee-self-service': {
    title: 'Employee Self Service Portal | Workzi',
    description:
      'Let employees manage attendance, Time-off, and personal details themselves with the Workzi Employee Self Service portal. Less admin, more autonomy.',
  },
  'ai-assistant': {
    title: 'AI Assistant for HR Teams | Workzi',
    description:
      "Workzi's AI Assistant answers HR queries, surfaces attendance insights, and automates routine tasks so your HR team can focus on people.",
  },
  'security-access-control': {
    title: 'Security & Access Control | Workzi',
    description:
      'Learn how Workzi protects your employee and organization data with enterprise-grade security, encryption, and granular access controls.',
  },
  'mobile-experience': {
    title: 'Mobile Experience | Workzi',
    description:
      'Manage attendance, Time-off, and tasks on the go with the Workzi mobile experience — built for managers and employees alike.',
  },
  integrations: {
    title: 'Integrations | Workzi',
    description:
      'Connect Workzi with your existing HR tools and workflows. Explore available integrations to streamline your attendance management.',
  },

  // ── Why Workzi ───────────────────────────────────────────────────────────
  'why-workzi': {
    title: 'Why Choose Workzi | Smart Attendance Management',
    description:
      'See why growing businesses choose Workzi for attendance and HR management — automation, accuracy, and a platform built to scale with your team.',
  },
  'workzi-vs-manual-hr': {
    title: 'Workzi vs Manual HR | Compare & Switch',
    description:
      'Compare Workzi to manual HR processes. See how automated attendance, Time-off, and shift management save time and cut errors versus spreadsheets.',
  },
  'workzi-vs-traditional-hrms': {
    title: 'Workzi vs Traditional HRMS | Compare & Switch',
    description:
      'See how Workzi compares to traditional HRMS platforms — faster setup, modern UI, and features built for how growing teams actually work.',
  },
  'for-enterprise': {
    title: 'Workzi for Enterprise | Scalable Attendance Management',
    description:
      'Workzi scales with large, multi-location teams — advanced permissions, org-wide reporting, and enterprise-grade attendance management.',
  },
  'for-small-business': {
    title: 'Workzi for Small Business | Simple Attendance Management',
    description:
      'Workzi gives small businesses enterprise-level attendance and HR tools without the complexity — simple to set up, easy to run.',
  },
  'scale-with-workzi': {
    title: 'Scale With Workzi | Attendance Management That Grows With You',
    description:
      'Discover how Workzi scales alongside your business — from small teams to enterprise, without changing platforms.',
  },
  'trust-and-security': {
    title: 'Trust & Security | Workzi',
    description:
      'Learn how Workzi protects your employee and organization data with enterprise-grade security, encryption, and access controls.',
  },

  // ── Solutions ─────────────────────────────────────────────────────────────
  solutions: {
    title: 'Solutions | Workzi',
    description:
      'Workzi offers tailored attendance management solutions for every industry — from education and healthcare to manufacturing and retail.',
  },
  'education-solutions': {
    title: 'Attendance Management for Education | Workzi',
    description:
      'Workzi helps schools and institutions track staff attendance, manage Time-off, and simplify HR operations built for the education sector.',
  },
  'hr-solutions': {
    title: 'Attendance Management for HR Teams | Workzi',
    description:
      'Workzi gives HR teams a single platform to manage attendance, Time-off, shifts, and employee records — built to reduce manual HR work.',
  },
  'customer-service-solutions': {
    title: 'Attendance Management for Customer Service Teams | Workzi',
    description:
      "Keep customer service shifts covered and staff accountable with Workzi's attendance and shift management built for support teams.",
  },
  'engineering-solutions': {
    title: 'Attendance Management for Engineering Teams | Workzi',
    description:
      'Workzi helps engineering teams track attendance, tasks, and shifts across projects, keeping delivery timelines and headcount visible.',
  },
  'it-solutions': {
    title: 'Attendance Management for IT Teams | Workzi',
    description:
      'Workzi helps IT teams manage on-call shifts, attendance, and task tracking in one platform built for fast-moving technical teams.',
  },
  'sales-solutions': {
    title: 'Attendance Management for Sales Teams | Workzi',
    description:
      'Keep your sales team attendance and shift schedules on track with Workzi — built for field and office-based sales operations.',
  },
  'project-management-solutions': {
    title: 'Attendance Management for Project Teams | Workzi',
    description:
      'Track team attendance alongside tasks and deadlines with Workzi — built for project managers who need visibility across people and work.',
  },
  'marketing-solutions': {
    title: 'Attendance Management for Marketing Teams | Workzi',
    description:
      'Workzi helps marketing teams manage attendance, Time-off, and task tracking so campaigns stay on schedule and staffing stays visible.',
  },
  'manufacturing-auto-energy-solutions': {
    title: 'Attendance Management for Manufacturing, Auto & Energy | Workzi',
    description:
      'Workzi supports shift-heavy industries like manufacturing, automotive, and energy with reliable attendance tracking and shift management.',
  },
  'technology-solutions': {
    title: 'Attendance Management for Technology Companies | Workzi',
    description:
      'Workzi gives tech companies a modern attendance and HR platform built for fast-growing, distributed teams.',
  },
  'media-solutions': {
    title: 'Attendance Management for Media Companies | Workzi',
    description:
      'Workzi helps media organizations manage attendance, shifts, and freelance staff across productions and newsrooms.',
  },
  'small-business-solutions': {
    title: 'Attendance Management for Small Business | Workzi',
    description:
      'Workzi gives small businesses simple, affordable attendance and HR management without the complexity of enterprise HRMS tools.',
  },
  'financial-services-solutions': {
    title: 'Attendance Management for Financial Services | Workzi',
    description:
      'Workzi helps financial services firms manage attendance, compliance-ready records, and staff scheduling in one secure platform.',
  },
  'retail-solutions': {
    title: 'Attendance Management for Retail | Workzi',
    description:
      'Workzi helps retail businesses manage shift-based attendance, staffing, and Time-off across single or multiple store locations.',
  },
  'healthcare-solutions': {
    title: 'Attendance Management for Health & Life Sciences | Workzi',
    description:
      'Workzi supports health and life sciences organizations with reliable attendance tracking for clinical, lab, and administrative staff.',
  },

  // ── Resources ─────────────────────────────────────────────────────────────
  faq: {
    title: 'FAQ | Workzi',
    description:
      "Find answers to common questions about Workzi's attendance management features, pricing, setup, and support.",
  },
  'help-center': {
    title: 'Help Center | Workzi',
    description:
      'Get help using Workzi — guides, setup instructions, and troubleshooting for attendance, Time-off, and HR management features.',
  },
  'help-article': {
    title: 'Help Center | Workzi',
    description:
      'Get help using Workzi — guides, setup instructions, and troubleshooting for attendance, Time-off, and HR management features.',
  },
  'contact-support': {
    title: 'Contact Us | Workzi',
    description:
      'Get in touch with the Workzi team for product questions, demos, or support with your attendance management setup.',
  },

  // ── Company ───────────────────────────────────────────────────────────────
  careers: {
    title: 'Careers at Workzi | Build the Future of HR Tech',
    description:
      'Join the team building modern workforce management software. Explore open roles at Workzi — remote-friendly, people-first, growing fast.',
  },
  'open-roles-page': {
    title: 'Open Roles | Workzi Careers',
    description:
      'Browse all open positions at Workzi. Join a team building the future of attendance and HR management software.',
  },
  'job-details': {
    title: 'Job Details | Workzi Careers',
    description:
      'View role details and apply for a position at Workzi — building smart attendance management software for modern HR teams.',
  },
  'apply-page': {
    title: 'Apply | Workzi Careers',
    description: 'Submit your application to join the Workzi team.',
  },
  'application-success': {
    title: 'Application Submitted | Workzi Careers',
    description:
      "Thank you for applying to Workzi! We'll review your application and be in touch soon.",
  },
  blog: {
    title: 'Blog | Workzi',
    description:
      'Insights on attendance management, HR trends, and workforce best practices from the Workzi team.',
  },
  'blog-article': {
    title: 'Blog | Workzi',
    description:
      'Insights on attendance management, HR trends, and workforce best practices from the Workzi team.',
  },

  // ── Other standalone pages ────────────────────────────────────────────────
  'employee-app': {
    title: 'Employee App | Attendance, Time-off & Tasks — Workzi',
    description:
      "Check in, apply for Time-off, track tasks, and stay updated — all from your phone. See how Workzi's employee app makes your workday easier.",
  },
  'hr-manager': {
    title: 'HR & Manager Tools | Workforce Management Platform — Workzi',
    description:
      'Manage attendance, Time-off, employees, and reporting from one platform. Workzi gives HR teams and managers everything they need to run a growing team.',
  },
  pricing: {
    title: 'Pricing | Workzi',
    description:
      'Simple, transparent pricing for teams of all sizes. Get started with Workzi and scale as you grow.',
  },
  'education-2': {
    title: 'Attendance Management for Education | Workzi',
    description:
      'Workzi helps schools and institutions track staff attendance, manage Time-off, and simplify HR operations built for the education sector.',
  },
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
    // Derive a lookup key: prefer raw path-based keys for pages that don't
    // go through getBaseView (e.g. blog-article sub-paths).
    const pathKey = currentPath.replace(/^[#/]+/, '');
    const meta =
      SEO_MAP[currentView] ??
      SEO_MAP[pathKey] ??
      SEO_MAP['home'];

    document.title = meta.title;
    getMetaDescriptionTag().content = meta.description;
  }, [currentView, currentPath]);
}
