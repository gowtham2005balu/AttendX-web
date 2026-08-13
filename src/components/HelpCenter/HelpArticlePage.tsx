import React from 'react';
import { Container } from '../Container';
import {
  ChevronRight,
  Clock,
  Eye,
  Share2,
  Link2,
  Printer,
  Info,
  AlertTriangle,
  Lightbulb,
  ThumbsUp,
  ThumbsDown,
  FileText,
  Download,
  MessageSquare,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

/* ─── Reusable Alert Component ─── */
const ArticleAlert: React.FC<{ type: 'info' | 'warning' | 'success'; title: string; children: React.ReactNode }> = ({ type, title, children }) => {
  const styles = {
    info: 'bg-indigo-50 border-indigo-200 text-indigo-800',
    warning: 'bg-amber-50 border-amber-200 text-amber-800',
    success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
  };

  const icons = {
    info: <Info size={16} className="text-indigo-600 mt-0.5 shrink-0" />,
    warning: <AlertTriangle size={16} className="text-amber-600 mt-0.5 shrink-0" />,
    success: <Lightbulb size={16} className="text-emerald-600 mt-0.5 shrink-0" />
  };

  return (
    <div className={`flex gap-3 p-4 rounded-xl border mb-8 ${styles[type]}`}>
      {icons[type]}
      <div>
        <h5 className="text-[13px] font-bold mb-1">{title}</h5>
        <p className="text-[13px] opacity-90 leading-relaxed font-medium">{children}</p>
      </div>
    </div>
  );
};

/* ─── Main Article Page ─── */
const HelpArticlePage: React.FC = () => {
  return (
    <div id="help-article" className="relative overflow-x-hidden bg-white pt-24 pb-32 font-['Plus_Jakarta_Sans',sans-serif]">

      {/* 1. Breadcrumbs */}
      <div className="border-b border-slate-100 bg-white">
        <Container>
          <div className="flex items-center gap-2 py-4 text-xs font-semibold text-slate-500 overflow-x-auto whitespace-nowrap hide-scrollbar">
            <a href="#help-center" className="text-[#5B5FEF] hover:underline">Help Center</a>
            <ChevronRight size={14} className="text-slate-300 shrink-0" />
            <a href="#" className="text-[#5B5FEF] hover:underline">Attendance Management</a>
            <ChevronRight size={14} className="text-slate-300 shrink-0" />
            <span className="text-slate-800">Setting up geo-fenced attendance tracking</span>
          </div>
        </Container>
      </div>

      <Container className="pt-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

          {/* LEFT: Main Content */}
          <article className="flex-1 max-w-3xl">
            {/* Header */}
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] leading-tight mb-6">
              Setting up geo-fenced attendance tracking for distributed teams
            </h1>
            <p className="text-slate-500 text-[17px] font-medium leading-relaxed mb-8">
              Learn how to configure location-based attendance boundaries for office and remote employees. Includes GPS radius settings, employee notifications, and remote tracking.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 border-b border-slate-100 pb-8 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#5B5FEF] flex items-center justify-center text-white font-bold text-sm shadow-sm">
                  AT
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[13px] font-bold text-slate-900">Workzi Team</span>
                    <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-bold">Author</span>
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400 mt-1">
                    <span>Updated 3 days ago</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1"><Clock size={12} /> 5 min read</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span className="flex items-center gap-1"><Eye size={12} /> 12.4K views</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {[
                  { icon: <Link2 size={14} />, label: 'Copy' },
                  { icon: <Share2 size={14} />, label: 'Share' },
                  { icon: <Printer size={14} />, label: 'Print' }
                ].map((action, i) => (
                  <button key={i} className="w-9 h-9 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-slate-50 hover:text-slate-900 transition-colors" title={action.label}>
                    {action.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="prose prose-slate prose-headings:font-bold prose-headings:text-slate-900 prose-p:font-medium prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-slate-600 prose-li:font-medium prose-li:text-[15px] prose-li:text-slate-600 max-w-none">

              <h2 className="text-2xl font-extrabold mb-4" id="overview">Overview</h2>
              <p className="mb-6">
                Geo-fenced attendance tracking ensures that employees can only log their working hours when they are physically present within an authorized location. By defining virtual perimeters (geo-fences) around your office, job sites, or remote locations, you ensure accurate and fraud-proof attendance records.
              </p>
              <p className="mb-6">
                This guide covers everything from drawing your first office zone to setting up bypass permissions for field workers and configuring offline tracking on the Workzi mobile app.
              </p>

              <ArticleAlert type="info" title="PLAN REQUIREMENT">
                Geo-fenced attendance is available on all paid plans (Starter, Growth, Business, Enterprise). Free plan users must upgrade to access location-based tracking.
              </ArticleAlert>

              <h2 className="text-2xl font-extrabold mb-4 mt-12" id="requirements">Requirements</h2>
              <p className="mb-4">Before you begin, make sure you have the following:</p>
              <ul className="list-disc pl-5 mb-8 space-y-2">
                <li>Admin access to the Workzi organization dashboard.</li>
                <li>At least one active office location added in your company profile.</li>
                <li>Employees must have the Workzi mobile app installed (iOS v2.4+ or Android v2.1+).</li>
                <li>Location services enabled on employee devices (precise location required).</li>
              </ul>

              <h2 className="text-2xl font-extrabold mb-4 mt-12" id="step-1">Step 1 — Creating office zones</h2>
              <p className="mb-4">Office zones are the physical perimeters where employees are allowed to clock in. You can add multiple zones for different branches.</p>

              <ol className="list-decimal pl-5 mb-8 space-y-4">
                <li>Go to <strong>Settings &gt; Attendance</strong> in the left sidebar and select the <strong>Locations & Zones</strong> tab.</li>
                <li>Click the <strong>Add New Zone</strong> button in the top right corner. The map interface will appear on your screen.</li>
                <li>Search for your office address in the search bar. The map will automatically center on the address. Click to drop the center pin.</li>
                <li>Use the slider to adjust the radius of your geo-fence (default is 100 meters, which is recommended for most office buildings).</li>
                <li>Click <strong>Save Zone</strong>. Your new location will now appear in the active zones list.</li>
              </ol>

              {/* Image Placeholder */}
              <div className="w-full bg-[#F8FAFC] border border-slate-200 rounded-2xl p-12 text-center mb-8 flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-500 mb-4">
                  <span className="font-black text-xl">M</span>
                </div>
                <span className="text-sm font-bold text-slate-700 block mb-1">Office Zone Configuration Map</span>
                <span className="text-[11px] font-medium text-slate-400">Interactive map interface in the settings panel</span>
              </div>

              <ArticleAlert type="warning" title="API Syncing with Zones">
                If your organization uses our REST API to sync locations from a facility management tool, ensure that the API pushes latitude, longitude, and a radius float value. Without a radius, it defaults to 50 meters.
              </ArticleAlert>

              <h2 className="text-2xl font-extrabold mb-4 mt-12" id="step-2">Step 2 — Configuring employee permissions</h2>
              <p className="mb-6">Not all employees require geo-fencing. You can configure bypass rules for remote workers, field agents, or specific departments.</p>

              {/* Custom Table Component */}
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden mb-8 text-sm">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="py-3 px-4 font-bold text-slate-700">Permission Name</th>
                      <th className="py-3 px-4 font-bold text-slate-700">Description</th>
                      <th className="py-3 px-4 font-bold text-slate-700 text-right">Default</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-4 px-4 font-semibold text-slate-900">Enforce Geo-fence</td>
                      <td className="py-4 px-4 text-slate-600 font-medium">Employee must be within a zone to clock in.</td>
                      <td className="py-4 px-4 text-right"><span className="inline-block bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Enabled</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-slate-900">Allow Remote Check-in</td>
                      <td className="py-4 px-4 text-slate-600 font-medium">Bypasses geo-fence completely. Tags check-in as 'Remote'.</td>
                      <td className="py-4 px-4 text-right"><span className="inline-block bg-slate-100 text-slate-500 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Disabled</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-slate-900">Capture GPS Location</td>
                      <td className="py-4 px-4 text-slate-600 font-medium">Saves the exact coordinates on remote check-ins.</td>
                      <td className="py-4 px-4 text-right"><span className="inline-block bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Enabled</span></td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-semibold text-slate-900">GPS Spoofing Block</td>
                      <td className="py-4 px-4 text-slate-600 font-medium">Blocks check-ins if a mock location app is detected.</td>
                      <td className="py-4 px-4 text-right"><span className="inline-block bg-emerald-50 text-emerald-600 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">Enabled</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-extrabold mb-4 mt-12" id="step-3">Step 3 — Mobile app setup for employees</h2>
              <p className="mb-4">Employees will be prompted to grant location permissions on their first check-in. Here is what they need to do:</p>

              <ul className="list-disc pl-5 mb-8 space-y-2">
                <li>Open the Workzi mobile app and log in.</li>
                <li>Tap the large <strong>Clock In</strong> button on the dashboard.</li>
                <li>When prompted by the OS (iOS or Android), tap <strong>Allow While Using App</strong>.</li>
                <li>For strict enforcement, we recommend instructing employees to select <strong>Always Allow</strong> if you utilize automated background clock-outs.</li>
              </ul>

              <ArticleAlert type="success" title="Forcing location on employee devices">
                You can enforce location services through MDM (Mobile Device Management) if you distribute corporate phones. Workzi fully supports AppConfig for pre-approving location permissions.
              </ArticleAlert>

              <h2 className="text-2xl font-extrabold mb-4 mt-12" id="api-example">API Example — Fetching attendance logs</h2>
              <p className="mb-4">If you are auditing logs via API, the returned attendance object will include a <code>location_data</code> block detailing the coordinates and zone match status.</p>

              {/* Code Block */}
              <div className="bg-[#1E293B] rounded-xl p-5 mb-10 overflow-x-auto shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-slate-400 font-mono ml-2">GET /v1/attendance/logs</span>
                </div>
                <pre className="text-[13px] font-mono leading-relaxed text-slate-300">
                  <span className="text-[#A78BFA] font-bold">GET</span>{' '}
                  <span className="text-[#34D399]">/v1/attendance/logs</span>{"\n"}
                  <span className="text-slate-500"># Query parameters</span>{"\n"}
                  <span className="text-slate-300">from</span>=<span className="text-[#34D399]">"2025-06-01"</span>{"\n"}
                  <span className="text-slate-300">to</span>=<span className="text-[#34D399]">"2025-06-30"</span>{"\n"}
                  <span className="text-slate-300">location_id</span>=<span className="text-[#34D399]">"loc_nyc_hq"</span>{"\n"}
                  <span className="text-slate-300">status</span>=<span className="text-[#34D399]">"present"</span>{"\n\n"}
                  <span className="text-slate-500"># Response</span>{"\n"}
                  <span className="text-slate-400">{"{"}</span>{"\n"}
                  {"  "}<span className="text-[#A78BFA]">"data"</span>: <span className="text-slate-400">[</span>{"\n"}
                  {"    "}<span className="text-slate-400">{"{"}</span>{"\n"}
                  {"      "}<span className="text-[#A78BFA]">"employee_id"</span>: <span className="text-[#34D399]">"emp_a1b2c3"</span>,{"\n"}
                  {"      "}<span className="text-[#A78BFA]">"check_in"</span>: <span className="text-[#34D399]">"2025-06-02T09:14:32Z"</span>,{"\n"}
                  {"      "}<span className="text-[#A78BFA]">"check_out"</span>: <span className="text-[#34D399]">"2025-06-02T18:02:10Z"</span>,{"\n"}
                  {"      "}<span className="text-[#A78BFA]">"location"</span>: <span className="text-[#34D399]">"New York HQ"</span>,{"\n"}
                  {"      "}<span className="text-[#A78BFA]">"hours_worked"</span>: <span className="text-[#F59E0B]">8.79</span>,{"\n"}
                  {"      "}<span className="text-[#A78BFA]">"geo_verified"</span>: <span className="text-[#818CF8]">true</span>{"\n"}
                  {"    "}<span className="text-slate-400">{"}"}</span>{"\n"}
                  {"  "}<span className="text-slate-400">]</span>,{"\n"}
                  {"  "}<span className="text-[#A78BFA]">"total"</span>: <span className="text-[#F59E0B]">1284</span>,{"\n"}
                  {"  "}<span className="text-[#A78BFA]">"page"</span>: <span className="text-[#F59E0B]">1</span>{"\n"}
                  <span className="text-slate-400">{"}"}</span>
                </pre>
              </div>

            </div>

            {/* Article feedback — Notion-style */}
            <div className="mt-16 w-full max-w-[648px] mx-auto min-h-[214px] bg-[#F8FAFC] border border-[#F3F4F6] rounded-[32px] p-8 flex flex-col justify-center items-center gap-[12px] text-center">
              {/* div.af-label */}
              <span className="font-['Plus_Jakarta_Sans',sans-serif] font-bold text-[11px] leading-[18px] tracking-[1.1px] uppercase text-[#9CA3AF] block">
                GIVE FEEDBACK
              </span>

              {/* div.af-title */}
              <h4 className="font-['Inter',sans-serif] font-normal text-[20px] leading-[33px] text-[#111827] block">
                Was this resource helpful?
              </h4>

              {/* div.af-buttons */}
              <div className="flex flex-row justify-center items-center gap-[12px] py-[8px] w-full">
                <button
                  aria-label="Helpful"
                  className="w-[56px] h-[56px] bg-white border border-[#E5E7EB] rounded-[18px] flex items-center justify-center text-[22px] leading-[25px] transition-all duration-200 hover:border-[#5B5FFF] hover:bg-[#EEF2FF] hover:scale-[1.05] cursor-pointer shadow-xs"
                >
                  👍
                </button>
                <button
                  aria-label="Not helpful"
                  className="w-[56px] h-[56px] bg-white border border-[#E5E7EB] rounded-[18px] flex items-center justify-center text-[22px] leading-[25px] transition-all duration-200 hover:border-rose-400 hover:bg-rose-50 hover:scale-[1.05] cursor-pointer shadow-xs"
                >
                  👎
                </button>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">Related articles</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: 'Troubleshooting geo-fence errors and warnings', time: '4 min read' },
                  { title: 'How to bypass location for specific roles', time: '2 min read' },
                  { title: 'Managing multiple office locations and shifts', time: '6 min read' },
                  { title: 'Mobile app FAQ for remote workers', time: '3 min read' }
                ].map((art, idx) => (
                  <a key={idx} href="#" className="bg-slate-50 border border-slate-100 rounded-xl p-5 hover:border-slate-300 hover:bg-white hover:shadow-sm transition-all group block">
                    <h4 className="text-sm font-bold text-slate-800 mb-2 group-hover:text-[#5B5FEF] transition-colors leading-snug">{art.title}</h4>
                    <span className="text-[11px] font-semibold text-slate-500">{art.time}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Pagination / Prev Next */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
              <a href="#" className="w-full sm:w-1/2 p-5 border border-slate-200 rounded-xl text-left hover:border-[#5B5FEF] hover:bg-indigo-50/30 transition-colors group block">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2 block flex items-center gap-1 group-hover:text-[#5B5FEF]"><ArrowLeft size={12} /> PREVIOUS</span>
                <span className="text-sm font-bold text-slate-800 group-hover:text-[#5B5FEF]">Setting up your first API integration</span>
              </a>
              <a href="#" className="w-full sm:w-1/2 p-5 border border-slate-200 rounded-xl text-right hover:border-[#5B5FEF] hover:bg-indigo-50/30 transition-colors group block">
                <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-2 block flex items-center justify-end gap-1 group-hover:text-[#5B5FEF]">NEXT <ArrowRight size={12} /></span>
                <span className="text-sm font-bold text-slate-800 group-hover:text-[#5B5FEF]">Troubleshooting geo-fence errors and warnings</span>
              </a>
            </div>

          </article>

          {/* RIGHT: Sidebar */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="sticky top-[140px]">

              {/* Table of Contents */}
              <div className="mb-10">
                <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                  IN THIS ARTICLE
                </h4>
                <nav className="space-y-1">
                  {[
                    { label: 'Overview', id: '#overview', active: true },
                    { label: 'Requirements', id: '#requirements', active: false },
                    { label: 'Step 1 — Creating office zones', id: '#step-1', active: false },
                    { label: 'Step 2 — Permissions', id: '#step-2', active: false },
                    { label: 'Step 3 — Mobile app setup', id: '#step-3', active: false },
                    { label: 'API Example', id: '#api-example', active: false }
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.id}
                      className={`block py-1.5 text-[13px] font-bold border-l-2 pl-4 transition-colors ${item.active
                          ? 'border-[#5B5FEF] text-[#5B5FEF]'
                          : 'border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300'
                        }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Actions */}
              <div>
                <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                  ACTIONS
                </h4>
                <ul className="space-y-2">
                  {[
                    { label: 'Copy link', icon: <Link2 size={14} /> },
                    { label: 'Print article', icon: <Printer size={14} /> },
                    { label: 'Export PDF', icon: <Download size={14} /> },
                    { label: 'Send feedback', icon: <MessageSquare size={14} /> },
                  ].map((action, idx) => (
                    <li key={idx}>
                      <button className="w-full flex items-center gap-3 py-2 text-[13px] font-bold text-slate-600 hover:text-[#5B5FEF] transition-colors group cursor-pointer text-left">
                        <span className="text-slate-400 group-hover:text-[#5B5FEF] transition-colors">{action.icon}</span>
                        {action.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Need more help? */}
              <div className="mt-10 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-indigo-500 mx-auto mb-3 shadow-sm">
                  <MessageSquare size={16} />
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">Need more help?</h4>
                <p className="text-[11px] font-medium text-slate-500 mb-4 leading-relaxed">
                  Our support team is available 24/7 to help you configure zones.
                </p>
                <button className="w-full bg-[#5B5FEF] hover:bg-[#4F46E5] text-white text-xs font-bold py-2.5 rounded-xl transition-colors cursor-pointer shadow-sm">
                  Contact Support
                </button>
              </div>

            </div>
          </aside>

        </div>
      </Container>
    </div>
  );
};

export default HelpArticlePage;
