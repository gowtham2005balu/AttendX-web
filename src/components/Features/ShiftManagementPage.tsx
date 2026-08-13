import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  Plus,
  X,
} from 'lucide-react';

/* ─── Hero Graphic Component for Shift Management ─── */
const ShiftManagementHeroChart: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[573px] h-[380px] sm:h-[430px] rounded-[24px] p-5 sm:p-6 flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
      }}
    >
      {/* Left Card — Shift Roster Grid */}
      <div
        className="absolute bg-white border border-[#E5E7EB] rounded-[20px] p-[16px] flex flex-col justify-between z-10"
        style={{
          width: '240px',
          height: '270px',
          left: '30px',
          top: '40px',
          boxShadow: '0px 20px 40px -18px rgba(17, 24, 39, 0.2)',
        }}
      >
        <div>
          <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[13px] uppercase text-[#6B7280] block mb-2">
            WEEKLY ROSTER GRID
          </span>
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] leading-[22px] text-[#111827] block mb-3">
            Engineering Team
          </span>

          <div className="space-y-[8px] text-[11.5px] font-['Inter',sans-serif]">
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827]">Sarah A.</span>
              <span className="bg-[#EEEEFF] text-[#5C5CFF] font-bold px-2 py-0.5 rounded text-[10px]">SHIFT A (09:30)</span>
            </div>
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827]">Michael K.</span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold px-2 py-0.5 rounded text-[10px]">SHIFT B (14:00)</span>
            </div>
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827]">Priya R.</span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold px-2 py-0.5 rounded text-[10px]">NIGHT (22:00)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card — Today's Shift Card */}
      <div
        className="absolute bg-white border border-[#E5E7EB] rounded-[20px] p-[18px] flex flex-col justify-between z-20"
        style={{
          width: '240px',
          height: '270px',
          right: '30px',
          bottom: '40px',
          boxShadow: '0px 20px 40px -18px rgba(17, 24, 39, 0.2)',
        }}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[13px] uppercase text-[#6B7280]">
              TODAY&apos;S SHIFT
            </span>
            <span className="bg-[#EAFBF3] text-[#15803D] text-[10.5px] font-bold px-[8px] py-[3px] rounded-full">
              Active
            </span>
          </div>

          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[22px] leading-[28px] text-[#111827] block">
            Standard Shift
          </span>
          <span className="font-['Inter',sans-serif] font-bold text-[14px] leading-[18px] text-[#5C5CFF] block mt-1 mb-3">
            09:30 AM — 06:30 PM
          </span>

          <div className="space-y-[8px]">
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-[10px] py-[7px] text-[11.5px] flex justify-between">
              <span className="text-[#6B7280]">Grace Period:</span>
              <span className="font-semibold text-[#111827]">15 Mins</span>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-[10px] py-[7px] text-[11.5px] flex justify-between">
              <span className="text-[#6B7280]">Break Duration:</span>
              <span className="font-semibold text-[#111827]">1 Hour</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#5C5CFF] text-white font-['Inter',sans-serif] font-bold text-[12.5px] py-[9.5px] rounded-[10px]">
          View Full Week
        </button>
      </div>
    </div>
  );
};

