import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  Star,
  Users,
  Clock,
  Calendar,
  BarChart2,
  Shield,
  Smartphone,
  Zap,
  ArrowRight,
  UserCheck,
  FileText,
  Lock,
} from 'lucide-react';

import { CustomerServiceHeroChart } from './CustomerServiceHeroChart';

/* ─── FadeUp Animation ─── */
const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── 1. Hero Section ─── */
const HRSolutionsHero: React.FC = () => (
  <div className="w-full bg-white pt-[68px]">
    {/* ── BREADCRUMB BAR ── */}
    <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-0 h-[45px] py-[14px] flex items-center gap-[8px]">
      <div className="flex items-center gap-[8px] font-['Inter',sans-serif] text-[13px] leading-[16px] text-[#6B7280]">
        <a href="#solutions" className="hover:text-[#111827] transition-colors">Solutions</a>
        <span>/</span>
        <span className="text-[#6B7280]">By Department</span>
        <span>/</span>
        <span className="font-semibold text-[#111827]">Human Resources</span>
      </div>
    </div>

    {/* HERO — Main Content */}
    <section id="hero" className="w-full max-w-[1216px] mx-auto px-6 lg:px-0 pt-[60px] pb-[56px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[60px]">
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-start w-full lg:w-[578px] pt-[3px] gap-[16.8px] shrink-0">

          {/* h1 */}
          <div className="w-full lg:w-[578px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.15] sm:leading-[52px] lg:leading-[54px] tracking-[-1.04px] text-[#111827]">
              HRMS Software Built for HR Teams Managing Attendance, Time Off & the Whole Workforce
            </h1>
          </div>

          {/* p.lead */}
          <div className="w-full lg:w-[480px] max-w-[480px] pt-[2.385px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280] max-w-[450px]">
              One cloud-based HR platform for attendance tracking, time-off management, approvals, and employee records — so HR spends less time on admin and more time with people.
            </p>
          </div>

          {/* div.hero-ctas */}
          <div className="flex items-center gap-[14px] w-full pt-[15.2px]">
            <a
              href="#pricing"
              className="bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] w-[138px] h-[49px] rounded-[12px] transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0"
            >
              Get Started
            </a>
            <a
              href="#pricing"
              className="bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] w-[151px] h-[49px] rounded-[12px] transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Right Column: div.hero-visual */}
        <div className="w-full lg:w-[578px] flex items-center justify-center">
          <CustomerServiceHeroChart />
        </div>
      </div>
    </section>

    {/* TRUST STRIP (Hero Tag Pills) */}
    <div className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-[40px] px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap items-center justify-between gap-[30.6px]">
        {[
          'Cloud HRMS',
          'Real-time attendance tracking',
          'Employee self-service',
          'Web + mobile',
          'Role-based access',
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-[8px]">
            <span className="w-[6px] h-[6px] rounded-full bg-[#5C5CFF] shrink-0" />
            <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] text-[#6B7280]">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── Trusted Companies Strip ─── */
const HRTrustedLogos: React.FC = () => {
  const logos = [
    { name: 'TechNova', icon: <span className="w-[18px] h-[12px] bg-[#6B7280] rounded-[2px] shrink-0" /> },
    { name: 'Globalink', icon: <span className="w-[14px] h-[14px] bg-[#6B7280] rounded-full shrink-0" /> },
    { name: 'BuildBase', icon: <span className="w-[14px] h-[14px] bg-[#6B7280] shrink-0 [clip-path:polygon(50%_0%,100%_45%,100%_100%,0%_100%,0%_45%)]" /> },
    { name: 'StarPeak', icon: <Star size={16} className="text-[#6B7280] fill-[#6B7280] shrink-0" /> },
    { name: 'PulseOps', icon: <Zap size={16} className="text-[#6B7280] shrink-0" /> },
  ];

  const loopLogos = [...logos, ...logos];

  return (
    <section className="bg-white py-12 border-b border-slate-100 overflow-hidden w-full">
      <div className="max-w-[1280px] mx-auto px-6 text-center mb-6">
        <p className="text-[12px] font-bold text-slate-400 uppercase tracking-widest">
          Trusted by HR Leaders at 50,000+ Enterprises Worldwide
        </p>
      </div>

      <div className="w-full relative overflow-hidden py-1">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        <div className="flex w-fit">
          <motion.div
            className="flex items-center gap-8 sm:gap-14 md:gap-16 pr-8 sm:pr-14 md:pr-16 shrink-0"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
          >
            {loopLogos.map((logo, idx) => (
              <div key={`a-${idx}`} className="flex items-center gap-2 text-slate-600 font-extrabold text-[16px] opacity-75 hover:opacity-100 transition-opacity duration-200 cursor-default shrink-0">
                {logo.icon}
                <span className="whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-8 sm:gap-14 md:gap-16 pr-8 sm:pr-14 md:pr-16 shrink-0"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
          >
            {loopLogos.map((logo, idx) => (
              <div key={`b-${idx}`} className="flex items-center gap-2 text-slate-600 font-extrabold text-[16px] opacity-75 hover:opacity-100 transition-opacity duration-200 cursor-default shrink-0">
                {logo.icon}
                <span className="whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ─── 2. HR PROBLEM -> VALUE SECTION ─── */
const HRProblemValue: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      {/* div.section-head */}
      <div className="flex flex-col items-center text-center gap-[13.2px] max-w-[620px] w-full">
        {/* h2 */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[40px] sm:leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[602px]">
          Less Admin Work. More Time for Your People.
        </h2>

        {/* p */}
        <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#6B7280] text-center max-w-[564px]">
          Stop stitching together spreadsheets, a separate time-off tracker, a standalone attendance app, and a WhatsApp group for approvals. Workzi's HR management software brings it all into one system.
        </p>
      </div>

      {/* div.benefit-grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] w-full max-w-[1216px]">
        {/* Card 1 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              One HRMS, not five tools
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Attendance, time off, and tasks stop living in different apps.
            </p>
          </div>

          {/* div.benefit-visual */}
          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Present Today
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                138
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Late Arrivals
              </span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                3
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                On Time Off
              </span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                4
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Faster time-off approvals
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Requests move smoothly without an endless email thread.
            </p>
          </div>

          {/* div.benefit-visual */}
          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Sarah Anderson
              </span>
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Design
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Michael Kim
              </span>
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Engineering
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Priya Rao
              </span>
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Marketing
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Less time on manual reports
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Automated reporting and workforce insights ready in seconds.
            </p>
          </div>

          {/* div.benefit-visual */}
          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                James Turner — Time Off
              </span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Pending
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Laura Martinez — WFH
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Approved
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                David Torres — Correction
              </span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 3. HR CAPABILITIES GRID ─── */
const HRCapabilitiesGrid: React.FC = () => {
  const capabilities = [
    { icon: '✅', label: 'Attendance Management' },
    { icon: '🏖', label: 'Time-Off Management' },
    { icon: '👥', label: 'Employee Directory' },
    { icon: '🗓', label: 'Shift Management' },
    { icon: '⏱', label: 'Time Tracking' },
    { icon: '✔️', label: 'Task Management' },
    { icon: '🧾', label: 'Approval Workflows' },
    { icon: '📱', label: 'Employee Self-Service' },
    { icon: '📣', label: 'Announcements' },
    { icon: '📅', label: 'Calendar' },
    { icon: '📊', label: 'Reports & Analytics' },
    { icon: '🏢', label: 'Organization Management' },
  ];

  return (
    <section className="w-full bg-[rgba(120,90,253,0.15)] py-[80px] px-6 lg:px-[32px]">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        {/* div.section-head */}
        <div className="flex flex-col items-center text-center gap-[13px] max-w-[620px] w-full">
          {/* h2 */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[44px] sm:leading-[54px] lg:leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[609px]">
            Everything HR Needs for Everyday Workforce Operations
          </h2>

          {/* p */}
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#464A53] text-center max-w-[606px]">
            A single map of what Workzi's HR software covers — click into any area to explore.
          </p>
        </div>

        {/* div.cap-grid */}
        <div className="w-full max-w-[1216px] bg-[#E5E7EB] border border-[#E5E7EB] rounded-[24px] overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white hover:bg-slate-50/80 transition-colors py-[26px] px-[22px] flex items-center gap-[12px] h-[86px] cursor-pointer group"
            >
              <span className="w-[34px] h-[34px] bg-[#F8FAFC] rounded-[9px] flex items-center justify-center text-[15px] shrink-0 group-hover:scale-105 transition-transform">
                {item.icon}
              </span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14.5px] leading-[18px] text-[#111827]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 4, 5, 6, 7. HR KNOWLEDGE & FEATURE SECTIONS ─── */
const HRKnowledgeSections: React.FC = () => {
  return (
    <div className="w-full bg-white py-[40px]">
      {/* 4. Section 1: Workforce Visibility */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
          {/* div.knowledge-text */}
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            {/* Frame 1984078966 */}
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              {/* span.section-tag */}
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Workforce Visibility
              </span>

              {/* Frame 1984078965 */}
              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                {/* Frame 1984078964 */}
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Real-Time Attendance Tracking Across Your Entire Workforce
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Get a live view of who's working, who's late, and who's on time off — without pinging managers for updates every morning.
                  </p>
                </div>

                {/* button.knowledge-btn */}
                <a
                  href="#attendance-tracking"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>Explore Attendance Management</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            {/* ul.feature-list */}
            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                'See attendance status by employee or department, in real time',
                'Spot exceptions — late arrivals, missed check-outs — before they pile up',
                'Resolve issues directly from the dashboard, no separate tool needed',
              ].map((text, idx) => (
                <li key={idx} className="flex flex-row items-center p-0 gap-[12px] w-full">
                  <span className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] text-[#10B981] flex flex-row items-center justify-center text-[12px] font-bold shrink-0 border border-[#10B981]/20">
                    ✓
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827] flex items-center">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual Dashboard Graphic */}
          <div className="w-full max-w-[611px] h-auto min-h-[260px] sm:min-h-[380px] lg:h-[496px] rounded-[16px] overflow-hidden border border-slate-200/50 flex items-center justify-center p-3.5 sm:p-6 bg-[radial-gradient(97.38%_131.25%_at_8.51%_3.7%,#9AA0FF_0%,#C5E2FF_51.12%,#4F7EFF_100%)] relative">
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 z-10">
              {/* Metric Boxes */}
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5">
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] p-2 sm:p-2.5 flex flex-col items-center justify-center text-center">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[17px] leading-[21px] text-[#111827]">142</span>
                  <span className="font-['Inter',sans-serif] text-[9px] sm:text-[10px] uppercase text-[#6B7280] font-normal tracking-wider mt-0.5">EMPLOYEES</span>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] p-2 sm:p-2.5 flex flex-col items-center justify-center text-center">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[17px] leading-[21px] text-[#111827]">138</span>
                  <span className="font-['Inter',sans-serif] text-[9px] sm:text-[10px] uppercase text-[#6B7280] font-normal tracking-wider mt-0.5">PRESENT</span>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] p-2 sm:p-2.5 flex flex-col items-center justify-center text-center">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[17px] leading-[21px] text-[#111827]">4</span>
                  <span className="font-['Inter',sans-serif] text-[9px] sm:text-[10px] uppercase text-[#6B7280] font-normal tracking-wider mt-0.5">ABSENT</span>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] p-2 sm:p-2.5 flex flex-col items-center justify-center text-center">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[17px] leading-[21px] text-[#111827]">3</span>
                  <span className="font-['Inter',sans-serif] text-[9px] sm:text-[10px] uppercase text-[#6B7280] font-normal tracking-wider mt-0.5">LATE</span>
                </div>
              </div>

              {/* Status List Rows */}
              <div className="flex flex-col gap-1 pt-1">
                <div className="flex items-center justify-between gap-2 py-2 sm:py-2.5 border-b border-gray-100">
                  <span className="font-['Inter',sans-serif] font-semibold text-[12px] sm:text-[12.5px] text-[#111827] truncate">Design — 18 today</span>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-[10px] py-[3px] rounded-full shrink-0">On track</span>
                </div>
                <div className="flex items-center justify-between gap-2 py-2 sm:py-2.5 border-b border-gray-100">
                  <span className="font-['Inter',sans-serif] font-semibold text-[12px] sm:text-[12.5px] text-[#111827] truncate">Engineering — 42 today</span>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-[10px] py-[3px] rounded-full shrink-0">On track</span>
                </div>
                <div className="flex items-center justify-between gap-2 py-2 sm:py-2.5">
                  <span className="font-['Inter',sans-serif] font-semibold text-[12px] sm:text-[12.5px] text-[#111827] truncate">Sales — 6 exceptions</span>
                  <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[10.5px] sm:text-[11px] px-[10px] py-[3px] rounded-full shrink-0">Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Section 2: Attendance & Time */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-[50px]">
          {/* div.knowledge-text */}
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            {/* Frame 1984078966 */}
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              {/* span.section-tag */}
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Attendance & Time
              </span>

              {/* Frame 1984078965 */}
              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                {/* Frame 1984078964 */}
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Attendance Management Software That Takes the Manual Work Out of Time Tracking
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Employees get a simple way to check in. HR gets accurate hours, a clean history, and context on every exception — automatically.
                  </p>
                </div>

                {/* button.knowledge-btn */}
                <a
                  href="#attendance-software"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>Explore Attendance Software</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            {/* ul.feature-list */}
            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                'Smart check-in and check-out',
                'Location-aware (geo-fenced) attendance',
                'Automatic working-hours tracking',
                'One-click attendance regularization',
              ].map((text, idx) => (
                <li key={idx} className="flex flex-row items-center p-0 gap-[12px] w-full">
                  <span className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] text-[#10B981] flex flex-row items-center justify-center text-[12px] font-bold shrink-0 border border-[#10B981]/20">
                    ✓
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827] flex items-center">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Left Visual Dashboard Graphic */}
          <div className="w-full max-w-[611px] h-auto min-h-[260px] sm:min-h-[380px] lg:h-[496px] rounded-[16px] overflow-hidden border border-slate-200/50 flex items-center justify-center p-3.5 sm:p-6 bg-[radial-gradient(97.14%_126.61%_at_0%_-8.9%,#4F7EFF_0%,#C5E2FF_51.12%,#9AA0FF_100%)] relative">
            <div className="w-full max-w-[510px] bg-white/90 backdrop-blur-md rounded-[20px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-5 z-10">
              {/* Card 1: Attendance */}
              <div className="w-full sm:w-[210px] bg-white rounded-[16px] border border-[#E5E7EB] p-4 flex flex-col gap-2.5">
                <span className="font-['Inter',sans-serif] font-bold text-[11px] uppercase tracking-wider text-[#6B7280]">ATTENDANCE</span>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Check-in</span>
                  <span className="font-semibold text-[#111827]">08:52 AM</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Location</span>
                  <span className="font-semibold text-[#15803D] flex items-center gap-1">Verified ✓</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Working Hrs</span>
                  <span className="font-semibold text-[#111827]">6h 40m</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Status</span>
                  <span className="font-semibold text-[#5C5CFF]">On Duty</span>
                </div>
              </div>

              {/* Card 2: Regularization */}
              <div className="w-full sm:w-[210px] bg-white rounded-[16px] border border-[#E5E7EB] p-4 flex flex-col gap-2.5">
                <span className="font-['Inter',sans-serif] font-bold text-[11px] uppercase tracking-wider text-[#6B7280]">REGULARIZATION</span>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Jul 24</span>
                  <span className="bg-[#FEF3E2] text-[#B45309] font-semibold text-[11px] px-2 py-0.5 rounded-full">Requested</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Jul 18</span>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-semibold text-[11px] px-2 py-0.5 rounded-full">Approved</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">WFH — Jul 30</span>
                  <span className="bg-[#EFF6FF] text-[#1D4ED8] font-semibold text-[11px] px-2 py-0.5 rounded-full">Pending</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section 3: Time-Off Management */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
          {/* div.knowledge-text */}
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            {/* Frame 1984078966 */}
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              {/* span.section-tag */}
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Time-Off Management
              </span>

              {/* Frame 1984078965 */}
              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                {/* Frame 1984078964 */}
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Time-Off Management Software Employees and Managers Actually Want to Use
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Apply, approve, reject, or cancel time off in a few taps. Real-time time-off balances mean fewer "how many days do I have left?" messages to HR.
                  </p>
                </div>

                {/* button.knowledge-btn */}
                <a
                  href="#time-off-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>Explore Time-Off Management</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            {/* ul.feature-list */}
            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                'Apply for time off and track balance from the employee app',
                'Manager approvals move in one screen, not an email chain',
                'Time-off policies stay standardized across departments',
              ].map((text, idx) => (
                <li key={idx} className="flex flex-row items-center p-0 gap-[12px] w-full">
                  <span className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] text-[#10B981] flex flex-row items-center justify-center text-[12px] font-bold shrink-0 border border-[#10B981]/20">
                    ✓
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827] flex items-center">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual Dashboard Graphic */}
          <div className="w-full max-w-[611px] h-auto min-h-[260px] sm:min-h-[380px] lg:h-[496px] rounded-[16px] overflow-hidden border border-slate-200/50 flex items-center justify-center p-3.5 sm:p-6 bg-[radial-gradient(97.14%_126.61%_at_0%_-8.9%,#4F7EFF_0%,#C5E2FF_51.12%,#9AA0FF_100%)] relative">
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col gap-3.5 sm:gap-4 z-10">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">Time-Off Request Overview</span>
                <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-0.5 rounded-full shrink-0">Real-time</span>
              </div>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Paid Time Off (3 Days)</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Alex Johnson • Engineering</div>
                  </div>
                  <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Pending</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Sick Time Off (1 Day)</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Maria Garcia • Design</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section 4: Employee Directory & Department Management */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-[50px]">
          {/* div.knowledge-text */}
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            {/* Frame 1984078966 */}
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              {/* span.section-tag */}
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Department Management
              </span>

              {/* Frame 1984078965 */}
              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                {/* Frame 1984078964 */}
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    One Employee Directory for Every Department, Shift, and Record
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    A single, reliable directory for employee details, departments, and shifts — no more digging through inboxes for someone's contact info or shift timing.
                  </p>
                </div>

                {/* button.knowledge-btn */}
                <a
                  href="#employee-directory"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>Explore Employee Directory</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            {/* ul.feature-list */}
            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                'Centralized workforce records',
                'Organized departments & teams',
                'Clear employee roles & profiles',
                'Simple onboarding workflows',
              ].map((text, idx) => (
                <li key={idx} className="flex flex-row items-center p-0 gap-[12px] w-full">
                  <span className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] text-[#10B981] flex flex-row items-center justify-center text-[12px] font-bold shrink-0 border border-[#10B981]/20">
                    ✓
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827] flex items-center">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual Dashboard Graphic */}
          <div className="w-full max-w-[611px] h-auto min-h-[380px] sm:h-[496px] rounded-[16px] overflow-hidden border border-slate-200/50 flex items-center justify-center p-3.5 sm:p-6 bg-[radial-gradient(97.38%_131.25%_at_8.51%_3.7%,#9AA0FF_0%,#C5E2FF_51.12%,#4F7EFF_100%)] relative">
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-3.5 sm:p-6 flex flex-col gap-3 sm:gap-4 z-10 shadow-xs">
              {/* Search Bar Input */}
              <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] px-3 sm:px-3.5 py-2 sm:py-2.5 flex items-center gap-2 text-slate-400 text-[12px] sm:text-[13px]">
                <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search employees...</span>
              </div>

              {/* Employee Table */}
              <div className="w-full flex flex-col pt-1">
                {/* Table Header */}
                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 pb-2.5 border-b border-gray-100 font-['Inter',sans-serif] font-bold text-[9.5px] sm:text-[10px] uppercase tracking-wider text-[#6B7280] gap-1.5 sm:gap-2 items-center">
                  <span className="truncate">EMPLOYEE</span>
                  <span className="hidden sm:block truncate">DEPARTMENT</span>
                  <span className="text-center sm:text-left truncate">STATUS</span>
                  <span className="text-right truncate">SHIFT</span>
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 border-b border-gray-100 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#5C5CFF] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">SA</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Sarah Anderson</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">Design</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">Design</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">Active</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">9–5</span>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 border-b border-gray-100 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F59E0B] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">MK</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Michael Kim</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">Engineering</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">Engineering</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">Late</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">9–5</span>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#10B981] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">PR</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Priya Rao</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">Marketing</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">Marketing</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#FFEDD5] text-[#C2410C] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">On Time Off</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">10–6</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── 8. HR TASKS + COMMUNICATION ─── */
const HRTasksCommunication: React.FC = () => {
  return (
    <section className="w-full bg-white py-[100px] px-6 lg:px-[32px]">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[36px]">
        {/* div.section-head */}
        <div className="flex flex-col items-center text-center gap-[13.1px] max-w-[790px] w-full">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[44px] sm:leading-[54px] lg:leading-[62px] tracking-[-1px] text-[#111827]">
            Keep People, Tasks, and Workplace Updates Connected
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#6B7280] max-w-[601px]">
            Turn workforce visibility into action. Give teams one shared place for assigned work, company announcements, and the dates that matter.
          </p>
        </div>

        {/* div.feature-row */}
        <div className="w-full max-w-[882px] flex flex-col lg:flex-row items-center justify-between gap-[32px] lg:gap-[64px] pt-4">
          {/* Left Card: Team Tasks */}
          <div className="w-full lg:w-[576px] bg-white border border-[#E5E7EB] rounded-[14px] p-[18px] flex flex-col justify-between h-[234px]">
            <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] text-[#111827] pb-2 border-b border-slate-100">
              Team Tasks
            </div>

            <div className="flex flex-col justify-around flex-1 py-1">
              <div className="flex items-center justify-between py-1">
                <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#111827]">Prepare onboarding kit</span>
                <span className="bg-[#EEEEFF] text-[#5C5CFF] font-bold text-[10.5px] px-[9px] py-[3px] rounded-full">Assigned</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#111827]">Update shift roster</span>
                <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[10.5px] px-[9px] py-[3px] rounded-full">In Progress</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#111827]">Approve pending time off</span>
                <span className="bg-[#FDEEEE] text-[#B91C1C] font-bold text-[10.5px] px-[9px] py-[3px] rounded-full">Overdue</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="font-['Inter',sans-serif] font-medium text-[13px] text-[#111827]">Send Q3 policy update</span>
                <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] px-[9px] py-[3px] rounded-full">Completed</span>
              </div>
            </div>
          </div>

          {/* Right Card: Announcements & Calendar */}
          <div className="w-full lg:w-[242px] bg-white border border-[#E5E7EB] rounded-[14px] p-[18px] flex flex-col justify-between h-[234px]">
            <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] text-[#111827] pb-2 border-b border-slate-100 text-center lg:text-left">
              Announcements & Calendar
            </div>

            <div className="flex flex-col justify-around flex-1 py-1 gap-2">
              <div>
                <div className="font-['Inter',sans-serif] font-medium text-[13px] text-[#111827] leading-tight">Company all-hands — Aug 5</div>
                <div className="font-['Inter',sans-serif] text-[11.5px] text-[#6B7280]">Company Announcement</div>
              </div>
              <div>
                <div className="font-['Inter',sans-serif] font-medium text-[13px] text-[#111827] leading-tight">Public holiday — Aug 15</div>
                <div className="font-['Inter',sans-serif] text-[11.5px] text-[#6B7280]">Holiday Calendar</div>
              </div>
              <div>
                <div className="font-['Inter',sans-serif] font-medium text-[13px] text-[#111827] leading-tight">Design team offsite</div>
                <div className="font-['Inter',sans-serif] text-[11.5px] text-[#6B7280]">Team Event</div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Bullets (3 items as specified) */}
        <div className="w-full max-w-[700px] flex flex-col sm:flex-row items-center justify-center gap-[16px] sm:gap-[24px] pt-4">
          {[
            'Assign and track tasks with due dates and status',
            'Share company-wide announcements without a separate tool',
            'See holidays, time off, and deadlines on one calendar',
          ].map((bullet, idx) => (
            <div key={idx} className="flex items-center gap-[9px]">
              <Check className="w-[18px] h-[18px] text-[#10B981] shrink-0" strokeWidth={3} />
              <span className="font-['Inter',sans-serif] font-medium text-[14px] leading-[18px] text-[#111827]">
                {bullet}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 9. HR CONNECTED WORKFLOWS ─── */
const HRConnectedWorkflows: React.FC = () => {
  const steps = [
    { text: 'Employee requests time off' },
    { text: 'Manager approves' },
    { text: 'Time-off balance updates' },
    { text: 'Team availability updates' },
    { text: 'Calendar updates' },
    { text: 'HR sees it in real time' },
  ];

  return (
    <section className="w-full bg-[rgba(120,90,253,0.15)] py-[80px] lg:py-[100px] px-4 sm:px-6 lg:px-[24px]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-[36px] lg:gap-[52px]">
        {/* div.section-head */}
        <div className="flex flex-col items-center text-center gap-[13.1px] max-w-[750px] w-full">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[48px] lg:text-[55px] leading-[40px] sm:leading-[54px] lg:leading-[62px] tracking-[-1px] text-[#111827]">
            One Update. Connected Everywhere.
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[17px] leading-[25px] sm:leading-[28px] text-[#464A53] max-w-[564px]">
            Nothing in Workzi's HRMS lives in isolation — one action updates everything downstream.
          </p>
        </div>

        {/* Mobile / Tablet View: Vertical Connected Flow */}
        <div className="w-full flex flex-col items-center gap-2 sm:gap-2.5 lg:hidden max-w-[440px] mx-auto">
          {steps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="w-full bg-white border border-[#E5E7EB] rounded-[14px] px-4 py-3 min-h-[48px] flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-6 h-6 rounded-full bg-[#5C5CFF]/10 text-[#5C5CFF] font-bold text-[11px] flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] leading-[18px] text-[#111827] truncate">
                    {step.text}
                  </span>
                </div>
                <span className="text-[#10B981] text-[12px] font-bold shrink-0">✓</span>
              </div>

              {idx < steps.length - 1 && (
                <div className="flex flex-col items-center my-[-2px] text-[#5C5CFF]/60 text-[14px] font-bold">
                  ↓
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Desktop View (Unchanged single-line row) */}
        <div className="w-full hidden lg:flex items-center justify-center">
          <div className="w-full flex items-center justify-between gap-1 sm:gap-1.5 xl:gap-3">
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* div.wf-node */}
                <div className="box-border bg-white border border-[#E5E7EB] rounded-[14px] px-2.5 sm:px-3.5 xl:px-4 py-3 h-[50px] flex items-center justify-center shrink-0">
                  <span className="font-['Inter',sans-serif] font-semibold text-[10.5px] sm:text-[12px] xl:text-[13px] leading-[16px] text-center text-[#111827] whitespace-nowrap">
                    {step.text}
                  </span>
                </div>

                {/* div.wf-arrow */}
                {idx < steps.length - 1 && (
                  <span className="font-['Inter',sans-serif] text-[14px] sm:text-[17px] xl:text-[20px] leading-[24px] text-[#0B0E1A] font-normal shrink-0 select-none px-0.5 sm:px-1">
                    →
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 10. INTERACTIVE HR WORKFLOW SHOWCASE ─── */
const HRInteractiveShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const workflows = [
    {
      id: 'attendance-exceptions',
      title: 'Attendance exceptions',
      desc: 'Late arrivals and missed check-outs get flagged automatically, with manager review and correction in one screen.',
      rows: [
        { text: 'Michael Kim — Late arrival', pillText: 'Flagged', pillBg: 'bg-[#FEF3E2]', pillColor: 'text-[#B45309]', pillBgHex: '#FEF3E2', pillColorHex: '#B45309' },
        { text: 'David Torres — Missed check-out', pillText: 'Review', pillBg: 'bg-[#FEF3E2]', pillColor: 'text-[#B45309]', pillBgHex: '#FEF3E2', pillColorHex: '#B45309' },
        { text: 'Priya Rao — Corrected 08:45', pillText: 'Resolved', pillBg: 'bg-[#EAFBF3]', pillColor: 'text-[#15803D]', pillBgHex: '#EAFBF3', pillColorHex: '#15803D' },
      ],
    },
    {
      id: 'time-off-approvals',
      title: 'Time-off approvals',
      desc: 'Requests route to the right manager automatically, with status visible to both sides.',
      rows: [
        { text: 'Alex Johnson — Paid Time Off (3 days)', pillText: 'Pending Approval', pillBg: 'bg-[#EFF6FF]', pillColor: 'text-[#1D4ED8]', pillBgHex: '#EFF6FF', pillColorHex: '#1D4ED8' },
        { text: 'Maria Garcia — Sick Time Off (1 day)', pillText: 'Approved', pillBg: 'bg-[#EAFBF3]', pillColor: 'text-[#15803D]', pillBgHex: '#EAFBF3', pillColorHex: '#15803D' },
        { text: 'James Smith — Personal Time Off (2 days)', pillText: 'Approved', pillBg: 'bg-[#EAFBF3]', pillColor: 'text-[#15803D]', pillBgHex: '#EAFBF3', pillColorHex: '#15803D' },
      ],
    },
    {
      id: 'employee-onboarding',
      title: 'Employee onboarding',
      desc: 'New hires get access, records, and schedules set up from day one.',
      rows: [
        { text: 'Sarah Connor — Design Dept Onboarding', pillText: 'In Progress', pillBg: 'bg-[#FEF3E2]', pillColor: 'text-[#B45309]', pillBgHex: '#FEF3E2', pillColorHex: '#B45309' },
        { text: 'Robert Langdon — Engineering Access', pillText: 'Completed', pillBg: 'bg-[#EAFBF3]', pillColor: 'text-[#15803D]', pillBgHex: '#EAFBF3', pillColorHex: '#15803D' },
        { text: 'Elena Rostova — HR Documents Signed', pillText: 'Verified', pillBg: 'bg-[#EAFBF3]', pillColor: 'text-[#15803D]', pillBgHex: '#EAFBF3', pillColorHex: '#15803D' },
      ],
    },
    {
      id: 'shift-assignments',
      title: 'Shift assignments',
      desc: 'Configure and reassign shifts without spreadsheets.',
      rows: [
        { text: 'Morning Shift (09:00 - 17:00)', pillText: '24 Employees', pillBg: 'bg-[#EEEEFF]', pillColor: 'text-[#5C5CFF]', pillBgHex: '#EEEEFF', pillColorHex: '#5C5CFF' },
        { text: 'Evening Shift (17:00 - 01:00)', pillText: '12 Employees', pillBg: 'bg-[#EEEEFF]', pillColor: 'text-[#5C5CFF]', pillBgHex: '#EEEEFF', pillColorHex: '#5C5CFF' },
        { text: 'Shift Swap Request — Tom & Jerry', pillText: 'Pending Review', pillBg: 'bg-[#FEF3E2]', pillColor: 'text-[#B45309]', pillBgHex: '#FEF3E2', pillColorHex: '#B45309' },
      ],
    },
    {
      id: 'wfh-requests',
      title: 'Work-from-home requests',
      desc: 'Employees request, managers approve, calendars update.',
      rows: [
        { text: 'David Kim — WFH Request (Aug 2)', pillText: 'Approved', pillBg: 'bg-[#EAFBF3]', pillColor: 'text-[#15803D]', pillBgHex: '#EAFBF3', pillColorHex: '#15803D' },
        { text: 'Rachel Green — Remote Week', pillText: 'Pending Approval', pillBg: 'bg-[#EFF6FF]', pillColor: 'text-[#1D4ED8]', pillBgHex: '#EFF6FF', pillColorHex: '#1D4ED8' },
        { text: 'Kevin Malone — Hybrid Schedule', pillText: 'Active', pillBg: 'bg-[#EAFBF3]', pillColor: 'text-[#15803D]', pillBgHex: '#EAFBF3', pillColorHex: '#15803D' },
      ],
    },
    {
      id: 'attendance-regularization',
      title: 'Attendance regularization',
      desc: 'Correct a missed check-in or check-out in a couple of taps.',
      rows: [
        { text: 'Jul 24 Missed Punch — Punch In 09:00', pillText: 'Approved', pillBg: 'bg-[#EAFBF3]', pillColor: 'text-[#15803D]', pillBgHex: '#EAFBF3', pillColorHex: '#15803D' },
        { text: 'Jul 28 Client Visit — Field Duty', pillText: 'Verified', pillBg: 'bg-[#EAFBF3]', pillColor: 'text-[#15803D]', pillBgHex: '#EAFBF3', pillColorHex: '#15803D' },
        { text: 'Jul 30 System Error Punch', pillText: 'Pending Review', pillBg: 'bg-[#FEF3E2]', pillColor: 'text-[#B45309]', pillBgHex: '#FEF3E2', pillColorHex: '#B45309' },
      ],
    },
  ];

  const currentWf = workflows[activeTab];

  return (
    <section className="w-full bg-white py-[100px] px-6 lg:px-[32px]">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        {/* div.section-head */}
        <div className="flex flex-col items-center text-center gap-[13px] max-w-[750px] w-full">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[44px] sm:leading-[54px] lg:leading-[62px] tracking-[-1px] text-[#111827]">
            Handle Everyday HR Operations Without the Back-and-Forth
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#6B7280]">
            Every common workflow, in one interactive view.
          </p>
        </div>

        {/* div.use-case-grid */}
        <div className="w-full max-w-[1216px] flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-[40px]">

          {/* div.uc-list */}
          <div className="flex flex-col items-start w-full lg:w-[340px] shrink-0 gap-1.5 sm:gap-2">
            {workflows.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`cursor-pointer w-full text-left rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'p-3.5 sm:p-4 bg-indigo-50/60 border border-indigo-100/80 shadow-xs'
                      : 'p-3 sm:py-3.5 sm:px-3 hover:bg-slate-50 border border-transparent'
                  }`}
                >
                  <h4
                    className={`font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[16px] leading-[20px] tracking-[-0.32px] flex items-center transition-colors ${
                      isActive ? 'text-[#5C5CFF]' : 'text-[#111827]'
                    }`}
                  >
                    {item.title}
                  </h4>
                  {isActive && (
                    <p className="font-['Inter',sans-serif] font-normal text-[13px] sm:text-[13.5px] leading-[20px] sm:leading-[22px] text-[#6B7280] mt-1.5">
                      {item.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* div.uc-preview */}
          <div className="box-border flex flex-col items-start p-3 sm:p-4 w-full max-w-[836px] min-h-[160px] h-auto bg-[#F8FAFC] border border-[#E5E7EB] rounded-[20px] sm:rounded-[24px] grow">
            {/* div.dash-card */}
            <div className="box-border flex flex-col items-start p-3.5 sm:p-5 w-full min-h-[130px] h-auto bg-white border border-[#E5E7EB] rounded-[14px] gap-1 shadow-xs">
              {currentWf.rows.map((row, idx) => (
                <div
                  key={idx}
                  className={`flex flex-row justify-between items-center py-2 sm:py-2.5 w-full box-border gap-2 ${
                    idx < currentWf.rows.length - 1 ? 'border-b border-[#F3F4F6]' : ''
                  }`}
                >
                  {/* span – row label */}
                  <span className="font-['Inter',sans-serif] font-semibold text-[12px] sm:text-[12.5px] leading-[16px] text-[#111827] truncate pr-2 min-w-0">
                    {row.text}
                  </span>
                  {/* span.status-pill */}
                  <span
                    className="flex items-center justify-center px-2.5 py-1 rounded-full font-['Inter',sans-serif] font-bold text-[10.5px] sm:text-[11px] leading-[13px] whitespace-nowrap shrink-0"
                    style={{
                      backgroundColor: row.pillBgHex,
                      color: row.pillColorHex,
                    }}
                  >
                    {row.pillText}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

/* ─── 11. EMPLOYEE SELF SERVICE DARK SHOWCASE ─── */
const HREmployeeSelfServiceDark: React.FC = () => {
  const cards = [
    {
      head: 'HOME',
      rows: ['Track assigned tasks', 'Check announcements'],
    },
    {
      head: 'ATTENDANCE',
      rows: ['On Duty · 08:52 AM', 'Request correction'],
    },
    {
      head: 'TIME OFF',
      rows: ['Balance: 18 days', 'Request time off'],
    },
    {
      head: 'PROFILE / CALENDAR',
      rows: ['View shifts', 'Upcoming holidays'],
    },
  ];

  return (
    <section className="w-full bg-[#1A1A1A] py-[80px] px-6 lg:px-[120px] text-white">
      <div className="w-full max-w-[1205px] mx-auto flex flex-col items-center gap-[40px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-[12px] max-w-[743px] w-full">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[44px] sm:leading-[54px] lg:leading-[62px] tracking-[-1px] text-white">
            Employee Self-Service That Reduces HR's Inbox, Not Adds to It
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px] text-white/55 max-w-[555px]">
            Employees manage everyday needs right from the app — HR keeps control of policy, approvals, and records.
          </p>
        </div>

        {/* 4 Dark Phone Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[rgba(176,196,255,0.1)] border border-[#E5E7EB]/20 rounded-[20px] p-4 flex flex-col gap-4 hover:border-[#9194FF]/60 transition-colors"
            >
              <div className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] leading-[15px] uppercase tracking-wider text-[#9194FF] text-center">
                {card.head}
              </div>
              <div className="flex flex-col gap-2">
                {card.rows.map((rowText, rIdx) => (
                  <div
                    key={rIdx}
                    className="bg-white/15 border border-[#C8C8C8]/30 rounded-[9px] px-2.5 py-2 font-['Inter',sans-serif] font-semibold text-[11.5px] text-[#D1D5DB] flex items-center"
                  >
                    {rowText}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 12. AI ASSISTANT SHOWCASE ─── */
const HRAIAssistant: React.FC = () => {
  return (
    <section className="w-full bg-white py-[100px] px-6 lg:px-[120px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[64px]">
        {/* Left AI Panel */}
        <div className="w-full lg:w-[576px] bg-white border border-[#E5E7EB] rounded-[24px] p-7 lg:p-9 flex flex-col gap-3">
          {/* Prompt 1 */}
          <div className="inline-flex items-center px-4 py-3 bg-[#EEEEFF] text-[#4A4AE0] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13.5px] rounded-[14px] self-start max-w-max">
            "Who's on time off today?"
          </div>
          {/* Response 1 */}
          <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] px-4 py-3 font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13.5px] text-[#111827]">
            3 employees are on time off today: James Turner, Priya Rao, and Alan Cruz.
          </div>

          {/* Prompt 2 */}
          <div className="inline-flex items-center px-4 py-3 bg-[#EEEEFF] text-[#4A4AE0] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13.5px] rounded-[14px] self-start max-w-max mt-2">
            "Show this week's attendance exceptions"
          </div>
          {/* Response 2 */}
          <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] px-4 py-3 font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13.5px] text-[#111827]">
            6 exceptions this week — 4 late arrivals, 2 missed check-outs.
          </div>
        </div>

        {/* Right Feature Text */}
        <div className="w-full lg:w-[576px] flex flex-col items-start gap-[13.4px]">
          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[44px] sm:leading-[52px] lg:leading-[62px] tracking-[-1px] text-[#111827]">
            Get Answers and Take Action Faster
          </h3>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[26px] text-[#6B7280]">
            Help HR and managers find workforce information and navigate everyday operations with an assistant connected to the platform.
          </p>

          <ul className="flex flex-col gap-[11px] pt-2 w-full">
            {[
              '"Who\'s on time off today?"',
              '"Show this week\'s attendance exceptions"',
              '"Summarize overdue tasks by team"',
            ].map((text, idx) => (
              <li key={idx} className="flex items-center gap-[9px]">
                <span className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] text-[#10B981] flex items-center justify-center text-[12px] font-bold shrink-0">
                  ✓
                </span>
                <span className="font-['Inter',sans-serif] font-medium text-[14.5px] text-[#111827]">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <p className="font-['Inter',sans-serif] font-normal text-[13.5px] leading-[22px] text-[#6B7280] pt-2">
            AI assists — approvals and decisions stay with HR and managers.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ─── 13. REPORTS & ANALYTICS SHOWCASE ─── */
const HRReportsAnalytics: React.FC = () => {
  return (
    <section className="w-full bg-white py-[100px] px-6 lg:px-[80px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[64px]">
        {/* Left Text */}
        <div className="w-full lg:w-[576px] flex flex-col items-start gap-[14px]">
          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[38px] lg:text-[42px] leading-[44px] sm:leading-[52px] lg:leading-[62px] tracking-[-1px] text-[#111827]">
            Workforce Reports and Analytics Without a Separate BI Tool
          </h3>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[26px] text-[#6B7280]">
            Filter and export reports across attendance, time off, employees, departments, shifts, and tasks.
          </p>
        </div>

        {/* Right Feature Visual */}
        <div className="w-full lg:w-[576px] bg-[#F8FAFC] border border-[#E5E7EB] rounded-[24px] p-6 flex flex-col items-center justify-center">
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[14px] p-5.5 flex flex-col gap-4">
            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2">
              {['Date Range', 'Department', 'Employee', 'Shift', 'Status', 'Working Hours', 'Task Completion'].map((chip, idx) => (
                <span key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-full px-3.5 py-1.5 font-['Inter',sans-serif] font-semibold text-[12px] text-[#6B7280]">
                  {chip}
                </span>
              ))}
            </div>

            {/* Report Categories Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              {['Attendance', 'Working Hours', 'Time Off', 'Employee', 'Department', 'Shift', 'Task Completion'].map((cat, idx) => (
                <div key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] p-3 text-center font-['Inter',sans-serif] font-semibold text-[12.5px] text-[#111827] flex items-center justify-center min-h-[49px]">
                  {cat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── 14. INTEGRATIONS SHOWCASE ─── */
const HRIntegrationsSection: React.FC = () => {
  const integrationCats = [
    { icon: '💬', title: 'Communication' },
    { icon: '🔐', title: 'Identity' },
    { icon: '🗂', title: 'Productivity' },
    { icon: '📅', title: 'Calendar' },
  ];

  return (
    <section className="w-full bg-white py-[100px] px-6 lg:px-[80px]">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[64px]">
        {/* Left 4 Grid Cards */}
        <div className="w-full lg:w-[476.8px] grid grid-cols-2 gap-4 shrink-0">
          {integrationCats.map((cat, idx) => (
            <div key={idx} className="bg-white border border-[#E5E7EB] rounded-[14px] p-5 flex flex-col items-center justify-center gap-3 text-center hover:border-[#5C5CFF]/60 transition-colors">
              <div className="w-[40px] h-[40px] bg-[#EEEEFF] rounded-[10px] flex items-center justify-center text-[18px] text-[#5C5CFF]">
                {cat.icon}
              </div>
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[13.5px] leading-[16px] tracking-[-0.27px] text-[#111827]">
                {cat.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Right Section Head */}
        <div className="w-full lg:w-[620px] flex flex-col items-center lg:items-start text-center lg:text-left gap-[13px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[44px] sm:leading-[54px] lg:leading-[62px] tracking-[-1px] text-[#111827]">
            Connect Your HR Software With the Tools Your Teams Already Use
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#6B7280]">
            Keep workforce operations connected across the tools you already run on.
          </p>
          <a href="#integrations" className="inline-flex items-center gap-1.5 pt-2 font-['Inter',sans-serif] font-bold text-[15px] text-[#5C5CFF] hover:underline">
            <span>Explore Integrations</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

/* ─── 15. RELATED SOLUTIONS SHOWCASE ─── */
const HRRelatedSolutions: React.FC = () => {
  const cards = [
    {
      title: 'For Managers',
      desc: 'Track attendance, time off, tasks, and approvals for your team from one workspace.',
      linkText: 'Explore Manager Solutions →',
      href: '#manager-solutions',
    },
    {
      title: 'For IT & Admins',
      desc: 'Manage workforce access, accounts, and permissions in one place.',
      linkText: 'Explore IT Solutions →',
      href: '#it-solutions',
    },
    {
      title: 'For Task/Project Owners',
      desc: 'Assign work and track progress alongside workforce data.',
      linkText: 'Explore Task Management →',
      href: '#task-management',
    },
  ];

  return (
    <section className="w-full bg-[rgba(120,90,253,0.15)] py-[100px] px-6 lg:px-[80px]">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        {/* Title */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[44px] sm:leading-[54px] lg:leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[767px]">
          Explore More Ways to Manage Your Workforce
        </h2>

        {/* 3 Related Cards */}
        <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-[#E5E7EB] rounded-[24px] p-[30px] flex flex-col justify-between gap-[10px]">
              <div className="flex flex-col gap-2.5">
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[19px] leading-[22px] tracking-[-0.38px] text-[#111827]">
                  {card.title}
                </h4>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[23px] text-[#6B7280]">
                  {card.desc}
                </p>
              </div>
              <a href={card.href} className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] leading-[19px] text-[#5C5CFF] hover:underline pt-2">
                {card.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 16. FAQ SECTION ─── */
const HRFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      q: "Is Workzi's HR software cloud-based?",
      a: 'Yes. Workzi is a cloud-based HRMS — no on-premise setup, accessible on web and mobile.',
    },
    {
      q: 'Does Workzi support attendance tracking without biometric hardware?',
      a: 'Yes. Workzi supports GPS geofenced mobile check-in, rotating QR codes, facial recognition, and web punching, alongside optional biometric integration.',
    },
    {
      q: 'Can employees apply for time off from their phone?',
      a: 'Yes, employees can apply for time off, check balances, and track approval status directly from the mobile app.',
    },
    {
      q: 'Can managers approve time-off requests and attendance corrections from the app?',
      a: 'Yes, approvals route directly to the relevant manager and can be actioned from mobile or web.',
    },
    {
      q: 'Does Workzi integrate with payroll or ERP systems?',
      a: 'Yes, Workzi exports consolidated attendance and time-off data cleanly for seamless payroll and ERP synchronization.',
    },
    {
      q: 'Is Workzi suitable for small businesses or only enterprises?',
      a: 'Workzi is designed for growing teams of all sizes, scaling smoothly from small businesses up to large enterprises.',
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
      <div className="w-full max-w-[900px] mx-auto flex flex-col items-center gap-[64px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] leading-[20px] tracking-[1.44px] text-[#5B5FFF] uppercase">
            FAQ
          </span>
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[32px] sm:text-[42px] lg:text-[42px] leading-[46px] text-[#111827]">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[17px] leading-[28px] text-[#6B7280]">
            Everything teams ask about Workzi HR software.
          </p>
        </div>

        {/* FAQ List */}
        <div className="w-full max-w-[836px] flex flex-col divide-y divide-[#E5E7EB]/60">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-[26px] flex flex-col gap-2.5">
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] sm:text-[16.5px] leading-[21px] text-[#111827] group-hover:text-[#5B5FFF] transition-colors">
                    {faq.q}
                  </span>
                  <span
                    className={`w-[32px] h-[32px] rounded-[10px] flex items-center justify-center text-[16px] font-bold transition-all shrink-0 ${isOpen
                        ? 'bg-[#5C5CFF] text-white'
                        : 'bg-[#EEF2FF] text-[#5C5CFF] group-hover:bg-[#5C5CFF] group-hover:text-white'
                      }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <p className="font-['Inter',sans-serif] font-normal text-[14.5px] sm:text-[15px] leading-[25px] text-[#6B7280] max-w-[800px] pt-1">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── 17. ROLE CTA BANNER (Closing CTA) ─── */
const HRRoleCTABanner: React.FC = () => {
  return (
    <section className="w-full py-[72px] px-6 lg:px-[128px] bg-white">
      <div className="w-full max-w-[1184px] mx-auto bg-[linear-gradient(98.16deg,#8B8DFF_0%,#6366F1_50%,#818CF8_100%)] rounded-[32px] py-[72px] px-6 lg:px-[80px] flex flex-col items-center text-center relative overflow-hidden">
        {/* Soft Radial Glow Highlights */}
        <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -top-[250px] left-[50%] -translate-x-[50%] pointer-events-none" />

        <div className="w-full max-w-[848px] mx-auto flex flex-col items-center gap-[15px] relative z-10">
          {/* h2 title */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] sm:text-[42px] lg:text-[46px] leading-[46px] sm:leading-[54px] lg:leading-[58px] tracking-[-1.12px] text-white max-w-[650px] mx-auto">
            Spend Less Time Managing HR. More Time Supporting Your People.
          </h2>

          {/* Subtitle */}
          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[18px] sm:text-[22px] leading-[32px] tracking-[-0.64px] text-[#CACDFF] max-w-[650px] mx-auto">
            Bring attendance, time off, and workforce operations together in one HRMS.
          </h3>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-[12px] pt-6">
            <a
              href="#contact"
              className="bg-white text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[24px] py-[14px] rounded-full hover:bg-slate-50 transition-all hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#demo"
              className="border border-white/30 text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[24px] py-[12px] rounded-full hover:bg-white/10 transition-all"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Main Page Component ─── */
export const HRSolutionsPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      <HRSolutionsHero />
      <HRProblemValue />
      <HRCapabilitiesGrid />
      <HRKnowledgeSections />
      <HRTasksCommunication />
      <HRConnectedWorkflows />
      <HRInteractiveShowcase />
      <HREmployeeSelfServiceDark />
      <HRAIAssistant />
      <HRReportsAnalytics />
      <HRIntegrationsSection />
      <HRRelatedSolutions />
      <HRFAQSection />
      <HRRoleCTABanner />
    </div>
  );
};

export default HRSolutionsPage;
