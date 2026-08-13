import React, { useState, useEffect } from 'react';
import { Container } from '../Container';

interface TocItem {
  id: string;
  label: string;
}

const TOC_ITEMS: TocItem[] = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'information-we-collect', label: 'Information We Collect' },
  { id: 'how-we-use-information', label: 'How We Use Information' },
  { id: 'how-we-share-information', label: 'How We Share Information' },
  { id: 'data-retention', label: 'Data Retention' },
  { id: 'data-security', label: 'Data Security' },
  { id: 'cookies', label: 'Cookies & Similar Technologies' },
  { id: 'privacy-rights', label: 'Your Privacy Rights' },
  { id: 'childrens-privacy', label: "Children's Privacy" },
  { id: 'international-transfers', label: 'International Data Transfers' },
  { id: 'changes', label: 'Changes to This Policy' },
  { id: 'contact', label: 'Contact Us' },
];

export const PrivacyPolicyPage: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('introduction');

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
    <div id="privacy-policy-page" className="w-full bg-white text-[#12131A] min-h-screen pt-[88px]">
      
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
              Privacy Policy
            </h1>

            {/* Subtitle */}
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[17px] leading-[27px] text-[#667085] max-w-[600px]">
              How Workzi collects, uses, protects, and manages your information when you use our website and services.
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
              
              {/* 1. Introduction */}
              <section id="introduction" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  1. Introduction
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  Workzi ("Workzi," "we," "us," or "our") provides workforce and attendance management software to organizations and their employees. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website, sign up for an account, or use the Workzi platform (together, the "Services").
                </p>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  By using the Services, you agree to the collection and use of information described in this Policy. If you do not agree with our practices, please do not use the Services.
                </p>
              </section>

              {/* 2. Information We Collect */}
              <section id="information-we-collect" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  2. Information We Collect
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  We collect information that you provide directly, information generated through your use of the Services, and information from your organization's Workzi administrator. This may include:
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2.5 font-['Inter',sans-serif] text-[15px] sm:text-[16px] leading-[26px] text-[#333747]">
                  <li>
                    <strong className="font-semibold text-[#12131A]">Account information</strong> — name, email address, password, and role.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Contact information</strong> — phone number, work address, and communication preferences.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Organization information</strong> — company name, size, department structure, and billing details.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Employee information</strong> — attendance records, leave requests, shift schedules, and approval history entered by or on behalf of your organization.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Usage information</strong> — pages visited, features used, and actions taken within the Services.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Device and browser information</strong> — IP address, browser type, operating system, and device identifiers.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Website interaction information</strong> — referral source, clicks, and general navigation behavior.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Information voluntarily submitted through forms</strong> — such as demo requests or contact forms.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Support and communication information</strong> — records of correspondence when you contact our support team.
                  </li>
                </ul>
              </section>

              {/* 3. How We Use Information */}
              <section id="how-we-use-information" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  3. How We Use Information
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2.5 font-['Inter',sans-serif] text-[15px] sm:text-[16px] leading-[26px] text-[#333747]">
                  <li>Provide, operate, and maintain the Workzi Services.</li>
                  <li>Create and manage accounts and organizations.</li>
                  <li>Deliver attendance, leave, shift, and workforce management functionality.</li>
                  <li>Improve and personalize the product experience.</li>
                  <li>Communicate with customers about updates, features, and account activity.</li>
                  <li>Provide customer support and respond to inquiries.</li>
                  <li>Maintain the security and integrity of the Services.</li>
                  <li>Detect, investigate, and prevent fraud or unauthorized activity.</li>
                  <li>Analyze usage trends to understand product performance.</li>
                </ul>
              </section>

              {/* 4. How We Share Information */}
              <section id="how-we-share-information" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  4. How We Share Information
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  We do not sell personal information. We may share information in the following circumstances:
                </p>
                <ul className="list-disc pl-5 flex flex-col gap-2.5 font-['Inter',sans-serif] text-[15px] sm:text-[16px] leading-[26px] text-[#333747]">
                  <li>
                    <strong className="font-semibold text-[#12131A]">Service providers</strong> who perform functions on our behalf, such as hosting, email delivery, and customer support tooling.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Infrastructure providers</strong> that store or process data as part of delivering the Services.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Analytics providers</strong> that help us understand product usage in aggregate or anonymized form.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Business partners</strong>, where applicable, to support integrations you choose to enable.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Legal authorities</strong>, where required to comply with applicable law, regulation, or legal process.
                  </li>
                  <li>
                    <strong className="font-semibold text-[#12131A]">Business transfers</strong>, such as a merger, acquisition, or sale of assets, subject to standard confidentiality protections.
                  </li>
                </ul>
              </section>

              {/* 5. Data Retention */}
              <section id="data-retention" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  5. Data Retention
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this Policy, including to provide the Services, meet contractual obligations, comply with legal requirements, resolve disputes, and enforce our agreements. When information is no longer needed, we take reasonable steps to delete or anonymize it.
                </p>
              </section>

              {/* 6. Data Security */}
              <section id="data-security" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  6. Data Security
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  We maintain reasonable technical and organizational safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or destruction. No method of transmission or storage is completely secure, and we cannot guarantee absolute security. We encourage users to protect their account credentials and report any suspected unauthorized access.
                </p>
              </section>

              {/* 7. Cookies and Similar Technologies */}
              <section id="cookies" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  7. Cookies and Similar Technologies
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  We use cookies and similar technologies to operate our website, remember preferences, and understand how visitors interact with our Services. You can manage your preferences at any time on our{' '}
                  <a href="#cookie-settings" className="text-[#5C5CFF] font-semibold hover:underline">
                    Cookie Settings
                  </a>{' '}
                  page.
                </p>
              </section>

              {/* 8. Your Privacy Rights */}
              <section id="privacy-rights" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  8. Your Privacy Rights
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  Depending on your location and applicable law, you may have rights regarding your personal information, which can include the right to access, correct, delete, or restrict the use of your information, and the right to object to certain processing. To exercise any applicable rights, please contact us using the information in the "Contact Us" section below.
                </p>
              </section>

              {/* 9. Children's Privacy */}
              <section id="childrens-privacy" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  9. Children's Privacy
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  The Services are intended for business use by working adults and are not directed to children. We do not knowingly collect personal information from children, and where required by law, we will take steps to remove such information if we become aware of it.
                </p>
              </section>

              {/* 10. International Data Transfers */}
              <section id="international-transfers" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  10. International Data Transfers
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  Where information is transferred across borders as part of delivering the Services, we take reasonable steps to ensure it continues to be protected in accordance with this Policy and applicable law.
                </p>
              </section>

              {/* 11. Changes to This Privacy Policy */}
              <section id="changes" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  11. Changes to This Privacy Policy
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated Policy on this page and revise the "Last updated" date above. We encourage you to review this Policy periodically.
                </p>
              </section>

              {/* 12. Contact Us */}
              <section id="contact" className="scroll-mt-28 flex flex-col gap-3">
                <h2 className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[22px] sm:text-[24px] leading-[30px] tracking-[-0.26px] text-[#12131A]">
                  12. Contact Us
                </h2>
                <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[28px] text-[#333747]">
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us at{' '}
                  <a href="mailto:privacy@workzi.com" className="text-[#5C5CFF] font-semibold hover:underline">
                    privacy@workzi.com
                  </a>.
                </p>
              </section>

              {/* Cross-Link Box */}
              <div className="w-full bg-[#F7F8FC] border border-[#E6E8F0] rounded-[14px] p-5 sm:p-6 mt-4">
                <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22px] text-[#12131A]">
                  Want more control over cookies specifically? Read our{' '}
                  <a href="#cookie-settings" className="text-[#5C5CFF] font-semibold hover:underline">
                    Cookie Settings
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
                          className={`block pl-3.5 text-[14px] leading-[20px] font-['Inter',sans-serif] border-l-2 transition-all ${
                            isActive
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

export default PrivacyPolicyPage;
