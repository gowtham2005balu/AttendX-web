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
    title: 'Features | AttendX',
    description:
      'Explore all AttendX features — attendance tracking, Time-off management, shift scheduling, task management, and more for modern HR teams.',
  },
  'attendance-management': {
    title: 'Attendance Management Software | AttendX',
    description:
      'Track and manage employee attendance in real time with AttendX. Automated records, absence alerts, and powerful reporting in one platform.',
  },
  'Time-off-management': {
    title: 'Time-off Management Software | AttendX',
    description:
      'Automate Time-off requests, approvals, and balances with AttendX Time-off Management. Give employees self-service Time-off tracking and HR full visibility.',
  },
  'task-management': {
    title: 'Task Management Software | AttendX',
    description:
      'Assign, track, and manage employee tasks in real time with AttendX Task Management. Keep teams aligned and productivity visible in one dashboard.',
  },
  'employee-management': {
    title: 'Employee Management Software | AttendX',
    description:
      'Centralize employee records, roles, and performance data with AttendX Employee Management. One system for your entire workforce.',
  },
  'shift-management': {
    title: 'Shift Management Software | AttendX',
    description:
      'Plan, assign, and adjust employee shifts effortlessly with AttendX Shift Management. Reduce scheduling conflicts and no-shows.',
  },
  'organization-management': {
    title: 'Organization Management Software | AttendX',
    description:
      'Structure departments, teams, and reporting lines with AttendX Organization Management. Keep your org chart accurate and accessible.',
  },
  'employee-self-service': {
    title: 'Employee Self Service Portal | AttendX',
    description:
      'Let employees manage attendance, Time-off, and personal details themselves with the AttendX Employee Self Service portal. Less admin, more autonomy.',
  },
  'ai-assistant': {
    title: 'AI Assistant for HR Teams | AttendX',
    description:
      "AttendX's AI Assistant answers HR queries, surfaces attendance insights, and automates routine tasks so your HR team can focus on people.",
  },
  'security-access-control': {
    title: 'Security & Access Control | AttendX',
    description:
      'Learn how AttendX protects your employee and organization data with enterprise-grade security, encryption, and granular access controls.',
  },
  'mobile-experience': {
    title: 'Mobile Experience | AttendX',
    description:
      'Manage attendance, Time-off, and tasks on the go with the AttendX mobile experience — built for managers and employees alike.',
  },
  integrations: {
    title: 'Integrations | AttendX',
    description:
      'Connect AttendX with your existing HR tools and workflows. Explore available integrations to streamline your attendance management.',
  },

  // ── Why AttendX ───────────────────────────────────────────────────────────
  'why-attendx': {
    title: 'Why Choose AttendX | Smart Attendance Management',
    description:
      'See why growing businesses choose AttendX for attendance and HR management — automation, accuracy, and a platform built to scale with your team.',
  },
  'attendx-vs-manual-hr': {
    title: 'AttendX vs Manual HR | Compare & Switch',
    description:
      'Compare AttendX to manual HR processes. See how automated attendance, Time-off, and shift management save time and cut errors versus spreadsheets.',
  },
  'attendx-vs-traditional-hrms': {
    title: 'AttendX vs Traditional HRMS | Compare & Switch',
    description:
      'See how AttendX compares to traditional HRMS platforms — faster setup, modern UI, and features built for how growing teams actually work.',
  },
  'for-enterprise': {
    title: 'AttendX for Enterprise | Scalable Attendance Management',
    description:
      'AttendX scales with large, multi-location teams — advanced permissions, org-wide reporting, and enterprise-grade attendance management.',
  },
  'for-small-business': {
    title: 'AttendX for Small Business | Simple Attendance Management',
    description:
      'AttendX gives small businesses enterprise-level attendance and HR tools without the complexity — simple to set up, easy to run.',
  },
  'scale-with-attendx': {
    title: 'Scale With AttendX | Attendance Management That Grows With You',
    description:
      'Discover how AttendX scales alongside your business — from small teams to enterprise, without changing platforms.',
  },
  'trust-and-security': {
    title: 'Trust & Security | AttendX',
    description:
      'Learn how AttendX protects your employee and organization data with enterprise-grade security, encryption, and access controls.',
  },

  // ── Solutions ─────────────────────────────────────────────────────────────
  solutions: {
    title: 'Solutions | AttendX',
    description:
      'AttendX offers tailored attendance management solutions for every industry — from education and healthcare to manufacturing and retail.',
  },
  'education-solutions': {
    title: 'Attendance Management for Education | AttendX',
    description:
      'AttendX helps schools and institutions track staff attendance, manage Time-off, and simplify HR operations built for the education sector.',
  },
  'hr-solutions': {
    title: 'Attendance Management for HR Teams | AttendX',
    description:
      'AttendX gives HR teams a single platform to manage attendance, Time-off, shifts, and employee records — built to reduce manual HR work.',
  },
  'customer-service-solutions': {
    title: 'Attendance Management for Customer Service Teams | AttendX',
    description:
      "Keep customer service shifts covered and staff accountable with AttendX's attendance and shift management built for support teams.",
  },
  'engineering-solutions': {
    title: 'Attendance Management for Engineering Teams | AttendX',
    description:
      'AttendX helps engineering teams track attendance, tasks, and shifts across projects, keeping delivery timelines and headcount visible.',
  },
  'it-solutions': {
    title: 'Attendance Management for IT Teams | AttendX',
    description:
      'AttendX helps IT teams manage on-call shifts, attendance, and task tracking in one platform built for fast-moving technical teams.',
  },
  'sales-solutions': {
    title: 'Attendance Management for Sales Teams | AttendX',
    description:
      'Keep your sales team attendance and shift schedules on track with AttendX — built for field and office-based sales operations.',
  },
  'project-management-solutions': {
    title: 'Attendance Management for Project Teams | AttendX',
    description:
      'Track team attendance alongside tasks and deadlines with AttendX — built for project managers who need visibility across people and work.',
  },
  'marketing-solutions': {
    title: 'Attendance Management for Marketing Teams | AttendX',
    description:
      'AttendX helps marketing teams manage attendance, Time-off, and task tracking so campaigns stay on schedule and staffing stays visible.',
  },
  'manufacturing-auto-energy-solutions': {
    title: 'Attendance Management for Manufacturing, Auto & Energy | AttendX',
    description:
      'AttendX supports shift-heavy industries like manufacturing, automotive, and energy with reliable attendance tracking and shift management.',
  },
  'technology-solutions': {
    title: 'Attendance Management for Technology Companies | AttendX',
    description:
      'AttendX gives tech companies a modern attendance and HR platform built for fast-growing, distributed teams.',
  },
  'media-solutions': {
    title: 'Attendance Management for Media Companies | AttendX',
    description:
      'AttendX helps media organizations manage attendance, shifts, and freelance staff across productions and newsrooms.',
  },
  'small-business-solutions': {
    title: 'Attendance Management for Small Business | AttendX',
    description:
      'AttendX gives small businesses simple, affordable attendance and HR management without the complexity of enterprise HRMS tools.',
  },
  'financial-services-solutions': {
    title: 'Attendance Management for Financial Services | AttendX',
    description:
      'AttendX helps financial services firms manage attendance, compliance-ready records, and staff scheduling in one secure platform.',
  },
  'retail-solutions': {
    title: 'Attendance Management for Retail | AttendX',
    description:
      'AttendX helps retail businesses manage shift-based attendance, staffing, and Time-off across single or multiple store locations.',
  },
  'healthcare-solutions': {
    title: 'Attendance Management for Health & Life Sciences | AttendX',
    description:
      'AttendX supports health and life sciences organizations with reliable attendance tracking for clinical, lab, and administrative staff.',
  },

  // ── Resources ─────────────────────────────────────────────────────────────
  faq: {
    title: 'FAQ | AttendX',
    description:
      "Find answers to common questions about AttendX's attendance management features, pricing, setup, and support.",
  },
  'help-center': {
    title: 'Help Center | AttendX',
    description:
      'Get help using AttendX — guides, setup instructions, and troubleshooting for attendance, Time-off, and HR management features.',
  },
  'help-article': {
    title: 'Help Center | AttendX',
    description:
      'Get help using AttendX — guides, setup instructions, and troubleshooting for attendance, Time-off, and HR management features.',
  },
  'contact-support': {
    title: 'Contact Us | AttendX',
    description:
      'Get in touch with the AttendX team for product questions, demos, or support with your attendance management setup.',
  },

  // ── Company ───────────────────────────────────────────────────────────────
  careers: {
    title: 'Careers at Workzi | Build the Future of HR Tech',
    description:
      'Join the team building modern workforce management software. Explore open roles at Workzi — remote-friendly, people-first, growing fast.',
  },
  'open-roles-page': {
    title: 'Open Roles | AttendX Careers',
    description:
      'Browse all open positions at AttendX. Join a team building the future of attendance and HR management software.',
  },
  'job-details': {
    title: 'Job Details | AttendX Careers',
    description:
      'View role details and apply for a position at AttendX — building smart attendance management software for modern HR teams.',
  },
  'apply-page': {
    title: 'Apply | AttendX Careers',
    description: 'Submit your application to join the AttendX team.',
  },
  'application-success': {
    title: 'Application Submitted | AttendX Careers',
    description:
      "Thank you for applying to AttendX! We'll review your application and be in touch soon.",
  },
  blog: {
    title: 'Blog | AttendX',
    description:
      'Insights on attendance management, HR trends, and workforce best practices from the AttendX team.',
  },
  'blog-article': {
    title: 'Blog | AttendX',
    description:
      'Insights on attendance management, HR trends, and workforce best practices from the AttendX team.',
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
    title: 'Pricing | AttendX',
    description:
      'Simple, transparent pricing for teams of all sizes. Get started with AttendX and scale as you grow.',
  },
  'education-2': {
    title: 'Attendance Management for Education | AttendX',
    description:
      'AttendX helps schools and institutions track staff attendance, manage Time-off, and simplify HR operations built for the education sector.',
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
 * string and the raw currentHash. Updates document.title + meta description
 * on every navigation.
 */
export function useSEO(currentView: string, currentHash: string): void {
  useEffect(() => {
    // Derive a lookup key: prefer raw hash-based keys for pages that don't
    // go through getBaseView (e.g. #blog-article sub-hashes).
    const hashKey = currentHash.replace(/^#/, '');
    const meta =
      SEO_MAP[currentView] ??
      SEO_MAP[hashKey] ??
      SEO_MAP['home'];

    document.title = meta.title;
    getMetaDescriptionTag().content = meta.description;
  }, [currentView, currentHash]);
}
