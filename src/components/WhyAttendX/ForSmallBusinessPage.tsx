import React from 'react';
import { Container } from '../Container';

export const ForSmallBusinessPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* ── BREADCRUMB BAR ── */}
      <div className="w-full bg-white border-b border-[#F1F1F1] pt-[68px]">
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-8 h-[44px] flex items-center gap-[8px]">
          <div className="flex items-center gap-[8px] font-['Inter',sans-serif] text-[13px] leading-[16px] text-[#6B7280]">
            <a href="#home" className="hover:text-[#111827] transition-colors">Home</a>
            <span>/</span>
            <a href="#why-attendx" className="hover:text-[#111827] transition-colors">Why Workzi</a>
            <span>/</span>
            <span className="font-semibold text-[#111827]">For Small Business</span>
          </div>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-14 pb-20 sm:pb-24 bg-[conic-gradient(from_0.09deg_at_50%_54.26%,#EEEEFF_-88.5deg,#FFFFFF_0.55deg,#FFFFFF_0.58deg,#EEEEFF_82.63deg,#FFFFFF_123.7deg,#FFFFFF_232.58deg,#EEEEFF_271.5deg,#FFFFFF_360.55deg)]">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Hero Header Content */}
          <div className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-14">
            {/* H1 Title */}
            <h1 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] sm:leading-[62px] lg:leading-[66px] tracking-[-1.04px] text-[#111827] max-w-[800px] mb-5">
              Enterprise-grade HR,<br className="hidden sm:inline" /> without the enterprise setup.
            </h1>

            {/* Description */}
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[18px] leading-[28px] text-[#6B7280] max-w-[600px] mb-8">
              Workzi helps small and growing teams manage attendance, leave, tasks and approvals — without needing a dedicated HR department to run it.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-3.5">
              <a
                href="#pricing"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[56px] min-w-[131px] bg-[#5C5CFF] hover:bg-[#4A4AE0] text-white font-['Inter'] font-bold text-[15px] leading-[23px] rounded-[14px] transition-all duration-200 hover:-translate-y-0.5"
              >
                Start Free
              </a>
              <a
                href="#contact-support"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[56px] min-w-[142px] bg-white border border-[#E5E7EB] hover:bg-slate-50 text-[#111827] font-['Inter'] font-bold text-[15px] leading-[23px] rounded-[14px] transition-all duration-200 hover:-translate-y-0.5"
              >
                Book Demo
              </a>
            </div>
          </div>

          {/* Hero Ecosystem Graphic Banner */}
          <div className="w-full max-w-[1216px] bg-gradient-to-r from-[#9AA0FF] via-[#C5E2FF] to-[#4F7EFF] rounded-[24px] p-6 sm:p-12 lg:p-16 flex items-center justify-center overflow-x-auto no-scrollbar transition-all duration-200 hover:shadow-md">
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4.5 min-w-[650px] py-4">
              {/* Node 1: Your Business */}
              <div className="bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] px-6 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[15px] leading-[23px] text-white shadow-xs shrink-0 transition-transform hover:scale-105">
                Your Team
              </div>

              {/* Arrow Connector */}
              <span className="font-['Inter'] font-normal text-[20px] text-white/80 shrink-0">
                &rarr;
              </span>

              {/* Node 2: Employees */}
              <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-7 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
                Employees
              </div>

              {/* Arrow Connector */}
              <span className="font-['Inter'] font-normal text-[20px] text-white/80 shrink-0">
                &rarr;
              </span>

              {/* Node 3: Workzi */}
              <div className="bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] px-6 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[15px] leading-[23px] text-white shadow-xs shrink-0 transition-transform hover:scale-105">
                Workzi
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — GROWING WITHOUT THE GROWING PAINS */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827]">
              Growing without<br className="hidden sm:inline" /> the growing pains
            </h2>
          </div>

          {/* Cards 4 Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: '📋',
                title: 'Manual Processes',
                desc: 'Registers and spreadsheets that worked at five people start slipping at fifteen.',
              },
              {
                icon: '👥',
                title: 'Limited HR Bandwidth',
                desc: 'No dedicated HR person shouldn\'t mean no HR system.',
              },
              {
                icon: '🧩',
                title: 'Scattered Tools',
                desc: 'Attendance in one app, leave on WhatsApp, tasks in someone\'s notebook.',
              },
              {
                icon: '💰',
                title: 'Budget Reality',
                desc: 'Enterprise software built for headcounts you don\'t have yet.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[24px] p-7.5 flex flex-col items-start gap-2.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#5C5CFF]/30 cursor-default"
              >
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EEEEFF] flex items-center justify-center text-[16px] font-['Inter'] font-bold text-[#4A4AE0] mb-2 transition-transform hover:scale-110">
                  {card.icon}
                </div>

                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] leading-[26px] tracking-[-0.34px] text-[#111827]">
                  {card.title}
                </h4>

                <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#6B7280]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 3 — ONE PLATFORM. EVERYTHING YOU NEED. */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Feature Text */}
            <div className="lg:col-span-6 flex flex-col items-start text-left max-w-[573px] mx-auto lg:mx-0">
              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] sm:leading-[62px] lg:leading-[66px] tracking-[-1px] text-[#111827] mb-5">
                One platform.<br /> Everything you need.
              </h3>
              <p className="font-['Inter'] font-normal text-[16.5px] sm:text-[17.5px] leading-[27px] text-[#6B7280] max-w-[516px]">
                No modules to bolt on later, no features locked behind a bigger plan you don't need yet — attendance, leave, tasks and approvals, ready from day one.
              </p>
            </div>

            {/* Right Column: Feature Visual Vertical Node Chain */}
            <div className="lg:col-span-6 max-w-[573px] mx-auto w-full">
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[26px] p-8 sm:p-12 flex flex-col items-center transition-all duration-200 hover:shadow-md">
                <div className="w-full max-w-[340px] flex flex-col items-center gap-2">
                  {/* Sign Up */}
                  <div className="w-full bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-white text-center shadow-xs transition-transform hover:scale-102">
                    Sign Up
                  </div>

                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">
                    &darr;
                  </span>

                  {/* Add Your Team */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Add Your Team
                  </div>

                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">
                    &darr;
                  </span>

                  {/* Set Your Policies */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Set Your Policies
                  </div>

                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">
                    &darr;
                  </span>

                  {/* Go Live */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Go Live
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4 — EVERY TEAM MEMBER, CONNECTED */}
      <section className="py-20 sm:py-24 bg-[#785AFD]/15 border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] mb-3">
              Every team member, connected
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17.5px] leading-[27px] text-[#6B7280] max-w-[520px]">
              From the owner's desk to the newest hire, everyone works from the same information.
            </p>
          </div>

          {/* Eco Tree Horizontal Flow */}
          <div className="w-full max-w-[1216px] flex flex-row items-center justify-center gap-3 sm:gap-5 overflow-x-auto no-scrollbar py-2">
            {/* Owner */}
            <div className="bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] px-7 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[15px] leading-[23px] text-white shadow-xs shrink-0 transition-transform hover:scale-105">
              Owner
            </div>

            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">
              &rarr;
            </span>

            {/* Managers */}
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-7 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
              Managers
            </div>

            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">
              &rarr;
            </span>

            {/* Employees */}
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-7 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
              Employees
            </div>

            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">
              &rarr;
            </span>

            {/* Workzi */}
            <div className="bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] px-7 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[15px] leading-[23px] text-white shadow-xs shrink-0 transition-transform hover:scale-105">
              Workzi
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5 — MANIFESTO STATEMENT */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <Container className="max-w-[1000px] px-4 sm:px-6 text-center">
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.25] text-[#111827] tracking-[-0.84px]">
            Small teams shouldn't need big software.<br className="hidden sm:inline" />
            <span className="text-[#5C5CFF]">You don't need an HR department to run HR well.</span>
          </h3>
        </Container>
      </section>

      {/* SECTION 6 — SIMPLE, NOT SIMPLISTIC */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[719px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Simple, not simplistic
            </h2>
          </div>

          {/* Cards 4 Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '⚡', title: 'Easy Setup', desc: 'Up and running in minutes, not months.' },
              { icon: '🛠', title: 'Flexible Policies', desc: 'Custom rules for your specific workflow.' },
              { icon: '📱', title: 'Mobile Access', desc: 'Self-service app for your entire team.' },
              { icon: '💳', title: 'Affordable Plans', desc: 'Transparent pricing that scales with you.' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[24px] p-7.5 flex flex-col items-start gap-2.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#5C5CFF]/30 cursor-default"
              >
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EEEEFF] flex items-center justify-center text-[16px] font-['Inter'] font-bold text-[#4A4AE0] mb-2 transition-transform hover:scale-110">
                  {card.icon}
                </div>

                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] leading-[26px] tracking-[-0.34px] text-[#111827]">
                  {card.title}
                </h4>

                <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#6B7280]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 7 — BUILT TO SCALE WITH YOUR TEAM */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Built to scale with your team
            </h2>
          </div>

          {/* Scale Line Bar Chart */}
          <div className="relative w-full max-w-[1216px] pt-12 pb-4">
            <div className="hidden md:block absolute bottom-[38px] left-[5%] right-[5%] h-[2px] bg-[#E5E7EB] z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-4 items-end relative z-10">
              {[
                { count: '5', label: '5 Team', height: 'h-[30px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '10', label: '10 Team', height: 'h-[55px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '25', label: '25 Team', height: 'h-[80px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '50', label: '50 Team', height: 'h-[105px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '100', label: '100 Team', height: 'h-[135px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '250+', label: '250+ Team', height: 'h-[160px]', bg: 'bg-[#5C5CFF]', text: 'text-white' },
              ].map((stage, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                  <div
                    className={`w-[120px] sm:w-[122px] ${stage.height} ${stage.bg} rounded-t-[10px] flex items-end justify-center pb-2.5 transition-all duration-200 group-hover:-translate-y-1.5 group-hover:shadow-md mb-3`}
                  >
                    <span className={`font-['Plus_Jakarta_Sans'] font-extrabold text-[13px] leading-[20px] ${stage.text}`}>
                      {stage.count}
                    </span>
                  </div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[13.5px] leading-[21px] tracking-[-0.27px] text-[#111827]">
                    {stage.label}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 8 — SECURITY & TRUST */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Trust, built in from day one
            </h2>
          </div>

          {/* Cards 8 Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🔒', title: 'Encryption' },
              { icon: '🛂', title: 'Role Permissions' },
              { icon: '📜', title: 'Audit Logs' },
              { icon: '☁', title: 'Cloud Infrastructure' },
              { icon: '🔑', title: 'Single Sign-On' },
              { icon: '</>', title: 'API Security' },
              { icon: '💾', title: 'Backups' },
              { icon: '📡', title: 'Monitoring' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[20px] p-6.5 flex flex-col items-center text-center gap-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#5C5CFF]/30 cursor-default"
              >
                <div className="w-[40px] h-[40px] rounded-[11px] bg-[#EEEEFF] flex items-center justify-center text-[16px] font-['Inter'] font-bold text-[#4A4AE0] transition-transform hover:scale-110">
                  {card.icon}
                </div>
                <h5 className="font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827]">
                  {card.title}
                </h5>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 9 — WORKFLOWS FOR SMALL BUSINESS */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Workflows built for small business
            </h2>
          </div>

          {/* Workflow Chain */}
          <div className="w-full max-w-[1216px] flex flex-row flex-nowrap md:flex-wrap lg:flex-nowrap items-center justify-between gap-3 overflow-x-auto no-scrollbar py-2">
            {[
              { num: '1', label: 'New Hire' },
              { num: '2', label: 'Invite Team' },
              { num: '3', label: 'Assign Shift' },
              { num: '4', label: 'Daily Check-in' },
              { num: '5', label: 'Leave Request' },
              { num: '6', label: 'Manager Approval' },
            ].map((node, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="min-w-[150px] flex-1 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[18px] px-3.5 py-4.5 flex flex-col items-center gap-2.5 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default">
                  <div className="w-[28px] h-[28px] rounded-full bg-[#EEEEFF] flex items-center justify-center font-['Inter'] font-extrabold text-[12px] text-[#4A4AE0]">
                    {node.num}
                  </div>
                  <span className="font-['Inter'] font-semibold text-[13px] leading-[20px] text-[#111827]">
                    {node.label}
                  </span>
                </div>
                {idx < arr.length - 1 && (
                  <span className="font-['Inter'] font-normal text-[18px] text-[#E5E7EB] shrink-0">
                    &rarr;
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 10 — BUSINESS INSIGHTS */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.12] tracking-[-1px] text-[#111827] mb-3">
              A clear read on your business
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17.5px] leading-[27px] text-[#6B7280]">
              Instant summaries without spending hours in spreadsheets.
            </p>
          </div>

          {/* Metric Cards 6 Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                eyebrow: 'TEAM HEALTH',
                val: 'Optimal',
                sub: 'Across all team members',
              },
              {
                eyebrow: 'ATTENDANCE TODAY',
                val: '98%',
                sub: 'Checked in on time',
              },
              {
                eyebrow: 'ACTIVE TEAMS',
                val: '4',
                sub: 'Departments active',
              },
              {
                eyebrow: 'PENDING REQUESTS',
                val: '3',
                sub: 'Awaiting quick review',
              },
              {
                eyebrow: 'TOTAL EMPLOYEES',
                val: '28',
                sub: 'Active workforce members',
              },
              {
                eyebrow: 'UPCOMING LEAVE',
                val: '2',
                sub: 'Employees scheduled off',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 flex flex-col justify-between items-start gap-1 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#5C5CFF]/30 cursor-default"
              >
                <div className="font-['Inter'] font-bold text-[12.5px] leading-[19px] tracking-[0.5px] uppercase text-[#6B7280]">
                  {card.eyebrow}
                </div>
                <div className="font-['Plus_Jakarta_Sans'] font-semibold text-[22px] leading-[34px] text-[#111827] py-1">
                  {card.val}
                </div>
                <div className="font-['Inter'] font-normal text-[12.5px] leading-[19px] text-[#6B7280]">
                  {card.sub}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 11 — WHY SMALL BUSINESSES CHOOSE US */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Six reasons small businesses choose Workzi
            </h2>
          </div>

          {/* Cards 6 Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: '⚡',
                title: 'Instant Setup',
                desc: 'Create your workspace and invite employees in under 5 minutes.',
              },
              {
                icon: '📱',
                title: 'Self-Service App',
                desc: 'Employees punch in, request leave and check shifts from mobile.',
              },
              {
                icon: '⚙',
                title: 'Simple Administration',
                desc: 'Owner and manager controls that require zero training.',
              },
              {
                icon: '💳',
                title: 'Budget Friendly',
                desc: 'Affordable pricing tailored to small business headcount.',
              },
              {
                icon: '🔗',
                title: 'All-in-One Platform',
                desc: 'Attendance, leave, tasks and approvals in one place.',
              },
              {
                icon: '📐',
                title: 'Scalable Foundation',
                desc: 'Grows smoothly from 5 to 500+ employees.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[24px] p-7.5 flex flex-col items-start gap-2.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#5C5CFF]/30 cursor-default"
              >
                <div className="w-[44px] h-[44px] rounded-[12px] bg-white border border-[#E5E7EB] flex items-center justify-center text-[16px] font-['Inter'] font-bold text-[#4A4AE0] mb-2 transition-transform hover:scale-110">
                  {card.icon}
                </div>

                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] leading-[26px] tracking-[-0.34px] text-[#111827]">
                  {card.title}
                </h4>

                <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#6B7280]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 12 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[900px] px-4 sm:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[640px] mb-12">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[42px] leading-[46px] tracking-[-0.88px] text-[#111827] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[28px] text-[#6B7280]">
              Everything small businesses ask before switching to Workzi.
            </p>
          </div>

          <div className="w-full max-w-[836px] divide-y divide-slate-100">
            {[
              {
                q: 'How fast can we set up Workzi for our small team?',
                a: 'You can create your organization workspace, set up work policies and invite your employees in less than 5 minutes — no technical setup required.',
              },
              {
                q: 'Do we need a dedicated HR team to manage Workzi?',
                a: 'No. Workzi is designed specifically so business owners, managers or office administrators can effortlessly oversee workforce operations in minutes a day.',
              },
              {
                q: 'Can employees mark attendance directly from their smartphones?',
                a: 'Yes. Employees use the Workzi self-service mobile app to check in, request leave, view shifts and manage daily tasks directly from their phone.',
              },
              {
                q: 'How does leave request and manager approval work?',
                a: 'Employees submit leave requests in the app. Managers receive instant notifications and can approve or decline with a single tap.',
              },
              {
                q: 'What happens as our business grows beyond 20 or 50 employees?',
                a: 'Workzi scales seamlessly. You don\'t need to migrate data or switch platforms — new team members and departments integrate automatically into your existing account.',
              },
              {
                q: 'Is there a free trial or free tier available?',
                a: 'Yes. You can get started for free without a credit card to explore the full feature set with your team.',
              },
            ].map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-6 transition-all duration-200">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-hidden"
                  >
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-[16.5px] leading-[21px] text-[#111827] group-hover:text-[#5C5CFF] transition-colors">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-[8px] flex items-center justify-center text-[14px] font-bold shrink-0 transition-all duration-200 ${
                        isOpen
                          ? 'bg-[#5B5FFF] text-white rotate-45'
                          : 'bg-[#EEEEFF] text-[#5B5FFF] group-hover:bg-[#5B5FFF] group-hover:text-white'
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-3.5 font-['Inter'] font-normal text-[15px] leading-[25px] text-[#6B7280] max-w-[800px] transition-all duration-200">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="py-16 sm:py-20 bg-white">
        <Container className="max-w-[1216px] px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#9AA0FF] via-[#5B5FFF] to-[#8A8AFF] rounded-[32px] p-8 sm:p-16 lg:p-20 text-center text-white flex flex-col items-center justify-center">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.2] sm:leading-[64px] tracking-[-1.12px] text-white max-w-[880px] mb-4">
              Enterprise-grade HR,<br className="hidden sm:inline" />
              without the enterprise setup.
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[26px] text-white/85 max-w-[520px] mb-8">
              Simplify attendance, leave and workforce management for your growing team.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3.5">
              <a
                href="#pricing"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[52px] min-w-[120px] bg-white text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] rounded-full transition-all duration-200 hover:bg-slate-100 hover:-translate-y-0.5"
              >
                Start Free
              </a>
              <a
                href="#contact-support"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[52px] min-w-[145px] bg-transparent border border-white/30 text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] rounded-full transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
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

export default ForSmallBusinessPage;
