import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_LINKS,
  SOLUTIONS_BY_INDUSTRY,
  SOLUTIONS_BY_DEPARTMENT,
  FEATURES_WORKFORCE_MANAGEMENT,
  FEATURES_PRODUCTIVITY_OPERATIONS,
  FEATURES_PLATFORM,
} from '../../constants';
import type { NavDropdownItem } from '../../constants';
import {
  Menu,
  X,
  ChevronDown,
  Clock,
  Calendar,
  Smartphone,
  Users,
  Banknote,
  Zap,
  GraduationCap,
  Briefcase,
  Headphones,
  Code,
  Shield,
  Megaphone,
  Factory,
  Film,
  Building2,
  Landmark,
  ShoppingBag,
  Stethoscope,
  RotateCcw,
  CheckSquare,
  UserCheck,
  Sparkles,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  clock: <Clock size={18} className="text-[#5B5FEF]" />,
  calendar: <Calendar size={18} className="text-emerald-500" />,
  shifts: <RotateCcw size={18} className="text-amber-500" />,
  tasks: <CheckSquare size={18} className="text-violet-500" />,
  'self-service': <UserCheck size={18} className="text-cyan-500" />,
  'org-management': <Building2 size={18} className="text-blue-500" />,
  'ai-assistant': <Sparkles size={18} className="text-purple-500" />,
  security: <Shield size={18} className="text-rose-500" />,
  mobile: <Smartphone size={18} className="text-emerald-500" />,
  integrations: <Zap size={18} className="text-[#5B5FEF]" />,
  smartphone: <Smartphone size={18} className="text-sky-500" />,
  users: <Users size={18} className="text-violet-500" />,
  banknote: <Banknote size={18} className="text-amber-500" />,
  zap: <Zap size={18} className="text-rose-500" />,
  education: <GraduationCap size={18} className="text-[#5B5FEF]" />,
  workforce: <Briefcase size={18} className="text-emerald-500" />,
  headsets: <Headphones size={18} className="text-indigo-500" />,
  code: <Code size={18} className="text-blue-500" />,
  shield: <Shield size={18} className="text-rose-500" />,
  megaphones: <Megaphone size={18} className="text-amber-500" />,
  industry: <Factory size={18} className="text-[#5B5FEF]" />,
  film: <Film size={18} className="text-rose-500" />,
  building: <Building2 size={18} className="text-emerald-500" />,
  landmark: <Landmark size={18} className="text-[#5B5FEF]" />,
  shopping: <ShoppingBag size={18} className="text-amber-500" />,
  stethoscope: <Stethoscope size={18} className="text-rose-500" />,
};

