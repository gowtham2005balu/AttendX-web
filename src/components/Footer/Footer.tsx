import React, { useState, useEffect } from 'react';
import { Container } from '../Container';
import { FaTwitter, FaLinkedinIn, FaGithub, FaProductHunt } from 'react-icons/fa6';

export const Footer: React.FC = () => {
  const currentYear = 2026;
  const [activeHash, setActiveHash] = useState<string>(window.location.hash || '#home');

  useEffect(() => {
    const update = () => setActiveHash(window.location.hash || '#home');
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const featureLinks = [
    { label: 'Attendance Management', href: '#attendance-management' },
    { label: 'Time-off Management', href: '#Time-off-management' },
    { label: 'Shift Management', href: '#shift-management' },
    { label: 'Task Management', href: '#task-management' },
    { label: 'Employee self service', href: '#employee-self-service' },
    { label: 'Organization Management', href: '#organization-management' },
    { label: 'AI Assistant', href: '#ai-assistant' },
    { label: 'Security & Access Control', href: '#security-access-control' },
    { label: 'Mobile Experience', href: '#mobile-experience' },
    { label: 'Integrations', href: '#integrations' },
  ];

  const solutionLinks = [
    { label: 'Education', href: '#education-solutions' },
    { label: 'Human Resources', href: '#hr-solutions' },
    { label: 'Customer Service', href: '#customer-service-solutions' },
    { label: 'Engineering', href: '#engineering-solutions' },
    { label: 'IT', href: '#it-solutions' },
    { label: 'Sales', href: '#sales-solutions' },
    { label: 'Project Management', href: '#project-management-solutions' },
    { label: 'Marketing', href: '#marketing-solutions' },
    { label: 'Manufacturing, Auto & Energy', href: '#manufacturing-auto-energy-solutions' },
    { label: 'Technology', href: '#technology-solutions' },
    { label: 'Media', href: '#media-solutions' },
    { label: 'Small Business', href: '#small-business-solutions' },
    { label: 'Financial Services', href: '#financial-services-solutions' },
    { label: 'Retail', href: '#retail-solutions' },
    { label: 'Health & Life Sciences', href: '#healthcare-solutions' },
  ];

  const whyWorkziLinks = [
    { label: 'Why Workzi', href: '#why-attendx' },
    { label: 'Workzi vs Manual HR', href: '#attendx-vs-manual-hr' },
    { label: 'Workzi vs Traditional HRMS', href: '#attendx-vs-traditional-hrms' },
    { label: 'For Enterprise', href: '#for-enterprise' },
    { label: 'Scale with Workzi', href: '#scale-with-workzi' },
    { label: 'For Small Business', href: '#for-small-business' },
    { label: 'Trust & Security', href: '#trust-and-security' },
  ];

  const resourceLinks = [
    { label: 'FAQ', href: '#faq' },
    { label: 'Help Center', href: '#help-center' },
    { label: 'Contact Us', href: '#contact-support' },
  ];

  const companyLinks = [
    { label: 'About Us', href: '#about-us' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#blog' },
  ];

  const columnHeadingCls =
    "font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[13px] leading-[17px] tracking-[0.8px] uppercase text-white mb-[16px]";

  const getLinkCls = (href: string) => {
    const isActive = activeHash === href;
    return `font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[13px] sm:text-[14px] leading-[20px] transition-colors duration-200 block whitespace-nowrap ${isActive
        ? 'text-[#5B5FFF] font-semibold'
        : 'text-[#9CA3AF] hover:text-[#5B5FFF]'
      }`;
  };

  const getBottomLinkCls = (href: string) => {
    const isActive = activeHash === href;
    return `font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[13px] leading-[16px] transition-colors duration-200 whitespace-nowrap ${isActive ? 'text-white font-semibold' : 'text-[#6B7280] hover:text-white'
      }`;
  };

  return (
    <footer className="bg-[#0B0E1A] relative z-30 px-4 sm:px-8 lg:px-[80px] pt-12 sm:pt-16 pb-0">
      {/* Inner container — max 1280px, full width inside padding */}
      <div className="max-w-[1280px] mx-auto w-full">

        {/* ── FOOTER TOP ── */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[48px] pb-12">

          {/* ── BRAND COLUMN ── */}
          <div className="w-full lg:w-[242px] flex flex-col items-start shrink-0 gap-4 pr-0 lg:pr-8">
            {/* Logo */}
            <a href="#home" onClick={scrollToTop} className="flex items-center gap-[10px] group h-[36px]">
              <div className="w-[36px] h-[36px] bg-[#5B5FFF] rounded-[10px] flex items-center justify-center text-white shrink-0">
                <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center shrink-0">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" className="text-[#5B5FFF]">
                    <rect x="5" y="4" width="4" height="16" rx="1.5" fill="currentColor" />
                    <rect x="15" y="4" width="4" height="16" rx="1.5" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-extrabold text-[20px] leading-[25px] text-white">
                Workzi
              </span>
            </a>

            {/* Tagline */}
            <p className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[14px] leading-[22px] text-white/50 max-w-[240px]">
              Smart attendance management built for modern HR teams and growing businesses.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-2">
              {[
                { icon: <FaTwitter size={15} />, url: '#', label: 'Twitter' },
                { icon: <FaLinkedinIn size={15} />, url: '#', label: 'LinkedIn' },
                { icon: <FaGithub size={15} />, url: '#', label: 'GitHub' },
                { icon: <FaProductHunt size={15} />, url: 'https://www.producthunt.com/', label: 'Product Hunt', target: '_blank', rel: 'noopener noreferrer' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target={item.target}
                  rel={item.rel}
                  onClick={item.url === '#' ? scrollToTop : undefined}
                  className="w-9 h-9 rounded-[9px] bg-white/[0.06] border border-white/[0.08] text-white/60 flex items-center justify-center transition-all duration-200 hover:text-white hover:bg-white/[0.12] shrink-0"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── FIVE LINK COLUMNS ── Desktop Grid (5 Columns) */}
          <div className="w-full flex-1 hidden lg:grid lg:grid-cols-5 gap-12 min-w-0">
            {/* Column 1 — FEATURES */}
            <div className="flex flex-col items-start min-w-0">
              <h5 className={columnHeadingCls}>FEATURES</h5>
              <ul className="flex flex-col gap-3 w-full">
                {featureLinks.map(({ label, href }) => (
                  <li key={label} className="min-w-0">
                    <a href={href} onClick={scrollToTop} className={getLinkCls(href)}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 — SOLUTIONS */}
            <div className="flex flex-col items-start min-w-0">
              <h5 className={columnHeadingCls}>SOLUTIONS</h5>
              <ul className="flex flex-col gap-3 w-full">
                {solutionLinks.map(({ label, href }) => (
                  <li key={label} className="min-w-0">
                    <a href={href} onClick={scrollToTop} className={getLinkCls(href)}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 — WHY WORKZI */}
            <div className="flex flex-col items-start min-w-0">
              <h5 className={columnHeadingCls}>WHY WORKZI</h5>
              <ul className="flex flex-col gap-3 w-full">
                {whyWorkziLinks.map(({ label, href }) => (
                  <li key={label} className="min-w-0">
                    <a href={href} onClick={scrollToTop} className={getLinkCls(href)}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 — RESOURCES */}
            <div className="flex flex-col items-start min-w-0">
              <h5 className={columnHeadingCls}>RESOURCES</h5>
              <ul className="flex flex-col gap-3 w-full">
                {resourceLinks.map(({ label, href }) => (
                  <li key={label} className="min-w-0">
                    <a href={href} onClick={scrollToTop} className={getLinkCls(href)}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5 — COMPANY */}
            <div className="flex flex-col items-start min-w-0">
              <h5 className={columnHeadingCls}>COMPANY</h5>
              <ul className="flex flex-col gap-3 w-full">
                {companyLinks.map(({ label, href }) => (
                  <li key={label} className="min-w-0">
                    <a href={href} onClick={scrollToTop} className={getLinkCls(href)}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── MOBILE / TABLET COLUMNS ── 2 Balanced Columns (No vertical gaps) */}
          <div className="w-full flex-1 flex flex-row lg:hidden gap-6 sm:gap-10 min-w-0">
            {/* Left Mobile Column: Features + Why Workzi + Company */}
            <div className="flex-1 flex flex-col gap-8 min-w-0">
              {/* FEATURES */}
              <div className="flex flex-col items-start min-w-0">
                <h5 className={columnHeadingCls}>FEATURES</h5>
                <ul className="flex flex-col gap-3 w-full">
                  {featureLinks.map(({ label, href }) => (
                    <li key={label} className="min-w-0">
                      <a href={href} onClick={scrollToTop} className={getLinkCls(href)}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHY WORKZI */}
              <div className="flex flex-col items-start min-w-0">
                <h5 className={columnHeadingCls}>WHY WORKZI</h5>
                <ul className="flex flex-col gap-3 w-full">
                  {whyWorkziLinks.map(({ label, href }) => (
                    <li key={label} className="min-w-0">
                      <a href={href} onClick={scrollToTop} className={getLinkCls(href)}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* COMPANY */}
              <div className="flex flex-col items-start min-w-0">
                <h5 className={columnHeadingCls}>COMPANY</h5>
                <ul className="flex flex-col gap-3 w-full">
                  {companyLinks.map(({ label, href }) => (
                    <li key={label} className="min-w-0">
                      <a href={href} onClick={scrollToTop} className={getLinkCls(href)}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Mobile Column: Solutions + Resources */}
            <div className="flex-1 flex flex-col gap-8 min-w-0">
              {/* SOLUTIONS */}
              <div className="flex flex-col items-start min-w-0">
                <h5 className={columnHeadingCls}>SOLUTIONS</h5>
                <ul className="flex flex-col gap-3 w-full">
                  {solutionLinks.map(({ label, href }) => (
                    <li key={label} className="min-w-0">
                      <a href={href} onClick={scrollToTop} className={getLinkCls(href)}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* RESOURCES */}
              <div className="flex flex-col items-start min-w-0">
                <h5 className={columnHeadingCls}>RESOURCES</h5>
                <ul className="flex flex-col gap-3 w-full">
                  {resourceLinks.map(({ label, href }) => (
                    <li key={label} className="min-w-0">
                      <a href={href} onClick={scrollToTop} className={getLinkCls(href)}>{label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* ── FOOTER BOTTOM ── */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between"
          style={{
            borderTop: '1px solid #1A1F2E',
            paddingTop: '20px',
            paddingBottom: '32px',
            gap: '16px',
          }}
        >
          <p
            className="font-['Plus_Jakarta_Sans',sans-serif] font-normal text-[13px] leading-[16px] text-center sm:text-left"
            style={{ color: '#6B7280' }}
          >
            © {currentYear} Workzi. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center" style={{ gap: '20px' }}>
            {[
              { label: 'Privacy Policy', href: '#privacy-policy' },
              { label: 'Terms of Service', href: '#terms-of-service' },
              { label: 'Cookie Settings', href: '#cookie-settings' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={scrollToTop}
                className={getBottomLinkCls(href)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

