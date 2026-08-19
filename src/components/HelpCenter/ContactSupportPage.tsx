import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { Container } from '../Container';

/* ─── Stepper Component ─── */
const Stepper: React.FC<{ currentStep: number }> = ({ currentStep }) => {
  const steps = ['Work Info', 'Company Details', 'Requirements'];
  return (
    <div className="relative flex items-center justify-between w-full max-w-[500px] mx-auto mb-12">
      {/* Background line */}
      <div className="absolute left-0 top-4 w-full h-0.5 bg-slate-200 -z-10" />
      {/* Filled line up to current step */}
      <div
        className="absolute left-0 top-4 h-0.5 bg-[#5B5FEF] -z-10 transition-all duration-500"
        style={{ width: currentStep === 1 ? '0%' : currentStep === 2 ? '50%' : '100%' }}
      />

      {steps.map((label, idx) => {
        const step = idx + 1;
        const isCompleted = step < currentStep;
        const isActive = step === currentStep;
        return (
          <div key={step} className="flex flex-col items-center gap-2 relative">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-white transition-all duration-300 ${isCompleted
                  ? 'bg-[#5B5FEF] text-white'
                  : isActive
                    ? 'bg-[#5B5FEF] text-white'
                    : 'bg-white border border-slate-200 text-slate-400'
                }`}
            >
              {isCompleted ? <Check size={14} strokeWidth={3} /> : step}
            </div>
            <span
              className={`text-[11px] font-bold whitespace-nowrap absolute -bottom-6 ${isActive ? 'text-[#5B5FEF]' : isCompleted ? 'text-slate-600' : 'text-slate-400'
                }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

/* ─── Step 1: Work Information ─── */
const Step1: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [country, setCountry] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!country.trim()) newErrors.country = 'Please select a country';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    onNext();
  };

  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-2xl md:text-[28px] font-extrabold text-slate-900 mb-2">Work Information</h2>
      <p className="text-slate-500 text-[13px] font-medium mb-8">
        Let us know who you are and the best way to reach you.
      </p>

      <form onSubmit={handleNext} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[12px] font-bold text-slate-800 mb-2">
              First Name <span className="text-[#5B5FEF]">*</span>
            </label>
            <input
              type="text"
              placeholder="Sarah"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                if (errors.firstName) setErrors((prev) => ({ ...prev, firstName: '' }));
              }}
              className={`w-full bg-white border ${errors.firstName ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all`}
            />
            {errors.firstName && <p className="text-[11px] font-semibold text-red-500 mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <label className="block text-[12px] font-bold text-slate-800 mb-2">
              Last Name <span className="text-[#5B5FEF]">*</span>
            </label>
            <input
              type="text"
              placeholder="Johnson"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
                if (errors.lastName) setErrors((prev) => ({ ...prev, lastName: '' }));
              }}
              className={`w-full bg-white border ${errors.lastName ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all`}
            />
            {errors.lastName && <p className="text-[11px] font-semibold text-red-500 mt-1">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-bold text-slate-800 mb-2">
            Work Email <span className="text-[#5B5FEF]">*</span>
          </label>
          <input
            type="email"
            placeholder="sarah@company.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
            }}
            className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all`}
          />
          {errors.email ? (
            <p className="text-[11px] font-semibold text-red-500 mt-1">{errors.email}</p>
          ) : (
            <p className="text-[11px] text-slate-400 font-medium mt-2">We'll use this to send you a confirmation and follow-up.</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[12px] font-bold text-slate-800 mb-2">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all"
            />
          </div>
          <div>
            <label className="block text-[12px] font-bold text-slate-800 mb-2">Job Title</label>
            <input
              type="text"
              placeholder="HR Director"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-[12px] font-bold text-slate-800 mb-2">
            Country / Region <span className="text-[#5B5FEF]">*</span>
          </label>
          <div className="relative">
            <select
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                if (errors.country) setErrors((prev) => ({ ...prev, country: '' }));
              }}
              className={`w-full bg-white border ${errors.country ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-[14px] ${country ? 'text-slate-900' : 'text-slate-400'} focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all appearance-none cursor-pointer`}
            >
              <option value="" disabled>Select your country</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
            </select>
            <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
          {errors.country && <p className="text-[11px] font-semibold text-red-500 mt-1">{errors.country}</p>}
        </div>

        <div className="pt-6 border-t border-slate-100 flex justify-end">
          <button
            type="submit"
            className="bg-[#5B5FEF] hover:bg-[#4F46E5] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
          >
            Continue <ArrowRight size={16} />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

/* ─── Step 2: Company Details ─── */
const Step2: React.FC<{ onNext: () => void; onBack: () => void }> = ({ onNext, onBack }) => {
  const [companyName, setCompanyName] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [industry, setIndustry] = useState('');
  const [currentHrms, setCurrentHrms] = useState('');
  const [officeLocations, setOfficeLocations] = useState('1 location');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const locationOptions = ['1 location', '2–5 locations', '6+ locations'];

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!teamSize.trim()) newErrors.teamSize = 'Please select a team size';
    if (!industry.trim()) newErrors.industry = 'Please select an industry';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    onNext();
  };

  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-2xl md:text-[28px] font-extrabold text-slate-900 mb-2">Company Details</h2>
      <p className="text-slate-500 text-[13px] font-medium mb-8">
        Help us understand your organization so we can tailor our response.
      </p>

      <form onSubmit={handleNext} className="space-y-6">
        {/* Company Name */}
        <div>
          <label className="block text-[12px] font-bold text-slate-800 mb-2">
            Company Name <span className="text-[#5B5FEF]">*</span>
          </label>
          <input
            type="text"
            placeholder="Acme Corporation"
            value={companyName}
            onChange={(e) => {
              setCompanyName(e.target.value);
              if (errors.companyName) setErrors((prev) => ({ ...prev, companyName: '' }));
            }}
            className={`w-full bg-white border ${errors.companyName ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all`}
          />
          {errors.companyName && <p className="text-[11px] font-semibold text-red-500 mt-1">{errors.companyName}</p>}
        </div>

        {/* Team Size & Industry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[12px] font-bold text-slate-800 mb-2">
              Team Size <span className="text-[#5B5FEF]">*</span>
            </label>
            <div className="relative">
              <select
                value={teamSize}
                onChange={(e) => {
                  setTeamSize(e.target.value);
                  if (errors.teamSize) setErrors((prev) => ({ ...prev, teamSize: '' }));
                }}
                className={`w-full bg-white border ${errors.teamSize ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-[14px] ${teamSize ? 'text-slate-900' : 'text-slate-400'} focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select team size</option>
                <option value="1–10 employees">1–10 employees</option>
                <option value="11–50 employees">11–50 employees</option>
                <option value="51–200 employees">51–200 employees</option>
                <option value="201–1000 employees">201–1000 employees</option>
                <option value="1000+ employees">1000+ employees</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
            {errors.teamSize && <p className="text-[11px] font-semibold text-red-500 mt-1">{errors.teamSize}</p>}
          </div>
          <div>
            <label className="block text-[12px] font-bold text-slate-800 mb-2">
              Industry <span className="text-[#5B5FEF]">*</span>
            </label>
            <div className="relative">
              <select
                value={industry}
                onChange={(e) => {
                  setIndustry(e.target.value);
                  if (errors.industry) setErrors((prev) => ({ ...prev, industry: '' }));
                }}
                className={`w-full bg-white border ${errors.industry ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-[14px] ${industry ? 'text-slate-900' : 'text-slate-400'} focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select industry</option>
                <option value="Technology">Technology</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Retail">Retail</option>
                <option value="Education">Education</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Other">Other</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
            {errors.industry && <p className="text-[11px] font-semibold text-red-500 mt-1">{errors.industry}</p>}
          </div>
        </div>

        {/* Current HRMS Tool */}
        <div>
          <label className="block text-[12px] font-bold text-slate-800 mb-2">Current HRMS / Attendance Tool</label>
          <input
            type="text"
            placeholder="BambooHR, ADP, spreadsheets, or none..."
            value={currentHrms}
            onChange={(e) => setCurrentHrms(e.target.value)}
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all"
          />
          <p className="text-[11px] text-slate-400 font-medium mt-2">This helps us understand your migration needs.</p>
        </div>

        {/* Office Locations toggle buttons */}
        <div>
          <label className="block text-[12px] font-bold text-slate-800 mb-3">Number of Office Locations</label>
          <div className="flex flex-wrap gap-3">
            {locationOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                onClick={() => setOfficeLocations(opt)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold border transition-all cursor-pointer ${officeLocations === opt
                    ? 'bg-indigo-50 border-[#5B5FEF] text-[#5B5FEF]'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <button
            type="submit"
            className="bg-[#5B5FEF] hover:bg-[#4F46E5] text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
          >
            Continue <ArrowRight size={16} />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

/* ─── Step 3: Requirements ─── */
const Step3: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);
  const [requirements, setRequirements] = useState('');
  const [budget, setBudget] = useState('');
  const [timeline, setTimeline] = useState('');
  const [extraInfo, setExtraInfo] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!requirements.trim()) {
      setError('Primary requirements are required');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        key="success"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 flex items-center justify-center mx-auto mb-6">
          <Check size={28} className="text-emerald-500" strokeWidth={3} />
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 mb-3">You're all set!</h2>
        <p className="text-slate-500 text-[15px] font-medium max-w-md mx-auto mb-8">
          A specialist will reach out within one business day to walk you through Workzi.
        </p>
        <a
          href="#help-center"
          className="inline-flex items-center gap-2 bg-[#5B5FEF] text-white text-sm font-bold px-8 py-3.5 rounded-xl hover:bg-[#4F46E5] transition-all shadow-md cursor-pointer"
        >
          Back to Help Center
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-2xl md:text-[28px] font-extrabold text-slate-900 mb-2">Requirements &amp; Goals</h2>
      <p className="text-slate-500 text-[13px] font-medium mb-8">
        Tell us what you're trying to achieve so we can customize our recommendation.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Primary Requirements */}
        <div>
          <label className="block text-[12px] font-bold text-slate-800 mb-2">
            Primary Requirements <span className="text-[#5B5FEF]">*</span>
          </label>
          <textarea
            rows={4}
            value={requirements}
            onChange={(e) => {
              setRequirements(e.target.value);
              if (error) setError('');
            }}
            placeholder="Describe your main challenges — e.g., employees missing check-ins, manual Time-off tracking, lack of real-time visibility, payroll sync issues..."
            className={`w-full bg-white border ${error ? 'border-red-500' : 'border-slate-200'} rounded-xl px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all resize-none`}
          />
          {error && <p className="text-[11px] font-semibold text-red-500 mt-1">{error}</p>}
        </div>

        {/* Budget & Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[12px] font-bold text-slate-800 mb-2">Estimated Budget</label>
            <div className="relative">
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className={`w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] ${budget ? 'text-slate-900' : 'text-slate-400'} focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select budget range</option>
                <option value="Under $500 / month">Under $500 / month</option>
                <option value="$500 – $2,000 / month">$500 – $2,000 / month</option>
                <option value="$2,000 – $5,000 / month">$2,000 – $5,000 / month</option>
                <option value="$5,000+ / month">$5,000+ / month</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-[12px] font-bold text-slate-800 mb-2">Implementation Timeline</label>
            <div className="relative">
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className={`w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] ${timeline ? 'text-slate-900' : 'text-slate-400'} focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all appearance-none cursor-pointer`}
              >
                <option value="" disabled>Select timeline</option>
                <option value="Immediately (ASAP)">Immediately (ASAP)</option>
                <option value="Within 1 month">Within 1 month</option>
                <option value="1 – 3 months">1 – 3 months</option>
                <option value="3 – 6 months">3 – 6 months</option>
                <option value="Just exploring">Just exploring</option>
              </select>
              <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Anything else */}
        <div>
          <label className="block text-[12px] font-bold text-slate-800 mb-2">
            Anything else? <span className="text-slate-400 font-medium">(Optional)</span>
          </label>
          <textarea
            rows={3}
            value={extraInfo}
            onChange={(e) => setExtraInfo(e.target.value)}
            placeholder="Add any additional context, specific integrations needed, compliance requirements, or questions..."
            className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#5B5FEF] focus:ring-1 focus:ring-[#5B5FEF] transition-all resize-none"
          />
        </div>

        {/* Navigation */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-bold text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} /> Back
          </button>
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            Submit Request
          </button>
        </div>

        {/* Fine print */}
        <p className="text-[11px] text-slate-400 text-center font-medium pt-1">
          By submitting, you agree to our{' '}
          <a href="#" className="text-[#5B5FEF] hover:underline">Privacy Policy</a>{' '}
          and{' '}
          <a href="#" className="text-[#5B5FEF] hover:underline">Terms of Service</a>.
          {' '}We'll reach out within 1 business day.
        </p>
      </form>
    </motion.div>
  );
};

