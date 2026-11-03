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
  X,
  Sparkles,
  ShieldCheck,
  Check,
  Clock
} from 'lucide-react';
import {
  SERVICE_CATEGORIES,
  ALL_SERVICES_LIST,
  LEAD_CONFIG,
  getWhatsAppUrl,
  openWhatsApp
} from '../data/siteData';
import ServiceIcon from '../components/ServiceIcon';
import { WhatsAppIcon } from '../components/FloatingLeadBar';
import PageHero from '../components/PageHero';

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

  // Helper for Group Tag Color
  const getGroupBadgeClass = (group) => {
    switch (group) {
      case 'Claims & Withdrawals':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'KYC & Linking':
        return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'Profile Corrections':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'Pension Services':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Family & Death Claims':
        return 'bg-rose-50 text-rose-700 border-rose-200';
      case 'UAN & Account':
        return 'bg-sky-50 text-sky-700 border-sky-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
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

  const totalMatchingServices = filteredCategories.reduce(
    (acc, cat) => acc + cat.services.length,
    0
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* =====================================================================
          01. COMPACT, SLEEK & PROFESSIONAL SERVICES HEADER
      ====================================================================== */}
      <PageHero
        badge="Provident Fund & Pension Services Directory"
        title="PF &amp; Pension Assistance"
        highlight="Services"
        description="Browse complete procedural guidance, document requirements, and connect directly on WhatsApp or Call for expert assistance."
        trustPoints={[
          { icon: CheckCircle2, text: '30 Specialized Services', color: 'text-emerald-400' },
          { icon: ShieldCheck, text: 'EPFO SOP Guidance', color: 'text-orange-400' },
          { icon: WhatsAppIcon, text: 'Instant WhatsApp Support', color: 'text-emerald-400' }
        ]}
        rightContent={
          <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3.5 sm:p-4 rounded-2xl shadow-md space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-200">
                Quick Service Search
              </span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[11px] text-blue-200 hover:text-white underline cursor-pointer"
                >
                  Reset
                </button>
              )}
            </div>

            <div className="relative bg-white rounded-xl shadow-xs flex items-center">
              <Search className="w-4 h-4 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search withdrawal, KYC, transfer..."
                className="w-full pl-2.5 pr-8 py-2 text-xs sm:text-sm text-slate-900 font-semibold outline-none rounded-xl placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-1.5 text-slate-400 hover:text-slate-600 mr-1 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Filter Tags */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {['Withdrawal', 'KYC', 'Transfer', 'Name Error', 'Pension'].map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSearchQuery(tag === 'Name Error' ? 'Name' : tag)}
                  className="px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/25 text-[11px] font-semibold text-blue-100 hover:text-white transition-colors cursor-pointer"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        }
      />

      {/* =====================================================================
          02. CATEGORY TABS & MAIN CONTENT GRID
      ====================================================================== */}
      <section className="py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Segmented Category Filter Bar */}
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Browse All Services
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Filter by category or click on any service card for document checklist and instant guidance.
                </p>
              </div>

              {/* Search result count */}
              {searchQuery && (
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-1 rounded-lg text-xs font-bold text-amber-800">
                  <span>Found {totalMatchingServices} results for &ldquo;{searchQuery}&rdquo;</span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="underline text-amber-900 hover:text-amber-950 cursor-pointer ml-1"
                  >
                    Clear
                  </button>
                </div>
              )}
            </div>

            {/* Category Filter Pills - Horizontally Scrollable on Mobile */}
            <div className="flex items-center gap-2 pt-3 overflow-x-auto no-scrollbar sm:flex-wrap pb-1">
              <button
                onClick={() => setActiveCategory('all')}
                className={`shrink-0 whitespace-nowrap px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeCategory === 'all'
                    ? 'bg-[#003B87] text-white shadow-sm'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 shadow-xs'
                }`}
              >
                <span>All Services</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                    activeCategory === 'all'
                      ? 'bg-[#F56E0F] text-white'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {ALL_SERVICES_LIST.length}
                </span>
              </button>

              {SERVICE_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`shrink-0 whitespace-nowrap px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#003B87] text-white shadow-sm'
                        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 shadow-xs'
                    }`}
                  >
                    <span>{cat.shortTitle}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-extrabold ${
                        isActive
                          ? 'bg-[#F56E0F] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {cat.services.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main 2-Column Layout: Left 8 Cols (Cards) + Right 4 Cols (Sticky Helpdesk) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            {/* Left 8 Cols: Categorized Services Cards */}
            <div className="lg:col-span-8 space-y-8">
              {totalMatchingServices === 0 ? (
                <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 shadow-sm space-y-3">
                  <div className="w-12 h-12 bg-orange-100 text-[#F56E0F] rounded-xl flex items-center justify-center mx-auto">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    No services matching &ldquo;{searchQuery}&rdquo;
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                    We could not find any specific service matching your search term. You can still consult with our PF team directly on WhatsApp.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                    <button
                      onClick={() => setSearchQuery('')}
                      className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    >
                      View All 30 Services
                    </button>
                    <button
                      onClick={() => onOpenEnquiry && onOpenEnquiry(searchQuery || 'General PF Consultation')}
                      className="px-4 py-2 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Ask About This on WhatsApp</span>
                    </button>
                  </div>
                </div>
              ) : (
                filteredCategories.map((cat) =>
                  cat.services.length === 0 ? null : (
                    <div key={cat.id} id={cat.id} className="space-y-4 scroll-mt-24">
                      {/* Category Header Banner with Clean Accent */}
                      <div className="p-3.5 sm:p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-[#003B87] text-white text-[10px] font-black uppercase tracking-wider">
                              Cat {cat.number}
                            </span>
                            <h2 className="text-base sm:text-lg font-extrabold text-slate-900">
                              {cat.title}
                            </h2>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5 max-w-xl">
                            {cat.subtitle}
                          </p>
                        </div>

                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-[#003B87] font-bold text-xs shrink-0 self-start sm:self-auto border border-blue-100">
                          {cat.services.length} Solutions
                        </span>
                      </div>

                      {/* Responsive Grid of Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        {cat.services.map((service) => (
                          <div
                            key={service.id}
                            id={service.id}
                            className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 hover:border-[#003B87]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
                          >
                            <div>
                              {/* Header: Group Tag & Icon */}
                              <div className="flex items-center justify-between gap-2 mb-2.5">
                                <span
                                  className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${getGroupBadgeClass(
                                    service.group
                                  )}`}
                                >
                                  {service.group}
                                </span>
                                <div className="w-8 h-8 rounded-lg bg-blue-50 group-hover:bg-[#003B87] text-[#003B87] group-hover:text-white flex items-center justify-center transition-colors shadow-xs shrink-0">
                                  <ServiceIcon name={service.iconName} className="w-4 h-4" />
                                </div>
                              </div>

                              {/* Service Title */}
                              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#003B87] transition-colors leading-snug">
                                <Link to={`/services/${service.id}`} className="hover:underline">
                                  {service.title}
                                </Link>
                              </h3>

                              {/* Service Description */}
                              <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-2">
                                {service.desc}
                              </p>

                              {/* Key Highlights from WhatWeDo */}
                              {service.WhatWeDo && service.WhatWeDo.length > 0 && (
                                <div className="space-y-1 pb-3 mb-2 border-b border-slate-100">
                                  {service.WhatWeDo.slice(0, 2).map((item, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-start gap-1.5 text-[11px] text-slate-700 leading-tight"
                                    >
                                      <Check className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                                      <span className="line-clamp-1">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Card Footer Actions */}
                            <div className="flex items-center gap-2 pt-1">
                              <Link
                                to={`/services/${service.id}`}
                                className="flex-1 py-2 px-2.5 rounded-lg bg-blue-50 hover:bg-[#003B87] text-[#003B87] hover:text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors shadow-xs"
                              >
                                <span>Checklist</span>
                                <ArrowRight className="w-3 h-3" />
                              </Link>

                              <button
                                type="button"
                                onClick={() => {
                                  setSideForm((prev) => ({ ...prev, service: service.title }));
                                  setSideSubmitted(false);
                                  onOpenEnquiry(service.title);
                                }}
                                className="py-2 px-3 rounded-lg bg-emerald-50 hover:bg-[#25D366] text-emerald-700 hover:text-white border border-emerald-200 hover:border-emerald-500 text-xs font-bold flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap transition-colors shadow-xs"
                                title="Enquire on WhatsApp"
                              >
                                <WhatsAppIcon className="w-3.5 h-3.5" />
                                <span>WhatsApp</span>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )
              )}
            </div>

            {/* Right 4 Cols: Sticky High-Converting Assistance Helpdesk */}
            <div className="lg:col-span-4 lg:sticky lg:top-20 space-y-4">
              {/* Card 1: Fast WhatsApp Consultation Desk */}
              <div className="bg-white rounded-2xl shadow-lg border-2 border-[#F56E0F] overflow-hidden">
                <div className="orange-gradient px-5 py-3.5 text-white">
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-orange-100">
                      Direct WhatsApp Desk
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live Support
                    </span>
                  </div>
                  <h3 className="text-base font-extrabold">
                    Get Free PF Guidance
                  </h3>
                </div>

                <div className="p-4 sm:p-5">
                  {sideSubmitted ? (
                    <div className="py-4 text-center space-y-2.5">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                      <h4 className="text-sm font-extrabold text-slate-900">
                        Enquiry Sent to WhatsApp!
                      </h4>
                      <p className="text-xs text-slate-600">
                        Thank you, <strong>{sideForm.name}</strong>. Your enquiry has been opened in WhatsApp.
                      </p>
                      <button
                        type="button"
                        onClick={handleSideWhatsApp}
                        className="w-full py-2 px-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
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
                    <form onSubmit={handleSideSubmit} className="space-y-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Your Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={sideForm.name}
                            onChange={(e) => setSideForm({ ...sideForm, name: e.target.value })}
                            className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Mobile / WhatsApp Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                          <input
                            type="tel"
                            required
                            placeholder="Enter 10-digit mobile number"
                            value={sideForm.phone}
                            onChange={(e) => setSideForm({ ...sideForm, phone: e.target.value })}
                            className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Select Required Service *
                        </label>
                        <div className="relative">
                          <FileText className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                          <select
                            value={sideForm.service}
                            onChange={(e) => setSideForm({ ...sideForm, service: e.target.value })}
                            className="w-full pl-8 pr-3 py-2 text-xs rounded-xl border border-slate-300 focus:border-[#003B87] outline-none bg-white font-semibold text-[#003B87]"
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
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#1ebe57] flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-all active:scale-98"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Send Enquiry via WhatsApp</span>
                      </button>

                      <p className="text-[10px] text-center text-slate-500 pt-0.5">
                        Instant response on WhatsApp from our PF specialist.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Card 2: Direct Call Helpline Card */}
              <div className="bg-[#00285E] text-white rounded-2xl p-4 sm:p-5 shadow-sm space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-orange-300 shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-orange-300">
                      Need Urgent Call Support?
                    </p>
                    <p className="text-xs font-extrabold text-white">
                      Speak With Our Specialist
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${LEAD_CONFIG.phoneDial}`}
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl bg-white text-[#003B87] hover:bg-slate-100 font-bold text-xs shadow-xs transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#F56E0F]" />
                  <span>Call: {LEAD_CONFIG.phoneDisplay}</span>
                </a>

                <div className="flex items-center gap-1.5 text-[10px] text-blue-200 pt-0.5 border-t border-white/10">
                  <Clock className="w-3 h-3 text-orange-300 shrink-0" />
                  <span>{LEAD_CONFIG.workingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================================
              03. BOTTOM COMPACT CALLOUT BANNER
          ====================================================================== */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#003B87] via-[#002b66] to-[#061833] text-white p-6 sm:p-8 shadow-lg relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
              <div className="space-y-1.5 max-w-2xl">
                <span className="text-[10px] font-bold uppercase tracking-widest text-orange-300">
                  CANNOT FIND YOUR SPECIFIC PF CASE?
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-white">
                  Have a Complex or Rejected PF Claim?
                </h3>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Our specialists handle Joint Declarations, trust transfers, closed company records, father name corrections, and EPFO grievances.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                <a
                  href={getWhatsAppUrl({ service: 'Complex PF Case Consultation' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#1ebe57] shadow-md transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${LEAD_CONFIG.phoneDial}`}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white orange-gradient shadow-md transition-all"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call: {LEAD_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
