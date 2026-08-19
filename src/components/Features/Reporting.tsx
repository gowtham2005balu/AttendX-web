import React from 'react';
import { Container } from '../Container';
import { Check, ArrowRight } from 'lucide-react';

export const Reporting: React.FC = () => {
  const features = [
    'Attendance Reports',
    'Time-off Reports',
    'Team Insights',
    'Workforce Trends',
    'Exportable Data',
  ];

  return (
    <section id="feat-analytics" className="py-[100px] px-4 md:px-12 lg:px-[120px] bg-[#FAFAFA] relative overflow-hidden w-full">
      <Container className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Side: HR Dashboard Analytics Mockup */}
        <div className="relative flex justify-center items-center w-full max-w-[560px] mx-auto">
          <div className="w-full bg-white rounded-[24px] border border-[#E5E7EB] shadow-[0px_8px_24px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col">
            {/* Header tab */}
            <div className="flex items-center justify-start px-[22px] py-[14px] bg-[#F8FAFC] gap-[8px]">
              <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
              <span className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-bold text-[#6B7280] ml-2">
                HR Dashboard — Workzi Analytics
              </span>
            </div>

            {/* Body */}
            <div className="p-[22px] flex flex-col gap-5">
              {/* Top 3 stats grid */}
              <div className="grid grid-cols-3 gap-[12px]">
                <div className="bg-[#F8FAFC] border border-[#F3F4F6] p-4 rounded-[14px] flex flex-col gap-[3px] text-left">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.6px]">
                    Total Employees
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] font-extrabold text-[#111827] leading-[28px]">
                    142
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-bold text-[#10B981]">
                    +3 this month
                  </span>
                </div>
                <div className="bg-[#F8FAFC] border border-[#F3F4F6] p-4 rounded-[14px] flex flex-col gap-[3px] text-left">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.6px]">
                    Present Today
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] font-extrabold text-[#111827] leading-[28px]">
                    138
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-bold text-[#10B981]">
                    96.4% rate
                  </span>
                </div>
                <div className="bg-[#F8FAFC] border border-[#F3F4F6] p-4 rounded-[14px] flex flex-col gap-[3px] text-left">
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-bold text-[#9CA3AF] uppercase tracking-[0.6px]">
                    On Time-off
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[22px] font-extrabold text-[#111827] leading-[28px]">
                    4
                  </span>
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-bold text-[#EF4444]">
                    2 pending
                  </span>
                </div>
              </div>

              {/* Weekly chart representation */}
              <div className="bg-[#F8FAFC] border border-[#F3F4F6] p-4 rounded-[14px] flex flex-col gap-2">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-bold text-[#111827] text-left">
                  Weekly Attendance Rate
                </span>
                <div className="h-[88px] flex items-end justify-between gap-[10px] pt-2">
                  {[
                    { day: 'Mon', height: 'h-[65%]', bg: 'bg-[#5B5FFF] opacity-[0.85]' },
                    { day: 'Tue', height: 'h-[50%]', bg: 'bg-[#5B5FFF] opacity-[0.70]' },
                    { day: 'Wed', height: 'h-[75%]', bg: 'bg-[#5B5FFF] opacity-[0.85]' },
                    { day: 'Thu', height: 'h-[64%]', bg: 'bg-[#F59E0B] opacity-[0.90]' },
                    { day: 'Fri', height: 'h-[80%]', bg: 'bg-[#5B5FFF]' },
                    { day: 'Sat', height: 'h-[44%]', bg: 'bg-[#5B5FFF] opacity-[0.50]' },
                    { day: 'Sun', height: 'h-[48%]', bg: 'bg-[#5B5FFF] opacity-[0.50]' },
                  ].map((bar, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div className={`w-full ${bar.height} ${bar.bg} rounded-t-[6px]`} />
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[9px] font-normal text-[#9CA3AF]">
                        {bar.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Team Today lists */}
              <div className="flex flex-col gap-1.5 text-left">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-bold text-[#111827] pt-2 pb-1">
                  Team Today
                </span>
                <div className="flex items-center justify-between py-2 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-[28px] h-[28px] rounded-full bg-[rgba(91,95,255,0.1)] flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold text-[#5B5FFF]">
                      SA
                    </div>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-semibold text-[#111827]">
                      Sarah Anderson
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-['Inter',sans-serif] text-[11px] text-[#6B7280]">09:01 AM</span>
                    <span className="px-[9px] py-[3px] rounded-[6px] bg-[rgba(16,185,129,0.1)] font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-bold text-[#10B981]">
                      Present
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-[28px] h-[28px] rounded-full bg-[rgba(245,158,11,0.1)] flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold text-[#F59E0B]">
                      MK
                    </div>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-semibold text-[#111827]">
                      Michael Kim
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-['Inter',sans-serif] text-[11px] text-[#6B7280]">09:47 AM</span>
                    <span className="px-[9px] py-[3px] rounded-[6px] bg-[rgba(245,158,11,0.1)] font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-bold text-[#F59E0B]">
                      Late
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-[#F1F5F9]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-[28px] h-[28px] rounded-full bg-[rgba(16,185,129,0.1)] flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold text-[#10B981]">
                      PR
                    </div>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-semibold text-[#111827]">
                      Priya Rao
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-['Inter',sans-serif] text-[11px] text-[#6B7280]">—</span>
                    <span className="px-[9px] py-[3px] rounded-[6px] bg-[rgba(91,95,255,0.1)] font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-bold text-[#5B5FFF]">
                      On Time-off
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-[28px] h-[28px] rounded-full bg-[rgba(91,95,255,0.1)] flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold text-[#5B5FFF]">
                      JT
                    </div>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-semibold text-[#111827]">
                      James Turner
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-['Inter',sans-serif] text-[11px] text-[#6B7280]">08:52 AM</span>
                    <span className="px-[9px] py-[3px] rounded-[6px] bg-[rgba(16,185,129,0.1)] font-['Plus_Jakarta_Sans',sans-serif] text-[10px] font-bold text-[#10B981]">
                      Present
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content Info */}
        <div className="flex flex-col items-start max-w-[540px] mx-auto">
          {/* Tag Pill */}
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] mb-6 gap-[6px]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
              Reporting
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[42px] lg:text-[50px] leading-[1.12] lg:leading-[56px] tracking-[-1px] text-[#111827] mb-6">
            Turn Attendance Data Into Actionable Insights
          </h2>

          {/* Subtitle */}
          <p className="font-['Inter',sans-serif] font-medium text-[15.6px] leading-[24px] text-[#111827] mb-8">
            Provide employees access to attendance history, Time-off records, achievements, profile management, and notifications from one place.
          </p>

          {/* Checklist 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full mb-8">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-[11px]">
                <div className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#10B981]" strokeWidth={3} />
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[15px] leading-[19px] text-[#111827]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <a
            href="#pricing"
            className="bg-black hover:bg-[#1A1A1A] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center gap-[8px] cursor-pointer"
          >
            Learn More
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Reporting;
