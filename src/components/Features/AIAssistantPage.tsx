import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  Plus,
  X,
  Sparkles,
  Mic,
  MessageSquare,
} from 'lucide-react';

/* ─── Hero Graphic Component for AI Assistant ─── */
const AIAssistantHeroChart: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[573px] min-h-[460px] sm:h-[430px] rounded-[24px] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-4 overflow-hidden"
      style={{
        background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
      }}
    >
      {/* Left Card — Conversational Query & Instant Answer */}
      <div className="relative sm:absolute bg-white border border-[#E5E7EB] rounded-[20px] p-[16px] flex flex-col justify-between z-10 w-[90%] sm:w-[240px] h-[220px] sm:h-[270px] sm:left-[30px] sm:top-[40px] shadow-[0px_20px_40px_-18px_rgba(17,24,39,0.2)]">
        <div>
          <div className="flex items-center gap-1.5 mb-2 text-[#5C5CFF] font-bold text-[11px]">
            <Sparkles size={13} />
            <span className="uppercase">AI CONVERSATION</span>
          </div>

          <div className="space-y-[8px] text-[11.5px] font-['Inter',sans-serif]">
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] font-semibold text-[#111827]">
              &quot;How many casual Time-offs do I have left?&quot;
            </div>
            <div className="p-2.5 bg-[#EEEEFF] border border-indigo-100 rounded-[8px] font-medium text-[#5C5CFF]">
              You have 6 Casual Time-offs remaining for 2026.
              <span className="block text-[10px] underline font-bold mt-1 cursor-pointer">Apply for Time-off →</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card — Attendance Anomaly Flag */}
      <div className="relative sm:absolute bg-white border border-[#E5E7EB] rounded-[20px] p-[18px] flex flex-col justify-between z-20 w-[90%] sm:w-[240px] h-[240px] sm:h-[270px] sm:right-[30px] sm:bottom-[40px] shadow-[0px_20px_40px_-18px_rgba(17,24,39,0.2)]">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[13px] uppercase text-[#6B7280]">
              INSIGHT DETECTED
            </span>
            <span className="bg-[#FEF3E2] text-[#B45309] text-[10.5px] font-bold px-[8px] py-[3px] rounded-full">
              Pattern
            </span>
          </div>

          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] sm:text-[18px] leading-[22px] sm:leading-[24px] text-[#111827] block">
            Attendance Anomaly
          </span>
          <span className="font-['Inter',sans-serif] font-medium text-[11.5px] sm:text-[12px] leading-[16px] text-[#6B7280] block mt-1 mb-2">
            4 late check-ins flagged this month for Alex Morgan.
          </span>

          <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] text-[10.5px] sm:text-[11px] text-[#111827] font-semibold">
            Suggested Action: Review Shift Timing
          </div>
        </div>

        <button className="w-full bg-[#5C5CFF] text-white font-['Inter',sans-serif] font-bold text-[12.5px] py-[8px] sm:py-[9.5px] rounded-[10px]">
          Review Insights
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
const AIHero: React.FC = () => (
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
          <span className="font-semibold text-[#111827]">AI Assistant</span>
        </div>
      </div>
    </div>

    <section id="hero" className="w-full max-w-[1289px] mx-auto px-6 lg:px-0 pt-[40px] lg:pt-[60px] pb-[50px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        <div className="flex flex-col items-start w-full lg:w-[656px] gap-[17px] shrink-0">

          <div className="w-full max-w-[760px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.15] lg:leading-[60px] tracking-[-1.04px] text-[#111827]">
              An assistant that actually knows your workday
            </h1>
          </div>

          <div className="w-full lg:w-[577px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280]">
              Ask it your Time-off balance. Let it flag who&apos;s about to miss a deadline. Workzi&apos;s AI assistant turns routine questions and repetitive checks into a conversation — so people spend less time looking things up.
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
          <AIAssistantHeroChart />
        </div>
      </div>
    </section>

    <div className="w-full bg-white py-[36px] px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-[20px] overflow-x-auto no-scrollbar">
        {[
          'Conversational HR Queries',
          'Attendance Anomaly Detection',
          'Predictive Time-off Forecasting',
          'Voice-enabled Mobile Assistant',
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
      title: 'Ask a question',
      desc: 'Type or speak it, in plain language.',
    },
    {
      num: '02',
      title: 'Assistant checks the data',
      desc: 'Attendance, Time-off, tasks — whatever\'s relevant.',
    },
    {
      num: '03',
      title: 'Answer comes back instantly',
      desc: 'No ticket, no waiting on HR.',
    },
    {
      num: '04',
      title: 'Escalates when it should',
      desc: 'Anything requiring judgment goes to a person.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[598px]">
            From question to answer, without a support ticket
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[536px]">
            Most HR questions have simple answers buried in data the system already has. Workzi&apos;s assistant surfaces them instantly, instead of routing every question through a person.
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

/* ─── 3. SECTION 2 — Conversational Queries ─── */
const SectionConversationalQueries: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Conversational Interface
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Ask it like you&apos;d ask a person
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          &quot;What&apos;s my Time-off balance?&quot; &quot;When does my shift start tomorrow?&quot; &quot;Did my correction get approved?&quot; Employees get answers in plain language, without navigating menus to find them.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Natural language questions about attendance, Time-off and tasks',
            'Instant answers pulled from live data, not cached summaries',
            'Available by text or voice input',
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

      {/* Visual: Chat Interface Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl font-['Inter',sans-serif]">
            <div className="p-3 bg-[#F8FAFC] border rounded-[10px] text-[13px] font-semibold text-[#111827] self-end max-w-[80%]">
              &quot;When does my shift start tomorrow?&quot;
            </div>
            <div className="p-3.5 bg-[#EEEEFF] border border-indigo-100 rounded-[10px] text-[13px] font-medium text-[#5C5CFF] self-start max-w-[85%] space-y-1">
              <span>Your shift tomorrow starts at 09:30 AM (Standard Shift).</span>
              <span className="block text-[11px] underline font-bold cursor-pointer">View Shift Roster →</span>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 4. SECTION 3 — Attendance Anomaly Detection ─── */
const SectionAnomalyDetection: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Visual: Insight Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl font-['Inter',sans-serif]">
            <div className="flex justify-between items-center">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
                Attendance Anomaly Flag
              </span>
              <span className="bg-[#FEE2E2] text-[#DC2626] font-bold text-[10.5px] px-2.5 py-1 rounded-full">
                Review Required
              </span>
            </div>
            <p className="text-[13px] text-[#6B7280]">
              Pattern detected: <span className="font-bold text-[#111827]">4 late check-ins this month</span> for Sarah Anderson.
            </p>
            <div className="h-[40px] bg-[#EEEEFF] border rounded-[8px] flex items-center justify-center font-bold text-[#5C5CFF] text-[12px]">
              Sparkline Trend: ↑ 15% late variance
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Pattern Recognition
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Catch the pattern before it becomes a problem
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          A single late check-in isn&apos;t a story. A pattern of them might be. Workzi&apos;s assistant flags unusual attendance patterns so managers and HR see them early, not at review time.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Automatic detection of attendance patterns and outliers',
            'Flagged for manager or HR review, not auto-actioned',
            'Context included — not just a flag, but why it was raised',
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

/* ─── 5. SECTION 4 — Predictive Time-off Analytics ─── */
const SectionPredictiveTimeOff: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Predictive Analytics
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          See the Time-off crunch coming, not after it hits
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Knowing three people are likely to request the same week off is a lot more useful before it happens than after. Workzi&apos;s assistant surfaces Time-off trends so staffing gaps don&apos;t sneak up on anyone.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Forecasted Time-off demand based on historical patterns',
            'Early flags for potential overlap or coverage gaps',
            'Useful heading into holidays and peak seasons',
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

      {/* Visual: Forecast Chart */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl font-['Inter',sans-serif]">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Predicted Time-off Volume (Sep 2026)
            </span>

            <div className="p-3 bg-[#FEF3E2] border border-amber-100 rounded-[10px] text-[12px] font-bold text-[#B45309]">
              ⚠️ High Risk: Week of Sep 15 (Engineering 40% overlap forecast)
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 6. SECTION 5 — AI Task Prioritization ─── */
const SectionTaskPrioritization: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[350px] sm:h-[400px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl font-['Inter',sans-serif]">
            <div className="flex justify-between items-center">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] text-[#111827]">
                AI Suggested Priority
              </span>
              <Sparkles size={14} className="text-[#5C5CFF]" />
            </div>
            <div className="p-2.5 bg-[#EEEEFF] border border-indigo-100 rounded-[10px] text-[12px] font-bold text-[#5C5CFF]">
              1. Fix Security Vulnerability (Due Today)
            </div>
            <div className="p-2.5 bg-[#F8FAFC] border rounded-[10px] text-[12px] font-semibold text-[#111827]">
              2. Review Q3 Design Specs (Due Fri)
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Smart Prioritization
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Help deciding what actually needs attention first
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          A long task list doesn&apos;t tell you what matters most. Workzi&apos;s assistant suggests a priority order based on deadlines, dependencies and workload — a starting point, not a mandate.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Suggested task priority based on deadline and workload',
            'Flags tasks at risk of becoming overdue',
            'Suggestions only — employees and managers stay in control',
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

/* ─── 7. SECTION 6 — Voice Input ─── */
const SectionVoiceInput: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Voice Queries
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          For when typing is one more thing
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Not every question needs to be typed out. Voice input lets employees ask the assistant directly — useful on the move, or when hands are full.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Voice-to-query for common questions',
            'Same instant-answer experience as typed queries',
            'Available on mobile',
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

      {/* Visual: Mobile Voice Input Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[350px] sm:h-[400px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[320px] bg-white border border-[#E5E7EB] rounded-[24px] p-[20px] flex flex-col items-center gap-[14px] shadow-xl text-center font-['Inter',sans-serif]">
            <div className="w-[50px] h-[50px] rounded-full bg-[#EEEEFF] flex items-center justify-center text-[#5C5CFF]">
              <Mic size={24} />
            </div>
            <span className="text-[12px] font-bold text-[#6B7280]">Listening...</span>
            <div className="p-2.5 bg-[#F8FAFC] border rounded-[10px] text-[12px] font-semibold text-[#111827]">
              &quot;Log my check-in for today&quot;
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 8. SECTION 9 — HR / Admin View ─── */
const SectionHROverview: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[80px] bg-[rgba(120,90,253,0.15)]">
    <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[575px]">
          Configure what the assistant can see and say
        </h2>
      </FadeUp>

      <FadeUp className="w-full max-w-[1152px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs p-6">
        <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[14px] flex items-center gap-[12px] rounded-[12px] mb-6">
          {['Access Scope', 'Escalation Rules', 'Usage Analytics'].map((tab, idx) => (
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
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Data Boundary Controls</h4>
            <p className="text-[#6B7280] text-[13px]">Define data scope restrictions for payroll and sensitive records.</p>
          </div>
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Human Escalation Rules</h4>
            <p className="text-[#6B7280] text-[13px]">Specify query types that automatically route to HR human review.</p>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 9. SECTION 10 — Role-Based Access Cards ─── */
const SectionRoleExperience: React.FC = () => {
  const roles = [
    {
      title: 'Employee',
      bullets: [
        'Ask questions about own attendance, Time-off, tasks',
        'Use voice input',
        'Get task priority suggestions',
      ],
    },
    {
      title: 'Manager',
      bullets: [
        'Get team-level insights and anomaly flags',
        'See approval context suggestions',
        'View team productivity summaries',
      ],
    },
    {
      title: 'HR / Admin',
      bullets: [
        'Configure assistant data access scope',
        'Set escalation rules',
        'Monitor assistant usage organization-wide',
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

/* ─── 10. FAQ SECTION ─── */
const AIFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Does the AI assistant make decisions on its own, like approving Time-off?',
      answer: 'No. It surfaces context and suggestions — approvals and other decisions stay with the manager or HR admin responsible for them.',
    },
    {
      question: 'Can employees ask the assistant questions by voice?',
      answer: 'Yes. Voice input works the same way as typed queries, and is available on mobile.',
    },
    {
      question: 'How does attendance anomaly detection work?',
      answer: 'The assistant looks for unusual patterns — like repeated lateness or irregular check-ins — and flags them for manager or HR review, with context included.',
    },
    {
      question: 'Is the assistant\'s data access configurable?',
      answer: 'Yes. HR/Admin controls what data the assistant can draw on and which types of queries get escalated to a person instead of answered directly.',
    },
    {
      question: 'Does the assistant replace HR for policy questions?',
      answer: 'It handles routine, data-backed questions directly. Anything requiring judgment or policy interpretation is routed to HR.',
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
            Everything you need to know about Workzi AI assistant.
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

/* ─── 11. CLOSING CTA SECTION ─── */
const AICTA: React.FC = () => (
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
          Let the assistant handle the routine, so people don&apos;t have to
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-white/85 max-w-[511px] text-center">
          Fewer questions stuck in an inbox. Fewer patterns missed until it&apos;s too late. Workzi&apos;s AI assistant works in the background of everything else the platform already does.
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

/* ─── MAIN AI ASSISTANT PAGE COMPONENT ─── */
export const AIAssistantPage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <AIHero />
      <SectionHowItWorks />
      <SectionConversationalQueries />
      <SectionAnomalyDetection />
      <SectionPredictiveTimeOff />
      <SectionTaskPrioritization />
      <SectionVoiceInput />
      <SectionHROverview />
      <SectionRoleExperience />
      <AIFAQ />
      <AICTA />
    </div>
  );
};

export default AIAssistantPage;
