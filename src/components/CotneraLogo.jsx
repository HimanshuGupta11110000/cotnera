import React from 'react';

export default function CotneraLogo({ 
  className = "h-auto w-full", 
  fill = "#482922",
  variant = "auto", // "auto" | "white" | "dark" | "gold"
}) {
  // Determine which transparent logo to use based on fill/variant
  let logoSrc = '/cotnera-logo-dark-transparent.png';
  
  if (variant === 'white') {
    logoSrc = '/cotnera-logo-white-transparent.png';
  } else if (variant === 'gold') {
    logoSrc = '/cotnera-logo-gold-transparent.png';
  } else if (variant === 'dark') {
    logoSrc = '/cotnera-logo-dark-transparent.png';
  } else {
    // If fill is white or light RGB (e.g. at top of hero), use white logo
    const isLight = fill === '#FFFFFF' || fill.toLowerCase() === '#fff' || fill.startsWith('rgb(255');
    logoSrc = isLight ? '/cotnera-logo-white-transparent.png' : '/cotnera-logo-dark-transparent.png';
  }

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="COTNERA — wear it. style it. rewear it."
        className="w-full h-auto object-contain max-h-[85px] transition-all duration-300"
        loading="eager"
      />
    </div>
  );
}
