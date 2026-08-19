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
  Stethoscope,
  HeartPulse,
  Building2,
  Bell,
  CheckSquare,
  Sparkles,
} from 'lucide-react';

import { HealthcareHeroChart } from './HealthcareHeroChart';

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
const HealthcareHero: React.FC = () => (
  <div className="w-full bg-white pt-[68px]">
    {/* div.container — Breadcrumbs */}
    <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-0 h-[45px] py-[14px] flex items-center gap-[8px]">
      <div className="flex items-center gap-[8px] font-['Inter',sans-serif] text-[13px] leading-[16px] text-[#6B7280]">
        <a href="#solutions" className="hover:text-[#111827] transition-colors">Solutions</a>
        <span>/</span>
        <span className="text-[#6B7280]">By Industry</span>
        <span>/</span>
        <span className="font-semibold text-[#111827]">Health & Life Sciences</span>
      </div>
    </div>

    {/* HERO — Main Content */}
    <section id="hero" className="w-full max-w-[1216px] mx-auto px-6 lg:px-0 pt-[80px] pb-[56px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[60px]">
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-start w-full lg:w-[578px] pt-[3px] gap-[16.8px] shrink-0">
          {/* div.eyebrow */}
          <div className="flex items-center w-full h-[16px]">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] leading-[16px] tracking-[0.65px] uppercase text-[#5C5CFF]">
              WORKZI — SOLUTIONS FOR HEALTH & LIFE SCIENCES
            </span>
          </div>

          {/* h1 */}
          <div className="w-full lg:w-[578px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.15] sm:leading-[52px] lg:leading-[54px] tracking-[-1.04px] text-[#111827]">
              Shift and Attendance Management for Healthcare Teams That Never Stop
            </h1>
          </div>

          {/* p.lead */}
          <div className="w-full lg:w-[480px] max-w-[480px] pt-[2.385px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280] max-w-[450px]">
              Hospitals and care facilities run on round-the-clock shift coverage across multiple locations. Workzi tracks attendance, Time-off, and shifts the way healthcare teams actually operate.
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
          <HealthcareHeroChart />
        </div>
      </div>
    </section>

    {/* TRUST STRIP (Hero Tag Pills) */}
    <div className="w-full bg-[#F8FAFC] py-[24px] sm:py-[32px] px-4 sm:px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 sm:gap-[20px]">
        {[
          '24/7 shift coverage',
          'Multi-facility attendance',
          'Full-time & contract staff',
          'Real-time visibility',
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
const HealthcareProblemValue: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      {/* div.section-head */}
      <div className="flex flex-col items-center text-center gap-[13.2px] max-w-[950px] w-full">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.25] tracking-[-0.84px] text-[#111827] text-center max-w-[950px] w-full">
          Less Admin Work. More Time for Patient Care.
        </h2>

        <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#6B7280] text-center max-w-[650px]">
          Coordinating shift coverage across departments and facilities, tracking attendance for a mix of staff types, and manually approving time-off requests all pull time away from care. Workzi brings it into one system.
        </p>
      </div>

      {/* div.benefit-grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] w-full max-w-[1216px]">
        {/* Card 1 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              One system, every facility
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Attendance and shifts tracked consistently across all care facilities.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Facility Sync
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                100% Unified
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Cross-Facility Rostering
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Automated
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Data Fragmentation
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Zero
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
              Decisions made with real coverage visibility, not guesswork.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Coverage Context
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Real-time
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Approval Speed
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Instant
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Uncovered Shifts
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Zero
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Less time on manual scheduling
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Shift rosters that don't rely on brittle spreadsheets.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Schedule Automation
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Active
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Manual Roster Hours
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                -90% Saved
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Spreadsheet Bottlenecks
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Eliminated
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 3. CATEGORY GRID SECTION (DESIGNER FULL MAP) ─── */
const HealthcareCategoryGrid: React.FC = () => {
  const categories = [
    { title: 'Attendance Management', href: '#attendance-management' },
    { title: 'Shift Management', href: '#shift-management' },
    { title: 'Time-off Management', href: '#Time-off-management' },
    { title: 'Employee Directory', href: '#employee-directory' },
    { title: 'Approval Workflows', href: '#approval-workflows' },
    { title: 'Department Management', href: '#department-management' },
    { title: 'Task Management', href: '#task-management' },
    { title: 'Announcements', href: '#announcements' },
    { title: 'Calendar', href: '#calendar' },
    { title: 'Reports & Analytics', href: '#reports-analytics' },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-[80px] px-6 lg:px-[32px]">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-[40px] text-center">
        <div className="flex flex-col items-center gap-3 max-w-[750px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] leading-[1.2] text-[#111827]">
            Everything Your Workforce Team Needs for Round-the-Clock Coverage
          </h2>
          <p className="font-['Inter',sans-serif] text-[16px] text-[#6B7280]">
            A single map of what Workzi covers — click into any area to explore.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 w-full max-w-[1050px]">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              href={cat.href}
              className="bg-white border border-[#E5E7EB] hover:border-[#5C5CFF] rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all hover:shadow-md hover:-translate-y-1 cursor-pointer group"
            >
              <span className="font-bold text-[14px] text-[#111827] group-hover:text-[#5C5CFF] transition-colors">
                {cat.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 4. WORKFORCE VISIBILITY (DARK MODE) ─── */
const HealthcareWorkforceVisibilityDark: React.FC = () => (
  <section className="w-full bg-[#0B0F17] py-[80px] px-6 lg:px-[32px] text-white">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
      <div className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <span className="inline-flex items-center px-[14px] py-[5px] bg-white/10 text-[#A5B4FC] font-['Inter',sans-serif] font-semibold text-[12px] rounded-full">
          WORKFORCE VISIBILITY
        </span>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[1.2] tracking-[-0.84px] text-white">
          Know Who's On Shift, Across Every Facility, in Real Time
        </h2>

        <p className="font-['Inter',sans-serif] text-[16px] leading-[26px] text-slate-300">
          See attendance and shift coverage across departments and locations — so a coverage gap gets caught before it becomes a patient care issue.
        </p>

        <ul className="flex flex-col gap-3 pt-2">
          {[
            "Real-time attendance status by department, shift, or facility",
            "Spot coverage gaps and exceptions before they escalate",
            "Resolve issues directly from the dashboard",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-[15px] text-slate-200">
              <span className="w-5 h-5 rounded-full bg-[#5C5CFF]/20 text-[#818CF8] flex items-center justify-center font-bold text-xs">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-bold text-[15px] px-6 py-3 rounded-xl transition-all"
          >
            <span>Explore Attendance Management</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Dark Dashboard Preview Box */}
      <div className="w-full lg:w-[578px] bg-slate-900 border border-slate-800 rounded-[24px] p-6 shadow-2xl flex flex-col gap-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-xs uppercase tracking-wider text-slate-300">Multi-Facility Clinical Console</span>
          </div>
          <span className="text-xs text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">24/7 Live</span>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-800/60 rounded-xl p-3.5 border border-slate-700/50">
            <div className="text-xs text-slate-400">Clinical Attendance</div>
            <div className="text-2xl font-black text-white pt-1">248 / 252</div>
            <div className="text-[10px] text-emerald-400 pt-0.5">98.4% Logged In</div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-3.5 border border-slate-700/50">
            <div className="text-xs text-slate-400">Critical Coverage</div>
            <div className="text-2xl font-black text-white pt-1">100% Filled</div>
            <div className="text-[10px] text-indigo-400 pt-0.5">ICU & ER Rotations</div>
          </div>
        </div>

        <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-700/40 flex flex-col gap-2.5">
          <div className="text-xs font-bold text-slate-300">Real-time Coverage Monitor</div>
          <div className="flex items-center justify-between text-xs bg-emerald-950/40 border border-emerald-800/40 p-2.5 rounded-lg text-emerald-200">
            <span>St. Jude ER Shift — All 120 positions verified</span>
            <span className="bg-emerald-800/60 text-emerald-100 px-2 py-0.5 rounded text-[10px] font-bold">100% Covered ✓</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 5. SHIFT MANAGEMENT SECTION ─── */
const HealthcareShiftManagement: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
      <div className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <span className="inline-flex items-center px-[14px] py-[5px] bg-[#EEF2FF] text-[#5C5CFF] font-['Inter',sans-serif] font-semibold text-[12px] rounded-full">
          SHIFT & COVERAGE
        </span>
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] leading-[1.25] text-[#111827]">
          Shift Scheduling Built for 24/7 Coverage
        </h2>
        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#6B7280]">
          Configure shifts across departments and facilities, so managers always know who's covering what, without a manual roster.
        </p>
        <ul className="flex flex-col gap-3">
          {[
            "Configure shifts per department or facility",
            "See coverage at a glance, not by checking multiple spreadsheets",
            "Reduce scheduling conflicts before they happen",
          ].map((text, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center font-bold text-xs">
                ✓
              </span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] text-[#111827]">{text}</span>
            </li>
          ))}
        </ul>
        <a
          href="#shift-management"
          className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#333333] text-white font-semibold text-[14px] px-6 py-3 rounded-full transition-all hover:scale-105"
        >
          <span>Explore Shift Management</span>
          <span>→</span>
        </a>
      </div>

      {/* Visual Box */}
      <div className="w-full max-w-[611px] h-[380px] rounded-[20px] bg-gradient-to-br from-[#F8FAFC] to-[#EEF2FF] border border-[#E5E7EB] p-6 flex items-center justify-center">
        <div className="w-full bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col gap-3 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <span className="font-bold text-[13px] text-[#111827]">24/7 Clinical Roster</span>
            <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] px-2.5 py-0.5 rounded-full">Automated</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-xl border border-gray-200/60">
            <span className="font-semibold text-[13px]">ICU Day Shift</span>
            <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2.5 py-1 rounded-full">100% Filled</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-xl border border-gray-200/60">
            <span className="font-semibold text-[13px]">ER Night Rotation</span>
            <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2.5 py-1 rounded-full">100% Filled</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 6. TIME OFF MANAGEMENT SECTION ─── */
const HealthcareTimeOffManagement: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-[50px]">
      <div className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <span className="inline-flex items-center px-[14px] py-[5px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] rounded-full">
          Time-off MANAGEMENT
        </span>
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] leading-[1.25] text-[#111827]">
          Time-off Requests That Account for Real Coverage Needs
        </h2>
        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#6B7280]">
          Apply for Time-off, track balances, and approve requests with visibility into who else is covering a shift or department.
        </p>
        <ul className="flex flex-col gap-3">
          {[
            "Employees apply for Time-off and track balance from the app",
            "Managers approve with coverage context visible",
            "Time-off policies stay standardized across departments and facilities",
          ].map((text, idx) => (
            <li key={idx} className="flex items-center gap-3">
              <span className="w-5 h-5 rounded-full bg-[#10B981]/10 text-[#10B981] flex items-center justify-center font-bold text-xs">
                ✓
              </span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] text-[#111827]">{text}</span>
            </li>
          ))}
        </ul>
        <a
          href="#Time-off-management"
          className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#333333] text-white font-semibold text-[14px] px-6 py-3 rounded-full transition-all hover:scale-105"
        >
          <span>Explore Time-off Management</span>
          <span>→</span>
        </a>
      </div>

      {/* Visual Box */}
      <div className="w-full max-w-[611px] h-[380px] rounded-[20px] bg-gradient-to-br from-[#F8FAFC] to-[#ECFDF5] border border-[#E5E7EB] p-6 flex items-center justify-center">
        <div className="w-full bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col gap-3 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <span className="font-bold text-[13px] text-[#111827]">Coverage-Aware Time-off Stream</span>
            <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] px-2.5 py-0.5 rounded-full">Verified</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-xl border border-gray-200/60">
            <span className="font-semibold text-[13px]">Sarah J. (ER Lead)</span>
            <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2.5 py-1 rounded-full">Approved (Covered)</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-xl border border-gray-200/60">
            <span className="font-semibold text-[13px]">David R. (ICU Tech)</span>
            <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2.5 py-1 rounded-full">Approved (Covered)</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 7. EMPLOYEE DIRECTORY SECTION ─── */
const HealthcareEmployeeDirectory: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
      <div className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <span className="inline-flex items-center px-[14px] py-[5px] bg-[#EEF2FF] text-[#5C5CFF] font-['Inter',sans-serif] font-semibold text-[12px] rounded-full">
          DEPARTMENT MANAGEMENT
        </span>
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] leading-[1.25] text-[#111827]">
          One Directory for Full-Time, Part-Time, and Contract Staff
        </h2>
        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#6B7280]">
          Manage full-time staff, part-time employees, and contract or travel staff in one employee directory, with attendance tracking that fits each.
        </p>
        <a
          href="#employee-directory"
          className="inline-flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#333333] text-white font-semibold text-[14px] px-6 py-3 rounded-full transition-all hover:scale-105"
        >
          <span>Explore Employee Directory</span>
          <span>→</span>
        </a>
      </div>

      {/* Visual Box */}
      <div className="w-full max-w-[611px] h-[350px] rounded-[20px] bg-gradient-to-br from-[#F8FAFC] to-[#EEF2FF] border border-[#E5E7EB] p-6 flex items-center justify-center">
        <div className="w-full bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col gap-3 shadow-sm">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <span className="font-bold text-[13px] text-[#111827]">Healthcare Staff Roster</span>
            <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] px-2.5 py-0.5 rounded-full">Unified</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-xl border border-gray-200/60">
            <div>
              <div className="font-semibold text-[13px]">Sarah Jenkins</div>
              <div className="text-[11px] text-[#6B7280]">ER Nurse Lead</div>
            </div>
            <span className="bg-emerald-50 text-emerald-700 font-bold text-[11px] px-2.5 py-1 rounded-full">Full-Time</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-[#F8FAFC] rounded-xl border border-gray-200/60">
            <div>
              <div className="font-semibold text-[13px]">Marcus Vance</div>
              <div className="text-[11px] text-[#6B7280]">Travel Nurse</div>
            </div>
            <span className="bg-indigo-50 text-indigo-700 font-bold text-[11px] px-2.5 py-1 rounded-full">Contract</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 8. ONE CONNECTED SYSTEM (FLOW LINE) ─── */
const HealthcareConnectedSystemFlow: React.FC = () => {
  const steps = [
    'Staff member requests Time-off',
    'Manager reviews shift coverage',
    'Manager approves',
    'Time-off balance updates',
    'Shift roster updates',
    'HR sees it in real time',
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-[80px] px-6 lg:px-[32px]">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-[40px] text-center">
        <div className="flex flex-col items-center gap-3 max-w-[700px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[1.2] text-[#111827]">
            One Update. Connected Everywhere.
          </h2>
          <p className="font-['Inter',sans-serif] text-[16px] text-[#6B7280]">
            Nothing in Workzi lives in isolation — one action updates everything downstream.
          </p>
        </div>

        <div className="w-full max-w-[1100px] grid grid-cols-2 md:grid-cols-6 gap-3">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-white border border-[#E5E7EB] rounded-2xl p-4 flex flex-col items-center justify-center text-center gap-2 relative">
              <span className="w-6 h-6 rounded-full bg-[#5C5CFF] text-white font-bold text-[11px] flex items-center justify-center shrink-0">
                {idx + 1}
              </span>
              <span className="font-['Inter',sans-serif] font-medium text-[12.5px] leading-[16px] text-[#111827]">
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 9. EVERYDAY WORKFORCE WORKFLOWS ─── */
const HealthcareEverydayWorkflows: React.FC = () => {
  const workflows = [
    { title: 'Attendance exceptions', desc: 'Late arrivals and missed check-ins get flagged automatically, with manager review in one screen.' },
    { title: 'Time-off approvals', desc: 'Requests route to the right department manager, with coverage visible.' },
    { title: 'Shift assignments', desc: 'Configure and reassign shifts without spreadsheets.' },
    { title: 'Attendance regularization', desc: 'Correct a missed check-in or check-out in a couple of taps.' },
    { title: 'Onboarding for new & contract staff', desc: 'Assign onboarding tasks and track completion, useful for frequent contract or travel staff turnover.' },
  ];

  return (
    <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
      <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-[40px]">
        <div className="flex flex-col items-center text-center gap-3 max-w-[700px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[1.2] text-[#111827]">
            Handle Everyday Workforce Operations Without the Back-and-Forth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-[1200px]">
          {workflows.map((wf, idx) => (
            <div key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-5 flex flex-col gap-3">
              <h3 className="font-bold text-[16px] text-[#111827] mb-1.5">{wf.title}</h3>
              <p className="font-['Inter',sans-serif] text-[13px] text-[#6B7280] leading-[19px]">{wf.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 10. EMPLOYEE SELF-SERVICE SECTION ─── */
const HealthcareEmployeeSelfService: React.FC = () => (
  <section className="w-full bg-[#F8FAFC] py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
      <div className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <span className="inline-flex items-center px-[14px] py-[5px] bg-[#EEF2FF] text-[#5C5CFF] font-['Inter',sans-serif] font-semibold text-[12px] rounded-full">
          EMPLOYEE SELF-SERVICE
        </span>
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[1.2] text-[#111827]">
          Give Staff Answers and Actions Without Adding to the Front Desk's Workload
        </h2>
        <p className="font-['Inter',sans-serif] text-[16px] text-[#6B7280]">
          Employees manage everyday needs — checking their schedule, requesting Time-off, viewing announcements — directly from the app.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {['View shifts', 'Request Time-off', 'Check announcements', 'Request correction', 'Upcoming holidays'].map((tag, idx) => (
            <span key={idx} className="bg-white border border-[#E5E7EB] text-[#111827] font-semibold text-[13px] px-3.5 py-1.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* App Mockup Preview */}
      <div className="w-full max-w-[400px] bg-white rounded-[28px] border-4 border-slate-800 p-4 shadow-xl flex flex-col gap-4">
        <div className="flex items-center justify-between border-b pb-3">
          <span className="font-bold text-[14px]">Workzi Healthcare App</span>
          <span className="text-[11px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Logged In</span>
        </div>
        <div className="flex justify-around bg-slate-100 p-2 rounded-xl text-[12px] font-bold text-[#6B7280]">
          <span className="text-[#5C5CFF]">Home</span>
          <span>Attendance</span>
          <span>Time-off</span>
          <span>Profile</span>
        </div>
        <div className="bg-[#F8FAFC] p-3 rounded-xl border border-gray-200 text-[12.5px] flex flex-col gap-1.5">
          <span className="font-bold text-[#111827]">Next Shift: ER Night Rotation</span>
          <span className="text-[#6B7280]">Today • 07:00 PM - 07:00 AM</span>
          <span className="text-[#10B981] font-bold text-[11px]">Checked In (06:55 PM) ✓</span>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 11. REPORTS SECTION ─── */
const HealthcareReportsSection: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-[40px] text-center">
      <div className="flex flex-col items-center gap-3 max-w-[700px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[1.2] text-[#111827]">
          Attendance and Coverage Reports Without a Separate Tool
        </h2>
        <p className="font-['Inter',sans-serif] text-[16px] text-[#6B7280]">
          Filter and export reports across attendance, Time-off, shifts, and departments.
        </p>
      </div>

      <div className="w-full max-w-[1240px] flex flex-wrap items-center justify-center gap-2 sm:gap-3 py-1">
        {['Date Range', 'Department', 'Facility', 'Employee', 'Shift', 'Status'].map((filter, idx) => (
          <span key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827] font-bold text-[12.5px] sm:text-[13.5px] px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl whitespace-nowrap shrink-0 shadow-sm">
            Filter by: {filter}
          </span>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 12. INTEGRATIONS SECTION ─── */
const HealthcareIntegrations: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-[40px] text-center">
      <div className="flex flex-col items-center gap-3 max-w-[700px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[1.2] text-[#111827]">
          Fits Alongside the Systems Your Facility Already Uses
        </h2>
        <p className="font-['Inter',sans-serif] text-[16px] text-[#6B7280]">
          Workzi manages workforce operations — attendance, shifts, Time-off — while your team keeps using its existing clinical and administrative systems.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-[800px]">
        {[
          { name: 'Communication', desc: 'Slack & Teams' },
          { name: 'Calendar', desc: 'Google & Outlook' },
          { name: 'Identity', desc: 'Email & SSO' },
          { name: 'Productivity', desc: 'Web & Mobile' },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-5 flex flex-col items-center justify-center gap-1.5">
            <span className="font-bold text-[15px] text-[#111827]">{item.name}</span>
            <span className="text-[12.5px] text-[#6B7280]">{item.desc}</span>
          </div>
        ))}
      </div>

      <a
        href="#pricing"
        className="inline-flex items-center gap-2 text-[#5C5CFF] font-bold text-[15px] hover:underline"
      >
        <span>Explore Integrations</span>
        <span>→</span>
      </a>
    </div>
  </section>
);

/* ─── 13. CROSS-SELL SECTION ─── */
const HealthcareCrossSell: React.FC = () => (
  <section className="w-full bg-[#F8FAFC] py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-[40px] text-center">
      <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] text-[#111827]">
        Explore More Ways to Manage Your Workforce
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[900px] text-left">
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col justify-between gap-4">
          <div>
            <span className="bg-indigo-100 text-indigo-800 font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider">FOR MANAGERS</span>
            <h3 className="font-bold text-[20px] text-[#111827] pt-2">Manager Solutions</h3>
            <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] pt-1">
              Track attendance, Time-off, tasks, and approvals for your department from one workspace.
            </p>
          </div>
          <a href="#hr-manager" className="text-[#5C5CFF] font-bold text-[14px] hover:underline">Explore Manager Solutions →</a>
        </div>

        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col justify-between gap-4">
          <div>
            <span className="bg-purple-100 text-purple-800 font-bold text-[11px] px-2.5 py-1 rounded-full uppercase tracking-wider">FOR IT & ADMINS</span>
            <h3 className="font-bold text-[20px] text-[#111827] pt-2">IT & Security</h3>
            <p className="font-['Inter',sans-serif] text-[14px] text-[#6B7280] pt-1">
              Manage workforce access, accounts, and permissions in one place.
            </p>
          </div>
          <a href="#it-solutions" className="text-[#5C5CFF] font-bold text-[14px] hover:underline">Explore IT Solutions →</a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 14. FAQ SECTION ─── */
const HealthcareFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Can Workzi manage attendance across multiple hospital or clinic locations?',
      a: 'Yes. Departments and locations can be configured to mirror your facility structure, with attendance tracked and reported per location.',
    },
    {
      q: 'Does Workzi support 24/7 shift and rotation scheduling?',
      a: 'Yes. Workzi allows managers to set up custom multi-shift rosters across 24/7 rotations for hospital and clinical departments.',
    },
    {
      q: 'Is Workzi HIPAA-compliant or configured to handle sensitive health-related Time-off data?',
      a: 'Workzi incorporates role-based permission controls and secure access parameters to help facilities maintain strict privacy standards for employee Time-off records.',
    },
    {
      q: 'Can Workzi manage attendance for contract or travel staff, not just full-time employees?',
      a: 'Yes. The employee directory supports full-time, part-time, and contract employees in one unified platform.',
    },
    {
      q: 'Can managers see shift coverage before approving Time-off?',
      a: 'Yes. Time-off requests display active department shift rosters, ensuring managers approve requests with full coverage visibility.',
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
            Everything teams ask about Workzi Healthcare software.
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
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] pt-2"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── 15. CLOSING ROLE CTA BANNER (HUMAN RESOURCES MASTER DESIGN) ─── */
const HealthcareRoleCTABanner: React.FC = () => (
  <section className="w-full py-[72px] px-6 lg:px-[128px] bg-white">
    <div className="w-full max-w-[1184px] mx-auto bg-[linear-gradient(98.16deg,#8B8DFF_0%,#6366F1_50%,#818CF8_100%)] rounded-[32px] py-[72px] px-6 lg:px-[80px] flex flex-col items-center text-center relative overflow-hidden">
      {/* Soft Radial Glow Highlights */}
      <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -top-[250px] left-[50%] -translate-x-[50%] pointer-events-none" />

      <div className="w-full max-w-[848px] mx-auto flex flex-col items-center gap-[15px] relative z-10">
        {/* h2 title */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] sm:text-[42px] lg:text-[46px] leading-[46px] sm:leading-[54px] lg:leading-[58px] tracking-[-1.12px] text-white max-w-[650px] mx-auto">
          Manage Shift Coverage and Attendance Across Every Facility
        </h2>

        {/* Subtitle */}
        <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[18px] sm:text-[22px] leading-[32px] tracking-[-0.64px] text-[#CACDFF] max-w-[650px] mx-auto">
          Built for healthcare teams running round-the-clock coverage across departments and locations.
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

/* ─── MAIN HEALTHCARE SOLUTIONS PAGE COMPONENT ─── */
export const HealthcarePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <HealthcareHero />
      <HealthcareProblemValue />
      <HealthcareCategoryGrid />
      <HealthcareWorkforceVisibilityDark />
      <HealthcareShiftManagement />
      <HealthcareTimeOffManagement />
      <HealthcareEmployeeDirectory />
      <HealthcareConnectedSystemFlow />
      <HealthcareEverydayWorkflows />
      <HealthcareEmployeeSelfService />
      <HealthcareReportsSection />
      <HealthcareIntegrations />
      <HealthcareCrossSell />
      <HealthcareFAQ />
      <HealthcareRoleCTABanner />
    </div>
  );
};

export default HealthcarePage;
