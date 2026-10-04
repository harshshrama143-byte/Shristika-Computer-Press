import React, { useState } from 'react';
import { 
  X, 
  MessageCircle, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  ExternalLink,
  Phone
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { getWhatsAppDirectUrl, getWhatsAppApiUrl, getWhatsAppWebUrl } from '../config/businessInfo';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  businessInfo: BusinessConfig;
  customMessage?: string;
  contextTitle?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  businessInfo,
  customMessage,
  contextTitle,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const defaultMsg = customMessage || "Hello Shristika Computer Press, I would like to enquire about your printing services.";
  const num1 = businessInfo.whatsapp1 || "6200796553";
  const num2 = businessInfo.whatsapp2 || "9835733642";

  const url1 = getWhatsAppDirectUrl(num1, defaultMsg);
  const url2 = getWhatsAppDirectUrl(num2, defaultMsg);

  const handleCopyNumber = (num: string, key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(num).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }).catch(() => {
      // Fallback copy
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

  const handleCopyLink = (url: string, key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    navigator.clipboard.writeText(url).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }).catch(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    });
  };

  const handleDirectClick = (url: string) => {
    // Attempt standard window open as backup if anchor target doesn't trigger in some webview
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = url;
    }
    setTimeout(() => onClose(), 600);
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
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close WhatsApp selector"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-5 pt-1">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 border border-emerald-100 shadow-sm">
            <MessageCircle className="w-7 h-7 fill-emerald-600 text-emerald-600" />
          </div>
          <div className="inline-flex items-center space-x-1.5 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-1.5 border border-emerald-200">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            <span>Instant Chat Support</span>
          </div>
          <h3 className="text-2xl font-extrabold text-[#0b1736]">
            Connect on WhatsApp
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto">
            {contextTitle ? `Connecting for: ${contextTitle}` : "Click any line below to open WhatsApp instantly, or copy number."}
          </p>
        </div>

        {/* Message Preview Box if custom */}
        {customMessage && (
          <div className="mb-4 p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700">
            <span className="font-bold text-slate-900 block mb-0.5">Pre-filled Message:</span>
            <p className="line-clamp-2 italic text-slate-600">{customMessage}</p>
          </div>
        )}

        {/* The Two WhatsApp Options with Direct Native Links and Copy Actions */}
        <div className="space-y-3.5">
          
          {/* WhatsApp 1 */}
          <div className="rounded-xl border-2 border-emerald-500/40 hover:border-emerald-600 bg-emerald-50/40 hover:bg-emerald-50/70 transition-all p-3.5 sm:p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-700/20 shrink-0">
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded">
                      PRIMARY LINE
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5 tracking-tight">
                    +91 {num1}
                  </div>
                </div>
              </div>

              {/* Action Buttons for Line 1 */}
              <div className="flex items-center space-x-2">
                <a
                  href={url1}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleDirectClick(url1)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center space-x-1.5 shadow-sm shadow-emerald-700/20 transition-transform active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Chat Now</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                </a>

                <button
                  type="button"
                  onClick={(e) => handleCopyNumber(num1, 'num1', e)}
                  title="Copy Phone Number"
                  className="px-3 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-emerald-200 text-xs font-bold flex items-center space-x-1 transition-colors cursor-pointer"
                >
                  {copiedKey === 'num1' ? (
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
              </div>

            </div>
          </div>

          {/* WhatsApp 2 */}
          <div className="rounded-xl border-2 border-slate-200 hover:border-emerald-500 bg-slate-50/80 hover:bg-emerald-50/30 transition-all p-3.5 sm:p-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-md">
                  <MessageCircle className="w-5 h-5 fill-white text-slate-800" />
                </div>
                <div>
                  <div className="flex items-center space-x-1.5">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-700 bg-slate-200 px-1.5 py-0.5 rounded">
                      SECONDARY LINE
                    </span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-slate-900 mt-0.5 tracking-tight">
                    +91 {num2}
                  </div>
                </div>
              </div>

              {/* Action Buttons for Line 2 */}
              <div className="flex items-center space-x-2">
                <a
                  href={url2}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleDirectClick(url2)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-extrabold text-xs flex items-center justify-center space-x-1.5 shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>Chat Now</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-80" />
                </a>

                <button
                  type="button"
                  onClick={(e) => handleCopyNumber(num2, 'num2', e)}
                  title="Copy Phone Number"
                  className="px-3 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-bold flex items-center space-x-1 transition-colors cursor-pointer"
                >
                  {copiedKey === 'num2' ? (
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
              </div>

            </div>
          </div>

        </div>

        {/* Alternate Options / Direct Links */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
          <div className="flex items-center space-x-1.5 text-emerald-700 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span>Both lines are active 9 AM - 8:30 PM</span>
          </div>

          <a
            href={getWhatsAppWebUrl(num1, defaultMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 hover:underline font-bold text-[11px] flex items-center space-x-1"
          >
            <span>Open WhatsApp Web</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
