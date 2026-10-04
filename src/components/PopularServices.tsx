import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Layers,
  Tag,
  FileText,
  Award,
} from 'lucide-react';
import { SERVICES_LIST } from '../data/servicesData';

interface PopularServicesProps {
  onOpenServiceModal: (serviceId: string) => void;
  onOpenQuoteModal: (serviceId?: string) => void;
}

const POPULAR = [
  { id: 'pvc-id-card', Icon: ShieldCheck },
  { id: 'visiting-card', Icon: CreditCard },
  { id: 'banner-flex', Icon: Layers },
  { id: 'sticker-printing', Icon: Tag },
  { id: 'pamphlet-flyer', Icon: FileText },
  { id: 'certificate-printing', Icon: Award },
];

export const PopularServices: React.FC<PopularServicesProps> = ({
  onOpenServiceModal,
  onOpenQuoteModal,
}) => {
  const items = POPULAR.map((p) => {
    const svc = SERVICES_LIST.find((s) => s.id === p.id);
    return svc ? { ...p, svc } : null;
  }).filter(Boolean) as { id: string; Icon: typeof ShieldCheck; svc: (typeof SERVICES_LIST)[number] }[];

  return (
    <section id="services" className="bg-soft py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] text-navy">
            Popular Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
            Six things we print every day, each one produced on calibrated
            presses, checked by hand, and finished to a standard you can feel.
          </p>
        </div>

        {/* Cards — two feature cells (middle column) carry the navy weight so the
            grid reads as an intentional bento, not six identical white tiles. */}
        <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ id, Icon, svc }, i) => {
            const feature = i === 1 || i === 4;
            return (
              <article
                key={id}
                className={`group flex flex-col rounded-2xl border p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
                  feature
                    ? 'bg-navy border-navy shadow-[0_18px_40px_-24px_rgba(11,23,54,0.6)] hover:shadow-[0_28px_56px_-26px_rgba(11,23,54,0.7)]'
                    : 'bg-white border-slate-200/80 shadow-sm hover:shadow-lg hover:border-blue-200'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors duration-300 ${
                    feature
                      ? 'bg-white/10 border-white/15 text-gold group-hover:bg-gold group-hover:border-gold group-hover:text-navy'
                      : 'bg-soft border-slate-200 text-royal group-hover:bg-navy group-hover:border-navy group-hover:text-gold'
                  }`}
                >
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>

                <h3
                  className={`mt-5 font-heading text-lg font-semibold tracking-[-0.01em] ${
                    feature ? 'text-white' : 'text-navy'
                  }`}
                >
                  {svc.title}
                </h3>

                <p
                  className={`mt-2.5 text-[15px] leading-relaxed flex-1 ${
                    feature ? 'text-slate-300' : 'text-slate-500'
                  }`}
                >
                  {svc.shortDesc}
                </p>

                <button
                  onClick={() => onOpenServiceModal(id)}
                  className={`mt-4 inline-flex items-center gap-1.5 self-start min-h-11 py-2 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    feature ? 'text-gold group-hover:gap-2.5' : 'text-royal group-hover:gap-2.5'
                  }`}
                >
                  View Service
                  <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            );
          })}
        </div>

        {/* Foot CTA */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <p className="text-slate-500 text-[15px]">
            Need something outside this list? We print custom jobs too.
          </p>
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-6 py-3 text-sm font-semibold text-navy bg-white border border-slate-300 rounded-full hover:border-navy hover:bg-white transition-all cursor-pointer"
          >
            Request a quotation
          </button>
        </div>
      </div>
    </section>
  );
};
