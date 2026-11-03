import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  PhoneCall
} from 'lucide-react';
import { WHY_PFHELPLINE_DATA, PROCESS_STEPS, PHOTOS, LEAD_CONFIG, getWhatsAppUrl } from '../data/siteData';
import ServiceIcon from '../components/ServiceIcon';
import Reveal from '../components/Reveal';
import PageHero from '../components/PageHero';
import { WhatsAppIcon } from '../components/FloatingLeadBar';

export default function About({ onOpenEnquiry }) {
  return (
    <div>
      {/* Unified Standard Page Hero */}
      <PageHero
        badge="ABOUT PFHELPLINE"
        title="A More Structured Approach to"
        highlight="PF Assistance"
        description="Managing Provident Fund requirements involves multiple procedures, documentation and verification steps. PFHelpline is focused on making these processes easier through organised assistance and professional customer support."
        trustPoints={[
          { icon: CheckCircle2, text: 'Transparent & Process-Driven', color: 'text-emerald-400' },
          { icon: ShieldCheck, text: 'Statutory SOP Compliant', color: 'text-orange-400' },
          { icon: WhatsAppIcon, text: '1-on-1 Dedicated Support', color: 'text-emerald-400' }
        ]}
      />

      {/* Mission & Approach Section */}
      <section className="py-16 lg:py-22 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-widest text-[#F56E0F]">
                  OUR PURPOSE &amp; METHODOLOGY
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-2">
                  Clarity in Every PF Process. Confidence in Every Step.
                </h2>
                <p className="text-slate-600 leading-relaxed mt-4">
                  We help individuals understand their PF-related requirements, prepare for applicable procedures and navigate the relevant service processes with greater clarity.
                </p>
                <p className="text-slate-600 leading-relaxed mt-3">
                  Whether an employee is consolidating multiple PF member accounts, updating KYC and profile records, or a former employee is preparing for final PF settlement, our team brings clarity and discipline to every step.
                </p>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3 mt-6">
                  <p className="text-sm font-bold text-[#003B87] uppercase tracking-wider">
                    Our Approach: Professional. Transparent. Process-Driven.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/70">
                      <p className="font-bold text-slate-900 text-sm">Professional</p>
                      <p className="text-xs text-slate-500 mt-1">
                        Structured assessment of every case and document requirement.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/70">
                      <p className="font-bold text-slate-900 text-sm">Transparent</p>
                      <p className="text-xs text-slate-500 mt-1">
                        Honest guidance on procedures, eligibility, and next steps.
                      </p>
                    </div>
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200/70">
                      <p className="font-bold text-slate-900 text-sm">Process-Driven</p>
                      <p className="text-xs text-slate-500 mt-1">
                        Methodical four-stage workflow from enquiry to status updates.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: The PFHelpline Difference (Section 04) */}
            <div className="lg:col-span-6 space-y-5">
              <Reveal delay={120}>
                <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                      THE PFHELPLINE DIFFERENCE
                    </span>
                    <h3 className="text-2xl font-bold mt-1">
                      Built Around Process Clarity and Professional Support.
                    </h3>
                    <p className="text-sm text-slate-300 mt-2">
                      We believe effective PF assistance begins with understanding the requirement and following the appropriate process.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {WHY_PFHELPLINE_DATA.map((item) => (
                      <div
                        key={item.title}
                        className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4"
                      >
                        <div className="p-2.5 rounded-xl bg-[#F56E0F]/20 text-orange-300 shrink-0 mt-0.5">
                          <ServiceIcon name={item.iconName} className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-base">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOUNDER & LEADERSHIP PROFILE — Sidarth Kumar
      ====================================================================== */}
      <section className="py-16 lg:py-22 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-[#002659] to-[#001738] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            {/* Background Accent Grids */}
            <div className="absolute inset-0 bg-hero-grid opacity-15 pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
              {/* Founder Image & Trust Card */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-sm">
                  <div className="rounded-3xl overflow-hidden border-4 border-white/20 shadow-2xl aspect-[4/5] bg-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                      alt="Sidarth Kumar - Founder, PFHelpline"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02152e]/85 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Floating Experience Badge */}
                  <div className="absolute -bottom-4 left-6 right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl text-slate-900 border border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#F56E0F]">
                        Leadership
                      </p>
                      <p className="text-sm font-extrabold text-slate-900">
                        Sidarth Kumar
                      </p>
                      <p className="text-[11px] text-slate-500 font-semibold">
                        Founder &amp; Principal Advisor
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F56E0F] flex items-center justify-center font-extrabold text-xs shrink-0">
                      8+ Yrs
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder Story & Credentials */}
              <div className="lg:col-span-7 space-y-4 pt-4 lg:pt-0">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-orange-300 text-xs font-bold uppercase tracking-wider">
                  <span>FOUNDER &amp; MANAGING DIRECTOR</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                  Sidarth Kumar
                </h2>

                <p className="text-sm sm:text-base text-blue-100 font-medium">
                  Founder &amp; Lead Consultant at PFHelpline
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  With over 8 years of dedicated experience in Provident Fund compliances, EPFO SOP procedures, and employee grievance redressal, Sidarth Kumar established PFHelpline to bring transparency, process speed, and structured support to Indian employees.
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  His vision is to ensure that no salaried employee or pensioner has to struggle with bureaucratic delays, incorrect KYC rejections, or complicated EPFO documentation. Every consultation under his guidance follows strict procedural ethics, accuracy, and dedicated personal support.
                </p>

                {/* 3 Key Stats / Pillars */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-lg sm:text-xl font-extrabold text-[#F56E0F]">2,500+</p>
                    <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5">PF Cases Guided</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-lg sm:text-xl font-extrabold text-emerald-400">100%</p>
                    <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5">SOP Adherence</p>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <p className="text-lg sm:text-xl font-extrabold text-blue-400">4.9/5</p>
                    <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5">Client Rating</p>
                  </div>
                </div>

                {/* Direct Action to Consult with Sidarth */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a
                    href={getWhatsAppUrl({ service: 'Consultation with Founder Sidarth Kumar' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs sm:text-sm font-bold shadow-md transition-all"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Connect with Sidarth on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${LEAD_CONFIG.phoneDial}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold transition-all"
                  >
                    <PhoneCall className="w-4 h-4" />
                    <span>Call Helpline: {LEAD_CONFIG.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section (Section 05) */}
      <section className="py-16 lg:py-22 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#003B87]">
                OUR WORKING PROCESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                From Initial Enquiry to Process Guidance.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step, idx) => (
              <Reveal key={step.step} delay={idx * 90}>
                <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-xs card-hover flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block px-3.5 py-1.5 rounded-xl bg-[#003B87] text-white font-extrabold text-sm mb-5">
                      {step.step}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.step} &mdash; {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                  </div>
                  <p className="text-xs text-slate-500 pt-3 border-t border-slate-100">
                    {step.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onOpenEnquiry('About Page — Discuss Requirement')}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white orange-gradient shadow-lg shadow-orange-500/20 hover:opacity-95 transition-all cursor-pointer"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
