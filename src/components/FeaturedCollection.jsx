import React from 'react';
import ProductCard from './ProductCard';

export default function FeaturedCollection({ title, year = "(2026)", bannerImage, products, id }) {
  return (
    <section id={id} className="w-full pb-12 md:pb-[3vw]">
      
      {/* Editorial Home Banner Ahead of Collection */}
      {bannerImage && (
        <div className="w-full px-0 md:px-[1.5vw] mb-8 md:mb-[2vw]">
          <div className="relative w-full h-[35vh] sm:h-[45vh] md:h-[55vh] rounded-[2rem] md:rounded-[3vw] overflow-hidden shadow-sm">
            <img
              src={bannerImage}
              alt={title}
              className="w-full h-full object-cover filter brightness-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-between p-6 md:p-[3vw_4vw] text-white">
              <div>
                <h2 className="font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter">
                  {title} <span className="text-sm md:text-lg font-mono font-normal opacity-80">{year}</span>
                </h2>
              </div>

              <a
                href="#shop-all"
                className="px-6 py-2.5 md:px-[1.8vw] md:py-[0.8vw] bg-white text-[#482922] font-heading text-xs md:text-[0.75vw] font-bold uppercase rounded-full hover:scale-105 transition-all shadow-md"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Product Grid */}
      <div className="px-4 md:px-[1.5vw]">
        {!bannerImage && (
          <div className="flex items-baseline justify-between mb-6 pb-2 border-b border-[#482922]/20">
            <h2 className="font-heading font-black text-2xl md:text-4xl uppercase tracking-tighter text-[#482922]">
              {title} <span className="text-sm font-mono text-[#482922]/60 font-normal">({products.length})</span>
            </h2>
            <a href="#shop-all" className="font-heading text-xs uppercase font-bold text-[#482922] hover:underline">
              Shop All
            </a>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-[1vw]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

    </section>
  );
}
