import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BusinessConfig } from '../types';
import { getWhatsAppDirectUrl, getTelDirectUrl } from '../config/businessInfo';
import { SERVICES_LIST } from '../data/servicesData';

interface ContactSectionProps {
  businessInfo: BusinessConfig;
  onOpenWhatsApp: (customMessage?: string, contextTitle?: string) => void;
  onOpenCall: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  businessInfo,
  onOpenWhatsApp,
  onOpenCall,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'visiting-card',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const selectedServiceObj = SERVICES_LIST.find(s => s.id === formData.service);
    const serviceName = selectedServiceObj ? selectedServiceObj.title : formData.service;

    const whatsappMessage = `*New Printing Requirement Form Submission*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Service Required:* ${serviceName}\n` +
      `*Message / Specs:* ${formData.message || 'Standard inquiry'}`;

    setSubmitted(true);

    // Prompt user to open WhatsApp to send directly
    setTimeout(() => {
      onOpenWhatsApp(whatsappMessage, "Form Submission");
    }, 400);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading per Section 20 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow mb-3">Direct Studio Communication</span>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#0b1736] tracking-tight">
            Contact Our Printing Studio
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Reach out directly for instant price quotations, design proofs, and urgent printing requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: Contact Information Cards & Direct Dual Links */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-start space-x-3.5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-100">
                  <MapPin className="w-5 h-5 text-blue-800" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                      Studio Address
                    </h4>
                    <a 
                      href={businessInfo.googleMapsUrl || "https://maps.app.goo.gl/18daCaEqs1FBpkTK8"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-blue-700 hover:text-blue-900 hover:underline flex items-center space-x-0.5 py-1.5 min-h-9"
                    >
                      <span>Open Maps</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-sm font-bold text-slate-900 leading-snug mt-1">
                    {businessInfo.businessName}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {businessInfo.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Dual WhatsApp Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <MessageCircle className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800">
                    WhatsApp Chat Lines (Dual)
                  </h4>
                  <span className="text-[11px] text-slate-500 font-semibold">
                    Instant reply for files &amp; proofs
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={getWhatsAppDirectUrl(businessInfo.whatsapp1 || '6200796553', "Hello Shristika Computer Press, I have a printing inquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3 rounded-xl bg-emerald-50/70 hover:bg-emerald-100/80 border border-emerald-200 flex items-center justify-between text-xs font-bold text-slate-900 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>WhatsApp 1: +91 {businessInfo.whatsapp1 || '6200796553'}</span>
                  </span>
                  <span className="text-emerald-800 flex items-center space-x-1">
                    <span>Chat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <a
                  href={getWhatsAppDirectUrl(businessInfo.whatsapp2 || '9835733642', "Hello Shristika Computer Press, I have a printing inquiry.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-3 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 flex items-center justify-between text-xs font-bold text-slate-900 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span>WhatsApp 2: +91 {businessInfo.whatsapp2 || '9835733642'}</span>
                  </span>
                  <span className="text-emerald-800 flex items-center space-x-1">
                    <span>Chat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>

            {/* Dual Direct Calling Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-100">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
                    Direct Phone Calling (Dual)
                  </h4>
                  <span className="text-[11px] text-slate-500 font-semibold">
                    Speak directly with printing experts
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                <a
                  href={getTelDirectUrl(businessInfo.phone1 || '6200796553')}
                  className="w-full p-3 rounded-xl bg-blue-50/70 hover:bg-blue-100/80 border border-blue-200 flex items-center justify-between text-xs font-bold text-slate-900 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-blue-800" />
                    <span>Line 1: +91 {businessInfo.phone1 || '6200796553'}</span>
                  </span>
                  <span className="text-blue-900 flex items-center space-x-1">
                    <span>Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>

                <a
                  href={getTelDirectUrl(businessInfo.phone2 || '9835733642')}
                  className="w-full p-3 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 flex items-center justify-between text-xs font-bold text-slate-900 transition-colors"
                >
                  <span className="flex items-center space-x-2">
                    <Phone className="w-3.5 h-3.5 text-blue-800" />
                    <span>Line 2: +91 {businessInfo.phone2 || '9835733642'}</span>
                  </span>
                  <span className="text-blue-900 flex items-center space-x-1">
                    <span>Call</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>
            </div>

            {/* Studio Note */}
            <div className="p-4 rounded-xl bg-blue-900 text-white text-xs flex items-center space-x-2.5 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="font-medium">
                Both numbers support instant WhatsApp file sharing for PDF, CDR, PSD, and photos.
              </span>
            </div>

          </div>

          {/* RIGHT COLUMN: Fast Requirement Submission Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg relative">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#0b1736]">
                Send Printing Requirement
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fill in the details below to receive instant pricing and digital proof options.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl animate-in fade-in duration-300">
                <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 font-['Montserrat']">
                  Requirement Prepared!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Your inquiry details have been assembled. WhatsApp is ready to send this directly to our studio team for immediate review.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-5 px-5 py-2.5 rounded-xl bg-blue-900 text-white text-xs font-bold transition-colors"
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none text-sm font-medium text-slate-900 transition-all bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Contact / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none text-sm font-medium text-slate-900 transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                    Select Printing Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none text-sm font-medium text-slate-900 transition-all bg-slate-50/50"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.number}. {srv.title} ({srv.categoryLabel})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                    Requirement Details (Quantity, Size, Paper Type, Notes)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="e.g. Need 1000 Visiting cards in Velvet Matte finish with Gold Foil logo. Do you provide custom design layout?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-2 focus:ring-blue-100 outline-none text-sm font-medium text-slate-900 transition-all bg-slate-50/50"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-navy hover:bg-navy-deep text-white font-semibold text-sm tracking-[0.06em] shadow-lg flex items-center justify-center space-x-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>Send Requirement to Studio</span>
                  </button>
                </div>

                <div className="text-center pt-2">
                  <span className="text-[11px] text-slate-500 flex items-center justify-center space-x-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>We respect privacy. Your information is strictly used for order estimation.</span>
                  </span>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
