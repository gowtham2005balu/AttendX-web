import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  ArrowRight,
  Clock,
  ShieldCheck,
  Users,
  Sparkles,
  Heart,
  Zap,
  Target,
  Play,
  Plus,
  Minus,
  Globe,
  Award,
  Star,
  Eye,
  Compass,
  Building,
  Shield,
  Smile,
} from 'lucide-react';

/* ─── FadeUp Helper ─── */
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

/* ────────────────────────────────────────────────────────────
   SECTION 1 — HERO
──────────────────────────────────────────────────────────── */
const AboutHero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full bg-white pt-[90px] lg:pt-[110px] pb-[60px] lg:pb-[100px] overflow-hidden isolate">
      {/* Conic Gradient Blur Background */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          background:
            'conic-gradient(from 148.33deg at 0% 0%, rgba(91, 95, 255, 0.12) -14.2deg, rgba(198, 199, 255, 0.06) 16.1deg, rgba(91, 95, 255, 0.12) 27.47deg, rgba(198, 199, 255, 0.06) 30.11deg, rgba(91, 95, 255, 0.12) 47.41deg, rgba(91, 95, 255, 0.000884183) 90.07deg, rgba(91, 95, 255, 0) 269.09deg, rgba(91, 95, 255, 0.12) 315.55deg, rgba(191, 193, 255, 0.063863) 327.77deg, rgba(91, 95, 255, 0.12) 328.64deg, rgba(191, 193, 255, 0.063863) 340.61deg, rgba(91, 95, 255, 0.12) 345.8deg, rgba(198, 199, 255, 0.06) 376.1deg)',
        }}
      />

      <Container className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[80px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[60px]">

          {/* LEFT COLUMN — Text Content */}
          <div className="flex flex-col items-start w-full lg:w-[620px] shrink-0">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EEEEFF] border border-[#5B5FFF]/20 mb-4">
              <span className="font-['Inter',sans-serif] font-bold text-[12px] leading-[19px] tracking-[0.96px] uppercase text-[#5B5FFF]">
                OUR STORY
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[46px] lg:text-[55px] leading-[1.15] lg:leading-[66px] tracking-[-1.04px] text-[#111827] mb-6">
              Building the <span className="text-[#5C5CFF]">future</span> of workforce management.
            </h1>

            {/* Subtitle */}
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[18px] leading-[28px] sm:leading-[32px] text-[#4C525D] max-w-[520px] mb-8">
              We help modern teams simplify attendance, payroll, and people operations with one connected HRMS platform — built from the ground up for the way work works today.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <a
                href="#pricing"
                className="bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-['Inter',sans-serif] font-bold text-[16px] leading-[26px] px-[28px] py-[14px] rounded-[12px] transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <span>Book Demo</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="#pricing"
                className="bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#111827] font-['Inter',sans-serif] font-semibold text-[16px] leading-[26px] px-[28px] py-[14px] rounded-[12px] transition-all duration-200 cursor-pointer inline-flex items-center justify-center hover:scale-[1.02]"
              >
                Explore Platform
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Radar & Floating Cards Graphic */}
          <div className="relative w-full lg:w-[600px] flex justify-center lg:justify-end shrink-0 py-8 lg:py-0">
            {/* Main Dark Visual Box */}
            <div className="relative w-full max-w-[520px] h-[380px] sm:h-[420px] rounded-[24px] overflow-hidden flex items-center justify-center isolation-isolate select-none"
              style={{
                background: 'linear-gradient(155.74deg, #1A1A3E 0%, #2D2D6B 50%, #3D3A9C 100%)',
              }}
            >
              {/* Concentric Outer Circle */}
              <div className="absolute w-[280px] h-[280px] rounded-full border border-white/10 pointer-events-none" />
              {/* Concentric Inner Circle */}
              <div className="absolute w-[180px] h-[180px] rounded-full border border-white/15 pointer-events-none" />

              {/* Center Target Mark */}
              <div className="relative w-[80px] h-[80px] rounded-full bg-white/12 backdrop-blur-md flex items-center justify-center z-10 border border-white/20">
                <Target size={32} className="text-white/90" />
              </div>

              {/* Top-Left Team Badges */}
              <div className="absolute top-[23px] left-[23px] flex flex-col gap-1.5 z-20">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-white/15 backdrop-blur-md flex items-center justify-center text-white font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[14px]">
                  AJ
                </div>
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#F59E0B]/30 flex items-center justify-center text-white font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[14px]">
                  SC
                </div>
              </div>

              {/* Bottom-Right Team Badges */}
              <div className="absolute bottom-[26px] right-[26px] flex items-center gap-1.5 z-20">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#10B981]/25 flex items-center justify-center text-white font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[14px]">
                  MP
                </div>
                <div className="w-[44px] h-[44px] rounded-[12px] bg-white/12 flex items-center justify-center text-white font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[14px]">
                  RK
                </div>
                <div className="w-[44px] h-[44px] rounded-[12px] bg-[#5B5FFF]/30 flex items-center justify-center text-white font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[14px]">
                  LT
                </div>
              </div>
            </div>

            {/* Floating Stat Card 1 — Bottom Left Overlap */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute left-0 sm:left-[10px] bottom-0 sm:-bottom-[20px] bg-white rounded-[20px] p-4 sm:p-[18px_22px] flex items-center gap-[14px] border border-slate-200 z-30 min-w-[210px] sm:min-w-[233px]"
            >
              <div className="w-[44px] h-[44px] rounded-[12px] bg-[#DCFCE7] flex items-center justify-center text-[#10B981] shrink-0">
                <Check size={22} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[20px] leading-[20px] text-[#111827]">
                  10k+
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[#6B7280]">
                  Companies Onboarded
                </span>
              </div>
            </motion.div>

            {/* Floating Stat Card 2 — Top Right Overlap */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute right-0 sm:right-[10px] top-0 sm:-top-[20px] bg-white rounded-[20px] p-4 sm:p-[18px_22px] flex items-center gap-[14px] border border-slate-200 z-30 min-w-[180px] sm:min-w-[194px]"
            >
              <div className="w-[44px] h-[44px] rounded-[12px] bg-[#EDEDFF] flex items-center justify-center text-[#5B5FFF] shrink-0">
                <Clock size={22} strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[20px] leading-[20px] text-[#111827]">
                  99.9%
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[#6B7280]">
                  Platform Uptime
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   SECTION 2 — LOGOS BAR
──────────────────────────────────────────────────────────── */
const AboutLogos: React.FC = () => {
  const logos = [
    { name: 'OpenAI' },
    { name: 'Figma' },
    { name: 'Vercel' },
    { name: 'NVIDIA' },
    { name: 'Airtable' },
    { name: 'HubSpot' },
    { name: 'Toyota' },
    { name: 'Slack' },
  ];

  return (
    <section id="logos" className="w-full border-y border-[#E5E7EB] py-10 bg-white overflow-hidden">
      <Container className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-8 sm:gap-x-12 lg:gap-x-[60px]">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center gap-3 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#D1D5DB]/50" />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[17px] sm:text-[18px] leading-[29px] tracking-[-0.36px] text-[#D1D5DB] select-none hover:text-[#9CA3AF] transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   SECTION 3 — STORY ("Who We Are")
──────────────────────────────────────────────────────────── */
const AboutStory: React.FC = () => {
  return (
    <section className="py-[80px] lg:py-[120px] bg-white">
      <Container className="max-w-[1280px] mx-auto px-4 sm:px-8 flex flex-col items-center">

        {/* Eyebrow */}
        <FadeUp className="mb-4">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EDEDFF] border border-[#5B5FFF]/20">
            <span className="font-['Inter',sans-serif] font-bold text-[12px] leading-[19px] tracking-[0.96px] uppercase text-[#5B5FFF]">
              WHO WE ARE
            </span>
          </div>
        </FadeUp>

        {/* H2 Title */}
        <FadeUp delay={0.1} className="text-center max-w-[680px] mb-6">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[34px] sm:text-[46px] lg:text-[55px] leading-[1.15] lg:leading-[66px] tracking-[-1px] text-[#111827]">
            We started with a simple conviction.
          </h2>
        </FadeUp>

        {/* Lead Subtitle */}
        <FadeUp delay={0.15} className="text-center max-w-[580px] mb-14">
          <p className="font-['Inter',sans-serif] font-normal text-[17px] sm:text-[19px] leading-[30px] sm:leading-[33px] text-[#6B7280]">
            HR operations should feel effortless, human, and intelligent — not a maze of spreadsheets and disconnected tools.
          </p>
        </FadeUp>

        {/* Story Body Paragraphs */}
        <div className="max-w-[680px] w-full flex flex-col items-start gap-7 text-[#6B7280] font-['Inter',sans-serif] text-[16px] sm:text-[17px] leading-[29px] sm:leading-[31px]">
          <FadeUp delay={0.2}>
            <p>
              In 2019, our founders were running operations at a fast-growing startup when they realized how much time HR teams were losing to manual attendance reconciliation, fragmented leave systems, and payroll errors. The tools available were either too rigid for modern teams or too complex to actually use.
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p>
              They set out to build something different. Something that understood how people actually work — across time zones, in hybrid environments, with distributed teams spanning continents. Workzi was born from that frustration and that ambition.
            </p>
          </FadeUp>

          {/* Gradient Divider Line */}
          <FadeUp delay={0.3} className="my-2">
            <div className="w-[64px] h-[3px] rounded-full bg-gradient-to-r from-[#5B5FFF] to-[#5B5FFF]/20" />
          </FadeUp>

          <FadeUp delay={0.35}>
            <p>
              Today, Workzi powers workforce operations for more than 10,000 companies across 60+ countries. Our platform handles everything from real-time attendance tracking and geo-fenced check-ins to complex payroll processing and AI-powered workforce analytics — all in one connected system.
            </p>
          </FadeUp>

          <FadeUp delay={0.4}>
            <p>
              We are a team of 240+ builders, designers, and people operations experts who believe that when HR works better, everything works better. We obsess over the details of the employee experience so that HR teams can focus on what they do best: taking care of their people.
            </p>
          </FadeUp>
        </div>

        {/* Pull Quote Section */}
        <FadeUp delay={0.45} className="w-full max-w-[680px] mt-16 pt-12 border-t border-slate-100 flex flex-col items-center text-center gap-6">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[90px] sm:text-[100px] leading-[60px] text-[#5B5FFF] opacity-20 select-none">
            “
          </span>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[26px] sm:text-[34px] lg:text-[38px] leading-[36px] sm:leading-[48px] tracking-[-0.76px] text-[#111827] max-w-[640px]">
            HR operations should feel effortless, human, and intelligent.
          </p>

          {/* Author */}
          <div className="flex items-center gap-3.5 pt-2">
            <div className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-[#5B5FFF] to-[#818CF8] flex items-center justify-center text-white font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] shrink-0">
              KR
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="font-['Inter',sans-serif] font-semibold text-[15px] leading-[24px] text-[#111827]">
                Kavya Rajan
              </span>
              <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] text-[#6B7280]">
                Co-Founder &amp; CEO, Workzi
              </span>
            </div>
          </div>
        </FadeUp>

      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   SECTION 4 — FEATURED CUSTOMER STORY (Nexatech)
──────────────────────────────────────────────────────────── */
const AboutFeaturedCustomer: React.FC = () => {
  return (
    <section className="py-[60px] lg:py-[90px] bg-white">
      <Container className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <FadeUp>
          <div className="w-full rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-slate-200">

            {/* LEFT DARK BLOCK */}
            <div className="p-8 sm:p-12 lg:p-[72px_64px] flex flex-col justify-between items-start gap-10 relative overflow-hidden"
              style={{
                background: 'linear-gradient(160.52deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)',
              }}
            >
              {/* Subtle background radial glow */}
              <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full bg-white/5 pointer-events-none" />

              <div className="flex flex-col items-start gap-5 max-w-[528px]">
                <span className="font-['Inter',sans-serif] font-bold text-[12px] leading-[19px] tracking-[0.96px] uppercase text-white/50">
                  FEATURED CUSTOMER STORY
                </span>

                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[42px] leading-[36px] sm:leading-[44px] lg:leading-[48px] text-white">
                  How Nexatech transformed HR operations across 12 global offices.
                </h3>

                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-white/70">
                  When Nexatech needed to unify attendance and payroll across three continents, Workzi became their single source of truth for all people operations.
                </p>
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full pt-4 border-t border-white/10">
                <div className="flex flex-col gap-1">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] sm:text-[36px] leading-none text-white">
                    70%
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[12px] sm:text-[13px] leading-[21px] text-white/55">
                    Faster approvals
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] sm:text-[36px] leading-none text-white">
                    3x
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[12px] sm:text-[13px] leading-[21px] text-white/55">
                    Productivity gain
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] sm:text-[36px] leading-none text-white">
                    40%
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[12px] sm:text-[13px] leading-[21px] text-white/55">
                    Payroll reduction
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT LIGHT BLOCK WITH PLAY BUTTON & OVERLAY CARD */}
            <div className="relative min-h-[360px] lg:min-h-[520px] p-8 flex items-center justify-center overflow-hidden"
              style={{
                background: 'linear-gradient(160.52deg, #E0E7FF 0%, #C7D2FE 50%, #DDD6FE 100%)',
              }}
            >
              {/* Play Button */}
              <div className="w-[72px] h-[72px] rounded-full bg-white/95 border border-white flex items-center justify-center text-[#5B5FFF] cursor-pointer hover:scale-105 transition-transform duration-300 z-10">
                <Play size={28} className="fill-[#5B5FFF] ml-1" />
              </div>

              {/* Impact Summary Floating Card */}
              <div className="absolute bottom-6 right-6 bg-white rounded-[18px] p-5 border border-slate-200 flex flex-col gap-2 min-w-[220px] sm:min-w-[234px] z-20">
                <span className="font-['Inter',sans-serif] font-bold text-[12px] leading-[19px] tracking-[0.48px] text-[#6B7280]">
                  Impact Summary
                </span>

                <div className="flex items-center gap-2 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
                  <span>Leave approvals automated</span>
                </div>

                <div className="flex items-center gap-2 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0" />
                  <span>Payroll errors eliminated</span>
                </div>

                <div className="flex items-center gap-2 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
                  <span className="w-2 h-2 rounded-full bg-[#5B5FFF] shrink-0" />
                  <span>12 offices unified</span>
                </div>
              </div>
            </div>

          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   SECTION 5 — WHAT WE STAND FOR (Accordion & Visual)
──────────────────────────────────────────────────────────── */
const AboutValuesAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const valuesList = [
    {
      id: 0,
      title: 'Innovation',
      icon: <Compass size={18} className="text-[#5B5FFF]" />,
      desc: "We build for how work evolves, not how it used to be. Our teams ship thoughtfully and quickly — always asking what's possible, not just what's precedented. Innovation is not a department; it's a mindset woven into everything we do.",
    },
    {
      id: 1,
      title: 'Transparency',
      icon: <Eye size={18} className="text-[#6B7280]" />,
      desc: 'We communicate openly internally and externally. Clear pricing, upfront roadmaps, and honest feedback build long-term trust with our customers and partners.',
    },
    {
      id: 2,
      title: 'Ownership',
      icon: <Star size={18} className="text-[#6B7280]" />,
      desc: 'Every team member has the autonomy and responsibility to take initiatives from idea to execution with pride, craftsmanship, and accountability.',
    },
    {
      id: 3,
      title: 'Empathy',
      icon: <Heart size={18} className="text-[#6B7280]" />,
      desc: 'We design with genuine care for HR managers and employees alike, understanding their daily friction, respecting their time, and celebrating their wins.',
    },
    {
      id: 4,
      title: 'Excellence',
      icon: <Award size={18} className="text-[#6B7280]" />,
      desc: 'We hold ourselves to high technical and design standards, crafting robust, polished software that delivers reliability and speed every single day.',
    },
  ];

  return (
    <section id="values" className="py-[90px] lg:py-[120px] bg-[#F8FAFC]">
      <Container className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[80px]">

          {/* LEFT: Accordion List */}
          <div className="w-full lg:w-[552px] flex flex-col items-start shrink-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EDEDFF] border border-[#5B5FFF]/20 mb-4">
              <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[19px] tracking-[0.96px] uppercase text-[#5B5FFF]">
                WHAT WE STAND FOR
              </span>
            </div>

            {/* H2 Title */}
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[44px] lg:text-[50px] leading-[1.1] tracking-[-1px] text-[#111827] mb-4">
              Our values guide everything we build.
            </h2>

            {/* Subtitle */}
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[17px] leading-[30px] text-[#6B7280] mb-8">
              From product decisions to how we support our customers — these five principles shape every interaction.
            </p>

            {/* Accordion Container */}
            <div className="w-full flex flex-col divide-y divide-slate-200/80 border-t border-slate-200/80">
              {valuesList.map((item) => {
                const isOpen = openIndex === item.id;

                return (
                  <div key={item.id} className="w-full py-5 flex flex-col">
                    {/* Header Row */}
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : item.id)}
                      className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer focus:outline-hidden"
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className={`w-[38px] h-[38px] rounded-[10px] flex items-center justify-center transition-all ${isOpen
                              ? 'bg-[#EDEDFF] border border-[#5B5FFF]/20 text-[#5B5FFF]'
                              : 'bg-white border border-[#E5E7EB] text-[#6B7280]'
                            }`}
                        >
                          {item.icon}
                        </div>
                        <span
                          className={`font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[18px] leading-[29px] transition-colors ${isOpen ? 'text-[#5B5FFF]' : 'text-[#111827] group-hover:text-[#5B5FFF]'
                            }`}
                        >
                          {item.title}
                        </span>
                      </div>

                      {/* Toggle Icon */}
                      <div
                        className={`w-7 h-7 rounded-[8px] flex items-center justify-center transition-all ${isOpen
                            ? 'bg-[#5B5FFF] text-white rotate-45'
                            : 'bg-[#EDEDFF] text-[#5B5FFF]'
                          }`}
                      >
                        <Plus size={16} />
                      </div>
                    </button>

                    {/* Accordion Body Content */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-[52px] pt-3 pb-1">
                            <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[26px] text-[#6B7280] max-w-[490px]">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Visual Orbit Diagram Card */}
          <div className="w-full lg:w-[552px] h-[440px] sm:h-[520px] lg:h-[552px] rounded-[28px] p-8 flex items-center justify-center shrink-0 relative overflow-hidden select-none border border-slate-200/50"
            style={{
              background: 'linear-gradient(160deg, #F0F0FF 0%, #E8E8FF 100%)',
            }}
          >
            {/* Concentric Dashed Orbit Rings */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-[#5B5FFF]/20" />
            <div className="absolute w-[260px] h-[260px] rounded-full border border-dashed border-[#5B5FFF]/30" />
            <div className="absolute w-[160px] h-[160px] rounded-full border border-dashed border-[#5B5FFF]/40" />

            {/* Orbit Node Dots */}
            <div className="absolute top-[80px] left-[50%] -translate-x-1/2 w-4 h-4 rounded-full bg-[#5B5FFF]/60" />
            <div className="absolute bottom-[80px] left-[50%] -translate-x-1/2 w-4 h-4 rounded-full bg-[#5B5FFF]/50" />
            <div className="absolute left-[80px] top-[50%] -translate-y-1/2 w-4 h-4 rounded-full bg-[#F59E0B]/60" />
            <div className="absolute right-[80px] top-[50%] -translate-y-1/2 w-4 h-4 rounded-full bg-[#10B981]/60" />

            {/* Center Core Hub */}
            <div className="relative w-[72px] h-[72px] rounded-full bg-[#5B5FFF]/15 border-[1.5px] border-[#5B5FFF]/40 flex items-center justify-center backdrop-blur-md z-10">
              <span className="font-['Inter',sans-serif] font-bold text-[13px] text-[#5B5FFF]">
                Workzi
              </span>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   SECTION 6 — OUR DISTRIBUTED TEAM & COLLAGE
──────────────────────────────────────────────────────────── */
const AboutTeamCollage: React.FC = () => {
  return (
    <section className="py-[90px] lg:py-[120px] bg-white">
      <Container className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[80px]">

          {/* LEFT: Team Cards Collage Visual */}
          <div className="w-full lg:w-[552px] h-[520px] sm:h-[560px] rounded-[28px] bg-[#F8FAFC] p-6 sm:p-8 relative overflow-hidden flex items-center justify-center shrink-0 border border-slate-200">

            {/* Main Center Card (Kavya Rajan) */}
            <motion.div
              whileHover={{ y: -5 }}
              className="w-[220px] sm:w-[240px] h-[280px] sm:h-[300px] bg-white rounded-[18px] border border-slate-200 overflow-hidden flex flex-col z-20"
            >
              <div className="w-full h-[215px] bg-gradient-to-br from-[#C7D2FE] via-[#A5B4FC] to-[#818CF8] flex items-center justify-center">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] text-white">
                  KR
                </span>
              </div>
              <div className="p-3 sm:p-3.5 flex flex-col">
                <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">
                  Kavya Rajan
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[11px] text-[#6B7280]">
                  Co-Founder &amp; CEO 🇮🇳
                </span>
              </div>
            </motion.div>

            {/* Top Right Card (Lena Park) */}
            <motion.div
              whileHover={{ y: -5 }}
              className="w-[160px] sm:w-[180px] h-[190px] sm:h-[211px] bg-white rounded-[18px] border border-slate-200 overflow-hidden flex flex-col absolute top-6 right-6 sm:right-10 z-10"
            >
              <div className="w-full h-[140px] bg-gradient-to-br from-[#A7F3D0] via-[#6EE7B7] to-[#34D399] flex items-center justify-center">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[26px] text-white">
                  LP
                </span>
              </div>
              <div className="p-3 flex flex-col">
                <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">
                  Lena Park
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[11px] text-[#6B7280]">
                  Head of Design 🇰🇷
                </span>
              </div>
            </motion.div>

            {/* Bottom Left Card (Marcus J.) */}
            <motion.div
              whileHover={{ y: -5 }}
              className="w-[150px] sm:w-[160px] h-[180px] sm:h-[201px] bg-white rounded-[18px] border border-slate-200 overflow-hidden flex flex-col absolute bottom-6 left-6 sm:left-10 z-10"
            >
              <div className="w-full h-[125px] bg-gradient-to-br from-[#FDE68A] via-[#FBBF24] to-[#F59E0B] flex items-center justify-center">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[26px] text-white">
                  MJ
                </span>
              </div>
              <div className="p-3 flex flex-col">
                <span className="font-['Inter',sans-serif] font-semibold text-[13px] text-[#111827]">
                  Marcus J.
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[11px] text-[#6B7280]">
                  CTO 🇺🇸
                </span>
              </div>
            </motion.div>

            {/* Bottom Right Floating Badge */}
            <div className="absolute bottom-6 right-6 sm:right-8 bg-white rounded-full px-4 py-2 border border-slate-200 text-[12px] font-['Inter',sans-serif] font-semibold text-[#111827] flex items-center gap-2 z-30">
              <ShieldCheck size={16} className="text-[#5B5FFF]" />
              <span>24/7 support coverage</span>
            </div>

          </div>

          {/* RIGHT: Team Content */}
          <div className="w-full lg:w-[552px] flex flex-col items-start shrink-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EDEDFF] border border-[#5B5FFF]/20 mb-4">
              <span className="font-['Inter',sans-serif] font-bold text-[12px] leading-[19px] tracking-[0.96px] uppercase text-[#5B5FFF]">
                OUR TEAM
              </span>
            </div>

            {/* H2 Title */}
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[44px] lg:text-[50px] leading-[1.1] tracking-[-1px] text-[#111827] mb-4">
              Our distributed team powers businesses worldwide.
            </h2>

            {/* Subtitle */}
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[17px] leading-[30px] text-[#6B7280] mb-8">
              We are 240+ builders working from 25+ countries, united by a shared mission: to make HR effortless for every team on the planet.
            </p>

            {/* Stats Bordered Row */}
            <div className="w-full grid grid-cols-3 border border-[#E5E7EB] rounded-[20px] p-4 sm:p-6 mb-8 bg-white text-center">
              <div className="flex flex-col items-center gap-1 border-r border-[#E5E7EB] px-2">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] sm:text-[30px] leading-tight text-[#5B5FFF]">
                  240+
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[12px] sm:text-[13px] text-[#6B7280]">
                  Team Members
                </span>
              </div>

              <div className="flex flex-col items-center gap-1 border-r border-[#E5E7EB] px-2">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] sm:text-[30px] leading-tight text-[#5B5FFF]">
                  25+
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[12px] sm:text-[13px] text-[#6B7280]">
                  Countries
                </span>
              </div>

              <div className="flex flex-col items-center gap-1 px-2">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[24px] sm:text-[30px] leading-tight text-[#5B5FFF]">
                  100k+
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[12px] sm:text-[13px] text-[#6B7280]">
                  Employees Managed
                </span>
              </div>
            </div>

            {/* Culture Bullet Points */}
            <div className="flex flex-col gap-3.5 w-full">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[9px] bg-[#EDEDFF] flex items-center justify-center text-[#5B5FFF] shrink-0">
                  <Globe size={16} />
                </div>
                <span className="font-['Inter',sans-serif] font-medium text-[15px] text-[#111827]">
                  Fully remote-first culture with async collaboration
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[9px] bg-[#EDEDFF] flex items-center justify-center text-[#5B5FFF] shrink-0">
                  <Smile size={16} />
                </div>
                <span className="font-['Inter',sans-serif] font-medium text-[15px] text-[#111827]">
                  Annual team retreats across 3 continents
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[9px] bg-[#EDEDFF] flex items-center justify-center text-[#5B5FFF] shrink-0">
                  <Award size={16} />
                </div>
                <span className="font-['Inter',sans-serif] font-medium text-[15px] text-[#111827]">
                  Named a Top 50 SaaS Workplace in 2024 &amp; 2025
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[9px] bg-[#EDEDFF] flex items-center justify-center text-[#5B5FFF] shrink-0">
                  <Building size={16} />
                </div>
                <span className="font-['Inter',sans-serif] font-medium text-[15px] text-[#111827]">
                  Offices in Bangalore, Singapore, London &amp; Austin
                </span>
              </div>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   SECTION 7 — EXECUTIVE TESTIMONIAL
──────────────────────────────────────────────────────────── */
const AboutExecutiveTestimonial: React.FC = () => {
  return (
    <section id="testimonial" className="py-[90px] lg:py-[120px] bg-[#F8FAFC]">
      <Container className="max-w-[960px] mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        <FadeUp className="flex flex-col items-center gap-6">

          {/* Quote mark */}
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[100px] sm:text-[120px] leading-[60px] text-[#5B5FFF] opacity-15 select-none">
            “
          </span>

          {/* Quote text */}
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[26px] sm:text-[36px] lg:text-[40px] leading-[36px] sm:leading-[50px] tracking-[-0.8px] text-[#111827] max-w-[840px]">
            Workzi didn't just improve our HR operations — it fundamentally changed how we think about our people. For the first time, our team could focus on culture instead of spreadsheets.
          </p>

          {/* Author */}
          <div className="flex items-center gap-4 pt-4">
            <div className="w-[60px] h-[60px] rounded-[18px] bg-gradient-to-br from-[#5B5FFF] to-[#818CF8] flex items-center justify-center text-white font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[20px] shrink-0">
              RK
            </div>
            <div className="flex flex-col items-start text-left">
              <span className="font-['Inter',sans-serif] font-bold text-[16px] leading-[26px] text-[#111827]">
                Rohit Kumar
              </span>
              <span className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#6B7280]">
                VP of People Operations, Nexatech Global
              </span>
            </div>
          </div>

        </FadeUp>
      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   SECTION 8 — FINAL CTA BANNER
──────────────────────────────────────────────────────────── */
const AboutCTA: React.FC = () => {
  return (
    <section className="py-[70px] lg:py-[100px] bg-white">
      <Container className="max-w-[1216px] mx-auto px-4 sm:px-8">
        <FadeUp>
          <div className="w-full rounded-[32px] p-8 sm:p-14 lg:p-[72px_128px] text-center text-white relative overflow-hidden flex flex-col items-center gap-6"
            style={{
              background: 'linear-gradient(98.16deg, #9AA0FF 0.73%, #5B5FFF 58.51%, #8A8AFF 105.78%)',
            }}
          >
            {/* Title */}
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[44px] lg:text-[48px] leading-[40px] sm:leading-[56px] lg:leading-[64px] tracking-[-1.12px] text-white max-w-[644px]">
              Build a smarter workforce experience with us.
            </h2>

            {/* Subtitle */}
            <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[26px] text-white/85 max-w-[520px]">
              Join 10,000+ companies that trust Workzi to manage their most important asset — their people.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
              <a
                href="#pricing"
                className="bg-white hover:bg-slate-100 text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105"
              >
                Schedule Demo
              </a>
              <a
                href="#contact-support"
                className="border border-white/30 hover:bg-white/10 text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   MAIN ABOUT PAGE EXPORT
──────────────────────────────────────────────────────────── */
export const AboutPage: React.FC = () => {
  return (
    <div id="about-page" className="relative overflow-x-hidden bg-white">
      <AboutHero />
      <AboutLogos />
      <AboutStory />
      <AboutFeaturedCustomer />
      <AboutValuesAccordion />
      <AboutTeamCollage />
      <AboutExecutiveTestimonial />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
