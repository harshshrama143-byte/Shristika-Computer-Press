/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BusinessConfig, ServiceItem } from './types';
import { getStoredBusinessInfo } from './config/businessInfo';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PopularServices } from './components/PopularServices';
import { PortfolioSection } from './components/PortfolioSection';
import { ScrollProgress } from './components/ScrollProgress';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { StrongCta } from './components/StrongCta';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { WhatsAppModal } from './components/WhatsAppModal';
import { CallModal } from './components/CallModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { SERVICES_LIST } from './data/servicesData';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  useScrollReveal();

  const [businessInfo, setBusinessInfo] = useState<BusinessConfig>(getStoredBusinessInfo());
  
  // Modals state
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalServiceId, setQuoteModalServiceId] = useState<string | undefined>(undefined);
  
  const [whatsAppModalOpen, setWhatsAppModalOpen] = useState(false);
  const [whatsAppCustomMessage, setWhatsAppCustomMessage] = useState<string | undefined>(undefined);
  const [whatsAppContextTitle, setWhatsAppContextTitle] = useState<string | undefined>(undefined);

  const [callModalOpen, setCallModalOpen] = useState(false);

  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);

  const [privacyTermsType, setPrivacyTermsType] = useState<'privacy' | 'terms' | null>(null);

  useEffect(() => {
    const handleInfoUpdate = () => {
      setBusinessInfo(getStoredBusinessInfo());
    };
    window.addEventListener('business-info-updated', handleInfoUpdate);
    return () => window.removeEventListener('business-info-updated', handleInfoUpdate);
  }, []);

  // Handler helpers
  const handleOpenWhatsApp = (customMessage?: string, contextTitle?: string) => {
    setWhatsAppCustomMessage(customMessage);
    setWhatsAppContextTitle(contextTitle);
    setWhatsAppModalOpen(true);
  };

  const handleOpenCall = () => {
    setCallModalOpen(true);
  };

  const handleOpenQuoteModal = (serviceId?: string) => {
    setQuoteModalServiceId(serviceId);
    setQuoteModalOpen(true);
  };

  const handleOpenServiceModal = (serviceId: string) => {
    const found = SERVICES_LIST.find((s) => s.id === serviceId);
    if (found) {
      setSelectedServiceForModal(found);
      setServiceModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-black selection:text-white antialiased">
      {/* Skip link: hidden until keyboard-focused (a11y requirement) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:bg-navy focus:text-white focus:px-5 focus:py-3 focus:rounded-full focus:text-sm focus:font-semibold focus:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
      >
        Skip to content
      </a>

      {/* 0. Reading-progress line pinned to the viewport top */}
      <ScrollProgress />

      {/* 1. Header Navigation with Dynamic Sticky Blur & Active Indicator */}
      <Header
        businessInfo={businessInfo}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onOpenCall={handleOpenCall}
      />

      {/* Main Content Flow */}
      <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
        
        {/* 1. Hero */}
        <Hero
          businessInfo={businessInfo}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 2. Popular Services — six core offerings */}
        <PopularServices
          onOpenServiceModal={handleOpenServiceModal}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 3. Featured Work / Portfolio */}
        <PortfolioSection
          businessInfo={businessInfo}
          onOpenWhatsApp={handleOpenWhatsApp}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Simple Ordering Process */}
        <ProcessSection
          onStartOrder={() => handleOpenQuoteModal()}
        />

        {/* 6. About Studio & Bodhgaya Headquarters */}
        <AboutSection
          businessInfo={businessInfo}
          onOpenWhatsApp={() => handleOpenWhatsApp()}
          onOpenCall={handleOpenCall}
        />

        {/* 7. Contact Section */}
        <ContactSection
          businessInfo={businessInfo}
          onOpenWhatsApp={handleOpenWhatsApp}
          onOpenCall={handleOpenCall}
        />

        {/* 8. Strong CTA */}
        <StrongCta
          businessInfo={businessInfo}
          onOpenWhatsApp={() => handleOpenWhatsApp()}
          onOpenCall={handleOpenCall}
        />

      </main>

      {/* 9. Footer */}
      <Footer
        businessInfo={businessInfo}
        onOpenPrivacyTerms={(type) => setPrivacyTermsType(type)}
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenCall={handleOpenCall}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 13. Section 21: Desktop & Mobile Floating Contact Actions */}
      <FloatingContact
        businessInfo={businessInfo}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onOpenCall={handleOpenCall}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* MODALS */}

      {/* Dual WhatsApp Selector Modal */}
      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => {
          setWhatsAppModalOpen(false);
          setWhatsAppCustomMessage(undefined);
          setWhatsAppContextTitle(undefined);
        }}
        businessInfo={businessInfo}
        customMessage={whatsAppCustomMessage}
        contextTitle={whatsAppContextTitle}
      />

      {/* Dual Direct Call Modal */}
      <CallModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
        businessInfo={businessInfo}
      />

      {/* Comprehensive Service Details Modal */}
      <ServiceDetailModal
        isOpen={serviceModalOpen}
        onClose={() => {
          setServiceModalOpen(false);
          setSelectedServiceForModal(null);
        }}
        service={selectedServiceForModal}
        businessInfo={businessInfo}
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Interactive 7-Field Fast Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => {
          setQuoteModalOpen(false);
          setQuoteModalServiceId(undefined);
        }}
        initialServiceId={quoteModalServiceId}
        businessInfo={businessInfo}
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenCall={handleOpenCall}
      />

      {/* Privacy Policy & Terms Modal */}
      <PrivacyTermsModal
        isOpen={privacyTermsType !== null}
        onClose={() => setPrivacyTermsType(null)}
        type={privacyTermsType}
        businessInfo={businessInfo}
      />

    </div>
  );
}
