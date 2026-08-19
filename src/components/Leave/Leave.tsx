import React from 'react';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const Leave: React.FC = () => {
  return (
    <section className="py-[40px] sm:py-[60px] px-4 md:px-12 lg:px-[100px] bg-white relative overflow-hidden max-w-[1440px] mx-auto">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center max-w-[1240px] mx-auto">
        {/* Left Side: Content info */}
        <div className="order-2 lg:order-1 flex flex-col items-start w-full max-w-[580px] mx-auto lg:mx-0 lg:pt-[14px]">
          {/* Section tag */}
          <span className="bg-[#F0F9F0] text-[#3B8A3E] px-[14px] py-[5px] rounded-[50px] text-[12px] font-semibold leading-[15px] mb-4 inline-flex items-center gap-[6px]">
            Time-off Management
          </span>

          {/* Heading */}
          <h2 className="text-[#000000] font-semibold text-[26px] sm:text-[36px] md:text-[42px] lg:text-[55.9px] leading-tight lg:leading-[62px] tracking-[-1.12px] mb-[18px]">
            Time-off requests, sorted in a click.
          </h2>

          {/* Subtitle */}
          <p className="text-[#111827] text-[14.5px] sm:text-[15.6px] font-medium leading-[22px] sm:leading-[24px] mb-[24px]">
            Employees apply, managers approve, everyone stays in sync. Balances update in real time, so nobody's chasing an answer over email.
          </p>

          {/* Checklist 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[14px] gap-y-[14px] w-full pt-[13px] mb-[24px]">
            {[
              'Multiple Time-off types', 'Approval workflow',
              'Time-off balance tracking', 'Status updates'
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
          <a href="#features" className="bg-black text-white text-[14px] font-semibold leading-[17px] px-[26px] py-[13px] min-h-[44px] rounded-[50px] hover:bg-[#1A1A1A] transition-all duration-300 shadow-md inline-flex items-center gap-[8px] cursor-pointer hover:scale-[1.02]">
            Learn More
            <svg className="w-[16px] h-[16px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>

        {/* Right Side: Main Asset Image */}
        <div className="order-1 lg:order-2 relative flex justify-center items-center w-full max-w-[611px] mx-auto lg:mx-0">
          <img
            src="/hero-images/div.zwc-left-wrap (1).png"
            alt="Time-off Requests Made Simple Mockup"
            className="w-full max-w-[611px] h-auto object-contain select-none pointer-events-none drop-shadow-xl rounded-[16px]"
          />
        </div>
      </Container>
    </section>
  );
};
export default Leave;
