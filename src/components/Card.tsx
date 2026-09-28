import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
}) => {
  return (
    <div
      className={`
        bg-white 
        border border-[#E5E7EB] 
        rounded-[24px] 
        p-8 
        shadow-sm 
        transition-all 
        duration-300 
        ${hoverEffect ? 'hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
