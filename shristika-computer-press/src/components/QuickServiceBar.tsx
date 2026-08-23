import React from 'react';
import { 
  CreditCard, 
  ShieldCheck, 
  Tag, 
  Layers, 
  Heart, 
  Image as ImageIcon,
  ArrowRight
} from 'lucide-react';

interface QuickServiceBarProps {
  onSelectService: (serviceId: string) => void;
}

export const QuickServiceBar: React.FC<QuickServiceBarProps> = ({ onSelectService }) => {
  const quickItems = [
    { id: 'visiting-card', label: 'VISITING CARDS', icon: CreditCard, count: '350 GSM' },
    { id: 'pvc-id-card', label: 'PVC ID CARDS', icon: ShieldCheck, count: 'Waterproof' },
    { id: 'sticker-printing', label: 'STICKERS', icon: Tag, count: 'Die-Cut' },
    { id: 'banner-flex', label: 'BANNERS', icon: Layers, count: 'Star Flex' },
    { id: 'wedding-card', label: 'WEDDING CARDS', icon: Heart, count: 'Foil & Velvet' },
    { id: 'photo-frame', label: 'PHOTO FRAMES', icon: ImageIcon, count: 'Custom Teak' },
  ];

  return (
    <section className="relative z-20 -mt-7 sm:-mt-9 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/8 border border-slate-200/90 p-2 sm:p-3">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {quickItems.map((item) => {
            const IconComp = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSelectService(item.id)}
                className="group p-2.5 sm:p-3 rounded-xl hover:bg-blue-50/80 border border-transparent hover:border-blue-200 transition-all flex flex-col items-center text-center cursor-pointer"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-900 group-hover:bg-blue-800 group-hover:text-amber-300 flex items-center justify-center mb-1.5 transition-colors shadow-xs">
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="text-[11px] sm:text-xs font-extrabold text-[#0a1835] group-hover:text-blue-800 tracking-tight leading-tight">
                  {item.label}
                </span>
                <span className="text-[10px] text-slate-500 font-semibold mt-0.5">
                  {item.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
