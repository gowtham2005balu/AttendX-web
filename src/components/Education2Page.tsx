import React from 'react';
import { Container } from './Container';

export const Education2Page: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = React.useState<number | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-[148px] pb-20 sm:pb-24 bg-gradient-to-b from-[#F3F4FE] via-[#F8FAFF] to-white border-b border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">

          {/* Breadcrumb / Tag */}
          <div className="flex items-center gap-2 mb-6">
            <span className="font-['Inter'] font-semibold text-[13px] uppercase tracking-[0.6px] text-[#5C5CFF] bg-[#EEEEFF] px-3.5 py-1 rounded-full">
              Education
            </span>
            <span className="text-[#9CA3AF] text-[13px]">&bull;</span>
            <span className="font-['Inter'] font-semibold text-[13px] text-[#111827]">
              Education 2
            </span>
          </div>

          {/* Hero Header Content */}
          <div className="flex flex-col items-center text-center max-w-[920px] mx-auto mb-14">
            <h1 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] sm:leading-[62px] lg:leading-[66px] tracking-[-1.04px] text-[#111827] max-w-[840px] mb-5">
              Smart campus attendance & workforce management, built for modern education.
            </h1>

            <p className="font-['Inter'] font-normal text-[16px] sm:text-[18px] leading-[28px] text-[#6B7280] max-w-[640px] mb-8">
              Workzi Education connects students, faculty, department heads and campus leadership — replacing manual paper registers with automated, GPS & QR-verified check-ins.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center items-center gap-3.5">
              <a
                href="#pricing"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[56px] min-w-[155px] bg-[#5C5CFF] hover:bg-[#4A4AE0] text-white font-['Inter'] font-bold text-[15px] leading-[23px] rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                Start Free Trial
              </a>
              <a
                href="#contact-support"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[56px] min-w-[185px] bg-white border border-[#E5E7EB] hover:bg-slate-50 text-[#111827] font-['Inter'] font-bold text-[15px] leading-[23px] rounded-[14px] transition-all duration-200 hover:-translate-y-0.5"
              >
                Schedule Campus Demo
              </a>
            </div>
          </div>

          {/* Hero Ecosystem Graphic Banner */}
          <div className="w-full max-w-[1216px] bg-gradient-to-r from-[#9AA0FF] via-[#C5E2FF] to-[#4F7EFF] rounded-[24px] p-6 sm:p-12 lg:p-16 flex items-center justify-center overflow-x-auto no-scrollbar transition-all duration-200 hover:shadow-md">
            <div className="flex flex-row items-center justify-center gap-3 sm:gap-4 min-w-[750px] py-4">
              <div className="bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] px-6 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[15px] leading-[23px] text-white shadow-xs shrink-0 transition-transform hover:scale-105">
                Campus Leadership
              </div>

              <span className="font-['Inter'] font-normal text-[20px] text-white/80 shrink-0">
                &rarr;
              </span>

              <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-6 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
                Deans & HODs
              </div>

              <span className="font-['Inter'] font-normal text-[20px] text-white/80 shrink-0">
                &rarr;
              </span>

              <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-6 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
                Faculty
              </div>

              <span className="font-['Inter'] font-normal text-[20px] text-white/80 shrink-0">
                &rarr;
              </span>

              <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-6 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
                Students
              </div>

              <span className="font-['Inter'] font-normal text-[20px] text-white/80 shrink-0">
                &rarr;
              </span>

              <div className="bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] px-6 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[15px] leading-[23px] text-white shadow-xs shrink-0 transition-transform hover:scale-105">
                Workzi Education
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CAMPUS COMPLEXITY MADE SIMPLE */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[680px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827]">
              Campus complexity,<br className="hidden sm:inline" /> solved without operational friction
            </h2>
          </div>

          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: '🎓',
                title: 'Proxy & Manual Attendance',
                desc: 'Paper rosters and manual roll calls waste 10–15 minutes of every lecture.',
              },
              {
                icon: '🏫',
                title: 'Multi-Department Silos',
                desc: 'Engineering, Arts, Science and Management operating in disconnected systems.',
              },
              {
                icon: '📊',
                title: 'Compliance & Eligibility',
                desc: 'Tracking 75% attendance criteria manually causes end-of-semester chaos.',
              },
              {
                icon: '📱',
                title: 'Parent & Student Visibility',
                desc: 'Lack of instant notifications Time-offs guardians out of the loop.',
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

      {/* 3. ONE PLATFORM. EVERY CLASSROOM. */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col items-start text-left max-w-[573px] mx-auto lg:mx-0">
              <h3 className="font-['Plus_Jakarta_Sans'] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[1.18] sm:leading-[62px] lg:leading-[66px] tracking-[-1px] text-[#111827] mb-5">
                One platform.<br /> Every classroom.
              </h3>
              <p className="font-['Inter'] font-normal text-[16.5px] sm:text-[17.5px] leading-[27px] text-[#6B7280] max-w-[516px]">
                From daily student check-ins to faculty Time-off and timetable schedules — ready for modern universities, colleges and schools.
              </p>
            </div>

            <div className="lg:col-span-6 max-w-[573px] mx-auto w-full">
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[26px] p-8 sm:p-12 flex flex-col items-center transition-all duration-200 hover:shadow-md">
                <div className="w-full max-w-[340px] flex flex-col items-center gap-2">
                  <div className="w-full bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-white text-center shadow-xs transition-transform hover:scale-102">
                    Campus Onboarding
                  </div>
                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">&darr;</span>
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Timetable Sync
                  </div>
                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">&darr;</span>
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Faculty & Student Access
                  </div>
                  <span className="font-['Inter'] font-normal text-[20px] text-[#E5E7EB] py-0.5">&darr;</span>
                  <div className="w-full bg-white border border-[#E5E7EB] rounded-[16px] py-4 px-5 flex items-center justify-center font-['Inter'] font-semibold text-[14.5px] leading-[22px] text-[#111827] text-center shadow-xs transition-transform hover:scale-102">
                    Automated Reports
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. EVERY CAMPUS ROLE, CONNECTED */}
      <section className="py-20 sm:py-24 bg-[#785AFD]/15 border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[660px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] mb-3">
              Every campus role, connected
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17.5px] leading-[27px] text-[#6B7280] max-w-[540px]">
              From the Trustee office down to student mobile apps, everyone works from verified real-time records.
            </p>
          </div>

          <div className="w-full max-w-[1216px] flex flex-row items-center justify-center gap-2 sm:gap-3.5 overflow-x-auto no-scrollbar py-2">
            <div className="bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] px-5 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[15px] leading-[23px] text-white shadow-xs shrink-0 transition-transform hover:scale-105">
              Management
            </div>
            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">&rarr;</span>
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-3 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
              Deans & HODs
            </div>
            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">&rarr;</span>
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-3 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
              Faculty
            </div>
            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">&rarr;</span>
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-3 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
              Students
            </div>
            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">&rarr;</span>
            <div className="bg-white border border-[#E5E7EB] rounded-[16px] px-5 py-3 flex items-center justify-center font-['Inter'] font-semibold text-[13.5px] leading-[21px] text-[#111827] shadow-xs shrink-0 transition-transform hover:scale-105">
              Guardians
            </div>
            <span className="font-['Inter'] font-normal text-[20px] text-[#111827]/40 shrink-0">&rarr;</span>
            <div className="bg-[#5C5CFF] border border-[#5C5CFF] rounded-[16px] px-5 py-3.5 flex items-center justify-center font-['Inter'] font-semibold text-[15px] leading-[23px] text-white shadow-xs shrink-0 transition-transform hover:scale-105">
              Workzi
            </div>
          </div>
        </Container>
      </section>

      {/* 5. MANIFESTO STATEMENT */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <Container className="max-w-[1000px] px-4 sm:px-6 text-center">
          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.25] text-[#111827] tracking-[-0.84px]">
            Educational institutions shouldn't lose class hours to roll calls.<br className="hidden sm:inline" />
            <span className="text-[#5C5CFF]">Smart attendance builds academic discipline and transparency.</span>
          </h3>
        </Container>
      </section>

      {/* 6. SIMPLE, SECURE & ENTERPRISE-READY */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[719px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Built for educational excellence
            </h2>
          </div>

          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '📍', title: 'Geo & QR Check-In', desc: 'Rotating QR codes and GPS geofencing ensure physical presence in lectures.' },
              { icon: '📅', title: 'Live Timetable Sync', desc: 'Real-time schedule changes reflected instantly across faculty and student apps.' },
              { icon: '🛡️', title: 'Role-Based Access', desc: 'Department heads see their department data, deans see campus-wide analytics.' },
              { icon: '🔔', title: 'Parent Notifications', desc: 'Automated SMS and app alerts sent to guardians for absent lectures.' },
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

      {/* 7. SCALES FROM 100 TO MULTI-CAMPUS */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.18] tracking-[-1px] text-[#111827]">
              Scales from 100 students to multi-campus universities
            </h2>
          </div>

          <div className="relative w-full max-w-[1216px] pt-12 pb-4">
            <div className="hidden md:block absolute bottom-[38px] left-[5%] right-[5%] h-[2px] bg-[#E5E7EB] z-0" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-4 items-end relative z-10">
              {[
                { count: '100', label: '100 Students', height: 'h-[30px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '500', label: '500 Students', height: 'h-[55px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '1K', label: '1,000 Students', height: 'h-[80px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '5K', label: '5,000 Students', height: 'h-[105px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '10K', label: '10,000 Students', height: 'h-[135px]', bg: 'bg-[#EEEEFF]', text: 'text-[#4A4AE0]' },
                { count: '25K+', label: '25,000+ Students', height: 'h-[160px]', bg: 'bg-[#5C5CFF]', text: 'text-white' },
              ].map((stage, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group cursor-pointer">
                  <div className={`w-[120px] sm:w-[122px] ${stage.height} ${stage.bg} rounded-t-[10px] flex items-end justify-center pb-2.5 transition-all duration-200 group-hover:-translate-y-1.5 group-hover:shadow-md mb-3`}>
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

      {/* 8. SECURITY & DATA ISOLATION */}
      <section className="py-20 sm:py-28 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Campus security & data protection
            </h2>
          </div>

          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🔒', title: 'Encryption' },
              { icon: '🛂', title: 'FERPA & Privacy' },
              { icon: '📜', title: 'Audit Logs' },
              { icon: '☁', title: 'Cloud Infrastructure' },
              { icon: '🔑', title: 'SSO Integration' },
              { icon: '</>', title: 'ERP Connectors' },
              { icon: '💾', title: 'Data Backups' },
              { icon: '📡', title: '24×7 Monitoring' },
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

      {/* 9. AUTOMATED ACADEMIC WORKFLOWS */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[660px] mb-14">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Automated academic workflows
            </h2>
          </div>

          <div className="w-full max-w-[1216px] flex flex-row flex-nowrap md:flex-wrap lg:flex-nowrap items-center justify-between gap-3 overflow-x-auto no-scrollbar py-2">
            {[
              { num: '1', label: 'Class Schedule' },
              { num: '2', label: 'QR/GPS Check-In' },
              { num: '3', label: 'Instant Verification' },
              { num: '4', label: 'HOD Dashboard' },
              { num: '5', label: 'Parent Alert' },
              { num: '6', label: 'ERP Sync' },
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
                  <span className="font-['Inter'] font-normal text-[18px] text-[#E5E7EB] shrink-0">&rarr;</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </Container>
      </section>

      {/* 10. ACADEMIC INSIGHTS */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[38px] sm:text-[48px] lg:text-[55px] leading-[1.12] tracking-[-1px] text-[#111827] mb-3">
              A clear read on your institution
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17.5px] leading-[27px] text-[#6B7280]">
              Real-time academic metrics without compiling weekly manual spreadsheets.
            </p>
          </div>

          <div className="w-full max-w-[1216px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { eyebrow: 'CAMPUS HEALTH', val: 'Optimal', sub: 'Across all active departments' },
              { eyebrow: "TODAY'S ATTENDANCE", val: '96%', sub: 'Students present in lectures' },
              { eyebrow: 'ACTIVE LECTURES', val: '142', sub: 'Classes running currently' },
              { eyebrow: 'EXAM ELIGIBILITY', val: '98.4%', sub: 'Students meeting 75% threshold' },
              { eyebrow: 'FACULTY PRESENT', val: '99%', sub: 'Professors logged in today' },
              { eyebrow: 'Time-off REQUESTS', val: '4', sub: 'Pending approval by HODs' },
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

      {/* 11. SIX REASONS CAMPUSES CHOOSE US */}
      <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
        <Container className="max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[660px] mb-16">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[44px] leading-[51px] tracking-[-0.88px] text-[#111827]">
              Six reasons campuses choose Workzi Education
            </h2>
          </div>

          <div className="w-full max-w-[1216px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: '⏱️', title: 'Zero Roll Call Time', desc: 'Save up to 15 minutes per lecture with instant QR & GPS check-ins.' },
              { icon: '📲', title: 'Multi-Modal Check-In', desc: 'Support QR codes, face recognition, and geo-fencing for every class.' },
              { icon: '🔄', title: 'Instant ERP Sync', desc: 'Connect seamlessly with campus ERP systems for student records.' },
              { icon: '🔔', title: 'Guardian Transparency', desc: 'Keep parents informed automatically when absences occur.' },
              { icon: '🏛️', title: 'Department Isolation', desc: 'Dedicated HOD dashboards to manage faculty and student records.' },
              { icon: '📊', title: 'Exam Eligibility Tracking', desc: 'Automated 75% attendance threshold reports for exams.' },
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

      {/* 12. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-slate-100">
        <Container className="max-w-[900px] px-4 sm:px-6 flex flex-col items-center">
          <div className="flex flex-col items-center text-center max-w-[640px] mb-12">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[34px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] mb-3">
              Frequently Asked Questions
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[28px] text-[#6B7280]">
              Everything educational institutions ask before deploying Workzi Education.
            </p>
          </div>

          <div className="w-full max-w-[836px] divide-y divide-slate-100">
            {[
              {
                q: 'Can student attendance work offline?',
                a: 'Workzi Education uses GPS-based geo-fencing and local caching to verify that students are within the designated classroom range before recording attendance.',
              },
              {
                q: 'Does it support rotating QR code attendance?',
                a: 'Yes. Every lecture generates a dynamic rotating QR code on the faculty device, preventing proxy check-ins.',
              },
              {
                q: 'Can faculty manage attendance from their own devices?',
                a: 'Faculty can review, approve, and correct attendance for their assigned lectures directly from the Workzi faculty app.',
              },
              {
                q: 'Can departments have isolated dashboards?',
                a: 'Each department gets its own HOD dashboard with faculty, semester and program-level data isolated from other departments.',
              },
              {
                q: 'Can library attendance sync with student profiles?',
                a: 'Library entry, book issuance, and fine records can be tied directly to student profiles alongside lecture attendance history.',
              },
              {
                q: 'Can parents receive instant attendance notifications?',
                a: 'Parents can be linked as guardians on a student profile and receive instant notifications for lecture absences or exam alerts.',
              },
              {
                q: 'Can Workzi Education integrate with our existing campus ERP?',
                a: 'Workzi Education connects smoothly with standard campus ERPs for student, faculty and academic-record synchronization.',
              },
              {
                q: 'Can students access their live timetable in the app?',
                a: 'Students see their live weekly timetable, including classroom numbers and faculty changes, directly in their mobile app.',
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

      {/* 13. FINAL CTA BANNER */}
      <section className="py-16 sm:py-20 bg-white">
        <Container className="max-w-[1216px] px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#9AA0FF] via-[#5B5FFF] to-[#8A8AFF] rounded-[32px] p-8 sm:p-16 lg:p-20 text-center text-white flex flex-col items-center justify-center">
            <h2 className="font-['Plus_Jakarta_Sans'] font-semibold text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.2] sm:leading-[64px] tracking-[-1.12px] text-white max-w-[880px] mb-4">
              Modernize campus attendance,<br className="hidden sm:inline" />
              without operational complexity.
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] sm:text-[17px] leading-[26px] text-white/85 max-w-[520px] mb-8">
              Empower faculty, engage students and give leadership complete academic visibility.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-3.5">
              <a
                href="#pricing"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[52px] min-w-[140px] bg-white text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] rounded-full transition-all duration-200 hover:bg-slate-100 hover:-translate-y-0.5"
              >
                Start Free Trial
              </a>
              <a
                href="#contact-support"
                onClick={scrollToTop}
                className="inline-flex items-center justify-center px-7 py-3.5 h-[52px] min-w-[185px] bg-transparent border border-white/30 text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] rounded-full transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
              >
                Schedule Campus Demo
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Education2Page;
