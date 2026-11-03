import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  PhoneCall,
  User,
  Phone,
  FileText,
  ArrowRight
} from 'lucide-react';
import { SERVICE_CATEGORIES, LEAD_CONFIG, getWhatsAppUrl, openWhatsApp } from '../data/siteData';
import ServiceIcon from '../components/ServiceIcon';
import { WhatsAppIcon } from '../components/FloatingLeadBar';

export default function ForEmployees({ onOpenEnquiry }) {
  const employeeCategory = SERVICE_CATEGORIES[0]; // 18 Employee PF Services

  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'PF Withdrawal Assistance'
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeGroup, setActiveGroup] = useState('All');

  const groups = ['All', 'Claims & Withdrawals', 'UAN & Account', 'KYC & Linking', 'Profile Corrections'];

  const filteredServices =
    activeGroup === 'All'
      ? employeeCategory.services
      : employeeCategory.services.filter((s) => s.group === activeGroup);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    handleWhatsApp();
  };

  const handleWhatsApp = () => {
    const url = getWhatsAppUrl({
      service: form.service,
      name: form.name,
      phone: form.phone,
      category: 'Employee PF Services'
    });
    openWhatsApp(url);
  };

  return (
    <div>
      {/* Hero with Visible Contact Form */}
      <section className="brand-gradient bg-hero-grid text-white py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-orange-300 text-xs font-bold uppercase tracking-widest">
                01. EMPLOYEE PF SERVICES (18 SOLUTIONS)
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Complete Employee PF, KYC &amp; Profile Correction Support
              </h1>
              <p className="text-sm sm:text-base text-blue-100 leading-relaxed max-w-xl">
                From PF Withdrawal, Transfer, and Claim Rejection resolution to UAN Activation, Aadhaar/Bank/PAN KYC, and Name/DOB/DOE Corrections — select your issue to get immediate guidance.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={`tel:${LEAD_CONFIG.phoneDial}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white orange-gradient shadow-lg w-full sm:w-auto"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" />
                  <span>Call: {LEAD_CONFIG.phoneDisplay}</span>
                </a>
                <a
                  href="#services-list"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors w-full sm:w-auto"
                >
                  <span>Explore Services &darr;</span>
                </a>
              </div>
            </div>

            {/* Right Hero Contact Form */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-[#F56E0F] overflow-hidden">
                <div className="orange-gradient px-6 py-3.5 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-100 block">
                    18 Employee PF Services
                  </span>
                  <h2 className="text-lg font-extrabold">
                    Request Callback or WhatsApp Solution
                  </h2>
                </div>

                <div className="p-6">
                  {submitted ? (
                    <div className="py-5 text-center space-y-3">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                      <h3 className="text-lg font-extrabold text-slate-900">
                        Enquiry Sent to WhatsApp!
                      </h3>
                      <p className="text-xs text-slate-600">
                        Thank you, <strong>{form.name}</strong>. Your enquiry for <strong>{form.service}</strong> has been opened in WhatsApp. Please tap <strong>Send</strong> in WhatsApp.
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
                          Your Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Mobile / WhatsApp Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="tel"
                            required
                            placeholder="Enter 10-digit mobile number"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Select Employee PF Service *
                        </label>
                        <div className="relative">
                          <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <select
                            value={form.service}
                            onChange={(e) => setForm({ ...form, service: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none bg-white font-semibold text-[#003B87]"
                          >
                            {employeeCategory.services.map((s) => (
                              <option key={s.id} value={s.title}>
                                {s.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs sm:text-sm font-extrabold flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-colors"
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

      {/* All 18 Employee PF Services Grid */}
      <section className="py-14 lg:py-18 bg-slate-50 bg-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                1. Employee PF Services ({filteredServices.length})
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Filter by category or click any service to connect via Call or WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {groups.map((grp) => (
                <button
                  key={grp}
                  onClick={() => setActiveGroup(grp)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeGroup === grp
                      ? 'bg-[#003B87] text-white'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {grp}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-[#003B87] text-[11px] font-bold uppercase tracking-wider">
                      {service.group}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#F56E0F] flex items-center justify-center">
                      <ServiceIcon name={service.iconName} className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                  <Link
                    to={`/services/${service.id}`}
                    className="flex-1 py-2 px-3 rounded-lg bg-blue-50 hover:bg-[#003B87] text-[#003B87] hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>View Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => onOpenEnquiry(service.title)}
                    className="py-2 px-3 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center justify-center cursor-pointer whitespace-nowrap"
                  >
                    <span>Enquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
