import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '../Container';
import { ChevronRight, ArrowRight, Share2, Bookmark, CheckCircle, Users, Activity, Clock, Zap, MapPin, Briefcase, Star, Check } from 'lucide-react';

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

const JobDetailsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-24 font-['DM_Sans',sans-serif]">
      {/* ─── HEADER ─── */}
      <div className="bg-white border-b border-slate-200 pt-32 pb-12">
        <Container className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <FadeUp className="flex items-center gap-2 text-[12px] font-bold text-slate-500 mb-6">
            <a href="#careers" className="hover:text-slate-900 transition-colors">Careers</a>
            <ChevronRight size={14} className="text-slate-400" />
            <a href="#open-roles-page" className="hover:text-slate-900 transition-colors">Engineering</a>
            <ChevronRight size={14} className="text-slate-400" />
            <span className="text-slate-900">Senior Backend Engineer</span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-6 text-[11px] font-bold">
              <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200">Engineering</span>
              <span className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-full border border-emerald-100 flex items-center gap-1.5">
                <MapPin size={12} /> Remote - India
              </span>
              <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200">Full-time</span>
              <span className="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full border border-slate-200">₹28–40L/yr</span>
              <span className="bg-blue-50 text-[#5B5FEF] px-3 py-1.5 rounded-full border border-blue-100">Posted 2d ago</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#0F172A] tracking-tight leading-tight mb-8">
              Senior Backend Engineer — Platform Infrastructure
            </h1>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="#apply-page" className="bg-[#5B5FEF] hover:bg-[#4F46E5] text-white text-[15px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md flex items-center gap-2">
                Apply for this role <ArrowRight size={16} />
              </a>
              <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-[14px] font-bold px-6 py-3.5 rounded-full transition-all flex items-center gap-2">
                <Share2 size={16} className="text-slate-400" /> Share
              </button>
              <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 text-[14px] font-bold px-6 py-3.5 rounded-full transition-all flex items-center gap-2">
                <Bookmark size={16} className="text-slate-400" /> Save Role
              </button>
            </div>
          </FadeUp>
        </Container>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <Container className="max-w-6xl mx-auto pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column (Content) */}
          <div className="lg:col-span-8 space-y-12 text-[15px] text-slate-600 leading-relaxed font-medium">
            
            <FadeUp delay={0.2}>
              <h2 className="text-[22px] font-semibold text-slate-900 mb-4">About Workzi</h2>
              <p className="mb-4">
                Workzi is building the operating system for the modern workforce. Our platform seamlessly manages attendance, leave, payroll integration, and people operations for over 10,000 companies. By automating the complex, administrative burdens of HR, we're giving teams their time back to focus on their people.
              </p>
              <p>
                Backed by top-tier VCs, our team is growing rapidly. We believe that great software can genuinely improve how people experience work — and that thoughtful design and intelligent automation can transform organizations globally.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <h2 className="text-[22px] font-semibold text-slate-900 mb-4">Role Overview</h2>
              <p className="mb-6">
                We are looking for a <strong className="text-slate-900">Senior Backend Engineer</strong> to join our Platform Infrastructure team. You will be responsible for building and scaling the core systems that handle millions of attendance events, geospatial data, and payroll syncs across diverse geographical regions.
              </p>
              <p>
                This is a high-impact role. You will work closely with the engineering lead, product team, and other engineers to architect and deploy resilient, high-performance services that are foundational to the quality of the Workzi experience for users globally.
              </p>
              
              {/* Key Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-black text-slate-900 mb-1">1M+</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Attendance events / day</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-black text-slate-900 mb-1">10K+</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Companies served by our platform</div>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-black text-slate-900 mb-1">99.9%</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Uptime SLA commitment</div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.4}>
              <h2 className="text-[22px] font-semibold text-slate-900 mb-4">Responsibilities</h2>
              <ul className="space-y-3 list-disc pl-5 marker:text-slate-300">
                <li>Design, build, and scale highly available, distributed microservices using Node.js and Go.</li>
                <li>Lead the technical architecture of our API gateway and core data pipeline infrastructure.</li>
                <li>Optimize database queries (PostgreSQL) and implement robust caching strategies (Redis) for high-traffic endpoints.</li>
                <li>Mentor junior engineers through code reviews, technical design discussions, and pair programming.</li>
                <li>Collaborate with Product and Design to translate complex requirements into scalable backend solutions.</li>
                <li>Continuously improve system observability, deployment pipelines (CI/CD), and infrastructure monitoring (Datadog/AWS).</li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.5}>
              <h2 className="text-[22px] font-semibold text-slate-900 mb-4">Requirements</h2>
              <ul className="space-y-3 list-disc pl-5 marker:text-slate-300">
                <li>5+ years of software engineering experience with a focus on backend development.</li>
                <li>Deep expertise in Python or Node.js in a high-growth startup environment.</li>
                <li>Strong experience with PostgreSQL, Redis, and event-driven architectures (Kafka, RabbitMQ).</li>
                <li>Proven track record of designing, building, and maintaining scalable microservices deployed on AWS/GCP.</li>
                <li>Experience with API design patterns, security best practices (OAuth2, JWT), and rate limiting.</li>
                <li>Strong communication skills and a bias for action in a remote-first, collaborative environment.</li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.6}>
              <h2 className="text-[22px] font-semibold text-slate-900 mb-4">Preferred Qualifications</h2>
              <ul className="space-y-3 list-disc pl-5 marker:text-slate-300 mb-8">
                <li>Experience working with HR, payroll, or workforce management domains.</li>
                <li>Contributions to open-source projects or technical writing.</li>
                <li>Experience working with B2B SaaS applications handling complex permissions and tenancy.</li>
                <li>Familiarity with Infrastructure as Code (Terraform) and Kubernetes.</li>
              </ul>
              
              {/* Alert Box */}
              <div className="bg-[#FEF3C7] border border-[#FDE68A] rounded-2xl p-5 flex gap-4">
                <div className="text-[#D97706] shrink-0 mt-0.5">
                  <CheckCircle size={20} />
                </div>
                <p className="text-[13px] text-slate-700 font-medium">
                  Workzi is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees, regardless of race, religion, gender, sexual orientation, or background.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.7}>
              <h2 className="text-[22px] font-semibold text-slate-900 mb-4">Your Team</h2>
              <p className="mb-6">
                You'll join the Platform Engineering team, a tight-knit, high-velocity group distributed across India, Singapore, and the UK. The team values asynchronous communication, rigorous code reviews, and taking pride in building resilient systems.
              </p>
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:items-center">
                <div className="flex-1 shrink-0">
                  <div className="flex -space-x-2 mb-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-500 text-white flex items-center justify-center font-bold text-xs">SR</div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">AJ</div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-500 text-white flex items-center justify-center font-bold text-xs">MK</div>
                  </div>
                  <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">You report to</p>
                  <p className="text-[14px] font-bold text-slate-900">Sita Ramachandran</p>
                  <p className="text-[12px] text-slate-500">VP of Engineering</p>
                </div>
                <div className="w-full md:w-[1px] h-[1px] md:h-20 bg-slate-200 shrink-0" />
                <div>
                  <p className="text-[14px] italic font-medium text-slate-600 mb-3">
                    "We never take stability lightly. Our product is literally the way people get paid and track their time. The problems here are deeply challenging and incredibly rewarding."
                  </p>
                  <p className="text-[12px] font-bold text-slate-900">— Sita Ramachandran, VP of Engineering</p>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.8}>
              <h2 className="text-[22px] font-semibold text-slate-900 mb-4">Compensation &amp; Benefits</h2>
              <ul className="space-y-3 list-disc pl-5 marker:text-slate-300">
                <li><strong>Salary:</strong> ₹28 - 40L/year based on experience.</li>
                <li><strong>Equity:</strong> Meaningful ESOPs for all full-time employees.</li>
                <li><strong>Health:</strong> Medical, dental, and vision for you and dependents.</li>
                <li><strong>Learning:</strong> ₹60,000/year learning budget — no approval needed.</li>
                <li><strong>Equipment:</strong> ₹40,000 home office setup allowance.</li>
                <li><strong>PTO:</strong> Unlimited Paid Time Off with a minimum recommended 3 weeks.</li>
                <li><strong>Wellness:</strong> 5 dedicated paid wellness days per year.</li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.9}>
              <h2 className="text-[22px] font-semibold text-slate-900 mb-4">What Success Looks Like at 6 Months</h2>
              <ul className="space-y-3 list-disc pl-5 marker:text-slate-300 mb-12">
                <li>You've fully owned the deployment of a new microservice that handles core attendance event ingestion.</li>
                <li>You've optimized 3-4 legacy database queries, reducing average API response times on the platform dashboard by 30%.</li>
                <li>You successfully mentored a mid-level engineer, helping them level up their architectural decision-making.</li>
                <li>You've established yourself as a key technical voice in product planning sessions.</li>
              </ul>

              {/* FAQ Box */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
                <h3 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mb-6">FREQUENTLY ASKED</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[14px] font-bold text-slate-900 mb-1">Is this role fully remote?</h4>
                    <p className="text-[13px] text-slate-500">Yes. This role is fully remote for candidates based in India. We have an optional hub in Chennai if you prefer hybrid work, but it's never required.</p>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-slate-900 mb-1">What are the working hours?</h4>
                    <p className="text-[13px] text-slate-500">We operate asynchronously. Core overlap hours are 10am - 3pm IST, but outside of that, you manage your own schedule.</p>
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-slate-900 mb-1">How long does the interview process take?</h4>
                    <p className="text-[13px] text-slate-500">We typically complete the entire process in 2 to 3 weeks. We value your time and move quickly once we start.</p>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
          
          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-4">
            <FadeUp delay={0.4} className="sticky top-24">
              
              {/* Apply Box */}
              <div className="bg-white border border-slate-200 rounded-[28px] overflow-hidden shadow-sm mb-6">
                {/* Blue Header Banner */}
                <div className="bg-[#5B5FEF] px-6 py-5">
                  <h3 className="text-[16px] font-bold text-white">Apply for this role</h3>
                </div>

                <div className="p-6">
                  {/* List of Details */}
                  <div className="divide-y divide-slate-100 space-y-4">
                    {[
                      { icon: <MapPin size={16} />, label: "Location", value: "Remote · India" },
                      { icon: <Briefcase size={16} />, label: "Employment Type", value: "Full-time" },
                      { icon: <Clock size={16} />, label: "Experience", value: "5+ years" },
                      { icon: <Zap size={16} />, label: "Compensation", value: "₹28–40L/yr + equity" },
                      { icon: <Star size={16} />, label: "Department", value: "Platform Engineering" }
                    ].map((item, idx) => (
                      <div key={idx} className={`flex items-start gap-4 ${idx > 0 ? "pt-4" : ""}`}>
                        <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider leading-none mb-1.5">{item.label}</p>
                          <p className="text-[14px] font-bold text-slate-800 leading-snug">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <a href="#apply-page" className="w-full bg-[#5B5FEF] hover:bg-[#4F46E5] text-white text-[15px] font-bold py-4 rounded-2xl transition-all shadow-md text-center block mt-8 flex items-center justify-center gap-1.5">
                    Apply Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Hiring Process */}
              <div className="bg-[#F8FAFC]/65 border border-slate-200 rounded-[28px] p-6 shadow-xs">
                <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 mb-6">Hiring Timeline</h3>
                
                <div className="divide-y divide-slate-100 space-y-4">
                  {[
                    { number: 1, name: "Application", sub: "Open now", active: true },
                    { number: 2, name: "Recruiter Screen", active: false },
                    { number: 3, name: "Technical Assessment", active: false },
                    { number: 4, name: "Team Interview", active: false },
                    { number: 5, name: "Offer", active: false }
                  ].map((step, idx) => (
                    <div key={idx} className={`flex items-center gap-4 ${idx > 0 ? "pt-4" : ""}`}>
                      {step.active ? (
                        <div className="w-8 h-8 rounded-full bg-[#10B981] flex items-center justify-center text-white shrink-0">
                          <Check size={16} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-[#1E293B] text-white flex items-center justify-center font-bold text-[13px] shrink-0">
                          {step.number}
                        </div>
                      )}
                      <div>
                        <p className="text-[14px] font-bold text-slate-800 leading-tight">{step.name}</p>
                        {step.sub && (
                          <p className="text-[11px] font-medium text-slate-400 mt-0.5">{step.sub}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </FadeUp>
          </div>

        </div>
      </Container>

      {/* ─── RELATED OPPORTUNITIES ─── */}
      <div className="border-t border-slate-200 mt-20 pt-20">
        <Container className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-2xl font-semibold text-slate-900 mb-2">Related Opportunities</h2>
            <p className="text-[14px] text-slate-500 mb-8">Other roles you might be interested in.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "AI Research Engineer — Workforce Prediction Models", dept: "AI & Analytics", loc: "Remote" },
                { title: "Product Designer — Design Systems", dept: "Design", loc: "Remote" },
                { title: "Staff Engineer — Mobile (React Native)", dept: "Engineering", loc: "Bangalore" },
              ].map((role, idx) => (
                <a key={idx} href="#" className="block bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#5B5FEF] hover:shadow-md transition-all group">
                  <div className="text-[10px] font-bold text-[#5B5FEF] uppercase tracking-wider mb-2">
                    {role.dept}
                  </div>
                  <h4 className="text-[15px] font-bold text-slate-900 group-hover:text-[#5B5FEF] transition-colors mb-4 line-clamp-2 leading-snug">
                    {role.title}
                  </h4>
                  <div className="flex items-center justify-between text-[12px] font-medium text-slate-500">
                    <span>{role.loc}</span>
                    <span>View role &rarr;</span>
                  </div>
                </a>
              ))}
            </div>
          </FadeUp>
        </Container>
      </div>

    </div>
  );
};

export default JobDetailsPage;
