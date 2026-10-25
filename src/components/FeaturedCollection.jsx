import React from 'react';
import ProductCard from './ProductCard';
import { useStore } from '../context/StoreContext';
import { Ruler, Sparkles } from 'lucide-react';

const CATEGORY_TABS = [
  { id: 'all', label: 'All Pieces' },
  { id: 'trouser', label: 'Trousers' },
  { id: 'kurti', label: 'Kurtis' },
  { id: 'anarkali', label: 'Anarkali' },
  { id: 'coord-sets', label: 'Co-ord Sets' },
  { id: 'farshi-salwar', label: 'Farshi Salwar' },
  { id: 'dresses', label: 'Dresses' },
];

export default function FeaturedCollection({ title = "The Debut Drop", year = "(2026)", bannerImage, products = [], id = "collection" }) {
  const { activeCategory, setActiveCategory, setIsSizeChartOpen } = useStore();

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(
        (p) => {
          if (activeCategory === 'kurti' || activeCategory === 'kurtis') return p.category === 'kurti';
          return p.category === activeCategory || p.featuredCategory === activeCategory;
        }
      );

  return (
    <section id={id} className="w-full pb-14 md:pb-[4vw] scroll-mt-20">
      
      {/* Editorial Home Campaign Banner */}
      {bannerImage && (
        <div className="w-full px-0 md:px-[1.5vw] mb-6 md:mb-[2vw]">
          <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] rounded-[2rem] md:rounded-[3vw] overflow-hidden shadow-sm">
            <img
              src={bannerImage}
              alt={title}
              className="w-full h-full object-cover filter brightness-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent flex items-end justify-between p-6 md:p-[3vw_4vw] text-white">
              <div>
                <span className="bg-[#F6C582] text-[#482922] px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-heading font-black uppercase tracking-wider mb-2 inline-block">
                  10% OFF
                </span>
                <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter">
                  {title} <span className="text-sm md:text-lg font-mono font-normal opacity-80">{year}</span>
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsSizeChartOpen(true)}
                  className="px-4 py-2 md:px-[1.4vw] md:py-[0.7vw] bg-white/20 hover:bg-white/30 backdrop-blur-md text-white font-heading text-xs md:text-[0.75vw] font-bold uppercase rounded-full transition-all border border-white/40 flex items-center gap-1.5 cursor-pointer"
                >
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size Guide</span>
                </button>
                <a
                  href="#collection"
                  onClick={() => setActiveCategory('all')}
                  className="px-5 py-2 md:px-[1.8vw] md:py-[0.7vw] bg-white text-[#482922] font-heading text-xs md:text-[0.75vw] font-bold uppercase rounded-full hover:scale-105 transition-all shadow-md cursor-pointer"
                >
                  Shop All ({products.length})
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Collection Filter Bar & Grid */}
      <div className="px-3 md:px-[1.5vw]">
        
        {/* Header Bar with Category Filter Chips */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6 pb-3 border-b border-[#482922]/15">
          <div className="flex items-baseline gap-2">
            <h2 className="font-heading font-black text-xl md:text-3xl uppercase tracking-tight text-[#482922]">
              {title}
            </h2>
            <span className="text-xs md:text-sm font-mono text-[#482922]/60 font-medium">
              ({filteredProducts.length} {filteredProducts.length === 1 ? 'Piece' : 'Pieces'})
            </span>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1">
            {CATEGORY_TABS.map((tab) => {
              const isSelected = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-[#482922] text-[#F6C582] shadow-sm'
                      : 'bg-white border border-[#D5D5D5] text-[#482922] hover:border-[#482922]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}

            {/* Size Guide Trigger */}
            <button
              onClick={() => setIsSizeChartOpen(true)}
              className="px-3 py-1.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider bg-[#FAF8F5] border border-[#C5A059] text-[#482922] hover:bg-[#F6C582]/30 transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ml-auto md:ml-2"
            >
              <Ruler className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Size Chart</span>
            </button>
          </div>
        </div>

        {/* 2-columns on mobile, 4-columns on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-[1.2vw]">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

    </section>
  );
}
