import { useState, useEffect } from 'react';
import { useSEO } from './hooks/useSEO';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import TrustedCompanies from './components/TrustedCompanies/TrustedCompanies';
import Attendance from './components/Attendance/Attendance';
import Leave from './components/Leave/Leave';
import Employee from './components/Employee/Employee';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Showcase from './components/Showcase/Showcase';
import HRSection from './components/HRSection/HRSection';
import Blog from './components/Blog/Blog';
import Testimonials from './components/Testimonials/Testimonials';
import FAQ from './components/FAQ/FAQ';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import EmployeeAppPage from './components/EmployeeApp/EmployeeAppPage';
import SolutionsPage from './components/Solutions/SolutionsPage';
import HRSolutionsPage from './components/Solutions/HRSolutionsPage';
import CustomerServicePage from './components/Solutions/CustomerServicePage';
import EngineeringPage from './components/Solutions/EngineeringPage';
import ITPage from './components/Solutions/ITPage';
import SalesPage from './components/Solutions/SalesPage';
import ProjectManagementPage from './components/Solutions/ProjectManagementPage';
import MarketingPage from './components/Solutions/MarketingPage';
import ManufacturingAutoEnergyPage from './components/Solutions/ManufacturingAutoEnergyPage';
import TechnologyPage from './components/Solutions/TechnologyPage';
import MediaPage from './components/Solutions/MediaPage';
import SmallBusinessPage from './components/Solutions/SmallBusinessPage';
import FinancialServicesPage from './components/Solutions/FinancialServicesPage';
import RetailPage from './components/Solutions/RetailPage';
import HealthcarePage from './components/Solutions/HealthcarePage';
import EducationPage from './components/Solutions/EducationPage';
import FAQPage from './components/FAQ/FAQPage';
import HRManagerPage from './components/HRManager/HRManagerPage';
import PricingPage from './components/Pricing/PricingPage';
import HelpCenterPage from './components/HelpCenter/HelpCenterPage';
import HelpArticlePage from './components/HelpCenter/HelpArticlePage';
import ContactSupportPage from './components/HelpCenter/ContactSupportPage';
import CareersPage from './components/Careers/CareersPage';
import OpenRolesPage from './components/Careers/OpenRolesPage';
import JobDetailsPage from './components/Careers/JobDetailsPage';
import ApplyPage from './components/Careers/ApplyPage';
import ApplicationSuccessPage from './components/Careers/ApplicationSuccessPage';
import BlogPage from './components/Blog/BlogPage';
import ArticlePage from './components/Blog/ArticlePage';
import AttendanceManagementPage from './components/Features/AttendanceManagementPage';
import LeaveManagementPage from './components/Features/LeaveManagementPage';
import ShiftManagementPage from './components/Features/ShiftManagementPage';
import TaskManagementPage from './components/Features/TaskManagementPage';
import EmployeeSelfServicePage from './components/Features/EmployeeSelfServicePage';
import OrganizationManagementPage from './components/Features/OrganizationManagementPage';
import AIAssistantPage from './components/Features/AIAssistantPage';
import SecurityAccessControlPage from './components/Features/SecurityAccessControlPage';
import MobileExperiencePage from './components/Features/MobileExperiencePage';
import IntegrationsPage from './components/Features/IntegrationsPage';
import WhyAttendXPage from './components/WhyAttendX/WhyAttendXPage';
import AttendXVsManualHRPage from './components/WhyAttendX/AttendXVsManualHRPage';
import AttendXVsTraditionalHRMSPage from './components/WhyAttendX/AttendXVsTraditionalHRMSPage';
import ForEnterprisePage from './components/WhyAttendX/ForEnterprisePage';
import ForSmallBusinessPage from './components/WhyAttendX/ForSmallBusinessPage';
import ScaleWithAttendXPage from './components/WhyAttendX/ScaleWithAttendXPage';
import TrustAndSecurityPage from './components/WhyAttendX/TrustAndSecurityPage';
import Education2Page from './components/Education2Page';
import AboutPage from './components/About/AboutPage';
import CookieSettingsPage from './components/Legal/CookieSettingsPage';
import TermsOfServicePage from './components/Legal/TermsOfServicePage';
import PrivacyPolicyPage from './components/Legal/PrivacyPolicyPage';

