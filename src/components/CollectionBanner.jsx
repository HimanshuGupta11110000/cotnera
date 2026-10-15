import React from 'react';

export default function CollectionBanner({ 
  image = "/images/products/product_10.jpg",
  title = "Cotnera — Festive Elegance '26",
  buttonText = "Explore Collection",
  link = "#collection" 
}) {
  return (
    <section className="w-full h-[70vh] md:h-[100vh] relative">
      <div className="p-0 md:px-[1.5vw] md:pb-[1.5vw] h-full w-full">
        
        {/* Rounded Image Container */}
        <div className="h-full w-full rounded-[2rem] md:rounded-[4vw] overflow-hidden relative shadow-sm">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center filter brightness-[0.92]" 
          />
          <div className="absolute inset-0 bg-black/20" />

          {/* Centered Floating Frosted Glass Pill Button */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-[2vw] z-10">
            <h2 className="text-white font-heading font-black text-3xl sm:text-5xl md:text-6xl uppercase tracking-tighter text-center drop-shadow-md">
              {title}
            </h2>

            <a 
              href={link} 
              className="px-[2rem] py-[1rem] md:px-[2vw] md:py-[1vw] bg-white/95 backdrop-blur-[30px] border border-[#d5d5d5] text-[#482922] font-heading font-semibold text-xs md:text-[0.8vw] rounded-full hover:scale-105 transition-all shadow-lg uppercase tracking-wider"
            >
              {buttonText}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
