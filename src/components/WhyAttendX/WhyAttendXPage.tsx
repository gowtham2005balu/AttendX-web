import React from 'react';
import { Container } from '../Container';
import { Sparkles } from 'lucide-react';

export const WhyAttendXPage: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif] pb-16">
      {/* ── BREADCRUMB BAR ── */}
      <div className="w-full bg-white border-b border-[#F1F1F1] pt-[68px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-8 h-[44px] flex items-center gap-[8px]">
          <div className="flex items-center gap-[8px] font-['Inter',sans-serif] text-[13px] leading-[16px] text-[#6B7280]">
            <a href="#home" className="hover:text-[#111827] transition-colors">Home</a>
            <span>/</span>
            <a href="#why-attendx" className="hover:text-[#111827] transition-colors">Why Workzi</a>
            <span>/</span>
            <span className="font-semibold text-[#111827]">Why Workzi</span>
          </div>
        </div>
      </div>

      {/* SECTION 1 — HERO */}
      <section className="relative pt-14 pb-12 lg:pb-20 overflow-hidden bg-[conic-gradient(from_0.09deg_at_50%_54.26%,#EEEEFF_-88.5deg,#FFFFFF_0.55deg,#FFFFFF_0.58deg,#EEEEFF_82.63deg,#FFFFFF_123.7deg,#FFFFFF_232.58deg,#EEEEFF_271.5deg,#FFFFFF_360.55deg)]">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[520px]">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 flex flex-col items-start max-w-[578px]">


              {/* H1 Title */}
              <h1 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[46px] lg:text-[52px] leading-[1.15] sm:leading-[58px] lg:leading-[60px] tracking-[-1.04px] text-[#111827] mb-6">
                Work shouldn't wait on paperwork.
              </h1>

              {/* p.desc Description */}
              <p className="font-['Inter'] font-normal text-[17px] sm:text-[19px] leading-[27px] sm:leading-[29px] text-[#6B7280] max-w-[480px] mb-8">
                Workzi brings attendance, leave, tasks, approvals and everyday HR operations into one connected platform — so your people spend less time on admin and more time on work that matters.
              </p>

              {/* div.hero-ctas */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1 w-full sm:w-auto">
                <a
                  href="#pricing"
                  onClick={scrollToTop}
                  className="inline-flex items-center justify-center px-6 py-3.5 h-[49px] bg-[#5C5CFF] hover:bg-[#4A4AE0] text-white font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[19px] rounded-[12px] transition-all duration-200"
                >
                  Get Started
                </a>
                <a
                  href="#contact-support"
                  onClick={scrollToTop}
                  className="inline-flex items-center justify-center px-6.5 py-3.5 h-[49px] bg-white border border-[#E5E7EB] hover:bg-slate-50 text-[#111827] font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[19px] rounded-[12px] transition-all duration-200"
                >
                  Watch Demo
                </a>
              </div>
            </div>

            {/* Right Visual Floating Panels Column */}
            <div className="lg:col-span-6 relative h-[480px] sm:h-[520px] w-full max-w-[578px] mx-auto flex items-center justify-center">
              {/* Background ambient blur */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5C5CFF]/10 to-indigo-100/50 rounded-3xl blur-2xl -z-10 transform scale-95" />

              {/* CARD 1: THIS MONTH STAT CARD */}
              <div className="absolute top-2 sm:top-4 left-0 sm:left-4 z-20 w-[280px] sm:w-[296px] bg-white border border-[#E5E7EB] rounded-[22px] p-4 transition-transform hover:-translate-y-1 duration-300">
                <div className="font-['Inter'] font-bold text-[12px] leading-[19px] tracking-[0.48px] uppercase text-[#6B7280] pb-2 border-b border-slate-100">
                  THIS MONTH
                </div>
                <div className="grid grid-cols-3 gap-2 pt-3 items-center">
                  <div>
                    <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] sm:text-[26px] leading-[36px] text-[#111827]">
                      94%
                    </div>
                    <div className="font-['Inter'] font-semibold text-[11.5px] leading-[18px] text-[#6B7280]">
                      Attendance
                    </div>
                  </div>
                  <div>
                    <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] sm:text-[26px] leading-[36px] text-[#111827]">
                      12
                    </div>
                    <div className="font-['Inter'] font-semibold text-[11.5px] leading-[18px] text-[#6B7280]">
                      Open Approvals
                    </div>
                  </div>
                  <div>
                    <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] sm:text-[26px] leading-[36px] text-[#111827]">
                      312
                    </div>
                    <div className="font-['Inter'] font-semibold text-[11.5px] leading-[18px] text-[#6B7280]">
                      Employees
                    </div>
                  </div>
                </div>
              </div>

              {/* CARD 2: ATTENDANCE — TODAY */}
              <div className="absolute top-[160px] left-[20px] sm:left-[140px] z-10 w-[270px] sm:w-[300px] bg-white border border-[#E5E7EB] rounded-[22px] p-5 transition-transform hover:-translate-y-1 duration-300">
                <div className="font-['Inter'] font-bold text-[12px] leading-[19px] tracking-[0.48px] uppercase text-[#6B7280] pb-2 border-b border-slate-100">
                  ATTENDANCE — TODAY
                </div>
                
                <div className="flex items-center justify-between py-2 border-b border-slate-50">
                  <span className="font-['Inter'] font-semibold text-[13px] leading-[20px] text-[#111827]">
                    On Time
                  </span>
                  <span className="inline-flex items-center justify-center px-2.5 py-0.5 bg-[#EEEEFF] rounded-full text-[#4A4AE0] font-['Inter'] font-bold text-[10.5px]">
                    96%
                  </span>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-50">
                  <span className="font-['Inter'] font-semibold text-[13px] leading-[20px] text-[#111827]">
                    Late Arrivals
                  </span>
                  <span className="inline-flex items-center justify-center px-2.5 py-0.5 bg-[#EEEEFF] rounded-full text-[#4A4AE0] font-['Inter'] font-bold text-[10.5px]">
                    3
                  </span>
                </div>

                <div className="flex items-center justify-between py-2">
                  <span className="font-['Inter'] font-semibold text-[13px] leading-[20px] text-[#111827]">
                    Not Checked In
                  </span>
                  <span className="inline-flex items-center justify-center px-2.5 py-0.5 bg-[#EEEEFF] rounded-full text-[#4A4AE0] font-['Inter'] font-bold text-[10.5px]">
                    2
                  </span>
                </div>
              </div>

              {/* CARD 3: WORKZI AI GRADIENT CARD */}
              <div className="absolute bottom-2 sm:bottom-4 right-0 sm:right-2 z-30 w-[250px] sm:w-[260px] bg-gradient-to-br from-[#5C5CFF] to-[#8A8AFF] border border-[#E5E7EB] rounded-[22px] p-4 sm:p-5 text-white transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center gap-2 font-['Inter'] font-bold text-[12px] leading-[19px] tracking-[0.48px] uppercase text-white/80 pb-3">
                  <Sparkles size={14} className="text-white animate-pulse" />
                  WORKZI AI
                </div>

                <div className="space-y-2">
                  <div className="bg-white/15 backdrop-blur-sm rounded-[10px] p-3 text-[12.5px] font-['Inter'] font-semibold leading-[19px]">
                    "3 pending approvals — 2 leave, 1 correction."
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-[10px] p-2.5 text-[12.5px] font-['Inter'] font-semibold leading-[19px]">
                    "Meera hasn't checked in yet."
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* SECTION 2 — THE EVOLUTION OF HR */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* div.section-head */}
          <div className="flex flex-col items-center text-center max-w-[640px] mb-16">
            <span className="font-['Inter'] font-bold text-[13px] leading-[20px] tracking-[1.3px] uppercase text-[#5C5CFF] mb-2">
              THE EVOLUTION OF HR
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[42px] leading-[1.1] tracking-[-0.84px] text-[#111827]">
              From paper to platform
            </h2>
          </div>

          {/* div.evo-line (Timeline) */}
          <div className="relative w-full max-w-[1216px] py-4">
            {/* Horizontal Line ::before */}
            <div className="hidden md:block absolute top-[26px] left-[5%] right-[5%] h-[2px] bg-[#E5E7EB] z-0" />

            {/* Stages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {[
                {
                  emoji: '📋',
                  title: 'Paper Registers',
                  desc: 'Manual, easy to lose, impossible to audit',
                  isWorkzi: false,
                },
                {
                  emoji: '📊',
                  title: 'Spreadsheets',
                  desc: 'Manual formulas, zero real-time visibility',
                  isWorkzi: false,
                },
                {
                  emoji: '👆',
                  title: 'Biometric Devices',
                  desc: 'Hardware-bound, data stuck on-site',
                  isWorkzi: false,
                },
                {
                  emoji: '🖥',
                  title: 'Traditional HRMS',
                  desc: 'Rigid setup, slow to adapt, built for admins only',
                  isWorkzi: false,
                },
                {
                  emoji: 'W',
                  title: 'Workzi',
                  desc: 'Connected, role-aware, built for real work',
                  isWorkzi: true,
                },
              ].map((stage, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-2">
                  {/* Dot / Icon Circle */}
                  <div
                    className={`w-[52px] h-[52px] rounded-full flex items-center justify-center mb-3 transition-transform hover:scale-105 duration-200 ${
                      stage.isWorkzi
                        ? 'bg-[#5C5CFF] border-2 border-[#5C5CFF] text-white font-extrabold text-[20px]'
                        : 'bg-white border-2 border-[#E5E7EB] text-[20px]'
                    }`}
                  >
                    {stage.emoji}
                  </div>

                  {/* Title */}
                  <h4
                    className={`font-['Plus_Jakarta_Sans'] text-[15px] leading-[23px] tracking-[-0.3px] mb-1 ${
                      stage.isWorkzi ? 'font-bold text-[#5C5CFF]' : 'font-semibold text-[#111827]'
                    }`}
                  >
                    {stage.title}
                  </h4>

                  {/* Description */}
                  <p className="font-['Inter'] font-normal text-[12.5px] leading-[19px] text-[#6B7280]">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3 — BEFORE VS AFTER */}
      <section className="py-20 bg-[#F6F9FC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[640px] mb-12">
            <span className="font-['Inter'] font-bold text-[13px] leading-[20px] tracking-[1.3px] uppercase text-[#5C5CFF] mb-2">
              BEFORE & AFTER
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[42px] leading-[1.1] tracking-[-0.84px] text-[#111827]">
              A different way to run HR
            </h2>
          </div>

          {/* Compare Grid */}
          <div className="w-full max-w-[1216px] bg-white border border-[#E5E7EB] rounded-[28px] overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Traditional HR Column */}
            <div className="bg-[#F8FAFC] p-8 sm:p-11 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E5E7EB]">
              <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[22px] leading-[34px] tracking-[-0.44px] text-[#111827] mb-7">
                Manual HR & Legacy Tools
              </h3>

              <ul className="space-y-4 font-['Inter'] text-[15.5px] leading-[24px] text-[#111827]">
                {[
                  'Manual attendance tracking',
                  'Delayed leave approvals',
                  'Paper-based or scattered leave requests',
                  'Disconnected spreadsheets and tools',
                  'Little to no visibility into team availability',
                  'Reports built by hand, after the fact',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-semibold">
                    <span className="font-['Inter'] font-extrabold text-[15.5px] text-[#6B7280]">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Workzi Column */}
            <div className="bg-[#5C5CFF] p-8 sm:p-11 flex flex-col justify-between text-white">
              <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[22px] leading-[34px] tracking-[-0.44px] text-white mb-7">
                Workzi
              </h3>

              <ul className="space-y-4 font-['Inter'] text-[15.5px] leading-[24px] text-white">
                {[
                  'Real-time attendance tracking',
                  'Automated approval workflows',
                  'One-tap leave requests and balances',
                  'Unified platform for attendance, leave & tasks',
                  'Live dashboards for every role',
                  'Reports that build themselves',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-semibold">
                    <span className="font-['Inter'] font-extrabold text-[15.5px] text-white">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4 — ENTERPRISE METRICS */}
      <section className="py-20 sm:py-24 bg-[#0B0E1A] text-white">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[640px] mb-16">
            <div className="inline-flex items-center justify-center px-4 py-2 bg-[#5C5CFF]/18 rounded-full mb-4">
              <span className="font-['Inter'] font-bold text-[13px] leading-[20px] tracking-[1.3px] uppercase text-[#9FA3FF]">
                BUILT FOR SCALE
              </span>
            </div>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-white">
              Enterprise-grade, by design
            </h2>
          </div>

          {/* Metrics Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
            {[
              { val: '99.9%', label: 'Platform Uptime' },
              { val: 'Real-time', label: 'Attendance Sync' },
              { val: '24×7', label: 'System Monitoring' },
              { val: 'Role-based', label: 'Access Control' },
              { val: 'Unlimited', label: 'Employees' },
              { val: 'Multi-location', label: 'Support' },
            ].map((metric, idx) => (
              <div key={idx} className="flex flex-col items-center text-center py-6 px-4 border-b border-white/10 sm:border-b-0">
                <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[40px] sm:text-[48px] leading-[74px] bg-gradient-to-r from-white to-[#9FA3FF] bg-clip-text text-transparent mb-2">
                  {metric.val}
                </div>
                <div className="font-['Inter'] font-semibold text-[14px] leading-[22px] text-[#A1A6B8]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 5 — EDITORIAL NARRATIVE */}
      <section className="py-24 sm:py-32 bg-white">
        <Container className="max-w-[950px] px-4 text-center">
          <div className="flex flex-col items-center justify-center gap-1.5 sm:gap-2.5 font-['Plus_Jakarta_Sans'] text-[24px] sm:text-[34px] lg:text-[38px] leading-[1.3] sm:leading-[50px] lg:leading-[56px]">
            <div className="font-semibold text-[#6B7280]">Attendance shouldn't need a register.</div>
            <div className="font-semibold text-[#6B7280]">Leave shouldn't need a chase.</div>
            <div className="font-semibold text-[#6B7280]">Approvals shouldn't sit in someone's inbox for days.</div>
            <div className="font-semibold text-[#6B7280]">Tasks shouldn't live in five different tools.</div>
            <div className="font-bold text-[#111827] pt-2">Work should just move.</div>
            <div className="font-bold text-[#5C5CFF]">That's why Workzi exists.</div>
          </div>
        </Container>
      </section>

      {/* SECTION 6 — INTERACTIVE PRODUCT EXPERIENCE */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[640px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[40px] leading-[46px] tracking-[-0.8px] text-[#111827] mb-3">
              A platform, not a patchwork
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17.5px] leading-[27px] text-[#6B7280] max-w-[550px]">
              A glimpse across the modules that make up Workzi — not the full application, just the shape of it.
            </p>
          </div>

          {/* Browser Stack Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Attendance Dashboard',
                rows: [
                  { label: 'On Time', val: '96%' },
                  { label: 'Late', val: '4' },
                ],
              },
              {
                title: 'Leave Management',
                rows: [
                  { label: 'Casual Balance', val: '8' },
                  { label: 'Pending', val: '2' },
                ],
              },
              {
                title: 'Task Management',
                rows: [
                  { label: 'Open Tasks', val: '14' },
                  { label: 'Overdue', val: '2' },
                ],
              },
              {
                title: 'Approval Center',
                rows: [
                  { label: 'Awaiting You', val: '3' },
                  { label: 'Approved Today', val: '6' },
                ],
              },
              {
                title: 'Organization Calendar',
                rows: [
                  { label: 'Next Holiday', val: 'Aug 15' },
                  { label: 'On Leave Today', val: '4' },
                ],
              },
              {
                title: 'Workzi AI',
                rows: [
                  { label: '"Who\'s on leave today?"', val: '→' },
                  { label: '"Pending approvals"', val: '→' },
                ],
              },
            ].map((win, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden transition-all duration-200"
              >
                {/* Browser bar */}
                <div className="bg-[#F8FAFC] border-b border-[#E5E7EB] px-3.5 py-2.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
                  <span className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
                  <span className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
                </div>

                {/* Browser body */}
                <div className="p-4">
                  <h4 className="font-['Inter'] font-bold text-[12.5px] leading-[19px] text-[#111827] pb-2 border-b border-slate-100 mb-2">
                    {win.title}
                  </h4>
                  <div className="space-y-1.5">
                    {win.rows.map((row, rIdx) => (
                      <div key={rIdx} className="flex items-center justify-between text-[11px] font-['Inter'] font-semibold py-1">
                        <span className="text-[#6B7280]">{row.label}</span>
                        <span className="text-[#111827]">{row.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 7 — BUSINESS OUTCOMES */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[720px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.12] tracking-[-1px] text-[#111827]">
              What changes when HR runs on Workzi
            </h2>
          </div>

          {/* Outcome Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '⚡',
                title: 'Reduce Manual Work',
                desc: 'Automate the repetitive steps that used to eat up every week.',
              },
              {
                icon: '⏱',
                title: 'Save HR Time',
                desc: 'Spend less time on admin, more time on people.',
              },
              {
                icon: '🎯',
                title: 'Improve Accuracy',
                desc: 'Live data replaces spreadsheets and guesswork.',
              },
              {
                icon: '📈',
                title: 'Increase Productivity',
                desc: 'Clear ownership keeps work — and people — moving.',
              },
              {
                icon: '✓',
                title: 'Standardize Compliance',
                desc: 'Policies apply consistently, every time, everywhere.',
              },
              {
                icon: '🚀',
                title: 'Scale Teams Faster',
                desc: 'Onboard new departments and locations without friction.',
              },
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 flex flex-col items-start gap-2.5 transition-all duration-200"
              >
                {/* Icon box */}
                <div className="w-[46px] h-[46px] rounded-[13px] bg-[#EEEEFF] flex items-center justify-center text-[17px] font-['Inter'] font-extrabold text-[#4A4AE0] mb-2">
                  {outcome.icon}
                </div>

                {/* Title */}
                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px] leading-[28px] tracking-[-0.36px] text-[#111827]">
                  {outcome.title}
                </h4>

                {/* Description */}
                <p className="font-['Inter'] font-normal text-[14.5px] leading-[22px] text-[#6B7280]">
                  {outcome.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 8 — BUILT FOR EVERYONE */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[640px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[40px] leading-[46px] tracking-[-0.8px] text-[#111827]">
              One platform, every role
            </h2>
          </div>

          {/* Persona Row */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'HR Teams',
                desc: 'Configure policies, manage the organization and stay ahead of compliance.',
              },
              {
                title: 'Managers',
                desc: 'See your team\'s attendance, leave and tasks without chasing updates.',
              },
              {
                title: 'Operations',
                desc: 'Keep shifts, locations and approvals running smoothly at scale.',
              },
              {
                title: 'Employees',
                desc: 'Check in, apply leave and track approvals — all from one place.',
              },
            ].map((persona, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[24px] p-6 flex flex-col justify-between items-start gap-2.5 transition-all duration-200"
              >
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[19px] leading-[29px] tracking-[-0.38px] text-[#111827] mb-2">
                    {persona.title}
                  </h4>
                  <p className="font-['Inter'] font-normal text-[13.5px] leading-[21px] text-[#6B7280] mb-4">
                    {persona.desc}
                  </p>
                </div>
                <a
                  href="#features"
                  onClick={scrollToTop}
                  className="font-['Inter'] font-semibold text-[13px] leading-[20px] text-[#5C5CFF] hover:underline inline-flex items-center gap-1"
                >
                  Explore &rarr;
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 9 — ENTERPRISE TRUST */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[748px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.12] tracking-[-1px] text-[#111827]">
              Security your organization can rely on
            </h2>
          </div>

          {/* Trust Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🛡', title: 'Role-Based Access' },
              { icon: '🔒', title: 'End-to-End Encryption' },
              { icon: '🛂', title: 'Governed Permissions' },
              { icon: '📜', title: 'Audit Logs' },
              { icon: '☁', title: 'Cloud Backup' },
              { icon: '🔑', title: 'SSO' },
              { icon: '</>', title: 'Open APIs' },
              { icon: '📈', title: 'Enterprise Scale' },
            ].map((trust, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[18px] p-6 flex flex-col items-center justify-center gap-3.5 text-center transition-all duration-200"
              >
                <div className="w-[38px] h-[38px] rounded-[10px] bg-[#EEEEFF] flex items-center justify-center text-[16px] font-['Inter'] font-extrabold text-[#4A4AE0]">
                  {trust.icon}
                </div>
                <h5 className="font-['Inter'] font-semibold text-[14px] leading-[22px] text-[#111827]">
                  {trust.title}
                </h5>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 10 — CUSTOMER STORIES */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100 overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[640px] mb-14 px-4">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[40px] leading-[46px] tracking-[-0.8px] text-[#111827]">
              Teams running on Workzi
            </h2>
          </div>

          {/* Horizontal Scroll Row */}
          <div className="w-full overflow-x-auto no-scrollbar pb-6 px-4 sm:px-8 lg:px-16">
            <div className="flex flex-row flex-nowrap gap-6 min-w-max">
              {[
                {
                  avatar: 'AK',
                  name: 'Ananya Krishnan',
                  role: 'HR Manager, Retail Chain',
                  quote: '"We used to run attendance across three spreadsheets and a WhatsApp group. Workzi gave us one place to see everything, in real time."',
                  result: 'Attendance visibility in real time',
                },
                {
                  avatar: 'RM',
                  name: 'Rohan Mehta',
                  role: 'Operations Lead, Logistics',
                  quote: '"Approvals used to sit in an inbox for days. Now they\'re done the same afternoon, from my phone."',
                  result: 'Approval time cut significantly',
                },
                {
                  avatar: 'PN',
                  name: 'Priya Nair',
                  role: 'Founder, Services Startup',
                  quote: '"We didn\'t have a dedicated HR team when we started. Workzi let us run lean for a lot longer than we expected."',
                  result: 'Ran lean without added headcount',
                },
                {
                  avatar: 'VN',
                  name: 'Vikram Nair',
                  role: 'People Ops Lead, Manufacturing',
                  quote: '"Shift scheduling across three plants used to be a spreadsheet nightmare. It isn\'t anymore."',
                  result: 'Scheduling consolidated across sites',
                },
                {
                  avatar: 'SK',
                  name: 'Sanjana Kapoor',
                  role: 'HR Manager, Education Group',
                  quote: '"Our staff can finally apply for leave without stopping by the office. It sounds small — it wasn\'t."',
                  result: 'Leave requests fully self-service',
                },
                {
                  avatar: 'TK',
                  name: 'Tarun Kohli',
                  role: 'CFO, Business Owner',
                  quote: '"I trust the numbers I see now. That alone changed how we plan headcount."',
                  result: 'Reliable, real-time workforce data',
                },
              ].map((story, idx) => (
                <div
                  key={idx}
                  className="w-[340px] sm:w-[380px] shrink-0 bg-white border border-[#E5E7EB] rounded-[22px] p-6.5 flex flex-col justify-between items-start gap-4 transition-transform hover:-translate-y-1 duration-200"
                >
                  {/* Story Head */}
                  <div className="flex items-center gap-3">
                    <div className="w-[40px] h-[40px] rounded-full bg-[#EEEEFF] flex items-center justify-center font-['Inter'] font-extrabold text-[14px] text-[#4A4AE0] shrink-0">
                      {story.avatar}
                    </div>
                    <div>
                      <h5 className="font-['Inter'] font-bold text-[14.5px] leading-[22px] text-[#111827]">
                        {story.name}
                      </h5>
                      <p className="font-['Inter'] font-normal text-[12px] leading-[19px] text-[#6B7280]">
                        {story.role}
                      </p>
                    </div>
                  </div>

                  {/* Story Quote */}
                  <p className="font-['Inter'] font-normal text-[14.5px] leading-[23px] text-[#111827] min-h-[69px]">
                    {story.quote}
                  </p>

                  {/* Story Result Pill */}
                  <div className="inline-flex items-center px-3.5 py-1.5 bg-[#EEEEFF] rounded-full text-[#4A4AE0] font-['Inter'] font-medium text-[12.5px] leading-[19px]">
                    {story.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — FINAL CTA */}
      <section className="py-20 sm:py-24 bg-white">
        <Container className="max-w-[1216px] px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#9AA0FF] via-[#5B5FFF] to-[#8A8AFF] rounded-[32px] p-8 sm:p-16 lg:p-20 text-center text-white flex flex-col items-center justify-center">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] leading-[1.2] sm:leading-[64px] tracking-[-1.12px] text-white max-w-[640px] mb-4">
              Ready to transform the way your people work?
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[26px] text-white/85 max-w-[520px] mb-8">
              Bring attendance, leave, tasks and everyday HR operations together — with Workzi.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3.5">
              <a
                href="#pricing"
                onClick={scrollToTop}
                className="px-6 py-3.5 bg-white text-[#5C5CFF] font-['Inter'] font-semibold text-[15px] leading-[24px] rounded-full transition-all duration-200 hover:bg-slate-100"
              >
                Get Started
              </a>
              <a
                href="#contact-support"
                onClick={scrollToTop}
                className="px-6 py-3.5 bg-transparent border border-white/30 text-white font-['Inter'] font-semibold text-[15px] leading-[24px] rounded-full transition-all duration-200 hover:bg-white/10"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default WhyAttendXPage;