const splitArray = <T,>(arr: T[]): [T[], T[]] => {
  const mid = Math.ceil(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
};

/* ─── Solutions Mega-Dropdown ─── */
const SolutionsMegaDropdown: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handleItemClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    onClose();
  };

  const [industryCol1, industryCol2] = splitArray(SOLUTIONS_BY_INDUSTRY);
  const [departmentCol1, departmentCol2] = splitArray(SOLUTIONS_BY_DEPARTMENT);

  return (
    <div
      className="solutions-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-2.5 bg-white border border-[#E5E7EB] rounded-[20px] z-50 animate-in fade-in slide-in-from-top-2 duration-150 flex flex-col items-center isolation-isolate"
      style={{
        width: '960px',
        maxWidth: '1872px',
        padding: '32px 0px 0px',
        gap: '28px',
        boxShadow: '0px 24px 48px -20px rgba(15, 23, 42, 0.18), 0px 4px 12px -4px rgba(15, 23, 42, 0.08)',
      }}
      onMouseLeave={onClose}
    >
      {/* div.solutions-grid */}
      <div
        className="solutions-grid flex flex-row justify-center items-start p-0"
        style={{ width: '886px', gap: '40px' }}
      >
        {/* Industry Section (div: 423px) */}
        <div className="flex flex-col items-start p-0" style={{ width: '423px', gap: '14px' }}>
          {/* div.mega-section-label */}
          <div className="mega-section-label flex flex-col items-start p-0 w-full" style={{ height: '16px' }}>
            <h4
              className="w-full flex items-center font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12.5px] leading-[16px] tracking-[0.625px] uppercase"
              style={{ color: '#64748B' }}
            >
              By Industry
            </h4>
          </div>

          {/* div.solutions-subcols */}
          <div
            className="solutions-subcols flex flex-row justify-center items-start w-full"
            style={{ padding: '2px 0px 0px', gap: '20px' }}
          >
            {/* Sub-col 1 */}
            <div className="flex flex-col items-start p-0 flex-1 min-w-0" style={{ width: '201.5px' }}>
              {industryCol1.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleItemClick}
                  className="mm-link flex flex-row items-center rounded-[10px] transition-all duration-150 group hover:bg-[#F8FAFC] w-full"
                  style={{ padding: '10px', gap: '12px', height: '58px' }}
                >
                  <span
                    className="mm-icon flex flex-row justify-center items-center shrink-0"
                    style={{ width: '38px', height: '38px', background: '#F8FAFC', borderRadius: '12px' }}
                  >
                    {ICON_MAP[item.icon] || <Users size={18} className="text-[#5C5CFF]" />}
                  </span>
                  <span
                    className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] leading-[18px] group-hover:text-[#5C5CFF] transition-colors flex items-center whitespace-normal break-words"
                    style={{ color: '#0F172A' }}
                  >
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Sub-col 2 */}
            <div className="flex flex-col items-start p-0 flex-1 min-w-0" style={{ width: '201.5px' }}>
              {industryCol2.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleItemClick}
                  className="mm-link flex flex-row items-center rounded-[10px] transition-all duration-150 group hover:bg-[#F8FAFC] w-full"
                  style={{ padding: '10px', gap: '12px', height: '58px' }}
                >
                  <span
                    className="mm-icon flex flex-row justify-center items-center shrink-0"
                    style={{ width: '38px', height: '38px', background: '#F8FAFC', borderRadius: '12px' }}
                  >
                    {ICON_MAP[item.icon] || <Users size={18} className="text-[#5C5CFF]" />}
                  </span>
                  <span
                    className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] leading-[18px] group-hover:text-[#5C5CFF] transition-colors flex items-center whitespace-normal break-words"
                    style={{ color: '#0F172A' }}
                  >
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Department Section (div: 423px) */}
        <div className="flex flex-col items-start p-0" style={{ width: '423px', gap: '14px' }}>
          {/* div.mega-section-label */}
          <div className="mega-section-label flex flex-col items-start p-0 w-full" style={{ height: '16px' }}>
            <h4
              className="w-full flex items-center font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12.5px] leading-[16px] tracking-[0.625px] uppercase"
              style={{ color: '#64748B' }}
            >
              By Department
            </h4>
          </div>

          {/* div.solutions-subcols */}
          <div
            className="solutions-subcols flex flex-row justify-center items-start w-full"
            style={{ padding: '2px 0px 0px', gap: '20px' }}
          >
            {/* Sub-col 1 */}
            <div className="flex flex-col items-start p-0 flex-1 min-w-0" style={{ width: '201.5px' }}>
              {departmentCol1.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleItemClick}
                  className="mm-link flex flex-row items-center rounded-[10px] transition-all duration-150 group hover:bg-[#F8FAFC] w-full"
                  style={{ padding: '10px', gap: '12px', height: '58px' }}
                >
                  <span
                    className="mm-icon flex flex-row justify-center items-center shrink-0"
                    style={{ width: '38px', height: '38px', background: '#F8FAFC', borderRadius: '12px' }}
                  >
                    {ICON_MAP[item.icon] || <Users size={18} className="text-[#5C5CFF]" />}
                  </span>
                  <span
                    className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] leading-[18px] group-hover:text-[#5C5CFF] transition-colors flex items-center whitespace-normal break-words"
                    style={{ color: '#0F172A' }}
                  >
                    {item.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Sub-col 2 */}
            <div className="flex flex-col items-start p-0 flex-1 min-w-0" style={{ width: '201.5px' }}>
              {departmentCol2.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleItemClick}
                  className="mm-link flex flex-row items-center rounded-[10px] transition-all duration-150 group hover:bg-[#F8FAFC] w-full"
                  style={{ padding: '10px', gap: '12px', height: '58px' }}
                >
                  <span
                    className="mm-icon flex flex-row justify-center items-center shrink-0"
                    style={{ width: '38px', height: '38px', background: '#F8FAFC', borderRadius: '12px' }}
                  >
                    {ICON_MAP[item.icon] || <Users size={18} className="text-[#5C5CFF]" />}
                  </span>
                  <span
                    className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] leading-[18px] group-hover:text-[#5C5CFF] transition-colors flex items-center whitespace-normal break-words"
                    style={{ color: '#0F172A' }}
                  >
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* div.mm-cta */}
      <div
        className="mm-cta flex flex-row justify-between items-center w-full"
        style={{
          boxSizing: 'border-box',
          padding: '20px 36px',
          background: '#F8FAFC',
          borderTop: '1px solid #E5E7EB',
          borderRadius: '0px 0px 20px 20px',
        }}
      >
        {/* div.mm-cta-left */}
        <div className="mm-cta-left flex flex-col items-start p-0" style={{ width: '320px', gap: '4px' }}>
          <h4
            className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] flex items-center"
            style={{ color: '#0F172A' }}
          >
            Not sure where to start?
          </h4>
          <p
            className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] flex items-center"
            style={{ color: '#64748B', maxWidth: '271px' }}
          >
            We'll help you find the right solution for your industry or department.
          </p>
        </div>

        {/* div.mm-cta-actions */}
        <div className="mm-cta-actions flex flex-row items-start p-0 shrink-0" style={{ gap: '10px', width: '256px', height: '44px' }}>
          <a
            href="#pricing"
            onClick={handleItemClick}
            className="cta-btn cursor-pointer transition-all duration-150 hover:bg-[#4B4BFF] hover:scale-[1.02]"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '11px 18px',
              width: '126px',
              height: '44px',
              background: '#5C5CFF',
              borderRadius: '10px',
              color: '#FFFFFF',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Book a Demo
          </a>
          <a
            href="#contact-support"
            onClick={handleItemClick}
            className="cta-btn cursor-pointer transition-all duration-150 hover:bg-slate-50 hover:scale-[1.02]"
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '11px 18px',
              width: '120px',
              height: '44px',
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '10px',
              color: '#0F172A',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </div>
  );
};

