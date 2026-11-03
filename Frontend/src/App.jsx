import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import FloatingLeadBar from './components/FloatingLeadBar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ForEmployees from './pages/ForEmployees';
import PensionServices from './pages/PensionServices';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

export default function App() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState('');

  const handleOpenEnquiry = (subject = 'PF Withdrawal Assistance') => {
    setEnquirySubject(subject);
    setEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <ScrollToTop />
      <Navbar onOpenEnquiry={handleOpenEnquiry} />

      <main className="flex-grow pb-16 sm:pb-0">
        <Routes>
          <Route path="/" element={<Home onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/services" element={<Services onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/service/:serviceId" element={<ServiceDetail />} />
          <Route path="/employee-pf-services" element={<ForEmployees onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/for-employees" element={<ForEmployees onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/pension-services" element={<PensionServices onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/about" element={<About onOpenEnquiry={handleOpenEnquiry} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>

      <Footer onOpenEnquiry={handleOpenEnquiry} />

      <FloatingLeadBar onOpenEnquiry={handleOpenEnquiry} />

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        initialSubject={enquirySubject}
      />
    </div>
  );
}
