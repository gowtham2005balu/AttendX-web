import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Star,
  Users,
  Plus,
  X
} from 'lucide-react';

/* ─── Reusable fade-up animation wrapper ─── */
const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Green pill label ─── */
const SectionLabel: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = 'bg-[#EBF7F0] text-[#108A00]',
}) => (
  <span className={`inline-block ${color} px-3.5 py-1 rounded-full text-xs font-semibold mb-4`}>
    {children}
  </span>
);

/* ══════════════════════════════════════════════════════════════
   SECTION 1 — HERO
══════════════════════════════════════════════════════════════ */
const PricingHero: React.FC = () => (
  <section className="relative pt-[120px] pb-24 bg-[#0B0F19] overflow-hidden text-center">
    {/* Radial glow background */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#5B5FEF]/20 to-transparent rounded-full blur-[100px]" />
    </div>

    <Container className="relative z-10 flex flex-col items-center">
      <FadeUp>
        <span className="inline-block bg-[#5B5FEF]/20 text-[#818CF8] px-4 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase mb-6 border border-[#5B5FEF]/30">
          Pricing
        </span>
        <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-[900] tracking-tight leading-[1.1] mb-6 drop-shadow-md">
          Simple pricing for<br />
          <span className="text-amber-400">growing teams.</span>
        </h1>
        <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed font-medium">
          Whether you're a team of 10 or a global enterprise of 10,000,
          Workzi has a plan that scales with your business.
          <br className="hidden md:inline" /> Start for free today.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 sm:mb-20 w-full max-w-md mx-auto">
          <a
            href="#pricing-plans"
            className="w-full sm:w-[159px] min-h-[44px] h-[50px] bg-[#5B5FFF] hover:bg-[#4F46E5] hover:scale-[1.03] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] leading-[26px] rounded-[100px] inline-flex items-center justify-center transition-all duration-300 shadow-md cursor-pointer whitespace-nowrap"
          >
            Start Free Trial
          </a>
          <button className="w-full sm:w-auto min-h-[44px] bg-white/10 text-white hover:bg-white/25 hover:border-white/40 hover:scale-[1.04] text-sm font-bold px-8 py-3.5 rounded-full transition-all duration-300 border border-white/10 cursor-pointer backdrop-blur-sm">
            Book Demo
          </button>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   SECTION 2 — CHOOSE YOUR PLAN
══════════════════════════════════════════════════════════════ */
const ChoosePlan: React.FC = () => {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="py-24 bg-[#F9FAFB] relative z-20">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[40px] font-extrabold text-slate-900 leading-tight mb-6">
            Choose your plan
          </h2>
          <p className="text-slate-500 text-[15px] font-medium">
            Join 500+ high-growth companies building modern workforces.
            <br className="hidden md:block" /> Start your 14-day free trial, no credit card required.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={`text-sm font-bold ${!annual ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="w-14 h-7 rounded-full bg-[#5B5FEF] hover:bg-[#4F46E5] relative cursor-pointer transition-colors duration-300 shadow-md hover:shadow-lg hover:shadow-[#5B5FEF]/40 hover:scale-105"
            >
              <div className={`w-5 h-5 rounded-full bg-white absolute top-1 transition-transform duration-300 ${annual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm font-bold flex items-center gap-2 ${annual ? 'text-slate-900' : 'text-slate-400'}`}>
              Annually <span className="bg-emerald-100 text-emerald-700 text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {/* Starter */}
          <FadeUp delay={0.1}>
            <div className="bg-white border border-slate-200 rounded-[24px] p-8 flex flex-col h-full hover:shadow-2xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 cursor-default group">
              <h3 className="text-lg font-black text-slate-900 mb-2">Starter</h3>
              <p className="text-xs text-slate-500 font-medium mb-6 min-h-[32px]">Best for small teams just getting started.</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-[40px] font-black leading-none text-slate-900">${annual ? '7' : '9'}</span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-8">per user / month</span>

              <ul className="space-y-4 mb-8 flex-1">
                {[
                  'Up to 20 users',
                  'Basic attendance tracking',
                  'Geo-fenced clock-in',
                  'Standard reporting',
                  'Email support'
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white border border-slate-200 hover:border-[#5B5FEF] hover:bg-indigo-50 hover:text-[#5B5FEF] hover:scale-[1.02] group-hover:border-[#5B5FEF]/40 text-slate-800 font-bold py-3.5 rounded-xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-indigo-100">
                Start Free Trial
              </button>
            </div>
          </FadeUp>

          {/* Growth */}
          <FadeUp delay={0.2}>
            <div className="bg-white border-2 border-[#5B5FEF] rounded-[24px] p-8 flex flex-col h-full shadow-xl relative hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-default group">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-950 text-[10px] font-black uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md whitespace-nowrap z-10 flex items-center justify-center">
                Most Popular
              </div>
              <h3 className="text-lg font-black text-[#5B5FEF] mb-2">Growth</h3>
              <p className="text-xs text-slate-500 font-medium mb-6 min-h-[32px]">Best for growing teams that need more power.</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-[40px] font-black leading-none text-slate-900">${annual ? '15' : '19'}</span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-8">per user / month</span>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="text-[11px] font-bold text-slate-900 pb-2 border-b border-slate-100 uppercase tracking-wider">Everything in Starter, plus:</li>
                {[
                  'Up to 150 users',
                  'Advanced leave management',
                  'Approval workflows',
                  'Payroll integrations',
                  'Priority support'
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-bold">
                    <Check size={16} className="text-[#5B5FEF] shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-[#5B5FEF] hover:bg-[#4F46E5] hover:scale-[1.02] text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#5B5FEF]/40 cursor-pointer">
                Start Free Trial
              </button>
            </div>
          </FadeUp>

          {/* Business */}
          <FadeUp delay={0.3}>
            <div className="bg-white border border-slate-200 rounded-[24px] p-8 flex flex-col h-full hover:shadow-2xl hover:-translate-y-1 hover:border-indigo-200 transition-all duration-300 cursor-default group">
              <h3 className="text-lg font-black text-slate-900 mb-2">Business</h3>
              <p className="text-xs text-slate-500 font-medium mb-6 min-h-[32px]">Best for large teams with complex needs.</p>
              <div className="flex items-end gap-1 mb-2">
                <span className="text-[40px] font-black leading-none text-slate-900">${annual ? '31' : '39'}</span>
              </div>
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block mb-8">per user / month</span>

              <ul className="space-y-4 mb-8 flex-1">
                <li className="text-[11px] font-bold text-slate-900 pb-2 border-b border-slate-100 uppercase tracking-wider">Everything in Growth, plus:</li>
                {[
                  'Unlimited users',
                  'Custom roles & permissions',
                  'Shift & roster management',
                  'Advanced analytics & exports',
                  '24/7 dedicated support'
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-medium">
                    <Check size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-white border border-slate-200 hover:border-[#5B5FEF] hover:bg-indigo-50 hover:text-[#5B5FEF] hover:scale-[1.02] text-slate-800 font-bold py-3.5 rounded-xl transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg hover:shadow-indigo-100">
                Book a Demo
              </button>
            </div>
          </FadeUp>

          {/* Enterprise */}
          <FadeUp delay={0.4}>
            <div className="bg-white border border-slate-200 rounded-[24px] p-8 flex flex-col h-full hover:shadow-2xl hover:-translate-y-1 hover:border-slate-600 transition-all duration-300 bg-[url('/mountain_hero_bg.png')] bg-cover bg-center relative overflow-hidden cursor-default group">
              <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm z-0" />
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg font-black text-white mb-2">Enterprise</h3>
                <p className="text-xs text-slate-400 font-medium mb-6 min-h-[32px]">For enterprise-scale organisations.</p>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-[32px] font-black leading-tight text-white h-[40px] flex items-center">Custom</span>
                </div>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block mb-8">volume pricing</span>

                <ul className="space-y-4 mb-8 flex-1">
                  <li className="text-[11px] font-bold text-white pb-2 border-b border-slate-700 uppercase tracking-wider">Everything in Business, plus:</li>
                  {[
                    'Custom integrations (API)',
                    'SSO & SAML',
                    'SLA guarantees',
                    'On-premise deployment options',
                    'Dedicated account manager'
                  ].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 font-medium">
                      <Check size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-white text-slate-900 hover:bg-slate-50 hover:scale-[1.02] hover:shadow-white/20 font-bold py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-2xl cursor-pointer border border-transparent hover:border-white/30">
                  Contact Sales
                </button>
              </div>
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════
   SECTION 3 — COMPARE ALL FEATURES
══════════════════════════════════════════════════════════════ */
const CompareFeatures: React.FC = () => {
  const features = [
    { category: 'Core Features' },
    { name: 'Users included', plans: ['Up to 20', 'Up to 150', 'Unlimited', 'Unlimited'] },
    { name: 'Geo-fenced attendance', plans: [true, true, true, true] },
    { name: 'Real-time dashboard', plans: [true, true, true, true] },
    { name: 'Leave management', plans: [false, true, true, true] },
    { name: 'Approval workflows', plans: [false, true, true, true] },
    { name: 'Shift & roster scheduling', plans: [false, false, true, true] },
    { name: 'Overtime tracking', plans: [false, false, true, true] },

    { category: 'Analytics & Reporting' },
    { name: 'Basic reports', plans: [true, true, true, true] },
    { name: 'Advanced analytics', plans: [false, true, true, true] },
    { name: 'Custom report builder', plans: [false, false, true, true] },
    { name: 'Scheduled email reports', plans: [false, false, true, true] },

    { category: 'Integrations & Admin' },
    { name: 'Slack / Teams alerts', plans: [true, true, true, true] },
    { name: 'Payroll exports (CSV)', plans: [false, true, true, true] },
    { name: 'Direct payroll integrations', plans: [false, false, true, true] },
    { name: 'Custom roles & permissions', plans: [false, false, true, true] },
    { name: 'SSO & SAML', plans: [false, false, false, true] },
    { name: 'Custom API access', plans: [false, false, false, true] },
  ];

  return (
    <section className="py-24 bg-white relative z-10">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-[40px] font-extrabold text-slate-900 leading-tight mb-4">
            Compare all features
          </h2>
          <p className="text-slate-500 text-[15px] font-medium">
            Find the perfect plan for your team's needs.
          </p>
        </div>

        <FadeUp>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="p-6 text-xs font-bold text-slate-400 uppercase tracking-wider w-1/3 border-b border-slate-200">Feature</th>
                  <th className="p-6 text-center border-b border-slate-200 w-1/6">
                    <span className="text-[13px] font-black text-slate-900 block">Starter</span>
                  </th>
                  <th className="p-6 text-center border-b border-slate-200 w-1/6 bg-[#5B5FEF]/5 relative">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[#5B5FEF]" />
                    <span className="text-[13px] font-black text-[#5B5FEF] block flex items-center justify-center gap-1">
                      <Star size={12} className="fill-[#5B5FEF]" /> Growth
                    </span>
                  </th>
                  <th className="p-6 text-center border-b border-slate-200 w-1/6">
                    <span className="text-[13px] font-black text-slate-900 block">Business</span>
                  </th>
                  <th className="p-6 text-center border-b border-slate-200 w-1/6">
                    <span className="text-[13px] font-black text-slate-900 block">Enterprise</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {features.map((row, idx) => {
                  if (row.category) {
                    return (
                      <tr key={idx} className="bg-slate-50/80">
                        <td colSpan={5} className="py-4 px-6 text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                          {row.category}
                        </td>
                      </tr>
                    );
                  }

                  return (
                    <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 text-sm font-semibold text-slate-700">{row.name}</td>
                      {row.plans?.map((plan, pIdx) => (
                        <td key={pIdx} className={`py-4 px-6 text-center ${pIdx === 1 ? 'bg-[#5B5FEF]/[0.02]' : ''}`}>
                          {typeof plan === 'boolean' ? (
                            plan ? (
                              <Check size={18} className="text-emerald-500 mx-auto" />
                            ) : (
                              <span className="text-slate-300 font-bold block text-center">—</span>
                            )
                          ) : (
                            <span className="text-xs font-bold text-slate-600">{plan}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════
   SECTION 4 — BUILT FOR TEAMS OF EVERY SIZE
══════════════════════════════════════════════════════════════ */
const BuiltForTeams: React.FC = () => (
  <section className="pt-24 pb-4 bg-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
    <Container className="text-center max-w-3xl mx-auto">
      <FadeUp>
        <span className="inline-block bg-[#EEF2FF] text-[#5B5FEF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 font-['Plus_Jakarta_Sans',sans-serif]">
          Enterprise Grade
        </span>
        <h2 className="text-4xl md:text-[48px] font-[800] text-slate-900 tracking-tight leading-tight mb-5 font-['Plus_Jakarta_Sans',sans-serif]">
          Built for teams of every size
        </h2>
        <p className="text-slate-500 text-sm md:text-[16px] max-w-2xl mx-auto leading-relaxed font-medium font-['Plus_Jakarta_Sans',sans-serif]">
          From startups to Fortune 500 companies, Workzi scales with your organization.
        </p>
      </FadeUp>
    </Container>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   SECTION 5 — MAKE SMARTER WORKFORCE DECISIONS
══════════════════════════════════════════════════════════════ */
const SmarterDecisions: React.FC = () => (
  <section className="py-16 bg-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
    <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left: Text */}
      <FadeUp>
        <div className="flex flex-col items-start max-w-xl font-['Plus_Jakarta_Sans',sans-serif]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-[#5B5FEF]" />
            <span className="text-[#5B5FEF] font-bold text-xs uppercase tracking-wider font-['Plus_Jakarta_Sans',sans-serif]">Analytics &amp; Reporting</span>
          </div>
          <h2 className="text-3xl md:text-[40px] font-[800] text-slate-900 leading-tight mb-5 font-['Plus_Jakarta_Sans',sans-serif]">
            Make Smarter Workforce<br />Decisions
          </h2>
          <p className="text-slate-500 text-sm md:text-[15px] mb-8 leading-relaxed font-medium font-['Plus_Jakarta_Sans',sans-serif]">
            Turn attendance and leave data into actionable insights. Our real-time analytics dashboard helps HR leaders spot trends, reduce absenteeism, and optimize workforce performance.
          </p>
          <ul className="space-y-4 w-full">
            {[
              'Real-time attendance dashboards',
              'Custom report builder with filters',
              'Exportable CSV and PDF reports',
              'AI-powered workforce trend insights',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-emerald-600 font-extrabold" />
                </div>
                <span className="text-sm font-bold text-slate-800 font-['Plus_Jakarta_Sans',sans-serif]">{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-8 bg-black hover:bg-[#1A1A1A] text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center gap-[8px] cursor-pointer whitespace-nowrap">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0" />
          </button>
        </div>
      </FadeUp>

      {/* Right: Analytics Mockup matching exact CSS spec */}
      <FadeUp delay={0.15} className="relative flex justify-center items-center">
        {/* Radial Background Circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] rounded-[170px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(91,95,255,0.08)_0%,rgba(91,95,255,0)_70%)] pointer-events-none z-0" />

        {/* Main Mockup Card */}
        <div className="relative z-10 w-full max-w-[380px] min-h-[389px] bg-white border border-[#F3F4F6] shadow-[0px_8px_24px_rgba(0,0,0,0.06)] rounded-[28px] flex flex-col p-0 overflow-visible text-left">

          {/* Window Header */}
          <div className="px-[20px] py-[14px] bg-[#F8FAFC] flex items-center gap-[8px] rounded-t-[28px] border-b border-[#F3F4F6]">
            <span className="w-[10px] h-[10px] rounded-[5px] bg-[#FF5F57] inline-block" />
            <span className="w-[10px] h-[10px] rounded-[5px] bg-[#FEBC2E] inline-block" />
            <span className="w-[10px] h-[10px] rounded-[5px] bg-[#28C840] inline-block" />
            <span className="pl-[10px] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] leading-[19px] text-[#6B7280]">
              Workforce Analytics — Oct 2024
            </span>
          </div>

          {/* Window Body */}
          <div className="p-[20px_20px_36px] flex flex-col gap-[16px] w-full flex-1">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-[10px] w-full">
              {/* Stat 1 */}
              <div className="bg-[#F8FAFC] border border-[#F3F4F6] rounded-[12px] p-[14px] flex flex-col justify-between">
                <span className="font-['Inter',sans-serif] font-semibold text-[10px] leading-[16px] tracking-[0.7px] uppercase text-[#9CA3AF] block">
                  ATTEND. RATE
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[22px] leading-[35px] text-[#111827] block">
                  96.4%
                </span>
                <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[18px] text-[#10B981] block">
                  ↑ +2.1%
                </span>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#F8FAFC] border border-[#F3F4F6] rounded-[12px] p-[14px] flex flex-col justify-between">
                <span className="font-['Inter',sans-serif] font-semibold text-[10px] leading-[16px] tracking-[0.7px] uppercase text-[#9CA3AF] block">
                  ON TIME
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[22px] leading-[35px] text-[#111827] block">
                  91%
                </span>
                <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[18px] text-[#10B981] block">
                  ↑ +0.8%
                </span>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#F8FAFC] border border-[#F3F4F6] rounded-[12px] p-[14px] flex flex-col justify-between">
                <span className="font-['Inter',sans-serif] font-semibold text-[10px] leading-[16px] tracking-[0.7px] uppercase text-[#9CA3AF] block">
                  LATE DAYS
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[22px] leading-[35px] text-[#111827] block">
                  18
                </span>
                <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[18px] text-[#EF4444] block">
                  ↑ +3
                </span>
              </div>
            </div>

            {/* Chart Area */}
            <div className="bg-[#F8FAFC] border border-[#F3F4F6] rounded-[12px] p-[14px] flex flex-col gap-[5px] w-full">
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] leading-[19px] text-[#111827] block mb-1">
                Weekly Attendance
              </span>

              {/* Bars */}
              <div className="flex items-end justify-center gap-[6px] h-[71px] pt-[7px] w-full">
                <div className="w-[38.8px] h-[52.47px] bg-[#5B5FFF] opacity-[0.85] rounded-t-[4px]" />
                <div className="w-[38.8px] h-[43.52px] bg-[rgba(91,95,255,0.45)] rounded-t-[4px]" />
                <div className="w-[38.8px] h-[57.59px] bg-[#5B5FFF] rounded-t-[4px]" />
                <div className="w-[38.8px] h-[47.36px] bg-[#F59E0B] opacity-[0.8] rounded-t-[4px]" />
                <div className="w-[38.8px] h-[61.44px] bg-[#5B5FFF] rounded-t-[4px]" />
                <div className="w-[38.8px] h-[29.44px] bg-[rgba(91,95,255,0.3)] rounded-t-[4px]" />
                <div className="w-[38.8px] h-[32px] bg-[rgba(91,95,255,0.3)] rounded-t-[4px]" />
              </div>

              {/* Bar Labels */}
              <div className="flex items-center justify-center gap-[6px] w-full mt-1">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <span key={day} className="w-[38.8px] text-center font-['Inter',sans-serif] font-semibold text-[9px] leading-[14px] text-[#9CA3AF]">
                    {day}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Chip 1: Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute -top-[20px] right-0 sm:-right-[50px] bg-white border border-[#F3F4F6] shadow-[0px_8px_24px_rgba(0,0,0,0.08)] rounded-[18px] p-[12px_14px] sm:p-[14px_18px] text-left w-[120px] sm:w-[130px] z-30"
          >
            <span className="font-['Inter',sans-serif] font-semibold text-[10px] leading-[16px] tracking-[0.7px] uppercase text-[#9CA3AF] block">
              THIS MONTH
            </span>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[20px] sm:text-[22px] leading-[32px] text-[#10B981] block mt-0.5">
              +12%
            </span>
            <span className="font-['Inter',sans-serif] font-medium text-[10px] sm:text-[11px] leading-[16px] text-[#6B7280] block mt-0.5">
              vs last month
            </span>
          </motion.div>

          {/* Floating Chip 2: Bottom Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -bottom-[20px] left-0 sm:-left-[50px] bg-white border border-[#F3F4F6] shadow-[0px_8px_24px_rgba(0,0,0,0.08)] rounded-[18px] p-[12px_14px] sm:p-[14px_18px] text-left w-[130px] sm:w-[140px] z-30"
          >
            <span className="font-['Inter',sans-serif] font-semibold text-[10px] leading-[16px] tracking-[0.7px] uppercase text-[#9CA3AF] block">
              REPORTS
            </span>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[22px] sm:text-[24px] leading-[34px] text-[#111827] block mt-0.5">
              48
            </span>
            <span className="font-['Inter',sans-serif] font-medium text-[10px] sm:text-[11px] leading-[16px] text-[#6B7280] block mt-0.5">
              Generated today
            </span>
          </motion.div>

        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   SECTION 6 — AUTOMATE REPETITIVE HR TASKS
══════════════════════════════════════════════════════════════ */
const AutomateTasks: React.FC = () => (
  <section className="py-16 bg-white relative overflow-hidden pb-24">
    <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      {/* Left: Workflow Mockup matching exact screenshot design */}
      <FadeUp className="flex justify-center items-center">
        <div className="relative w-full max-w-[480px] p-4 flex flex-col items-center justify-center bg-transparent overflow-visible">

          {/* Vertical Connecting Line */}
          <div className="absolute w-[2px] bg-gradient-to-b from-[#5B5FFF] via-[#F59E0B] to-[#8B5CF6] top-[30px] bottom-[30px] left-1/2 -translate-x-1/2 z-0 opacity-80" />

          {/* 4 Stacked Step Cards */}
          <div className="relative z-10 flex flex-col items-center w-full gap-[16px]">
            {[
              {
                num: '1',
                title: 'Employee Submits Request',
                sub: 'Via mobile app or web portal',
                badgeBg: 'bg-[#5B5FFF]',
              },
              {
                num: '2',
                title: 'Manager Instantly Notified',
                sub: 'Push notification + email alert',
                badgeBg: 'bg-[#F59E0B]',
              },
              {
                num: '3',
                title: 'One-Click Approval',
                sub: 'Approve or decline with context',
                badgeBg: 'bg-[#10B981]',
              },
              {
                num: '4',
                title: 'Records Auto-Synced',
                sub: 'HR records updated instantly',
                badgeBg: 'bg-[#8B5CF6]',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="w-full bg-white border border-[#F3F4F6] shadow-[0px_8px_24px_rgba(0,0,0,0.06)] rounded-[20px] p-[18px_22px] flex items-center gap-[18px] relative z-10 text-left transition-all duration-300 hover:shadow-[0px_12px_32px_rgba(0,0,0,0.08)]"
              >
                <div
                  className={`w-[42px] h-[42px] rounded-full ${step.badgeBg} text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] flex items-center justify-center shrink-0 shadow-sm`}
                >
                  {step.num}
                </div>
                <div className="flex flex-col">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] leading-[22px] text-[#111827]">
                    {step.title}
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-[#6B7280] mt-0.5">
                    {step.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Automation 100% Badge (Right side of Step 3) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-[48%] right-0 sm:-right-[35px] bg-white border border-[#F3F4F6] shadow-[0px_8px_24px_rgba(0,0,0,0.08)] rounded-[18px] p-[12px_16px] sm:p-[16px_22px] text-left min-w-[120px] sm:min-w-[140px] z-20"
          >
            <span className="font-['Inter',sans-serif] font-semibold text-[10px] leading-[16px] tracking-[0.7px] uppercase text-[#9CA3AF] block">
              AUTOMATION
            </span>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[24px] sm:text-[28px] leading-[36px] text-[#5B5FFF] block mt-0.5">
              100%
            </span>
            <span className="font-['Inter',sans-serif] font-normal text-[11px] sm:text-[12px] leading-[18px] text-[#6B7280] block mt-0.5">
              Zero manual work
            </span>
          </motion.div>
        </div>
      </FadeUp>

      {/* Right: Text */}
      <FadeUp delay={0.15}>
        <div className="flex flex-col items-start lg:pl-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-0.5 bg-[#5B5FEF]" />
            <span className="text-[#5B5FEF] font-bold text-xs uppercase tracking-wider">Workflow Automation</span>
          </div>
          <h2 className="text-3xl md:text-[40px] font-[900] text-slate-900 leading-tight mb-5">
            Automate Repetitive HR Tasks
          </h2>
          <p className="text-slate-500 text-sm md:text-[15px] mb-8 leading-relaxed font-medium">
            Reduce manual work with intelligent workflows, automated approval chains, smart reminders, and trigger-based HR operations that run without any manual intervention.
          </p>
          <ul className="space-y-4 w-full">
            {[
              'Trigger-based workflow automation',
              'Multi-level approval chains',
              'Automated compliance reminders',
              'Complete audit trail',
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                  <Check size={12} className="text-emerald-600 font-extrabold" />
                </div>
                <span className="text-sm font-bold text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
          <button className="mt-8 bg-black hover:bg-[#1A1A1A] text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center gap-[8px] cursor-pointer whitespace-nowrap">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0" />
          </button>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   SECTION 7 — FAQ
══════════════════════════════════════════════════════════════ */
const PricingFAQ: React.FC = () => {
  const faqs = [
    {
      q: 'Can I change my plan later?',
      a: 'Yes, you can upgrade, downgrade, or cancel your plan at any time from your account settings. Prorated charges or credits will automatically be applied.'
    },
    {
      q: 'Do you offer a free trial?',
      a: 'Absolutely! We offer a 14-day free trial on all plans so you can experience the full capabilities of Workzi before committing. No credit card required.'
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept all major credit cards (Visa, Mastercard, American Express) and PayPal. For annual Enterprise plans, we can also issue invoices payable via bank transfer.'
    },
    {
      q: 'Is there a setup fee?',
      a: 'No, there are no hidden setup fees for our Starter, Growth, or Business plans. Enterprise plans may include a custom onboarding package depending on your requirements.'
    },
    {
      q: 'What kind of support is included?',
      a: 'Starter plans include email support. Growth plans get priority response times. Business and Enterprise plans include 24/7 dedicated support and a Customer Success Manager.'
    },
  ];

  const [open, setOpen] = useState<number>(-1);

  return (
    <section className="py-20 bg-white relative w-full">
      <Container className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="text-center mb-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-[38px] font-semibold text-slate-900 mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] text-[#6B7280] text-center">
            Got questions? We've got answers. If you need more help,{' '}
            <a href="#contact-support" className="text-[#5B5FFF] underline hover:text-[#4F46E5] transition-colors">
              contact our team.
            </a>
          </p>
        </div>

        <div className="divide-y divide-slate-100 border-y border-slate-100 w-full max-w-4xl">
          {faqs.map((faq, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className="bg-white transition-all duration-300 py-1"
              >
                {/* Trigger Button */}
                <button
                  className="w-full flex justify-between items-center py-5 text-left font-bold text-[16px] md:text-[17px] text-[#111827] focus:outline-none cursor-pointer group hover:text-[#5B5FEF] transition-colors duration-200"
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                >
                  <span className="font-['Plus_Jakarta_Sans',sans-serif]">{faq.q}</span>
                  {isOpen ? (
                    <div className="w-6 h-6 rounded-md bg-[#5B5FEF] text-white flex items-center justify-center shrink-0 ml-4">
                      <X size={12} strokeWidth={3} />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-md bg-[#EEF2FF] text-[#5B5FEF] flex items-center justify-center shrink-0 ml-4 group-hover:bg-[#5B5FEF] group-hover:text-white transition-colors duration-200">
                      <Plus size={12} strokeWidth={3} />
                    </div>
                  )}
                </button>

                {/* Animated content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 text-xs md:text-sm text-slate-500 leading-relaxed font-['Plus_Jakarta_Sans',sans-serif] max-w-4xl">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const PricingCTA: React.FC = () => (
  <section className="py-[80px] px-4 md:px-12 lg:px-[120px] bg-white relative w-full max-w-[1440px] mx-auto">
    <Container className="max-w-[1200px] mx-auto p-0">
      <div className="w-full min-h-[514px] bg-[linear-gradient(115.39deg,#0C0F2E_0%,#161C50_50%,#1C2260_100%)] rounded-[32px] p-8 md:p-[60px_80px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 shadow-2xl">

        {/* div.cta-orb-1 */}
        <div className="absolute top-[-250px] right-[-250px] w-[500px] h-[500px] rounded-[250px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(91,95,255,0.18)_0%,rgba(91,95,255,0)_70%)] pointer-events-none z-0" />

        {/* div.cta-orb-2 */}
        <div className="absolute bottom-[-150px] left-[-150px] w-[300px] h-[300px] rounded-[150px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(245,158,11,0.1)_0%,rgba(245,158,11,0)_70%)] pointer-events-none z-1" />

        {/* Left Column: div.cta-content */}
        <div className="relative z-10 max-w-[492px] w-full flex flex-col items-start gap-[16.8px] text-left">
          {/* Frame 1984078987 & Heading */}
          <div className="flex flex-col items-start gap-[12px] w-full">
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[46px] leading-[52px] tracking-[-1.15px] text-white">
              Start building your modern workforce system today.
            </h2>
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[16px] leading-[24px] text-white/55">
              Join 50,000+ teams that use Workzi to manage attendance, leave, and HR operations from one powerful platform.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-[14px] pt-[18px] w-full">
            <a
              href="#pricing-plans"
              className="w-[150px] h-[54px] px-[24px] py-[14px] bg-white text-[#5B5FFF] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] leading-[26px] rounded-[100px] inline-flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] hover:bg-slate-100 hover:scale-[1.03] cursor-pointer whitespace-nowrap"
            >
              Start Free Trial
            </a>
            <a
              href="#pricing"
              className="w-[149px] h-[54px] px-[24px] py-[12px] bg-transparent text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] leading-[26px] border border-white/30 rounded-[100px] inline-flex items-center justify-center gap-1 transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:scale-[1.03] cursor-pointer whitespace-nowrap"
            >
              Book Demo →
            </a>
          </div>
        </div>

        {/* Right Column: div.cta-visual */}
        <div className="relative z-10 w-full max-w-[492px] h-[394px] min-h-[280px] flex justify-center items-center">
          {/* Plan Card */}
          <div className="w-[280px] min-h-[314.6px] bg-white/[0.07] border border-white/[0.12] backdrop-blur-sm rounded-[24px] p-[24px_32px] flex flex-col items-start gap-[4px] text-left relative z-10">
            {/* Label */}
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[11px] leading-[18px] tracking-[0.88px] uppercase text-white/40 block">
              GROWTH PLAN
            </span>

            {/* Price */}
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[22px] leading-[35px] text-white block mt-1">
              $19 / user
            </span>

            {/* Price Subtitle */}
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] leading-[22px] text-white/55 block mb-2">
              per month · billed annually
            </span>

            {/* Divider */}
            <div className="w-full h-[1px] bg-white/[0.08] my-1" />

            {/* Features List */}
            <div className="flex flex-col gap-[8.5px] pt-2 w-full">
              {[
                'Unlimited employees',
                'Advanced analytics',
                'Workflow automation',
                'API access',
                '14-day free trial',
              ].map((feat, i) => (
                <div key={i} className="flex items-center gap-[9px]">
                  <div className="w-[18px] h-[18px] rounded-full bg-[rgba(16,185,129,0.2)] flex items-center justify-center shrink-0">
                    <Check size={10} className="text-[#10B981]" strokeWidth={3} />
                  </div>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[13px] leading-[21px] text-white/65">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Badge 1: Top Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="absolute top-[0px] right-[19px] bg-white/10 border border-white/[0.13] backdrop-blur-md px-[16px] py-[12px] rounded-[14px] shadow-2xl text-left w-[117px] z-20"
          >
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] leading-[29px] text-white block">
              50k+
            </span>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[10px] leading-[16px] text-white/45 block">
              Teams worldwide
            </span>
          </motion.div>

          {/* Floating Badge 2: Bottom Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-[0px] left-[9px] bg-white/10 border border-white/[0.13] backdrop-blur-md px-[16px] py-[12px] rounded-[14px] shadow-2xl text-left w-[112px] z-20"
          >
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] leading-[29px] text-white block">
              4.9★
            </span>
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[10px] leading-[16px] text-white/45 block">
              App Store rating
            </span>
          </motion.div>

        </div>

      </div>
    </Container>
  </section>
);

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE EXPORT
══════════════════════════════════════════════════════════════ */
const PricingPage: React.FC = () => {
  return (
    <div id="pricing-page" className="relative overflow-x-hidden bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <PricingHero />
      <ChoosePlan />
      <CompareFeatures />
      <BuiltForTeams />
      <SmarterDecisions />
      <AutomateTasks />
      <PricingFAQ />
      <PricingCTA />
    </div>
  );
};

export default PricingPage;
