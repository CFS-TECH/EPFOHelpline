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
      <section className="py-8 sm:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#F56E0F]">
                  OUR PURPOSE &amp; METHODOLOGY
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                  Clarity in Every PF Process.{' '}
                  <span className="text-[#003B87]">Confidence in Every Step.</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2.5">
                  We help individuals understand their PF-related requirements, prepare for applicable procedures and navigate the relevant service processes with greater clarity.
                </p>
                <p className="hidden sm:block text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                  Whether an employee is consolidating multiple PF member accounts, updating KYC and profile records, or preparing for final PF settlement, our team brings structured discipline to every step.
                </p>

                {/* 3 Pillars: 3-column compact grid */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 mt-4 space-y-2.5">
                  <p className="text-xs sm:text-sm font-bold text-[#003B87] uppercase tracking-wider">
                    Our Core Pillars
                  </p>
                  <div className="grid grid-cols-3 gap-2 sm:gap-3">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/70 text-center">
                      <p className="font-bold text-slate-900 text-xs sm:text-sm">Professional</p>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 hidden sm:block">
                        Structured case assessment.
                      </p>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/70 text-center">
                      <p className="font-bold text-slate-900 text-xs sm:text-sm">Transparent</p>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 hidden sm:block">
                        Clear SOP procedures.
                      </p>
                    </div>
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white border border-slate-200/70 text-center">
                      <p className="font-bold text-slate-900 text-xs sm:text-sm">Process-Driven</p>
                      <p className="text-[10px] sm:text-xs text-slate-500 mt-0.5 hidden sm:block">
                        Step-by-step resolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: The PFHelpline Difference */}
            <div className="lg:col-span-6">
              <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-900 text-white space-y-4 sm:space-y-5 shadow-xl">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-orange-400">
                    THE PFHELPLINE DIFFERENCE
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold mt-1">
                    Built Around Process Clarity and Direct Support.
                  </h3>
                </div>

                <div className="space-y-2.5 sm:space-y-3">
                  {WHY_PFHELPLINE_DATA.map((item) => (
                    <div
                      key={item.title}
                      className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-[#F56E0F]/20 text-orange-300 shrink-0 mt-0.5">
                        <ServiceIcon name={item.iconName} className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-xs sm:text-sm">{item.title}</h4>
                        <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FOUNDER & LEADERSHIP PROFILE — Sidarth Kumar
      ====================================================================== */}
      <section className="py-8 sm:py-14 lg:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 via-[#002659] to-[#001738] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
            {/* Subtle Accent Glow */}
            <div className="absolute inset-0 bg-hero-grid opacity-15 pointer-events-none" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
              {/* Founder Image */}
              <div className="lg:col-span-5 text-center lg:text-left">
                <div className="relative inline-block max-w-[220px] sm:max-w-xs mx-auto">
                  <div className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 sm:border-4 border-white/20 shadow-xl aspect-[4/5] bg-slate-800">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
                      alt="Sidarth Kumar - Founder, PFHelpline"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02152e]/85 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Clean Experience Badge */}
                  <div className="absolute -bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md py-1.5 px-3 rounded-xl shadow-lg text-slate-900 border border-slate-100 flex items-center justify-between">
                    <div className="text-left">
                      <p className="text-[9px] font-bold uppercase tracking-wider text-[#F56E0F]">
                        Leadership
                      </p>
                      <p className="text-xs font-extrabold text-slate-900 leading-tight">
                        Sidarth Kumar
                      </p>
                    </div>
                    <span className="px-2 py-0.5 rounded-lg bg-orange-100 text-[#F56E0F] font-extrabold text-[11px]">
                      8+ Yrs Exp
                    </span>
                  </div>
                </div>
              </div>

              {/* Founder Details */}
              <div className="lg:col-span-7 space-y-3 sm:space-y-4 pt-3 lg:pt-0">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 border border-white/15 text-orange-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  <span>FOUNDER &amp; MANAGING DIRECTOR</span>
                </div>

                <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                  Sidarth Kumar
                </h2>

                <p className="text-xs sm:text-sm text-blue-200 font-semibold">
                  Founder &amp; Principal Advisor at PFHelpline
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  With over 8 years of dedicated experience in Provident Fund compliances, EPFO SOP procedures, and employee grievance redressal, Sidarth Kumar established PFHelpline to bring transparency, process speed, and structured support to Indian employees.
                </p>

                <p className="hidden sm:block text-xs sm:text-sm text-slate-300 leading-relaxed">
                  His vision is to ensure that no salaried employee or pensioner struggles with bureaucratic delays or incorrect KYC rejections. Every consultation follows strict procedural ethics, accuracy, and dedicated 1-on-1 support.
                </p>

                {/* 3 Key Stats */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1">
                  <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-base sm:text-xl font-extrabold text-[#F56E0F]">2,500+</p>
                    <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5">PF Cases Guided</p>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-base sm:text-xl font-extrabold text-emerald-400">100%</p>
                    <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5">SOP Adherence</p>
                  </div>
                  <div className="p-2 sm:p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <p className="text-base sm:text-xl font-extrabold text-blue-400">4.9/5</p>
                    <p className="text-[10px] sm:text-xs text-slate-300 mt-0.5">Client Rating</p>
                  </div>
                </div>

                {/* Action Buttons: 2 balanced buttons */}
                <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2 pt-2">
                  <a
                    href={getWhatsAppUrl({ service: 'Consultation with Founder Sidarth Kumar' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs sm:text-sm font-bold shadow-md transition-all text-center"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">WhatsApp Sidarth</span>
                  </a>

                  <a
                    href={`tel:${LEAD_CONFIG.phoneDial}`}
                    className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold transition-all text-center"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="truncate">Call: 6398149627</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="py-8 sm:py-14 lg:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-2 mb-6 sm:mb-12">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#003B87]">
              OUR WORKING PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900">
              From Initial Enquiry to Process Guidance.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              A transparent 4-stage workflow designed for clarity and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-[#003B87] text-white font-extrabold text-xs mb-3">
                    {step.step}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>
                <p className="text-[11px] text-slate-500 pt-2.5 border-t border-slate-200/70">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <button
              onClick={() => onOpenEnquiry('About Page — Discuss Requirement')}
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white orange-gradient shadow-md hover:opacity-95 transition-all cursor-pointer"
            >
              <span>Discuss Your Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
