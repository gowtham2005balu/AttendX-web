import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../Container';
import {
  Search,
  ChevronRight,
  BookOpen,
  ClipboardList,
  Calendar,
  Settings,
  UserPlus,
  CreditCard,
  Clock,
  Shield,
  MessageSquare,
  Mail,
  Phone,
  FileText,
  ChevronDown,
  ArrowRight,
  Users,
  CheckCircle2,
  BarChart3,
  Activity,
  LayoutList,
  User,
  BarChart2,
  Smartphone,
  Zap,
  Code,
  Eye,
  Menu,
  Plus,
  X
} from 'lucide-react';

/* ─── Reusable fade-up animation wrapper ─── */
const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Yellow dot label (removed per request) ─── */
const SectionLabel: React.FC<{ children?: React.ReactNode; color?: string }> = () => null;

/* ══════════════════════════════════════════════════════════════
   SECTION 1 — HERO
══════════════════════════════════════════════════════════════ */
const HelpHero: React.FC = () => (
  <section className="relative pt-[120px] pb-24 bg-[#0F172A] overflow-hidden text-center">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1E1B4B]/35 to-[#0F172A] pointer-events-none" />

    <Container className="relative z-10 flex flex-col items-center">
      <FadeUp>
        <span className="inline-block bg-[#EEF2FF]/10 text-white/90 px-5 py-1.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase mb-6 border border-white/10 backdrop-blur-sm">
          Support Center
        </span>
        <h1 className="text-white text-4xl md:text-5xl lg:text-[64px] font-[900] tracking-tight leading-[1.1] mb-6 drop-shadow-md">
          How can we <span className="text-[#FFC700]">help your</span><br />
          <span className="text-[#FFC700]">team today?</span>
        </h1>
        <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[29px] text-white/55 text-center max-w-[460px] mx-auto mb-10">
          Find answers, reach our support team, or get in touch with sales. We're here for you 24/7.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a href="#contact-support" className="bg-[#5B5FEF] hover:bg-[#4F46E5] text-white text-sm font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-xl cursor-pointer flex items-center gap-2">
            <MessageSquare className="w-4 h-4" /> Contact Support
          </a>
          <button className="border border-white/20 hover:bg-white/10 text-white text-sm font-bold px-8 py-3.5 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1.5">
            Book Demo &rarr;
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full max-w-2xl mx-auto mb-6">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full bg-white rounded-full border-0 py-4.5 pl-12 pr-32 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-[#5B5FEF] sm:text-sm shadow-xl font-medium outline-none"
            placeholder="Search help articles, guides, FAQs..."
          />
          <div className="absolute inset-y-0 right-1.5 flex items-center">
            <button className="bg-[#5B5FEF] hover:bg-[#4F46E5] text-white text-xs font-bold px-6 py-2.5 rounded-full transition-all cursor-pointer">
              Search
            </button>
          </div>
        </div>

        <p className="text-[11px] text-slate-400 font-bold tracking-wide">
          Popular: <a href="#" className="text-[#818CF8] hover:underline ml-1">Attendance setup</a> &middot; <a href="#" className="text-[#818CF8] hover:underline ml-1">Time-off policies</a> &middot; <a href="#" className="text-[#818CF8] hover:underline ml-1">API access</a> &middot; <a href="#" className="text-[#818CF8] hover:underline ml-1">Mobile app</a>
        </p>
      </FadeUp>
    </Container>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   SECTION 2 — WHAT DO YOU NEED HELP WITH?
══════════════════════════════════════════════════════════════ */
const NeedHelpWith: React.FC = () => {
  const categories = [
    { icon: <Search className="w-5 h-5 text-indigo-500" />, title: 'Find My Account', desc: 'Locate your active account, reset password, or update login credentials.', bg: 'bg-indigo-50' },
    { icon: <CreditCard className="w-5 h-5 text-amber-500" />, title: 'Billing Issues', desc: 'Resolve payment problems, invoices, or subscription changes.', bg: 'bg-amber-50' },
    { icon: <CheckCircle2 className="w-5 h-5 text-emerald-500" />, title: 'Attendance Setup', desc: 'Configure geo-fenced check-ins, shifts, and location settings.', bg: 'bg-emerald-50' },
    { icon: <Calendar className="w-5 h-5 text-rose-500" />, title: 'Time-off Management', desc: 'Set up Time-off types, approval workflows, and balance tracking.', bg: 'bg-rose-50' },
    { icon: <UserPlus className="w-5 h-5 text-indigo-500" />, title: 'Employee Onboarding', desc: 'Add employees individually or via bulk CSV import with roles and departments.', bg: 'bg-indigo-50' },
    { icon: <BarChart3 className="w-5 h-5 text-emerald-500" />, title: 'Reports & Analytics', desc: 'Generate workforce reports, export data, and schedule automated summaries.', bg: 'bg-emerald-50' },
    { icon: <Activity className="w-5 h-5 text-purple-500" />, title: 'API Integration', desc: 'Connect Workzi with payroll, ERP, or third-party tools via REST API.', bg: 'bg-purple-50' },
    { icon: <Shield className="w-5 h-5 text-amber-600" />, title: 'Security & Access', desc: 'SAML SSO configuration, 2FA, audit logs, and role-based permissions.', bg: 'bg-amber-50' },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] relative z-10 border-b border-slate-100">
      <Container>
        <FadeUp>
          <div className="mb-12 text-center md:text-left">
            <h2 className="text-3xl md:text-[40px] font-semibold text-[#0F172A] leading-tight mb-3">
              What do you need help with?
            </h2>
            <p className="text-slate-500 text-sm md:text-[15px] font-medium">
              Jump straight to the most common support topics.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => (
            <FadeUp key={idx} delay={idx * 0.05}>
              <div className="bg-white border border-slate-100 rounded-[20px] p-7 shadow-sm hover:shadow-md hover:border-slate-200 transition-all cursor-pointer h-full flex flex-col items-center text-center">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${cat.bg}`}>
                  {cat.icon}
                </div>
                <h4 className="text-[16px] font-semibold text-slate-900 mb-3">{cat.title}</h4>
                <p className="text-[13px] text-slate-500 leading-relaxed font-medium">{cat.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════
   SECTION 3 — BROWSE BY CATEGORY
══════════════════════════════════════════════════════════════ */
const BrowseCategory: React.FC = () => {
  const categories = [
    { title: 'Attendance', desc: 'Check-ins, geo-fencing, shifts, overtime', count: 24, icon: <Clock className="w-4 h-4" />, bg: 'bg-indigo-50 text-indigo-500' },
    { title: 'Time-off Management', desc: 'Time-off types, approvals, balances, policies', count: 18, icon: <LayoutList className="w-4 h-4" />, bg: 'bg-emerald-50 text-emerald-500' },
    { title: 'Employee Onboarding', desc: 'Adding employees, bulk import, profiles', count: 12, icon: <User className="w-4 h-4" />, bg: 'bg-amber-50 text-amber-500' },
    { title: 'Analytics & Reports', desc: 'Dashboards, exports, scheduled reports', count: 15, icon: <BarChart2 className="w-4 h-4" />, bg: 'bg-indigo-50 text-indigo-500' },
    { title: 'Payroll Integration', desc: 'ADP, Gusto, QuickBooks sync setup', count: 9, icon: <CreditCard className="w-4 h-4" />, bg: 'bg-rose-50 text-rose-500' },
    { title: 'Mobile App Help', desc: 'iOS, Android setup and feature guides', count: 11, icon: <Smartphone className="w-4 h-4" />, bg: 'bg-emerald-50 text-emerald-500' },
    { title: 'API Integration', desc: 'REST API, webhooks, developer resources', count: 8, icon: <Activity className="w-4 h-4" />, bg: 'bg-purple-50 text-purple-500' },
    { title: 'Security', desc: 'SSO, 2FA, audit logs, permissions', count: 10, icon: <Shield className="w-4 h-4" />, bg: 'bg-blue-50 text-blue-500' },
    { title: 'AI Features', desc: 'AI insights, predictions, smart reports', count: 7, icon: <Zap className="w-4 h-4" />, bg: 'bg-amber-50 text-amber-500' },
    { title: 'Technical Support', desc: 'Bugs, errors, login issues, platform help', count: 13, icon: <Code className="w-4 h-4" />, bg: 'bg-emerald-50 text-emerald-500' },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] relative border-b border-slate-100">
      <Container>
        <FadeUp>
          <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
            <div className="text-center sm:text-left w-full sm:w-auto">
              <SectionLabel>BROWSE TOPICS</SectionLabel>
              <h2 className="text-3xl md:text-[40px] font-semibold text-[#0F172A] leading-tight mb-3">
                Browse by category
              </h2>
              <p className="text-slate-500 text-[15px] font-medium">
                Every help topic organized for easy discovery.
              </p>
            </div>
            <a href="#" className="text-sm font-bold text-[#5B5FEF] hover:text-[#4F46E5] flex items-center justify-center sm:justify-start gap-1.5 transition-colors pb-2">
              Browse all topics <ArrowRight size={16} />
            </a>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {categories.map((cat, idx) => (
            <FadeUp key={idx} delay={idx * 0.05}>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 hover:shadow-md transition-shadow cursor-pointer flex flex-col items-center text-center h-full group">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${cat.bg}`}>
                  {cat.icon}
                </div>
                <h5 className="text-[14px] font-semibold text-slate-900 mb-2">{cat.title}</h5>
                <p className="text-[12px] text-slate-500 font-medium leading-snug mb-5 flex-1">
                  {cat.desc}
                </p>
                <span className="text-[12px] font-bold text-[#5B5FEF]">{cat.count} articles</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════
   SECTION 4 — POPULAR ARTICLES
══════════════════════════════════════════════════════════════ */
/* ══════════════════════════════════════════════════════════════
   SECTION 4 — POPULAR ARTICLES
══════════════════════════════════════════════════════════════ */
const PopularArticles: React.FC = () => {
  return (
    <section id="popular-articles" className="py-20 md:py-24 bg-white border-b border-[#F3F4F6]">
      <Container>
        {/* Header */}
        <FadeUp>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-12 gap-4 max-w-[1104px] mx-auto">
            <div>
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-3xl md:text-[44px] leading-tight md:leading-[49px] tracking-[-1.1px] text-[#111827] mb-2">
                Popular articles
              </h2>
              <p className="font-['Inter',sans-serif] font-normal text-base leading-[27px] text-[#6B7280]">
                Most viewed support articles by Workzi users.
              </p>
            </div>

            <a
              href="#all-articles"
              className="inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] leading-[21px] text-[#5B5FFF] hover:text-[#4347E0] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>View all articles</span>
              <ArrowRight size={13} className="text-[#5B5FFF]" />
            </a>
          </div>
        </FadeUp>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px] max-w-[1104px] mx-auto items-stretch">
          {/* Row 1 & 2 Left Column - Tall Featured Card */}
          <FadeUp delay={0.1} className="lg:row-span-2 h-full">
            <a
              href="#help-article"
              className="bg-[linear-gradient(154.51deg,#5B5FFF_0%,#4347E0_100%)] border border-[#4347E0] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-7 md:p-[28px] text-white flex flex-col justify-end relative overflow-hidden group cursor-pointer h-full min-h-[523px] text-left block"
            >
              {/* Top ambient decor */}
              <div className="absolute top-[-30px] right-[-30px] w-[200px] h-[200px] bg-white/5 rounded-full blur-[30px] pointer-events-none" />

              {/* Bottom grouped content */}
              <div className="relative z-10 flex flex-col items-start w-full">
                <div className="mb-[12px]">
                  <span className="inline-block bg-[rgba(255,255,255,0.15)] text-white/90 font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[10px] leading-[16px] px-[10px] py-[4px] rounded-[100px] uppercase tracking-[0.7px]">
                    GETTING STARTED
                  </span>
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[27px] text-white mb-[8px]">
                  Complete guide to setting up Workzi for your organization
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-white/65 mb-[20px]">
                  Everything you need to get your team onboarded, attendance tracking live, and Time-off workflows configured in under an hour.
                </p>

                {/* Border line & meta stats */}
                <div className="w-full flex items-center justify-between border-t border-white/20 pt-[16px] font-['Inter',sans-serif] text-[12px] leading-[20px] text-white/55">
                  <div className="flex items-center gap-[14px]">
                    <span className="flex items-center gap-[7px]">
                      <Clock size={13} className="text-white/55" /> 5 min read
                    </span>
                    <span className="flex items-center gap-[7px]">
                      <Eye size={13} className="text-white/55" /> 12.4K views
                    </span>
                  </div>
                  <div className="w-[28px] h-[28px] rounded-[14px] bg-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#5B5FFF] transition-colors shrink-0">
                    <ArrowRight size={12} className="text-current" />
                  </div>
                </div>
              </div>
            </a>
          </FadeUp>

          {/* Row 1 Col 2: ATTENDANCE Card */}
          <FadeUp delay={0.15}>
            <a
              href="#help-article"
              className="bg-white border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[28px] flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer group block text-left h-full min-h-[260px]"
            >
              <div>
                <div className="mb-[12px]">
                  <span className="inline-block bg-[rgba(16,185,129,0.1)] text-[#10B981] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[10px] leading-[16px] px-[10px] py-[4px] rounded-[100px] uppercase tracking-[0.7px]">
                    ATTENDANCE
                  </span>
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#111827] mb-[12px] group-hover:text-[#5B5FFF] transition-colors">
                  How to set up geo-fenced attendance tracking
                </h4>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-[#6B7280] mb-[16px]">
                  Configure location-based check-ins for your office or multiple locations with step-by-step guidance for geo-fence radius settings.
                </p>
              </div>
              <div className="flex items-center gap-[14px] border-t border-slate-100 pt-[14px] mt-auto font-['Inter',sans-serif] text-[12px] leading-[20px] text-[#9CA3AF]">
                <span className="flex items-center gap-[7px]">
                  <Clock size={13} className="text-[#9CA3AF]" /> 3 min read
                </span>
                <span className="flex items-center gap-[7px]">
                  <Eye size={13} className="text-[#9CA3AF]" /> 8.9K
                </span>
              </div>
            </a>
          </FadeUp>

          {/* Row 1 Col 3: ANALYTICS Card */}
          <FadeUp delay={0.2}>
            <a
              href="#help-article"
              className="bg-white border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[28px] flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer group block text-left h-full min-h-[260px]"
            >
              <div>
                <div className="mb-[12px]">
                  <span className="inline-block bg-[rgba(245,158,11,0.1)] text-[#F59E0B] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[10px] leading-[16px] px-[10px] py-[4px] rounded-[100px] uppercase tracking-[0.7px]">
                    ANALYTICS
                  </span>
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#111827] mb-[12px] group-hover:text-[#5B5FFF] transition-colors">
                  Using AI-powered insights in workforce analytics
                </h4>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-[#6B7280] mb-[16px]">
                  Interpret AI-generated attendance predictions, absenteeism risk scores, and workforce trend analysis in the analytics dashboard.
                </p>
              </div>
              <div className="flex items-center gap-[14px] border-t border-slate-100 pt-[14px] mt-auto font-['Inter',sans-serif] text-[12px] leading-[20px] text-[#9CA3AF]">
                <span className="flex items-center gap-[7px]">
                  <Clock size={13} className="text-[#9CA3AF]" /> 6 min read
                </span>
                <span className="flex items-center gap-[7px]">
                  <Eye size={13} className="text-[#9CA3AF]" /> 2.3K
                </span>
              </div>
            </a>
          </FadeUp>

          {/* Row 2 Col 2: Time-off Card */}
          <FadeUp delay={0.25}>
            <a
              href="#help-article"
              className="bg-white border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[28px] flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer group block text-left h-full min-h-[260px]"
            >
              <div>
                <div className="mb-[12px]">
                  <span className="inline-block bg-[rgba(91,95,255,0.1)] text-[#5B5FFF] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[10px] leading-[16px] px-[10px] py-[4px] rounded-[100px] uppercase tracking-[0.7px]">
                    Time-off
                  </span>
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#111827] mb-[12px] group-hover:text-[#5B5FFF] transition-colors">
                  Configuring Time-off approval workflows for your team
                </h4>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-[#6B7280] mb-[16px]">
                  Set up single or multi-level approval chains, automatic notifications, and escalation rules. HR teams save hours every week.
                </p>
              </div>
              <div className="flex items-center gap-[14px] border-t border-slate-100 pt-[14px] mt-auto font-['Inter',sans-serif] text-[12px] leading-[20px] text-[#9CA3AF]">
                <span className="flex items-center gap-[7px]">
                  <Clock size={13} className="text-[#9CA3AF]" /> 5 min read
                </span>
                <span className="flex items-center gap-[7px]">
                  <Eye size={13} className="text-[#9CA3AF]" /> 4.8K
                </span>
              </div>
            </a>
          </FadeUp>

          {/* Row 2 Col 3: PAYROLL Card */}
          <FadeUp delay={0.3}>
            <a
              href="#help-article"
              className="bg-white border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[28px] flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer group block text-left h-full min-h-[260px]"
            >
              <div>
                <div className="mb-[12px]">
                  <span className="inline-block bg-[rgba(245,158,11,0.1)] text-[#F59E0B] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[10px] leading-[16px] px-[10px] py-[4px] rounded-[100px] uppercase tracking-[0.7px]">
                    PAYROLL
                  </span>
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#111827] mb-[12px] group-hover:text-[#5B5FFF] transition-colors">
                  Connecting Workzi to your payroll system
                </h4>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-[#6B7280] mb-[16px]">
                  Sync attendance data with ADP, Gusto, QuickBooks Payroll via API integration or native connector
                </p>
              </div>
              <div className="flex items-center gap-[14px] border-t border-slate-100 pt-[14px] mt-auto font-['Inter',sans-serif] text-[12px] leading-[20px] text-[#9CA3AF]">
                <span className="flex items-center gap-[7px]">
                  <Clock size={13} className="text-[#9CA3AF]" /> 4 min read
                </span>
                <span className="flex items-center gap-[7px]">
                  <Eye size={13} className="text-[#9CA3AF]" /> 6.7K
                </span>
              </div>
            </a>
          </FadeUp>

          {/* Row 3 Col 1: SECURITY Card */}
          <FadeUp delay={0.35}>
            <a
              href="#help-article"
              className="bg-white border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[28px] flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer group block text-left h-full min-h-[260px]"
            >
              <div>
                <div className="mb-[12px]">
                  <span className="inline-block bg-[rgba(16,185,129,0.1)] text-[#10B981] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[10px] leading-[16px] px-[10px] py-[4px] rounded-[100px] uppercase tracking-[0.7px]">
                    SECURITY
                  </span>
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#111827] mb-[12px] group-hover:text-[#5B5FFF] transition-colors">
                  Enabling SAML SSO and two-factor authentication
                </h4>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-[#6B7280] mb-[16px]">
                  Secure your organization with SAML SSO through Okta, Azure AD, and Google Workspace. Plus complete 2FA setup guide for all team members.
                </p>
              </div>
              <div className="flex items-center gap-[14px] border-t border-slate-100 pt-[14px] mt-auto font-['Inter',sans-serif] text-[12px] leading-[20px] text-[#9CA3AF]">
                <span className="flex items-center gap-[7px]">
                  <Clock size={13} className="text-[#9CA3AF]" /> 4 min read
                </span>
                <span className="flex items-center gap-[7px]">
                  <Eye size={13} className="text-[#9CA3AF]" /> 2.9K
                </span>
              </div>
            </a>
          </FadeUp>

          {/* Row 3 Col 2: ANALYTICS Card 2 */}
          <FadeUp delay={0.4}>
            <a
              href="#help-article"
              className="bg-white border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[28px] flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer group block text-left h-full min-h-[260px]"
            >
              <div>
                <div className="mb-[12px]">
                  <span className="inline-block bg-[rgba(245,158,11,0.1)] text-[#F59E0B] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[10px] leading-[16px] px-[10px] py-[4px] rounded-[100px] uppercase tracking-[0.7px]">
                    ANALYTICS
                  </span>
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#111827] mb-[12px] group-hover:text-[#5B5FFF] transition-colors">
                  Using AI-powered insights in workforce analytics
                </h4>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-[#6B7280] mb-[16px]">
                  Interpret AI-generated attendance predictions, absenteeism risk scores, and workforce trend analysis in the analytics dashboard.
                </p>
              </div>
              <div className="flex items-center gap-[14px] border-t border-slate-100 pt-[14px] mt-auto font-['Inter',sans-serif] text-[12px] leading-[20px] text-[#9CA3AF]">
                <span className="flex items-center gap-[7px]">
                  <Clock size={13} className="text-[#9CA3AF]" /> 6 min read
                </span>
                <span className="flex items-center gap-[7px]">
                  <Eye size={13} className="text-[#9CA3AF]" /> 2.3K
                </span>
              </div>
            </a>
          </FadeUp>

          {/* Row 3 Col 3: API Card */}
          <FadeUp delay={0.45}>
            <a
              href="#help-article"
              className="bg-white border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[28px] flex flex-col justify-between hover:shadow-[0px_4px_20px_rgba(0,0,0,0.06)] transition-all cursor-pointer group block text-left h-full min-h-[260px]"
            >
              <div>
                <div className="mb-[12px]">
                  <span className="inline-block bg-[rgba(124,58,237,0.08)] text-[#7C3AED] font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[10px] leading-[16px] px-[10px] py-[4px] rounded-[100px] uppercase tracking-[0.7px]">
                    API
                  </span>
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[22px] text-[#111827] mb-[12px] group-hover:text-[#5B5FFF] transition-colors">
                  Understanding the Workzi REST API
                </h4>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-[#6B7280] mb-[16px]">
                  Authentication, rate limits, webhook configuration, and available endpoints. Complete reference for HR data integration with third-party apps.
                </p>
              </div>
              <div className="flex items-center gap-[14px] border-t border-slate-100 pt-[14px] mt-auto font-['Inter',sans-serif] text-[12px] leading-[20px] text-[#9CA3AF]">
                <span className="flex items-center gap-[7px]">
                  <Clock size={13} className="text-[#9CA3AF]" /> 7 min read
                </span>
                <span className="flex items-center gap-[7px]">
                  <Eye size={13} className="text-[#9CA3AF]" /> 3.2K
                </span>
              </div>
            </a>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
};



/* ══════════════════════════════════════════════════════════════
   SECTION 6 — COMMON SUPPORT QUESTIONS
══════════════════════════════════════════════════════════════ */
const SupportQuestions: React.FC = () => {
  const categories = [
    { name: 'All Questions', icon: <Menu size={16} />, count: 24 },
    { name: 'Attendance', icon: <Clock size={16} />, count: 8 },
    { name: 'Time-off', icon: <Calendar size={16} />, count: 5 },
    { name: 'Billing', icon: <CreditCard size={16} />, count: 4 },
    { name: 'API', icon: <Activity size={16} />, count: 4 },
    { name: 'Security', icon: <Shield size={16} />, count: 3 }
  ];
  const [activeCat, setActiveCat] = useState('All Questions');

  const faqs = [
    { q: 'How quickly do you respond to support requests?', a: 'Our standard support response time is within 4 business hours for technical issues and within 1 business day for general inquiries. Enterprise and Business plan customers receive priority response within 1 hour, and 24/7 phone support is available during critical incidents.' },
    { q: 'Do you offer guided onboarding for new customers?', a: 'Yes! We provide structured onboarding sessions, including configuration, data imports, and team training.' },
    { q: 'Is enterprise-level support included in all plans?', a: 'Enterprise-level SLA guarantees and 24/7 dedicated account manager support are available for Enterprise plans.' },
    { q: 'Can we schedule personalized product demos?', a: 'Absolutely. Contact our sales team and we will be happy to schedule a custom walkthrough of Workzi.' },
    { q: 'Do you provide developer API support?', a: 'Yes, our API documentation is extensive, and we offer dedicated developer support via email for complex integrations.' },
    { q: 'Is phone support available?', a: 'Phone support is exclusively available for our Business and Enterprise tier customers.' }
  ];
  const [openFaq, setOpenFaq] = useState<number>(-1);

  return (
    <section className="py-24 bg-white relative border-b border-slate-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl md:text-[40px] font-semibold text-[#0F172A] leading-tight mb-4">
            Common support questions
          </h2>
          <p className="text-slate-500 text-[15px] font-medium sm:whitespace-nowrap">
            Got questions? We've got answers. If you need more help, <a href="#contact-support" className="text-[#5B5FEF] underline hover:text-[#4F46E5] transition-colors">contact our team.</a>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-5xl mx-auto">
          {/* Left Sidebar */}
          <FadeUp className="w-full lg:w-64 shrink-0">
            <div className="mb-2">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-4 block px-3">FILTER BY TOPIC</span>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <button
                      onClick={() => setActiveCat(cat.name)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-[14px] text-[13px] font-bold transition-all cursor-pointer ${activeCat === cat.name
                        ? 'bg-indigo-50/70 text-[#5B5FEF]'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={activeCat === cat.name ? 'text-[#5B5FEF]' : 'text-slate-400'}>{cat.icon}</span>
                        {cat.name}
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full ${activeCat === cat.name ? 'bg-indigo-100 text-[#5B5FEF]' : 'bg-slate-100 text-slate-400'}`}>
                        {cat.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Right Content */}
          <div className="flex-1">
            <FadeUp delay={0.1}>
              {/* Mini search inside FAQ */}
              <div className="relative mb-10">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  className="w-full bg-white border border-slate-200 rounded-full py-3.5 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-[#5B5FEF] focus:border-transparent outline-none"
                />
              </div>

              {/* Accordion */}
              <div className="space-y-0">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-100 last:border-b-0">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                      className="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
                    >
                      <span className={`text-[14.5px] font-bold ${openFaq === idx ? 'text-slate-900' : 'text-slate-800'}`}>
                        {faq.q}
                      </span>
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ml-4 ${openFaq === idx ? 'bg-[#5B5FEF] text-white' : 'bg-[#EEF2FF] text-[#5B5FEF] hover:bg-[#5B5FEF] hover:text-white transition-colors duration-200'}`}>
                        {openFaq === idx ? <X size={12} strokeWidth={3} /> : <Plus size={12} strokeWidth={3} />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {openFaq === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-6 pt-1 text-[13px] text-slate-500 leading-relaxed font-medium bg-white">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════
   SECTION 7 — REACH OUR SUPPORT TEAM
══════════════════════════════════════════════════════════════ */
const ReachSupport: React.FC = () => (
  <section id="reach-support" className="py-20 md:py-24 bg-[#F8FAFC] relative">
    <Container>
      {/* Header */}
      <FadeUp>
        <div className="flex flex-col items-center text-center max-w-[1104px] mx-auto mb-10 md:mb-12">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-3xl md:text-[44px] leading-tight md:leading-[49px] tracking-[-1.1px] text-[#111827] mb-3">
            Reach our support team
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-base text-[#6B7280] leading-[27px] max-w-[460px]">
            Multiple ways to get in touch — choose what works best for you.
          </p>
        </div>
      </FadeUp>

      {/* Grid Row 1 - 3 Main Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[18px] mb-[18px]">
        {/* Card 1: Live Chat (Featured) */}
        <FadeUp delay={0.1}>
          <div className="bg-[linear-gradient(149.09deg,#0C0F2E_0%,#1C2260_100%)] border border-[#4347E0] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[31px_29px] flex flex-col justify-between h-full min-h-[326.5px]">
            <div>
              {/* Icon */}
              <div className="w-[44px] h-[44px] rounded-[14px] bg-[rgba(91,95,255,0.25)] flex items-center justify-center mb-4">
                <MessageSquare size={22} className="text-[#A5A8FF]" />
              </div>
              {/* Title */}
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] leading-[28px] text-white mb-[16px]">
                Live Chat
              </h3>
              {/* Desc */}
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] text-white/55 mb-[16px]">
                Get solutions from our support team. Response time under 2 minutes during business hours.
              </p>
              {/* Bullets */}
              <div className="space-y-[4.5px] mb-[16px]">
                <div className="flex items-center gap-[7px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#10B981] shrink-0" />
                  <span className="font-['Inter',sans-serif] text-[12px] leading-[20px] text-white/50">
                    Available 8 AM–11 PM IST
                  </span>
                </div>
                <div className="flex items-center gap-[7px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#10B981] shrink-0" />
                  <span className="font-['Inter',sans-serif] text-[12px] leading-[20px] text-white/50">
                    7 days a week
                  </span>
                </div>
              </div>
            </div>
            {/* CTA Button */}
            <a
              href="#contact-support"
              className="w-full h-[42px] px-3 bg-white hover:bg-slate-100 text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] leading-[18px] rounded-[100px] flex items-center justify-center transition-all cursor-pointer whitespace-nowrap"
            >
              Start Live Chat →
            </a>
          </div>
        </FadeUp>

        {/* Card 2: Email Support */}
        <FadeUp delay={0.2}>
          <div className="bg-white border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[31px_29px] flex flex-col justify-between h-full min-h-[326.5px]">
            <div>
              {/* Icon */}
              <div className="w-[44px] h-[44px] rounded-[14px] bg-[rgba(91,95,255,0.1)] flex items-center justify-center mb-4">
                <Mail size={22} className="text-[#5B5FFF]" />
              </div>
              {/* Title */}
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] leading-[28px] text-[#111827] mb-[16px]">
                Email Support
              </h3>
              {/* Desc */}
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] text-[#6B7280] mb-[16px]">
                Send a detailed message and our team will respond within 24 hours on business days.
              </p>
              {/* Bullets */}
              <div className="space-y-[4.5px] mb-[16px]">
                <div className="flex items-center gap-[7px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#10B981] shrink-0" />
                  <span className="font-['Inter',sans-serif] text-[12px] leading-[20px] text-[#6B7280]">
                    Response within 24 hours
                  </span>
                </div>
                <div className="flex items-center gap-[7px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#10B981] shrink-0" />
                  <span className="font-['Inter',sans-serif] text-[12px] leading-[20px] text-[#6B7280]">
                    Mon–Fri only
                  </span>
                </div>
              </div>
            </div>
            {/* CTA Button */}
            <a
              href="#contact-support"
              className="w-full h-[42px] px-3 bg-[#5B5FFF] hover:bg-[#4F46E5] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] leading-[18px] rounded-[100px] flex items-center justify-center transition-all cursor-pointer whitespace-nowrap shadow-sm"
            >
              Send Email →
            </a>
          </div>
        </FadeUp>

        {/* Card 3: Book a Demo */}
        <FadeUp delay={0.3}>
          <div className="bg-white border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[31px_29px] flex flex-col justify-between h-full min-h-[326.5px]">
            <div>
              {/* Icon */}
              <div className="w-[44px] h-[44px] rounded-[14px] bg-[rgba(245,158,11,0.1)] flex items-center justify-center mb-4">
                <Calendar size={22} className="text-[#F59E0B]" />
              </div>
              {/* Title */}
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] leading-[28px] text-[#111827] mb-[16px]">
                Book a Demo
              </h3>
              {/* Desc */}
              <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] text-[#6B7280] mb-[16px]">
                Schedule a personalized demo with our sales team. 30–45 minutes tailored to your needs.
              </p>
              {/* Bullets */}
              <div className="space-y-[4.5px] mb-[16px]">
                <div className="flex items-center gap-[7px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#F59E0B] shrink-0" />
                  <span className="font-['Inter',sans-serif] text-[12px] leading-[20px] text-[#6B7280]">
                    Mon–Fri, all timezones
                  </span>
                </div>
                <div className="flex items-center gap-[7px]">
                  <span className="w-[5px] h-[5px] rounded-full bg-[#F59E0B] shrink-0" />
                  <span className="font-['Inter',sans-serif] text-[12px] leading-[20px] text-[#6B7280]">
                    Personalized to your team
                  </span>
                </div>
              </div>
            </div>
            {/* CTA Button */}
            <a
              href="#pricing"
              className="w-full h-[44px] px-3 bg-[#F8FAFC] hover:bg-slate-100 border border-[#E5E7EB] text-[#374151] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] leading-[18px] rounded-[100px] flex items-center justify-center transition-all cursor-pointer whitespace-nowrap"
            >
              Book Demo →
            </a>
          </div>
        </FadeUp>
      </div>

      {/* Grid Row 2 - 3 Mini Cards */}
      <FadeUp delay={0.4}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[18px]">
          {/* Mini Card 1: Call Support */}
          <div className="bg-white border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[22px_24px] flex items-center gap-4 hover:border-slate-200 transition-colors cursor-pointer min-h-[112px]">
            <div className="w-[40px] h-[40px] rounded-[12px] bg-[rgba(16,185,129,0.1)] flex items-center justify-center shrink-0">
              <Phone size={19} className="text-[#10B981]" />
            </div>
            <div>
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[23px] text-[#111827]">
                Call Support
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[20px] text-[#6B7280]">
                Business &amp; Enterprise plans only
              </p>
            </div>
          </div>

          {/* Mini Card 2: Submit a Ticket */}
          <div className="bg-white border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[22px_24px] flex items-center gap-4 hover:border-slate-200 transition-colors cursor-pointer min-h-[112px]">
            <div className="w-[40px] h-[40px] rounded-[12px] bg-[rgba(245,158,11,0.1)] flex items-center justify-center shrink-0">
              <FileText size={19} className="text-[#F59E0B]" />
            </div>
            <div>
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[23px] text-[#111827]">
                Submit a Ticket
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[20px] text-[#6B7280]">
                Detailed issue tracking
              </p>
            </div>
          </div>

          {/* Mini Card 3: Community Forum */}
          <div className="bg-white border border-[#F3F4F6] shadow-[0_1px_2px_rgba(0,0,0,0.05)] rounded-[24px] p-[22px_24px] flex items-center gap-4 hover:border-slate-200 transition-colors cursor-pointer min-h-[112px]">
            <div className="w-[40px] h-[40px] rounded-[12px] bg-[rgba(91,95,255,0.1)] flex items-center justify-center shrink-0">
              <Users size={19} className="text-[#5B5FFF]" />
            </div>
            <div>
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[23px] text-[#111827]">
                Community Forum
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[20px] text-[#6B7280]">
                Ask the Workzi user community
              </p>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

const HelpCTA: React.FC = () => (
  <section id="final-cta" className="py-[80px] px-4 md:px-12 lg:px-[120px] bg-white relative w-full max-w-[1440px] mx-auto">
    <Container className="max-w-[1200px] mx-auto p-0">
      <div className="w-full min-h-[464.7px] bg-[linear-gradient(115.39deg,#0C0F2E_0%,#161C50_50%,#1C2260_100%)] rounded-[32px] p-8 md:p-[60px_80px] relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl">

        {/* div.cta-grid-bg */}
        <div className="absolute inset-0 bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.04)_1.96%,rgba(255,255,255,0)_1.96%)] pointer-events-none z-0" />

        {/* div.cta-glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-[250px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(91,95,255,0.15)_0%,rgba(91,95,255,0)_70%)] pointer-events-none z-1" />

        {/* div.cta-inner */}
        <div className="relative z-10 max-w-[1040px] w-full flex flex-col items-center text-center gap-[15px] mx-auto">

          {/* h2.cta-title */}
          <div className="max-w-[600px] w-full flex justify-center">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[46px] leading-[52px] tracking-[-1.15px] text-white text-center max-w-[477px]">
              Get enterprise-grade HRMS support for your growing team.
            </h2>
          </div>

          {/* p.cta-sub */}
          <div className="max-w-[460px] w-full flex justify-center">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-white/55 text-center max-w-[450px]">
              Join 50,000+ teams that trust Workzi for their workforce management. Our support team is always ready to help you succeed.
            </p>
          </div>

          {/* div.cta-actions */}
          <div className="flex flex-wrap items-center justify-center gap-[12px] pt-[21px] w-full">
            <a
              href="#contact-support"
              className="w-[172px] h-[53px] px-[24px] py-[14px] bg-white text-[#5B5FFF] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] leading-[25px] rounded-[100px] inline-flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] hover:bg-slate-100 hover:scale-[1.03] cursor-pointer whitespace-nowrap"
            >
              Contact Support
            </a>
            <a
              href="#pricing"
              className="w-[167px] h-[53px] px-[24px] py-[12px] bg-transparent text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] leading-[25px] border border-white/30 rounded-[100px] inline-flex items-center justify-center gap-1 transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:scale-[1.03] cursor-pointer whitespace-nowrap"
            >
              Book a Demo <span className="font-bold">→</span>
            </a>
          </div>

        </div>

      </div>
    </Container>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE EXPORT
══════════════════════════════════════════════════════════════ */
const HelpCenterPage: React.FC = () => {
  return (
    <div id="help-center" className="relative overflow-x-hidden bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <HelpHero />
      <NeedHelpWith />
      <BrowseCategory />
      <PopularArticles />
      <SupportQuestions />
      <ReachSupport />
      <HelpCTA />
    </div>
  );
};

export default HelpCenterPage;
