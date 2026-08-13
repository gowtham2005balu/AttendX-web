import React from 'react';
import { Container } from '../Container';
import { Clock, Calendar, User, Bell, BarChart3, Users } from 'lucide-react';

export const PlatformCapabilities: React.FC = () => {
  const cards = [
    {
      title: 'Attendance Tracking',
      desc: 'Geo-fenced check-in and check-out with real-time shift monitoring and attendance history for every employee.',
      iconBg: 'bg-[rgba(91,95,255,0.1)]',
      icon: <Clock className="w-6 h-6 text-[#5B5FFF]" />,
    },
    {
      title: 'Leave Management',
      desc: 'Multi-type leave requests, configurable approval workflows, and real-time balance tracking for the entire team.',
      iconBg: 'bg-[rgba(16,185,129,0.1)]',
      icon: <Calendar className="w-6 h-6 text-[#10B981]" />,
    },
    {
      title: 'Employee Profiles',
      desc: 'Centralized employee directory with personal info, attendance records, and leave history in one place.',
      iconBg: 'bg-[rgba(245,158,11,0.1)]',
      icon: <User className="w-6 h-6 text-[#F59E0B]" />,
    },
    {
      title: 'Notifications',
      desc: 'Instant push notifications for leave approvals, check-in reminders, and important HR announcements.',
      iconBg: 'bg-[rgba(239,68,68,0.08)]',
      icon: <Bell className="w-6 h-6 text-[#EF4444]" />,
    },
    {
      title: 'Reports & Analytics',
      desc: 'Comprehensive attendance reports, leave summaries, and workforce trends — exportable as CSV or PDF.',
      iconBg: 'bg-[rgba(91,95,255,0.1)]',
      icon: <BarChart3 className="w-6 h-6 text-[#5B5FFF]" />,
    },
    {
      title: 'Workforce Management',
      desc: 'Manage departments, shift schedules, team structures, and HR operations from the manager dashboard.',
      iconBg: 'bg-[rgba(16,185,129,0.1)]',
      icon: <Users className="w-6 h-6 text-[#10B981]" />,
    },
  ];

  return (
    <section id="feat-overview" className="py-[60px] sm:py-[80px] lg:py-[100px] px-4 md:px-12 lg:px-[80px] bg-white relative overflow-hidden w-full">
      <Container className="max-w-[1280px] px-4 md:px-6 mx-auto flex flex-col gap-[40px] sm:gap-[50px] lg:gap-[60px]">
        {/* Header Block */}
        <div className="text-center max-w-[1184px] mx-auto flex flex-col items-center gap-[12px] sm:gap-[14px]">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] text-[11px] font-bold leading-[14px] tracking-[1.54px] text-[#5B5FFF] uppercase text-center">
            Platform Capabilities
          </span>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[26px] sm:text-[38px] lg:text-[50px] leading-[34px] sm:leading-[46px] lg:leading-[56px] tracking-[-1px] text-[#111827] text-center max-w-[280px] sm:max-w-[500px] lg:max-w-[665px]">
            One Platform, Every Feature
          </h2>

          <p className="font-['Inter',sans-serif] text-[14px] sm:text-[16px] lg:text-[17px] font-normal leading-[26px] sm:leading-[28px] lg:leading-[29px] text-[#6B7280] text-center max-w-[300px] sm:max-w-[460px] lg:max-w-[540px]">
            Everything your HR team and employees need — built into a single, intuitive platform with a powerful mobile app.
          </p>
        </div>

        {/* 6 Feature Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] sm:gap-[20px] lg:gap-[24px] max-w-[1184px] mx-auto w-full">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-[#F3F4F6] rounded-[20px] sm:rounded-[28px] p-[24px] sm:p-[32px] lg:p-[36px_32px] shadow-[0px_1px_3px_rgba(0,0,0,0.06),0px_1px_2px_rgba(0,0,0,0.04)] flex flex-col items-start gap-[8px] sm:gap-[8.9px] hover:shadow-[0px_8px_30px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer isolate"
            >
              {/* Icon Box */}
              <div className={`w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] rounded-[14px] sm:rounded-[16px] ${item.iconBg} flex items-center justify-center shrink-0 mb-1`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[16px] sm:text-[18px] leading-[22px] sm:leading-[23px] text-[#111827] pt-[8px] sm:pt-[11.1px]">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-['Inter',sans-serif] text-[13px] sm:text-[14px] text-[#6B7280] leading-[21px] sm:leading-[22px] font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PlatformCapabilities;
