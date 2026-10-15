import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/mockData';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-900 border-b border-brand-border">
      {/* Editorial High-Resolution Background */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[86vh]">
        {/* Desktop Image */}
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=85"
          alt="Cotnera Lookbook Campaign"
          className="w-full h-full object-cover object-center filter brightness-[0.92]"
        />

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-14 text-white">
          <div className="max-w-2xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-[11px] font-heading font-black uppercase tracking-widest text-white">
              <span>Collection '26 / Active Drop</span>
            </div>

            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl uppercase tracking-tighter leading-none">
              Bold & Raw <br className="hidden sm:inline" />
              Ethnic Streetwear
            </h1>

            <p className="text-sm md:text-base text-neutral-200 font-light max-w-lg leading-relaxed">
              Signature corset kurtis, deep-back tunics, and unstructured co-ords engineered with architectural tailoring.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#new-in"
                className="inline-flex items-center gap-2 bg-white text-black px-6 md:px-8 py-3.5 font-heading text-xs md:text-sm font-black uppercase tracking-widest hover:bg-neutral-200 transition-all hover:scale-[1.02] shadow-lg"
              >
                <span>Cotnerotsav — Festive Edit</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#shop-all"
                className="inline-flex items-center gap-2 border border-white/60 bg-black/30 backdrop-blur text-white px-6 py-3.5 font-heading text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                <span>Explore All Styles</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
