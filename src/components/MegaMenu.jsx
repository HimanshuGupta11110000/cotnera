import React, { useEffect } from 'react';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BRAND, MEGA_MENU_DROPS, MEGA_MENU_COLLECTIONS } from '../data/mockData';
import { useStore } from '../context/StoreContext';

export default function MegaMenu() {
  const { 
    isMenuOpen, 
    setIsMenuOpen, 
    setActiveCategory, 
    setIsSizeChartOpen,
    navigateToHome,
    navigateToCollection 
  } = useStore();

  const handleCategoryClick = (catId) => {
    setIsMenuOpen(false);
    if (catId === 'all') {
      navigateToHome();
      const target = document.getElementById('collection');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigateToCollection(catId);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <div 
      className={`fixed inset-0 z-[50] bg-[#f5f5f5] pt-[4.8vw] pb-[1.5vw] px-[1.5vw] flex flex-col justify-between overflow-y-auto transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isMenuOpen 
          ? 'opacity-100 pointer-events-auto [clip-path:inset(0_0_0%_0)]' 
          : 'opacity-0 pointer-events-none [clip-path:inset(0_0_100%_0)]'
      }`}
    >
      {/* Main Container: White Editorial Card like Nishorama header-menu-main */}
      <div className="w-full bg-white rounded-[1rem] md:rounded-[1.5rem] p-5 md:p-[1.8vw] shadow-xs flex flex-col justify-between gap-[1.5vw]">
        
        {/* 1. Categorized Navigation Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 md:gap-[2vw] pt-2">
          
          {/* Column 1: Core Categories */}
          <div className="flex flex-col gap-2 md:gap-[0.7vw]">
            <h4 className="font-heading font-black text-xs md:text-[0.8vw] text-[#482922] uppercase tracking-wider">
              Core Categories
            </h4>
            <ul className="space-y-1.5 md:space-y-[0.6vw]">
              {[
                { id: 'all', name: 'All Pieces' },
                { id: 'trouser', name: 'Trousers' },
                { id: 'kurti', name: 'Kurtis' },
                { id: 'anarkali', name: 'Anarkali' },
                { id: 'coord-sets', name: 'Co-ord Sets' },
                { id: 'farshi-salwar', name: 'Farshi Salwar' },
                { id: 'most-wanted', name: 'Most Wanted' },
                { id: 'festive', name: 'Festive Collection' },
                { id: 'dresses', name: 'Dresses & Maxis' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleCategoryClick(item.id)}
                    className="font-heading text-xs md:text-[0.78vw] font-bold text-[#482922] uppercase tracking-wider hover:opacity-70 transition-opacity text-left cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Fabrics & Crafts */}
          <div className="flex flex-col gap-2 md:gap-[0.6vw]">
            <h4 className="font-heading font-black text-xs md:text-[0.8vw] text-[#482922] uppercase tracking-wider">
              Fabrics & Craft
            </h4>
            <ul className="space-y-1 md:space-y-[0.45vw] text-xs md:text-[0.72vw] text-[#482922]/85">
              <li>Pure Cotton Slub</li>
              <li>Handloom Ikat Weave</li>
              <li>Chanderi Silk</li>
              <li>Gold Foil Detailing</li>
              <li>Fine Organza</li>
              <li className="font-bold text-[#482922]">100% Breathable Cotton</li>
            </ul>
          </div>

          {/* Column 3: Fitting & Size Guide */}
          <div className="flex flex-col gap-2 md:gap-[0.6vw]">
            <h4 className="font-heading font-black text-xs md:text-[0.8vw] text-[#482922] uppercase tracking-wider">
              Fitting & Sizing
            </h4>
            <ul className="space-y-1.5 md:space-y-[0.45vw]">
              <li>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    setIsSizeChartOpen(true);
                  }}
                  className="font-heading text-xs md:text-[0.75vw] font-bold text-[#C5A059] underline hover:text-[#482922] transition-colors cursor-pointer text-left"
                >
                  Open Body Size Chart (Inches / CM)
                </button>
              </li>
              <li className="text-xs md:text-[0.72vw] text-[#482922]/80">XXS to XXL Available</li>
              <li className="text-xs md:text-[0.72vw] text-[#482922]/80">Free WhatsApp Custom Sizing</li>
              <li className="text-xs md:text-[0.72vw] text-[#482922]/80">Tailored Relaxed Fit</li>
            </ul>
          </div>

          {/* Column 4: Studio Info */}
          <div className="flex flex-col gap-2 md:gap-[0.6vw]">
            <h4 className="font-heading font-black text-xs md:text-[0.8vw] text-[#482922] uppercase tracking-wider">
              Cotnera Studio
            </h4>
            <ul className="space-y-1 md:space-y-[0.45vw] text-xs md:text-[0.72vw] text-[#482922]/85">
              <li>"Wear It. Style It. Rewear It."</li>
              <li>Handcrafted in India</li>
              <li className="font-bold text-emerald-700">10% OFF on All Pieces</li>
              <li>Direct UPI & WhatsApp Orders</li>
              <li>Pure Breathable Cotton</li>
            </ul>
          </div>

          {/* Column 5: Direct Contact */}
          <div className="flex flex-col gap-2 md:gap-[0.6vw]">
            <h4 className="font-heading font-black text-xs md:text-[0.8vw] text-[#482922] uppercase tracking-wider">
              Concierge
            </h4>
            <div className="space-y-1 text-xs md:text-[0.72vw] text-[#482922]/85">
              <p className="font-bold">24x7 Support</p>
              <p>{BRAND.phone}</p>
              <a
                href={`https://wa.me/${BRAND.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Hi Cotnera! I have a question regarding products/sizing.')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-1 font-bold text-emerald-700 underline"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>

        </div>

        {/* 2. Middle Editorial Visual Strip (Nishorama 1:1 Merging Effect with Feathered Gradients) */}
        <div className="hidden md:flex w-full h-[22vw] min-h-[200px] max-h-[290px] gap-[1%] my-[1vw] relative overflow-hidden bg-white select-none">
          {/* Left: Artisan Handcrafting (25% width) */}
          <div className="relative h-full w-[25%] overflow-hidden flex-shrink-0">
            <img 
              src="/menu-craft-artisan.jpg" 
              alt="Indian Cotton Handcraft & Block-Printing" 
              className="w-full h-full object-cover block"
              loading="lazy"
            />
            {/* Left Edge Dissolve */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-[10vw] bg-gradient-to-r from-white to-transparent" />
            {/* Right Edge Merging Gradient */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[10vw] bg-gradient-to-l from-white to-transparent" />
          </div>

          {/* Middle: Pure Cotton Field & Harvest (49% width) */}
          <div className="relative h-full w-[49%] overflow-hidden flex-shrink-0">
            <img 
              src="/menu-cotton-field.jpg" 
              alt="Pure Cotton Field & Harvest" 
              className="w-full h-full object-cover block"
              loading="lazy"
            />
            {/* Left Merging Gradient */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-[15vw] bg-gradient-to-r from-white to-transparent" />
            {/* Right Merging Gradient */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[15vw] bg-gradient-to-l from-white to-transparent" />
          </div>

          {/* Right: Handcrafted Dyed Cotton Textiles (24.5% width) */}
          <div className="relative h-full w-[24.5%] overflow-hidden flex-shrink-0">
            <img 
              src="/menu-textile-drying.jpg" 
              alt="Handcrafted Dyed Cotton Textiles" 
              className="w-full h-full object-cover block"
              loading="lazy"
            />
            {/* Left Merging Gradient */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-[10vw] bg-gradient-to-r from-white to-transparent" />
            {/* Right Edge Dissolve */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[10vw] bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>
      </div>

      {/* 3. Support & Direct Help Bar */}
      <div className="w-full pt-[1.2vw] pb-[0.5vw] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[2vw] text-[#482922]">
          
          {/* Order Support Box */}
          <div className="flex flex-col gap-1.5">
            <span className="font-heading text-xs md:text-[0.75vw] font-bold">24x7 Order Support</span>
            <span className="text-[11px] md:text-[0.68vw] text-neutral-600">Direct assistance on WhatsApp & Call anytime</span>
            <div className="flex items-center gap-2 mt-1">
              <a 
                href={`tel:${BRAND.phone}`}
                className="h-[1.7vw] min-h-[28px] px-3 bg-white border border-[#d5d5d5] rounded-full flex items-center gap-1.5 text-[11px] md:text-[0.68vw] font-heading font-medium hover:bg-neutral-50 transition-colors shadow-sm"
              >
                <Phone className="w-3 h-3 text-[#482922]" />
                <span>Call {BRAND.phone}</span>
              </a>
              <a 
                href={`https://wa.me/${BRAND.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="h-[1.7vw] min-h-[28px] px-3 bg-white border border-[#d5d5d5] rounded-full flex items-center gap-1.5 text-[11px] md:text-[0.68vw] font-heading font-medium hover:bg-neutral-50 transition-colors shadow-sm"
              >
                <MessageCircle className="w-3 h-3 text-emerald-700" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Direct Payment & Orders */}
          <div className="flex flex-col gap-1.5">
            <span className="font-heading text-xs md:text-[0.75vw] font-bold">Direct UPI & WhatsApp Orders</span>
            <span className="text-[11px] md:text-[0.68vw] text-neutral-600">
              Pay in 1-click via Google Pay, PhonePe, Paytm, or chat with us on WhatsApp to order directly.
            </span>
          </div>

          {/* Social & Studio */}
          <div className="flex flex-col gap-1">
            <span className="font-heading text-xs md:text-[0.75vw] font-bold">Cotnera Studio</span>
            <span className="text-[11px] md:text-[0.68vw] text-neutral-600">
              Instagram: <a href="https://instagram.com/cotnera__" target="_blank" rel="noreferrer" className="underline font-bold text-[#482922]">@cotnera__</a>
            </span>
            <span className="text-[11px] md:text-[0.68vw] text-neutral-600">
              Handcrafted in India • Pure Breathable Cotton
            </span>
          </div>
        </div>
      </div>
    );
  }
