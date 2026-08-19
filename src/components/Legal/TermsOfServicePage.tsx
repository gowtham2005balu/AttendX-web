import React, { useState, useEffect } from 'react';
import { Container } from '../Container';

interface TocItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: 'acceptance', label: 'Acceptance of Terms' },
  { id: 'about-workzi', label: 'About Workzi' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'accounts', label: 'Accounts & Access' },
  { id: 'use-of-services', label: 'Use of the Services' },
  { id: 'customer-responsibilities', label: 'Customer Responsibilities' },
  { id: 'billing', label: 'Subscription & Billing' },
  { id: 'trials', label: 'Free Trials & Demos' },
  { id: 'intellectual-property', label: 'Intellectual Property' },
  { id: 'customer-data', label: 'Customer Data' },
  { id: 'privacy', label: 'Privacy' },
  { id: 'third-party', label: 'Third-Party Integrations' },
  { id: 'availability', label: 'Service Availability' },
  { id: 'prohibited', label: 'Prohibited Activities' },
  { id: 'suspension', label: 'Suspension & Termination' },
  { id: 'disclaimers', label: 'Disclaimers' },
  { id: 'liability', label: 'Limitation of Liability' },
  { id: 'indemnification', label: 'Indemnification' },
  { id: 'changes', label: 'Changes to These Terms' },
  { id: 'governing-law', label: 'Governing Law' },
  { id: 'contact', label: 'Contact Us' },
];

