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
    md: 'w-11 h-11 sm:w-12 sm:h-12 min-w-[44px]',
    lg: 'w-14 h-14 sm:w-16 sm:h-16 min-w-[56px]',
    xl: 'w-20 h-20 sm:w-24 sm:h-24 min-w-[80px]',
    hero: 'w-28 h-28 sm:w-36 sm:h-36 min-w-[112px]',
  };

  const dimensionClass = sizeMap[size] || sizeMap.md;

  return (
    <div className={`inline-flex items-center space-x-2.5 sm:space-x-3.5 select-none ${className}`}>
      {/* Precision Circular Luxury Seal with Double Gold Ring */}
      <div 
        className={`relative ${dimensionClass} rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
          is3D ? 'shadow-[0_6px_16px_-2px_rgba(20,33,17,0.35),0_2px_5px_rgba(0,0,0,0.12)]' : ''
        } ${animateHover ? 'hover:scale-105 hover:shadow-[0_10px_25px_-3px_rgba(20,33,17,0.45)]' : ''}`}
      >
        <img
          src="/logo.svg"
          alt="Shristika Computer Press Logo"
          className="w-full h-full object-contain rounded-full select-none pointer-events-none"
          loading="eager"
        />
        
        {/* Optical Glass Highlight */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none" />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span 
            className={`font-['Cinzel',serif] font-black tracking-wider leading-none text-base sm:text-lg lg:text-xl ${
              textColor === 'light' ? 'text-white drop-shadow-sm' : 'text-[#071A3D]'
            }`}
          >
            SHRISTIKA
          </span>
          <span 
            className={`font-['Montserrat',sans-serif] font-black text-[9px] sm:text-[10px] lg:text-[11px] tracking-widest uppercase leading-tight mt-0.5 ${
              textColor === 'light' ? 'text-amber-300' : 'text-[#123B78]'
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
