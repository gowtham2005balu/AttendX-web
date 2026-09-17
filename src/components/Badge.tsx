import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'green' | 'blue' | 'purple';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'green' }) => {
  const styles = {
    green: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    blue: 'bg-blue-50 text-blue-600 border-blue-200',
    purple: 'bg-purple-50 text-primary border-purple-200',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-full border ${styles[variant]} mb-4 animate-fade-in`}>
      {children}
    </span>
  );
};
