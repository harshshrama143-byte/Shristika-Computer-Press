import React from 'react';
import { 
  X, 
  CheckCircle2, 
  MessageCircle, 
  FileText, 
  Clock, 
  Sparkles, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Check,
  Printer
} from 'lucide-react';
import { ServiceItem, BusinessConfig } from '../types';
import { handleImageError } from '../utils/imageUtils';

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceItem | null;
  businessInfo: BusinessConfig;
  onOpenWhatsApp: (customMessage?: string, contextTitle?: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  isOpen,
  onClose,
  service,
  businessInfo,
  onOpenWhatsApp,
  onOpenQuoteModal,
}) => {
  if (!isOpen || !service) return null;

  const handleAskWhatsApp = () => {
    const msg = `Hello Shristika Computer Press, I would like to ask about *${service.title}* (${service.number}). Please share pricing and options.`;
    onOpenWhatsApp(msg, service.title);
  };

  const handleGetQuote = () => {
    onClose();
    onOpenQuoteModal(service.id);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-slate-500 hover:text-slate-900 p-2 rounded-full shadow-md border border-slate-200 transition-colors"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image & Badge */}
        <div className="relative h-56 sm:h-64 w-full bg-slate-900 overflow-hidden shrink-0">
          <img
            src={service.imageUrl}
            alt={service.title}
            referrerPolicy="no-referrer"
            onError={(e) => handleImageError(e, service.id)}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1835] via-[#0a1835]/40 to-transparent" />
          
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black tracking-wide">
                SERVICE {service.number}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                {service.categoryLabel}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Montserrat'] tracking-tight">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 space-y-6 flex-grow">
          
          {/* Overview Description */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-1.5 flex items-center space-x-1.5">
              <Printer className="w-4 h-4 text-blue-700" />
              <span>Service Overview</span>
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
              {service.fullDesc}
            </p>
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs">
            <div>
              <span className="font-bold text-slate-500 block uppercase mb-0.5">Specifications</span>
              <span className="font-semibold text-slate-900">{service.specifications}</span>
            </div>
            <div>
              <span className="font-bold text-slate-500 block uppercase mb-0.5">Turnaround Time</span>
              <span className="font-semibold text-blue-800 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>{service.standardTurnaround}</span>
              </span>
            </div>
          </div>

          {/* Suitable For & Customizations Two Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Suitable For */}
            <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-2.5 flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>Suitable For</span>
              </h4>
              <ul className="space-y-2">
                {service.suitableFor.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <Check className="w-3.5 h-3.5 text-blue-700 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Available Customization */}
            <div className="bg-amber-50/40 p-4 rounded-xl border border-amber-200/70">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-950 mb-2.5 flex items-center space-x-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Available Customization</span>
              </h4>
              <ul className="space-y-2">
                {service.customizations.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features Checklist */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2.5">
              Key Quality Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-xs text-slate-700 bg-slate-50 px-3 py-2 rounded-lg border border-slate-200/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Action Buttons in Sticky Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAskWhatsApp}
            className="flex-1 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md shadow-emerald-700/20 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>Ask About This Service (WhatsApp)</span>
          </button>

          <button
            onClick={handleGetQuote}
            className="py-3 px-6 rounded-xl bg-blue-800 hover:bg-blue-900 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center space-x-2 shadow-md shadow-blue-900/20 transition-all cursor-pointer"
          >
            <FileText className="w-4 h-4 text-amber-300" />
            <span>Get a Fast Quote</span>
          </button>
        </div>

      </div>
    </div>
  );
};
