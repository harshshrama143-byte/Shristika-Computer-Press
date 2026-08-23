import React from 'react';
import { Phone, MessageCircle, FileText, ArrowUp } from 'lucide-react';
import { BusinessConfig } from '../types';

interface FloatingContactProps {
  businessInfo: BusinessConfig;
  onOpenWhatsApp: () => void;
  onOpenCall: () => void;
  onOpenQuoteModal: () => void;
}

export const FloatingContact: React.FC<FloatingContactProps> = ({
  businessInfo,
  onOpenWhatsApp,
  onOpenCall,
  onOpenQuoteModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Action Buttons (Fixed on Screen Sides) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end space-y-3">
        {/* Floating WhatsApp Button */}
        <button
          onClick={onOpenWhatsApp}
          aria-label="Chat on WhatsApp"
          className="group relative flex items-center bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl shadow-emerald-700/40 hover:scale-110 transition-all cursor-pointer"
        >
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
            WhatsApp Studio
          </span>
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-amber-400 rounded-full ring-2 ring-white animate-pulse" />
        </button>

        {/* Scroll To Top Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-xs shadow-md border border-slate-700 hover:border-slate-500 transition-colors cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Desktop Floating Call Button (Bottom Left) */}
      <div className="hidden sm:flex fixed bottom-6 left-6 z-40 items-center">
        <button
          onClick={onOpenCall}
          aria-label="Call Printing Studio"
          className="group relative flex items-center bg-blue-900 hover:bg-blue-800 text-white p-3.5 rounded-full shadow-2xl shadow-blue-950/40 hover:scale-110 transition-all cursor-pointer border border-blue-700"
        >
          <Phone className="w-6 h-6 text-amber-300" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold text-xs pl-0 group-hover:pl-2">
            Call Printing Studio
          </span>
        </button>
      </div>

      {/* Mobile Sticky Bottom Bar per Section 21 */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-3 py-2">
        <div className="grid grid-cols-3 gap-2">
          {/* Mobile Call Button */}
          <button
            onClick={onOpenCall}
            className="py-2.5 px-2 rounded-xl bg-slate-100 active:bg-slate-200 text-slate-900 font-extrabold text-xs flex flex-col items-center justify-center space-y-0.5 border border-slate-200"
          >
            <Phone className="w-4 h-4 text-blue-800" />
            <span className="text-[10px] uppercase font-black">Call Now</span>
          </button>

          {/* Mobile WhatsApp Button */}
          <button
            onClick={onOpenWhatsApp}
            className="py-2.5 px-2 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-extrabold text-xs flex flex-col items-center justify-center space-y-0.5 shadow-md shadow-emerald-700/20"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span className="text-[10px] uppercase font-black">WhatsApp</span>
          </button>

          {/* Mobile Quote Button */}
          <button
            onClick={onOpenQuoteModal}
            className="py-2.5 px-2 rounded-xl bg-[#0a1835] active:bg-blue-950 text-amber-300 font-extrabold text-xs flex flex-col items-center justify-center space-y-0.5 shadow-md shadow-blue-950/20"
          >
            <FileText className="w-4 h-4 text-amber-300" />
            <span className="text-[10px] uppercase font-black">Get Quote</span>
          </button>
        </div>
      </div>
    </>
  );
};
