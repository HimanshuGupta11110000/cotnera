import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const MOBILE_CATEGORIES = [
  {
    id: 'most-wanted',
    title: 'Most Wanted',
    subtitle: 'Signature Bestsellers',
    count: '6 Styles',
    image: '/images/catalog/IMG-20261017-WA0039.jpg',
    tag: 'Bestseller',
  },
  {
    id: 'coord-sets',
    title: 'Co-ord Sets',
    subtitle: 'Tailored 2 & 3 Piece',
    count: '8 Styles',
    image: '/images/catalog/IMG-20261017-WA0032.jpg',
    tag: 'Trending',
  },
  {
    id: 'kurtis',
    title: 'Kurtis',
    subtitle: 'Pure Cotton & Sets',
    count: '4 Styles',
    image: '/images/catalog/IMG-20260930-WA0007.jpg',
    tag: 'Pure Cotton',
  },
  {
    id: 'festive',
    title: 'Festive Collection',
    subtitle: 'Anarkalis & Lehengas',
    count: '6 Styles',
    image: '/images/catalog/IMG-20261017-WA0027.jpg',
    tag: 'Festive Edit',
  },
  {
    id: 'dresses',
    title: 'Dresses',
    subtitle: 'Halter, Midi & Maxi',
    count: '5 Styles',
    image: '/images/catalog/IMG-20261017-WA0043.jpg',
    tag: 'Signature',
  },
];

export default function MobileCategoryGrid() {
  const { activeCategory, setActiveCategory } = useStore();

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
    const target = document.getElementById('collection');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full px-3 md:px-[1.5vw] py-6 md:py-8">
      {/* Editorial Section Header */}
      <div className="flex items-end justify-between mb-3.5 px-1">
        <div>
          <span className="flex items-center gap-1.5 text-[10px] md:text-xs font-heading font-black tracking-widest uppercase text-[#482922]/70">
            <Sparkles className="w-3 h-3 text-[#C5A059]" /> Explore by Category
          </span>
          <h2 className="font-heading font-black text-xl md:text-2xl uppercase tracking-tight text-[#482922] mt-0.5">
            The Cotnera Edits
          </h2>
        </div>
        <button
          onClick={() => handleCategorySelect('all')}
          className="text-[11px] md:text-xs font-heading font-bold uppercase tracking-wider text-[#482922] underline underline-offset-4 hover:opacity-75 transition-opacity cursor-pointer"
        >
          View All
        </button>
      </div>

      {/* Grid: 2-columns on phone with the 5th spanning full-width, or responsive on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 md:gap-4">
        {MOBILE_CATEGORIES.map((cat, idx) => {
          const isFifth = idx === 4;
          const isSelected = activeCategory === cat.id;

          return (
            <div
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer shadow-sm border transition-all duration-300 ${
                isFifth ? 'col-span-2 md:col-span-1 aspect-[16/9] md:aspect-[3/4]' : 'aspect-[3/4]'
              } ${
                isSelected 
                  ? 'border-[#482922] ring-2 ring-[#482922] scale-[0.99]' 
                  : 'border-[#E5E5E5] hover:border-[#482922] hover:shadow-md'
              }`}
            >
              {/* Product Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/85 transition-colors" />

              {/* Top Tag */}
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-full text-[9px] font-heading font-bold uppercase tracking-wider text-[#482922] shadow-xs">
                  {cat.tag}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute inset-0 p-3 flex flex-col justify-end text-white z-10">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-heading font-black text-sm md:text-base uppercase tracking-tight text-white leading-tight drop-shadow-xs">
                      {cat.title}
                    </h3>
                    <p className="text-[10px] md:text-xs text-white/80 font-mono mt-0.5">
                      {cat.subtitle} • {cat.count}
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#482922] transition-colors shrink-0">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
