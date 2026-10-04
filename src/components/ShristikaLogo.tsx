import React from 'react';

interface ShristikaLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  className?: string;
  showText?: boolean;
  textColor?: 'dark' | 'light';
  is3D?: boolean;
  animateHover?: boolean;
}

export const ShristikaLogo: React.FC<ShristikaLogoProps> = ({
  size = 'md',
  className = '',
  showText = false,
  textColor = 'dark',
  is3D = true,
  animateHover = true,
}) => {
  const sizeMap: Record<string, string> = {
    xs: 'w-7 h-7 min-w-[28px]',
    sm: 'w-9 h-9 min-w-[36px]',
    md: 'w-12 h-12 sm:w-14 sm:h-14 min-w-[48px]',
    lg: 'w-16 h-16 sm:w-18 sm:h-18 min-w-[64px]',
    xl: 'w-20 h-20 sm:w-24 sm:h-24 min-w-[80px]',
    hero: 'w-28 h-28 sm:w-36 sm:h-36 min-w-[112px]',
  };

  const dimensionClass = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center space-x-3 sm:space-x-4 select-none ${className}`}>
      {/* Struck-seal mark: circular emblem, fine gold bezel with a gap,
          and a 3D tip on hover so it reads as minted metal. */}
      <div 
        className={`seal relative ${dimensionClass} rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
          is3D ? 'shadow-[0_6px_16px_-2px_rgba(20,33,17,0.35),0_2px_5px_rgba(0,0,0,0.12)]' : ''
        } ${animateHover ? 'hover:scale-[1.03] hover:shadow-[0_10px_25px_-3px_rgba(20,33,17,0.45)]' : ''}`}
      >
        <span className="seal-bezel" aria-hidden="true" />

        <div className="seal-tilt absolute inset-0">
          <img
            src="/logo.png"
            alt="Shristika Computer Press Logo"
            className="w-full h-full object-cover rounded-full select-none pointer-events-none"
            loading="eager"
            decoding="async"
          />

          {/* Optical Glass Highlight */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
        </div>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span 
            className={`font-['Cinzel',serif] font-black tracking-wider leading-none text-base sm:text-lg lg:text-xl ${
              textColor === 'light' ? 'text-white drop-shadow-sm' : 'text-[#0a0a0a]'
            }`}
          >
            SHRISTIKA
          </span>
          <span 
            className={`font-['Montserrat',sans-serif] font-black text-[9px] sm:text-[10px] lg:text-[11px] tracking-widest uppercase leading-tight mt-0.5 ${
              textColor === 'light' ? 'text-amber-300' : 'text-[#392bd5]'
            }`}
          >
            COMPUTER PRESS
          </span>
          <span 
            className={`text-[8px] font-bold tracking-wider hidden sm:block uppercase mt-0.5 ${
              textColor === 'light' ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Printing &amp; Designing Solutions
          </span>
        </div>
      )}
    </div>
  );
};
export default ShristikaLogo;