/* ─── FadeUp Animation Helper ─── */
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
const ShiftHero: React.FC = () => (
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
          <span className="font-semibold text-[#111827]">Shift Management</span>
        </div>
      </div>
    </div>

    <section id="hero" className="w-full max-w-[1289px] mx-auto px-6 lg:px-0 pt-[40px] lg:pt-[60px] pb-[50px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        <div className="flex flex-col items-start w-full lg:w-[656px] gap-[17px] shrink-0">

          <div className="w-full max-w-[760px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.15] lg:leading-[60px] tracking-[-1.04px] text-[#111827]">
              Shifts that everyone actually knows about
            </h1>
          </div>

          <div className="w-full lg:w-[577px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280]">
              Build a schedule once. Assign it in seconds. Workzi keeps every employee, manager and HR admin looking at the same shift — no more &quot;wait, what time do I start today?&quot;
            </p>
          </div>

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

        <div className="w-full lg:w-[573px] flex items-center justify-center shrink-0">
          <ShiftManagementHeroChart />
        </div>
      </div>
    </section>

    <div className="w-full bg-white py-[36px] px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-[20px] overflow-x-auto no-scrollbar">
        {[
          'Reusable shift templates',
          'Rotating shift automation',
          'Automatic grace periods',
          'Department-wise scheduling',
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

/* ─── 2. SECTION 1 — How it works ─── */
const SectionHowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'HR builds the shift',
      desc: 'Define timing, grace period and rules once.',
    },
    {
      num: '02',
      title: 'Shift gets assigned',
      desc: 'To an individual, a team, or a whole department.',
    },
    {
      num: '03',
      title: 'Employees see it',
      desc: 'Today\'s shift, tomorrow\'s shift, always visible.',
    },
    {
      num: '04',
      title: 'Attendance uses it',
      desc: 'Check-ins are measured against the assigned shift automatically.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[598px]">
            From schedule to shift, without the guesswork
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[536px]">
            A shift is only useful if everyone can see it. Workzi connects shift creation straight through to attendance, so schedules aren&apos;t just a document somewhere — they&apos;re live.
          </p>
        </FadeUp>

        <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {steps.map((step, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="flex flex-col items-start px-5 pb-[23px] gap-2 relative group min-h-[163.64px]">
                <div className="w-[48px] h-[48px] rounded-[12px] bg-[#EEEEFF] flex items-center justify-center shrink-0">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] leading-[20px] text-[#5C5CFF]">
                    {step.num}
                  </span>
                </div>

                <div className="pt-[9px] pb-[0.55px] w-full">
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[17px] leading-[20px] tracking-[-0.34px] text-[#111827]">
                    {step.title}
                  </h4>
                </div>

                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[23px] text-[#6B7280] w-full">
                  {step.desc}
                </p>

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

/* ─── 3. SECTION 2 — Employee Experience ─── */
const SectionEmployeeExperience: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Employee Experience
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Know your shift without asking your manager
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          No more DMing your manager to confirm start time. Employees see their assigned shift — today, this week, and any upcoming changes — right on their dashboard.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Today\'s shift, visible at a glance',
            'Weekly and monthly shift view',
            'Notified automatically when a shift changes',
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

      {/* Visual: "My Shift" Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[16px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] leading-[22px] text-[#111827]">
              My Assigned Schedule
            </span>

            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] p-3 flex justify-between items-center">
              <div>
                <span className="text-[11px] font-bold uppercase text-[#6B7280] block">TODAY</span>
                <span className="text-[16px] font-extrabold text-[#111827]">09:30 AM — 06:30 PM</span>
              </div>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] px-2.5 py-1 rounded-full">
                Standard Shift
              </span>
            </div>

            {/* Weekly Strip */}
            <div className="space-y-1">
              <span className="text-[11px] font-bold uppercase text-[#6B7280]">THIS WEEK</span>
              <div className="grid grid-cols-5 gap-1.5 text-center text-[11px] font-bold">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => (
                  <div key={i} className="bg-[#EEEEFF] border border-indigo-100 rounded-[8px] py-2 text-[#5C5CFF]">
                    {d}
                    <span className="block text-[9.5px] font-normal text-[#6B7280]">09:30</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 4. SECTION 3 — Shift Configuration ─── */
const SectionShiftConfiguration: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Visual: Shift Builder Form */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Shift Template Builder
            </span>

            <div className="space-y-3 text-[12.5px]">
              <div>
                <label className="block text-[11px] font-bold text-[#6B7280] uppercase mb-1">Shift Name</label>
                <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 font-medium text-[#111827]">
                  Morning Shift A
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-[#6B7280] uppercase mb-1">Start Time</label>
                  <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 font-medium text-[#111827]">
                    09:30 AM
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#6B7280] uppercase mb-1">End Time</label>
                  <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 font-medium text-[#111827]">
                    06:30 PM
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#6B7280] uppercase mb-1">Grace Period</label>
                <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 font-medium text-[#111827]">
                  15 Minutes
                </div>
              </div>
            </div>

            <button className="w-full bg-[#5C5CFF] text-white font-['Inter',sans-serif] font-bold text-[12.5px] py-[10px] rounded-[10px]">
              Save Shift Template
            </button>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Shift Configuration
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Build a shift once, reuse it everywhere
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Standard shift, night shift, split shift — define the timing and rules once, then apply it wherever it&apos;s needed instead of recreating it for every team.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Custom shift timings, per role or department',
            'Configurable grace periods for late check-ins',
            'Reusable shift templates across teams',
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

/* ─── 5. SECTION 4 — Multiple & Rotating Shifts ─── */
const SectionRotatingShifts: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Rotating Shifts
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Not every team works the same hours — and that&apos;s fine
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Support for fixed, rotating, and split shifts means Workzi fits how your business actually runs, whether that&apos;s a 9-to-6 office or a 24/7 operation.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Fixed, rotating and split shift types',
            'Automatic rotation on a defined cycle',
            'Multiple shifts running in parallel across departments',
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

      {/* Visual: Rotating Shift Calendar */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Rotating Shift Cycle
            </span>

            <div className="space-y-2.5 font-['Inter',sans-serif] text-[12.5px]">
              <div className="p-3 bg-[#EEEEFF] border border-indigo-100 rounded-[10px] flex justify-between items-center font-semibold text-[#5C5CFF]">
                <span>Week 1 — Morning Shift</span>
                <span>08:00 — 16:00</span>
              </div>
              <div className="p-3 bg-[#FEF3E2] border border-amber-100 rounded-[10px] flex justify-between items-center font-semibold text-[#B45309]">
                <span>Week 2 — Evening Shift</span>
                <span>16:00 — 00:00</span>
              </div>
              <div className="p-3 bg-[#EAFBF3] border border-emerald-100 rounded-[10px] flex justify-between items-center font-semibold text-[#15803D]">
                <span>Week 3 — Night Shift</span>
                <span>00:00 — 08:00</span>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 6. SECTION 5 — Manager View (Team Roster Grid) ─── */
const SectionManagerView: React.FC = () => {
  const rosterRows = [
    { name: 'Sarah Anderson', mon: 'Shift A', tue: 'Shift A', wed: 'Shift A', thu: 'Shift A', fri: 'Shift A' },
    { name: 'Michael Kim', mon: 'Shift B', tue: 'Shift B', wed: 'Shift B', thu: 'Shift B', fri: 'OFF' },
    { name: 'Priya Rao', mon: 'Night', tue: 'Night', wed: 'Night', thu: 'OFF', fri: 'Night' },
  ];

  return (
    <section className="w-full py-[80px] px-6 lg:px-[80px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] leading-[46px] tracking-[-0.8px] text-[#111827] text-center max-w-[566px]">
            Assign shifts without the spreadsheet juggling
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[522px]">
            Managers assign shifts to their team directly, see who&apos;s on which shift this week, and catch scheduling gaps before they turn into a coverage problem.
          </p>
        </FadeUp>

        <FadeUp className="w-full max-w-[1216px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs">
          <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[16px] flex items-center justify-between">
            <span className="font-bold text-[#111827] text-[14px]">Team Shift Roster</span>
            <div className="flex gap-2">
              <span className="bg-[#EEEEFF] text-[#5C5CFF] font-bold text-[11px] px-2.5 py-1 rounded-full">Shift A</span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[11px] px-2.5 py-1 rounded-full">Shift B</span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] px-2.5 py-1 rounded-full">Night</span>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#F8FAFC] text-[10.5px] font-['Inter',sans-serif] font-bold uppercase tracking-wider text-[#6B7280] h-[37px]">
                  <th className="pl-[18px] py-2">EMPLOYEE</th>
                  <th className="py-2">MON</th>
                  <th className="py-2">TUE</th>
                  <th className="py-2">WED</th>
                  <th className="py-2">THU</th>
                  <th className="pr-[18px] py-2">FRI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {rosterRows.map((row, idx) => (
                  <tr key={idx} className="h-[49px] text-[12.5px] font-['Inter',sans-serif] text-[#111827] hover:bg-slate-50/50 transition-colors">
                    <td className="pl-[18px] py-2 font-semibold">{row.name}</td>
                    <td className="py-2 font-medium">{row.mon}</td>
                    <td className="py-2 font-medium">{row.tue}</td>
                    <td className="py-2 font-medium">{row.wed}</td>
                    <td className="py-2 font-medium">{row.thu}</td>
                    <td className="pr-[18px] py-2 font-medium">{row.fri}</td>
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

/* ─── 7. SECTION 6 — Attendance Integration ─── */
const SectionAttendanceIntegration: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Attendance Integration
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Shifts and attendance, reading from the same page
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          A check-in only makes sense in context. Workzi compares every check-in against the assigned shift automatically — so &quot;late&quot; and &quot;on time&quot; are calculated, not guessed.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Automatic shift-vs-check-in comparison',
            'Grace period applied before marking "Late"',
            'Status updates itself — no manual tagging',
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

        <a
          href="#track-attendance"
          className="font-['Inter',sans-serif] font-bold text-[15px] leading-[18px] text-[#5C5CFF] hover:underline inline-flex items-center gap-1 mt-2"
        >
          Explore Attendance Management →
        </a>
      </FadeUp>

      {/* Visual: Shift Comparison Card */}
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

            <div className="bg-[#EAFBF3] border border-emerald-100 rounded-[12px] p-4 text-center">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-extrabold text-[#15803D] block">
                Present (On Time)
              </span>
              <span className="font-['Inter',sans-serif] text-[11.5px] text-[#15803D]">
                Checked in within 15m grace period
              </span>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 8. SECTION 7 — Department-Wise Shifts ─── */
const SectionDepartmentShifts: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Visual: Department Breakdown Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Department Schedules
            </span>

            <div className="space-y-2.5 font-['Inter',sans-serif] text-[12.5px]">
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <span className="font-bold text-[#111827]">Sales Department</span>
                <span className="font-semibold text-[#5C5CFF]">10:00 AM — 07:00 PM</span>
              </div>
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <span className="font-bold text-[#111827]">Engineering</span>
                <span className="font-semibold text-[#5C5CFF]">09:30 AM — 06:30 PM</span>
              </div>
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <span className="font-bold text-[#111827]">Customer Support</span>
                <span className="font-semibold text-[#5C5CFF]">Rotating (3 Shifts 24/7)</span>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Department Shifts
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Different teams, different schedules, one system
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Sales might run 10-to-7. Support might run in rotating night shifts. Workzi handles department-specific scheduling without needing separate tools for each.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Department or team-level shift assignment',
            'Location-specific shift timing where needed',
            'Bulk assignment for large teams',
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

/* ─── 9. SECTION 8 — HR / Admin View ─── */
const SectionHROverview: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[80px] bg-[rgba(120,90,253,0.15)]">
    <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[575px]">
          Give HR full control over how work gets scheduled
        </h2>
      </FadeUp>

      <FadeUp className="w-full max-w-[1152px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs p-6">
        <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[14px] flex items-center gap-[12px] rounded-[12px] mb-6">
          {['Shifts', 'Assignments', 'Coverage'].map((tab, idx) => (
            <span
              key={idx}
              className={`font-['Inter',sans-serif] font-semibold text-[13px] px-[16px] py-[8px] rounded-full cursor-pointer transition-colors ${
                idx === 0 ? 'bg-[#5C5CFF] text-white' : 'bg-white border border-[#E5E7EB] text-[#6B7280]'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Shift Templates</h4>
            <p className="text-[#6B7280] text-[13px]">Create reusable shift templates org-wide with custom grace periods.</p>
          </div>
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Bulk Assignment</h4>
            <p className="text-[#6B7280] text-[13px]">Bulk assign shifts across departments or remote locations instantly.</p>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 10. SECTION 9 — Role-Based Access Cards ─── */
const SectionRoleExperience: React.FC = () => {
  const roles = [
    {
      title: 'Employee',
      bullets: [
        'View assigned shift',
        'See weekly/monthly schedule',
        'Get notified of shift changes',
      ],
    },
    {
      title: 'Manager',
      bullets: [
        'Assign shifts to team',
        'View team roster',
        'Spot coverage gaps',
        'Reassign shifts',
      ],
    },
    {
      title: 'HR / Admin',
      bullets: [
        'Create shift templates',
        'Configure grace periods',
        'Manage rotations org-wide',
        'Bulk assign shifts',
      ],
    },
  ];

  return (
    <section className="w-full py-[80px] px-6 lg:px-[80px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[741px] mx-auto">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[741px]">
            The right view, for every role
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

/* ─── 11. FAQ SECTION ─── */
const ShiftFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can Workzi handle rotating shifts?',
      answer: 'Yes. Shifts can rotate on a defined cycle — weekly, biweekly, or however your team operates — and update automatically for every employee on the rotation.',
    },
    {
      question: 'Does a late check-in get flagged immediately?',
      answer: 'No. Each shift has a configurable grace period, so employees aren\'t marked late for a few minutes\' delay.',
    },
    {
      question: 'Can different departments have different shift timings?',
      answer: 'Yes. Shifts can be assigned at the individual, team or department level, so Sales and Support can run completely different schedules.',
    },
    {
      question: 'Does shift data feed into attendance automatically?',
      answer: 'Yes. Every check-in is compared against the assigned shift automatically — there\'s no manual matching required.',
    },
    {
      question: 'Can employees see upcoming shift changes in advance?',
      answer: 'Yes. Employees are notified when their shift changes, and can view their schedule for the current and upcoming week.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[900px] mx-auto flex flex-col items-center gap-[64px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[640px] gap-[14px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] leading-[46px] text-[#111827] text-center max-w-[571px]">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[28px] text-[#6B7280] text-center max-w-[530px]">
            Everything you need to know about Workzi shift management.
          </p>
        </FadeUp>

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
                      className={`w-[34px] h-[34px] rounded-[10px] flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#5B5FFF] text-white' : 'bg-[#EEF2FF] text-[#5B5FFF] group-hover:bg-[#5B5FFF] group-hover:text-white'
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

/* ─── 12. CLOSING CTA SECTION ─── */
const ShiftCTA: React.FC = () => (
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
          Build schedules your whole team can trust
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-white/85 max-w-[511px] text-center">
          Set up shifts once, and let Workzi keep everyone — employees, managers and HR — looking at the same schedule.
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

/* ─── MAIN SHIFT MANAGEMENT PAGE COMPONENT ─── */
export const ShiftManagementPage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <ShiftHero />
      <SectionHowItWorks />
      <SectionEmployeeExperience />
      <SectionShiftConfiguration />
      <SectionRotatingShifts />
      <SectionManagerView />
      <SectionAttendanceIntegration />
      <SectionDepartmentShifts />
      <SectionHROverview />
      <SectionRoleExperience />
      <ShiftFAQ />
      <ShiftCTA />
    </div>
  );
};

export default ShiftManagementPage;
