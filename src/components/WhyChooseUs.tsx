import React from 'react';
import { Gem, IndianRupee, Zap, PenTool } from 'lucide-react';

const BENEFITS = [
  {
    Icon: Gem,
    title: 'High Quality Printing',
    desc: 'Calibrated presses, premium stocks and a hand-finished check on every single job that leaves the studio.',
  },
  {
    Icon: IndianRupee,
    title: 'Affordable Pricing',
    desc: 'Transparent rates with no hidden charges. Fair pricing whether you need ten cards or ten thousand.',
  },
  {
    Icon: Zap,
    title: 'Fast Service',
    desc: 'Same-day and next-day turnaround on most products, so your deadline is never the bottleneck.',
  },
  {
    Icon: PenTool,
    title: 'Custom Design',
    desc: 'In-house designers craft layouts, logos and artwork tailored to your brand, not a recycled template.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="bg-soft py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <span className="eyebrow">Why choose us</span>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] text-navy">
            Built on <span className="italic">four promises</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
            Nothing complicated, just the four things every customer asks for
            before they place an order.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {BENEFITS.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              className={`group ${
                i > 0 ? 'lg:border-l lg:border-slate-200 lg:pl-7' : ''
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-royal shadow-sm group-hover:bg-navy group-hover:border-navy group-hover:text-gold transition-colors duration-300">
                <Icon className="w-6 h-6" strokeWidth={1.6} />
              </div>

              <div className="serif-num mt-6 text-lg text-gold">
                0{i + 1}
              </div>

              <h3 className="mt-2 font-heading text-xl lg:text-[26px] font-semibold text-navy leading-[1.15] tracking-[-0.025em]">
                {title}
              </h3>

              <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
