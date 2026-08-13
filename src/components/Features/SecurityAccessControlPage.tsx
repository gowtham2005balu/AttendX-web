import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  Plus,
  X,
  Lock,
  Shield,
  Key,
} from 'lucide-react';

/* ─── Hero Graphic Component for Security & Access Control ─── */
const SecurityHeroChart: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[573px] h-[380px] sm:h-[430px] rounded-[24px] p-5 sm:p-6 flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
      }}
    >
      {/* Left Card — SSO & MFA Login Mockup */}
      <div
        className="absolute bg-white border border-[#E5E7EB] rounded-[20px] p-[16px] flex flex-col justify-between z-10"
        style={{
          width: '240px',
          height: '270px',
          left: '30px',
          top: '40px',
          boxShadow: '0px 20px 40px -18px rgba(17, 24, 39, 0.2)',
        }}
      >
        <div>
          <div className="flex items-center gap-1.5 mb-2 text-[#5C5CFF] font-bold text-[11px]">
            <Key size={13} />
            <span className="uppercase">SECURE LOGIN</span>
          </div>
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827] block mb-3">
            Single Sign-On
          </span>

          <div className="space-y-[8px] text-[11.5px] font-['Inter',sans-serif]">
            <div className="p-2 bg-[#5C5CFF] text-white rounded-[8px] font-bold text-center cursor-pointer">
              Sign in with Okta / SSO
            </div>
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] text-[#6B7280] text-center">
              MFA Prompt: <span className="font-bold text-[#111827]">Sent to Mobile ✓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card — Live Audit Log Feed */}
      <div
        className="absolute bg-white border border-[#E5E7EB] rounded-[20px] p-[18px] flex flex-col justify-between z-20"
        style={{
          width: '240px',
          height: '270px',
          right: '30px',
          bottom: '40px',
          boxShadow: '0px 20px 40px -18px rgba(17, 24, 39, 0.2)',
        }}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[13px] uppercase text-[#6B7280]">
              AUDIT LOG FEED
            </span>
            <span className="bg-[#EAFBF3] text-[#15803D] text-[10.5px] font-bold px-[8px] py-[3px] rounded-full">
              Encrypted
            </span>
          </div>

          <div className="space-y-[8px] text-[11px] font-['Inter',sans-serif]">
            <div className="p-2 bg-[#F8FAFC] border rounded-[8px]">
              <span className="text-[#6B7280] block text-[9.5px]">14:22:04 • Alex M.</span>
              <span className="font-bold text-[#111827]">Role updated: Eng Lead</span>
            </div>
            <div className="p-2 bg-[#F8FAFC] border rounded-[8px]">
              <span className="text-[#6B7280] block text-[9.5px]">14:18:10 • Sarah A.</span>
              <span className="font-bold text-[#111827]">SSO Auth Successful</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#5C5CFF] text-white font-['Inter',sans-serif] font-bold text-[12.5px] py-[9.5px] rounded-[10px]">
          Export Audit Log
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
const SecurityHero: React.FC = () => (
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
          <span className="font-semibold text-[#111827]">Security & Access Control</span>
        </div>
      </div>
    </div>

    <section id="hero" className="w-full max-w-[1289px] mx-auto px-6 lg:px-0 pt-[40px] lg:pt-[60px] pb-[50px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        <div className="flex flex-col items-start w-full lg:w-[656px] gap-[17px] shrink-0">

          <div className="w-full max-w-[760px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.15] lg:leading-[60px] tracking-[-1.04px] text-[#111827]">
              Secure by default, not by afterthought
            </h1>
          </div>

          <div className="w-full lg:w-[577px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280]">
              Workforce data deserves more than a password and good intentions. Workzi protects it at every layer — authentication, access, and everything logged along the way.
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
          <SecurityHeroChart />
        </div>
      </div>
    </section>

    <div className="w-full bg-white py-[36px] px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-[20px] overflow-x-auto no-scrollbar">
        {[
          'SSO & Multi-Factor Auth',
          'AES-256 Data Encryption',
          'Searchable Audit Trails',
          'Remote Session Management',
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
      title: 'Employee logs in',
      desc: 'Via SSO, email/password, or MFA — whatever the organization requires.',
    },
    {
      num: '02',
      title: 'Access is checked',
      desc: 'Against their role, every time, not just at login.',
    },
    {
      num: '03',
      title: 'Action gets logged',
      desc: 'Every meaningful action, recorded automatically.',
    },
    {
      num: '04',
      title: 'IT stays in control',
      desc: 'Full visibility, without slowing anyone down.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[598px]">
            Security that works quietly in the background
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[536px]">
            Nobody should have to think about security to use Workzi day to day — it should just be there, doing its job, every time someone logs in or opens a record.
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

/* ─── 3. SECTION 2 — Authentication ─── */
const SectionAuthentication: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Authentication
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Getting in should be simple. Getting in as the wrong person shouldn&apos;t be.
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Standard email/password, single sign-on, or multi-factor — Workzi supports the authentication method your organization already trusts, instead of asking people to learn a new one.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Email and password login',
            'Single sign-on (SSO) support for enterprise identity providers',
            'Multi-factor authentication (MFA) for an added layer of protection',
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

      {/* Visual: Login Screen Mockup */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl font-['Inter',sans-serif]">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827] text-center">
              Sign In to Workzi
            </span>

            <button className="w-full bg-[#5C5CFF] text-white font-bold py-2.5 rounded-[10px] text-[13px]">
              Sign in with Enterprise SSO
            </button>
            <div className="text-center text-[#6B7280] text-[11px] font-bold">OR EMAIL & PASSWORD</div>
            <div className="p-2 bg-[#F8FAFC] border rounded-[8px] text-[12px] text-[#6B7280]">
              MFA Code: <span className="font-bold text-[#111827]">6-Digit Authenticator App Code</span>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 4. SECTION 3 — Role-Based Access Control ─── */
const SectionRoleAccessControl: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Visual: Permission-Check Illustration */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl font-['Inter',sans-serif]">
            <div className="p-3 bg-[#EAFBF3] border border-emerald-100 rounded-[10px] flex justify-between items-center text-[12px] font-bold text-[#15803D]">
              <span>Action: View Attendance Report</span>
              <span>Allowed ✓ (Manager Role)</span>
            </div>
            <div className="p-3 bg-[#FEE2E2] border border-red-100 rounded-[10px] flex justify-between items-center text-[12px] font-bold text-[#DC2626]">
              <span>Action: Edit Org Settings</span>
              <span>Blocked ✗ (Requires Admin)</span>
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Real-time Enforcement
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Access that matches responsibility
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Every screen, every record, every action in Workzi checks against the person&apos;s role — not just once at login, but every time it matters. Set it up on the Organization Management page, enforced everywhere here.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Every action checked against role permissions in real time',
            'Granular control down to view, edit and approve actions',
            'Changes to roles apply instantly, across the whole platform',
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

        <a
          href="#organization-management"
          className="font-['Inter',sans-serif] font-bold text-[15px] leading-[18px] text-[#5C5CFF] hover:underline inline-flex items-center gap-1 mt-2"
        >
          Explore Organization Management →
        </a>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 5. SECTION 4 — Data Encryption ─── */
const SectionDataEncryption: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Data Encryption
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Protected, whether it&apos;s moving or sitting still
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Attendance records, leave history, personal documents — encrypted in transit and at rest, so data stays protected whether it&apos;s being viewed right now or sitting untouched.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Encryption in transit and at rest',
            'Secure storage for uploaded documents and personal data',
            'No sensitive data exposed in plain text, anywhere in the system',
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

      {/* Visual: Data-Flow Diagram */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex items-center justify-between shadow-xl font-['Inter',sans-serif] text-[12px] font-bold">
            <div className="p-2 bg-[#F8FAFC] border rounded text-center">User Device</div>
            <div className="flex items-center gap-1 text-[#5C5CFF]">
              <span>TLS 1.3</span>
              <Lock size={12} />
            </div>
            <div className="p-2 bg-[#EEEEFF] border border-indigo-100 rounded text-center text-[#5C5CFF]">
              AES-256 DB Vault
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 6. SECTION 5 — Audit Logs & Activity Tracking ─── */
const SectionAuditLogs: React.FC = () => {
  const logs = [
    { time: 'Aug 04, 14:22', user: 'Alex Morgan', action: 'Modified Role Permissions', details: 'Added Leave Approve for Eng Lead' },
    { time: 'Aug 04, 13:40', user: 'Sarah Anderson', action: 'Document Download', details: 'Downloaded August Payslip' },
    { time: 'Aug 04, 11:15', user: 'Michael Kim', action: 'SSO Authentication', details: 'Logged in via Okta Identity' },
  ];

  return (
    <section className="w-full py-[80px] px-6 lg:px-[80px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] leading-[46px] tracking-[-0.8px] text-[#111827] text-center max-w-[566px]">
            Know exactly who did what, and when
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[522px]">
            Every meaningful action — an approval, a permission change, a record edit — leaves a trail. Not to police anyone, but so questions have answers when they come up.
          </p>
        </FadeUp>

        <FadeUp className="w-full max-w-[1216px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs">
          <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[16px] flex justify-between items-center">
            <span className="font-bold text-[#111827] text-[14px]">System Audit Logs</span>
            <span className="bg-white border border-[#E5E7EB] text-[#6B7280] font-semibold text-[12px] px-3 py-1 rounded-full cursor-pointer">
              Filter by User/Action
            </span>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="bg-[#F8FAFC] text-[10.5px] font-['Inter',sans-serif] font-bold uppercase tracking-wider text-[#6B7280] h-[37px]">
                  <th className="pl-[18px] py-2">TIMESTAMP</th>
                  <th className="py-2">USER</th>
                  <th className="py-2">ACTION</th>
                  <th className="pr-[18px] py-2">DETAILS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {logs.map((log, idx) => (
                  <tr key={idx} className="h-[49px] text-[12.5px] font-['Inter',sans-serif] text-[#111827] hover:bg-slate-50/50 transition-colors">
                    <td className="pl-[18px] py-2 text-[#6B7280]">{log.time}</td>
                    <td className="py-2 font-semibold">{log.user}</td>
                    <td className="py-2 font-bold text-[#5C5CFF]">{log.action}</td>
                    <td className="pr-[18px] py-2 text-[#6B7280]">{log.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ─── 7. SECTION 6 — Session & Device Management ─── */
const SectionSessionManagement: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Active Sessions
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          See where you&apos;re logged in — and log out remotely if you need to
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Lost a device, or just logged in somewhere you shouldn&apos;t have? Employees and IT can both see active sessions, and end one without waiting for a password reset to take effect.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'View active sessions and logged-in devices',
            'Remote logout from any session',
            'Automatic session expiry after inactivity',
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

      {/* Visual: Active Sessions List */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[350px] sm:h-[400px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl font-['Inter',sans-serif] text-[12.5px]">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] text-[#111827]">
              Active Devices (2)
            </span>

            <div className="p-3 bg-[#F8FAFC] border rounded-[10px] flex justify-between items-center">
              <div>
                <span className="font-bold text-[#111827] block">MacBook Pro — San Francisco</span>
                <span className="text-[11px] text-[#6B7280]">Active Now</span>
              </div>
              <button className="bg-[#FEE2E2] text-[#DC2626] font-bold text-[11px] px-2.5 py-1 rounded-full cursor-pointer">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 8. SECTION 7 — Compliance & Data Privacy ─── */
const SectionCompliancePrivacy: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Visual: Compliance Checklist Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[350px] sm:h-[400px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl font-['Inter',sans-serif]">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Compliance Controls
            </span>

            <div className="space-y-2 text-[12.5px]">
              {['Data Retention Policy', 'Access Logging', 'Data Export Requests', 'Deletion Requests'].map((c, i) => (
                <div key={i} className="p-2.5 bg-[#F8FAFC] border rounded-[8px] flex justify-between items-center font-semibold text-[#111827]">
                  <span>{c}</span>
                  <span className="text-[#10B981] font-bold">Compliant ✓</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Compliance & Privacy
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Built with the rules in mind, not bolted on after
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Workforce data comes with real compliance obligations. Workzi&apos;s access controls, audit trails and data handling are built to support those requirements, not treat them as an afterthought.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Data access aligned to compliance and privacy requirements',
            'Configurable data retention policies',
            'Support for data export and deletion requests',
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

/* ─── 9. SECTION 8 — IT / Admin View ─── */
const SectionITOverview: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[80px] bg-[rgba(120,90,253,0.15)]">
    <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[575px]">
          Full visibility, without needing to check in constantly
        </h2>
      </FadeUp>

      <FadeUp className="w-full max-w-[1152px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs p-6">
        <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[14px] flex items-center gap-[12px] rounded-[12px] mb-6">
          {['Authentication', 'Access Monitoring', 'Integrations', 'Audit Log'].map((tab, idx) => (
            <span
              key={idx}
              className={`font-['Inter',sans-serif] font-semibold text-[13px] px-[16px] py-[8px] rounded-full cursor-pointer transition-colors ${
                idx === 0 ? 'bg-[#5C5CFF] text-white' : 'bg-white border border-[#E5E7EB] text-[#6B7280]'
              }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">SSO & MFA Policies</h4>
            <p className="text-[#6B7280] text-[13px]">Enforce mandatory SSO and multi-factor authentication org-wide.</p>
          </div>
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Unusual Access Flags</h4>
            <p className="text-[#6B7280] text-[13px]">Monitor login activity and flag logins from unverified IP locations.</p>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 10. SECTION 9 — Role-Based Access Cards ─── */
const SectionRoleExperience: React.FC = () => {
  const roles = [
    {
      title: 'Employee',
      bullets: [
        'Secure login (SSO, MFA where enabled)',
        'View and manage own active sessions',
      ],
    },
    {
      title: 'HR / Admin',
      bullets: [
        'Configure role permissions',
        'Review audit logs relevant to HR actions',
        'Manage data retention and privacy settings',
      ],
    },
    {
      title: 'IT / System Admin',
      bullets: [
        'Configure authentication methods',
        'Monitor platform-wide access and login activity',
        'Manage integrations and API access',
        'Full audit log access and export',
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

/* ─── 11. FAQ SECTION ─── */
const SecurityFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Does Workzi support single sign-on (SSO)?',
      answer: 'Yes. Workzi integrates with enterprise identity providers for SSO, alongside standard email/password login.',
    },
    {
      question: 'Is data encrypted?',
      answer: 'Yes, both in transit and at rest, including uploaded documents and personal data.',
    },
    {
      question: 'Can employees see where they\'re logged in?',
      answer: 'Yes. Employees can view active sessions and devices, and log out remotely from any of them.',
    },
    {
      question: 'Is there an audit trail for permission changes?',
      answer: 'Yes. Role and permission changes, along with other key actions, are logged and searchable by IT/Admin.',
    },
    {
      question: 'How does Workzi support data privacy compliance?',
      answer: 'Access controls, audit logging and configurable data retention are built in, along with support for data export and deletion requests.',
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
            Everything you need to know about Workzi security & access control.
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
                      className={`w-[34px] h-[34px] rounded-[10px] flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-[#5B5FFF] text-white' : 'bg-[#EEF2FF] text-[#5B5FFF] group-hover:bg-[#5B5FFF] group-hover:text-white'
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

/* ─── 12. CLOSING CTA SECTION ─── */
const SecurityCTA: React.FC = () => (
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
          Security your IT team doesn&apos;t have to fight for
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-white/85 max-w-[511px] text-center">
          Authentication, access control, audit trails — built into Workzi from the ground up, not added as an afterthought.
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

/* ─── MAIN SECURITY & ACCESS CONTROL PAGE COMPONENT ─── */
export const SecurityAccessControlPage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <SecurityHero />
      <SectionHowItWorks />
      <SectionAuthentication />
      <SectionRoleAccessControl />
      <SectionDataEncryption />
      <SectionAuditLogs />
      <SectionSessionManagement />
      <SectionCompliancePrivacy />
      <SectionITOverview />
      <SectionRoleExperience />
      <SecurityFAQ />
      <SecurityCTA />
    </div>
  );
};

export default SecurityAccessControlPage;
