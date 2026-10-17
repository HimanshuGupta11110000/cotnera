import React from 'react';
import ProductCard from './ProductCard';
import { useStore } from '../context/StoreContext';
import { ArrowRight } from 'lucide-react';

export default function NewInsSection({ products = [] }) {
  const { navigateToCollection } = useStore();

  // Show top 4 newest pieces (matching Nishorama's 4-card 'New Ins' row on desktop / 2-card on mobile)
  const displayProducts = products.slice(0, 4);

  return (
    <section className="w-full px-3 md:px-[1.5vw] py-6 md:py-8">
      {/* Header matching Nishorama: 'New Ins' on left, 'Discover More' capsule button on right */}
      <div className="flex items-center justify-between mb-4 md:mb-6 pb-2 border-b border-[#482922]/10">
        <h2 className="font-heading font-black text-xl md:text-2xl uppercase tracking-tight text-[#482922]">
          New Ins
        </h2>

        <button
          onClick={() => navigateToCollection('all')}
          className="h-[30px] md:h-[1.8vw] px-4 md:px-[1.2vw] bg-[#482922] text-[#FAF8F5] rounded-full font-heading text-xs md:text-[0.72vw] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-1.5 cursor-pointer shadow-sm"
        >
          <span>Discover More</span>
          <ArrowRight className="w-3 h-3 md:w-[0.7vw] md:h-[0.7vw]" />
        </button>
      </div>

      {/* 2-columns on mobile, 4-columns on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-[1.2vw]">
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
