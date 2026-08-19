import React from 'react';
import { Container } from '../Container';

export const AttendXVsTraditionalHRMSPage: React.FC = () => {
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
            <span className="font-semibold text-[#111827]">Workzi vs Traditional HRMS</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-14 pb-20 sm:pb-24 bg-[conic-gradient(from_0.09deg_at_50%_54.26%,#EEEEFF_-88.5deg,#FFFFFF_0.55deg,#FFFFFF_0.58deg,#EEEEFF_82.63deg,#FFFFFF_123.7deg,#FFFFFF_232.58deg,#EEEEFF_271.5deg,#FFFFFF_360.55deg)]">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8">
          {/* Hero Row Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

            {/* Left Column: Hero Text & CTAs */}
            <div className="lg:col-span-6 flex flex-col items-center text-center max-w-[640px] mx-auto lg:mx-0">
              {/* H1 Title */}
              <h1 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] sm:leading-[62px] lg:leading-[66px] tracking-[-1.04px] text-[#111827] max-w-[584px] mb-5">
                Modern work deserves a modern workforce platform.
              </h1>

              {/* Subhead Description */}
              <p className="font-['Inter'] font-normal text-[16px] sm:text-[18px] leading-[28px] text-[#6B7280] max-w-[572px] mb-8">
                Traditional HRMS software helped organizations move beyond paperwork. Workzi goes further — connecting employees, managers and HR teams through one intelligent platform built for how work actually happens today.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center items-center gap-4 w-full">
                <a
                  href="#pricing"
                  onClick={scrollToTop}
                  className="inline-flex items-center justify-center px-8 py-4 h-[58px] min-w-[136px] bg-[#5C5CFF] hover:bg-[#4A4AE0] text-white font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[24px] rounded-[14px] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Start Free
                </a>
                <a
                  href="#contact-support"
                  onClick={scrollToTop}
                  className="inline-flex items-center justify-center px-8 py-4 h-[58px] min-w-[152px] bg-white border border-[#E5E7EB] hover:bg-slate-50 text-[#111827] font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[24px] rounded-[14px] transition-all duration-200 hover:-translate-y-0.5"
                >
                  Book Demo
                </a>
              </div>
            </div>

            {/* Right Column: Visual Gradient Card with Transition Chain */}
            <div className="lg:col-span-6 flex justify-center w-full">
              <div className="w-full max-w-[540px] bg-gradient-to-br from-[#9AA0FF] via-[#C5E2FF] to-[#4F7EFF] rounded-[24px] p-6 sm:p-8 flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-full max-w-[420px] flex flex-col items-center gap-3">

                  {/* Node 1: Traditional HRMS */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-full py-4.5 px-8 flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold text-[18px] leading-[29px] text-[#6B7280] text-center shadow-xs transition-transform hover:scale-102">
                    Traditional HRMS
                  </div>

                  {/* Down Arrow */}
                  <span className="font-['Inter'] font-normal text-[22px] leading-[35px] text-[#6B7280] py-0.5">
                    &darr;
                  </span>

                  {/* Node 2: Disconnected Modules */}
                  <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-full py-4 px-8 flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[24px] text-[#6B7280] text-center shadow-xs transition-transform hover:scale-102">
                    Disconnected Modules
                  </div>

                  {/* Down Arrow */}
                  <span className="font-['Inter'] font-normal text-[22px] leading-[35px] text-[#6B7280] py-0.5">
                    &darr;
                  </span>

                  {/* Node 3: Workzi */}
                  <div className="w-full bg-[#5C5CFF] border border-[#5C5CFF] rounded-full py-4.5 px-8 flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold text-[20px] leading-[32px] text-white text-center shadow-md transition-transform hover:scale-105">
                    Workzi
                  </div>

                  {/* Down Arrow */}
                  <span className="font-['Inter'] font-normal text-[22px] leading-[35px] text-[#6B7280] py-0.5">
                    &darr;
                  </span>

                  {/* Node 4: Connected Workforce Platform */}
                  <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-full py-4 px-8 flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[24px] text-[#6B7280] text-center shadow-xs transition-transform hover:scale-102">
                    Connected Workforce Platform
                  </div>

                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 3. TRADITIONAL HR SOFTWARE SOLVED YESTERDAY'S PROBLEMS */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[920px] px-4 sm:px-6 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827] mb-4">
              Traditional HR software solved yesterday's problems.
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17.5px] leading-[27px] text-[#6B7280] max-w-[622px]">
              Every generation of HR technology answered the challenges of its time. Workzi was built for what comes next.
            </p>
          </div>

          {/* Evolution Grid */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
            {[
              {
                num: '01',
                title: 'Paper → Digital',
                desc: 'HR software first replaced filing cabinets with databases — a foundational shift that made records searchable and secure',
              },
              {
                num: '02',
                title: 'Digital → Connected',
                desc: 'Cloud HRMS brought HR online, but attendance, Time-off, tasks and approvals often stayed siloed in separate modules',
              },
              {
                num: '03',
                title: 'Connected → Intelligent',
                desc: 'Workzi unifies every workforce workflow into one platform, and layers in intelligence that helps teams act faster',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="w-full md:w-[264px] h-auto md:h-[381px] bg-[#F8FAFC] border border-[#E5E7EB] rounded-[24px] p-[42px_36px] flex flex-col items-start gap-[15px] transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default shrink-0"
              >
                <div className="w-full">
                  <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-[14px] leading-[22px] text-[#5C5CFF]">
                    {card.num}
                  </span>
                </div>

                <div className="w-full pt-[8px]">
                  <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[26px] leading-[42px] tracking-[-0.26px] text-[#111827] max-w-[173px]">
                    {card.title}
                  </h3>
                </div>

                <div className="w-full">
                  <p className="font-['Inter'] font-normal text-[15.5px] leading-[25px] text-[#6B7280] max-w-[190px]">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. FOUR DECADES OF HR TECHNOLOGY, IN ONE LINE */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[920px] px-4 sm:px-6 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827]">
              Four decades of HR technology, in one line.
            </h2>
          </div>

          {/* Era Timeline List */}
          <div className="w-full max-w-[720px] divide-y divide-[#E5E7EB]/80">
            {[
              {
                year: '1980',
                title: 'Paper HR',
                desc: 'Personnel files, manual timesheets and filing cabinets',
                active: false,
              },
              {
                year: '2000',
                title: 'Desktop HR',
                desc: 'HR moves onto local software — faster, but still isolated from daily operations',
                active: false,
              },
              {
                year: '2010',
                title: 'Cloud HRMS',
                desc: 'HR software becomes accessible anywhere, though modules often remain disconnected from each other',
                active: false,
              },
              {
                year: 'Today',
                title: 'Connected Workforce Platform',
                desc: 'Workzi brings attendance, Time-off, tasks, approvals and people together — in one continuous experience',
                active: true,
              },
            ].map((era, idx) => (
              <div key={idx} className="py-8 sm:py-9 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10 transition-all duration-200">
                <div className="w-[140px] shrink-0">
                  <span
                    className={`font-['Plus_Jakarta_Sans'] font-semibold text-[20px] sm:text-[22px] leading-[35px] ${era.active ? 'text-[#5C5CFF]' : 'text-[#6B7280]'
                      }`}
                  >
                    {era.year}
                  </span>
                </div>

                <div className="flex flex-col items-start gap-1.5 flex-1">
                  <h4
                    className={`font-['Plus_Jakarta_Sans'] font-semibold text-[22px] sm:text-[24px] leading-[38px] tracking-[-0.24px] ${era.active ? 'text-[#5C5CFF]' : 'text-[#111827]'
                      }`}
                  >
                    {era.title}
                  </h4>
                  <p className="font-['Inter'] font-normal text-[15px] sm:text-[15.5px] leading-[25px] text-[#6B7280]">
                    {era.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. THE DIFFERENCE ISN'T FEATURES. IT'S HOW EVERYTHING WORKS TOGETHER. */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              The difference isn't features. It's how everything works together.
            </h2>
          </div>

          {/* Compare Wrap */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 lg:grid-cols-2 rounded-[28px] overflow-hidden border border-[#E5E7EB] shadow-sm">
            {/* Column A: Traditional HR */}
            <div className="bg-[#F8FAFC] p-8 sm:p-14 flex flex-col items-start gap-7">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] leading-[21px] tracking-[1.04px] uppercase text-[#6B7280]">
                TRADITIONAL HR
              </span>

              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[26px] sm:text-[30px] leading-[48px] tracking-[-0.3px] text-[#111827]">
                Built as separate parts
              </h3>

              <ul className="flex flex-col gap-5 font-['Inter'] font-semibold text-[16px] sm:text-[16.5px] leading-[26px] text-[#6B7280] pt-1">
                {[
                  'Disconnected modules',
                  'Separate workflows',
                  'Department silos',
                  'Multiple screens',
                  'Manual coordination',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3.5">
                    <span className="w-2 h-2 rounded-full bg-[#6B7280] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column B: Workzi (Dark Theme) */}
            <div className="bg-[#0B0E1A] p-8 sm:p-14 flex flex-col items-start gap-7 text-white">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] leading-[21px] tracking-[1.04px] uppercase text-[#A5B4FC]">
                WORKZI
              </span>

              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[26px] sm:text-[30px] leading-[48px] tracking-[-0.3px] text-white">
                Built as one platform
              </h3>

              <ul className="flex flex-col gap-5 font-['Inter'] font-semibold text-[16px] sm:text-[16.5px] leading-[26px] text-white pt-1">
                {[
                  'Connected platform',
                  'Unified workflows',
                  'Shared data',
                  'Simple experience',
                  'AI-assisted operations',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3.5">
                    <span className="w-2 h-2 rounded-full bg-[#5C5CFF] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. BEFORE WORKZI VS WITH WORKZI */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Before Workzi vs With Workzi
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '📋',
                before: 'Attendance in paper registers or siloed biometric logs',
                after: 'Mobile & web check-ins synced live across teams',
              },
              {
                icon: '💬',
                before: 'Time-off requests sent on WhatsApp, emails & verbal notes',
                after: 'One-tap mobile Time-off requests with automatic balance updates',
              },
              {
                icon: '📊',
                before: 'Timesheets compiled manually in Excel at month end',
                after: 'Real-time attendance & overtime data ready for payroll',
              },
              {
                icon: '⚡',
                before: 'Approvals stuck in manager inboxes for days',
                after: 'Push notifications & instant mobile manager approvals',
              },
              {
                icon: '🏢',
                before: 'Different rules & registers for each office branch',
                after: 'Central multi-location dashboard with role permissions',
              },
              {
                icon: '🔍',
                before: 'No clear view of who is working, remote or on Time-off today',
                after: 'Live daily organization status at a glance',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[22px] p-7 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default"
              >
                <div className="w-[42px] h-[42px] rounded-[12px] bg-[#EEEEFF] flex items-center justify-center text-[18px]">
                  {card.icon}
                </div>

                <div className="flex flex-col gap-2 border-b border-slate-100 pb-3">
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11.5px] leading-[18px] tracking-[0.5px] uppercase text-[#EF4444]">
                    BEFORE WORKZI
                  </span>
                  <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#6B7280]">
                    {card.before}
                  </p>
                </div>

                <div className="flex flex-col gap-2 pt-1">
                  <span className="font-['Plus_Jakarta_Sans'] font-bold text-[11.5px] leading-[18px] tracking-[0.5px] uppercase text-[#10B981]">
                    WITH WORKZI
                  </span>
                  <p className="font-['Inter'] font-medium text-[14px] leading-[22px] text-[#111827]">
                    {card.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. THREE REASONS HR TEAMS SWITCH */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Three reasons HR teams switch
            </h2>
          </div>

          {/* 3 Columns */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Higher Employee Adoption',
                desc: 'An intuitive app employees actually enjoy using means less chasing for attendance and Time-off requests.',
              },
              {
                title: 'Faster Operational Speed',
                desc: 'Automated policy checks and instant manager approvals turn days of admin into minutes.',
              },
              {
                title: 'Lower Total Effort',
                desc: 'Fewer disconnected systems means less time reconciling data and fixing payroll discrepancies.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[24px] p-8 sm:p-9 flex flex-col items-start gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default"
              >
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EEEEFF] flex items-center justify-center font-['Plus_Jakarta_Sans'] font-extrabold text-[16px] text-[#5C5CFF]">
                  0{idx + 1}
                </div>

                <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[20px] sm:text-[22px] leading-[32px] text-[#111827]">
                  {card.title}
                </h3>

                <p className="font-['Inter'] font-normal text-[14.5px] leading-[24px] text-[#6B7280]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. WORK IN ONE PLACE */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card A */}
            <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 sm:p-12 flex flex-col items-start gap-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] leading-[21px] tracking-[0.78px] uppercase text-[#6B7280]">
                TRADITIONAL EXPERIENCE
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] sm:text-[26px] leading-[42px] text-[#111827]">
                Work spread across systems
              </h3>
              <div className="flex flex-col gap-3 font-['Inter'] font-semibold text-[16px] leading-[26px] text-[#6B7280] pt-2">
                <p>Employee opens five modules</p>
                <p>Manager searches multiple pages</p>
                <p>HR exports spreadsheets</p>
              </div>
            </div>

            {/* Card B: Workzi Experience */}
            <div className="bg-[#EEEEFF] border border-[#D9D9FF] rounded-[24px] p-8 sm:p-12 flex flex-col items-start gap-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] leading-[21px] tracking-[0.78px] uppercase text-[#5C5CFF]">
                WORKZI EXPERIENCE
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[24px] sm:text-[26px] leading-[42px] text-[#111827]">
                Work in one place
              </h3>
              <div className="flex flex-col gap-3 font-['Inter'] font-semibold text-[16px] leading-[26px] text-[#111827] pt-2">
                <p>Everything connected.</p>
                <p>Everything searchable.</p>
                <p>Everything contextual.</p>
                <p>Everything together.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 9. WHAT ORGANIZATIONS GAIN */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] leading-[21px] tracking-[1.04px] uppercase text-[#5C5CFF] mb-2">
              BUSINESS OUTCOMES
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              What organizations gain
            </h2>
          </div>

          {/* Outcome Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '◆', title: 'Faster onboarding' },
              { icon: '✓', title: 'Simpler approvals' },
              { icon: '◉', title: 'Better visibility' },
              { icon: '▲', title: 'Employee adoption' },
              { icon: '▦', title: 'Reduced administration' },
              { icon: '⚡', title: 'Operational efficiency' },
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[22px] p-8 flex flex-col items-start gap-5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default"
              >
                <div className="w-[46px] h-[46px] rounded-[12px] bg-[#EEEEFF] flex items-center justify-center text-[#5C5CFF] text-[19px] font-bold">
                  {outcome.icon}
                </div>
                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[19px] leading-[30px] text-[#111827]">
                  {outcome.title}
                </h4>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. CHOOSE SOFTWARE THAT GROWS WITH YOUR ORGANIZATION */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827] max-w-[650px] mb-4">
              Choose software that grows with your organization.
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[18px] leading-[29px] text-[#6B7280] max-w-[696px]">
              Workforce complexity grows faster than headcount. Workzi is designed to scale naturally alongside both.
            </p>
          </div>

          {/* Horizontal Growth Scale Chain */}
          <div className="w-full max-w-[1216px] flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { label: '50 Employees', highlight: false },
              { label: '200', highlight: false },
              { label: '500', highlight: false },
              { label: '1000', highlight: false },
              { label: '5000+', highlight: true },
            ].map((node, idx, arr) => (
              <React.Fragment key={idx}>
                <div
                  className={`h-[74px] rounded-full px-7 sm:px-8 flex items-center justify-center font-['Plus_Jakarta_Sans'] font-extrabold text-[18px] sm:text-[20px] leading-[32px] transition-transform hover:scale-105 ${node.highlight
                      ? 'bg-[#5C5CFF] border border-[#5C5CFF] text-white shadow-md'
                      : 'bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827]'
                    }`}
                >
                  {node.label}
                </div>
                {idx < arr.length - 1 && (
                  <span className="font-['Inter'] font-normal text-[20px] leading-[32px] text-[#6B7280] px-1 sm:px-2">
                    &rarr;
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* 11. DARK MANIFESTO BANNER */}
      <section className="py-24 sm:py-32 bg-[#0B0E1A] text-white">
        <Container className="max-w-[820px] px-4 sm:px-6 flex flex-col items-center text-center">
          <div className="flex flex-col items-center justify-center font-['Inter'] font-bold text-[32px] sm:text-[46px] lg:text-[56px] leading-[1.28] tracking-[-0.84px]">
            <div>
              <span className="text-white">Old HR systems </span>
              <span className="text-[#9CA3AF]">manage</span>
            </div>
            <div>
              <span className="text-[#9CA3AF]">records.</span>
            </div>
            <div>
              <span className="text-white">Workzi </span>
              <span className="text-[#A5B4FC]">helps organizations</span>
            </div>
            <div>
              <span className="text-[#A5B4FC]">run better.</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 12. WHAT MODERN TEAMS EXPECT */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              What modern teams expect
            </h2>
          </div>

          {/* Expect Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { role: 'EMPLOYEES', text: 'Mobile-first experience' },
              { role: 'MANAGERS', text: 'Real-time visibility' },
              { role: 'HR', text: 'Automation' },
              { role: 'LEADERSHIP', text: 'Insights' },
              { role: 'IT', text: 'Security' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[20px] p-[30px_22px] flex flex-col items-center text-center gap-3.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-sm cursor-default min-h-[147px] justify-center"
              >
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12.5px] leading-[20px] tracking-[0.5px] uppercase text-[#5C5CFF]">
                  {card.role}
                </span>
                <p className="font-['Inter'] font-semibold text-[16px] leading-[26px] text-[#111827] max-w-[180px]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 13. BUILT FOR ORGANIZATIONS THAT CAN'T COMPROMISE */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[804px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Built for organizations that can't compromise
            </h2>
          </div>

          {/* Enterprise Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '▦', text: 'Role Permissions' },
              { icon: '▤', text: 'Audit Logs' },
              { icon: '☁', text: 'Cloud Infrastructure' },
              { icon: '◆', text: 'Encryption' },
              { icon: '◉', text: 'API Platform' },
              { icon: '✓', text: 'SSO' },
              { icon: '▲', text: 'Compliance Ready' },
              { icon: '⚡', text: 'Modern Authentication' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[18px] p-6 h-[100px] flex items-center gap-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default"
              >
                <div className="w-[38px] h-[38px] rounded-[10px] bg-[#EEEEFF] flex items-center justify-center text-[#5C5CFF] text-[16px] shrink-0 font-bold">
                  {card.icon}
                </div>
                <span className="font-['Inter'] font-semibold text-[14.5px] leading-[23px] text-[#111827]">
                  {card.text}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 14. FROM COMPLEXITY TO CLARITY */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              From complexity to clarity
            </h2>
          </div>

          {/* Horizontal Journey Flow */}
          <div className="w-full max-w-[1216px] flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {[
              { label: 'Traditional HRMS', highlight: false },
              { label: 'Growing Complexity', highlight: false },
              { label: 'Disconnected Processes', highlight: false },
              { label: 'Workzi', highlight: false },
              { label: 'Connected Workforce', highlight: true },
            ].map((node, idx, arr) => (
              <React.Fragment key={idx}>
                <div
                  className={`h-[61px] rounded-[14px] px-6 sm:px-7 flex items-center justify-center font-['Plus_Jakarta_Sans'] font-semibold text-[14.5px] leading-[23px] text-center transition-transform hover:scale-103 ${node.highlight
                      ? 'bg-[#5C5CFF] border border-[#5C5CFF] text-white shadow-md'
                      : 'bg-white border border-[#E5E7EB] text-[#111827]'
                    }`}
                >
                  {node.label}
                </div>
                {idx < arr.length - 1 && (
                  <span className="font-['Inter'] font-normal text-[18px] leading-[29px] text-[#6B7280] px-0.5 sm:px-1">
                    &rarr;
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* 15. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[900px] px-4 sm:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[640px] mb-12">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[28px] text-[#6B7280]">
              Everything organizations ask before switching from a traditional HRMS to Workzi.
            </p>
          </div>

          <div className="w-full max-w-[836px] divide-y divide-slate-100">
            {[
              {
                q: 'How is Workzi different from the HRMS we already use?',
                a: "Most traditional HRMS platforms treat attendance, Time-off, tasks and approvals as separate modules. Workzi connects them into one shared experience, so information entered once is visible everywhere it's needed.",
              },
              {
                q: 'Can we migrate our existing HRMS data into Workzi?',
                a: "Yes. Employee records, attendance history and Time-off balances can be imported during setup, so your organization doesn't start from zero.",
              },
              {
                q: 'Does switching mean retraining our whole HR team?',
                a: 'Not significantly. Workzi is built to feel simpler than a traditional HRMS, not more complex — most HR teams are productive within their first week.',
              },
              {
                q: 'Will our approval chains and policies still work the same way?',
                a: 'Yes. Existing approval hierarchies, Time-off policies and organizational structures can be configured to match how your organization already runs.',
              },
              {
                q: 'Can different departments or locations have different policies?',
                a: 'Yes. Workzi supports department- and location-specific configurations within a single connected platform, rather than separate disconnected instances.',
              },
              {
                q: "What happens to reporting we've built around our current HRMS?",
                a: "Workzi's reporting covers attendance, Time-off and task data out of the box, and data can be exported to fit into existing reporting workflows during the transition.",
              },
              {
                q: 'Is Workzi built for large, multi-location organizations?',
                a: 'Yes. Role-based access, multi-location support and audit logs are built in from the start, not bolted on as an enterprise add-on.',
              },
              {
                q: 'How long does a full HRMS switch typically take?',
                a: 'Timelines vary by organization size, but most teams move from setup to full go-live in a matter of weeks, not months — with the option to roll out department by department.',
              },
            ].map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-6 transition-all duration-200">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-hidden"
                  >
                    <span className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] sm:text-[18px] leading-[28px] text-[#111827] group-hover:text-[#5C5CFF] transition-colors">
                      {faq.q}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[#EEEEFF] text-[#5C5CFF] font-bold text-[18px] flex items-center justify-center shrink-0">
                      {isOpen ? '−' : '+'}
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

      {/* 16. FINAL CTA BANNER */}
      <section className="py-16 sm:py-20 bg-white">
        <Container className="max-w-[1216px] px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#9AA0FF] via-[#5B5FFF] to-[#8A8AFF] rounded-[32px] p-8 sm:p-16 lg:p-20 text-center text-white flex flex-col items-center justify-center shadow-lg">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.2] sm:leading-[64px] tracking-[-1.12px] text-white max-w-[880px] mb-4">
              The future of workforce<br className="hidden sm:inline" />
              management starts here.
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[26px] text-white/85 max-w-[540px] mb-8">
              Move beyond traditional HR software and build a connected<br className="hidden sm:inline" />
              workplace with Workzi.
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

export default AttendXVsTraditionalHRMSPage;
