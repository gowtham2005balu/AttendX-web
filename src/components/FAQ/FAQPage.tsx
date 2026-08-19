import React, { useState, useMemo } from 'react';
import { Container } from '../Container';
import { Search, ChevronDown, Check, AlertTriangle, ThumbsUp, ThumbsDown, ArrowRight, HelpCircle, MessageSquare } from 'lucide-react';
import { Heading } from '../Heading';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  bullets?: string[];
  warning?: string;
  related?: { text: string; href: string }[];
  tags: string[];
}

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Attendance');
  const [activeTag, setActiveTag] = useState('Attendance');
  const [activeSubFilter, setActiveSubFilter] = useState('Most Popular');
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = [
    { name: 'General', count: 18 },
    { name: 'Getting Started', count: 12 },
    { name: 'Organization Setup', count: 14 },
    { name: 'Employee Management', count: 20 },
    { name: 'Attendance', count: 32 },
    { name: 'Time-off', count: 21 },
    { name: 'Shift Management', count: 16 },
    { name: 'Time Tracking', count: 11 },
    { name: 'Approvals', count: 15 },
    { name: 'Announcements', count: 6 },
    { name: 'Calendar', count: 9 },
    { name: 'Payroll', count: 24 },
    { name: 'Reports', count: 13 },
    { name: 'Mobile App', count: 17 },
    { name: 'Integrations', count: 10 },
    { name: 'Security', count: 14 },
    { name: 'Billing', count: 8 },
    { name: 'Subscription', count: 7 },
    { name: 'Account', count: 9 },
    { name: 'Troubleshooting', count: 12 },
  ];

  const topTags = [
    'Attendance',
    'Time-off',
    'Organization',
    'Payroll',
    'Mobile App',
    'Pricing',
    'Security',
    'Reports',
    'Geofencing',
    'Approvals',
  ];

  const subFilters = [
    'Most Popular',
    'Recently Added',
    'Attendance',
    'Payroll',
    'Security',
    'Pricing',
    'Account',
    'Mobile',
    'Enterprise',
    'Admin',
    'Employee',
    'Manager',
  ];

  const faqData: FAQItem[] = [
    // Attendance & Geofencing
    {
      id: 'att-1',
      category: 'Attendance',
      question: 'How does geolocation tracking work?',
      answer: 'Workzi uses mobile GPS coordinates to verify that employees are checking in from authorized geofenced work sites. Before a user can clock in, their coordinates are compared against active geofence boundaries configured in the admin dashboard.',
      bullets: [
        'Uses secured mobile GPS logs',
        'Automatic checks upon shift check-in',
        'Works with low cellular connectivity via local caching',
      ],
      warning: 'GPS accuracy can vary based on local weather, signal interference, and hardware quality. High-precision mode is recommended.',
      related: [
        { text: 'How many times can employees check in?', href: '#faq' },
        { text: 'Can I override geo-fenced logs?', href: '#faq' },
      ],
      tags: ['Attendance', 'Geofencing', 'Mobile App'],
    },
    {
      id: 'att-2',
      category: 'Attendance',
      question: 'Can employees check in manually?',
      answer: 'Yes. If manual attendance overrides are enabled in the settings panel by the organization administrator, employees can slide to check in manually. This is useful for instances where GPS signals fail or remote tasks are assigned.',
      related: [
        { text: 'How do managers audit manual logs?', href: '#faq' },
        { text: 'Enabling manual check-in protocols', href: '#faq' },
      ],
      tags: ['Attendance', 'Approvals', 'Mobile App'],
    },
    {
      id: 'att-3',
      category: 'Attendance',
      question: 'What happens if an employee forgets to check out?',
      answer: 'Workzi handles forgotten check-outs through auto-timeout rules. The system can be configured to automatically check users out after a specific number of shift hours, or notify shift supervisors about open sessions.',
      bullets: [
        'Custom auto-timeout shift schedules',
        'Email warnings sent directly to manager leads',
        'Manual timesheet correction request portal',
      ],
      tags: ['Attendance', 'Security', 'Shift Management'],
    },

    // Time-off
    {
      id: 'Time-off-1',
      category: 'Time-off',
      question: 'How do approvals for Time-off work?',
      answer: 'Time-off pipelines auto-route directly to direct managers. When employees submit a request, they receive instant confirmation and managers are notified immediately via push notifications to take action.',
      bullets: [
        'Multi-tiered supervisor approval flows',
        'Real-time Time-off balance calculations',
        'Automatic accrual policies',
      ],
      tags: ['Time-off', 'Approvals', 'Mobile App'],
    },
    {
      id: 'Time-off-2',
      category: 'Time-off',
      question: 'Can employees check their paid Time-off balance from the mobile app?',
      answer: 'Yes, employees can view real-time Time-off balances across Paid Time Off (PTO), Sick Time-off, Maternity/Paternity Time-off, and Casual Time-off directly inside the mobile app.',
      tags: ['Time-off', 'Mobile App', 'General'],
    },

    // Organization Setup & Employee Management
    {
      id: 'org-1',
      category: 'Organization Setup',
      question: 'How do I add new branches or office locations?',
      answer: 'Navigate to Organization Settings > Branches in your admin dashboard. Click "Add Branch", specify the address and geofence radius (in meters), and assign department managers.',
      bullets: [
        'Unlimited branch & office geofences',
        'Custom radius per site location',
        'Department-specific access controls',
      ],
      tags: ['Organization', 'Geofencing', 'Organization Setup'],
    },
    {
      id: 'emp-1',
      category: 'Employee Management',
      question: 'How do I bulk import employees into Workzi?',
      answer: 'Go to Employee Directory > Import CSV. Download our sample CSV template, populate employee details (Name, Email, Role, Department, Shift), and upload the file for instant provisioning.',
      tags: ['Employee Management', 'Organization Setup', 'General'],
    },

    // Payroll & Reports
    {
      id: 'pay-1',
      category: 'Payroll',
      question: 'Can Workzi sync timesheets directly with payroll software?',
      answer: 'Yes! Workzi integrates with leading payroll platforms including ADP, QuickBooks, SAP SuccessFactors, BambooHR, and Workday. You can export verified timesheets with a single click.',
      bullets: [
        'Automated overtime calculation',
        'One-click CSV and Excel export options',
        'Direct API webhooks for enterprise HRIS systems',
      ],
      tags: ['Payroll', 'Reports', 'Integrations'],
    },
    {
      id: 'rep-1',
      category: 'Reports',
      question: 'What types of attendance reports can managers generate?',
      answer: 'Managers can generate Daily Attendance Summaries, Monthly Timesheets, Absenteeism Trend Reports, Late Arrival Audits, and Overtime Statements exportable in PDF, CSV, and XLSX formats.',
      tags: ['Reports', 'Attendance', 'Payroll'],
    },

    // Security & Mobile App
    {
      id: 'sec-1',
      category: 'Security',
      question: 'Is employee location tracking active outside work hours?',
      answer: 'No. Workzi respects employee privacy and ONLY captures GPS coordinates at the exact moment of check-in and check-out. Background continuous location tracking is strictly disabled.',
      warning: 'We do not store or monitor employee location history outside of authorized shift check-in events.',
      tags: ['Security', 'Mobile App', 'General'],
    },
    {
      id: 'mob-1',
      category: 'Mobile App',
      question: 'Does the mobile app support offline check-ins?',
      answer: 'Yes. When cellular connectivity is weak or lost, Workzi encrypts and stores the check-in locally on the device with a cryptographic timestamp. As soon as connectivity returns, the log automatically syncs with the server.',
      tags: ['Mobile App', 'Attendance', 'Security'],
    },

    // Shift Management & Time Tracking
    {
      id: 'shift-1',
      category: 'Shift Management',
      question: 'How do rotating shift schedules work?',
      answer: 'Admins can create recurring shift rules (e.g. Day Shift, Night Shift, Weekend Rota) and auto-assign them to departments. Employees receive notifications 24 hours before shift rotation.',
      tags: ['Shift Management', 'Time Tracking', 'Organization'],
    },
    {
      id: 'time-1',
      category: 'Time Tracking',
      question: 'How does Workzi track breaks and meal times?',
      answer: 'Employees can tap "Start Break" inside the mobile app. The system records break duration, ensures compliance with mandatory rest laws, and calculates net working hours automatically.',
      tags: ['Time Tracking', 'Attendance', 'Reports'],
    },

    // General & Pricing / Billing
    {
      id: 'gen-1',
      category: 'General',
      question: 'What is Workzi?',
      answer: 'Workzi is an enterprise workforce intelligence platform providing smart GPS attendance, automated shift scheduling, Time-off approval pipelines, and payroll integration for modern operations.',
      tags: ['General', 'Pricing', 'Organization'],
    },
    {
      id: 'bil-1',
      category: 'Billing',
      question: 'How does billing per active user work?',
      answer: 'Workzi charges only for active employees in your organization during your monthly billing cycle. Deactivated or archived accounts are automatically excluded from your invoice.',
      tags: ['Billing', 'Subscription', 'Pricing'],
    },
  ];

  const popularQuestions = [
    {
      q: 'How does attendance tracking work?',
      a: 'Geo-fencing, QR check-ins, and AI anomaly detection working together in real time.',
      tag: 'Attendance',
    },
    {
      q: 'Can employees check in remotely?',
      a: 'Yes, with optional secondary verification for remote or field-based teams.',
      tag: 'Mobile App',
    },
    {
      q: 'How do approval workflows work?',
      a: 'A configurable chain from submission through manager and HR review.',
      tag: 'Approvals',
    },
    {
      q: 'Can I assign multiple managers?',
      a: 'Yes — employees can report to more than one manager across projects.',
      tag: 'Organization',
    },
    {
      q: 'How do I import employees?',
      a: 'Bulk import via CSV or sync directly from your existing HRMS or directory.',
      tag: 'Employee Management',
    },
    {
      q: 'How secure is Workzi?',
      a: 'SOC 2 aligned with encryption, SSO, RBAC, and full audit logging.',
      tag: 'Security',
    },
  ];

  const filteredFAQs = useMemo(() => {
    return faqData.filter((item) => {
      // 1. Search Query Filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesQ = item.question.toLowerCase().includes(query);
        const matchesA = item.answer.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(query));
        return matchesQ || matchesA || matchesCategory || matchesTags;
      }

      // 2. Filter by Active Category or Tag
      if (activeCategory) {
        const catLower = activeCategory.toLowerCase();
        const matchesCat = item.category.toLowerCase() === catLower;
        const matchesTag = item.tags.some(t => t.toLowerCase() === catLower);

        // If activeTag is selected and not equal to activeCategory
        if (activeTag && activeTag !== 'All' && activeTag !== activeCategory) {
          const tagLower = activeTag.toLowerCase();
          const matchesActiveTag = item.tags.some(t => t.toLowerCase() === tagLower) || item.category.toLowerCase() === tagLower;
          return (matchesCat || matchesTag) && matchesActiveTag;
        }

        return matchesCat || matchesTag;
      }

      return true;
    });
  }, [searchQuery, activeCategory, activeTag, activeSubFilter]);

  const toggleExpand = (id: string) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="bg-[#FFFFFF] w-full min-h-screen pt-28 pb-12 relative overflow-x-hidden font-sans">

      {/* ─── FAQ HERO SECTION ─── */}
      <section className="py-12 bg-white relative">
        <Container className="max-w-[1216px] text-center flex flex-col items-center px-4 mx-auto">
          {/* h1 */}
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[36px] sm:text-[42px] lg:text-[48px] leading-[55px] tracking-[-0.96px] text-[#111827] max-w-[635px] mx-auto mb-4 text-center">
            Frequently Asked Questions
          </h1>
          {/* p.lead */}
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-[#6B7280] max-w-[642px] mx-auto mb-8 text-center">
            Find quick answers to the most common questions about Workzi, from attendance tracking to organization management, subscriptions, security, and more.
          </p>

          {/* div.search-bar */}
          <div className="relative w-full max-w-[640px] h-[59px] mx-auto mb-8">
            <span className="absolute left-[20px] top-1/2 -translate-y-1/2 text-[#667085] flex items-center justify-center pointer-events-none">
              <Search size={18} strokeWidth={2} className="text-[#667085]" />
            </span>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[59px] pl-[52px] pr-[24px] py-[19px] bg-white border border-[#E5E7EB] rounded-[16px] text-[15.5px] leading-[18px] text-[#111827] placeholder:text-[#757575] font-['Arial',sans-serif] outline-none shadow-xs transition-all focus:border-[#5B5FFF] focus:ring-2 focus:ring-[#5B5FFF]/20"
            />
          </div>

          {/* div.tag-row */}
          <div className="flex flex-wrap justify-center items-center gap-[9.8px] max-w-[1216px] mx-auto">
            {topTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  setActiveTag(tag);
                  const matchedCategory = categories.find(c => c.name.toLowerCase() === tag.toLowerCase());
                  if (matchedCategory) {
                    setActiveCategory(matchedCategory.name);
                  }
                }}
                className={`px-[18px] py-[9px] h-[36px] rounded-[999px] font-['Inter',sans-serif] font-semibold text-[13.5px] leading-[16px] transition-all cursor-pointer flex items-center justify-center shrink-0 border ${activeTag === tag
                  ? 'bg-[#5B5FFF] border-[#5B5FFF] text-white shadow-xs font-semibold'
                  : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-slate-300 hover:text-[#111827]'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── SIDEBAR & MAIN FLOW GRID ─── */}
      <section className="bg-white border-t border-slate-100/80">
        <Container className="max-w-[1216px] py-12 flex flex-col lg:flex-row gap-8 mx-auto px-4">

          {/* LEFT SIDEBAR: Categories Menu */}
          <aside className="w-full lg:w-[280px] max-h-[1058px] overflow-y-auto bg-white border border-[#E5E7EB] rounded-[24px] p-[24px_21px] flex flex-col gap-[9px] shrink-0 sticky top-[90px] shadow-xs">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.name;
              return (
                <button
                  key={cat.name}
                  onClick={() => {
                    setActiveCategory(cat.name);
                    if (topTags.includes(cat.name)) {
                      setActiveTag(cat.name);
                    }
                  }}
                  className={`w-full min-h-[41px] px-[14px] py-[12px] rounded-[12px] flex items-center justify-between transition-all cursor-pointer text-left border ${isActive
                    ? 'bg-[#EEEEFF] border-[#5B5FFF] text-[#5B5FFF]'
                    : 'bg-transparent border-transparent text-[#6B7280] hover:bg-slate-50 hover:text-[#111827]'
                    }`}
                >
                  <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px]">
                    {cat.name}
                  </span>
                  <span className={`font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] ${isActive ? 'text-[#5B5FFF]' : 'text-[#6B7280]'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </aside>

          {/* RIGHT PANEL: Content Area */}
          <div className="flex-1 flex flex-col gap-6 max-w-[888px] w-full">

            {/* Header description of selected Category */}
            <div className="flex justify-between items-end border-b border-[#E5E7EB] pb-4 mb-2">
              <h2 className="text-2xl font-[700] text-[#111827] tracking-tight font-sans">
                {activeCategory}
              </h2>
              <span className="text-xs font-[600] text-[#6B7280]">
                {filteredFAQs.length} {filteredFAQs.length === 1 ? 'Question' : 'Questions'} found
              </span>
            </div>

            {/* FAQ Accordion List (Card Layout) */}
            <div className="flex flex-col gap-3.5 w-full">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((item) => {
                  const isExpanded = openId === item.id;
                  return (
                    <div
                      key={item.id}
                      className="bg-white border border-[#E5E7EB] rounded-[24px] px-8 py-[18px] transition-all duration-200 shadow-xs hover:border-slate-300 w-full"
                    >
                      {/* Accordion Question Header */}
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer group"
                      >
                        <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[21px] tracking-[-0.36px] text-[#111827] group-hover:text-[#5B5FFF] transition-colors">
                          {item.question}
                        </h4>
                        <div className="w-[28px] h-[28px] rounded-[14px] bg-[#EEEEFF] flex items-center justify-center shrink-0 ml-4">
                          <ChevronDown size={14} className={`text-[#5B5FFF] transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} strokeWidth={2.2} />
                        </div>
                      </button>

                      {/* Accordion Answer Content */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: 'easeInOut' }}
                            className="overflow-hidden"
                          >
                            <div className="pt-3 pb-1 text-[14px] leading-[24px] text-slate-500 font-['Inter',sans-serif] text-left border-t border-slate-100 mt-3 space-y-4">
                              <p className="font-semibold text-slate-650">{item.answer}</p>

                              {/* Render custom bullets if present */}
                              {item.bullets && (
                                <ul className="space-y-2 mt-3 pl-2">
                                  {item.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5">
                                      <div className="w-5 h-5 rounded-full bg-[#EEEEFF] flex items-center justify-center shrink-0 mt-0.5 text-[#5B5FFF]">
                                        <Check size={11} strokeWidth={3} />
                                      </div>
                                      <span className="font-bold text-[#4B5563]">{bullet}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {/* Warning Alert box */}
                              {item.warning && (
                                <div className="bg-[#F3F4F6] rounded-xl px-4.5 py-4 border border-[#E5E7EB] flex gap-3 text-xs text-[#374151] mt-4 font-semibold">
                                  <AlertTriangle size={16} className="text-amber-500 shrink-0 mt-0.5" />
                                  <p>{item.warning}</p>
                                </div>
                              )}

                              {/* Related Links */}
                              {item.related && (
                                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs">
                                  <span className="text-[#9CA3AF] font-[600]">Related Questions:</span>
                                  {item.related.map((rel, idx) => (
                                    <a
                                      key={idx}
                                      href={rel.href}
                                      className="text-[#5B5FFF] font-bold hover:underline"
                                    >
                                      {rel.text}
                                    </a>
                                  ))}
                                </div>
                              )}

                              {/* Helpfulness actions row */}
                              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between gap-4 mt-4">
                                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] leading-[18px] text-[#111827]">
                                  Did this answer your question?
                                </span>
                                <div className="flex items-center gap-2">
                                  <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-white border border-[#E5E7EB] rounded-[10px] text-[#111827] font-['Inter',sans-serif] font-semibold text-[13px] leading-[16px] hover:border-slate-300 hover:bg-slate-50 transition-all cursor-pointer shadow-xs">
                                    <span>👍</span>
                                    <span>Yes</span>
                                  </button>
                                  <button className="flex items-center justify-center gap-1.5 px-4 py-2 bg-white border border-[#E5E7EB] rounded-[10px] text-[#111827] font-['Inter',sans-serif] font-semibold text-[13px] leading-[16px] hover:border-slate-300 hover:bg-slate-50 transition-all cursor-pointer shadow-xs">
                                    <span>👎</span>
                                    <span>No</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })
              ) : (
                <div className="bg-slate-50/50 border border-dashed border-slate-200 rounded-3xl p-12 text-center flex flex-col items-center justify-center gap-3">
                  <HelpCircle className="w-10 h-10 text-slate-400 mb-1" />
                  <h4 className="text-sm font-black text-slate-800">No FAQ answers match your search</h4>
                  <p className="text-xs text-slate-400 font-semibold max-w-sm">Try typing a different keyword, resetting your filter tags, or browsing another sidebar category.</p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ─── POPULAR QUESTIONS GRID SECTION ─── */}
      <section className="py-[100px] bg-[#F8FAFC] w-full">
        <Container className="max-w-[1280px] mx-auto px-4 sm:px-[32px] flex flex-col items-start gap-[31.75px]">
          {/* div.content-head */}
          <div className="w-full flex items-baseline justify-start">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[30px] leading-[34px] tracking-[-0.6px] text-[#111827] text-left">
              Popular Questions
            </h2>
          </div>

          {/* div.popular-grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[26px] gap-y-[19.23px] w-full max-w-[1216px]">
            {popularQuestions.map((item, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[24px] p-[26px] flex flex-col items-start gap-[8px] min-h-[140.97px] w-full text-left transition-all duration-200 hover:border-slate-300 shadow-xs"
              >
                {/* span.tag */}
                <span className="inline-flex items-center justify-center px-[12px] py-[4px] bg-[#EEEEFF] rounded-[999px] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#5B5FFF]">
                  {item.tag}
                </span>

                {/* h4 */}
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16.5px] leading-[19px] tracking-[-0.33px] text-[#111827] pt-[5px] pb-[0.97px]">
                  {item.q}
                </h4>

                {/* p */}
                <p className="font-['Inter',sans-serif] font-normal text-[13.5px] leading-[22px] text-[#6B7280]">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA REDIRECT BANNER (STILL NEED HELP) ─── */}
      <section className="py-16 bg-white relative">
        <Container className="max-w-[1216px] mx-auto px-4">
          <div className="w-full min-h-[325px] bg-[linear-gradient(106.34deg,#0A0F2E_0%,#161D4A_40%,#1E2560_100%)] rounded-[32px] p-8 md:p-[72px_168px] flex flex-col justify-center items-center text-center gap-[15px] shadow-2xl relative overflow-hidden">

            {/* h2 */}
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] sm:text-[32px] leading-[37px] tracking-[-0.64px] text-[#F8FAFC] max-w-[880px]">
              Couldn't find your answer?
            </h2>

            {/* p */}
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-[#6B7280] max-w-[520px]">
              Visit our Help Center or contact our support team for additional assistance.
            </p>

            {/* div.ctas */}
            <div className="flex flex-row justify-center items-center gap-[14px] pt-[14px] w-full max-w-[880px]">
              <a
                href="#help-center"
                className="w-[169px] h-[47px] px-[24px] py-[14px] gap-[10px] bg-white rounded-[100px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] leading-[19px] text-[#5C5CFF] shadow-[0px_4px_16px_rgba(0,0,0,0.08),0px_2px_6px_rgba(0,0,0,0.04)] flex items-center justify-center hover:bg-slate-100 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Visit Help Center</span>
              </a>
              <a
                href="#contact-support"
                className="w-[173px] h-[47px] px-[24px] py-[12px] gap-[8px] bg-transparent border border-white/30 rounded-[100px] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] leading-[19px] text-[#F8FAFC] flex items-center justify-center hover:bg-white/10 hover:scale-[1.02] transition-all cursor-pointer"
              >
                <span>Contact Support</span>
              </a>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
};

export default FAQPage;
