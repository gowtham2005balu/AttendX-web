
export interface NavDropdownItem {
  label: string;
  href: string;
  description: string;
  icon: string;
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export const SOLUTIONS_BY_INDUSTRY: NavDropdownItem[] = [
  {
    label: 'Education',
    href: '#education-solutions',
    description: 'Campus attendance tracking, timetables, and resource management',
    icon: 'education',
  },
  {
    label: 'Healthcare & Life Sciences',
    href: '#healthcare-solutions',
    description: '24/7 clinical shift coverage & multi-facility attendance',
    icon: 'stethoscope',
  },
  {
    label: 'Financial Services',
    href: '#financial-services-solutions',
    description: 'Multi-branch attendance & compliance-ready reporting',
    icon: 'landmark',
  },
  {
    label: 'Manufacturing, Auto & Energy',
    href: '#manufacturing-auto-energy-solutions',
    description: 'Plant-floor shift & multi-location workforce management',
    icon: 'industry',
  },
  {
    label: 'Retail',
    href: '#retail-solutions',
    description: 'Multi-store shift scheduling for full-time & hourly staff',
    icon: 'shopping',
  },
  {
    label: 'Technology',
    href: '#technology-solutions',
    description: 'Workforce management for fast-growing, distributed tech teams',
    icon: 'code',
  },
  {
    label: 'Media',
    href: '#media-solutions',
    description: 'Crew shift management across full-time & freelance staff',
    icon: 'film',
  },
  {
    label: 'Small Business',
    href: '#small-business-solutions',
    description: 'Simple attendance, leave & everyday HR without complexity',
    icon: 'building',
  },
];

export const SOLUTIONS_BY_DEPARTMENT: NavDropdownItem[] = [
  {
    label: 'Human Resources',
    href: '#hr-solutions',
    description: 'Employee records, leave approvals & HR workflows',
    icon: 'users',
  },
  {
    label: 'IT',
    href: '#it-solutions',
    description: 'Role permissions, secure auth & access control oversight',
    icon: 'shield',
  },
  {
    label: 'Engineering',
    href: '#engineering-solutions',
    description: 'On-call rotations, remote attendance & sprint availability',
    icon: 'code',
  },
  {
    label: 'Sales',
    href: '#sales-solutions',
    description: 'GPS attendance for field & office reps, territory leave ops',
    icon: 'workforce',
  },
  {
    label: 'Marketing',
    href: '#marketing-solutions',
    description: 'Campaign task tracking & launch availability calendar',
    icon: 'megaphones',
  },
  {
    label: 'Customer Service',
    href: '#customer-service-solutions',
    description: 'Support team shift scheduling & queue coverage',
    icon: 'headsets',
  },
  {
    label: 'Project Management',
    href: '#project-management-solutions',
    description: 'Task assignment & capacity planning tied to availability',
    icon: 'tasks',
  },
];

export const SOLUTIONS_DROPDOWN: NavDropdownItem[] = [
  ...SOLUTIONS_BY_INDUSTRY,
  ...SOLUTIONS_BY_DEPARTMENT,
];

export const FEATURES_WORKFORCE_MANAGEMENT: NavDropdownItem[] = [
  {
    label: 'Attendance Management',
    href: '#attendance-management',
    description: 'Geo-fenced attendance tracking, real-time shift monitoring & clock-in history',
    icon: 'clock',
  },
  {
    label: 'Leave Management',
    href: '#leave-management',
    description: 'Apply, approve and track leave without the back-and-forth',
    icon: 'calendar',
  },
  {
    label: 'Shift Management',
    href: '#shift-management',
    description: 'Build shifts once, assign them in seconds with automatic rotation & grace periods',
    icon: 'shifts',
  },
  {
    label: 'Employee self service',
    href: '#employee-self-service',
    description: 'Update profile, download documents and raise HR requests without waiting',
    icon: 'self-service',
  },
];

export const FEATURES_PRODUCTIVITY_OPERATIONS: NavDropdownItem[] = [
  {
    label: 'Task Management',
    href: '#task-management',
    description: 'Assign tasks, track progress and hit deadlines inside attendance & leave platform',
    icon: 'tasks',
  },
  {
    label: 'Organization Management',
    href: '#organization-management',
    description: 'Build your org structure, departments, reporting lines & role permissions',
    icon: 'org-management',
  },
  {
    label: 'AI Assistant',
    href: '#ai-assistant',
    description: 'Ask questions, detect attendance anomalies & get predictive leave analytics',
    icon: 'ai-assistant',
  },
  {
    label: 'Mobile Experience',
    href: '#mobile-experience',
    description: 'Check in from anywhere with GPS verification, offline sync & push notifications',
    icon: 'mobile',
  },
];

export const FEATURES_PLATFORM: NavDropdownItem[] = [
  {
    label: 'Security & Access Control',
    href: '#security-access-control',
    description: 'SSO login, AES-256 data encryption, active session management & audit logs',
    icon: 'security',
  },
  {
    label: 'Integrations',
    href: '#integrations',
    description: 'Connect payroll, ERP, Slack, Teams, calendars & biometric devices',
    icon: 'integrations',
  },
];

export const FEATURES_DROPDOWN: NavDropdownItem[] = [
  ...FEATURES_WORKFORCE_MANAGEMENT,
  ...FEATURES_PRODUCTIVITY_OPERATIONS,
  ...FEATURES_PLATFORM,
];

export const WHY_ATTENDX_DROPDOWN: NavDropdownItem[] = [
  {
    label: 'Why Workzi Overview',
    href: '#why-attendx',
    description: 'Learn why modern HR teams choose Workzi to automate attendance & workforce ops',
    icon: 'sparkles',
  },
  {
    label: 'Workzi vs Manual HR',
    href: '#attendx-vs-manual-hr',
    description: 'Save 15+ hours weekly by replacing paper registers and Excel spreadsheets',
    icon: 'clock',
  },
  {
    label: 'Workzi vs Traditional HRMS',
    href: '#attendx-vs-traditional-hrms',
    description: 'Fast 5-minute setup vs months of complex legacy software implementation',
    icon: 'zap',
  },
  {
    label: 'For Enterprise',
    href: '#for-enterprise',
    description: 'Multi-branch hierarchy, custom approval matrix, SSO, and 99.99% uptime SLA',
    icon: 'building',
  },
  {
    label: 'For Small Business',
    href: '#for-small-business',
    description: 'Simple, affordable attendance & leave tracking for teams from 5 to 100 staff',
    icon: 'users',
  },
  {
    label: 'Scale with Workzi',
    href: '#scale-with-attendx',
    description: 'Grow seamlessly from 10 to 10,000+ employees without changing systems',
    icon: 'workforce',
  },
  {
    label: 'Trust and Security',
    href: '#trust-and-security',
    description: 'AES-256 encryption, SOC 2 compliance, GDPR standards, and tamper-proof logs',
    icon: 'shield',
  },
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Solutions', href: '#', dropdown: SOLUTIONS_DROPDOWN },
  { label: 'Features', href: '#features', dropdown: FEATURES_DROPDOWN },
  { label: 'Employee', href: '#employee-app' },
  { label: 'HR & Manager', href: '#hr-manager' },
  { label: 'Pricing', href: '#pricing' },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'How does geolocation tracking work?',
    answer: 'Workzi utilizes secure mobile GPS to verify employee locations when clocking in or out. Boundaries (geofences) can be configured by HR managers to restrict check-ins to specific office boundaries or remote work sites.'
  },
  {
    question: 'Can we integrate with our existing payroll software?',
    answer: 'Absolutely. Workzi supports standard exports (CSV/Excel) and offers modern API integration endpoints that connect seamlessly with leading payroll platforms like ADP, BambooHR, and SAP.'
  },
  {
    question: 'Does the application work in offline mode?',
    answer: 'Yes! Employees can still log their attendance or request time off while offline. The application securely stores data locally on the device and automatically syncs it once internet connection is restored.'
  },
  {
    question: 'Is employee data secure and compliant?',
    answer: 'Data security is our top priority. We use AES-256 encryption for data at rest and TLS 1.3 for data in transit. Workzi is fully GDPR and SOC 2 Type II compliant.'
  },
  {
    question: 'How do managers approve leave requests?',
    answer: 'Managers receive instant push notifications and emails when requests are submitted. They can review overlapping calendar events and approve/reject requests with a single click directly from the dashboard or mobile app.'
  },
  {
    question: 'What types of reports can we generate?',
    answer: 'You can generate detailed timesheets, leave balance sheets, overtime reports, shift allocation statistics, and late-arrival breakdowns. All reports can be filtered by department, team, or individual employee.'
  }
];

