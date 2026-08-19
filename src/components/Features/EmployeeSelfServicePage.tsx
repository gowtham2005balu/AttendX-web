import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  Plus,
  X,
  Download,
  Edit2,
  FileText,
} from 'lucide-react';

/* ─── Hero Graphic Component for Employee Self Service ─── */
const EmployeeSelfServiceHeroChart: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[573px] h-[380px] sm:h-[430px] rounded-[24px] p-4 sm:p-6 flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
      }}
    >
      {/* Left Card — Editable Profile Card */}
      <div
        className="absolute bg-white border border-[#E5E7EB] rounded-[20px] p-[12px] sm:p-[16px] flex flex-col justify-between z-10 w-[200px] sm:w-[240px] h-[240px] sm:h-[270px] left-[12px] sm:left-[30px] top-[30px] sm:top-[40px]"
        style={{
          boxShadow: '0px 20px 40px -18px rgba(17, 24, 39, 0.2)',
        }}
      >
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-['Inter',sans-serif] font-bold text-[10px] sm:text-[11px] leading-[13px] uppercase text-[#6B7280]">
              MY PROFILE
            </span>
            <Edit2 size={13} className="text-[#5C5CFF] cursor-pointer" />
          </div>
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[15px] sm:text-[18px] leading-[22px] text-[#111827] block truncate">
            Sarah Anderson
          </span>
          <span className="font-['Inter',sans-serif] font-semibold text-[11px] sm:text-[12px] leading-[15px] text-[#6B7280] block mt-0.5 mb-2 sm:mb-3 truncate">
            Senior Product Designer
          </span>

          <div className="space-y-[6px] sm:space-y-[8px] text-[10.5px] sm:text-[11.5px] font-['Inter',sans-serif]">
            <div className="p-1.5 sm:p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px]">
              <span className="text-[#6B7280] text-[9px] sm:text-[10px] block">Emergency Contact</span>
              <span className="font-bold text-[#111827] truncate block">+1 (555) 234-5678</span>
            </div>
            <div className="p-1.5 sm:p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px]">
              <span className="text-[#6B7280] text-[9px] sm:text-[10px] block">Address</span>
              <span className="font-bold text-[#111827] truncate block">742 Evergreen Terrace</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card — "My Documents" Download List */}
      <div
        className="absolute bg-white border border-[#E5E7EB] rounded-[20px] p-[14px] sm:p-[18px] flex flex-col justify-between z-20 w-[200px] sm:w-[240px] h-[240px] sm:h-[270px] right-[12px] sm:right-[30px] bottom-[30px] sm:bottom-[40px]"
        style={{
          boxShadow: '0px 20px 40px -18px rgba(17, 24, 39, 0.2)',
        }}
      >
        <div>
          <span className="font-['Inter',sans-serif] font-bold text-[10px] sm:text-[11px] leading-[13px] uppercase text-[#6B7280] block mb-2">
            MY DOCUMENTS
          </span>
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] sm:text-[20px] leading-[22px] sm:leading-[26px] text-[#111827] block mb-2 sm:mb-3">
            Instant Downloads
          </span>

          <div className="space-y-[6px] sm:space-y-[8px] text-[10.5px] sm:text-[11.5px] font-['Inter',sans-serif]">
            <div className="p-1.5 sm:p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827] truncate">August Payslip</span>
              <Download size={13} className="text-[#5C5CFF] cursor-pointer shrink-0" />
            </div>
            <div className="p-1.5 sm:p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827] truncate">Offer Letter PDF</span>
              <Download size={13} className="text-[#5C5CFF] cursor-pointer shrink-0" />
            </div>
            <div className="p-1.5 sm:p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827] truncate">Tax Form 2026</span>
              <Download size={13} className="text-[#5C5CFF] cursor-pointer shrink-0" />
            </div>
          </div>
        </div>

        <button className="w-full bg-[#5C5CFF] text-white font-['Inter',sans-serif] font-bold text-[11px] sm:text-[12.5px] py-[8px] sm:py-[9.5px] rounded-[10px]">
          Browse Document Vault
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
const ESSHero: React.FC = () => (
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
          <span className="font-semibold text-[#111827]">Employee Self Service</span>
        </div>
      </div>
    </div>

    <section id="hero" className="w-full max-w-[1289px] mx-auto px-6 lg:px-0 pt-[40px] lg:pt-[60px] pb-[50px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        <div className="flex flex-col items-start w-full lg:w-[656px] gap-[17px] shrink-0">

          <div className="w-full max-w-[760px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.15] lg:leading-[60px] tracking-[-1.04px] text-[#111827]">
              HR requests that don&apos;t need HR to be in the room
            </h1>
          </div>

          <div className="w-full lg:w-[577px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280]">
              Update your details. Download a payslip. Raise a request. Workzi&apos;s self-service portal puts the everyday stuff in employees&apos; hands — so HR&apos;s inbox isn&apos;t the bottleneck for it.
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
          <EmployeeSelfServiceHeroChart />
        </div>
      </div>
    </section>

    <div className="w-full bg-white py-[36px] px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-[20px] overflow-x-auto no-scrollbar">
        {[
          'Self-editable profile fields',
          'Instant payslip downloads',
          'Automated document requests',
          'Centralized policy handbook',
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
      title: 'Employee finds what they need',
      desc: 'Documents, profile fields, or a request form — self-serve first.',
    },
    {
      num: '02',
      title: 'Request submitted, if needed',
      desc: 'For anything requiring approval or generation.',
    },
    {
      num: '03',
      title: 'HR reviews if required',
      desc: 'Only the requests that actually need a decision.',
    },
    {
      num: '04',
      title: 'Employee gets notified',
      desc: 'Document ready, request approved, done.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[598px]">
            From request to resolution, without the back-and-forth
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[536px]">
            &quot;Can you send me my payslip&quot; shouldn&apos;t be a message HR gets fifty times a month. Workzi lets employees find, request and manage what they need — HR steps in only when a decision is actually required.
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

/* ─── 3. SECTION 2 — Profile & Personal Details ─── */
const SectionProfileDetails: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Profile Self-Service
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Keep your own details up to date
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Address changed? Emergency contact needs updating? Employees can edit their own information directly, instead of filling out a form and waiting for someone else to enter it.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Edit contact info, address and emergency contacts',
            'Upload or update personal documents',
            'Changes routed for HR verification where policy requires it',
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

      {/* Visual: Editable Profile Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <div className="flex justify-between items-center">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
                Personal Info
              </span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[10.5px] px-2.5 py-1 rounded-full">
                Pending HR Verification
              </span>
            </div>

            <div className="space-y-3 font-['Inter',sans-serif] text-[12.5px]">
              <div className="p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] flex justify-between items-center">
                <div>
                  <span className="text-[#6B7280] text-[10px] uppercase font-bold block">Contact Phone</span>
                  <span className="font-semibold text-[#111827]">+1 (555) 987-6543</span>
                </div>
                <Edit2 size={13} className="text-[#5C5CFF]" />
              </div>
              <div className="p-2.5 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] flex justify-between items-center">
                <div>
                  <span className="text-[#6B7280] text-[10px] uppercase font-bold block">Residential Address</span>
                  <span className="font-semibold text-[#111827]">100 Innovation Way, Suite 400</span>
                </div>
                <Edit2 size={13} className="text-[#5C5CFF]" />
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 4. SECTION 3 — Document Access ─── */
const SectionDocumentAccess: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Visual: Document Library Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Document Library
            </span>

            <div className="space-y-2 font-['Inter',sans-serif] text-[12.5px]">
              {['Payslips', 'Offer Letters', 'Company Policies', 'ID Proofs'].map((folder, idx) => (
                <div key={idx} className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-[#5C5CFF]" />
                    <span className="font-bold text-[#111827]">{folder}</span>
                  </div>
                  <Download size={14} className="text-[#5C5CFF] cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Document Access
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Every document, one place, no email required
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Payslips, offer letters, ID proofs, policy documents — employees shouldn&apos;t need to email HR to find something that already exists about them.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Download payslips and compensation letters',
            'Access ID proofs and employment documents',
            'View company policies and handbooks anytime',
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

/* ─── 5. SECTION 4 — Document Requests ─── */
const SectionDocumentRequests: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Document Generation
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Need a letter? Ask without waiting in line
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Experience letters, salary certificates, address proofs — employees can request them directly, and track status instead of wondering if anyone&apos;s seen the email.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Request document generation directly from the portal',
            'Track request status: Submitted, In Progress, Ready',
            'Get notified the moment a document is ready to download',
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

      {/* Visual: Request Tracker Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Request Document Generation
            </span>

            <div className="space-y-3 font-['Inter',sans-serif] text-[12.5px]">
              <div>
                <label className="block text-[11px] font-bold text-[#6B7280] uppercase mb-1">Document Type</label>
                <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 font-medium text-[#111827]">
                  Experience Letter
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-[#6B7280] uppercase mb-1">Reason</label>
                <div className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 font-medium text-[#111827]">
                  Visa Application Process
                </div>
              </div>
            </div>

            <div className="bg-[#EEEEFF] border border-indigo-100 rounded-[12px] p-3 flex justify-between text-[11.5px] font-bold text-[#5C5CFF]">
              <span>1. Submitted ✓</span>
              <span>2. In Progress...</span>
              <span className="text-[#9CA3AF]">3. Ready</span>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 6. SECTION 5 — HR Queries & Requests ─── */
const SectionHRQueries: React.FC = () => {
  const queries = [
    { subject: 'Tax Deduction Clarification', cat: 'Payroll', status: 'In Progress', bg: 'bg-[#FEF3E2]', text: 'text-[#B45309]' },
    { subject: 'Health Insurance Addition', cat: 'Benefits', status: 'Resolved', bg: 'bg-[#EAFBF3]', text: 'text-[#15803D]' },
    { subject: 'Laptop Charger Replacement', cat: 'IT Support', status: 'Open', bg: 'bg-[#EEEEFF]', text: 'text-[#5C5CFF]' },
  ];

  return (
    <section className="w-full py-[80px] px-6 lg:px-[80px] bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] leading-[46px] tracking-[-0.8px] text-[#111827] text-center max-w-[566px]">
            Raise a query without starting a group chat
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[522px]">
            Not every question needs a meeting or a message to five people. Employees can raise a request or query directly, and it goes exactly where it needs to.
          </p>
        </FadeUp>

        <FadeUp className="w-full max-w-[1216px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs">
          <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[16px]">
            <span className="font-bold text-[#111827] text-[14px]">My Open HR Tickets</span>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-[#F8FAFC] text-[10.5px] font-['Inter',sans-serif] font-bold uppercase tracking-wider text-[#6B7280] h-[37px]">
                  <th className="pl-[18px] py-2">SUBJECT</th>
                  <th className="py-2">CATEGORY</th>
                  <th className="pr-[18px] py-2">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {queries.map((q, idx) => (
                  <tr key={idx} className="h-[49px] text-[12.5px] font-['Inter',sans-serif] text-[#111827] hover:bg-slate-50/50 transition-colors">
                    <td className="pl-[18px] py-2 font-semibold">{q.subject}</td>
                    <td className="py-2">{q.cat}</td>
                    <td className="pr-[18px] py-2">
                      <span className={`inline-block ${q.bg} ${q.text} font-bold text-[10.5px] px-[9px] py-[3px] rounded-full`}>
                        {q.status}
                      </span>
                    </td>
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

/* ─── 7. SECTION 6 — Policy & Handbook Access ─── */
const SectionPolicyHandbook: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Policy Handbook
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Company policy, always one tap away
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Time-off rules, code of conduct, reimbursement policy — employees shouldn&apos;t have to ask around to find the current version. It&apos;s in the portal, always up to date.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Centralized access to policies and handbooks',
            'Always the current version — no outdated PDFs floating around',
            'Searchable, so finding a specific policy doesn\'t take ten minutes',
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

      {/* Visual: Policy Library Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[350px] sm:h-[400px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Company Policies
            </span>

            <div className="space-y-2 font-['Inter',sans-serif] text-[12.5px]">
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <span className="font-bold text-[#111827]">Time-off & Attendance Policy 2026</span>
                <span className="text-[11px] text-[#6B7280]">Updated Jan 2026</span>
              </div>
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <span className="font-bold text-[#111827]">Code of Conduct & Ethics</span>
                <span className="text-[11px] text-[#6B7280]">Updated Mar 2026</span>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 8. SECTION 7 — Employee Directory Integration ─── */
const SectionDirectoryIntegration: React.FC = () => (
  <section className="w-full py-[80px] px-8 bg-white">
    <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[24px]">
      <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[620px]">
          Your profile, connected to the rest of the organization
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[514px]">
          Self-service isn&apos;t a separate silo — it&apos;s connected to the same directory colleagues and managers see, so updates stay consistent everywhere.
        </p>
      </FadeUp>

      <FadeUp className="pt-2 text-center">
        <a
          href="#employee-app"
          className="font-['Inter',sans-serif] font-bold text-[15px] leading-[18px] text-[#5C5CFF] hover:underline inline-flex items-center gap-1"
        >
          Explore Employee Directory →
        </a>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 9. SECTION 8 — HR / Admin View ─── */
const SectionHROverview: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[80px] bg-[rgba(120,90,253,0.15)]">
    <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[575px]">
          Fewer routine requests, more time for what actually needs a person
        </h2>
      </FadeUp>

      <FadeUp className="w-full max-w-[1152px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs p-6">
        <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[14px] flex items-center gap-[12px] rounded-[12px] mb-6">
          {['Requests', 'Documents', 'Policies'].map((tab, idx) => (
            <span
              key={idx}
              className={`font-['Inter',sans-serif] font-semibold text-[13px] px-[16px] py-[8px] rounded-full cursor-pointer transition-colors ${idx === 0 ? 'bg-[#5C5CFF] text-white' : 'bg-white border border-[#E5E7EB] text-[#6B7280]'
                }`}
            >
              {tab}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Editable Field Controls</h4>
            <p className="text-[#6B7280] text-[13px]">Configure which profile fields employees can edit directly without HR approval.</p>
          </div>
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Document Templates</h4>
            <p className="text-[#6B7280] text-[13px]">Manage templates for auto-generated letters and certificates.</p>
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
        'Edit personal profile details',
        'Download documents',
        'Request new documents',
        'Raise and track HR queries',
        'Access policies and handbooks',
      ],
    },
    {
      title: 'Manager',
      bullets: [
        'View team member profiles',
        'Approve document requests',
        'Set approval requirements',
      ],
    },
    {
      title: 'HR / Admin',
      bullets: [
        'Configure editable fields',
        'Manage document templates',
        'Monitor request volume',
        'Maintain policy library',
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
const ESSFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Can employees edit their own profile information?',
      answer: 'Yes, for fields HR has marked as editable. Some changes may be routed for verification depending on organization policy.',
    },
    {
      question: 'How do employees get documents like payslips or offer letters?',
      answer: 'They\'re available for download directly from the self-service portal — no request needed for standard documents already on file.',
    },
    {
      question: 'Can employees request documents that don\'t already exist, like an experience letter?',
      answer: 'Yes. Employees can submit a request, track its status, and download it once it\'s ready.',
    },
    {
      question: 'Are company policies kept up to date automatically?',
      answer: 'Yes. The policy library always shows the current version, so employees aren\'t referencing outdated documents.',
    },
    {
      question: 'Can HR control what employees can and can\'t edit themselves?',
      answer: 'Yes. HR configures which profile fields are self-editable and which require approval or verification.',
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
            Everything you need to know about Workzi employee self service.
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

/* ─── 12. CLOSING CTA SECTION ─── */
const ESSCTA: React.FC = () => (
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
          Give employees control over the routine stuff
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-white/85 max-w-[511px] text-center">
          Fewer emails to HR. Faster answers for employees. Workzi&apos;s self-service portal handles the routine, so people can focus on the rest.
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

/* ─── MAIN EMPLOYEE SELF SERVICE PAGE COMPONENT ─── */
export const EmployeeSelfServicePage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <ESSHero />
      <SectionHowItWorks />
      <SectionProfileDetails />
      <SectionDocumentAccess />
      <SectionDocumentRequests />
      <SectionHRQueries />
      <SectionPolicyHandbook />
      <SectionDirectoryIntegration />
      <SectionHROverview />
      <SectionRoleExperience />
      <ESSFAQ />
      <ESSCTA />
    </div>
  );
};

export default EmployeeSelfServicePage;
