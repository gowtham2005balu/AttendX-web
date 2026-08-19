import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  Plus,
  X,
  MapPin,
  Shield,
  Layers,
} from 'lucide-react';

/* ─── Hero Graphic Component for Organization Management ─── */
const OrganizationManagementHeroChart: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[573px] h-[380px] sm:h-[430px] rounded-[24px] p-5 sm:p-6 flex items-center justify-center overflow-hidden"
      style={{
        background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
      }}
    >
      {/* Left Card — Department Tree Snippet */}
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
          <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[13px] uppercase text-[#6B7280] block mb-2">
            DEPARTMENT TREE
          </span>
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] leading-[22px] text-[#111827] block mb-3">
            Engineering Org
          </span>

          <div className="space-y-[8px] text-[11.5px] font-['Inter',sans-serif]">
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827]">Frontend Team</span>
              <span className="bg-[#EEEEFF] text-[#5C5CFF] font-bold px-2 py-0.5 rounded text-[10px]">14 Devs</span>
            </div>
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827]">Backend Core</span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold px-2 py-0.5 rounded text-[10px]">18 Devs</span>
            </div>
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827]">QA & Testing</span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold px-2 py-0.5 rounded text-[10px]">8 QA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card — Role & Permission Matrix Card */}
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
          <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[13px] uppercase text-[#6B7280] block mb-2">
            PERMISSION MATRIX
          </span>
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[20px] leading-[26px] text-[#111827] block mb-3">
            Manager Access
          </span>

          <div className="space-y-[8px] text-[11.5px] font-['Inter',sans-serif]">
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827]">Approve Time-off</span>
              <span className="text-[#10B981] font-bold">Enabled ✓</span>
            </div>
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827]">View Payroll Data</span>
              <span className="text-[#DC2626] font-bold">Restricted ✗</span>
            </div>
            <div className="p-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[8px] flex justify-between items-center">
              <span className="font-bold text-[#111827]">Assign Shifts</span>
              <span className="text-[#10B981] font-bold">Enabled ✓</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#5C5CFF] text-white font-['Inter',sans-serif] font-bold text-[12.5px] py-[9.5px] rounded-[10px]">
          Manage Roles & Access
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
const OrgHero: React.FC = () => (
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
          <span className="font-semibold text-[#111827]">Organization Management</span>
        </div>
      </div>
    </div>

    <section id="hero" className="w-full max-w-[1289px] mx-auto px-6 lg:px-0 pt-[40px] lg:pt-[60px] pb-[50px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        <div className="flex flex-col items-start w-full lg:w-[656px] gap-[17px] shrink-0">

          <div className="w-full max-w-[760px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.15] lg:leading-[60px] tracking-[-1.04px] text-[#111827]">
              The org structure everything else runs on
            </h1>
          </div>

          <div className="w-full lg:w-[577px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280]">
              Departments, reporting lines, roles and permissions — set up once in Workzi, and every other feature just knows who belongs where.
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
          <OrganizationManagementHeroChart />
        </div>
      </div>
    </section>

    <div className="w-full bg-white py-[36px] px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-[20px] overflow-x-auto no-scrollbar">
        {[
          'Live org chart tree',
          'Matrix reporting hierarchy',
          'Granular role permissions',
          'Multi-branch location setup',
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
      title: 'HR defines the structure',
      desc: 'Departments, reporting lines and locations.',
    },
    {
      num: '02',
      title: 'Roles get assigned',
      desc: 'Permissions mapped to responsibilities, not guesswork.',
    },
    {
      num: '03',
      title: 'Structure applies everywhere',
      desc: 'Directory, approvals, dashboards — all use the same data.',
    },
    {
      num: '04',
      title: 'Updates flow through instantly',
      desc: 'Move a team, change a manager — it\'s reflected across the platform.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[598px]">
            Structure that stays consistent everywhere
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[536px]">
            An org chart that only lives in a slide deck goes stale the day someone changes teams. Workzi keeps the structure live, so attendance, Time-off, tasks and reports all reflect it automatically.
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

/* ─── 3. SECTION 2 — Departments & Teams ─── */
const SectionDepartmentsTeams: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Departments & Teams
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Build the structure that matches how you actually work
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Not every organization is three neat layers deep. Workzi supports departments, sub-teams and cross-functional groups, so the structure in the system matches the one on the ground.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Create and manage departments and sub-teams',
            'Assign employees to one or more teams where needed',
            'Reorganize without breaking historical records',
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

      {/* Visual: Department Tree View */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Organization Hierarchy Tree
            </span>

            <div className="space-y-2.5 font-['Inter',sans-serif] text-[12.5px]">
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Layers size={14} className="text-[#5C5CFF]" />
                  <span className="font-bold text-[#111827]">Engineering</span>
                </div>
                <span className="bg-[#EEEEFF] text-[#5C5CFF] font-bold text-[11px] px-2.5 py-0.5 rounded-full">
                  40 Members
                </span>
              </div>
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center ml-4">
                <span className="font-semibold text-[#111827]">↳ Frontend Team</span>
                <span className="text-[#6B7280] text-[11px]">14 Members</span>
              </div>
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center ml-4">
                <span className="font-semibold text-[#111827]">↳ Backend Team</span>
                <span className="text-[#6B7280] text-[11px]">18 Members</span>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 4. SECTION 3 — Reporting Hierarchy ─── */
const SectionReportingHierarchy: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Visual: Org Chart Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col items-center gap-[14px] shadow-xl text-center font-['Inter',sans-serif]">
            <div className="p-3 bg-[#EEEEFF] border border-indigo-100 rounded-[12px] w-[200px]">
              <span className="text-[10px] font-bold text-[#5C5CFF] uppercase block">VP OF ENGINEERING</span>
              <span className="font-extrabold text-[#111827] text-[14px]">Alex Morgan</span>
            </div>
            <div className="w-[2px] h-[16px] bg-slate-300" />
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="p-2.5 bg-[#F8FAFC] border rounded-[10px]">
                <span className="text-[9.5px] font-bold text-[#6B7280] uppercase block">ENG LEAD</span>
                <span className="font-bold text-[#111827] text-[12px]">Sarah A.</span>
              </div>
              <div className="p-2.5 bg-[#F8FAFC] border rounded-[10px]">
                <span className="text-[9.5px] font-bold text-[#6B7280] uppercase block">QA LEAD</span>
                <span className="font-bold text-[#111827] text-[12px]">Michael K.</span>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Reporting Lines
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Everyone knows who they report to — and who reports to them
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Reporting lines drive approvals, visibility and escalation across the whole platform. Get them right once, and the rest of Workzi follows automatically.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Define manager-employee reporting relationships',
            'Support for matrix or dual reporting where needed',
            'Automatic org chart generated from the hierarchy',
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

/* ─── 5. SECTION 4 — Role & Permission Management ─── */
const SectionRolePermissions: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Permissions & Roles
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Access that matches responsibility, not guesswork
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Not everyone needs to see everything. Workzi&apos;s role-based permissions make sure employees, managers and HR each see exactly what their role requires — nothing more, nothing less.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Pre-built roles for Employee, Manager and HR/Admin',
            'Custom roles and permission sets where needed',
            'Granular control over what each role can view, edit or approve',
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

      {/* Visual: Permission Matrix Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[450px] sm:h-[480px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl font-['Inter',sans-serif]">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Role Matrix Setup
            </span>

            <table className="w-full text-[11.5px] border-collapse text-left">
              <thead>
                <tr className="border-b font-bold text-[#6B7280]">
                  <th className="py-1.5">FEATURE</th>
                  <th className="py-1.5">EMPLOYEE</th>
                  <th className="py-1.5">MANAGER</th>
                  <th className="py-1.5">HR/ADMIN</th>
                </tr>
              </thead>
              <tbody className="divide-y text-[#111827]">
                <tr>
                  <td className="py-2 font-semibold">Attendance</td>
                  <td>Own</td>
                  <td>Team</td>
                  <td>All</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Time-off Approvals</td>
                  <td>Apply</td>
                  <td>Approve</td>
                  <td>All</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold">Org Settings</td>
                  <td>None</td>
                  <td>None</td>
                  <td>Full</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ─── 6. SECTION 5 — Locations & Branches ─── */
const SectionLocationsBranches: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      {/* Visual: Location List Card */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[350px] sm:h-[400px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.14% 126.61% at 0% -8.9%, #4F7EFF 0%, #C5E2FF 51.12%, #9AA0FF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex flex-col gap-[14px] shadow-xl">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-[#111827]">
              Active Branch Locations
            </span>

            <div className="space-y-2 font-['Inter',sans-serif] text-[12.5px]">
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#5C5CFF]" />
                  <span className="font-bold text-[#111827]">Main HQ (San Francisco)</span>
                </div>
                <span className="text-[11px] font-semibold text-[#6B7280]">240 Staff</span>
              </div>
              <div className="p-3 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[10px] flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#5C5CFF]" />
                  <span className="font-bold text-[#111827]">Austin Branch</span>
                </div>
                <span className="text-[11px] font-semibold text-[#6B7280]">85 Staff</span>
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Multi-Location Setup
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          One organization, multiple locations, no duplicate setups
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Multi-office or multi-branch organizations don&apos;t need separate systems per location. Workzi handles location-specific settings — holidays, shifts, policies — within a single structure.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Manage multiple offices, branches or locations',
            'Location-specific holiday calendars and shift defaults',
            'Employees mapped to their registered work location',
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

/* ─── 7. SECTION 6 — Directory Integration ─── */
const SectionDirectoryIntegration: React.FC = () => (
  <section className="w-full py-[80px] px-8 bg-white">
    <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[24px]">
      <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[48px] lg:text-[55px] leading-[62px] tracking-[-1px] text-[#111827] text-center max-w-[620px]">
          The same structure, reflected in the directory
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16.5px] leading-[27px] text-[#6B7280] text-center max-w-[514px]">
          Org structure isn&apos;t a separate document from the employee directory — it&apos;s the backbone of it. Every department, team and reporting line shows up wherever employees are listed.
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

/* ─── 8. SECTION 7 — Approval Chains ─── */
const SectionApprovalChains: React.FC = () => (
  <section className="w-full py-[80px] px-6 lg:px-[100px] bg-white">
    <Container className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px] lg:gap-[60px]">
      <FadeUp className="flex flex-col items-start max-w-[549px] w-full gap-[24px]">
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Automated Approvals
          </span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.18] sm:leading-[54px] lg:leading-[62px] tracking-[-1.12px] text-[#000000]">
          Approvals that follow the structure automatically
        </h2>

        <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827]">
          Time-off requests, task approvals, document sign-offs — they all need to know who approves what. Workzi routes them based on the reporting hierarchy already defined, so nobody configures the same chain twice.
        </p>

        <div className="flex flex-col gap-[14px] pt-[13px] w-full">
          {[
            'Approval routing based on reporting lines',
            'Department-specific approval chains where needed',
            'Changes to hierarchy update approval routing automatically',
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

      {/* Visual: Approval Chain Diagram */}
      <FadeUp className="w-full lg:w-[611px] flex justify-center shrink-0">
        <div
          className="relative w-full max-w-[611px] h-[350px] sm:h-[400px] rounded-[16px] p-6 flex items-center justify-center overflow-hidden"
          style={{
            background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
          }}
        >
          <div className="w-full max-w-[518px] bg-white border border-[#E5E7EB] rounded-[16px] p-[24px] flex items-center justify-between shadow-xl font-['Inter',sans-serif] text-[12px] font-bold">
            <div className="p-2 bg-[#F8FAFC] border rounded text-center">Employee</div>
            <span>→</span>
            <div className="p-2 bg-[#EEEEFF] border border-indigo-100 rounded text-center text-[#5C5CFF]">Manager</div>
            <span>→</span>
            <div className="p-2 bg-[#EAFBF3] border border-emerald-100 rounded text-center text-[#15803D]">Dept Head</div>
          </div>
        </div>
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
          The control center for how the organization is built
        </h2>
      </FadeUp>

      <FadeUp className="w-full max-w-[1152px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden shadow-xs p-6">
        <div className="w-full bg-[#F8FAFC] border-b border-[#E5E7EB] px-[18px] py-[14px] flex items-center gap-[12px] rounded-[12px] mb-6">
          {['Departments', 'Roles & Permissions', 'Locations', 'Audit Log'].map((tab, idx) => (
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
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Department Structure</h4>
            <p className="text-[#6B7280] text-[13px]">Create, edit and archive departments and sub-teams.</p>
          </div>
          <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px]">
            <h4 className="font-bold text-[#111827] text-[14px] mb-1">Structural Audit Log</h4>
            <p className="text-[#6B7280] text-[13px]">Track every department move, role change and manager reassignment.</p>
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
        'View own department and reporting manager',
        'View organization chart',
      ],
    },
    {
      title: 'Manager',
      bullets: [
        'View team structure within their department',
        'Request structural changes for their team',
      ],
    },
    {
      title: 'HR / Admin',
      bullets: [
        'Create and manage departments',
        'Define reporting hierarchy',
        'Assign roles and permissions',
        'Manage locations and branches',
        'Review structural change audit log',
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
const OrgFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Does changing the org structure affect existing attendance or Time-off records?',
      answer: 'No. Historical records stay intact — reorganizing departments or reporting lines only affects how things are routed going forward.',
    },
    {
      question: 'Can Workzi handle multiple locations or branches?',
      answer: 'Yes. Each location can have its own holiday calendar and shift defaults, while still sitting under one organization structure.',
    },
    {
      question: 'How do role permissions work?',
      answer: 'Workzi ships with pre-built Employee, Manager and HR/Admin roles, and supports custom roles with granular view, edit and approval permissions per feature area.',
    },
    {
      question: 'Do approval chains update automatically when the hierarchy changes?',
      answer: 'Yes. Approval routing is based on the reporting hierarchy, so a structural change updates routing without needing to be reconfigured manually.',
    },
    {
      question: 'Can employees request a change to their reporting structure?',
      answer: 'Employees can flag a request through their manager; structural changes themselves are made by HR/Admin to maintain a clean audit trail.',
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
            Everything you need to know about Workzi organization management.
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
const OrgCTA: React.FC = () => (
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
          Get the structure right once
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-white/85 max-w-[511px] text-center">
          Departments, roles, hierarchy and locations — set them up properly, and let every other part of Workzi work off the same source of truth.
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

/* ─── MAIN ORGANIZATION MANAGEMENT PAGE COMPONENT ─── */
export const OrganizationManagementPage: React.FC = () => {
  return (
    <div className="w-full bg-white min-h-screen">
      <OrgHero />
      <SectionHowItWorks />
      <SectionDepartmentsTeams />
      <SectionReportingHierarchy />
      <SectionRolePermissions />
      <SectionLocationsBranches />
      <SectionDirectoryIntegration />
      <SectionApprovalChains />
      <SectionHROverview />
      <SectionRoleExperience />
      <OrgFAQ />
      <OrgCTA />
    </div>
  );
};

export default OrganizationManagementPage;
