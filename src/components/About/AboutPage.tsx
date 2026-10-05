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
  Globe,
  Award,
  Star,
  Eye,
  Compass,
  Cpu,
  Palette,
  Lightbulb,
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
   SECTION 1 — HERO ("OUR STORY")
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
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[36px] sm:text-[46px] lg:text-[54px] leading-[1.15] lg:leading-[64px] tracking-[-1.04px] text-[#111827] mb-6">
              Building a <span className="text-[#5C5CFF]">smarter future</span> for workforce management.
            </h1>

            {/* Subtitle / Paragraphs */}
            <div className="space-y-4 max-w-[540px] mb-8 font-['Inter',sans-serif] text-[16px] sm:text-[17px] leading-[28px] sm:leading-[30px] text-[#4C525D]">
              <p>
                Workzi is an AI-powered workforce management platform built to make the way organisations manage work simpler, smarter, and more connected.
              </p>
              <p>
                We bring workforce operations, intelligent insights, and people-focused experiences together in one platform — helping modern teams reduce complexity and work with greater clarity.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full">
              <a
                href="/pricing"
                className="bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-['Inter',sans-serif] font-bold text-[16px] leading-[26px] px-[28px] py-[14px] rounded-[12px] transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2 hover:scale-[1.02] shadow-sm"
              >
                <span>Explore Workzi</span>
                <ArrowRight size={18} />
              </a>
              <a
                href="#who-we-are"
                className="bg-white hover:bg-slate-50 border border-[#E5E7EB] text-[#111827] font-['Inter',sans-serif] font-semibold text-[16px] leading-[26px] px-[28px] py-[14px] rounded-[12px] transition-all duration-200 cursor-pointer inline-flex items-center justify-center hover:scale-[1.02]"
              >
                Explore Platform
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — Visual Image */}
          <div className="relative w-full lg:w-[600px] flex justify-center lg:justify-end shrink-0 py-8 lg:py-0">
            {/* Main Visual Box with Unsplash Image */}
            <div
              className="relative w-full max-w-[520px] h-[380px] sm:h-[440px] rounded-[16px] overflow-hidden shadow-2xl border border-slate-200/90 group"
            >
              {/* Unsplash Image — Modern collaborative workforce */}
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Modern team collaborating on workforce management and intelligent operations"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
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
   SECTION 3 — WHO WE ARE
