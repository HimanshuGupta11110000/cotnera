import React from 'react';
import ProductCard from './ProductCard';
import { useStore } from '../context/StoreContext';
import { ArrowRight } from 'lucide-react';

export default function SectionRow({
  title,
  subtitle,
  categoryId,
  products = [],
  maxDisplay = 4,
  buttonText = "Discover More"
}) {
  const { navigateToCollection } = useStore();

  const displayProducts = products.slice(0, maxDisplay);

  if (displayProducts.length === 0) return null;

  // Choose responsive column layout based on number of items:
  // 3 items -> 3 columns on desktop for balanced full-width layout
  // 4 items -> 4 columns on desktop
  // 2 items -> 2 columns on desktop with max-width or 4 columns
  const getGridClass = () => {
    if (displayProducts.length === 3) {
      return 'grid-cols-2 sm:grid-cols-3 md:grid-cols-3';
    }
    if (displayProducts.length === 2) {
      return 'grid-cols-2 md:grid-cols-2 max-w-4xl mx-auto';
    }
    return 'grid-cols-2 md:grid-cols-4';
  };

  return (
    <section className="w-full px-3 md:px-[1.5vw] py-6 md:py-9">
      {/* Section Header matching Nishorama: Section Title + Subtitle on left, 'Discover More' capsule on right */}
      <div className="flex items-center justify-between mb-4 md:mb-6 pb-2.5 border-b border-[#482922]/10">
        <div className="flex items-baseline gap-2 md:gap-3">
          <h2 className="font-heading font-black text-xl md:text-2xl uppercase tracking-tight text-[#482922]">
            {title}
          </h2>
          {subtitle && (
            <span className="hidden sm:inline text-xs md:text-sm text-neutral-500 font-sans normal-case font-normal">
              — {subtitle}
            </span>
          )}
        </div>

        <button
          onClick={() => navigateToCollection(categoryId)}
          className="h-[30px] md:h-[1.8vw] px-4 md:px-[1.2vw] bg-[#482922] text-[#FAF8F5] rounded-full font-heading text-xs md:text-[0.72vw] font-bold uppercase tracking-wider hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-1.5 cursor-pointer shadow-sm select-none"
        >
          <span>{buttonText}</span>
          <ArrowRight className="w-3 h-3 md:w-[0.7vw] md:h-[0.7vw]" />
        </button>
      </div>

      {/* Product Cards Grid with zero-crop head-to-toe framing */}
      <div className={`grid ${getGridClass()} gap-3 md:gap-[1.2vw]`}>
        {displayProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
