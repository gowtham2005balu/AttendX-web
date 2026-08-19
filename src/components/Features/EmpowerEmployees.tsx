import React from 'react';
import { Container } from '../Container';
import { Check, ArrowRight } from 'lucide-react';

export const EmpowerEmployees: React.FC = () => {
  const features = [
    'Profile Management',
    'Attendance Records',
    'Time-off History',
    'Notifications',
    'Personal Dashboard',
  ];

  return (
    <section className="py-[60px] sm:py-[80px] lg:py-[100px] px-4 md:px-12 lg:px-[100px] bg-[#FAFAFA] relative overflow-hidden w-full">
      <Container className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col items-start w-full max-w-full lg:max-w-[580px]">
          {/* Tag Pill */}
          <div className="inline-flex items-center px-[14px] py-[5px] rounded-[50px] bg-[#F0F9F0] mb-5 sm:mb-6 gap-[6px]">
            <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#3B8A3E]">
              Employee Experience
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Inter',sans-serif] font-semibold text-[26px] sm:text-[38px] lg:text-[55.9px] leading-[1.15] lg:leading-[62px] tracking-[-1px] lg:tracking-[-1.12px] text-black mb-4 sm:mb-6">
            Empower Employees With Self-Service
          </h2>

          {/* Subtitle */}
          <p className="font-['Inter',sans-serif] font-medium text-[14px] sm:text-[15.6px] leading-[24px] text-[#111827] mb-6 sm:mb-8">
            Provide employees access to attendance history, Time-off records, achievements, profile management, and notifications from one place.
          </p>

          {/* Checklist 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 sm:gap-y-3.5 w-full mb-6 sm:mb-8">
            {features.map((item, idx) => (
              <div key={idx} className="flex items-center gap-[10px] sm:gap-[11px]">
                <div className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#10B981]" strokeWidth={3} />
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] sm:text-[15px] leading-[19px] text-[#111827]">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          <a
            href="#pricing"
            className="bg-black hover:bg-[#1A1A1A] text-white font-['Inter',sans-serif] font-semibold text-[14px] leading-[17px] px-[26px] py-[13px] rounded-[50px] transition-all duration-300 shadow-md inline-flex items-center gap-[8px] cursor-pointer min-h-[44px]"
          >
            Learn More
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Right Side: Mockup Image */}
        <div className="relative flex justify-center items-center overflow-hidden rounded-[20px] sm:rounded-[28px] w-full">
          <img
            src="/features/div.zwc-left-wrap (1).png"
            alt="Empower Employees Mockup"
            className="w-full h-auto object-cover rounded-[20px] sm:rounded-[28px]"
          />
        </div>
      </Container>
    </section>
  );
};

export default EmpowerEmployees;
