import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Globe,
  Box,
  Star,
  Hexagon,
} from 'lucide-react';

export const TrustedCompanies: React.FC = () => {
  const companies = [
    {
      name: 'TechNova',
      icon: <Layers className="w-[20px] h-[20px] text-[#111827] stroke-[2.5]" />,
    },
    {
      name: 'Globalink',
      icon: <Globe className="w-[20px] h-[20px] text-[#111827] stroke-[2.5]" />,
    },
    {
      name: 'BuildBase',
      icon: <Box className="w-[20px] h-[20px] text-[#111827] stroke-[2.5]" />,
    },
    {
      name: 'StarPeak',
      icon: <Star className="w-[20px] h-[20px] text-[#111827] stroke-[2.5]" />,
    },
    {
      name: 'PulseOps',
      icon: (
        <svg className="w-[20px] h-[20px] text-[#111827] shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <polygon points="7,2 14,12 7,12" />
          <polygon points="17,22 10,12 17,12" />
        </svg>
      ),
    },
    {
      name: 'Layerify',
      icon: <Hexagon className="w-[20px] h-[20px] text-[#111827] stroke-[2.5]" />,
    }
  ];

  // Quadruple set for smooth uninterrupted infinite scroll loop
  const loopCompanies = [...companies, ...companies];

  return (
    <section className="bg-white py-[24px] sm:py-[32px] px-0 min-h-[96px] relative z-30 w-full overflow-hidden flex flex-col items-center justify-center gap-3.5">
      <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[12px] sm:text-[13px] leading-[17px] tracking-[0.6px] text-[#6B7280] uppercase text-center px-4">
        Trusted by growing teams everywhere
      </p>

      {/* Infinite Scrolling Ticker Track */}
      <div className="w-full relative overflow-hidden py-1">
        {/* Left & Right Gradient Overlays for smooth fade-in/out */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        <div className="flex w-fit">
          {/* Animated Strip 1 */}
          <motion.div
            className="flex items-center gap-8 sm:gap-14 md:gap-16 pr-8 sm:pr-14 md:pr-16 shrink-0"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
          >
            {loopCompanies.map((company, index) => (
              <div
                key={`a-${index}`}
                className="flex items-center gap-[8px] opacity-[0.55] hover:opacity-100 transition-opacity duration-300 cursor-pointer shrink-0"
              >
                <div className="w-[26px] sm:w-[28px] h-[26px] sm:h-[28px] flex items-center justify-center shrink-0">
                  {company.icon}
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[18px] font-extrabold leading-[23px] tracking-[-0.54px] text-[#111827] whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Animated Strip 2 (Duplicate for seamless loop) */}
          <motion.div
            className="flex items-center gap-8 sm:gap-14 md:gap-16 pr-8 sm:pr-14 md:pr-16 shrink-0"
            animate={{ x: ['0%', '-100%'] }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 25,
            }}
          >
            {loopCompanies.map((company, index) => (
              <div
                key={`b-${index}`}
                className="flex items-center gap-[8px] opacity-[0.55] hover:opacity-100 transition-opacity duration-300 cursor-pointer shrink-0"
              >
                <div className="w-[26px] sm:w-[28px] h-[26px] sm:h-[28px] flex items-center justify-center shrink-0">
                  {company.icon}
                </div>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[15px] sm:text-[18px] font-extrabold leading-[23px] tracking-[-0.54px] text-[#111827] whitespace-nowrap">
                  {company.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default TrustedCompanies;
