import React from 'react';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const Employee: React.FC = () => {
  return (
    <section className="py-[40px] sm:py-[60px] px-4 md:px-12 lg:px-[100px] bg-white relative overflow-hidden max-w-[1440px] mx-auto">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Side: Main Asset Image */}
        <div className="relative flex justify-center items-center w-full max-w-[620px] mx-auto lg:mx-0">
          <img
            src="/hero-images/div.zwc-left-wrap (2).png"
            alt="Everything Employees Need Mockup"
            className="w-full max-w-[620px] h-auto object-contain select-none pointer-events-none drop-shadow-xl rounded-[16px]"
          />
        </div>

        {/* Right Side: Content info */}
        <div className="flex flex-col items-start w-full max-w-[580px] mx-auto lg:mx-0">
          {/* Section tag */}
          <span className="bg-[#F0F9F0] text-[#3B8A3E] px-[14px] py-[5px] rounded-[50px] text-[12px] font-semibold leading-[15px] mb-4 inline-flex items-center gap-[6px]">
            Employee Self-Service
          </span>

          {/* Heading */}
          <h2 className="text-[#000000] font-semibold text-[26px] sm:text-[36px] md:text-[42px] lg:text-[55.9px] leading-tight lg:leading-[62px] tracking-[-1.12px] mb-[18px]">
            One app. Everything they need.
          </h2>

          {/* Subtitle */}
          <p className="text-[#111827] text-[14.5px] sm:text-[15.6px] font-medium leading-[22px] sm:leading-[24px] mb-[24px]">
            Attendance records, leave history, notifications, and profile details — employees get self-serve access to it all, without ever needing to ask HR.
          </p>

          {/* Checklist 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[14px] gap-y-[14px] w-full pt-[13.1px] mb-[24px]">
            {[
              'Profile management', 'Notifications',
              'Attendance records', 'Personal dashboard'
            ].map((text, idx) => (
              <div key={idx} className="flex items-center gap-[12px] min-h-[22px]">
                <div className="w-[22px] h-[22px] rounded-[6px] bg-[rgba(16,185,129,0.12)] flex items-center justify-center text-[#10B981] shrink-0">
                  <Check size={12} strokeWidth={2.5} />
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[14.5px] sm:text-[16px] font-semibold leading-[20px] text-[#111827]">{text}</span>
              </div>
            ))}
          </div>

          {/* Learn More button */}
          <a href="#employee-app" className="bg-black text-white text-[14px] font-semibold leading-[17px] px-[26px] py-[13px] min-h-[44px] rounded-[50px] hover:bg-[#1A1A1A] transition-all duration-300 shadow-md inline-flex items-center gap-[8px] cursor-pointer hover:scale-[1.02]">
            Learn More
            <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};
export default Employee;
