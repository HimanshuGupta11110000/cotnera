import React, { useEffect } from 'react';
import { Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import { BRAND, MEGA_MENU_DROPS, MEGA_MENU_COLLECTIONS } from '../data/mockData';
import { useStore } from '../context/StoreContext';

export default function MegaMenu() {
  const { isMenuOpen, setIsMenuOpen } = useStore();

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
      {/* Main Container */}
      <div className="w-full flex-1 flex flex-col justify-between gap-[2.5vw] pt-4 md:pt-0">
        
        {/* 1. Categorized Navigation Columns (1:1 with Nishorama) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-9 gap-5 md:gap-[1.2vw] pt-2">
          
          {/* Column 1: Editorial Drops */}
          <div className="flex flex-col gap-2 md:gap-[0.7vw]">
            <ul className="space-y-1.5 md:space-y-[0.6vw]">
              {MEGA_MENU_DROPS.map((drop) => (
                <li key={drop.name} className="flex items-center gap-1.5">
                  <a
                    href={drop.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-heading text-xs md:text-[0.78vw] font-bold text-[#482922] uppercase tracking-wider hover:opacity-70 transition-opacity"
                  >
                    {drop.name}
                  </a>
                  {drop.discount && (
                    <span className="bg-[#ebebeb] text-[#482922] text-[9px] md:text-[0.58vw] font-bold px-1.5 py-0.5 rounded font-heading">
                      {drop.discount}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Columns 2-9: Categories & Subcategories */}
          {MEGA_MENU_COLLECTIONS.map((col) => (
            <div key={col.category} className="flex flex-col gap-2 md:gap-[0.6vw]">
              <h4 className="font-heading font-extrabold text-xs md:text-[0.78vw] text-[#482922] uppercase tracking-wider">
                {col.category}
              </h4>
              <ul className="space-y-1 md:space-y-[0.45vw]">
                {col.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-1.5">
                    <a
                      href="#shop"
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-xs md:text-[0.72vw] transition-colors leading-tight ${
                        item.isBold 
                          ? 'font-bold italic text-[#482922]' 
                          : 'text-[#482922]/85 hover:text-[#482922]'
                      }`}
                    >
                      {item.name}
                    </a>
                    {item.tag && (
                      <span className={`text-[8px] md:text-[0.55vw] font-bold px-1 py-0.2 rounded font-heading ${
                        item.tag === 'Must' 
                          ? 'bg-[#E11D48] text-white' 
                          : 'bg-[#FEE500] text-[#482922]'
                      }`}>
                        {item.tag}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* 2. Middle Editorial Visual Strip (3 lookbook images like Nishorama) */}
        <div className="hidden md:grid grid-cols-3 gap-[1.5vw] my-[1vw]">
          <div className="relative h-[18vw] rounded-[1.5vw] overflow-hidden group shadow-sm bg-neutral-200">
            <img 
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80" 
              alt="Artisan Craftsmanship" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-[1.2vw]">
              <span className="text-white font-heading text-[0.85vw] font-bold uppercase tracking-wider">
                Handcrafted Roots
              </span>
            </div>
          </div>

          <div className="relative h-[18vw] rounded-[1.5vw] overflow-hidden group shadow-sm bg-neutral-200">
            <img 
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80" 
              alt="Lotus Edit" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-[1.2vw]">
              <span className="text-white font-heading text-[0.85vw] font-bold uppercase tracking-wider">
                Festive Edit '26
              </span>
            </div>
          </div>

          <div className="relative h-[18vw] rounded-[1.5vw] overflow-hidden group shadow-sm bg-neutral-200">
            <img 
              src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80" 
              alt="Modern Silhouettes" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-[1.2vw]">
              <span className="text-white font-heading text-[0.85vw] font-bold uppercase tracking-wider">
                Pure Cotton Silhouettes
              </span>
            </div>
          </div>
        </div>

        {/* 3. Comprehensive Support & Help Bar (1:1 with Nishorama) */}
        <div className="border-t border-[#d5d5d5] pt-[1.5vw] pb-[0.5vw] grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-[2vw] text-[#482922]">
          
          {/* Order Support Box */}
          <div className="flex flex-col gap-1.5">
            <span className="font-heading text-xs md:text-[0.75vw] font-bold">Order Support</span>
            <span className="text-[11px] md:text-[0.68vw] text-neutral-600">Mon to Sat: 10:30 AM - 6:30 PM</span>
            <div className="flex items-center gap-2 mt-1">
              <a 
                href={`tel:${BRAND.phone}`}
                className="h-[1.7vw] min-h-[28px] px-3 bg-white border border-[#d5d5d5] rounded-full flex items-center gap-1.5 text-[11px] md:text-[0.68vw] font-heading font-medium hover:bg-neutral-50 transition-colors shadow-sm"
              >
                <Phone className="w-3 h-3 text-[#482922]" />
                <span>Call</span>
              </a>
              <a 
                href={`https://wa.me/${BRAND.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                className="h-[1.7vw] min-h-[28px] px-3 bg-white border border-[#d5d5d5] rounded-full flex items-center gap-1.5 text-[11px] md:text-[0.68vw] font-heading font-medium hover:bg-neutral-50 transition-colors shadow-sm"
              >
                <MessageCircle className="w-3 h-3 text-[#482922]" />
                <span>Chat</span>
              </a>
            </div>
          </div>

          {/* Returns & Exchanges */}
          <div className="flex flex-col gap-1.5">
            <span className="font-heading text-xs md:text-[0.75vw] font-bold">Return/Exchange My Order</span>
            <a href="#return-policy" className="text-[11px] md:text-[0.68vw] text-neutral-600 underline hover:text-[#482922]">
              Return & Exchange Policy
            </a>
            <div className="mt-1">
              <button 
                onClick={() => alert('Return request portal opening')}
                className="h-[1.7vw] min-h-[28px] px-3 bg-white border border-[#d5d5d5] rounded-full text-[11px] md:text-[0.68vw] font-heading font-medium hover:bg-neutral-50 transition-colors shadow-sm"
              >
                Submit Request
              </button>
            </div>
          </div>

          {/* Account & FAQs */}
          <div className="flex flex-col gap-1.5">
            <span className="font-heading text-xs md:text-[0.75vw] font-bold">Order Status</span>
            <a href="#orders" className="text-[11px] md:text-[0.68vw] text-neutral-600 hover:text-[#482922] hover:underline">
              Track Current Order
            </a>
            <a href="#faqs" className="text-[11px] md:text-[0.68vw] text-neutral-600 hover:text-[#482922] hover:underline mt-1 font-heading font-semibold">
              FAQ's
            </a>
          </div>

          {/* Help & Policies */}
          <div className="flex flex-col gap-1">
            <span className="font-heading text-xs md:text-[0.75vw] font-bold flex items-center gap-1">
              HELP AND SUPPORT
            </span>
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] md:text-[0.65vw] text-neutral-600 mt-1">
              <a href="#privacy" className="hover:underline">Privacy Policy</a>
              <a href="#terms" className="hover:underline">Terms of Service</a>
              <a href="#returns" className="hover:underline">Return & Exchange Policy</a>
              <a href="#shipping" className="hover:underline">Shipping & Delivery Policy</a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
