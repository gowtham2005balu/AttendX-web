import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import { Play, ArrowRight, Star, CheckCircle, Search, Briefcase, Zap, Users, Sparkles, Send } from 'lucide-react';

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

      {/* ─── 1. CAREERS HERO SECTION ─── */}
      <section id="hero" className="relative w-full bg-white overflow-hidden pt-[90px] lg:pt-[110px] pb-[60px] flex items-center">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* LEFT Column: Content */}
          <div className="py-6 lg:py-8 flex flex-col justify-center items-start text-left bg-white z-10">
            <FadeUp>
              {/* H1 Title */}
              <h1 className="font-['DM_Sans',sans-serif] font-semibold text-[38px] sm:text-[48px] lg:text-[58px] leading-[1.08] lg:leading-[63px] tracking-[-1.74px] text-[#101828] max-w-[540px] mb-[20px]">
                Build the <span className="text-[#F59E0B]">Future</span> of Workforce Management
              </h1>

              {/* Subtitle / Description */}
              <p className="font-['DM_Sans',sans-serif] font-normal text-[16px] sm:text-[17px] leading-[30px] text-[#667085] max-w-[480px] mb-[44px]">
                At Workzi, we’re building smarter ways for businesses to manage their people, schedules, attendance, and everyday workforce operations.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-[12px] w-full max-w-[528px]">
                <a
                  href="/open-roles"
                  className="inline-flex items-center justify-center gap-[8px] bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[28px] py-[13px] h-[52px] rounded-[20px] shadow-[0px_1px_3px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <Search className="w-[16px] h-[16px] text-white" />
                  <span>View Open Positions</span>
                </a>
                <a
                  href="#why-workzi"
                  className="inline-flex items-center justify-center bg-white hover:bg-slate-50 border border-[#D0D5DD] text-[#101828] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] px-[28px] py-[13px] h-[52px] rounded-[20px] transition-all duration-300 cursor-pointer"
                >
                  <span>Why Workzi</span>
                </a>
              </div>
            </FadeUp>
          </div>

          {/* RIGHT Column: Visual Image Card */}
          <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] rounded-[16px] overflow-hidden shadow-2xl border border-slate-200/90 group">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="Workzi team collaborating on the future of workforce management"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

        </div>
      </section>

      {/* ─── 2. INTRO / ABOUT WORKZI ─── */}
      <section id="our-story" className="py-[100px] lg:py-[120px] px-4 md:px-12 lg:px-[128px] bg-white">
        <Container className="max-w-[1184px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[64px] items-start">

            {/* Left Content */}
            <div className="flex flex-col items-start text-left">
              <FadeUp>
                {/* Eyebrow */}
                <div className="flex items-center gap-[7px] mb-[12px]">
                  <span className="font-['DM_Sans',sans-serif] font-bold text-[11px] leading-[18px] tracking-[1.1px] uppercase text-[#F59E0B]">
                    Intro / About Workzi
                  </span>
                </div>

                {/* Section Title */}
                <h2 className="font-['DM_Sans',sans-serif] font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.15] lg:leading-[55px] tracking-[-0.96px] text-[#101828] mb-[24px] max-w-[552px]">
                  Work That <span className="font-['Instrument_Serif',serif] italic font-normal text-[#64748B] text-[1.15em]">Makes an Impact</span>
                </h2>

                {/* Paragraphs */}
                <div className="space-y-[19.4px] font-['DM_Sans',sans-serif] font-normal text-[16px] leading-[30px] text-[#667085] max-w-[552px] mb-[28px]">
                  <p>
                    Workzi is creating technology that simplifies the way businesses manage their workforce. From attendance and scheduling to real-time workforce visibility, we bring smarter tools together to make everyday operations easier.
                  </p>
                  <p>
                    Join us to work on meaningful products, solve real business challenges, and help shape the future of workforce management.
                  </p>
                </div>

                {/* Quote Box */}
                <div className="bg-[#FEF3C7] border-l-[4px] border-[#F59E0B] rounded-r-[16px] p-[24px_28px] flex flex-col gap-[12px] max-w-[552px] mb-[24px] text-left shadow-sm">
                  <p className="font-['DM_Sans',sans-serif] font-bold text-[18px] leading-[27px] text-[#101828]">
                    "The best products are built by people who care about the problem as much as they care about the craft."
                  </p>
                  <cite className="font-['DM_Sans',sans-serif] font-normal text-[14px] leading-[22px] text-[#667085] not-italic">
                    — The Workzi Leadership Team
                  </cite>
                </div>
              </FadeUp>
            </div>

            {/* Right Visual / Highlights */}
            <div className="flex flex-col gap-[28px] max-w-[552px]">
              <FadeUp delay={0.2}>
                {/* Video / Visual Card */}
                <div className="bg-[#2F4253] rounded-[28px] h-[310.5px] w-full mb-[24px] flex flex-col justify-center items-center relative overflow-hidden group cursor-pointer shadow-[0px_12px_40px_rgba(16,24,40,0.1),0px_4px_12px_rgba(16,24,40,0.05)] bg-[linear-gradient(113.98deg,#1A1D4A_0%,#2D3070_45%,#1E3060_80%,#252050_100%)]">
                  <div className="w-[70px] h-[70px] rounded-[35px] bg-white/95 text-[#2F4253] flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                    <Play className="w-[26px] h-[26px] fill-[#2F4253] text-[#2F4253]" />
                  </div>
                  <div className="absolute bottom-[20px] left-[24px] font-['DM_Sans',sans-serif] font-semibold text-[16px] leading-[26px] text-white/90 z-10">
                    Life at Workzi
                  </div>
                </div>

                {/* Values summary pill */}
                <div className="bg-[#F8FAFC] border border-[#EAECF0] rounded-[24px] p-6 text-left">
                  <h4 className="font-bold text-[16px] text-[#101828] mb-2">Meaningful Impact at Scale</h4>
                  <p className="text-[14px] leading-relaxed text-[#667085]">
                    Every feature built at Workzi directly touches daily workforce operations, empowering managers and employees with clarity and ease.
                  </p>
                </div>
              </FadeUp>
            </div>

          </div>
        </Container>
      </section>

      {/* ─── 3. WHY BUILD WITH WORKZI ─── */}
      <section id="why-workzi" className="py-24 bg-[#F8FAFC]">
        <Container>
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5B5FEF] text-[11px] font-extrabold tracking-wider uppercase mb-3 block">
              WHY BUILD WITH WORKZI?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101828] leading-tight mb-4">
              Why Build With Workzi?
            </h2>
            <p className="text-[16px] font-normal text-[#667085] leading-relaxed max-w-2xl mx-auto">
              Be part of a growing product team where ideas turn into solutions and every contribution helps improve the way businesses work.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 01 — Build Real Solutions */}
            <FadeUp delay={0.1} className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md hover:border-[#5B5FEF]/40 transition-all duration-300 group">
              <div>
                <div className="text-[32px] font-black text-[#5B5FEF] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                  01
                </div>
                <h3 className="text-[20px] font-bold text-[#101828] mb-3 group-hover:text-[#5B5FEF] transition-colors">
                  Build Real Solutions
                </h3>
                <p className="text-[15px] text-[#667085] font-normal leading-relaxed">
                  Work on products designed to solve everyday workforce and operational challenges.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#5B5FEF]">
                <span>Solve Everyday Challenges</span>
              </div>
            </FadeUp>

            {/* 02 — Learn & Grow */}
            <FadeUp delay={0.2} className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md hover:border-[#F59E0B]/50 transition-all duration-300 group">
              <div>
                <div className="text-[32px] font-black text-[#F59E0B] font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                  02
                </div>
                <h3 className="text-[20px] font-bold text-[#101828] mb-3 group-hover:text-[#F59E0B] transition-colors">
                  Learn &amp; Grow
                </h3>
                <p className="text-[15px] text-[#667085] font-normal leading-relaxed">
                  Take on new challenges, develop your skills, and grow alongside an evolving technology product.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[#F59E0B]">
                <span>Continuous Evolution</span>
              </div>
            </FadeUp>

            {/* 03 — Make an Impact */}
            <FadeUp delay={0.3} className="bg-white rounded-[24px] p-8 shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md hover:border-emerald-500/50 transition-all duration-300 group">
              <div>
                <div className="text-[32px] font-black text-emerald-600 font-['Plus_Jakarta_Sans',sans-serif] mb-4">
                  03
                </div>
                <h3 className="text-[20px] font-bold text-[#101828] mb-3 group-hover:text-emerald-600 transition-colors">
                  Make an Impact
                </h3>
                <p className="text-[15px] text-[#667085] font-normal leading-relaxed">
                  Your ideas and work can directly influence the product, the team, and the businesses we serve.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                <span>Direct Influence</span>
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ─── 4. WORK CULTURE SECTION ─── */}
      <section id="culture" className="py-24 bg-white">
        <Container>
          <div className="max-w-5xl mx-auto bg-[linear-gradient(135deg,#0A0D2C_0%,#181E4B_50%,#0F1535_100%)] rounded-[32px] p-8 md:p-14 text-white relative overflow-hidden shadow-2xl">
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-[#5B5FEF]/20 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#F59E0B]/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <FadeUp className="lg:col-span-7">
                <span className="text-[#F59E0B] text-[11px] font-extrabold tracking-wider uppercase mb-3 block">
                  WORK CULTURE
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold leading-tight mb-5 text-white">
                  A Place to Learn, Create &amp; Grow
                </h2>
                <p className="text-[16px] text-slate-300 leading-relaxed font-normal">
                  We believe great products are built by people who are curious, collaborative, and willing to take ownership. At Workzi, we encourage fresh ideas, open communication, continuous learning, and a practical approach to solving problems.
                </p>
              </FadeUp>

              <FadeUp delay={0.2} className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Collaborate openly", desc: "Transparent discussions and shared goals across every function." },
                  { title: "Take ownership", desc: "Autonomy to solve problems and own outcomes from end to end." },
                  { title: "Keep learning", desc: "Curiosity is rewarded and continuous skill growth is prioritized." },
                  { title: "Think customer-first", desc: "Every solution is built to deliver real value to the businesses we serve." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-all">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] mb-3" />
                    <h4 className="text-[15px] font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-[12px] text-slate-300 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── 5. TEAMS / OPPORTUNITIES SECTION ─── */}
      <section className="py-24 bg-[#F8FAFC]">
        <Container>
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5B5FEF] text-[11px] font-extrabold tracking-wider uppercase mb-3 block">
              TEAMS &amp; OPPORTUNITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101828] leading-tight mb-4">
              Find Your Place at Workzi
            </h2>
            <p className="text-[16px] font-normal text-[#667085] leading-relaxed max-w-2xl mx-auto">
              Whether you’re passionate about technology, product, design, sales, marketing, or business operations, there’s room to contribute and grow at Workzi.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Technology */}
            <FadeUp delay={0.1} className="bg-white rounded-[24px] p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#5B5FEF] flex items-center justify-center mb-6">
                  <Zap size={22} />
                </div>
                <h3 className="text-[18px] font-bold text-[#101828] mb-3">Technology</h3>
                <p className="text-[14px] text-[#667085] leading-relaxed">
                  Build reliable and scalable solutions that power modern workforce management.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[12px] font-semibold text-[#5B5FEF]">
                Engineering &amp; Infrastructure
              </div>
            </FadeUp>

            {/* Product & Design */}
            <FadeUp delay={0.2} className="bg-white rounded-[24px] p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#F59E0B] flex items-center justify-center mb-6">
                  <Star size={22} />
                </div>
                <h3 className="text-[18px] font-bold text-[#101828] mb-3">Product &amp; Design</h3>
                <p className="text-[14px] text-[#667085] leading-relaxed">
                  Create simple, intuitive experiences that solve real workplace challenges.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[12px] font-semibold text-[#F59E0B]">
                Product, UX &amp; UI
              </div>
            </FadeUp>

            {/* Business & Growth */}
            <FadeUp delay={0.3} className="bg-white rounded-[24px] p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                  <Users size={22} />
                </div>
                <h3 className="text-[18px] font-bold text-[#101828] mb-3">Business &amp; Growth</h3>
                <p className="text-[14px] text-[#667085] leading-relaxed">
                  Help businesses discover, understand, and adopt smarter workforce solutions.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[12px] font-semibold text-emerald-600">
                Sales, Marketing &amp; Success
              </div>
            </FadeUp>

            {/* Operations */}
            <FadeUp delay={0.4} className="bg-white rounded-[24px] p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                  <Briefcase size={22} />
                </div>
                <h3 className="text-[18px] font-bold text-[#101828] mb-3">Operations</h3>
                <p className="text-[14px] text-[#667085] leading-relaxed">
                  Keep teams, processes, and experiences moving forward efficiently.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-[12px] font-semibold text-purple-600">
                People Ops &amp; Strategy
              </div>
            </FadeUp>
          </div>
        </Container>
      </section>

      {/* ─── HOW WE HIRE ─── */}
      <section className="py-24 lg:py-28 bg-white">
        <Container>
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5B5FEF] text-[11px] font-extrabold tracking-wider uppercase mb-3 block">
              HOW WE HIRE
            </span>
            <h2 className="text-3xl md:text-[40px] font-semibold text-[#0F172A] leading-tight mb-4">
              Clear, Fast, and Respectful of Your Time
            </h2>
            <p className="text-[16px] font-medium text-slate-500 leading-relaxed max-w-xl mx-auto">
              Our hiring process is transparent from start to finish. We value open communication at every step.
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

      {/* ─── 6. OPEN POSITIONS SECTION ─── */}
      <section id="open-roles" className="py-24 bg-[#F8FAFC]">
        <Container>
          <FadeUp className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[#5B5FEF] text-[11px] font-extrabold tracking-wider uppercase mb-3 block">
                OPEN POSITIONS
              </span>
              <h2 className="text-3xl md:text-[40px] font-bold text-[#101828] leading-tight mb-3">
                Explore Opportunities
              </h2>
              <p className="text-[16px] font-normal text-[#667085]">
                We’re always looking for curious and motivated people who want to build, learn, and make a difference.
              </p>
            </div>
            <a
              href="/open-roles"
              className="bg-[#5B5FEF] hover:bg-[#4F46E5] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all shadow-md flex items-center gap-2 whitespace-nowrap w-fit shrink-0"
            >
              View all open roles →
            </a>
          </FadeUp>

          {/* Job listings */}
          <FadeUp delay={0.2} className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10">
            {[
              { title: "Senior Backend Engineer", dept: "Technology", loc: "Remote" },
              { title: "Product Designer", dept: "Product & Design", loc: "Hybrid / Remote" },
              { title: "AI Research Engineer", dept: "Technology", loc: "Remote" },
              { title: "Enterprise Account Executive", dept: "Business & Growth", loc: "On-site" },
              { title: "Customer Success Specialist", dept: "Business & Growth", loc: "Remote" },
              { title: "Operations Coordinator", dept: "Operations", loc: "Hybrid" },
            ].map((role, idx) => (
              <a key={idx} href="/open-roles" className="bg-white border border-slate-200 hover:border-[#5B5FEF] hover:shadow-md rounded-2xl p-6 flex items-center justify-between gap-4 transition-all group">
                <div>
                  <h4 className="text-[17px] font-bold text-[#101828] group-hover:text-[#5B5FEF] transition-colors mb-3">
                    {role.title}
                  </h4>
                  <div className="flex items-center gap-2 text-[12px] font-medium text-[#667085]">
                    <span className="border border-slate-200 bg-slate-50 px-3 py-1 rounded-full text-slate-700">{role.dept}</span>
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

          {/* If there are no current openings / Share Profile Banner */}
          <FadeUp delay={0.3} className="bg-white border border-slate-200/90 rounded-[24px] p-8 md:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full mb-3">
                <span>No Open Positions Right Now in your field?</span>
              </div>
              <h3 className="text-[20px] font-bold text-[#101828] mb-2">
                Don’t see the right opportunity?
              </h3>
              <p className="text-[15px] text-[#667085] leading-relaxed">
                We’re always interested in meeting talented people. Send us your profile and tell us how you could contribute to Workzi.
              </p>
            </div>
            <a
              href="/apply"
              className="inline-flex items-center justify-center gap-2 bg-[#101828] hover:bg-slate-800 text-white font-semibold text-[15px] px-7 py-3.5 rounded-full transition-all shadow-sm hover:scale-[1.02] shrink-0 cursor-pointer"
            >
              <span>Share Your Profile</span>
              <Send size={16} />
            </a>
          </FadeUp>
        </Container>
      </section>

      {/* ─── 7. REPLACE EMPLOYEE TESTIMONIALS (MORE THAN JUST A JOB) ─── */}
      <section className="py-24 bg-white">
        <Container>
          <FadeUp className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#5B5FEF] text-[11px] font-extrabold tracking-wider uppercase mb-3 block">
              WORKZI EXPERIENCE
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-[#101828] leading-tight mb-4">
              More Than Just a Job
            </h2>
            <p className="text-[16px] font-normal text-[#667085] leading-relaxed max-w-2xl mx-auto">
              At Workzi, you’ll have the opportunity to work on a growing product, collaborate with different teams, take ownership of your work, and continuously learn along the way.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Learn continuously.",
                quote: "Every challenge is an opportunity to grow.",
                detail: "Expand your skill set in an environment that actively encourages asking questions, taking initiative, and exploring new ideas.",
                badge: "Continuous Learning",
                color: "border-indigo-100 bg-indigo-50/30",
                accent: "text-[#5B5FEF]"
              },
              {
                title: "Build meaningfully.",
                quote: "Work on solutions that address real business needs.",
                detail: "Design and implement tools that solve real operational hurdles, making modern workforce operations genuinely effortless.",
                badge: "High Ownership",
                color: "border-amber-100 bg-amber-50/30",
                accent: "text-[#F59E0B]"
              },
              {
                title: "Grow together.",
                quote: "Success comes from people working towards a shared goal.",
                detail: "Celebrate shared wins, learn collectively through mutual support, and thrive in a culture that genuinely puts people first.",
                badge: "Shared Success",
                color: "border-emerald-100 bg-emerald-50/30",
                accent: "text-emerald-600"
              }
            ].map((item, idx) => (
              <FadeUp key={idx} delay={0.1 * idx} className={`rounded-[24px] p-8 shadow-sm flex flex-col justify-between h-full border ${item.color} bg-white hover:shadow-md transition-all duration-300`}>
                <div>
                  <div className="text-[#F59E0B] text-2xl font-serif font-black mb-3">"</div>
                  <h3 className={`text-[19px] font-bold ${item.accent} mb-2`}>
                    {item.title}
                  </h3>
                  <p className="text-[16px] text-slate-800 font-semibold leading-relaxed mb-4">
                    {item.quote}
                  </p>
                  <p className="text-[14px] text-[#667085] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[12px] font-semibold text-slate-500 uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <CheckCircle className={`w-5 h-5 ${item.accent}`} />
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── 8. FINAL CTA SECTION ─── */}
      <section className="py-[72px] px-4 md:px-12 lg:px-[128px] bg-[#F8FAFC] relative w-full max-w-[1440px] mx-auto">
        <Container className="max-w-[1184px] mx-auto p-0">
          <div className="w-full min-h-[420px] bg-[linear-gradient(106.34deg,#0A0F2E_0%,#161D4A_40%,#1E2560_100%)] rounded-[32px] p-8 md:p-[72px_120px] relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl">

            {/* Glowing Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-[300px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(91,95,255,0.15)_0%,rgba(91,95,255,0)_70%)] pointer-events-none z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.04)_1.96%,rgba(255,255,255,0)_1.96%)] pointer-events-none z-1" />

            {/* Inner Content */}
            <div className="relative z-10 max-w-[848px] w-full flex flex-col items-center text-center gap-[15px] mx-auto">

              <div className="max-w-[650px] w-full flex justify-center">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[48px] leading-[1.2] lg:leading-[58px] tracking-[-1.12px] text-white text-center">
                  Ready to Build What’s Next?
                </h2>
              </div>

              <div className="max-w-[500px] w-full flex justify-center">
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-white/70 text-center">
                  Join Workzi and help shape smarter, simpler workforce management for businesses.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-[14px] pt-[20px] w-full">
                <a
                  href="/open-roles"
                  className="h-[52px] px-[32px] py-[14px] bg-white text-[#5C5CFF] font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] rounded-[100px] inline-flex items-center justify-center transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:bg-slate-100 hover:scale-[1.03] cursor-pointer whitespace-nowrap"
                >
                  Join Workzi
                </a>
                <a
                  href="/apply"
                  className="h-[52px] px-[28px] py-[12px] bg-transparent text-white font-['DM_Sans',sans-serif] font-semibold text-[15px] leading-[24px] border border-white/30 rounded-[100px] inline-flex items-center justify-center transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:scale-[1.03] cursor-pointer whitespace-nowrap"
                >
                  Share Your Profile
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
