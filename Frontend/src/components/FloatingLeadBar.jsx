import React from 'react';
import { PhoneCall } from 'lucide-react';
import { LEAD_CONFIG, getWhatsAppUrl } from '../data/siteData';

export function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.359 4.984L2 22l5.188-1.359c1.453.797 3.109 1.219 4.844 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.828 14.125c-.25.703-1.438 1.344-2 1.422-.516.078-1.188.109-1.922-.125-.453-.141-1.031-.328-1.766-.641-3.109-1.344-5.141-4.484-5.297-4.688-.156-.203-1.266-1.688-1.266-3.219s.797-2.281 1.078-2.594c.281-.312.609-.391.812-.391.203 0 .406.016.578.016.188 0 .438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.016.547-.109.203-.156.344-.312.531-.156.188-.328.406-.469.547-.156.156-.312.328-.141.625.172.297.766 1.266 1.641 2.047 1.125 1.016 2.078 1.328 2.375 1.484.297.156.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.406-.25.672-.156.266.094 1.703.812 1.984.953.281.141.469.219.547.344.078.125.078.734-.172 1.438z" />
    </svg>
  );
}

export default function FloatingLeadBar() {
  return (
    <>
      {/* Desktop & Tablet Single Clean Floating WhatsApp Button */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={getWhatsAppUrl({ service: 'PF Helpline Assistance' })}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
        >
          <WhatsAppIcon className="w-7 h-7" />
        </a>
      </div>

      {/* Mobile Bottom Bar: Call Now & WhatsApp */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 shadow-xl grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${LEAD_CONFIG.phoneDial}`}
          className="py-3 px-3 rounded-xl bg-[#003B87] active:bg-[#00285E] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
        >
          <PhoneCall className="w-4 h-4 text-orange-300 shrink-0" />
          <span>Call Now</span>
        </a>

        <a
          href={getWhatsAppUrl({ service: 'PF Helpline Assistance' })}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 px-3 rounded-xl bg-[#25D366] active:bg-[#1ebe57] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
}
