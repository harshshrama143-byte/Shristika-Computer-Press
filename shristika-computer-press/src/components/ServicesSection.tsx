import React, { useState } from 'react';
import { 
  SERVICE_CATEGORIES, 
  SERVICES_LIST 
} from '../data/servicesData';
import { handleImageError } from '../utils/imageUtils';
import { 
  ServiceCategory, 
  ServiceItem, 
  BusinessConfig 
} from '../types';
import { 
  Printer, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Clock, 
  FileText,
  CreditCard,
  ShieldCheck,
  Tag,
  Layers,
  HeartHandshake,
  Image as ImageIcon,
  Camera,
  UserCheck,
  Mail,
  Briefcase,
  Award,
  GraduationCap,
  Eye,
  CheckCircle2
} from 'lucide-react';

interface ServicesSectionProps {
  businessInfo: BusinessConfig;
  onOpenQuoteModal: (serviceId?: string) => void;
  onOpenServiceModal: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  businessInfo,
  onOpenQuoteModal,
  onOpenServiceModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap: Record<string, React.ElementType> = {
    CreditCard,
    ShieldCheck,
    Tag,
    Layers,
    HeartHandshake,
    Image: ImageIcon,
    Camera,
    UserCheck,
    Mail,
    FileText,
    Briefcase,
    Award,
    GraduationCap,
    Sparkles
  };

  const filteredServices = SERVICES_LIST.filter((service) => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.specifications.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Studio Ambient Radiance */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Editorial Serif Accent */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-blue-900 text-xs font-black uppercase tracking-widest border border-slate-200">
            <Printer className="w-3.5 h-3.5 text-blue-700" />
            <span>FULL PRODUCTION CATALOG</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#081226] tracking-tight font-['Montserrat'] leading-tight">
            Everything You Need. <br className="hidden sm:block" />
            <span className="font-serif-luxury italic font-normal text-blue-900">Printed Professionally.</span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
            From high-density cardstocks to outdoor weather-proof vinyls — explore all 14 specialized printing and bespoke graphic design services.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto w-full pb-4 mb-12 scrollbar-none">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-[#0a1835] text-white border-blue-900 shadow-lg shadow-blue-950/20 scale-102'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 14 3D-Interactive Service Cards Grid (Section 42 & 56) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 perspective-1000">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Printer;
            
            return (
              <div
                key={service.id}
                className="card-hover-3d bg-[#fcfbf9] rounded-2xl border border-slate-200/90 shadow-sm flex flex-col justify-between group overflow-hidden hover:border-blue-400/80 transition-all duration-400"
              >
                <div>
                  {/* Top Image Preview & Service Number with 3D Forward Shift (Section 42) */}
                  <div className="relative h-48 w-full bg-slate-950 overflow-hidden preserve-3d">
                    <img 
                      src={service.imageUrl} 
                      alt={service.title}
                      referrerPolicy="no-referrer"
                      onError={(e) => handleImageError(e, service.id)}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-600 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#081226]/90 via-[#081226]/25 to-transparent" />
                    
                    {/* Service Number Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-[#081226]/95 backdrop-blur-md text-amber-300 font-mono text-xs font-black tracking-wider border border-amber-400/30 shadow-md">
                        {service.number}
                      </span>
                    </div>

                    {/* Category Label */}
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-extrabold shadow-sm">
                        {service.categoryLabel}
                      </span>
                    </div>

                    {/* Title Overlay with 3D Icon Rotation (Section 42) */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <div className="flex items-center space-x-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-600/90 backdrop-blur-sm text-amber-300 flex items-center justify-center shadow-md group-hover:rotate-8 transition-transform duration-300">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold font-['Montserrat'] tracking-tight text-white group-hover:text-amber-200 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3.5">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {service.shortDesc}
                    </p>

                    {/* Turnaround & Specifications snippet */}
                    <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-500 font-semibold">
                      <span className="flex items-center space-x-1 text-blue-900 font-bold">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <span>{service.standardTurnaround}</span>
                      </span>
                      <span className="text-slate-500 truncate max-w-[150px]">
                        {service.specifications.split('|')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons: View Details | 3D Get Quote Button */}
                <div className="p-4 bg-white border-t border-slate-200/80 flex items-center gap-2">
                  <button
                    onClick={() => onOpenServiceModal(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center space-x-1.5 border border-slate-200 transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-blue-800" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#081226] hover:bg-blue-950 text-white font-black text-xs flex items-center justify-center space-x-1 shadow-sm transition-all cursor-pointer group-hover:bg-blue-900"
                  >
                    <span className="text-amber-300">Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-300 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
