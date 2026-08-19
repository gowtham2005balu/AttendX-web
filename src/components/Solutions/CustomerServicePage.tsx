import React, { useState } from 'react';
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
  ChevronDown,
  ChevronUp,
  Headphones,
  MessageSquare,
  Sparkles,
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

/* ─── 1. HERO SECTION ─── */
const CustomerServiceHero: React.FC = () => (
  <div className="w-full bg-white pt-[68px]">
    {/* div.container — Breadcrumbs */}


    {/* HERO — Main Content */}
    <section id="hero" className="w-full max-w-[1216px] mx-auto px-6 lg:px-0 pt-[80px] pb-[56px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[60px]">
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-start w-full lg:w-[578px] pt-[3px] gap-[16.8px] shrink-0">
          {/* div.eyebrow */}
          <div className="flex items-center w-full h-[16px]">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] leading-[16px] tracking-[0.65px] uppercase text-[#5C5CFF]">
              WORKZI — SOLUTIONS FOR CUSTOMER SERVICE
            </span>
          </div>

          {/* h1 */}
          <div className="w-full lg:w-[578px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.15] sm:leading-[52px] lg:leading-[54px] tracking-[-1.04px] text-[#111827]">
              Keep Support Coverage Consistent, Shift After Shift
            </h1>
          </div>

          {/* p.lead */}
          <div className="w-full lg:w-[480px] max-w-[480px] pt-[2.385px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280] max-w-[450px]">
              Support teams run on coverage, not fixed hours. Workzi handles shift scheduling, attendance, and Time-off so queues stay covered and managers aren't chasing rosters manually.
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
    <div className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-[24px] sm:py-[32px] px-4 sm:px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 sm:gap-[20px]">
        {[
          'Shift scheduling',
          'Real-time attendance tracking',
          'Time-off without coverage gaps',
          'Manager visibility',
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-[8px] shrink-0">
            <span className="w-[6px] h-[6px] rounded-full bg-[#5C5CFF] shrink-0" />
            <span className="font-['Inter',sans-serif] font-semibold text-[13px] sm:text-[14px] leading-[17px] text-[#6B7280] whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── 2. PROBLEM -> VALUE SECTION ─── */
const CustomerServiceProblemValue: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      {/* div.section-head */}
      <div className="flex flex-col items-center text-center gap-[13.2px] max-w-[950px] w-full">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.25] tracking-[-0.84px] text-[#111827] text-center max-w-[950px] w-full">
          <span className="inline-block">A Missed Shift Isn't Just an Attendance Problem.</span>{' '}
          <span className="inline-block">It's a Service-Level Problem.</span>
        </h2>

        <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#6B7280] text-center max-w-[610px]">
          When a support agent is late, absent, or on Time-off, it isn't just an HR record — it's a gap in customer coverage. Workzi keeps shift rosters, attendance, and Time-off visible together so gaps get caught before they become a problem.
        </p>
      </div>

      {/* div.benefit-grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] w-full max-w-[1216px]">
        {/* Card 1 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Shift coverage, always visible
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Know who's on, who's late, and who's out in real time without spreadsheet hunting.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Morning Shift
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                100% Covered
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Late Check-ins
              </span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                1 Agent
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                On Time-off
              </span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                2 Agents
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Faster Time-off approvals
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Decisions made with real coverage context, not guesswork or scattered emails.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Sarah Anderson
              </span>
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Tier 1 Support
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Coverage Status
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Sufficient ✓
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Approval Time
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                &lt; 2 Mins
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Fewer manual rosters
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Shift scheduling that doesn't live in a complex spreadsheet or chat group.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Weekly Shifts
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Auto-Synced
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Spreadsheet Free
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                100% Digital
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Shift Swaps
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Manager Approved
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 3. CAPABILITIES GRID ─── */
const CustomerServiceCapabilitiesGrid: React.FC = () => {
  const capabilities = [
    { icon: '🗓', label: 'Shift Management' },
    { icon: '⏱', label: 'Time Tracking' },
    { icon: '🏖', label: 'Time-off Management' },
    { icon: '👥', label: 'Support Directory' },
    { icon: '✔️', label: 'Task & Ticket Load' },
    { icon: '🧾', label: 'Shift Approvals' },
    { icon: '📱', label: 'Agent Self-Service' },
    { icon: '📣', label: 'Queue Announcements' },
    { icon: '📅', label: 'Shift Calendar' },
    { icon: '📊', label: 'Coverage Analytics' },
    { icon: '🔄', label: 'Roster Swaps' },
    { icon: '🏢', label: 'Department Structure' },
  ];

  return (
    <section className="w-full bg-[rgba(120,90,253,0.15)] py-[80px] px-6 lg:px-[32px]">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <div className="flex flex-col items-center text-center gap-[13px] max-w-[620px] w-full">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[44px] sm:leading-[54px] lg:leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[609px]">
            Built for Teams That Run on Shifts, Not a 9-to-5
          </h2>

          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#464A53] text-center max-w-[606px]">
            Why support teams use Workzi — explore how shift scheduling, attendance, and Time-off management keep support coverage consistent.
          </p>
        </div>

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

/* ─── 4, 5, 6, 7. KNOWLEDGE & FEATURE SECTIONS (Figma CSS Specs) ─── */
const CustomerServiceKnowledgeSections: React.FC = () => {
  return (
    <div className="w-full bg-white py-[40px]">
      {/* Reason 1: Shift Scheduling */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Shift Management
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Shift Scheduling Without the Spreadsheet
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Configure shifts and rosters directly in Workzi, so managers always know who's covering which slot.
                  </p>
                </div>

                <a
                  href="#shift-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>See Shift Management</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                'Configure shifts and rosters directly in Workzi',
                'Eliminate complex spreadsheet schedules for team leads',
                'Ensure full queue coverage across every support shift',
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

          <div className="w-full max-w-[611px] h-auto min-h-[260px] sm:min-h-[380px] lg:h-[496px] rounded-[16px] overflow-hidden border border-slate-200/50 flex items-center justify-center p-3.5 sm:p-6 bg-[radial-gradient(97.38%_131.25%_at_8.51%_3.7%,#9AA0FF_0%,#C5E2FF_51.12%,#4F7EFF_100%)] relative">
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 z-10">
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5">
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] p-2 sm:p-2.5 flex flex-col items-center justify-center text-center">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[17px] leading-[21px] text-[#111827]">24</span>
                  <span className="font-['Inter',sans-serif] text-[9px] sm:text-[10px] uppercase text-[#6B7280] font-normal tracking-wider mt-0.5">SCHEDULED</span>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] p-2 sm:p-2.5 flex flex-col items-center justify-center text-center">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[17px] leading-[21px] text-[#111827]">22</span>
                  <span className="font-['Inter',sans-serif] text-[9px] sm:text-[10px] uppercase text-[#6B7280] font-normal tracking-wider mt-0.5">PRESENT</span>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] p-2 sm:p-2.5 flex flex-col items-center justify-center text-center">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[17px] leading-[21px] text-[#111827]">2</span>
                  <span className="font-['Inter',sans-serif] text-[9px] sm:text-[10px] uppercase text-[#6B7280] font-normal tracking-wider mt-0.5">ABSENT</span>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] p-2 sm:p-2.5 flex flex-col items-center justify-center text-center">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] sm:text-[17px] leading-[21px] text-[#111827]">1</span>
                  <span className="font-['Inter',sans-serif] text-[9px] sm:text-[10px] uppercase text-[#6B7280] font-normal tracking-wider mt-0.5">LATE</span>
                </div>
              </div>

              <div className="flex flex-col gap-1 pt-1">
                <div className="flex items-center justify-between gap-2 py-2 sm:py-2.5 border-b border-gray-100">
                  <span className="font-['Inter',sans-serif] font-semibold text-[12px] sm:text-[12.5px] text-[#111827] truncate">Morning Shift — 8 Agents</span>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-[10px] py-[3px] rounded-full shrink-0">On Track</span>
                </div>
                <div className="flex items-center justify-between gap-2 py-2 sm:py-2.5 border-b border-gray-100">
                  <span className="font-['Inter',sans-serif] font-semibold text-[12px] sm:text-[12.5px] text-[#111827] truncate">Afternoon Shift — 10 Agents</span>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-[10px] py-[3px] rounded-full shrink-0">On Track</span>
                </div>
                <div className="flex items-center justify-between gap-2 py-2 sm:py-2.5">
                  <span className="font-['Inter',sans-serif] font-semibold text-[12px] sm:text-[12.5px] text-[#111827] truncate">Night Shift — 4 Agents</span>
                  <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[10.5px] sm:text-[11px] px-[10px] py-[3px] rounded-full shrink-0">Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reason 2: Attendance Management */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Attendance Management
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Attendance Tied to Real Coverage
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Location-aware check-in and real-time attendance status mean managers see coverage gaps as they happen, not after a customer complaint.
                  </p>
                </div>

                <a
                  href="#attendance-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>See Attendance Management</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                'Location-aware check-in for office & remote agents',
                'Real-time status view of who is on duty',
                'Catch attendance exceptions before queues back up',
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

          <div className="w-full max-w-[611px] h-auto min-h-[260px] sm:min-h-[380px] lg:h-[496px] rounded-[16px] overflow-hidden border border-slate-200/50 flex items-center justify-center p-3.5 sm:p-6 bg-[radial-gradient(97.14%_126.61%_at_0%_-8.9%,#4F7EFF_0%,#C5E2FF_51.12%,#9AA0FF_100%)] relative">
            <div className="w-full max-w-[510px] bg-white/90 backdrop-blur-md rounded-[20px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-5 z-10">
              <div className="w-full sm:w-[210px] bg-white rounded-[16px] border border-[#E5E7EB] p-4 flex flex-col gap-2.5">
                <span className="font-['Inter',sans-serif] font-bold text-[11px] uppercase tracking-wider text-[#6B7280]">SHIFT STATUS</span>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Check-in</span>
                  <span className="font-semibold text-[#111827]">08:02 AM</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Location</span>
                  <span className="font-semibold text-[#15803D] flex items-center gap-1">Verified ✓</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Queue Role</span>
                  <span className="font-semibold text-[#5C5CFF]">Tier 1 Voice</span>
                </div>
              </div>

              <div className="w-full sm:w-[210px] bg-white rounded-[16px] border border-[#E5E7EB] p-4 flex flex-col gap-2.5">
                <span className="font-['Inter',sans-serif] font-bold text-[11px] uppercase tracking-wider text-[#6B7280]">COVERAGE GAP</span>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Late Arrival</span>
                  <span className="bg-[#FEF3E2] text-[#B45309] font-semibold text-[11px] px-2 py-0.5 rounded-full">Flagged</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Replacement</span>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-semibold text-[11px] px-2 py-0.5 rounded-full">Auto-Notified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reason 3: Time-off Management */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Time-off Management
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Time-off Approvals That Account for Coverage
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Time-off and WFH requests route to managers with visibility into who else is scheduled — so approvals don't accidentally Time-off a shift uncovered.
                  </p>
                </div>

                <a
                  href="#Time-off-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>See Time-off Management</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                'Approve Time-off with live shift roster visibility',
                'Prevent accidental coverage gaps during peak queue hours',
                'Standardize WFH and Time-off rules across support teams',
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

          <div className="w-full max-w-[611px] h-auto min-h-[260px] sm:min-h-[380px] lg:h-[496px] rounded-[16px] overflow-hidden border border-slate-200/50 flex items-center justify-center p-3.5 sm:p-6 bg-[radial-gradient(97.14%_126.61%_at_0%_-8.9%,#4F7EFF_0%,#C5E2FF_51.12%,#9AA0FF_100%)] relative">
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col gap-3.5 sm:gap-4 z-10">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">Shift Coverage Context</span>
                <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-0.5 rounded-full shrink-0">Coverage Safe</span>
              </div>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Annual Time-off (2 Days)</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Alex Johnson • Escalations</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Approved</span>
                </div>

                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Sick Time-off (1 Day)</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Marcus Vance • Tier 1 Voice</div>
                  </div>
                  <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Pending</span>
                </div>

                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">WFH Request (3 Days)</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Priya Sharma • Chat Support</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reason 4: Task Management */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Task Management
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Task and Ticket Load Visibility
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Assign and track tasks alongside attendance, so managers see workload and coverage in the same place.
                  </p>
                </div>

                <a
                  href="#task-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>See Task Management</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                'Track task load alongside shift attendance',
                'Balance workload across support agent tiers',
                'Maintain service levels across peak call volumes',
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

          <div className="w-full max-w-[611px] h-auto min-h-[380px] sm:h-[496px] rounded-[16px] overflow-hidden border border-slate-200/50 flex items-center justify-center p-3.5 sm:p-6 bg-[radial-gradient(97.38%_131.25%_at_8.51%_3.7%,#9AA0FF_0%,#C5E2FF_51.12%,#4F7EFF_100%)] relative">
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-3.5 sm:p-6 flex flex-col gap-3 sm:gap-4 z-10 shadow-xs">
              <div className="w-full flex flex-col pt-1">
                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 pb-2.5 border-b border-gray-100 font-['Inter',sans-serif] font-bold text-[9.5px] sm:text-[10px] uppercase tracking-wider text-[#6B7280] gap-1.5 sm:gap-2 items-center">
                  <span className="truncate">AGENT</span>
                  <span className="hidden sm:block truncate">QUEUE</span>
                  <span className="text-center sm:text-left truncate">STATUS</span>
                  <span className="text-right truncate">TICKETS</span>
                </div>

                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 border-b border-gray-100 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#5C5CFF] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">SA</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Sarah A.</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">Chat</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">Chat</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">Active</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">14 Open</span>
                </div>

                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 border-b border-gray-100 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#10B981] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">DM</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">David M.</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">Escalation</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">Escalation</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">Active</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">8 Open</span>
                </div>

                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F59E0B] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">ER</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Elena R.</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">Voice</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">Voice</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">On Break</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">5 Open</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── 5. MANAGER VISIBILITY (EMPLOYEE SELF SERVICE DARK) ─── */
const CustomerServiceManagerVisibilityDark: React.FC = () => (
  <section className="w-full bg-[#0B0F17] py-[80px] px-6 lg:px-[32px] text-white">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
      <div className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <span className="inline-flex items-center px-[14px] py-[5px] bg-white/10 text-[#A5B4FC] font-['Inter',sans-serif] font-semibold text-[12px] rounded-full">
          For Support Team Leads
        </span>

        <div className="flex flex-col gap-[18px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[44px] leading-[1.2] tracking-[-1.12px] text-white">
            See Coverage Gaps Before They Become Customer Complaints
          </h2>
          <p className="font-['Inter',sans-serif] font-medium text-[16px] leading-[26px] text-slate-300">
            One dashboard for who's scheduled, who's checked in, who's late, and who's on Time-off — so managers can react before a queue backs up.
          </p>
        </div>

        <a
          href="#pricing"
          className="inline-flex items-center justify-center gap-[8px] px-[26px] py-[13px] bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-['Inter',sans-serif] font-semibold text-[14px] rounded-full transition-all hover:scale-[1.02]"
        >
          <span>Explore Manager Solutions</span>
          <span>→</span>
        </a>

        <ul className="flex flex-col gap-[14px] pt-[13px]">
          {[
            'Real-time view of shift attendance and exceptions',
            'Approve Time-off and shift changes without leaving the dashboard',
            'Spot patterns — repeated lateness, frequent swaps — early',
          ].map((text, idx) => (
            <li key={idx} className="flex items-center gap-[12px]">
              <span className="w-[22px] h-[22px] rounded-[6px] bg-[#5C5CFF]/20 text-[#A5B4FC] flex items-center justify-center text-[12px] font-bold shrink-0">
                ✓
              </span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] text-slate-200">
                {text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full max-w-[580px] bg-slate-900 border border-slate-800 rounded-[24px] p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] text-white">Support Roster & Queue Live Feed</span>
          <span className="bg-emerald-500/20 text-emerald-400 font-bold text-[11px] px-2.5 py-0.5 rounded-full">Active Sync</span>
        </div>

        <div className="flex flex-col gap-3 pt-4">
          <div className="bg-slate-800/60 p-4 rounded-[14px] flex items-center justify-between border border-slate-700/50">
            <div>
              <div className="font-bold text-[14px] text-white">Tier 1 Support Queue</div>
              <div className="text-[12px] text-slate-400">12 Agents Scheduled • 12 Active</div>
            </div>
            <span className="bg-emerald-500/20 text-emerald-400 font-bold text-[11px] px-2.5 py-1 rounded-full">100% Covered</span>
          </div>

          <div className="bg-slate-800/60 p-4 rounded-[14px] flex items-center justify-between border border-slate-700/50">
            <div>
              <div className="font-bold text-[14px] text-white">VIP Escalations Queue</div>
              <div className="text-[12px] text-slate-400">6 Agents Scheduled • 5 Active (1 Late)</div>
            </div>
            <span className="bg-amber-500/20 text-amber-400 font-bold text-[11px] px-2.5 py-1 rounded-full">Attention</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 6. INTEGRATIONS SECTION ─── */
const CustomerServiceIntegrationsSection: React.FC = () => {
  const categories = [
    { title: 'Communication', desc: 'Slack, Teams, Email alerts', icon: '💬' },
    { title: 'Calendar', desc: 'Google Calendar, Outlook sync', icon: '📅' },
    { title: 'Identity', desc: 'Okta, Google Workspace SSO', icon: '🔒' },
    { title: 'Productivity', desc: 'Workflows & CSV exports', icon: '⚡' },
  ];

  return (
    <section className="w-full bg-[#F9FAFB] py-[80px] px-6 lg:px-[32px] border-t border-[#E5E7EB]">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-[40px] text-center">
        <div className="flex flex-col items-center gap-3 max-w-[680px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[44px] leading-[1.2] text-[#111827]">
            Fits Alongside the Tools Your Support Team Already Uses
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-[#6B7280]">
            Workzi handles the workforce side — shifts, attendance, Time-off — while your team keeps using its existing ticketing and communication tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1100px]">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] rounded-[18px] p-6 flex flex-col items-center text-center gap-3 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-[32px] mb-1">{cat.icon}</span>
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#111827]">
                {cat.title}
              </h3>
              <p className="font-['Inter',sans-serif] text-[13.5px] text-[#6B7280]">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>

        <a
          href="#pricing"
          className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] px-[26px] py-[13px] rounded-full transition-all hover:scale-[1.02]"
        >
          <span>Explore Integrations</span>
          <span>→</span>
        </a>
      </div>
    </section>
  );
};

/* ─── 7. FAQ ACCORDION SECTION ─── */
const CustomerServiceFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Can Workzi manage rotating shifts for support teams?',
      a: 'Yes. Workzi supports shift configuration and roster tracking for support teams, allowing managers to assign and monitor shift slots seamlessly.',
    },
    {
      q: 'Does Workzi show real-time attendance for shift-based teams?',
      a: 'Yes. Managers get a live view of attendance status, so coverage gaps are visible as they happen.',
    },
    {
      q: 'Can managers see shift coverage before approving Time-off?',
      a: 'Yes. Managers get visibility into scheduled shift coverage alongside pending Time-off and WFH requests to prevent uncovered shifts.',
    },
    {
      q: 'Does Workzi support attendance tracking for remote or work-from-home support agents?',
      a: 'Yes. Location-aware check-in works for office, hybrid, and remote employees.',
    },
    {
      q: 'Is Workzi a replacement for our ticketing or helpdesk software?',
      a: 'No. Workzi manages the workforce side — attendance, Time-off, shifts — not customer tickets. It\'s meant to work alongside your existing support tools, not replace them.',
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
      <div className="w-full max-w-[850px] mx-auto flex flex-col items-center gap-[48px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[36px] sm:text-[44px] leading-[52px] text-[#111827]">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[17px] leading-[26px] text-[#6B7280]">
            Everything teams ask about Workzi Customer Service software.
          </p>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col divide-y divide-[#E5E7EB]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-[24px] flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16.5px] leading-[22px] text-[#111827] group-hover:text-[#5C5CFF] transition-colors">
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
                  <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[25px] text-[#464A53] pt-2 max-w-[800px]">
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

/* ─── 8. CLOSING ROLE CTA BANNER ─── */
const CustomerServiceRoleCTABanner: React.FC = () => {
  return (
    <section className="w-full py-[72px] px-6 lg:px-[128px] bg-white">
      <div className="w-full max-w-[1184px] mx-auto bg-[linear-gradient(98.16deg,#8B8DFF_0%,#6366F1_50%,#818CF8_100%)] rounded-[32px] py-[72px] px-6 lg:px-[80px] flex flex-col items-center text-center relative overflow-hidden">
        {/* Soft Radial Glow Highlights */}
        <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -top-[250px] left-[50%] -translate-x-[50%] pointer-events-none" />

        <div className="w-full max-w-[848px] mx-auto flex flex-col items-center gap-[15px] relative z-10">
          {/* h2 title */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] sm:text-[42px] lg:text-[46px] leading-[46px] sm:leading-[54px] lg:leading-[58px] tracking-[-1.12px] text-white max-w-[650px] mx-auto">
            Keep Every Shift Covered. Keep Every Approval Simple.
          </h2>

          {/* Subtitle */}
          <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[18px] sm:text-[22px] leading-[32px] tracking-[-0.64px] text-[#CACDFF] max-w-[650px] mx-auto">
            Shift scheduling, attendance, and Time-off management built for teams that run on coverage, not a fixed clock.
          </h3>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-[12px] pt-6">
            <a
              href="#pricing"
              className="bg-white text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[24px] py-[14px] rounded-full hover:bg-slate-50 transition-all hover:scale-105"
            >
              Get Started
            </a>
            <a
              href="#pricing"
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

/* ─── MAIN COMPONENT EXPORT ─── */
export const CustomerServicePage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white font-['Inter',sans-serif] text-[#111827]">
      <CustomerServiceHero />
      <CustomerServiceProblemValue />
      <CustomerServiceCapabilitiesGrid />
      <CustomerServiceKnowledgeSections />
      <CustomerServiceManagerVisibilityDark />
      <CustomerServiceIntegrationsSection />
      <CustomerServiceFAQSection />
      <CustomerServiceRoleCTABanner />
    </div>
  );
};

export default CustomerServicePage;
