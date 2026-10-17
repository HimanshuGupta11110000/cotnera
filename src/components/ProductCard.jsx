import React, { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function ProductCard({ product }) {
  const { openProductDetail } = useStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = (product.images && product.images.length > 0) ? product.images : [product.image];
  const hasMultipleImages = images.length > 1;

  const handlePrevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleCardClick = () => {
    openProductDetail(product);
  };

  return (
    <div className="group relative flex flex-col bg-transparent select-none">
      
      {/* Product Image Container with Rounded Corners (Nishorama borderless style) */}
      <div 
        onClick={handleCardClick}
        className="relative aspect-[3/4] overflow-hidden rounded-2xl md:rounded-[1.5rem] bg-neutral-100 cursor-pointer shadow-xs"
      >
        {/* Top-Left Badge (New In / Bestseller) */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
            <span className="bg-white/95 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] md:text-xs font-heading font-medium text-[#482922] shadow-xs">
              {product.badge}
            </span>
          </div>
        )}

        {/* 10% OFF Pill (Top Right) */}
        <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
          <span className="bg-[#482922] text-[#F6C582] px-2 py-0.5 rounded-full text-[9px] md:text-[11px] font-mono font-bold tracking-tight shadow-xs">
            10% OFF
          </span>
        </div>

        {/* Main Product Image */}
        <img
          src={images[currentImageIndex]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Slider Navigation Arrows - STRICTLY SHOWN ONLY IF MULTIPLE IMAGES EXIST */}
        {hasMultipleImages && (
          <>
            {/* Prev Image Arrow */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/90 hover:bg-white text-[#482922] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-20 cursor-pointer"
              aria-label="Previous photo of dress"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Next Image Arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/90 hover:bg-white text-[#482922] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-20 cursor-pointer"
              aria-label="Next photo of dress"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Nishorama In-Card Photo Indicator Dots */}
            <div className="absolute bottom-2.5 left-0 right-0 flex items-center justify-center gap-1 z-10 pointer-events-none">
              <div className="flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-0.5 rounded-full">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`rounded-full transition-all ${
                      idx === currentImageIndex 
                        ? 'bg-white w-2 h-2' 
                        : 'bg-white/60 w-1.5 h-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Product Details Section Below Image (Matches Nishorama 1:1) */}
      <div className="pt-2.5 px-0.5 flex items-start justify-between gap-1.5">
        
        {/* Left: Product Name & Formatted Price in Parentheses */}
        <div 
          onClick={handleCardClick}
          className="flex-1 min-w-0 cursor-pointer"
        >
          <h3 className="font-heading text-xs sm:text-sm font-semibold tracking-tight text-[#482922] group-hover:text-black truncate">
            {product.name}
          </h3>
          
          <div className="flex items-baseline gap-1.5 mt-0.5">
            <span className="font-heading font-medium text-xs sm:text-sm text-[#482922]">
              (Rs. {product.price.toLocaleString('en-IN')})
            </span>
            {product.originalPrice && (
              <span className="text-[11px] font-mono text-neutral-400 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>
        </div>

        {/* Right: + Add Pill Button */}
        <button
          onClick={handleCardClick}
          className="shrink-0 flex items-center gap-1 bg-[#F2F2F2] hover:bg-[#482922] hover:text-white text-[#482922] px-3 py-1 rounded-full text-xs font-heading font-semibold transition-colors cursor-pointer shadow-2xs"
          aria-label={`View and add ${product.name}`}
        >
          <Plus className="w-3 h-3 stroke-[2.5]" />
          <span>Add</span>
        </button>

      </div>

    </div>
  );
}