/* ─── Features Mega-Dropdown ─── */
const FeaturesMegaDropdown: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handleItemClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    onClose();
  };

  return (
    <div
      className="features-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-2.5 bg-white border border-[#E5E7EB] rounded-[20px] z-50 animate-in fade-in slide-in-from-top-2 duration-150 flex flex-col items-center isolation-isolate"
      style={{
        width: '960px',
        maxWidth: '1872px',
        padding: '32px 0px 0px',
        gap: '28px',
        boxShadow: '0px 24px 48px -20px rgba(15, 23, 42, 0.18), 0px 4px 12px -4px rgba(15, 23, 42, 0.08)',
      }}
      onMouseLeave={onClose}
    >
      {/* div.solutions-grid */}
      <div
        className="solutions-grid flex flex-row justify-center items-start p-0"
        style={{ width: '886px', gap: '40px' }}
      >
        {/* WORKFORCE MANAGEMENT (div: 268.67px) */}
        <div className="flex flex-col items-start p-0 flex-1 min-w-0" style={{ width: '268.67px', gap: '14px' }}>
          {/* div.mega-section-label */}
          <div className="mega-section-label flex flex-col items-start p-0 w-full" style={{ height: '16px' }}>
            <h4
              className="w-full flex items-center font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12.5px] leading-[16px] tracking-[0.625px] uppercase"
              style={{ color: '#64748B' }}
            >
              Workforce Management
            </h4>
          </div>

          {/* div.solutions-subcols */}
          <div className="solutions-subcols flex flex-col items-start w-full" style={{ padding: '2px 0px 0px' }}>
            {FEATURES_WORKFORCE_MANAGEMENT.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleItemClick}
                className="mm-link flex flex-row items-center rounded-[10px] transition-all duration-150 group hover:bg-[#F8FAFC] w-full"
                style={{ padding: '10px', gap: '12px', height: '58px' }}
              >
                <span
                  className="mm-icon flex flex-row justify-center items-center shrink-0"
                  style={{ width: '38px', height: '38px', background: '#F8FAFC', borderRadius: '12px' }}
                >
                  {ICON_MAP[item.icon] || <Users size={18} className="text-[#5C5CFF]" />}
                </span>
                <span
                  className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] leading-[18px] group-hover:text-[#5C5CFF] transition-colors flex items-center whitespace-normal break-words"
                  style={{ color: '#0F172A' }}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* PRODUCTIVITY & OPERATIONS (div: 268.67px) */}
        <div className="flex flex-col items-start p-0 flex-1 min-w-0" style={{ width: '268.67px', gap: '14px' }}>
          {/* div.mega-section-label */}
          <div className="mega-section-label flex flex-col items-start p-0 w-full" style={{ height: '16px' }}>
            <h4
              className="w-full flex items-center font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12.5px] leading-[16px] tracking-[0.625px] uppercase"
              style={{ color: '#64748B' }}
            >
              Productivity &amp; Operations
            </h4>
          </div>

          {/* div.solutions-subcols */}
          <div className="solutions-subcols flex flex-col items-start w-full" style={{ padding: '2px 0px 0px' }}>
            {FEATURES_PRODUCTIVITY_OPERATIONS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleItemClick}
                className="mm-link flex flex-row items-center rounded-[10px] transition-all duration-150 group hover:bg-[#F8FAFC] w-full"
                style={{ padding: '10px', gap: '12px', height: '58px' }}
              >
                <span
                  className="mm-icon flex flex-row justify-center items-center shrink-0"
                  style={{ width: '38px', height: '38px', background: '#F8FAFC', borderRadius: '12px' }}
                >
                  {ICON_MAP[item.icon] || <Users size={18} className="text-[#5C5CFF]" />}
                </span>
                <span
                  className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] leading-[18px] group-hover:text-[#5C5CFF] transition-colors flex items-center whitespace-normal break-words"
                  style={{ color: '#0F172A' }}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* PLATFORM (div: 268.67px) */}
        <div className="flex flex-col items-start p-0 flex-1 min-w-0" style={{ width: '268.67px', gap: '14px' }}>
          {/* div.mega-section-label */}
          <div className="mega-section-label flex flex-col items-start p-0 w-full" style={{ height: '16px' }}>
            <h4
              className="w-full flex items-center font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[12.5px] leading-[16px] tracking-[0.625px] uppercase"
              style={{ color: '#64748B' }}
            >
              Platform
            </h4>
          </div>

          {/* div.solutions-subcols */}
          <div className="solutions-subcols flex flex-col items-start w-full" style={{ padding: '2px 0px 0px' }}>
            {FEATURES_PLATFORM.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleItemClick}
                className="mm-link flex flex-row items-center rounded-[10px] transition-all duration-150 group hover:bg-[#F8FAFC] w-full"
                style={{ padding: '10px', gap: '12px', height: '58px' }}
              >
                <span
                  className="mm-icon flex flex-row justify-center items-center shrink-0"
                  style={{ width: '38px', height: '38px', background: '#F8FAFC', borderRadius: '12px' }}
                >
                  {ICON_MAP[item.icon] || <Users size={18} className="text-[#5C5CFF]" />}
                </span>
                <span
                  className="font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14.5px] leading-[18px] group-hover:text-[#5C5CFF] transition-colors flex items-center whitespace-normal break-words"
                  style={{ color: '#0F172A' }}
                >
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* div.mm-cta */}
      <div
        className="mm-cta flex flex-row justify-between items-center w-full"
        style={{
          boxSizing: 'border-box',
          padding: '20px 36px',
          background: '#F8FAFC',
          borderTop: '1px solid #E5E7EB',
          borderRadius: '0px 0px 20px 20px',
        }}
      >
        {/* div.mm-cta-left */}
        <div className="mm-cta-left flex flex-col items-start p-0" style={{ width: '320px', gap: '4px' }}>
          <h4
            className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[15px] leading-[19px] flex items-center"
            style={{ color: '#0F172A' }}
          >
            Not sure where to start?
          </h4>
          <p
            className="font-['Inter',sans-serif] font-normal text-[13px] leading-[20px] flex items-center"
            style={{ color: '#64748B', maxWidth: '271px' }}
          >
            We'll help you find the right solution for your industry or department.
          </p>
        </div>

        {/* div.mm-cta-actions */}
        <div className="mm-cta-actions flex flex-row items-start p-0 shrink-0" style={{ gap: '10px', width: '256px', height: '44px' }}>
          <a
            href="#pricing"
            onClick={handleItemClick}
            className="cta-btn cursor-pointer transition-all duration-150 hover:bg-[#4B4BFF] hover:scale-[1.02]"
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '11px 18px',
              width: '126px',
              height: '44px',
              background: '#5C5CFF',
              borderRadius: '10px',
              color: '#FFFFFF',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Book a Demo
          </a>
          <a
            href="#contact-support"
            onClick={handleItemClick}
            className="cta-btn cursor-pointer transition-all duration-150 hover:bg-slate-50 hover:scale-[1.02]"
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '11px 18px',
              width: '120px',
              height: '44px',
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '10px',
              color: '#0F172A',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          >
            Talk to Sales
          </a>
        </div>
      </div>
    </div>
  );
};

