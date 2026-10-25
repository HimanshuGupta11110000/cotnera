import React, { useMemo } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import SectionRow from './components/SectionRow';
import CollectionBanner from './components/CollectionBanner';
import MobileCategoryGrid from './components/MobileCategoryGrid';
import Footer from './components/Footer';
import MegaMenu from './components/MegaMenu';
import SearchModal from './components/SearchModal';
import CartDrawer from './components/CartDrawer';
import QuickAddModal from './components/QuickAddModal';
import UpiCheckoutModal from './components/UpiCheckoutModal';
import SizeChartModal from './components/SizeChartModal';
import ProductDetailModal from './components/ProductDetailModal';
import CategoryPageView from './components/CategoryPageView';
import { PRODUCTS } from './data/mockData';
import { Menu, Search, ShoppingBag } from 'lucide-react';

function Storefront() {
  const { cartCount, setIsCartOpen, setIsMenuOpen, setIsSearchOpen, currentRoute } = useStore();

  // 1. New Ins: 4 premier curated debut pieces across categories
  const newInsProducts = useMemo(() => [
    PRODUCTS.find(p => p.id === 'prod-coord-green-ikat') || PRODUCTS[0],
    PRODUCTS.find(p => p.id === 'prod-farshi-sky-yellow') || PRODUCTS[1],
    PRODUCTS.find(p => p.id === 'prod-mustard-polka-gown') || PRODUCTS[2],
    PRODUCTS.find(p => p.id === 'prod-anarkali-surya-terracotta') || PRODUCTS[3],
  ], []);

  // 2. Co-ord Sets: 9 total -> 4 top showcase pieces
  const coordProducts = useMemo(() => PRODUCTS.filter(p => p.category === 'coord-sets'), []);

  // 3. Kurtis & Tunics: 5 total -> 4 top showcase pieces
  const kurtiProducts = useMemo(() => PRODUCTS.filter(p => p.category === 'kurti'), []);

  // 4. Farshi Salwar Suits: all 3 pieces
  const farshiProducts = useMemo(() => PRODUCTS.filter(p => p.category === 'farshi-salwar'), []);

  // 5. Dresses & Gowns: all 3 pieces
  const dressesProducts = useMemo(() => PRODUCTS.filter(p => p.category === 'dresses'), []);

  // 6. Anarkali Ensembles: all 2 pieces
  const anarkaliProducts = useMemo(() => PRODUCTS.filter(p => p.category === 'anarkali'), []);

  // 7. Tailored Trousers: all 4 pieces
  const trouserProducts = useMemo(() => PRODUCTS.filter(p => p.category === 'trouser'), []);

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
      
      {/* Main Experience: Dedicated Collection Page or Multi-Section Nishorama Home */}
      <main className="flex-1">
        {currentRoute?.type === 'collection' ? (
          <CategoryPageView categoryId={currentRoute.category} />
        ) : (
          <>
            {/* 1. Full 100vh Cross-Fade Hero Slider with Big Centered Logo overlay */}
            <HeroSlider />

            {/* 2. New Ins Curated Showcase (4 pieces 1:1 with Nishorama with 'Discover More' capsule) */}
            <SectionRow
              title="New Ins"
              subtitle="Latest Curated Debut Drops"
              categoryId="all"
              products={newInsProducts}
              maxDisplay={4}
              buttonText="Discover More"
            />

            {/* 3. Category Grid (6 Photographic Cards: Trousers, Kurtis, Anarkali, Co-ord Sets, Farshi Salwar, Dresses) */}
            <MobileCategoryGrid />

            {/* 4. Co-ord Sets Section (4 pieces showcase -> View More opens /collections/coord-sets) */}
            <SectionRow
              title="Co-ord Sets"
              subtitle="Tailored Waistcoats, Flared Tunics & Wide-Leg Sets"
              categoryId="coord-sets"
              products={coordProducts}
              maxDisplay={4}
              buttonText="Discover More"
            />

            {/* 5. Kurtis Section (4 pieces showcase -> View More opens /collections/kurti) */}
            <SectionRow
              title="Kurtis"
              subtitle="100% Breathable Indian Cotton & Eyelet Hakoba"
              categoryId="kurti"
              products={kurtiProducts}
              maxDisplay={4}
              buttonText="Discover More"
            />

            {/* 6. Editorial Mid-Page Campaign Banner */}
            <CollectionBanner
              image="/images/catalog/salwar-sky-yellow-front.jpg"
              tagline="Cotnera Awadhi Craft"
              title="Sweeping Silhouettes & Heritage Prints"
              description="Awadhi farshi salwars, Chanderi silks, and tailored cottons handcrafted with love in India."
              buttonText="Explore Farshi Salwar"
              categoryId="farshi-salwar"
            />

            {/* 7. Farshi Salwar Section (3 pieces showcase -> View More opens /collections/farshi-salwar) */}
            <SectionRow
              title="Farshi Salwar"
              subtitle="Awadhi-Inspired Flared 3-Piece Sets"
              categoryId="farshi-salwar"
              products={farshiProducts}
              maxDisplay={3}
              buttonText="Discover More"
            />

            {/* 8. Dresses & Gowns Section (3 pieces showcase -> View More opens /collections/dresses) */}
            <SectionRow
              title="Dresses"
              subtitle="One-Shoulder Polkas, Corset Midis & Halter Gowns"
              categoryId="dresses"
              products={dressesProducts}
              maxDisplay={3}
              buttonText="Discover More"
            />

            {/* 9. Anarkali Sets Section (2 pieces showcase -> View More opens /collections/anarkali) */}
            <SectionRow
              title="Anarkali"
              subtitle="Pure Chanderi Silk & Hand-Embroidered Zardozi"
              categoryId="anarkali"
              products={anarkaliProducts}
              maxDisplay={2}
              buttonText="Discover More"
            />

            {/* 10. Tailored Trousers Section (4 pieces showcase -> View More opens /collections/trouser) */}
            <SectionRow
              title="Trousers"
              subtitle="High-Waisted, Fluid Front-Pleated Silhouettes"
              categoryId="trouser"
              products={trouserProducts}
              maxDisplay={4}
              buttonText="Discover More"
            />

            {/* 11. Brand Values Strip (Direct UPI Pay & WhatsApp Orders) */}
            <div className="w-full px-4 md:px-[1.5vw] py-8 pb-12">
              <div className="w-full bg-[#FAF8F5] border border-[#E9E4DC] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-[2.5vw_3vw] grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-xs">
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl mb-1.5">⚡</span>
                  <h4 className="font-heading font-black text-xs md:text-[0.8vw] uppercase tracking-wider text-[#482922]">
                    Direct 1-Click UPI Pay
                  </h4>
                  <p className="text-[11px] md:text-[0.65vw] text-neutral-500 mt-1 leading-relaxed">
                    Google Pay, PhonePe, Paytm, BHIM & all UPI apps
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl mb-1.5">💬</span>
                  <h4 className="font-heading font-black text-xs md:text-[0.8vw] uppercase tracking-wider text-[#482922]">
                    WhatsApp Orders
                  </h4>
                  <p className="text-[11px] md:text-[0.65vw] text-neutral-500 mt-1 leading-relaxed">
                    Order directly via chat & request custom measurements
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl mb-1.5">🌿</span>
                  <h4 className="font-heading font-black text-xs md:text-[0.8vw] uppercase tracking-wider text-[#482922]">
                    Pure Cotton & Handloom
                  </h4>
                  <p className="text-[11px] md:text-[0.65vw] text-neutral-500 mt-1 leading-relaxed">
                    Handcrafted in India with 100% breathable natural fabrics
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-xl md:text-2xl mb-1.5">✨</span>
                  <h4 className="font-heading font-black text-xs md:text-[0.8vw] uppercase tracking-wider text-[#482922]">
                    24x7 Customer Support
                  </h4>
                  <p className="text-[11px] md:text-[0.65vw] text-neutral-500 mt-1 leading-relaxed">
                    Call & WhatsApp anytime at +91 63979 43289
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Editorial Watermark Footer */}
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
