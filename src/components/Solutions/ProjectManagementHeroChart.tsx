import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Users, CheckCircle2, ShieldCheck, AlertCircle, Zap } from 'lucide-react';

export const ProjectManagementHeroChart: React.FC = () => {
  return (
    <div className="w-full lg:w-[578px] min-h-[460px] h-auto bg-gradient-to-br from-[#F8FAFC] via-[#F3F6FD] to-[#E0E7FF] rounded-[24px] border border-slate-200/80 p-4 sm:p-6 flex flex-col justify-between gap-4 relative overflow-hidden select-none font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Glow Decorative Spheres */}
      <div className="absolute w-[300px] h-[300px] bg-[#5C5CFF]/10 rounded-full blur-3xl -top-20 -right-20 pointer-events-none" />
      <div className="absolute w-[200px] h-[200px] bg-indigo-500/10 rounded-full blur-2xl -bottom-10 -left-10 pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between z-10 pb-3 border-b border-slate-200/60 gap-2">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-[#5C5CFF] text-white flex items-center justify-center shrink-0">
            <CheckSquare size={17} />
          </div>
          <div className="min-w-0">
            <h4 className="font-extrabold text-[14px] sm:text-[15px] leading-[18px] text-slate-900 truncate sm:whitespace-normal">
              Project & Task Operations Live Feed
            </h4>
            <p className="font-['Inter',sans-serif] text-[11px] sm:text-[11.5px] text-slate-500 font-medium truncate sm:whitespace-normal">
              Real-time task tracking & team availability
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 bg-indigo-50 border border-indigo-200/60 px-2.5 sm:px-3 py-1 rounded-full text-indigo-700 font-bold text-[10.5px] sm:text-[11px] shrink-0">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span>Availability Synced</span>
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
            <span>Tasks Active</span>
            <CheckSquare size={14} className="text-[#5C5CFF] shrink-0" />
          </div>
          <div className="flex items-baseline justify-between pt-0.5 gap-1">
            <span className="text-[18px] sm:text-[20px] font-black text-slate-900">24 Total</span>
            <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded shrink-0">8 High Priority</span>
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
            <span>Overdue Risk</span>
            <ShieldCheck size={14} className="text-emerald-600 shrink-0" />
          </div>
          <div className="flex items-baseline justify-between pt-0.5 gap-1">
            <span className="text-[18px] sm:text-[20px] font-black text-slate-900">0 Flagged</span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">On Time ✓</span>
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
            <span>Team Available</span>
            <Users size={14} className="text-emerald-600 shrink-0" />
          </div>
          <div className="flex items-baseline justify-between pt-0.5 gap-1">
            <span className="text-[18px] sm:text-[20px] font-black text-slate-900">18 / 20</span>
            <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded shrink-0">2 On Time-off</span>
          </div>
        </motion.div>
      </div>

      {/* Main Grid: Task Deadlines & Assignee Availability */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 z-10 flex-1 my-1">
        {/* Left Column: Task Deadlines */}
        <div className="bg-white/90 backdrop-blur-md rounded-[18px] border border-slate-200/70 p-3.5 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 gap-2">
            <span className="text-[12px] font-bold text-slate-800 flex items-center gap-1.5 shrink-0">
              <CheckSquare size={13} className="text-[#5C5CFF]" />
              Active Deadlines
            </span>
            <span className="text-[10px] font-semibold text-slate-400 shrink-0">Due Soon</span>
          </div>

          <div className="flex flex-col gap-2 pt-1.5">
            {/* Task 1 */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-indigo-50/70 border border-indigo-100 gap-2">
              <div className="min-w-0">
                <div className="text-[11.5px] font-bold text-indigo-950 truncate">Release Documentation</div>
                <div className="text-[10px] text-indigo-600 font-medium truncate">Due Today 05:00 PM</div>
              </div>
              <span className="bg-[#5C5CFF] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">High</span>
            </div>

            {/* Task 2 */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/50 gap-2">
              <div className="min-w-0">
                <div className="text-[11.5px] font-bold text-slate-900 truncate">Q3 Roster Audit</div>
                <div className="text-[10px] text-slate-500 font-medium truncate">Approval Required</div>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">Approved</span>
            </div>

            {/* Task 3 */}
            <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50 border border-slate-200/50 gap-2">
              <div className="min-w-0">
                <div className="text-[11.5px] font-bold text-slate-900 truncate">Weekly Status Sync</div>
                <div className="text-[10px] text-slate-500 font-medium truncate">Repeat Weekly</div>
              </div>
              <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0">Recurring</span>
            </div>
          </div>
        </div>

        {/* Right Column: Assignee Availability */}
        <div className="bg-white/90 backdrop-blur-md rounded-[18px] border border-slate-200/70 p-3.5 flex flex-col justify-between shadow-xs">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 gap-2">
            <span className="text-[12px] font-bold text-slate-800 flex items-center gap-1.5 shrink-0">
              <CheckCircle2 size={13} className="text-emerald-500" />
              Assignee Status
            </span>
            <span className="text-[10px] font-semibold text-emerald-600 shrink-0">Time-off Linked</span>
          </div>

          <div className="flex flex-col gap-2 pt-1.5">
            {/* Assignee 1 */}
            <div className="flex items-center justify-between text-[11px] gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-indigo-100 text-[#5C5CFF] font-bold text-[10px] flex items-center justify-center shrink-0">
                  SK
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 truncate">Sarah K.</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Tech Lead • 4 Tasks</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">Active</span>
            </div>

            {/* Assignee 2 */}
            <div className="flex items-center justify-between text-[11px] gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-800 font-bold text-[10px] flex items-center justify-center shrink-0">
                  DM
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 truncate">David M.</div>
                  <div className="text-[9.5px] text-slate-400 truncate">Developer • PTO Today</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded shrink-0">On Time-off</span>
            </div>

            {/* Assignee 3 */}
            <div className="flex items-center justify-between text-[11px] gap-2">
              <div className="flex items-center gap-2 min-w-0">
                <div className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 font-bold text-[10px] flex items-center justify-center shrink-0">
                  ER
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-slate-900 truncate">Elena R.</div>
                  <div className="text-[9.5px] text-slate-400 truncate">QA Specialist • 3 Tasks</div>
                </div>
              </div>
              <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded shrink-0">Checked In</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagementHeroChart;
