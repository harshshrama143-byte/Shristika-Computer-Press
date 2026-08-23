import React, { useState, useRef } from 'react';
import { 
  FileText, 
  MessageCircle, 
  Phone, 
  Gem
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { handleImageError } from '../utils/imageUtils';
import { ShristikaLogo } from './ShristikaLogo';

interface HeroProps {
  businessInfo: BusinessConfig;
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenWhatsApp: (customMessage?: string, contextTitle?: string) => void;
  onOpenCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  businessInfo, 
  onOpenQuoteModal,
  onOpenWhatsApp,
  onOpenCall,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Smooth mouse parallax interpolation
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || window.innerWidth < 1024) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
    setHoveredCard(null);
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#FBF9F4] select-none"
    >
      {/* Studio Lighting & Glowing Bokeh Ambiance */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#D9A441]/12 via-[#123B78]/6 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-12 w-96 h-96 bg-radial from-[#F2C866]/15 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-12 right-12 w-96 h-96 bg-radial from-[#123B78]/10 via-transparent to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Subtle Studio Print Micro-Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#071A3D_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* MAIN 3D ARTWORK CONTAINER (Matches Reference Layout)      */}
        {/* ========================================================= */}
        <div className="relative min-h-[660px] lg:min-h-[700px] flex flex-col items-center justify-between">

          {/* ------------------------------------------------------- */}
          {/* 1. TOP FLOATING BADGE                                   */}
          {/* ------------------------------------------------------- */}
          <div className="z-20 pt-2 pb-2">
            <div className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#D9A441]/60 shadow-[0_8px_20px_rgba(217,164,65,0.22),inset_0_1px_1px_rgba(255,255,255,1)]">
              <Gem className="w-4 h-4 text-[#D9A441] fill-[#D9A441]/40" />
              <span className="font-['Montserrat'] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#071A3D]">
                PREMIUM PRINTING &amp; CREATIVE STUDIO
              </span>
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* 2. CENTER HEADLINE & SUBHEADLINE                        */}
          {/* ------------------------------------------------------- */}
          <div className="z-20 text-center max-w-3xl mx-auto mt-2 mb-4 space-y-3 px-2">
            
            {/* Extruded 3D Primary Title */}
            <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tight leading-[1.05] font-['Montserrat']">
              <span className="block text-3d-extruded-navy">
                Printing More
              </span>
              <span className="block text-3d-italic-royal text-4xl sm:text-5xl lg:text-[64px] mt-1">
                Than Just Paper.
              </span>
            </h1>

            {/* Golden Ornamental Divider */}
            <div className="flex items-center justify-center space-x-3 py-1 text-[#D9A441]">
              <div className="w-12 sm:w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#D9A441] to-[#D9A441]" />
              <span className="text-xs">✦</span>
              <div className="w-2.5 h-2.5 rotate-45 border border-[#D9A441] bg-[#FAF8F5]" />
              <span className="text-xs">✦</span>
              <div className="w-12 sm:w-20 h-[1.5px] bg-gradient-to-l from-transparent via-[#D9A441] to-[#D9A441]" />
            </div>

            {/* Business Pitch Subtitle */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-700 font-medium max-w-2xl mx-auto leading-relaxed pt-1">
              Crafting tactile impressions with luxury cardstocks, pure thermal PVC, waterproof vinyls, and masterclass large-format printing.
            </p>

          </div>

          {/* ======================================================= */}
          {/* 3. FOUR 3D CORNER PHYSICAL PRINTED OBJECTS              */}
          {/* ======================================================= */}

          {/* ------------------------------------------------------- */}
          {/* CORNER 1: TOP-LEFT 3D VISITING CARD ON MARBLE PODIUM    */}
          {/* ------------------------------------------------------- */}
          <div 
            className="hidden md:block absolute -left-4 lg:-left-2 top-6 lg:top-10 z-10 transition-transform duration-300 ease-out cursor-pointer group"
            style={{
              transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * -14}px, 0) scale(${hoveredCard === 'card' ? 1.05 : 1})`,
            }}
            onMouseEnter={() => setHoveredCard('card')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => onOpenQuoteModal('visiting-card')}
            title="Premium 400 GSM Gold Foil Visiting Card"
          >
            {/* Marble Podium Base */}
            <div className="absolute -bottom-6 -left-4 w-52 h-18 rounded-[50%] bg-gradient-to-b from-[#E2DFD8] via-[#CCC7BC] to-[#B3ADA0] shadow-[0_20px_35px_-8px_rgba(7,26,61,0.35)] border border-white/60 -rotate-3 pointer-events-none" />
            
            {/* Floating Luxury Dark Navy & 24K Gold Card */}
            <div className="relative w-56 lg:w-64 h-34 lg:h-38 rounded-2xl bg-gradient-to-br from-[#071A3D] via-[#0C2552] to-[#040D1E] p-4 text-white shadow-[0_24px_48px_-8px_rgba(7,26,61,0.5),0_6px_16px_rgba(0,0,0,0.3)] border border-[#D9A441]/70 -rotate-12 group-hover:-rotate-6 transition-all duration-300">
              
              {/* Gold Edge Rim Highlight */}
              <div className="absolute inset-0 rounded-2xl border border-white/20 pointer-events-none" />
              
              {/* Card Face Layout */}
              <div className="flex flex-col items-center justify-center h-full text-center space-y-1.5 relative z-10">
                {/* 24K Gold Logo Emblem */}
                <ShristikaLogo size="sm" is3D={true} />
                
                <div>
                  <div className="text-xs sm:text-[13px] font-black tracking-wider text-white font-['Montserrat']">
                    SHRISTIKA
                  </div>
                  <div className="text-[8px] font-extrabold uppercase tracking-widest text-[#F2C866] mt-0.5">
                    COMPUTER PRESS
                  </div>
                </div>

                {/* Delicate Guilloche Gold Waves */}
                <div className="w-24 h-2 opacity-50 bg-[radial-gradient(#D9A441_1px,transparent_1px)] [background-size:6px_6px]" />
              </div>

              {/* Specular Sheen */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* CORNER 2: TOP-RIGHT HANGING LANYARD & PVC ID CARD       */}
          {/* ------------------------------------------------------- */}
          <div 
            className="hidden md:block absolute -right-4 lg:-right-2 top-0 lg:top-2 z-10 transition-transform duration-300 ease-out cursor-pointer group"
            style={{
              transform: `translate3d(${mousePos.x * 20}px, ${mousePos.y * -16}px, 0) scale(${hoveredCard === 'pvc' ? 1.05 : 1})`,
            }}
            onMouseEnter={() => setHoveredCard('pvc')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => onOpenQuoteModal('id-cards')}
            title="Thermal Glossy PVC ID Card"
          >
            {/* Lanyard Navy Ribbon Strap with Gold Clasp Hook */}
            <div className="flex flex-col items-center">
              <div className="w-7 h-16 bg-gradient-to-b from-[#071A3D] to-[#123B78] rounded-t-sm shadow-md border-x border-[#071A3D]" />
              <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#F2C866] to-[#D9A441] border border-white shadow-xs -mt-1 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#071A3D]" />
              </div>
            </div>

            {/* Glossy White PVC ID Card Face */}
            <div className="relative w-46 lg:w-52 h-68 lg:h-74 rounded-2xl bg-gradient-to-b from-white via-slate-50 to-slate-100 p-3.5 shadow-[0_24px_48px_-10px_rgba(7,26,61,0.35),0_6px_14px_rgba(0,0,0,0.15)] border border-slate-200 rotate-6 group-hover:rotate-3 transition-all duration-300 text-slate-800">
              
              {/* Lanyard Punch Hole */}
              <div className="w-6 h-1.5 bg-slate-300 rounded-full mx-auto mb-2 shadow-inner" />

              {/* ID Header with Brand */}
              <div className="text-center pb-2 border-b border-slate-200 flex flex-col items-center">
                <ShristikaLogo size="xs" is3D={true} />
                <div className="text-[10px] font-black text-[#071A3D] font-['Montserrat'] tracking-wide mt-1">
                  SHRISTIKA
                </div>
                <div className="text-[7px] text-[#B88226] font-extrabold uppercase tracking-wider">
                  COMPUTER PRESS
                </div>
              </div>

              {/* ID Photo */}
              <div className="my-2.5 flex justify-center">
                <div className="w-16 h-18 rounded-lg overflow-hidden border-2 border-slate-300 shadow-inner bg-slate-200">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" 
                    alt="ID Portrait" 
                    referrerPolicy="no-referrer"
                    onError={(e) => handleImageError(e, 'pvc-id-card')}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Name & Designation */}
              <div className="text-center space-y-0.5">
                <div className="text-[10px] font-black text-[#071A3D] uppercase">YOUR NAME</div>
                <div className="text-[8px] font-bold text-slate-500 uppercase tracking-wide">DESIGNATION</div>
              </div>

              {/* Barcode Strip */}
              <div className="mt-2.5 pt-1.5 border-t border-dashed border-slate-200 flex flex-col items-center">
                <div className="w-28 h-5 flex justify-between items-end opacity-70">
                  {[4,2,6,3,8,2,7,4,3,6,2,5,8,3,4,2,7,3,5,2].map((h, i) => (
                    <div key={i} className="w-[1.5px] bg-slate-900" style={{ height: `${h * 2.2}px` }} />
                  ))}
                </div>
                <div className="text-[6.5px] font-mono text-slate-400 mt-0.5">SCP-2026-8742</div>
              </div>

            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* CORNER 3: BOTTOM-LEFT GOLD EMBOSSED WEDDING INVITATION  */}
          {/* ------------------------------------------------------- */}
          <div 
            className="hidden md:block absolute -left-8 lg:-left-4 bottom-24 lg:bottom-20 z-10 transition-transform duration-300 ease-out cursor-pointer group"
            style={{
              transform: `translate3d(${mousePos.x * -16}px, ${mousePos.y * 18}px, 0) scale(${hoveredCard === 'wedding' ? 1.05 : 1})`,
            }}
            onMouseEnter={() => setHoveredCard('wedding')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => onOpenQuoteModal('wedding-cards')}
            title="Royal Floral Embossed Wedding Card"
          >
            {/* Hardbound Ivory & Gold Foil Invitation Card */}
            <div className="relative w-50 lg:w-56 h-64 lg:h-70 rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#FBF5E8] to-[#EFE4CF] p-4 shadow-[0_24px_48px_-10px_rgba(184,130,38,0.35),0_6px_16px_rgba(0,0,0,0.15)] border-2 border-[#D9A441]/80 rotate-6 group-hover:rotate-2 transition-all duration-300">
              
              {/* Sculpted Floral Relief Border */}
              <div className="w-full h-full border border-[#D9A441]/50 rounded-xl p-3 flex flex-col justify-between text-center relative overflow-hidden">
                
                {/* Top Corner Floral Accents */}
                <div className="flex justify-between items-center text-[#B88226]">
                  <span className="text-xs">❧</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D9A441]" />
                  <span className="text-xs">☙</span>
                </div>

                <div className="space-y-1">
                  <div className="font-serif-luxury italic text-xl sm:text-2xl text-[#8C6218] font-bold">
                    Wedding
                  </div>
                  <div className="font-serif-luxury italic text-lg sm:text-xl text-[#8C6218]">
                    Invitation
                  </div>
                  <div className="text-[8px] tracking-[0.25em] text-[#A67B28] uppercase font-bold pt-1">
                    WITH LOVE
                  </div>
                  <div className="text-xs text-rose-700 mt-1">❤</div>
                </div>

                {/* Bottom Corner Floral Accents */}
                <div className="flex justify-between items-center text-[#B88226] border-t border-[#D9A441]/30 pt-1.5">
                  <span className="text-[7.5px] font-serif tracking-widest text-[#8C6218] uppercase">350 GSM SHIMMER</span>
                  <span className="text-xs">❦</span>
                </div>

              </div>

              {/* 3D Metallic Golden Sphere Pearl Beads & Satin Ribbon Accent */}
              <div className="absolute -bottom-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-[#FFEBA8] via-[#D9A441] to-[#8C6218] shadow-[0_8px_16px_rgba(0,0,0,0.4)] border border-white/60 pointer-events-none" />
              <div className="absolute -bottom-1 -left-1 w-5 h-5 rounded-full bg-gradient-to-br from-[#FFEBA8] via-[#D9A441] to-[#8C6218] shadow-md border border-white/40 pointer-events-none" />
            </div>
          </div>

          {/* ------------------------------------------------------- */}
          {/* CORNER 4: BOTTOM-RIGHT ROLLED FLEX BANNER SCROLL        */}
          {/* ------------------------------------------------------- */}
          <div 
            className="hidden md:block absolute -right-8 lg:-right-4 bottom-24 lg:bottom-20 z-10 transition-transform duration-300 ease-out cursor-pointer group"
            style={{
              transform: `translate3d(${mousePos.x * 16}px, ${mousePos.y * 18}px, 0) scale(${hoveredCard === 'banner' ? 1.05 : 1})`,
            }}
            onMouseEnter={() => setHoveredCard('banner')}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => onOpenQuoteModal('flex-banner')}
            title="Star Flex Large-Format Banner"
          >
            {/* Rolled Top Golden Rod */}
            <div className="w-54 lg:w-60 h-4 rounded-full bg-gradient-to-r from-[#B88226] via-[#F2C866] to-[#8C6218] shadow-md border border-white/40 mx-auto -mb-2 relative z-10" />

            {/* Flex Banner Print Surface */}
            <div className="relative w-50 lg:w-56 h-58 lg:h-64 rounded-b-xl overflow-hidden shadow-[0_24px_48px_-10px_rgba(7,26,61,0.4),0_6px_16px_rgba(0,0,0,0.2)] border-x-2 border-b-2 border-[#D9A441] -rotate-6 group-hover:-rotate-2 transition-all duration-300 bg-[#071A3D]">
              
              {/* High-Resolution Landscape Artwork */}
              <div className="h-34 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80" 
                  alt="Mountain Landscape Print" 
                  referrerPolicy="no-referrer"
                  onError={(e) => handleImageError(e, 'banner-flex')}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A3D] via-transparent to-black/30" />
              </div>

              {/* Brand Footer on Banner */}
              <div className="p-3 text-white flex flex-col justify-between h-[calc(100%-136px)]">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 rounded bg-[#F2C866] text-[#071A3D] flex items-center justify-center font-black text-xs">
                    S
                  </div>
                  <div>
                    <div className="text-[11px] font-black text-white font-['Montserrat'] tracking-wide">
                      SHRISTIKA
                    </div>
                    <div className="text-[7px] text-[#F2C866] font-extrabold tracking-widest uppercase">
                      COMPUTER PRESS
                    </div>
                  </div>
                </div>

                <div className="text-[8px] text-slate-300 font-medium flex justify-between items-center border-t border-slate-700/60 pt-1.5">
                  <span>Star Flex &amp; Vinyl</span>
                  <span className="text-[#F2C866] font-bold">HD Eco-Solvent</span>
                </div>
              </div>

            </div>

            {/* Rolled Bottom Golden Rod */}
            <div className="w-54 lg:w-60 h-4 rounded-full bg-gradient-to-r from-[#B88226] via-[#F2C866] to-[#8C6218] shadow-md border border-white/40 mx-auto -mt-2 relative z-10" />
          </div>

          {/* ======================================================= */}
          {/* 4. THREE CENTER 3D TACTILE CAPSULE BUTTONS              */}
          {/* ======================================================= */}
          <div className="z-20 w-full max-w-4xl mx-auto mt-8 lg:mt-12 mb-2 px-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
              
              {/* BUTTON 1: GET A QUOTE (Deep Navy with 3D Gold Extrusion) */}
              <button
                onClick={() => onOpenQuoteModal()}
                className="btn-3d-capsule btn-3d-capsule-navy py-3 sm:py-3.5 px-5 rounded-2xl sm:rounded-3xl flex items-center justify-center space-x-3.5 text-left cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-[#D9A441]/60 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                  <FileText className="w-5 h-5 text-[#F2C866]" />
                </div>
                <div>
                  <div className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-white font-['Montserrat']">
                    GET A QUOTE
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium">
                    Quick &amp; Easy
                  </div>
                </div>
              </button>

              {/* BUTTON 2: WHATSAPP US (Rich Emerald Green with 3D Bevel) */}
              <button
                onClick={() => onOpenWhatsApp()}
                className="btn-3d-capsule btn-3d-capsule-green py-3 sm:py-3.5 px-5 rounded-2xl sm:rounded-3xl flex items-center justify-center space-x-3.5 text-left cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/40 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-white text-[#10b981]" />
                </div>
                <div>
                  <div className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-white font-['Montserrat']">
                    WHATSAPP US
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-emerald-100 font-medium">
                    Chat Instantly
                  </div>
                </div>
              </button>

              {/* BUTTON 3: CALL NOW (Ivory White with 3D Bevel) */}
              <button
                onClick={onOpenCall}
                className="btn-3d-capsule btn-3d-capsule-ivory py-3 sm:py-3.5 px-5 rounded-2xl sm:rounded-3xl flex items-center justify-center space-x-3.5 text-left cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#071A3D]/5 border border-slate-300 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-[#071A3D]" />
                </div>
                <div>
                  <div className="text-xs sm:text-[13px] font-black uppercase tracking-wider text-[#071A3D] font-['Montserrat']">
                    CALL NOW
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
                    Speak Directly
                  </div>
                </div>
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
