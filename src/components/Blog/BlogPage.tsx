import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import { ChevronRight, ChevronLeft, ArrowRight, Star, Clock, ChevronDown, Check } from 'lucide-react';

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = '',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const filters = [
  'All Stories', 'HRMS', 'Attendance', 'Payroll', 'Employee Experience',
  'Compliance', 'AI & Automation', 'Remote Work', 'Product Updates', 'Case Studies'
];

const recentStories = [
  {
    bg: 'bg-gradient-to-br from-[#2E2982] to-[#4F46E5]',
    header: 'ATTENDANCE ANALYTICS',
    tag: 'AI & Automation',
    title: 'The Complete Guide to AI-Powered Workforce Analytics for 2026',
    excerpt: 'How modern HR teams are using machine learning to predict absenteeism, optimize scheduling, and eliminate manual data reconciliation.',
    author: 'Sarah R.',
    initials: 'SR',
    color: 'bg-blue-500',
    date: 'May 28, 2026',
    time: '7 min read'
  },
  {
    bg: 'bg-gradient-to-br from-[#0F766E] to-[#10B981]',
    header: 'PAYROLL AUTOMATION',
    tag: 'Payroll',
    title: 'How to Reduce Payroll Processing Time by 40% with Integrated HRMS',
    excerpt: 'Practical steps for HR operations leaders to eliminate manual payroll errors and build a fully automated compensation cycle.',
    author: 'Miguel P.',
    initials: 'MP',
    color: 'bg-emerald-500',
    date: 'May 22, 2026',
    time: '5 min read'
  },
  {
    bg: 'bg-gradient-to-br from-[#C2410C] to-[#F97316]',
    header: 'REMOTE WORKFORCE',
    tag: 'Remote Work',
    title: 'Managing Distributed Teams Across 20+ Time Zones: A Practical HRMS Playbook',
    excerpt: 'Real-world strategies from HR leaders who have successfully built asynchronous attendance workflows for global remote teams.',
    author: 'Laila P.',
    initials: 'LP',
    color: 'bg-orange-500',
    date: 'May 18, 2026',
    time: '9 min read'
  },
  {
    bg: 'bg-gradient-to-br from-[#1D4ED8] to-[#3B82F6]',
    header: 'COMPLIANCE GUIDE',
    tag: 'Compliance',
    title: 'Labour Law Compliance in 2026: What Every HR Manager Needs to Know',
    excerpt: 'A comprehensive breakdown of the new regulations impacting attendance records, overtime calculations, and Time-off entitlements.',
    author: 'Rohit K.',
    initials: 'RK',
    color: 'bg-blue-600',
    date: 'May 14, 2026',
    time: '6 min read'
  },
  {
    bg: 'bg-gradient-to-br from-[#7E22CE] to-[#A855F7]',
    header: 'EMPLOYEE EXPERIENCE',
    tag: 'Employee Experience',
    title: 'Building a Self-Service HR Culture: Lessons from 50 Mid-Market Companies',
    excerpt: 'Why the companies with the highest employee satisfaction scores have one thing in common — powerful self-service HR portals.',
    author: 'Anika P.',
    initials: 'AP',
    color: 'bg-purple-500',
    date: 'May 8, 2026',
    time: '5 min read'
  },
  {
    bg: 'bg-gradient-to-br from-[#1E293B] to-[#334155]',
    header: 'PRODUCT UPDATE',
    tag: 'Product Updates',
    title: 'Workzi June 2026 Release: Smarter Approvals, New Integrations & AI Insights',
    excerpt: 'A walkthrough of everything new in our June platform release — including our long-awaited Slack integration and AI Time-off prediction engine.',
    author: 'Workzi Team',
    initials: 'AT',
    color: 'bg-slate-700',
    date: 'June 2, 2026',
    time: '4 min read'
  }
];

