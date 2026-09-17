import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

interface ComingSoonPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComingSoonPopup: React.FC<ComingSoonPopupProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-[320px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 flex flex-col items-center text-center animate-in fade-in zoom-in-95 duration-200 z-50">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
      >
        <X size={16} />
      </button>

      <div className="w-12 h-12 rounded-full bg-[#E0E7FF] flex items-center justify-center mb-4">
        <Sparkles className="w-6 h-6 text-[#5B5FFF]" />
      </div>

      <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[20px] text-[#0F172A] mb-2">
        Coming Soon
      </h2>

      <p className="font-['Inter',sans-serif] text-[13px] leading-[20px] text-[#64748B] mb-0">
        We're putting on our new Login experience. It will be launching very soon.
      </p>
    </div>
  );
};