export const TermsOfServicePage: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('acceptance');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (const item of TOC_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height + 40) {
            setActiveId(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <div id="terms-of-service-page" className="w-full bg-white text-[#12131A] min-h-screen pt-[88px]">

      {/* ── 1. LEGAL HERO SECTION ── */}
      <section className="w-full border-b border-[#E6E8F0] bg-white py-12 lg:py-16">
        <Container className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col items-start max-w-[800px] gap-3.5">
            {/* Eyebrow */}
            <span className="font-['Inter',sans-serif] font-bold text-[12.5px] leading-[15px] tracking-[1px] uppercase text-[#5C5CFF]">
              LEGAL
            </span>

            {/* H1 Title */}
            <h1 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.2] lg:leading-[55px] tracking-[-0.88px] text-[#12131A]">
              Terms of Service
            </h1>

            {/* Subtitle */}
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[17px] leading-[27px] text-[#667085] max-w-[600px]">
              The terms and conditions that govern your use of Workzi services.
            </p>

            {/* Meta */}
            <span className="font-['Inter',sans-serif] font-medium text-[13.5px] leading-[16px] text-[#98A2B3] pt-1">
              Last updated: August 12, 2026
            </span>
          </div>
        </Container>
      </section>

      {/* ── 2. LEGAL MAIN LAYOUT (CONTENT + TOC SIDEBAR) ── */}
      <section className="w-full py-12 lg:py-16 bg-white">
        <Container className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-[80px]">

            {/* LEFT COLUMN — Main Legal Content */}
            <div className="w-full lg:w-[720px] shrink-0 flex flex-col gap-10">

              {/* 1. Acceptance of Terms */}
              <section id="acceptance" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  1. Acceptance of Terms
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  These Terms of Service ("Terms") govern your access to and use of Workzi's website and workforce management platform (together, the "Services"). By creating an account, accessing, or using the Services, you agree to be bound by these Terms. If you are accepting these Terms on behalf of an organization, you represent that you have the authority to bind that organization.
                </p>
              </section>

              {/* 2. About Workzi */}
              <section id="about-workzi" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  2. About Workzi
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  Workzi provides attendance, Time-off, shift, task, and workforce management tools for organizations and their employees. References to "you" in these Terms mean the individual or organization using the Services, depending on context.
                </p>
              </section>

              {/* 3. Eligibility */}
              <section id="eligibility" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  3. Eligibility
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  You must be able to form a legally binding contract to use the Services. The Services are intended for business use and are not directed to individuals accessing them outside of an employment or organizational relationship with a Workzi customer.
                </p>
              </section>

              {/* 4. Accounts and Organization Access */}
              <section id="accounts" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  4. Accounts and Organization Access
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  Access to the Services is provided through organization accounts administered by your employer or organization. You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account. Notify us promptly of any unauthorized use.
                </p>
              </section>

              {/* 5. Use of the Services */}
              <section id="use-of-services" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  5. Use of the Services
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  You may use the Services only in accordance with these Terms and for their intended workforce management purposes. Your organization's administrator may configure roles, permissions, and access levels that determine what you can view or do within the platform.
                </p>
              </section>

              {/* 6. Customer Responsibilities */}
              <section id="customer-responsibilities" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  6. Customer Responsibilities
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  Organizations using Workzi are responsible for the accuracy of information entered into the platform, for obtaining any consents required from their employees to process their data through the Services, and for complying with applicable employment and data protection laws.
                </p>
              </section>

              {/* 7. Subscription and Billing */}
              <section id="billing" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  7. Subscription and Billing
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  Paid plans are billed on a subscription basis as described at the time of purchase. Fees are non-refundable except where required by law or expressly stated otherwise. We may change pricing with advance notice before it takes effect on renewal.
                </p>
              </section>

              {/* 8. Free Trials and Demos */}
              <section id="trials" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  8. Free Trials and Demos
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  We may offer free trials or product demonstrations. Trials are provided "as is" and may be modified, limited, or discontinued at any time. At the end of a trial, continued use of the Services may require a paid subscription.
                </p>
              </section>

              {/* 9. Intellectual Property */}
              <section id="intellectual-property" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  9. Intellectual Property
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  Workzi and its licensors retain all rights, title, and interest in and to the Services, including all associated software, branding, and content, other than the data you submit. These Terms do not grant you any rights to Workzi's trademarks or branding without prior written consent.
                </p>
              </section>

              {/* 10. Customer Data */}
              <section id="customer-data" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  10. Customer Data
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  You retain ownership of the data your organization submits to the Services ("Customer Data"). You grant Workzi a limited license to host, process, and display Customer Data solely to provide and support the Services.
                </p>
              </section>

              {/* 11. Privacy */}
              <section id="privacy" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  11. Privacy
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  Our collection and use of personal information in connection with the Services is described in our{' '}
                  <a href="#privacy-policy" className="text-[#5C5CFF] font-semibold hover:underline">
                    Privacy Policy
                  </a>
                  , which forms part of these Terms.
                </p>
              </section>

              {/* 12. Third-Party Services and Integrations */}
              <section id="third-party" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  12. Third-Party Services and Integrations
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  The Services may allow integration with third-party tools. Workzi is not responsible for the practices or availability of third-party services, and your use of them is subject to their own terms.
                </p>
              </section>

              {/* 13. Service Availability */}
              <section id="availability" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  13. Service Availability
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  We aim to keep the Services available and reliable but do not guarantee uninterrupted access. Scheduled maintenance, updates, or unforeseen issues may result in temporary downtime.
                </p>
              </section>

              {/* 14. Prohibited Activities */}
              <section id="prohibited" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  14. Prohibited Activities
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  You agree not to misuse the Services, including by attempting unauthorized access, interfering with normal operation, reverse engineering the platform, or using the Services to violate applicable law or the rights of others.
                </p>
              </section>

              {/* 15. Suspension and Termination */}
              <section id="suspension" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  15. Suspension and Termination
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  We may suspend or terminate access to the Services for violation of these Terms, non-payment, or as reasonably necessary to protect the Services or other users. You or your organization may terminate your account at any time in accordance with your subscription terms.
                </p>
              </section>

              {/* 16. Disclaimers */}
              <section id="disclaimers" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  16. Disclaimers
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  The Services are provided "as is" and "as available" without warranties of any kind, whether express or implied, to the extent permitted by applicable law.
                </p>
              </section>

              {/* 17. Limitation of Liability */}
              <section id="liability" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  17. Limitation of Liability
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  To the extent permitted by law, Workzi will not be liable for indirect, incidental, special, or consequential damages arising from your use of the Services, and our total liability will be limited as set out in your applicable subscription agreement.
                </p>
              </section>

              {/* 18. Indemnification */}
              <section id="indemnification" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  18. Indemnification
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  You agree to indemnify and hold Workzi harmless from claims arising out of your misuse of the Services or violation of these Terms, to the extent permitted by applicable law.
                </p>
              </section>

              {/* 19. Changes to These Terms */}
              <section id="changes" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  19. Changes to These Terms
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  We may update these Terms from time to time. We will post the updated Terms on this page and revise the "Last updated" date above. Continued use of the Services after changes take effect constitutes acceptance of the updated Terms.
                </p>
              </section>

              {/* 20. Governing Law */}
              <section id="governing-law" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  20. Governing Law
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  These Terms are governed by the laws applicable to Workzi's place of business, without regard to conflict-of-law principles, except where applicable law requires otherwise. Specific jurisdiction details will be confirmed by Workzi's legal team.
                </p>
              </section>

              {/* 21. Contact Us */}
              <section id="contact" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  21. Contact Us
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  If you have questions about these Terms, please contact us at{' '}
                  <a href="mailto:legal@workzi.com" className="text-[#5C5CFF] font-semibold hover:underline">
                    legal@workzi.com
                  </a>.
                </p>
              </section>

              {/* Cross-Link Box */}
              <div className="w-full bg-[#F7F8FC] border border-[#E6E8F0] rounded-[14px] p-5 sm:p-6 mt-4">
                <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22px] text-[#12131A]">
                  Curious how we handle your data? Read our{' '}
                  <a href="#privacy-policy" className="text-[#5C5CFF] font-semibold hover:underline">
                    Privacy Policy
                  </a>.
                </p>
              </div>

            </div>

            {/* RIGHT COLUMN — Sticky Table of Contents */}
            <aside className="hidden lg:block w-[260px] shrink-0 sticky top-[108px] self-start z-20">
              <div className="flex flex-col gap-4">
                <span className="font-['Inter',sans-serif] font-bold text-[12px] leading-[15px] tracking-[0.96px] uppercase text-[#98A2B3]">
                  ON THIS PAGE
                </span>

                <ul className="flex flex-col gap-2 pt-1">
                  {TOC_ITEMS.map((item) => {
                    const isActive = activeId === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(e, item.id)}
                          className={`block pl-3.5 text-[14px] leading-[20px] font-['Inter',sans-serif] border-l-2 transition-all ${isActive
                              ? 'border-[#5C5CFF] text-[#5C5CFF] font-semibold'
                              : 'border-transparent text-[#667085] hover:text-[#12131A] font-medium'
                            }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>

          </div>
        </Container>
      </section>

    </div>
  );
};

export default TermsOfServicePage;
