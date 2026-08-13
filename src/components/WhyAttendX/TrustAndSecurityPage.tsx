import React from 'react';
import { Container } from '../Container';

export const TrustAndSecurityPage: React.FC = () => {
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
            <span className="font-semibold text-[#111827]">Trust & Security</span>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="relative pt-14 pb-20 sm:pb-24 bg-[conic-gradient(from_0.09deg_at_50%_54.26%,#EEEEFF_-88.5deg,#FFFFFF_0.55deg,#FFFFFF_0.58deg,#EEEEFF_82.63deg,#FFFFFF_123.7deg,#FFFFFF_232.58deg,#EEEEFF_271.5deg,#FFFFFF_360.55deg)]">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Hero Content */}
          <div className="flex flex-col items-center text-center max-w-[1216px] mx-auto">
            {/* H1 Title */}
            <h1 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.2] sm:leading-[66px] tracking-[-1.04px] text-[#111827] max-w-[760px] mb-5">
              Built to protect your people, your organization and your data.
            </h1>

            {/* Subhead Lead */}
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[18px] leading-[28px] text-[#6B7280] max-w-[560px] mb-8">
              Workzi is designed with security, privacy and reliability at its foundation — so your workforce information stays protected as your organization grows.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-[14px]">
              <a
                href="#contact-support"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[49px] min-w-[145px] bg-[#5C5CFF] hover:bg-[#4A4AE0] text-white font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[19px] rounded-[12px] transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                Talk to Sales
              </a>
              <a
                href="#security-overview"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[49px] min-w-[193px] bg-white border border-[#E5E7EB] hover:bg-slate-50 hover:border-[#C7D2FE] text-[#5C5CFF] font-['Plus_Jakarta_Sans'] font-bold text-[15px] leading-[19px] rounded-[12px] transition-all duration-300 hover:-translate-y-1 shadow-xs hover:shadow-md"
              >
                Security Overview
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. TRUST IS EARNED, NOT CLAIMED */}
      <section className="py-20 sm:py-28 bg-white">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Trust is earned, not claimed.
            </h2>
          </div>

          {/* Editorial Grid (4 Cards) */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🛡️',
                title: 'Secure by Design',
                desc: 'Security is considered at every layer of the platform, not added afterward',
              },
              {
                icon: '🔏',
                title: 'Privacy First',
                desc: 'Workforce information is handled with care and used only for its intended purpose',
              },
              {
                icon: '⚙️',
                title: 'Reliable Platform',
                desc: 'Built to be available and consistent for the teams who depend on it daily',
              },
              {
                icon: '🏢',
                title: 'Enterprise Ready',
                desc: 'Structured to support organizations as they grow in size and complexity',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="flex flex-col items-start gap-2.5 transition-all duration-300 hover:-translate-y-1 cursor-default group"
              >
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EEEEFF] group-hover:bg-[#5C5CFF] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-[19px] shrink-0 text-[#5C5CFF]">
                  {card.icon}
                </div>
                <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[19px] leading-[22px] tracking-[-0.38px] text-[#5C5CFF] group-hover:text-[#5C5CFF] transition-colors duration-300 pt-1">
                  {card.title}
                </h3>
                <p className="font-['Inter'] font-normal text-[14px] leading-[24px] text-[#6B7280]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. SECURITY PILLARS */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Security Pillars
            </h2>
          </div>

          {/* 8 Pillar Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🔒',
                title: 'Encryption',
                desc: 'Data is protected in transit and at rest',
              },
              {
                icon: '🧩',
                title: 'Role-Based Access',
                desc: 'Every user sees only what their role permits',
              },
              {
                icon: '🔑',
                title: 'Authentication',
                desc: 'Secure sign-in protects every workspace',
              },
              {
                icon: '📜',
                title: 'Audit Logs',
                desc: 'Important actions are recorded for accountability',
              },
              {
                icon: '🗂',
                title: 'Data Protection',
                desc: 'Workforce data is handled with clear intent and care',
              },
              {
                icon: '🗄',
                title: 'Backups',
                desc: "Your organization's information is protected against loss",
              },
              {
                icon: '📡',
                title: 'Monitoring',
                desc: 'The platform is continuously observed for issues',
              },
              {
                icon: '☁️',
                title: 'Infrastructure',
                desc: 'Built on secure, modern cloud foundations',
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[24px] p-7 flex flex-col items-start gap-2 min-h-[187px] h-auto transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#C7D2FE] cursor-default group"
              >
                <div className="w-[40px] h-[40px] rounded-[11px] bg-[#EEEEFF] group-hover:bg-[#5C5CFF] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-[18px] shrink-0 text-[#5C5CFF]">
                  {pillar.icon}
                </div>
                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[16px] leading-[18px] tracking-[-0.32px] text-[#5C5CFF] group-hover:text-[#5C5CFF] transition-colors duration-300 pt-2">
                  {pillar.title}
                </h4>
                <p className="font-['Inter'] font-normal text-[13.5px] leading-[23px] text-[#6B7280]">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. MANIFESTO STATEMENT */}
      <section className="py-24 sm:py-32 bg-white">
        <Container className="max-w-[800px] px-4 sm:px-6 flex flex-col items-center text-center">
          <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[34px] sm:text-[44px] lg:text-[48px] leading-[1.28] tracking-[-0.88px] text-center flex flex-col items-center">
            <span className="text-[#5C5CFF]">Security isn't a feature.</span>
            <span className="text-[#4B5563] mt-2">It's the foundation of everything we build.</span>
          </div>
        </Container>
      </section>

      {/* 6. IDENTITY & ACCESS */}
      <section className="py-20 sm:py-28 bg-white">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[640px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827] mb-3">
              Identity & Access
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[29px] text-[#6B7280]">
              Every user only sees what they are authorized to access.
            </p>
          </div>

          {/* Chain Row */}
          <div className="w-full max-w-[1216px] flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {['Employee', 'Manager', 'HR', 'Admin', 'Super Admin'].map((role, idx, arr) => (
              <React.Fragment key={idx}>
                <div className="h-[60px] min-w-[140px] px-6 rounded-[16px] bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center font-['Inter'] font-semibold text-[15px] leading-[18px] text-[#5C5CFF] transition-all duration-300 hover:scale-103 hover:border-[#5C5CFF] hover:text-[#5C5CFF] cursor-pointer">
                  {role}
                </div>
                {idx < arr.length - 1 && (
                  <span className="font-['Inter'] font-normal text-[22px] leading-[27px] text-[#E5E7EB] px-1 sm:px-2 select-none">
                    &rarr;
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. EMPLOYEE INFORMATION STAYS PROTECTED */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Employee information stays protected.
            </h2>
          </div>

          {/* Privacy Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🪪',
                title: 'Personal Information',
                desc: 'Kept accessible only to those with a legitimate need',
              },
              {
                icon: '✅',
                title: 'Attendance Records',
                desc: 'Visible according to role and reporting relationships',
              },
              {
                icon: '🏖',
                title: 'Leave Information',
                desc: "Shared only where it's relevant to the request",
              },
              {
                icon: '🏢',
                title: 'Organization Data',
                desc: 'Structured around departments and access levels',
              },
              {
                icon: '🔑',
                title: 'Authentication',
                desc: 'Protects every account from unauthorized access',
              },
              {
                icon: '📜',
                title: 'Access History',
                desc: 'A record of who accessed what, and when',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[18px] p-[26px] flex flex-col items-start gap-2 min-h-[157px] h-auto transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#C7D2FE] cursor-default group"
              >
                <div className="w-[38px] h-[38px] rounded-[10px] bg-white border border-[#E5E7EB] group-hover:bg-[#5C5CFF] group-hover:border-[#5C5CFF] group-hover:text-white transition-all duration-300 flex items-center justify-center text-[16px] shrink-0 text-[#5C5CFF]">
                  {card.icon}
                </div>
                <h4 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[15.5px] leading-[18px] tracking-[-0.31px] text-[#5C5CFF] group-hover:text-[#5C5CFF] transition-colors duration-300 pt-2">
                  {card.title}
                </h4>
                <p className="font-['Inter'] font-normal text-[13.5px] leading-[23px] text-[#6B7280]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. AUDIT & TRANSPARENCY */}
      <section className="py-20 sm:py-28 bg-white">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[640px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827] mb-3">
              Audit & Transparency
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[29px] text-[#6B7280]">
              Important activities are recorded for accountability.
            </p>
          </div>

          {/* Timeline List */}
          <div className="relative pl-8 max-w-[500px] w-full flex flex-col gap-8 border-l-2 border-[#E5E7EB]">
            {[
              {
                title: 'Employee Login',
                desc: 'Sign-in is recorded against the employee\'s account',
              },
              {
                title: 'Attendance Updated',
                desc: 'A check-in or correction is logged with a timestamp',
              },
              {
                title: 'Approval Granted',
                desc: 'A manager\'s decision is recorded against the request',
              },
              {
                title: 'Policy Changed',
                desc: 'Updates to organization policy are tracked',
              },
              {
                title: 'Admin Action',
                desc: 'Administrative changes are attributed to the acting admin',
              },
              {
                title: 'Export Generated',
                desc: 'Data exports are logged for visibility',
              },
            ].map((event, idx) => (
              <div key={idx} className="relative flex flex-col items-start gap-1 group cursor-default">
                {/* Bullet node */}
                <div className="absolute left-[-32px] -translate-x-1/2 top-[1px] w-[22px] h-[22px] rounded-full bg-[#5C5CFF] border-[3px] border-[#EEEEFF] transition-transform duration-300 group-hover:scale-125" />
                <h4 className="font-['Plus_Jakarta_Sans'] font-semibold text-[15.5px] leading-[18px] tracking-[-0.31px] text-[#5C5CFF] group-hover:text-[#5C5CFF] transition-colors duration-300">
                  {event.title}
                </h4>
                <p className="font-['Inter'] font-normal text-[13px] leading-[22px] text-[#6B7280]">
                  {event.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. RELIABILITY */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Reliability
            </h2>
          </div>

          {/* Metric Cards Row */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { val: '99.9%+', label: 'Platform Availability' },
              { val: 'Continuous', label: 'Monitoring' },
              { val: 'Automatic', label: 'Backups' },
              { val: 'Secure', label: 'Cloud Infrastructure' },
              { val: '24×7', label: 'Platform Monitoring' },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="bg-white border-t-[3px] border-[#5C5CFF] border-x border-b border-slate-100 rounded-[14px] p-[28px_12px] flex flex-col items-center justify-center text-center gap-1.5 min-h-[115px] h-auto shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="font-['Plus_Jakarta_Sans'] font-bold text-[26px] sm:text-[28px] leading-[35px] text-[#5C5CFF] group-hover:text-[#5C5CFF] transition-colors duration-300">
                  {metric.val}
                </div>
                <div className="font-['Inter'] font-normal text-[12.5px] leading-[15px] text-[#6B7280]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. ENTERPRISE GOVERNANCE */}
      <section className="py-20 sm:py-28 bg-white">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[640px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827] mb-3">
              Enterprise Governance
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[29px] text-[#6B7280]">
              Governance stays manageable as organizations grow.
            </p>
          </div>

          {/* Gov Chain Row */}
          <div className="w-full max-w-[1216px] flex flex-wrap items-center justify-center gap-3 sm:gap-3.5">
            {['Organization', 'Departments', 'Roles', 'Permissions', 'Approvals', 'Audit History'].map(
              (node, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="h-[55px] min-w-[140px] px-6 rounded-[16px] bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center font-['Inter'] font-semibold text-[14px] leading-[17px] text-[#5C5CFF] transition-all duration-300 hover:scale-103 hover:border-[#5C5CFF] hover:text-[#5C5CFF] cursor-pointer">
                    {node}
                  </div>
                  {idx < arr.length - 1 && (
                    <span className="font-['Inter'] font-normal text-[20px] leading-[24px] text-[#E5E7EB] px-1 select-none">
                      &rarr;
                    </span>
                  )}
                </React.Fragment>
              )
            )}
          </div>
        </Container>
      </section>

      {/* 11. BUSINESS CONFIDENCE */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC]">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[760px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[36px] sm:text-[42px] leading-[48px] tracking-[-0.84px] text-[#5C5CFF]">
              Business Confidence
            </h2>
          </div>

          {/* Confidence Grid */}
          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Protected Workforce Data',
                desc: 'Employee information is handled with clear access boundaries',
              },
              {
                title: 'Reliable Operations',
                desc: 'A platform your teams can depend on every day',
              },
              {
                title: 'Transparent Access',
                desc: 'Clear visibility into who can see and do what',
              },
              {
                title: 'Secure Collaboration',
                desc: 'Employees, managers and HR work together safely',
              },
              {
                title: 'Enterprise Governance',
                desc: 'Structure that scales with your organization',
              },
              {
                title: 'Scalable Platform',
                desc: 'Built to grow alongside your workforce',
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E7EB] rounded-[18px] p-[25px_26px] flex flex-col items-start gap-2 min-h-[125px] h-auto transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md hover:border-[#C7D2FE] cursor-default group"
              >
                <h4 className="font-['Plus_Jakarta_Sans'] font-extrabold text-[16px] leading-[18px] tracking-[-0.32px] text-[#5C5CFF] group-hover:text-[#5C5CFF] transition-colors duration-300">
                  {card.title}
                </h4>
                <p className="font-['Inter'] font-normal text-[13.5px] leading-[23px] text-[#6B7280]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 12. HELPFUL. TRANSPARENT. ALWAYS UNDER HUMAN CONTROL. */}
      <section className="py-20 sm:py-28 bg-white">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Section Head */}
          <div className="flex flex-col items-center text-center max-w-[640px] mb-10">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Helpful. Transparent. Always under human control.
            </h2>
          </div>

          {/* AI Flow Row */}
          <div className="w-full max-w-[1216px] flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
            {['AI Suggestions', 'Manager Review', 'Human Decision', 'Platform Updated'].map(
              (node, idx, arr) => (
                <React.Fragment key={idx}>
                  <div className="h-[55px] min-w-[160px] px-6 rounded-[16px] bg-white border border-[#E5E7EB] shadow-xs flex items-center justify-center font-['Inter'] font-semibold text-[14px] leading-[17px] text-[#5C5CFF] transition-all duration-300 hover:scale-103 hover:border-[#5C5CFF] hover:text-[#5C5CFF] cursor-pointer">
                    {node}
                  </div>
                  {idx < arr.length - 1 && (
                    <span className="font-['Inter'] font-normal text-[20px] leading-[24px] text-[#E5E7EB] px-1 select-none">
                      &rarr;
                    </span>
                  )}
                </React.Fragment>
              )
            )}
          </div>

          {/* AI Footer Lead */}
          <p className="font-['Inter'] font-normal text-[14.5px] leading-[25px] text-[#6B7280]">
            AI assists. People decide.
          </p>
        </Container>
      </section>

      {/* 13. TESTIMONIALS — LOVED BY MODERN TEAMS */}
      <section className="py-20 sm:py-28 bg-white">
        <Container className="max-w-[1200px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Header */}
          <div className="flex flex-col items-center text-center max-w-[640px] mb-12">
            <span className="inline-flex items-center px-[14px] py-[5px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter'] font-semibold text-[12px] leading-[15px] rounded-full mb-4">
              Testimonials
            </span>
            <h2 className="font-['Inter'] font-semibold text-[32px] sm:text-[36px] leading-[44px] tracking-[-0.0112em] text-[#1A1A1A]">
              Loved by Modern Teams
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                avatar: 'D',
                avatarBg: 'bg-[#5C5CFF]',
                name: 'Deepa R.',
                role: 'HR Manager',
                persona: 'HR Administrator',
                rating: '4.8',
                quote:
                  '"Knowing exactly who can see what gave us the confidence to roll Workzi out company-wide."',
              },
              {
                avatar: 'S',
                avatarBg: 'bg-[#5C5CFF]',
                name: 'Sanjay V.',
                role: 'IT Administrator',
                persona: 'IT / Security Lead',
                rating: '4.9',
                quote:
                  '"Audit logs and role-based access meant our security review was one of the easiest we\'ve done for a new vendor."',
              },
              {
                avatar: 'M',
                avatarBg: 'bg-[#0B0E1A]',
                name: 'Meera P.',
                role: 'Founder',
                persona: 'Business Owner',
                rating: '4.8',
                quote:
                  '"We finally trust that employee data is handled properly — without needing a security team of our own."',
              },
            ].map((testi, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#EBEBEB] shadow-[0px_2px_12px_rgba(0,0,0,0.05)] rounded-[16px] p-6 flex flex-col items-start gap-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
              >
                <div className="w-full flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-[40px] h-[40px] rounded-full ${testi.avatarBg} text-white font-['Inter'] font-bold text-[14px] flex items-center justify-center shrink-0`}
                    >
                      {testi.avatar}
                    </div>
                    <div className="flex flex-col items-start">
                      <strong className="font-['Inter'] font-bold text-[14px] leading-[17px] text-[#1A1A1A]">
                        {testi.name}
                      </strong>
                      <span className="font-['Inter'] font-normal text-[12px] leading-[15px] text-[#888888]">
                        {testi.role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className="font-['Inter'] font-bold text-[13px] leading-[16px] text-[#F59E0B]">
                      ★★★★★
                    </span>
                    <span className="font-['Inter'] font-bold text-[13px] leading-[16px] text-[#1A1A1A] ml-1">
                      {testi.rating}
                    </span>
                  </div>
                </div>

                <p className="font-['Inter'] font-normal text-[13.5px] leading-[22px] text-[#555555] pt-1">
                  {testi.quote}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 14. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 sm:py-24 bg-white">
        <Container className="max-w-[900px] px-4 sm:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[640px] mb-12">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[28px] text-[#6B7280]">
              Everything organizations ask about how Workzi protects their data.
            </p>
          </div>

          <div className="w-full max-w-[836px] divide-y divide-slate-100">
            {[
              {
                q: 'How is employee data encrypted?',
                a: 'Data is encrypted both in transit and at rest, so information stays protected whether it\'s moving between systems or stored on the platform.',
              },
              {
                q: 'Who can access our workforce data?',
                a: 'Access follows role-based permissions — employees, managers, HR and admins each see only what\'s relevant to their role and reporting relationships.',
              },
              {
                q: 'Can we see a history of who accessed or changed what?',
                a: 'Yes. Audit logs record key actions — logins, attendance updates, approvals, policy changes and admin actions — so activity stays traceable.',
              },
              {
                q: 'Does Workzi support single sign-on (SSO)?',
                a: 'Yes. Authentication is built to integrate with your organization\'s existing identity and access setup.',
              },
              {
                q: 'How often is our data backed up?',
                a: 'Backups run automatically, so your organization\'s information is protected against loss without manual intervention.',
              },
              {
                q: 'Is Workzi\'s infrastructure built for enterprise-scale security?',
                a: 'Yes. Workzi runs on secure, modern cloud infrastructure with continuous monitoring, designed to hold up as organizations grow in size and complexity.',
              },
              {
                q: 'Does AI ever make decisions about our employees automatically?',
                a: 'No. AI in Workzi surfaces suggestions and flags items for review — final decisions stay with managers and HR, not the platform.',
              },
              {
                q: 'How is data isolated between different organizations on Workzi?',
                a: 'Each organization\'s data is structured around its own departments and access levels, with clear boundaries that keep it separate from other accounts on the platform.',
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
                      className={`w-7 h-7 rounded-[8px] flex items-center justify-center text-[14px] font-bold shrink-0 transition-all duration-300 ${
                        isOpen
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

      {/* 15. CLOSING MANIFESTO */}
      <section className="py-24 sm:py-32 bg-[#F8FAFC]">
        <Container className="max-w-[700px] px-4 sm:px-6 flex flex-col items-center text-center">
          <div className="font-['Plus_Jakarta_Sans'] font-extrabold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.22] tracking-[-0.88px] text-center flex flex-col items-center">
            <span className="text-[#5C5CFF]">
              Trust isn't built after<br />
              deployment.
            </span>
            <span className="text-[#4B5563] mt-1">
              It begins before the first<br />
              login.
            </span>
          </div>
        </Container>
      </section>

      {/* 16. FINAL CTA BANNER */}
      <section className="py-16 sm:py-20 bg-white">
        <Container className="max-w-[1216px] px-4 sm:px-6">
          <div className="bg-[linear-gradient(98.16deg,#9AA0FF_0.73%,#5B5FFF_58.51%,#8A8AFF_105.78%),linear-gradient(106.34deg,#0A0F2E_0%,#161D4A_40%,#1E2560_100%)] rounded-[32px] p-8 sm:p-16 lg:p-20 text-center text-white flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.2] sm:leading-[64px] tracking-[-1.12px] text-white max-w-[880px] mb-4">
              Choose a workforce<br className="hidden sm:inline" /> platform built on trust.
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[26px] text-white/85 max-w-[520px] mb-8">
              Protect your workforce while empowering every employee, manager and HR team with a secure, connected platform.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3.5">
              <a
                href="#contact-support"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[52px] min-w-[137px] bg-white text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] rounded-full transition-all duration-300 hover:bg-slate-100 hover:-translate-y-1 shadow-sm hover:shadow-md"
              >
                Talk to Sales
              </a>
              <a
                href="#security-overview"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[52px] min-w-[211px] bg-transparent border border-white/30 text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] rounded-full transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
              >
                Book Enterprise Demo
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default TrustAndSecurityPage;
