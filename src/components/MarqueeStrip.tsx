import React from 'react';

/**
 * Infinite ticker strip — the page's "press sheet running through the rollers".
 *
 * Two identical halves sit inside .ticker-track; translating the track by -50%
 * lands exactly on the seam, so the loop is seamless. Hovering pauses it.
 */
const TICKER_ITEMS = [
  'Visiting Card',
  'PVC ID Card',
  'Flex Banner',
  'Wedding Card',
  'Die-Cut Stickers',
  'Photo Frame',
  'Certificate Printing',
  'Letterhead & Envelope',
  'Passport Photos',
  'Pamphlets & Flyers',
  'School ID Cards',
  'Custom Printing',
];

export const MarqueeStrip: React.FC = () => (
  <div
    className="ticker-host relative overflow-hidden bg-[#0a0a0a] border-y border-amber-400/25 py-3.5 select-none"
    aria-hidden="true"
  >
    {/* edge fades so items dissolve into the strip instead of hard-cutting */}
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

    <div className="ticker-track">
      {[0, 1].map((half) => (
        <div key={half} className="flex shrink-0 items-center">
          {TICKER_ITEMS.map((label) => (
            <span key={`${half}-${label}`} className="flex shrink-0 items-center">
              <span className="px-5 text-[11px] sm:text-xs font-black uppercase tracking-[0.22em] text-white/85 whitespace-nowrap">
                {label}
              </span>
              <span className="text-amber-400 text-[9px] leading-none">◆</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
