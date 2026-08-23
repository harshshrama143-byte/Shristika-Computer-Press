import React, { useState } from 'react';
import { 
  X, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Copy, 
  Check, 
  MessageCircle,
  ExternalLink 
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { getTelDirectUrl, getWhatsAppDirectUrl } from '../config/businessInfo';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessInfo: BusinessConfig;
}

export const CallModal: React.FC<CallModalProps> = ({
  isOpen,
  onClose,
  businessInfo,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const phone1 = businessInfo.phone1 || "6200796553";
  const phone2 = businessInfo.phone2 || "9835733642";

  const handleCopyNumber = (num: string, key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(num).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }).catch(() => {
      const textArea = document.createElement("textarea");
      textArea.value = num;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-800" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close call modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 pt-1">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-800 flex items-center justify-center mx-auto mb-3 border border-blue-100 shadow-sm">
            <Phone className="w-7 h-7" />
          </div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-blue-50 text-blue-900 text-xs font-bold uppercase tracking-wider mb-1.5 border border-blue-200">
            <ShieldCheck className="w-3 h-3 text-blue-700" />
            <span>Direct Phone Call</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#0a1835] font-['Montserrat']">
            Call Our Studio
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto">
            Click to call instantly, copy the number, or connect on WhatsApp.
          </p>
        </div>

        {/* The Two Call Cards */}
        <div className="space-y-3.5">
          
          {/* Phone 1 */}
          <div className="rounded-xl border-2 border-blue-500/40 hover:border-blue-700 bg-blue-50/40 hover:bg-blue-50/70 transition-all p-3.5 sm:p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-blue-800 text-white flex items-center justify-center shadow-md shadow-blue-900/20 shrink-0">
                  <Phone className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-900 bg-blue-100 px-1.5 py-0.5 rounded">
                      PRIMARY LINE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5 tracking-tight">
                    +91 {phone1}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-2">
                <a
                  href={getTelDirectUrl(phone1)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-800 text-white font-extrabold text-xs flex items-center justify-center space-x-1.5 shadow-sm shadow-blue-950/20 active:scale-95 transition-transform cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-300" />
                  <span>Call</span>
                </a>

                <button
                  type="button"
                  onClick={(e) => handleCopyNumber(phone1, 'p1', e)}
                  title="Copy Phone Number"
                  className="px-3 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-blue-200 text-xs font-bold flex items-center space-x-1 transition-colors cursor-pointer"
                >
                  {copiedKey === 'p1' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span className="hidden xs:inline">Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={getWhatsAppDirectUrl(phone1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                </a>
              </div>

            </div>
          </div>

          {/* Phone 2 */}
          <div className="rounded-xl border-2 border-slate-200 hover:border-blue-600 bg-slate-50/80 hover:bg-blue-50/30 transition-all p-3.5 sm:p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Phone className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-200 px-1.5 py-0.5 rounded">
                      SECONDARY LINE
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5 tracking-tight">
                    +91 {phone2}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center space-x-2">
                <a
                  href={getTelDirectUrl(phone2)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-900 text-white font-extrabold text-xs flex items-center justify-center space-x-1.5 shadow-sm active:scale-95 transition-transform cursor-pointer"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-300" />
                  <span>Call</span>
                </a>

                <button
                  type="button"
                  onClick={(e) => handleCopyNumber(phone2, 'p2', e)}
                  title="Copy Phone Number"
                  className="px-3 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold flex items-center space-x-1 transition-colors cursor-pointer"
                >
                  {copiedKey === 'p2' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span className="hidden xs:inline">Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={getWhatsAppDirectUrl(phone2)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat on WhatsApp"
                  className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Note */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center space-x-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-700 shrink-0" />
            <span>Mon–Sat: 9:00 AM – 8:30 PM</span>
          </div>
          <span className="text-slate-400">Bodhgaya, Bihar</span>
        </div>
      </div>
    </div>
  );
};
