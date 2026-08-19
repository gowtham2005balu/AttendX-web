import React from 'react';
import { Container } from '../Container';

export const CTA: React.FC = () => {
  return (
    <section className="relative bg-[#1D4ED8] py-[50px] sm:py-[70px] px-4 md:px-12 lg:px-[120px] overflow-hidden text-center flex flex-col items-center justify-center min-h-[320px] sm:min-h-[368px] w-full isolate">
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
          className="text-white text-[24px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold leading-tight lg:leading-[48px] text-center max-w-[600px]"
          style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.04)' }}
        >
          Ready to simplify workforce management?
        </h2>

        {/* Subtitle */}
        <p className="text-white text-[13.5px] sm:text-[14px] font-medium leading-[20px] sm:leading-[22px] max-w-[440px] text-center">
          Manage attendance, Time-off, and employee operations from one platform. Setup takes minutes.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-center pt-[12px]">
          <a
            href="#pricing"
            className="bg-[#1A1A1A] hover:bg-black text-white text-[14px] font-semibold leading-[17px] px-[26px] py-[13px] min-h-[44px] rounded-[50px] transition-all duration-300 shadow-md cursor-pointer hover:scale-[1.02] inline-flex items-center justify-center"
          >
            Book Demo
          </a>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
