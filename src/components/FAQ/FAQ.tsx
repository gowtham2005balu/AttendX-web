import React, { useState } from 'react';
import { Container } from '../Container';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState('Attendance');

  const tags = [
    'Attendance', 'Leave', 'Organization', 'Payroll', 'Mobile App',
    'Pricing', 'Security', 'Reports', 'Geofencing', 'Approvals'
  ];

  const faqs = [
    {
      question: 'How does attendance tracking work?',
      answer: 'Workzi uses GPS-based geo-fencing to confirm employees are within the designated office range before they check in. Once verified, the check-in is time-stamped and logged automatically, and employees can view their shift overview and attendance history right in the app.',
    },
    {
      question: 'Can employees apply for leave from mobile?',
      answer: 'Yes. Employees can apply for leave, check balances, and track approval status directly from the Workzi mobile app, no desktop needed.',
    },
    {
      question: 'Does the platform support multi-level approval workflows?',
      answer: 'Yes. Workzi supports configurable, multi-level approval chains, so leave and attendance regularization requests route to the right approver automatically.',
    },
    {
      question: 'Can managers access attendance reports and analytics?',
      answer: 'Absolutely. Managers and HR admins get real-time dashboards and exportable reports covering attendance trends, leave patterns, and team-level insights.',
    },
    {
      question: 'Is employee data secure and private?',
      answer: 'Yes. Workzi is built with role-based access control and secure authentication, so employee data is only visible to the people who should see it.',
    },
    {
      question: 'Can the platform scale with growing teams?',
      answer: 'Yes. Workzi is built to scale from small teams to large, multi-department organizations without changing how you work.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 bg-white relative w-full">
      <Container className="max-w-[1216px] mx-auto flex flex-col items-center px-4">
        {/* HEADER SECTION */}
        <div className="text-center max-w-[1216px] mx-auto mb-8 sm:mb-10 flex flex-col items-center w-full">
          {/* h2.section-title */}
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[26px] sm:text-[44px] lg:text-[52px] leading-[34px] sm:leading-[54px] lg:leading-[60px] tracking-[-1.04px] text-[#111827] max-w-[760px] mx-auto mb-4 text-center">
            Frequently asked questions
          </h2>

          {/* p.section-subtitle */}
          <p className="font-['Inter',sans-serif] font-normal text-[14.5px] sm:text-[17px] lg:text-[18px] leading-[24px] sm:leading-[28px] text-[#6B7280] text-center">
            Everything you need to know about Workzi. Can't find the answer? Reach out to our{' '}
            <a href="#contact-support" className="text-[#5B5FFF] underline hover:text-[#4F46E5] transition-colors inline-block min-h-[44px]">
              support team.
            </a>
          </p>
        </div>

        {/* Accordions List */}
        <div className="divide-y divide-slate-100 border-y border-slate-100 w-full max-w-[888px]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white transition-all duration-300 py-1">
                {/* Trigger Button */}
                <button
                  className="w-full flex justify-between items-center py-4 sm:py-5 min-h-[44px] text-left focus:outline-none cursor-pointer group"
                  onClick={() => toggleAccordion(idx)}
                >
                  <span className={`font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] md:text-[17px] leading-[22px] transition-colors ${
                    isOpen ? 'text-[#5B5FFF]' : 'text-[#111827] group-hover:text-[#5B5FFF]'
                  }`}>
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <div className="w-[28px] h-[28px] rounded-[8px] bg-[#5B5FFF] text-white flex items-center justify-center shrink-0 ml-4 transition-all duration-200">
                      <Plus size={14} strokeWidth={2.5} className="rotate-45" />
                    </div>
                  ) : (
                    <div className="w-[28px] h-[28px] rounded-[8px] bg-[#EEEEFF] text-[#5B5FFF] flex items-center justify-center shrink-0 ml-4 group-hover:bg-[#5B5FFF] group-hover:text-white transition-all duration-200">
                      <Plus size={14} strokeWidth={2.5} />
                    </div>
                  )}
                </button>

                {/* Animated content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pb-5 text-xs md:text-sm text-[#6B7280] leading-relaxed font-['Inter',sans-serif] text-left">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
