import React from 'react';
import { Container } from '../Container';

export const ForEnterprisePage: React.FC = () => {
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
            <span className="font-semibold text-[#111827]">For Enterprise</span>
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
              Built for organizations<br className="hidden sm:inline" /> that never stop growing.
            </h1>

            {/* Description */}
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[18px] leading-[28px] text-[#6B7280] max-w-[600px] mb-8">
              Whether your workforce spans one office or hundreds of locations, Workzi helps you manage people, operations and workforce processes from one connected platform.
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
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4.5 min-w-[850px] py-4">
              
              {/* Node 1: Your Organization */}
              <div className="bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] px-6 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[15px] leading-[23px] text-white shadow-xs shrink-0 transition-transform hover:scale-105">
                Your Organization
              </div>

              {/* Arrow Connector */}
              <span className="font-['Inter'] font-normal text-[20px] text-white/80 shrink-0">
                &rarr;
              </span>

              {/* Stacked Department Nodes */}
              <div className="flex flex-col gap-2.5 shrink-0">
                <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-7 py-3 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs transition-transform hover:scale-105">
                  Department
                </div>
                <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-7 py-3 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs transition-transform hover:scale-105">
                  Department
                </div>
                <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-7 py-3 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs transition-transform hover:scale-105">
                  Department
                </div>
              </div>

              {/* Arrow Connector */}
              <span className="font-['Inter'] font-normal text-[20px] text-white/80 shrink-0">
                &rarr;
              </span>

              {/* Node: Managers */}
              <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-7 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
                Managers
              </div>

              {/* Arrow Connector */}
              <span className="font-['Inter'] font-normal text-[20px] text-white/80 shrink-0">
                &rarr;
              </span>

              {/* Node: Employees */}
              <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-7 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
                Employees
              </div>

              {/* Arrow Connector */}
              <span className="font-['Inter'] font-normal text-[20px] text-white/80 shrink-0">
                &rarr;
              </span>

              {/* Node: Workzi */}
              <div className="bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] px-6 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[15px] leading-[23px] text-white shadow-xs shrink-0 transition-transform hover:scale-105">
                Workzi
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 2 — ENTERPRISE COMPLEXITY */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* div.section-head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827]">
              Enterprise complexity<br className="hidden sm:inline" /> shouldn't create operational<br className="hidden sm:inline" /> complexity
            </h2>
          </div>

          {/* div.cards-4 */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: '📈',
                title: 'Growing Workforce',
                desc: 'More people should mean more capability — not more friction.',
              },
              {
                icon: '🏢',
                title: 'Multiple Locations',
                desc: 'Every site stays visible from one connected view.',
              },
              {
                icon: '🤝',
                title: 'Department Collaboration',
                desc: 'Teams work together without working around each other.',
              },
              {
                icon: '⚙',
                title: 'Operational Consistency',
                desc: 'The same policies and processes, applied everywhere.',
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

      {/* SECTION 3 — MULTI-LOCATION */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Feature Text */}
            <div className="lg:col-span-6 flex flex-col items-start text-left max-w-[573px] mx-auto lg:mx-0">
              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] sm:leading-[62px] lg:leading-[66px] tracking-[-1px] text-[#111827] mb-5">
                One platform.<br /> Every location.
              </h3>
              <p className="font-['Inter'] font-normal text-[16.5px] sm:text-[17.5px] leading-[27px] text-[#6B7280] max-w-[516px]">
                From the head office to field teams, every layer of your organization connects through Workzi — without needing a separate system for each site.
              </p>
            </div>

            {/* Right Column: Feature Visual Vertical Node Chain */}
            <div className="lg:col-span-6 max-w-[573px] mx-auto w-full">
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[26px] p-8 sm:p-12 flex flex-col items-center transition-all duration-200 hover:shadow-md">
                <div className="w-full max-w-[340px] flex flex-col items-center gap-2">
                  
                  {/* Head Office */}
                  <div className="w-full bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-white text-center shadow-xs transition-transform hover:scale-102">
                    Head Office
                  </div>

                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">
                    &darr;
                  </span>

                  {/* Regional Offices */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Regional Offices
                  </div>

                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">
                    &darr;
                  </span>

                  {/* Branches */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Branches
                  </div>

                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">
                    &darr;
                  </span>

                  {/* Remote Teams */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Remote Teams
                  </div>

                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">
                    &darr;
                  </span>

                  {/* Field Workforce */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Field Workforce
                  </div>

                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* SECTION 4 — ENTERPRISE ORGANIZATION */}
      <section className="py-20 sm:py-24 bg-[#785AFD]/15 border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* div.section-head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] mb-3">
              Every level, connected
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17.5px] leading-[27px] text-[#6B7280] max-w-[476px]">
              From company-wide structure down to a single employee, nothing exists in isolation.
            </p>
          </div>

          {/* div.eco-tree */}
          <div className="w-full max-w-[1216px] flex flex-row items-center justify-center gap-2 sm:gap-3.5 overflow-x-auto no-scrollbar py-2">
            
            {/* Company */}
            <div className="bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] px-5 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[15px] leading-[23px] text-white shadow-xs shrink-0 transition-transform hover:scale-105">
              Company
            </div>

            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">
              &rarr;
            </span>

            {/* Business Units */}
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-3 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
              Business Units
            </div>

            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">
              &rarr;
            </span>

            {/* Departments */}
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-3 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
              Departments
            </div>

            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">
              &rarr;
            </span>

            {/* Teams */}
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-3 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
              Teams
            </div>

            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">
              &rarr;
            </span>

            {/* Managers */}
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-3 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
              Managers
            </div>

            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">
              &rarr;
            </span>

            {/* Employees */}
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-3 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
              Employees
            </div>

          </div>
        </Container>
      </section>

      {/* SECTION 6 — MANIFESTO STATEMENT */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <Container className="max-w-[1000px] px-4 sm:px-6 text-center">
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.25] text-[#111827] tracking-[-0.84px]">
            Growth should never require more spreadsheets.<br className="hidden sm:inline" />
            <span className="text-[#5C5CFF]">It should require better systems.</span>
          </h3>
        </Container>
      </section>

      {/* SECTION 7 — GOVERNANCE */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* div.section-head */}
          <div className="flex flex-col items-center text-center max-w-[719px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Control, without complexity
            </h2>
          </div>

          {/* div.cards-6 */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🛂', title: 'Role-Based Access' },
              { icon: '✓', title: 'Approval Hierarchies' },
              { icon: '🏢', title: 'Department Controls' },
              { icon: '🗂', title: 'Workspace Permissions' },
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

      {/* SECTION 7 — SCALABILITY */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* div.section-head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Built to scale with your organization
            </h2>
          </div>

          {/* div.scale-line */}
          <div className="relative w-full max-w-[1216px] pt-12 pb-4">
            <div className="hidden md:block absolute bottom-[38px] left-[5%] right-[5%] h-[2px] bg-[#E5E7EB] z-0" />

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-4 items-end relative z-10">
              {[
                { count: '10', label: '10', height: 'h-[30px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '100', label: '100', height: 'h-[55px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '500', label: '500', height: 'h-[80px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '1K', label: '1,000', height: 'h-[105px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '5K', label: '5,000+', height: 'h-[135px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '10K', label: '10,000+', height: 'h-[160px]', bg: 'bg-[#5C5CFF]', text: 'text-white' },
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
          {/* div.section-head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Trust, built in from day one
            </h2>
          </div>

          {/* div.cards-6 */}
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

      {/* SECTION 9 — ENTERPRISE COLLABORATION */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Feature Text */}
            <div className="lg:col-span-6 flex flex-col items-start text-left max-w-[573px] mx-auto lg:mx-0">
              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.12] tracking-[-1px] text-[#111827] mb-5">
                Keep HR, managers<br /> and leadership<br /> connected
              </h3>
              <p className="font-['Inter'] font-normal text-[16.5px] sm:text-[17.5px] leading-[27px] text-[#6B7280] max-w-[573px]">
                The same information reaches every level of the organization — no gaps, no separate spreadsheets, no waiting for someone else's update.
              </p>
            </div>

            {/* Right Column: Feature Visual Vertical Node Chain */}
            <div className="lg:col-span-6 max-w-[573px] mx-auto w-full">
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[26px] p-8 sm:p-12 flex flex-col items-center transition-all duration-200 hover:shadow-md">
                <div className="w-full max-w-[340px] flex flex-col items-center gap-2">
                  
                  {/* Employees */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-medium text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Employees
                  </div>

                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">
                    &darr;
                  </span>

                  {/* Managers */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-medium text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Managers
                  </div>

                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">
                    &darr;
                  </span>

                  {/* HR */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-medium text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    HR
                  </div>

                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">
                    &darr;
                  </span>

                  {/* Operations */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-medium text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Operations
                  </div>

                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">
                    &darr;
                  </span>

                  {/* Leadership */}
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-medium text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Leadership
                  </div>

                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">
                    &darr;
                  </span>

                  {/* Workzi */}
                  <div className="w-full bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-white text-center shadow-xs transition-transform hover:scale-102">
                    Workzi
                  </div>

                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* SECTION 10 — ENTERPRISE AUTOMATION */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* div.section-head */}
          <div className="flex flex-col items-center text-center max-w-[500px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Operational workflows that just run
            </h2>
          </div>

          {/* div.workflow-chain */}
          <div className="w-full max-w-[1216px] flex flex-row flex-nowrap md:flex-wrap lg:flex-nowrap items-center justify-between gap-3 overflow-x-auto no-scrollbar py-2">
            {[
              { num: '1', label: 'New Employee' },
              { num: '2', label: 'Department' },
              { num: '3', label: 'Manager' },
              { num: '4', label: 'Shift' },
              { num: '5', label: 'Attendance' },
              { num: '6', label: 'Approvals' },
              { num: '7', label: 'Reports' },
            ].map((node, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="min-w-[150px] flex-1 bg-white border border-[#E5E7EB] rounded-[18px] px-3.5 py-4.5 flex flex-col items-center gap-2.5 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-default">
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

      {/* SECTION 11 — ENTERPRISE INSIGHTS */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* div.section-head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.12] tracking-[-1px] text-[#111827] mb-3">
              A clear read on the organization
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17.5px] leading-[27px] text-[#6B7280]">
              Executive summaries, not another dashboard to learn.
            </p>
          </div>

          {/* div.cards-3 */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                eyebrow: 'ORGANIZATION HEALTH',
                val: 'Stable',
                sub: 'Across all active locations',
              },
              {
                eyebrow: 'ATTENDANCE OVERVIEW',
                val: '94%',
                sub: 'Present today, organization-wide',
              },
              {
                eyebrow: 'DEPARTMENT ACTIVITY',
                val: '9 / 9',
                sub: 'Departments active this week',
              },
              {
                eyebrow: 'PENDING APPROVALS',
                val: '14',
                sub: 'Awaiting manager review',
              },
              {
                eyebrow: 'ACTIVE WORKFORCE',
                val: '312',
                sub: 'Employees currently active',
              },
              {
                eyebrow: 'UPCOMING LEAVE',
                val: '27',
                sub: 'Employees on leave next week',
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

      {/* SECTION 12 — WHY ENTERPRISES CHOOSE */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* div.section-head */}
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Six reasons enterprises stay
            </h2>
          </div>

          {/* div.cards-6 */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: '🔗',
                title: 'Connected Workforce',
                desc: 'Every module speaks to every other module.',
              },
              {
                icon: '✨',
                title: 'Modern Experience',
                desc: 'An interface people actually enjoy using.',
              },
              {
                icon: '📐',
                title: 'Scalable Platform',
                desc: 'Built to grow from hundreds to tens of thousands.',
              },
              {
                icon: '👁',
                title: 'Operational Visibility',
                desc: 'See the whole organization, not just fragments of it.',
              },
              {
                icon: '🛡',
                title: 'Enterprise Security',
                desc: 'Governance and protection built in, not bolted on.',
              },
              {
                icon: '⚙',
                title: 'Simple Administration',
                desc: 'Powerful controls that don\'t require a manual.',
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

      {/* SECTION 13 — FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[900px] px-4 sm:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[640px] mb-12">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[28px] text-[#6B7280]">
              Everything enterprise organizations ask before deploying Workzi.
            </p>
          </div>

          <div className="w-full max-w-[836px] divide-y divide-slate-100">
            {[
              {
                q: 'Can Workzi handle multiple locations and departments under one account?',
                a: 'Yes. Workzi is built for multi-location, multi-department organizations — each site and department stays visible from one connected view, without needing a separate system per location.',
              },
              {
                q: 'How does role-based access work across a large organization?',
                a: 'Permissions can be configured by role, department and location, so HR, managers, operations and leadership each see exactly what\'s relevant to them — nothing more, nothing less.',
              },
              {
                q: 'Can different departments have different approval hierarchies?',
                a: 'Yes. Approval chains can be configured per department or business unit, so Workzi adapts to your existing organizational structure instead of forcing a single flat hierarchy.',
              },
              {
                q: 'What security and compliance standards does Workzi meet?',
                a: 'Workzi is built with encryption, audit logs, role-based access, SSO and API security as standard — governance and protection are part of the platform, not an add-on.',
              },
              {
                q: 'How does Workzi perform as we scale from hundreds to thousands of employees?',
                a: 'Workzi\'s architecture is designed to scale from small teams to enterprise headcounts without a change in experience — the same platform grows with your organization.',
              },
              {
                q: 'Can leadership get an organization-wide view without using a separate reporting tool?',
                a: 'Yes. Executive-level summaries — attendance, approvals, department activity — are built into the platform, so leadership gets a clear read without learning a new dashboard.',
              },
              {
                q: 'Does onboarding a new department or location require a new implementation?',
                a: 'No. New departments and locations can be added within the existing account structure, so scaling doesn\'t mean re-implementing the platform each time.',
              },
              {
                q: 'Can Workzi integrate with our existing enterprise systems?',
                a: 'Workzi supports API-based integration, so it can connect with existing enterprise tools rather than operating as an isolated system.',
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
              Enterprise workforce management,<br className="hidden sm:inline" />
              without enterprise complexity.
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[26px] text-white/85 max-w-[520px] mb-8">
              Modernize workforce operations while keeping governance, security and scalability under control.
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

export default ForEnterprisePage;
