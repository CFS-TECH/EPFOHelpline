import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { WHY_PFHELPLINE_DATA, PROCESS_STEPS, PHOTOS } from '../data/siteData';
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
