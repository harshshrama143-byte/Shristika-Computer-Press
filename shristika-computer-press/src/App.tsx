/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BusinessConfig, ServiceItem } from './types';
import { getStoredBusinessInfo } from './config/businessInfo';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { QuickServiceBar } from './components/QuickServiceBar';
import { PhysicalMockupStudio } from './components/PhysicalMockupStudio';
import { ServicesSection } from './components/ServicesSection';
import { DarkLuxurySection } from './components/DarkLuxurySection';
import { ProductShowcase } from './components/ProductShowcase';
import { GallerySection } from './components/GallerySection';
import { QualityTrustSection } from './components/QualityTrustSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { CustomDesignSection } from './components/CustomDesignSection';
import { ContactSection } from './components/ContactSection';
import { LuxuryBottomCta } from './components/LuxuryBottomCta';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { WhatsAppModal } from './components/WhatsAppModal';
import { CallModal } from './components/CallModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { QuoteModal } from './components/QuoteModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { SERVICES_LIST } from './data/servicesData';

export default function App() {
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

  const handleOpenServiceModalById = (serviceId: string) => {
    const found = SERVICES_LIST.find((s) => s.id === serviceId);
    if (found) {
      setSelectedServiceForModal(found);
      setServiceModalOpen(true);
    }
  };

  const handleOpenServiceModal = (service: ServiceItem) => {
    setSelectedServiceForModal(service);
    setServiceModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white antialiased">
      
      {/* 1. Header Navigation with Dynamic Sticky Blur & Active Indicator */}
      <Header
        businessInfo={businessInfo}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onOpenCall={handleOpenCall}
      />

      {/* Main Content Flow */}
      <main className="flex-grow">
        
        {/* 2. Section 41: 3D Cinematic Hero Section with Floating Physical Print Products */}
        <Hero
          businessInfo={businessInfo}
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenWhatsApp={handleOpenWhatsApp}
          onOpenCall={handleOpenCall}
        />

        {/* 3. Section 08: Quick Service Bar */}
        <QuickServiceBar
          onSelectService={(serviceId) => handleOpenServiceModalById(serviceId)}
        />

        {/* 4. Sections 43-48: 3D Physical Product Laboratory (Visiting Card, PVC ID, Wedding, Frame, Sticker, Banner) */}
        <PhysicalMockupStudio
          businessInfo={businessInfo}
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 5. Section 09, 10, 11 & 42: 14 Services Catalog with 3D Hover Depth & Filters */}
        <ServicesSection
          businessInfo={businessInfo}
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenServiceModal={handleOpenServiceModal}
        />

        {/* 6. Section 59: Dark Luxury Studio Showcase ("Your Design Deserves Better Printing") */}
        <DarkLuxurySection
          businessInfo={businessInfo}
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 7. Section 13: Horizontal Product Showcase with 3D Material Cards */}
        <ProductShowcase
          businessInfo={businessInfo}
          onOpenServiceModal={(serviceId) => handleOpenServiceModalById(serviceId)}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 8. Section 12 & 57: Selected Work Portfolio & 3D Depth Lightbox */}
        <GallerySection
          businessInfo={businessInfo}
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 9. Section 14: Quality & Craftsmanship Pillars */}
        <QualityTrustSection
          onStartOrder={() => handleOpenQuoteModal()}
        />

        {/* 10. Section 15: Why Shristika Computer Press */}
        <WhyChooseUs />

        {/* 11. Section 16: Simple & Easy Ordering Process (4 Steps) */}
        <ProcessSection
          onStartOrder={() => handleOpenQuoteModal()}
        />

        {/* 12. Section 17: About Studio & Bodhgaya Headquarters */}
        <AboutSection
          businessInfo={businessInfo}
          onOpenWhatsApp={() => handleOpenWhatsApp()}
          onOpenCall={handleOpenCall}
        />

        {/* 13. Section 18: Have a Design in Mind? Custom CTA */}
        <CustomDesignSection
          businessInfo={businessInfo}
          onOpenWhatsApp={handleOpenWhatsApp}
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* 14. Section 20 & 21: Contact Section with Fast Requirement Form */}
        <ContactSection
          businessInfo={businessInfo}
          onOpenWhatsApp={handleOpenWhatsApp}
          onOpenCall={handleOpenCall}
        />

        {/* 15. Section 60: Premium Contact CTA with Floating 3D Paper Composition */}
        <LuxuryBottomCta
          businessInfo={businessInfo}
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

      </main>

      {/* 16. Section 22: Footer */}
      <Footer
        businessInfo={businessInfo}
        onOpenPrivacyTerms={(type) => setPrivacyTermsType(type)}
        onOpenWhatsApp={handleOpenWhatsApp}
        onOpenCall={handleOpenCall}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* 17. Section 21: Desktop & Mobile Floating Contact Actions */}
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