/* ─── Generic Mega-Dropdown (Features etc) ─── */
const NavMegaDropdown: React.FC<{ items: NavDropdownItem[]; onClose: () => void }> = ({
  items,
  onClose,
}) => {
  const isSingleItem = items.length === 1;

  const handleItemClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    onClose();
  };

  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-slate-200/90 rounded-2xl shadow-2xl shadow-slate-200/70 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150 ${isSingleItem ? 'w-[320px]' : 'w-[640px]'
        }`}
      onMouseLeave={onClose}
    >
      {/* Grid of items */}
      <div className={`grid gap-2 p-1 ${isSingleItem ? 'grid-cols-1' : 'grid-cols-2'}`}>
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={handleItemClick}
            className="flex items-center gap-3 p-2.5 rounded-xl transition-colors duration-150 group min-w-0 hover:bg-slate-50"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-sm transition-all duration-150">
              {ICON_MAP[item.icon] || <Users size={18} className="text-violet-500" />}
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-[14.5px] font-bold text-slate-800 group-hover:text-[#5B5FEF] transition-colors leading-[1.25] break-words">
                {item.label}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

/* ─── Main Navbar ─── */
export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash || '#home');
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDarkHeroPage = !isScrolled && (activeHash === '#pricing' || activeHash === '#employee-app' || activeHash === '#home' || activeHash === '' || activeHash === '#' || activeHash === '#help-center');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
      setOpenDropdown(null);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled
        ? 'py-2 px-4 sm:px-6 lg:px-10'
        : 'py-0 px-0 bg-transparent'
        }`}
    >
      <div
        className={`w-full transition-all duration-300 flex items-center justify-between ${isScrolled
          ? 'max-w-[1280px] mx-auto bg-white/95 backdrop-blur-md rounded-[18px] shadow-[0_10px_35px_rgba(0,0,0,0.07)] h-[56px] px-6 border-none'
          : 'h-[68px] px-4 sm:px-6 md:px-10 lg:px-12 xl:px-14 bg-transparent'
          }`}
      >
        {/* Logo wrapper (Left Corner) */}
        <div className="flex-1 flex justify-start">
          <a
            href="#home"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
            className="flex items-center gap-[11px] shrink-0 min-h-[44px]"
          >
            <div className="w-[40px] h-[40px] bg-[#5B5FEF] rounded-[13px] flex items-center justify-center text-white shrink-0 shadow-xs">
              <div className="w-[20px] h-[20px] rounded-full bg-white flex items-center justify-center shrink-0">
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" className="text-[#5B5FEF]">
                  <rect x="5" y="4" width="4" height="16" rx="1.5" fill="currentColor" />
                  <rect x="15" y="4" width="4" height="16" rx="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>
            <span className={`font-['Plus_Jakarta_Sans',sans-serif] text-[22px] font-extrabold leading-[26px] tracking-[-0.6px] ${isDarkHeroPage ? 'text-white' : 'text-[#111827]'}`}>
              Work<span className="text-[#5B5FEF]">zi</span>
            </span>
          </a>
        </div>

        {/* Center Nav Links */}
        <div className="hidden lg:flex items-center justify-center gap-[4px] shrink-0">
          {NAV_LINKS.map((link) => {
            const isActive = activeHash === link.href || link.dropdown?.some(sub => sub.href === activeHash);
            const isDropdownOpen = openDropdown === link.label;

            const nonActiveStyle = isScrolled
              ? 'text-[#555C6E] font-semibold hover:text-[#111827] hover:bg-white/60'
              : isDarkHeroPage
                ? 'text-white/90 font-bold hover:text-white hover:bg-white/10'
                : 'text-[#0F172A] font-bold hover:text-[#5B5FEF] hover:bg-white/60';

            if (link.dropdown) {
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(link.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      if (link.href === '#') {
                        e.preventDefault();
                        return;
                      }
                      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                      setOpenDropdown(null);
                    }}
                    className={`flex items-center gap-1.5 px-[18px] py-[8px] font-['Plus_Jakarta_Sans',sans-serif] text-[14.5px] leading-[20px] rounded-[14px] transition-all duration-200 cursor-pointer whitespace-nowrap ${isActive || isDropdownOpen
                      ? 'bg-white text-[#5B5FEF] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                      : nonActiveStyle
                      }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={2.5}
                      className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </a>

                  {isDropdownOpen && (
                    <div onMouseEnter={handleDropdownMouseEnter}>
                      {link.label === 'Solutions' ? (
                        <SolutionsMegaDropdown onClose={() => setOpenDropdown(null)} />
                      ) : link.label === 'Features' ? (
                        <FeaturesMegaDropdown onClose={() => setOpenDropdown(null)} />
                      ) : (
                        <NavMegaDropdown
                          items={link.dropdown}
                          onClose={() => setOpenDropdown(null)}
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
                className={`px-[18px] py-[8px] font-['Plus_Jakarta_Sans',sans-serif] text-[14.5px] leading-[20px] rounded-[14px] transition-all duration-200 whitespace-nowrap ${isActive
                  ? 'bg-white text-[#5B5FEF] font-bold shadow-[0_2px_8px_rgba(0,0,0,0.04)]'
                  : nonActiveStyle
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Right Action Buttons (Right Corner) */}
        <div className="flex-1 hidden lg:flex items-center justify-end gap-6 shrink-0">
          <a
            href="#login"
            className={`font-['Plus_Jakarta_Sans',sans-serif] text-[15px] transition-colors ${isScrolled
              ? 'text-[#555C6E] font-semibold hover:text-[#111827]'
              : isDarkHeroPage
                ? 'text-white font-bold hover:text-white/80'
                : 'text-[#0F172A] font-bold hover:text-[#5B5FEF]'
              }`}
          >
            Login
          </a>
          <button className="bg-[#5B5FEF] hover:bg-[#4F46E5] text-white font-['Plus_Jakarta_Sans',sans-serif] text-[15px] font-bold leading-[18px] px-[26px] py-[11px] rounded-full transition-all duration-200 shadow-sm shadow-[#5B5FEF]/30 cursor-pointer">
            Book Demo
          </button>
        </div>

        {/* Mobile Hamburger wrapper */}
        <div className="flex-1 flex justify-end lg:hidden">
          <button
            className={`p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg active:bg-slate-200/50 cursor-pointer ${isDarkHeroPage ? 'text-white' : 'text-[#111827]'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Floating Drawer Overlay & Card */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop Blur Overlay */}
          <div
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-[2px] z-[99] lg:hidden animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* div.drawer */}
          <div
            className="drawer fixed top-3 right-3 left-auto w-[calc(100vw-24px)] sm:w-[420px] max-w-[420px] bg-white border border-[#E5E7EB] z-[100] flex flex-col lg:hidden overflow-hidden animate-in fade-in zoom-in-95 duration-200"
            style={{
              boxSizing: 'border-box',
              padding: '0px 16px',
              background: '#FFFFFF',
              border: '1px solid #E5E7EB',
              boxShadow: '0px 20px 40px -20px rgba(15, 23, 42, 0.15)',
              borderRadius: '20px',
              maxHeight: 'calc(100vh - 24px)',
            }}
          >
            {/* div.drawer-header */}
            <div
              className="drawer-header flex flex-row items-center justify-between shrink-0 w-full"
              style={{
                padding: '18px 0px',
                width: '100%',
                height: '56px',
              }}
            >
              <a
                href="#home"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-[10px]"
              >
                <div className="w-[32px] h-[32px] bg-[#5B5FEF] rounded-[10px] flex items-center justify-center text-white shrink-0 shadow-xs">
                  <div className="w-[16px] h-[16px] rounded-full bg-white flex items-center justify-center shrink-0">
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" className="text-[#5B5FEF]">
                      <rect x="5" y="4" width="4" height="16" rx="1.5" fill="currentColor" />
                      <rect x="15" y="4" width="4" height="16" rx="1.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <strong
                  className="font-['Plus_Jakarta_Sans',sans-serif] text-[18px] font-extrabold text-[#0F172A] tracking-[-0.5px] select-none"
                >
                  Work<span className="text-[#5B5FEF]">zi</span>
                </strong>
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Close Menu"
              >
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '14px',
                    height: '19px',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '19px',
                    color: '#0F172A',
                  }}
                >
                  ✕
                </span>
              </button>
            </div>

            {/* Frame 1984079035 (Scrollable Body) */}
            <div
              className="flex flex-col overflow-y-auto w-full"
              style={{
                padding: '24px 0px',
                gap: '24px',
              }}
            >
              {/* Frame 1984079036 (Navigation Items) */}
              <div
                className="flex flex-col items-start p-0 w-full"
                style={{ gap: '20px' }}
              >
                {NAV_LINKS.map((link) => {
                  const isOpen = openMobileDropdown === link.label;

                  if (link.dropdown) {
                    return (
                      <div key={link.label} className="drawer-item flex flex-col items-start p-0 w-full">
                        {/* button.drawer-trigger */}
                        <button
                          type="button"
                          onClick={() => setOpenMobileDropdown(isOpen ? null : link.label)}
                          className="drawer-trigger w-full flex flex-row justify-between items-center px-4 py-0 cursor-pointer hover:bg-slate-50 transition-colors"
                          style={{
                            height: '20px',
                          }}
                        >
                          <span
                            style={{
                              height: '20px',
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 600,
                              fontSize: '16px',
                              lineHeight: '20px',
                              color: '#000000',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            {link.label}
                          </span>
                          <span
                            className={`chev flex flex-col items-center p-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#5B5FEF]' : ''}`}
                            style={{
                              width: '6px',
                              height: '18px',
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 700,
                              fontSize: '15px',
                              lineHeight: '18px',
                              color: '#64748B',
                              display: 'flex',
                              alignItems: 'center',
                            }}
                          >
                            ▾
                          </span>
                        </button>

                        {/* Accordion dropdown content */}
                        {isOpen && (
                          <div className="pt-3 pb-3 px-4 flex flex-col gap-3 animate-in fade-in duration-150 bg-slate-50/70 mt-2 rounded-xl w-full">
                            {link.label === 'Solutions' ? (
                              <>
                                {/* BY INDUSTRY */}
                                <div>
                                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] leading-[14px] tracking-[0.625px] uppercase text-[#64748B] mb-2 mt-1">
                                    BY INDUSTRY
                                  </h4>
                                  <div className="flex flex-col gap-1">
                                    {SOLUTIONS_BY_INDUSTRY.map((item) => (
                                      <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => {
                                          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                                          setIsMobileMenuOpen(false);
                                          setOpenMobileDropdown(null);
                                        }}
                                        className="py-1.5 text-[14px] font-semibold text-[#0F172A] hover:text-[#5C5CFF] transition-colors flex items-center active:bg-slate-100 px-2 rounded-lg"
                                      >
                                        {item.label}
                                      </a>
                                    ))}
                                  </div>
                                </div>

                                {/* BY DEPARTMENT */}
                                <div className="mt-2">
                                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] leading-[14px] tracking-[0.625px] uppercase text-[#64748B] mb-2">
                                    BY DEPARTMENT
                                  </h4>
                                  <div className="flex flex-col gap-1">
                                    {SOLUTIONS_BY_DEPARTMENT.map((item) => (
                                      <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => {
                                          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                                          setIsMobileMenuOpen(false);
                                          setOpenMobileDropdown(null);
                                        }}
                                        className="py-1.5 text-[14px] font-semibold text-[#0F172A] hover:text-[#5C5CFF] transition-colors flex items-center active:bg-slate-100 px-2 rounded-lg"
                                      >
                                        {item.label}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </>
                            ) : link.label === 'Features' ? (
                              <>
                                {/* WORKFORCE MANAGEMENT */}
                                <div>
                                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] leading-[14px] tracking-[0.625px] uppercase text-[#64748B] mb-2 mt-1">
                                    WORKFORCE MANAGEMENT
                                  </h4>
                                  <div className="flex flex-col gap-1">
                                    {FEATURES_WORKFORCE_MANAGEMENT.map((item) => (
                                      <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => {
                                          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                                          setIsMobileMenuOpen(false);
                                          setOpenMobileDropdown(null);
                                        }}
                                        className="py-1.5 text-[14px] font-semibold text-[#0F172A] hover:text-[#5C5CFF] transition-colors flex items-center active:bg-slate-100 px-2 rounded-lg"
                                      >
                                        {item.label}
                                      </a>
                                    ))}
                                  </div>
                                </div>

                                {/* PRODUCTIVITY & OPERATIONS */}
                                <div className="mt-2">
                                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] leading-[14px] tracking-[0.625px] uppercase text-[#64748B] mb-2">
                                    PRODUCTIVITY &amp; OPERATIONS
                                  </h4>
                                  <div className="flex flex-col gap-1">
                                    {FEATURES_PRODUCTIVITY_OPERATIONS.map((item) => (
                                      <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => {
                                          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                                          setIsMobileMenuOpen(false);
                                          setOpenMobileDropdown(null);
                                        }}
                                        className="py-1.5 text-[14px] font-semibold text-[#0F172A] hover:text-[#5C5CFF] transition-colors flex items-center active:bg-slate-100 px-2 rounded-lg"
                                      >
                                        {item.label}
                                      </a>
                                    ))}
                                  </div>
                                </div>

                                {/* PLATFORM */}
                                <div className="mt-2">
                                  <h4 className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] leading-[14px] tracking-[0.625px] uppercase text-[#64748B] mb-2">
                                    PLATFORM
                                  </h4>
                                  <div className="flex flex-col gap-1">
                                    {FEATURES_PLATFORM.map((item) => (
                                      <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => {
                                          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                                          setIsMobileMenuOpen(false);
                                          setOpenMobileDropdown(null);
                                        }}
                                        className="py-1.5 text-[14px] font-semibold text-[#0F172A] hover:text-[#5C5CFF] transition-colors flex items-center active:bg-slate-100 px-2 rounded-lg"
                                      >
                                        {item.label}
                                      </a>
                                    ))}
                                  </div>
                                </div>
                              </>
                            ) : (
                              <div className="flex flex-col gap-1">
                                {link.dropdown.map((sub) => (
                                  <a
                                    key={sub.label}
                                    href={sub.href === '#' ? '#solutions' : sub.href}
                                    onClick={() => {
                                      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                                      setIsMobileMenuOpen(false);
                                      setOpenMobileDropdown(null);
                                    }}
                                    className="py-1.5 text-[14px] font-semibold text-[#0F172A] hover:text-[#5C5CFF] transition-colors flex items-center active:bg-slate-100 px-2 rounded-lg"
                                  >
                                    {sub.label}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <div key={link.label} className="drawer-item flex flex-col items-start p-0 w-full">
                      <a
                        href={link.href}
                        onClick={() => {
                          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
                          setIsMobileMenuOpen(false);
                        }}
                        className="drawer-trigger w-full flex flex-row justify-between items-center px-4 py-0 cursor-pointer hover:bg-slate-50 transition-colors"
                        style={{ height: '20px' }}
                      >
                        <span
                          style={{
                            height: '20px',
                            fontFamily: "'Plus Jakarta Sans', sans-serif",
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '20px',
                            color: '#000000',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          {link.label}
                        </span>
                      </a>
                    </div>
                  );
                })}
              </div>

              {/* div.drawer-cta */}
              <div
                className="drawer-cta flex flex-col justify-center items-start px-4 w-full"
                style={{
                  gap: '14px',
                  height: '102px',
                }}
              >
                <a
                  href="#login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="cta-btn cursor-pointer transition-all duration-150 hover:bg-slate-50 flex flex-row justify-center items-center shrink-0"
                  style={{
                    boxSizing: 'border-box',
                    padding: '12px 18px',
                    width: '126px',
                    height: '44px',
                    border: '1px solid #E5E7EB',
                    borderRadius: '10px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '148%',
                    color: '#0F172A',
                  }}
                >
                  <span style={{ width: '38px', height: '21px', display: 'flex', alignItems: 'center' }}>
                    Login
                  </span>
                </a>
                <a
                  href="#pricing"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.hash = '#pricing';
                  }}
                  className="cta-btn cursor-pointer transition-all duration-150 hover:bg-[#4B4BFF] hover:shadow-md flex flex-row justify-center items-center shrink-0"
                  style={{
                    boxSizing: 'border-box',
                    padding: '12px 18px',
                    width: '126px',
                    height: '44px',
                    background: '#5C5CFF',
                    borderRadius: '10px',
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '148%',
                    color: '#FFFFFF',
                  }}
                >
                  <span style={{ width: '90px', height: '21px', display: 'flex', alignItems: 'center' }}>
                    Book a Demo
                  </span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
