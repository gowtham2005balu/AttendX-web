import React from 'react';
import { motion } from 'framer-motion';
import { Users, Clock, CheckCircle2, ShieldCheck, GraduationCap, Bell, School } from 'lucide-react';

export const EducationHeroChart: React.FC = () => {
  return (
    <div className="w-full lg:w-[578px] min-h-[460px] h-auto bg-gradient-to-br from-[#F8FAFC] via-[#F3F6FD] to-[#E0E7FF] rounded-[24px] border border-slate-200/80 p-4 sm:p-6 flex flex-col justify-between gap-4 relative overflow-hidden select-none font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Glow Decorative Spheres */}
      <div className="absolute w-[300px] h-[300px] bg-[#5C5CFF]/10 rounded-full blur-3xl -top-20 -right-20 pointer-events-none" />
      <div className="absolute w-[200px] h-[200px] bg-emerald-500/10 rounded-full blur-2xl -bottom-10 -left-10 pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between z-10 pb-3 border-b border-slate-200/60 gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[#5C5CFF] text-white flex items-center justify-center shrink-0">
            <GraduationCap size={17} />
          </div>
          <div className="min-w-0">
            <h4 className="font-extrabold text-[14px] sm:text-[15px] leading-[18px] text-slate-900 truncate">
              Faculty &amp; Campus Attendance Live Feed
            </h4>
            <p className="font-['Inter',sans-serif] text-[11px] sm:text-[11.5px] text-slate-500 font-medium truncate">
              Real-time faculty check-ins &amp; department status
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full text-emerald-700 font-bold text-[11px] shadow-xs shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Campus Live</span>
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
            <span>Faculty Present</span>
            <Users size={14} className="text-[#5C5CFF] shrink-0" />
          </div>
          <div className="flex items-baseline justify-between pt-0.5 gap-1">
            <span className="text-[18px] sm:text-[20px] font-black text-slate-900">98.5%</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">Active</span>
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
            <span>Lectures Active</span>
            <School size={14} className="text-emerald-600 shrink-0" />
          </div>
          <div className="flex items-baseline justify-between pt-0.5 gap-1">
            <span className="text-[18px] sm:text-[20px] font-black text-slate-900">142</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">In Session</span>
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
            <span>Parent Alerts</span>
            <Bell size={14} className="text-purple-600 shrink-0" />
          </div>
          <div className="flex items-baseline justify-between pt-0.5 gap-1">
            <span className="text-[17px] sm:text-[19px] font-black text-slate-900">Auto Sync</span>
            <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded shrink-0">Active</span>
          </div>
        </motion.div>
      </div>

      {/* Main Grid: Department Status & Faculty Roster List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 z-10 flex-1 my-1">
        {/* Left Column: Department Overview */}
        <div className="bg-white/90 backdrop-blur-md rounded-[18px] border border-slate-200/70 p-3.5 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 gap-2">
            <span className="text-[12px] font-bold text-slate-800 flex items-center gap-1.5 shrink-0">
              <Clock size={13} className="text-[#5C5CFF]" />
              Department Roster
            </span>
            <span className="text-[10px] font-semibold text-slate-400 shrink-0">Today</span>
          </div>

          <div className="flex flex-col gap-2 pt-1.5">
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 gap-2">
              <div className="flex flex-col min-w-0">
                <span className="text-[11.5px] font-bold text-slate-800 truncate">Computer Science</span>
                <span className="text-[10px] text-slate-500 truncate">24 Faculty &bull; 6 Lectures</span>
              </div>
              <span className="text-[10.5px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">100%</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 gap-2">
              <div className="flex flex-col min-w-0">
                <span className="text-[11.5px] font-bold text-slate-800 truncate">Mechanical Eng.</span>
                <span className="text-[10px] text-slate-500 truncate">18 Faculty &bull; 4 Lectures</span>
              </div>
              <span className="text-[10.5px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">98%</span>
            </div>

            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 gap-2">
              <div className="flex flex-col min-w-0">
                <span className="text-[11.5px] font-bold text-slate-800 truncate">Physics & Math</span>
                <span className="text-[10px] text-slate-500 truncate">15 Faculty &bull; 5 Lectures</span>
              </div>
              <span className="text-[10.5px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0">96%</span>
            </div>
          </div>
        </div>

        {/* Right Column: Live Faculty Roster */}
        <div className="bg-white/90 backdrop-blur-md rounded-[18px] border border-slate-200/70 p-3.5 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 gap-2">
            <span className="text-[12px] font-bold text-slate-800 flex items-center gap-1.5 shrink-0">
              <ShieldCheck size={13} className="text-emerald-600" />
              Faculty Live Status
            </span>
            <span className="text-[10px] font-semibold text-slate-400 shrink-0">Verified</span>
          </div>

          <div className="flex flex-col gap-2 pt-1.5">
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-[#5C5CFF]/10 text-[#5C5CFF] font-bold text-[10px] flex items-center justify-center shrink-0">
                  RS
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-bold text-slate-800 truncate">Prof. Sharma</span>
                  <span className="text-[9.5px] text-slate-500 truncate">Room 302 &bull; Active</span>
                </div>
              </div>
              <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
            </div>

            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-purple-500/10 text-purple-600 font-bold text-[10px] flex items-center justify-center shrink-0">
                  AD
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-bold text-slate-800 truncate">Dr. Ananya D.</span>
                  <span className="text-[9.5px] text-slate-500 truncate">Lab 4 &bull; In Lecture</span>
                </div>
              </div>
              <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
            </div>

            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-100 gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-600 font-bold text-[10px] flex items-center justify-center shrink-0">
                  MK
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-bold text-slate-800 truncate">Prof. Mehra</span>
                  <span className="text-[9.5px] text-slate-500 truncate">Time-off &bull; HOD Approved</span>
                </div>
              </div>
              <span className="text-[9px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded shrink-0">Time-off</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Badge */}
      <div className="z-10 bg-[#5C5CFF]/5 border border-[#5C5CFF]/20 rounded-xl px-3.5 py-2 flex items-center justify-between text-[11px] sm:text-[11.5px] font-semibold text-slate-700 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <GraduationCap size={14} className="text-[#5C5CFF] shrink-0" />
          <span className="truncate">Connected Campus Attendance Platform</span>
        </div>
        <span className="text-[#5C5CFF] font-bold shrink-0">100% Real-Time</span>
      </div>
    </div>
  );
};

export default EducationHeroChart;
