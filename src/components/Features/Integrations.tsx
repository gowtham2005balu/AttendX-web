import React from 'react';
import { Container } from '../Container';
import { Cloud, Grid, Users, Video, Calendar, Mail, Landmark } from 'lucide-react';
import { FaSlack } from 'react-icons/fa6';

export const Integrations: React.FC = () => {
  const apps = [
    { name: 'Google Workspace', iconBg: 'bg-[#F0FDF4]', iconColor: 'text-[#4285F4]', icon: <Cloud className="w-6 h-6" /> },
    { name: 'Microsoft 365', iconBg: 'bg-[#EFF6FF]', iconColor: 'text-[#0078D4]', icon: <Grid className="w-6 h-6" /> },
    { name: 'Slack', iconBg: 'bg-[#FFF7ED]', iconColor: 'text-[#E01E5A]', icon: <FaSlack className="w-6 h-6" /> },
    { name: 'Microsoft Teams', iconBg: 'bg-[#EFF6FF]', iconColor: 'text-[#5059C9]', icon: <Users className="w-6 h-6" /> },
    { name: 'Zoom', iconBg: 'bg-[#EFF6FF]', iconColor: 'text-[#2D8CFF]', icon: <Video className="w-6 h-6" /> },
    { name: 'Google Calendar', iconBg: 'bg-[#FFF7ED]', iconColor: 'text-[#4285F4]', icon: <Calendar className="w-6 h-6" /> },
    { name: 'Outlook', iconBg: 'bg-[#EFF6FF]', iconColor: 'text-[#0078D4]', icon: <Mail className="w-6 h-6" /> },
    { name: 'Payroll Systems', iconBg: 'bg-[#F0FDF4]', iconColor: 'text-[#10B981]', icon: <Landmark className="w-6 h-6" /> },
  ];

  return (
    <section id="feat-integrations" className="py-[60px] sm:py-[80px] lg:py-[100px] px-4 md:px-12 lg:px-[128px] bg-[#F8FAFC] relative overflow-hidden w-full">
      <Container className="max-w-[1184px] mx-auto flex flex-col items-center gap-[12px] sm:gap-[14px]">
        {/* Header Block */}
        <div className="text-center max-w-[1184px] mx-auto flex flex-col items-center gap-[12px] sm:gap-[14px]">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] leading-[14px] tracking-[1.54px] uppercase text-[#5B5FFF]">
            Integrations
          </span>

          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[26px] sm:text-[38px] lg:text-[50px] leading-[34px] sm:leading-[46px] lg:leading-[56px] tracking-[-1px] text-[#111827] text-center max-w-[280px] sm:max-w-[500px] lg:max-w-[712px]">
            Works With Your Existing Tools
          </h2>

          <p className="font-['Inter',sans-serif] font-normal text-[14px] sm:text-[16px] lg:text-[17px] leading-[26px] sm:leading-[28px] lg:leading-[29px] text-[#6B7280] text-center max-w-[300px] sm:max-w-[460px] lg:max-w-[540px] mb-4 sm:mb-8">
            Connect seamlessly with the software your teams already use. Workzi integrates with your existing HR and communication stack.
          </p>
        </div>

        {/* 8 Integrations Grid — 2-col mobile, 4-col tablet+ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-[14px] sm:gap-[20px] lg:gap-[24px] max-w-[360px] sm:max-w-[640px] lg:max-w-[720px] w-full mx-auto mb-4 sm:mb-6">
          {apps.map((app, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#F3F4F6] rounded-[16px] sm:rounded-[20px] p-[18px] sm:p-[22px] lg:p-[24px] shadow-[0px_1px_3px_rgba(0,0,0,0.06),0px_1px_2px_rgba(0,0,0,0.04)] hover:shadow-md transition-all duration-300 flex flex-col items-center text-center justify-center gap-[10px] sm:gap-[12px] cursor-pointer min-h-[120px] sm:min-h-[142px]"
            >
              <div className={`w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-[12px] sm:rounded-[14px] flex items-center justify-center ${app.iconBg} ${app.iconColor} shrink-0`}>
                {app.icon}
              </div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12px] sm:text-[13px] leading-[16px] text-[#111827] text-center max-w-[90px] sm:max-w-[110px]">
                {app.name}
              </span>
            </div>
          ))}
        </div>

        {/* Footer info link */}
        <p className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[13px] sm:text-[14px] leading-[18px] text-[#6B7280] text-center pt-2 sm:pt-4">
          And 50+ more integrations available in the app store
        </p>
      </Container>
    </section>
  );
};

export default Integrations;
