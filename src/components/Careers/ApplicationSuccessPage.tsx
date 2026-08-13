import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Container } from '../Container';

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = '',
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const ApplicationSuccessPage: React.FC = () => {
  return (
    <div className="bg-[#F8FAFC] min-h-screen py-32 flex items-center justify-center font-['DM_Sans',sans-serif]">
      <Container className="max-w-2xl mx-auto flex flex-col items-center text-center">
        
        <FadeUp className="flex flex-col items-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-8 shadow-xs border border-emerald-200/50">
            <Check size={40} className="text-emerald-500" strokeWidth={3} />
          </div>

          {/* Title & Description */}
          <h1 className="text-3xl md:text-4xl font-semibold text-[#0F172A] tracking-tight mb-4 flex items-center justify-center gap-2">
            Application submitted! <span>🎉</span>
          </h1>
          <p className="text-[16px] text-slate-500 leading-relaxed font-medium mb-12 max-w-lg">
            Thank you for applying for the <span className="font-bold text-slate-700">Senior Backend Engineer</span> role at Workzi. Your application has been received and our recruiting team will review it personally within 2–3 business days.
          </p>

          {/* Next Steps Card */}
          <div className="w-full bg-white border border-slate-200 rounded-[28px] p-6 md:p-8 text-left mb-6 shadow-sm">
            <h3 className="text-[11px] font-extrabold text-slate-400 tracking-wider uppercase mb-6">
              What happens next
            </h3>

            <div className="space-y-0">
              {[
                { 
                  color: 'bg-emerald-500', 
                  title: 'Application review', 
                  desc: 'We’ll assess your profile within 2–3 days' 
                },
                { 
                  color: 'bg-[#1E293B]', 
                  title: 'Recruiter reaches out', 
                  desc: 'Nandini will email you to schedule a 30-min intro call' 
                },
                { 
                  color: 'bg-amber-500', 
                  title: 'Technical assessment', 
                  desc: 'Async take-home assignment, 3–4 hours' 
                },
                { 
                  color: 'bg-slate-300', 
                  title: 'Team interviews', 
                  desc: 'Two 60-minute conversations with future colleagues' 
                },
                { 
                  color: 'bg-slate-300', 
                  title: 'Offer', 
                  desc: 'Within 48 hours of final interview' 
                },
              ].map((step, idx, arr) => (
                <div key={idx} className={`py-5 flex items-start gap-4 ${idx !== arr.length - 1 ? 'border-b border-slate-100' : ''} ${idx === 0 ? 'pt-0' : ''} ${idx === arr.length - 1 ? 'pb-0' : ''}`}>
                  <div className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${step.color}`} />
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900 mb-0.5">{step.title}</h4>
                    <p className="text-[14px] text-slate-500 font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Button */}
          <a href="#careers" className="w-full bg-white border border-slate-200 hover:border-slate-350 text-slate-900 text-[15px] font-bold py-4 rounded-2xl transition-all shadow-sm flex items-center justify-center gap-1.5">
            Read employee stories <ArrowRight size={18} className="text-slate-900" />
          </a>
        </FadeUp>
        
      </Container>
    </div>
  );
};

export default ApplicationSuccessPage;
