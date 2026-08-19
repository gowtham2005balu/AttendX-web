import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import {
  ChevronRight, Upload, MapPin, Clock, DollarSign, Users, Calendar,
  Plus, X, FileText, Link, Briefcase, ChevronDown, TrendingUp, Target, Check, AlertCircle
} from 'lucide-react';

const FadeUp: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children, delay = 0, className = '',
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

const ApplyPage: React.FC = () => {
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [currentJobTitle, setCurrentJobTitle] = useState('');
  const [currentCompany, setCurrentCompany] = useState('');
  const [experience, setExperience] = useState('');
  const [portfolio, setPortfolio] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [skills, setSkills] = useState<string[]>(['Python', 'PostgreSQL', 'Kafka', 'AWS']);
  const [newSkill, setNewSkill] = useState('');
  const [addingSkill, setAddingSkill] = useState(false);
  const [coverLetter, setCoverLetter] = useState('');
  const [workStyle, setWorkStyle] = useState('async');
  const [hrmsExp, setHrmsExp] = useState('adjacent');
  const [aiUsage, setAiUsage] = useState('occasional');
  const [noticePeriod, setNoticePeriod] = useState('30');
  const [expectedCtc, setExpectedCtc] = useState('');
  const [howDidYouHear, setHowDidYouHear] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState('');

  // Validation State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showErrorBanner, setShowErrorBanner] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const removeSkill = (skill: string) => {
    const updated = skills.filter(s => s !== skill);
    setSkills(updated);
    if (updated.length > 0 && errors.skills) {
      setErrors(prev => ({ ...prev, skills: '' }));
    }
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      const updated = [...skills, newSkill.trim()];
      setSkills(updated);
      setNewSkill('');
      setAddingSkill(false);
      if (errors.skills) setErrors(prev => ({ ...prev, skills: '' }));
    }
  };

  const handleAIAutoFill = () => {
    setFileName('ananya_sharma_resume.pdf');
    setFullName('Ananya Sharma');
    setEmail('ananya.sharma@example.com');
    setPhone('+91 98765 43210');
    setCurrentJobTitle('Senior Backend Engineer');
    setCurrentCompany('TechCorp Solutions');
    setExperience('5-7 years');
    setPortfolio('https://github.com/ananya-sharma');
    setLinkedIn('https://linkedin.com/in/ananyasharma');
    setSkills(['Python', 'PostgreSQL', 'Kafka', 'AWS', 'Redis', 'Docker']);
    setCoverLetter("I am excited to apply for the Senior Backend Engineer role at Workzi. With 6 years of experience building high-throughput distributed systems and workforce infrastructure, I have led database partitioning and microservice migrations at scale. I admire Workzi's people-first mission and would love to contribute.");
    setExpectedCtc('34 LPA');
    setNoticePeriod('30');
    setHowDidYouHear('Workzi Website');
    setErrors({});
    setShowErrorBanner(false);
  };

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!phone.trim()) errs.phone = 'Phone number is required';
    if (!fileName) errs.resume = 'Please upload your resume / CV';
    if (!currentJobTitle.trim()) errs.jobTitle = 'Current job title is required';
    if (!experience) errs.experience = 'Please select your years of experience';
    if (skills.length === 0) errs.skills = 'Please add at least one key skill';
    if (!coverLetter.trim()) errs.coverLetter = 'Cover letter / Why Workzi? is required';
    if (!noticePeriod) errs.noticePeriod = 'Please select your notice period';
    if (!expectedCtc.trim()) errs.expectedCtc = 'Expected CTC is required';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) {
      setShowErrorBanner(true);
      setTimeout(() => {
        const targetEl = document.getElementById('apply-form-container');
        if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return;
    }

    setShowErrorBanner(false);
    setIsSubmitting(true);
    setTimeout(() => {
      window.location.hash = '#application-success';
    }, 400);
  };

  const inputCls = (fieldError?: string) =>
    `w-full bg-white border rounded-xl px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none transition-all min-h-[44px] ${fieldError
      ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500 bg-red-50/20'
      : 'border-slate-200 focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF]'
    }`;

  const labelCls = "block text-[13px] font-bold text-slate-800 mb-2";

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-24 font-['DM_Sans',sans-serif]">

      {/* ─── PAGE HEADER ─── */}
      <div className="bg-white border-b border-slate-200 pt-32 pb-10">
        <Container className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <FadeUp className="flex items-center gap-2 text-[12px] font-bold text-slate-500 mb-6">
            <a href="#careers" className="hover:text-slate-900 transition-colors">Careers</a>
            <ChevronRight size={14} className="text-slate-400" />
            <a href="#open-roles-page" className="hover:text-slate-900 transition-colors">Engineering</a>
            <ChevronRight size={14} className="text-slate-400" />
            <a href="#job-details" className="hover:text-slate-900 transition-colors">Senior Backend Engineer</a>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-semibold text-[#0F172A] tracking-tight mb-3">Join the team</h1>
            <p className="text-[15px] font-medium text-slate-500 max-w-2xl">
              Take 5 minutes to tell us about yourself. We read every application and respond to every candidate within 5 business days.
            </p>
          </FadeUp>
        </Container>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <Container className="max-w-6xl mx-auto pt-10" id="apply-form-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* ─── LEFT SIDEBAR ─── */}
          <FadeUp delay={0.2} className="lg:col-span-4 space-y-6">

            {/* Job Card Container */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-xs">
              {/* Green Header */}
              <div className="bg-[#10B981] text-white p-6 flex flex-col justify-end min-h-[140px]">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-4 text-white shrink-0">
                  <Target size={20} />
                </div>
                <h3 className="text-xl font-bold leading-tight">Senior Backend Engineer</h3>
                <p className="text-[12px] text-emerald-100 font-medium mt-1">Workzi · Platform Infrastructure</p>
              </div>

              {/* Role Details */}
              <div className="p-6">
                <div className="divide-y divide-slate-100">
                  {[
                    { icon: <MapPin size={16} />, label: 'Location', value: 'Remote · India' },
                    { icon: <Briefcase size={16} />, label: 'Type', value: 'Full-time' },
                    { icon: <TrendingUp size={16} />, label: 'Salary', value: '₹28–40L/yr' },
                    { icon: <Clock size={16} />, label: 'Timeline', value: '2–3 weeks' },
                    { icon: <Users size={16} />, label: 'Team size', value: '12 engineers' },
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-center justify-between py-4 ${idx === 0 ? "pt-0" : ""} ${idx === 4 ? "pb-0" : ""}`}>
                      <span className="text-[13px] font-bold text-slate-400 flex items-center gap-2">
                        {item.icon} {item.label}
                      </span>
                      <span className="text-[13px] font-bold text-slate-800">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* From the team */}
            <div className="bg-[#F8FAFC]/65 border border-slate-200 rounded-3xl p-6 shadow-xs">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-4">FROM THE TEAM</p>
              <p className="text-[13.5px] text-slate-600 leading-relaxed italic mb-5">
                "We're very intentional about who we bring on. If you're the kind of engineer who takes pride in their work and loves a hard problem, you'll fit right in."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#F59E0B] flex items-center justify-center text-white font-bold text-[11px]">KV</div>
                <div>
                  <h4 className="text-[13px] font-bold text-slate-800">Kiran Varma</h4>
                  <p className="text-[11px] font-semibold text-slate-400 leading-none mt-1">Engineering Lead</p>
                </div>
              </div>
            </div>

            {/* Your future team */}
            <div className="bg-[#F8FAFC]/65 border border-slate-200 rounded-3xl p-6 shadow-xs">
              <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-4">YOUR FUTURE TEAM</p>
              <div className="flex -space-x-2 mb-4">
                {[
                  { tag: 'SR', color: 'bg-[#1E293B]' },
                  { tag: 'AK', color: 'bg-[#10B981]' },
                  { tag: 'RV', color: 'bg-[#F59E0B]' },
                  { tag: 'PM', color: 'bg-[#818CF8]' }
                ].map((avatar, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-[10px] text-white ${avatar.color}`}>
                    {avatar.tag}
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-slate-500 font-medium">12 engineers in Platform Infrastructure</p>
            </div>
          </FadeUp>

          {/* ─── RIGHT FORM ─── */}
          <FadeUp delay={0.3} className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-8">

              {/* Validation Error Banner */}
              {showErrorBanner && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-2xl flex items-center justify-between animate-in fade-in duration-200">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold shrink-0">
                      <AlertCircle size={18} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[14px]">Please fill in all required fields</h4>
                      <p className="text-[12.5px] text-red-600 font-medium">Some required details are missing or incomplete below before submitting.</p>
                    </div>
                  </div>
                  <button type="button" onClick={() => setShowErrorBanner(false)} className="text-red-500 hover:text-red-700 font-bold text-sm">✕</button>
                </div>
              )}

              {/* AI Resume Banner */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#5B5FEF]/10 flex items-center justify-center shrink-0">
                    <span className="text-[#5B5FEF] text-sm">✦</span>
                  </div>
                  <p className="text-[13px] font-bold text-slate-700">Upload your resume to auto-fill your details instantly using AI</p>
                </div>
                <button
                  type="button"
                  onClick={handleAIAutoFill}
                  className="bg-[#5B5FEF] hover:bg-[#4F46E5] text-white text-[13px] font-bold px-5 py-2.5 rounded-xl transition-all shadow-md whitespace-nowrap flex items-center justify-center shrink-0 min-h-[44px] cursor-pointer"
                >
                  Upload Resume
                </button>
              </div>

              {/* Personal Information Section */}
              <div>
                <h2 className="text-[18px] font-semibold text-slate-900 mb-1">Personal Information</h2>
                <p className="text-[13px] text-slate-500 font-medium mb-6">Enter your contact details so our hiring team can reach you.</p>

                <div className="space-y-5">
                  <div>
                    <label className={labelCls}>Full Name <span className="text-[#5B5FEF]">*</span></label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        if (errors.fullName) setErrors(prev => ({ ...prev, fullName: '' }));
                      }}
                      placeholder="e.g. Ananya Sharma"
                      className={inputCls(errors.fullName)}
                    />
                    {errors.fullName && <p className="text-[12px] font-bold text-red-500 mt-1">{errors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Email Address <span className="text-[#5B5FEF]">*</span></label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
                        }}
                        placeholder="e.g. ananya@example.com"
                        className={inputCls(errors.email)}
                      />
                      {errors.email && <p className="text-[12px] font-bold text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className={labelCls}>Phone Number <span className="text-[#5B5FEF]">*</span></label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                        }}
                        placeholder="e.g. +91 98765 43210"
                        className={inputCls(errors.phone)}
                      />
                      {errors.phone && <p className="text-[12px] font-bold text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents Section */}
              <div className="border-t border-slate-100 pt-8">
                <h2 className="text-[18px] font-semibold text-slate-900 mb-1">Documents</h2>
                <p className="text-[13px] text-slate-500 font-medium mb-6">Upload your resume and any supporting materials.</p>

                {/* Resume Upload */}
                <div className="mb-6">
                  <label className={labelCls}>Resume / CV <span className="text-[#5B5FEF]">*</span></label>
                  <div
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragTime-off={() => setDragOver(false)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragOver(false);
                      const file = e.dataTransfer.files[0];
                      if (file) {
                        setFileName(file.name);
                        if (errors.resume) setErrors(prev => ({ ...prev, resume: '' }));
                      }
                    }}
                    className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${errors.resume
                        ? 'border-red-400 bg-red-50/30'
                        : dragOver
                          ? 'border-[#5B5FEF] bg-indigo-50'
                          : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                      }`}
                    onClick={() => document.getElementById('resume-input')?.click()}
                  >
                    <input
                      id="resume-input"
                      type="file"
                      accept=".pdf,.docx,.txt"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) {
                          setFileName(e.target.files[0].name);
                          if (errors.resume) setErrors(prev => ({ ...prev, resume: '' }));
                        }
                      }}
                    />
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-slate-200 flex items-center justify-center mb-1">
                        <Upload size={18} className="text-slate-500" />
                      </div>
                      {fileName ? (
                        <p className="text-[14px] font-bold text-[#5B5FEF]">{fileName}</p>
                      ) : (
                        <>
                          <p className="text-[14px] font-bold text-slate-700">Drag &amp; drop your resume here, or browse files</p>
                          <p className="text-[12px] text-slate-400 font-medium">PDF, DOCX, or TXT &middot; Max 5MB</p>
                        </>
                      )}
                    </div>
                  </div>
                  {errors.resume && <p className="text-[12px] font-bold text-red-500 mt-2">{errors.resume}</p>}
                </div>

                {/* Portfolio */}
                <div>
                  <label className={labelCls}>Portfolio / GitHub</label>
                  <div className="relative">
                    <Link size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="url"
                      value={portfolio}
                      onChange={(e) => setPortfolio(e.target.value)}
                      placeholder="https://github.com/yourusername"
                      className={`${inputCls()} pl-10`}
                    />
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium mt-1.5">Link to your GitHub, portfolio, or any public work you're proud of</p>
                </div>
              </div>

              {/* Professional Details */}
              <div className="border-t border-slate-100 pt-8">
                <h2 className="text-[18px] font-semibold text-slate-900 mb-1">Professional Details</h2>
                <p className="text-[13px] text-slate-500 font-medium mb-6">Tell us about your background and experience.</p>

                <div className="space-y-5">
                  {/* Current Job + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Current Job Title <span className="text-[#5B5FEF]">*</span></label>
                      <input
                        type="text"
                        value={currentJobTitle}
                        onChange={(e) => {
                          setCurrentJobTitle(e.target.value);
                          if (errors.jobTitle) setErrors(prev => ({ ...prev, jobTitle: '' }));
                        }}
                        placeholder="e.g. Senior Software Engineer"
                        className={inputCls(errors.jobTitle)}
                      />
                      {errors.jobTitle && <p className="text-[12px] font-bold text-red-500 mt-1">{errors.jobTitle}</p>}
                    </div>
                    <div>
                      <label className={labelCls}>Current Company</label>
                      <input
                        type="text"
                        value={currentCompany}
                        onChange={(e) => setCurrentCompany(e.target.value)}
                        placeholder="e.g. Infosys, startup, freelance"
                        className={inputCls()}
                      />
                    </div>
                  </div>

                  {/* Experience + LinkedIn */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Years of Experience <span className="text-[#5B5FEF]">*</span></label>
                      <div className="relative">
                        <select
                          value={experience}
                          onChange={(e) => {
                            setExperience(e.target.value);
                            if (errors.experience) setErrors(prev => ({ ...prev, experience: '' }));
                          }}
                          className={`${inputCls(errors.experience)} appearance-none pr-10`}
                        >
                          <option value="" disabled>Select experience</option>
                          <option value="0-1 years">0-1 years</option>
                          <option value="2-4 years">2-4 years</option>
                          <option value="5-7 years">5-7 years</option>
                          <option value="8-10 years">8-10 years</option>
                          <option value="10+ years">10+ years</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                      {errors.experience && <p className="text-[12px] font-bold text-red-500 mt-1">{errors.experience}</p>}
                    </div>
                    <div>
                      <label className={labelCls}>LinkedIn Profile</label>
                      <div className="relative">
                        <Link size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input
                          type="url"
                          value={linkedIn}
                          onChange={(e) => setLinkedIn(e.target.value)}
                          placeholder="https://linkedin.com/in/yourname"
                          className={`${inputCls()} pl-10`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Key Skills */}
                  <div>
                    <label className={labelCls}>Key Skills <span className="text-[#5B5FEF]">*</span></label>
                    <div className={`flex flex-wrap items-center gap-2 p-3 bg-slate-50 border rounded-xl min-h-[48px] ${errors.skills ? 'border-red-500 bg-red-50/20' : 'border-slate-200'}`}>
                      {skills.map((skill) => (
                        <span key={skill} className="flex items-center gap-1.5 bg-indigo-100 text-[#5B5FEF] text-[12px] font-bold px-3 py-1 rounded-full">
                          {skill}
                          <button type="button" onClick={() => removeSkill(skill)} className="hover:text-red-500 transition-colors">
                            <X size={12} />
                          </button>
                        </span>
                      ))}
                      {addingSkill ? (
                        <input
                          autoFocus
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyDown={(e) => { if (e.key === 'Enter') addSkill(); if (e.key === 'Escape') setAddingSkill(false); }}
                          onBlur={addSkill}
                          placeholder="Type skill..."
                          className="bg-transparent outline-none text-[13px] text-slate-700 font-medium w-24"
                        />
                      ) : (
                        <button type="button" onClick={() => setAddingSkill(true)} className="flex items-center gap-1 text-slate-400 hover:text-slate-700 text-[12px] font-bold transition-colors">
                          <Plus size={14} /> Add a skill...
                        </button>
                      )}
                    </div>
                    {errors.skills ? (
                      <p className="text-[12px] font-bold text-red-500 mt-1">{errors.skills}</p>
                    ) : (
                      <p className="text-[11px] text-slate-400 font-medium mt-1.5">Add relevant technical skills — press Enter after each one</p>
                    )}
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className={labelCls}>Cover Letter / Why Workzi? <span className="text-[#5B5FEF]">*</span></label>
                    <textarea
                      rows={5}
                      value={coverLetter}
                      onChange={(e) => {
                        setCoverLetter(e.target.value);
                        if (errors.coverLetter) setErrors(prev => ({ ...prev, coverLetter: '' }));
                      }}
                      placeholder="Tell us why you're excited about this role and what you'd bring to the team.."
                      className={`${inputCls(errors.coverLetter)} resize-none`}
                    />
                    {errors.coverLetter ? (
                      <p className="text-[12px] font-bold text-red-500 mt-1">{errors.coverLetter}</p>
                    ) : (
                      <p className="text-[12px] text-slate-500 font-medium mt-2 leading-relaxed">
                        Be specific. What draws you to HRMS/workforce technology? What have you built that's most relevant?
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Screening Questions */}
              <div className="border-t border-slate-100 pt-8">
                <h2 className="text-[18px] font-semibold text-slate-900 mb-1">Screening Questions</h2>
                <p className="text-[13px] text-slate-500 font-medium mb-8">Help us understand your situation and preferences.</p>

                <div className="space-y-8">
                  {/* Work style */}
                  <div>
                    <label className={labelCls}>What's your preferred work style? <span className="text-[#5B5FEF]">*</span></label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { key: 'async', label: 'Async-first, flexible hours' },
                        { key: 'overlap', label: 'Some overlap preferred' },
                        { key: 'fixed', label: 'Fixed schedule' },
                      ].map((opt) => (
                        <button
                          type="button"
                          key={opt.key}
                          onClick={() => setWorkStyle(opt.key)}
                          className={`px-5 py-2.5 rounded-full text-[13px] font-bold border transition-all cursor-pointer ${workStyle === opt.key
                              ? 'bg-[#5B5FEF] border-[#5B5FEF] text-white shadow-md'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* HRMS Experience */}
                  <div>
                    <label className={labelCls}>Do you have experience with HRMS or workforce management products? <span className="text-[#5B5FEF]">*</span></label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        { key: 'yes', label: 'Yes, domain experience' },
                        { key: 'adjacent', label: 'Adjacent domain (payroll, fintech, etc.)' },
                        { key: 'no', label: 'No, but willing to learn' },
                      ].map((opt) => (
                        <button
                          type="button"
                          key={opt.key}
                          onClick={() => setHrmsExp(opt.key)}
                          className={`px-5 py-2.5 rounded-full text-[13px] font-bold border transition-all cursor-pointer ${hrmsExp === opt.key
                              ? 'bg-[#5B5FEF] border-[#5B5FEF] text-white shadow-md'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* AI Usage */}
                  <div>
                    <label className={labelCls}>How familiar are you with AI tools in your engineering workflow?</label>
                    <div className="space-y-3">
                      {[
                        { key: 'daily', label: 'Use AI tools daily (Copilot, Cursor, etc.)' },
                        { key: 'occasional', label: 'Use occasionally for specific tasks' },
                        { key: 'none', label: "Haven't started yet" },
                      ].map((opt) => (
                        <label key={opt.key} className="flex items-center gap-3 cursor-pointer group">
                          <div
                            onClick={() => setAiUsage(opt.key)}
                            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ${aiUsage === opt.key
                                ? 'border-[#5B5FEF] bg-[#5B5FEF]'
                                : 'border-slate-300 group-hover:border-slate-400'
                              }`}
                          >
                            {aiUsage === opt.key && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                          <span
                            onClick={() => setAiUsage(opt.key)}
                            className={`text-[14px] font-medium transition-colors ${aiUsage === opt.key ? 'text-slate-900 font-bold' : 'text-slate-600'}`}
                          >
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Notice + CTC */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelCls}>Notice Period <span className="text-[#5B5FEF]">*</span></label>
                      <div className="relative">
                        <select
                          value={noticePeriod}
                          onChange={(e) => {
                            setNoticePeriod(e.target.value);
                            if (errors.noticePeriod) setErrors(prev => ({ ...prev, noticePeriod: '' }));
                          }}
                          className={`${inputCls(errors.noticePeriod)} appearance-none pr-10`}
                        >
                          <option value="" disabled>Select notice period</option>
                          <option value="immediate">Immediate</option>
                          <option value="15">15 days</option>
                          <option value="30">30 days</option>
                          <option value="60">60 days</option>
                          <option value="90">90 days</option>
                        </select>
                        <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                      </div>
                      {errors.noticePeriod && <p className="text-[12px] font-bold text-red-500 mt-1">{errors.noticePeriod}</p>}
                    </div>
                    <div>
                      <label className={labelCls}>Expected CTC (LPA) <span className="text-[#5B5FEF]">*</span></label>
                      <input
                        type="text"
                        value={expectedCtc}
                        onChange={(e) => {
                          setExpectedCtc(e.target.value);
                          if (errors.expectedCtc) setErrors(prev => ({ ...prev, expectedCtc: '' }));
                        }}
                        placeholder="e.g. 32 LPA"
                        className={inputCls(errors.expectedCtc)}
                      />
                      {errors.expectedCtc && <p className="text-[12px] font-bold text-red-500 mt-1">{errors.expectedCtc}</p>}
                    </div>
                  </div>

                  {/* How did you hear */}
                  <div>
                    <label className={labelCls}>How did you hear about this role?</label>
                    <div className="relative">
                      <select
                        value={howDidYouHear}
                        onChange={(e) => setHowDidYouHear(e.target.value)}
                        className={`${inputCls()} appearance-none pr-10 text-slate-700`}
                      >
                        <option value="">Select..</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Twitter">Twitter / X</option>
                        <option value="Workzi Website">Workzi Website</option>
                        <option value="Referral">Referral from employee</option>
                        <option value="Job Board">Job Board (Naukri, Instahyre, etc.)</option>
                        <option value="Other">Other</option>
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end gap-3 pt-8 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => alert('Draft saved successfully!')}
                  className="bg-white border border-[#D0D5DD] hover:bg-slate-50 text-[#101828] font-['DM_Sans',sans-serif] font-bold text-[14px] leading-[22px] px-7 py-3 rounded-full transition-all cursor-pointer"
                >
                  Save Draft
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-['DM_Sans',sans-serif] font-bold text-[14px] leading-[22px] px-7 py-3 rounded-full transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Application'}</span> &rarr;
                </button>
              </div>

            </form>
          </FadeUp>
        </div>
      </Container>
    </div>
  );
};

export default ApplyPage;
