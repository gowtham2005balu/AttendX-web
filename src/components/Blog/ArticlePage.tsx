import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  ChevronRight, Clock, Share2, Link, MessageSquare,
  ArrowRight, Search, Check
} from 'lucide-react';

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

const ArticlePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-0 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* ─── SPLIT ARTICLE HERO (section#article-hero) ─── */}
      <section id="article-hero" className="relative w-full min-h-[548px] bg-white border-b border-slate-100 pt-[104px]">
        <div className="flex flex-col lg:flex-row min-h-[548px] w-full max-w-[1440px] mx-auto">

          {/* LEFT Column */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 md:p-[64px_56px] bg-white text-left">
            <div className="w-full max-w-[608px]">
              {/* div.ah-breadcrumb */}
              <div className="flex items-center gap-[6px] mb-[20px]">
                <a href="#insights" className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[19px] tracking-[0.48px] uppercase text-[#5B5FFF]">
                  Insights
                </a>
                <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[#6B7280]">
                  /
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[#6B7280]">
                  AI & Automation
                </span>
              </div>

              {/* h1.ah-title */}
              <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[32px] sm:text-[40px] lg:text-[46px] leading-[51px] tracking-[-0.92px] text-[#111827] mb-[20px]">
                How AI is Rewriting the Rules of Attendance Management in 2026
              </h1>

              {/* p.ah-desc */}
              <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-[#6B7280] mb-[28px] max-w-[420px]">
                From predictive scheduling to intelligent anomaly detection — a deep dive into how modern HRMS platforms are using AI to eliminate manual tracking forever.
              </p>

              {/* div.ah-author-row */}
              <div className="border-t border-[#E5E7EB] pt-[24px] flex items-center justify-between gap-[12px] w-full">
                <div className="flex items-center gap-[12px]">
                  {/* div.avatar */}
                  <div className="w-[44px] h-[44px] rounded-full bg-[linear-gradient(135deg,#F59E0B_0%,#FBBF24_100%)] flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[15px] leading-[24px] text-white shrink-0">
                    KR
                  </div>

                  {/* Name & Meta */}
                  <div className="flex flex-col text-left">
                    <span className="font-['Inter',sans-serif] font-bold text-[14px] leading-[22px] text-[#111827]">
                      Kavya Rajan
                    </span>
                    <div className="flex flex-wrap items-center gap-[8px] font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[#6B7280] mt-[2px]">
                      <span>Head of Product, Workzi</span>
                      <span className="text-[#E5E7EB] font-normal">·</span>
                      <span>June 5, 2026</span>
                      <span className="text-[#E5E7EB] font-normal">·</span>
                      <span className="flex items-center gap-[4px]">
                        <Clock size={12} className="text-[#6B7280]" /> 8 min read
                      </span>
                    </div>
                  </div>
                </div>

                {/* Share Button */}
                <button className="w-[87px] h-[34px] border border-[#E5E7EB] rounded-[10px] bg-white hover:bg-slate-50 flex items-center justify-center gap-[6px] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] text-[#111827] transition-all cursor-pointer shrink-0">
                  <Share2 className="w-[14px] h-[14px] text-[#111827]" />
                  <span>Share</span>
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT Column (div.ah-img-placeholder) */}
          <div className="w-full lg:w-1/2 min-h-[480px] lg:min-h-[548px] bg-[linear-gradient(154.44deg,#1E1B4B_0%,#312E81_50%,#4338CA_100%)] flex flex-col items-center justify-center p-8 text-center">
            <div className="w-[200px] h-[124px] flex flex-col items-center justify-center gap-[20px]">
              {/* Outer icon badge */}
              <div className="w-[80px] h-[80px] rounded-[40px] bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="w-[36px] h-[36px] rounded-full border-[2.5px] border-white/90 flex items-center justify-center">
                  <div className="w-[16px] h-[16px] rounded-full border-[1.5px] border-white/40" />
                </div>
              </div>
              {/* Tag text */}
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[24px] text-white/60 text-center">
                AI & Workforce Automation
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── HERO ILLUSTRATION BANNER ─── */}
      <Container className="max-w-6xl mx-auto my-12 md:my-16">
        <FadeUp delay={0.1}>
          <div className="w-full bg-[#EEF2FF]/60 rounded-[32px] border border-indigo-100/50 p-8 flex flex-col items-center justify-center min-h-[300px] md:min-h-[400px] relative overflow-hidden shadow-xs">
            {/* Ambient glows inside the container */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full border-[20px] border-indigo-300" />
              <div className="absolute bottom-[-20%] left-[-10%] w-[300px] h-[300px] rounded-full border-[10px] border-indigo-300" />
            </div>

            {/* Center Text */}
            <span className="relative z-10 text-[15px] md:text-[18px] font-bold text-[#818CF8] tracking-wide text-center">
              AI-Powered Attendance Management &mdash; Editorial Photography
            </span>
          </div>

          {/* Caption Below */}
          <p className="text-center text-[12.5px] italic text-slate-400 mt-4 leading-relaxed">
            Illustration: The convergence of AI and workforce management in modern enterprise environments.
          </p>
        </FadeUp>
      </Container>

      {/* ─── MAIN CONTENT AREA (div.article-layout) ─── */}
      <section className="w-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[128px] py-16">
        <div className="flex flex-col lg:flex-row items-start justify-start gap-8 lg:gap-[64px] w-full">

          {/* STICKY TOC (div.toc-title & ul.toc-list) */}
          <div className="hidden lg:block w-[220px] shrink-0 sticky top-[100px]">
            <div className="flex flex-col items-start gap-[16px] w-[220px]">
              <div className="w-[220px]">
                <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[18px] tracking-[0.88px] uppercase text-[#6B7280] block">
                  Table of Contents
                </span>
              </div>
              <nav className="flex flex-col gap-[2px] w-[220px]">
                <a href="#introduction" className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] py-[6px] px-[10px] rounded-r-[6px] bg-[#EDEDFF] text-[#5B5FFF] block">
                  The state of HR automation
                </a>
                <a href="#predictive-scheduling" className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] py-[6px] px-[10px] rounded-r-[6px] text-[#6B7280] hover:text-[#5B5FFF] transition-colors block">
                  Predictive scheduling
                </a>
                <a href="#how-models-work" className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] py-[5.5px] pr-[10px] pl-[20px] rounded-r-[6px] text-[#6B7280] hover:text-[#5B5FFF] transition-colors block">
                  How the models work
                </a>
                <a href="#implementation-guide" className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] py-[5.5px] pr-[10px] pl-[20px] rounded-r-[6px] text-[#6B7280] hover:text-[#5B5FFF] transition-colors block">
                  Implementation guide
                </a>
                <a href="#anomaly-detection" className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] py-[6px] px-[10px] rounded-r-[6px] text-[#6B7280] hover:text-[#5B5FFF] transition-colors block">
                  Anomaly detection
                </a>
                <a href="#impact-metrics" className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] py-[6px] px-[10px] rounded-r-[6px] text-[#6B7280] hover:text-[#5B5FFF] transition-colors block">
                  Real-world impact metrics
                </a>
                <a href="#hr-teams" className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] py-[6px] px-[10px] rounded-r-[6px] text-[#6B7280] hover:text-[#5B5FFF] transition-colors block">
                  What this means for HR teams
                </a>
                <a href="#key-takeaways" className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] py-[6px] px-[10px] rounded-r-[6px] text-[#6B7280] hover:text-[#5B5FFF] transition-colors block">
                  Key takeaways
                </a>
              </nav>
            </div>
          </div>

          {/* ARTICLE PROSE (max-width: 680px) */}
          <div className="w-full max-w-[680px] flex flex-col items-start text-left">

            {/* Paragraph 1 */}
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-6">
              The relationship between human resources and technology has always been complicated. But in 2026, something has fundamentally shifted. AI is no longer a promise on a product roadmap — it's actively running payroll calculations, flagging attendance anomalies, and predicting which employees are at risk of burnout before their managers notice the signs.
            </p>

            {/* Paragraph 2 */}
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-8">
              For HR leaders who have spent years managing attendance through spreadsheets, manual approvals, and end-of-month reconciliation rituals, the pace of change can feel disorienting. But the data is unambiguous: organizations that have adopted AI-powered HRMS platforms are seeing measurable improvements across every dimension of workforce management.
            </p>

            {/* STAT BLOCK (div.stat-block - 3 cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full my-8">
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] p-[21px_20px] flex flex-col items-center justify-center text-center gap-1">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[32px] leading-[51px] text-[#5B5FFF]">
                  35%
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] text-[#6B7280]">
                  Reduction in absenteeism
                </span>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] p-[21px_20px] flex flex-col items-center justify-center text-center gap-1">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[32px] leading-[51px] text-[#5B5FFF]">
                  72%
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] text-[#6B7280]">
                  Faster leave approvals
                </span>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[12px] p-[21px_20px] flex flex-col items-center justify-center text-center gap-1">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[32px] leading-[51px] text-[#5B5FFF]">
                  40%
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[13px] leading-[21px] text-[#6B7280]">
                  Less payroll processing time
                </span>
              </div>
            </div>

            {/* Section 1 Heading */}
            <h2 id="introduction" className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] leading-[32px] tracking-[-0.28px] text-[#111827] mt-8 mb-4">
              The State of HR Automation in 2026
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-6">
              Three years ago, AI in HR was largely experimental — chatbots for candidate screening, basic recommendation engines for performance reviews. Today, the technology has matured into something far more consequential: decision-support systems that can process millions of attendance data points in real time and surface insights that would take a human analyst weeks to generate.
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-8">
              The catalyst has been the convergence of three trends. First, workforce data has become richer and more granular, thanks to the proliferation of mobile check-in apps, geo-fenced attendance tracking, and integrated payroll systems. Second, cloud computing costs have dropped enough that sophisticated ML models are now economically viable for mid-market companies, not just enterprises. Third, and perhaps most importantly, HR teams have become more data-literate — more willing to trust algorithmic outputs and act on them.
            </p>

            {/* PULL QUOTE (div.pull-quote) */}
            <div className="bg-[#EDEDFF] rounded-r-[12px] p-[28px_32px] my-8 flex flex-col items-start gap-[10px] w-full">
              <p className="font-['Plus_Jakarta_Sans',sans-serif] font-bold italic text-[20px] leading-[30px] text-[#111827]">
                "The companies winning the talent war in 2026 are not the ones with the best perks or the highest salaries — they are the ones that have built HR operations that feel genuinely effortless for their employees."
              </p>
              <cite className="font-['Inter',sans-serif] font-medium text-[13px] leading-[21px] text-[#6B7280] not-italic">
                — Kavya Rajan, Head of Product, Workzi
              </cite>
            </div>

            {/* Section 2 Heading */}
            <h2 id="predictive-scheduling" className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] leading-[32px] tracking-[-0.28px] text-[#111827] mt-8 mb-4">
              Predictive Scheduling: From Reactive to Proactive
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-6">
              The most immediate impact of AI on attendance management is in scheduling. Traditional workforce planning has always been backward-looking: you analyze last month's attendance patterns and try to predict next month's needs. AI flips this model entirely.
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-6">
              Modern HRMS platforms now ingest dozens of signals — historical attendance, seasonal patterns, local events, employee contract types, even weather data in some implementations — to generate shift schedules that anticipate demand before it materializes. The result is fewer understaffed periods, more balanced workloads, and significantly less manager time spent on rescheduling.
            </p>

            {/* h3 */}
            <h3 id="how-models-work" className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[21px] leading-[24px] text-[#111827] mt-6 mb-3">
              How the Models Work
            </h3>
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-8">
              At the core of predictive scheduling is a time-series forecasting model that learns from historical attendance data. The model is trained on months or years of records — who came in when, how long shifts ran, where gaps occurred — and learns to identify patterns that correlate with future attendance events.
            </p>

            {/* div.article-img */}
            <div className="w-full bg-[linear-gradient(116.5deg,#F0F0FF_0%,#E8E8FF_100%)] border border-[#E5E7EB] rounded-[12px] py-[80px] flex flex-col items-center justify-center text-center my-6">
              <span className="font-['Inter',sans-serif] font-semibold text-[13px] leading-[21px] tracking-[0.52px] text-[rgba(91,95,255,0.6)] uppercase">
                Workforce Analytics Dashboard — Predictive Scheduling Interface
              </span>
            </div>
            <figcaption className="text-center font-['Inter',sans-serif] italic text-[12px] leading-[19px] text-[#6B7280] mb-8 w-full">
              Fig. 1: Workzi's predictive scheduling interface showing 14-day demand forecasts alongside current shift coverage.
            </figcaption>

            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-8">
              What makes modern implementations powerful is that these models are not static. They update continuously as new data flows in, recalibrating their predictions based on emerging patterns. A sudden spike in leave requests — perhaps correlated with a regional event or a flu season — adjusts the model's short-term forecasts automatically.
            </p>

            {/* CALLOUT BOX (div.callout - Amber warning box) */}
            <div id="implementation-guide" className="bg-[#FEF3C7] border border-[#FCD34D] rounded-[12px] p-[20px_24px] my-8 flex items-start gap-[14px] w-full">
              <div className="w-[32px] h-[32px] rounded-[8px] bg-[#F59E0B] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={3} />
              </div>
              <p className="font-['Inter',sans-serif] font-bold text-[15px] leading-[25px] text-[#92400E] m-0">
                Implementation Note: For predictive scheduling to work reliably, you need at least 6 months of clean historical attendance data. Before deploying AI models, ensure your data hygiene practices are solid — incomplete or inconsistent records will degrade model accuracy significantly.
              </p>
            </div>

            {/* Section 3 Heading */}
            <h2 id="anomaly-detection" className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] leading-[32px] tracking-[-0.28px] text-[#111827] mt-8 mb-4">
              Anomaly Detection: Catching Problems Before They Escalate
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-6">
              Perhaps the most operationally valuable application of AI in attendance management is anomaly detection — the ability to flag unusual patterns in real time before they create downstream problems in payroll or compliance reporting.
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-6">
              Anomalies take many forms. An employee who consistently checks in two minutes before a shift threshold might indicate time-rounding issues. A sudden cluster of sick leave requests from a single department could signal a management problem. A pattern of check-ins from an unusual location might indicate a geo-fence misconfiguration or, in rare cases, a fraudulent entry.
            </p>

            {/* Bullet List */}
            <ul className="flex flex-col items-start gap-[12px] my-6 pl-4 list-disc font-['Inter',sans-serif] text-[17px] leading-[30px] text-[#111827]">
              <li>Real-time flagging of check-in patterns outside statistical norms</li>
              <li>Automatic escalation to HR when anomalies cross defined thresholds</li>
              <li>Continuous learning to distinguish genuine anomalies from legitimate edge cases</li>
              <li>Integration with payroll processing to prevent erroneous calculations from propagating</li>
            </ul>

            {/* Section 4 Heading */}
            <h2 id="impact-metrics" className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] leading-[32px] tracking-[-0.28px] text-[#111827] mt-8 mb-4">
              Real-World Impact Metrics
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-6">
              After analyzing data from 500 companies that implemented AI-powered attendance management through Workzi, the patterns are consistent. Organizations see the largest gains in three areas: approval cycle time, payroll error rate, and manager time spent on administrative tasks.
            </p>

            {/* div.article-img */}
            <div className="w-full bg-[linear-gradient(116.5deg,#F0F0FF_0%,#E8E8FF_100%)] border border-[#E5E7EB] rounded-[12px] py-[80px] flex flex-col items-center justify-center text-center my-6">
              <span className="font-['Inter',sans-serif] font-semibold text-[13px] leading-[21px] tracking-[0.52px] text-[rgba(91,95,255,0.6)] uppercase">
                Impact Metrics Chart — Before vs After HRMS Implementation
              </span>
            </div>
            <figcaption className="text-center font-['Inter',sans-serif] italic text-[12px] leading-[19px] text-[#6B7280] mb-8 w-full">
              Fig. 2: Average impact metrics across 500 Workzi customers 12 months post-implementation.
            </figcaption>

            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-8">
              The average approval cycle for leave requests dropped from 3.2 days to under 18 hours. Payroll error rates fell from an industry average of 2.8% to 0.4%. And perhaps most significantly for frontline managers — the average time spent on attendance-related administrative tasks dropped by 68%, freeing up roughly 4 hours per manager per week.
            </p>

            {/* Section 5 Heading */}
            <h2 id="hr-teams" className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] leading-[32px] tracking-[-0.28px] text-[#111827] mt-8 mb-4">
              What This Means for HR Teams
            </h2>
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-6">
              The strategic implication of all this is significant. When AI handles the operational layer of attendance management — the tracking, the anomaly detection, the approval routing, the compliance calculations — HR teams are freed to focus on the things that actually differentiate great people operations from mediocre ones: culture, development, retention strategy, and employee experience design.
            </p>
            <p className="font-['Inter',sans-serif] font-normal text-[17px] leading-[31px] text-[#111827] mb-8">
              This is not a future-state vision. It's happening right now, in organizations that have made the decision to treat HR as a strategic function rather than an administrative one. The technology is available, the economics are favorable, and the case studies are compelling.
            </p>

            {/* Section 6 Heading */}
            <h2 id="key-takeaways" className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[28px] leading-[32px] tracking-[-0.28px] text-[#111827] mt-8 mb-4">
              Key Takeaways
            </h2>
            <ol className="flex flex-col items-start gap-[12px] my-6 pl-4 list-decimal font-['Inter',sans-serif] text-[17px] leading-[30px] text-[#111827]">
              <li>AI-powered attendance management delivers measurable ROI within 90 days of implementation for most mid-market companies.</li>
              <li>Predictive scheduling reduces both understaffing costs and unnecessary overtime by 20–30% on average.</li>
              <li>Real-time anomaly detection prevents payroll errors from compounding — catching issues at the source rather than during month-end reconciliation.</li>
              <li>The prerequisite for AI to work is clean, consistent data. Data hygiene investments pay dividends immediately.</li>
              <li>HR teams that adopt AI platforms shift their focus from administration to strategy — a transformation that directly improves employee experience and retention.</li>
            </ol>

            {/* ARTICLE TAGS (div.article-tags) */}
            <div className="border-t border-[#E5E7EB] pt-[32px] mt-12 w-full flex flex-col items-start gap-[12px]">
              <span className="font-['Inter',sans-serif] font-bold text-[12px] leading-[19px] tracking-[0.72px] uppercase text-[#6B7280]">
                Tagged In
              </span>
              <div className="flex flex-wrap items-center gap-[8px] w-full">
                {[
                  'AI & Automation',
                  'Attendance',
                  'HRMS',
                  'Analytics',
                  'Payroll'
                ].map((tag, idx) => (
                  <span key={idx} className="bg-white border border-[#E5E7EB] rounded-[100px] px-[12px] py-[4px] inline-flex items-center gap-[6px] text-[12px] font-semibold tracking-[0.48px] text-[#6B7280]">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#5B5FFF] shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* AUTHOR BOX (Author box) */}
            <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-[16px] p-[28px] mt-8 flex flex-col sm:flex-row items-start gap-[18px] w-full">
              <div className="w-[56px] h-[56px] rounded-[14px] bg-[linear-gradient(135deg,#F59E0B_0%,#FBBF24_100%)] flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[18px] text-white shrink-0">
                KR
              </div>
              <div className="flex flex-col text-left gap-1">
                <span className="font-['Inter',sans-serif] font-bold text-[14px] leading-[22px] text-[#111827]">
                  Kavya Rajan
                </span>
                <span className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-[#6B7280]">
                  Head of Product, Workzi · 12 articles published
                </span>
                <p className="font-['Inter',sans-serif] font-normal text-[14px] leading-[22px] text-[#6B7280] mt-2 mb-0">
                  Head of Product at Workzi. With over a decade of experience in enterprise SaaS and workforce management, she is passionate about building tools that empower both employees and managers.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── NEWSLETTER CTA (div.nl-article-card) ─── */}
      <section className="py-16 bg-white w-full">
        <Container className="max-w-[1184px] mx-auto px-4 md:px-8">
          <FadeUp>
            <div className="w-full min-h-[280px] bg-[linear-gradient(103.31deg,#5B5FFF_0%,#4347E0_100%)] rounded-[32px] p-8 md:p-[64px] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">

              {/* Radial gradient glow top-right (::before) */}
              <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-[radial-gradient(70.71%_70.71%_at_50%_50%,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_70%)] pointer-events-none z-0" />

              {/* Left Column */}
              <div className="relative z-10 max-w-[496px] w-full flex flex-col items-start gap-[15px] text-left">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[26px] sm:text-[30px] lg:text-[32px] leading-[37px] text-white">
                  Get weekly workforce intelligence in your inbox.
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[26px] text-white/75">
                  Join 14,000+ HR leaders reading the Workzi weekly digest. Insights, case studies, and product updates — every Thursday.
                </p>
              </div>

              {/* Right Column */}
              <div className="relative z-10 max-w-[496px] w-full flex flex-col items-start gap-[10px]">
                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center gap-[10px] w-full">
                  <input
                    type="email"
                    placeholder="your@company.com"
                    className="w-full sm:w-[333px] h-[45px] px-[18px] py-[14px] bg-white rounded-[10px] text-[14px] leading-[17px] text-[#111827] placeholder:text-[#757575] font-['Inter',sans-serif] outline-none shadow-xs"
                  />
                  <button
                    type="submit"
                    className="w-[153px] h-[45px] px-[28px] py-[13px] bg-[#F59E0B] rounded-[10px] font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] text-white flex items-center justify-center gap-[7px] hover:bg-[#D97706] hover:scale-[1.02] transition-all duration-200 cursor-pointer shrink-0 shadow-sm"
                  >
                    <span>Subscribe</span>
                    <ArrowRight size={15} className="text-white" strokeWidth={2.5} />
                  </button>
                </form>
                <p className="font-['Inter',sans-serif] font-normal text-[12px] leading-[19px] text-white/50 px-[2px] text-left">
                  No spam. Unsubscribe at any time. Privacy Policy applies.
                </p>
              </div>

            </div>
          </FadeUp>
        </Container>
      </section>

      {/* ─── YOU MIGHT ALSO LIKE ─── */}
      <div className="py-20 bg-white">
        <Container className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
                You Might Also Like
              </h2>
              <p className="text-[14px] text-slate-500 font-medium">
                More insights on AI and workforce management
              </p>
            </div>
            <a href="#blog" className="hidden sm:flex items-center gap-1.5 text-[14px] font-bold text-[#5B5FEF] hover:text-[#4F46E5] transition-colors">
              Browse all articles <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                bg: 'bg-gradient-to-br from-[#0F766E] to-[#10B981]',
                header: 'Payroll Automation',
                tag: 'Payroll',
                title: 'How to Reduce Payroll Processing Time by 40% with Integrated HRMS',
                date: 'May 22, 2026',
                time: '5 min'
              },
              {
                bg: 'bg-gradient-to-br from-[#9A3412] to-[#EA580C]',
                header: 'Remote Workforce',
                tag: 'Remote Work',
                title: 'Managing Distributed Teams Across 20+ Time Zones: A Practical HRMS Playbook',
                date: 'May 18, 2026',
                time: '9 min'
              },
              {
                bg: 'bg-gradient-to-br from-[#1E3A8A] to-[#2563EB]',
                header: 'Compliance',
                tag: 'Compliance',
                title: 'Labour Law Compliance in 2026: What Every HR Manager Needs to Know',
                date: 'May 14, 2026',
                time: '6 min'
              }
            ].map((story, idx) => (
              <FadeUp key={idx} delay={0.1 * idx} className="bg-white border border-slate-200 rounded-3xl overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all group flex flex-col cursor-pointer">
                <div className={`h-48 ${story.bg} flex items-center justify-center p-6 relative`}>
                  <div className="absolute inset-0 bg-black/10" />
                  <h3 className="relative z-10 text-[11px] font-extrabold text-white tracking-[0.2em] uppercase opacity-90 text-center">
                    {story.header}
                  </h3>
                </div>
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-1.5 mb-4">
                    <span className="text-[11px] font-bold text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">
                      {story.tag}
                    </span>
                  </div>
                  <h3 className="text-[16px] font-bold text-slate-900 leading-snug mb-4 group-hover:text-[#5B5FEF] transition-colors">
                    {story.title}
                  </h3>
                  <div className="mt-auto flex items-center gap-2 text-[11px] font-medium text-slate-400">
                    <Clock size={12} />
                    <span>{story.time}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 mx-1" />
                    <span>{story.date}</span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </div>

    </div>
  );
};

export default ArticlePage;
