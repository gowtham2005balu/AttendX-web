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
  Landmark,
  FileSpreadsheet,
  CheckSquare,
} from 'lucide-react';

import { FinancialServicesHeroChart } from './FinancialServicesHeroChart';

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
const FinancialServicesHero: React.FC = () => (
  <div className="w-full bg-white pt-[68px]">
    {/* div.container — Breadcrumbs */}
    <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-0 h-[45px] py-[14px] flex items-center gap-[8px]">
      <div className="flex items-center gap-[8px] font-['Inter',sans-serif] text-[13px] leading-[16px] text-[#6B7280]">
        <a href="#solutions" className="hover:text-[#111827] transition-colors">Solutions</a>
        <span>/</span>
        <span className="text-[#6B7280]">By Industry</span>
        <span>/</span>
        <span className="font-semibold text-[#111827]">Financial Services</span>
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
              WORKZI — SOLUTIONS FOR FINANCIAL SERVICES
            </span>
          </div>

          {/* h1 */}
          <div className="w-full lg:w-[578px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[46px] leading-[1.15] sm:leading-[52px] lg:leading-[54px] tracking-[-1.04px] text-[#111827]">
              Attendance and Approvals Across Every Branch, in One Place
            </h1>
          </div>

          {/* p.lead */}
          <div className="w-full lg:w-[480px] max-w-[480px] pt-[2.385px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280] max-w-[450px]">
              Financial institutions run on multiple branches, structured approval hierarchies, and accurate records. Workzi tracks attendance, Time-off, and approvals the way a distributed, branch-based workforce actually operates.
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
          <FinancialServicesHeroChart />
        </div>
      </div>
    </section>

    {/* TRUST STRIP (Hero Tag Pills) */}
    <div className="w-full bg-[#F8FAFC] py-[24px] sm:py-[32px] px-4 sm:px-6 lg:px-[112px]">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-x-6 gap-y-3 sm:gap-[20px]">
        {[
          'Multi-branch attendance',
          'Structured approvals',
          'Audit-ready reports',
          'Role-based access',
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
const FinancialServicesProblemValue: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      {/* div.section-head */}
      <div className="flex flex-col items-center text-center gap-[13.2px] max-w-[950px] w-full">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.25] tracking-[-0.84px] text-[#111827] text-center max-w-[950px] w-full">
          <span className="inline-block">One Branch Is Easy to Track. Twenty Isn't,</span>{' '}
          <span className="inline-block">Without the Right System.</span>
        </h2>

        <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16.5px] leading-[25px] sm:leading-[27px] text-[#6B7280] text-center max-w-[610px]">
          Financial institutions with multiple branches need attendance, Time-off, and approvals to work the same way everywhere, with clear records for every decision. Workzi is built for that structure from the start.
        </p>
      </div>

      {/* div.benefit-grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px] w-full max-w-[1216px]">
        {/* Card 1 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Every branch, one system
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Attendance and Time-off tracked consistently across all branch locations.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Branch Consistency
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                100% Unified
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Multi-Site Rollup
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Automated
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Branch Discrepancies
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Zero
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Approval hierarchies that hold
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Configure who approves what, at every level of the organization.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Approval Levels
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Multi-Tier
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Routing Integrity
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Strict
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Unapproved Requests
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Zero
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-[32px] flex flex-col justify-between gap-[11.4px] w-full">
          <div>
            <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[20px] leading-[23px] tracking-[-0.4px] text-[#111827] mb-3">
              Reports on demand
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[24px] text-[#6B7280] mb-6">
              Attendance and Time-off data, exportable whenever leadership needs it.
            </p>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[14px] p-[16px] pt-[26.6px] flex flex-col gap-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                On-Demand Exports
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Instant CSV/PDF
              </span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-gray-100/60">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Audit Visibility
              </span>
              <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Complete
              </span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#111827]">
                Manual Compilation
              </span>
              <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[11px] leading-[13px] px-[10px] py-[3px] rounded-full">
                Eliminated
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 3. REASON BLOCKS ─── */
const FinancialServicesKnowledgeSections: React.FC = () => {
  return (
    <div className="w-full bg-white py-[40px]">
      {/* Section Header */}
      <div className="w-full max-w-[1240px] mx-auto pt-[40px] pb-[20px] px-6 lg:px-[100px] flex flex-col items-center text-center gap-[13.2px]">
        <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] leading-[16px] tracking-[0.65px] uppercase text-[#5C5CFF]">
          WHY FINANCIAL INSTITUTIONS USE WORKZI
        </span>
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[40px] sm:leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[700px]">
          Built for Structured, Multi-Branch Operations
        </h2>
      </div>

      {/* Reason 1: Attendance Across Every Branch */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Department Management
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Attendance Across Every Branch, Tracked Consistently
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Configure departments and locations to mirror your branch structure, with attendance rolled up for HR and leadership.
                  </p>
                </div>

                <a
                  href="#department-management"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>See Department Management</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                "Structure banking branches, regional centers, and departments in one hierarchy",
                "Ensure standardized attendance logging across all branch locations",
                "Roll up branch data automatically for HR and executive leadership",
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
                <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">Branch Structure Console</span>
                <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-0.5 rounded-full shrink-0">Multi-Branch</span>
              </div>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Downtown Main Branch</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Teller Operations • 42 Staff</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Active</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Westside Financial Center</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Retail & Advisory • 28 Staff</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reason 2: Approval Hierarchies You Control */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] rounded-[50px]">
                Approval Workflows
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Approval Hierarchies You Control
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Set exactly who approves Time-off, attendance regularization, and requests at each level of the organization.
                  </p>
                </div>

                <a
                  href="#approval-workflows"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>See Approval Workflows</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                "Configure multi-level approval hierarchies for Time-off and attendance edits",
                "Ensure requests route to designated branch managers and regional leads",
                "Maintain complete audit visibility for every management decision",
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
                <span className="font-['Inter',sans-serif] font-bold text-[11px] uppercase tracking-wider text-[#6B7280]">APPROVAL HIERARCHY</span>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Branch Lead</span>
                  <span className="font-semibold text-[#15803D]">Level 1 Approved ✓</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Regional Dir</span>
                  <span className="font-semibold text-[#15803D]">Level 2 Approved ✓</span>
                </div>
                <div className="flex items-center justify-between bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-3 py-2 text-[12px]">
                  <span className="font-semibold text-[#111827]">Status</span>
                  <span className="font-semibold text-[#5C5CFF]">Audit Logged</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reason 3: Role-Based Access Across the Organization */}
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
                    Role-Based Access Across the Organization
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Give employees, branch managers, and HR administrators access to exactly what's relevant to their role.
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
                "Restrict workforce data access strictly according to organizational roles",
                "Ensure branch managers see only their location while HR views enterprise data",
                "Maintain data privacy and governance across all banking branches",
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
                <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#111827]">Role Permission Matrix</span>
                <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-0.5 rounded-full shrink-0">Secured</span>
              </div>
              <div className="flex flex-col gap-2.5 sm:gap-3">
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">Branch Manager Access</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Limited to Branch Staff Data</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Restricted</span>
                </div>
                <div className="flex items-center justify-between gap-2 p-2.5 sm:p-3 bg-[#F8FAFC] rounded-[10px] border border-[#E5E7EB]">
                  <div className="min-w-0">
                    <div className="font-['Inter',sans-serif] font-semibold text-[12.5px] sm:text-[13px] text-[#111827] truncate">HR Administrator Access</div>
                    <div className="font-['Inter',sans-serif] text-[10.5px] sm:text-[11px] text-[#6B7280] truncate">Full Enterprise Visibility</div>
                  </div>
                  <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-full shrink-0">Enterprise</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reason 4: Reports Ready When You Need Them */}
      <section className="w-full py-[60px] px-6 lg:px-[100px]">
        <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row-reverse items-center justify-between gap-[50px]">
          <div className="flex flex-col items-start p-0 gap-6 mx-auto max-w-[589px] w-full h-auto justify-center self-center">
            <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
              <span className="inline-flex flex-row items-center px-[14px] py-[5px] gap-[6px] bg-[#F0F9F0] text-[#3B8A3E] font-['Inter',sans-serif] font-semibold text-[12px] rounded-[50px]">
                Reports & Analytics
              </span>

              <div className="flex flex-col items-start p-0 gap-5 w-full max-w-[549px] self-stretch">
                <div className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
                  <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] lg:text-[48px] leading-[1.25] lg:leading-[62px] tracking-[-1.12px] text-[#000000] flex items-center w-full max-w-[549px] self-stretch">
                    Reports Ready When You Need Them
                  </h2>
                  <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] flex items-center w-full max-w-[549px] self-stretch">
                    Generate attendance and Time-off reports on demand, without manual compilation across branches.
                  </p>
                </div>

                <a
                  href="#reports-analytics"
                  className="inline-flex flex-row justify-center items-center px-[26px] py-[13px] gap-[8px] h-[43px] bg-[#1A1A1A] hover:bg-[#333333] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all hover:scale-[1.02]"
                >
                  <span>See Reports & Analytics</span>
                  <span className="w-[16px] h-[16px] flex items-center justify-center text-[14px]">→</span>
                </a>
              </div>
            </div>

            <ul className="flex flex-col items-start p-0 gap-3 w-full max-w-[549px] self-stretch">
              {[
                "Generate audit-ready attendance and Time-off reports instantly on demand",
                "Export clean CSV and PDF data breakdowns per branch or region",
                "Eliminate manual data compilation across branch offices",
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
                  <span className="truncate">REPORT TYPE</span>
                  <span className="hidden sm:block truncate">BRANCH REGION</span>
                  <span className="text-center sm:text-left truncate">FORMAT</span>
                  <span className="text-right truncate">EXPORT</span>
                </div>

                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 border-b border-gray-100 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#5C5CFF] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">AT</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Attendance Log</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">All Branches</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">All Branches</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">CSV / PDF</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">Ready ✓</span>
                </div>

                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 border-b border-gray-100 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#10B981] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">LV</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Time-off Audit</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">East Coast Hub</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">East Coast Hub</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#EAFBF3] text-[#15803D] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">CSV / PDF</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">Ready ✓</span>
                </div>

                <div className="grid grid-cols-[1.2fr_auto_auto] sm:grid-cols-4 items-center py-2.5 sm:py-3 text-[11.5px] sm:text-[12.5px] gap-1.5 sm:gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#3B82F6] text-white font-bold text-[9px] sm:text-[10px] flex items-center justify-center shrink-0">AP</span>
                    <div className="min-w-0">
                      <span className="font-semibold text-[#111827] block truncate">Approval Log</span>
                      <span className="text-[10px] text-[#6B7280] block sm:hidden truncate font-medium">Downtown Main</span>
                    </div>
                  </div>
                  <span className="text-[#111827] font-medium hidden sm:block truncate">Downtown Main</span>
                  <div className="shrink-0 flex justify-center sm:justify-start">
                    <span className="bg-[#EFF6FF] text-[#1D4ED8] font-bold text-[10px] sm:text-[11px] px-2 sm:px-2.5 py-0.5 rounded-full inline-block shrink-0 whitespace-nowrap">CSV / PDF</span>
                  </div>
                  <span className="text-right text-[#111827] font-medium shrink-0 text-[11px] sm:text-[12.5px]">Exported</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

/* ─── 4. MANAGER VISIBILITY SECTION (DARK MODE) ─── */
const FinancialServicesManagerVisibilityDark: React.FC = () => (
  <section className="w-full bg-[#0B0F17] py-[60px] sm:py-[80px] px-4 sm:px-6 lg:px-[32px] text-white">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[50px]">
      <div className="flex flex-col items-start max-w-[549px] w-full gap-[20px] sm:gap-[24px]">
        <span className="inline-flex items-center px-[14px] py-[5px] bg-white/10 text-[#A5B4FC] font-['Inter',sans-serif] font-semibold text-[12px] rounded-full">
          FOR BRANCH & REGIONAL MANAGERS
        </span>

        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.84px] text-white">
          See Attendance and Approvals Across Every Branch You Manage
        </h2>

        <p className="font-['Inter',sans-serif] text-[15px] sm:text-[16px] leading-[24px] sm:leading-[26px] text-slate-300">
          Get a consistent view of attendance and pending approvals across branches or regions, instead of checking each location separately.
        </p>

        <ul className="flex flex-col gap-2.5 sm:gap-3 pt-1 sm:pt-2">
          {[
            "Attendance status by branch, department, or region",
            "Approve Time-off and corrections without cross-checking spreadsheets",
            "Export reports for review or leadership updates",
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
            <span>Explore Manager Solutions</span>
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Dark Dashboard Preview Box */}
      <div className="w-full lg:w-[578px] bg-slate-900 border border-slate-800 rounded-[20px] sm:rounded-[24px] p-4 sm:p-6 shadow-2xl flex flex-col gap-3.5 sm:gap-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-bold text-[11px] sm:text-xs uppercase tracking-wider text-slate-300 truncate">Regional Branch Overview</span>
          </div>
          <span className="text-[10px] sm:text-xs text-slate-400 bg-slate-800 px-2 sm:px-2.5 py-1 rounded-md shrink-0">Multi-Branch Live</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
          <div className="bg-slate-800/60 rounded-xl p-3 sm:p-3.5 border border-slate-700/50">
            <div className="text-[11px] sm:text-xs text-slate-400 truncate">Total Regional Staff</div>
            <div className="text-xl sm:text-2xl font-black text-white pt-1">184 / 186</div>
            <div className="text-[9.5px] sm:text-[10px] text-emerald-400 pt-0.5 truncate">98.9% Logged In</div>
          </div>
          <div className="bg-slate-800/60 rounded-xl p-3 sm:p-3.5 border border-slate-700/50">
            <div className="text-[11px] sm:text-xs text-slate-400 truncate">Pending Approvals</div>
            <div className="text-xl sm:text-2xl font-black text-white pt-1">0 Pending</div>
            <div className="text-[9.5px] sm:text-[10px] text-indigo-400 pt-0.5 truncate">Hierarchies Active</div>
          </div>
        </div>

        <div className="bg-slate-800/40 rounded-xl p-3.5 sm:p-4 border border-slate-700/40 flex flex-col gap-2 sm:gap-2.5">
          <div className="text-xs font-bold text-slate-300">Audit-Ready Export Stream</div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11.5px] sm:text-xs bg-emerald-950/40 border border-emerald-800/40 p-2.5 rounded-lg text-emerald-200">
            <span className="leading-snug">Branch Attendance & Time-off Log — On-Demand</span>
            <span className="bg-emerald-800/60 text-emerald-100 px-2 py-0.5 rounded text-[10px] font-bold self-start sm:self-auto shrink-0">Export Ready ✓</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ─── 5. INTEGRATIONS SECTION ─── */
const FinancialServicesIntegrations: React.FC = () => (
  <section className="w-full bg-white py-[80px] px-6 lg:px-[32px]">
    <div className="w-full max-w-[1240px] mx-auto flex flex-col items-center gap-[40px] text-center">
      <div className="flex flex-col items-center gap-3 max-w-[700px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[1.2] text-[#111827]">
          Fits Alongside the Systems Your Institution Already Uses
        </h2>
        <p className="font-['Inter',sans-serif] text-[16px] text-[#6B7280]">
          Workzi manages workforce operations — attendance, Time-off, approvals — while your team keeps using its existing core banking and compliance systems.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-[800px]">
        {[
          { name: 'Communication', desc: 'Slack & Teams' },
          { name: 'Calendar', desc: 'Google & Outlook' },
          { name: 'Identity', desc: 'Email & SSO' },
          { name: 'Productivity', desc: 'Web & Mobile' },
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
const FinancialServicesFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Can Workzi manage attendance across multiple bank branches or offices?',
      a: 'Yes. Departments and locations can be configured to mirror your branch structure, with attendance tracked and reported per location.',
    },
    {
      q: 'Does Workzi meet financial services compliance standards (e.g., data privacy, labor law)?',
      a: 'Workzi supports configurable role-based access, automated audit logs, and location rules to help institutions align attendance operations with internal policies and standards.',
    },
    {
      q: 'Can approval hierarchies be configured for multiple levels of management?',
      a: 'Yes. Approval workflows can be set for Time-off, attendance regularization, and other requests at each level.',
    },
    {
      q: 'Can I export attendance and Time-off reports for review?',
      a: 'Yes. Reports can be generated and exported across attendance, Time-off, and other workforce data on demand.',
    },
    {
      q: 'Is employee data encrypted or access-restricted?',
      a: 'Yes. Workzi uses role-based access control and secure authentication to restrict data visibility exclusively to authorized roles.',
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
            Everything teams ask about Workzi Financial Services software.
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

/* ─── 7. CLOSING ROLE CTA BANNER (HUMAN RESOURCES MASTER DESIGN) ─── */
const FinancialServicesRoleCTABanner: React.FC = () => (
  <section className="w-full py-[72px] px-6 lg:px-[128px] bg-white">
    <div className="w-full max-w-[1184px] mx-auto bg-[linear-gradient(98.16deg,#8B8DFF_0%,#6366F1_50%,#818CF8_100%)] rounded-[32px] py-[72px] px-6 lg:px-[80px] flex flex-col items-center text-center relative overflow-hidden">
      {/* Soft Radial Glow Highlights */}
      <div className="absolute w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -top-[250px] left-[50%] -translate-x-[50%] pointer-events-none" />

      <div className="w-full max-w-[848px] mx-auto flex flex-col items-center gap-[15px] relative z-10">
        {/* h2 title */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] sm:text-[42px] lg:text-[46px] leading-[46px] sm:leading-[54px] lg:leading-[58px] tracking-[-1.12px] text-white max-w-[650px] mx-auto">
          Manage Attendance and Approvals Across Every Branch
        </h2>

        {/* Subtitle */}
        <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[18px] sm:text-[22px] leading-[32px] tracking-[-0.64px] text-[#CACDFF] max-w-[650px] mx-auto">
          Built for financial institutions running structured, multi-branch operations.
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

/* ─── MAIN FINANCIAL SERVICES SOLUTIONS PAGE COMPONENT ─── */
export const FinancialServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <FinancialServicesHero />
      <FinancialServicesProblemValue />
      <FinancialServicesKnowledgeSections />
      <FinancialServicesManagerVisibilityDark />
      <FinancialServicesIntegrations />
      <FinancialServicesFAQ />
      <FinancialServicesRoleCTABanner />
    </div>
  );
};

export default FinancialServicesPage;
