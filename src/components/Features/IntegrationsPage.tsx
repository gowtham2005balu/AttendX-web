import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  Plus,
  X,
  Zap,
  Database,
  Building2,
  MessageSquare,
  Fingerprint,
  Calendar,
  Code,
  CheckCircle2,
  Sliders,
  ChevronDown,
  ArrowRight,
  Shield,
  FileText,
  Clock,
  RefreshCw,
  Terminal,
} from 'lucide-react';

/* ─── Hero Graphic Component for Integrations ─── */
const IntegrationsHeroGraphic: React.FC = () => {
  return (
    <div
      className="relative w-full max-w-[573px] h-[380px] sm:h-[420px] rounded-[24px] p-6 sm:p-8 flex items-center justify-center overflow-hidden border border-slate-200/80 shadow-xl"
      style={{
        background: 'radial-gradient(97.38% 131.25% at 8.51% 3.7%, #9AA0FF 0%, #C5E2FF 51.12%, #4F7EFF 100%)',
      }}
    >
      <div className="w-full bg-white/95 backdrop-blur-md rounded-[20px] p-6 border border-white/80 shadow-2xl flex flex-col justify-between h-full font-['Plus_Jakarta_Sans',sans-serif]">
        {/* Central Hub Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#5C5CFF] text-white flex items-center justify-center font-extrabold text-base shadow-sm">
              W
            </div>
            <div>
              <span className="font-extrabold text-[15px] text-[#111827] block leading-tight">Workzi Integration Hub</span>
              <span className="text-[11px] text-[#6B7280] font-semibold">Realtime Data Synchronization</span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-extrabold flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live
          </span>
        </div>

        {/* Spoke Grid */}
        <div className="grid grid-cols-2 gap-3 my-4">
          {[
            { label: 'Payroll Systems', sub: 'ADP, BambooHR', icon: Database, color: 'text-emerald-600 bg-emerald-50' },
            { label: 'ERP Enterprise', sub: 'Oracle, Workday', icon: Building2, color: 'text-blue-600 bg-blue-50' },
            { label: 'Slack & Teams', sub: 'Approvals in Chat', icon: MessageSquare, color: 'text-purple-600 bg-purple-50' },
            { label: 'Biometrics', sub: 'On-site Scanners', icon: Fingerprint, color: 'text-amber-600 bg-amber-50' },
            { label: 'Google & Outlook', sub: 'Synced Calendars', icon: Calendar, color: 'text-rose-600 bg-rose-50' },
            { label: 'Custom REST API', sub: 'Developer Sandbox', icon: Code, color: 'text-cyan-600 bg-cyan-50' },
          ].map((spoke, idx) => {
            const IconComponent = spoke.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-[12px] bg-slate-50 border border-slate-100 hover:border-[#5C5CFF]/30 transition-all">
                <div className={`w-8 h-8 rounded-[9px] ${spoke.color} flex items-center justify-center shrink-0`}>
                  <IconComponent size={16} />
                </div>
                <div className="flex flex-col text-left min-w-0">
                  <span className="text-[12px] font-bold text-[#111827] truncate">{spoke.label}</span>
                  <span className="text-[10px] font-medium text-[#6B7280] truncate">{spoke.sub}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Status */}
        <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-[#6B7280]">
          <span>6 Active Connectors</span>
          <span className="text-[#5C5CFF]">AES-256 Encrypted</span>
        </div>
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
const IntegrationsHero: React.FC = () => (
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
          <span className="font-semibold text-[#111827]">Integrations</span>
        </div>
      </div>
    </div>

    <section id="hero" className="w-full max-w-[1289px] mx-auto px-6 lg:px-0 pt-[40px] lg:pt-[60px] pb-[50px]">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-[60px]">
        <div className="flex flex-col items-start w-full lg:w-[656px] gap-[17px] shrink-0">

          <div className="w-full max-w-[760px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[52px] leading-[1.15] lg:leading-[60px] tracking-[-1.04px] text-[#111827]">
              Workzi, connected to everything you already run on
            </h1>
          </div>

          <div className="w-full lg:w-[577px]">
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30px] text-[#6B7280]">
              Payroll, ERP, communication tools, biometric devices — Workzi doesn't ask your organization to rebuild its stack around it. It fits into the one you already have.
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
              href="#contact-support"
              className="bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#111827] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] w-[148px] h-[49px] rounded-[12px] transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 shadow-xs"
            >
              Talk to Sales
            </a>
          </div>
        </div>

        <div className="w-full lg:w-[573px] flex items-center justify-center shrink-0">
          <IntegrationsHeroGraphic />
        </div>
      </div>
    </section>

    {/* Bottom Trust Items Bar */}
    <div className="w-full bg-white py-[36px] px-6 lg:px-[112px] border-b border-slate-100">
      <div className="w-full max-w-[1216px] mx-auto flex flex-wrap sm:flex-nowrap items-center justify-between gap-[20px] overflow-x-auto no-scrollbar">
        {[
          'Payroll & ERP auto-sync',
          'Slack & Teams in-chat approvals',
          'Biometric device check-ins',
          'Developer REST API & webhooks',
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
      title: 'Choose an integration',
      desc: 'Payroll, ERP, communication, or device — pick what you need.',
    },
    {
      num: '02',
      title: 'Connect and authorize',
      desc: 'A guided setup, not a support ticket.',
    },
    {
      num: '03',
      title: 'Data syncs automatically',
      desc: 'Attendance, Time-off and employee data flow both ways, on schedule.',
    },
    {
      num: '04',
      title: 'IT monitors and manages',
      desc: 'Every connection visible and controllable from one place.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center max-w-[598px]">
            From connection to daily use, without an IT project
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[30px] text-[#6B7280] text-center">
            Integrations shouldn't take a quarter to set up. Workzi connects to the tools you use in a few steps, then stays quietly in sync.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {steps.map((step, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="h-full bg-slate-50/80 border border-slate-200/80 rounded-[20px] p-6 flex flex-col justify-between group hover:shadow-lg transition-all duration-200">
                <div>
                  <span className="inline-block text-3xl font-black text-[#5C5CFF]/40 group-hover:text-[#5C5CFF] transition-colors mb-4 font-mono">
                    {step.num}
                  </span>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-bold text-[#111827] mb-2">
                    {step.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-sm text-[#6B7280] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-[#5C5CFF]">
                  <span>Step {step.num}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ─── 3. SECTION 2 — Integration Categories ─── */
const SectionCategories: React.FC = () => {
  const categories = [
    {
      icon: Database,
      title: 'Payroll & Finance',
      desc: 'Sync attendance and Time-off data straight into payroll runs to eliminate manual CSV uploads.',
      badge: 'Automated Sync',
    },
    {
      icon: MessageSquare,
      title: 'Communication',
      desc: 'Slack, Microsoft Teams, Google Workspace for direct Time-off approvals and instant notifications.',
      badge: 'Interactive Chat',
    },
    {
      icon: Building2,
      title: 'ERP & Accounting',
      desc: 'Keep employee records, departments, and cost-center data consistent across global enterprise ERPs.',
      badge: 'Bi-directional',
    },
    {
      icon: Fingerprint,
      title: 'Biometric & Access Devices',
      desc: 'Pull real-time check-in data directly from existing hardware scanners and turnstiles.',
      badge: 'Hardware Ready',
    },
    {
      icon: Calendar,
      title: 'Calendar Sync',
      desc: 'Reflect Time-off, shifts, and WFH days in Google Calendar & Outlook calendars people already use.',
      badge: 'Live Status',
    },
    {
      icon: Code,
      title: 'Webhooks & Custom APIs',
      desc: 'Connect proprietary in-house tools or niche software with robust REST endpoints and developer sandboxes.',
      badge: 'Developer First',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-[#F8FAFC] border-y border-slate-200/60">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[680px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center">
            Every tool your organization already depends on
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[30px] text-[#6B7280] text-center">
            Whatever runs payroll, whatever runs communication, whatever's already tracking who's on-site — Workzi is built to connect to it, not replace it overnight.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <FadeUp key={idx} delay={idx * 0.08}>
                <div className="bg-white border border-slate-200/80 rounded-[20px] p-7 shadow-xs hover:shadow-lg hover:border-[#5C5CFF]/40 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#5C5CFF]">
                        <IconComponent size={24} />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-bold text-xs">
                        {cat.badge}
                      </span>
                    </div>
                    <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-bold text-[#111827] mb-2">
                      {cat.title}
                    </h3>
                    <p className="font-['Inter',sans-serif] text-sm text-[#6B7280] leading-relaxed">
                      {cat.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

/* ─── 4. SECTION 3 — Act Without Switching Tools ─── */
const SectionInChatApprovals: React.FC = () => (
  <section className="w-full py-[80px] px-8 bg-white">
    <Container className="max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <FadeUp>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] uppercase tracking-[0.65px] text-[#5C5CFF] block mb-3">
              IN-CHAT APPROVALS
            </span>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] leading-[1.2] text-[#111827] mb-6">
              Approve a request without leaving the app you're already in
            </h2>
            <p className="font-['Inter',sans-serif] text-[16px] text-[#6B7280] leading-[28px] mb-6">
              A Time-off request shouldn't require opening Workzi just to say yes. When Workzi is connected to Slack or Teams, approvals, corrections and requests show up right in the conversation — with enough context to act on the spot.
            </p>
            <ul className="space-y-3">
              {[
                'Approve or decline directly from Slack or Microsoft Teams',
                'Rich previews with Time-off balance & overlap warnings',
                'Actions taken in chat reflect instantly back in Workzi',
              ].map((pt, i) => (
                <li key={i} className="flex items-center gap-3 font-['Inter',sans-serif] text-sm text-[#111827] font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#EEEEFF] text-[#5C5CFF] flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>

        {/* Right Chat Mockup */}
        <div className="lg:col-span-6 flex justify-center">
          <FadeUp delay={0.2} className="w-full max-w-[480px]">
            <div className="bg-[#1A1D21] rounded-[24px] p-6 text-white shadow-2xl border border-slate-800 font-['Inter',sans-serif]">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>#hr-approvals-channel</span>
                </div>
                <span>Workzi Bot</span>
              </div>

              <div className="bg-[#222529] rounded-[16px] p-5 border border-slate-700/60">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#5C5CFF] flex items-center justify-center font-bold text-white text-xs">
                      AJ
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Alex Johnson</h4>
                      <p className="text-xs text-slate-400">Requested Annual Time-off</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[11px] font-bold">
                    Pending
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs bg-[#1A1D21] p-3 rounded-[12px] mb-4 border border-slate-800">
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold">DATES</span>
                    <span className="font-semibold text-slate-200">Dec 18 - Dec 22</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] font-bold">BALANCE AFTER</span>
                    <span className="font-semibold text-slate-200">12 Days Left</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="flex-1 py-2 rounded-[10px] bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors cursor-pointer">
                    ✓ Approve
                  </button>
                  <button className="flex-1 py-2 rounded-[10px] bg-rose-600/30 hover:bg-rose-600/40 text-rose-300 font-bold text-xs transition-colors cursor-pointer border border-rose-500/30">
                    ✕ Decline
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </Container>
  </section>
);

/* ─── 5. SECTION 4 — Payroll & Finance Sync ─── */
const SectionPayrollSync: React.FC = () => (
  <section className="w-full py-[80px] px-8 bg-[#F8FAFC] border-y border-slate-200/60">
    <Container className="max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Mockup */}
        <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
          <FadeUp delay={0.2} className="w-full max-w-[480px]">
            <div className="bg-white rounded-[24px] p-6 border border-slate-200/90 shadow-xl font-['Plus_Jakarta_Sans',sans-serif]">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Database size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#111827]">Payroll Direct Sync</h4>
                    <p className="text-xs text-[#6B7280]">Automated Export Queue</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center gap-1">
                  <RefreshCw size={12} className="animate-spin text-emerald-600" /> Active
                </span>
              </div>

              <div className="space-y-3 mb-4">
                {[
                  { title: 'Finalized Attendance Logs', count: '1,420 Records Verified', status: 'Passed' },
                  { title: 'Time-off & Overtime Calculations', count: '98.5 hrs OT calculated', status: 'Passed' },
                  { title: 'Discrepancy Sanity Check', count: '0 Anomalies Found', status: 'Passed' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-[12px] bg-slate-50 border border-slate-100 text-xs">
                    <div>
                      <span className="font-bold text-[#111827] block">{item.title}</span>
                      <span className="text-[#6B7280]">{item.count}</span>
                    </div>
                    <span className="font-bold text-emerald-600 bg-emerald-100/60 px-2 py-0.5 rounded-[6px]">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs font-semibold text-[#6B7280] pt-3 border-t border-slate-100">
                <span>Target: ADP Payroll API</span>
                <span className="font-mono text-slate-400">Last synced: Today, 6:00 AM</span>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
          <FadeUp>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] uppercase tracking-[0.65px] text-[#5C5CFF] block mb-3">
              PAYROLL & FINANCE SYNC
            </span>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] leading-[1.2] text-[#111827] mb-6">
              Attendance data that reaches payroll without a spreadsheet in between
            </h2>
            <p className="font-['Inter',sans-serif] text-[16px] text-[#6B7280] leading-[28px] mb-6">
              Manually exporting attendance for payroll is where errors creep in. Workzi syncs finalized attendance and Time-off data directly into your payroll system, on the schedule you set.
            </p>
            <ul className="space-y-3">
              {[
                'Automatic sync of attendance and Time-off into payroll runs',
                'Configurable sync schedule (daily, weekly, per pay cycle)',
                'Discrepancy flagging before data reaches payroll',
              ].map((pt, i) => (
                <li key={i} className="flex items-center gap-3 font-['Inter',sans-serif] text-sm text-[#111827] font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#EEEEFF] text-[#5C5CFF] flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </Container>
  </section>
);

/* ─── 6. SECTION 5 — Automation & Workflow Triggers ─── */
const SectionWorkflowTriggers: React.FC = () => (
  <section className="w-full py-[80px] px-8 bg-white">
    <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center">
          Let the routine stuff happen on its own
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[30px] text-[#6B7280] text-center">
          A correction gets approved. A new employee gets onboarded. Certain things should happen automatically after that, not wait for someone to remember to do them.
        </p>
      </FadeUp>

      <div className="w-full max-w-[900px]">
        <FadeUp delay={0.2}>
          <div className="bg-slate-900 rounded-[24px] p-8 text-white shadow-2xl border border-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#5C5CFF] flex items-center justify-center font-bold text-white text-sm">
                  ⚡
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Visual Workflow Builder</h4>
                  <p className="text-xs text-slate-400">Trigger & Action Pipeline</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold">
                Active Pipeline
              </span>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="w-full md:w-5/12 bg-slate-800/80 border border-slate-700 p-5 rounded-[16px]">
                <span className="text-[10px] font-extrabold uppercase text-[#5C5CFF] tracking-wider block mb-1">
                  TRIGGER EVENT
                </span>
                <h5 className="font-bold text-white text-sm mb-1">Time-off Request Approved</h5>
                <p className="text-xs text-slate-400">When manager approves annual Time-off in Workzi</p>
              </div>

              <div className="shrink-0 w-10 h-10 rounded-full bg-[#5C5CFF] text-white flex items-center justify-center font-bold text-sm shadow-lg">
                →
              </div>

              <div className="w-full md:w-5/12 bg-slate-800/80 border border-slate-700 p-5 rounded-[16px]">
                <span className="text-[10px] font-extrabold uppercase text-emerald-400 tracking-wider block mb-1">
                  AUTOMATED ACTION
                </span>
                <h5 className="font-bold text-white text-sm mb-1">Update ERP & Calendar</h5>
                <p className="text-xs text-slate-400">Post status to Oracle ERP and update Outlook calendar</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </Container>
  </section>
);

/* ─── 7. SECTION 6 — Everyday Productivity ─── */
const SectionEverydayProductivity: React.FC = () => {
  const smallSyncs = [
    {
      icon: Calendar,
      title: 'Calendar Sync',
      desc: 'Time-off and shifts reflected in personal Google & Outlook calendars.',
    },
    {
      icon: Fingerprint,
      title: 'Biometric Devices',
      desc: 'Biometric and access-control devices feed attendance directly.',
    },
    {
      icon: CheckCircle2,
      title: 'Zero Duplication',
      desc: 'No duplicate data entry across your connected workplace tools.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-[#F8FAFC] border-y border-slate-200/60">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center">
            The small syncs that save real time
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[30px] text-[#6B7280] text-center">
            Not every integration is a big system connection. Some are just the small things that make a day smoother — a shift showing up on a personal calendar, a device that just works with attendance.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {smallSyncs.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <FadeUp key={idx} delay={idx * 0.1}>
                <div className="bg-white border border-slate-200/80 rounded-[20px] p-8 text-center flex flex-col items-center shadow-xs">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#5C5CFF] mb-5">
                    <IconComponent size={28} />
                  </div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-lg font-bold text-[#111827] mb-2">
                    {item.title}
                  </h3>
                  <p className="font-['Inter',sans-serif] text-sm text-[#6B7280] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

/* ─── 8. SECTION 7 — API & Custom Integrations ─── */
const SectionCustomAPI: React.FC = () => (
  <section className="w-full py-[80px] px-8 bg-white">
    <Container className="max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <div className="lg:col-span-6 flex flex-col items-start text-left">
          <FadeUp>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] uppercase tracking-[0.65px] text-[#5C5CFF] block mb-3">
              API & CUSTOM INTEGRATIONS
            </span>
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] leading-[1.2] text-[#111827] mb-6">
              Build the connection that's specific to you
            </h2>
            <p className="font-['Inter',sans-serif] text-[16px] text-[#6B7280] leading-[28px] mb-6">
              Every organization has one tool that's just theirs — a custom-built system, a regional payroll provider, something off the beaten path. Workzi's API is there for exactly that.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'REST API for custom integrations',
                'Documentation and sandbox access for developers',
                'Growing marketplace of pre-built connectors',
              ].map((pt, i) => (
                <li key={i} className="flex items-center gap-3 font-['Inter',sans-serif] text-sm text-[#111827] font-semibold">
                  <div className="w-5 h-5 rounded-full bg-[#EEEEFF] text-[#5C5CFF] flex items-center justify-center shrink-0">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact-support"
              className="bg-[#111827] hover:bg-slate-800 text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-sm px-6 py-3 rounded-[12px] shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <Code size={16} /> View API Docs
            </a>
          </FadeUp>
        </div>

        {/* Right Code Card */}
        <div className="lg:col-span-6 flex justify-center">
          <FadeUp delay={0.2} className="w-full max-w-[480px]">
            <div className="bg-[#0F172A] rounded-[24px] p-6 text-slate-200 font-mono text-xs shadow-2xl border border-slate-800">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800 text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-[11px] font-sans">POST /v1/attendance/sync</span>
                </div>
                <span className="text-[10px] text-emerald-400 font-bold">200 OK</span>
              </div>

              <pre className="text-slate-300 leading-relaxed overflow-x-auto">
                {`{
  "event": "attendance.clock_in",
  "timestamp": "2026-08-05T09:00:00Z",
  "employee_id": "EMP-9402",
  "device": "Biometric-Scanner-04",
  "status": "VERIFIED"
}`}
              </pre>

              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400 font-sans">
                <span>Response Time: 24ms</span>
                <span className="text-cyan-400 font-bold">Sandbox API Key: Active</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </Container>
  </section>
);

/* ─── 9. SECTION 8 — IT / Admin View ─── */
const SectionITAdminView: React.FC = () => (
  <section className="w-full py-[80px] px-8 bg-[#F8FAFC] border-y border-slate-200/60">
    <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
      <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center">
          Every connection, visible and controlled from one place
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[30px] text-[#6B7280] text-center">
          IT and HR/Admin don't just turn integrations on — they manage what data flows where, monitor sync health, and shut off access the moment it's no longer needed.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {[
          { title: 'Install & Configure', desc: 'Install, configure and remove integrations in a few clicks.' },
          { title: 'Monitor Sync Health', desc: 'Monitor sync status and error logs per integration in real time.' },
          { title: 'Granular Permissions', desc: 'Set granular data-sharing permissions per connected tool.' },
          { title: 'Full Audit Trail', desc: 'Full audit trail of all integration activity and API requests.' },
        ].map((box, idx) => (
          <FadeUp key={idx} delay={idx * 0.1}>
            <div className="bg-white border border-slate-200/80 rounded-[20px] p-6 shadow-xs h-full flex flex-col justify-between">
              <div>
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-base font-bold text-[#111827] mb-2">
                  {box.title}
                </h3>
                <p className="font-['Inter',sans-serif] text-sm text-[#6B7280] leading-relaxed">
                  {box.desc}
                </p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </Container>
  </section>
);

/* ─── 10. SECTION 9 — Role-Based Access Table ─── */
const SectionRoleAccess: React.FC = () => {
  const capabilities = [
    {
      cap: 'Receive approvals and alerts via connected chat tools',
      emp: true,
      mgr: true,
      admin: true,
    },
    {
      cap: 'Approve requests from Slack/Teams',
      emp: false,
      mgr: true,
      admin: true,
    },
    {
      cap: 'See shifts and Time-off on synced calendars',
      emp: true,
      mgr: true,
      admin: true,
    },
    {
      cap: 'Install and configure integrations',
      emp: false,
      mgr: false,
      admin: true,
    },
    {
      cap: 'Monitor sync status and error logs',
      emp: false,
      mgr: false,
      admin: true,
    },
    {
      cap: 'Set granular data-sharing permissions',
      emp: false,
      mgr: false,
      admin: true,
    },
    {
      cap: 'Access integration audit logs',
      emp: false,
      mgr: false,
      admin: true,
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[1280px] mx-auto flex flex-col items-center gap-[52px]">
        <FadeUp className="flex flex-col items-center text-center max-w-[620px] mx-auto gap-[13.11px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] leading-[46px] tracking-[-0.84px] text-[#111827] text-center">
            The right view, for every role
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[18px] leading-[30px] text-[#6B7280] text-center">
            Integrations are primarily configured by IT and HR/Admin — employees and managers experience the results without managing the connections themselves.
          </p>
        </FadeUp>

        <div className="w-full max-w-[900px]">
          <FadeUp delay={0.2}>
            <div className="overflow-x-auto bg-slate-50/80 border border-slate-200/90 rounded-[24px] p-2">
              <table className="w-full text-left border-collapse font-['Plus_Jakarta_Sans',sans-serif]">
                <thead>
                  <tr className="border-b border-slate-200/80 text-xs font-extrabold uppercase tracking-wider text-[#6B7280]">
                    <th className="p-4 sm:p-6 bg-white/50 rounded-tl-[18px]">Capability</th>
                    <th className="p-4 sm:p-6 text-center">Employee</th>
                    <th className="p-4 sm:p-6 text-center">Manager</th>
                    <th className="p-4 sm:p-6 text-center bg-[#5C5CFF]/10 text-[#5C5CFF] rounded-tr-[18px]">IT / HR Admin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/60 text-sm">
                  {capabilities.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/60 transition-colors">
                      <td className="p-4 sm:p-6 font-bold text-[#111827]">{row.cap}</td>
                      <td className="p-4 sm:p-6 text-center">
                        {row.emp ? (
                          <span className="inline-flex w-6 h-6 rounded-full bg-[#EEEEFF] text-[#5C5CFF] items-center justify-center font-bold text-xs">✓</span>
                        ) : (
                          <span className="text-slate-300 font-bold">—</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-6 text-center">
                        {row.mgr ? (
                          <span className="inline-flex w-6 h-6 rounded-full bg-[#EEEEFF] text-[#5C5CFF] items-center justify-center font-bold text-xs">✓</span>
                        ) : (
                          <span className="text-slate-300 font-bold">—</span>
                        )}
                      </td>
                      <td className="p-4 sm:p-6 text-center bg-[#5C5CFF]/5">
                        {row.admin ? (
                          <span className="inline-flex w-6 h-6 rounded-full bg-[#5C5CFF] text-white items-center justify-center font-bold text-xs">✓</span>
                        ) : (
                          <span className="text-slate-300 font-bold">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
};

/* ─── 11. CLOSING CTA BANNER ─── */
const SectionCTA: React.FC = () => (
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
          One HRMS, working with the tools you already trust
        </h2>
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-white/85 max-w-[511px] text-center">
          No rip-and-replace. No asking your organization to change how it runs payroll or talks to each other. Workzi connects to what's already there.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-[12px] pt-[22.7px] w-full max-w-[880px]">
          <a
            href="#pricing"
            className="bg-white hover:bg-slate-50 text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[24px] py-[14px] rounded-[100px] transition-all shadow-md cursor-pointer flex items-center justify-center min-w-[133px] h-[52px]"
          >
            Get Started
          </a>
          <a
            href="#contact-support"
            className="bg-transparent hover:bg-white/10 border border-white/30 text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[24px] py-[12px] rounded-[100px] transition-all cursor-pointer flex items-center justify-center min-w-[145px] h-[52px]"
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </Container>
  </section>
);

/* ─── 12. FAQ SECTION ─── */
const SectionFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: 'Is data secure when Workzi connects to other tools?',
      a: 'Yes. Data shared with connected tools is encrypted and scoped to only what each integration needs — IT/Admin controls exactly what\'s shared, with every connection logged.',
    },
    {
      q: 'Can I approve Time-off or attendance requests from Slack or Teams?',
      a: 'Yes. Once connected, requests appear as interactive messages you can approve or decline without opening Workzi directly.',
    },
    {
      q: 'Does Workzi sync with payroll automatically?',
      a: 'Yes. Attendance and Time-off data syncs into your payroll system on a schedule you configure, with discrepancies flagged before the sync completes.',
    },
    {
      q: 'Can biometric devices we already use connect to Workzi?',
      a: 'Yes, for supported device types — check-in data flows directly into attendance without manual entry.',
    },
    {
      q: 'What if we use a tool that isn\'t natively supported?',
      a: 'Workzi\'s API allows custom integrations for tools outside the standard connector list, with documentation and sandbox access for your developers.',
    },
  ];

  return (
    <section className="w-full py-[80px] px-8 bg-white">
      <Container className="max-w-[900px] mx-auto flex flex-col items-center gap-[64px]">
        {/* Header */}
        <FadeUp className="flex flex-col items-center text-center max-w-[640px] gap-[14px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[42px] leading-[46px] text-[#111827] text-center max-w-[571px]">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[28px] text-[#6B7280] text-center max-w-[530px]">
            Everything you need to know about Workzi's integrations and security framework.
          </p>
        </FadeUp>

        {/* FAQ List */}
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
                      {faq.q}
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
                      {faq.a}
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

/* ─── MAIN INTEGRATIONS PAGE CONTAINER ─── */
export const IntegrationsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen font-['Plus_Jakarta_Sans',sans-serif] text-[#111827] overflow-x-hidden">
      <IntegrationsHero />
      <SectionHowItWorks />
      <SectionCategories />
      <SectionInChatApprovals />
      <SectionPayrollSync />
      <SectionWorkflowTriggers />
      <SectionEverydayProductivity />
      <SectionCustomAPI />
      <SectionITAdminView />
      <SectionRoleAccess />
      <SectionCTA />
      <SectionFAQ />
    </div>
  );
};

export default IntegrationsPage;
