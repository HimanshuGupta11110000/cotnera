import React, { useState, useMemo } from 'react';
import ProductCard from './ProductCard';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/mockData';

const TABS = [
  { id: 'all', name: 'All Pieces' },
  { id: 'coord-sets', name: 'Co-ord Sets' },
  { id: 'kurti', name: 'Kurtis' },
  { id: 'farshi-salwar', name: 'Farshi Salwar' },
  { id: 'dresses', name: 'Dresses' },
  { id: 'anarkali', name: 'Anarkali' },
  { id: 'trouser', name: 'Trousers' },
];

export default function NishoramaShowcase() {
  const [activeTab, setActiveTab] = useState('all');
  const { navigateToCollection } = useStore();

  // Curate products based on active tab:
  // If 'all': 4 premier debut drop pieces across categories
  // If specific category: up to 4 pieces from that category
  const displayedProducts = useMemo(() => {
    if (activeTab === 'all') {
      return [
        PRODUCTS.find(p => p.id === 'prod-coord-green-ikat') || PRODUCTS[0],
        PRODUCTS.find(p => p.id === 'prod-farshi-sky-yellow') || PRODUCTS[1],
        PRODUCTS.find(p => p.id === 'prod-mustard-polka-gown') || PRODUCTS[2],
        PRODUCTS.find(p => p.id === 'prod-anarkali-surya-terracotta') || PRODUCTS[3],
      ];
    }
    return PRODUCTS.filter(p => p.category === activeTab).slice(0, 4);
  }, [activeTab]);

  // Responsive column layout for optical balance:
  // 3 items -> 3 columns on desktop
  // 2 items -> 2 columns centered on desktop
  // 4 items -> 4 columns on desktop
  // Always 2 columns on mobile
  const getGridClass = () => {
    if (displayedProducts.length === 3) {
      return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-3 max-w-6xl mx-auto';
    }
    if (displayedProducts.length === 2) {
      return 'grid-cols-2 md:grid-cols-2 max-w-3xl mx-auto';
    }
    return 'grid-cols-2 md:grid-cols-4';
  };

  return (
    <section id="showcase-tabs" className="w-full px-3 md:px-[1.5vw] py-8 md:py-12">
      
      {/* 1. Category Filter Pills matching Nishorama (Centered) */}
      <div className="flex items-center justify-center gap-2 md:gap-3 overflow-x-auto scrollbar-none py-2 mb-6 md:mb-8 px-2">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-[13px] font-heading font-medium tracking-wide transition-all whitespace-nowrap cursor-pointer select-none ${
                isActive
                  ? 'bg-[#482922] text-[#F6C582] shadow-sm scale-102 font-semibold'
                  : 'bg-white border border-[#D5D5D5] text-[#482922] hover:border-[#482922] hover:text-[#482922]'
              }`}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      {/* 2. Curated Product Cards Row (2 on mobile, 4 on desktop) */}
      <div className={`grid ${getGridClass()} gap-3 md:gap-[1.2vw]`}>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* 3. Centered 'View All' Pill Button matching Nishorama */}
      <div className="flex justify-center mt-8 md:mt-10">
        <button
          onClick={() => navigateToCollection(activeTab)}
          className="px-8 py-2.5 sm:px-10 sm:py-3 bg-[#482922] text-white rounded-full font-heading text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#38201a] hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer select-none"
        >
          View All
        </button>
      </div>

    </section>
  );
}
