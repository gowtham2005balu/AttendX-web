import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  Star,
  Users,
  Clock,
  Calendar,
  BarChart2,
  Shield,
  Smartphone,
  Zap,
  ArrowRight,
  UserCheck,
  FileText,
  Lock,
  ChevronDown,
  ChevronUp,
  Key,
  ShieldCheck,
  Cpu,
} from 'lucide-react';

import { ITHeroChart } from './ITHeroChart';

/* ─── FadeUp Animation ─── */
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
const ITHero: React.FC = () => (
  <div className="w-full bg-white pt-[68px]">
    {/* div.container — Breadcrumbs */}
    <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-0 h-[45px] py-[14px] flex items-center gap-[8px]">
      <div className="flex items-center gap-[8px] font-['Inter',sans-serif] text-[13px] leading-[16px] text-[#6B7280]">
        <a href="#solutions" className="hover:text-[#111827] transition-colors">Solutions</a>
        <span>/</span>
        <span className="text-[#6B7280]">By Department</span>
        <span>/</span>
        <span className="font-semibold text-[#111827]">IT</span>
      </div>
    </div>

    {/* HERO — Main Content */}
    <section id="hero" className="w-full max-w-[1216px] mx-auto px-6 lg:px-0 pt-[80px] pb-[56px]">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-[60px]">
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-start w-full lg:w-[578px] pt-[3px] gap-[16.8px] shrink-0">
          {/* div.eyebrow */}
          <div className="flex items-center w-full h-[16px]">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] leading-[16px] tracking-[0.65px] uppercase text-[#5C5CFF]">
              WORKZI — SOLUTIONS FOR IT
            </span>
          </div>

          {/* h1 */}
          <div className="w-full lg:w-[578px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.15] sm:leading-[52px] lg:leading-[54px] tracking-[-1.04px] text-[#111827]">
              Give IT Control Over Access, Without Slowing Down HR
            </h1>
          </div>

          {/* p.lead */}
          <div className="w-full lg:w-[480px] max-w-[480px] pt-[2.385px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280] max-w-[450px]">
              Role-based permissions, secure authentication, and access management built into Workzi from day one — so IT can govern who sees what, without becoming a bottleneck for every HR request.
            </p>
          </div>

          {/* div.hero-ctas */}
          <div className="flex items-center gap-[14px] w-full pt-[15.2px]">
            <a
              href="#pricing"
              className="bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] w-[138px] h-[49px] rounded-[12px] transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0"
            >
              Get Started
            </a>
            <a
              href="#pricing"
              className="bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] w-[151px] h-[49px] rounded-[12px] transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0"
            >
              Book a Demo
            </a>
          </div>
        </div>

        {/* Right Column: div.hero-visual */}
        <div className="w-full lg:w-[578px] flex items-center justify-center">
          <ITHeroChart />
        </div>
      </div>
    </section>

    {/* TRUST STRIP (Hero Tag Pills) */}
    <div className="w-full bg-[#F8FAFC] border-y border-[#E5E7EB] py-[24px] sm:py-[32px] px-4 sm:px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 sm:gap-[20px]">
        {[
          'Role-based access control',
          'Secure authentication',
          'Permission management',
          'Integration oversight',
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-[8px] shrink-0">
            <span className="w-[6px] h-[6px] rounded-full bg-[#5C5CFF] shrink-0" />
            <span className="font-['Inter',sans-serif] font-semibold text-[13px] sm:text-[14px] leading-[17px] text-[#6B7280] whitespace-nowrap">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ─── 2. PROBLEM -> VALUE SECTION ─── */
const ITProblemValue: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      {/* div.section-head */}
      <div className="flex flex-col items-center text-center gap-[13.2px] max-w-[950px] w-full">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.25] tracking-[-0.84px] text-[#111827] text-center max-w-[950px] w-full">
          <span className="inline-block">Workforce Data Shouldn't Be</span>{' '}
          <span className="inline-block">an Access-Control Afterthought.</span>
        </h2>

        <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#6B7280] text-center max-w-[610px]">
          HR systems hold sensitive data — attendance, leave, personal records. IT needs to control exactly who can see and act on what, without manually managing permissions for every new hire, manager, or department change.
        </p>
      </div>

      {/* div.benefit-grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] w-full max-w-[1216px]">
        {/* Card 1 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Granular, role-based access
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Employees, Managers, HR Admins, and IT each see only what's relevant to them.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Employee Scope
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Self-Service
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Manager Scope
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Direct Reports
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                IT Admin Scope
              </span>
              <span className="bg-[#FEF3E2] text-[#B45309] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Full Security
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              One place to manage permissions
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              No manual workarounds across scattered tools or unmanaged spreadsheets.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Permission Console
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Centralized
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Role Changes
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Auto-Synced
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Manual Workarounds
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Eliminated
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Secure by default
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Authentication and access control built into the platform, not added later.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Authentication
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                SSO Enabled
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Data Encryption
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Restricted
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Security Posture
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Enterprise Ready
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 3. REASON BLOCKS ─── */
const ITKnowledgeSections: React.FC = () => {
  return (
    <div className="w-full bg-white py-[40px]">
      {/* Section Header */}
      <div className="w-full max-w-[1240px] mx-auto pt-[40px] pb-[20px] px-6 lg:px-[100px] flex flex-col items-center text-center gap-[13.2px]">
        <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] leading-[16px] tracking-[0.65px] uppercase text-[#5C5CFF]">
          WHY IT TEAMS CHOOSE WORKZI
        </span>
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[40px] sm:leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[700px]">
          Built for the Access Control IT Actually Needs
        </h2>
      </div>

      {/* Reason 1: Role & Permission Management */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Role & Permission Management
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Role & Permission Management Without Manual Overhead
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Configure exactly what each role — Employee, Manager, HR Admin — can see and do, without hand-managing permissions user by user.
                  </p>
                </div>

                <a
                  href="#role-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>See Role & Permission Management</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                "Configure role permissions — Employee, Manager, HR Admin — effortlessly",
                "Eliminate manual user-by-user access management for IT teams",
                "Maintain strict data privacy and compliance across departments",
              ].map((text, idx) => (
                <li key={idx} className="flex flex-row items-center p-0 gap-[12px] w-full">
                  <span className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] text-[#10B981] flex flex-row items-center justify-center text-[12px] font-bold shrink-0 border border-[#10B981]/20">
                    ✓
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827] flex items-center">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-[611px] h-auto min-h-[260px] sm:min-h-[380px] lg:h-[496px] rounded-[16px] overflow-hidden border border-slate-200/50 flex items-center justify-center p-3.5 sm:p-6 bg-[radial-gradient(97.14%_126.61%_at_0%_-8.9%,#4F7EFF_0%,#C5E2FF_51.12%,#9AA0FF_100%)] relative">
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col gap-3.5 sm:gap-4 z-10">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">Role Permission Console</span>
                <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-0.5 rounded-full shrink-0">RBAC Active</span>
              </div>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Employee Role</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Self-Service • Personal Records</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Configured</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Manager Role</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Direct Reports • Roster Approvals</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Configured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reason 2: Authentication & Security */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Authentication & Security
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Secure Authentication From Day One
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Standard enterprise authentication (email/SSO) keeps login and access secure without extra configuration work.
                  </p>
                </div>

                <a
                  href="#authentication"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>See Authentication & Security</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                "Standard enterprise authentication with email & SSO support",
                "Ensure secure login without complex custom setup",
                "Enforce encrypted access control policies across all endpoints",
              ].map((text, idx) => (
                <li key={idx} className="flex flex-row items-center p-0 gap-[12px] w-full">
                  <span className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] text-[#10B981] flex flex-row items-center justify-center text-[12px] font-bold shrink-0 border border-[#10B981]/20">
                    ✓
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827] flex items-center">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-[611px] h-auto min-h-[260px] sm:min-h-[380px] lg:h-[496px] rounded-[16px] overflow-hidden border border-slate-200/50 flex items-center justify-center p-3.5 sm:p-6 bg-[radial-gradient(97.14%_126.61%_at_0%_-8.9%,#4F7EFF_0%,#C5E2FF_51.12%,#9AA0FF_100%)] relative">
            <div className="w-full max-w-[510px] bg-white/90 backdrop-blur-md rounded-[20px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-center gap-5 z-10">
              <div className="w-full sm:w-[210px] bg-white rounded-[16px] border border-[#E5E7EB] p-4 flex flex-col gap-2.5">
                <span className="font-['Inter',sans-serif] font-bold text-[11px] uppercase tracking-wider text-[#6B7280]">SECURITY VERIFIED</span>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Auth Type</span>
                  <span className="font-semibold text-[#5C5CFF]">SSO / Email</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Encryption</span>
                  <span className="font-semibold text-[#15803D] flex items-center gap-1">Restricted ✓</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Logins</span>
                  <span className="font-semibold text-[#15803D]">100% Audited</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reason 3: Organization Management */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Organization Management
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Organization Structure That Mirrors Your Company
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Department and org structure setup means access naturally follows how your company is actually organized — not a flat, one-size-fits-all permission model.
                  </p>
                </div>

                <a
                  href="#org-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>See Organization Management</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                "Structure departments and teams to mirror your real org hierarchy",
                "Access permissions follow org chart changes automatically",
                "Eliminate one-off manual permission adjustments when employees move",
              ].map((text, idx) => (
                <li key={idx} className="flex flex-row items-center p-0 gap-[12px] w-full">
                  <span className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] text-[#10B981] flex flex-row items-center justify-center text-[12px] font-bold shrink-0 border border-[#10B981]/20">
                    ✓
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827] flex items-center">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-[611px] h-auto min-h-[260px] sm:min-h-[380px] lg:h-[496px] rounded-[16px] overflow-hidden border border-slate-200/50 flex items-center justify-center p-3.5 sm:p-6 bg-[radial-gradient(97.14%_126.61%_at_0%_-8.9%,#4F7EFF_0%,#C5E2FF_51.12%,#9AA0FF_100%)] relative">
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-4 sm:p-6 flex flex-col gap-3.5 sm:gap-4 z-10">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">Org Hierarchy Mapping</span>
                <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-0.5 rounded-full shrink-0">Auto-Inherited</span>
              </div>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Engineering Dept</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">3 Squads • 28 Engineers</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Synced</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Customer Support Dept</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">3 Shifts • 42 Support Agents</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Synced</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reason 4: Integrations Oversight */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Integration Oversight
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Integrations IT Can Actually Oversee
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Keep visibility into what's connected to Workzi and how data flows between systems, instead of untracked shadow integrations.
                  </p>
                </div>

                <a
                  href="#integrations-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>See Integrations</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                "Maintain full IT visibility into connected workplace tools",
                "Prevent untracked shadow integrations with sensitive workforce records",
                "Monitor data sync logs and connection status in one view",
              ].map((text, idx) => (
                <li key={idx} className="flex flex-row items-center p-0 gap-[12px] w-full">
                  <span className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] text-[#10B981] flex flex-row items-center justify-center text-[12px] font-bold shrink-0 border border-[#10B981]/20">
                    ✓
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] leading-[20px] text-[#111827] flex items-center">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full max-w-[611px] h-auto min-h-[380px] sm:h-[496px] rounded-[16px] overflow-hidden border border-slate-200/50 flex items-center justify-center p-3.5 sm:p-6 bg-[radial-gradient(97.38%_131.25%_at_8.51%_3.7%,#9AA0FF_0%,#C5E2FF_51.12%,#4F7EFF_100%)] relative">
            <div className="w-full max-w-[503px] bg-white rounded-[14px] border border-[#E5E7EB] p-3.5 sm:p-6 flex flex-col gap-3 sm:gap-4 z-10 shadow-xs">
              <div className="w-full flex flex-col pt-1">
                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 pb-2.5 border-b border-gray-100 font-['Inter',sans-serif] font-bold text-[9.5px] sm:text-[10px] uppercase tracking-wider text-[#6B7280] gap-1.5 sm:gap-2 items-center">
                  <span className="truncate">INTEGRATION</span>
                  <span className="hidden sm:block truncate">CATEGORY</span>
                  <span className="text-center sm:text-left truncate">STATUS</span>
                  <span className="text-right truncate">DATA FLOW</span>
                </div>

                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 border-b border-gray-100 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#5C5CFF] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">SSO</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Identity Provider</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">Auth</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">Auth</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">Active</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">Encrypted</span>
                </div>

                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 border-b border-gray-100 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#10B981] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">CAL</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Calendar Sync</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">Events</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">Events</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">Active</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">Synced</span>
                </div>

                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#3B82F6] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">MSG</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Slack & Teams</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">Alerts</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">Alerts</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">Monitored</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── 4. GOVERNANCE & SECURITY SECTION (DARK MODE) ─── */
const ITGovernanceDark: React.FC = () => (
  <section className="w-full bg-[#0B0F17] py-[60px] sm:py-[80px] px-4 sm:px-6 lg:px-[32px] text-white">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[50px]">
      <div className="flex flex-col items-start max-w-[549px] w-full gap-[20px] sm:gap-[24px]">
        <span className="inline-flex items-center px-[14px] py-[5px] bg-white/10 text-[#A5B4FC] font-['Inter',sans-serif] font-semibold text-[12px] rounded-full">
          FOR IT & SYSTEM ADMINISTRATORS
        </span>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.84px] text-white">
          Govern Workforce Data Without Becoming the Bottleneck
        </h2>

        <p className="font-['Inter',sans-serif] text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-slate-300">
          IT shouldn't have to manually approve every access change or chase down who has permission to what. Workzi's role-based structure means access follows the org chart automatically as people join, move, or leave.
        </p>

        <ul className="flex flex-col gap-2.5 sm:gap-3 pt-1 sm:pt-2">
          {[
            "Assign roles once — Employee, Manager, HR Admin — permissions follow automatically",
            "Reduce one-off access requests landing in IT's queue",
            "Keep a clear line of sight into who can access what, org-wide",
          ].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-[14px] sm:text-[15px] text-slate-200">
              <span className="w-5 h-5 rounded-full bg-[#5C5CFF]/20 text-[#818CF8] flex items-center justify-center font-bold text-xs shrink-0">
                ✓
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="pt-2 sm:pt-4">
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-bold text-[14px] sm:text-[15px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all shadow-md"
          >
            <span>Explore Role & Permission Management</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Dark Dashboard Preview Box */}
      <div className="w-full lg:w-[578px] bg-slate-900 border border-slate-800 rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 shadow-2xl flex flex-col gap-3.5 sm:gap-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse shrink-0" />
            <span className="font-bold text-[11px] sm:text-xs uppercase tracking-wider text-slate-300 truncate">IT Governance Console</span>
          </div>
          <span className="text-[10px] sm:text-xs text-slate-400 bg-slate-800 px-2 sm:px-2.5 py-1 rounded-md shrink-0">Audit Ready</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          <div className="bg-slate-800/60 rounded-xl p-3 sm:p-3.5 border border-slate-700/50">
            <div className="text-[11px] sm:text-xs text-slate-400 truncate">System Roles</div>
            <div className="text-xl sm:text-2xl font-black text-white pt-1">4 Configured</div>
            <div className="text-[9.5px] sm:text-[10px] text-emerald-400 pt-0.5 truncate">RBAC Active</div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-3.5 border border-slate-700/50">
            <div className="text-[11px] sm:text-xs text-slate-400 truncate">IT Queue Bottlenecks</div>
            <div className="text-xl sm:text-2xl font-black text-white pt-1">0 Pending</div>
            <div className="text-[9.5px] sm:text-[10px] text-blue-400 pt-0.5 truncate">Org Auto-Inherited</div>
          </div>
        </div>

        <div className="bg-slate-800/40 rounded-xl p-3.5 sm:p-4 border border-slate-700/40 flex flex-col gap-2 sm:gap-2.5">
          <div className="text-xs font-bold text-slate-300">System Access Audit</div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11.5px] sm:text-xs bg-emerald-950/40 border border-emerald-800/40 p-2.5 rounded-lg text-emerald-200">
            <span className="leading-snug">All permissions follow active structure</span>
            <span className="bg-emerald-800/60 text-emerald-100 px-2 py-0.5 rounded text-[10px] font-bold self-start sm:self-auto shrink-0">100% Compliant</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 5. INTEGRATIONS SECTION ─── */
const ITIntegrations: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px] border-b border-[#E5E7EB]">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-[40px] text-center">
      <div className="flex flex-col items-center gap-3 max-w-[700px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[1.2] text-[#111827]">
          Keep Oversight of What Connects to Your Workforce Data
        </h2>
        <p className="font-['Inter',sans-serif] text-[16px] text-[#6B7280]">
          IT stays in control of what's integrated with Workzi and how data moves — no untracked connections to sensitive workforce records.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-[800px]">
        {[
          { name: 'Communication', desc: 'Slack & Teams' },
          { name: 'Identity', desc: 'Email & SSO' },
          { name: 'Productivity', desc: 'Web & Mobile' },
          { name: 'Calendar', desc: 'Google & Outlook' },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-5 flex flex-col items-center justify-center gap-1.5">
            <span className="font-bold text-[15px] text-[#111827]">{item.name}</span>
            <span className="text-[12.5px] text-[#6B7280]">{item.desc}</span>
          </div>
        ))}
      </div>

      <a
        href="#pricing"
        className="inline-flex items-center gap-2 text-[#5C5CFF] font-bold text-[15px] hover:underline"
      >
        <span>Explore Integrations</span>
        <span>→</span>
      </a>
    </div>
  </section>
);

/* ─── 6. FAQ SECTION ─── */
const ITFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Does Workzi support role-based access control?',
      a: 'Yes. Workzi lets you configure distinct access for Employees, Managers, HR Administrators, and IT/System Administrators, so each role only sees what\'s relevant to them.',
    },
    {
      q: 'Does Workzi support single sign-on (SSO)?',
      a: 'Workzi supports standard enterprise authentication methods including email login and SSO integration options.',
    },
    {
      q: 'Who can change employee permissions or roles?',
      a: 'Only designated IT Administrators and HR System Admins have permission to configure or modify role assignments and access rules.',
    },
    {
      q: 'Is employee and attendance data encrypted or access-restricted?',
      a: 'Yes. All workforce data is strictly access-restricted via role-based security policies, ensuring sensitive employee records remain fully protected.',
    },
    {
      q: 'Can IT manage organization structure and departments directly?',
      a: 'Yes. Department and organization management lets IT (or HR admins, depending on configured permissions) structure the company to match how it actually operates.',
    },
  ];

  const toggleFAQ = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
      <div className="w-full max-w-[850px] mx-auto flex flex-col items-center gap-[48px]">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[36px] sm:text-[44px] leading-[52px] text-[#111827]">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[17px] leading-[26px] text-[#6B7280]">
            Everything teams ask about Workzi IT software.
          </p>
        </div>

        {/* FAQ List */}
        <div className="w-full flex flex-col divide-y divide-[#E5E7EB]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-[24px] flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer group"
                >
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16.5px] leading-[22px] text-[#111827] group-hover:text-[#5C5CFF] transition-colors">
                    {faq.q}
                  </span>
                  <span
                    className={`w-[32px] h-[32px] rounded-[10px] flex items-center justify-center text-[16px] font-bold transition-all shrink-0 ${isOpen
                        ? 'bg-[#5C5CFF] text-white'
                        : 'bg-[#EEF2FF] text-[#5C5CFF] group-hover:bg-[#5C5CFF] group-hover:text-white'
                      }`}
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] pt-2"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── 7. CLOSING CTA BANNER ─── */
const ITRoleCTABanner: React.FC = () => (
  <section className="w-full py-[72px] px-6 lg:px-[128px] bg-white">
    <div className="w-full max-w-[1184px] mx-auto bg-[linear-gradient(98.16deg,#8B8DFF_0%,#6366F1_50%,#818CF8_100%)] rounded-[32px] py-[72px] px-6 lg:px-[80px] flex flex-col items-center text-center relative overflow-hidden">
      {/* Soft Radial Glow Highlights */}
      <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -top-[250px] left-[50%] -translate-x-[50%] pointer-events-none" />

      <div className="w-full max-w-[848px] mx-auto flex flex-col items-center gap-[15px] relative z-10">
        {/* h2 title */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] sm:text-[42px] lg:text-[46px] leading-[46px] sm:leading-[54px] lg:leading-[58px] tracking-[-1.12px] text-white max-w-[650px] mx-auto">
          Give IT the Access Control It Needs. Give HR the Speed It Wants.
        </h2>

        {/* Subtitle */}
        <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[18px] sm:text-[22px] leading-[32px] tracking-[-0.64px] text-[#CACDFF] max-w-[650px] mx-auto">
          Role-based permissions, secure authentication, and clear oversight — without IT becoming a bottleneck for everyday HR work.
        </h3>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-[12px] pt-6">
          <a
            href="#pricing"
            className="bg-white text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[24px] py-[14px] rounded-full hover:bg-slate-50 transition-all hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="#pricing"
            className="border border-white/30 text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[24px] py-[12px] rounded-full hover:bg-white/10 transition-all"
          >
            Book a Demo
          </a>
        </div>
      </div>
    </div>
  </section>
);

/* ─── MAIN IT SOLUTIONS PAGE COMPONENT ─── */
export const ITPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <ITHero />
      <ITProblemValue />
      <ITKnowledgeSections />
      <ITGovernanceDark />
      <ITIntegrations />
      <ITFAQ />
      <ITRoleCTABanner />
    </div>
  );
};

export default ITPage;
