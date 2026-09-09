import React from 'react';

interface PhoneMockupProps {
  children?: React.ReactNode;
  screenBg?: string;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({
  children,
  screenBg = 'bg-white',
  className = '',
}) => {
  return (
    <div className={`relative mx-auto border-[8px] border-[#111827] rounded-[36px] shadow-2xl overflow-hidden aspect-[9/19.5] w-[270px] bg-black ring-8 ring-black/5 ${className}`}>
      {/* Speaker and Camera notch */}
      <div className="absolute top-0 inset-x-0 h-6 bg-black z-30 flex justify-center items-center">
        <div className="w-16 h-3 bg-neutral-900 rounded-full border border-neutral-800 flex items-center justify-end px-2">
          <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full"></div>
        </div>
      </div>
      
      {/* Time and Status Icons */}
      <div className="absolute top-6 inset-x-0 px-5 flex justify-between items-center text-[10px] font-semibold text-neutral-800 z-20 mix-blend-difference pointer-events-none">
        <span>09:41</span>
        <div className="flex items-center gap-1.5">
          {/* Signal */}
          <div className="flex gap-0.5 items-end h-2">
            <div className="w-0.5 h-1 bg-current rounded-full"></div>
            <div className="w-0.5 h-1.5 bg-current rounded-full"></div>
            <div className="w-0.5 h-2 bg-current rounded-full"></div>
          </div>
          {/* Battery */}
          <div className="w-4 h-2 border border-current rounded-sm p-0.5 flex items-center">
            <div className="h-full w-full bg-current rounded-2xs"></div>
          </div>
        </div>
      </div>

      {/* Screen container */}
      <div className={`w-full h-full pt-10 pb-4 px-3 flex flex-col ${screenBg} relative overflow-y-auto no-scrollbar`}>
        {children}
      </div>

      {/* Home indicator bar */}
      <div className="absolute bottom-1 inset-x-0 h-1 flex justify-center z-30">
        <div className="w-24 h-1 bg-[#111827] rounded-full"></div>
      </div>
    </div>
  );
};
