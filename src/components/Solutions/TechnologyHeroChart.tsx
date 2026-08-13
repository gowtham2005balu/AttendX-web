import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, CheckCircle2, ShieldCheck, Users, Zap } from 'lucide-react';

export const TechnologyHeroChart: React.FC = () => {
  return (
    <div className="w-full lg:w-[578px] min-h-[460px] h-auto bg-gradient-to-br from-[#F8FAFC] via-[#F3F6FD] to-[#E0E7FF] rounded-[24px] border border-slate-200/80 p-4 sm:p-6 flex flex-col justify-between gap-4 relative overflow-hidden select-none font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Glow Decorative Spheres */}
      <div className="absolute w-[300px] h-[300px] bg-[#5C5CFF]/10 rounded-full blur-3xl -top-20 -right-20 pointer-events-none" />
      <div className="absolute w-[200px] h-[200px] bg-blue-500/10 rounded-full blur-2xl -bottom-10 -left-10 pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between z-10 pb-3 border-b border-slate-200/60 gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[#5C5CFF] text-white flex items-center justify-center shrink-0">
            <Cpu size={17} />
          </div>
          <div className="min-w-0">
            <h4 className="font-extrabold text-[14px] sm:text-[15px] leading-[18px] text-slate-900 truncate sm:whitespace-normal">
              Distributed Tech Operations
            </h4>
            <p className="font-['Inter',sans-serif] text-[11px] sm:text-[11.5px] text-slate-500 font-medium truncate sm:whitespace-normal">
              Global headcount, async leave & fast onboarding
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200/60 px-2.5 sm:px-3 py-1 rounded-full text-blue-700 font-bold text-[10.5px] sm:text-[11px] shrink-0">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>Cloud Active</span>
        </div>
      </div>

      {/* 3 Metric Cards Strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 z-10">
        {/* Metric 1 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white/90 backdrop-blur-md rounded-[16px] border border-slate-200/70 p-3 flex flex-col gap-1 shadow-xs"
        >
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-semibold">
            <span>Headcount Growth</span>
            <Users size={14} className="text-[#5C5CFF] shrink-0" />
          </div>
          <div className="flex items-baseline justify-between pt-0.5 gap-1">
            <span className="text-[18px] sm:text-[20px] font-black text-slate-900">+42% YTD</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">120 Active</span>
          </div>
        </motion.div>

        {/* Metric 2 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white/90 backdrop-blur-md rounded-[16px] border border-slate-200/70 p-3 flex flex-col gap-1 shadow-xs"
        >
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-semibold">
            <span>Remote / Hybrid</span>
            <Globe size={14} className="text-blue-500 shrink-0" />
          </div>
          <div className="flex items-baseline justify-between pt-0.5 gap-1">
            <span className="text-[18px] sm:text-[20px] font-black text-slate-900">88% Global</span>
            <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded shrink-0">Async Sync</span>
          </div>
        </motion.div>

        {/* Metric 3 */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="bg-white/90 backdrop-blur-md rounded-[16px] border border-slate-200/70 p-3 flex flex-col gap-1 shadow-xs"
        >
          <div className="flex items-center justify-between text-slate-500 text-[11px] font-semibold">
            <span>Onboarding Speed</span>
            <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
          </div>
          <div className="flex items-baseline justify-between pt-0.5 gap-1">
            <span className="text-[18px] sm:text-[20px] font-black text-slate-900">Day 1 Ready</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">Completed ✓</span>
          </div>
        </motion.div>
      </div>

      {/* Main Grid: Regional Hubs & Live Team Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 z-10 flex-1 my-1">
        {/* Left Column: Regional Hubs */}
        <div className="bg-white/90 backdrop-blur-md rounded-[18px] border border-slate-200/70 p-3.5 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 gap-2">
            <span className="text-[12px] font-bold text-slate-800 flex items-center gap-1.5 shrink-0">
              <Globe size={13} className="text-[#5C5CFF]" />
              Distributed Hubs
            </span>
            <span className="text-[10px] font-semibold text-slate-400 shrink-0">Time-Zones</span>
          </div>

          <div className="flex flex-col gap-2 pt-1.5">
            {/* Hub 1 */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-indigo-50/70 border border-indigo-100 gap-2">
              <div className="min-w-0">
                <div className="text-[11.5px] font-bold text-indigo-950 truncate">SF & US West Hub</div>
                <div className="text-[10px] text-indigo-600 font-medium truncate">28 Engineers • Hybrid Active</div>
              </div>
              <span className="bg-[#5C5CFF] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">Synced</span>
            </div>

            {/* Hub 2 */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/50 gap-2">
              <div className="min-w-0">
                <div className="text-[11.5px] font-bold text-slate-900 truncate">Austin & East Hub</div>
                <div className="text-[10px] text-slate-500 font-medium truncate">18 Engineers • Remote</div>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">Active</span>
            </div>

            {/* Hub 3 */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/50 gap-2">
              <div className="min-w-0">
                <div className="text-[11.5px] font-bold text-slate-900 truncate">EU & Global Async</div>
                <div className="text-[10px] text-slate-500 font-medium truncate">32 Engineers • Distributed</div>
              </div>
              <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">Async Log</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Team Feeds */}
        <div className="bg-white/90 backdrop-blur-md rounded-[18px] border border-slate-200/70 p-3.5 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 gap-2">
            <span className="text-[12px] font-bold text-slate-800 flex items-center gap-1.5 shrink-0">
              <CheckCircle2 size={13} className="text-emerald-500" />
              Onboarding & Status
            </span>
            <span className="text-[10px] font-semibold text-emerald-600 shrink-0">Auto-Verified</span>
          </div>

          <div className="flex flex-col gap-2 pt-1.5">
            {/* Engineer 1 */}
            <div className="flex items-center justify-between text-[11px] gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-indigo-100 text-[#5C5CFF] font-bold text-[10px] flex items-center justify-center shrink-0">
                  SK
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 truncate">Sarah K.</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Staff Eng • Remote Log</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">Checked In</span>
            </div>

            {/* Engineer 2 */}
            <div className="flex items-center justify-between text-[11px] gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                  MV
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 truncate">Marcus V.</div>
                  <div className="text-[9.5px] text-slate-400 truncate">DevOps • Onboarding</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded shrink-0">Task 3/3 ✓</span>
            </div>

            {/* Engineer 3 */}
            <div className="flex items-center justify-between text-[11px] gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px] flex items-center justify-center shrink-0">
                  ER
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 truncate">Elena R.</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Product Manager • PTO</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded shrink-0">Async Approved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyHeroChart;