/* ─── Main Page ─── */
const ContactSupportPage: React.FC = () => {
  const [step, setStep] = useState(1);

  return (
    <div
      id="contact-support"
      className="min-h-screen relative overflow-x-hidden flex flex-col pt-24 pb-32 font-['Plus_Jakarta_Sans',sans-serif]"
      style={{ background: 'linear-gradient(135deg, #F0F4FF 0%, #FFFFFF 50%, #FFF2E8 100%)' }}
    >
      <Container className="flex-1 flex flex-col items-center max-w-4xl mx-auto w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 w-full"
        >
          <span className="inline-block border border-indigo-100 bg-indigo-50/50 text-[#5B5FEF] px-4 py-1.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase mb-6">
            Enterprise Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] leading-tight mb-4 tracking-tight">
            Tell us about your team
          </h1>
          <p className="text-slate-500 text-[15px] font-medium max-w-lg mx-auto">
            Fill in your details and a specialist will reach out within one business day.
          </p>
        </motion.div>

        {/* Stepper */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full flex justify-center mb-6"
        >
          <Stepper currentStep={step} />
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-2xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.07)] rounded-[32px] p-8 md:p-12 relative z-10 mt-6"
        >
          <AnimatePresence mode="wait">
            {step === 1 && <Step1 key="step1" onNext={() => setStep(2)} />}
            {step === 2 && <Step2 key="step2" onNext={() => setStep(3)} onBack={() => setStep(1)} />}
            {step === 3 && <Step3 key="step3" onBack={() => setStep(2)} />}
          </AnimatePresence>
        </motion.div>

      </Container>
    </div>
  );
};

export default ContactSupportPage;
