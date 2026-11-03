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
import PageHero from '../components/PageHero';

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
      {/* Unified Standard Page Hero */}
      <PageHero
        badge="01. EMPLOYEE PF SERVICES (18 SOLUTIONS)"
        title="Employee PF, KYC &amp; Profile"
        highlight="Support"
        description="From PF Withdrawal, Transfer, and Claim Rejection resolution to UAN Activation, Aadhaar/Bank/PAN KYC, and Name/DOB/DOE Corrections — select your issue to get immediate guidance."
        trustPoints={[
          { icon: CheckCircle2, text: '18 Dedicated Solutions', color: 'text-emerald-400' },
          { icon: ShieldCheck, text: 'EPFO SOP Compliant', color: 'text-orange-400' },
          { icon: WhatsAppIcon, text: 'Instant WhatsApp Help', color: 'text-emerald-400' }
        ]}
      />

      {/* All 18 Employee PF Services Grid */}
      <section id="services-list" className="py-10 sm:py-12 bg-slate-50">
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
