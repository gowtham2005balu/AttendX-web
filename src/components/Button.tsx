import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium text-[15px] px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-sm';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#6D5DF6] to-[#4F46E5] text-white hover:shadow-md hover:shadow-indigo-500/20',
    secondary: 'bg-[#5B5FEF] text-white hover:bg-[#4F46E5]',
    dark: 'bg-[#111827] text-white hover:bg-black',
    outline: 'border border-[#E5E7EB] bg-white text-[#111827] hover:bg-[#F9FAFB]',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
