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

const getBaseView = (hash: string): string => {
  if (hash === '#why-attendx' || hash === '#why-workzi') return 'why-attendx';
  if (hash === '#attendx-vs-manual-hr' || hash === '#workzi-vs-manual-hr') return 'attendx-vs-manual-hr';
  if (hash === '#attendx-vs-traditional-hrms' || hash === '#workzi-vs-traditional-hrms') return 'attendx-vs-traditional-hrms';
  if (hash === '#for-enterprise') return 'for-enterprise';
  if (hash === '#for-small-business') return 'for-small-business';
  if (hash === '#scale-with-attendx' || hash === '#scale-with-workzi') return 'scale-with-attendx';
  if (hash === '#trust-and-security') return 'trust-and-security';
  if (hash === '#features') return 'features';
  if (hash === '#attendance-management' || hash === '#track-attendance' || hash.startsWith('#feat-')) return 'attendance-management';
  if (hash === '#leave-management' || hash === '#simplify-leave') return 'leave-management';
  if (hash === '#shift-management') return 'shift-management';
  if (hash === '#task-management') return 'task-management';
  if (hash === '#employee-self-service') return 'employee-self-service';
  if (hash === '#organization-management') return 'organization-management';
  if (hash === '#ai-assistant') return 'ai-assistant';
  if (hash === '#security-access-control') return 'security-access-control';
  if (hash === '#mobile-experience') return 'mobile-experience';
  if (hash === '#integrations' || hash === '#integrations-feature' || hash === '#hrms-integrations') return 'integrations';
  if (hash === '#solutions') return 'solutions';
  if (hash === '#hr-solutions' || hash === '#human-resources') return 'hr-solutions';
  if (hash === '#customer-service-solutions' || hash === '#customer-service') return 'customer-service-solutions';
  if (hash === '#engineering-solutions' || hash === '#engineering') return 'engineering-solutions';
  if (hash === '#it-solutions' || hash === '#it') return 'it-solutions';
  if (hash === '#sales-solutions' || hash === '#sales') return 'sales-solutions';
  if (hash === '#project-management-solutions' || hash === '#project-management') return 'project-management-solutions';
  if (hash === '#marketing-solutions' || hash === '#marketing') return 'marketing-solutions';
  if (hash === '#manufacturing-auto-energy-solutions' || hash === '#manufacturing-auto-energy' || hash === '#manufacturing') return 'manufacturing-auto-energy-solutions';
  if (hash === '#technology-solutions' || hash === '#technology') return 'technology-solutions';
  if (hash === '#media-solutions' || hash === '#media') return 'media-solutions';
  if (hash === '#small-business-solutions' || hash === '#small-business') return 'small-business-solutions';
  if (hash === '#financial-services-solutions' || hash === '#financial-services') return 'financial-services-solutions';
  if (hash === '#retail-solutions' || hash === '#retail') return 'retail-solutions';
  if (hash === '#health-life-sciences-solutions' || hash === '#health-life-sciences' || hash === '#healthcare') return 'healthcare-solutions';
  if (hash === '#education-solutions' || hash === '#education-solutions-page' || hash === '#education-industry' || hash === '#education') return 'education-solutions';
  if (hash === '#education-2') return 'education-2';
  if (hash === '#faq') return 'faq';
  if (hash === '#employee-app') return 'employee-app';
  if (hash === '#hr-manager') return 'hr-manager';
  if (hash === '#pricing') return 'pricing';
  if (hash === '#help-center') return 'help-center';
  if (hash === '#help-article') return 'help-article';
  if (hash === '#contact-support' || hash === '#contact') return 'contact-support';
  if (hash === '#about-us' || hash === '#about') return 'about-us';
  if (hash === '#cookie-settings' || hash === '#cookies') return 'cookie-settings';
  if (hash === '#terms-of-service' || hash === '#terms') return 'terms-of-service';
  if (hash === '#privacy-policy' || hash === '#privacy') return 'privacy-policy';
  if (hash === '#careers' || hash === '#our-story') return 'careers';
  if (hash === '#open-roles-page' || hash === '#open-roles' || hash === '#explore-open-roles' || hash === '#open-positions' || hash === '#jobs') return 'open-roles-page';
  if (hash === '#job-details' || hash.startsWith('#job-')) return 'job-details';
  if (hash === '#apply-page' || hash === '#apply' || hash === '#apply-now') return 'apply-page';
  if (hash === '#application-success') return 'application-success';
  if (hash === '#blog' || hash === '#all-stories' || hash === '#articles') return 'blog';
  if (hash === '#blog-article' || [
    '#introduction',
    '#state-of-hr',
    '#predictive-scheduling',
    '#anomaly-detection',
    '#impact-metrics',
    '#hr-teams',
    '#key-takeaways'
  ].includes(hash)) return 'blog-article';
  return 'home';
};

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    // Initial scroll to top on refresh or load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash || '#home';
      setCurrentHash(newHash);
      window.scrollTo(0, 0);
    };

    const handleGlobalClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href]');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
          setCurrentHash(href);
          window.scrollTo(0, 0);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    document.addEventListener('click', handleGlobalClick);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      document.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const currentView = getBaseView(currentHash);

  // ── Dynamic SEO: update <title> + <meta name="description"> on every navigation ──
  useSEO(currentView, currentHash);

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
  const isLeaveManagementView = currentView === 'leave-management';
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
  const isAboutUsView = currentView === 'about-us' || currentHash === '#about-us' || currentHash === '#about';
  const isCookieSettingsView = currentView === 'cookie-settings' || currentHash === '#cookie-settings' || currentHash === '#cookies';
  const isTermsOfServiceView = currentView === 'terms-of-service' || currentHash === '#terms-of-service' || currentHash === '#terms';
  const isPrivacyPolicyView = currentView === 'privacy-policy' || currentHash === '#privacy-policy' || currentHash === '#privacy';

  return (
    <div className="relative overflow-x-clip min-h-screen flex flex-col bg-white">
      <Navbar />
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
        ) : isLeaveManagementView ? (
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
