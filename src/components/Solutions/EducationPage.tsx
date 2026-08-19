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
  GraduationCap,
  Bell,
  School,
  Building2,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Plus,
  X,
} from 'lucide-react';

import { EducationHeroChart } from './EducationHeroChart';

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
const EducationHero: React.FC = () => (
  <div className="w-full bg-white pt-[68px]">
    {/* ── BREADCRUMB BAR ── */}
    <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-0 h-[45px] py-[14px] flex items-center gap-[8px]">
      <div className="flex items-center gap-[8px] font-['Inter',sans-serif] text-[13px] leading-[16px] text-[#6B7280]">
        <a href="#solutions" className="hover:text-[#111827] transition-colors">Solutions</a>
        <span>/</span>
        <span className="text-[#6B7280]">By Industry</span>
        <span>/</span>
        <span className="font-semibold text-[#111827]">Education</span>
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
              Faculty and Student Attendance Management Software for Schools and Colleges
            </h1>
          </div>

          {/* p.lead */}
          <div className="w-full lg:w-[480px] max-w-[480px] pt-[2.385px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280] max-w-[450px]">
              Faculty attendance, department-level dashboards, and parent visibility — Workzi brings attendance management for educational institutions into one connected platform.
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
              href="#contact-support"
              className="bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] w-[151px] h-[49px] rounded-[12px] transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Right Column: div.hero-visual */}
        <div className="w-full lg:w-[578px] flex items-center justify-center">
          <EducationHeroChart />
        </div>
      </div>
    </section>

    {/* TRUST STRIP (Hero Tag Pills) */}
    <div className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-[24px] sm:py-[32px] px-4 sm:px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 sm:gap-[20px]">
        {[
          'Faculty attendance',
          'Department dashboards',
          'Parent notifications',
          'ERP integration',
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
const EducationProblemValue: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      {/* div.section-head */}
      <div className="flex flex-col items-center text-center gap-[13.2px] max-w-[950px] w-full">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.25] tracking-[-0.84px] text-[#111827] text-center max-w-[950px] w-full">
          Faculty Attendance Software That Replaces Paper Registers and Spreadsheets
        </h2>

        <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#6B7280] text-center max-w-[660px]">
          Educational institutions manage faculty attendance, department-level reporting, and parent communication separately more often than not. Workzi brings all of it into one system built around how schools and colleges actually operate.
        </p>
      </div>

      {/* 3-card strip with embedded preview widgets */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] w-full max-w-[1216px]">
        {/* Card 1 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full hover:shadow-md transition-all">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Faculty attendance, reviewed and approved
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Faculty attendance, reviewed and approved — not tracked on paper or spreadsheets.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Lecture Verification
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                App Approved
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Paper Registers
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Replaced ✓
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Self-Correction
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Enabled
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full hover:shadow-md transition-all">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Department-isolated dashboards
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Each department sees its own data — HOD-level dashboards, not one flat view for the whole institution.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                HOD Workspace
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Isolated
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Cross-Dept Access
              </span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Restricted
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Faculty Roster
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Real-Time
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full hover:shadow-md transition-all">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Automated parent alerts
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Parents stay informed automatically — no manual phone calls or manual updates required.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Guardian Alerts
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Automated
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Absence Sync
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Instant SMS
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Admin Follow-Up
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Zero Friction
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 3. CAPABILITIES GRID SECTION ─── */
const EducationCapabilitiesGrid: React.FC = () => {
  const capabilities = [
    { icon: '🎓', label: 'Attendance Management' },
    { icon: '🏛️', label: 'Department Management' },
    { icon: '🏖', label: 'Time-off Management' },
    { icon: '👥', label: 'Employee Directory' },
    { icon: '🧾', label: 'Approval Workflows' },
    { icon: '✔️', label: 'Task Management' },
    { icon: '📣', label: 'Announcements' },
    { icon: '📅', label: 'Calendar' },
    { icon: '📊', label: 'Reports & Analytics' },
  ];

  return (
    <section className="w-full bg-[rgba(120,90,253,0.15)] py-[80px] px-6 lg:px-[32px]">
      <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <div className="flex flex-col items-center text-center gap-[13px] max-w-[640px] w-full">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[44px] sm:leading-[54px] lg:leading-[62px] tracking-[-1px] text-[#111827] text-center">
            Everything Your Institution Needs for Faculty & Department Attendance
          </h2>

          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#464A53] text-center max-w-[606px]">
            A single map of what Workzi covers — click into any area to explore.
          </p>
        </div>

        <div className="w-full max-w-[1216px] bg-[#E5E7EB] border border-[#E5E7EB] rounded-[24px] overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px]">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white hover:bg-slate-50/80 transition-colors py-[26px] px-[22px] flex items-center justify-between h-[86px] cursor-pointer group"
            >
              <div className="flex items-center gap-[12px]">
                <span className="w-[34px] h-[34px] bg-[#F8FAFC] rounded-[9px] flex items-center justify-center text-[15px] shrink-0 group-hover:scale-105 transition-transform">
                  {item.icon}
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[14.5px] leading-[18px] text-[#111827]">
                  {item.label}
                </span>
              </div>
              <ArrowRight size={16} className="text-[#6B7280] group-hover:text-[#5C5CFF] group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ─── 4, 5, 6, 7. FEATURE SECTIONS (Figma CSS Specs) ─── */
const EducationFeatureSections: React.FC = () => {
  return (
    <div className="w-full bg-white py-[40px]">
      {/* 4. Faculty Attendance */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Attendance Management
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Faculty Attendance Software Faculty Can Review Themselves
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Faculty can review, approve, and correct attendance for their own classes or department, without routing it through a central office.
                  </p>
                </div>

                <a
                  href="#attendance-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>Explore Attendance Management</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                'Review and approve attendance directly from the app',
                'Correct attendance without a manual central process',
                'Real-time attendance status by class or department',
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
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 z-10 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-bold text-slate-800 text-[14px] sm:text-[15px]">Faculty Lecture Self-Review</span>
                <span className="text-[10.5px] sm:text-xs font-semibold bg-emerald-100 text-emerald-700 px-2.5 py-0.5 rounded-full shrink-0">App Verified</span>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900 text-xs truncate">Computer Architecture 301</p>
                    <p className="text-[10px] text-slate-500 truncate">Prof. Sharma &bull; 48/50 Students</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded shrink-0">Approved</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-900 text-xs truncate">Data Structures Lab</p>
                    <p className="text-[10px] text-slate-500 truncate">Dr. Ananya &bull; 32/32 Students</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded shrink-0">Approved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Department Management */}
      <section className="w-full py-[60px] px-6 lg:px-[100px] bg-[#F8FAFC]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Department Management
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    HOD Dashboard Software for Every Department
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Each department gets its own view of faculty and program-level data, isolated from other departments — not one shared dashboard for the whole institution.
                  </p>
                </div>

                <a
                  href="#organization-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>Explore Department Management</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                'Department-level attendance and faculty data',
                'Isolated views so departments don\'t see each other\'s records',
                'Structure that mirrors your institution\'s actual departments',
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
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col gap-3.5 sm:gap-4 z-10 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-bold text-slate-800 text-[14px] sm:text-[15px]">HOD Department Workspace</span>
                <span className="text-[10.5px] sm:text-xs font-semibold bg-[#EEEEFF] text-[#5C5CFF] px-2.5 py-0.5 rounded-full shrink-0">Isolated Data</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                <div className="bg-[#F8FAFC] p-2.5 sm:p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase">Department</span>
                  <p className="font-bold text-slate-900 text-xs sm:text-sm pt-0.5 truncate">Engineering</p>
                </div>
                <div className="bg-[#F8FAFC] p-2.5 sm:p-3 rounded-xl border border-slate-200">
                  <span className="text-[10px] text-slate-500 font-semibold uppercase">Faculty Roster</span>
                  <p className="font-bold text-[#5C5CFF] text-xs sm:text-sm pt-0.5 truncate">24 Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Time-off Management */}
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
                    Time-off Management for Faculty and Staff
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Faculty and staff apply for Time-off and track balances, with approvals routed directly to the right department head.
                  </p>
                </div>

                <a
                  href="#Time-off-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>Explore Time-off Management</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                'Apply for Time-off and view Time-off balances in-app',
                'Approvals routed automatically to department heads',
                'Keep teaching schedule coverage visible during Time-off',
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
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col gap-3.5 sm:gap-4 z-10 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-bold text-slate-800 text-[14px] sm:text-[15px]">Faculty Time-off Workflow</span>
                <span className="text-[10.5px] sm:text-xs font-semibold bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full shrink-0">HOD Routing</span>
              </div>
              <div className="space-y-2">
                <div className="p-2.5 sm:p-3 bg-slate-50 border border-slate-200 rounded-xl flex justify-between items-center text-xs gap-2">
                  <div className="min-w-0">
                    <span className="font-bold text-slate-800 truncate block">Prof. Mehra</span>
                    <p className="text-slate-500 truncate">Casual Time-off &bull; 2 Days</p>
                  </div>
                  <span className="bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded shrink-0">Pending HOD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Parent Notifications */}
      <section className="w-full py-[60px] px-6 lg:px-[100px] bg-[#F8FAFC]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Announcements & Alerts
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Parent Attendance Notifications, Sent Automatically
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Parents can be added as guardians on a student's profile and receive relevant attendance updates without manual follow-up from staff.
                  </p>
                </div>

                <a
                  href="#task-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>Explore Announcements</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                'Add parents as guardians directly on student profiles',
                'Automated absence & lecture notifications',
                'Zero manual phone calls or manual administrative follow-up',
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
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col gap-3.5 sm:gap-4 z-10 shadow-lg">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="font-bold text-slate-800 text-[14px] sm:text-[15px]">Automated Parent SMS & App Feed</span>
                <span className="text-[10.5px] sm:text-xs font-semibold bg-purple-100 text-purple-700 px-2.5 py-0.5 rounded-full shrink-0">Guardian Alerts</span>
              </div>
              <div className="p-3 bg-purple-50/50 border border-purple-100 rounded-xl text-xs flex flex-col gap-1">
                <span className="font-bold text-purple-900">Attendance Update Sent</span>
                <p className="text-slate-600">Lecture 2 (Mathematics) absence notification delivered to Guardian contact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── 8. ONE CONNECTED SYSTEM FLOW ─── */
const OneConnectedSystem: React.FC = () => (
  <section className="w-full bg-[linear-gradient(98.16deg,#9AA0FF_0.73%,#5B5FFF_58.51%,#8A8AFF_105.78%)] py-[80px] px-6 lg:px-[32px] text-white">
    <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[48px]">
      <div className="flex flex-col items-center text-center gap-[12px] max-w-[700px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[1.2] text-white">
          One Update. Connected Everywhere.
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] text-white/90">
          Nothing in Workzi lives in isolation — one action updates everything downstream automatically.
        </p>
      </div>

      <div className="w-full max-w-[1216px] flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {[
          'Faculty marks attendance',
          'Department record updates',
          'HOD dashboard updates',
          'Parent notification sent',
          'Institution report updates',
        ].map((node, idx, arr) => (
          <React.Fragment key={idx}>
            <div className="h-[56px] px-6 rounded-[16px] bg-white text-[#5C5CFF] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14.5px] flex items-center justify-center shadow-md">
              {node}
            </div>
            {idx < arr.length - 1 && (
              <span className="font-['Inter',sans-serif] font-semibold text-[20px] text-white/80 select-none">
                &rarr;
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 9. EVERYDAY WORKFLOWS SUB-BLOCKS ─── */
const EverydayWorkflowsSection: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1216px] mx-auto flex flex-col items-center gap-[48px]">
      <div className="flex flex-col items-center text-center gap-[12px] max-w-[700px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] leading-[1.25] text-[#111827]">
          Handle Everyday Attendance Operations Without the Back-and-Forth
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] w-full">
        {[
          {
            title: 'Attendance exceptions',
            desc: 'Missed or late attendance entries get flagged automatically, with faculty review in one screen.',
          },
          {
            title: 'Time-off approvals',
            desc: 'Requests route directly to the assigned department head.',
          },
          {
            title: 'Attendance regularization',
            desc: 'Correct a missed entry in a couple of simple taps.',
          },
          {
            title: 'Department reporting',
            desc: 'Generate department-level summaries without manual compilation.',
          },
        ].map((block, idx) => (
          <div key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[20px] p-[28px] flex flex-col gap-[12px] hover:shadow-md transition-shadow">
            <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[17px] text-[#111827]">
              {block.title}
            </h4>
            <p className="font-['Inter',sans-serif] text-[13.5px] leading-[22px] text-[#6B7280]">
              {block.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 10. SELF-SERVICE ─── */
const SelfServiceSection: React.FC = () => (
  <section className="w-full bg-[#F8FAFC] py-[80px] px-6 lg:px-[32px] border-t border-[#E5E7EB]">
    <div className="w-full max-w-[1216px] mx-auto flex flex-col items-center gap-[40px]">
      <div className="flex flex-col items-center text-center gap-[12px] max-w-[750px]">
        <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] uppercase text-[#5C5CFF] tracking-[0.5px]">
          SELF-SERVICE APP
        </span>
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] leading-[1.25] text-[#111827]">
          Give Faculty and Staff Answers Without Adding to the Admin Office's Workload
        </h2>
        <p className="font-['Inter',sans-serif] text-[15px] leading-[25px] text-[#6B7280]">
          Faculty and staff manage everyday needs — attendance, Time-off, announcements — directly from the mobile app.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 max-w-[900px]">
        {[
          'Home',
          'Attendance',
          'Time-off',
          'Profile / Calendar',
          'Review class attendance',
          'Request Time-off',
          'Check announcements',
          'Request correction',
          'Upcoming holidays',
        ].map((tag, idx) => (
          <span
            key={idx}
            className="bg-white border border-[#E5E7EB] text-[#111827] font-['Inter',sans-serif] font-semibold text-[13.5px] px-4 py-2 rounded-full shadow-2xs"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 11. REPORTS SECTION ─── */
const ReportsSection: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px] border-t border-[#E5E7EB]">
    <div className="w-full max-w-[1216px] mx-auto flex flex-col items-center gap-[36px]">
      <div className="flex flex-col items-center text-center gap-[12px] max-w-[700px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] leading-[1.25] text-[#111827]">
          Attendance Reports Across Every Department
        </h2>
        <p className="font-['Inter',sans-serif] text-[15px] leading-[25px] text-[#6B7280]">
          Filter and export reports across attendance, Time-off, and department-level data.
        </p>
      </div>

      <div className="flex items-center gap-3 flex-wrap justify-center">
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Filters Available:</span>
        {['Date Range', 'Department', 'Faculty', 'Status'].map((filter, i) => (
          <span key={i} className="bg-[#EEEEFF] text-[#5C5CFF] font-semibold text-xs px-3.5 py-1.5 rounded-lg">
            {filter}
          </span>
        ))}
      </div>
    </div>
  </section>
);

/* ─── 12. INTEGRATIONS SECTION ─── */
const IntegrationsSection: React.FC = () => (
  <section className="w-full bg-[#F8FAFC] py-[80px] px-6 lg:px-[32px] border-t border-[#E5E7EB]">
    <div className="w-full max-w-[1216px] mx-auto flex flex-col items-center gap-[36px]">
      <div className="flex flex-col items-center text-center gap-[12px] max-w-[700px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] leading-[1.25] text-[#111827]">
          Fits Alongside the Systems Your Institution Already Uses
        </h2>
        <p className="font-['Inter',sans-serif] text-[15px] leading-[25px] text-[#6B7280]">
          Workzi is designed to connect with the ERP and academic systems your institution already relies on for student and faculty records.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {['Communication', 'Calendar', 'Identity', 'Productivity'].map((cat, idx) => (
          <div key={idx} className="bg-white border border-[#E5E7EB] rounded-xl px-5 py-3 font-semibold text-sm text-[#111827] shadow-2xs">
            {cat}
          </div>
        ))}
      </div>

      <a
        href="#integrations"
        className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] text-[#5C5CFF] hover:text-[#4F46E5] flex items-center gap-[6px]"
      >
        Explore Integrations <ArrowRight size={16} />
      </a>
    </div>
  </section>
);

/* ─── 13. CROSS-SELL SECTION ─── */
const CrossSellSection: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px] border-t border-[#E5E7EB]">
    <div className="w-full max-w-[1216px] mx-auto flex flex-col items-center gap-[40px]">
      <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] leading-[1.25] text-[#111827]">
        Explore More Ways to Manage Your Institution
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] w-full">
        <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between items-start gap-[20px] hover:shadow-md transition-shadow">
          <div>
            <h4 className="font-bold text-[18px] text-[#111827]">For Department Heads</h4>
            <p className="font-['Inter',sans-serif] text-[14.5px] text-[#6B7280] pt-2">
              See attendance and records for your department in one workspace.
            </p>
          </div>
          <a href="#hr-manager" className="font-bold text-[14.5px] text-[#5C5CFF] flex items-center gap-1.5">
            Explore Manager Solutions <ArrowRight size={15} />
          </a>
        </div>

        <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between items-start gap-[20px] hover:shadow-md transition-shadow">
          <div>
            <h4 className="font-bold text-[18px] text-[#111827]">For IT & Admins</h4>
            <p className="font-['Inter',sans-serif] text-[14.5px] text-[#6B7280] pt-2">
              Manage access, accounts, and permissions across the institution.
            </p>
          </div>
          <a href="#it-solutions" className="font-bold text-[14.5px] text-[#5C5CFF] flex items-center gap-1.5">
            Explore IT Solutions <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 14. FAQ SECTION ─── */
const EducationFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Can faculty manage attendance for their own classes?',
      a: 'Yes. Faculty can review, approve, and correct attendance for their classes directly from the app.',
    },
    {
      q: 'Can different departments have separate dashboards?',
      a: 'Yes. Each department gets its own view of faculty and program-level data, isolated from other departments.',
    },
    {
      q: 'Can parents receive attendance notifications?',
      a: 'Yes. Parents can be added as guardians on a student\'s profile and receive relevant notifications automatically.',
    },
    {
      q: 'Does Workzi integrate with campus ERP systems?',
      a: 'Workzi is designed to connect with common campus ERP systems for student and faculty record synchronization.',
    },
    {
      q: 'Can students access their schedule or timetable?',
      a: 'Yes, Workzi supports live timetable and schedule views for students and faculty through the mobile application.',
    },
  ];

  return (
    <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
      <div className="w-full max-w-[850px] mx-auto flex flex-col items-center gap-[40px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] leading-[1.25] text-[#111827] text-center">
          Frequently Asked Questions
        </h2>

        <div className="w-full divide-y divide-slate-100 border-t border-b border-slate-100">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="w-full">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer group"
                >
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] sm:text-[17px] leading-[24px] text-[#111827] group-hover:text-[#5B5FFF] transition-colors pr-6">
                    {faq.q}
                  </span>
                  <div
                    className={`w-[34px] h-[34px] rounded-[10px] flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#5B5FFF] text-white' : 'bg-[#EEF2FF] text-[#5B5FFF] group-hover:bg-[#5B5FFF] group-hover:text-white'
                      }`}
                  >
                    {isOpen ? <X size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
                  </div>
                </button>
                {isOpen && (
                  <p className="font-['Inter',sans-serif] font-normal text-[14.5px] sm:text-[15px] leading-[26px] text-[#6B7280] max-w-[780px] pb-6 pr-8">
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

/* ─── 15. CLOSING CTA BANNER ─── */
const EducationClosingCTA: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1216px] mx-auto bg-gradient-to-r from-[#9AA0FF] via-[#5B5FFF] to-[#8A8AFF] rounded-[32px] p-8 sm:p-16 text-center text-white flex flex-col items-center justify-center">
      <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[44px] leading-[1.2] text-white max-w-[800px] mb-4">
        Bring Faculty Attendance, Departments, and Parent Communication Into One Platform
      </h2>
      <p className="font-['Inter',sans-serif] text-[16px] text-white/90 max-w-[560px] mb-8">
        Built for schools and colleges managing attendance across faculty, departments, and students.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-3.5">
        <a
          href="#pricing"
          className="px-7 py-3.5 h-[52px] bg-white text-[#5C5CFF] font-semibold text-[15px] rounded-full hover:bg-slate-100 transition-all flex items-center justify-center"
        >
          Get Started
        </a>
        <a
          href="#contact-support"
          className="px-7 py-3.5 h-[52px] bg-transparent border border-white/40 text-white font-semibold text-[15px] rounded-full hover:bg-white/10 transition-all flex items-center justify-center"
        >
          Book a Demo
        </a>
      </div>
    </div>
  </section>
);

/* ─── MAIN PAGE COMPONENT ─── */
export const EducationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <EducationHero />
      <EducationProblemValue />
      <EducationCapabilitiesGrid />
      <EducationFeatureSections />
      <OneConnectedSystem />
      <EverydayWorkflowsSection />
      <SelfServiceSection />
      <ReportsSection />
      <IntegrationsSection />
      <CrossSellSection />
      <EducationFAQSection />
      <EducationClosingCTA />
    </div>
  );
};

export default EducationPage;
