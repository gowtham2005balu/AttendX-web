import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  Clock,
  Smartphone,
  Zap,
  FileText,
  ChevronDown,
  ChevronUp,
  MapPin,
  BarChart3,
  Users,
  AlertCircle,
  Check,
  ArrowRight,
  Plus,
  X,
} from 'lucide-react';

import { AttendanceManagementHeroChart } from './AttendanceManagementHeroChart';

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

/* ─── 1. HERO SECTION (Figma Exact CSS) ─── */
const AttendanceHero: React.FC = () => (
  <div
    className="w-full pt-[68px]"
    style={{
      background: 'linear-gradient(180deg, #EEEEFF 0%, #FFFFFF 65%)',
    }}
  >
    {/* ── BREADCRUMB BAR ── */}
    <div className="w-full bg-transparent border-b border-[#E5E7F0]">
      <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-0 h-[44px] flex items-center gap-[8px]">
        <div className="flex items-center gap-[8px] font-['Inter',sans-serif] text-[13px] leading-[16px] text-[#6B7280]">
          <a href="#home" className="hover:text-[#111827] transition-colors">Home</a>
          <span>/</span>
          <a href="#features" className="hover:text-[#111827] transition-colors">Features</a>
          <span>/</span>
          <span className="font-semibold text-[#111827]">Attendance Management</span>
        </div>
      </div>
    </div>

    {/* HERO — Main Content (Frame 1984079022) */}
    <section id="hero" className="w-full max-w-[1289px] mx-auto px-6 lg:px-0 pt-[40px] lg:pt-[60px] pb-[50px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        {/* Left Column (Frame 1984079021) */}
        <div className="flex flex-col items-start w-full lg:w-[656px] gap-[17px] shrink-0">

          {/* h1 */}
          <div className="w-full max-w-[760px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.15] lg:leading-[60px] tracking-[-1.04px] text-[#111827]">
              Attendance tracking that keeps everyone in sync
            </h1>
          </div>

          {/* p.lead */}
          <div className="w-full lg:w-[577px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280]">
              Make daily attendance simple for employees while giving managers and HR teams a clear view of working hours, attendance status and exceptions.
            </p>
          </div>

          {/* div.hero-ctas */}
          <div className="flex items-center gap-[14px] w-full pt-[12px]">
            <a
              href="#pricing"
              className="bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] w-[138px] h-[49px] rounded-[12px] transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 shadow-sm"
            >
              Get Started
            </a>
            <a
              href="#pricing"
              className="bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] w-[148px] h-[49px] rounded-[12px] transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 shadow-xs"
            >
              Watch Demo
            </a>
          </div>
        </div>

        {/* Right Column: div.hero-visual */}
        <div className="w-full lg:w-[573px] flex items-center justify-center shrink-0">
          <AttendanceManagementHeroChart />
        </div>
      </div>
    </section>

    {/* VALUE STRIP / TRUST STRIP */}
    <div className="w-full bg-white py-[36px] px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-[20px] overflow-x-auto no-scrollbar">
        {[
          'Simple check-in',
          'Working-hour visibility',
          'Team attendance',
          'Attendance corrections',
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-[8px] shrink-0">
            <span className="w-[6px] h-[6px] rounded-[3px] bg-[#5C5CFF] shrink-0" />
            <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] text-[#6B7280] whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── 2. HOW ATTENDANCE WORKS WORKFLOW (Figma Exact CSS) ─── */
const AttendanceWorkflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Check in',
      desc: 'Employees start their workday from Workzi.',
    },
    {
      num: '02',
      title: 'Attendance recorded',
      desc: "Workzi records the employee's attendance and working context.",
    },
    {
      num: '03',
      title: 'Managers get visibility',
      desc: 'Managers can understand who is present and review attendance exceptions.',
    },
    {
      num: '04',
      title: 'HR stays in control',
      desc: 'HR teams can manage attendance records, rules and corrections from one place.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        {/* div.section-head */}
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          {/* h2 */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[598px]">
            From check-in to attendance record
          </h2>
          {/* p */}
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[536px]">
            Workzi keeps the entire attendance flow connected without making employees or managers deal with unnecessary complexity.
          </p>
        </FadeUp>

        {/* div.step-row */}
        <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {steps.map((step, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="flex flex-col items-start px-5 pb-[23px] gap-2 relative group min-h-[163.64px]">
                {/* div.step-num */}
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#EEEEFF] flex items-center justify-center shrink-0">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] leading-[20px] text-[#5C5CFF]">
                    {step.num}
                  </span>
                </div>

                {/* h4 */}
                <div className="pt-[9px] pb-[0.55px] w-full">
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] leading-[20px] tracking-[-0.34px] text-[#111827]">
                    {step.title}
                  </h4>
                </div>

                {/* p */}
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[23px] text-[#6B7280] w-full">
                  {step.desc}
                </p>

                {/* Connector line between steps on desktop (::after) */}
                {index < 3 && (
                  <div
                    className="hidden lg:block absolute right-[-10px] top-[26px] w-[40px] h-[2px] z-10 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, #E5E7EB 0%, #E5E7EB 15%, rgba(229, 231, 235, 0) 15%, rgba(229, 231, 235, 0) 30%)',
                    }}
                  />
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ─── 3. SECTION: Checking in should take seconds ─── */
const SectionCheckingIn: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Left Text */}
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        {/* span.section-tag */}
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Workforce Visibility
          </span>
        </div>

        {/* h2 */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Checking in should take seconds
        </h2>

        {/* p */}
        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Employees can start and end their workday from a simple attendance experience without navigating complex HR software.
        </p>

        {/* button.knowledge-btn */}
        <a
          href="#pricing"
          className="inline-flex items-center justify-center px-[26px] py-[13px] gap-[8px] bg-[#1A1A1A] hover:bg-[#333333] text-white rounded-[50px] transition-all duration-200"
        >
          <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px]">
            Employee Experience
          </span>
          <ArrowRight size={16} />
        </a>

        {/* ul.feature-list */}
        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Check in / check out',
            'Current attendance status',
            'Current attendance status',
            'View employee and department-level status',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-[12px]">
              <div className="w-[22px] h-[22px] rounded-[6px] bg-[#10B981]/12 flex items-center justify-center shrink-0">
                <Check size={12} className="text-[#10B981]" strokeWidth={3} />
              </div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* Right Graphic Container: Dual Phone Cards */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[390px] sm:h-[520px] rounded-[16px] p-3 sm:p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          {/* Phone Card 1 (Left / Top) */}
          <div
            className="absolute bg-white border border-[#E5E7EB] rounded-[16px] sm:rounded-[20px] p-3 sm:p-[19px] flex flex-col justify-between z-10 w-[175px] sm:w-[230px] h-[250px] sm:h-[296px] left-3 sm:left-[40px] top-4 sm:top-[50px]"
            style={{
              boxShadow: '0px 20px 40px -18px rgba(17, 24, 39, 0.2)',
            }}
          >
            <div>
              <span className="font-['Inter',sans-serif] font-bold text-[10px] sm:text-[11px] leading-[13px] uppercase text-[#6B7280] block mb-1.5 sm:mb-2">
                ATTENDANCE
              </span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] sm:text-[24px] leading-[24px] sm:leading-[30px] text-[#111827] block">
                09:32 AM
              </span>
              <span className="font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[12.5px] leading-[15px] text-[#6B7280] block mt-0.5 sm:mt-1 mb-2 sm:mb-3">
                Checked In
              </span>

              <div className="space-y-[6px] sm:space-y-[8px]">
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[7px] sm:rounded-[9px] px-[8px] sm:px-[12px] py-[6px] sm:py-[9px] flex justify-between text-[10.5px] sm:text-[12px] font-semibold text-[#111827]">
                  <span className="truncate">Shift</span>
                  <span className="shrink-0">09:30–06:30</span>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[7px] sm:rounded-[9px] px-[8px] sm:px-[12px] py-[6px] sm:py-[9px] flex justify-between text-[10.5px] sm:text-[12px] font-semibold text-[#111827]">
                  <span className="truncate">Hours</span>
                  <span className="shrink-0">6h 40m</span>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[7px] sm:rounded-[9px] px-[8px] sm:px-[12px] py-[6px] sm:py-[9px] flex justify-between text-[10.5px] sm:text-[12px] font-semibold text-[#111827]">
                  <span className="truncate">Location</span>
                  <span className="truncate">Office</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#5C5CFF] text-white font-['Inter',sans-serif] font-bold text-[12px] sm:text-[13.5px] leading-[16px] py-[8px] sm:py-[12px] rounded-[10px] sm:rounded-[12px]">
              Check Out
            </button>
          </div>

          {/* Phone Card 2 (Right / Shifted Down) */}
          <div
            className="absolute bg-white border border-[#E5E7EB] rounded-[16px] sm:rounded-[20px] p-3 sm:p-[19px] flex flex-col justify-between z-20 w-[175px] sm:w-[230px] h-[250px] sm:h-[296px] right-3 sm:right-[40px] bottom-4 sm:bottom-[50px]"
            style={{
              boxShadow: '0px 20px 40px -18px rgba(17, 24, 39, 0.2)',
            }}
          >
            <div>
              <span className="font-['Inter',sans-serif] font-bold text-[10px] sm:text-[11px] leading-[13px] uppercase text-[#6B7280] block mb-1.5 sm:mb-2">
                ATTENDANCE
              </span>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] sm:text-[24px] leading-[24px] sm:leading-[30px] text-[#111827] block">
                00:00 AM
              </span>
              <span className="font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[12.5px] leading-[15px] text-[#6B7280] block mt-0.5 sm:mt-1 mb-2 sm:mb-3">
                Checked In
              </span>

              <div className="space-y-[6px] sm:space-y-[8px]">
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[7px] sm:rounded-[9px] px-[8px] sm:px-[12px] py-[6px] sm:py-[9px] flex justify-between text-[10.5px] sm:text-[12px] font-semibold text-[#111827]">
                  <span className="truncate">Shift</span>
                  <span className="shrink-0">09:30–06:30</span>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[7px] sm:rounded-[9px] px-[8px] sm:px-[12px] py-[6px] sm:py-[9px] flex justify-between text-[10.5px] sm:text-[12px] font-semibold text-[#111827]">
                  <span className="truncate">Hours</span>
                  <span className="shrink-0">-</span>
                </div>
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[7px] sm:rounded-[9px] px-[8px] sm:px-[12px] py-[6px] sm:py-[9px] flex justify-between text-[10.5px] sm:text-[12px] font-semibold text-[#111827]">
                  <span className="truncate">Location</span>
                  <span className="truncate">Office</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#5C5CFF] text-white font-['Inter',sans-serif] font-bold text-[12px] sm:text-[13.5px] leading-[16px] py-[8px] sm:py-[12px] rounded-[10px] sm:rounded-[12px]">
              Check In
            </button>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 4. SECTION: Know where work starts ─── */
const SectionKnowWhere: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Left Graphic Container: Map Verification Panel */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          {/* Map Verification Card */}
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[16px] flex flex-col gap-[4px] shadow-xl">
            {/* Top Map Grid */}
            <div className="w-full h-[180px] bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:16px_16px]" />
              {/* Central Map Pin */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#5C5CFF] border-[3px] border-white shadow-[0_0_0_4px_rgba(92,92,255,0.25)] animate-pulse" />
              </div>
            </div>

            {/* Info Rows */}
            <div className="flex flex-col gap-0 pt-2 text-[12.5px] font-['Inter',sans-serif] font-semibold text-[#111827]">
              <div className="py-[6px] border-b border-slate-100 flex justify-between">
                <span className="text-[#6B7280]">Employee</span>
                <span>Sarah Anderson</span>
              </div>
              <div className="py-[6px] border-b border-slate-100 flex justify-between">
                <span className="text-[#6B7280]">Work Location</span>
                <span>Main Office</span>
              </div>
              <div className="py-[6px] border-b border-slate-100 flex justify-between">
                <span className="text-[#6B7280]">Check-in Time</span>
                <span>09:32 AM</span>
              </div>
              <div className="py-[6px] flex justify-between items-center">
                <span className="text-[#6B7280]">Status</span>
                <span className="bg-[#EAFBF3] text-[#15803D] text-[10.5px] font-bold px-[9px] py-[3px] rounded-full">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Right Text */}
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        {/* span.section-tag */}
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Location Context
          </span>
        </div>

        {/* h2 */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Know where work starts
        </h2>

        {/* p */}
        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Add location context to attendance so organizations can understand where employees are checking in from — captured at the moment of check-in, not tracked continuously.
        </p>

        {/* ul.feature-list */}
        <div className="flex flex-col gap-[14px] pt-[13.1px] w-full">
          {[
            'Location context at check-in',
            'Office / work location',
            'Attendance timestamp',
            'Attendance regularization',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-[12px]">
              <div className="w-[22px] h-[22px] rounded-[6px] bg-[#10B981]/12 flex items-center justify-center shrink-0">
                <Check size={12} className="text-[#10B981]" strokeWidth={3} />
              </div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 5. SECTION: See the workday clearly ─── */
const SectionSeeWorkday: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Left Text */}
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        {/* span.section-tag */}
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Workforce Visibility
          </span>
        </div>

        {/* h2 */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          See the workday clearly
        </h2>

        {/* p */}
        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Workzi turns check-in and check-out activity into understandable working- hour information, without complex analytics getting in the way.
        </p>

        {/* ul.feature-list */}
        <div className="flex flex-col gap-[14px] pt-[13.1px] w-full">
          {[
            'Check in / check out',
            'Current attendance status',
            'Current attendance status',
            'View employee and department-level status',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-[12px]">
              <div className="w-[22px] h-[22px] rounded-[6px] bg-[#10B981]/12 flex items-center justify-center shrink-0">
                <Check size={12} className="text-[#10B981]" strokeWidth={3} />
              </div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>

      {/* Right Graphic Container: Hours Summary Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          {/* Hours Card */}
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[16px] shadow-xl">
            {/* Grid 2x2 */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] p-3">
                <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                  CHECK IN
                </span>
                <span className="text-[18px] font-extrabold text-[#111827]">09:32 AM</span>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] p-3">
                <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                  CHECK OUT
                </span>
                <span className="text-[18px] font-extrabold text-[#111827]">06:14 PM</span>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] p-3">
                <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                  SHIFT
                </span>
                <span className="text-[16px] font-bold text-[#111827]">09:30–06:30</span>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] p-3">
                <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                  STATUS
                </span>
                <span className="inline-block bg-[#EAFBF3] text-[#15803D] text-[11px] font-bold px-2 py-0.5 rounded-full">
                  Present
                </span>
              </div>
            </div>

            {/* Total Working Hours Banner */}
            <div className="bg-[#EEEEFF] border border-indigo-100 rounded-[12px] p-4 text-center">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[24px] sm:text-[28px] font-black text-[#5C5CFF] block">
                8h 42m
              </span>
              <span className="font-['Inter',sans-serif] text-[12px] font-semibold text-[#6B7280]">
                Total working hours
              </span>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 6. SECTION: Every attendance record, easy to understand (Attendance History Table) ─── */
const SectionAttendanceHistory: React.FC = () => {
  const rows = [
    {
      initials: 'SA',
      name: 'Sarah Anderson',
      bgColor: 'bg-[#5C5CFF]',
      date: 'Jul 29',
      checkIn: '09:32 AM',
      checkOut: '06:14 PM',
      hours: '8h 42m',
      status: 'Present',
      statusBg: 'bg-[#EAFBF3]',
      statusColor: 'text-[#15803D]',
    },
    {
      initials: 'MK',
      name: 'Michael Kim',
      bgColor: 'bg-[#F59E0B]',
      date: 'Jul 29',
      checkIn: '09:58 AM',
      checkOut: '06:20 PM',
      hours: '8h 22m',
      status: 'Late',
      statusBg: 'bg-[#FEF3E2]',
      statusColor: 'text-[#B45309]',
    },
    {
      initials: 'PR',
      name: 'Priya Rao',
      bgColor: 'bg-[#22C55E]',
      date: 'Jul 29',
      checkIn: '—',
      checkOut: '—',
      hours: '—',
      status: 'WFH',
      statusBg: 'bg-[#EEEEFF]',
      statusColor: 'text-[#5C5CFF]',
    },
    {
      initials: 'DT',
      name: 'David Torres',
      bgColor: 'bg-[#6B7280]',
      date: 'Jul 29',
      checkIn: '—',
      checkOut: '—',
      hours: '—',
      status: 'Absent',
      statusBg: 'bg-[#F3F4F6]',
      statusColor: 'text-[#6B7280]',
    },
  ];

  return (
    <section className="w-full py-[80px] px-6 lg:px-[80px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] leading-[46px] tracking-[-0.8px] text-[#111827] text-center max-w-[566px]">
            Every attendance record, easy to understand
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[522px]">
            Filter by date, month, or status to find exactly the record you need.
          </p>
        </FadeUp>

        <FadeUp className="w-full max-w-[1216px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs">
          <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[16px] flex items-center gap-[10px]">
            {['Date', 'Month', 'Status'].map((chip, idx) => (
              <span
                key={idx}
                className="bg-white border border-[#E5E7EB] text-[#6B7280] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] px-[14px] py-[6px] rounded-full cursor-pointer hover:bg-slate-50 transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#F8FAFC] text-[10.5px] font-['Inter',sans-serif] font-bold uppercase tracking-wider text-[#6B7280] h-[37px]">
                  <th className="pl-[18px] py-2">EMPLOYEE</th>
                  <th className="py-2">DATE</th>
                  <th className="py-2">CHECK IN</th>
                  <th className="py-2">CHECK OUT</th>
                  <th className="py-2">HOURS</th>
                  <th className="pr-[18px] py-2">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {rows.map((row, idx) => (
                  <tr key={idx} className="h-[49px] text-[12.5px] font-['Inter',sans-serif] text-[#111827] hover:bg-slate-50/50 transition-colors">
                    <td className="pl-[18px] py-2">
                      <div className="flex items-center gap-[8px]">
                        <span className={`w-[24px] h-[24px] rounded-full ${row.bgColor} text-white font-bold text-[10px] flex items-center justify-center shrink-0`}>
                          {row.initials}
                        </span>
                        <span>{row.name}</span>
                      </div>
                    </td>
                    <td className="py-2">{row.date}</td>
                    <td className="py-2">{row.checkIn}</td>
                    <td className="py-2">{row.checkOut}</td>
                    <td className="py-2">{row.hours}</td>
                    <td className="pr-[18px] py-2">
                      <span className={`inline-block ${row.statusBg} ${row.statusColor} font-bold text-[10.5px] px-[9px] py-[3px] rounded-full`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ─── 7. SECTION: Understand the month at a glance (Monthly Summary Banner) ─── */
const SectionMonthlySummary: React.FC = () => {
  const stats = [
    { num: '19', label: 'Present Days' },
    { num: '2', label: 'Absent Days' },
    { num: '3', label: 'Time-off' },
    { num: '2', label: 'WFH' },
    { num: '168h', label: 'Total Hours' },
  ];

  return (
    <section className="w-full py-[80px] bg-[rgba(120,90,253,0.15)]">
      <Container className="max-w-[1280px] mx-auto px-6 lg:px-[32px] flex flex-col items-center gap-[52px]">
        <FadeUp className="text-center">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] leading-[46px] tracking-[-0.8px] text-[#111827] text-center max-w-[489px]">
            Understand the month at a glance
          </h2>
        </FadeUp>

        <FadeUp className="w-full max-w-[1216px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[14px]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] rounded-[14px] p-[20px] flex flex-col items-center justify-center gap-[4px] shadow-xs hover:shadow-md transition-shadow"
            >
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[24px] leading-[30px] text-[#111827]">
                {stat.num}
              </span>
              <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[15px] text-[#6B7280]">
                {stat.label}
              </span>
            </div>
          ))}
        </FadeUp>
      </Container>
    </section>
  );
};

/* ─── 8. SECTION: Know who's in without asking around (Team Attendance Table) ─── */
const SectionTeamAttendance: React.FC = () => {
  const teamRows = [
    {
      initials: 'SA',
      name: 'Sarah Anderson',
      dept: 'Design',
      bgColor: 'bg-[#5C5CFF]',
      status: 'Present',
      statusBg: 'bg-[#EAFBF3]',
      statusColor: 'text-[#15803D]',
      checkIn: '09:32 AM',
      hours: '6h 40m',
    },
    {
      initials: 'MK',
      name: 'Michael Kim',
      dept: 'Engineering',
      bgColor: 'bg-[#F59E0B]',
      status: 'Late',
      statusBg: 'bg-[#FEF3E2]',
      statusColor: 'text-[#B45309]',
      checkIn: '09:58 AM',
      hours: '6h 12m',
    },
    {
      initials: 'PR',
      name: 'Priya Rao',
      dept: 'Marketing',
      bgColor: 'bg-[#22C55E]',
      status: 'WFH',
      statusBg: 'bg-[#EEEEFF]',
      statusColor: 'text-[#5C5CFF]',
      checkIn: '—',
      hours: '—',
    },
    {
      initials: 'DT',
      name: 'David Torres',
      dept: 'Sales',
      bgColor: 'bg-[#6B7280]',
      status: 'Absent',
      statusBg: 'bg-[#F3F4F6]',
      statusColor: 'text-[#6B7280]',
      checkIn: '—',
      hours: '—',
    },
  ];

  return (
    <section className="w-full py-[70px] px-6 lg:px-[80px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[24px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[712px] mx-auto gap-[13.1px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.12] tracking-[-1px] text-[#111827] text-center max-w-[712px]">
            Know who&apos;s in without asking around
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[604px]">
            Managers get a clear view of their team&apos;s attendance so they can understand availability and act on exceptions quickly.
          </p>

          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-[26px] py-[13px] gap-[8px] bg-[#1A1A1A] hover:bg-[#333333] text-white rounded-[50px] transition-all duration-200 mt-2"
          >
            <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px]">
              Explore Employee Directory
            </span>
            <ArrowRight size={16} />
          </a>
        </FadeUp>

        <FadeUp className="w-full max-w-[1216px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs mt-6">
          <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[16px] flex items-center gap-[10px]">
            {['Today', 'Date', 'Status', 'Department'].map((chip, idx) => (
              <span
                key={idx}
                className="bg-white border border-[#E5E7EB] text-[#6B7280] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] px-[14px] py-[6px] rounded-full cursor-pointer hover:bg-slate-50 transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-white border-b border-[#E5E7EB] text-[10.5px] font-['Inter',sans-serif] font-bold uppercase tracking-wider text-[#6B7280] h-[38px]">
                  <th className="pl-[21px] py-2">EMPLOYEE</th>
                  <th className="py-2">STATUS</th>
                  <th className="py-2">CHECK IN</th>
                  <th className="pr-[21px] py-2">WORKING HOURS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {teamRows.map((row, idx) => (
                  <tr key={idx} className="h-[49px] text-[12.5px] font-['Inter',sans-serif] text-[#111827] hover:bg-slate-50/50 transition-colors">
                    <td className="pl-[21px] py-2">
                      <div className="flex items-center gap-[8px]">
                        <span className={`w-[24px] h-[24px] rounded-full ${row.bgColor} text-white font-bold text-[10px] flex items-center justify-center shrink-0`}>
                          {row.initials}
                        </span>
                        <span className="font-semibold">{row.name} — {row.dept}</span>
                      </div>
                    </td>
                    <td className="py-2">
                      <span className={`inline-block ${row.statusBg} ${row.statusColor} font-bold text-[10.5px] px-[9px] py-[3px] rounded-full`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-2 font-semibold">{row.checkIn}</td>
                    <td className="pr-[21px] py-2 font-semibold">{row.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ─── 9. SECTION: Mistakes happen. Fix them without the email chain. (Corrections) ─── */
const SectionMistakesFix: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[22px] flex flex-col gap-[12px] shadow-xl">
            <div className="flex justify-between items-center py-[6px] border-b border-slate-100 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
              <span className="text-[#6B7280]">Date</span>
              <span>Jul 24</span>
            </div>
            <div className="flex justify-between items-center py-[6px] border-b border-slate-100 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
              <span className="text-[#6B7280]">Existing Record</span>
              <span>Missed check-out</span>
            </div>
            <div className="flex justify-between items-center py-[6px] border-b border-slate-100 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
              <span className="text-[#6B7280]">Requested Correction</span>
              <span>Check-out 06:15 PM</span>
            </div>
            <div className="flex justify-between items-center py-[6px] border-b border-slate-100 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
              <span className="text-[#6B7280]">Reason</span>
              <span>Forgot to check out</span>
            </div>

            <div className="flex items-center gap-[10px] pt-3">
              <button className="bg-[#EAFBF3] text-[#15803D] font-['Inter',sans-serif] font-bold text-[12px] px-[18px] py-[10px] rounded-[10px] cursor-pointer hover:bg-[#d5f7e6] transition-colors">
                Approve
              </button>
              <button className="bg-[#FEE2E2] text-[#DC2626] font-['Inter',sans-serif] font-bold text-[12px] px-[18px] py-[10px] rounded-[10px] cursor-pointer hover:bg-[#fcd0d0] transition-colors">
                Reject
              </button>
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Corrections
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Mistakes happen. Fix them without the email chain.
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Employees can request a correction when they forget to check in or out, or when an attendance record needs adjusting — with a reason attached and a manager review built in.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13.1px] w-full">
          {[
            'Request a correction with a reason',
            'See the existing record alongside the request',
            'Attendance timestamp',
            'Attendance regularization',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-[12px]">
              <div className="w-[22px] h-[22px] rounded-[6px] bg-[#10B981]/12 flex items-center justify-center shrink-0">
                <Check size={12} className="text-[#10B981]" strokeWidth={3} />
              </div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 10. SECTION: Handle work-from-home requests in the same flow (WFH Requests Workflow) ─── */
const SectionWFHWorkflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Employee requests',
      desc: 'Date and reason submitted from the attendance app.',
    },
    {
      num: '02',
      title: 'Manager reviews',
      desc: 'Request appears alongside other pending approvals.',
    },
    {
      num: '03',
      title: 'Request approved',
      desc: 'Manager approves with full context in one screen.',
    },
    {
      num: '04',
      title: 'Attendance reflects',
      desc: 'The day shows correctly across records and calendar.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-6 lg:px-[80px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[655px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.12] tracking-[-1px] text-[#111827] text-center max-w-[655px]">
            Handle work-from-home requests in the same flow
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[544px]">
            Employees can request WFH while managers maintain visibility — and attendance reflects the outcome automatically.
          </p>
        </FadeUp>

        <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 mx-auto">
          {steps.map((step, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center px-4 py-2 gap-2 min-h-[156.55px]">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#EEEEFF] flex items-center justify-center shrink-0">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] leading-[20px] text-[#5C5CFF]">
                    {step.num}
                  </span>
                </div>
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] leading-[20px] tracking-[-0.34px] text-[#111827] pt-2">
                  {step.title}
                </h4>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[23px] text-[#6B7280]">
                  {step.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ─── 11. SECTION: See attendance in calendar context (Attendance Calendar) ─── */
const SectionCalendarContext: React.FC = () => {
  const days = [
    { day: 1, type: 'present' },
    { day: 2, type: 'present' },
    { day: 3, type: 'present' },
    { day: 4, type: 'off' },
    { day: 5, type: 'present' },
    { day: 6, type: 'late' },
    { day: 7, type: 'present' },
    { day: 8, type: 'present' },
    { day: 9, type: 'present' },
    { day: 10, type: 'wfh' },
    { day: 11, type: 'wfh' },
    { day: 12, type: 'present' },
    { day: 13, type: 'present' },
    { day: 14, type: 'present' },
    { day: 15, type: 'present' },
    { day: 16, type: 'late' },
    { day: 17, type: 'present' },
    { day: 18, type: 'present' },
    { day: 19, type: 'present' },
    { day: 20, type: 'present' },
    { day: 21, type: 'wfh' },
  ];

  const getCellStyles = (type: string) => {
    switch (type) {
      case 'present':
        return 'bg-[#EAFBF3] text-[#15803D] border-[#E5E7EB]';
      case 'late':
        return 'bg-[#FEF3E2] text-[#B45309] border-[#E5E7EB]';
      case 'wfh':
        return 'bg-[#EEEEFF] text-[#5C5CFF] border-[#E5E7EB]';
      default:
        return 'bg-[#F3F4F6] text-[#6B7280] border-[#E5E7EB]';
    }
  };

  return (
    <section className="w-full py-[80px] px-6 lg:px-[80px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.12] tracking-[-1px] text-[#111827] text-center max-w-[620px]">
            See attendance in calendar context
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[563px]">
            Navigate by month and filter by status to see the full picture at a glance.
          </p>
        </FadeUp>

        <FadeUp className="w-full max-w-[900px] grid grid-cols-7 gap-2.5 sm:gap-3 mx-auto">
          {days.map((item) => (
            <div
              key={item.day}
              className={`h-[52px] border rounded-[8px] flex items-center justify-center font-['Inter',sans-serif] font-semibold text-[11.5px] shadow-xs hover:scale-105 transition-transform cursor-pointer ${getCellStyles(item.type)}`}
            >
              {item.day}
            </div>
          ))}
        </FadeUp>
      </Container>
    </section>
  );
};

/* ─── 12. SECTION: Attendance understands the schedule (Shift Integration) ─── */
const SectionScheduleIntegration: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Attendance understands the schedule
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Attendance becomes more useful when it understands when an employee is expected to work — comparing check-in against the assigned shift automatically.
        </p>

        <a
          href="#pricing"
          className="inline-flex items-center justify-center px-[26px] py-[13px] gap-[8px] bg-[#1A1A1A] hover:bg-[#333333] text-white rounded-[50px] transition-all duration-200"
        >
          <span className="font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px]">
            Explore Shift Management
          </span>
          <ArrowRight size={16} />
        </a>

        <div className="flex flex-col gap-[14px] pt-[13.1px] w-full">
          {[
            'Smart check-in and check-out',
            'Location-aware attendance',
            'Working-hour tracking',
            'Attendance regularization',
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-[12px]">
              <div className="w-[22px] h-[22px] rounded-[6px] bg-[#10B981]/12 flex items-center justify-center shrink-0">
                <Check size={12} className="text-[#10B981]" strokeWidth={3} />
              </div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </FadeUp>

      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[350px] sm:h-[400px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[16px] shadow-xl">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] p-3">
                <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                  ASSIGNED SHIFT
                </span>
                <span className="text-[14px] font-extrabold text-[#111827]">09:30–06:30</span>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] p-3">
                <span className="text-[11px] font-bold text-[#6B7280] uppercase tracking-wider block mb-1">
                  CHECK IN
                </span>
                <span className="text-[14px] font-extrabold text-[#111827]">09:32 AM</span>
              </div>
            </div>

            <div className="bg-[#EEEEFF] border border-indigo-100 rounded-[12px] p-4 text-center">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-extrabold text-[#4A4AE0] block">
                Present
              </span>
              <span className="font-['Inter',sans-serif] text-[11.5px] text-[#4A4AE0]">
                Attendance status
              </span>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 13. SECTION: Time-off and attendance stay connected (Figma Exact Specs) ─── */
const SectionTimeOffAttendance: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Time-off Request',
      desc: 'Employee submits a Time-off request.',
    },
    {
      num: '02',
      title: 'Approved',
      desc: 'Manager reviews and approves.',
    },
    {
      num: '03',
      title: 'Attendance Calendar',
      desc: 'The day updates automatically.',
    },
    {
      num: '04',
      title: 'On Time-off',
      desc: 'Reflected clearly across records.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[24px]">
        {/* Header */}
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[620px]">
            Time-off and attendance stay connected
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[514px]">
            Approved Time-off appears naturally within attendance context — no disconnected HR records.
          </p>
        </FadeUp>

        {/* Step Row */}
        <div className="w-full max-w-[760px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 pt-[27.99px] mx-auto">
          {steps.map((step, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="flex flex-col items-start px-[20px] pb-[19.54px] gap-[8px] relative group min-h-[160px]">
                {/* Step Num Badge */}
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#EEEEFF] flex items-center justify-center shrink-0">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] leading-[20px] text-[#5C5CFF]">
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <div className="pt-[9px] pb-[0.55px] w-full">
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] leading-[20px] tracking-[-0.34px] text-[#111827]">
                    {step.title}
                  </h4>
                </div>

                {/* Desc */}
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[23px] text-[#6B7280] w-full">
                  {step.desc}
                </p>

                {/* Connector line between steps on desktop */}
                {index < 3 && (
                  <div
                    className="hidden lg:block absolute right-[-10px] top-[26px] w-[40px] h-[2px] z-10 pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, #E5E7EB 0%, #E5E7EB 15%, rgba(229, 231, 235, 0) 15%, rgba(229, 231, 235, 0) 30%)',
                    }}
                  />
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Link */}
        <FadeUp className="pt-2 text-center">
          <a
            href="#simplify-Time-off"
            className="font-['Inter',sans-serif] font-bold text-[15px] leading-[18px] text-[#5C5CFF] hover:underline inline-flex items-center gap-1"
          >
            Explore Time-off Management →
          </a>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ─── 14. SECTION: Give HR the full picture (HR Dashboard Table) ─── */
const SectionHROverview: React.FC = () => {
  const hrRows = [
    {
      initials: 'SA',
      name: 'Sarah Anderson',
      shift: '09:30–06:30',
      checkIn: '09:32 AM',
      checkOut: '06:14 PM',
      hours: '8h 42m',
      status: 'Present',
      statusBg: 'bg-[#EAFBF3]',
      statusColor: 'text-[#15803D]',
      bgColor: 'bg-[#5C5CFF]',
    },
    {
      initials: 'MK',
      name: 'Michael Kim',
      shift: '09:30–06:30',
      checkIn: '09:58 AM',
      checkOut: '06:20 PM',
      hours: '8h 22m',
      status: 'Late',
      statusBg: 'bg-[#FEF3E2]',
      statusColor: 'text-[#B45309]',
      bgColor: 'bg-[#F59E0B]',
    },
    {
      initials: 'PR',
      name: 'Priya Rao',
      shift: '10:00–07:00',
      checkIn: '—',
      checkOut: '—',
      hours: '—',
      status: 'WFH',
      statusBg: 'bg-[#EEEEFF]',
      statusColor: 'text-[#5C5CFF]',
      bgColor: 'bg-[#22C55E]',
    },
  ];

  return (
    <section className="w-full py-[80px] px-6 lg:px-[80px] bg-[rgba(120,90,253,0.15)]">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[575px]">
            Give HR the full picture
          </h2>
        </FadeUp>

        <FadeUp className="w-full max-w-[1152px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs">
          {/* Top Filters */}
          <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[16px] flex flex-wrap items-center justify-between gap-[10px]">
            <div className="flex items-center gap-[10px]">
              {['Overview', 'Records', 'Requests', 'Calendar'].map((chip, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-[#E5E7EB] text-[#6B7280] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] px-[14px] py-[6px] rounded-full cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-[10px]">
              {['Date', 'Department', 'Status'].map((chip, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-[#E5E7EB] text-[#6B7280] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] px-[14px] py-[6px] rounded-full cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-white border-b border-[#E5E7EB] text-[10.5px] font-['Inter',sans-serif] font-bold uppercase tracking-wider text-[#6B7280] h-[37px]">
                  <th className="pl-[18px] py-2">EMPLOYEE</th>
                  <th className="py-2">SHIFT</th>
                  <th className="py-2">CHECK IN</th>
                  <th className="py-2">CHECK OUT</th>
                  <th className="py-2">HOURS</th>
                  <th className="pr-[18px] py-2">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {hrRows.map((row, idx) => (
                  <tr key={idx} className="h-[49px] text-[12.5px] font-['Inter',sans-serif] text-[#111827] hover:bg-slate-50/50 transition-colors">
                    <td className="pl-[18px] py-2">
                      <div className="flex items-center gap-[8px]">
                        <span className={`w-[24px] h-[24px] rounded-full ${row.bgColor} text-white font-bold text-[10px] flex items-center justify-center shrink-0`}>
                          {row.initials}
                        </span>
                        <span className="font-semibold">{row.name}</span>
                      </div>
                    </td>
                    <td className="py-2">{row.shift}</td>
                    <td className="py-2">{row.checkIn}</td>
                    <td className="py-2">{row.checkOut}</td>
                    <td className="py-2">{row.hours}</td>
                    <td className="pr-[18px] py-2">
                      <span className={`inline-block ${row.statusBg} ${row.statusColor} font-bold text-[10.5px] px-[9px] py-[3px] rounded-full`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ─── 15. SECTION: Configure attendance around your organization (Stateful Interactive Toggles) ─── */
const SectionAttendanceRules: React.FC = () => {
  const [settings, setSettings] = useState([
    { title: 'Working Schedule', desc: 'Standard shift timing for the organization', enabled: true },
    { title: 'Attendance Timing', desc: 'Grace period for late check-in', enabled: true },
    { title: 'Work Location', desc: 'Registered office and work locations', enabled: true },
    { title: 'Regularization Rules', desc: 'Who can request corrections and time limits', enabled: true },
    { title: 'WFH Request Configuration', desc: 'Approval requirements for work-from-home', enabled: false },
    { title: 'Holiday Calendar', desc: 'Organization-wide holidays', enabled: true },
  ]);

  const toggleSetting = (index: number) => {
    setSettings((prev) =>
      prev.map((item, idx) =>
        idx === index ? { ...item, enabled: !item.enabled } : item
      )
    );
  };

  return (
    <section className="w-full py-[80px] px-6 lg:px-[80px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[760px] mx-auto">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[759px]">
            Configure attendance around your organization
          </h2>
        </FadeUp>

        <FadeUp className="w-full max-w-[760px] bg-white border border-[#E5E7EB] rounded-[16px] p-2 divide-y divide-[#E5E7EB] shadow-xs">
          {settings.map((item, idx) => (
            <div
              key={idx}
              onClick={() => toggleSetting(idx)}
              className="p-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/70 transition-colors group rounded-[12px]"
            >
              <div className="flex flex-col">
                <span className="font-['Inter',sans-serif] font-bold text-[14px] leading-[17px] text-[#111827] group-hover:text-[#5C5CFF] transition-colors">
                  {item.title}
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[12.5px] leading-[15px] text-[#6B7280]">
                  {item.desc}
                </span>
              </div>
              <button
                type="button"
                aria-label={`Toggle ${item.title}`}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSetting(idx);
                }}
                className={`w-[44px] h-[24px] rounded-full p-[2px] transition-all duration-300 ease-in-out flex items-center cursor-pointer shadow-inner ${item.enabled
                    ? 'bg-[#5C5CFF] justify-end hover:bg-[#4F46E5]'
                    : 'bg-[#E5E7EB] justify-start hover:bg-[#D1D5DB]'
                  }`}
              >
                <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="w-[20px] h-[20px] rounded-full bg-white shadow-md transform group-hover:scale-105"
                />
              </button>
            </div>
          ))}
        </FadeUp>
      </Container>
    </section>
  );
};

/* ─── 16. SECTION: The right attendance view for every role (Role Cards) ─── */
const SectionRoleExperience: React.FC = () => {
  const roles = [
    {
      title: 'Employee',
      bullets: [
        'Check in / check out',
        'See working hours',
        'View history',
        'Request corrections',
        'Request WFH',
      ],
    },
    {
      title: 'Manager',
      bullets: [
        'View team attendance',
        'Review exceptions',
        'Approve requests',
        'Understand availability',
      ],
    },
    {
      title: 'HR / Admin',
      bullets: [
        'Manage attendance',
        'Review organization records',
        'Configure rules',
        'Manage shifts',
        'Maintain attendance visibility',
      ],
    },
  ];

  return (
    <section className="w-full py-[80px] px-6 lg:px-[80px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[741px] mx-auto">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[741px]">
            The right attendance view for every role
          </h2>
        </FadeUp>

        <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[30px] flex flex-col gap-[16px] h-full shadow-xs hover:shadow-md transition-shadow">
                <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827]">
                  {role.title}
                </h4>
                <ul className="flex flex-col gap-[11px]">
                  {role.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-[9px] font-['Inter',sans-serif] font-medium text-[14px] leading-[17px] text-[#111827]">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#5C5CFF] shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ─── 17. SECTION: Attendance wherever the workday begins (Mobile Dark Banner) ─── */
const SectionMobileExperience: React.FC = () => {
  const darkPhones = [
    {
      head: 'ATTENDANCE HOME',
      row1: '09:32 AM',
      row2: 'Checked In',
    },
    {
      head: 'CHECKED-IN STATE',
      row1: 'Working: 6h 40m',
      row2: 'Shift: 09:30–06:30',
    },
    {
      head: 'ATTENDANCE HISTORY',
      row1: 'Jul 28 — Present',
      row2: 'Jul 27 — WFH',
    },
    {
      head: 'REGULARIZATION',
      row1: 'Jul 24 — Pending',
      row2: 'Jul 18 — Approved',
    },
  ];

  return (
    <section className="w-full bg-[#0F1117] py-[75px] px-[56px] text-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[32px]">
        <FadeUp className="text-center">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[32px] sm:text-[38px] leading-[44px] tracking-[-0.76px] text-white text-center max-w-[459px]">
            Attendance wherever the workday begins
          </h2>
        </FadeUp>

        <FadeUp className="w-full max-w-[820px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mx-auto">
          {darkPhones.map((phone, idx) => (
            <div
              key={idx}
              className="bg-[#181B24] border border-[#2A2E3D] rounded-[20px] p-4 flex flex-col gap-2 h-[129px]"
            >
              <span className="font-['Inter',sans-serif] font-bold text-[10.5px] uppercase tracking-wider text-[#6B7280] block">
                {phone.head}
              </span>
              <div className="bg-[#20232E] border border-[#2A2E3D] rounded-[9px] px-[10px] py-[8px] text-[11.5px] font-semibold text-[#D1D5DB]">
                {phone.row1}
              </div>
              <div className="bg-[#20232E] border border-[#2A2E3D] rounded-[9px] px-[10px] py-[6px] text-[11.5px] font-semibold text-[#D1D5DB]">
                {phone.row2}
              </div>
            </div>
          ))}
        </FadeUp>
      </Container>
    </section>
  );
};

/* ─── 18. SECTION: More from Workzi (Product Discovery Grid) ─── */
const SectionProductDiscovery: React.FC = () => {
  const products = [
    {
      icon: '🏖',
      title: 'Time-off Management',
      desc: 'Balances, policies, requests, and approvals in one place.',
      href: '#simplify-Time-off',
    },
    {
      icon: '🗓',
      title: 'Shift Management',
      desc: 'Build schedules and shifts around how your org operates.',
      href: '#features',
    },
    {
      icon: '👥',
      title: 'Employee Management',
      desc: 'A centralized directory of employee records and profiles.',
      href: '#employee',
    },
    {
      icon: '🧾',
      title: 'Approvals',
      desc: 'Route workforce requests through clear, centralized workflows.',
      href: '#solutions',
    },
  ];

  return (
    <section className="w-full py-[80px] px-6 lg:px-[32px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="text-center">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] text-[#111827] text-center max-w-[356px]">
            More from Workzi
          </h2>
        </FadeUp>

        <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, idx) => (
            <FadeUp key={idx} delay={idx * 0.08}>
              <a
                href={p.href}
                className="bg-white border border-[#E5E7EB] rounded-[16px] p-6 flex flex-col justify-between h-[202px] shadow-xs hover:shadow-md transition-all hover:border-[#5C5CFF]/40 group block"
              >
                <div>
                  <div className="w-[36px] h-[36px] rounded-[9px] bg-[#EEEEFF] flex items-center justify-center text-[16px] mb-3">
                    {p.icon}
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15.5px] leading-[18px] tracking-[-0.31px] text-[#111827] mb-1">
                    {p.title}
                  </h4>
                  <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] text-[#6B7280]">
                    {p.desc}
                  </p>
                </div>
                <span className="font-['Inter',sans-serif] font-semibold text-[15px] leading-[18px] text-[#5C5CFF] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 mt-2">
                  Explore →
                </span>
              </a>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ─── 19. FAQ SECTION (Figma Exact CSS Specs) ─── */
const AttendanceFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can attendance work offline?',
      answer:
        'Workzi uses GPS-based geo-fencing to verify that employees are within the designated office range before they can check in. Once verified, the check-in is recorded with a timestamp and location. Employees can also view their shift overview and daily attendance history directly in the app.',
    },
    {
      question: 'Does it support QR attendance?',
      answer:
        'Every class can generate a rotating QR code, alongside face recognition and GPS-verified check-in as alternatives.',
    },
    {
      question: 'Can faculty manage attendance?',
      answer:
        'Faculty can review, approve, and correct attendance for their own classes directly from the faculty app.',
    },
    {
      question: 'Can departments have separate dashboards?',
      answer:
        'Each department gets its own HOD dashboard with faculty, semester and program-level data isolated from other departments.',
    },
    {
      question: 'Can library attendance sync with students?',
      answer:
        'Library issue, return and fine records are tied to each student\'s profile alongside their attendance history.',
    },
    {
      question: 'Can parents receive attendance notifications?',
      answer:
        'Parents can be added as guardians on a student profile and receive attendance and exam notifications automatically.',
    },
    {
      question: 'Can attendance integrate with ERP?',
      answer:
        'Workzi Education connects to common campus ERP systems for student, faculty and academic-record synchronization.',
    },
    {
      question: 'Can students access their timetable?',
      answer:
        'Students see their live weekly timetable, including room and faculty changes, directly in the student app.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[900px] mx-auto flex flex-col items-center gap-[64px]">
        {/* Header */}
        <FadeUp className="flex flex-col items-center text-center max-w-[640px] gap-[14px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] leading-[46px] text-[#111827] text-center max-w-[571px]">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[28px] text-[#6B7280] text-center max-w-[530px]">
            Everything institutions ask before switching to Workzi Education.
          </p>
        </FadeUp>

        {/* FAQ List */}
        <div className="w-full max-w-[850px] flex flex-col divide-y divide-slate-100 border-t border-b border-slate-100">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <FadeUp key={idx} delay={idx * 0.04}>
                <div className="w-full">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between py-5 sm:py-6 text-left cursor-pointer group"
                  >
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] sm:text-[17px] leading-[24px] text-[#111827] group-hover:text-[#5B5FFF] transition-colors pr-6">
                      {faq.question}
                    </span>
                    <div
                      className={`w-[34px] h-[34px] rounded-[10px] flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#5B5FFF] text-white' : 'bg-[#EEF2FF] text-[#5B5FFF] group-hover:bg-[#5B5FFF] group-hover:text-white'
                        }`}
                    >
                      {isOpen ? <X size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
                    </div>
                  </button>

                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="font-['Inter',sans-serif] font-normal text-[14.5px] sm:text-[15px] leading-[26px] text-[#6B7280] max-w-[780px] pb-6 pr-8"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

/* ─── 20. BOTTOM CTA SECTION (Figma Exact CSS Specs) ─── */
const AttendanceCTA: React.FC = () => (
  <section className="w-full py-[72px] px-6 lg:px-[128px] bg-white">
    <Container className="max-w-[1216px] mx-auto">
      <div
        className="rounded-[32px] py-[72px] px-6 sm:px-[100px] lg:px-[168px] text-center text-white flex flex-col items-center gap-[14px] shadow-2xl relative overflow-hidden"
        style={{
          background:
            'linear-gradient(98.16deg, #9AA0FF 0.73%, #5B5FFF 58.51%, #8A8AFF 105.78%), linear-gradient(106.34deg, #0A0F2E 0%, #161D4A 40%, #1E2560 100%)',
        }}
      >
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.2] lg:leading-[64px] tracking-[-1.12px] text-white max-w-[634px] text-center">
          Make attendance simple from day one
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-white/85 max-w-[511px] text-center">
          Give employees an easier way to manage attendance and give your organization the visibility it needs.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-[12px] pt-[22.7px] w-full max-w-[880px]">
          <a
            href="#pricing"
            className="bg-white hover:bg-slate-50 text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[24px] py-[14px] rounded-[100px] transition-all shadow-md cursor-pointer flex items-center justify-center min-w-[133px] h-[52px]"
          >
            Get Started
          </a>
          <a
            href="#pricing"
            className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[24px] py-[12px] rounded-[100px] transition-all cursor-pointer flex items-center justify-center min-w-[145px] h-[52px]"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </Container>
  </section>
);

/* ─── MAIN ATTENDANCE MANAGEMENT PAGE COMPONENT ─── */
export const AttendanceManagementPage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <AttendanceHero />
      <AttendanceWorkflow />
      <SectionCheckingIn />
      <SectionKnowWhere />
      <SectionSeeWorkday />
      <SectionAttendanceHistory />
      <SectionMonthlySummary />
      <SectionTeamAttendance />
      <SectionMistakesFix />
      <SectionWFHWorkflow />
      <SectionCalendarContext />
      <SectionScheduleIntegration />
      <SectionTimeOffAttendance />
      <SectionHROverview />
      <SectionAttendanceRules />
      <SectionRoleExperience />
      <SectionMobileExperience />
      <SectionProductDiscovery />
      <AttendanceFAQ />
      <AttendanceCTA />
    </div>
  );
};

export default AttendanceManagementPage;
