import React from 'react';
import { Container } from '../Container';
import { User, CheckSquare, Eye, BarChart3 } from 'lucide-react';

export const Workflow: React.FC = () => {
  const steps = [
    {
      step: 'Step 01',
      title: 'Employee Checks In',
      desc: 'Employee opens the app, location is verified via geo-fence, and they slide to check in instantly.',
      icon: <User className="w-7 h-7 sm:w-8 sm:h-8 text-[#5B5FFF]" />,
    },
    {
      step: 'Step 02',
      title: 'Attendance Recorded',
      desc: 'Check-in time, location, and shift data are logged and synced to the platform in real time.',
      icon: <CheckSquare className="w-7 h-7 sm:w-8 sm:h-8 text-[#5B5FFF]" />,
    },
    {
      step: 'Step 03',
      title: 'Manager Reviews',
      desc: 'HR managers see live dashboards, approve Time-off requests, and flag anomalies from their desk or mobile.',
      icon: <Eye className="w-7 h-7 sm:w-8 sm:h-8 text-[#5B5FFF]" />,
    },
    {
      step: 'Step 04',
      title: 'Reports Generated',
      desc: 'Automated reports with insights, trends, and compliance summaries are generated and ready to export.',
      icon: <BarChart3 className="w-7 h-7 sm:w-8 sm:h-8 text-[#5B5FFF]" />,
    },
  ];

  return (
    <section id="feat-workflow" className="py-[60px] sm:py-[80px] lg:py-[120px] px-4 md:px-12 lg:px-[128px] bg-white relative overflow-hidden w-full">
      <Container className="max-w-[1184px] mx-auto flex flex-col items-center gap-[12px] sm:gap-[14px]">
        {/* Section Label Header */}
        <div className="flex items-center justify-center gap-[8px] mb-2">
          <div className="w-[28px] h-[28px] bg-[#EEEEFF] rounded-[8px] flex items-center justify-center">
            <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[12px] leading-[15px] tracking-[1.54px] uppercase text-[#5B5FFF]">
              04
            </span>
          </div>
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] leading-[14px] tracking-[1.54px] uppercase text-[#5B5FFF]">
            Workflow
          </span>
        </div>

        {/* Section Title */}
        <h2 className="font-['Inter',sans-serif] font-semibold text-[26px] sm:text-[38px] lg:text-[50px] leading-[34px] sm:leading-[46px] lg:leading-[56px] tracking-[-1px] text-[#111827] text-center max-w-[300px] sm:max-w-[540px] lg:max-w-[732px]">
          Simple Process. Better Workforce Management.
        </h2>

        {/* Section Subtitle */}
        <p className="font-['Inter',sans-serif] font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-[26px] sm:leading-[28px] lg:leading-[29px] text-[#6B7280] text-center max-w-[300px] sm:max-w-[460px] lg:max-w-[540px] pt-[3px] mb-8 sm:mb-12">
          From the moment an employee checks in to when HR generates a report — everything happens automatically, accurately, and on time.
        </p>

        {/* Steps Grid */}
        <div className="relative max-w-[1184px] w-full mx-auto mt-2 sm:mt-4">
          {/* Connection line — desktop only */}
          <div className="hidden lg:block absolute top-[68px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#5B5FFF] to-[rgba(91,95,255,0.25)] z-0">
            <div className="absolute -top-[4px] left-0 w-[10px] h-[10px] rounded-full bg-[#5B5FFF]" />
            <div className="absolute -top-[4px] right-0 w-[10px] h-[10px] rounded-full bg-[#5B5FFF]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                {/* Step Number */}
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[10px] leading-[13px] tracking-[1.2px] uppercase text-[#5B5FFF] mb-3">
                  {item.step}
                </span>

                {/* Step Icon Box */}
                <div className="w-[68px] h-[68px] sm:w-[80px] sm:h-[80px] rounded-[20px] sm:rounded-[24px] bg-[#F8FAFC] border-2 border-[#F3F4F6] flex items-center justify-center mb-4 sm:mb-5 shrink-0 shadow-xs group-hover:border-[#5B5FFF]/40 transition-colors duration-300">
                  {item.icon}
                </div>

                {/* Step Title */}
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[16px] sm:text-[18px] leading-[22px] sm:leading-[23px] text-[#111827] mb-2 sm:mb-2.5">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="font-['Inter',sans-serif] font-normal text-[13px] sm:text-[14px] leading-[21px] sm:leading-[22px] text-[#6B7280] max-w-[264px]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Workflow;
