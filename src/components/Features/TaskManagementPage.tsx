import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  Plus,
  X,
  MessageSquare,
  Paperclip,
} from 'lucide-react';

/* ─── Hero Graphic Component for Task Management ─── */
const TaskManagementHeroChart: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[573px] h-[380px] sm:h-[430px] rounded-[24px] p-5 sm:p-6 flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
      }}
    >
      {/* Left Card — "My Tasks" List */}
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
            MY TASKS
          </span>
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] leading-[22px] text-[#111827] block mb-3">
            Active Assigned Work
          </span>

          <div className="space-y-[8px] text-[11.5px] font-['Inter',sans-serif]">
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827]">Q3 Roadmap Pitch</span>
              <span className="bg-[#EEEEFF] text-[#5C5CFF] font-bold px-2 py-0.5 rounded text-[10px]">In Progress</span>
            </div>
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827]">Audit Report Sync</span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold px-2 py-0.5 rounded text-[10px]">To Do</span>
            </div>
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827]">Design System V2</span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold px-2 py-0.5 rounded text-[10px]">Completed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card — Team Task Board (Overdue Flagged) */}
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
              TEAM TASK BOARD
            </span>
            <span className="bg-[#FEE2E2] text-[#DC2626] text-[10.5px] font-bold px-[8px] py-[3px] rounded-full">
              1 Overdue
            </span>
          </div>

          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[20px] leading-[26px] text-[#111827] block">
            API Security Review
          </span>
          <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#DC2626] block mt-1 mb-3">
            Due Yesterday (High Priority)
          </span>

          <div className="space-y-[8px]">
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-[10px] py-[7px] text-[11.5px] flex justify-between">
              <span className="text-[#6B7280]">Assignee:</span>
              <span className="font-semibold text-[#111827]">Alex Morgan</span>
            </div>
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-[10px] py-[7px] text-[11.5px] flex justify-between">
              <span className="text-[#6B7280]">Status:</span>
              <span className="font-semibold text-[#B45309]">Pending Review</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#5C5CFF] text-white font-['Inter',sans-serif] font-bold text-[12.5px] py-[9.5px] rounded-[10px]">
          Review Task Details
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
const TaskHero: React.FC = () => (
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
          <span className="font-semibold text-[#111827]">Task Management</span>
        </div>
      </div>
    </div>

    <section id="hero" className="w-full max-w-[1289px] mx-auto px-6 lg:px-0 pt-[40px] lg:pt-[60px] pb-[50px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        <div className="flex flex-col items-start w-full lg:w-[656px] gap-[17px] shrink-0">

          <div className="w-full max-w-[760px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.15] lg:leading-[60px] tracking-[-1.04px] text-[#111827]">
              Work that&apos;s actually visible, not scattered across five tools
            </h1>
          </div>

          <div className="w-full lg:w-[577px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280]">
              Assign it. Track it. See it through. Workzi brings task management into the same place as attendance and Time-off, so nobody&apos;s chasing status updates across three different apps.
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
          <TaskManagementHeroChart />
        </div>
      </div>
    </section>

    <div className="w-full bg-white py-[36px] px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-[20px] overflow-x-auto no-scrollbar">
        {[
          'Unified task & Time-off view',
          'Kanban team task boards',
          'Workload burnout tracking',
          'Threaded comments & files',
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
      title: 'Manager creates a task',
      desc: 'Set the priority, deadline and assignee.',
    },
    {
      num: '02',
      title: 'Employee gets notified',
      desc: 'It shows up on their dashboard, ready to work.',
    },
    {
      num: '03',
      title: 'Progress gets tracked',
      desc: 'Status updates as the work moves forward.',
    },
    {
      num: '04',
      title: 'Manager reviews completion',
      desc: 'With full visibility — no status-check messages needed.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[598px]">
            From assignment to completion, in one line of sight
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[536px]">
            A task shouldn&apos;t disappear into a chat thread the moment it&apos;s handed off. Workzi keeps it visible from creation to close-out — for the person doing it, and the person who assigned it.
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
          Know what&apos;s due, without digging for it
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Every assigned task, its deadline, and its priority — in one list, updated the moment something changes. No more piecing it together from old messages.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'View all assigned tasks in one place',
            'Update status: To Do, In Progress, Completed',
            'Add comments and attachments directly on the task',
            'Get reminders before a deadline hits',
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

      {/* Visual: Task List Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Assigned Tasks List
            </span>

            <div className="space-y-2 font-['Inter',sans-serif] text-[12.5px]">
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <div>
                  <span className="font-bold text-[#111827] block">Design System V2</span>
                  <span className="text-[11px] text-[#6B7280]">Due Aug 14</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#FEE2E2] text-[#DC2626] font-bold text-[10px] px-2 py-0.5 rounded">High</span>
                  <div className="flex items-center gap-1 text-[#6B7280] text-[11px]">
                    <MessageSquare size={12} /> 3 <Paperclip size={12} /> 2
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <div>
                  <span className="font-bold text-[#111827] block">API Sync Verification</span>
                  <span className="text-[11px] text-[#6B7280]">Due Aug 18</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[10px] px-2 py-0.5 rounded">Medium</span>
                  <div className="flex items-center gap-1 text-[#6B7280] text-[11px]">
                    <MessageSquare size={12} /> 1 <Paperclip size={12} /> 0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 4. SECTION 3 — Personal Task Calendar ─── */
const SectionTaskCalendar: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Visual: Personal Task Calendar */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              August 2026 Task Deadlines
            </span>

            <div className="grid grid-cols-7 gap-2 text-center text-[11px] font-semibold text-[#6B7280]">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, idx) => <span key={idx}>{d}</span>)}
              {Array.from({ length: 14 }).map((_, idx) => (
                <div key={idx} className="h-9 border border-[#E5E7EB] rounded-[6px] flex flex-col items-center justify-center text-[11px]">
                  <span>{idx + 10}</span>
                  {idx === 2 && <span className="w-1.5 h-1.5 rounded-full bg-[#5C5CFF]" />}
                  {idx === 6 && <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Task Calendar
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          See your workload the way you actually plan it
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Deadlines mean more on a calendar than in a list. Employees get a personal task calendar showing what&apos;s due, and when — alongside attendance and Time-off, not apart from it.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Task deadlines mapped to a personal calendar',
            'Overlaps with Time-off and holidays visible upfront',
            'Switch between list and calendar view',
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

/* ─── 5. SECTION 4 — Manager View (Kanban Board) ─── */
const SectionManagerView: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Manager View
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Assign work, and actually see it move
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Creating a task is the easy part. Workzi makes the harder part — knowing where things stand — just as simple, with a live view of every task across the team.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Create and assign tasks with priority and deadline',
            'Track progress across the whole team, not task by task',
            'Reassign a task without losing its history',
            'Flag and review overdue items in one place',
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

      {/* Visual: Team Kanban Board */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[20px] flex flex-col gap-[12px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] text-[#111827]">
              Kanban Board View
            </span>

            <div className="grid grid-cols-3 gap-2 text-[11px] font-['Inter',sans-serif]">
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] p-2 space-y-1">
                <span className="font-bold text-[#6B7280] uppercase block mb-1">To Do</span>
                <div className="p-1.5 bg-white border rounded shadow-xs font-semibold">Q3 Roadmap</div>
              </div>

              <div className="bg-[#EEEEFF] border border-indigo-100 rounded-[8px] p-2 space-y-1">
                <span className="font-bold text-[#5C5CFF] uppercase block mb-1">In Progress</span>
                <div className="p-1.5 bg-white border rounded shadow-xs font-semibold">API Integration</div>
              </div>

              <div className="bg-[#FEE2E2] border border-red-100 rounded-[8px] p-2 space-y-1">
                <span className="font-bold text-[#DC2626] uppercase block mb-1">Overdue</span>
                <div className="p-1.5 bg-white border rounded shadow-xs font-semibold text-[#DC2626]">Audit Sync</div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 6. SECTION 5 — Comments & Attachments ─── */
const SectionCommentsAttachments: React.FC = () => (
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
              Task Activity Thread
            </span>

            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] p-3 space-y-2 text-[12px]">
              <div className="font-semibold text-[#111827]">Alex Morgan: <span className="font-normal text-[#6B7280]">Updated specs file attached.</span></div>
              <div className="font-semibold text-[#5C5CFF]">Sarah Anderson: <span className="font-normal text-[#6B7280]">Reviewed! Moving to completed.</span></div>
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Context & Threads
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Keep the context with the task, not in a side chat
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Questions, files, updates — they belong on the task itself, so nobody has to scroll back through a chat history to remember why a deadline moved.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Threaded comments per task',
            'File attachments stay linked to the task',
            'Full activity history, visible to everyone involved',
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

/* ─── 7. SECTION 6 — Workload Visibility (Bar Chart) ─── */
const SectionWorkloadVisibility: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Workload Visibility
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          See who&apos;s stretched thin before it becomes a problem
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          A task list per person is useful. A workload view across the whole team is what actually prevents burnout and missed deadlines.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Task count and load per team member',
            'Spot overloaded or underutilized employees at a glance',
            'Rebalance assignments directly from the view',
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

      {/* Visual: Workload Bar Chart */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[350px] sm:h-[400px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[16px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] text-[#111827]">
              Team Workload Load
            </span>

            <div className="space-y-3 font-['Inter',sans-serif] text-[12px]">
              <div>
                <div className="flex justify-between font-bold text-[#111827] mb-1">
                  <span>Sarah A.</span>
                  <span>8 Tasks (High Load)</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-[#DC2626] rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold text-[#111827] mb-1">
                  <span>Michael K.</span>
                  <span>4 Tasks (Balanced)</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div className="w-[50%] h-full bg-[#5C5CFF] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 8. SECTION 7 — Calendar Integration ─── */
const SectionCalendarIntegration: React.FC = () => (
  <section className="w-full py-[80px] px-8 bg-white">
    <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[24px]">
      <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[620px]">
          Tasks, attendance and Time-off — one calendar, not three
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[514px]">
          Deadlines don&apos;t exist in isolation. Workzi shows task due dates alongside attendance and Time-off, so planning a week means looking at one screen, not three.
        </p>
      </FadeUp>

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

/* ─── 9. SECTION 8 — HR / Admin View ─── */
const SectionHROverview: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[80px] bg-[rgba(120,90,253,0.15)]">
    <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[575px]">
          Turn task activity into organization-wide insight
        </h2>
      </FadeUp>

      <FadeUp className="w-full max-w-[1152px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs p-6">
        <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[14px] flex items-center gap-[12px] rounded-[12px] mb-6">
          {['Overview', 'Categories', 'Reports'].map((tab, idx) => (
            <span
              key={idx}
              className={`font-['Inter',sans-serif] font-semibold text-[13px] px-[16px] py-[8px] rounded-full cursor-pointer transition-colors ${idx === 0 ? 'bg-[#5C5CFF] text-white' : 'bg-white border border-[#E5E7EB] text-[#6B7280]'
                }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Task Categories & Workflows</h4>
            <p className="text-[#6B7280] text-[13px]">Define categories and set up recurring automated tasks.</p>
          </div>
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Completion Rules</h4>
            <p className="text-[#6B7280] text-[13px]">Define manager approval rules required before task sign-off.</p>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 10. SECTION 9 — Reports & Completion Tracking ─── */
const SectionReportsTracking: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[350px] sm:h-[400px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[16px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Task Completion Trends (94%)
            </span>
            <div className="w-full h-[120px] bg-[#EEEEFF] border border-indigo-100 rounded-[12px] flex items-center justify-center font-bold text-[#5C5CFF]">
              94.2% Completion Rate Across Org
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Productivity Analytics
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Know what&apos;s getting done, not just what&apos;s assigned
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Assigned tasks and completed tasks aren&apos;t the same number. Workzi tracks the gap, by team and by individual, so productivity conversations start with data.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Completion rate by employee, team or department',
            'Overdue task trends over time',
            'Exportable productivity reports',
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

/* ─── 11. SECTION 10 — Role-Based Access Cards ─── */
const SectionRoleExperience: React.FC = () => {
  const roles = [
    {
      title: 'Employee',
      bullets: [
        'View assigned tasks',
        'Update task status',
        'Add comments and attachments',
        'View personal task calendar',
        'Get due date reminders',
      ],
    },
    {
      title: 'Manager',
      bullets: [
        'Create and assign tasks',
        'Set priorities and deadlines',
        'Track team progress',
        'Review overdue tasks',
        'Reassign tasks',
        'Monitor team workload',
      ],
    },
    {
      title: 'HR / Admin',
      bullets: [
        'Configure task categories & workflows',
        'Monitor organization-wide progress',
        'Generate productivity reports',
        'Create recurring tasks',
        'Define completion approval rules',
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
const TaskFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can employees attach files to a task?',
      answer: 'Yes. Attachments and comments stay linked to the task, so all the context lives in one place.',
    },
    {
      question: 'Do task deadlines show up on the attendance calendar?',
      answer: 'Yes. Tasks, Time-off and attendance appear together on a unified calendar, so planning doesn\'t require checking multiple screens.',
    },
    {
      question: 'Can a task be recurring?',
      answer: 'Yes. HR and managers can set up recurring tasks for work that repeats on a schedule, instead of recreating it each time.',
    },
    {
      question: 'Can managers see overdue tasks across the whole team?',
      answer: 'Yes. Overdue items are flagged automatically and visible in the team task view, without needing to check each employee individually.',
    },
    {
      question: 'Does Workzi track completion rates, not just task counts?',
      answer: 'Yes. Reports break down completion rate by employee, team or department, so productivity is measured by outcomes, not just assignments.',
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
            Everything you need to know about Workzi task management.
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

/* ─── 13. CLOSING CTA SECTION ─── */
const TaskCTA: React.FC = () => (
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
          Make task management part of the daily flow, not a separate step
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-white/85 max-w-[511px] text-center">
          Assign work, track it, and see it through — without switching to another tool to do it.
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

/* ─── MAIN TASK MANAGEMENT PAGE COMPONENT ─── */
export const TaskManagementPage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <TaskHero />
      <SectionHowItWorks />
      <SectionEmployeeExperience />
      <SectionTaskCalendar />
      <SectionManagerView />
      <SectionCommentsAttachments />
      <SectionWorkloadVisibility />
      <SectionCalendarIntegration />
      <SectionHROverview />
      <SectionReportsTracking />
      <SectionRoleExperience />
      <TaskFAQ />
      <TaskCTA />
    </div>
  );
};

export default TaskManagementPage;
