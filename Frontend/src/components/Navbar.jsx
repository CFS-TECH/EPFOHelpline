import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { PhoneCall, Menu, X } from 'lucide-react';
import iconLogo from '../assets/icon-logo.png';
import { LEAD_CONFIG } from '../data/siteData';

export default function Navbar({ onOpenEnquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo with Icon Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src={iconLogo}
            alt="PFHelpline Icon Logo"
            className="h-10 w-10 sm:h-11 sm:w-11 object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight leading-none">
              <span className="text-[#003B87]">PF</span>
              <span className="text-[#F56E0F]">Helpline</span>
            </span>
            <span className="text-[9px] sm:text-[10px] font-bold text-slate-500 tracking-wider uppercase">
              Provident Fund Services
            </span>
          </div>
        </Link>

        {/* Clean Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `text-sm font-semibold whitespace-nowrap transition-colors ${
                  isActive
                    ? 'text-[#003B87] border-b-2 border-[#003B87] pb-1'
                    : 'text-slate-700 hover:text-[#003B87]'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons: Enquire & Call Now */}
        <div className="hidden sm:flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => onOpenEnquiry && onOpenEnquiry('General PF Consultation')}
            className="inline-flex items-center gap-1.5 px-3 lg:px-4 py-2 lg:py-2.5 rounded-xl text-xs lg:text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all whitespace-nowrap cursor-pointer"
          >
            <span>Enquire Now</span>
          </button>

          <a
            href={`tel:${LEAD_CONFIG.phoneDial}`}
            className="inline-flex items-center gap-1.5 px-3 lg:px-4 py-2 lg:py-2.5 rounded-xl text-xs lg:text-sm font-bold text-white bg-[#003B87] hover:bg-[#00285E] transition-all whitespace-nowrap shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-orange-300" />
            <span className="hidden xl:inline">Call: {LEAD_CONFIG.phoneDisplay}</span>
            <span className="xl:hidden">Call Now</span>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-5 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-xl text-sm font-semibold ${
                    isActive ? 'bg-blue-50 text-[#003B87]' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry && onOpenEnquiry('General PF Consultation');
              }}
              className="py-2.5 px-3 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer"
            >
              <span>Enquire Now</span>
            </button>

            <a
              href={`tel:${LEAD_CONFIG.phoneDial}`}
              className="py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-[#003B87] flex items-center justify-center gap-1.5"
            >
              <PhoneCall className="w-4 h-4 text-orange-300" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
