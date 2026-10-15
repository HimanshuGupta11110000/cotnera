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
      <QuickAddModal />

      {/* Floating Header with Scroll-Driven Flying Logo & Chalk Tagline */}
      <Header />
      
      {/* Main Experience */}
      <main className="flex-1">
        
        {/* 1. Full 100vh Cross-Fade Hero Slider with Big Centered Logo overlay */}
        <HeroSlider />

        {/* 2. Infinite Auto-Moving Masonry Lookbook Wall (45s Marquee with 72px/48px Rounded Pills) */}
        <GalleryGrid />

        {/* 3. Full-Bleed 100vh Campaign Banner with 4vw Rounded Container and Centered Frosted Pill */}
        <CollectionBanner
          title="Cotnera — Festive Elegance '26"
          buttonText="Explore Collection"
          link="#collection"
          image="/images/products/product_10.jpg"
        />

        {/* 4. Curated Fits For You with #ebebeb 4vw Container, 4rem Capsule Tabs, and 4rem Rounded Cards */}
        <div id="fits">
          <FitsGallery />
        </div>

        {/* 5. The Debut Collection Drop (Core Product Catalog with In-Card Swiper & Size Selector) */}
        <FeaturedCollection
          id="collection"
          title="The Debut Drop"
          year="(2026)"
          bannerImage="/images/products/product_1.jpg"
          products={PRODUCTS}
        />

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
