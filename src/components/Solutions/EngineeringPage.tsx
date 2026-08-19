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
  Code,
  MessageSquare,
  Sparkles,
  Cpu,
  GitBranch,
} from 'lucide-react';

import { EngineeringHeroChart } from './EngineeringHeroChart';

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
const EngineeringHero: React.FC = () => (
  <div className="w-full bg-white pt-[68px]">
    {/* div.container — Breadcrumbs */}
    <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-0 h-[45px] py-[14px] flex items-center gap-[8px]">
      <div className="flex items-center gap-[8px] font-['Inter',sans-serif] text-[13px] leading-[16px] text-[#6B7280]">
        <a href="#solutions" className="hover:text-[#111827] transition-colors">Solutions</a>
        <span>/</span>
        <span className="text-[#6B7280]">By Department</span>
        <span>/</span>
        <span className="font-semibold text-[#111827]">Engineering</span>
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
              WORKZI — SOLUTIONS FOR ENGINEERING
            </span>
          </div>

          {/* h1 */}
          <div className="w-full lg:w-[578px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.15] sm:leading-[52px] lg:leading-[54px] tracking-[-1.04px] text-[#111827]">
              Workforce Management Built for How Engineering Teams Actually Work
            </h1>
          </div>

          {/* p.lead */}
          <div className="w-full lg:w-[480px] max-w-[480px] pt-[2.385px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280] max-w-[450px]">
              On-call rotations, WFH days, sprint deadlines, flexible hours — Workzi handles attendance, Time-off, and shift management the way engineering teams really operate, not just 9-to-5 office check-ins.
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
          <EngineeringHeroChart />
        </div>
      </div>
    </section>

    {/* TRUST STRIP (Hero Tag Pills) */}
    <div className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-[24px] sm:py-[32px] px-4 sm:px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 sm:gap-[20px]">
        {[
          'Shift & on-call scheduling',
          'Remote attendance tracking',
          'Sprint-aware task tracking',
          'Manager approvals without back-and-forth',
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
const EngineeringProblemValue: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      {/* div.section-head */}
      <div className="flex flex-col items-center text-center gap-[13.2px] max-w-[950px] w-full">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.25] tracking-[-0.84px] text-[#111827] text-center max-w-[950px] w-full">
          <span className="inline-block">Engineering Doesn't Run on a 9-to-5.</span>{' '}
          <span className="inline-block">Your Attendance Tool Shouldn't Assume It Does.</span>
        </h2>

        <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#6B7280] text-center max-w-[610px]">
          Standard attendance software is built around fixed office hours. Engineering teams run on-call rotations, work async across time zones, and shift focus around sprint deadlines instead of a clock. Workzi is built to flex with that.
        </p>
      </div>

      {/* div.benefit-grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] w-full max-w-[1216px]">
        {/* Card 1 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Shift & on-call aware
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Configure rotations and shift slots directly, not just rigid 9–5 office hours.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Primary On-Call
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Active 24/7
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Secondary On-Call
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Standby
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Weekend Shifts
              </span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Rotated
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              WFH and hybrid by default
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Attendance tracking that doesn't assume everyone is sitting in an office every day.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Remote Check-in
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Location Verified
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                WFH Requests
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                1-Click Approved
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Flex Hours
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Async Logged
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Sprint-linked tasks
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Deadlines tied to actual delivery cycles and release dates, not generic clock times.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Sprint 42 Deliverables
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                On Track
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Task Load
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Balanced
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Release Availability
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                100% Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 3. REASON BLOCKS (MIRRORS SLACK'S PATTERN: PAIN POINT -> CAPABILITY -> PROOF) ─── */
const EngineeringKnowledgeSections: React.FC = () => {
  return (
    <div className="w-full bg-white py-[40px]">
      {/* Section Header */}
      <div className="w-full max-w-[1240px] mx-auto pt-[40px] pb-[20px] px-6 lg:px-[100px] flex flex-col items-center text-center gap-[13.2px]">
        <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] leading-[16px] tracking-[0.65px] uppercase text-[#5C5CFF]">
          WHY ENGINEERING TEAMS USE WORKZI
        </span>
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[40px] sm:leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[700px]">
          Built Around How Dev Teams Actually Schedule Work
        </h2>
      </div>
      {/* Reason 1: Shift & On-Call Scheduling */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Shift & On-Call Management
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Shift and On-Call Scheduling Without a Spreadsheet
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Configure rotating shifts and on-call schedules directly in Workzi, so managers aren't manually tracking who's covering what in a separate doc.
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
                "Configure rotating shifts and on-call schedules directly in Workzi",
                "Eliminate manual spreadsheet tracking for engineering leads",
                "Ensure 24/7 incident coverage across dev teams",
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
                <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">Dev On-Call Roster</span>
                <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-0.5 rounded-full shrink-0">Primary Active</span>
              </div>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Primary On-Call</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Alex Chen • DevOps Squad</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">24/7 Active</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Secondary On-Call</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Maya Patel • Backend Squad</div>
                  </div>
                  <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Standby</span>
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
                    WFH and Remote Attendance Without Friction
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Location-aware check-in supports hybrid and remote engineers, so attendance tracking doesn't mean forcing everyone into an office-first workflow.
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
                "Location-aware check-in for office, hybrid & remote engineers",
                "Real-time visibility into who is active across time zones",
                "Track flexible hours without micro-managing dev schedules",
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
                <span className="font-['Inter',sans-serif] font-bold text-[11px] uppercase tracking-wider text-[#6B7280]">REMOTE CHECK-IN</span>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Sync Time</span>
                  <span className="font-semibold text-[#111827]">09:15 AM</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Location</span>
                  <span className="font-semibold text-[#15803D] flex items-center gap-1">Verified ✓</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Squad</span>
                  <span className="font-semibold text-[#5C5CFF]">Frontend</span>
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
                    Time-off Requests That Don't Stall a Sprint
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Time-off approvals route to the right engineering manager immediately, with visibility into who's out during a sprint before it becomes a delivery problem.
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
                "Approve Time-off with live sprint coverage and availability context",
                "Prevent accidental delivery bottlenecks during critical release cycles",
                "Standardize WFH and PTO rules across engineering squads",
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
                <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">Sprint Availability Context</span>
                <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-0.5 rounded-full shrink-0">Sprint Safe</span>
              </div>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">PTO Request (3 Days)</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">David Miller • Backend Squad</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Approved</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">WFH Days (2 Days)</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Sarah Kim • Frontend Squad</div>
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
                Task & Sprint Visibility
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Tasks and Deadlines Your Team Can Actually See
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Assign tasks with due dates, priorities, and status — so sprint commitments and attendance/Time-off visibility live in the same place instead of two disconnected tools.
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
                "Assign tasks with due dates, priorities, and status",
                "Keep sprint commitments and Time-off visibility in one connected workspace",
                "Track engineering task load alongside attendance",
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
                  <span className="truncate">ENGINEER</span>
                  <span className="hidden sm:block truncate">SQUAD</span>
                  <span className="text-center sm:text-left truncate">STATUS</span>
                  <span className="text-right truncate">DELIVERABLES</span>
                </div>

                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 border-b border-gray-100 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#5C5CFF] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">SK</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Sarah K.</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">Frontend</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">Frontend</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">Active</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">4 Tasks</span>
                </div>

                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 border-b border-gray-100 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#10B981] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">DM</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">David M.</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">Backend</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">Backend</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">Active</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">6 Tasks</span>
                </div>

                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#F59E0B] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">ER</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Elena R.</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">DevOps</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">DevOps</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">On-Call</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">3 Tasks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── 5. MANAGER VISIBILITY (DARK SECTION) ─── */
const EngineeringManagerVisibilityDark: React.FC = () => (
  <section className="w-full bg-[#0B0F17] py-[60px] sm:py-[80px] px-4 sm:px-6 lg:px-[32px] text-white">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[50px]">
      <div className="flex flex-col items-start max-w-[549px] w-full gap-[20px] sm:gap-[24px]">
        <span className="inline-flex items-center px-[14px] py-[5px] bg-white/10 text-[#A5B4FC] font-['Inter',sans-serif] font-semibold text-[12px] rounded-full">
          FOR ENGINEERING MANAGERS
        </span>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.84px] text-white">
          Know Who's Available Before Sprint Planning, Not After
        </h2>

        <p className="font-['Inter',sans-serif] text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-slate-300">
          See team availability, pending Time-off, and task load in one dashboard — so sprint planning doesn't start with "wait, who's out this week?"
        </p>

        <ul className="flex flex-col gap-2.5 sm:gap-3 pt-1 sm:pt-2">
          {[
            "Team attendance and Time-off status in one view",
            "Overdue and at-risk tasks flagged automatically",
            "Approve Time-off, WFH, and attendance corrections from one screen",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-[14px] sm:text-[15px] text-slate-200">
              <span className="w-5 h-5 rounded-full bg-[#5C5CFF]/20 text-[#818CF8] flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-2 sm:pt-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-bold text-[14px] sm:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all shadow-md"
          >
            <span>Explore Manager Solutions</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Dark Dashboard Preview Box */}
      <div className="w-full lg:w-[578px] bg-slate-900 border border-slate-800 rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 shadow-2xl flex flex-col gap-3.5 sm:gap-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-bold text-[11px] sm:text-xs uppercase tracking-wider text-slate-300 truncate">Engineering Squad Dashboard</span>
          </div>
          <span className="text-[10px] sm:text-xs text-slate-400 bg-slate-800 px-2 sm:px-2.5 py-1 rounded-md shrink-0">Live View</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          <div className="bg-slate-800/60 rounded-xl p-3 sm:p-3.5 border border-slate-700/50">
            <div className="text-[11px] sm:text-xs text-slate-400 truncate">Available Engineers</div>
            <div className="text-xl sm:text-2xl font-black text-white pt-1">28 / 30</div>
            <div className="text-[9.5px] sm:text-[10px] text-emerald-400 pt-0.5 truncate">2 WFH Approved</div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-3 sm:p-3.5 border border-slate-700/50">
            <div className="text-[11px] sm:text-xs text-slate-400 truncate">On-Call Coverage</div>
            <div className="text-xl sm:text-2xl font-black text-white pt-1">100%</div>
            <div className="text-[9.5px] sm:text-[10px] text-indigo-400 pt-0.5 truncate">Primary & Backup</div>
          </div>
        </div>

        <div className="bg-slate-800/40 rounded-xl p-3.5 sm:p-4 border border-slate-700/40 flex flex-col gap-2 sm:gap-2.5">
          <div className="text-xs font-bold text-slate-300">Sprint Capacity Warning</div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11.5px] sm:text-xs bg-amber-950/40 border border-amber-800/40 p-2.5 rounded-lg text-amber-200">
            <span className="leading-snug">David M. (Backend) on PTO next Tue–Thu</span>
            <span className="bg-amber-800/60 text-amber-100 px-2 py-0.5 rounded text-[10px] font-bold self-start sm:self-auto shrink-0">Planned ✓</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 6. INTEGRATIONS SECTION ─── */
const EngineeringIntegrations: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px] border-b border-[#E5E7EB]">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-[40px] text-center">
      <div className="flex flex-col items-center gap-3 max-w-[700px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[1.2] text-[#111827]">
          Fits Alongside the Tools Your Engineering Team Already Uses
        </h2>
        <p className="font-['Inter',sans-serif] text-[16px] text-[#6B7280]">
          Workzi handles workforce operations — attendance, Time-off, shifts — while staying out of the way of the tools engineering teams already use for code and project tracking.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-[800px]">
        {[
          { name: 'Communication', desc: 'Slack & Teams' },
          { name: 'Calendar', desc: 'Google & Outlook' },
          { name: 'Identity', desc: 'Okta & Azure AD' },
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

/* ─── 7. FAQ SECTION ─── */
const EngineeringFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Can Workzi handle on-call or rotating shift schedules?',
      a: "Yes. Workzi supports rotating shift configuration and roster tracking for engineering teams, allowing leads to assign and monitor on-call slots seamlessly.",
    },
    {
      q: 'Does Workzi support attendance tracking for remote and hybrid engineering teams?',
      a: "Yes. Workzi's location-aware check-in works for office, hybrid, and remote employees, so attendance tracking isn't limited to in-office staff.",
    },
    {
      q: 'Can engineering managers approve Time-off and WFH requests from mobile?',
      a: 'Yes. Approvals route to the relevant manager and can be actioned from the Workzi mobile app.',
    },
    {
      q: 'Does Workzi track sprint deadlines the same way as tasks?',
      a: "Workzi's task management module lets you set due dates, priorities, and status per task — useful for sprint-linked deadlines alongside attendance and Time-off visibility.",
    },
    {
      q: 'Is there a separate view for engineering managers vs. individual contributors?',
      a: 'Yes. Managers get team-level visibility into attendance, Time-off, and tasks; employees see their own dashboard.',
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
            Everything teams ask about Workzi Engineering software.
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

/* ─── 8. CLOSING CTA BANNER ─── */
const EngineeringRoleCTABanner: React.FC = () => (
  <section className="w-full py-[72px] px-6 lg:px-[128px] bg-white">
    <div className="w-full max-w-[1184px] mx-auto bg-[linear-gradient(98.16deg,#8B8DFF_0%,#6366F1_50%,#818CF8_100%)] rounded-[32px] py-[72px] px-6 lg:px-[80px] flex flex-col items-center text-center relative overflow-hidden">
      {/* Soft Radial Glow Highlights */}
      <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -top-[250px] left-[50%] -translate-x-[50%] pointer-events-none" />

      <div className="w-full max-w-[848px] mx-auto flex flex-col items-center gap-[15px] relative z-10">
        {/* h2 title */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] sm:text-[42px] lg:text-[46px] leading-[46px] sm:leading-[54px] lg:leading-[58px] tracking-[-1.12px] text-white max-w-[650px] mx-auto">
          Give Your Engineering Team Workforce Tools That Fit How They Actually Work
        </h2>

        {/* Subtitle */}
        <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[18px] sm:text-[22px] leading-[32px] tracking-[-0.64px] text-[#CACDFF] max-w-[650px] mx-auto">
          Attendance, Time-off, and task tracking built around shifts, sprints, and remote work — not fixed office hours.
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

/* ─── MAIN ENGINEERING SOLUTIONS PAGE COMPONENT ─── */
export const EngineeringPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <EngineeringHero />
      <EngineeringProblemValue />
      <EngineeringKnowledgeSections />
      <EngineeringManagerVisibilityDark />
      <EngineeringIntegrations />
      <EngineeringFAQ />
      <EngineeringRoleCTABanner />
    </div>
  );
};

export default EngineeringPage;
