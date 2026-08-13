import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../Container';
import { Check, ShieldAlert } from 'lucide-react';

/* ─── Custom Toggle Switch Component ─── */
const ToggleSwitch: React.FC<{
  enabled: boolean;
  onChange: (val: boolean) => void;
  id: string;
}> = ({ enabled, onChange, id }) => {
  return (
    <button
      type="button"
      id={id}
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6.5 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
        enabled ? 'bg-[#5C5CFF]' : 'bg-[#D7D9E4]'
      }`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out ${
          enabled ? 'translate-x-4.5' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

export const CookieSettingsPage: React.FC = () => {
  // Toggle states
  const [functional, setFunctional] = useState<boolean>(true);
  const [analytics, setAnalytics] = useState<boolean>(true);
  const [marketing, setMarketing] = useState<boolean>(false);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  const handleSave = () => {
    setSavedMessage('Your cookie preferences have been saved.');
    setTimeout(() => setSavedMessage(null), 4000);
  };

  const handleRejectOptional = () => {
    setFunctional(false);
    setAnalytics(false);
    setMarketing(false);
    setSavedMessage('Optional cookies rejected and preferences saved.');
    setTimeout(() => setSavedMessage(null), 4000);
  };

  const handleAcceptAll = () => {
    setFunctional(true);
    setAnalytics(true);
    setMarketing(true);
    setSavedMessage('All cookie categories accepted and preferences saved.');
    setTimeout(() => setSavedMessage(null), 4000);
  };

  return (
    <div id="cookie-settings-page" className="w-full bg-white text-[#12131A] min-h-screen pt-[88px]">
      
      {/* ── 1. LEGAL HERO SECTION ── */}
      <section className="w-full border-b border-[#E6E8F0] bg-white py-12 lg:py-16">
        <Container className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="flex flex-col items-start max-w-[800px] gap-3.5">
            {/* Eyebrow */}
            <span className="font-['Inter',sans-serif] font-bold text-[12.5px] leading-[15px] tracking-[1px] uppercase text-[#5C5CFF]">
              PRIVACY
            </span>

            {/* H1 Title */}
            <h1 className="font-['Inter',sans-serif] font-semibold text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.2] lg:leading-[53px] tracking-[-0.88px] text-[#12131A]">
              Cookie Settings
            </h1>

            {/* Subtitle */}
            <p className="font-['Inter',sans-serif] font-normal text-[16px] sm:text-[17px] leading-[27px] text-[#667085] max-w-[600px]">
              Manage your cookie preferences and control how Workzi uses cookies and similar technologies.
            </p>

            {/* Meta */}
            <span className="font-['Inter',sans-serif] font-medium text-[13.5px] leading-[16px] text-[#98A2B3] pt-1">
              Last updated: August 12, 2026
            </span>
          </div>
        </Container>
      </section>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <section className="w-full py-12 lg:py-16 bg-white">
        <Container className="max-w-[1200px] mx-auto px-4 sm:px-8">
          <div className="max-w-[800px] mx-auto flex flex-col gap-14">

            {/* ── 2. COOKIE PREFERENCES SECTION ── */}
            <div className="flex flex-col gap-4">
              <h2 className="font-['Inter',sans-serif] font-semibold text-[24px] sm:text-[26px] leading-[31px] tracking-[-0.26px] text-[#12131A]">
                Cookie Preferences
              </h2>

              <p className="font-['Inter',sans-serif] font-normal text-[15px] sm:text-[16px] leading-[27px] text-[#333747] max-w-[640px]">
                We use cookies and similar technologies to help Workzi function properly, understand how visitors use our website, and improve your experience. You can turn optional categories on or off below.
              </p>

              {/* Cookie Items List Card */}
              <div className="w-full border border-[#E6E8F0] rounded-[14px] bg-white divide-y divide-[#E6E8F0] overflow-hidden mt-2">
                
                {/* ITEM 1: Strictly Necessary */}
                <div className="p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1.5 max-w-[520px]">
                    <h3 className="font-['Inter',sans-serif] font-semibold text-[16.5px] leading-[20px] text-[#12131A]">
                      Strictly Necessary
                    </h3>
                    <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[23px] text-[#667085]">
                      These cookies are required for essential website functionality and cannot be disabled.
                    </p>
                  </div>

                  <span className="inline-flex items-center justify-center bg-[#EEF0FF] text-[#5C5CFF] font-['Inter',sans-serif] font-bold text-[13px] leading-[16px] px-3.5 py-1.5 rounded-full shrink-0 self-start sm:self-center">
                    Always Active
                  </span>
                </div>

                {/* ITEM 2: Functional Cookies */}
                <div className="p-6 sm:p-7 flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-1.5 max-w-[520px]">
                    <h3 className="font-['Inter',sans-serif] font-semibold text-[16.5px] leading-[20px] text-[#12131A]">
                      Functional Cookies
                    </h3>
                    <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[23px] text-[#667085]">
                      These cookies help remember preferences and improve functionality.
                    </p>
                  </div>

                  <ToggleSwitch
                    id="toggle-functional"
                    enabled={functional}
                    onChange={setFunctional}
                  />
                </div>

                {/* ITEM 3: Analytics Cookies */}
                <div className="p-6 sm:p-7 flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-1.5 max-w-[520px]">
                    <h3 className="font-['Inter',sans-serif] font-semibold text-[16.5px] leading-[20px] text-[#12131A]">
                      Analytics Cookies
                    </h3>
                    <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[23px] text-[#667085]">
                      These cookies help us understand how visitors use Workzi so we can improve website performance and user experience.
                    </p>
                  </div>

                  <ToggleSwitch
                    id="toggle-analytics"
                    enabled={analytics}
                    onChange={setAnalytics}
                  />
                </div>

                {/* ITEM 4: Marketing Cookies */}
                <div className="p-6 sm:p-7 flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-1.5 max-w-[520px]">
                    <h3 className="font-['Inter',sans-serif] font-semibold text-[16.5px] leading-[20px] text-[#12131A]">
                      Marketing Cookies
                    </h3>
                    <p className="font-['Inter',sans-serif] font-normal text-[14.5px] leading-[23px] text-[#667085]">
                      These cookies may be used to understand marketing performance and deliver more relevant experiences.
                    </p>
                  </div>

                  <ToggleSwitch
                    id="toggle-marketing"
                    enabled={marketing}
                    onChange={setMarketing}
                  />
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  id="savePrefs"
                  onClick={handleSave}
                  className="bg-[#5C5CFF] hover:bg-[#4F46E5] text-white font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[18px] px-5 py-3 rounded-[10px] transition-colors cursor-pointer"
                >
                  Save Preferences
                </button>

                <button
                  type="button"
                  id="rejectOptional"
                  onClick={handleRejectOptional}
                  className="bg-white hover:bg-slate-50 border border-[#E6E8F0] text-[#12131A] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[18px] px-5 py-3 rounded-[10px] transition-colors cursor-pointer"
                >
                  Reject Optional Cookies
                </button>

                <button
                  type="button"
                  id="acceptAll"
                  onClick={handleAcceptAll}
                  className="bg-white hover:bg-slate-50 border border-[#E6E8F0] text-[#12131A] font-['Plus_Jakarta_Sans',sans-serif] font-semibold text-[14px] leading-[18px] px-5 py-3 rounded-[10px] transition-colors cursor-pointer"
                >
                  Accept All
                </button>
              </div>

              {/* Toast Feedback */}
              <AnimatePresence>
                {savedMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3.5 rounded-[10px] bg-emerald-50 border border-emerald-200 text-emerald-800 font-['Inter',sans-serif] font-medium text-[14.5px] flex items-center gap-2"
                  >
                    <Check size={18} className="text-emerald-600 shrink-0" />
                    <span>{savedMessage}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── 3. ABOUT COOKIES DOCUMENTATION SECTION ── */}
            <div className="border-t border-[#E6E8F0] pt-12 flex flex-col gap-8">
              <h2 className="font-['Inter',sans-serif] font-semibold text-[26px] leading-[31px] tracking-[-0.26px] text-[#12131A]">
                About Cookies
              </h2>

              {/* Block 1 */}
              <div className="flex flex-col gap-2.5">
                <h3 className="font-['Inter',sans-serif] font-semibold text-[18px] leading-[22px] text-[#12131A]">
                  What Are Cookies?
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-[#333747]">
                  Cookies are small text files that a website places on your device as you browse. They help the site remember information about your visit, such as your preferences and how you interact with different pages, which can make your next visit easier and the site more useful to you.
                </p>
              </div>

              {/* Block 2 */}
              <div className="flex flex-col gap-2.5">
                <h3 className="font-['Inter',sans-serif] font-semibold text-[18px] leading-[22px] text-[#12131A]">
                  How We Use Cookies
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-[#333747]">
                  Workzi uses cookies for essential functionality, such as keeping you signed in; for functional purposes, such as remembering your preferences; for analytics, to help us understand how the site is used and improve it over time; and, where enabled, for marketing purposes to help us understand how our campaigns perform.
                </p>
              </div>

              {/* Block 3 */}
              <div className="flex flex-col gap-2.5">
                <h3 className="font-['Inter',sans-serif] font-semibold text-[18px] leading-[22px] text-[#12131A]">
                  Your Choices
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-[#333747]">
                  You can change your cookie preferences at any time by returning to this page. Strictly necessary cookies cannot be disabled, as they are required for the website to function. Your saved preferences apply to this browser and device.
                </p>
              </div>

              {/* Block 4 */}
              <div className="flex flex-col gap-2.5">
                <h3 className="font-['Inter',sans-serif] font-semibold text-[18px] leading-[22px] text-[#12131A]">
                  Changes to This Cookie Policy
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-[#333747]">
                  We may update this Cookie Policy from time to time to reflect changes in the technologies we use or for legal and operational reasons. We will revise the "Last updated" date at the top of this page when changes are made.
                </p>
              </div>

              {/* Block 5 */}
              <div className="flex flex-col gap-2.5">
                <h3 className="font-['Inter',sans-serif] font-semibold text-[18px] leading-[22px] text-[#12131A]">
                  Contact Information
                </h3>
                <p className="font-['Inter',sans-serif] font-normal text-[16px] leading-[28px] text-[#333747]">
                  If you have questions about how Workzi uses cookies, please contact us at{' '}
                  <a href="mailto:privacy@workzi.com" className="text-[#5C5CFF] font-medium hover:underline">
                    privacy@workzi.com
                  </a>.
                </p>
              </div>

              {/* Cross-Link Box */}
              <div className="w-full bg-[#F7F8FC] border border-[#E6E8F0] rounded-[14px] p-5 sm:p-6 mt-4">
                <p className="font-['Inter',sans-serif] font-normal text-[15px] leading-[22px] text-[#12131A]">
                  Want to learn more about how we handle your data? Read our{' '}
                  <a href="#privacy-policy" className="text-[#5C5CFF] font-semibold hover:underline">
                    Privacy Policy
                  </a>.
                </p>
              </div>

            </div>

          </div>
        </Container>
      </section>

    </div>
  );
};

export default CookieSettingsPage;
