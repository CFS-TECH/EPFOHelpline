import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  PhoneCall,
  Search,
  CheckCircle2,
  ArrowRight,
  User,
  Phone,
  FileText,
  X
} from 'lucide-react';
import { SERVICE_CATEGORIES, LEAD_CONFIG, getWhatsAppUrl, openWhatsApp } from '../data/siteData';
import ServiceIcon from '../components/ServiceIcon';
import { WhatsAppIcon } from '../components/FloatingLeadBar';

export default function Services({ onOpenEnquiry }) {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(initialCat);

  // Sticky Side Contact Form
  const [sideForm, setSideForm] = useState({
    name: '',
    phone: '',
    service: 'PF Withdrawal Assistance'
  });
  const [sideSubmitted, setSideSubmitted] = useState(false);

  const handleSideSubmit = (e) => {
    e.preventDefault();
    setSideSubmitted(true);
    handleSideWhatsApp();
  };

  const handleSideWhatsApp = () => {
    const url = getWhatsAppUrl({
      service: sideForm.service,
      name: sideForm.name,
      phone: sideForm.phone
    });
    openWhatsApp(url);
  };

  const filteredCategories = SERVICE_CATEGORIES.filter((cat) =>
    activeCategory === 'all' ? true : cat.id === activeCategory
  ).map((cat) => ({
    ...cat,
    services: cat.services.filter((s) =>
      searchQuery.trim()
        ? s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.group.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    )
  }));

  return (
    <div>
      {/* Clean, Professional Centered Header */}
      <section className="bg-gradient-to-b from-[#002b66] to-[#003B87] text-white py-10 sm:py-12 border-b border-blue-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-orange-300 text-xs font-semibold tracking-wider uppercase">
            Services Directory
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
            PF &amp; Pension Assistance Services
          </h1>

          <p className="text-xs sm:text-sm text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Find complete guidance, document checklists, and direct assistance for all employee PF, KYC, and pension matters.
          </p>

          {/* Centered Clean Search Bar */}
          <div className="max-w-xl mx-auto pt-2">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any service (e.g., Withdrawal, Transfer, Name Correction)..."
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-white text-slate-900 text-sm shadow-md outline-none border border-slate-200 focus:border-[#F56E0F] placeholder:text-slate-400 font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Clean, Subtle Direct Help Row */}
          <div className="flex items-center justify-center gap-2 pt-1 text-xs text-blue-200">
            <span>Need direct helpline assistance?</span>
            <a
              href={`tel:${LEAD_CONFIG.phoneDial}`}
              className="inline-flex items-center gap-1 font-bold text-white hover:text-orange-300 underline underline-offset-4 transition-colors"
            >
              <PhoneCall className="w-3 h-3 text-[#F56E0F]" />
              Call {LEAD_CONFIG.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Main Content: 8 Cols Services List + 4 Cols Sticky Contact Form */}
      <section className="py-12 lg:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#003B87] text-white shadow-sm'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              All Services
            </button>
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#003B87] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {cat.shortTitle} ({cat.services.length})
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Cols: Categorized Services Cards */}
            <div className="lg:col-span-8 space-y-12">
              {filteredCategories.map((cat) =>
                cat.services.length === 0 ? null : (
                  <div key={cat.id} id={cat.id} className="space-y-5 scroll-mt-28">
                    <div className="border-b border-slate-200 pb-3 flex items-center justify-between">
                      <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                          {cat.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                          {cat.subtitle}
                        </p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-blue-50 text-[#003B87] font-extrabold text-xs shrink-0">
                        {cat.services.length} Services
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {cat.services.map((service) => (
                        <div
                          key={service.id}
                          id={service.id}
                          className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs hover:border-[#003B87] hover:shadow-md transition-all flex flex-col justify-between group"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2 mb-2.5">
                              <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold">
                                {service.group}
                              </span>
                              <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#003B87] flex items-center justify-center">
                                <ServiceIcon name={service.iconName} className="w-4 h-4" />
                              </div>
                            </div>
                            <h3 className="text-base font-extrabold text-slate-900 mb-1.5 group-hover:text-[#003B87] transition-colors">
                              <Link to={`/services/${service.id}`} className="hover:underline">
                                {service.title}
                              </Link>
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
                              <span>View Details</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>

                            <button
                              type="button"
                              onClick={() => {
                                setSideForm((prev) => ({ ...prev, service: service.title }));
                                setSideSubmitted(false);
                                onOpenEnquiry(service.title);
                              }}
                              className="py-2 px-3 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap"
                            >
                              <span>Enquire</span>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Right 4 Cols: Sticky High-Visibility Contact Form */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-xl border-2 border-[#F56E0F] overflow-hidden">
                <div className="orange-gradient px-6 py-4 text-white">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-100 block">
                    Instant Solution Desk
                  </span>
                  <h3 className="text-lg font-extrabold">
                    Get Free PF Consultation
                  </h3>
                </div>

                <div className="p-6">
                  {sideSubmitted ? (
                    <div className="py-6 text-center space-y-3">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                      <h4 className="text-base font-extrabold text-slate-900">
                        Enquiry Sent to WhatsApp!
                      </h4>
                      <p className="text-xs text-slate-600">
                        Thank you, <strong>{sideForm.name}</strong>. Your requirement for <strong>{sideForm.service}</strong> has been forwarded to WhatsApp. Please tap <strong>Send</strong> in WhatsApp.
                      </p>
                      <button
                        type="button"
                        onClick={handleSideWhatsApp}
                        className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Click If WhatsApp Didn't Open</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setSideSubmitted(false)}
                        className="text-xs text-slate-500 underline cursor-pointer block mx-auto pt-1"
                      >
                        Submit another enquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSideSubmit} className="space-y-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Your Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="Enter full name"
                            value={sideForm.name}
                            onChange={(e) => setSideForm({ ...sideForm, name: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
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
                            value={sideForm.phone}
                            onChange={(e) => setSideForm({ ...sideForm, phone: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Select Required Service *
                        </label>
                        <div className="relative">
                          <FileText className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <select
                            value={sideForm.service}
                            onChange={(e) => setSideForm({ ...sideForm, service: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none bg-white font-semibold text-[#003B87]"
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

                      <button
                        type="submit"
                        className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#25D366] hover:bg-[#1ebe57] flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Send Enquiry via WhatsApp</span>
                      </button>

                      <p className="text-[11px] text-center text-slate-500 pt-1">
                        Instant assistance on WhatsApp from our PF specialist.
                      </p>
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
