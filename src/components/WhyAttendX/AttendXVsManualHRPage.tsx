import React from 'react';
import { Container } from '../Container';

export const AttendXVsManualHRPage: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

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
            <span className="font-semibold text-[#111827]">Workzi vs Manual HR</span>
          </div>
        </div>
      </div>

      {/* SECTION 1 — HERO SECTION */}
      <section className="relative pt-14 pb-20 sm:pb-24 bg-[conic-gradient(from_0.09deg_at_50%_54.26%,#EEEEFF_-88.5deg,#FFFFFF_0.55deg,#FFFFFF_0.58deg,#EEEEFF_82.63deg,#FFFFFF_123.7deg,#FFFFFF_232.58deg,#EEEEFF_271.5deg,#FFFFFF_360.55deg)]">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">


          {/* Hero Content */}
          <div className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-16">
            {/* H1 Title */}
            <h1 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] sm:leading-[62px] lg:leading-[66px] tracking-[-1.04px] text-[#111827] max-w-[836px] mb-5">
              Your workforce grew up.<br className="hidden sm:inline" /> Your HR process didn't.
            </h1>

            {/* Description */}
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[18px] leading-[28px] text-[#6B7280] max-w-[620px] mb-8">
              What works for ten people falls apart at fifty, and breaks completely at five hundred. Workzi replaces registers, spreadsheets and WhatsApp approvals with one connected platform your whole organization can run on.
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

          {/* Transform Graphic Row */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">

            {/* Left Column: Tilted Legacy Stack Cards */}
            <div className="lg:col-span-5 flex flex-col gap-3 max-w-[568px] mx-auto w-full">
              {[
                { label: '📋 Paper Register', tilt: '-rotate-1' },
                { label: '📊 Excel Sheet', tilt: 'rotate-1' },
                { label: '💬 WhatsApp Approvals', tilt: '-rotate-0.5' },
                { label: '✉ Email Requests', tilt: '-rotate-1' },
                { label: '👆 Standalone Biometric', tilt: '-rotate-1' },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-white/70 backdrop-blur-xs border border-[#E5E7EB] rounded-[14px] px-4 py-3.5 flex items-center transition-all duration-200 hover:rotate-0 hover:-translate-y-0.5 hover:bg-white hover:shadow-xs cursor-default ${item.tilt}`}
                >
                  <span className="font-['Inter'] font-bold text-[13.5px] leading-[21px] text-[#6B7280]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Center Arrow */}
            <div className="lg:col-span-2 flex items-center justify-center py-2">
              <span className="font-['Inter'] font-normal text-[32px] sm:text-[40px] text-[#5C5CFF] animate-pulse">
                &rarr;
              </span>
            </div>

            {/* Right Column: Modern Workzi Card */}
            <div className="lg:col-span-5 max-w-[568px] mx-auto w-full">
              <div className="bg-white border border-[#E5E7EB] rounded-[20px] p-6 sm:p-7 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#5C5CFF]/30">
                <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[16px] leading-[25px] text-[#5C5CFF] pb-2 border-b border-slate-100">
                  Workzi
                </div>

                {[
                  { label: 'Attendance', pill: 'Live' },
                  { label: 'Time-off', pill: 'Connected' },
                  { label: 'Approvals', pill: 'Digital' },
                  { label: 'Reports', pill: 'Instant' },
                ].map((row, rIdx) => (
                  <div key={rIdx} className="flex items-center justify-between py-1 border-b border-slate-50 last:border-b-0">
                    <span className="font-['Inter'] font-semibold text-[13px] leading-[20px] text-[#111827]">
                      {row.label}
                    </span>
                    <span className="inline-flex items-center justify-center px-3 py-1 bg-[#EEEEFF] rounded-full text-[#4A4AE0] font-['Inter'] font-semibold text-[10.5px] leading-[16px] transition-transform hover:scale-105">
                      {row.pill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* SECTION 2 — MANUAL HR PAINS */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* div.section-head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827]">
              Manual HR works... until it doesn't.
            </h2>
          </div>

          {/* div.pain-grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '📋',
                title: 'Paper Registers',
                desc: 'Accuracy slips the moment headcount climbs past a handful of people.',
              },
              {
                icon: '📊',
                title: 'Spreadsheets',
                desc: 'Version conflicts pile up across files nobody\'s sure are current.',
              },
              {
                icon: '✉',
                title: 'Email Requests',
                desc: 'Approvals get buried in inboxes no one\'s watching closely.',
              },
              {
                icon: '💬',
                title: 'WhatsApp Messages',
                desc: 'No record of what was approved, by whom, or when.',
              },
              {
                icon: '📑',
                title: 'Manual Reports',
                desc: 'Hours spent answering questions the data should answer instantly.',
              },
              {
                icon: '🗂',
                title: 'Disconnected Systems',
                desc: 'Information scattered everywhere — and reliable nowhere.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 flex flex-col items-start gap-2.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#5C5CFF]/30 cursor-default"
              >
                <div className="w-[46px] h-[46px] rounded-[13px] bg-[#F8FAFC] flex items-center justify-center text-[18px] font-['Inter'] text-[#111827] mb-2 transition-transform hover:scale-110">
                  {card.icon}
                </div>

                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px] leading-[28px] tracking-[-0.36px] text-[#111827]">
                  {card.title}
                </h4>

                <p className="font-['Inter'] font-normal text-[14.5px] leading-[22px] text-[#6B7280]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 3 — GROWTH CHANGES EVERYTHING */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* div.section-head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827] mb-4">
              Complexity grows with headcount.
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17.5px] leading-[27px] text-[#6B7280] max-w-[640px]">
              What's manageable at ten people becomes a different problem entirely at five hundred.
            </p>
          </div>

          {/* div.growth-line (Chart Timeline) */}
          <div className="relative w-full max-w-[1216px] pt-12 pb-4">
            <div className="hidden md:block absolute bottom-[88px] left-[5%] right-[5%] h-[2px] bg-[#E5E7EB] z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 items-end relative z-10">
              {[
                {
                  count: '10',
                  heightClass: 'h-[40px]',
                  bgClass: 'bg-[#EEEEFF]',
                  textClass: 'text-[#4A4AE0]',
                  title: '10 Employees',
                  subtitle: 'Manageable by memory',
                },
                {
                  count: '25',
                  heightClass: 'h-[60px]',
                  bgClass: 'bg-[#EEEEFF]',
                  textClass: 'text-[#4A4AE0]',
                  title: '25 Employees',
                  subtitle: 'Spreadsheets start to strain',
                },
                {
                  count: '50',
                  heightClass: 'h-[85px]',
                  bgClass: 'bg-[#EEEEFF]',
                  textClass: 'text-[#4A4AE0]',
                  title: '50 Employees',
                  subtitle: 'Approvals begin slipping',
                },
                {
                  count: '100',
                  heightClass: 'h-[115px]',
                  bgClass: 'bg-[#EEEEFF]',
                  textClass: 'text-[#4A4AE0]',
                  title: '100 Employees',
                  subtitle: 'Visibility becomes a full-time job',
                },
                {
                  count: '500+',
                  heightClass: 'h-[150px]',
                  bgClass: 'bg-[#5C5CFF]',
                  textClass: 'text-white',
                  title: '500+ Employees',
                  subtitle: 'Manual process breaks down completely',
                },
              ].map((stage, idx) => (
                <div key={idx} className="flex flex-col items-center text-center px-2 group cursor-pointer">
                  <div
                    className={`w-[140px] sm:w-[145px] ${stage.heightClass} ${stage.bgClass} rounded-t-[10px] flex items-end justify-center pb-2.5 transition-all duration-200 group-hover:-translate-y-1.5 group-hover:shadow-md mb-3`}
                  >
                    <span className={`font-['Plus_Jakarta_Sans'] font-extrabold text-[14px] leading-[22px] ${stage.textClass}`}>
                      {stage.count}
                    </span>
                  </div>

                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[14.5px] leading-[22px] tracking-[-0.29px] text-[#111827] mb-1 group-hover:text-[#5C5CFF] transition-colors">
                    {stage.title}
                  </h4>

                  <p className="font-['Inter'] font-normal text-[12px] leading-[19px] text-[#6B7280]">
                    {stage.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4 — BEFORE/AFTER */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[660px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827]">
              A different way to run HR
            </h2>
          </div>

          <div className="w-full max-w-[1216px] bg-white border border-[#E5E7EB] rounded-[28px] overflow-hidden grid grid-cols-1 md:grid-cols-2 transition-all duration-200 hover:shadow-md">
            {/* Left Column: Manual HR */}
            <div className="bg-[#F8FAFC] p-8 sm:p-12 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E5E7EB]">
              <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[22px] leading-[34px] tracking-[-0.44px] text-[#111827] mb-7">
                Manual HR
              </h3>

              <ul className="space-y-4 font-['Inter'] text-[15px] leading-[23px] text-[#111827]">
                {[
                  'Attendance register',
                  'Excel sheets',
                  'Email threads',
                  'WhatsApp groups',
                  'Manual reports',
                  'Paper Time-off forms',
                  'Data typed in more than once',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-semibold">
                    <span className="font-['Inter'] font-extrabold text-[15px] text-[#6B7280]">
                      —
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Workzi */}
            <div className="bg-[#5C5CFF] p-8 sm:p-12 flex flex-col justify-between text-white">
              <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[22px] leading-[34px] tracking-[-0.44px] text-white mb-7">
                Workzi
              </h3>

              <ul className="space-y-4 font-['Inter'] text-[15px] leading-[23px] text-white">
                {[
                  'Live attendance',
                  'Connected Time-off management',
                  'Digital approvals',
                  'Employee self-service',
                  'AI assistant',
                  'Task management',
                  'Organization-wide visibility',
                  'One connected platform',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 font-semibold">
                    <span className="font-['Inter'] font-extrabold text-[15px] text-white">
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

      {/* SECTION 5 — HIDDEN COSTS */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827] mb-4">
              Every manual process creates hidden costs.
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17.5px] leading-[27px] text-[#6B7280] max-w-[442px]">
              Not always visible on a balance sheet, but felt every week by the people doing the work.
            </p>
          </div>

          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                eyebrow: 'REPORTS',
                title: 'Hours spent building attendance and Time-off summaries by hand',
              },
              {
                eyebrow: 'CORRECTIONS',
                title: 'Back-and-forth to fix attendance discrepancies no one caught early',
              },
              {
                eyebrow: 'APPROVALS',
                title: 'Requests that sit unanswered until someone follows up',
              },
              {
                eyebrow: 'DATA ENTRY',
                title: 'The same information typed into more than one place',
              },
              {
                eyebrow: 'PAYROLL PREP',
                title: 'Reconciling attendance and Time-off before every single pay cycle',
              },
              {
                eyebrow: 'EMPLOYEE WAITING',
                title: 'Time people lose waiting on answers that should be instant',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[20px] p-6.5 flex flex-col justify-between items-start gap-2.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#5C5CFF]/30 cursor-default"
              >
                <div className="font-['Inter'] font-bold text-[13px] leading-[20px] tracking-[0.52px] uppercase text-[#6B7280] pb-1">
                  {card.eyebrow}
                </div>
                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[17px] leading-[24px] text-[#111827]">
                  {card.title}
                </h4>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 6 — EDITORIAL STATEMENT */}
      <section className="py-24 sm:py-32 bg-white border-t border-slate-100">
        <Container className="max-w-[800px] px-4 text-center">
          <div className="flex flex-col items-center justify-center font-['Plus_Jakarta_Sans'] font-extrabold text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.25] tracking-[-0.96px]">
            <span className="text-[#111827]">Manual work</span>
            <span className="text-[#6B7280]">doesn't scale.</span>
            <span className="text-[#5C5CFF]">Your people do.</span>
          </div>
        </Container>
      </section>

      {/* SECTION 7 — TRANSFORMATION FLOW */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[40px] leading-[46px] tracking-[-0.8px] text-[#111827]">
              The same day, two different processes
            </h2>
          </div>

          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Left Column: Old Process */}
            <div className="flex flex-col items-center gap-5">
              <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[23px] tracking-[0.6px] uppercase text-[#6B7280]">
                OLD PROCESS
              </h4>

              <div className="w-full flex flex-col items-center gap-2">
                {[
                  'Employee writes attendance',
                  'HR updates spreadsheet',
                  'Manager verifies manually',
                  'Payroll reconciles by hand',
                  'Reports built from scratch',
                ].map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="w-full bg-white border border-[#E5E7EB] rounded-[14px] px-5 py-4 flex items-center justify-center font-['Inter'] font-semibold text-[14px] leading-[22px] text-[#111827] text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs cursor-default">
                      {step}
                    </div>
                    {idx < arr.length - 1 && (
                      <span className="font-['Inter'] font-normal text-[18px] text-[#E5E7EB] py-0.5">
                        &darr;
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Right Column: With Workzi */}
            <div className="flex flex-col items-center gap-5">
              <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[23px] tracking-[0.6px] uppercase text-[#6B7280]">
                WITH WORKZI
              </h4>

              <div className="w-full flex flex-col items-center gap-2">
                {[
                  'Employee checks in',
                  'Attendance recorded instantly',
                  'Manager notified automatically',
                  'Payroll-ready records, always current',
                  'Reports available on demand',
                ].map((step, idx, arr) => (
                  <React.Fragment key={idx}>
                    <div className="w-full bg-[#EEEEFF] border border-[#EEEEFF] rounded-[14px] px-5 py-4 flex items-center justify-center font-['Inter'] font-semibold text-[14px] leading-[22px] text-[#4A4AE0] text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs cursor-default">
                      {step}
                    </div>
                    {idx < arr.length - 1 && (
                      <span className="font-['Inter'] font-normal text-[18px] text-[#E5E7EB] py-0.5">
                        &darr;
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 8 — BUSINESS OUTCOMES */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[776px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.12] tracking-[-1px] text-[#111827]">
              What changes when you move on from manual HR
            </h2>
          </div>

          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '⚡',
                title: 'Less Manual Work',
                desc: 'Fewer repetitive tasks eating into the workday.',
              },
              {
                icon: '⏱',
                title: 'Faster Approvals',
                desc: 'Requests move the same day instead of sitting in an inbox.',
              },
              {
                icon: '🎯',
                title: 'Accurate Attendance',
                desc: 'Live records replace registers and guesswork.',
              },
              {
                icon: '👁',
                title: 'Better Visibility',
                desc: 'See the whole organization from one screen.',
              },
              {
                icon: '📱',
                title: 'Employee Self-Service',
                desc: 'People handle everyday requests on their own.',
              },
              {
                icon: '🚀',
                title: 'More Productive HR Teams',
                desc: 'Less admin, more time for people.',
              },
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[24px] p-8 flex flex-col items-start gap-2.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#5C5CFF]/30 cursor-default"
              >
                <div className="w-[46px] h-[46px] rounded-[13px] bg-[#EEEEFF] flex items-center justify-center text-[17px] font-['Inter'] font-extrabold text-[#4A4AE0] mb-2 transition-transform hover:scale-110">
                  {outcome.icon}
                </div>

                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px] leading-[28px] tracking-[-0.36px] text-[#111827]">
                  {outcome.title}
                </h4>

                <p className="font-['Inter'] font-normal text-[14.5px] leading-[22px] text-[#6B7280]">
                  {outcome.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 9 — SIDE BY SIDE COMPARISON */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              See the difference
            </h2>
          </div>

          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Manual HR */}
            <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-3 sm:p-4 flex flex-col transition-all duration-200 hover:shadow-md">
              <div className="px-6 py-5 border-b border-slate-100 font-['Plus_Jakarta_Sans'] font-extrabold text-[17px] leading-[26px] text-[#111827]">
                Manual HR
              </div>

              <div className="divide-y divide-slate-100 font-['Inter'] text-[13.5px] leading-[21px]">
                {[
                  { cat: 'Attendance', val: 'Register or biometric export' },
                  { cat: 'Time-off', val: 'Paper forms or email' },
                  { cat: 'Approvals', val: 'WhatsApp or verbal' },
                  { cat: 'Tasks', val: 'Untracked, informal' },
                  { cat: 'Reporting', val: 'Manual, built by hand' },
                  { cat: 'Employee Experience', val: 'Dependent on HR availability' },
                  { cat: 'Scalability', val: 'Breaks down with headcount' },
                  { cat: 'Security', val: 'No consistent access control' },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-slate-50">
                    <span className="font-bold text-[#6B7280]">{row.cat}</span>
                    <span className="font-semibold text-[#111827] text-right">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Workzi */}
            <div className="bg-white border border-[#5C5CFF] rounded-[24px] p-3 sm:p-4 flex flex-col transition-all duration-200 hover:shadow-md">
              <div className="px-6 py-5 border-b border-slate-100 font-['Plus_Jakarta_Sans'] font-extrabold text-[17px] leading-[26px] text-[#5C5CFF]">
                Workzi
              </div>

              <div className="divide-y divide-slate-100 font-['Inter'] text-[13.5px] leading-[21px]">
                {[
                  { cat: 'Attendance', val: 'Live, connected records' },
                  { cat: 'Time-off', val: 'Digital request & tracking' },
                  { cat: 'Approvals', val: 'In-platform, auditable' },
                  { cat: 'Tasks', val: 'Assigned & tracked' },
                  { cat: 'Reporting', val: 'Instant, always current' },
                  { cat: 'Employee Experience', val: 'Self-service, anytime' },
                  { cat: 'Scalability', val: 'Grows with the organization' },
                  { cat: 'Security', val: 'Role-based access built in' },
                ].map((row, idx) => (
                  <div key={idx} className="flex items-center justify-between px-6 py-4 transition-colors hover:bg-[#F3F4FE]">
                    <span className="font-bold text-[#6B7280]">{row.cat}</span>
                    <span className="font-semibold text-[#4A4AE0] text-right">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 10 — BUILT FOR GROWING ORGANIZATIONS */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.12] tracking-[-1px] text-[#111827]">
              Every stage breaks down differently
            </h2>
          </div>

          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                stage: 'Stage 1',
                title: 'Startup',
                desc: 'A spreadsheet is enough — until the first hire who isn\'t in the room every day.',
              },
              {
                stage: 'Stage 2',
                title: 'Growing Business',
                desc: 'Approvals start slipping through WhatsApp and email as the team spreads out.',
              },
              {
                stage: 'Stage 3',
                title: 'Mid-size Company',
                desc: 'Multiple departments and locations make manual visibility nearly impossible.',
              },
              {
                stage: 'Stage 4',
                title: 'Enterprise',
                desc: 'Consistency, security and reporting need to hold up across hundreds of people.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[22px] p-7 flex flex-col items-start gap-2.5 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-[#5C5CFF]/30 cursor-default"
              >
                <div className="font-['Inter'] font-bold text-[12px] leading-[19px] tracking-[0.48px] uppercase text-[#5C5CFF] pb-1">
                  {card.stage}
                </div>
                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[18px] leading-[28px] tracking-[-0.36px] text-[#111827]">
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

      {/* SECTION 11 — MIGRATION STORY */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[660px] mb-14">
            <span className="font-['Inter'] font-bold text-[13px] leading-[20px] tracking-[1.3px] uppercase text-[#5C5CFF] mb-2">
              MIGRATION
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Moving from manual HR doesn't have to be difficult
            </h2>
          </div>

          <div className="w-full max-w-[1216px] flex flex-row flex-nowrap md:flex-wrap lg:flex-nowrap items-center justify-between gap-3 overflow-x-auto no-scrollbar py-2">
            {[
              { num: '1', label: 'Current Process' },
              { num: '2', label: 'Import Employees' },
              { num: '3', label: 'Configure Organization' },
              { num: '4', label: 'Invite Employees' },
              { num: '5', label: 'Go Live' },
            ].map((node, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="min-w-[160px] flex-1 bg-white border border-[#E5E7EB] rounded-[18px] px-3.5 py-5 flex flex-col items-center gap-3 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default">
                  <div className="w-[30px] h-[30px] rounded-full bg-[#EEEEFF] flex items-center justify-center font-['Inter'] font-extrabold text-[13px] text-[#4A4AE0]">
                    {node.num}
                  </div>
                  <span className="font-['Inter'] font-bold text-[13.5px] leading-[21px] text-[#111827]">
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

      {/* SECTION 12 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[900px] px-4 sm:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[640px] mb-12">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[28px] text-[#6B7280]">
              Everything teams ask before switching to Workzi.
            </p>
          </div>

          <div className="w-full max-w-[836px] divide-y divide-slate-100">
            {[
              {
                q: 'Do we lose historical attendance data when we switch?',
                a: 'No. Existing attendance and Time-off records can be imported during setup, so your team starts on Workzi with full history intact.',
              },
              {
                q: 'How long does migration actually take?',
                a: 'Most teams go live within a few days — import employees, configure your policies, and invite your team. No lengthy implementation cycles.',
              },
              {
                q: 'Can we run Workzi alongside our current process during the switch?',
                a: 'Yes. You can onboard department by department, so there\'s no single cutover day where everything has to work perfectly at once.',
              },
              {
                q: 'What happens to approvals that are already in progress on WhatsApp or email?',
                a: 'Anything pending at go-live can be logged and picked up in Workzi, so nothing falls through the cracks during the switch.',
              },
              {
                q: 'Do employees need training to use Workzi?',
                a: 'Minimal. Checking in, applying for Time-off and tracking tasks are built to be as simple as the manual version — without the manual part.',
              },
              {
                q: 'Can HR still export data the way they do today?',
                a: 'Yes. Reports and records can be exported anytime, so nothing about your current reporting habits has to change unless you want it to.',
              },
              {
                q: 'What if our organization has multiple locations or departments?',
                a: 'Workzi is built for exactly that — separate teams, departments and locations, all visible from one connected platform.',
              },
              {
                q: 'Is our data secure during and after migration?',
                a: 'Yes. Role-based access, encryption and audit logs apply from day one, including during the import process.',
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
                      className={`w-7 h-7 rounded-[8px] flex items-center justify-center text-[14px] font-bold shrink-0 transition-all duration-200 ${isOpen
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
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.2] sm:leading-[60px] tracking-[-1.12px] text-white max-w-[880px] mb-4">
              Stop managing HR manually.<br className="hidden sm:inline" />
              Start managing your workforce<br className="hidden sm:inline" />
              intelligently.
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[26px] text-white/85 max-w-[520px] mb-8">
              Bring attendance, Time-off, approvals and everyday HR operations into one connected platform.
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

export default AttendXVsManualHRPage;
