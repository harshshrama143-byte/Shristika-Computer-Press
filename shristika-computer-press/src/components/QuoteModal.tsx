import React, { useState, useEffect } from 'react';
import { 
  X, 
  FileText, 
  MessageCircle, 
  Phone,
  Sparkles, 
  CheckCircle2, 
  Send, 
  ArrowRight,
  Printer,
  ShieldCheck
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { SERVICES_LIST } from '../data/servicesData';
import { ShristikaLogo } from './ShristikaLogo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  businessInfo: BusinessConfig;
  onOpenWhatsApp: (customMessage?: string, contextTitle?: string) => void;
  onOpenCall: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  businessInfo,
  onOpenWhatsApp,
  onOpenCall,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState(initialServiceId || SERVICES_LIST[0].id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [quantity, setQuantity] = useState('100 units');
  const [sizeMaterial, setSizeMaterial] = useState('Standard Size / Matte Finish');
  const [designStatus, setDesignStatus] = useState<'yes' | 'no' | 'need_design'>('yes');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setSelectedServiceId(initialServiceId);
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const currentService = SERVICES_LIST.find((s) => s.id === selectedServiceId) || SERVICES_LIST[0];

  const designStatusLabels = {
    yes: 'Yes, Print-ready file available (PDF/CDR/AI/PSD)',
    no: 'No file, need basic typesetting',
    need_design: 'Need Complete Creative Graphic Designing',
  };

  const handleSendToWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Please enter your Name and Mobile Number.");
      return;
    }

    const summary = `*Instant Printing Quote Request - Shristika Computer Press*\n\n` +
      `• *Service:* ${currentService.title} (${currentService.number})\n` +
      `• *Customer Name:* ${name}\n` +
      `• *Mobile Number:* ${phone}\n` +
      `• *Estimated Quantity:* ${quantity}\n` +
      `• *Size / Material:* ${sizeMaterial}\n` +
      `• *Design Ready Status:* ${designStatusLabels[designStatus]}\n` +
      `• *Special Notes:* ${notes || 'Standard specifications'}`;

    setIsSubmitted(true);
    onClose();
    onOpenWhatsApp(summary, `Quote for ${currentService.title}`);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-700 via-indigo-600 to-amber-400" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-2 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 pt-1 flex flex-col items-center">
          <div className="mb-2">
            <ShristikaLogo size="md" is3D={true} />
          </div>
          <h3 className="text-2xl font-black text-[#0a1835] font-['Montserrat']">
            Request Instant Price Quote
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Get estimated pricing, material samples, and turnaround details directly.
          </p>
        </div>

        <form onSubmit={handleSendToWhatsApp} className="space-y-4">
          
          {/* Customer Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Kumar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm font-medium text-slate-900 bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                Phone / WhatsApp Number *
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9835733642"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm font-medium text-slate-900 bg-slate-50/50"
              />
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
              Select Printing Service *
            </label>
            <select
              value={selectedServiceId}
              onChange={(e) => setSelectedServiceId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm font-medium text-slate-900 bg-slate-50/50"
            >
              {SERVICES_LIST.map((srv) => (
                <option key={srv.id} value={srv.id}>
                  {srv.number} — {srv.title} ({srv.categoryLabel})
                </option>
              ))}
            </select>
          </div>

          {/* Quantity & Size/Material */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                Estimated Quantity *
              </label>
              <input
                type="text"
                placeholder="e.g. 500 pcs / 2 banners / 50 cards"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm font-medium text-slate-900 bg-slate-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
                Size / Material Preference
              </label>
              <input
                type="text"
                placeholder="e.g. 350 GSM Velvet / 6x4 ft Star Flex"
                value={sizeMaterial}
                onChange={(e) => setSizeMaterial(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm font-medium text-slate-900 bg-slate-50/50"
              />
            </div>
          </div>

          {/* Design Status */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
              File &amp; Design Status *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <label className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center space-x-2 cursor-pointer transition-all ${
                designStatus === 'yes' ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold' : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}>
                <input
                  type="radio"
                  name="designStatus"
                  value="yes"
                  checked={designStatus === 'yes'}
                  onChange={() => setDesignStatus('yes')}
                  className="text-emerald-600"
                />
                <span>Ready File Available</span>
              </label>

              <label className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center space-x-2 cursor-pointer transition-all ${
                designStatus === 'no' ? 'border-blue-600 bg-blue-50 text-blue-950 font-bold' : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}>
                <input
                  type="radio"
                  name="designStatus"
                  value="no"
                  checked={designStatus === 'no'}
                  onChange={() => setDesignStatus('no')}
                  className="text-blue-600"
                />
                <span>Basic Text Only</span>
              </label>

              <label className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center space-x-2 cursor-pointer transition-all ${
                designStatus === 'need_design' ? 'border-amber-500 bg-amber-50 text-amber-950 font-bold' : 'border-slate-200 bg-slate-50 text-slate-700'
              }`}>
                <input
                  type="radio"
                  name="designStatus"
                  value="need_design"
                  checked={designStatus === 'need_design'}
                  onChange={() => setDesignStatus('need_design')}
                  className="text-amber-600"
                />
                <span>Need Studio Design</span>
              </label>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1">
              Additional Notes / Questions
            </label>
            <textarea
              rows={2}
              placeholder="Any specific delivery timeline, color requirements, or sample queries..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none text-xs sm:text-sm font-medium text-slate-900 bg-slate-50/50"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-3 space-y-2.5">
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-700/25 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
              <span>Submit &amp; Get WhatsApp Quote</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenCall();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center space-x-2 border border-slate-200 transition-colors cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-blue-800" />
              <span>Call Directly for Urgent Order</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
