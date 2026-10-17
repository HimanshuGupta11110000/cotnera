import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import GalleryGrid from './components/GalleryGrid';
import CollectionBanner from './components/CollectionBanner';
import FitsGallery from './components/FitsGallery';
import FeaturedCollection from './components/FeaturedCollection';
import Footer from './components/Footer';
import MegaMenu from './components/MegaMenu';
import SearchModal from './components/SearchModal';
import CartDrawer from './components/CartDrawer';
import QuickAddModal from './components/QuickAddModal';
import UpiCheckoutModal from './components/UpiCheckoutModal';
import SizeChartModal from './components/SizeChartModal';
import ProductDetailModal from './components/ProductDetailModal';
import MobileCategoryGrid from './components/MobileCategoryGrid';
import { PRODUCTS } from './data/mockData';
import { Menu, Search, ShoppingBag } from 'lucide-react';

function Storefront() {
  const { cartCount, setIsCartOpen, setIsMenuOpen, setIsSearchOpen } = useStore();

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F0F0] text-[#482922] selection:bg-[#482922] selection:text-white pb-14 sm:pb-0">
      
      {/* Modals & Overlays */}
      <MegaMenu />
      <SearchModal />
      <CartDrawer />
      <ProductDetailModal />
      <QuickAddModal />
      <UpiCheckoutModal />
      <SizeChartModal />

      {/* Floating Header with Scroll-Driven Flying Logo & Readable Tagline */}
      <Header />
      
      {/* Main Experience */}
      <main className="flex-1">
        
        {/* 1. Full 100vh Cross-Fade Hero Slider with Big Centered Logo overlay */}
        <HeroSlider />

        {/* 2. Infinite Auto-Moving Masonry Lookbook Wall */}
        <GalleryGrid />

        {/* 3. Nishorama-Style Category Grid (Most Wanted, Co-ord Sets, Kurtis, Festive Collection, Dresses) */}
        <MobileCategoryGrid />

        {/* 4. Full-Bleed Campaign Banner */}
        <CollectionBanner
          title="Cotnera — Festive Elegance '26"
          buttonText="Explore Collection"
          link="#collection"
          image="/images/catalog/IMG-20261017-WA0027.jpg"
        />

        {/* 5. Curated Fits For You with Capsule Tabs */}
        <div id="fits">
          <FitsGallery />
        </div>

        {/* 6. The Debut Collection Drop (All 22 Products with In-Card Multi-Photo Slider & Size Guide) */}
        <FeaturedCollection
          id="collection"
          title="The Debut Drop"
          year="(2026)"
          bannerImage="/images/catalog/IMG-20261017-WA0043.jpg"
          products={PRODUCTS}
        />

        {/* 6. Brand Values & All Payment Methods Acceptance Strip */}
        <div className="w-full px-4 md:px-[1.5vw] pb-10">
          <div className="w-full bg-[#FAF8F5] border border-[#E9E4DC] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-[2.5vw_3vw] grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-xs">
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl mb-1.5">💳</span>
              <h4 className="font-heading font-black text-xs md:text-[0.8vw] uppercase tracking-wider text-[#482922]">
                All Payments Accepted
              </h4>
              <p className="text-[11px] md:text-[0.65vw] text-neutral-500 mt-1 leading-relaxed">
                Google Pay, PhonePe, Paytm, all UPI apps & Cash on Delivery (COD)
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl mb-1.5">✨</span>
              <h4 className="font-heading font-black text-xs md:text-[0.8vw] uppercase tracking-wider text-[#482922]">
                Direct 1-Click UPI Pay
              </h4>
              <p className="text-[11px] md:text-[0.65vw] text-neutral-500 mt-1 leading-relaxed">
                Zero gateway fees • Dynamic QR codes & instant WhatsApp dispatch
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl mb-1.5">🌿</span>
              <h4 className="font-heading font-black text-xs md:text-[0.8vw] uppercase tracking-wider text-[#482922]">
                Pure Cotton & Handloom
              </h4>
              <p className="text-[11px] md:text-[0.65vw] text-neutral-500 mt-1 leading-relaxed">
                Handcrafted in India by designers Akanksha & Riya
              </p>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl mb-1.5">💬</span>
              <h4 className="font-heading font-black text-xs md:text-[0.8vw] uppercase tracking-wider text-[#482922]">
                WhatsApp Concierge
              </h4>
              <p className="text-[11px] md:text-[0.65vw] text-neutral-500 mt-1 leading-relaxed">
                Direct order tracking & custom sizing at +91 63979 43289
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* 6. Editorial Watermark Footer */}
      <Footer />

      {/* Mobile Sticky Floating Bottom Capsule Bar */}
      <div className="sm:hidden fixed bottom-3 left-4 right-4 z-40 bg-white/90 backdrop-blur-[25px] border border-[#d5d5d5] px-6 py-2.5 rounded-full flex items-center justify-between shadow-xl">
        <button
          onClick={() => setIsMenuOpen(true)}
          className="flex flex-col items-center gap-0.5 text-[#482922] focus:outline-none"
        >
          <Menu className="w-4 h-4 stroke-[2]" />
          <span className="text-[9px] font-heading font-bold uppercase tracking-wider">Menu</span>
        </button>

        <button
          onClick={() => setIsSearchOpen(true)}
          className="flex flex-col items-center gap-0.5 text-[#482922] focus:outline-none"
        >
          <Search className="w-4 h-4 stroke-[2]" />
          <span className="text-[9px] font-heading font-bold uppercase tracking-wider">Search</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="flex flex-col items-center gap-0.5 text-[#482922] relative focus:outline-none"
        >
          <ShoppingBag className="w-4 h-4 stroke-[2]" />
          <span className="text-[9px] font-heading font-bold uppercase tracking-wider">Bag</span>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-2 bg-[#482922] text-white text-[8px] font-mono font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <StoreProvider>
      <Storefront />
    </StoreProvider>
  );
}
