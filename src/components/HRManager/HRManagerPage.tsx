import React from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  ArrowRight,
  ChevronRight,
  MapPin,
  Bell,
  Calendar,
  BarChart3,
  Users,
  Shield,
  Clock,
  Smartphone,
  Star,
  Zap,
  FileText,
  Settings,
  TrendingUp,
  CheckCircle,
} from 'lucide-react';
import { Container } from '../Container';

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

/* ─── Green pill label ─── */
const SectionLabel: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = 'bg-[#EBF7F0] text-[#108A00]',
}) => (
  <span className={`inline-block ${color} px-3.5 py-1 rounded-full text-xs font-semibold mb-4`}>
    {children}
  </span>
);

/* ─── Dark "Learn More" CTA ─── */
const LearnMore: React.FC = () => (
  <button className="bg-black text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-[#1A1A1A] transition-all duration-300 shadow-md inline-flex items-center gap-2 cursor-pointer">
    Learn More
    <ArrowRight className="w-3.5 h-3.5 text-white" />
  </button>
);

/* ─── Checklist with 2 columns ─── */
const Checklist: React.FC<{ items: string[]; dark?: boolean }> = ({ items, dark = false }) => (
  <div className={`grid grid-cols-2 gap-x-8 gap-y-3.5 w-full border-t ${dark ? 'border-slate-700' : 'border-slate-100'} pt-6 mb-8`}>
    {items.map((text, idx) => (
      <div key={idx} className="flex items-center gap-2.5">
        <div className={`w-5 h-5 rounded-full ${dark ? 'bg-[#5B5FEF]/20' : 'bg-emerald-50'} flex items-center justify-center ${dark ? 'text-[#818CF8]' : 'text-emerald-600'} shrink-0`}>
          <Check size={12} strokeWidth={3} />
        </div>
        <span className={`text-xs font-bold ${dark ? 'text-slate-300' : 'text-slate-800'}`}>{text}</span>
      </div>
    ))}
  </div>
);

