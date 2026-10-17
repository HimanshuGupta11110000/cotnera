import React, { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight, Ruler } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function ProductCard({ product }) {
  const { setQuickAddProduct, setIsSizeChartOpen } = useStore();
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

  const handleSizeGuideClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSizeChartOpen(true);
  };

  return (
    <div className="group relative flex flex-col bg-white border border-[#E5E5E5] rounded-[1.2rem] md:rounded-[1.4vw] overflow-hidden hover:shadow-lg hover:border-[#482922] transition-all duration-300">
      
      {/* Top Floating Badges */}
      <div className="absolute top-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between pointer-events-none">
        {product.badge ? (
          <span className="bg-white/95 backdrop-blur-[20px] border border-[#d5d5d5] px-2 py-0.5 rounded-full text-[9px] md:text-[0.6vw] font-heading font-bold uppercase tracking-wider text-[#482922] shadow-xs pointer-events-auto">
            {product.badge}
          </span>
        ) : <span />}

        {/* 10% OFF Discount Pill */}
        <span className="bg-[#482922] text-[#F6C582] border border-[#F6C582]/40 px-2 py-0.5 rounded-full text-[9px] md:text-[0.6vw] font-mono font-bold tracking-tight shadow-xs pointer-events-auto">
          10% OFF
        </span>
      </div>

      {/* Product Image with Conditional Multi-Photo Slider */}
      <div 
        onClick={() => setQuickAddProduct(product)}
        className="relative aspect-[3/4] overflow-hidden bg-neutral-100 select-none cursor-pointer"
      >
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
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/95 hover:bg-white text-[#482922] flex items-center justify-center opacity-85 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-md z-20 cursor-pointer"
              aria-label="Previous photo of dress"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Next Image Arrow */}
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/95 hover:bg-white text-[#482922] flex items-center justify-center opacity-85 md:opacity-0 md:group-hover:opacity-100 transition-opacity shadow-md z-20 cursor-pointer"
              aria-label="Next photo of dress"
            >
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* In-Card Photo Indicator Dots & Counter */}
            <div className="absolute bottom-2.5 left-0 right-0 flex items-center justify-center gap-1 z-10 pointer-events-none">
              <div className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full flex items-center gap-1">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentImageIndex 
                        ? 'bg-white w-3.5' 
                        : 'bg-white/50 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Product Details Section */}
      <div className="p-3 md:p-[0.8vw] flex flex-col justify-between flex-1 bg-white">
        <div>
          <div className="flex items-start justify-between gap-1">
            <h3 
              onClick={() => setQuickAddProduct(product)}
              className="font-heading text-xs md:text-[0.8vw] font-bold uppercase tracking-tight text-[#482922] hover:underline cursor-pointer truncate flex-1"
            >
              {product.name}
            </h3>
            
            {/* Quick Size Guide Trigger */}
            <button
              onClick={handleSizeGuideClick}
              title="View Size Chart"
              className="text-[#482922]/60 hover:text-[#482922] p-0.5 cursor-pointer"
            >
              <Ruler className="w-3.5 h-3.5" />
            </button>
          </div>

          <p className="text-[11px] md:text-[0.65vw] text-[#482922]/70 mt-0.5">
            {product.color}
          </p>
        </div>

        {/* Pricing & Add to Cart */}
        <div className="mt-2 pt-2 border-t border-neutral-100">
          <div className="flex items-center justify-between">
            {/* Cut Price (Original from WhatsApp chat) vs 10% Off Actual Price */}
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading font-black text-xs md:text-[0.85vw] tracking-tight text-[#482922]">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-[10px] md:text-[0.65vw] font-mono text-neutral-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>

            {/* Quick Add Pill Button */}
            <button
              onClick={() => setQuickAddProduct(product)}
              className="flex items-center gap-1 border border-[#482922] bg-white hover:bg-[#482922] hover:text-white px-2.5 py-1 rounded-full text-[10px] md:text-[0.65vw] font-heading font-bold uppercase tracking-wider text-[#482922] transition-colors cursor-pointer"
            >
              <Plus className="w-3 h-3 stroke-[2.5]" />
              <span>Add</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="mt-1.5 flex items-center justify-between text-[9px] md:text-[0.55vw] text-neutral-500 font-mono">
            <span>✓ UPI / COD</span>
            <span className="text-emerald-700 font-bold">Free Shipping</span>
          </div>
        </div>

      </div>

    </div>
  );
}
