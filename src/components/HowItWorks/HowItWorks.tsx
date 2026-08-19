import React from 'react';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { User, CheckSquare, Eye, BarChart3 } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 'STEP 01',
      title: 'Employee Checks In',
      desc: 'Open the app, verify location, and check in with a single tap.',
      icon: <User className="w-7 h-7 text-[#5B5FFF]" />,
    },
    {
      step: 'STEP 02',
      title: 'Attendance Recorded',
      desc: 'Check-in time, location, and shift data sync to the platform instantly.',
      icon: <CheckSquare className="w-7 h-7 text-[#5B5FFF]" />,
    },
    {
      step: 'STEP 03',
      title: 'Manager Reviews',
      desc: 'Managers view live dashboards, approve Time-off, and catch attendance issues before they become problems.',
      icon: <Eye className="w-7 h-7 text-[#5B5FFF]" />,
    },
    {
      step: 'STEP 04',
      title: 'Reports Generated',
      desc: 'Automated reports turn attendance data into insights leadership can actually use.',
      icon: <BarChart3 className="w-7 h-7 text-[#5B5FFF]" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-[50px] sm:py-[80px] px-4 md:px-12 lg:px-[120px] bg-white relative overflow-hidden max-w-[1440px] mx-auto">
      <Container>
        {/* Header Block */}
        <div className="text-center max-w-[1200px] mx-auto mb-10 sm:mb-14 flex flex-col items-center gap-[12px] sm:gap-[15px]">

          {/* Title */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#111827] font-extrabold text-[28px] sm:text-[38px] md:text-[42px] lg:text-[52px] leading-tight lg:leading-[60px] tracking-[-1.04px]">
            How It Works
          </h2>

          {/* Subtitle */}
          <p className="text-[#111827] text-[14.5px] sm:text-[15.6px] font-medium max-w-[560px] leading-[22px] sm:leading-[24px] text-center">
            Simple, fast, and reliable attendance management in four easy steps.
          </p>
        </div>

        {/* Cards Grid with Horizontal Line Overlay */}
        <div className="relative max-w-[1200px] mx-auto">
          {/* Horizontal Line Connector */}
          <div
            className="hidden lg:block absolute top-[145px] left-[12%] right-[12%] h-[2px] z-0"
            style={{ background: 'linear-gradient(90deg, #5B5FFF 0%, rgba(91, 95, 255, 0.3) 100%)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[28px] border border-[#F3F4F6] px-[28px] pt-[40px] pb-[40px] shadow-[0px_4px_16px_rgba(0,0,0,0.08),0px_2px_6px_rgba(0,0,0,0.04)] hover:shadow-xl hover:scale-[1.02] hover:border-[#5B5FFF]/30 transition-all duration-300 flex flex-col items-center text-center h-full group cursor-default"
              >
                {/* Step indicator */}
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-extrabold text-[#5B5FFF] tracking-[1.1px] uppercase mb-4">
                  {item.step}
                </span>

                {/* Icon wrapper badge */}
                <div className="w-[64px] h-[64px] rounded-[20px] bg-[#EEEEFF] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {item.icon}
                </div>

                {/* Content Title */}
                <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-extrabold text-[#111827] leading-[23px] mb-3 group-hover:text-[#5B5FFF] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Content Description */}
                <p className="text-[14px] text-[#6B7280] leading-[22px] font-normal max-w-[224px]">
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
export default HowItWorks;
