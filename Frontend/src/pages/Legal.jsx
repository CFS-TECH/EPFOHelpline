import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShieldAlert, FileText, Lock } from 'lucide-react';

export default function Legal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get('tab') || 'disclaimer';

  return (
    <div className="py-16 lg:py-22 bg-slate-50 min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#F56E0F]">
            LEGAL &amp; STATUTORY INFORMATION
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
            Legal Policies &amp; Independent Disclaimer
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4">
          {[
            { id: 'disclaimer', label: 'Disclaimer', icon: ShieldAlert },
            { id: 'privacy', label: 'Privacy Policy', icon: Lock },
            { id: 'terms', label: 'Terms & Conditions', icon: FileText }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSearchParams({ tab: tab.id })}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#003B87] text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-xs space-y-6 text-slate-700 leading-relaxed text-sm sm:text-base">
          {activeTab === 'disclaimer' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900">Disclaimer</h2>
              <div className="p-5 rounded-2xl bg-orange-50 border-l-4 border-[#F56E0F] text-slate-900 font-medium">
                <strong>Disclaimer:</strong> PFHelpline is an independent PF assistance service and is not affiliated with or operated by EPFO or the Government of India. All statutory processes and decisions remain subject to applicable EPFO rules and authorities.
              </div>
              <p>
                PFHelpline provides structured procedural guidance, documentation preparation support, and customer assistance for individuals (employees and former employees) navigating Provident Fund requirements.
              </p>
              <p>
                Final approval, rejection, settlement timelines, and statutory determinations rest solely with the Employees&apos; Provident Fund Organisation (EPFO) and relevant statutory authorities in accordance with applicable rules and regulations.
              </p>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900">Privacy Policy</h2>
              <p>
                At PFHelpline, we respect the confidentiality of your personal, employment, and KYC documentation details. Information shared during Requirement Assessment and Documentation Guidance is used strictly to evaluate your PF requirement and provide structured process assistance.
              </p>
              <p>
                We do not sell, rent, or distribute customer personal information to unauthorized third parties. All case consultations are handled with strict data minimization and professional confidentiality.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900">Terms &amp; Conditions</h2>
              <p>
                By engaging PFHelpline for assistance, customers acknowledge that PFHelpline acts as an independent procedural guidance and documentation support provider. Customers are responsible for providing authentic, accurate, and valid identity, banking, and employment records.
              </p>
              <p>
                All services follow our four-step process: Requirement Assessment, Documentation Guidance, Process Assistance, and Status Communication.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
