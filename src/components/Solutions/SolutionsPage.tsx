import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../Container';
import {
  Check,
  ChevronDown,
  Star,
  ArrowRight,
  Users,
  BookOpen,
  Clock,
  Calendar,
  BarChart2,
  Shield,
  Smartphone,
  Layers,
  Globe,
  Settings,
  Activity,
  UserCheck,
  Lock,
  FileText,
  Bookmark,
  ChevronRight,
  Sparkles,
  Plus,
  X,
} from 'lucide-react';

/* â”€â”€â”€ Fade-up animation wrapper â”€â”€â”€ */
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

/* â”€â”€â”€ Pill label â”€â”€â”€ */
const Pill: React.FC<{ children: React.ReactNode; color?: string }> = ({
  children,
  color = 'bg-emerald-50 text-emerald-700 border border-emerald-200/50',
}) => (
  <span className={`inline-flex items-center gap-1.5 ${color} text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-4`}>
    {children}
  </span>
);

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SECTION 1 â€” HERO WITH CAMPUS BG & DASHBOARD WIDGET
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const SolutionsHero: React.FC = () => (
  <section className="relative flex flex-col items-center justify-start bg-white pt-[90px] min-h-[640px] lg:min-h-[855px] pb-16 lg:pb-[220px] overflow-visible z-20 isolate">
    {/* Campus Background Image with dark overlay */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img
        src="/solutions-assets/hero.image.png"
        alt="Campus background"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/25 z-10" />
    </div>

    {/* Text content centered at top */}
    <Container className="relative z-20 text-center flex flex-col items-center max-w-[1440px] px-4">
      <FadeUp className="flex flex-col items-center w-full max-w-[1440px]">

        {/* div.feat-badge */}
        <div className="bg-[#EEEEFF] border border-[#5B5FFF]/20 rounded-full px-[16px] py-[6px] mb-[18px] inline-flex items-center justify-center">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] leading-[15px] text-[#5B5FFF] tracking-[1.2px] uppercase">
            Workzi for Education
          </span>
        </div>

        {/* h1 */}
        <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[34px] sm:text-[46px] md:text-[52px] leading-[42px] sm:leading-[54px] md:leading-[60px] text-white text-center max-w-[700px] mb-[18px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
          Attendance<br />
          Management Built for<br />
          Modern Campuses
        </h1>

        {/* p */}
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-medium text-[15px] leading-[24px] text-white text-center max-w-[480px] mb-[18px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          Manage student attendance, faculty attendance, academic schedules, department operations, and campus activities from one intelligent platform.
        </p>

        {/* button.hero-btn */}
        <button className="bg-white hover:bg-slate-50 text-[#1A1A1A] font-['Inter',sans-serif] font-semibold text-[15px] leading-[18px] px-[32px] py-[14px] rounded-[50px] shadow-[0_4px_16px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-[1.03] cursor-pointer">
          Book Demo
        </button>

      </FadeUp>
    </Container>

    {/* Dashboard chart — pinned to bottom of hero on desktop, fluid relative container on mobile */}
    <div className="relative mt-8 lg:mt-0 lg:absolute lg:bottom-0 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-[30%] w-full max-w-[781px] px-4 z-30">
      <img
        src="/solutions-assets/Group 1000003291.png"
        alt="Campus attendance dashboard"
        className="w-full h-auto drop-shadow-[0_30px_60px_rgba(17,24,39,0.18)]"
      />
    </div>
  </section>
);



/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SECTION 3 â€” TRUSTED COMPANIES LOGO BAR
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const TrustedCompaniesLocal: React.FC = () => {
  const logos = [
    { name: 'TechNova', icon: <span className="w-[18px] h-[12px] bg-[#6B7280] rounded-[2px] shrink-0" /> },
    { name: 'Globalink', icon: <span className="w-[14px] h-[14px] bg-[#6B7280] rounded-full shrink-0" /> },
    { name: 'BuildBase', icon: <span className="w-[14px] h-[14px] bg-[#6B7280] shrink-0 [clip-path:polygon(50%_0%,100%_45%,100%_100%,0%_100%,0%_45%)]" /> },
    { name: 'StarPeak', icon: <Star size={16} className="text-[#6B7280] fill-[#6B7280] shrink-0" /> },
    {
      name: 'PulseOps',
      icon: (
        <svg className="w-[16px] h-[16px] text-[#6B7280] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    { name: 'Layerify', icon: <span className="w-[14px] h-[14px] bg-[#6B7280] shrink-0 [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)]" /> },
  ];

  const loopLogos = [...logos, ...logos];

  return (
    <section id="trusted" className="bg-white pt-[140px] pb-[30px] md:pt-[160px] md:pb-[35px] relative z-10 w-full overflow-hidden">
      <div className="w-full relative overflow-hidden py-1">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        <div className="flex w-fit">
          <motion.div
            className="flex items-center gap-8 sm:gap-14 md:gap-16 pr-8 sm:pr-14 md:pr-16 shrink-0"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
          >
            {loopLogos.map((logo, idx) => (
              <div
                key={`a-${idx}`}
                className="flex items-center gap-[8px] opacity-75 hover:opacity-100 transition-opacity duration-200 cursor-default h-[28px] shrink-0"
              >
                {logo.icon}
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] leading-[22px] tracking-[-0.3px] text-[#6B7280] whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex items-center gap-8 sm:gap-14 md:gap-16 pr-8 sm:pr-14 md:pr-16 shrink-0"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
          >
            {loopLogos.map((logo, idx) => (
              <div
                key={`b-${idx}`}
                className="flex items-center gap-[8px] opacity-75 hover:opacity-100 transition-opacity duration-200 cursor-default h-[28px] shrink-0"
              >
                {logo.icon}
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] leading-[22px] tracking-[-0.3px] text-[#6B7280] whitespace-nowrap">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SECTION 4 â€” "Everything Your Campus Needs" HEADER ONLY
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const EverythingYourCampusNeeds: React.FC = () => {
  return (
    <section id="sol-overview" className="pt-12 md:pt-14 pb-8 bg-white relative scroll-mt-24">
      <Container>
        <FadeUp className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-[44px] font-[800] text-slate-900 leading-[1.1] mb-5 tracking-tight">
            Everything Your Campus Needs
          </h2>
          <p className="text-slate-500 text-sm md:text-[17px] leading-relaxed font-semibold max-w-2xl mx-auto">
            From the first bell to the last report, one platform runs attendance, faculty, timetables, departments and the library.
          </p>
        </FadeUp>
      </Container>
    </section>
  );
};

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   REUSABLE â€” Staggered Alternating Feature Section
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
interface FeatureProps {
  id: string;
  pill: string;
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  bg?: string;
  cta?: string;
  imageClassName?: string;
}

const FeatureItem: React.FC<FeatureProps> = ({
  id,
  pill,
  title,
  description,
  bullets,
  imageSrc,
  imageAlt,
  reverse = false,
  bg = 'bg-white',
  cta = 'Learn More',
  imageClassName,
}) => (
  <section id={id} className={`py-[60px] px-4 md:px-12 lg:px-[100px] ${bg} relative overflow-hidden scroll-mt-24 max-w-[1440px] mx-auto`}>
    <Container className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-start justify-between gap-12 lg:gap-[60px] max-w-[1240px] mx-auto`}>
      {/* Image / Visual Column */}
      <FadeUp delay={0.1} className="flex-1 w-full max-w-[611px]">
        <div className="rounded-[28px] overflow-hidden relative w-full aspect-[611/496] max-h-[496px] shadow-sm">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`w-full h-full object-cover scale-[1.08] origin-center rounded-[28px] ${imageClassName || ''}`}
          />
        </div>
      </FadeUp>

      {/* Text Content Column */}
      <FadeUp delay={0.2} className="flex-1 max-w-[549px] flex flex-col items-start">
        {/* Section Tag */}
        <span className="bg-[#F0F9F0] text-[#3B8A3E] px-[14px] py-[5px] rounded-[50px] text-[12px] font-semibold leading-[15px] mb-6 inline-flex items-center gap-[6px]">
          {pill}
        </span>

        {/* Title */}
        <h2 className="font-['Inter',sans-serif] text-[32px] md:text-[44px] lg:text-[55.9px] font-semibold text-[#000000] leading-tight lg:leading-[62px] tracking-[-1.12px] mb-4">
          {title}
        </h2>

        {/* Description */}
        <p className="font-['Inter',sans-serif] text-[15.6px] font-medium text-[#111827] leading-[24px] mb-6">
          {description}
        </p>

        {/* Feature List */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-[14px] w-full mb-6">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-[12px]">
              <div className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] flex items-center justify-center shrink-0">
                <Check size={12} className="text-[#10B981]" strokeWidth={2.5} />
              </div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] font-semibold leading-[20px] text-[#111827]">
                {b}
              </span>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div>
          <button className="inline-flex items-center justify-center gap-2 bg-black hover:bg-[#1A1A1A] text-white font-['Inter',sans-serif] text-[14px] font-semibold leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md cursor-pointer">
            {cta}
            <ArrowRight size={14} />
          </button>
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SECTION 4 â€” HOW ATTENDX WORKS FOR CAMPUSES (4-Steps)
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const HowItWorksCampuses: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Student Scans QR',
      desc: 'Attendance begins the moment a student scans their class QR code or checks in by face recognition.',
    },
    {
      num: '02',
      title: 'Attendance Verified',
      desc: 'Location and timestamp are verified instantly against the class schedule.',
    },
    {
      num: '03',
      title: 'Faculty Approval',
      desc: 'The class faculty reviews and confirms attendance for the session.',
    },
    {
      num: '04',
      title: 'Reports Generated',
      desc: 'Daily and semester reports are compiled automatically for every department.',
    },
  ];

  return (
    <section className="py-[80px] px-4 md:px-12 lg:px-[80px] bg-white relative overflow-hidden max-w-[1440px] mx-auto">
      <Container className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <FadeUp className="text-center max-w-[640px] mx-auto mb-9 flex flex-col items-center gap-[14px]">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[30px] md:text-[36px] lg:text-[42px] font-bold leading-tight lg:leading-[46px] text-[#111827] text-center max-w-[477px]">
            How Workzi Works for Campuses
          </h2>
          <p className="font-['Plus_Jakarta_Sans',sans-serif] text-[16px] font-medium leading-[24px] text-[#111827] text-center max-w-[495px]">
            A simple, verified flow from check-in to report with parents and administration kept in the loop.
          </p>
        </FadeUp>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[24px] max-w-[1216px] mx-auto pt-[28px]">
          {steps.map((s, idx) => (
            <FadeUp
              key={idx}
              delay={idx * 0.08}
              className="bg-white border border-[#F3F4F6] rounded-[28px] p-[40px_28px] shadow-[0px_4px_16px_rgba(0,0,0,0.08),0px_2px_6px_rgba(0,0,0,0.04)] flex flex-col items-center text-center gap-[9.1px] hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Step Number Badge */}
              <div className="w-[52px] h-[52px] rounded-[14px] bg-[#EEEEFF] flex items-center justify-center shrink-0 mb-1">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] leading-[23px] text-[#5B5FFF]">
                  {s.num}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[18px] leading-[20px] tracking-[-0.36px] text-[#111827] pt-[12px] mb-0">
                {s.title}
              </h3>

              {/* Description */}
              <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[23px] text-[#6B7280]">
                {s.desc}
              </p>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SECTION 5 â€” CAMPUS PORTAL OVERVIEW (Interactive Table)
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const CampusPortalOverview: React.FC = () => {
  const [activeNav, setActiveNav] = useState<string>('Dashboard');

  const navigationItems = [
    'Dashboard',
    'Students',
    'Faculty',
    'Attendance',
    'Timetable',
    'Departments',
    'Library',
    'Calendar',
    'Reports',
    'Settings',
  ];

  const stats = [
    { value: '3,240', label: 'Students' },
    { value: '186', label: 'Faculty' },
    { value: '94.2%', label: 'Attendance' },
    { value: '58', label: 'Classes Running' },
    { value: '12', label: 'Departments' },
    { value: 'Open', label: 'Library Status' },
  ];

  const activities = [
    {
      initials: 'SN',
      name: 'Sara Nakamura',
      detail: 'Recent Attendance',
      time: '08:52 AM',
      status: 'Present',
      avatarBg: 'bg-[#5B5FEF]',
    },
    {
      initials: 'JK',
      name: 'Jonas Kim',
      detail: 'Late Students',
      time: '09:14 AM',
      status: 'Late',
      avatarBg: 'bg-amber-500',
    },
    {
      initials: 'PR',
      name: 'Priya Raman',
      detail: 'Faculty Time-off',
      time: 'â€”',
      status: 'On Time-off',
      avatarBg: 'bg-emerald-500',
    },
    {
      initials: 'DT',
      name: 'David Torres',
      detail: 'Library Returns',
      time: '10:02 AM',
      status: 'Returned',
      avatarBg: 'bg-indigo-500',
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Present':
      case 'Returned':
        return (
          <span className="px-2 py-0.5 rounded-full font-bold text-[9px] bg-[#EBF7F0] text-[#108A00]">
            {status}
          </span>
        );
      case 'Late':
        return (
          <span className="px-2 py-0.5 rounded-full font-bold text-[9px] bg-[#FFF2EB] text-[#E15A1B]">
            {status}
          </span>
        );
      case 'On Time-off':
        return (
          <span className="px-2 py-0.5 rounded-full font-bold text-[9px] bg-[#F1F5F9] text-[#64748B]">
            {status}
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-white">
      <Container>
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[40px] font-extrabold text-slate-900 leading-tight mb-4">
            Campus Dashboard Preview
          </h2>
          <p className="text-slate-500 text-[15px] font-medium leading-relaxed">
            One console for students, faculty, departments, timetables, the library and reports.
          </p>
        </FadeUp>

        {/* Interactive Dashboard Container */}
        <FadeUp className="bg-white border border-slate-200/80 rounded-[28px] shadow-xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row min-h-[480px]">
          {/* Sidebar */}
          <div className="w-full md:w-56 bg-white border-r border-slate-200/80 p-6 shrink-0 flex flex-col gap-6">
            {/* Logo */}
            <div className="flex items-center gap-2 px-1">
              <span className="w-6 h-6 rounded-lg bg-[#5B5FEF] text-white font-black text-xs flex items-center justify-center shadow-xs">
                A
              </span>
              <span className="text-slate-800 font-extrabold text-sm tracking-tight">
                Workzi
              </span>
            </div>

            {/* Nav Menu */}
            <div className="flex flex-col gap-1">
              {navigationItems.map((nav) => (
                <span
                  key={nav}
                  onClick={() => setActiveNav(nav)}
                  className={`text-xs font-bold px-3 py-2 rounded-lg cursor-pointer transition-all ${activeNav === nav
                    ? 'bg-[#5B5FEF] text-white shadow-xs'
                    : 'text-slate-500 hover:bg-slate-100/70 hover:text-slate-800'
                    }`}
                >
                  {nav}
                </span>
              ))}
            </div>
          </div>

          {/* Main Area */}
          <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 bg-white">
            {/* Header */}
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold text-slate-800 tracking-tight">
                Campus Overview
              </h3>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EBF7F0] text-[#108A00] text-[9px] font-bold tracking-wider uppercase relative">
                <span className="w-1.5 h-1.5 rounded-full bg-[#108A00] animate-pulse" />
                Live
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-100 rounded-xl p-3 shadow-2xs hover:shadow-xs transition-shadow duration-300 flex flex-col justify-center"
                >
                  <span className="text-lg font-black text-slate-800 leading-tight">
                    {stat.value}
                  </span>
                  <span className="text-[7.5px] text-slate-400 font-extrabold uppercase tracking-wider mt-1 block leading-none">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Table Section */}
            <div className="flex-1 mt-2">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 font-extrabold uppercase tracking-wider text-[9px]">
                      <th className="py-2.5 px-3">Activity</th>
                      <th className="py-2.5 px-3">Detail</th>
                      <th className="py-2.5 px-3">Time</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activities.map((act, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-slate-100/60 hover:bg-slate-50/50 transition-colors duration-200"
                      >
                        <td className="py-3 px-3 font-bold text-slate-800 flex items-center gap-2.5">
                          <span
                            className={`w-6 h-6 rounded-full text-white font-bold text-[9px] flex items-center justify-center shrink-0 ${act.avatarBg}`}
                          >
                            {act.initials}
                          </span>
                          <span className="text-xs font-bold text-slate-800">
                            {act.name}
                          </span>
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-500">
                          {act.detail}
                        </td>
                        <td className="py-3 px-3 font-semibold text-slate-400">
                          {act.time}
                        </td>
                        <td className="py-3 px-3">{getStatusBadge(act.status)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SECTION 6 â€” PORTALS PERSPECTIVES (Vastly Experience)
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SECTION 6 â€” MOBILE EXPERIENCE (Purpose-built Apps)
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const MobileExperience: React.FC = () => {
  return (
    <section className="py-24 bg-white relative scroll-mt-24">
      <Container>
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[42px] font-[800] text-slate-900 leading-[1.1] mb-4 tracking-tight">
            Mobile Experience
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed">
            Purpose-built apps for students, faculty and administrators.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Student App */}
          <FadeUp delay={0.1} className="flex flex-col items-center">
            <div className="w-full bg-white border border-slate-200/80 rounded-[32px] p-6 flex flex-col gap-4 shadow-sm aspect-[320/420] min-h-[380px]">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#5B5FEF] shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider leading-none mb-0.5">Good morning</p>
                  <p className="text-xs font-black text-slate-800 leading-none">Amara Solis</p>
                </div>
              </div>

              {/* Rows */}
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Today's Classes", val: "4" },
                  { label: "Attendance", val: "96%" },
                  { label: "Timetable", val: "View" },
                  { label: "Assignments", val: "2 due" },
                  { label: "Library", val: "1 book" },
                ].map((row, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-xl px-4 py-2.5 flex justify-between items-center text-[11px]">
                    <span className="text-slate-500 font-extrabold">{row.label}</span>
                    <span className="text-slate-800 font-black">{row.val}</span>
                  </div>
                ))}
              </div>

              {/* Tab Bar */}
              <div className="border-t border-slate-100 pt-3.5 mt-auto flex justify-between items-center px-2 text-[10px] font-bold text-slate-400">
                <span className="text-[#5B5FEF] cursor-pointer">Home</span>
                <span className="hover:text-slate-600 cursor-pointer">Attendance</span>
                <span className="hover:text-slate-600 cursor-pointer">Timetable</span>
                <span className="hover:text-slate-600 cursor-pointer">Profile</span>
              </div>
            </div>

            <h3 className="text-sm font-black text-slate-800 mt-5 mb-1.5">Student App</h3>
            <p className="text-xs text-slate-400 font-bold text-center max-w-[240px]">Classes, attendance, timetable & library in one place.</p>
          </FadeUp>

          {/* Faculty App */}
          <FadeUp delay={0.2} className="flex flex-col items-center">
            <div className="w-full bg-white border border-slate-200/80 rounded-[32px] p-6 flex flex-col gap-4 shadow-sm aspect-[320/420] min-h-[380px]">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#D97706] shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider leading-none mb-0.5">Welcome back</p>
                  <p className="text-xs font-black text-slate-800 leading-none">Dr. Elena Voss</p>
                </div>
              </div>

              {/* Rows */}
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Attendance", val: "Mark Now" },
                  { label: "Time-off", val: "1 pending" },
                  { label: "Timetable", val: "5 classes" },
                  { label: "Students", val: "142" },
                  { label: "Reports", val: "Weekly" },
                ].map((row, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-xl px-4 py-2.5 flex justify-between items-center text-[11px]">
                    <span className="text-slate-500 font-extrabold">{row.label}</span>
                    <span className="text-slate-800 font-black">{row.val}</span>
                  </div>
                ))}
              </div>

              {/* Tab Bar */}
              <div className="border-t border-slate-100 pt-3.5 mt-auto flex justify-between items-center px-2 text-[10px] font-bold text-slate-400">
                <span className="text-[#5B5FEF] cursor-pointer">Home</span>
                <span className="hover:text-slate-600 cursor-pointer">Attendance</span>
                <span className="hover:text-slate-600 cursor-pointer">Students</span>
                <span className="hover:text-slate-600 cursor-pointer">Reports</span>
              </div>
            </div>

            <h3 className="text-sm font-black text-slate-800 mt-5 mb-1.5">Faculty App</h3>
            <p className="text-xs text-slate-400 font-bold text-center max-w-[240px]">Mark attendance, manage Time-off and view class rosters.</p>
          </FadeUp>

          {/* Admin App */}
          <FadeUp delay={0.3} className="flex flex-col items-center">
            <div className="w-full bg-white border border-slate-200/80 rounded-[32px] p-6 flex flex-col gap-4 shadow-sm aspect-[320/420] min-h-[380px]">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#059669] shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider leading-none mb-0.5">Admin console</p>
                  <p className="text-xs font-black text-slate-800 leading-none">Marcus Webb</p>
                </div>
              </div>

              {/* Rows */}
              <div className="flex flex-col gap-2.5">
                {[
                  { label: "Analytics", val: "Live" },
                  { label: "Departments", val: "12" },
                  { label: "Campus Overview", val: "View" },
                  { label: "Alerts", val: "3 new" },
                ].map((row, idx) => (
                  <div key={idx} className="bg-white border border-slate-100 rounded-xl px-4 py-2.5 flex justify-between items-center text-[11px]">
                    <span className="text-slate-500 font-extrabold">{row.label}</span>
                    <span className="text-slate-800 font-black">{row.val}</span>
                  </div>
                ))}
              </div>

              {/* Tab Bar */}
              <div className="border-t border-slate-100 pt-3.5 mt-auto flex justify-between items-center px-2 text-[10px] font-bold text-slate-400">
                <span className="text-[#5B5FEF] cursor-pointer">Overview</span>
                <span className="hover:text-slate-600 cursor-pointer">Departments</span>
                <span className="hover:text-slate-600 cursor-pointer">Alerts</span>
                <span className="hover:text-slate-600 cursor-pointer">Settings</span>
              </div>
            </div>

            <h3 className="text-sm font-black text-slate-800 mt-5 mb-1.5">Admin App</h3>
            <p className="text-xs text-slate-400 font-bold text-center max-w-[240px]">Campus-wide analytics and department oversight, on the go.</p>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
};

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SECTION 7 â€” WHY ATTENDX FOR EDUCATION
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const WhyAttendXForEducation: React.FC = () => {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
      <Container>
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[44px] font-[800] text-slate-900 leading-[1.1] mb-4 tracking-tight">
            Why Workzi for Education
          </h2>
          <p className="text-slate-500 text-sm md:text-base font-semibold leading-relaxed max-w-xl mx-auto">
            Replace paper registers and scattered spreadsheets with one connected system.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional System Card (Left) */}
          <FadeUp delay={0.1} className="bg-white border border-slate-200 rounded-[28px] p-8 flex flex-col gap-6 shadow-sm">
            <h3 className="text-lg font-black text-slate-900 leading-none">Traditional System</h3>
            <div className="space-y-4">
              {[
                "Paper Attendance",
                "Manual Timetable",
                "Excel Reports",
                "No Analytics",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-50 border border-rose-200 text-rose-500 flex items-center justify-center font-bold text-[9px] shrink-0 select-none">
                    âœ•
                  </div>
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Workzi Card (Right) */}
          <FadeUp delay={0.2} className="bg-white border border-[#5B5FEF]/30 rounded-[28px] p-8 flex flex-col gap-6 shadow-md relative">
            <h3 className="text-lg font-black text-[#5B5FEF] leading-none">Workzi</h3>
            <div className="space-y-4 relative z-10">
              {[
                "Live Attendance",
                "Smart Timetable",
                "AI Reports",
                "Department Dashboard",
                "Real-time Analytics",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 select-none">
                    âœ“
                  </div>
                  <span className="text-sm font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </Container>
    </section>
  );
};

const Testimonials: React.FC = () => {
  const quotes = [
    {
      text: 'Workzi replaced three separate tools we were using. Faculty adoption was instant, and the interface is beautifully simple.',
      name: 'Dr. Priya Menon',
      role: 'Dean of Academics, Horizon University',
      avatar: 'PM',
      color: 'bg-violet-500',
    },
    {
      text: 'Our admin office used to spend 4 hours daily on attendance registers. Now everything is automated and accurate.',
      name: 'James O\'Brien',
      role: 'Head of Operations, Redwood College',
      avatar: 'JO',
      color: 'bg-blue-600',
    },
    {
      text: 'The timetable builder is a game-changer. What used to take days to coordinate now takes under 30 minutes.',
      name: 'Anika Sharma',
      role: 'Academic Coordinator, Greenfield School',
      avatar: 'AS',
      color: 'bg-emerald-600',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <FadeUp className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="bg-[#EBF7F0] text-[#108A00] px-3.5 py-1 rounded-full text-xs font-semibold mb-4 block">
            Testimonials
          </span>
          <h2 className="text-slate-900 font-extrabold text-3xl md:text-[40px] mb-4">
            Trusted Campus-Wide
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-white border border-[#E5E7EB] rounded-[24px] p-6 shadow-sm flex flex-col justify-between cursor-default h-full">
                <div className="space-y-4">
                  {/* Profile Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${q.color} text-white font-extrabold flex items-center justify-center text-sm shrink-0`}>
                        {q.avatar}
                      </div>
                      <div className="text-left">
                        <h5 className="text-xs font-bold text-slate-800 leading-tight">{q.name}</h5>
                        <span className="text-[10px] text-slate-400 block font-semibold">{q.role}</span>
                      </div>
                    </div>

                    {/* Rating block */}
                    <div className="flex items-center gap-1.5 text-slate-700 font-bold text-[10px]">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, si) => (
                          <Star key={si} size={10} fill="currentColor" className="stroke-none" />
                        ))}
                      </div>
                      <span>5.0</span>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-600 text-xs leading-relaxed font-normal text-left">
                    "{q.text}"
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SECTION 9 â€” SOLUTIONS FAQ (8 Items Accordion)
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const SolutionsFAQ: React.FC = () => {
  const faqs = [
    {
      q: 'Can attendance work offline?',
      a: 'Workzi uses GPS-based geo-fencing to verify that employees are within the designated office range before they can check in. Once verified, the check-in is recorded with a timestamp and location. Employees can also view their shift overview and daily attendance history directly in the app.',
    },
    {
      q: 'Does it support QR attendance?',
      a: 'Every class can generate a rotating QR code, alongside face recognition and GPS-verified check-in as alternatives.',
    },
    {
      q: 'Can faculty manage attendance?',
      a: 'Faculty can review, approve, and correct attendance for their own classes directly from the faculty app.',
    },
    {
      q: 'Can departments have separate dashboards?',
      a: 'Each department gets its own HOD dashboard with faculty, semester and program-level data isolated from other departments.',
    },
    {
      q: 'Can library attendance sync with students?',
      a: 'Library issue, return and fine records are tied to each student\'s profile alongside their attendance history.',
    },
    {
      q: 'Can parents receive attendance notifications?',
      a: 'Parents can be added as guardians on a student profile and receive attendance and exam notifications automatically.',
    },
    {
      q: 'Can attendance integrate with ERP?',
      a: 'Workzi Education connects to common campus ERP systems for student, faculty and academic-record synchronization.',
    },
    {
      q: 'Can students access their timetable?',
      a: 'Students see their live weekly timetable, including room and faculty changes, directly in the student app.',
    },
  ];

  const [open, setOpen] = useState<number>(-1);

  return (
    <section className="py-20 bg-white relative scroll-mt-24 w-full">
      <Container className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <FadeUp className="text-center max-w-4xl mx-auto mb-10 flex flex-col items-center">
          {/* Section Tag */}


          {/* Section Title */}
          <h2 className="text-3xl md:text-[38px] font-extrabold text-slate-900 mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
            Frequently Asked Questions
          </h2>

          {/* Section Subtitle */}
          <p className="text-slate-500 font-medium sm:whitespace-nowrap font-['Inter',sans-serif] text-sm md:text-[15px]">
            Got questions? We've got answers. If you need more help, <a href="#contact-support" className="text-[#5B5FEF] underline hover:text-[#4F46E5] transition-colors">contact our team.</a>
          </p>
        </FadeUp>

        {/* Accordions List */}
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
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 text-xs md:text-sm text-slate-500 leading-relaxed font-['Inter',sans-serif] max-w-4xl">
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

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   SECTION 10 â€” SOLUTIONS CTA
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const SolutionsCTA: React.FC = () => (
  <section className="relative py-[70px] px-4 md:px-12 lg:px-[120px] overflow-hidden text-center flex flex-col items-center justify-center min-h-[368px] w-full">
    {/* Background Banner Image & Dark Overlay */}
    <div className="absolute inset-0 z-0">
      <img
        src="/solutions-assets/4193f756037467bd330a9c1a72cd458aecd144e6.png"
        alt="Campus banner"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/35 z-10" />
    </div>

    {/* Content Overlay */}
    <Container className="relative z-20 max-w-[600px] flex flex-col items-center gap-[13.19px] mx-auto">
      {/* Title */}
      <h2 className="font-['Inter',sans-serif] font-semibold text-[28px] md:text-[36px] lg:text-[40px] leading-tight lg:leading-[48px] text-[#FFFFFF] text-center drop-shadow-[0px_4px_4px_rgba(0,0,0,0.04)] max-w-[600px]">
        Ready to Modernize Your Campus?
      </h2>

      {/* Subtitle */}
      <p className="font-['Inter',sans-serif] font-medium text-[14px] leading-[22px] text-[#FFFFFF] text-center max-w-[440px]">
        Everything your institution needs to manage attendance, faculty operations, departments, timetables, libraries, and academic activities in one intelligent platform.
      </p>

      {/* Button Action */}
      <div className="pt-[12px]">
        <button className="bg-[#1A1A1A] hover:bg-black text-[#FFFFFF] font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-lg cursor-pointer transform hover:scale-[1.03] flex items-center justify-center gap-2">
          Book Demo
        </button>
      </div>
    </Container>
  </section>
);

/* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
   MAIN PAGES ASSEMBLY
   â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
const SolutionsPage: React.FC = () => (
  <div id="solutions-page" className="relative overflow-x-hidden bg-white">
    <SolutionsHero />
    <TrustedCompaniesLocal />
    <EverythingYourCampusNeeds />

    {/* Section: Every Student, Accounted For */}
    <FeatureItem
      id="sol-students"
      pill="Student Attendance"
      title="Every Student, Accounted For"
      description="Capture attendance the moment class begins using QR code, face recognition, or geo-verified check-in, keeping every class and batch reporting in real time."
      bullets={[
        'GPS Verification',
        'Attendance Records',
        'Notifications',
        'Batch-wise Attendance',
      ]}
      imageSrc="/solutions-assets/div.zwc-left-wrap (5).png"
      imageAlt="Student Attendance"
      bg="bg-white"
      cta="Learn More"
    />

    {/* Section: Faculty Operations, Simplified */}
    <FeatureItem
      id="sol-faculty"
      pill="Faculty Operations"
      title="Faculty Operations, Simplified"
      description="Track faculty check-ins, working hours and department-wise attendance, and route Time-off requests and substitutions without the back-and-forth."
      bullets={[
        'Faculty Check-in',
        'Department Attendance',
        'Working Hours',
        'Time-off Requests',
        'Batch-wise Attendance',
        'Late Tracking',
      ]}
      imageSrc="/solutions-assets/Group 1000003290.png"
      imageAlt="Faculty Management"
      imageClassName="scale-[1.12]"
      reverse={true}
      bg="bg-white"
      cta="Learn More"
    />

    {/* Section: Build Timetables in Minutes */}
    <FeatureItem
      id="sol-attendance"
      pill="Timetable Automation"
      title="Build Timetables in Minutes, Not Days"
      description="Drag and drop classes across a weekly grid while Workzi flags room, faculty and lab conflicts before they happen."
      bullets={[
        'Weekly Timetable',
        'Class Scheduling',
        'Faculty Allocation',
        'Room Allocation',
      ]}
      imageSrc="/solutions-assets/div.zwc-left-wrap (3).png"
      imageAlt="Timetable Builder"
      bg="bg-white"
      cta="Learn More"
    />

    {/* Section: A Clear View of Every Department */}
    <FeatureItem
      id="sol-overview-dept"
      pill="Departmental Views"
      title="A Clear View of Every Department"
      description="Give every HOD a live dashboard of their faculty, programs and semester structure, and compare performance across departments."
      bullets={[
        'Departments',
        'Faculty List',
        'HOD Dashboard',
      ]}
      imageSrc="/solutions-assets/div.zwc-left-wrap (2).png"
      imageAlt="Department View"
      reverse={true}
      bg="bg-white"
      cta="Learn More"
    />

    {/* Section: One Calendar for the Whole Campus */}
    <FeatureItem
      id="sol-calendar"
      pill="Campus Calendar"
      title="One Calendar for the Whole Campus"
      description="Maintain a single source of truth for your academic year to mark holidays, events, exam dates and special sessions so every student and staff member stays in sync."
      bullets={[
        'Academic Calendar',
        'Holiday Calendar',
        'Exam Schedule',
        'Events',
        'Placement Drives',
      ]}
      imageSrc="/solutions-assets/div.zwc-left-wrap (1).png"
      imageAlt="Campus Calendar"
      bg="bg-white"
      cta="Learn More"
    />

    {/* Section: A Library That Runs Itself */}
    <FeatureItem
      id="sol-library"
      pill="Digital Library"
      title="A Library That Runs Itself"
      description="Modernise your library with a digital catalog, smart issue & return tracking, and automatic late-fee alerts so librarians can spend time helping students, not chasing books."
      bullets={[
        'Book Catalog',
        'Issue & Return',
        'Library Analytics',
        'Digital Library',
      ]}
      imageSrc="/solutions-assets/div.zwc-left-wrap.png"
      imageAlt="Library Management"
      reverse={true}
      bg="bg-white"
      cta="Learn More"
    />

    <HowItWorksCampuses />
    <CampusPortalOverview />
    <MobileExperience />
    <WhyAttendXForEducation />
    <Testimonials />
    <SolutionsFAQ />
    <SolutionsCTA />
  </div>
);

export default SolutionsPage;
