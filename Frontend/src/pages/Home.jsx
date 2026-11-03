import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  PhoneCall,
  User,
  Phone,
  FileText,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import {
  SERVICE_CATEGORIES,
  WHY_PFHELPLINE_DATA,
  PROCESS_STEPS,
  AUDIENCE_DATA,
  LEAD_CONFIG,
  PHOTOS,
  getWhatsAppUrl,
  openWhatsApp
} from '../data/siteData';
import ServiceIcon from '../components/ServiceIcon';
import { WhatsAppIcon } from '../components/FloatingLeadBar';

export default function Home({ onOpenEnquiry }) {
  // Services Section Active Tab State
  const [activeTab, setActiveTab] = useState(SERVICE_CATEGORIES[0].id);
  const currentCategory = SERVICE_CATEGORIES.find((c) => c.id === activeTab) || SERVICE_CATEGORIES[0];

  // Hero Contact Form State
  const [heroForm, setHeroForm] = useState({
    name: '',
    phone: '',
    service: 'PF Withdrawal Assistance'
  });
  const [heroSubmitted, setHeroSubmitted] = useState(false);

  // Bottom Contact Form State
  const [bottomForm, setBottomForm] = useState({
    name: '',
    phone: '',
    service: 'PF Withdrawal Assistance',
    note: ''
  });
  const [bottomSubmitted, setBottomSubmitted] = useState(false);

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    setHeroSubmitted(true);
    handleHeroWhatsApp();
  };

  const handleHeroWhatsApp = () => {
    const url = getWhatsAppUrl({
      service: heroForm.service,
      name: heroForm.name,
      phone: heroForm.phone
    });
    openWhatsApp(url);
  };

  const handleBottomSubmit = (e) => {
    e.preventDefault();
    setBottomSubmitted(true);
    handleBottomWhatsApp();
  };

  const handleBottomWhatsApp = () => {
    const url = getWhatsAppUrl({
      service: bottomForm.service,
      name: bottomForm.name,
      phone: bottomForm.phone,
      details: bottomForm.note
    });
    openWhatsApp(url);
  };

  const selectServiceAndScroll = (serviceTitle) => {
    setHeroForm((prev) => ({ ...prev, service: serviceTitle }));
    setHeroSubmitted(false);
    const el = document.getElementById('hero-contact-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div id="home">
      {/* =====================================================================
          01. HERO SECTION — Clean, Compact & Focused on Contact Form
      ====================================================================== */}
      <section className="brand-gradient text-white py-6 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Column: Hero Text & Direct Buttons (7 cols) */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F56E0F]" />
                <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-orange-300">
                  PROVIDENT FUND &amp; PENSION ASSISTANCE
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Clarity in Every PF Process.{' '}
                <span className="text-[#F56E0F]">Confidence in Every Step.</span>
              </h1>

              {/* Crisp text on mobile, detailed on desktop */}
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-xl">
                <span className="sm:hidden">
                  Instant guidance for PF withdrawal, KYC updates, profile corrections &amp; pension claims.
                </span>
                <span className="hidden sm:inline">
                  Professional assistance for Provident Fund services, employee documentation, PF KYC, profile corrections, and pension requirements. We simplify complex procedures through structured support and accurate guidance.
                </span>
              </p>

              {/* Pillar Tags: Hidden on mobile to avoid messy wrapping, clean on tablet/desktop */}
              <div className="hidden sm:flex flex-wrap items-center gap-2.5 text-xs font-semibold text-white pt-0.5">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F56E0F]" />
                  PF Assistance
                </span>
                <span className="text-white/30">|</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F56E0F]" />
                  Employee Support
                </span>
                <span className="text-white/30">|</span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#F56E0F]" />
                  Pension &amp; Claim Guidance
                </span>
              </div>

              {/* Attractive Direct Actions on Mobile: 2 Side-by-Side balanced buttons */}
              <div className="grid grid-cols-2 sm:flex sm:flex-row items-center gap-2 pt-1">
                <a
                  href={`tel:${LEAD_CONFIG.phoneDial}`}
                  className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold text-white orange-gradient shadow-md hover:opacity-95 transition-all text-center"
                >
                  <PhoneCall className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">Call Helpline</span>
                </a>

                <a
                  href={getWhatsAppUrl({ service: 'Mobile Hero Quick Chat' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#1ebe57] shadow-md transition-all text-center"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Clean, Prominent Contact Form (5 cols) */}
            <div className="lg:col-span-5" id="hero-contact-form">
              <div className="bg-white text-slate-900 rounded-2xl shadow-xl border-t-4 border-[#F56E0F] p-4 sm:p-5">
                <div className="mb-3 pb-2.5 border-b border-slate-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F56E0F]">
                    Free Consultation Desk
                  </span>
                  <h2 className="text-lg font-extrabold text-slate-900">
                    Speak With Our PF Team
                  </h2>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Fill in your details for instant WhatsApp solution &amp; callback.
                  </p>
                </div>

                {heroSubmitted ? (
                  <div className="py-6 text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-lg font-bold text-slate-900">
                      Enquiry Sent to WhatsApp!
                    </h3>
                    <p className="text-xs text-slate-600">
                      Thank you, <strong>{heroForm.name}</strong>. Your enquiry for <strong>{heroForm.service}</strong> has been forwarded to WhatsApp. Please tap <strong>Send</strong> in WhatsApp to deliver it.
                    </p>
                    <button
                      type="button"
                      onClick={handleHeroWhatsApp}
                      className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      <span>Click If WhatsApp Didn't Open</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setHeroSubmitted(false)}
                      className="text-xs text-slate-500 underline cursor-pointer"
                    >
                      Submit another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleHeroSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="text"
                          required
                          placeholder="Enter your name"
                          value={heroForm.name}
                          onChange={(e) => setHeroForm({ ...heroForm, name: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="Enter 10-digit mobile number"
                          value={heroForm.phone}
                          onChange={(e) => setHeroForm({ ...heroForm, phone: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Select Your PF Requirement *
                      </label>
                      <div className="relative">
                        <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <select
                          value={heroForm.service}
                          onChange={(e) => setHeroForm({ ...heroForm, service: e.target.value })}
                          className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none bg-white font-semibold text-[#003B87]"
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

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#1ebe57] flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                      >
                        <WhatsAppIcon className="w-5 h-5" />
                        <span>Send Enquiry via WhatsApp</span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          02. ABOUT PFHELPLINE SECTION
      ====================================================================== */}
      <section id="about" className="py-10 sm:py-12 bg-white border-b border-slate-200/70 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <img
                  src={PHOTOS.aboutPrimary}
                  alt="About PFHelpline"
                  className="w-full h-56 sm:h-64 object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3.5">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-[#003B87] text-xs font-bold uppercase tracking-wider">
                ABOUT PFHELPLINE
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug">
                A More Structured Approach to Provident Fund Assistance.
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Managing Provident Fund requirements involves multiple procedures, documentation and verification steps. PFHelpline makes these processes easier to navigate through organised guidance and professional support.
              </p>
              <p className="hidden sm:block text-xs sm:text-sm text-slate-600 leading-relaxed">
                We help individuals understand their PF-related requirements, prepare for applicable procedures and navigate the relevant service processes with greater clarity.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-50 border-l-4 border-[#F56E0F]">
                <p className="text-xs sm:text-sm font-bold text-slate-900">
                  <span className="text-[#003B87]">Our Approach:</span> Professional. Transparent. Process-Driven.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          03. SERVICES SECTION - Clean, Balanced Interactive Tabbed Grid
      ====================================================================== */}
      <section id="services" className="py-7 sm:py-12 bg-slate-50 scroll-mt-16 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-1.5 sm:space-y-3 mb-5 sm:mb-8">
            <span className="inline-block px-3 py-0.5 sm:py-1 rounded-full bg-blue-50 text-[#003B87] text-[11px] sm:text-xs font-bold uppercase tracking-wider">
              OUR SPECIALIZED SERVICES
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight break-words">
              Structured Solutions for Every PF Requirement.
            </h2>
            {/* Subtitle hidden on mobile to reduce clutter */}
            <p className="hidden sm:block text-xs sm:text-sm lg:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Select a category below to explore specific services, document requirements, and step-by-step assistance.
            </p>
          </div>

          {/* Clean Horizontal Tabs on Mobile (Scrollable single line), 3 columns on Tablet & Desktop */}
          <div className="max-w-4xl mx-auto mb-4 sm:mb-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 sm:grid sm:grid-cols-3 sm:gap-3">
              {SERVICE_CATEGORIES.map((cat) => {
                const isActive = activeTab === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveTab(cat.id)}
                    className={`shrink-0 sm:shrink sm:w-full px-4 sm:px-5 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 border shadow-xs whitespace-nowrap sm:whitespace-normal ${
                      isActive
                        ? 'bg-[#003B87] text-white border-[#003B87] shadow-md ring-2 ring-[#003B87]/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <span>{cat.shortTitle}</span>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] sm:text-xs font-extrabold shrink-0 ${
                        isActive
                          ? 'bg-[#F56E0F] text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {cat.services.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Header: Minimal compact row on mobile, full banner on desktop */}
          {currentCategory && (
            <>
              {/* Desktop Banner */}
              <div className="hidden sm:flex mb-8 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#F56E0F] block">
                    Category {currentCategory.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                    {currentCategory.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
                    {currentCategory.subtitle}
                  </p>
                </div>

                <Link
                  to={
                    currentCategory.id === 'employee-pf-services'
                      ? '/for-employees'
                      : currentCategory.id === 'pension-related-services'
                      ? '/pension-services'
                      : '/services'
                  }
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-50 hover:bg-[#003B87] text-[#003B87] hover:text-white text-xs font-bold transition-all shrink-0 w-full sm:w-auto"
                >
                  <span>View Dedicated Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Mobile Compact Bar: Extra bulky card removed for clean mobile UX */}
              <div className="flex sm:hidden items-center justify-between px-1 mb-4">
                <span className="text-xs font-bold text-slate-800">
                  {currentCategory.shortTitle} ({currentCategory.services.length})
                </span>
                <Link
                  to={
                    currentCategory.id === 'employee-pf-services'
                      ? '/for-employees'
                      : currentCategory.id === 'pension-related-services'
                      ? '/pension-services'
                      : '/services'
                  }
                  className="text-xs font-bold text-[#003B87] inline-flex items-center gap-1 hover:underline"
                >
                  <span>View All &rarr;</span>
                </Link>
              </div>
            </>
          )}

          {/* Uniform, Balanced Responsive Grid of Cards */}
          {currentCategory && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentCategory.services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#003B87]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3.5">
                      <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold">
                        {service.group}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-blue-50 group-hover:bg-[#003B87] text-[#003B87] group-hover:text-white flex items-center justify-center transition-colors">
                        <ServiceIcon name={service.iconName} className="w-4 h-4" />
                      </div>
                    </div>

                    <h4 className="text-base font-extrabold text-slate-900 group-hover:text-[#003B87] transition-colors leading-snug mb-2">
                      <Link to={`/services/${service.id}`} className="hover:underline">
                        {service.title}
                      </Link>
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {service.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-3.5 border-t border-slate-100">
                    <Link
                      to={`/services/${service.id}`}
                      className="flex-1 py-2 px-3 rounded-lg bg-blue-50 hover:bg-[#003B87] text-[#003B87] hover:text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Checklist &amp; Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        if (onOpenEnquiry) {
                          onOpenEnquiry(service.title);
                        } else {
                          selectServiceAndScroll(service.title);
                        }
                      }}
                      className="py-2 px-3 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs font-semibold flex items-center justify-center cursor-pointer whitespace-nowrap"
                    >
                      <span>Enquire</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Clean Bottom Callout to Full Directory */}
          <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
            <p className="text-sm font-semibold text-slate-700">
              Looking for something specific or have an unlisted PF query?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#003B87] hover:bg-[#00285E] text-white text-xs sm:text-sm font-bold transition-all shadow-sm"
              >
                <span>Search All 30 Services Directory</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                type="button"
                onClick={() => onOpenEnquiry && onOpenEnquiry('General Consultation')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-bold transition-all cursor-pointer"
              >
                <span>Request Custom Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          04. WHY PFHELPLINE SECTION
      ====================================================================== */}
      <section className="py-10 sm:py-12 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#003B87]">
              THE PFHELPLINE DIFFERENCE
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Built Around Process Clarity and Professional Support.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_PFHELPLINE_DATA.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2.5"
              >
                <div className="w-10 h-10 rounded-xl bg-[#003B87] text-white flex items-center justify-center">
                  <ServiceIcon name={item.iconName} className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          05 & 06. WORKING PROCESS + WHO WE SUPPORT
      ====================================================================== */}
      <section id="process" className="py-10 sm:py-12 bg-[#061833] text-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* 05. Process */}
          <div>
            <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-300">
                OUR WORKING PROCESS
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                From Initial Enquiry to Process Guidance.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PROCESS_STEPS.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl bg-white/8 border border-white/15 p-4 sm:p-5"
                >
                  <span className="inline-block px-2.5 py-0.5 rounded-md orange-gradient text-white font-extrabold text-[11px] mb-2.5">
                    {item.step}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {item.step} &mdash; {item.title}
                  </h3>
                  <p className="text-xs text-blue-100 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 06. Who We Support */}
          <div>
            <div className="text-center max-w-2xl mx-auto space-y-1.5 mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-orange-300">
                WHO WE SUPPORT
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                Assistance Designed Around Different PF Requirements.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="rounded-2xl bg-white text-slate-900 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#F56E0F]">
                    Active Employees
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                    For Employees
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Support for PF withdrawal, transfer, UAN, KYC and employee profile-related requirements.
                  </p>
                </div>
                <div className="pt-3.5 mt-3.5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => selectServiceAndScroll('PF Withdrawal Assistance')}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#003B87] hover:bg-[#00285E] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Get Employee Assistance &rarr;
                  </button>
                </div>
              </div>

              <div className="rounded-2xl bg-white text-slate-900 p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase text-[#F56E0F]">
                    Settlement &amp; Pension
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-0.5">
                    For Former Employees &amp; Families
                  </h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Guidance on applicable PF settlement procedures, EPS pension, family pension, death claims, and account-related queries.
                  </p>
                </div>
                <div className="pt-3.5 mt-3.5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => selectServiceAndScroll('EPS Pension Assistance')}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#003B87] hover:bg-[#00285E] text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    Get Pension Guidance &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          07. CONTACT & CTA SECTION
      ====================================================================== */}
      <section id="contact" className="py-10 sm:py-12 bg-slate-50 scroll-mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white border border-slate-200 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info (5 cols) */}
            <div className="lg:col-span-5 brand-gradient text-white p-5 sm:p-7 flex flex-col justify-between">
              <div className="space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-300">
                  CONTACT US
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold leading-tight">
                  Have a PF Requirement That Needs Attention?
                </h2>
                <p className="text-xs text-blue-100 leading-relaxed">
                  Connect with our team to understand the appropriate process, documentation and available assistance for your requirement.
                </p>
              </div>

              <div className="space-y-2.5 pt-4">
                <a
                  href={`tel:${LEAD_CONFIG.phoneDial}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15"
                >
                  <PhoneCall className="w-4 h-4 text-[#F56E0F]" />
                  <div>
                    <p className="text-[10px] text-orange-200 font-bold uppercase">Call Us</p>
                    <p className="text-xs sm:text-sm font-extrabold text-white">{LEAD_CONFIG.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={getWhatsAppUrl({ service: 'Discuss My PF Requirement' })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                  <div>
                    <p className="text-[10px] text-emerald-300 font-bold uppercase">WhatsApp</p>
                    <p className="text-xs sm:text-sm font-extrabold text-white">Chat With Our Team</p>
                  </div>
                </a>

                <p className="text-[11px] text-orange-200 italic pt-0.5">
                  *Our team is here to help you navigate your PF-related queries.*
                </p>
              </div>
            </div>

            {/* Right Form (7 cols) */}
            <div className="lg:col-span-7 p-5 sm:p-7">
              {bottomSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Enquiry Sent to WhatsApp!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Thank you, <strong>{bottomForm.name}</strong>. Your requirement for <strong>{bottomForm.service}</strong> has been forwarded to WhatsApp. Please tap <strong>Send</strong> in WhatsApp.
                  </p>
                  <button
                    type="button"
                    onClick={handleBottomWhatsApp}
                    className="w-full max-w-sm mx-auto py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Click If WhatsApp Didn't Open</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setBottomSubmitted(false)}
                    className="text-xs text-slate-500 underline cursor-pointer block mx-auto pt-2"
                  >
                    Submit another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBottomSubmit} className="space-y-4">
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Discuss Your Requirement
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={bottomForm.name}
                        onChange={(e) => setBottomForm({ ...bottomForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter 10-digit mobile number"
                        value={bottomForm.phone}
                        onChange={(e) => setBottomForm({ ...bottomForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Select PF / Pension Service *
                    </label>
                    <select
                      value={bottomForm.service}
                      onChange={(e) => setBottomForm({ ...bottomForm, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none bg-white font-semibold text-[#003B87]"
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

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Message (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Briefly describe your PF issue..."
                      value={bottomForm.note}
                      onChange={(e) => setBottomForm({ ...bottomForm, note: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#1ebe57] flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      <span>Send Enquiry via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
