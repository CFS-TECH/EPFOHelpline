import React, { useState } from 'react';
import {
  PhoneCall,
  Mail,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Send,
  ChevronDown
} from 'lucide-react';
import { SERVICE_CATEGORIES, FAQ_DATA, PROCESS_STEPS, LEAD_CONFIG, getWhatsAppUrl, openWhatsApp } from '../data/siteData';
import { WhatsAppIcon } from '../components/FloatingLeadBar';
import PageHero from '../components/PageHero';
import logoImg from '../assets/pfhelpline-logo.png';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    audience: 'For Employees',
    service: '01. PF Withdrawal Assistance',
    uanNumber: '',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    handleSendViaWhatsApp();
  };

  const handleSendViaWhatsApp = () => {
    const url = getWhatsAppUrl({
      service: formData.service,
      name: formData.fullName,
      phone: formData.phone,
      category: formData.audience,
      details: `${formData.uanNumber ? `UAN/Est: ${formData.uanNumber} | ` : ''}${formData.details}`
    });
    openWhatsApp(url);
  };

  return (
    <div>
      {/* Unified Standard Page Hero */}
      <PageHero
        badge="07. CONNECT WITH OUR TEAM"
        title="Have a PF Requirement That"
        highlight="Needs Attention?"
        description="Connect directly with our team via WhatsApp or Direct Call to understand the appropriate process, documentation, and get immediate step-by-step guidance."
        trustPoints={[
          { icon: CheckCircle2, text: 'Instant WhatsApp Response', color: 'text-emerald-400' },
          { icon: ShieldCheck, text: 'Direct Advisor Support', color: 'text-orange-400' },
          { icon: Clock, text: 'Mon-Sat: 9:30 AM - 6:30 PM', color: 'text-blue-200' }
        ]}
      />

      {/* Main Contact & Requirement Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Info & Direct Lead Channels (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-xs space-y-5">
                <img
                  src={logoImg}
                  alt="PFHelpline"
                  className="h-12 w-auto object-contain"
                />
                <h2 className="text-2xl font-bold text-slate-900">
                  Instant WhatsApp &amp; Call Desk
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Reach our team directly on WhatsApp or by phone call for immediate requirement assessment.
                </p>

                <div className="space-y-3.5 pt-2">
                  <a
                    href={getWhatsAppUrl({ service: 'Direct WhatsApp Consultation' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                        <WhatsAppIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                          WhatsApp Support (Fastest)
                        </p>
                        <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                          {LEAD_CONFIG.phoneDisplay}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-0.5 transition-transform">
                      Chat &rarr;
                    </span>
                  </a>

                  <a
                    href={`tel:${LEAD_CONFIG.phoneDial}`}
                    className="flex items-center justify-between p-4 rounded-2xl bg-blue-50 hover:bg-blue-100/80 border border-blue-200 transition-all group"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#003B87] text-white flex items-center justify-center shrink-0">
                        <PhoneCall className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-[#003B87]">
                          Direct Call Helpline
                        </p>
                        <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                          {LEAD_CONFIG.phoneDisplay}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#003B87] group-hover:translate-x-0.5 transition-transform">
                      Call &rarr;
                    </span>
                  </a>

                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                    <Clock className="w-5 h-5 text-[#F56E0F] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Support Hours
                      </p>
                      <p className="text-sm font-bold text-slate-900 mt-0.5">
                        {LEAD_CONFIG.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Steps Mini Card */}
              <div className="bg-[#061833] text-white rounded-3xl p-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-300">
                  How Your Enquiry is Handled
                </span>
                <div className="space-y-3">
                  {PROCESS_STEPS.map((s) => (
                    <div key={s.step} className="flex items-start gap-3 text-xs sm:text-sm">
                      <span className="px-2 py-0.5 rounded bg-[#F56E0F] text-white font-bold text-xs shrink-0 mt-0.5">
                        {s.step}
                      </span>
                      <div>
                        <span className="font-bold text-white">{s.title}: </span>
                        <span className="text-slate-300">{s.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Requirement Assessment Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center space-y-5">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900">
                      Enquiry Sent to WhatsApp!
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                      Thank you, <strong>{formData.fullName}</strong>. We have forwarded your requirement for{' '}
                      <strong className="text-[#003B87]">{formData.service}</strong> to WhatsApp. Please tap <strong className="text-emerald-600">Send</strong> in WhatsApp.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={handleSendViaWhatsApp}
                        className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#1ebe57] flex items-center gap-2 cursor-pointer shadow-sm"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Click If WhatsApp Didn't Open</span>
                      </button>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-6 py-3 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-[#F56E0F]">
                        STEP 01 — REQUIREMENT ASSESSMENT FORM
                      </span>
                      <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                        Submit Your Requirement
                      </h3>
                      <p className="text-sm text-slate-500 mt-1">
                        Fill in your details below. Our team will review your requirement and connect with you shortly.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Full Name / Contact Person *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Mobile / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Who We Support Category *
                        </label>
                        <select
                          value={formData.audience}
                          onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none bg-white"
                        >
                          <option value="For Employees">Current Employee</option>
                          <option value="For Former Employees">Former Employee</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-2">
                          Select Service Requirement *
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none bg-white font-semibold text-[#003B87]"
                        >
                          {SERVICE_CATEGORIES.map((cat) => (
                            <optgroup key={cat.id} label={cat.title}>
                              {cat.services.map((s) => (
                                <option key={s.id} value={s.title}>
                                  {s.title}
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-2">
                        Describe Your PF Requirement
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Please describe your query (e.g., PF withdrawal settlement, transferring old PF balance, UAN activation, KYC mismatch, or DOB/Name correction)..."
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full p-4 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-4 px-5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#25D366] hover:bg-[#1ebe57] shadow-lg shadow-emerald-500/20 hover:opacity-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                        <span>Send Requirement via WhatsApp</span>
                      </button>
                    </div>

                    <p className="text-xs text-center text-slate-500 italic">
                      *Our team is here to help you navigate your PF-related queries.*
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center space-y-2 mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-[#003B87]">
                COMMON QUERIES
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3.5">
              {FAQ_DATA.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{item.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#F56E0F] shrink-0 transition-transform ${
                        openFaq === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
