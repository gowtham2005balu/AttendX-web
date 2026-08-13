import React from 'react';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = [
    {
      initials: 'M',
      name: 'Meera N.',
      role: 'HR Manager',
      quote: "Workzi cut our attendance discrepancies to almost zero. Our HR team finally isn't buried in spreadsheets.",
      rating: '4.8',
      avatarBg: 'bg-[#5B5FFF]',
    },
    {
      initials: 'D',
      name: 'Daniel O.',
      role: 'Team Lead',
      quote: "Leave approvals used to take days over email. Now it's a single tap and my team knows instantly.",
      rating: '4.9',
      avatarBg: 'bg-[#F59E0B]',
    },
    {
      initials: 'P',
      name: 'Priya R.',
      role: 'Operations Manager',
      quote: "Our field staff can check in from anywhere, and I can see exactly who's on duty in real time.",
      rating: '4.8',
      avatarBg: 'bg-[#10B981]',
    },
  ];

  return (
    <section className="py-[40px] sm:py-[80px] px-4 md:px-12 lg:px-[120px] bg-white relative overflow-hidden max-w-[1440px] mx-auto">
      <Container className="max-w-[1200px] mx-auto">
        {/* Header Block */}
        <div className="text-center max-w-[1200px] mx-auto mb-8 sm:mb-12 flex flex-col items-center gap-[14px] sm:gap-[18px]">
          {/* Section Tag */}
          <span className="bg-[#F0F9F0] text-[#3B8A3E] px-[14px] py-[5px] rounded-[50px] text-[12px] font-semibold leading-[15px] inline-flex items-center gap-[6px]">
            Testimonials
          </span>

          {/* Title */}
          <h2 className="text-[#1A1A1A] font-semibold text-[24px] sm:text-[32px] lg:text-[36px] leading-[32px] sm:leading-[44px] tracking-[-0.0112em] text-center">
            Loved by modern teams.
          </h2>
        </div>

        {/* 3 Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#EBEBEB] rounded-[16px] p-[24px] shadow-[0px_2px_12px_rgba(0,0,0,0.05)] flex flex-col justify-between cursor-default gap-[12px] hover:shadow-md transition-all duration-300"
            >
              {/* Profile Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[10px]">
                  <div className={`w-[40px] h-[40px] rounded-full ${item.avatarBg} text-white font-bold flex items-center justify-center text-[14px] leading-[17px] shrink-0`}>
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#1A1A1A] leading-[17px]">
                      {item.name}
                    </h3>
                    <span className="text-[12px] text-[#888888] font-normal leading-[15px] block mt-0.5">
                      {item.role}
                    </span>
                  </div>
                </div>
                
                {/* Rating block */}
                <div className="flex items-center gap-[4px]">
                  <span className="text-[#F59E0B] font-bold text-[13px] leading-[16px] tracking-tight">
                    ★★★★★
                  </span>
                  <span className="text-[#1A1A1A] font-bold text-[13px] leading-[16px] ml-1">
                    {item.rating}
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-[#555555] text-[13px] leading-[22px] font-normal">
                {item.quote}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Testimonials;
