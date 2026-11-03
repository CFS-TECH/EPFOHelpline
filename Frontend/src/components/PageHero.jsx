import React from 'react';
import { PhoneCall, CheckCircle2, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { LEAD_CONFIG, getWhatsAppUrl } from '../data/siteData';
import { WhatsAppIcon } from './FloatingLeadBar';

export default function PageHero({
  badge = 'PROVIDENT FUND SERVICES',
  title = '',
  highlight = '',
  description = '',
  trustPoints = [
    { icon: CheckCircle2, text: '30 Specialized Services', color: 'text-emerald-400' },
    { icon: ShieldCheck, text: 'EPFO SOP Guidance', color: 'text-orange-400' },
    { icon: WhatsAppIcon, text: 'Instant WhatsApp Help', color: 'text-emerald-400' }
  ],
  rightContent
}) {
  return (
    <section className="bg-gradient-to-r from-[#021b3d] via-[#003B87] to-[#012555] text-white py-5 sm:py-8 border-b border-blue-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3.5 sm:gap-5">
          {/* Left Info Column */}
          <div className="space-y-1.5 sm:space-y-2.5 max-w-2xl">
            {badge && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/10 border border-white/15 text-orange-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-400" />
                <span>{badge}</span>
              </div>
            )}

            <h1 className="text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              {title}{' '}
              {highlight && (
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">
                  {highlight}
                </span>
              )}
            </h1>

            {description && (
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed max-w-xl line-clamp-2 sm:line-clamp-none">
                {description}
              </p>
            )}

            {/* Inline Trust Points: Hidden on mobile to keep screen clean & light */}
            {trustPoints && trustPoints.length > 0 && (
              <div className="hidden sm:flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-xs text-blue-200">
                {trustPoints.map((pt, idx) => {
                  const Icon = pt.icon;
                  return (
                    <React.Fragment key={idx}>
                      {idx > 0 && <span className="text-white/20 hidden sm:inline">•</span>}
                      <span className="flex items-center gap-1.5">
                        <Icon className={`w-3.5 h-3.5 ${pt.color || 'text-emerald-400'} shrink-0`} />
                        <span>{pt.text}</span>
                      </span>
                    </React.Fragment>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Action / Widget Column */}
          <div className="lg:w-96 shrink-0">
            {rightContent ? (
              rightContent
            ) : (
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-md space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-orange-200">
                    Direct Support Desk
                  </span>
                  <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${LEAD_CONFIG.phoneDial}`}
                    className="flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-3 rounded-xl bg-white text-[#003B87] hover:bg-slate-100 text-xs font-bold transition-all shadow-xs"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-[#F56E0F]" />
                    <span>Call Now</span>
                  </a>

                  <a
                    href={getWhatsAppUrl({ service: title || 'PF Assistance' })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-2 sm:py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white text-xs font-bold transition-all shadow-xs"
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Extended Timing line: Hidden on mobile to avoid excess clutter */}
                <div className="hidden sm:flex items-center justify-between text-[11px] text-blue-200 pt-1 border-t border-white/10">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-orange-300 shrink-0" />
                    <span>{LEAD_CONFIG.workingHours}</span>
                  </span>
                  <span className="font-bold text-white">{LEAD_CONFIG.phoneDisplay}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
