import React from 'react';
import { X, ShieldCheck, FileCheck } from 'lucide-react';
import { BusinessConfig } from '../types';

interface PrivacyTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'privacy' | 'terms' | null;
  businessInfo: BusinessConfig;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({
  isOpen,
  onClose,
  type,
  businessInfo,
}) => {
  if (!isOpen || !type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">
          {isPrivacy ? <ShieldCheck className="w-4 h-4" /> : <FileCheck className="w-4 h-4" />}
          <span>{isPrivacy ? 'Privacy & Data Protection' : 'Standard Terms of Service'}</span>
        </div>

        <h3 className="text-2xl font-semibold text-[#0b1736] mb-4">
          {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
        </h3>

        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At <strong>{businessInfo.businessName}</strong>, we respect your privacy and handle all customer-provided design files, photographs, document proofs, and identity records with complete confidentiality.
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">1. Information We Collect</h4>
              <p>
                We only collect contact details (Name, Phone number, Email) and printing assets provided directly by you to prepare, quote, and produce your requested print order.
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">2. Confidentiality of Printed Files</h4>
              <p>
                Artwork files, identity card databases, certificates, and personal photographs submitted for printing are stored securely and are never shared with any third party.
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">3. Communication</h4>
              <p>
                We contact you via phone or WhatsApp solely for order proof confirmations, status updates, and quotation replies.
              </p>
            </>
          ) : (
            <>
              <p>
                By requesting services or placing an order with <strong>{businessInfo.businessName}</strong>, you acknowledge and agree to our standard operating guidelines:
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">1. Digital Proof Approval</h4>
              <p>
                Prior to final mass printing of wedding cards, visiting cards, banners, or stationery, a digital proof is shared for verification. Customers are requested to verify all spelling, phone numbers, and design elements. Once approved, production commences.
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">2. Turnaround &amp; Delivery</h4>
              <p>
                Standard turnaround times are estimated based on normal production workflow. Urgent same-day requirements can be accommodated upon request.
              </p>
              <h4 className="font-bold text-slate-900 text-sm mt-3">3. Quality Commitment</h4>
              <p>
                We are committed to delivering high-quality prints using authentic inks and premium media substrates at reasonable rates.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white rounded-xl text-xs font-bold transition-colors"
          >
            Understood &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