export interface BlogItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  readTime: string;
  category: string;
}

export const BLOGS: BlogItem[] = [
  {
    id: 1,
    title: 'The Future of Hybrid Work: Best Practices for 2026',
    description: 'Discover how modern enterprises are balancing remote autonomy and office collaboration through flexible attendance frameworks.',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80',
    date: 'June 28, 2026',
    readTime: '5 min read',
    category: 'Workplace Trends'
  },
  {
    id: 2,
    title: 'Reducing Employee Burnout with Predictive Leave Management',
    description: 'Learn how identifying patterns in leave requests and workload distributions helps HR teams proactively prevent burnout.',
    imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    date: 'June 15, 2026',
    readTime: '8 min read',
    category: 'HR Management'
  },
  {
    id: 3,
    title: 'Optimizing Global Payroll Sync: An Integration Guide',
    description: 'A deep-dive technical look at syncing attendance and timesheet records securely with distributed international payroll provider APIs.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
    date: 'May 30, 2026',
    readTime: '6 min read',
    category: 'Technology'
  }
];

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "Workzi revolutionized our hybrid scheduling. We saved over 15 hours a week in manual payroll verification and error reconciliations.",
    author: "Sarah Jenkins",
    role: "VP of People",
    company: "Linear Technologies",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5
  },
  {
    quote: "The interface is so intuitive that our remote workers adopted it on day one. Geolocation verification is extremely reliable and precise.",
    author: "Marcus Chen",
    role: "Operations Director",
    company: "Veloce Devs",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5
  },
  {
    quote: "The automated leave balance calculation and seamless approval workflows have made our HR team significantly more efficient and happier.",
    author: "Elena Rostova",
    role: "HR Lead",
    company: "Globex Industries",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80",
    rating: 5
  }
];

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: '01',
    title: 'Easy Employee Setup',
    description: 'Employees download the secure mobile app and login instantly via email, Google Auth, or SSO configuration.'
  },
  {
    step: '02',
    title: 'Seamless Tracking',
    description: 'Log presence, track projects, and check shifts using GPS coordinates, Wi-Fi beacons, or dynamic QR code scans.'
  },
  {
    step: '03',
    title: 'Instant Approvals',
    description: 'Leave request notifications are pushed straight to team leads, allowing one-tap acceptances on the fly.'
  },
  {
    step: '04',
    title: 'One-click Payroll Sync',
    description: 'HR generates consolidated timesheets and syncs them automatically to external systems for zero-error processing.'
  }
];
