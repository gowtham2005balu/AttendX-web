import React from 'react';
import { motion } from 'framer-motion';
import {
  Check,
  MapPin,
  Bell,
  Calendar,
  BarChart3,
  Users,
  Shield,
  Clock,
  Smartphone,
  Star,
  ArrowRight,
} from 'lucide-react';
import { Container } from '../Container';

/* ─── Fade-up helper ─── */
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

/* ─── Green badge label ─── */
const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block bg-[#EBF7F0] text-[#108A00] px-3.5 py-1 rounded-full text-xs font-semibold mb-4">
    {children}
  </span>
);

/* ─── Dark "Learn More" button ─── */
const LearnMore: React.FC = () => (
  <button className="bg-black text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-[#1A1A1A] transition-all duration-300 shadow-md inline-flex items-center gap-2 cursor-pointer">
    Learn More
    <ArrowRight className="w-3.5 h-3.5 text-white" />
  </button>
);

/* ────────────────────────────────────────────────────────────
   SECTION 1 — HERO
──────────────────────────────────────────────────────────── */
const EmployeeHero: React.FC = () => (
  <section id="hero" className="relative h-[855px] flex flex-col items-center justify-center overflow-hidden bg-[#0F172A] w-full">
    {/* Full-bleed background image */}
    <div className="absolute inset-0 z-0">
      <img
        src="/employee%20app/56780debc8cded547150cdc768e5933114e30b55.png"
        alt="Employee checking in for work using the Workzi mobile app"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/20 via-[#0F172A]/10 to-[#0F172A]/30" />
    </div>

    {/* Centered content */}
    <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-[1200px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col items-center gap-[16px] max-w-[1120px]"
      >
        {/* Pill badge */}
        <div className="inline-flex items-center px-[16px] py-[6px] rounded-[100px] bg-[#EEEEFF] border border-[rgba(91,95,255,0.2)] mb-1 gap-[7px]">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] leading-[15px] tracking-[1.2px] uppercase text-[#5B5FFF]">
            Employee App
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[36px] sm:text-[44px] lg:text-[52px] leading-[1.25] text-white text-center drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] max-w-[700px] mb-1">
          Your workday, without the busywork.
        </h1>

        {/* Subtitle */}
        <p className="font-['Inter',sans-serif] font-medium text-[15px] leading-[24px] text-white text-center max-w-[640px] mb-4">
          Check in, request time off, track your tasks, and stay in the loop — all from one app built around how you actually work.
        </p>

        {/* Dual Hero Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-[14px] pt-[4px]">
          <a
            href="#pricing"
            className="bg-white text-[#1A1A1A] hover:bg-neutral-100 hover:scale-[1.04] font-['Inter',sans-serif] font-semibold text-[15px] leading-[18px] px-[32px] py-[14px] rounded-[50px] transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.15)] cursor-pointer inline-flex items-center justify-center min-w-[147px]"
          >
            Book Demo
          </a>
          <a
            href="#pricing"
            className="bg-transparent hover:bg-white/10 text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] border border-white rounded-[50px] px-[32px] py-[14px] transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-1 hover:scale-[1.03]"
          >
            Get the App →
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

/* ────────────────────────────────────────────────────────────
   SECTION 2 — TRACK ATTENDANCE EFFORTLESSLY
──────────────────────────────────────────────────────────── */
const TrackAttendance: React.FC = () => (
  <section className="pt-[70px] pb-[60px] px-4 md:px-12 lg:px-[100px] bg-[#FAFAFA] relative overflow-hidden w-full">
    <Container className="max-w-[1200px] mx-auto flex flex-col items-start gap-[24px] px-0 lg:px-[20px]">
      {/* Top Header Block */}
      <FadeUp className="flex flex-col items-start max-w-[1200px] w-full gap-[24px]">
        {/* span.section-tag */}
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px] h-[25px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Attendance
          </span>
        </div>

        {/* Frame 1984078965 */}
        <div className="flex flex-col justify-center items-start gap-[24px] w-full max-w-[1160px]">
          {/* Heading & Subtitle Block */}
          <div className="flex flex-col justify-center items-start gap-[18px] w-full">
            <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[58px] tracking-[-1.12px] text-[#000000] max-w-[660px]">
              Check in without the chase.
            </h2>
            <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[30px] text-[#111827] max-w-[1160px]">
              Mark your attendance in a single tap, with your time and location verified automatically — no registers, no manual entry, no end-of-day scramble to remember when you clocked in.
            </p>
          </div>

          {/* Feature list */}
          <div className="flex flex-wrap items-center gap-[14px_24px] w-full py-[20px] pr-[20px] pl-0">
            {[
              { text: 'One-tap check-in & check-out' },
              { text: 'Location-verified attendance' },
              { text: 'Real-time shift status' },
              { text: 'Attendance history at a glance' },
              { text: 'Late & absence alerts' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-[12px] h-[22px]">
                <div className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] flex items-center justify-center shrink-0">
                  <Check className="w-[12px] h-[12px] text-[#10B981]" strokeWidth={2.5} />
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] leading-[20px] text-[#111827]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Explore Feature button */}
          <a
            href="#pricing"
            className="min-w-[153px] h-[43px] px-[24px] py-[13px] gap-[8px] bg-[#1A1A1A] hover:bg-black text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center justify-center cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">Explore Feature</span>
            <ArrowRight className="w-[16px] h-[16px] text-white stroke-[2.2] shrink-0" />
          </a>
        </div>
      </FadeUp>

      {/* Mockup Scenic Image Card */}
      <FadeUp delay={0.15} className="w-full mt-2">
        <div className="rounded-[24px] overflow-hidden relative w-full">
          <img
            src="/employee%20app/div.zwc-tab-img-wrap.png"
            alt="Check in without the chase mobile app view"
            className="w-full h-auto object-cover scale-[1.09] origin-center transition-transform duration-300 hover:scale-[1.11]"
          />
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ────────────────────────────────────────────────────────────
   SECTION 3 — TIME-OFF REQUESTS MADE SIMPLE
──────────────────────────────────────────────────────────── */
const TimeOffRequests: React.FC = () => (
  <section className="py-[60px] pb-[40px] px-4 md:px-12 lg:px-[100px] bg-[#FAFAFA] relative overflow-hidden w-full">
    <Container className="max-w-[1200px] mx-auto flex flex-col items-start gap-[24px] px-0 lg:px-[20px]">
      {/* Top Header Block */}
      <FadeUp className="flex flex-col items-start max-w-[1200px] w-full gap-[24px]">
        {/* span.section-tag */}
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] gap-[6px] h-[25px]">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
            Time Off
          </span>
        </div>

        {/* Frame 1984078965 */}
        <div className="flex flex-col justify-center items-start gap-[24px] w-full max-w-[1160px]">
          {/* Heading & Subtitle Block */}
          <div className="flex flex-col justify-center items-start gap-[18px] w-full">
            <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[58px] tracking-[-1.12px] text-[#000000] max-w-[651px]">
              Apply for time off in seconds.
            </h2>
            <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[30px] text-[#111827] max-w-[1160px]">
              Submit a time-off request, track your balance, and see exactly where your approval stands — no follow-up emails, no wondering if anyone's seen it.
            </p>
          </div>

          {/* Feature list */}
          <div className="flex flex-wrap items-center gap-[24px] w-full py-[20px] pr-[20px] pl-0">
            {[
              { text: 'Apply for time off in one tap' },
              { text: 'Real-time balance tracking' },
              { text: 'Multiple time-off types' },
              { text: 'Instant approval status' },
              { text: 'Team time-off calendar visibility' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-[12px] h-[22px]">
                <div className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] flex items-center justify-center shrink-0">
                  <Check className="w-[12px] h-[12px] text-[#10B981]" strokeWidth={2.5} />
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] leading-[20px] text-[#111827]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          {/* Learn More button */}
          <a
            href="#pricing"
            className="min-w-[153px] h-[43px] px-[24px] py-[13px] gap-[8px] bg-[#1A1A1A] hover:bg-black text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center justify-center cursor-pointer whitespace-nowrap shrink-0"
          >
            <span className="whitespace-nowrap">Learn More</span>
            <ArrowRight className="w-[16px] h-[16px] text-white stroke-[2.2] shrink-0" />
          </a>
        </div>
      </FadeUp>

      {/* Mockup Scenic Image Card */}
      <FadeUp delay={0.15} className="w-full mt-2">
        <div className="rounded-[24px] overflow-hidden relative w-full">
          <img
            src="/employee%20app/div.zwc-tab-img-wrap%20(1).png"
            alt="Apply for time off in seconds mobile app view"
            className="w-full h-auto object-cover scale-[1.09] origin-center transition-transform duration-300 hover:scale-[1.11]"
          />
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ────────────────────────────────────────────────────────────
   SECTION 4 — TASK MANAGEMENT
──────────────────────────────────────────────────────────── */
const TeamConnected: React.FC = () => {
  const features = [
    'Assigned task list',
    'Status updates (To Do, In Progress, Done)',
    'Comments & attachments',
    'Due date reminders',
    'Personal task calendar',
  ];

  return (
    <section className="py-[60px] pb-[100px] px-4 md:px-12 lg:px-[100px] bg-[#FAFAFA] relative overflow-hidden w-full">
      <Container className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Side: Mockup Visual */}
        <FadeUp className="w-full max-w-[608px] mx-auto">
          <div className="rounded-[24px] overflow-hidden relative w-full">
            <img
              src="/employee%20app/div.zwc-tab-img-wrap%20(2).png"
              alt="Know exactly what's on your plate task management screen"
              className="w-full h-auto object-cover scale-[1.09] origin-center transition-transform duration-300 hover:scale-[1.11]"
            />
          </div>
        </FadeUp>

        {/* Right Side: Content Info */}
        <FadeUp delay={0.15} className="flex flex-col items-start max-w-[568px] mx-auto">
          {/* Tag Pill */}
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] mb-6 gap-[6px]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
              Task Management
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] lg:leading-[58px] tracking-[-1.12px] text-black mb-6">
            Know exactly what's on your plate.
          </h2>

          {/* Subtitle */}
          <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[30px] text-[#111827] mb-8">
            See every task assigned to you, update status as you go, and keep deadlines, comments, and attachments in one place — so nothing slips through the cracks.
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full mb-8">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-[11px]">
                <div className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#10B981]" strokeWidth={3} />
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[19px] text-[#111827]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <a
            href="#pricing"
            className="bg-[#1A1A1A] hover:bg-black text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center gap-[8px] cursor-pointer"
          >
            Learn More
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   SECTION 5 — PROFILE & SELF-SERVICE
──────────────────────────────────────────────────────────── */
const SimplifyHR: React.FC = () => {
  const features = [
    'Personal dashboard',
    'Attendance & time-off history',
    'Document access',
    'Profile management',
    'Notification preferences',
  ];

  return (
    <section className="py-[80px] px-4 md:px-12 lg:px-[100px] bg-white relative overflow-hidden w-full">
      <Container className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: Content Info */}
        <FadeUp className="flex flex-col items-start max-w-[580px] mx-auto">
          {/* Tag Pill */}
          <div className="inline-flex items-center px-[14px] py-[6px] rounded-[50px] bg-[#F0F9F0] mb-6 gap-[6px]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
              Self-Service
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[50px] leading-[1.1] lg:leading-[58px] tracking-[-1.12px] text-black mb-6">
            Your information, always at hand.
          </h2>

          {/* Subtitle */}
          <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[30px] text-[#111827] mb-8">
            Access your profile, attendance records, time-off history, and documents whenever you need them — without submitting a request or waiting on HR to get back to you.
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full mb-8">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-[11px]">
                <div className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#10B981]" strokeWidth={3} />
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[19px] text-[#111827]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <a
            href="#pricing"
            className="bg-[#1A1A1A] hover:bg-black text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center gap-[8px] cursor-pointer"
          >
            Learn More
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </FadeUp>

        {/* Right Side: Mockup Visual */}
        <FadeUp delay={0.15} className="w-full max-w-[620px] mx-auto">
          <div className="rounded-[24px] overflow-hidden relative w-full">
            <img
              src="/employee%20app/div.zwc-left-wrap%20(1).png"
              alt="Your information always at hand profile dashboard"
              className="w-full h-auto object-cover scale-[1.09] origin-center transition-transform duration-300 hover:scale-[1.11]"
            />
          </div>
        </FadeUp>
      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   SECTION 6 — MOBILE EXPERIENCE
──────────────────────────────────────────────────────────── */
const StayUpdated: React.FC = () => (
  <section className="py-[80px] px-4 md:px-12 lg:px-[128px] bg-[linear-gradient(118.12deg,#0A0C2E_0%,#1A1D4A_50%,#2A1F5C_100%)] relative overflow-hidden w-full">
    <Container className="max-w-[1184px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[40px] lg:gap-[64px]">
      {/* Left Column: Content */}
      <FadeUp className="flex flex-col items-start max-w-[552px] w-full gap-[15.2px]">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-white/10 border border-white/20">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#A5A8FF]">
            Mobile Experience
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[30px] sm:text-[38px] lg:text-[43.2px] leading-[1.1] lg:leading-[48px] tracking-[-1.08px] text-white text-left max-w-[552px]">
          Your whole workday, in your pocket.
        </h2>

        {/* Subtitle */}
        <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-[rgba(255,255,255,0.55)] text-left max-w-[552px]">
          Everything you need, beautifully designed for iOS and Android. Check in, request time off, track tasks, and catch up on updates from anywhere.
        </p>

        {/* 3 Callouts */}
        <div className="flex flex-col items-start gap-[14px] w-full pt-[10px]">
          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[rgba(16,185,129,0.15)] flex items-center justify-center shrink-0">
              <Clock className="w-[18px] h-[18px] text-[#10B981]" />
            </div>
            <div className="flex flex-col items-start text-left">
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] leading-[22px] text-[rgba(255,255,255,0.9)]">
                One-Tap Check-In
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[rgba(255,255,255,0.45)]">
                Location-verified attendance in a single swipe.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[rgba(245,158,11,0.15)] flex items-center justify-center shrink-0">
              <Calendar className="w-[18px] h-[18px] text-[#F59E0B]" />
            </div>
            <div className="flex flex-col items-start text-left">
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] leading-[22px] text-[rgba(255,255,255,0.9)]">
                Time Off On the Go
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[rgba(255,255,255,0.45)]">
                Apply for time off and check your balance from your phone.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[rgba(91,95,255,0.15)] flex items-center justify-center shrink-0">
              <Bell className="w-[18px] h-[18px] text-[#A5A8FF]" />
            </div>
            <div className="flex flex-col items-start text-left">
              <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[14px] leading-[22px] text-[rgba(255,255,255,0.9)]">
                Real-Time Notifications
              </h4>
              <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[rgba(255,255,255,0.45)]">
                Instant alerts, so you're never the last to know.
              </p>
            </div>
          </div>
        </div>

        {/* Watch Demo Button */}
        <div className="pt-[10px]">
          <a
            href="#demo"
            className="border border-[rgba(255,255,255,0.3)] hover:border-white/60 hover:bg-white/10 text-white font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] leading-[26px] px-[28px] py-[14px] rounded-[16px] transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
          >
            Watch Demo
          </a>
        </div>
      </FadeUp>

      {/* Right Column: Phone Mockup Visual */}
      <FadeUp delay={0.15} className="w-full max-w-[500px] shrink-0 flex justify-center lg:justify-end">
        <div className="relative flex justify-center items-center">
          <img
            src="/hr%20and%20man/div.mob-phone-wrap.png"
            alt="Workzi Employee App Mobile Experience"
            className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
      </FadeUp>
    </Container>
  </section>
);

/* ────────────────────────────────────────────────────────────
   SECTION 7 — PLATFORM BENEFITS
──────────────────────────────────────────────────────────── */
const EverythingYouNeed: React.FC = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-[#5B5FFF]" />,
      bg: 'bg-[rgba(91,95,255,0.1)]',
      title: 'One-Tap Attendance',
      desc: 'Check in and out instantly, with location verified automatically.',
    },
    {
      icon: <Calendar className="w-6 h-6 text-[#10B981]" />,
      bg: 'bg-[rgba(16,185,129,0.1)]',
      title: 'Time-Off Management',
      desc: 'Apply, track, and manage time off without the email back-and-forth.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#F59E0B]" />,
      bg: 'bg-[rgba(245,158,11,0.1)]',
      title: 'My Tasks',
      desc: 'Every assignment, deadline, and update in one clear view.',
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-[#5B5FFF]" />,
      bg: 'bg-[rgba(91,95,255,0.1)]',
      title: 'Personal Dashboard',
      desc: 'Attendance, time off, and task status, summarized at a glance.',
    },
    {
      icon: <Bell className="w-6 h-6 text-[#EF4444]" />,
      bg: 'bg-[rgba(239,68,68,0.08)]',
      title: 'Real-Time Notifications',
      desc: 'Approvals, reminders, and announcements as they happen.',
    },
    {
      icon: <Smartphone className="w-6 h-6 text-[#10B981]" />,
      bg: 'bg-[rgba(16,185,129,0.1)]',
      title: 'Mobile Access',
      desc: 'Full-featured iOS and Android apps. Everything in your pocket.',
    },
    {
      icon: <Shield className="w-6 h-6 text-[#5B5FFF]" />,
      bg: 'bg-[rgba(91,95,255,0.1)]',
      title: 'Document Access',
      desc: 'Payslips, policies, and personal documents, whenever you need them.',
    },
    {
      icon: <Users className="w-6 h-6 text-[#F59E0B]" />,
      bg: 'bg-[rgba(245,158,11,0.1)]',
      title: 'Team Visibility',
      desc: "See who's in, who's on time off, and what's coming up on the shared calendar.",
    },
  ];

  return (
    <section id="benefits" className="py-[100px] px-4 md:px-12 lg:px-[120px] bg-[#F8FAFC] relative overflow-hidden w-full">
      <Container className="max-w-[1200px] mx-auto flex flex-col items-center gap-[56px]">
        {/* Header Block */}
        <FadeUp className="flex flex-col items-center text-center max-w-[1120px] w-full gap-[14px]">
          {/* Eyebrow */}
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#EEEEFF]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#5B5FFF]">
              Platform Benefits
            </span>
          </div>

          <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[48px] leading-[40px] sm:leading-[50px] lg:leading-[58px] tracking-[-0.0112em] text-[#000000] max-w-[680px] mx-auto text-center">
            Everything that makes your workday easier.
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[30px] text-[#6B7280] max-w-[540px] mx-auto text-center">
            A complete employee experience, built to get out of your way, not add another tool to manage.
          </p>
        </FadeUp>

        {/* 8 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1120px]">
          {benefits.map((feat, idx) => (
            <FadeUp key={idx} delay={idx * 0.05}>
              <div className="bg-white border border-[#E9ECEF] rounded-[24px] p-[32px_28px] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start gap-2 h-full">
                <div className={`w-[52px] h-[52px] rounded-[16px] ${feat.bg} flex items-center justify-center mb-2 shrink-0`}>
                  {feat.icon}
                </div>
                <h3 className="font-['Inter',sans-serif] font-extrabold text-[16px] leading-[19px] text-[#2F4253] pt-3">
                  {feat.title}
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] text-[#6B7280]">
                  {feat.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

/* ────────────────────────────────────────────────────────────
   SECTION 8 — LOVED BY EMPLOYEES
──────────────────────────────────────────────────────────── */
const LocallyLovedTeams: React.FC = () => {
  const reviews = [
    {
      initials: 'AR',
      name: 'Ananya Roy',
      role: 'Operations Lead',
      company: 'Pulse Logistics',
      quote: 'I used to forget to mark my time-off request altogether. Now I apply from my phone in seconds and actually know where it stands.',
      score: '4.9',
      bg: 'bg-[#5B5FFF]',
    },
    {
      initials: 'DK',
      name: 'David Kim',
      role: 'Field Engineer',
      company: 'Apex Infrastructure',
      quote: "Checking in used to mean signing a paper register at the gate. Now it's one tap and I'm done before I've even sat down.",
      score: '4.8',
      bg: 'bg-[#10B981]',
    },
    {
      initials: 'SL',
      name: 'Sophie Laurent',
      role: 'Product Designer',
      company: 'Nova Interactive',
      quote: "Having my tasks, time-off balance, and attendance in one app means I'm not pinging HR for things I can just look up myself.",
      score: '4.9',
      bg: 'bg-[#F59E0B]',
    },
  ];

  return (
    <section className="py-[80px] px-4 md:px-12 lg:px-[120px] bg-white relative overflow-hidden w-full">
      <Container className="max-w-[1200px] mx-auto flex flex-col items-center gap-[48px]">
        {/* Header Block */}
        <FadeUp className="flex flex-col items-center text-center gap-[14px] w-full">
          {/* Tag Pill */}
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#EBF7F0] gap-[6px]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#108A00]">
              Loved By Employees
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Inter',sans-serif] font-semibold text-[28px] sm:text-[32px] lg:text-[36px] leading-[44px] tracking-[-0.0112em] text-[#1A1A1A] text-center">
            Making workdays easier, everywhere.
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[26px] text-[#6B7280] max-w-[540px] text-center">
            Join employees at 500+ companies who use Workzi to check in, request time off, and stay on top of their day.
          </p>
        </FadeUp>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1200px]">
          {reviews.map((item, idx) => (
            <FadeUp key={idx} delay={idx * 0.1}>
              <div className="bg-white border border-[#EBEBEB] rounded-[16px] p-6 shadow-[0px_2px_12px_rgba(0,0,0,0.05)] flex flex-col justify-between gap-[12px] h-full cursor-default hover:shadow-md transition-shadow duration-300">
                {/* Profile & Rating Header */}
                <div className="flex items-center justify-between gap-3 w-full">
                  <div className="flex items-center gap-[10px]">
                    <div className={`w-[40px] h-[40px] rounded-full ${item.bg} flex items-center justify-center text-white font-['Inter',sans-serif] font-bold text-[14px] leading-[17px] shrink-0`}>
                      {item.initials}
                    </div>
                    <div className="flex flex-col items-start text-left">
                      <strong className="font-['Inter',sans-serif] font-bold text-[14px] leading-[17px] text-[#1A1A1A]">
                        {item.name}
                      </strong>
                      <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[15px] text-[#888888]">
                        {item.role} · {item.company}
                      </span>
                    </div>
                  </div>

                  {/* Rating block */}
                  <div className="flex items-center gap-1">
                    <span className="font-['Inter',sans-serif] font-bold text-[13px] leading-[16px] text-[#F59E0B]">
                      ★★★★★
                    </span>
                    <span className="font-['Inter',sans-serif] font-bold text-[13px] leading-[16px] text-[#1A1A1A]">
                      {item.score}
                    </span>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="font-['Inter',sans-serif] font-normal text-[13px] leading-[22px] text-[#555555] text-left">
                  "{item.quote}"
                </p>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
};

const EmployeeCTA: React.FC = () => (
  <section className="relative bg-[#1D4ED8] py-[70px] px-4 md:px-12 lg:px-[120px] overflow-hidden text-center flex flex-col items-center justify-center min-h-[368px] w-full isolate">
    {/* Background image with tint */}
    <div className="absolute inset-0 z-0 bg-[#1D4ED8]">
      <img
        src="/solutions-assets/4193f756037467bd330a9c1a72cd458aecd144e6.png"
        alt="City banner background"
        className="w-full h-full object-cover object-center opacity-100"
      />
      <div className="absolute inset-0 bg-black/20 z-10" />
    </div>

    {/* Content Overlay */}
    <Container className="relative z-20 max-w-[600px] flex flex-col items-center gap-[13.2px] px-4">
      {/* Title */}
      <h2
        className="text-white font-['Inter',sans-serif] text-[28px] sm:text-[34px] lg:text-[40px] font-semibold leading-tight lg:leading-[48px] text-center max-w-[600px]"
        style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)' }}
      >
        Ready for a workday that runs itself?
      </h2>

      {/* Subtitle */}
      <p className="text-white font-['Inter',sans-serif] text-[14px] font-medium leading-[22px] max-w-[440px] text-center">
        Check in, request time off, and manage your tasks from one app. Setup takes minutes.
      </p>

      {/* Action Buttons */}
      <div className="flex items-center justify-center pt-[12px]">
        <a
          href="#pricing"
          className="bg-[#1A1A1A] hover:bg-black text-white font-['Inter',sans-serif] text-[14px] font-semibold leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md cursor-pointer hover:scale-[1.02] inline-flex items-center justify-center"
        >
          Book Demo
        </a>
      </div>
    </Container>
  </section>
);

/* ────────────────────────────────────────────────────────────
   MAIN PAGE EXPORT
──────────────────────────────────────────────────────────── */
const EmployeeAppPage: React.FC = () => (
  <div id="employee-app" className="relative overflow-x-hidden">
    <EmployeeHero />
    <TrackAttendance />
    <TimeOffRequests />
    <TeamConnected />
    <SimplifyHR />
    <StayUpdated />
    <EverythingYouNeed />
    <LocallyLovedTeams />
    <EmployeeCTA />
  </div>
);

export default EmployeeAppPage;