const latestCarousel = [
  {
    gradient: 'bg-[linear-gradient(119.36deg,#1E1B4B_0%,#312E81_100%)]',
    header: 'Predictive Analytics',
    tag: 'AI',
    title: 'Predictive Attendance: How ML Models Are Reducing Absenteeism by 35%',
    date: 'May 30, 2026',
    time: '6 min',
  },
  {
    gradient: 'bg-[linear-gradient(119.36deg,#14532D_0%,#166534_100%)]',
    header: 'Smart Scheduling',
    tag: 'Automation',
    title: 'Automated Shift Planning: A Complete Implementation Guide for Operations Teams',
    date: 'May 24, 2026',
    time: '8 min',
  },
  {
    gradient: 'bg-[linear-gradient(119.36deg,#7C2D12_0%,#9A3412_100%)]',
    header: 'Natural Language HR',
    tag: 'AI',
    title: 'Conversational HR: Using Natural Language to Query Your Workforce Data',
    date: 'May 19, 2026',
    time: '5 min',
  },
  {
    gradient: 'bg-[linear-gradient(119.36deg,#1E3A5F_0%,#1E40AF_100%)]',
    header: 'Anomaly Detection',
    tag: 'Analytics',
    title: 'Real-Time Anomaly Detection: Catching Payroll Errors Before They Happen',
    date: 'May 12, 2026',
    time: '7 min',
  },
  {
    gradient: 'bg-[linear-gradient(119.36deg,#4A044E_0%,#7E22CE_100%)]',
    header: 'AI Onboarding',
    tag: 'AI',
    title: 'AI-Powered Onboarding: Reducing First-Month Attrition with Smart Checklists',
    date: 'May 5, 2026',
    time: '6 min',
  },
];

const BlogPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Stories');
  const [displayedStories, setDisplayedStories] = useState(recentStories);
  const [carouselItems, setCarouselItems] = useState(latestCarousel);
  const filterScrollRef = useRef<HTMLDivElement>(null);

  const scrollCategory = (direction: 'left' | 'right') => {
    if (filterScrollRef.current) {
      const scrollAmount = direction === 'left' ? -250 : 250;
      filterScrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleLoadMore = () => {
    setDisplayedStories(prev => [...prev, ...recentStories]);
  };

  const handleNext = () => {
    setCarouselItems(prev => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const handlePrev = () => {
    setCarouselItems(prev => {
      const last = prev[prev.length - 1];
      const rest = prev.slice(0, prev.length - 1);
      return [last, ...rest];
    });
  };

  return (
    <div className="bg-white min-h-screen pb-0 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* ─── HERO HEADER SECTION ─── */}
      <section className="pt-[120px] pb-[40px] px-4 md:px-12 lg:px-[128px] bg-white w-full">
        <Container className="max-w-[1184px] mx-auto">
          <FadeUp className="flex flex-col items-start gap-[12.6px] max-w-[600px]">
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.15] lg:leading-[60px] tracking-[-1.04px] text-[#111827] text-left">
              Workforce Intelligence <br className="hidden sm:inline" /> &amp; HR Insights
            </h1>
            <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[17px] leading-[26px] sm:leading-[30px] text-[#6B7280] text-left max-w-[600px]">
              Expert guides, product updates, and strategic thinking for modern HR teams and people operations leaders.
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* ─── HERO FEATURED ARTICLE SECTION ─── */}
      <section id="hero-featured" className="py-[40px] px-4 md:px-12 lg:px-[128px] bg-white w-full">
        <Container className="max-w-[1184px] mx-auto">
          <FadeUp delay={0.1} className="w-full border border-[#E5E7EB] rounded-[20px] bg-white overflow-hidden shadow-sm flex flex-col lg:flex-row min-h-[520px]">

            {/* LEFT Column: Content */}
            <div className="lg:w-1/2 p-8 lg:p-[64px_56px] flex flex-col justify-center items-start bg-white relative z-10">
              {/* Eyebrow */}
              <div className="flex items-center gap-[8px] mb-[16px]">
                <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[18px] tracking-[1.1px] uppercase text-[#5B5FFF]">
                  AI &amp; Automation
                </span>
              </div>

              {/* Title */}
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] lg:leading-[48px] tracking-[-0.88px] text-[#111827] text-left max-w-[459px] mb-[16px]">
                How AI is Rewriting the Rules of Attendance Management in 2026
              </h2>

              {/* Description */}
              <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#6B7280] text-left max-w-[420px] mb-[28px]">
                From predictive scheduling to intelligent anomaly detection — discover how modern HRMS platforms are using AI to eliminate manual tracking forever.
              </p>

              {/* Author Row */}
              <div className="w-full border-t border-[#E5E7EB] pt-[24px] mb-[28px] flex flex-wrap items-center justify-between gap-[12px]">
                {/* Author Info */}
                <div className="flex items-center gap-[12px]">
                  <div className="w-[42px] h-[42px] rounded-[21px] bg-[linear-gradient(135deg,#5B5FFF_0%,#818CF8_100%)] flex items-center justify-center shrink-0">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[15px] leading-[24px] text-white">
                      KR
                    </span>
                  </div>
                  <div className="flex flex-col items-start text-left">
                    <h4 className="font-['Inter',sans-serif] font-bold text-[14px] leading-[22px] text-[#111827]">
                      Kavya Rajan
                    </h4>
                    <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[#6B7280]">
                      Head of Product, Workzi
                    </p>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="flex items-center gap-[10px]">
                  <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[#6B7280]">
                    June 5, 2026
                  </span>
                  <span className="w-[4px] h-[4px] bg-[#E5E7EB] rounded-[2px]" />
                  <div className="flex items-center gap-[4px]">
                    <Clock className="w-[13px] h-[13px] text-[#6B7280]" />
                    <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[#6B7280]">
                      8 min read
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div>
                <a
                  href="#blog-article"
                  className="w-[208px] h-[50px] px-[28px] py-[13px] gap-[7px] bg-[#5B5FFF] hover:bg-[#4F46E5] text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[24px] rounded-[54px] shadow-[0px_4px_14px_rgba(91,95,255,0.3)] inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                >
                  <span>Continue Reading</span>
                  <ArrowRight className="w-[15px] h-[15px] text-white" strokeWidth={2.2} />
                </a>
              </div>
            </div>

            {/* RIGHT Column: Visual Mockup Placeholder */}
            <div className="lg:w-1/2 p-8 lg:p-[48px] bg-[linear-gradient(159.84deg,#E0E7FF_0%,#C7D2FE_40%,#DDD6FE_100%)] relative flex flex-col justify-center items-center min-h-[480px]">

              {/* Featured Badge Overlay */}
              <div className="absolute top-[24px] right-[24px] bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.08),0px_2px_6px_rgba(0,0,0,0.04)] rounded-[12px] px-[16px] py-[12px] flex items-center gap-[10px] z-20">
                <div className="w-[34px] h-[34px] rounded-[9px] bg-[#EDEDFF] flex items-center justify-center shrink-0">
                  <Star className="w-[16px] h-[16px] text-[#5B5FFF] fill-[#5B5FFF]" />
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[15px] leading-[24px] text-[#111827]">
                    Featured
                  </span>
                  <span className="font-['Inter',sans-serif] font-normal text-[11px] leading-[18px] text-[#6B7280]">
                    Editor's Pick
                  </span>
                </div>
              </div>

              {/* Mini Dashboard Card & Anomaly Alert */}
              <div className="w-full max-w-[495px] flex flex-col gap-[16px] relative z-10 pt-8 sm:pt-0">
                {/* Overview Card */}
                <div className="bg-white rounded-[16px] p-[19px_20px_20px] shadow-[0px_12px_40px_rgba(0,0,0,0.1)] flex flex-col gap-[12px] text-left">
                  <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[18px] tracking-[0.44px] uppercase text-[#6B7280]">
                    ATTENDANCE OVERVIEW
                  </span>
                  <div className="grid grid-cols-3 gap-[12px] pb-[4px]">
                    <div className="bg-[#F8FAFC] rounded-[8px] p-[10px] flex flex-col items-center justify-center">
                      <span className="font-['Inter',sans-serif] font-extrabold text-[20px] leading-[32px] text-[#5B5FFF]">
                        98.4%
                      </span>
                      <span className="font-['Inter',sans-serif] font-normal text-[10px] leading-[16px] text-[#6B7280]">
                        Present
                      </span>
                    </div>
                    <div className="bg-[#F8FAFC] rounded-[8px] p-[10px] flex flex-col items-center justify-center">
                      <span className="font-['Inter',sans-serif] font-extrabold text-[20px] leading-[32px] text-[#10B981]">
                        1,240
                      </span>
                      <span className="font-['Inter',sans-serif] font-normal text-[10px] leading-[16px] text-[#6B7280]">
                        Employees
                      </span>
                    </div>
                    <div className="bg-[#F8FAFC] rounded-[8px] p-[10px] flex flex-col items-center justify-center">
                      <span className="font-['Inter',sans-serif] font-extrabold text-[20px] leading-[32px] text-[#F59E0B]">
                        14
                      </span>
                      <span className="font-['Inter',sans-serif] font-normal text-[10px] leading-[16px] text-[#6B7280]">
                        On Time-off
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-[#F8FAFC] h-[6px] rounded-[6px] overflow-hidden relative">
                    <div className="bg-[linear-gradient(90deg,#5B5FFF_0%,#818CF8_100%)] h-full w-[84%] rounded-[6px]" />
                  </div>
                </div>

                {/* AI Anomaly Alert */}
                <div className="bg-white rounded-[12px] p-[16px] shadow-[0px_6px_20px_rgba(0,0,0,0.08)] flex items-center gap-[12px] text-left">
                  <div className="w-[36px] h-[36px] rounded-[10px] bg-[#DCFCE7] flex items-center justify-center shrink-0">
                    <Check className="w-[18px] h-[18px] text-[#10B981]" strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col items-start">
                    <h5 className="font-['Inter',sans-serif] font-bold text-[12px] leading-[19px] text-[#111827]">
                      AI anomaly detected
                    </h5>
                    <p className="font-['Inter',sans-serif] font-normal text-[11px] leading-[18px] text-[#6B7280]">
                      Unusual check-in pattern flagged
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </FadeUp>
        </Container>
      </section>

      {/* ─── CATEGORY FILTERS SECTION ─── */}
      <section id="category-filter" className="py-5 bg-white border-b border-[#E5E7EB] sticky top-[72px] z-30">
        <Container className="max-w-[1184px] mx-auto px-4 md:px-8">
          <div className="flex items-center gap-3 w-full">
            {/* Left Scroll Arrow */}
            <button
              onClick={() => scrollCategory('left')}
              aria-label="Scroll left"
              className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:shadow-xs transition-all shrink-0 cursor-pointer"
            >
              <ChevronLeft size={16} strokeWidth={2.2} />
            </button>

            {/* Scrollable Container */}
            <div
              ref={filterScrollRef}
              className="flex items-center gap-2.5 overflow-x-auto scroll-smooth py-1 flex-1 [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 sm:px-5 py-2 rounded-[100px] text-[13px] sm:text-[14px] leading-[18px] font-bold transition-all border whitespace-nowrap inline-flex items-center justify-center shrink-0 cursor-pointer ${activeFilter === filter
                      ? 'bg-[#5B5FFF] border-[#5B5FFF] text-white shadow-xs font-bold'
                      : 'bg-white border-[#E5E7EB] text-[#6B7280] hover:border-slate-300 hover:text-[#111827]'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Right Scroll Arrow */}
            <button
              onClick={() => scrollCategory('right')}
              aria-label="Scroll right"
              className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-slate-300 hover:shadow-xs transition-all shrink-0 cursor-pointer"
            >
              <ChevronRight size={16} strokeWidth={2.2} />
            </button>
          </div>
        </Container>
      </section>

      {/* ─── RECENT STORIES GRID ─── */}
      <div className="py-16">
        <Container className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Recent Stories</h2>
              <p className="text-[13px] text-slate-500 font-medium">The latest thinking from the Workzi team</p>
            </div>
            <a href="#all-stories" className="hidden sm:flex items-center gap-1.5 text-[13px] font-bold text-[#5B5FEF] hover:text-[#4F46E5] transition-colors">
              View all stories <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedStories.map((story, idx) => (
              <FadeUp key={idx} delay={(idx % 6) * 0.08} className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all group flex flex-col cursor-pointer h-full">
                {/* Card Header Graphic */}
                <div className={`h-48 ${story.bg} flex items-center justify-center p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <h3 className="relative z-10 text-[11px] font-extrabold text-white tracking-[0.2em] uppercase opacity-90 text-center">
                    {story.header}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="text-[11px] font-bold text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">
                      {story.tag}
                    </span>
                  </div>

                  <h3 className="text-[18px] font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#5B5FEF] transition-colors line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-[14px] text-slate-500 leading-relaxed font-medium mb-6 line-clamp-3 flex-1">
                    {story.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full ${story.color} flex items-center justify-center text-white font-bold text-[11px]`}>
                        {story.initials}
                      </div>
                      <div>
                        <h4 className="text-[12px] font-bold text-slate-900">{story.author}</h4>
                        <p className="text-[11px] text-slate-400 font-medium">{story.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <Clock size={12} />
                      <span className="text-[11px] font-medium">{story.time}</span>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <button
              onClick={handleLoadMore}
              className="bg-white border border-slate-200 hover:border-[#5B5FFF] hover:text-[#5B5FFF] text-slate-900 text-[13px] font-bold px-6 py-3 rounded-full transition-all shadow-sm flex items-center gap-2 cursor-pointer hover:shadow-md active:scale-95 group"
            >
              <span>Load more articles</span>
              <ChevronDown size={14} className="text-slate-500 group-hover:text-[#5B5FFF]" />
            </button>
          </div>
        </Container>
      </div>

      {/* ─── LATEST IN AI & AUTOMATION CAROUSEL ─── */}
      <section id="ai-carousel" className="py-[72px] bg-[#F8FAFC] w-full">
        <Container className="max-w-[1280px] mx-auto px-4 sm:px-[48px] flex flex-col items-start gap-[36px]">
          {/* div.carousel-header */}
          <div className="w-full max-w-[1184px] flex flex-col sm:flex-row items-start sm:items-end justify-between gap-[24px]">
            {/* div */}
            <div className="flex flex-col items-start gap-[5.25px]">
              <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[30px] leading-[34px] text-[#111827] text-left">
                Latest in AI &amp; Workforce Automation
              </h2>
              <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[24px] text-[#6B7280] text-left max-w-[322px]">
                How intelligent systems are reshaping people operations across every industry.
              </p>
            </div>

            {/* div.carousel-nav */}
            <div className="flex items-center gap-[10px] shrink-0">
              <button
                id="carousel-prev"
                onClick={handlePrev}
                aria-label="Previous story"
                className="w-[42px] h-[42px] rounded-[21px] bg-white border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#5B5FFF] hover:border-[#5B5FFF] transition-all cursor-pointer shadow-xs"
              >
                <ChevronLeft size={18} strokeWidth={2.2} />
              </button>
              <button
                id="carousel-next"
                onClick={handleNext}
                aria-label="Next story"
                className="w-[42px] h-[42px] rounded-[21px] bg-white border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:text-[#5B5FFF] hover:border-[#5B5FFF] transition-all cursor-pointer shadow-xs"
              >
                <ChevronRight size={18} strokeWidth={2.2} />
              </button>
            </div>
          </div>

          {/* div#carousel-track */}
          <div
            id="carousel-track"
            className="flex items-center gap-[20px] overflow-x-auto w-full max-w-[1184px] py-1 [ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {carouselItems.map((item, idx) => (
              <div
                key={`${item.title}-${idx}`}
                className="w-[300px] min-w-[300px] bg-white border border-[#E5E7EB] rounded-[16px] overflow-hidden flex flex-col cursor-pointer transition-all duration-300 hover:shadow-md hover:border-slate-300 text-left shrink-0"
              >
                {/* div.cc-img-wrap */}
                <div className={`w-[298px] min-w-[298px] h-[167.63px] min-h-[160px] ${item.gradient} flex items-center justify-center p-4 relative`}>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] leading-[19px] text-white/60 text-center">
                    {item.header}
                  </h3>
                </div>

                {/* div.cc-body */}
                <div className="p-[16px_18px] flex flex-col items-start gap-[7.3px] w-full min-h-[155.39px]">
                  {/* span.tag */}
                  <span className="inline-flex items-center px-[11px] py-[3.8px] bg-white border border-[#E5E7EB] rounded-[100px]">
                    <span className="font-['Inter',sans-serif] font-semibold text-[11px] leading-[18px] tracking-[0.44px] text-[#6B7280]">
                      {item.tag}
                    </span>
                  </span>

                  {/* h4.cc-title */}
                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[20px] text-[#111827] min-h-[40px] line-clamp-2">
                    {item.title}
                  </h4>

                  {/* div.cc-meta */}
                  <div className="flex items-center gap-[8px] pt-[2.2px] font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[#6B7280] mt-auto">
                    <Clock size={12} className="text-[#6B7280]" />
                    <span>{item.time} · {item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── NEWSLETTER CTA (div.role-cta-banner) ─── */}
      <section className="py-20 bg-white w-full">
        <Container className="max-w-[1184px] mx-auto px-4 md:px-8">
          <FadeUp>
            <div className="w-full min-h-[364.18px] bg-[linear-gradient(106.34deg,#0A0F2E_0%,#161D4A_40%,#1E2560_100%)] rounded-[32px] p-8 md:p-[72px_64px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">

              {/* div.rcb-glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-[300px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(91,95,255,0.15)_0%,rgba(91,95,255,0)_70%)] pointer-events-none z-0" />

              {/* div.rcb-dots */}
              <div className="absolute inset-0 bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.04)_1.96%,rgba(255,255,255,0)_1.96%)] pointer-events-none z-1" />

              {/* Frame 1984079013 / Left Column */}
              <div className="relative z-10 max-w-[460px] w-full flex flex-col items-start gap-[16px] text-left">
                {/* h2.rcb-title */}
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[30px] sm:text-[34px] lg:text-[36px] leading-[39px] tracking-[-1.12px] text-white">
                  Get weekly workforce insights delivered to your inbox.
                </h2>
                {/* p.rcb-sub */}
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-white/55">
                  Join 14,000+ HR leaders and people operations professionals who read our weekly digest. No spam — just the insights that matter.
                </p>
              </div>

              {/* Right Column / Form */}
              <div className="relative z-10 max-w-[495px] w-full flex flex-col items-start gap-[10px]">
                {/* div.nl-form */}
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center gap-[10px] w-full">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="w-full sm:w-[340px] h-[45px] px-[16px] py-[13px] bg-white border border-[#E5E7EB] rounded-[10px] text-[14px] leading-[17px] text-[#111827] placeholder:text-[#757575] font-['Inter',sans-serif] outline-none shadow-xs"
                  />
                  <button
                    type="submit"
                    className="w-[145px] h-[45px] px-[24px] py-[13px] bg-[#5B5FFF] rounded-[10px] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] text-white flex items-center justify-center gap-[7px] hover:bg-[#4F46E5] hover:scale-[1.02] transition-all duration-200 cursor-pointer shrink-0 shadow-sm"
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={15} className="text-white" strokeWidth={2.2} />
                  </button>
                </form>
                {/* p.nl-note */}
                <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[#6B7280] text-left">
                  By subscribing, you agree to our Privacy Policy. Unsubscribe at any time.
                </p>
              </div>

            </div>
          </FadeUp>
        </Container>
      </section>

    </div>
  );
};

export default BlogPage;
