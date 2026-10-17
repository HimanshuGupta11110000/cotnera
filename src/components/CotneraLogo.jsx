import React from 'react';

export default function CotneraLogo({ 
  className = "h-auto w-full", 
  fill = "#482922",
  variant = "auto", // "auto" | "white" | "dark" | "gold"
}) {
  // Determine which transparent wordmark to use based on fill/variant
  let logoSrc = '/cotnera-wordmark-dark.png';
  
  if (variant === 'white') {
    logoSrc = '/cotnera-wordmark-white.png';
  } else if (variant === 'gold') {
    logoSrc = '/cotnera-wordmark-gold.png';
  } else if (variant === 'dark') {
    logoSrc = '/cotnera-wordmark-dark.png';
  } else {
    // If fill is white or light RGB (e.g. at top of hero), use white wordmark
    const isLight = fill === '#FFFFFF' || fill.toLowerCase() === '#fff' || fill.startsWith('rgb(255');
    logoSrc = isLight ? '/cotnera-wordmark-white.png' : '/cotnera-wordmark-dark.png';
  }

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <img
        src={logoSrc}
        alt="COTNERA"
        className="w-full h-auto object-contain transition-all duration-300"
        loading="eager"
      />
    </div>
  );
}
