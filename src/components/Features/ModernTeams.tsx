import React from 'react';
import { Container } from '../Container';
import { Zap, Smartphone, Eye, Heart } from 'lucide-react';

export const ModernTeams: React.FC = () => {
  const features = [
    {
      title: 'Fast Adoption',
      desc: 'Set up your team in minutes with zero training.',
      icon: <Zap className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] text-[#5B5FFF]" />,
    },
    {
      title: 'Mobile First',
      desc: 'Manage attendance and Time-off directly from mobile.',
      icon: <Smartphone className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] text-[#5B5FFF]" />,
    },
    {
      title: 'Real-Time Visibility',
      desc: 'Monitor workforce activity live across teams.',
      icon: <Eye className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] text-[#5B5FFF]" />,
    },
    {
      title: 'Employee Friendly',
      desc: 'Simple workflows employees actually enjoy using.',
      icon: <Heart className="w-[24px] h-[24px] sm:w-[26px] sm:h-[26px] text-[#5B5FFF]" />,
    },
  ];

  return (
    <section className="py-[60px] sm:py-[80px] lg:py-[120px] px-4 md:px-12 lg:px-0 bg-[#1A1A1A] text-white relative overflow-hidden w-full">
      <Container className="max-w-[1320px] mx-auto flex flex-col gap-[36px] sm:gap-[44px] lg:gap-[50px]">
        {/* Header Block */}
        <div className="text-center max-w-[1320px] mx-auto flex flex-col items-center gap-[12px] sm:gap-[14px]">
          <h2 className="font-['Inter',sans-serif] font-semibold text-[28px] sm:text-[40px] lg:text-[56px] leading-[1.15] lg:leading-[62px] tracking-[-1.12px] text-white text-center max-w-[280px] sm:max-w-[450px] lg:max-w-[615px]">
            Built For Modern Teams
          </h2>

          <p className="font-['Inter',sans-serif] font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-[26px] sm:leading-[28px] lg:leading-[29px] text-[#D0D1D3] text-center max-w-[300px] sm:max-w-[420px] lg:max-w-[515px]">
            Workzi is designed from the ground up to be fast, intuitive, and powerful — without the complexity of legacy HR software.
          </p>
        </div>

        {/* 4 Cards Grid — 1-col mobile, 2-col tablet, 4-col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[20px] lg:gap-[24px] max-w-[1320px] w-full mx-auto">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#262626] rounded-[12px] p-[24px] sm:p-[28px] lg:p-[30px] flex flex-col items-start gap-[14px] sm:gap-[16px] hover:bg-[#2D2D2D] transition-all duration-300 min-h-[160px] sm:min-h-[200px] lg:min-h-[218px] text-left"
            >
              {/* Icon Box */}
              <div className="w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px] rounded-[12px] bg-[rgba(255,255,255,0.1)] flex items-center justify-center shrink-0">
                {item.icon}
              </div>

              {/* Text Block */}
              <div className="flex flex-col gap-[4px]">
                <h3 className="font-['Inter',sans-serif] font-semibold text-[14px] sm:text-[15.6px] leading-[22px] sm:leading-[24px] tracking-[-0.32px] text-white">
                  {item.title}
                </h3>
                <p className="font-['Inter',sans-serif] font-medium text-[13px] sm:text-[15.6px] leading-[21px] sm:leading-[24px] tracking-[-0.32px] text-[#B5B5B5]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Panoramic Banner */}
        <img
          src="/features/div.content-wrap.png"
          alt="Workzi platform overview — employee check-in, attendance tracking and profile updates"
          className="w-full h-auto block rounded-[10px] sm:rounded-[12px]"
          draggable={false}
        />
      </Container>
    </section>
  );
};

export default ModernTeams;
