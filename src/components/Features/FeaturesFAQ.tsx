import React, { useState } from 'react';
import { Container } from '../Container';
import { Plus, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FeaturesFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does attendance tracking work?',
      answer: 'Workzi uses GPS-based geo-fencing to verify that employees are within the designated office range before check-in. Once inside the geo-fence, they slide to check in and the system records their time, location, and shift data — all in real time. Managers see updates immediately on the HR dashboard.',
    },
    {
      question: 'Can employees apply for Time-off from mobile?',
      answer: 'Yes! The mobile app allows team members to view balances, submit multi-type Time-off requests, attach necessary details, and receive real-time notifications on approval statuses.',
    },
    {
      question: 'Does the platform support approval workflows?',
      answer: 'Certainly. You can customize approval hierarchy levels based on departments or branches, allowing managers to instantly authorize or redirect requests from their dashboard.',
    },
    {
      question: 'Can managers generate attendance reports?',
      answer: 'Yes. The manager dashboard offers extensive reporting tools to generate custom timesheets, shift overview summaries, overtime records, and trend analytics exportable in PDF and CSV format.',
    },
    {
      question: 'Is employee data secure?',
      answer: 'Security is paramount. Workzi complies with modern data security standards, employing AES-256 database encryption and TLS 1.3 network transport security policies.',
    },
    {
      question: 'Can the platform scale with growing teams?',
      answer: 'Our cloud platform is designed to scale dynamically from small startups of ten users to major enterprises managing thousands of distributed shifts.',
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white relative w-full">
      <Container className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-10 flex flex-col items-center">
          <h2 className="font-['Plus_Jakarta_Sans',sans-serif] text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] text-[#6B7280] text-center sm:whitespace-nowrap">
            Got questions? We've got answers. If you need more help, <a href="#contact-support" className="text-[#5B5FEF] underline hover:text-[#4F46E5] transition-colors">contact our team.</a>
          </p>
        </div>

        {/* Accordions List */}
        <div className="divide-y divide-slate-100 border-t border-b border-slate-100 w-full max-w-[850px]">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-white transition-all duration-300">
                {/* Trigger Button */}
                <button
                  className="w-full flex justify-between items-center py-5 sm:py-6 text-left focus:outline-none cursor-pointer group"
                  onClick={() => toggleAccordion(idx)}
                >
                  <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[16px] sm:text-[17px] text-[#111827] group-hover:text-[#5B5FFF] transition-colors pr-6 leading-[24px]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-[34px] h-[34px] rounded-[10px] flex items-center justify-center shrink-0 transition-colors ${isOpen
                        ? 'bg-[#5B5FFF] text-white'
                        : 'bg-[#EEF2FF] text-[#5B5FFF] group-hover:bg-[#5B5FFF] group-hover:text-white'
                      }`}
                  >
                    {isOpen ? <X size={15} strokeWidth={2.5} /> : <Plus size={15} strokeWidth={2.5} />}
                  </div>
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
                      <div className="pb-6 text-[14.5px] sm:text-[15px] text-[#6B7280] leading-[26px] font-['Inter',sans-serif] max-w-[780px] pr-8">
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

export default FeaturesFAQ;
