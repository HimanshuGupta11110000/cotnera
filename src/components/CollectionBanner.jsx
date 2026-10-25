import React from 'react';
import { useStore } from '../context/StoreContext';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CollectionBanner({
  image = "/images/catalog/anarkali-rust-front.jpg",
  tagline = "Cotnera Studio '26",
  title = "Wear It. Style It. Rewear It.",
  description = "Pure Indian cotton, Chanderi silks and heritage handblock prints designed for timeless everyday luxury.",
  buttonText = "Explore Debut Drop",
  categoryId = "all"
}) {
  const { navigateToCollection } = useStore();

  return (
    <section className="w-full px-3 md:px-[1.5vw] py-6 md:py-10">
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[65vh] rounded-[2rem] md:rounded-[3vw] overflow-hidden shadow-sm group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-[center_35%] filter brightness-[0.85] group-hover:scale-102 transition-transform duration-1000 ease-out"
        />
        {/* Soft editorial gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-[3.5vw_4vw] text-white">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-[#FAF8F5]/20 backdrop-blur-md text-[#F6C582] border border-[#F6C582]/40 px-3 py-1 rounded-full text-[10px] md:text-xs font-heading font-black uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#F6C582]" />
                <span>{tagline}</span>
              </span>
              <span className="bg-[#482922] text-[#F6C582] px-2.5 py-1 rounded-full text-[10px] md:text-xs font-heading font-black uppercase tracking-wider">
                10% OFF
              </span>
            </div>

            <h2 className="font-heading font-black text-2xl sm:text-4xl md:text-5xl uppercase tracking-tighter text-white leading-tight">
              {title}
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-neutral-200 mt-2 font-sans font-light leading-relaxed max-w-xl">
              {description}
            </p>

            <button
              onClick={() => navigateToCollection(categoryId)}
              className="mt-4 md:mt-6 px-6 py-3 md:px-[1.8vw] md:py-[0.8vw] bg-[#FAF8F5] text-[#482922] hover:bg-white rounded-full font-heading text-xs md:text-[0.78vw] font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-3.5 h-3.5 md:w-[0.8vw] md:h-[0.8vw]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
