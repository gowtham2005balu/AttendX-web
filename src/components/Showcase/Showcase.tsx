import React from 'react';
import { Container } from '../Container';

export const Showcase: React.FC = () => {
  return (
    <section
      id="employee-experience"
      className="w-full bg-[#0F1117] py-[50px] sm:py-[80px] px-4 sm:px-6 md:px-10 lg:px-12 relative overflow-hidden isolate"
    >
      {/* div.exp-bg Radial Glow */}
      <div
        className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[800px] pointer-events-none z-0"
        style={{
          background:
            'radial-gradient(70.71% 70.71% at 50% 50%, rgba(91, 95, 255, 0.18) 0%, rgba(91, 95, 255, 0) 70%)',
        }}
      />

      {/* div.exp-inner */}
      <Container className="relative z-10 max-w-[1380px] mx-auto flex flex-col items-center gap-[14.8px] px-0">
        {/* Header Block: h2.section-title & p.section-subtitle */}
        <div className="text-center max-w-[1200px] mx-auto flex flex-col items-center gap-[14.8px]">
          {/* h2.section-title */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[26px] sm:text-[44px] lg:text-[54px] leading-[34px] sm:leading-[52px] lg:leading-[62px] tracking-[-1.04px] text-white text-center max-w-[720px]">
            Everything employees need, in one app.
          </h2>

          {/* p.section-subtitle */}
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[18px] leading-[24px] sm:leading-[31px] text-[rgba(255,255,255,0.6)] text-center max-w-[580px]">
            Available on iOS and Android. Give your workforce the freedom to manage attendance, leave, and profile details from anywhere.
          </p>
        </div>

        {/* div.exp-phones - Enlarged Phone Mockup Display */}
        <div className="w-full pt-[20px] sm:pt-[40px] flex justify-center items-end overflow-hidden max-w-full">
          <img
            src="/hero-phone/div.exp-phones.png"
            alt="Employee App Screens - Dashboard, Attendance, Leave, Profile"
            className="w-full max-w-[1380px] lg:scale-105 h-auto object-contain select-none pointer-events-none drop-shadow-2xl transition-transform duration-300"
          />
        </div>
      </Container>
    </section>
  );
};

export default Showcase;
