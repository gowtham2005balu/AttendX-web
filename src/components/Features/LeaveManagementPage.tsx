import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  ArrowRight,
  Plus,
  X,
} from 'lucide-react';

/* ─── Hero Graphic Component for Leave Management ─── */
const LeaveManagementHeroChart: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[573px] h-[380px] sm:h-[430px] rounded-[24px] p-5 sm:p-6 flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
      }}
    >
      {/* Left Card — Leave Balance */}
      <div
        className="absolute bg-white border border-[#E5E7EB] rounded-[20px] p-[18px] flex flex-col justify-between z-10"
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
            LEAVE BALANCE
          </span>
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[24px] leading-[30px] text-[#111827] block">
            19 Days
          </span>
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#6B7280] block mt-1 mb-3">
            Available Remaining
          </span>

          <div className="space-y-[9px]">
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-[12px] py-[8px] flex justify-between items-center text-[12px]">
              <span className="font-medium text-[#6B7280]">Casual Leave</span>
              <span className="font-bold text-[#111827]">6/12 left</span>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-[12px] py-[8px] flex justify-between items-center text-[12px]">
              <span className="font-medium text-[#6B7280]">Sick Leave</span>
              <span className="font-bold text-[#111827]">4/8 left</span>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-[12px] py-[8px] flex justify-between items-center text-[12px]">
              <span className="font-medium text-[#6B7280]">Earned Leave</span>
              <span className="font-bold text-[#111827]">9/15 left</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card — Leave Request Mid-Approval */}
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
              REQUEST STATUS
            </span>
            <span className="bg-[#FEF3E2] text-[#B45309] text-[10.5px] font-bold px-[8px] py-[3px] rounded-full">
              Pending
            </span>
          </div>

          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[20px] leading-[26px] text-[#111827] block">
            Casual Leave
          </span>
          <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#5C5CFF] block mt-0.5 mb-3">
            Aug 12 — Aug 14 (3 days)
          </span>

          <div className="space-y-[8px]">
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-[10px] py-[7px] text-[11.5px]">
              <span className="text-[#6B7280] block text-[10px]">Reason:</span>
              <span className="font-medium text-[#111827]">Personal work</span>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-[10px] py-[7px] text-[11.5px] flex justify-between">
              <span className="text-[#6B7280]">Approver:</span>
              <span className="font-semibold text-[#111827]">Alex Morgan</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 pt-2">
          <button className="flex-1 bg-[#5C5CFF] text-white font-['Inter',sans-serif] font-bold text-[12px] py-[9px] rounded-[10px]">
            Approve
          </button>
          <button className="flex-1 bg-slate-100 text-[#6B7280] font-['Inter',sans-serif] font-bold text-[12px] py-[9px] rounded-[10px]">
            Decline
          </button>
        </div>
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
const LeaveHero: React.FC = () => (
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
          <span className="font-semibold text-[#111827]">Leave Management</span>
        </div>
      </div>
    </div>

    {/* HERO — Main Content */}
    <section id="hero" className="w-full max-w-[1289px] mx-auto px-6 lg:px-0 pt-[40px] lg:pt-[60px] pb-[50px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        {/* Left Column */}
        <div className="flex flex-col items-start w-full lg:w-[656px] gap-[17px] shrink-0">

          <div className="w-full max-w-[760px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.15] lg:leading-[60px] tracking-[-1.04px] text-[#111827]">
              Leave, without the chasing
            </h1>
          </div>

          <div className="w-full lg:w-[577px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280]">
              Apply in a few taps. Get approved without a follow-up message. Workzi turns leave from a back-and-forth into a flow everyone can trust — employees, managers and HR included.
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

        {/* Right Column Visual */}
        <div className="w-full lg:w-[573px] flex items-center justify-center shrink-0">
          <LeaveManagementHeroChart />
        </div>
      </div>
    </section>

    {/* VALUE STRIP */}
    <div className="w-full bg-white py-[36px] px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-[20px] overflow-x-auto no-scrollbar">
        {[
          'Real-time leave balance',
          'Automated approval chains',
          'Team availability calendar',
          'Syncs with attendance',
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
      title: 'Employee applies',
      desc: 'Pick the dates, add a reason, submit.',
    },
    {
      num: '02',
      title: 'Manager reviews',
      desc: 'Request shows up with balance and context, ready to decide.',
    },
    {
      num: '03',
      title: 'Approved or declined',
      desc: 'One tap, with a note if needed.',
    },
    {
      num: '04',
      title: 'Everything updates',
      desc: 'Balance, calendar and attendance reflect it automatically.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[598px]">
            From request to record, in one flow
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[536px]">
            Leave shouldn&apos;t need a spreadsheet, a Slack message, and a manager&apos;s memory. Workzi connects every step, so nothing falls through.
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
          Applying for leave should take less time than explaining it
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          No forms to hunt for, no waiting on a reply to know where things stand. Employees see their balance, apply, and track status — all from one screen.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Apply in a few taps, from any device',
            'See live status: Pending, Approved, Declined',
            'Cancel or edit a request before it\'s approved',
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

      {/* Visual: Leave Request Form + Status Timeline */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[16px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] leading-[22px] text-[#111827]">
              Apply for Leave
            </span>

            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-[#6B7280] uppercase mb-1">Leave Type</label>
                <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[13px] font-medium text-[#111827]">
                  Casual Leave (6 days left)
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#6B7280] uppercase mb-1">Date Range</label>
                <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[13px] font-medium text-[#111827]">
                  Aug 12, 2026 — Aug 14, 2026 (3 Days)
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#6B7280] uppercase mb-1">Reason</label>
                <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[13px] font-medium text-[#111827]">
                  Personal family function
                </div>
              </div>
            </div>

            {/* Status Timeline */}
            <div className="bg-[#EEEEFF] border border-indigo-100 rounded-[12px] p-3 flex items-center justify-between text-[11.5px] font-bold">
              <span className="text-[#5C5CFF]">1. Applied ✓</span>
              <span className="text-[#5C5CFF]">2. Under Review...</span>
              <span className="text-[#9CA3AF]">3. Approved</span>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 4. SECTION 3 — Leave Balance ─── */
const SectionLeaveBalance: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Visual: Balance Summary Card with Progress Bars */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[18px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Real-time Leave Balances
            </span>

            {/* Casual Leave */}
            <div className="space-y-1">
              <div className="flex justify-between text-[13px] font-semibold text-[#111827]">
                <span>Casual Leave</span>
                <span>6 / 12 Days Remaining</span>
              </div>
              <div className="w-full h-[8px] bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[50%] h-full bg-[#5C5CFF] rounded-full" />
              </div>
            </div>

            {/* Sick Leave */}
            <div className="space-y-1">
              <div className="flex justify-between text-[13px] font-semibold text-[#111827]">
                <span>Sick Leave</span>
                <span>4 / 8 Days Remaining</span>
              </div>
              <div className="w-full h-[8px] bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[50%] h-full bg-[#10B981] rounded-full" />
              </div>
            </div>

            {/* Earned Leave */}
            <div className="space-y-1">
              <div className="flex justify-between text-[13px] font-semibold text-[#111827]">
                <span>Earned Leave</span>
                <span>9 / 15 Days Remaining</span>
              </div>
              <div className="w-full h-[8px] bg-slate-100 rounded-full overflow-hidden">
                <div className="w-[60%] h-full bg-[#F59E0B] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Leave Balance
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Balance, in real time — not &quot;let me check with HR&quot;
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Every leave type, every balance, updated the moment a request is approved. No inquiries, no guesswork, no end-of-year surprises.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Real-time balance by leave type',
            'Automatic accrual based on policy',
            'Full history of used, pending and available days',
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

/* ─── 5. SECTION 4 — Approval Workflow ─── */
const SectionApprovalWorkflow: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Approval Workflow
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Approvals that don&apos;t need a nudge
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Every request lands where it needs to, with everything a manager needs to decide — no digging through email threads for context.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Requests routed to the right approver automatically',
            'Balance and history visible at the point of decision',
            'Approve, decline or request more info — all in one screen',
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

      {/* Visual: Approval Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <div className="flex justify-between items-center py-[6px] border-b border-slate-100 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
              <span className="text-[#6B7280]">Employee</span>
              <span>Sarah Anderson</span>
            </div>
            <div className="flex justify-between items-center py-[6px] border-b border-slate-100 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
              <span className="text-[#6B7280]">Leave Type</span>
              <span>Casual Leave</span>
            </div>
            <div className="flex justify-between items-center py-[6px] border-b border-slate-100 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
              <span className="text-[#6B7280]">Dates</span>
              <span>Aug 12 — Aug 14 (3 days)</span>
            </div>
            <div className="flex justify-between items-center py-[6px] border-b border-slate-100 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
              <span className="text-[#6B7280]">Balance Remaining</span>
              <span>6 Days Remaining</span>
            </div>

            <div className="flex items-center gap-[10px] pt-3">
              <button className="bg-[#EAFBF3] text-[#15803D] font-['Inter',sans-serif] font-bold text-[12px] px-[20px] py-[11px] rounded-[10px] cursor-pointer hover:bg-[#d5f7e6] transition-colors">
                Approve
              </button>
              <button className="bg-[#FEE2E2] text-[#DC2626] font-['Inter',sans-serif] font-bold text-[12px] px-[20px] py-[11px] rounded-[10px] cursor-pointer hover:bg-[#fcd0d0] transition-colors">
                Decline
              </button>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 6. SECTION 5 — Records & History Table ─── */
const SectionRecordsHistory: React.FC = () => {
  const rows = [
    { name: 'Sarah Anderson', type: 'Casual Leave', dates: 'Aug 12 — Aug 14', days: '3 Days', status: 'Approved', bg: 'bg-[#EAFBF3]', text: 'text-[#15803D]' },
    { name: 'Michael Kim', type: 'Sick Leave', dates: 'Aug 02 — Aug 03', days: '2 Days', status: 'Approved', bg: 'bg-[#EAFBF3]', text: 'text-[#15803D]' },
    { name: 'Priya Rao', type: 'Earned Leave', dates: 'Aug 18 — Aug 22', days: '5 Days', status: 'Pending', bg: 'bg-[#FEF3E2]', text: 'text-[#B45309]' },
    { name: 'David Torres', type: 'Casual Leave', dates: 'Jul 24 — Jul 24', days: '1 Day', status: 'Declined', bg: 'bg-[#FEE2E2]', text: 'text-[#DC2626]' },
  ];

  return (
    <section className="w-full py-[80px] px-6 lg:px-[80px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] leading-[46px] tracking-[-0.8px] text-[#111827] text-center max-w-[566px]">
            Every leave request, easy to find
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[522px]">
            Filter by employee, leave type, status or date range — and get exactly the record you&apos;re after, without scrolling through a year of requests.
          </p>
        </FadeUp>

        <FadeUp className="w-full max-w-[1216px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs">
          <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[16px] flex items-center gap-[10px]">
            {['All Statuses', 'Casual Leave', 'Sick Leave', 'Earned Leave'].map((chip, idx) => (
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
                  <th className="py-2">LEAVE TYPE</th>
                  <th className="py-2">DATES</th>
                  <th className="py-2">DURATION</th>
                  <th className="pr-[18px] py-2">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {rows.map((row, idx) => (
                  <tr key={idx} className="h-[49px] text-[12.5px] font-['Inter',sans-serif] text-[#111827] hover:bg-slate-50/50 transition-colors">
                    <td className="pl-[18px] py-2 font-semibold">{row.name}</td>
                    <td className="py-2">{row.type}</td>
                    <td className="py-2">{row.dates}</td>
                    <td className="py-2">{row.days}</td>
                    <td className="pr-[18px] py-2">
                      <span className={`inline-block ${row.bg} ${row.text} font-bold text-[10.5px] px-[9px] py-[3px] rounded-full`}>
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

/* ─── 7. SECTION 6 — Manager View ─── */
const SectionManagerView: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Team Availability Summary
            </span>

            <div className="space-y-2 text-[12.5px] font-['Inter',sans-serif]">
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <div>
                  <span className="font-bold text-[#111827] block">Sarah Anderson</span>
                  <span className="text-[#6B7280]">Casual Leave</span>
                </div>
                <span className="bg-[#EEEEFF] text-[#5C5CFF] font-bold px-2.5 py-1 rounded-full text-[11px]">
                  On Leave Today
                </span>
              </div>
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <div>
                  <span className="font-bold text-[#111827] block">Michael Kim</span>
                  <span className="text-[#6B7280]">Upcoming Sick Leave</span>
                </div>
                <span className="bg-[#FEF3E2] text-[#B45309] font-bold px-2.5 py-1 rounded-full text-[11px]">
                  Aug 15
                </span>
              </div>
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <div>
                  <span className="font-bold text-[#111827] block">Priya Rao</span>
                  <span className="text-[#6B7280]">Available</span>
                </div>
                <span className="bg-[#EAFBF3] text-[#15803D] font-bold px-2.5 py-1 rounded-full text-[11px]">
                  Working
                </span>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Manager Visibility
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Know your team&apos;s availability before it&apos;s a problem
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          See who&apos;s out, who&apos;s about to be, and who&apos;s pending approval — without asking around or checking five calendars.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Team leave calendar, always current',
            'Pending approvals surfaced automatically',
            'Spot overlapping leave before it becomes a staffing gap',
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

/* ─── 8. SECTION 7 — Calendar Integration ─── */
const SectionCalendarIntegration: React.FC = () => {
  const steps = [
    { num: '01', title: 'Leave requested', desc: 'Employee submits request.' },
    { num: '02', title: 'Manager approves', desc: 'Approved in one click.' },
    { num: '03', title: 'Calendar updates', desc: 'Attendance calendar syncs.' },
    { num: '04', title: 'Reflected everywhere', desc: 'Tag shows On Leave.' },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[24px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[620px]">
            Leave and attendance, finally in sync
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[514px]">
            Approved leave shouldn&apos;t live in a separate system waiting to be cross-checked. The moment it&apos;s approved, it shows up on the attendance calendar — no manual updates required.
          </p>
        </FadeUp>

        <div className="w-full max-w-[760px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 pt-[27.99px] mx-auto">
          {steps.map((step, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="flex flex-col items-start px-[20px] pb-[19.54px] gap-[8px] relative group min-h-[160px]">
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
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="pt-2 text-center">
          <a
            href="#track-attendance"
            className="font-['Inter',sans-serif] font-bold text-[15px] leading-[18px] text-[#5C5CFF] hover:underline inline-flex items-center gap-1"
          >
            Explore Attendance Management →
          </a>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ─── 9. SECTION 8 — Holiday Calendar ─── */
const SectionHolidayCalendar: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Holiday Calendar
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          One calendar, every holiday, no confusion
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Organization-wide holidays, visible to everyone, factored into leave and attendance automatically — so nobody applies for leave on a day that&apos;s already off.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Org-wide holiday list, always visible',
            'Region or location-specific holidays supported',
            'Automatically excluded from leave balance calculations',
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

      {/* Visual: Holiday List Container */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              2026 Official Holidays
            </span>

            <div className="space-y-2.5 font-['Inter',sans-serif] text-[13px]">
              <div className="p-3 bg-[#EEEEFF] border border-indigo-100 rounded-[10px] flex justify-between items-center font-semibold text-[#5C5CFF]">
                <span>Independence Day</span>
                <span>Aug 15, 2026 (Saturday)</span>
              </div>
              <div className="p-3 bg-[#EEEEFF] border border-indigo-100 rounded-[10px] flex justify-between items-center font-semibold text-[#5C5CFF]">
                <span>Labor Day</span>
                <span>Sep 07, 2026 (Monday)</span>
              </div>
              <div className="p-3 bg-[#EEEEFF] border border-indigo-100 rounded-[10px] flex justify-between items-center font-semibold text-[#5C5CFF]">
                <span>Thanksgiving</span>
                <span>Nov 26, 2026 (Thursday)</span>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 10. SECTION 9 — HR / Admin View ─── */
const SectionHROverview: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[80px] bg-[rgba(120,90,253,0.15)]">
    <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[575px]">
          Give HR the full picture, and the controls to match
        </h2>
      </FadeUp>

      <FadeUp className="w-full max-w-[1152px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs p-6">
        <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[14px] flex items-center gap-[12px] rounded-[12px] mb-6">
          {['Overview', 'Policies', 'Requests', 'Calendar Settings'].map((tab, idx) => (
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
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Leave Types & Accruals</h4>
            <p className="text-[#6B7280] text-[13px]">Configure leave types, monthly accrual rates, and carry-over limits.</p>
          </div>
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Approval Chains</h4>
            <p className="text-[#6B7280] text-[13px]">Define multi-level approval workflows by department or role.</p>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 11. SECTION 10 — Role-Based Access Cards ─── */
const SectionRoleExperience: React.FC = () => {
  const roles = [
    {
      title: 'Employee',
      bullets: [
        'Apply for leave',
        'View leave balance',
        'Cancel a pending request',
        'View leave history',
      ],
    },
    {
      title: 'Manager',
      bullets: [
        'View team leave calendar',
        'Approve or decline requests',
        'Spot overlapping leave',
        'Understand team availability',
      ],
    },
    {
      title: 'HR / Admin',
      bullets: [
        'Configure leave types & policies',
        'Set accrual rules',
        'Manage approval chains',
        'Maintain holiday calendar',
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

/* ─── 12. FAQ SECTION ─── */
const LeaveFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Does leave balance update automatically after approval?',
      answer: 'Yes. The moment a request is approved, the balance updates — no manual recalculation needed.',
    },
    {
      question: 'Can employees cancel a leave request after applying?',
      answer: 'Yes, as long as it\'s still pending approval. Once approved, cancellation follows the same review flow as the original request.',
    },
    {
      question: 'Does approved leave show up in attendance automatically?',
      answer: 'Yes. Leave and attendance are connected, so approved days reflect on the attendance calendar without any manual update.',
    },
    {
      question: 'Can different departments have different leave policies?',
      answer: 'Yes. HR can configure leave types, accrual rules and approval chains at the department or role level.',
    },
    {
      question: 'Are organization holidays factored into leave calculations?',
      answer: 'Yes. The holiday calendar is excluded automatically, so employees aren\'t charged leave for days the organization is already closed.',
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
            Everything you need to know about Workzi leave management.
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

/* ─── 13. CLOSING CTA SECTION ─── */
const LeaveCTA: React.FC = () => (
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
          Make leave simple, from the first request
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-white/85 max-w-[511px] text-center">
          Give employees a faster way to apply, and give your organization a leave process that actually holds up.
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

/* ─── MAIN LEAVE MANAGEMENT PAGE COMPONENT ─── */
export const LeaveManagementPage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <LeaveHero />
      <SectionHowItWorks />
      <SectionEmployeeExperience />
      <SectionLeaveBalance />
      <SectionApprovalWorkflow />
      <SectionRecordsHistory />
      <SectionManagerView />
      <SectionCalendarIntegration />
      <SectionHolidayCalendar />
      <SectionHROverview />
      <SectionRoleExperience />
      <LeaveFAQ />
      <LeaveCTA />
    </div>
  );
};

export default LeaveManagementPage;
