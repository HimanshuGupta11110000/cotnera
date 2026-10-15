import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data/mockData';

export default function Categories() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 border-b border-brand-border">
      
      {/* Category Header */}
      <div className="flex items-end justify-between mb-8 pb-4 border-b border-brand-border">
        <div>
          <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-brand-muted block">
            Curated Categories
          </span>
          <h2 className="font-heading font-black text-2xl md:text-4xl uppercase tracking-tighter text-brand-dark mt-1">
            Categories <span className="text-sm font-mono text-brand-muted font-normal">(12)</span>
          </h2>
        </div>

        <a 
          href="#shop-all"
          className="font-heading text-xs font-bold uppercase tracking-widest text-brand-dark flex items-center gap-1.5 hover:underline underline-offset-4"
        >
          <span>Shop All</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Categories Grid / Horizontal Scroll */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={`#category-${cat.id}`}
            className="group relative flex flex-col bg-white border border-brand-border overflow-hidden cursor-pointer hover:border-brand-dark transition-all duration-300"
          >
            {/* Image Container with 4:5 aspect ratio */}
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </div>

            {/* Info Footer */}
            <div className="p-3 bg-white flex items-center justify-between border-t border-brand-border">
              <h3 className="font-heading text-xs md:text-sm font-black uppercase tracking-tight text-brand-dark group-hover:underline">
                {cat.name}
              </h3>
              <span className="text-[11px] font-mono text-brand-muted">
                {cat.count}
              </span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}
