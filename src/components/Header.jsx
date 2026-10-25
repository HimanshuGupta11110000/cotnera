import React, { useState, useEffect } from 'react';
import { Search, Ruler } from 'lucide-react';
import CotneraLogo from './CotneraLogo';
import { useStore } from '../context/StoreContext';

export default function Header() {
  const { 
    cartCount, 
    setIsCartOpen, 
    isMenuOpen, 
    setIsMenuOpen, 
    setIsSearchOpen,
    setIsSizeChartOpen,
    navigateToHome,
    navigateToCollection,
    currentRoute,
  } = useStore();

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 950);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 220; // Distance in px over which the logo docks
      const progress = Math.min(1, Math.max(0, scrollY / maxScroll));
      setScrollProgress(progress);

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 140;
      setIsAtBottom(atBottom);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = currentRoute.type === 'home';

  // Desktop Logo interpolation:
  // Starts centered over Hero at top (width 56vw, top 14.5vw, left 22vw)
  // Flies smoothly into the top-left menu dock as you scroll (width 12.5vw, top 1.1vw, left 7.2vw)
  const logoWidth = !isHomePage || isMenuOpen
    ? 12.5
    : (56 - (scrollProgress * (56 - 12.5)));

  const logoTop = !isHomePage || isMenuOpen
    ? 1.1
    : (14.5 - (scrollProgress * (14.5 - 1.1)));

  const logoLeft = !isHomePage || isMenuOpen
    ? 7.2
    : (22 - (scrollProgress * (22 - 7.2)));

  // Logo Color:
  // If menu is open or non-home: always espresso #482922
  // If home & menu closed: interpolate from #FFFFFF to #482922 as scrollProgress increases
  let logoFill = '#482922';
  if (isHomePage && !isMenuOpen) {
    const r = Math.round(255 - (scrollProgress * (255 - 72)));
    const g = Math.round(255 - (scrollProgress * (255 - 41)));
    const b = Math.round(255 - (scrollProgress * (255 - 34)));
    logoFill = `rgb(${r}, ${g}, ${b})`;
  }

  // Transitions: when toggling menu, animate smoothly with CSS; during active scrub, follow scroll directly
  const logoTransition = isMenuOpen || !isHomePage
    ? 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' 
    : 'top 0.08s linear, left 0.08s linear, width 0.08s linear, fill 0.3s ease';

  // Menu Button offset:
  // Visible if non-home OR menu is open OR scrollProgress > 0.25
  const showMenuButton = !isHomePage || isMenuOpen || scrollProgress > 0.25;
  const menuTranslateX = showMenuButton ? 0 : -350;

  // Top-left Category Pills:
  // Visible only when on home page at top of page and menu is closed
  const showNavPills = isHomePage && !isMenuOpen && scrollProgress < 0.3;
  const navTranslateY = showNavPills ? 0 : -350;
  const navOpacity = showNavPills ? (1 - (scrollProgress / 0.3)) : 0;

  // Center Tagline:
  // Centered at left: 50%
  // Visible on home page when at top (white) OR at bottom (espresso) when menu is closed
  const showTagline = isHomePage && !isMenuOpen && (scrollProgress < 0.3 || isAtBottom);
  const taglineTranslateY = showTagline ? 0 : -350;
  const taglineOpacity = showTagline ? 1 : 0;
  const taglineColor = isAtBottom ? '#482922' : '#FFFFFF';

  return (
    <>
      {/* 1. THE FLYING SCROLL-DRIVEN LOGO (Desktop) */}
      {isDesktop && (
        <div 
          className="fixed z-[60] pointer-events-auto select-none"
          style={{
            top: `${logoTop}vw`,
            left: `${logoLeft}vw`,
            width: `${logoWidth}vw`,
            transition: logoTransition,
          }}
        >
          <button onClick={navigateToHome} className="block w-full h-auto cursor-pointer focus:outline-none">
            <CotneraLogo 
              className={`w-full h-auto ${isHomePage && scrollProgress < 0.3 && !isMenuOpen ? 'drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]' : ''}`} 
              fill={logoFill} 
            />
          </button>

          {/* Authentic Logo Descriptor: 1 Star in Middle, 2 Lines as Neighbors */}
          {isHomePage && scrollProgress < 0.25 && !isMenuOpen && (
            <div 
              className="mt-[0.9vw] flex flex-col items-center justify-center gap-[0.45vw] transition-opacity duration-300 pointer-events-none select-none"
              style={{ opacity: Math.max(0, 1 - (scrollProgress / 0.18)) }}
            >
              {/* Divider: 1 Star in middle, 2 lines in neighbor */}
              <div className="flex items-center justify-center gap-[1.2vw]">
                <span className="h-[1px] w-[5.5vw] bg-white/70"></span>
                <span className="text-[0.9vw] text-[#F6C582] select-none drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">✦</span>
                <span className="h-[1px] w-[5.5vw] bg-white/70"></span>
              </div>

              {/* Descriptor text */}
              <span className="font-heading font-bold text-[0.88vw] tracking-[0.38em] uppercase text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Premium Cotton Wear
              </span>
            </div>
          )}
        </div>
      )}

      {/* 2. THE FLOATING HEADER CONTROLS (Clean 1:1 with Nishorama) */}
      <header className="fixed top-0 left-0 w-full z-[55] pointer-events-none">
        
        {/* DESKTOP HEADER BAR */}
        <div className={`hidden md:flex w-full px-[1.5vw] pt-[1vw] pb-[0.8vw] items-center justify-between pointer-events-auto relative transition-all duration-300 ${
          !isHomePage || scrollProgress > 0.25 ? 'bg-[#F0F0F0]/95 backdrop-blur-md border-b border-neutral-200/60 shadow-xs' : ''
        }`}>
          
          {/* LEFT: Menu Capsule + Top-Left Category Pills */}
          <div className="flex items-center gap-[0.5vw]">
            
            {/* Dark Espresso Menu Capsule */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="h-[1.7vw] bg-[#482922] text-white rounded-full px-[0.8vw] flex items-center gap-[0.5vw] cursor-pointer hover:opacity-90 transition-transform duration-400 ease-out focus:outline-none shadow-md z-[65]"
              style={{
                transform: `translateX(${menuTranslateX}%)`,
                opacity: showMenuButton ? 1 : 0,
                pointerEvents: showMenuButton ? 'auto' : 'none'
              }}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="w-[14px] flex flex-col gap-[3.5px] justify-center items-center">
                <span className={`block w-[14px] h-[1px] bg-white transition-all duration-300 ${isMenuOpen ? 'translate-y-[2px] rotate-45' : ''}`}></span>
                <span className={`block w-[14px] h-[1px] bg-white transition-all duration-300 ${isMenuOpen ? '-translate-y-[2.5px] -rotate-45' : ''}`}></span>
              </div>
              <span className="font-heading text-[0.7vw] font-medium tracking-wide">
                Menu
              </span>
            </button>

            {/* Top-Left Frosted Nav Links (Redirect to dedicated collection pages) */}
            <nav 
              className="flex items-center gap-[0.45vw] transition-all duration-400 ease-[cubic-bezier(0.48,-0.11,0.54,1)]"
              style={{
                transform: `translateY(${navTranslateY}%)`,
                opacity: navOpacity,
                pointerEvents: showNavPills ? 'auto' : 'none'
              }}
            >
              <button 
                onClick={() => navigateToCollection('trouser')}
                className="h-[1.7vw] px-[0.8vw] bg-white/95 backdrop-blur-[20px] border border-[#d5d5d5] rounded-full text-[#482922] font-heading text-[0.7vw] font-medium flex items-center hover:bg-white transition-colors shadow-sm cursor-pointer"
              >
                Trousers
              </button>
              <button 
                onClick={() => navigateToCollection('kurti')}
                className="h-[1.7vw] px-[0.8vw] bg-white/95 backdrop-blur-[20px] border border-[#d5d5d5] rounded-full text-[#482922] font-heading text-[0.7vw] font-medium flex items-center hover:bg-white transition-colors shadow-sm cursor-pointer"
              >
                Kurtis
              </button>
              <button 
                onClick={() => navigateToCollection('anarkali')}
                className="h-[1.7vw] px-[0.8vw] bg-white/95 backdrop-blur-[20px] border border-[#d5d5d5] rounded-full text-[#482922] font-heading text-[0.7vw] font-medium flex items-center hover:bg-white transition-colors shadow-sm cursor-pointer"
              >
                Anarkali
              </button>
              <button 
                onClick={() => navigateToCollection('coord-sets')}
                className="h-[1.7vw] px-[0.8vw] bg-white/95 backdrop-blur-[20px] border border-[#d5d5d5] rounded-full text-[#482922] font-heading text-[0.7vw] font-medium flex items-center hover:bg-white transition-colors shadow-sm cursor-pointer"
              >
                Co-ord Sets
              </button>
              <button 
                onClick={() => navigateToCollection('farshi-salwar')}
                className="h-[1.7vw] px-[0.8vw] bg-white/95 backdrop-blur-[20px] border border-[#d5d5d5] rounded-full text-[#482922] font-heading text-[0.7vw] font-medium flex items-center hover:bg-white transition-colors shadow-sm cursor-pointer"
              >
                Farshi Salwar
              </button>

              <button 
                onClick={() => navigateToCollection('festive')}
                className="h-[1.7vw] px-[0.8vw] bg-white/95 backdrop-blur-[20px] border border-[#d5d5d5] rounded-full text-[#482922] font-heading text-[0.7vw] font-medium flex items-center hover:bg-white transition-colors shadow-sm cursor-pointer"
              >
                Festive Edit
              </button>
              <button 
                onClick={() => setIsSizeChartOpen(true)}
                className="h-[1.7vw] px-[0.7vw] bg-[#FAF8F5]/95 backdrop-blur-[20px] border border-[#C5A059] rounded-full text-[#482922] font-heading text-[0.68vw] font-bold flex items-center gap-[0.3vw] hover:bg-white transition-colors shadow-sm cursor-pointer"
              >
                <Ruler className="w-[0.7vw] h-[0.7vw] text-[#C5A059]" />
                <span>Size Guide</span>
              </button>
            </nav>

          </div>

          {/* CENTER: Tagline in Bigger Font (Matches Nishorama style) */}
          <div 
            className="home-page-line absolute left-1/2 pointer-events-none transition-all duration-400 ease-[cubic-bezier(0.48,-0.11,0.54,1)] z-10"
            style={{
              transform: `translate(-50%, ${taglineTranslateY}%)`,
              opacity: taglineOpacity,
            }}
          >
            <p 
              className="m-0 font-heading text-[1.1vw] font-bold tracking-[0.24em] uppercase select-none transition-colors"
              style={{
                color: taglineColor,
                textShadow: scrollProgress < 0.3 && !isAtBottom ? '0 1px 8px rgba(0,0,0,0.5)' : 'none'
              }}
            >
              " WEAR IT. STYLE IT. REWEAR IT. "
            </p>
          </div>

          {/* RIGHT: Circle Seal + Search + Currency + Cart */}
          <div className="flex items-center gap-[0.5vw]">

            {/* Circle Logo Seal (Like Nishorama's [नी] seal) */}
            <button
              onClick={navigateToHome}
              className="h-[1.7vw] w-[1.7vw] min-w-[28px] min-h-[28px] rounded-full overflow-hidden border border-[#d5d5d5] hover:scale-110 active:scale-95 transition-transform duration-300 shadow-xs cursor-pointer bg-[#2E1810] p-[1.5px] flex items-center justify-center group"
              title="Cotnera - Premium Cotton Wear"
              aria-label="Cotnera Seal"
            >
              <img 
                src="/cotnera-dp.jpg" 
                alt="Cotnera Seal" 
                className="w-full h-full object-cover rounded-full"
              />
            </button>

            {/* Search Pill */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="h-[1.7vw] w-[1.7vw] min-w-[28px] min-h-[28px] bg-white border border-[#d5d5d5] rounded-full flex items-center justify-center text-[#482922] hover:bg-neutral-50 transition-colors cursor-pointer shadow-sm"
              aria-label="Search"
            >
              <Search className="w-[0.8vw] h-[0.8vw] stroke-[1.8]" />
            </button>

            {/* Currency Pill */}
            <div className="flex h-[1.7vw] px-[0.6vw] bg-white border border-[#d5d5d5] rounded-full items-center text-[#482922] font-heading text-[0.65vw] font-bold shadow-sm">
              <span>INR (₹)</span>
            </div>

            {/* Cart Pill */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="h-[1.7vw] px-[0.9vw] bg-white border border-[#d5d5d5] rounded-full flex items-center gap-[0.4vw] text-[#482922] hover:bg-neutral-50 transition-colors cursor-pointer shadow-sm"
            >
              <span className="font-heading text-[0.7vw] font-bold">Cart</span>
              <span className="h-[0.8vw] w-[1px] bg-[#482922] opacity-60"></span>
              <span className="font-heading text-[0.7vw] font-bold">{cartCount}</span>
            </button>

          </div>

        </div>

        {/* MOBILE HEADER (Left: Menu, Center: Logo + Readable Tagline, Right: Circle Logo + Search + Cart) */}
        <div className="flex md:hidden w-full items-center justify-between px-2.5 pt-2 pb-1.5 bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-100 pointer-events-auto">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="h-7 px-2.5 bg-[#482922] text-white rounded-full flex items-center gap-1 focus:outline-none cursor-pointer shrink-0"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            <div className="w-2.5 flex flex-col gap-0.5 justify-center items-center">
              <span className={`block w-2.5 h-[1px] bg-white transition-all ${isMenuOpen ? 'translate-y-[1.5px] rotate-45' : ''}`}></span>
              <span className={`block w-2.5 h-[1px] bg-white transition-all ${isMenuOpen ? '-translate-y-[1.5px] -rotate-45' : ''}`}></span>
            </div>
            <span className="font-heading text-[10px] font-medium">Menu</span>
          </button>

          <div className="flex flex-col items-center justify-center shrink-0">
            <button onClick={navigateToHome} className="block w-[28vw] max-w-[115px] focus:outline-none cursor-pointer">
              <CotneraLogo className="w-full h-auto" fill="#482922" />
            </button>
            <span className="font-heading text-[7.5px] font-black tracking-[0.14em] uppercase text-[#482922] leading-none mt-0.5 select-none whitespace-nowrap">
              " WEAR IT. STYLE IT. REWEAR IT. "
            </span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {/* Circle Logo Seal (Mobile) */}
            <button 
              onClick={navigateToHome}
              className="w-6 h-6 rounded-full overflow-hidden border border-[#d5d5d5] p-[0.5px] bg-[#2E1810] flex items-center justify-center shadow-xs cursor-pointer active:scale-95 transition-transform"
              title="Cotnera"
              aria-label="Cotnera Seal"
            >
              <img 
                src="/cotnera-dp.jpg" 
                alt="Cotnera Seal" 
                className="w-full h-full object-cover rounded-full"
              />
            </button>

            <button onClick={() => setIsSearchOpen(true)} className="p-1 text-[#482922] cursor-pointer" aria-label="Search">
              <Search className="w-3.5 h-3.5" />
            </button>
            <button onClick={() => setIsCartOpen(true)} className="h-7 px-2 bg-neutral-100 border border-neutral-200 rounded-full flex items-center gap-1 text-[#482922] cursor-pointer">
              <span className="font-heading text-[10px] font-bold">Cart</span>
              <span className="text-[10px] font-bold">{cartCount}</span>
            </button>
          </div>
        </div>

      </header>
    </>
  );
}
