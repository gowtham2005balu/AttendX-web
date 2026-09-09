import React from 'react';

export const AttendanceManagementHeroChart: React.FC = () => {
  return (
    <div
      className="relative shrink-0 overflow-hidden w-full max-w-[573px] h-auto sm:w-[573px] sm:h-[479px] p-4 sm:p-0 flex flex-col gap-3.5 sm:block"
      style={{
        background: 'linear-gradient(134.75deg, #F0F2FF 0%, #F8FAFC 60%, #EFF3FA 100%)',
        border: '1px solid #E5E7EB',
        borderRadius: '24px',
      }}
    >
      {/* ─── FLOAT UI CARD 3: ADMIN OVERVIEW (Top Right) ─── */}
      <div
        className="w-full sm:w-[134px] sm:h-[96px] sm:absolute sm:right-[33.5px] sm:top-[68px] flex flex-col items-start p-[16px] bg-white border border-[#E5E7EB] rounded-[16px] z-30 shadow-xs sm:shadow-[0px_24px_48px_-20px_rgba(17,24,39,0.2)]"
      >
        {/* div.cap */}
        <div className="w-full h-[13px] flex items-center">
          <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[13px] uppercase text-[#6B7280]">
            Admin Overview
          </span>
        </div>

        {/* div: 96% */}
        <div className="w-full h-[35px] pt-[10px] flex items-center">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[20px] leading-[25px] text-[#293040]">
            96%
          </span>
        </div>

        {/* div: Attendance today */}
        <div className="w-full h-[14px] flex items-center">
          <span className="font-['Inter',sans-serif] font-normal text-[11.5px] leading-[14px] text-[#6B7280]">
            Attendance today
          </span>
        </div>
      </div>

      {/* ─── FLOAT UI CARD 2: TEAM ATTENDANCE (Middle Right) ─── */}
      <div
        className="w-full sm:w-[280px] sm:h-[152px] sm:absolute sm:left-[183.5px] sm:top-[136px] flex flex-col items-start p-[16px] bg-white border border-[#E5E7EB] rounded-[16px] z-20 shadow-xs sm:shadow-[0px_24px_48px_-20px_rgba(17,24,39,0.2)]"
      >
        {/* div.cap */}
        <div className="w-full h-[23px] pb-[10px] flex items-center">
          <span className="font-['Inter',sans-serif] font-bold text-[11px] leading-[13px] uppercase text-[#6B7280]">
            Team Attendance
          </span>
        </div>

        {/* Item 1: Sarah Anderson */}
        <div className="w-full h-[32px] py-[6px] flex items-center justify-between">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#293040]">
            Sarah Anderson
          </span>
          <div className="bg-[#EAFBF3] rounded-full px-[9px] py-[3px] flex items-center justify-center shrink-0">
            <span className="font-['Inter',sans-serif] font-bold text-[10.5px] leading-[13px] text-[#15803D]">
              Present
            </span>
          </div>
        </div>

        {/* Item 2: Michael Kim */}
        <div className="w-full h-[32px] py-[6px] flex items-center justify-between">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#293040]">
            Michael Kim
          </span>
          <div className="bg-[#FEF3E2] rounded-full px-[9px] py-[3px] flex items-center justify-center shrink-0">
            <span className="font-['Inter',sans-serif] font-bold text-[10.5px] leading-[13px] text-[#B45309]">
              Late
            </span>
          </div>
        </div>

        {/* Item 3: Priya Rao */}
        <div className="w-full h-[31px] py-[6px] flex items-center justify-between">
          <span className="font-['Inter',sans-serif] font-semibold text-[12px] leading-[15px] text-[#293040]">
            Priya Rao
          </span>
          <div className="bg-[#EEEEFF] rounded-full px-[9px] py-[3px] flex items-center justify-center shrink-0">
            <span className="font-['Inter',sans-serif] font-bold text-[10.5px] leading-[13px] text-[#5C5CFF]">
              WFH
            </span>
          </div>
        </div>
      </div>

      {/* ─── FLOAT UI CARD 1: ATTENDANCE (Left Bottom) ─── */}
      <div
        className="w-full sm:w-[220px] sm:h-[188px] sm:absolute sm:left-[32.5px] sm:top-[223px] flex flex-col items-start p-[17px] gap-[6px] bg-white border border-[#E5E7EB] rounded-[16px] z-10 shadow-xs sm:shadow-[0px_24px_48px_-20px_rgba(17,24,39,0.2)]"
      >
        {/* div.cap */}
        <div className="w-full h-[13px] flex flex-col justify-center">
          <span className="font-['Inter',sans-serif] font-bold text-[10.5px] leading-[13px] uppercase text-[#6B7280] tracking-normal">
            Attendance
          </span>
        </div>

        {/* div.big */}
        <div className="w-full h-[34px] pt-[6px] flex items-center">
          <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[22px] leading-[28px] text-[#293040]">
            09:32 AM
          </span>
        </div>

        {/* div */}
        <div className="w-full h-[21px] pb-[6px] flex items-center">
          <span className="font-['Inter',sans-serif] font-semibold text-[12.5px] leading-[15px] text-[#6B7280]">
            Checked In
          </span>
        </div>

        {/* Row 1: Shift */}
        <div className="w-full h-[32px] bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-[12px] py-[8px] flex items-center justify-between">
          <span className="font-['Inter',sans-serif] font-semibold text-[11.5px] leading-[14px] text-[#111827]">
            Shift
          </span>
          <span className="font-['Inter',sans-serif] font-semibold text-[11.5px] leading-[14px] text-[#111827]">
            09:30 – 06:30
          </span>
        </div>

        {/* Row 2: Location */}
        <div className="w-full h-[32px] bg-[#F8FAFC] border border-[#E5E7EB] rounded-[9px] px-[12px] py-[8px] flex items-center justify-between">
          <span className="font-['Inter',sans-serif] font-semibold text-[11.5px] leading-[14px] text-[#111827]">
            Location
          </span>
          <span className="font-['Inter',sans-serif] font-semibold text-[11.5px] leading-[14px] text-[#111827]">
            Main Office
          </span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceManagementHeroChart;
