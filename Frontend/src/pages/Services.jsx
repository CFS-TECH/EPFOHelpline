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
  Clock,
  MessageSquare
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

  const popularSearches = [
    'PF Withdrawal',
    'PF Transfer',
    'KYC Update',
    'Name Correction',
    'UAN Activation',
    'EPS Pension'
  ];

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
          01. HIGH-IMPACT HERO HEADER
      ====================================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#021838] via-[#003B87] to-[#042654] text-white py-14 sm:py-18 lg:py-20 border-b border-blue-900/40">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-5">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-orange-300 text-xs font-extrabold tracking-wider uppercase shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Complete 30+ Provident Fund &amp; Pension Services Directory</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Find the Right{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
              PF Solution
            </span>{' '}
            in Minutes.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Step-by-step guidance, required document checklists, and instant 1-on-1 WhatsApp assistance for all employee PF, KYC updates, profile corrections, and pension requirements.
          </p>

          {/* High-Impact Interactive Search Bar */}
          <div className="max-w-2xl mx-auto pt-3">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-400 to-[#003B87] rounded-2xl blur-xs opacity-30 group-hover:opacity-75 transition duration-300" />
              <div className="relative bg-white rounded-2xl shadow-xl flex items-center p-1.5">
                <Search className="w-5 h-5 text-slate-400 ml-3.5 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search any service (e.g., Withdrawal, Transfer, Name Correction, UAN)..."
                  className="w-full pl-3 pr-10 py-3 text-slate-900 text-sm sm:text-base font-semibold outline-none placeholder:text-slate-400 rounded-xl"
                />
                {searchQuery ? (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="p-2 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer mr-1"
                    title="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                ) : (
                  <span className="hidden sm:inline-block px-2.5 py-1 text-[11px] font-bold text-slate-400 bg-slate-100 rounded-lg mr-2 shrink-0">
                    Press to search
                  </span>
                )}
              </div>
            </div>

            {/* Popular Search Suggestions */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-3 text-xs">
              <span className="text-blue-200 font-semibold">Popular Searches:</span>
              {popularSearches.map((term) => (
                <button
                  key={term}
                  type="button"
                  onClick={() => setSearchQuery(term)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-orange-200 hover:text-white border border-white/15 transition-all cursor-pointer font-medium"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>

          {/* Trust Highlights Bar */}
          <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto border-t border-white/15">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-blue-100 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>30 Specialized Services</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-blue-100 font-semibold">
              <ShieldCheck className="w-4 h-4 text-orange-400 shrink-0" />
              <span>EPFO SOP Guidance</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-blue-100 font-semibold">
              <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instant WhatsApp Help</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-blue-100 font-semibold">
              <PhoneCall className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Direct Call Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02. CATEGORY TABS & MAIN CONTENT GRID
      ====================================================================== */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Segmented Category Filter Bar */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  Explore Specialized Services
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Filter by category or click on any service card for complete checklist and instant solution.
                </p>
              </div>

              {/* Reset Search Indicator if active */}
              {searchQuery && (
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl text-xs font-bold text-amber-800">
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

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeCategory === 'all'
                    ? 'bg-[#003B87] text-white shadow-md'
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
                    className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#003B87] text-white shadow-md'
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 8 Cols: Categorized Services Cards */}
            <div className="lg:col-span-8 space-y-12">
              {totalMatchingServices === 0 ? (
                <div className="bg-white rounded-3xl p-10 text-center border border-slate-200 shadow-sm space-y-4">
                  <div className="w-14 h-14 bg-orange-100 text-[#F56E0F] rounded-2xl flex items-center justify-center mx-auto">
                    <Search className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    No services matching &ldquo;{searchQuery}&rdquo;
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    We could not find any specific service matching your search term. You can still consult with our PF team directly on WhatsApp or Call.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <button
                      onClick={() => setSearchQuery('')}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                    >
                      View All 30 Services
                    </button>
                    <button
                      onClick={() => onOpenEnquiry && onOpenEnquiry(searchQuery || 'General PF Consultation')}
                      className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs font-bold flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Ask About This on WhatsApp</span>
                    </button>
                  </div>
                </div>
              ) : (
                filteredCategories.map((cat) =>
                  cat.services.length === 0 ? null : (
                    <div key={cat.id} id={cat.id} className="space-y-5 scroll-mt-28">
                      {/* Category Header Banner with Clean Accent */}
                      <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded-md bg-[#003B87] text-white text-[10px] font-black uppercase tracking-wider">
                              Cat {cat.number}
                            </span>
                            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                              {cat.title}
                            </h2>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                            {cat.subtitle}
                          </p>
                        </div>

                        <span className="px-3 py-1 rounded-full bg-blue-50 text-[#003B87] font-extrabold text-xs shrink-0 self-start sm:self-auto border border-blue-100">
                          {cat.services.length} Solutions
                        </span>
                      </div>

                      {/* Responsive Grid of Cards */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {cat.services.map((service) => (
                          <div
                            key={service.id}
                            id={service.id}
                            className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:border-[#003B87]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
                          >
                            {/* Subtle Top Gradient Line on Hover */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#003B87] to-[#F56E0F] opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div>
                              {/* Header: Group Tag & Animated Icon */}
                              <div className="flex items-center justify-between gap-2 mb-3">
                                <span
                                  className={`px-2.5 py-0.5 rounded-md text-[11px] font-bold border ${getGroupBadgeClass(
                                    service.group
                                  )}`}
                                >
                                  {service.group}
                                </span>
                                <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-[#003B87] text-[#003B87] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-xs shrink-0">
                                  <ServiceIcon name={service.iconName} className="w-5 h-5" />
                                </div>
                              </div>

                              {/* Service Title */}
                              <h3 className="text-base sm:text-lg font-black text-slate-900 mb-2 group-hover:text-[#003B87] transition-colors leading-snug">
                                <Link to={`/services/${service.id}`} className="hover:underline">
                                  {service.title}
                                </Link>
                              </h3>

                              {/* Service Description */}
                              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                {service.desc}
                              </p>

                              {/* Key Highlights from WhatWeDo */}
                              {service.WhatWeDo && service.WhatWeDo.length > 0 && (
                                <div className="space-y-1.5 pb-4 mb-2 border-b border-slate-100">
                                  {service.WhatWeDo.slice(0, 2).map((item, idx) => (
                                    <div
                                      key={idx}
                                      className="flex items-start gap-2 text-[11px] text-slate-700 leading-tight"
                                    >
                                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                                      <span className="line-clamp-1">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>

                            {/* Card Footer Actions */}
                            <div className="flex items-center gap-2 pt-2">
                              <Link
                                to={`/services/${service.id}`}
                                className="flex-1 py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-[#003B87] text-[#003B87] hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs"
                              >
                                <span>Checklist &amp; Guide</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>

                              <button
                                type="button"
                                onClick={() => {
                                  setSideForm((prev) => ({ ...prev, service: service.title }));
                                  setSideSubmitted(false);
                                  onOpenEnquiry(service.title);
                                }}
                                className="py-2.5 px-3.5 rounded-xl bg-emerald-50 hover:bg-[#25D366] text-emerald-700 hover:text-white border border-emerald-200 hover:border-emerald-500 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap transition-all shadow-xs"
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
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-5">
              {/* Card 1: Fast WhatsApp Consultation Desk */}
              <div className="bg-white rounded-3xl shadow-xl border-2 border-[#F56E0F] overflow-hidden">
                <div className="orange-gradient px-6 py-4 text-white">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-orange-100">
                      Direct WhatsApp Desk
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Live Support
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold">
                    Get Free PF Guidance
                  </h3>
                  <p className="text-xs text-orange-100 mt-0.5">
                    Fill below to connect instantly on WhatsApp.
                  </p>
                </div>

                <div className="p-6">
                  {sideSubmitted ? (
                    <div className="py-6 text-center space-y-3">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                      <h4 className="text-base font-extrabold text-slate-900">
                        Enquiry Sent to WhatsApp!
                      </h4>
                      <p className="text-xs text-slate-600">
                        Thank you, <strong>{sideForm.name}</strong>. Your requirement for{' '}
                        <strong>{sideForm.service}</strong> has been opened in WhatsApp. Please tap{' '}
                        <strong>Send</strong> to deliver it.
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
                          Your Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                          <input
                            type="text"
                            required
                            placeholder="Enter your name"
                            value={sideForm.name}
                            onChange={(e) => setSideForm({ ...sideForm, name: e.target.value })}
                            className="w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
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
                        className="w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#25D366] hover:bg-[#1ebe57] flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-98"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Send Enquiry via WhatsApp</span>
                      </button>

                      <p className="text-[11px] text-center text-slate-500 pt-1">
                        Instant response on WhatsApp from our PF process specialist.
                      </p>
                    </form>
                  )}
                </div>
              </div>

              {/* Card 2: Direct Call Helpline Card */}
              <div className="bg-[#00285E] text-white rounded-3xl p-6 shadow-md space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-orange-300">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-orange-300">
                      Need Urgent Call Support?
                    </p>
                    <p className="text-sm font-extrabold text-white">
                      Speak With Our Specialist
                    </p>
                  </div>
                </div>

                <a
                  href={`tel:${LEAD_CONFIG.phoneDial}`}
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-white text-[#003B87] hover:bg-slate-100 font-extrabold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-[#F56E0F]" />
                  <span>Call: {LEAD_CONFIG.phoneDisplay}</span>
                </a>

                <div className="flex items-center gap-2 text-[11px] text-blue-200 pt-1 border-t border-white/10">
                  <Clock className="w-3.5 h-3.5 text-orange-300 shrink-0" />
                  <span>{LEAD_CONFIG.workingHours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================================
              03. BOTTOM FULL-WIDTH CALLOUT BANNER
          ====================================================================== */}
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-[#003B87] via-[#002b66] to-[#061833] text-white p-8 sm:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-widest text-orange-300">
                  CANNOT FIND YOUR SPECIFIC PF CASE?
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Have a Complex or Rejected PF Claim?
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                  Our specialists handle complex cases including Joint Declarations, trust transfers, closed company member records, father name corrections, and EPFO grievances.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                <a
                  href={getWhatsAppUrl({ service: 'Complex PF Case Consultation' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#25D366] hover:bg-[#1ebe57] shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${LEAD_CONFIG.phoneDial}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white orange-gradient shadow-lg transition-all"
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
