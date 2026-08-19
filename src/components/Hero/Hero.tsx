import React from 'react';
import { Container } from '../Container';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[560px] sm:min-h-[640px] lg:h-[820px] pt-[76px] pb-0 flex flex-col items-center justify-between bg-[#1E293B] overflow-hidden isolate"
    >
      {/* Hero background illustration */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.home.png"
          alt="City background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/30 via-transparent to-transparent z-10" />
      </div>

      <Container className="relative z-20 text-center flex flex-col items-center max-w-[1440px] px-4 sm:px-5 pt-[24px] sm:pt-[36px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-[14px] sm:gap-[18px]"
        >
          {/* Header title from Figma */}
          <h1
            className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-tight leading-tight lg:leading-[60px] max-w-[615px] text-center"
            style={{ textShadow: '0px 2px 8px rgba(0, 0, 0, 0.15)' }}
          >
            Workforce management, made simple, smart, and connected.
          </h1>

          {/* Subtitle from Figma */}
          <p className="text-white text-sm md:text-[15px] max-w-[543px] text-center font-medium leading-[22px] sm:leading-[24px]">
            Track attendance, manage Time-off, and stay on top of your team — all from one platform built for the way people actually work.
          </p>

          {/* Book Demo Button from Figma */}
          <a
            href="#pricing"
            className="bg-white text-[#1A1A1A] text-[15px] font-semibold leading-[18px] px-8 py-[14px] min-h-[44px] rounded-[50px] transition-all duration-300 shadow-[0px_4px_16px_rgba(0,0,0,0.15)] cursor-pointer transform hover:scale-[1.03] inline-flex items-center justify-center mt-1"
          >
            Book Demo
          </a>
        </motion.div>
      </Container>

      {/* Unified Phone Mockup Image (Attached to the bottom end of Hero) */}
      <div className="w-full relative z-20 flex justify-center mt-auto mb-0 pt-4 sm:pt-6 px-2 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-[1182px] flex justify-center"
        >
          <img
            src="/hero-phone/PHONE MOCKUP.png"
            alt="Workforce Management App Screens Mockup"
            className="w-full h-auto max-w-full object-contain select-none pointer-events-none drop-shadow-2xl align-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
