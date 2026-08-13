import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Play, ArrowRight, Star, Heart, CheckCircle, Clock, Search, Briefcase, ChevronRight, Globe, Zap, Users, MapPin, CreditCard, Check, BookOpen } from 'lucide-react';

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const CareersPage: React.FC = () => {
  return (
    <div id="careers" className="relative overflow-x-hidden bg-white font-['DM_Sans',sans-serif]">

      {/* ─── HERO SECTION ─── */}
      <section id="hero" className="relative w-full bg-white overflow-hidden pt-[90px] lg:pt-[110px] pb-[60px] flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT Column: Content */}
          <div className="py-6 lg:py-8 flex flex-col justify-center items-start text-left bg-white z-10">
            <FadeUp>
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-[8px] bg-[#FEF3C7] px-[14px] py-[6px] h-[29.19px] rounded-[100px] mb-[28px]">
                <span className="w-[7px] h-[7px] bg-[#F59E0B] rounded-full shrink-0" />
                <span className="font-['DM_Sans',sans-serif] font-bold text-[12px] leading-[19px] tracking-[0.48px] uppercase text-[#92400E]">
                  Now Hiring — We're Growing
                </span>
              </div>

              {/* H1 Title */}
              <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[38px] sm:text-[48px] lg:text-[58px] leading-[1.08] lg:leading-[63px] tracking-[-1.74px] text-[#101828] max-w-[528px] mb-[20px]">
                Build the <span className="text-[#F59E0B]">future</span> of workforce management.
              </h1>

              {/* Subtitle */}
              <p className="font-['DM_Sans',sans-serif] font-normal text-[16px] sm:text-[17px] leading-[30px] text-[#667085] max-w-[440px] mb-[48px]">
                Join a team of [X]+ builders, designers, and HR technologists working to make work feel effortless for [Y] employees worldwide.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-[12px] w-full max-w-[528px]">
                <a
                  href="#open-roles"
                  className="inline-flex items-center justify-center gap-[7px] bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[28px] py-[13px] h-[52px] rounded-[20px] shadow-[0px_1px_3px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <Search className="w-[16px] h-[16px] text-white" />
                  <span>Explore Open Roles</span>
                </a>
                <a
                  href="#our-story"
                  className="inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-[#D0D5DD] text-[#101828] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[28px] py-[13px] h-[52px] rounded-[20px] transition-all duration-300 cursor-pointer"
                >
                  <span>Life at Workzi</span>
                </a>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT Column: Interactive Visual Card */}
          <div className="relative w-full h-[480px] lg:h-[580px] bg-[linear-gradient(162.33deg,#0A0D2C_0%,#12163D_30%,#1A1F55_60%,#0D1230_100%)] rounded-[32px] flex items-center justify-center overflow-hidden shadow-2xl border border-slate-800/50" aria-label="Workzi team collaborating in a modern office space">
            {/* Background Rings */}
            <div className="absolute -right-[100px] -top-[100px] w-[500px] h-[500px] rounded-[250px] border border-white/6 pointer-events-none" />
            <div className="absolute left-[50px] top-[50px] w-[300px] h-[300px] rounded-[150px] border border-white/6 pointer-events-none" />
          </div>

        </div>
      </section>

      {/* ─── OUR STORY SECTION ─── */}
      <section id="our-story" className="py-[120px] px-4 md:px-12 lg:px-[128px] bg-white">
        <Container className="max-w-[1184px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[64px] items-start">

            {/* Left Content */}
            <div className="flex flex-col items-start text-left">
              <FadeUp>
                {/* Eyebrow */}
                <div className="flex items-center gap-[7px] mb-[12px]">
                  <span className="font-['DM_Sans',sans-serif] font-bold text-[11px] leading-[18px] tracking-[1.1px] uppercase text-[#F59E0B]">
                    Our Story
                  </span>
                </div>

                {/* Section Title */}
                <h2 className="font-['DM_Sans',sans-serif] font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.15] lg:leading-[55px] tracking-[-0.96px] text-[#101828] mb-[24px] max-w-[552px]">
                  We're building <span className="font-['Instrument_Serif',serif] italic font-normal text-[#64748B] text-[1.15em]">HR technology</span> that puts people first.
                </h2>

                {/* Paragraphs */}
                <div className="space-y-[19.4px] font-['DM_Sans',sans-serif] font-normal text-[16px] leading-[30px] text-[#667085] max-w-[552px] mb-[24px]">
                  <p>
                    Workzi started with a problem every HR team knows well: the tools built to manage people rarely feel human. In [year], a small team of engineers and people-ops experts set out to change that — to build a platform where every interaction between an employee and their organization feels effortless.
                  </p>
                  <p>
                    Today, we power attendance, leave, and workforce operations for [X] companies across [Y] countries. But we're still early. The next decade of work will be shaped by AI, distributed teams, and a complete rethink of how organizations track and care for their people. We're building the platform that gets us there.
                  </p>
                </div>

                {/* Quote Box */}
                <div className="bg-[#FEF3C7] border-l-[4px] border-[#F59E0B] rounded-r-[16px] p-[24px_28px] flex flex-col gap-[12px] max-w-[552px] mb-[24px] text-left shadow-sm">
                  <p className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[27px] text-[#101828]">
                    "The best products are built by people who care about the problem as much as they care about the craft."
                  </p>
                  <cite className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[22px] text-[#667085] not-italic">
                    — [Founder/CEO name], [Title]
                  </cite>
                </div>

                <p className="font-['DM_Sans',sans-serif] font-normal text-[16px] leading-[30px] text-[#667085] max-w-[552px]">
                  If you believe great software can genuinely improve how people experience work — that thoughtful design and smart automation can give HR teams their time back and employees the transparency they deserve — we'd love to work with you.
                </p>
              </FadeUp>
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-[28px] max-w-[552px]">
              <FadeUp delay={0.2}>
                {/* Video Card */}
                <div className="bg-[#2F4253] rounded-[28px] h-[310.5px] w-full mb-[28px] flex flex-col justify-center items-center relative overflow-hidden group cursor-pointer shadow-[0px_12px_40px_rgba(16,24,40,0.1),0px_4px_12px_rgba(16,24,40,0.05)] bg-[linear-gradient(113.98deg,#1A1D4A_0%,#2D3070_45%,#1E3060_80%,#252050_100%)]">
                  <div className="w-[70px] h-[70px] rounded-[35px] bg-white/95 text-[#2F4253] flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <Play className="w-[26px] h-[26px] fill-[#2F4253] text-[#2F4253]" />
                  </div>
                  <div className="absolute bottom-[20px] left-[24px] font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[26px] text-white/90 z-10">
                    Life at Workzi — [X] min
                  </div>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[12px] mb-[28px]">
                  {[
                    { icon: <Star className="w-[16px] h-[16px] text-white" />, title: "Ownership", desc: "We take deep responsibility for outcomes, not just tasks." },
                    { icon: <Briefcase className="w-[16px] h-[16px] text-white" />, title: "Craftsmanship", desc: "Details matter. We ship things we're proud to put our names on." },
                    { icon: <CheckCircle className="w-[16px] h-[16px] text-white" />, title: "Clarity", desc: "We communicate simply, document thoroughly, and decide decisively." },
                    { icon: <Heart className="w-[16px] h-[16px] text-white" />, title: "Empathy", desc: "We build with the end user's reality in mind, always." },
                    { icon: <Zap className="w-[16px] h-[16px] text-white" />, title: "Fast Execution", desc: "We bias toward action and iterate from real feedback." },
                    { icon: <Users className="w-[16px] h-[16px] text-white" />, title: "Customer Focus", desc: "Every decision traces back to what our customers actually need." },
                  ].map((val, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] border border-[#EAECF0] p-[18px_20px] rounded-[12px] flex flex-col items-start text-left gap-[3.1px]">
                      <div className="w-[32px] h-[32px] rounded-[9px] bg-[#6569FF] flex items-center justify-center mb-2">
                        {val.icon}
                      </div>
                      <h4 className="font-['DM_Sans',sans-serif] font-bold text-[14px] leading-[22px] text-[#101828]">{val.title}</h4>
                      <p className="font-['DM_Sans',sans-serif] font-normal text-[13px] leading-[20px] text-[#667085]">{val.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Testimonial Strip */}
                <div className="bg-[#F7F8FA] border border-[#EAECF0] rounded-[28px] p-[26.89px_28px_24px] flex flex-col gap-[20px] text-left">
                  <p className="font-['DM_Sans',sans-serif] font-medium italic text-[16px] leading-[26px] text-[#101828]">
                    "Joining Workzi was the best career decision I've made. The pace of learning is unlike anywhere else I've worked — and the problems we're solving actually matter to [X] employees."
                  </p>
                  <div className="flex items-center gap-[12px]">
                    <div className="w-[52px] h-[52px] rounded-[26px] bg-[linear-gradient(135deg,#5B5FFF_0%,#7B7FFF_100%)] text-white flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] leading-[30px] shrink-0">
                      W
                    </div>
                    <div className="flex flex-col items-start">
                      <h5 className="font-['DM_Sans',sans-serif] font-bold text-[14px] leading-[22px] text-[#101828]">[Employee name]</h5>
                      <p className="font-['DM_Sans',sans-serif] font-normal text-[12px] leading-[19px] text-[#667085]">[Title], joined [year]</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

          </div>
        </Container>
      </section>

      {/* ─── WHY JOIN US SECTION ─── */}
      <section className="py-24 bg-[#F8FAFC]">
        <Container>
          <FadeUp className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#5B5FEF] text-[10px] font-extrabold tracking-wider uppercase mb-4 block">
              WHY JOIN US
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0F172A] leading-tight mb-4">
              Built for people who love their work.
            </h2>
            <p className="text-[15px] font-medium text-slate-500 leading-relaxed">
              We invest in our team the way our platform invests in every employee experience.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* 1. Remote-First, Always */}
            <FadeUp delay={0.1} className="lg:col-span-2 md:col-span-2 bg-[#2A3A4A] text-white rounded-[32px] p-8 md:p-10 flex flex-col justify-between shadow-lg">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-6">
                  <MapPin size={18} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Remote-First, Always</h3>
                <p className="text-[14px] text-slate-300 font-medium leading-relaxed mb-8">
                  We're a remote-first team with optional hubs in [cities]. You choose where you do your best work.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 text-white/90 text-[11px] font-bold px-3 py-1.5 rounded-full">Async-friendly</span>
                <span className="bg-[#D97706]/20 text-[#F59E0B] text-[11px] font-bold px-3 py-1.5 rounded-full">Global team</span>
                <span className="bg-white/10 text-white/90 text-[11px] font-bold px-3 py-1.5 rounded-full">Flexible hours</span>
              </div>
            </FadeUp>

            {/* 2. Comprehensive Health */}
            <FadeUp delay={0.2} className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 bg-emerald-50">
                <CheckCircle size={20} />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-3">Comprehensive Health</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed flex-1 mb-6">
                Medical, dental, and vision for you and your dependents. Mental health sessions fully covered.
              </p>
              <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                <span>💊</span> Full family coverage
              </div>
            </FadeUp>

            {/* 3. Learning Budget */}
            <FadeUp delay={0.3} className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-amber-500 bg-amber-50">
                <BookOpen size={20} />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-3">Learning Budget</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed flex-1 mb-6">
                [₹amount]/year for courses, books, conferences, and skills you want to build.
              </p>
              <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                <span>📚</span> No approval needed
              </div>
            </FadeUp>

            {/* 4. AI-First Culture */}
            <FadeUp delay={0.4} className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-blue-500 bg-blue-50">
                <Star size={20} />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-3">AI-First Culture</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed flex-1 mb-6">
                We ship AI features internally before customers see them, with early access to all our AI tooling.
              </p>
              <div className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
                <span>🤖</span> [Internal AI tools/partners]
              </div>
            </FadeUp>

            {/* 5. Career Acceleration */}
            <FadeUp delay={0.5} className="lg:col-span-2 md:col-span-2 bg-[#FEF3C7] rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col justify-between border border-amber-200/50">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#F59E0B] flex items-center justify-center mb-6 text-white">
                  <Check size={20} />
                </div>
                <h3 className="text-[20px] font-semibold text-slate-900 mb-4">Career Acceleration</h3>
                <p className="text-[14px] text-slate-700 font-medium leading-relaxed mb-8">
                  We promote from within. [X]% of senior roles in [year] were filled internally, with clear ladders and real mentorship.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-5 text-center shadow-xs">
                  <div className="text-2xl font-black text-slate-900 mb-1">[X]%</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Internal promotions</div>
                </div>
                <div className="bg-white rounded-2xl p-5 text-center shadow-xs">
                  <div className="text-2xl font-black text-slate-900 mb-1">[X]x/yr</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Performance reviews</div>
                </div>
              </div>
            </FadeUp>

            {/* 6. Paid Wellness Leave */}
            <FadeUp delay={0.6} className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-pink-500 bg-pink-50">
                <MapPin size={20} />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-3">Paid Wellness Leave</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed flex-1">
                [X] dedicated wellness days a year, on top of standard PTO. Take them, no questions asked.
              </p>
            </FadeUp>

            {/* 7. Equity for Everyone */}
            <FadeUp delay={0.7} className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-emerald-500 bg-emerald-50">
                <CheckCircle size={20} />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-3">Equity for Everyone</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed flex-1">
                All full-time employees receive meaningful equity. We share value as we create it.
              </p>
            </FadeUp>

            {/* 8. Build What Matters */}
            <FadeUp delay={0.8} className="lg:col-span-2 md:col-span-2 bg-[linear-gradient(282.08deg,#5948D3_0.63%,#818CF8_100.99%)] border border-[#EAECF0] rounded-[20px] p-[28px] text-white flex flex-col justify-between items-start gap-[9.3px] shadow-sm">
              <div className="flex flex-col items-start text-left w-full">
                <div className="w-[44px] h-[44px] rounded-[12px] bg-white/12 flex items-center justify-center mb-[10.7px]">
                  <Clock className="w-[22px] h-[22px] text-[#DDD6FE]" />
                </div>
                <h3 className="font-['DM_Sans',sans-serif] font-bold text-[20px] leading-[32px] text-white mb-[4px]">
                  Build What Matters
                </h3>
                <p className="font-['DM_Sans',sans-serif] font-normal text-[15px] leading-[26px] text-white/65 mb-[16px]">
                  Our platform manages [X]+ attendance records daily for real employees at real companies. Every feature you ship reaches people immediately.
                </p>
              </div>
              <div className="bg-white/10 px-[12px] py-[4px] rounded-[100px] inline-flex items-center">
                <span className="font-['DM_Sans',sans-serif] font-semibold text-[12px] leading-[19px] tracking-[0.24px] text-white">
                  Real-time impact
                </span>
              </div>
            </FadeUp>

            {/* 9. Home Office Setup */}
            <FadeUp delay={0.9} className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-purple-500 bg-purple-50">
                <CreditCard size={20} />
              </div>
              <h3 className="text-[17px] font-bold text-slate-900 mb-3">Home Office Setup</h3>
              <p className="text-[14px] text-slate-500 font-medium leading-relaxed flex-1">
                [₹amount] setup allowance for remote team members — laptop, desk, and chair covered.
              </p>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ─── HOW WE HIRE SECTION ─── */}
      <section className="py-24 lg:py-32 bg-white">
        <Container>
          <FadeUp className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-[#5B5FEF] text-[10px] font-extrabold tracking-wider uppercase mb-4 block">
              HOW WE HIRE
            </span>
            <h2 className="text-3xl md:text-[40px] font-semibold text-[#0F172A] leading-tight mb-6">
              Our hiring process is designed to be clear, fast, and respectful of your time.
            </h2>
            <p className="text-[16px] font-medium text-slate-500 leading-relaxed max-w-xl mx-auto">
              Most candidates complete our full process in [X] weeks. We communicate at every stage.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="relative max-w-5xl mx-auto">
            {/* Connecting line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200 -translate-y-1/2 hidden lg:block z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4 relative z-10 items-stretch">
              {[
                { step: "01", title: "Application Review" },
                { step: "02", title: "Intro Call" },
                { step: "03", title: "Skill Assessment" },
                { step: "04", title: "Team Interview" },
                { step: "05", title: "Final Discussion" },
                { step: "06", title: "Offer & Onboarding" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#EAECF0] hover:border-[#F59E0B] rounded-[16px] p-[20px_12px] w-full min-h-[108px] h-full flex flex-col justify-center items-center text-center shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 group"
                >
                  <div className="text-[11px] font-['DM_Sans',sans-serif] font-bold tracking-[0.44px] uppercase mb-[6px] text-[#F59E0B]">
                    STEP {item.step}
                  </div>
                  <h4 className="font-['DM_Sans',sans-serif] font-bold text-[13px] leading-[18px] text-[#101828] group-hover:text-[#F59E0B] transition-colors">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </FadeUp>
        </Container>
      </section>

      {/* ─── OUR TEAM SPEAKS ─── */}
      <section className="py-24 bg-white">
        <Container>
          <FadeUp className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#5B5FEF] text-[10px] font-extrabold tracking-wider uppercase mb-4 block">
              OUR TEAM SPEAKS
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0F172A] leading-tight mb-4">
              What it's like to work here.
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "The engineering culture here is genuinely rare. We write code we're proud of, we review each other's work seriously, and we ship to production multiple times a day.",
                initials: "EN",
                name: "[Name]",
                role: "[Title]",
                dept: "Engineering",
                bgColor: "bg-[#334155]", // Slate 700
                textColor: "text-[#F59E0B]"
              },
              {
                quote: "I joined Workzi to work on a product that solves a real problem. I've owned major features end-to-end and presented strategy to leadership. The level of trust here is something I haven't experienced elsewhere.",
                initials: "PR",
                name: "[Name]",
                role: "[Title]",
                dept: "Product",
                bgColor: "bg-[#F59E0B]", // Amber 500
                textColor: "text-[#F59E0B]"
              },
              {
                quote: "The remote culture here actually works. Documentation is excellent, meetings have clear purposes, and I've built real relationships with colleagues across continents.",
                initials: "DE",
                name: "[Name]",
                role: "[Title]",
                dept: "Design",
                bgColor: "bg-[#22C55E]", // Green 500
                textColor: "text-[#F59E0B]"
              }
            ].map((t, idx) => (
              <FadeUp key={idx} delay={0.1 * idx} className="bg-slate-50 rounded-[24px] p-8 shadow-sm flex flex-col justify-between h-full border border-slate-100">
                <div>
                  <div className="text-[#F59E0B] text-2xl font-serif font-black mb-4">"</div>
                  <p className="text-[15px] text-slate-700 font-medium leading-relaxed mb-8">{t.quote}</p>
                </div>
                <div className="pt-6 border-t border-slate-200 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-[15px] ${t.bgColor}`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-slate-900">{t.name}</h4>
                    <p className="text-[12px] font-medium text-slate-500 leading-tight mt-0.5">{t.role}</p>
                    <p className={`text-[11px] font-bold ${t.textColor} mt-1 uppercase tracking-wider`}>{t.dept}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── OPEN POSITIONS ─── */}
      <section id="open-roles" className="py-24 bg-[#F8FAFC]">
        <Container>
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[#5B5FEF] text-[10px] font-extrabold tracking-wider uppercase mb-4 block">
                OPEN ROLES
              </span>
              <h2 className="text-3xl md:text-[40px] font-semibold text-[#0F172A] leading-tight mb-3">
                [X] open positions across [Y] teams.
              </h2>
              <p className="text-[16px] font-medium text-slate-500">
                We're growing. Find where you fit in.
              </p>
            </div>
            <a href="#open-roles" className="bg-[#5B5FEF] hover:bg-[#4F46E5] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md flex items-center gap-2 whitespace-nowrap w-fit shrink-0">
              View all open roles →
            </a>
          </FadeUp>

          <FadeUp delay={0.2} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[
              { title: "Senior Backend Engineer", dept: "Engineering", loc: "Remote" },
              { title: "Product Designer", dept: "Design", loc: "[City] / Remote" },
              { title: "AI Research Engineer", dept: "AI & Analytics", loc: "Remote" },
              { title: "Enterprise Account Executive", dept: "Sales", loc: "[City]" },
              { title: "Customer Success Manager", dept: "CS", loc: "Remote" },
              { title: "Head of Marketing", dept: "Marketing", loc: "[City] / Remote" },
            ].map((role, idx) => (
              <a key={idx} href="#open-roles" className="bg-white border border-slate-200 hover:border-[#5B5FEF] hover:shadow-md rounded-2xl p-6 flex items-center justify-between gap-4 transition-all group">
                <div>
                  <h4 className="text-[17px] font-bold text-slate-900 group-hover:text-[#5B5FEF] transition-colors mb-3">
                    {role.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[12px] font-medium text-slate-500">
                    <span className="border border-slate-200 bg-slate-50 px-3 py-1 rounded-full text-slate-600">{role.dept}</span>
                    <span className="text-slate-300 mx-1">•</span>
                    <span>{role.loc}</span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center group-hover:border-[#5B5FEF] group-hover:text-[#5B5FEF] group-hover:bg-indigo-50 transition-colors shrink-0">
                  <ArrowRight size={18} />
                </div>
              </a>
            ))}
          </FadeUp>
        </Container>
      </section>

      {/* ─── ROLE CTA BANNER ─── */}
      <section className="py-[72px] px-4 md:px-12 lg:px-[128px] bg-[#F8FAFC] relative w-full max-w-[1440px] mx-auto">
        <Container className="max-w-[1184px] mx-auto p-0">
          <div className="w-full min-h-[436.88px] bg-[linear-gradient(106.34deg,#0A0F2E_0%,#161D4A_40%,#1E2560_100%)] rounded-[32px] p-8 md:p-[72px_168px] relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl">

            {/* div.rcb-glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-[300px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(91,95,255,0.15)_0%,rgba(91,95,255,0)_70%)] pointer-events-none z-0" />

            {/* div.rcb-dots */}
            <div className="absolute inset-0 bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.04)_1.96%,rgba(255,255,255,0)_1.96%)] pointer-events-none z-1" />

            {/* div.rcb-inner */}
            <div className="relative z-10 max-w-[848px] w-full flex flex-col items-center text-center gap-[15px] mx-auto">

              {/* h2.rcb-title */}
              <div className="max-w-[600px] w-full flex justify-center">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[64px] tracking-[-1.12px] text-white text-center max-w-[473px]">
                  Help shape the future of HR technology.
                </h2>
              </div>

              {/* p.rcb-sub */}
              <div className="max-w-[460px] w-full flex justify-center">
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-white/55 text-center max-w-[441px]">
                  Work on problems that matter. Build alongside people who care. Grow faster than you thought possible.
                </p>
              </div>

              {/* div.cta-btns */}
              <div className="flex flex-wrap items-center justify-center gap-[12px] pt-[22.7px] w-full">
                <a
                  href="#open-roles"
                  className="w-[188px] h-[52px] px-[24px] py-[14px] bg-white text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] rounded-[100px] inline-flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.08),0_2px_6px_rgba(0,0,0,0.04)] hover:bg-slate-100 hover:scale-[1.03] cursor-pointer whitespace-nowrap"
                >
                  Explore Open Roles
                </a>
                <a
                  href="#our-story"
                  className="w-[160px] h-[52px] px-[24px] py-[12px] bg-transparent text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] border border-white/30 rounded-[100px] inline-flex items-center justify-center transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:scale-[1.03] cursor-pointer whitespace-nowrap"
                >
                  Read Our Story
                </a>
              </div>

            </div>

          </div>
        </Container>
      </section>
    </div>
  );
};

export default CareersPage;
