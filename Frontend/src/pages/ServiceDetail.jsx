import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  PhoneCall,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  User,
  Phone,
  ArrowRight,
  ChevronRight,
  Clock,
  HelpCircle
} from 'lucide-react';
import { ALL_SERVICES_LIST, SERVICE_CATEGORIES, LEAD_CONFIG, getWhatsAppUrl, openWhatsApp } from '../data/siteData';
import ServiceIcon from '../components/ServiceIcon';
import { WhatsAppIcon } from '../components/FloatingLeadBar';
import PageHero from '../components/PageHero';
import iconLogo from '../assets/icon-logo.png';

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const [form, setForm] = useState({ name: '', phone: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  // Find the requested service
  const service = ALL_SERVICES_LIST.find(
    (s) => s.id.toLowerCase() === (serviceId || '').toLowerCase()
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSubmitted(false);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="py-20 text-center px-4 bg-slate-50 min-h-[60vh] flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-orange-100 text-[#F56E0F] flex items-center justify-center mb-4">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
          Service Page Not Found
        </h1>
        <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
          The service you are looking for may have been moved or updated. Please browse our complete directory.
        </p>
        <Link
          to="/services"
          className="px-6 py-3 rounded-xl font-bold text-white bg-[#003B87] hover:bg-[#00285E] transition-all"
        >
          View All Services &rarr;
        </Link>
      </div>
    );
  }

  // Find related services in the same category
  const categoryObj = SERVICE_CATEGORIES.find((c) => c.id === service.categoryId);
  const relatedServices = categoryObj
    ? categoryObj.services.filter((s) => s.id !== service.id).slice(0, 4)
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    handleWhatsApp();
  };

  const handleWhatsApp = () => {
    const url = getWhatsAppUrl({
      service: service.title,
      name: form.name,
      phone: form.phone,
      details: form.note
    });
    openWhatsApp(url);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-slate-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-[#003B87] font-medium">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link to="/services" className="hover:text-[#003B87] font-medium">Services</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-[#003B87] font-bold truncate">{service.title}</span>
        </div>
      </div>

      {/* Unified Standard Page Hero */}
      <PageHero
        badge={`${service.categoryTitle} • ${service.group}`}
        title={service.title}
        description={service.desc}
        trustPoints={[
          { icon: CheckCircle2, text: 'Verified Checklist', color: 'text-emerald-400' },
          { icon: ShieldCheck, text: 'EPFO SOP Compliant', color: 'text-orange-400' },
          { icon: WhatsAppIcon, text: 'Direct WhatsApp Support', color: 'text-emerald-400' }
        ]}
      />

      {/* Main Details: 8 Cols Scope & Docs + 4 Cols Direct Consultation Form */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Cols: What We Do + Required Documents + Process */}
            <div className="lg:col-span-8 space-y-8">
              {/* Scope of Assistance */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#F56E0F]" />
                  <span>How We Assist You in {service.title}</span>
                </h2>
                <div className="space-y-3 pt-1">
                  {(service.WhatWeDo || [
                    'Comprehensive requirement assessment of your PF profile and service records',
                    'Document verification and accuracy pre-check before submission',
                    'Step-by-step guidance through applicable procedure and tracking'
                  ]).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-blue-50 text-[#003B87] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <p className="leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Required Documents Checklist */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-[#003B87]" />
                  <span>Applicable Documents &amp; Information Required</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Keep these details handy for prompt review and smooth guidance:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {(service.docs || [
                    '12-Digit UAN Number',
                    'Active Mobile Number linked with Aadhaar',
                    'Bank Passbook or Cancelled Cheque with IFSC',
                    'PAN Card'
                  ]).map((doc, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Standard 4-Step Process */}
              <div className="bg-[#00285E] text-white rounded-2xl p-6 sm:p-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-orange-300">
                  OUR WORKING PROCESS
                </span>
                <h2 className="text-xl font-extrabold">
                  From Requirement Assessment to Resolution
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {[
                    { step: '01', title: 'Requirement Assessment', desc: 'Understanding your specific PF query' },
                    { step: '02', title: 'Documentation Guidance', desc: 'Pre-verifying identity and bank proofs' },
                    { step: '03', title: 'Process Assistance', desc: 'Step-by-step submission navigation' },
                    { step: '04', title: 'Status Communication', desc: 'Regular updates until completion' }
                  ].map((s) => (
                    <div key={s.step} className="p-3.5 rounded-xl bg-white/10 border border-white/10">
                      <span className="text-xs font-extrabold text-orange-300 block mb-1">
                        Step {s.step}
                      </span>
                      <p className="text-sm font-bold">{s.title}</p>
                      <p className="text-xs text-blue-200 mt-1">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-extrabold text-slate-900">
                    Other {service.categoryTitle} You May Need:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.id}
                        to={`/services/${rel.id}`}
                        className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-[#003B87] shadow-xs hover:shadow-md transition-all flex items-center justify-between group"
                      >
                        <div className="min-w-0 pr-2">
                          <p className="text-xs font-bold text-[#F56E0F] uppercase">{rel.group}</p>
                          <p className="text-sm font-bold text-slate-900 group-hover:text-[#003B87] truncate mt-0.5">
                            {rel.title}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#003B87] group-hover:translate-x-1 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 4 Cols: Direct Solution Contact Form */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl border-2 border-[#F56E0F] shadow-xl overflow-hidden">
                <div className="orange-gradient px-6 py-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-100 block">
                    Fast Response Desk
                  </span>
                  <h3 className="text-lg font-extrabold">
                    Get Assistance for {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  {submitted ? (
                    <div className="py-6 text-center space-y-3">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                      <h4 className="text-lg font-extrabold text-slate-900">
                        Enquiry Sent to WhatsApp!
                      </h4>
                      <p className="text-xs text-slate-600">
                        Thank you, <strong>{form.name}</strong>. Your enquiry for <strong>{service.title}</strong> has been opened in WhatsApp. Please tap <strong>Send</strong> in WhatsApp.
                      </p>
                      <button
                        type="button"
                        onClick={handleWhatsApp}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Click If WhatsApp Didn't Open</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-slate-500 underline cursor-pointer block mx-auto pt-1"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Mobile Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="tel"
                            required
                            placeholder="Enter 10-digit mobile number"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Your Specific Query / Remarks (Optional)
                        </label>
                        <textarea
                          rows={2}
                          placeholder={`Any details about your ${service.title} query...`}
                          value={form.note}
                          onChange={(e) => setForm({ ...form, note: e.target.value })}
                          className="w-full p-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#25D366] hover:bg-[#1ebe57] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                        >
                          <WhatsAppIcon className="w-4 h-4" />
                          <span>Send Enquiry via WhatsApp</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