/* ══════════════════════════════════════════════════════════════
   SECTION 1 — HERO
══════════════════════════════════════════════════════════════ */
const HRHero: React.FC = () => (
  <section id="hero" className="relative h-[855px] flex flex-col items-center justify-center overflow-hidden bg-[#0F172A] w-full">
    {/* Full-bleed background image with gradient overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/hr%20and%20man/d70077091404cc2e3f87978df6385d0d9c873c77.png"
        alt="HR manager reviewing team attendance on Workzi mobile app"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/20 z-10" />
    </div>

    {/* Centered Content Container */}
    <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-[1280px] w-full mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-[18px] max-w-[900px] w-full mx-auto"
      >
        {/* Eyebrow badge */}
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-white/10 backdrop-blur-md border border-white/20">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-white">
            New Release
          </span>
        </div>

        {/* Heading & Subtitle Block */}
        <div className="flex flex-col items-center gap-[12px] max-w-[745px] w-full">
          <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[36px] sm:text-[48px] lg:text-[56px] leading-[1.15] text-white text-center">
            The modern workforce platform, built for growing teams.
          </h1>

          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[17px] leading-[26px] text-white text-center max-w-[560px] mt-1">
            Manage attendance, time off, employee operations, reporting, and workforce workflows from one intelligent platform.
          </p>
        </div>

        {/* Dual Hero Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-[14px] pt-[8px]">
          {/* Primary Button */}
          <a
            href="#pricing"
            className="bg-white hover:bg-neutral-100 text-[#1A1A1A] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] leading-[19px] px-[32px] py-[14px] rounded-[50px] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.15)] cursor-pointer inline-flex items-center justify-center hover:scale-[1.03]"
          >
            Book Demo
          </a>

          {/* Secondary Outline Button */}
          <a
            href="#pricing"
            className="bg-transparent hover:bg-white/10 text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] border border-white rounded-[50px] px-[32px] py-[14px] transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-1 hover:scale-[1.03]"
          >
            Get Started →
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   SECTION 2 — EXPLORE THE PRODUCT ECOSYSTEM
══════════════════════════════════════════════════════════════ */
const ProductEcosystem: React.FC = () => {
  const products = [
    {
      icon: <Clock className="w-6 h-6 text-[#5B5FFF]" />,
      bg: 'bg-[rgba(91,95,255,0.1)]',
      title: 'Attendance',
      desc: 'Real-time check-ins, geo-fencing, shift monitoring, and automated records.',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#10B981]" />,
      bg: 'bg-[rgba(16,185,129,0.1)]',
      title: 'Time Off',
      desc: 'Streamlined time-off requests, approvals, and team availability management.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#F59E0B]" />,
      bg: 'bg-[rgba(245,158,11,0.1)]',
      title: 'Employees',
      desc: 'Centralized employee profiles, directories, departments, and org charts.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#5B5FFF]" />,
      bg: 'bg-[rgba(91,95,255,0.1)]',
      title: 'Reports',
      desc: 'Workforce analytics, attendance trends, and exportable insights.',
    },
    {
      icon: <FileText className="w-6 h-6 text-[#EF4444]" />,
      bg: 'bg-[rgba(239,68,68,0.08)]',
      title: 'Payroll',
      desc: 'Connect attendance data to payroll for seamless compensation processing.',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#10B981]" />,
      bg: 'bg-[rgba(16,185,129,0.1)]',
      title: 'Mobile App',
      desc: 'Full-featured iOS and Android apps for employees and managers on the go.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#5B5FFF]" />,
      bg: 'bg-[rgba(91,95,255,0.1)]',
      title: 'Workflows',
      desc: 'Automate HR approvals, reminders, and multi-step workforce processes.',
    },
    {
      icon: <Bell className="w-6 h-6 text-[#F59E0B]" />,
      bg: 'bg-[rgba(245,158,11,0.1)]',
      title: 'Notifications',
      desc: 'Real-time alerts for attendance events, approvals, and workforce updates.',
    },
  ];

  return (
    <section className="py-[100px] px-4 md:px-12 lg:px-[80px] bg-[#F8FAFC] relative overflow-hidden w-full">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[64px]">
        {/* Header Block */}
        <FadeUp className="flex flex-col items-center text-center max-w-[1184px] w-full gap-[14px]">
          {/* Eyebrow */}
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#EEEEFF]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#5B5FFF]">
              Product Suite
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[50px] leading-[1.1] lg:leading-[56px] tracking-[-1.25px] text-[#111827] text-center">
            Explore the product ecosystem.
          </h2>

          {/* Subtitle */}
          <p className="font-['Inter',sans-serif] font-normal text-[15.6px] sm:text-[17px] leading-[29px] text-[#6B7280] max-w-[520px] mx-auto text-center">
            Every module works powerfully alone — and even stronger together. One platform, all your workforce needs.
          </p>
        </FadeUp>

        {/* 8 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1184px]">
          {products.map((item, idx) => (
            <FadeUp key={idx} delay={idx * 0.05}>
              <div className="bg-white border border-[#E5E7EB] rounded-[28px] p-[32px_28px] shadow-none hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-2 h-full cursor-pointer group">
                <div className={`w-[52px] h-[52px] rounded-[16px] ${item.bg} flex items-center justify-center mb-1 shrink-0`}>
                  {item.icon}
                </div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[18px] leading-[29px] text-[#111827] pt-2">
                  {item.title}
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-[#6B7280]">
                  {item.desc}
                </p>
                <div className="flex items-center gap-1.5 pt-2 text-[#5B5FFF] font-['Inter',sans-serif] font-bold text-[13px] leading-[21px] group-hover:translate-x-1 transition-transform">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════
   SECTION 3 — ATTENDANCE TRACKING WITHOUT THE CHAOS
══════════════════════════════════════════════════════════════ */
const AttendanceTracking: React.FC = () => {
  const checklistItems = [
    'Geo-fenced check-in & check-out',
    'Automated attendance records',
    'Overtime & shift analytics',
    'Real-time shift monitoring',
    'Late & absent notifications',
  ];

  return (
    <section className="py-[80px] px-4 md:px-12 lg:px-[100px] bg-[#FAFAFA] relative overflow-hidden w-full">
      <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[60px]">
        {/* Left Column: Text & Features */}
        <FadeUp className="flex flex-col items-start max-w-[580px] w-full gap-[24px]">
          {/* Section Tag */}
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
              Attendance
            </span>
          </div>

          {/* Heading & Subtitle Block */}
          <div className="flex flex-col items-start gap-[18px] w-full">
            <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[44px] lg:text-[55.9px] leading-[1.1] lg:leading-[62px] tracking-[-1.12px] text-[#000000] text-left">
              Attendance tracking without the chaos.
            </h2>

            <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] text-left">
              Track employee check-ins, work hours, shifts, and attendance records in real time with intelligent automation — no manual entry required.
            </p>
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[14px] w-full pt-1">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-[11px]">
                <div className="w-[22px] h-[22px] rounded-[7px] bg-[rgba(16,185,129,0.1)] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#10B981]" strokeWidth={3} />
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[22px] text-[#374151] whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href="#features"
              className="bg-black hover:bg-[#1A1A1A] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Feature</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </FadeUp>

        {/* Right Column: Visual Mockup */}
        <FadeUp delay={0.15} className="w-full max-w-[580px] shrink-0">
          <img
            src="/hr%20and%20man/div.zwc-left-wrap.png"
            alt="Real-time attendance dashboard showing team check-in status"
            className="w-full h-auto object-cover rounded-[16px] transition-transform duration-300 hover:scale-[1.02]"
          />
        </FadeUp>
      </Container>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════
   SECTION 4 — SIMPLIFY TIME OFF
══════════════════════════════════════════════════════════════ */
const SimplifyTimeOff: React.FC = () => {
  const checklistItems = [
    'Multiple time-off types',
    'Real-time balance tracking',
    'Mobile time-off submission',
    'One-click approval workflows',
    'Team availability calendar',
  ];

  return (
    <section className="py-[60px] px-4 md:px-12 lg:px-[100px] bg-[#FAFAFA] relative overflow-hidden w-full">
      <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[60px]">
        {/* Left Column: Visual Mockup */}
        <FadeUp className="w-full max-w-[620px] shrink-0">
          <img
            src="/hr%20and%20man/div.zwc-left-wrap%20(1).png"
            alt="Simplify time-off approvals dashboard"
            className="w-full h-auto object-cover rounded-[16px] transition-transform duration-300 hover:scale-[1.02]"
          />
        </FadeUp>

        {/* Right Column: Text & Features */}
        <FadeUp delay={0.15} className="flex flex-col items-start max-w-[580px] w-full gap-[24px]">
          {/* Section Tag */}
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
              Time-Off Management
            </span>
          </div>

          {/* Heading & Subtitle Block */}
          <div className="flex flex-col items-start gap-[18px] w-full">
            <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[44px] lg:text-[55.9px] leading-[1.1] lg:leading-[62px] tracking-[-1.12px] text-[#000000] text-left">
              Simplify time-off approvals.
            </h2>

            <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] text-left">
              Streamline time-off requests, approvals, holiday planning, and employee availability with automated workflows that eliminate bottlenecks.
            </p>
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[14px] w-full pt-1">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-[11px]">
                <div className="w-[22px] h-[22px] rounded-[7px] bg-[rgba(16,185,129,0.1)] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#10B981]" strokeWidth={3} />
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[22px] text-[#374151] whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href="#features"
              className="bg-black hover:bg-[#1A1A1A] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════
   SECTION 5 — KEEP YOUR WORKFORCE CONNECTED
══════════════════════════════════════════════════════════════ */
const WorkforceConnected: React.FC = () => {
  const checklistItems = [
    'Centralized employee profiles',
    'Document management',
    'Employee self-service portal',
    'Department & org structure',
    'Role-based access control',
  ];

  return (
    <section className="py-[60px] px-4 md:px-12 lg:px-[100px] bg-[#FAFAFA] relative overflow-hidden w-full">
      <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[60px]">
        {/* Left Column: Text & Features */}
        <FadeUp className="flex flex-col items-start max-w-[580px] w-full gap-[24px]">
          {/* Section Tag */}
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
              Employee Experience
            </span>
          </div>

          {/* Heading & Subtitle Block */}
          <div className="flex flex-col items-start gap-[18px] w-full">
            <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[44px] lg:text-[55.9px] leading-[1.1] lg:leading-[62px] tracking-[-1.12px] text-[#000000] text-left">
              Keep your workforce connected.
            </h2>

            <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] text-left">
              Centralize employee information, departments, profiles, documents, and reporting structures in one beautifully organized workspace.
            </p>
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[14px] w-full pt-1">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-[11px]">
                <div className="w-[22px] h-[22px] rounded-[7px] bg-[rgba(16,185,129,0.1)] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#10B981]" strokeWidth={3} />
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[22px] text-[#374151] whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href="#features"
              className="bg-black hover:bg-[#1A1A1A] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </FadeUp>

        {/* Right Column: Visual Mockup */}
        <FadeUp delay={0.15} className="w-full max-w-[620px] shrink-0">
          <img
            src="/hr%20and%20man/div.zwc-left-wrap%20(2).png"
            alt="Keep your workforce connected dashboard"
            className="w-full h-auto object-cover rounded-[16px] transition-transform duration-300 hover:scale-[1.02]"
          />
        </FadeUp>
      </Container>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════
   SECTION 6 — MAKE SMARTER WORKFORCE DECISIONS
══════════════════════════════════════════════════════════════ */
const SmarterDecisions: React.FC = () => {
  const checklistItems = [
    'Real-time attendance analytics',
    'Time-off usage & patterns',
    'Exportable CSV / PDF',
    'Workforce trend reports',
    'Custom report builder',
  ];

  return (
    <section className="py-[60px] px-4 md:px-12 lg:px-[100px] bg-[#FAFAFA] relative overflow-hidden w-full">
      <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-[40px] lg:gap-[60px]">
        {/* Left Column: Visual Mockup */}
        <FadeUp className="w-full max-w-[620px] shrink-0">
          <img
            src="/hr%20and%20man/div.zwc-left-wrap%20(3).png"
            alt="Make smarter workforce decisions analytics dashboard"
            className="w-full h-auto object-cover rounded-[16px] transition-transform duration-300 hover:scale-[1.02]"
          />
        </FadeUp>

        {/* Right Column: Text & Features */}
        <FadeUp delay={0.15} className="flex flex-col items-start max-w-[580px] w-full gap-[24px]">
          {/* Section Tag */}
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
              Analytics &amp; Reports
            </span>
          </div>

          {/* Heading & Subtitle Block */}
          <div className="flex flex-col items-start gap-[18px] w-full">
            <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[44px] lg:text-[55.9px] leading-[1.1] lg:leading-[62px] tracking-[-1.12px] text-[#000000] text-left">
              Make smarter workforce decisions.
            </h2>

            <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[29px] text-[#111827] text-left">
              Turn attendance and workforce data into actionable insights with intelligent reports and live analytics that empower HR leaders.
            </p>
          </div>

          {/* Checklist Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[24px] gap-y-[14px] w-full pt-1">
            {checklistItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-[11px]">
                <div className="w-[22px] h-[22px] rounded-[7px] bg-[rgba(16,185,129,0.1)] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#10B981]" strokeWidth={3} />
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[22px] text-[#374151] whitespace-nowrap">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href="#features"
              className="bg-black hover:bg-[#1A1A1A] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════
   SECTION 7 — YOUR ENTIRE WORKFORCE PLATFORM IN YOUR POCKET
══════════════════════════════════════════════════════════════ */
const InYourPocket: React.FC = () => (
  <section className="py-[50px] px-4 md:px-12 lg:px-[128px] bg-[linear-gradient(118.12deg,#0A0C2E_0%,#1A1D4A_50%,#2A1F5C_100%)] relative overflow-hidden w-full">
    <Container className="max-w-[1184px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[64px]">
      {/* Left Column: Content */}
      <FadeUp className="flex flex-col items-start max-w-[552px] w-full gap-[15.2px]">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-white/10 border border-white/20">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#A5A8FF]">
            Mobile Experience
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[30px] sm:text-[38px] lg:text-[43.2px] leading-[1.1] lg:leading-[48px] tracking-[-1.08px] text-white text-left max-w-[552px]">
          Your entire workforce platform, in your pocket.
        </h2>

        {/* Subtitle */}
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-[rgba(255,255,255,0.55)] text-left max-w-[552px]">
          Everything HR teams and employees need, beautifully designed for iOS and Android. Check in, request time off, approve requests, and manage your team from anywhere.
        </p>

        {/* 3 Mobile Features */}
        <div className="flex flex-col items-start gap-[14px] w-full pt-[10px]">
          {/* Feature 1 */}
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[rgba(16,185,129,0.15)] flex items-center justify-center shrink-0">
              <Clock className="w-[18px] h-[18px] text-[#10B981]" />
            </div>
            <div className="flex flex-col items-start text-left">
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] leading-[22px] text-[rgba(255,255,255,0.9)]">
                Geo-Fenced Check-In
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[rgba(255,255,255,0.45)]">
                Location-verified attendance in one tap.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[rgba(245,158,11,0.15)] flex items-center justify-center shrink-0">
              <Calendar className="w-[18px] h-[18px] text-[#F59E0B]" />
            </div>
            <div className="flex flex-col items-start text-left">
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] leading-[22px] text-[rgba(255,255,255,0.9)]">
                Time-Off Management
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[rgba(255,255,255,0.45)]">
                Apply and approve time off from your phone.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[rgba(91,95,255,0.15)] flex items-center justify-center shrink-0">
              <Bell className="w-[18px] h-[18px] text-[#A5A8FF]" />
            </div>
            <div className="flex flex-col items-start text-left">
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] leading-[22px] text-[rgba(255,255,255,0.9)]">
                Real-Time Notifications
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[rgba(255,255,255,0.45)]">
                Instant alerts for every HR event.
              </p>
            </div>
          </div>
        </div>

        {/* Watch Demo Button */}
        <div className="pt-[10px]">
          <a
            href="#demo"
            className="border border-[rgba(255,255,255,0.3)] hover:border-white/60 hover:bg-white/10 text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] leading-[26px] px-[28px] py-[14px] rounded-[16px] transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
          >
            Watch Demo
          </a>
        </div>
      </FadeUp>

      {/* Right Column: Phone Mockup Visual */}
      <FadeUp delay={0.15} className="w-full max-w-[500px] shrink-0 flex justify-center lg:justify-end">
        <div className="relative flex justify-center items-center">
          <img
            src="/hr%20and%20man/div.mob-phone-wrap.png"
            alt="Workzi Mobile App - Geo-fenced check-in, time-off management, real-time alerts"
            className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   SECTION 8 — PLATFORM BENEFITS (EVERYTHING IN ONE PLATFORM)
══════════════════════════════════════════════════════════════ */
const EverythingInOne: React.FC = () => {
  const row1Cards = [
    {
      iconBg: 'rgba(91,95,255,0.1)',
      icon: <MapPin className="w-[22px] h-[22px] text-[#5B5FFF]" />,
      title: 'Real-Time Attendance',
      desc: 'Geo-fenced check-ins with instant status updates and shift monitoring.',
      height: 'min-h-[221px]',
    },
    {
      iconBg: 'rgba(16,185,129,0.1)',
      icon: <Calendar className="w-[22px] h-[22px] text-[#10B981]" />,
      title: 'Time-Off Management',
      desc: 'Multi-type time off with automated approval workflows and balance tracking.',
      height: 'min-h-[221px]',
    },
    {
      iconBg: 'rgba(245,158,11,0.1)',
      icon: <BarChart3 className="w-[22px] h-[22px] text-[#F59E0B]" />,
      title: 'Employee Records',
      desc: 'Centralized profiles, documents, and org structures in one place.',
      height: 'min-h-[221px]',
    },
    {
      iconBg: 'rgba(91,95,255,0.1)',
      icon: <FileText className="w-[22px] h-[22px] text-[#5B5FFF]" />,
      title: 'Smart Reporting',
      desc: 'Workforce analytics, trends, and exportable insights for leadership.',
      height: 'min-h-[221px]',
    },
  ];

  const row2Cards = [
    {
      iconBg: 'rgba(91,95,255,0.1)',
      icon: <Zap className="w-[22px] h-[22px] text-[#5B5FFF]" />,
      title: 'Workflow Automation',
      desc: 'Trigger-based automations to eliminate manual HR tasks at scale.',
      height: 'min-h-[201px]',
    },
    {
      iconBg: 'rgba(16,185,129,0.1)',
      icon: <Users className="w-[22px] h-[22px] text-[#10B981]" />,
      title: 'Mobile Access',
      desc: 'Full-featured iOS and Android apps. Everything in your pocket.',
      height: 'min-h-[201px]',
    },
    {
      iconBg: 'rgba(245,158,11,0.1)',
      icon: <Settings className="w-[22px] h-[22px] text-[#F59E0B]" />,
      title: 'Cloud Sync',
      desc: 'Instant sync across all devices with 99.9% uptime guarantee.',
      height: 'min-h-[201px]',
    },
    {
      iconBg: 'rgba(91,95,255,0.1)',
      icon: <Shield className="w-[22px] h-[22px] text-[#5B5FFF]" />,
      title: 'Role Permissions',
      desc: 'Granular access controls ensuring data security and compliance.',
      height: 'min-h-[201px]',
    },
  ];

  const BenefitCard: React.FC<{
    iconBg: string;
    icon: React.ReactNode;
    title: string;
    desc: string;
    height: string;
    delay?: number;
  }> = ({ iconBg, icon, title, desc, height, delay = 0 }) => (
    <FadeUp delay={delay}>
      <div
        className={`flex flex-col items-start ${height} w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[28px] p-[30px_26px] gap-2 shadow-none hover:-translate-y-0.5 transition-all duration-300`}
      >
        {/* Icon Wrap */}
        <div
          className="w-12 h-12 rounded-[14px] flex items-center justify-center shrink-0"
          style={{ background: iconBg }}
        >
          {icon}
        </div>

        {/* Title */}
        <div className="pt-2">
          <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] leading-[26px] text-[#111827]">
            {title}
          </h4>
        </div>

        {/* Description */}
        <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-[#6B7280]">
          {desc}
        </p>
      </div>
    </FadeUp>
  );

  return (
    <section className="bg-white relative overflow-hidden w-full">
      <div className="max-w-[1280px] mx-auto px-[48px] pt-[100px] pb-0 flex flex-col items-start gap-[64px]">

        {/* Section Header */}
        <FadeUp className="flex flex-col items-center w-full gap-[14px]">
          {/* Eyebrow */}
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#EEEEFF]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#5B5FFF]">
              Platform Benefits
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[50px] leading-[56px] tracking-[-1.25px] text-[#111827] text-center">
            Everything in one platform.
          </h2>

          {/* Subtitle */}
          <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[29px] text-[#6B7280] text-center max-w-[520px]">
            A complete workforce management solution built for modern HR teams, from startups to enterprise.
          </p>
        </FadeUp>

        {/* Benefits Grid */}
        <div className="w-full flex flex-col gap-[15px]">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px]">
            {row1Cards.map((card, idx) => (
              <BenefitCard key={idx} {...card} delay={idx * 0.07} />
            ))}
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[15px]">
            {row2Cards.map((card, idx) => (
              <BenefitCard key={idx} {...card} delay={0.28 + idx * 0.07} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════
   SECTION 9 — POWERING MODERN WORKFORCES WORLDWIDE
══════════════════════════════════════════════════════════════ */
const PoweringWorkforces: React.FC = () => {
  const reviews = [
    {
      initials: 'SJ',
      name: 'Sarah Jenkins',
      role: 'VP of People & Culture',
      company: 'Apex Logistics',
      tag: 'Multi-Location Enterprise',
      quote:
        'Workzi completely transformed how we manage attendance across our 18 locations. The geo-fenced check-in is spot-on, and the time-off approval workflow saves our HR team hours every single week.',
      rating: 5,
      avatarBg: 'bg-gradient-to-br from-[#5C5CFF] to-[#4338CA]',
    },
    {
      initials: 'MV',
      name: 'Marcus Vance',
      role: 'Head of People Operations',
      company: 'ScalePoint Tech',
      tag: 'Fast-Growing Tech',
      quote:
        'As a startup scaling from 45 to 320+ employees, Workzi grew with us seamlessly. Setup was under a day, and the mobile app means our field team never misses a check-in.',
      rating: 5,
      avatarBg: 'bg-gradient-to-br from-[#F59E0B] to-[#D97706]',
    },
    {
      initials: 'PP',
      name: 'Priya Patel',
      role: 'Chief Human Resources Officer',
      company: 'Vanguard Health',
      tag: 'Healthcare & Shift Teams',
      quote:
        'The self-service features cut HR queries significantly. Employees love the mobile app, and the reporting dashboard gives us workforce insights we\'ve never had access to before.',
      rating: 5,
      avatarBg: 'bg-gradient-to-br from-[#10B981] to-[#047857]',
    },
  ];

  return (
    <section className="py-[100px] bg-gradient-to-b from-[#FAFAFC] via-white to-[#FAFAFC] relative overflow-hidden w-full">
      <Container className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col items-center gap-3.5">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EBF7F0] border border-[#108A00]/20 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#108A00] animate-pulse" />
              <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#108A00] tracking-wide">
                Trusted Globally
              </span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl sm:text-[40px] lg:text-[44px] font-extrabold text-slate-900 leading-[1.2] tracking-[-1px]">
              Powering modern workforces worldwide.
            </h2>
            <p className="font-['Inter',sans-serif] text-slate-600 text-[15px] sm:text-[16.5px] font-normal leading-[26px] max-w-[560px]">
              Join 1,200+ forward-thinking companies that use Workzi to manage their most important asset — their people.
            </p>
          </div>
        </FadeUp>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {reviews.map((item, idx) => (
            <FadeUp key={idx} delay={idx * 0.1} className="h-full flex">
              <div className="w-full bg-white border border-slate-200/80 hover:border-[#5C5CFF]/40 rounded-[22px] p-6 sm:p-7 shadow-[0px_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0px_16px_36px_rgba(92,92,255,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">

                {/* Header: Avatar, Name, Rating & Role */}
                <div className="flex flex-col gap-3 pb-4 border-b border-slate-100">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-11 h-11 rounded-full ${item.avatarBg} flex items-center justify-center text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm shrink-0 shadow-xs ring-2 ring-white`}>
                        {item.initials}
                      </div>
                      <div className="flex flex-col text-left min-w-0">
                        <h4 className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold text-slate-900 leading-tight truncate">
                          {item.name}
                        </h4>
                        <p className="font-['Inter',sans-serif] text-[12px] text-slate-500 font-normal leading-tight mt-1 truncate">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    {/* Star Rating Badge */}
                    <div className="inline-flex items-center gap-1 bg-amber-50 border border-amber-200/60 px-2 py-0.5 rounded-md shrink-0">
                      <div className="flex text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={11} fill="currentColor" className="stroke-none" />
                        ))}
                      </div>
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-amber-900 font-bold text-[11px] leading-none">
                        {item.rating}.0
                      </span>
                    </div>
                  </div>

                  {/* Company Tag */}
                  <div className="flex items-center justify-between text-[11.5px] font-medium pt-0.5">
                    <span className="text-[#5C5CFF] font-semibold truncate">
                      {item.company}
                    </span>
                    <span className="text-slate-400 text-[11px]">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Quote Text */}
                <div className="py-4 grow flex items-start">
                  <p className="font-['Inter',sans-serif] text-slate-600 text-[13.5px] sm:text-[14px] leading-[23px] font-normal text-left">
                    "{item.quote}"
                  </p>
                </div>

                {/* Card Footer: Verified Badge */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100/80">
                    <CheckCircle className="w-3 h-3 text-emerald-600" /> Verified Customer
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    Workzi HRMS
                  </span>
                </div>

              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

const HRManagerCTA: React.FC = () => (
  <section className="relative bg-[#1D4ED8] py-[70px] px-4 md:px-12 lg:px-[120px] overflow-hidden text-center flex flex-col items-center justify-center min-h-[368px] w-full isolate">
    {/* Background image with tint */}
    <div className="absolute inset-0 z-0 bg-[#1D4ED8]">
      <img
        src="/solutions-assets/4193f756037467bd330a9c1a72cd458aecd144e6.png"
        alt="City banner background"
        className="w-full h-full object-cover object-center opacity-100"
      />
      <div className="absolute inset-0 bg-black/20 z-10" />
    </div>

    {/* Content Overlay */}
    <Container className="relative z-20 max-w-[600px] flex flex-col items-center gap-[13.2px] px-4">
      {/* Title */}
      <h2
        className="text-white text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-tight lg:leading-[48px] text-center max-w-[600px]"
        style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)' }}
      >
        Ready to simplify workforce management?
      </h2>

      {/* Subtitle */}
      <p className="text-white text-[14px] font-medium leading-[22px] max-w-[440px] text-center">
        Manage attendance, time-off requests, and employee operations from one platform. Setup in minutes.
      </p>

      {/* Action Buttons */}
      <div className="flex items-center justify-center pt-[12px]">
        <a
          href="#pricing"
          className="bg-[#1A1A1A] hover:bg-black text-white text-[14px] font-semibold leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md cursor-pointer hover:scale-[1.02] inline-flex items-center justify-center"
        >
          Book Demo
        </a>
      </div>
    </Container>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE EXPORT
══════════════════════════════════════════════════════════════ */
const HRManagerPage: React.FC = () => (
  <div id="hr-manager" className="relative overflow-x-hidden">
    <HRHero />
    <ProductEcosystem />
    <AttendanceTracking />
    <SimplifyTimeOff />
    <WorkforceConnected />
    <SmarterDecisions />
    <InYourPocket />
    <EverythingInOne />
    <PoweringWorkforces />
    <HRManagerCTA />
  </div>
);

export default HRManagerPage;
