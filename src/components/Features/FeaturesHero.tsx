import React from 'react';
import { Container } from '../Container';
import { motion } from 'framer-motion';

export const FeaturesHero: React.FC = () => {
  return (
    <section
      id="features-hero"
      className="relative min-h-[600px] sm:min-h-[700px] lg:h-[820px] pt-[70px] pb-0 flex flex-col items-center justify-between bg-[#1E293B] overflow-hidden isolate w-full"
    >
      {/* Background illustration */}
      <div className="absolute inset-0 z-0">
        <img
          src="/features_hero_bg.jpg"
          alt="City skyline background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-transparent to-transparent z-10" />
      </div>

      <Container className="relative z-20 text-center flex flex-col items-center max-w-[1440px] px-5 pt-[36px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-[16px]"
        >
          {/* Header Title */}
          <h1
            className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[28px] sm:text-[40px] md:text-[48px] lg:text-[52px] leading-[1.15] lg:leading-[60px] text-white text-center max-w-[320px] sm:max-w-[560px] md:max-w-[680px] lg:max-w-[700px]"
            style={{ textShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' }}
          >
            Everything You Need To Manage Your Workforce
          </h1>

          {/* Subtitle */}
          <p className="font-['Inter',sans-serif] font-medium text-[14px] sm:text-[15px] leading-[24px] text-white text-center max-w-[300px] sm:max-w-[460px] md:max-w-[543px]">
            Track attendance, manage Time-off requests, monitor employee activity, and streamline HR operations from one intuitive platform.
          </p>

          {/* Book Demo Button */}
          <a
            href="#pricing"
            className="bg-white hover:bg-neutral-50 text-[#1A1A1A] font-['Inter',sans-serif] font-semibold text-[14px] sm:text-[15px] leading-[18px] px-[28px] sm:px-[32px] py-[13px] sm:py-[14px] rounded-[50px] transition-all duration-300 shadow-[0px_4px_16px_rgba(0,0,0,0.15)] cursor-pointer transform hover:scale-[1.03] inline-flex items-center justify-center mt-1 min-h-[44px]"
          >
            Book Demo
          </a>
        </motion.div>
      </Container>

      {/* Unified Phone Mockup Image */}
      <div className="w-full relative z-20 flex justify-center mt-auto mb-0 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-[360px] sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1182px] flex justify-center px-4 sm:px-0"
        >
          <img
            src="/hero-phone/PHONE MOCKUP.png"
            alt="Features App Screens Mockup"
            className="w-full h-auto object-contain select-none pointer-events-none drop-shadow-2xl align-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
};
