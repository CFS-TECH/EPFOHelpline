import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  PhoneCall,
  FileText,
  User,
  Phone,
  Briefcase
} from 'lucide-react';
import { SERVICE_CATEGORIES, LEAD_CONFIG, getWhatsAppUrl, openWhatsApp } from '../data/siteData';
import { WhatsAppIcon } from './FloatingLeadBar';

export default function EnquiryModal({ isOpen, onClose, initialSubject }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    category: 'Current Employee',
    service: initialSubject || 'PF Withdrawal Assistance',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, service: initialSubject }));
    }
  }, [initialSubject]);

  if (!isOpen) return null;

  const handleCallBackSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    handleSendToWhatsApp();
  };

  const handleSendToWhatsApp = () => {
    const url = getWhatsAppUrl({
      service: formData.service,
      name: formData.fullName,
      phone: formData.phone,
      category: formData.category,
      details: formData.message
    });
    openWhatsApp(url);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      category: 'Current Employee',
      service: 'PF Withdrawal Assistance',
      message: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-slate-950/75 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Top Header */}
        <div className="brand-gradient px-4 sm:px-6 py-3.5 sm:py-5 text-white flex items-center justify-between">
          <div>
            <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-orange-300 bg-white/10 px-2.5 py-0.5 rounded-full mb-1">
              Instant WhatsApp &amp; Call Support
            </span>
            <h3 className="text-lg sm:text-xl font-bold">Speak With Our PF Specialist</h3>
          </div>
          <button
            onClick={handleResetAndClose}
            className="p-1.5 sm:p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-7 max-h-[86vh] overflow-y-auto">
          {/* Quick Direct Action Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pb-4 sm:pb-5 mb-4 sm:mb-5 border-b border-slate-200">
            <a
              href={`tel:${LEAD_CONFIG.phoneDial}`}
              className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3.5 rounded-xl sm:rounded-2xl bg-[#003B87] hover:bg-[#00285E] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-orange-300 shrink-0" />
              <span>Call: {LEAD_CONFIG.phoneDisplay}</span>
            </a>

            <button
              type="button"
              onClick={handleSendToWhatsApp}
              className="flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3.5 rounded-xl sm:rounded-2xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold text-xs sm:text-sm shadow-sm transition-all cursor-pointer"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0" />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-15 h-15 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                Enquiry Sent to WhatsApp!
              </h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Your enquiry details have been forwarded to WhatsApp for{' '}
                <span className="font-semibold text-[#003B87]">{formData.service}</span>. Please tap <strong className="text-emerald-600">Send</strong> in WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#1ebe57] text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Click If WhatsApp Didn't Open</span>
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleCallBackSubmit} className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Fill Your Details for Instant Callback or WhatsApp Solution:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Who Are You? *
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none bg-white"
                    >
                      <option value="Current Employee">Current Employee</option>
                      <option value="Former Employee">Former Employee</option>
                      <option value="Pensioner / Family Member">Pensioner / Nominee / Family</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Select PF / Pension Service *
                  </label>
                  <div className="relative">
                    <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none bg-white"
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
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Brief Requirement Note (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your PF, KYC, Correction, Claim Rejection, or Pension issue..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-3 text-sm rounded-xl border border-slate-300 focus:border-[#003B87] outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#1ebe57] shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all hover:opacity-95"
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
  );
}
