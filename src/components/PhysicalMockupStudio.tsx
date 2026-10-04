import React, { useState } from 'react';
import { 
  CreditCard, 
  ShieldCheck, 
  Heart, 
  Image as ImageIcon, 
  Tag, 
  Layers, 
  Sparkles, 
  ArrowRight, 
  RotateCw, 
  CheckCircle2, 
  Maximize2,
  FileText,
  MessageCircle,
  Eye
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { handleImageError } from '../utils/imageUtils';

interface PhysicalMockupStudioProps {
  businessInfo: BusinessConfig;
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenWhatsApp: (customMessage?: string, contextTitle?: string) => void;
}

export const PhysicalMockupStudio: React.FC<PhysicalMockupStudioProps> = ({
  businessInfo,
  onOpenQuoteModal,
  onOpenWhatsApp,
}) => {
  const [activeMockup, setActiveMockup] = useState<'visiting' | 'pvc' | 'wedding' | 'photo' | 'sticker' | 'banner'>('visiting');
  
  // Visiting card interactive 3D front/back flip state (Section 43)
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  
  // Sticker peel interaction state (Section 47)
  const [activeStickerIdx, setActiveStickerIdx] = useState(0);

  const mockupTabs = [
    { id: 'visiting', title: 'Visiting Card', icon: CreditCard, subtitle: '350-400 GSM Velvet' },
    { id: 'pvc', title: 'PVC ID Card', icon: ShieldCheck, subtitle: 'Waterproof Thermal' },
    { id: 'wedding', title: 'Wedding Card', icon: Heart, subtitle: 'Gold Foil Suite' },
    { id: 'photo', title: 'Photo Frame', icon: ImageIcon, subtitle: 'Solid Teak & Acrylic' },
    { id: 'sticker', title: 'Die-Cut Stickers', icon: Tag, subtitle: 'Vinyl Decals' },
    { id: 'banner', title: 'Flex Banner', icon: Layers, subtitle: 'Star Flex Outdoor' },
  ];

  return (
    <section id="studio-mockups" className="py-14 bg-[#f6f4f1] text-slate-900 relative overflow-hidden border-t border-b border-slate-200/80">
      
      {/* Ambient Lighting Accents (Section 52) */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Luxury Typography (Section 51) */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white text-blue-900 text-xs font-black uppercase tracking-widest border border-slate-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>3D PHYSICAL PRODUCT LABORATORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0a0a0a] tracking-tight font-['Montserrat']">
            Tactile Craftsmanship. <br className="hidden sm:block" />
            <span className="font-serif-luxury italic font-normal text-blue-900">Rendered in 3D Depth.</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Inspect our physical print materials, cardstock thicknesses, foil reflections, and structural finishes before placing your order.
          </p>
        </div>

        {/* 6-Item Interactive Showcase Selector Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-12">
          {mockupTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeMockup === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveMockup(tab.id as any)}
                className={`tile-select p-3 text-left transition-all duration-200 cursor-pointer border ${
                  isActive
                    ? 'bg-[#0d0d0d] text-white border-[#0d0d0d] shadow-lg'
                    : 'bg-white hover:bg-[#f6f4f1] text-slate-700 border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className={`w-7 h-7 shrink-0 rounded-md flex items-center justify-center transition-colors ${
                      isActive ? 'bg-[#ff8308] text-black' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <span
                    className={`text-[13px] font-semibold tracking-tight leading-tight ${
                      isActive ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {tab.title}
                  </span>
                </div>
                <div
                  className={`text-[11px] font-medium leading-snug line-clamp-2 ${
                    isActive ? 'text-white/60' : 'text-slate-500'
                  }`}
                >
                  {tab.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* SECTION 43: PREMIUM 3D VISITING CARD MOCKUP                              */}
        {/* ========================================================================= */}
        {activeMockup === 'visiting' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                  <span>350-400 GSM Art Card</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] tracking-tight font-['Montserrat'] uppercase">
                    “YOUR BRAND DESERVES A GREAT FIRST IMPRESSION.”
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Experience rich tactile texture with velvet matte lamination, precision rounded corner trims, and radiant hot-stamped gold foil that catches the light from every perspective.
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Velvet Soft-Touch / Matte Anti-Scratch Finish</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Selective Spot UV High-Gloss Relief</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Substantial 0.45mm Physical Card Thickness</span>
                  </div>
                </div>

                {/* Flip Interaction Controller */}
                <div className="pt-2 flex items-center space-x-3">
                  <button
                    onClick={() => setIsCardFlipped(!isCardFlipped)}
                    className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center space-x-2 border border-slate-300 transition-colors cursor-pointer"
                  >
                    <RotateCw className="w-3.5 h-3.5 text-blue-800" />
                    <span>Flip to {isCardFlipped ? 'Front View' : 'Back View'}</span>
                  </button>
                  
                  <span className="text-xs text-slate-400 font-medium">Click card to flip</span>
                </div>

                {/* Primary CTA (Section 43) */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenQuoteModal('visiting-card')}
                    className="btn-3d-primary py-3.5 px-6 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-amber-300" />
                    <span>DESIGN YOUR VISITING CARD</span>
                  </button>

                  <button
                    onClick={() => onOpenWhatsApp('I want to order Premium 400 GSM Visiting Cards.', 'Visiting Card Order')}
                    className="btn-3d-emerald py-3.5 px-5 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>WhatsApp Proof</span>
                  </button>
                </div>

              </div>

              {/* Right 3D Interactive Card Display with physical thickness & flip (Section 43) */}
              <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12 bg-slate-100 rounded-2xl relative overflow-hidden perspective-1000">
                {/* Studio Floor Shadow */}
                <div className="absolute bottom-8 w-1/2 h-6 bg-black/25 rounded-full blur-lg transform rotateX(60deg)" />
                
                {/* 3D Flippable Card Element */}
                <div 
                  onClick={() => setIsCardFlipped(!isCardFlipped)}
                  className={`w-72 sm:w-80 h-48 sm:h-56 rounded-2xl preserve-3d cursor-pointer transition-transform duration-700 ease-out ${
                    isCardFlipped ? '[transform:rotateY(180deg)]' : '[transform:rotateX(8deg)_rotateY(-13deg)]'
                  } hover:scale-105`}
                >
                  
                  {/* FRONT SIDE (Velvet black board + gold foil, real 0.45mm proportions) */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#171717] via-[#0f0f0f] to-[#080808] rounded-2xl p-5 sm:p-6 text-white backface-hidden edge-thickness-dark flex flex-col justify-between border border-white/10 shadow-2xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-300 via-amber-400 to-amber-500 text-[#0a0a0a] font-black text-sm flex items-center justify-center shadow-lg font-cinzel">
                          S
                        </div>
                        <div>
                          <div className="text-xs font-black tracking-wider text-white font-cinzel">SHRISTIKA</div>
                          <div className="text-[8px] tracking-widest text-amber-300 font-semibold uppercase">COMPUTER PRESS</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-[3px] text-amber-300/90 text-[9px] font-extrabold uppercase tracking-wider border border-amber-400/50 bg-white/[0.04]">
                        Spot UV
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="text-sm sm:text-base font-extrabold tracking-wide text-white">
                        Executive Director
                      </div>
                      <div className="text-xs text-slate-300">
                        Brand Identity &amp; Commercial Printing
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-700 flex items-center justify-between text-[10px] text-slate-300">
                      <span>{businessInfo.phone1}</span>
                      <span className="text-amber-300 font-bold">Bodhgaya Studio</span>
                    </div>
                  </div>

                  {/* BACK SIDE (Luxury Minimalist Champagne Crest) */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#151515] to-[#090909] rounded-2xl p-6 text-white [transform:rotateY(180deg)] backface-hidden edge-thickness-dark flex flex-col items-center justify-center text-center border border-amber-400/30 shadow-2xl">
                    <div className="w-14 h-14 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-3 border border-amber-300/40 shadow-inner">
                      <Sparkles className="w-7 h-7" />
                    </div>
                    <div className="text-sm font-black text-white font-cinzel tracking-widest">
                      SHRISTIKA PRESS
                    </div>
                    <div className="text-[9px] text-amber-300 uppercase tracking-widest mt-1">
                      High Quality • Reasonable Price • Fast Service
                    </div>
                    <div className="text-[8px] text-slate-400 mt-2">
                      www.shristikapress.com
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 44: 3D PVC ID CARD SHOWCASE                                       */}
        {/* ========================================================================= */}
        {activeMockup === 'pvc' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Left Specs */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-bold border border-blue-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                  <span>Thermal Sublimation PVC</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] tracking-tight font-['Montserrat']">
                    Heavy-Duty Smart Identity Cards
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    100% waterproof pure thermal PVC with crystal-clear high-definition photo reproduction, barcode/QR integration, and customized woven institutional lanyards.
                  </p>
                </div>

                {/* Floating Tag (Section 44) */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="font-extrabold text-xs text-blue-950 tracking-wider">
                    DURABLE • PROFESSIONAL • CUSTOM
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                    Fade Resistant
                  </span>
                </div>

                <div className="space-y-2 text-xs font-bold text-slate-800">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700" />
                    <span>0.76mm Credit Card Grade Standard (CR80)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700" />
                    <span>Dual-sided high-resolution dye-sublimation print</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700" />
                    <span>Complete ID system for Schools, Colleges &amp; Corporates</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenQuoteModal('pvc-id-card')}
                    className="btn-3d-primary py-3.5 px-6 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4 text-amber-300" />
                    <span>Order School / Staff ID Cards</span>
                  </button>

                  <button
                    onClick={() => onOpenWhatsApp('I want bulk pricing for School/Staff PVC ID Cards.', 'PVC ID Order')}
                    className="btn-3d-emerald py-3.5 px-5 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>Bulk WhatsApp Rate</span>
                  </button>
                </div>

              </div>

              {/* Right 3D PVC Mockup in Perspective Angle (Section 44) */}
              <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12 bg-slate-100 rounded-2xl relative overflow-hidden perspective-1000">
                <div className="w-72 sm:w-80 bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 edge-thickness-card preserve-3d [transform:rotateX(12deg)_rotateY(-15deg)] hover:[transform:rotateX(6deg)_rotateY(-6deg)] transition-transform duration-500">
                  
                  {/* Lanyard punch hole slot */}
                  <div className="w-8 h-2 bg-slate-300 rounded-full mx-auto mb-3 shadow-inner" />

                  {/* Header */}
                  <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-2.5 rounded-xl flex items-center justify-between mb-3 shadow-sm">
                    <div>
                      <div className="text-[10px] font-black tracking-wider uppercase">CENTRAL PUBLIC ACADEMY</div>
                      <div className="text-[7px] text-amber-300 uppercase">Affiliated &amp; Registered</div>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-amber-400 text-slate-900 flex items-center justify-center text-[9px] font-black">
                      C
                    </div>
                  </div>

                  {/* Student Photo & Details */}
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-20 bg-slate-200 rounded-lg border border-slate-300 overflow-hidden shadow-inner shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=300&q=80" 
                        alt="PVC Card Profile" 
                        referrerPolicy="no-referrer"
                        onError={(e) => handleImageError(e, 'pvc-id-card')}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1 text-slate-900">
                      <div className="text-xs font-black uppercase text-blue-950">AARAV VERMA</div>
                      <div className="text-[10px] font-bold text-slate-600">Class: X - Section A</div>
                      <div className="text-[9px] text-slate-500 font-mono">Roll: 24 | DOB: 14/08/2009</div>
                      <div className="text-[9px] text-slate-500 font-mono">Blood Group: B+</div>
                    </div>
                  </div>

                  {/* Footer Barcode */}
                  <div className="mt-4 pt-2 border-t border-slate-100 flex items-center justify-between">
                    <div className="h-6 w-32 bg-slate-800 rounded-xs flex items-center justify-center text-[7px] text-slate-200 font-mono tracking-widest">
                      ||| |||| || ||||| |||
                    </div>
                    <span className="text-[8px] font-black text-blue-900 uppercase">VALID 2026-27</span>
                  </div>

                  {/* Glossy reflection glint */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none" />
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 45: 3D WEDDING CARD SHOWCASE                                      */}
        {/* ========================================================================= */}
        {activeMockup === 'wedding' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-rose-50 text-rose-900 text-xs font-bold border border-rose-200">
                  <Heart className="w-3.5 h-3.5 text-rose-600 fill-rose-600" />
                  <span>Royal Wedding Collection</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] tracking-tight font-serif-luxury italic">
                    “Beautiful Invitations for Beautiful Moments.”
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Opulent wedding invitation suites featuring laser-cut intricate gatefolds, metallic shimmery paper stocks, embossed sacred motifs, and rich hot gold stamping.
                  </p>
                </div>

                <div className="space-y-2.5 text-xs font-bold text-slate-800">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>Includes Envelope, Inner Card &amp; RSVP Insert</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>Custom Hindi &amp; English Traditional Typography</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600" />
                    <span>Metallic Inks, Velvet Boxes &amp; Scroll Cards available</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenQuoteModal('wedding-card')}
                    className="btn-3d-gold py-3.5 px-6 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
                  >
                    <Heart className="w-4 h-4 fill-white text-amber-500" />
                    <span>Order Wedding Cards</span>
                  </button>

                  <button
                    onClick={() => onOpenWhatsApp('I want to see Wedding Invitation Card Catalog and pricing.', 'Wedding Card Inquiry')}
                    className="btn-3d-emerald py-3.5 px-5 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>WhatsApp Catalog</span>
                  </button>
                </div>
              </div>

              {/* Right 3D Wedding Envelope & Card Mockup (Section 45) */}
              <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12 bg-gradient-to-br from-amber-50/60 to-rose-50/40 rounded-2xl relative overflow-hidden perspective-1000">
                <div className="relative w-80 sm:w-96 h-56 sm:h-64 preserve-3d [transform:rotateX(10deg)_rotateY(8deg)]">
                  
                  {/* Envelope Base */}
                  <div className="absolute inset-0 bg-[#8b1528] rounded-2xl shadow-2xl p-4 text-amber-200 border border-amber-300/40 edge-thickness-dark flex items-center justify-center">
                    <div className="w-full h-full border-2 border-dashed border-amber-400/30 rounded-xl flex items-center justify-center p-4 text-center">
                      <div className="space-y-1">
                        <div className="font-cinzel text-xs font-bold tracking-widest text-amber-300">SHUBH VIVAH</div>
                        <div className="font-serif-luxury italic text-sm text-white">Wedding Invitation Suite</div>
                      </div>
                    </div>
                  </div>

                  {/* Partially Open Insert Card Lifted Up in 3D */}
                  <div className="absolute -top-6 left-4 right-4 h-52 bg-[#fefcf8] rounded-xl shadow-xl p-4 border border-amber-300 edge-thickness-gold preserve-3d [transform:translateZ(40px)_rotate(-2deg)] flex flex-col justify-between">
                    <div className="flex justify-between items-center border-b border-amber-200 pb-1.5">
                      <span className="font-cinzel text-[10px] font-extrabold text-amber-900">ROYAL CEREMONY</span>
                      <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                    </div>
                    <div className="text-center py-2 space-y-1">
                      <div className="font-cinzel text-xs text-amber-800 uppercase font-black">|| श्री गणेशाय नमः ||</div>
                      <div className="font-serif-luxury italic text-base text-slate-800 font-bold">Ananya &amp; Vikram</div>
                      <div className="text-[10px] text-slate-500">Cordially invite you to celebrate our union</div>
                    </div>
                    <div className="text-[9px] text-center text-amber-800 font-semibold border-t border-amber-100 pt-1">
                      Bodhgaya Grand Palace • 7:00 PM Onwards
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 46: 3D PHOTO FRAME SHOWCASE                                       */}
        {/* ========================================================================= */}
        {activeMockup === 'photo' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                  <ImageIcon className="w-3.5 h-3.5 text-amber-700" />
                  <span>Archival Photo Framing</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] tracking-tight font-serif-luxury italic">
                    “Turn Memories Into Something You Can Keep.”
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Handcrafted premium solid wood frames, floating glass, matte borders, and studio-grade 300 DPI photographic printing that stays vibrant for decades.
                  </p>
                </div>

                <div className="space-y-2.5 text-xs font-bold text-slate-800">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-700" />
                    <span>Teak Wood, Matte Black, Antique Gold &amp; Acrylic Frames</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-700" />
                    <span>Anti-Glare Glass with UV Protective Coating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-700" />
                    <span>Sizes: 6x8, 8x12, 12x18, 16x24, 20x30 inches &amp; custom</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenQuoteModal('photo-frame')}
                    className="btn-3d-primary py-3.5 px-6 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <ImageIcon className="w-4 h-4 text-amber-300" />
                    <span>Custom Frame Order</span>
                  </button>

                  <button
                    onClick={() => onOpenWhatsApp('I want to get a photo framed. What sizes are available?', 'Photo Frame Order')}
                    className="btn-3d-emerald py-3.5 px-5 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>WhatsApp Image</span>
                  </button>
                </div>
              </div>

              {/* Right 3D Realistic Wooden Frame (Section 46) */}
              <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12 bg-slate-100 rounded-2xl relative overflow-hidden perspective-1000">
                <div className="w-64 sm:w-80 h-80 sm:h-96 bg-[#2e1d15] p-4 rounded-xl shadow-2xl border-4 border-[#4a2e22] edge-thickness-card preserve-3d [transform:rotateX(6deg)_rotateY(-10deg)] hover:[transform:rotateX(2deg)_rotateY(-4deg)] transition-transform duration-500">
                  <div className="w-full h-full bg-white p-3 rounded-lg shadow-inner flex flex-col justify-between relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80" 
                      alt="Studio Framed Artwork" 
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, 'photo-frame')}
                      className="w-full h-full object-cover rounded"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/30 pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 bg-black/75 backdrop-blur-xs text-white p-2 rounded-lg text-center">
                      <div className="text-xs font-bold font-['Montserrat']">Family &amp; Portrait Archival Framing</div>
                      <div className="text-[9px] text-amber-300">Fuji Crystal Archive Paper • Solid Teak</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 47: 3D STICKER SHOWCASE                                           */}
        {/* ========================================================================= */}
        {activeMockup === 'sticker' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-amber-50 text-amber-900 text-xs font-bold border border-amber-200">
                  <Tag className="w-3.5 h-3.5 text-amber-600" />
                  <span>Die-Cut Vinyl Stickers</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] tracking-tight font-serif-luxury italic">
                    “Make Your Brand Stick.”
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Precision contour-cut stickers and product packaging labels in waterproof vinyl, transparent film, kraft paper, and eye-catching holographic finishes.
                  </p>
                </div>

                <div className="space-y-2.5 text-xs font-bold text-slate-800">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Scratch-Proof &amp; Weatherproof Outdoor Adhesive</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Any custom contour die-cut shape without extra die charges</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Easy-peel backing for fast labeling</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenQuoteModal('sticker-printing')}
                    className="btn-3d-primary py-3.5 px-6 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Tag className="w-4 h-4 text-amber-300" />
                    <span>Order Custom Stickers</span>
                  </button>

                  <button
                    onClick={() => onOpenWhatsApp('I want to print custom die-cut product stickers.', 'Sticker Quote')}
                    className="btn-3d-emerald py-3.5 px-5 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>Instant Price</span>
                  </button>
                </div>
              </div>

              {/* Right 3D Lifted Stickers Composition (Section 47) */}
              <div className="lg:col-span-7 flex items-center justify-center p-8 sm:p-14 bg-slate-100 rounded-2xl relative overflow-hidden perspective-1000 min-h-[320px]">
                
                {/* Sticker 1: Round Holographic Peel */}
                <div className="absolute left-8 top-8 w-28 h-28 rounded-full bg-gradient-to-tr from-amber-400 via-rose-400 to-indigo-500 p-1 shadow-2xl [transform:rotate(-12deg)_translateZ(30px)] hover:scale-110 transition-transform cursor-pointer">
                  <div className="w-full h-full rounded-full bg-[#0a0a0a] text-white flex flex-col items-center justify-center text-center p-2 border-2 border-white/40">
                    <span className="text-[10px] font-black uppercase text-amber-300">PREMIUM</span>
                    <span className="text-[8px] font-bold">ORGANIC BEAN</span>
                    <span className="text-[7px] text-slate-400">100% Arabica</span>
                  </div>
                </div>

                {/* Sticker 2: Hexagonal Brand Badge Lifted */}
                <div className="relative z-10 w-36 h-36 bg-[#0d0d0d] text-amber-300 rounded-2xl p-3 shadow-2xl border-2 border-amber-400/80 [transform:rotate(6deg)_translateZ(60px)] hover:scale-105 transition-transform flex flex-col items-center justify-center text-center">
                  <Tag className="w-6 h-6 text-amber-400 mb-1" />
                  <span className="text-xs font-black uppercase font-cinzel tracking-wider">SHRISTIKA</span>
                  <span className="text-[9px] text-white font-semibold">Studio Quality</span>
                  <span className="text-[7px] text-emerald-400 mt-1 uppercase font-bold">Die-Cut Vinyl</span>
                </div>

                {/* Sticker 3: Pill Shaped Label */}
                <div className="absolute right-8 bottom-8 w-36 h-18 rounded-full bg-white text-slate-900 p-2 shadow-2xl border border-slate-300 [transform:rotate(-8deg)_translateZ(40px)] flex items-center justify-center space-x-2">
                  <Sparkles className="w-4 h-4 text-blue-700" />
                  <div className="text-left">
                    <div className="text-[10px] font-black uppercase text-blue-950">HANDMADE</div>
                    <div className="text-[8px] text-slate-500">Cold Pressed Oil</div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SECTION 48: 3D LARGE-FORMAT BANNER / FLEX SHOWCASE                        */}
        {/* ========================================================================= */}
        {activeMockup === 'banner' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-2xl animate-in fade-in duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-50 text-blue-900 text-xs font-bold border border-blue-200">
                  <Layers className="w-3.5 h-3.5 text-blue-700" />
                  <span>Large Format &amp; Signage</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0a0a0a] tracking-tight font-['Montserrat']">
                    High-Tension Heavy-Duty Star Flex
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium">
                    Heavy-weight Korean Star Flex media with vibrant UV inks, reinforced perimeter webbing, and rust-proof brass eyelets engineered to withstand harsh sun and monsoon rains.
                  </p>
                </div>

                <div className="space-y-2.5 text-xs font-bold text-slate-800">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700" />
                    <span>Star Flex, Normal Flex, Backlit Glow Sign &amp; Canvas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700" />
                    <span>Roll-Up Aluminum Standees for Exhibitions &amp; Events</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700" />
                    <span>Same-day turnaround for urgent shop &amp; political banners</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => onOpenQuoteModal('banner-flex')}
                    className="btn-3d-primary py-3.5 px-6 rounded-xl text-white font-black text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <Layers className="w-4 h-4 text-amber-300" />
                    <span>Order Banner / Standee</span>
                  </button>

                  <button
                    onClick={() => onOpenWhatsApp('I need flex banner printing with specific dimensions.', 'Flex Banner Inquiry')}
                    className="btn-3d-emerald py-3.5 px-5 rounded-xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                    <span>Calculate Size &amp; Cost</span>
                  </button>
                </div>
              </div>

              {/* Right 3D Mounted Banner Scene with Grommets & Fabric Drape (Section 48) */}
              <div className="lg:col-span-7 flex items-center justify-center p-6 sm:p-12 bg-slate-900 rounded-2xl relative overflow-hidden perspective-1000">
                <div className="w-full max-w-md h-64 sm:h-72 rounded-xl overflow-hidden shadow-2xl border border-slate-700 relative preserve-3d [transform:rotateX(6deg)_rotateY(-8deg)]">
                  <img 
                    src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80" 
                    alt="Mounted Large Format Banner" 
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, 'banner-flex')}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
                  
                  {/* Realistic Tension Brass Grommets */}
                  <div className="absolute top-3 left-3 w-4 h-4 rounded-full bg-amber-400 border-2 border-slate-900 shadow-md flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  </div>
                  <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-amber-400 border-2 border-slate-900 shadow-md flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  </div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full bg-amber-400 border-2 border-slate-900 shadow-md flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  </div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full bg-amber-400 border-2 border-slate-900 shadow-md flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  </div>

                  <div className="absolute bottom-4 left-6 right-6 text-white">
                    <span className="px-2.5 py-0.5 rounded bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                      Weatherproof 440 GSM Star Flex
                    </span>
                    <div className="text-sm font-extrabold mt-1 font-['Montserrat']">
                      High-Definition Billboard &amp; Shop Front Media
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