// Features Subpage Components
import { FeaturesHero } from './components/Features/FeaturesHero';
import PlatformCapabilities from './components/Features/PlatformCapabilities';
import TrackAttendance from './components/Features/TrackAttendance';
import SimplifyLeave from './components/Features/SimplifyLeave';
import EmpowerEmployees from './components/Features/EmpowerEmployees';
import Reporting from './components/Features/Reporting';
import Workflow from './components/Features/Workflow';
import ModernTeams from './components/Features/ModernTeams';
import Integrations from './components/Features/Integrations';
import FeaturesFAQ from './components/Features/FeaturesFAQ';

import { getCurrentPath, normalizePath } from './utils/router';

const getBaseView = (pathOrHash: string): string => {
  const clean = pathOrHash.replace(/^[#/]+/, '').toLowerCase();
  if (!clean || clean === 'home') return 'home';
  if (clean === 'why-attendx' || clean === 'why-workzi') return 'why-attendx';
  if (clean === 'attendx-vs-manual-hr' || clean === 'workzi-vs-manual-hr') return 'attendx-vs-manual-hr';
  if (clean === 'attendx-vs-traditional-hrms' || clean === 'workzi-vs-traditional-hrms') return 'attendx-vs-traditional-hrms';
  if (clean === 'for-enterprise') return 'for-enterprise';
  if (clean === 'for-small-business') return 'for-small-business';
  if (clean === 'scale-with-attendx' || clean === 'scale-with-workzi') return 'scale-with-attendx';
  if (clean === 'trust-and-security') return 'trust-and-security';
  if (clean === 'features') return 'features';
  if (clean === 'attendance-management' || clean === 'track-attendance' || clean.startsWith('feat-')) return 'attendance-management';
  if (clean === 'time-off-management' || clean === 'leave-management' || clean === 'simplify-time-off' || clean === 'simplify-leave') return 'time-off-management';
  if (clean === 'shift-management') return 'shift-management';
  if (clean === 'task-management') return 'task-management';
  if (clean === 'employee-self-service') return 'employee-self-service';
  if (clean === 'organization-management') return 'organization-management';
  if (clean === 'ai-assistant') return 'ai-assistant';
  if (clean === 'security-access-control') return 'security-access-control';
  if (clean === 'mobile-experience') return 'mobile-experience';
  if (clean === 'integrations' || clean === 'integrations-feature' || clean === 'hrms-integrations') return 'integrations';
  if (clean === 'solutions') return 'solutions';
  if (clean === 'hr-solutions' || clean === 'human-resources') return 'hr-solutions';
  if (clean === 'customer-service-solutions' || clean === 'customer-service') return 'customer-service-solutions';
  if (clean === 'engineering-solutions' || clean === 'engineering') return 'engineering-solutions';
  if (clean === 'it-solutions' || clean === 'it') return 'it-solutions';
  if (clean === 'sales-solutions' || clean === 'sales') return 'sales-solutions';
  if (clean === 'project-management-solutions' || clean === 'project-management') return 'project-management-solutions';
  if (clean === 'marketing-solutions' || clean === 'marketing') return 'marketing-solutions';
  if (clean === 'manufacturing-auto-energy-solutions' || clean === 'manufacturing-auto-energy' || clean === 'manufacturing') return 'manufacturing-auto-energy-solutions';
  if (clean === 'technology-solutions' || clean === 'technology') return 'technology-solutions';
  if (clean === 'media-solutions' || clean === 'media') return 'media-solutions';
  if (clean === 'small-business-solutions' || clean === 'small-business') return 'small-business-solutions';
  if (clean === 'financial-services-solutions' || clean === 'financial-services') return 'financial-services-solutions';
  if (clean === 'retail-solutions' || clean === 'retail') return 'retail-solutions';
  if (clean === 'health-life-sciences-solutions' || clean === 'health-life-sciences' || clean === 'healthcare-solutions' || clean === 'healthcare') return 'healthcare-solutions';
  if (clean === 'education-solutions' || clean === 'education-solutions-page' || clean === 'education-industry' || clean === 'education') return 'education-solutions';
  if (clean === 'education-2') return 'education-2';
  if (clean === 'faq') return 'faq';
  if (clean === 'employee-app') return 'employee-app';
  if (clean === 'hr-manager') return 'hr-manager';
  if (clean === 'pricing') return 'pricing';
  if (clean === 'help-center') return 'help-center';
  if (clean === 'help-article') return 'help-article';
  if (clean === 'contact-support' || clean === 'contact') return 'contact-support';
  if (clean === 'about-us' || clean === 'about') return 'about-us';
  if (clean === 'cookie-settings' || clean === 'cookies') return 'cookie-settings';
  if (clean === 'terms-of-service' || clean === 'terms') return 'terms-of-service';
  if (clean === 'privacy-policy' || clean === 'privacy') return 'privacy-policy';
  if (clean === 'careers' || clean === 'our-story') return 'careers';
  if (clean === 'open-roles-page' || clean === 'open-roles' || clean === 'explore-open-roles' || clean === 'open-positions' || clean === 'jobs') return 'open-roles-page';
  if (clean === 'job-details' || clean.startsWith('job-')) return 'job-details';
  if (clean === 'apply-page' || clean === 'apply' || clean === 'apply-now') return 'apply-page';
  if (clean === 'application-success') return 'application-success';
  if (clean === 'blog' || clean === 'all-stories' || clean === 'articles') return 'blog';
  if (clean === 'blog-article' || [
    'introduction',
    'state-of-hr',
    'predictive-scheduling',
    'anomaly-detection',
    'impact-metrics',
    'hr-teams',
    'key-takeaways'
  ].includes(clean)) return 'blog-article';
  return 'home';
};

function App() {
  const [currentPath, setCurrentPath] = useState<string>(getCurrentPath());

  useEffect(() => {
    // Initial cleanup: if loaded with hash (e.g. /#pricing, /#home) or /home, rewrite cleanly
    const rawHash = window.location.hash;
    const rawPath = window.location.pathname;
    if (rawHash && rawHash !== '#') {
      const cleanPath = normalizePath(rawHash);
      window.history.replaceState(null, '', cleanPath);
      setCurrentPath(cleanPath);
    } else if (rawPath === '/home') {
      window.history.replaceState(null, '', '/');
      setCurrentPath('/');
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const path = getCurrentPath();
      setCurrentPath(path);
      window.scrollTo(0, 0);
    };

    const handleHashChange = () => {
      if (window.location.hash && window.location.hash !== '#') {
        const cleanPath = normalizePath(window.location.hash);
        window.history.replaceState(null, '', cleanPath);
        setCurrentPath(cleanPath);
        window.scrollTo(0, 0);
      }
    };

    const handleGlobalClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
      const target = (e.target as HTMLElement).closest('a[href]');
      if (target) {
        const href = target.getAttribute('href');
        const targetAttr = target.getAttribute('target');
        if (targetAttr === '_blank' || !href) return;

        // Skip external or protocol links
        if (/^(https?:)?\/\//i.test(href) || /^mailto:/i.test(href) || /^tel:/i.test(href)) {
          return;
        }

        // Ignore empty dummy hash
        if (href === '#' || href === 'javascript:void(0)') {
          e.preventDefault();
          return;
        }

        e.preventDefault();
        const targetPath = normalizePath(href);
        if (window.location.pathname !== targetPath || window.location.hash) {
          window.history.pushState(null, '', targetPath);
        }
        window.dispatchEvent(new PopStateEvent('popstate'));
        setCurrentPath(targetPath);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const currentView = getBaseView(currentPath);

  // ── Dynamic SEO: update <title> + <meta name="description"> on every navigation ──
  useSEO(currentView, currentPath);

  const isSolutionsView = currentView === 'solutions';
  const isHRSolutionsView = currentView === 'hr-solutions';
  const isCustomerServiceView = currentView === 'customer-service-solutions';
  const isEngineeringView = currentView === 'engineering-solutions';
  const isITView = currentView === 'it-solutions';
  const isSalesView = currentView === 'sales-solutions';
  const isProjectManagementView = currentView === 'project-management-solutions';
  const isMarketingView = currentView === 'marketing-solutions';
  const isManufacturingAutoEnergyView = currentView === 'manufacturing-auto-energy-solutions';
  const isTechnologyView = currentView === 'technology-solutions';
  const isMediaView = currentView === 'media-solutions';
  const isSmallBusinessView = currentView === 'small-business-solutions';
  const isFinancialServicesView = currentView === 'financial-services-solutions';
  const isRetailView = currentView === 'retail-solutions';
  const isHealthcareView = currentView === 'healthcare-solutions';
  const isEducationView = currentView === 'education-solutions';
  const isAttendanceManagementView = currentView === 'attendance-management';
  const isTimeOffManagementView = currentView === 'time-off-management';
  const isShiftManagementView = currentView === 'shift-management';
  const isTaskManagementView = currentView === 'task-management';
  const isEmployeeSelfServiceView = currentView === 'employee-self-service';
  const isOrganizationManagementView = currentView === 'organization-management';
  const isAIAssistantView = currentView === 'ai-assistant';
  const isSecurityAccessControlView = currentView === 'security-access-control';
  const isMobileExperienceView = currentView === 'mobile-experience';
  const isIntegrationsView = currentView === 'integrations';
  const isFeaturesView = currentView === 'features';
  const isEmployeeAppView = currentView === 'employee-app';
  const isHRManagerView = currentView === 'hr-manager';
  const isPricingView = currentView === 'pricing';
  const isHelpCenterView = currentView === 'help-center';
  const isHelpArticleView = currentView === 'help-article';
  const isContactSupportView = currentView === 'contact-support';
  const isCareersView = currentView === 'careers';
  const isOpenRolesView = currentView === 'open-roles-page';
  const isJobDetailsView = currentView === 'job-details';
  const isApplyView = currentView === 'apply-page';
  const isApplicationSuccessView = currentView === 'application-success';
  const isBlogView = currentView === 'blog';
  const isArticleView = currentView === 'blog-article';
  const isFAQView = currentView === 'faq';

  const isWhyAttendXView = currentView === 'why-attendx';
  const isAttendXVsManualHRView = currentView === 'attendx-vs-manual-hr';
  const isAttendXVsTraditionalHRMSView = currentView === 'attendx-vs-traditional-hrms';
  const isForEnterpriseView = currentView === 'for-enterprise';
  const isForSmallBusinessView = currentView === 'for-small-business';
  const isScaleWithAttendXView = currentView === 'scale-with-attendx';
  const isTrustAndSecurityView = currentView === 'trust-and-security';
  const isEducation2View = currentView === 'education-2';
  const isAboutUsView = currentView === 'about-us' || currentPath === '/about-us' || currentPath === '/about';
  const isCookieSettingsView = currentView === 'cookie-settings' || currentPath === '/cookie-settings' || currentPath === '/cookies';
  const isTermsOfServiceView = currentView === 'terms-of-service' || currentPath === '/terms-of-service' || currentPath === '/terms';
  const isPrivacyPolicyView = currentView === 'privacy-policy' || currentPath === '/privacy-policy' || currentPath === '/privacy';

  return (
    <div className="relative overflow-x-clip min-h-screen flex flex-col bg-white">
      <Navbar currentPath={currentPath} />
      <main className="flex-1">
        {isAboutUsView ? (
          <>
            <AboutPage />
            <Footer />
          </>
        ) : isCookieSettingsView ? (
          <>
            <CookieSettingsPage />
            <Footer />
          </>
        ) : isTermsOfServiceView ? (
          <>
            <TermsOfServicePage />
            <Footer />
          </>
        ) : isPrivacyPolicyView ? (
          <>
            <PrivacyPolicyPage />
            <Footer />
          </>
        ) : isWhyAttendXView ? (
          <>
            <WhyAttendXPage />
            <Footer />
          </>
        ) : isAttendXVsManualHRView ? (
          <>
            <AttendXVsManualHRPage />
            <Footer />
          </>
        ) : isAttendXVsTraditionalHRMSView ? (
          <>
            <AttendXVsTraditionalHRMSPage />
            <Footer />
          </>
        ) : isForEnterpriseView ? (
          <>
            <ForEnterprisePage />
            <Footer />
          </>
        ) : isForSmallBusinessView ? (
          <>
            <ForSmallBusinessPage />
            <Footer />
          </>
        ) : isScaleWithAttendXView ? (
          <>
            <ScaleWithAttendXPage />
            <Footer />
          </>
        ) : isTrustAndSecurityView ? (
          <>
            <TrustAndSecurityPage />
            <Footer />
          </>
        ) : isEducation2View ? (
          <>
            <Education2Page />
            <Footer />
          </>
        ) : isSolutionsView ? (
          <>
            <SolutionsPage />
            <Footer />
          </>
        ) : isHRSolutionsView ? (
          <>
            <HRSolutionsPage />
            <Footer />
          </>
        ) : isCustomerServiceView ? (
          <>
            <CustomerServicePage />
            <Footer />
          </>
        ) : isEngineeringView ? (
          <>
            <EngineeringPage />
            <Footer />
          </>
        ) : isITView ? (
          <>
            <ITPage />
            <Footer />
          </>
        ) : isSalesView ? (
          <>
            <SalesPage />
            <Footer />
          </>
        ) : isProjectManagementView ? (
          <>
            <ProjectManagementPage />
            <Footer />
          </>
        ) : isMarketingView ? (
          <>
            <MarketingPage />
            <Footer />
          </>
        ) : isManufacturingAutoEnergyView ? (
          <>
            <ManufacturingAutoEnergyPage />
            <Footer />
          </>
        ) : isTechnologyView ? (
          <>
            <TechnologyPage />
            <Footer />
          </>
        ) : isMediaView ? (
          <>
            <MediaPage />
            <Footer />
          </>
        ) : isSmallBusinessView ? (
          <>
            <SmallBusinessPage />
            <Footer />
          </>
        ) : isFinancialServicesView ? (
          <>
            <FinancialServicesPage />
            <Footer />
          </>
        ) : isRetailView ? (
          <>
            <RetailPage />
            <Footer />
          </>
        ) : isHealthcareView ? (
          <>
            <HealthcarePage />
            <Footer />
          </>
        ) : isEducationView ? (
          <>
            <EducationPage />
            <Footer />
          </>
        ) : isFAQView ? (
          <>
            <FAQPage />
            <Footer />
          </>
        ) : isEmployeeAppView ? (
          <>
            <EmployeeAppPage />
            <Footer />
          </>
        ) : isHRManagerView ? (
          <>
            <HRManagerPage />
            <Footer />
          </>
        ) : isPricingView ? (
          <>
            <PricingPage />
            <Footer />
          </>
        ) : isHelpCenterView ? (
          <>
            <HelpCenterPage />
            <Footer />
          </>
        ) : isHelpArticleView ? (
          <>
            <HelpArticlePage />
            <Footer />
          </>
        ) : isContactSupportView ? (
          <>
            <ContactSupportPage />
            <Footer />
          </>
        ) : isCareersView ? (
          <>
            <CareersPage />
            <Footer />
          </>
        ) : isOpenRolesView ? (
          <>
            <OpenRolesPage />
            <Footer />
          </>
        ) : isJobDetailsView ? (
          <>
            <JobDetailsPage />
            <Footer />
          </>
        ) : isApplyView ? (
          <>
            <ApplyPage />
            <Footer />
          </>
        ) : isApplicationSuccessView ? (
          <>
            <ApplicationSuccessPage />
            <Footer />
          </>
        ) : isBlogView ? (
          <>
            <BlogPage />
            <Footer />
          </>
        ) : isArticleView ? (
          <>
            <ArticlePage />
            <Footer />
          </>
        ) : isAttendanceManagementView ? (
          <>
            <AttendanceManagementPage />
            <Footer />
          </>
        ) : isTimeOffManagementView ? (
          <>
            <LeaveManagementPage />
            <Footer />
          </>
        ) : isShiftManagementView ? (
          <>
            <ShiftManagementPage />
            <Footer />
          </>
        ) : isTaskManagementView ? (
          <>
            <TaskManagementPage />
            <Footer />
          </>
        ) : isEmployeeSelfServiceView ? (
          <>
            <EmployeeSelfServicePage />
            <Footer />
          </>
        ) : isOrganizationManagementView ? (
          <>
            <OrganizationManagementPage />
            <Footer />
          </>
        ) : isAIAssistantView ? (
          <>
            <AIAssistantPage />
            <Footer />
          </>
        ) : isSecurityAccessControlView ? (
          <>
            <SecurityAccessControlPage />
            <Footer />
          </>
        ) : isMobileExperienceView ? (
          <>
            <MobileExperiencePage />
            <Footer />
          </>
        ) : isIntegrationsView ? (
          <>
            <IntegrationsPage />
            <Footer />
          </>
        ) : isFeaturesView ? (
          <>
            <FeaturesHero />
            <PlatformCapabilities />
            <TrackAttendance />
            <SimplifyLeave />
            <EmpowerEmployees />
            <Workflow />
            <Reporting />
            <ModernTeams />
            <Integrations />
            <FeaturesFAQ />
            <CTA />
            <Footer />
          </>
        ) : (
          <>
            <Hero />
            <TrustedCompanies />
            <Attendance />
            <Leave />
            <Employee />
            <HowItWorks />
            <Showcase />
            <HRSection />
            <Blog />
            <Testimonials />
            <FAQ />
            <CTA />
            <Footer />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
