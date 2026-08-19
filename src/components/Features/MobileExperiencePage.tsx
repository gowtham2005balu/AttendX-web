import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  Plus,
  X,
  Smartphone,
  WifiOff,
  Bell,
  Clock,
  MapPin,
  Calendar,
  CheckCircle2,
  ListTodo,
  UserCheck,
  Wifi,
  Battery,
} from 'lucide-react';

/* ─── Hero Graphic Component for Mobile Experience (Realistic iPhone 16 Pro) ─── */
const MobileExperienceHeroChart: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[573px] h-[380px] sm:h-[420px] rounded-[24px] p-4 sm:p-6 flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
      }}
    >
      {/* Real iPhone Chassis Frame */}
      <div className="w-[210px] sm:w-[225px] h-[350px] sm:h-[370px] bg-[#1C1C1E] rounded-[42px] border-[2.5px] border-[#3A3A3C] shadow-[0_22px_55px_-12px_rgba(0,0,0,0.35)] relative flex flex-col p-[6px] z-10 font-['Inter',sans-serif]">

        {/* Physical Side Buttons */}
        {/* Left Side: Action Button + Volume Keys */}
        <div className="w-[2.5px] h-3 bg-[#48484A] absolute -left-[4.5px] top-14 rounded-l-xs" />
        <div className="w-[2.5px] h-6 bg-[#48484A] absolute -left-[4.5px] top-20 rounded-l-xs" />
        <div className="w-[2.5px] h-6 bg-[#48484A] absolute -left-[4.5px] top-28 rounded-l-xs" />
        {/* Right Side: Power Key */}
        <div className="w-[2.5px] h-9 bg-[#48484A] absolute -right-[4.5px] top-22 rounded-r-xs" />

        {/* Inner Display Screen */}
        <div className="bg-[#F8FAFC] border-[2px] border-black rounded-[36px] h-full flex flex-col justify-between overflow-hidden relative pt-1.5 pb-2 px-2.5 text-[#111827]">

          {/* Dynamic Island */}
          <div className="w-[66px] h-[15px] bg-black rounded-full mx-auto absolute top-2 left-[50%] -translate-x-[50%] z-40 flex items-center justify-between px-2">
            <div className="w-[4.5px] h-[4.5px] rounded-full bg-[#10B981]" />
            <div className="w-[4px] h-[4px] rounded-full bg-[#2C2C2E]" />
          </div>

          {/* Status Bar */}
          <div className="flex justify-between items-center text-[9px] font-bold text-slate-800 pt-1.5 px-1 mb-1.5 z-10">
            <span>09:41</span>
            <div className="flex items-center gap-1 text-slate-700">
              <Wifi size={9} />
              <Battery size={10} />
            </div>
          </div>

          {/* App Header */}
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-full bg-[#5C5CFF] text-white flex items-center justify-center font-bold text-[9.5px]">
                AM
              </div>
              <div className="text-left">
                <span className="font-extrabold text-[10.5px] block leading-tight text-[#111827]">Alex Morgan</span>
                <span className="text-[8.5px] text-[#6B7280] flex items-center gap-0.5">
                  <MapPin size={8} className="text-[#5C5CFF]" /> San Francisco HQ
                </span>
              </div>
            </div>
            <div className="relative p-1 bg-white rounded-full border border-slate-200 shadow-xs">
              <Bell size={11} className="text-slate-600" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#5C5CFF] absolute top-0.5 right-0.5" />
            </div>
          </div>

          {/* Clock In Action Card */}
          <div className="bg-gradient-to-br from-[#5C5CFF] to-[#7B7BFF] rounded-[14px] p-2.5 text-white shadow-xs mb-1.5">
            <div className="flex justify-between items-center text-[8.5px] font-semibold text-white/80 mb-0.5">
              <span>TODAY&apos;S SHIFT</span>
              <span className="bg-white/20 px-1.5 py-0.5 rounded-full text-white text-[7.5px]">09:00 - 17:30</span>
            </div>
            <div className="text-[14px] font-extrabold mb-1.5 leading-tight">09:41 AM</div>
            <button className="w-full bg-white text-[#5C5CFF] font-extrabold text-[10px] py-1.5 rounded-[8px] shadow-xs flex items-center justify-center gap-1 cursor-pointer hover:bg-slate-50 transition-colors">
              <Clock size={11} />
              <span>TAP TO CHECK IN</span>
            </button>
          </div>

          {/* Quick Action Grid */}
          <div className="grid grid-cols-4 gap-1 mb-1.5">
            {[
              { label: 'Time-off', icon: Calendar, color: 'bg-emerald-50 text-emerald-600' },
              { label: 'Shifts', icon: Clock, color: 'bg-indigo-50 text-indigo-600' },
              { label: 'Tasks', icon: ListTodo, color: 'bg-amber-50 text-amber-600' },
              { label: 'Approve', icon: UserCheck, color: 'bg-purple-50 text-purple-600' },
            ].map((tile, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-[8px] p-1 flex flex-col items-center gap-0.5 text-center shadow-2xs">
                <div className={`w-4 h-4 rounded-[5px] ${tile.color} flex items-center justify-center`}>
                  <tile.icon size={9} />
                </div>
                <span className="text-[7.5px] font-bold text-slate-700">{tile.label}</span>
              </div>
            ))}
          </div>

          {/* Pending Approval Tile */}
          <div className="bg-white border border-slate-200/80 rounded-[10px] p-1.5 flex items-center justify-between shadow-2xs mb-1">
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-[8px]">
                SA
              </div>
              <div className="text-left">
                <span className="font-bold text-[9px] block leading-tight text-[#111827]">Sarah&apos;s PTO</span>
                <span className="text-[7.5px] text-[#6B7280]">Aug 12-14 • 3 Days</span>
              </div>
            </div>
            <span className="bg-[#10B981] text-white text-[7.5px] font-bold px-1.5 py-0.5 rounded-full cursor-pointer">
              Approve
            </span>
          </div>

          {/* Home Bar Indicator */}
          <div className="w-[65px] h-[3px] bg-slate-300 rounded-full mx-auto mt-0.5" />
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
const MobileHero: React.FC = () => (
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
          <span className="font-semibold text-[#111827]">Mobile Experience</span>
        </div>
      </div>
    </div>

    <section id="hero" className="w-full max-w-[1289px] mx-auto px-6 lg:px-0 pt-[40px] lg:pt-[60px] pb-[50px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        <div className="flex flex-col items-start w-full lg:w-[656px] gap-[17px] shrink-0">

          <div className="w-full max-w-[760px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.15] lg:leading-[60px] tracking-[-1.04px] text-[#111827]">
              Work doesn&apos;t stop at the desk. Neither should Workzi.
            </h1>
          </div>

          <div className="w-full lg:w-[577px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280]">
              Check in from a job site. Approve a request between meetings. Apply for Time-off from the couch. Workzi&apos;s mobile app carries the whole platform in your pocket — not a stripped-down version of it.
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
          <MobileExperienceHeroChart />
        </div>
      </div>
    </section>

    <div className="w-full bg-white py-[36px] px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-[20px] overflow-x-auto no-scrollbar">
        {[
          'One-tap GPS check-in',
          'Biometric Face ID / Fingerprint',
          'Offline attendance auto-sync',
          'Real-time push notifications',
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
      title: 'Open the app',
      desc: 'Log in once, stay signed in securely.',
    },
    {
      num: '02',
      title: 'Do what you need',
      desc: 'Check in, apply, approve, review — same actions, mobile-first design.',
    },
    {
      num: '03',
      title: 'Get notified',
      desc: 'Push alerts for anything that needs attention.',
    },
    {
      num: '04',
      title: 'Sync happens automatically',
      desc: 'Even offline, nothing gets lost.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[598px]">
            The same Workzi, wherever you are
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[536px]">
            Nobody should need to remember &quot;that&apos;s a desktop-only feature.&quot; Whatever works on the web works on mobile — check-in, approvals, tasks, all of it.
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

/* ─── 3. SECTION 2 — Attendance on the Go ─── */
const SectionAttendanceOnTheGo: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Mobile Attendance
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Check in from wherever work actually happens
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Office, client site, or working from home — check-in works the same way, with location context captured at that moment, not tracked throughout the day.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'One-tap check-in and check-out',
            'Location captured at check-in, mobile-optimized',
            'Full attendance history, available offline',
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

      {/* Visual: Realistic iPhone Mockup */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[400px] sm:h-[440px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-[210px] h-[340px] bg-[#1C1C1E] rounded-[40px] border-[2.5px] border-[#3A3A3C] shadow-2xl p-[5px] flex flex-col justify-between overflow-hidden font-['Inter',sans-serif] relative">
            <div className="w-[2.5px] h-5 bg-[#48484A] absolute -left-[4.5px] top-16 rounded-l-xs" />
            <div className="w-[2.5px] h-7 bg-[#48484A] absolute -right-[4.5px] top-20 rounded-r-xs" />

            <div className="bg-[#F8FAFC] border-[1.5px] border-black rounded-[34px] h-full p-3 flex flex-col justify-between text-center relative">
              <div className="w-14 h-3 bg-black rounded-full mx-auto mb-1" />
              <div>
                <span className="font-bold text-[9px] text-[#6B7280] uppercase tracking-wider block">TODAY&apos;S SHIFT</span>
                <span className="font-extrabold text-[14px] text-[#111827] block mb-2">09:30 AM — 06:30 PM</span>
              </div>

              <div className="my-auto">
                <div className="w-16 h-16 rounded-full bg-[#5C5CFF]/10 border-2 border-[#5C5CFF] flex items-center justify-center mx-auto mb-1.5 animate-pulse">
                  <div className="w-11 h-11 rounded-full bg-[#5C5CFF] text-white flex items-center justify-center font-extrabold text-[9.5px] shadow-xs">
                    CHECK IN
                  </div>
                </div>
                <span className="text-[9px] text-[#10B981] font-bold flex items-center justify-center gap-0.5">
                  <MapPin size={9} /> Verified Location: Office HQ
                </span>
              </div>

              <div className="w-14 h-1 bg-slate-300 rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 4. SECTION 3 — Time-off & Approvals on Mobile ─── */
const SectionTimeOffApprovalsMobile: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Visual: Phone Approval Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[400px] sm:h-[440px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-[210px] h-[340px] bg-[#1C1C1E] rounded-[40px] border-[2.5px] border-[#3A3A3C] shadow-2xl p-[5px] flex flex-col justify-between overflow-hidden font-['Inter',sans-serif] relative">
            <div className="w-[2.5px] h-7 bg-[#48484A] absolute -right-[4.5px] top-20 rounded-r-xs" />

            <div className="bg-[#F8FAFC] border-[1.5px] border-black rounded-[34px] h-full p-3 flex flex-col justify-between relative text-left">
              <div className="w-14 h-3 bg-black rounded-full mx-auto mb-1" />

              <div>
                <span className="font-bold text-[#5C5CFF] uppercase text-[8.5px] tracking-wider block mb-1">APPROVAL REQUEST</span>
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-700 font-extrabold text-[9.5px] flex items-center justify-center">
                    SA
                  </div>
                  <div>
                    <span className="font-extrabold text-[12px] text-[#111827] block leading-tight">Sarah Anderson</span>
                    <span className="text-[9px] text-[#6B7280]">UX Designer</span>
                  </div>
                </div>

                <div className="p-2 bg-white border rounded-[10px] text-[9.5px] space-y-1 mb-2">
                  <div className="flex justify-between text-[#6B7280]">
                    <span>Type:</span> <span className="font-bold text-[#111827]">Casual Time-off</span>
                  </div>
                  <div className="flex justify-between text-[#6B7280]">
                    <span>Dates:</span> <span className="font-bold text-[#111827]">Aug 12 - Aug 14</span>
                  </div>
                  <div className="flex justify-between text-[#6B7280]">
                    <span>Balance:</span> <span className="font-bold text-[#10B981]">12 Days Left</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <button className="w-full bg-[#10B981] text-white font-extrabold py-2 rounded-[10px] text-[10.5px] shadow-2xs cursor-pointer">
                  Approve Request
                </button>
                <button className="w-full bg-slate-100 text-[#6B7280] font-bold py-1.5 rounded-[10px] text-[10px] cursor-pointer">
                  Decline
                </button>
              </div>

              <div className="w-14 h-1 bg-slate-300 rounded-full mx-auto mt-1" />
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Mobile Approvals
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Don&apos;t let a request sit because you weren&apos;t at your desk
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Apply for Time-off between errands. Approve a team member&apos;s request while waiting for a meeting to start. Mobile means the request doesn&apos;t sit in a queue until someone opens a laptop.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Apply for Time-off and track status from the app',
            'Managers approve or decline requests with full context, on the go',
            'Push notification the moment a decision is needed',
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

/* ─── 5. SECTION 4 — Push Notifications ─── */
const SectionPushNotifications: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Push Notifications
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Know the moment something needs you
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Approval waiting. Task due soon. Correction request submitted. Push notifications mean nobody has to open the app &quot;just in case&quot; — it tells you when it matters.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Real-time push alerts for approvals, deadlines and updates',
            'Configurable notification preferences per person',
            'No notification spam — only what\'s actionable',
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

      {/* Visual: Lock Screen iOS Push Notifications */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[400px] sm:h-[440px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-[210px] h-[340px] bg-slate-900 border-[2.5px] border-slate-700 rounded-[40px] p-[5px] shadow-2xl flex flex-col justify-between overflow-hidden font-['Inter',sans-serif] text-white relative">
            <div className="w-[2.5px] h-7 bg-slate-600 absolute -right-[4.5px] top-20 rounded-r-xs" />
            <div className="w-14 h-3 bg-black rounded-full mx-auto mt-1" />

            <div className="my-auto space-y-1.5 px-2">
              <div className="text-center mb-2">
                <span className="text-[24px] font-extrabold block leading-tight">09:41</span>
                <span className="text-[9px] text-slate-400 font-semibold">Tuesday, August 04</span>
              </div>

              <div className="p-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-[12px] text-[9.5px]">
                <div className="flex items-center justify-between text-[#9AA0FF] font-bold text-[8.5px] mb-0.5">
                  <span className="flex items-center gap-1"><Bell size={9} /> WORKZI</span>
                  <span>Now</span>
                </div>
                <span className="font-bold block text-white">Time-off Request Approved ✓</span>
                <span className="text-slate-300 text-[8.5px]">Your Casual Time-off for Aug 12 is approved.</span>
              </div>

              <div className="p-2 bg-white/10 backdrop-blur-md border border-white/15 rounded-[12px] text-[9.5px]">
                <div className="flex items-center justify-between text-[#9AA0FF] font-bold text-[8.5px] mb-0.5">
                  <span className="flex items-center gap-1"><Clock size={9} /> WORKZI</span>
                  <span>10m ago</span>
                </div>
                <span className="font-bold block text-white">Upcoming Shift Alert</span>
                <span className="text-slate-300 text-[8.5px]">Shift starts in 30 mins (Standard Shift).</span>
              </div>
            </div>

            <div className="w-14 h-1 bg-white/40 rounded-full mx-auto mb-1" />
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 6. SECTION 5 — Offline Sync ─── */
const SectionOfflineSync: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[350px] sm:h-[380px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-[210px] h-[300px] bg-[#1C1C1E] border-[2.5px] border-[#3A3A3C] rounded-[38px] p-[5px] shadow-2xl flex flex-col justify-between overflow-hidden font-['Inter',sans-serif] relative">
            <div className="bg-[#F8FAFC] border-[1.5px] border-black rounded-[32px] h-full p-3 flex flex-col justify-between text-center relative">
              <div className="w-14 h-3 bg-black rounded-full mx-auto mb-1" />

              <div className="my-auto space-y-1.5">
                <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
                  <WifiOff size={18} />
                </div>
                <span className="font-extrabold text-[12.5px] text-[#111827] block">Offline Mode</span>
                <div className="p-1.5 bg-[#FEF3E2] text-[#B45309] rounded-[8px] text-[9px] font-bold">
                  Check-in saved locally (09:14 AM). Will sync when online.
                </div>
                <div className="flex items-center justify-center gap-0.5 text-[8.5px] font-bold text-[#10B981]">
                  <CheckCircle2 size={10} /> Auto-Sync Queue Enabled
                </div>
              </div>

              <div className="w-14 h-1 bg-slate-300 rounded-full mx-auto" />
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Offline Sync
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          A weak signal shouldn&apos;t stop your workday
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Field staff and remote teams don&apos;t always have reliable connectivity. Workzi records check-ins and updates offline, and syncs automatically the moment a connection comes back.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Check-in and task updates work offline',
            'Automatic sync when connectivity returns',
            'No duplicate or lost records during sync',
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

/* ─── 7. SECTION 6 — HR / Admin View ─── */
const SectionHROverview: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[80px] bg-[rgba(120,90,253,0.15)]">
    <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[575px]">
          Approvals shouldn&apos;t wait for someone to be back at a desk
        </h2>
      </FadeUp>

      <FadeUp className="w-full max-w-[1152px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Mobile Manager Actions</h4>
            <p className="text-[#6B7280] text-[13px]">Approve Time-off, corrections and task-related requests on the move.</p>
          </div>
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Team Availability Overview</h4>
            <p className="text-[#6B7280] text-[13px]">View real-time team attendance and status tags directly from mobile.</p>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 8. SECTION 7 — Role-Based Access Cards ─── */
const SectionRoleExperience: React.FC = () => {
  const roles = [
    {
      title: 'Employee',
      bullets: [
        'Check in / check out on the go',
        'Apply for Time-off, view balance',
        'Update task status',
        'Get push notifications',
      ],
    },
    {
      title: 'Manager',
      bullets: [
        'Approve requests remotely',
        'View team attendance from mobile',
        'Review and act on exceptions',
        'Get push notifications',
      ],
    },
    {
      title: 'HR / Admin',
      bullets: [
        'Monitor org-wide activity',
        'Respond to urgent flags remotely',
        'Get push notifications',
      ],
    },
  ];

  return (
    <section className="w-full py-[80px] px-6 lg:px-[80px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[741px] mx-auto">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[741px]">
            The right experience, for every role
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

/* ─── 9. FAQ SECTION ─── */
const MobileFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can I check in without an internet connection?',
      answer: 'Yes. Check-ins and task updates work offline and sync automatically once you\'re back online.',
    },
    {
      question: 'Do managers get full approval capabilities on mobile, or just notifications?',
      answer: 'Full capabilities. Managers can review context and approve or decline directly from the app, not just get notified.',
    },
    {
      question: 'Does the mobile app support Face ID or fingerprint login?',
      answer: 'Yes, alongside a quick PIN fallback and standard login.',
    },
    {
      question: 'Will I miss anything by using the app instead of the desktop version?',
      answer: 'No. Core actions across attendance, Time-off, tasks and approvals are available on mobile — it\'s the same platform, not a limited version.',
    },
    {
      question: 'Can I control which notifications I get?',
      answer: 'Yes. Notification preferences are configurable per person.',
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
            Everything you need to know about Workzi mobile app.
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

/* ─── 10. CLOSING CTA SECTION (App Store Badges) ─── */
const MobileCTA: React.FC = () => (
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
          Take Workzi with you
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-white/85 max-w-[511px] text-center">
          Full functionality, built for the phone in your pocket — not a cut-down version of the desktop experience.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-[14px] pt-[22.7px] w-full max-w-[880px]">
          <a
            href="#pricing"
            className="bg-white hover:bg-slate-50 text-[#111827] font-['DM_Sans',sans-serif] font-bold text-[15px] leading-[24px] px-[28px] py-[14px] rounded-[100px] transition-all shadow-md cursor-pointer flex items-center justify-center gap-2.5 h-[52px]"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" className="text-[#111827] shrink-0">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.32c.67-.82 1.12-1.96.99-3.1-.97.04-2.15.65-2.84 1.46-.62.72-1.16 1.88-1.01 3 .08.01.21.02.33.02 1.05 0 2.14-.56 2.53-1.38z" />
            </svg>
            <span>App Store</span>
          </a>
          <a
            href="#pricing"
            className="bg-transparent hover:bg-white/10 border border-white/40 text-white font-['DM_Sans',sans-serif] font-bold text-[15px] leading-[24px] px-[28px] py-[12px] rounded-[100px] transition-all cursor-pointer flex items-center justify-center gap-2.5 h-[52px]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white shrink-0">
              <path d="M3.5 2.5C3.18 2.82 3 3.32 3 3.95V20.05C3 20.68 3.18 21.18 3.5 21.5L3.6 21.6L12.5 12.7V11.3L3.6 2.4L3.5 2.5Z" fill="white" />
              <path d="M15.4 15.6L12.5 12.7V11.3L15.4 8.4L15.5 8.5L19 10.5C20 11.1 20 12.1 19 12.7L15.5 14.7L15.4 15.6Z" fill="white" opacity="0.95" />
              <path d="M15.5 14.7L12.5 11.7L3.5 20.7C3.9 21.1 4.5 21.2 5.2 20.8L15.5 14.7Z" fill="white" opacity="0.8" />
              <path d="M15.5 8.5L5.2 2.4C4.5 2 3.9 2.1 3.5 2.5L12.5 11.5L15.5 8.5Z" fill="white" opacity="0.85" />
            </svg>
            <span>Google Play</span>
          </a>
        </div>
      </div>
    </Container>
  </section>
);

/* ─── MAIN MOBILE EXPERIENCE PAGE COMPONENT ─── */
export const MobileExperiencePage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <MobileHero />
      <SectionHowItWorks />
      <SectionAttendanceOnTheGo />
      <SectionTimeOffApprovalsMobile />
      <SectionPushNotifications />
      <SectionOfflineSync />
      <SectionHROverview />
      <SectionRoleExperience />
      <MobileFAQ />
      <MobileCTA />
    </div>
  );
};

export default MobileExperiencePage;
