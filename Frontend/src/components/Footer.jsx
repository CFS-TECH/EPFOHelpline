import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert } from 'lucide-react';
import logoDarkImg from '../assets/pfhelpline-logo-dark.png';

export default function Footer() {
  return (
    <footer className="bg-[#061833] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <a href="/#home" className="inline-block">
              <img
                src={logoDarkImg}
                alt="PFHelpline Logo"
                className="h-11 w-auto object-contain"
              />
            </a>
            <p className="text-white font-bold text-base">PFHelpline</p>
            <p className="text-slate-300 text-xs sm:text-sm">
              Professional Assistance for Provident Fund Requirements.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2.5">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm">
              <a href="/#home" className="hover:text-[#F56E0F]">Home</a>
              <span>|</span>
              <a href="/#about" className="hover:text-[#F56E0F]">About Us</a>
              <span>|</span>
              <a href="/#services" className="hover:text-[#F56E0F]">Services</a>
              <span>|</span>
              <a href="/#process" className="hover:text-[#F56E0F]">Process</a>
              <span>|</span>
              <a href="/#contact" className="hover:text-[#F56E0F]">Contact</a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 space-y-2.5">
            <h3 className="text-white text-xs font-bold uppercase tracking-wider">
              Legal
            </h3>
            <div className="flex flex-wrap gap-x-3 gap-y-2 text-xs sm:text-sm">
              <Link to="/legal?tab=privacy" className="hover:text-[#F56E0F]">Privacy Policy</Link>
              <span>|</span>
              <Link to="/legal?tab=terms" className="hover:text-[#F56E0F]">Terms &amp; Conditions</Link>
              <span>|</span>
              <Link to="/legal?tab=disclaimer" className="hover:text-[#F56E0F]">Disclaimer</Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 rounded-xl bg-slate-900/90 border border-slate-800 p-4 flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-[#F56E0F] shrink-0 mt-0.5" />
          <p className="text-xs text-slate-300 leading-relaxed">
            <strong className="text-white">Disclaimer:</strong> PFHelpline is an independent PF assistance service and is not affiliated with or operated by EPFO or the Government of India. All statutory processes and decisions remain subject to applicable EPFO rules and authorities.
          </p>
        </div>

        <div className="mt-6 text-center sm:text-left text-xs text-slate-400">
          &copy; 2026 PFHelpline. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
