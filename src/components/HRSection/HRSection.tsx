import React from 'react';
import { Badge } from '../Badge';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Users, BarChart3, Clock, CheckCircle } from 'lucide-react';

export const HRSection: React.FC = () => {
  return (
    <section id="hr-manager" className="py-[40px] sm:py-[60px] px-4 md:px-12 lg:px-[120px] bg-white relative overflow-hidden max-w-[1440px] mx-auto">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[80px] items-center">
        {/* Left Column: Benefits & Cards */}
        <div className="flex flex-col items-start w-full max-w-[560px] mx-auto lg:mx-0">
          {/* Section tag */}
          <span className="bg-[#F0F9F0] text-[#3B8A3E] px-[14px] py-[5px] rounded-[50px] text-[12px] font-semibold leading-[15px] mb-4 inline-flex items-center gap-[6px]">
            HR &amp; Manager Tools
          </span>

          {/* Heading */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-[#111827] font-semibold text-[26px] sm:text-[36px] md:text-[42px] lg:text-[52px] leading-tight lg:leading-[60px] tracking-[-1.04px] mb-[15px]">
            Built for HR teams and managers.
          </h2>

          {/* Subtitle */}
          <p className="text-[#6B7280] text-[15px] sm:text-[16px] md:text-[18px] font-normal leading-[24px] sm:leading-[31px] mb-[24px]">
            Monitor attendance, approve Time-off, manage employees, and access workforce analytics — all in real time, all from one dashboard.
          </p>

          {/* 2x2 Mini Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] w-full">
            {[
              {
                title: 'Attendance Monitoring',
                desc: 'See real-time check-in status across your entire team.',
                icon: <Clock className="w-[22px] h-[22px] text-[#5B5FFF]" />
              },
              {
                title: 'Time-off Approvals',
                desc: 'Approve or reject Time-off requests in one click.',
                icon: <CheckCircle className="w-[22px] h-[22px] text-[#5B5FFF]" />
              },
              {
                title: 'Employee Management',
                desc: 'Manage profiles, departments, and shift assignments in one place.',
                icon: <Users className="w-[22px] h-[22px] text-[#5B5FFF]" />
              },
              {
                title: 'Reports & Analytics',
                desc: 'Export attendance and HR reports whenever you need them.',
                icon: <BarChart3 className="w-[22px] h-[22px] text-[#5B5FFF]" />
              }
            ].map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-[20px] sm:p-[24px] rounded-[20px] border border-[#E5E7EB] shadow-none transition-all duration-300 flex flex-col items-start gap-[12px]"
              >
                <div className="w-[44px] h-[44px] bg-[#EEEEFF] rounded-[12px] flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-['Plus_Jakarta_Sans',sans-serif] text-[14px] font-bold text-[#111827] leading-[18px] mb-[4px]">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[#6B7280] leading-[20px] font-normal">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Dashboard Mockup */}
        <div className="relative w-full max-w-[558px] mx-auto lg:mx-0">
          <div className="w-full bg-white rounded-[24px] border border-[#E5E7EB] shadow-none overflow-hidden">
            {/* Window controls header */}
            <div className="flex items-center justify-between px-[16px] sm:px-[24px] py-[16px] bg-[#F8FAFC] border-b border-slate-100">
              <div className="flex gap-[8px] items-center">
                <span className="w-[10px] h-[10px] rounded-full bg-[#FF5F57]" />
                <span className="w-[10px] h-[10px] rounded-full bg-[#FEBC2E]" />
                <span className="w-[10px] h-[10px] rounded-full bg-[#28C840]" />
              </div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] sm:text-[12px] font-bold text-[#6B7280]">
                HR Dashboard — Workzi
              </span>
              <div className="w-[20px] sm:w-[36px]" />
            </div>

            {/* Dashboard stats widgets */}
            <div className="p-[16px] sm:p-[24px] space-y-[20px] overflow-x-auto no-scrollbar">
              <div className="grid grid-cols-3 min-w-[280px] gap-[8px] sm:gap-[12px]">
                {[
                  { title: 'TOTAL EMPLOYEES', value: '142', sub: '+3 this month', subColor: 'text-[#10B981]' },
                  { title: 'PRESENT TODAY', value: '138', sub: '96.4% rate', subColor: 'text-[#10B981]' },
                  { title: 'ON Time-off', value: '4', sub: '2 pending', subColor: 'text-[#EF4444]' },
                ].map((stat, idx) => (
                  <div key={idx} className="bg-[#F8FAFC] border border-[#F3F4F6] p-[10px] sm:p-[16px] rounded-[14px] flex flex-col justify-between">
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[9px] sm:text-[11px] font-semibold text-[#9CA3AF] tracking-[0.4px] sm:tracking-[0.66px] uppercase block mb-1 truncate">
                      {stat.title}
                    </span>
                    <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] sm:text-[24px] font-extrabold text-[#111827] block my-0.5">
                      {stat.value}
                    </span>
                    <span className={`text-[9px] sm:text-[11px] font-normal truncate ${stat.subColor}`}>
                      {stat.sub}
                    </span>
                  </div>
                ))}
              </div>

              {/* Team Attendance Header */}
              <div className="flex items-center justify-between pt-[8px] pb-[4px]">
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] sm:text-[14px] font-bold text-[#111827]">
                  Team Attendance — Today
                </span>
                <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[12px] font-semibold text-[#5B5FFF] hover:underline cursor-pointer">
                  View All
                </span>
              </div>

              {/* Attendance List */}
              <div className="divide-y divide-slate-100 min-w-[280px]">
                {[
                  { name: 'Sarah Anderson', initials: 'SA', time: '09:01 AM', status: 'Present', avatarBg: 'bg-[#EEEEFF] text-[#5B5FFF]', badgeColor: 'bg-[rgba(16,185,129,0.1)] text-[#10B981]' },
                  { name: 'Michael Kim', initials: 'MK', time: '09:47 AM', status: 'Late', avatarBg: 'bg-[rgba(245,158,11,0.1)] text-[#F59E0B]', badgeColor: 'bg-[rgba(239,68,68,0.1)] text-[#EF4444]' },
                  { name: 'Priya Rao', initials: 'PR', time: '—', status: 'On Time-off', avatarBg: 'bg-[rgba(16,185,129,0.1)] text-[#10B981]', badgeColor: 'bg-[rgba(245,158,11,0.1)] text-[#F59E0B]' },
                  { name: 'James Turner', initials: 'JT', time: '08:52 AM', status: 'Present', avatarBg: 'bg-[rgba(91,95,255,0.1)] text-[#5B5FFF]', badgeColor: 'bg-[rgba(16,185,129,0.1)] text-[#10B981]' },
                  { name: 'Laura Martinez', initials: 'LM', time: '08:30 AM', status: 'Present', avatarBg: 'bg-[rgba(239,68,68,0.1)] text-[#EF4444]', badgeColor: 'bg-[rgba(16,185,129,0.1)] text-[#10B981]' },
                ].map((row, idx) => (
                  <div key={idx} className="flex justify-between items-center py-[10px]">
                    <div className="flex items-center gap-[10px] sm:gap-[12px] min-w-0">
                      <span className={`w-[32px] h-[32px] rounded-full flex items-center justify-center font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] shrink-0 ${row.avatarBg}`}>
                        {row.initials}
                      </span>
                      <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[13px] font-semibold text-[#111827] truncate">{row.name}</span>
                    </div>
                    <div className="flex items-center gap-[8px] sm:gap-[12px] shrink-0">
                      <span className="text-[11px] sm:text-[12px] font-normal text-[#6B7280]">{row.time}</span>
                      <span className={`px-[8px] sm:px-[10px] py-[3px] sm:py-[4px] rounded-[6px] font-['Plus_Jakarta_Sans',sans-serif] text-[10px] sm:text-[11px] font-bold ${row.badgeColor}`}>
                        {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default HRSection;
