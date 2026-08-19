import React from 'react';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  const cards = [
    {
      title: 'Smart Attendance Tracking',
      desc: 'Track check-ins, monitor activity, and manage attendance records in real time, all from one centralized platform.',
      imageUrl: '/hero-images/b75a10e73229416983d3bc3f32820db34628fe00.png',
      bgColor: 'bg-[#F0FDF4]',
      borderColor: 'border-emerald-100',
      href: '#blog-article',
    },
    {
      title: 'Easy Time-off Management',
      desc: 'Simplify Time-off requests, approvals, and balance tracking with workflows built for modern HR teams.',
      imageUrl: '/hero-images/ba02c5435498a3429483b45dd9578499296f094d.png',
      bgColor: 'bg-[#EFF6FF]',
      borderColor: 'border-blue-100',
      href: '#blog-article',
    },
    {
      title: 'Workforce Insights',
      desc: 'Get clear visibility into attendance trends and team productivity through reports that actually tell you something.',
      imageUrl: '/hero-images/c8dade1ad0c0d4069c7e78a21f27d2a2e2701021.png',
      bgColor: 'bg-[#FFFBEB]',
      borderColor: 'border-amber-100',
      href: '#blog-article',
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      <Container>
        {/* Header block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 flex flex-col items-center">
          <span className="bg-[#EBF7F0] text-[#108A00] px-3.5 py-1 rounded-full text-xs font-semibold mb-4 block">
            Attendance Tracking
          </span>
          <Heading level={2} className="text-slate-900 font-semibold text-2xl sm:text-3xl md:text-[40px] mb-4">
            Everything you need to manage your workforce.
          </Heading>
          <a
            href="#blog"
            className="inline-flex items-center gap-1.5 text-[#5B5FEF] text-sm font-semibold hover:gap-2.5 transition-all duration-200 mt-2 min-h-[44px]"
          >
            View all articles <ArrowRight size={14} />
          </a>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <a
              key={idx}
              href={card.href}
              className="bg-white rounded-[28px] border border-slate-100 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full group hover:-translate-y-1"
            >
              {/* Image box */}
              <div className="relative aspect-[16/10] bg-neutral-100 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Title and details block */}
              <div className={`p-6 flex-1 flex flex-col justify-between ${card.bgColor} border-t ${card.borderColor}`}>
                <div className="space-y-3">
                  <h4 className="text-lg font-bold text-slate-800 group-hover:text-[#5B5FEF] transition-colors duration-200">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[#5B5FEF] text-xs font-bold mt-4 group-hover:gap-2 transition-all duration-200">
                  Read More <ArrowRight size={12} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
};
export default Blog;