──────────────────────────────────────────────────────────── */
const AboutStory: React.FC = () => {
  return (
    <section id="who-we-are" className="py-[80px] lg:py-[120px] bg-white">
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
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.15] lg:leading-[62px] tracking-[-1px] text-[#111827]">
            We believe work should work better.
          </h2>
        </FadeUp>

        {/* Lead Subtitle */}
        <FadeUp delay={0.15} className="text-center max-w-[640px] mb-12">
          <p className="font-['Inter',sans-serif] font-normal text-[17px] sm:text-[19px] leading-[30px] sm:leading-[33px] text-[#6B7280]">
            Workforce management shouldn’t be complicated by disconnected processes, scattered information, and unnecessary administrative effort.
          </p>
        </FadeUp>

        {/* Story Body Paragraphs */}
        <div className="max-w-[680px] w-full flex flex-col items-start gap-6 text-[#6B7280] font-['Inter',sans-serif] text-[16px] sm:text-[17px] leading-[29px] sm:leading-[31px]">
          <FadeUp delay={0.2}>
            <p>
              Workzi was created in 2026 with a clear vision: to bring AI, workforce operations, and people-focused technology together in one intelligent platform.
            </p>
          </FadeUp>

          <FadeUp delay={0.25}>
            <p>
              We’re building Workzi to help organisations simplify the way they manage their workforce, gain better visibility into operations, and create a more connected work experience.
            </p>
          </FadeUp>

          {/* Gradient Divider Line */}
          <FadeUp delay={0.3} className="my-2">
            <div className="w-[64px] h-[3px] rounded-full bg-gradient-to-r from-[#5B5FFF] to-[#5B5FFF]/20" />
          </FadeUp>
        </div>

        {/* Pull Quote / Philosophy Box */}
        <FadeUp delay={0.35} className="w-full max-w-[720px] mt-12 pt-10 border-t border-slate-100 flex flex-col items-center text-center gap-5">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[80px] sm:text-[90px] leading-[50px] text-[#5B5FFF] opacity-20 select-none">
            “
          </span>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[24px] sm:text-[30px] lg:text-[34px] leading-[34px] sm:leading-[44px] tracking-[-0.76px] text-[#111827] max-w-[640px]">
            Workforce management should be smarter, simpler, and more human.
          </p>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[26px] text-[#6B7280] max-w-[580px]">
            Workzi brings intelligent technology and workforce operations together to help organisations manage work with greater clarity and confidence.
          </p>
        </FadeUp>

      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   SECTION 4 — FEATURED CUSTOMER STORY (Nexatech)
──────────────────────────────────────────────────── */
// const AboutFeaturedCustomer: React.FC = () => {
//   return (
//     <section className="py-[60px] lg:py-[90px] bg-white">
//       <Container className="max-w-[1280px] mx-auto px-4 sm:px-8">
//         <FadeUp>
//           <div className="w-full rounded-[32px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 border border-slate-200">

//             {/* LEFT DARK BLOCK */}
//             <div
//               className="p-8 sm:p-12 lg:p-[72px_64px] flex flex-col justify-between items-start gap-10 relative overflow-hidden"
//               style={{
//                 background: 'linear-gradient(160.52deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)',
//               }}
//             >
//               {/* Subtle background radial glow */}
//               <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full bg-white/5 pointer-events-none" />

//               <div className="flex flex-col items-start gap-5 max-w-[528px]">
//                 <span className="font-['Inter',sans-serif] font-bold text-[12px] leading-[19px] tracking-[0.96px] uppercase text-white/50">
//                   FEATURED CUSTOMER STORY
//                 </span>

//                 <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[42px] leading-[36px] sm:leading-[44px] lg:leading-[48px] text-white">
//                   How Nexatech transformed HR operations across 12 global offices.
//                 </h3>

//                 <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[26px] sm:leading-[28px] text-white/70">
//                   When Nexatech needed to unify attendance and payroll across three continents, Workzi became their single source of truth for all people operations.
//                 </p>
//               </div>

//               {/* Metrics Row */}
//               <div className="grid grid-cols-3 gap-4 sm:gap-8 w-full pt-4 border-t border-white/10">
//                 <div className="flex flex-col gap-1">
//                   <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] sm:text-[36px] leading-none text-white">
//                     70%
//                   </span>
//                   <span className="font-['Inter',sans-serif] font-normal text-[12px] sm:text-[13px] leading-[21px] text-white/55">
//                     Faster approvals
//                   </span>
//                 </div>

//                 <div className="flex flex-col gap-1">
//                   <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] sm:text-[36px] leading-none text-white">
//                     3x
//                   </span>
//                   <span className="font-['Inter',sans-serif] font-normal text-[12px] sm:text-[13px] leading-[21px] text-white/55">
//                     Productivity gain
//                   </span>
//                 </div>

//                 <div className="flex flex-col gap-1">
//                   <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] sm:text-[36px] leading-none text-white">
//                     40%
//                   </span>
//                   <span className="font-['Inter',sans-serif] font-normal text-[12px] sm:text-[13px] leading-[21px] text-white/55">
//                     Admin reduction
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT LIGHT BLOCK WITH PLAY BUTTON & OVERLAY CARD */}
//             <div
//               className="relative min-h-[360px] lg:min-h-[520px] p-8 flex items-center justify-center overflow-hidden"
//               style={{
//                 background: 'linear-gradient(160.52deg, #E0E7FF 0%, #C7D2FE 50%, #DDD6FE 100%)',
//               }}
//             >
//               {/* Play Button */}
//               <div className="w-[72px] h-[72px] rounded-full bg-white/95 border border-white flex items-center justify-center text-[#5B5FFF] cursor-pointer hover:scale-105 transition-transform duration-300 z-10 shadow-md">
//                 <Play size={28} className="fill-[#5B5FFF] ml-1" />
//               </div>

//               {/* Impact Summary Floating Card */}
//               <div className="absolute bottom-6 right-6 bg-white rounded-[18px] p-5 border border-slate-200 flex flex-col gap-2 min-w-[220px] sm:min-w-[234px] z-20 shadow-md">
//                 <span className="font-['Inter',sans-serif] font-bold text-[12px] leading-[19px] tracking-[0.48px] text-[#6B7280]">
//                   Impact Summary
//                 </span>

//                 <div className="flex items-center gap-2 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
//                   <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
//                   <span>Approvals automated</span>
//                 </div>

//                 <div className="flex items-center gap-2 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
//                   <span className="w-2 h-2 rounded-full bg-[#F59E0B] shrink-0" />
//                   <span>Manual friction eliminated</span>
//                 </div>

//                 <div className="flex items-center gap-2 text-[13px] font-['Inter',sans-serif] font-semibold text-[#111827]">
//                   <span className="w-2 h-2 rounded-full bg-[#5B5FFF] shrink-0" />
//                   <span>12 offices unified</span>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </FadeUp>
//       </Container>
//     </section>
//   );
// };

/* ────────────────────────────────────────────────────────────
   SECTION 5 — WHAT WE STAND FOR
──────────────────────────────────────────────────────────── */
const AboutValuesAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const valuesList = [
    {
      id: 0,
      title: 'Innovation',
      icon: <Compass size={18} className="text-[#5B5FFF]" />,
      desc: 'We look beyond traditional approaches to workforce management. We use AI, technology, and thoughtful design to create smarter ways for organisations to manage work and people.',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
      tag: 'Thoughtful Design & AI',
    },
    {
      id: 1,
      title: 'Transparency',
      icon: <Eye size={18} className="text-[#6B7280]" />,
      desc: 'We believe workforce management should be clear and easy to understand. We focus on making information, processes, and insights accessible so teams can make informed decisions with confidence.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
      tag: 'Open & Accessible Insights',
    },
    {
      id: 2,
      title: 'Ownership',
      icon: <Star size={18} className="text-[#6B7280]" />,
      desc: 'We take responsibility for what we build and how it serves the people who use it. We approach every challenge with accountability, initiative, and a commitment to meaningful outcomes.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
      tag: 'Accountability & Initiative',
    },
    {
      id: 3,
      title: 'Empathy',
      icon: <Heart size={18} className="text-[#6B7280]" />,
      desc: 'We design around real workplace needs. By understanding the experiences of employees, managers, and HR teams, we create solutions that are practical, intuitive, and people-focused.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
      tag: 'People-Centred Solutions',
    },
    {
      id: 4,
      title: 'Excellence',
      icon: <Award size={18} className="text-[#6B7280]" />,
      desc: 'We care about the details. From product experience to technology and reliability, we continuously strive to build Workzi with quality, purpose, and a high standard of execution.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      tag: 'Craftsmanship & High Standards',
    },
  ];

  const activeItem = valuesList.find((v) => v.id === openIndex) || valuesList[0];

  return (
    <section id="values" className="py-[90px] lg:py-[120px] bg-[#F8FAFC]">
      <Container className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[80px]">

          {/* LEFT: Accordion List */}
          <div className="w-full lg:w-[552px] flex flex-col items-start shrink-0">
            {/* Eyebrow */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#EDEDFF] border border-[#5B5FFF]/20 mb-4">
              <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[19px] tracking-[0.96px] uppercase text-[#5B5FFF]">
                WHAT WE STAND FOR
              </span>
            </div>

            {/* H2 Title */}
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.15] tracking-[-1px] text-[#111827] mb-4">
              Our values shape everything we build.
            </h2>

            {/* Subtitle */}
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[17px] leading-[28px] sm:leading-[30px] text-[#6B7280] mb-8">
              From how we design our technology to how we approach workforce challenges, these principles guide the way we build Workzi.
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

          {/* RIGHT: Values Visual Image Card */}
          <div className="w-full lg:w-[552px] h-[440px] sm:h-[500px] lg:h-[540px] rounded-[16px] shrink-0 relative overflow-hidden select-none border border-slate-200/90 shadow-2xl bg-slate-900 group self-center my-auto">
            {/* Animated Unsplash Image with Crossfade */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeItem.id}
                src={activeItem.image}
                alt={activeItem.title}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full object-cover object-center"
              />
            </AnimatePresence>

            {/* Gradient Overlay for bottom card readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D2C]/75 via-[#0A0D2C]/10 to-transparent pointer-events-none" />

            {/* Bottom Floating Glass Card */}
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <motion.div
                key={`card-${activeItem.id}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white/95 backdrop-blur-md rounded-[20px] p-5 border border-white/40 shadow-xl flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-[14px] bg-[#EDEDFF] text-[#5B5FFF] flex items-center justify-center shrink-0">
                  {activeItem.icon}
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[18px] text-[#111827]">
                      {activeItem.title}
                    </span>
                    <span className="text-[11px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-md bg-[#EDEDFF] text-[#5B5FFF]">
                      {activeItem.tag}
                    </span>
                  </div>
                  <p className="font-['Inter',sans-serif] text-[13px] leading-[20px] text-[#6B7280] mt-1 line-clamp-2">
                    {activeItem.desc}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   SECTION 6 — OUR TEAM
──────────────────────────────────────────────────────────── */
const AboutTeamCollage: React.FC = () => {
  return (
    <section className="py-[90px] lg:py-[120px] bg-white">
      <Container className="max-w-[1280px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-[80px]">

          {/* LEFT: Abstract / Team Visual Cards (No individual names/titles) */}
          <div className="w-full lg:w-[552px] min-h-[500px] sm:min-h-[540px] rounded-[28px] bg-[#F8FAFC] p-6 sm:p-8 relative overflow-hidden flex flex-col justify-center gap-4 shrink-0 border border-slate-200">

            {/* Card 1: AI & TECHNOLOGY */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-white rounded-[20px] border border-slate-200/90 p-5 shadow-sm hover:shadow-md hover:border-[#5B5FFF]/40 transition-all flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4F46E5] to-[#7C3AED] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Cpu size={26} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-['Plus_Jakarta_Sans',sans-serif] font-bold tracking-[0.8px] text-[#5B5FFF] uppercase">
                  AI &amp; TECHNOLOGY
                </span>
                <h4 className="text-[17px] font-bold text-[#111827] mt-0.5">
                  Building intelligent workforce solutions
                </h4>
                <p className="text-[13px] text-[#6B7280] mt-0.5">
                  Automated scheduling, predictive insights, and robust infrastructure.
                </p>
              </div>
            </motion.div>

            {/* Card 2: PRODUCT & DESIGN */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-white rounded-[20px] border border-slate-200/90 p-5 shadow-sm hover:shadow-md hover:border-[#F59E0B]/50 transition-all flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F59E0B] to-[#D97706] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Palette size={26} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-['Plus_Jakarta_Sans',sans-serif] font-bold tracking-[0.8px] text-[#D97706] uppercase">
                  PRODUCT &amp; DESIGN
                </span>
                <h4 className="text-[17px] font-bold text-[#111827] mt-0.5">
                  Creating simple, intuitive experiences
                </h4>
                <p className="text-[13px] text-[#6B7280] mt-0.5">
                  Human-centered UX, seamless daily workflows, and frictionless interactions.
                </p>
              </div>
            </motion.div>

            {/* Card 3: WORKFORCE INNOVATION */}
            <motion.div
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-white rounded-[20px] border border-slate-200/90 p-5 shadow-sm hover:shadow-md hover:border-emerald-500/50 transition-all flex items-center gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-white shrink-0 shadow-sm">
                <Lightbulb size={26} />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-['Plus_Jakarta_Sans',sans-serif] font-bold tracking-[0.8px] text-emerald-600 uppercase">
                  WORKFORCE INNOVATION
                </span>
                <h4 className="text-[17px] font-bold text-[#111827] mt-0.5">
                  Rethinking how organisations manage work
                </h4>
                <p className="text-[13px] text-[#6B7280] mt-0.5">
                  Modern people operations, transparent attendance, and high team agility.
                </p>
              </div>
            </motion.div>

            {/* Bottom Floating Badge */}
            <div className="mt-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200 text-[12px] font-['Inter',sans-serif] font-semibold text-[#111827] flex items-center justify-center gap-2">
              <ShieldCheck size={16} className="text-[#5B5FFF]" />
              <span>Built by modern teams for modern work</span>
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
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[44px] lg:text-[48px] leading-[1.15] tracking-[-1px] text-[#111827] mb-4">
              A team building what’s next for work.
            </h2>

            {/* Subtitles */}
            <div className="space-y-3 font-['Inter',sans-serif] font-normal text-[16px] sm:text-[17px] leading-[28px] sm:leading-[30px] text-[#6B7280] mb-8">
              <p>
                Workzi brings together people with a shared focus on AI, technology, product thinking, and workforce innovation.
              </p>
              <p>
                We’re building a platform that helps organisations simplify workforce management, improve visibility, and create better experiences for the people behind every business.
              </p>
            </div>

            {/* Replaced Statistics Box */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-3 border border-[#E5E7EB] rounded-[20px] p-4 sm:p-5 mb-8 bg-white text-center gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#E5E7EB] shadow-xs">
              <div className="flex flex-col items-center gap-1 px-3">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] sm:text-[14px] tracking-[0.5px] uppercase text-[#5B5FFF]">
                  AI-POWERED
                </span>
                <span className="font-['Inter',sans-serif] font-medium text-[13px] leading-tight text-[#111827]">
                  Workforce Intelligence
                </span>
              </div>

              <div className="flex flex-col items-center gap-1 px-3 pt-3 sm:pt-0">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] sm:text-[14px] tracking-[0.5px] uppercase text-[#5B5FFF]">
                  PEOPLE-FIRST
                </span>
                <span className="font-['Inter',sans-serif] font-medium text-[13px] leading-tight text-[#111827]">
                  Human-Centred Approach
                </span>
              </div>

              <div className="flex flex-col items-center gap-1 px-3 pt-3 sm:pt-0">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] sm:text-[14px] tracking-[0.5px] uppercase text-[#5B5FFF]">
                  FUTURE-READY
                </span>
                <span className="font-['Inter',sans-serif] font-medium text-[13px] leading-tight text-[#111827]">
                  Built for Modern Work
                </span>
              </div>
            </div>

            {/* Values / Principles */}
            <div className="flex flex-col gap-3.5 w-full">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[9px] bg-[#EDEDFF] flex items-center justify-center text-[#5B5FFF] shrink-0">
                  <Cpu size={16} />
                </div>
                <span className="font-['Inter',sans-serif] font-medium text-[15px] text-[#111827]">
                  AI and automated workforce operations built for scale
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[9px] bg-[#EDEDFF] flex items-center justify-center text-[#5B5FFF] shrink-0">
                  <Globe size={16} />
                </div>
                <span className="font-['Inter',sans-serif] font-medium text-[15px] text-[#111827]">
                  Distributed collaboration with transparent communication
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[9px] bg-[#EDEDFF] flex items-center justify-center text-[#5B5FFF] shrink-0">
                  <Heart size={16} />
                </div>
                <span className="font-['Inter',sans-serif] font-medium text-[15px] text-[#111827]">
                  Human-centred design prioritizing everyday employee clarity
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
   SECTION 7 — PHILOSOPHY CALLOUT
──────────────────────────────────────────────────────────── */
const AboutExecutiveTestimonial: React.FC = () => {
  return (
    <section id="testimonial" className="py-[90px] lg:py-[120px] bg-[#F8FAFC]">
      <Container className="max-w-[960px] mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        <FadeUp className="flex flex-col items-center gap-6">

          {/* Quote mark */}
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[90px] sm:text-[110px] leading-[60px] text-[#5B5FFF] opacity-15 select-none">
            “
          </span>

          {/* Quote text */}
          <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[26px] sm:text-[34px] lg:text-[38px] leading-[36px] sm:leading-[48px] tracking-[-0.8px] text-[#111827] max-w-[840px]">
            Workforce management should be intelligent, connected, and built around people.
          </p>

          <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[17px] leading-[28px] sm:leading-[30px] text-[#6B7280] max-w-[700px]">
            Workzi brings AI and workforce operations together to help organisations simplify everyday processes, gain clearer insights, and create a better way to manage work.
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EDEDFF] border border-[#5B5FFF]/20 text-[#5B5FFF] text-[13px] font-semibold font-['Inter',sans-serif] mt-2">
            <Sparkles size={14} />
            <span>Workzi Core Philosophy</span>
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
          <div
            className="w-full rounded-[32px] p-8 sm:p-14 lg:p-[72px_128px] text-center text-white relative overflow-hidden flex flex-col items-center gap-6 shadow-2xl"
            style={{
              background: 'linear-gradient(98.16deg, #9AA0FF 0.73%, #5B5FFF 58.51%, #8A8AFF 105.78%)',
            }}
          >
            {/* Title */}
            <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[44px] lg:text-[48px] leading-[40px] sm:leading-[56px] lg:leading-[64px] tracking-[-1.12px] text-white max-w-[680px]">
              Build a smarter workforce with Workzi.
            </h2>

            {/* Subtitle */}
            <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[17px] leading-[26px] sm:leading-[28px] text-white/90 max-w-[580px]">
              Bring workforce operations, AI-powered insights, and people management together in one intelligent platform designed for modern organisations.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
              <a
                href="/pricing"
                className="bg-white hover:bg-slate-100 text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 shadow-md cursor-pointer"
              >
                Explore Workzi
              </a>
              <a
                href="/contact-support"
                className="border border-white/30 hover:bg-white/10 text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-7 py-3.5 rounded-full transition-all duration-200 hover:scale-105 cursor-pointer"
              >
                Talk to Our Team
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
      {/* <AboutLogos /> */}
      <AboutStory />
      {/* <AboutFeaturedCustomer /> */}
      <AboutValuesAccordion />
      <AboutTeamCollage />
      <AboutExecutiveTestimonial />
      <AboutCTA />
    </div>
  );
};

export default AboutPage;
