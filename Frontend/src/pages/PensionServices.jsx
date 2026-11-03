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

export default function PensionServices({ onOpenEnquiry }) {
  const pensionCategory = SERVICE_CATEGORIES[1]; // 7 Pension & Related Services
  const additionalCategory = SERVICE_CATEGORIES[2]; // 5 Additional PF Services

  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: 'EPS Pension Assistance'
  });
  const [submitted, setSubmitted] = useState(false);

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
      category: 'Pension & Additional Services'
    });
    openWhatsApp(url);
  };

  return (
    <div>
      {/* Unified Standard Page Hero */}
      <PageHero
        badge="02. PENSION, DEATH CLAIMS &amp; ADDITIONAL SERVICES"
        title="EPS Pension, Death Claims &amp;"
        highlight="Portal Support"
        description="Dedicated guidance for EPS Pension, Higher Pension, Family Pension, EDLI / Death Claim Settlement, EPFO Portal issues, and 1-on-1 PF Consultation."
        trustPoints={[
          { icon: CheckCircle2, text: '7 Pension Solutions', color: 'text-emerald-400' },
          { icon: ShieldCheck, text: '5 Additional Services', color: 'text-orange-400' },
          { icon: WhatsAppIcon, text: 'Instant WhatsApp Help', color: 'text-emerald-400' }
        ]}
      />

      {/* Section 2: Pension & Related Services (7) + Section 3: Additional PF Services (5) */}
      <section id="pension-services-list" className="py-10 sm:py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* 2. Pension & Related Services */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {pensionCategory.title} ({pensionCategory.services.length})
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {pensionCategory.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {pensionCategory.services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-lg bg-orange-50 text-[#F56E0F] text-[11px] font-bold uppercase tracking-wider">
                        {service.group}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#003B87] flex items-center justify-center">
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
                      <span>View Details</span>
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

          {/* 3. Additional PF Services */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {additionalCategory.title} ({additionalCategory.services.length})
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {additionalCategory.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {additionalCategory.services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-xs card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-[11px] font-bold uppercase tracking-wider">
                        {service.group}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#003B87] flex items-center justify-center">
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
                      <span>View Details</span>
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
        </div>
      </section>
    </div>
  );
}
