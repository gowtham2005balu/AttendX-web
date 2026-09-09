import React from 'react';

interface HeadingProps {
  level?: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  children,
  className = '',
  id,
}) => {
  const baseStyles = "font-bold text-[#111827] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]";
  
  const sizes = {
    1: "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight",
    2: "text-3xl sm:text-4xl font-bold leading-tight",
    3: "text-2xl sm:text-3xl font-bold",
    4: "text-xl font-semibold",
  };

  const Component = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';

  return (
    <Component id={id} className={`${baseStyles} ${sizes[level]} ${className}`}>
      {children}
    </Component>
  );
};
