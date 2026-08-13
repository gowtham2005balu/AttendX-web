import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import { ChevronRight, Search, ChevronLeft } from 'lucide-react';

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
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

const rolesData = [
  {
    department: 'ENGINEERING',
    count: 3,
    roles: [
      {
        title: 'Senior Backend Engineer — Platform Infrastructure',
        type: 'Full-time',
        exp: '5+ years',
        location: 'Remote - India',
        tag: { label: 'Remote', color: 'bg-emerald-100 text-emerald-700' },
        salary: '₹28–40L/yr',
        posted: 'Posted 2d ago',
        link: '#job-details'
      },
      {
        title: 'Staff Engineer — Mobile (React Native)',
        type: 'Full-time',
        exp: '8+ years',
        location: 'Bangalore / Remote',
        tag: { label: 'Staff level', color: 'bg-amber-100 text-amber-700' },
        salary: '₹40–56L/yr',
        posted: 'Posted 5d ago',
        link: '#job-details'
      },
      {
        title: 'Frontend Engineer — Design Systems',
        type: 'Full-time',
        exp: '3+ years',
        location: 'Remote',
        tag: { label: 'Remote', color: 'bg-emerald-100 text-emerald-700' },
        salary: '₹22–32L/yr',
        posted: 'Posted 1w ago',
        link: '#job-details'
      }
    ]
  },
  {
    department: 'AI & ANALYTICS',
    count: 2,
    roles: [
      {
        title: 'AI Research Engineer — Workforce Prediction Models',
        type: 'Full-time',
        exp: '4+ years ML',
        location: 'Remote / Chennai',
        tag: { label: 'AI/ML', color: 'bg-blue-100 text-blue-700' },
        salary: '₹32–48L/yr',
        posted: 'Posted 3d ago',
        link: '#job-details'
      },
      {
        title: 'Data Engineer — Analytics Infrastructure',
        type: 'Full-time',
        exp: '3+ years',
        location: 'Bangalore / Remote',
        tag: { label: 'Remote', color: 'bg-emerald-100 text-emerald-700' },
        salary: '₹20–28L/yr',
        posted: 'Posted 1w ago',
        link: '#job-details'
      }
    ]
  },
  {
    department: 'PRODUCT & DESIGN',
    count: 2,
    roles: [
      {
        title: 'Product Manager — Payroll & Compliance',
        type: 'Full-time',
        exp: '5+ years',
        location: 'Chennai / Remote',
        tag: { label: 'Senior', color: 'bg-amber-100 text-amber-700' },
        salary: '₹30–44L/yr',
        posted: 'Posted 4d ago',
        link: '#job-details'
      },
      {
        title: 'Senior Product Designer — Employee Experience',
        type: 'Full-time',
        exp: '4+ years',
        location: 'Remote',
        tag: { label: 'Remote', color: 'bg-emerald-100 text-emerald-700' },
        salary: '₹24–36L/yr',
        posted: 'Posted 6d ago',
        link: '#job-details'
      }
    ]
  },
  {
    department: 'SALES',
    count: 2,
    roles: [
      {
        title: 'Enterprise Account Executive — APAC',
        type: 'Full-time',
        exp: '6+ years',
        location: 'Singapore / Remote',
        tag: { label: 'Enterprise', color: 'bg-indigo-100 text-indigo-700' },
        salary: '$120–160k OTE',
        posted: 'Posted 1w ago',
        link: '#job-details'
      },
      {
        title: 'Sales Development Representative',
        type: 'Full-time',
        exp: '1-3 years',
        location: 'Bangalore',
        tag: { label: 'In-office', color: 'bg-[#F1F5F9] text-slate-700' },
        salary: '₹12–18L/yr',
        posted: 'Posted 1w ago',
        link: '#job-details'
      }
    ]
  }
];

const filters = [
  'All Departments', 'Engineering', 'Product', 'Design', 'AI & Analytics', 'Sales', 'Customer Success', 'Marketing', 'Remote', 'India', 'Singapore'
];

const OpenRolesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All Departments');

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-24 font-['DM_Sans',sans-serif]">
      {/* ─── HERO / ROLES-HERO ─── */}
      <section className="roles-hero bg-white pt-[120px] pb-8 border-b border-slate-200 font-['DM_Sans',sans-serif]">
        <Container className="max-w-[1184px] mx-auto px-4 lg:px-0">
          {/* div.jd-breadcrumb */}
          <FadeUp className="jd-breadcrumb flex items-center gap-2 mb-[20px]">
            <a href="#careers" className="text-[#2F4253] font-['DM_Sans',sans-serif] font-medium text-[13px] leading-[21px] hover:text-[#101828] transition-colors">
              Careers
            </a>
            <ChevronRight size={14} className="text-[#667085] stroke-[2]" />
            <a href="#open-roles-page" className="text-[#101828] font-['DM_Sans',sans-serif] font-semibold text-[13px] leading-[21px]">
              Open roles
            </a>
          </FadeUp>

          {/* div.rh-inner */}
          <FadeUp delay={0.1} className="rh-inner flex flex-col lg:flex-row lg:items-end justify-between gap-[32px] lg:gap-[184px] pb-[32px]">
            {/* Left title column */}
            <div className="max-w-[640px] flex flex-col items-start gap-3">
              <h1 className="rh-title font-['DM_Sans',sans-serif] font-bold text-4xl sm:text-5xl lg:text-[64px] leading-tight lg:leading-[74px] tracking-[-1.92px] text-[#101828]">
                Open Roles
              </h1>
              <p className="rh-sub font-['DM_Sans',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[26px] text-[#667085]">
                We're hiring across 7 departments in 4 locations. Remote-first roles available globally.
              </p>
            </div>

            {/* Right search column */}
            <div className="w-full lg:w-[360px] min-w-0 flex flex-col items-start">
              <div className="rh-count font-['DM_Sans',sans-serif] font-normal text-[13px] leading-[21px] text-[#667085] mb-[8px]">
                Showing 12 open positions
              </div>
              <div className="search-bar w-full h-[50px] bg-white border border-[#D0D5DD] rounded-[20px] flex items-center overflow-hidden p-0 focus-within:border-[#2F4253] transition-colors">
                <div className="pl-4 pr-2 flex items-center justify-center shrink-0">
                  <Search size={18} className="text-[#667085]" />
                </div>
                <input
                  type="text"
                  placeholder="Search roles, skills, teams..."
                  className="w-full h-full bg-transparent border-0 px-2 text-[15px] font-['DM_Sans',sans-serif] font-normal text-[#101828] placeholder:text-[#757575] outline-none"
                />
                <button className="w-[95px] h-[48px] bg-[#2F4253] hover:bg-[#1E293B] text-white font-['DM_Sans',sans-serif] font-semibold text-[14px] leading-[18px] flex items-center justify-center shrink-0 transition-colors cursor-pointer rounded-r-[19px]">
                  Search
                </button>
              </div>
            </div>
          </FadeUp>

          {/* Filters */}
          <FadeUp delay={0.2} className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-[13px] font-bold transition-all border ${
                  activeFilter === filter
                    ? 'bg-[#5B5FEF] border-[#5B5FEF] text-white shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {filter}
              </button>
            ))}
          </FadeUp>
        </Container>
      </section>

      {/* ─── ROLE LIST ─── */}
      <Container className="pt-12 max-w-5xl mx-auto">
        <div className="space-y-12">
          {rolesData.map((group, groupIdx) => (
            <div key={groupIdx}>
              {/* Group Header */}
              <FadeUp delay={0.1 + groupIdx * 0.1} className="flex items-center gap-3 mb-6 pb-2 border-b border-slate-200">
                <h3 className="text-[13px] font-extrabold text-slate-500 tracking-wider uppercase">
                  {group.department}
                </h3>
                <span className="bg-slate-300/40 text-slate-600 text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                  {group.count} roles
                </span>
              </FadeUp>

              {/* Group Roles */}
              <div className="space-y-4">
                {group.roles.map((role, roleIdx) => {
                  const CardTag = (role as any).link ? 'a' : 'div';
                  const cardProps = (role as any).link ? { href: (role as any).link } : {};
                  return (
                    <FadeUp key={roleIdx} delay={0.2 + roleIdx * 0.1}>
                      <CardTag
                        {...cardProps}
                        className="block bg-white border border-slate-200 hover:border-[#5B5FEF] hover:shadow-md rounded-2xl p-6 lg:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all group/card cursor-pointer"
                      >
                        {/* Left side */}
                        <div>
                          <h4 className="text-[17px] font-bold text-slate-900 group-hover/card:text-[#5B5FEF] transition-colors mb-3">
                            {role.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-3 text-[13px] font-medium text-slate-500">
                            <span>{role.type}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span>{role.exp}</span>
                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                            <span>{role.location}</span>
                            {role.tag && (
                              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${role.tag.color}`}>
                                {role.tag.label}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Right side */}
                        <div className="flex items-center justify-between lg:justify-end gap-6 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-0 border-slate-100">
                          <div className="flex items-center gap-6">
                            <span className="text-[14px] font-extrabold text-slate-900">{role.salary}</span>
                            <span className="bg-slate-50 border border-slate-100 text-slate-500 text-[11px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap">
                              {role.posted}
                            </span>
                          </div>
                          <div className="w-10 h-10 rounded-full border border-slate-200 text-slate-400 flex items-center justify-center group-hover/card:border-[#5B5FEF] group-hover/card:text-[#5B5FEF] group-hover/card:bg-indigo-50 transition-colors shrink-0">
                            <ChevronRight size={18} />
                          </div>
                        </div>
                      </CardTag>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OpenRolesPage;
