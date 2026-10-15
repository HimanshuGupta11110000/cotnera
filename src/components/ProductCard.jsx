import React, { useState } from 'react';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function ProductCard({ product }) {
  const { setQuickAddProduct } = useStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = product.images || [product.image];

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

  return (
    <div className="group relative flex flex-col bg-white border border-[#e5e5e5] rounded-[1.2rem] md:rounded-[1.5vw] overflow-hidden hover:shadow-md hover:border-[#482922] transition-all duration-300">
      
      {/* Top Floating Badge */}
      {product.badge && (
        <div className="absolute top-2.5 left-2.5 z-10">
          <span className="bg-white/95 backdrop-blur-[20px] border border-[#d5d5d5] px-2 py-0.5 rounded-full text-[9px] md:text-[0.6vw] font-heading font-bold uppercase tracking-wider text-[#482922] shadow-sm">
            {product.badge}
          </span>
        </div>
      )}

      {/* Product Image with In-Card Multi-Photo Slider */}
      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 select-none">
        <img
          src={images[currentImageIndex]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Hover Slider Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#482922] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm z-10"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#482922] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm z-10"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Slider Dots */}
            <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-1 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentImageIndex ? 'bg-[#482922] w-3' : 'bg-white/70'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Product Information */}
      <div className="p-3 md:p-[0.8vw] flex flex-col justify-between flex-1 bg-white">
        <div>
          <h3 className="font-heading text-xs md:text-[0.8vw] font-bold uppercase tracking-tight text-[#482922] group-hover:underline truncate">
            {product.name}
          </h3>
          <p className="text-[11px] md:text-[0.65vw] text-[#482922]/70 mt-0.5">{product.color}</p>
        </div>

        <div className="flex items-center justify-between mt-2 pt-2 border-t border-neutral-100">
          <div className="flex items-baseline gap-1.5">
            <span className="font-heading font-black text-xs md:text-[0.8vw] tracking-tight text-[#482922]">
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
            className="flex items-center gap-1 border border-[#482922] bg-white hover:bg-[#482922] hover:text-white px-3 py-1 rounded-full text-[10px] md:text-[0.65vw] font-heading font-bold uppercase tracking-wider text-[#482922] transition-colors cursor-pointer"
          >
            <Plus className="w-3 h-3 stroke-[2.5]" />
            <span>Add</span>
          </button>
        </div>

      </div>

    </div>
  );
}
