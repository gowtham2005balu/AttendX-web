import React from 'react';
import { Container } from '../Container';

export const ScaleWithAttendXPage: React.FC = () => {
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
            <span className="font-semibold text-[#111827]">Scale with Workzi</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-14 pb-20 sm:pb-28 bg-[conic-gradient(from_0.09deg_at_50%_54.26%,#EEEEFF_-88.5deg,#FFFFFF_0.55deg,#FFFFFF_0.58deg,#EEEEFF_82.63deg,#FFFFFF_123.7deg,#FFFFFF_232.58deg,#EEEEFF_271.5deg,#FFFFFF_360.55deg)]">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-[1216px] mx-auto">
            {/* H1 Title */}
            <h1 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.2] sm:leading-[66px] tracking-[-1.04px] text-[#111827] max-w-[760px] mb-5">
              Built for where your business is going.
            </h1>

            {/* Subhead Description */}
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[18px] leading-[28px] text-[#6B7280] max-w-[620px] mb-8">
              Whether you're hiring your first employees or expanding across multiple offices, Workzi grows with your organization — without adding unnecessary complexity.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-[16px] mb-12">
              <a
                href="#pricing"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-8 py-4 h-[58px] min-w-[136px] bg-[#5C5CFF] hover:bg-[#4A4AE0] text-white font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[24px] rounded-[14px] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                Start Free
              </a>
              <a
                href="#contact-support"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-8 py-4 h-[58px] min-w-[152px] bg-white border border-[#E5E7EB] hover:bg-slate-50 hover:border-[#C7D2FE] text-[#111827] font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[24px] rounded-[14px] transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md"
              >
                Book Demo
              </a>
            </div>

            {/* Growth Scale Chain */}
            <div className="w-full max-w-[1216px] flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 pt-4">
              {[
                { label: '10 Employees', highlight: false },
                { label: '50', highlight: false },
                { label: '100', highlight: false },
                { label: '500', highlight: false },
                { label: '1000', highlight: false },
                { label: '5000+', highlight: true },
              ].map((node, idx, arr) => (
                <React.Fragment key={idx}>
                  <div
                    className={`flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold transition-all duration-300 hover:scale-105 cursor-pointer ${node.highlight
                        ? 'h-[76px] px-9 rounded-full bg-[#5C5CFF] border border-[#5C5CFF] text-white text-[19px] leading-[30px] shadow-[0px_16px_40px_rgba(92,92,255,0.2)] hover:shadow-[0px_20px_50px_rgba(92,92,255,0.3)]'
                        : 'h-[52px] px-6 rounded-full bg-white border border-[#E5E7EB] text-[#5C5CFF] text-[14px] sm:text-[15px] leading-[24px] shadow-[0px_10px_26px_rgba(17,24,39,0.06)] hover:shadow-[0px_14px_32px_rgba(124,58,237,0.12)] hover:border-[#C7D2FE]'
                      }`}
                  >
                    {node.label}
                  </div>
                  {idx < arr.length - 1 && (
                    <span className="font-['Inter'] font-normal text-[20px] leading-[32px] text-[#6B7280] px-1 sm:px-1.5 select-none">
                      &rarr;
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. GROWTH CHANGES EVERYTHING. YOUR PLATFORM SHOULDN'T. */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Growth changes everything.<br className="hidden sm:inline" /> Your platform shouldn't.
            </h2>
          </div>

          {/* Six Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '▲',
                title: 'Growing Teams',
                desc: 'New hires join without adding new tools or processes to learn',
              },
              {
                icon: '◉',
                title: 'New Managers',
                desc: 'Fresh managers get the same clear visibility from day one',
              },
              {
                icon: '◫',
                title: 'More Departments',
                desc: 'New teams slot naturally into the same connected structure',
              },
              {
                icon: '◔',
                title: 'Additional Locations',
                desc: 'Every new office joins the same organization, instantly',
              },
              {
                icon: '✓',
                title: 'Increasing Approvals',
                desc: 'More requests flow through the same simple approval workspace',
              },
              {
                icon: '⚡',
                title: 'Operational Complexity',
                desc: 'As operations grow, the platform stays just as easy to run',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[22px] p-8 sm:p-9 flex flex-col items-start gap-3.5 min-h-[240px] h-auto transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#C7D2FE] cursor-default group"
              >
                <div className="w-[48px] h-[48px] rounded-[14px] bg-[#EEEEFF] group-hover:bg-[#5C5CFF] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-[#5C5CFF] text-[20px] font-bold shrink-0">
                  {card.icon}
                </div>
                <div className="pt-2">
                  <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[19px] leading-[30px] text-[#5C5CFF] group-hover:text-[#5C5CFF] transition-colors duration-300">
                    {card.title}
                  </h4>
                </div>
                <p className="font-['Inter'] font-normal text-[14.5px] leading-[23px] text-[#6B7280]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. MANIFESTO STATEMENT */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[820px] px-4 sm:px-6 flex flex-col items-center text-center">
          <div className="flex flex-col items-center justify-center font-['Inter'] font-bold text-[32px] sm:text-[46px] lg:text-[54px] leading-[1.28] tracking-[-0.81px]">
            <div>
              <span className="text-[#5C5CFF]">Growth </span>
              <span className="text-[#4B5563]">should create </span>
              <span className="text-[#5C5CFF]">new</span>
            </div>
            <div>
              <span className="text-[#5C5CFF]">opportunities.</span>
            </div>
            <div>
              <span className="text-[#5C5CFF]">Not new systems.</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. FROM FIRST HIRE TO GLOBAL WORKFORCE */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              From first hire to global workforce
            </h2>
          </div>

          {/* Journey Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {[
              {
                icon: '◔',
                title: 'Startup',
                desc: 'First employees, first structure',
              },
              {
                icon: '▲',
                title: 'Growing Team',
                desc: 'Hiring accelerates, roles diversify',
              },
              {
                icon: '◫',
                title: 'Multi-Department',
                desc: 'Teams form around functions',
              },
              {
                icon: '◉',
                title: 'Multi-Location',
                desc: 'Operations span new offices',
              },
              {
                icon: '⚡',
                title: 'Enterprise',
                desc: 'Structure, scale and governance grow',
              },
              {
                icon: '✓',
                title: 'Global Workforce',
                desc: 'Teams span regions and time zones',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[20px] p-[28px_20px] flex flex-col items-center text-center gap-2.5 min-h-[194px] h-auto transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#C7D2FE] cursor-default group"
              >
                <div className="w-[44px] h-[44px] rounded-[12px] bg-white border border-[#E5E7EB] group-hover:bg-[#5C5CFF] group-hover:border-[#5C5CFF] group-hover:text-white transition-all duration-300 flex items-center justify-center text-[#5C5CFF] text-[18px] font-bold shrink-0">
                  {card.icon}
                </div>
                <div className="pt-2">
                  <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15px] leading-[24px] text-[#5C5CFF] group-hover:text-[#5C5CFF] transition-colors duration-300">
                    {card.title}
                  </h4>
                </div>
                <p className="font-['Inter'] font-normal text-[12.5px] leading-[20px] text-[#6B7280]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 6. EVERY STAGE, THE SAME PLATFORM */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[920px] px-4 sm:px-6 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Every stage, the same platform.
            </h2>
          </div>

          {/* Eco Chain */}
          <div className="w-full max-w-[420px] flex flex-col items-center gap-1.5">
            {[
              { label: 'Employees', highlight: false },
              { label: 'Departments', highlight: false },
              { label: 'Managers', highlight: false },
              { label: 'Locations', highlight: false },
              { label: 'Attendance', highlight: false },
              { label: 'Time-off', highlight: false },
              { label: 'Tasks', highlight: false },
              { label: 'Approvals', highlight: false },
              { label: 'Reports', highlight: false },
              { label: 'AI Assistant', highlight: true },
            ].map((node, idx, arr) => (
              <React.Fragment key={idx}>
                <div
                  className={`w-full h-[57px] rounded-[14px] px-8 flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold text-[14.5px] leading-[23px] text-center transition-all duration-300 hover:scale-103 cursor-pointer ${node.highlight
                      ? 'bg-[#5C5CFF] border border-[#5C5CFF] text-white shadow-md hover:shadow-lg'
                      : 'bg-white border border-[#E5E7EB] text-[#5C5CFF] hover:border-[#A5B4FC] hover:shadow-xs'
                    }`}
                >
                  {node.label}
                </div>
                {idx < arr.length - 1 && (
                  <span className="font-['Inter'] font-normal text-[16px] leading-[26px] text-[#6B7280] py-0.5 select-none">
                    &darr;
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. GROWTH WITHOUT ADDED COMPLEXITY */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] leading-[21px] tracking-[1.04px] uppercase text-[#5C5CFF] mb-2">
              SCALING WITHOUT COMPLEXITY
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Growth without added complexity
            </h2>
          </div>

          {/* Before / After Split Card */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 lg:grid-cols-2 rounded-[28px] overflow-hidden border border-[#E5E7EB] shadow-sm hover:shadow-md transition-all duration-300">
            {/* Column A: Before */}
            <div className="bg-[#F8FAFC] p-8 sm:p-14 flex flex-col items-start gap-7">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] leading-[21px] tracking-[1.04px] uppercase text-[#6B7280]">
                BEFORE
              </span>

              <ul className="flex flex-col gap-5 font-['Inter'] font-semibold text-[16px] leading-[26px] text-[#6B7280]">
                {[
                  'New spreadsheets',
                  'More software',
                  'Manual coordination',
                  'Disconnected teams',
                  'Administrative burden',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 transition-transform duration-200 hover:translate-x-1">
                    <span className="w-2 h-2 rounded-full bg-[#6B7280] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column B: After (Dark Theme) */}
            <div className="bg-[#0B0E1A] p-8 sm:p-14 flex flex-col items-start gap-7 text-white">
              <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] leading-[21px] tracking-[1.04px] uppercase text-[#A5B4FC]">
                AFTER
              </span>

              <ul className="flex flex-col gap-5 font-['Inter'] font-semibold text-[16px] leading-[26px] text-white">
                {[
                  'One connected platform',
                  'Shared workflows',
                  'Consistent experience',
                  'Central visibility',
                  'Simple operations',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3.5 transition-transform duration-200 hover:translate-x-1">
                    <span className="w-2 h-2 rounded-full bg-[#5C5CFF] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* 8. SIMPLIFIED GROWTH, FOR EVERY TEAM */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Simplified growth, for every team
            </h2>
          </div>

          {/* Team Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                role: 'HR',
                desc: 'Scale headcount without scaling administration',
              },
              {
                role: 'Managers',
                desc: 'Lead bigger teams with the same clear visibility',
              },
              {
                role: 'Operations',
                desc: 'Coordinate more locations from one central view',
              },
              {
                role: 'Leadership',
                desc: 'Stay confident in the organization at any size',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[20px] p-[36px_28px] flex flex-col items-start gap-3 min-h-[162px] h-auto transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#C7D2FE] cursor-default group"
              >
                <h4 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[19px] leading-[30px] text-[#5C5CFF] group-hover:text-[#5C5CFF] transition-colors duration-300">
                  {card.role}
                </h4>
                <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#6B7280]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. CONSISTENT THROUGH EVERY MILESTONE */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[920px] px-4 sm:px-6 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Consistent through every milestone
            </h2>
          </div>

          {/* Milestone Chain */}
          <div className="w-full max-w-[460px] flex flex-col items-center gap-2">
            {[
              'Hiring the first employee',
              'Opening a second office',
              'Adding new departments',
              'Expanding across regions',
              'Managing thousands of employees',
            ].map((label, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="w-full h-[62px] rounded-[16px] px-8 bg-white border border-[#E5E7EB] shadow-[0px_8px_22px_rgba(17,24,39,0.05)] flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[24px] text-[#5C5CFF] text-center transition-all duration-300 hover:scale-102 hover:shadow-md hover:border-[#C7D2FE] cursor-pointer">
                  {label}
                </div>
                {idx < arr.length - 1 && (
                  <span className="font-['Inter'] font-normal text-[18px] leading-[29px] text-[#6B7280] py-1 select-none">
                    &darr;
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. ONE PLATFORM, EVERY LAYER OF THE ORGANIZATION */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[920px] px-4 sm:px-6 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              One platform, every layer of the organization
            </h2>
          </div>

          {/* Org Chain */}
          <div className="w-full max-w-[420px] flex flex-col items-center gap-1.5">
            {[
              { label: 'Head Office', highlight: false },
              { label: 'Regional Offices', highlight: false },
              { label: 'Departments', highlight: false },
              { label: 'Managers', highlight: false },
              { label: 'Employees', highlight: false },
              { label: 'Workzi', highlight: true },
            ].map((node, idx, arr) => (
              <React.Fragment key={idx}>
                <div
                  className={`w-full h-[57px] rounded-[14px] px-8 flex items-center justify-center font-['Plus_Jakarta_Sans'] font-bold text-[14.5px] leading-[23px] text-center transition-all duration-300 hover:scale-102 cursor-pointer ${node.highlight
                      ? 'bg-[#5C5CFF] border border-[#5C5CFF] text-white shadow-md hover:shadow-lg'
                      : 'bg-white border border-[#E5E7EB] text-[#5C5CFF] hover:border-[#A5B4FC] hover:shadow-xs'
                    }`}
                >
                  {node.label}
                </div>
                {idx < arr.length - 1 && (
                  <span className="font-['Inter'] font-normal text-[16px] leading-[26px] text-[#6B7280] py-0.5 select-none">
                    &darr;
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* 11. WHAT ORGANIZATIONS GAIN */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] leading-[21px] tracking-[1.04px] uppercase text-[#5C5CFF] mb-2">
              BUSINESS OUTCOMES
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              What organizations gain
            </h2>
          </div>

          {/* Outcome Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '▲', title: 'Scale confidently' },
              { icon: '✓', title: 'Maintain consistency' },
              { icon: '◫', title: 'Reduce administrative overhead' },
              { icon: '⚡', title: 'Simplify operations' },
              { icon: '◉', title: 'Improve collaboration' },
              { icon: '◆', title: 'Support long-term growth' },
            ].map((outcome, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[22px] p-8 flex flex-col items-start gap-5.5 min-h-[181px] h-auto transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#C7D2FE] cursor-default justify-center group"
              >
                <div className="w-[46px] h-[46px] rounded-[12px] bg-[#EEEEFF] group-hover:bg-[#5C5CFF] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-[#5C5CFF] text-[19px] font-bold shrink-0">
                  {outcome.icon}
                </div>
                <h4 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[19px] leading-[30px] text-[#5C5CFF] group-hover:text-[#5C5CFF] transition-colors duration-300">
                  {outcome.title}
                </h4>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 12. READY FOR TOMORROW'S WORKFORCE */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <span className="font-['Plus_Jakarta_Sans'] font-bold text-[13px] leading-[21px] tracking-[1.04px] uppercase text-[#5C5CFF] mb-2">
              FUTURE READY
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Ready for tomorrow's workforce.
            </h2>
          </div>

          {/* Future Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '◫', title: 'Hybrid work' },
              { icon: '◔', title: 'Remote teams' },
              { icon: '◉', title: 'Multiple offices' },
              { icon: '▲', title: 'International expansion' },
              { icon: '⚡', title: 'AI-assisted operations' },
              { icon: '✓', title: 'Mobile workforce' },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[20px] p-[34px_28px] flex flex-col items-center text-center gap-4.5 min-h-[158px] h-auto transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#C7D2FE] cursor-default justify-center group"
              >
                <div className="w-[44px] h-[44px] rounded-[12px] bg-white border border-[#E5E7EB] group-hover:bg-[#5C5CFF] group-hover:border-[#5C5CFF] group-hover:text-white transition-all duration-300 flex items-center justify-center text-[#5C5CFF] text-[18px] font-bold shrink-0">
                  {card.icon}
                </div>
                <h4 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[16px] leading-[26px] text-[#5C5CFF] group-hover:text-[#5C5CFF] transition-colors duration-300">
                  {card.title}
                </h4>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 13. DARK MANIFESTO BANNER */}
      <section className="py-24 sm:py-32 bg-[#0B0E1A] text-white">
        <Container className="max-w-[820px] px-4 sm:px-6 flex flex-col items-center text-center">
          <div className="flex flex-col items-center justify-center font-['Inter'] font-bold text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.3] tracking-[-0.44px]">
            <div>
              <span className="text-white">Your workforce </span>
              <span className="text-white">will grow.</span>
            </div>
            <div>
              <span className="text-white">Your platform </span>
              <span className="text-[#A5B4FC]">should grow</span>
            </div>
            <div>
              <span className="text-[#A5B4FC]">with it.</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 14. GROWTH STORIES, TOLD OVER TIME */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Growth stories, told over time
            </h2>
          </div>

          {/* Story Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                role: 'STARTUP FOUNDER',
                quote: '"We started with ten people and a spreadsheet."',
                sub: 'Workzi grew with us — we never had to switch systems.',
              },
              {
                role: 'OPERATIONS LEAD',
                quote: '"Opening our second office felt seamless."',
                sub: 'Attendance and approvals connected instantly across locations.',
              },
              {
                role: 'BUSINESS OWNER',
                quote: '"We\'ve 5x\'d headcount on the same platform."',
                sub: 'No migrations, no disruption — just steady growth.',
              },
              {
                role: 'HR MANAGER',
                quote: '"Adding new departments used to mean new tools."',
                sub: 'Now every new team just joins the same platform.',
              },
              {
                role: 'REGIONAL MANAGER',
                quote: '"Managing three regions from one view changed everything."',
                sub: 'Central visibility without losing local context.',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[20px] p-[32px_28px] flex flex-col items-start gap-2.5 min-h-[190px] h-auto transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#C7D2FE] cursor-default group"
              >
                <span className="font-['Plus_Jakarta_Sans'] font-bold text-[12.5px] leading-[20px] tracking-[0.625px] uppercase text-[#5C5CFF]">
                  {card.role}
                </span>
                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] leading-[26px] text-[#5C5CFF] group-hover:text-[#5C5CFF] transition-colors duration-300 pt-1">
                  {card.quote}
                </h4>
                <p className="font-['Inter'] font-normal text-[14px] leading-[22px] text-[#6B7280]">
                  {card.sub}
                </p>
              </div>
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
              Everything growing organizations ask about scaling with Workzi.
            </p>
          </div>

          <div className="w-full max-w-[836px] divide-y divide-slate-100">
            {[
              {
                q: 'Will we need to migrate to a different plan or system as we grow?',
                a: "No. Workzi is built to scale within the same platform — from your first employees to thousands, you're not moving to a different system later.",
              },
              {
                q: 'What happens when we open a new office or location?',
                a: 'New locations join your existing organization structure directly, so attendance, approvals and reporting extend automatically without a separate setup.',
              },
              {
                q: 'Does adding new departments require reconfiguring the whole platform?',
                a: "No. New departments slot into your existing structure, with their own policies and reporting where needed, without disrupting what's already running.",
              },
              {
                q: 'Can Workzi support a hybrid or remote workforce as we expand?',
                a: "Yes. Workzi is built for in-office, remote, hybrid and field employees alike, so how your team works doesn't limit how you grow.",
              },
              {
                q: 'How does reporting change as our headcount increases?',
                a: 'Reporting scales with you — the same dashboards that work for a 20-person team stay just as useful, and just as clear, at a few thousand.',
              },
              {
                q: 'Will managers and leadership lose visibility as the organization gets more complex?',
                a: 'No. Central visibility is built in at every stage, so managers and leadership keep a clear view of the organization regardless of size.',
              },
              {
                q: 'Is there a headcount limit on the platform?',
                a: 'No. Workzi is designed to support growth from small teams to enterprise scale without hitting a structural ceiling.',
              },
              {
                q: 'What if we expand into new regions or time zones?',
                a: "Workzi supports teams spanning multiple regions and time zones within the same connected platform, so international growth doesn't mean new tools.",
              },
            ].map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="py-6 transition-all duration-300">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-hidden"
                  >
                    <span className="font-['Plus_Jakarta_Sans'] font-bold text-[16.5px] leading-[21px] text-[#111827] group-hover:text-[#5C5CFF] transition-colors duration-300">
                      {faq.q}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-[8px] flex items-center justify-center text-[14px] font-bold shrink-0 transition-all duration-300 ${isOpen
                          ? 'bg-[#5B5FFF] text-white rotate-45'
                          : 'bg-[#EEEEFF] text-[#5B5FFF] group-hover:bg-[#5B5FFF] group-hover:text-white'
                        }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-3.5 font-['Inter'] font-normal text-[15px] leading-[25px] text-[#6B7280] max-w-[800px] transition-all duration-300">
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
          <div className="bg-[linear-gradient(98.16deg,#9AA0FF_0.73%,#5B5FFF_58.51%,#8A8AFF_105.78%),linear-gradient(106.34deg,#0A0F2E_0%,#161D4A_40%,#1E2560_100%)] rounded-[32px] p-8 sm:p-16 lg:p-20 text-center text-white flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.2] sm:leading-[64px] tracking-[-1.12px] text-white max-w-[880px] mb-4">
              Grow without starting over.
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[26px] text-white/85 max-w-[540px] mb-8">
              Choose a workforce platform that evolves alongside your organization, from your first employee to your next thousand.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3.5">
              <a
                href="#pricing"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[52px] min-w-[120px] bg-white text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] rounded-full transition-all duration-300 hover:bg-slate-100 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                Start Free
              </a>
              <a
                href="#contact-support"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[52px] min-w-[145px] bg-transparent border border-white/30 text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] rounded-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                Book Demo
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default ScaleWithAttendXPage;
