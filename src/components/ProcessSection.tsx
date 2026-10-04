import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onStartOrder: () => void;
}

const STEPS = [
  {
    n: '01',
    title: 'Choose Your Product',
    desc: 'Pick from our catalogue, or simply tell us what you need printed.',
  },
  {
    n: '02',
    title: 'Send Your Design',
    desc: 'Share your artwork, or have our in-house designers create it for you.',
  },
  {
    n: '03',
    title: 'Confirm Your Order',
    desc: 'Approve the digital proof, quantities and final pricing. Nothing starts before you say yes.',
  },
  {
    n: '04',
    title: 'Get It Printed',
    desc: 'We print, finish and quality-check your order, then hand it over or deliver it.',
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onStartOrder,
}) => {
  return (
    <section id="process" className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-[-0.03em] text-navy">
            Simple Ordering Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-500 leading-relaxed">
            Four steps, no back-and-forth.
          </p>
        </div>

        <div className="relative mt-12 sm:mt-16">
          {/* Connecting rail (desktop) — organises the four steps */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-[27px] left-[12%] right-[12%] h-px bg-slate-300"
          />

          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <li
                key={step.n}
                className="relative text-center lg:text-left"
              >
                <div className="relative mx-auto lg:mx-0 w-14 h-14 rounded-full bg-navy border border-navy shadow-[0_10px_26px_-14px_rgba(11,23,54,0.65)] flex items-center justify-center">
                  <span className="serif-num block text-xl text-gold">
                    {step.n}
                  </span>
                  <span className="absolute -right-0.5 -top-0.5 w-2.5 h-2.5 rounded-full bg-gold ring-2 ring-white" />
                </div>

                <h3 className="mt-6 font-heading text-lg sm:text-xl font-semibold text-navy tracking-[-0.02em]">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-500 lg:max-w-[260px] mx-auto lg:mx-0">
                  {step.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={onStartOrder}
            className="btn-3d-primary px-7 py-4 text-[15px] font-semibold flex items-center space-x-2 cursor-pointer"
          >
            <span>Order Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
