import React from 'react';
import { useStore } from '../context/StoreContext';

const MOBILE_CATEGORIES = [
  {
    id: 'most-wanted',
    title: 'Most wanted',
    image: '/images/catalog/IMG-20261018-WA0010.jpg', // Blue chevron halter top on model (identical to Nishorama's Most Wanted)
  },
  {
    id: 'kurtis',
    title: 'Kurtis',
    image: '/images/catalog/IMG-20261017-WA0042.jpg', // Peach floral kurti on model
  },
  {
    id: 'coord-sets',
    title: 'Co-ord Sets',
    image: '/images/catalog/IMG-20261017-WA0032.jpg', // Beige tailored vest & trouser set
  },
  {
    id: 'festive',
    title: 'Festive Collection',
    image: '/images/catalog/IMG-20261018-WA0035.jpg', // Surya rust orange anarkali gown on model
  },
  {
    id: 'dresses',
    title: 'Dresses',
    image: '/images/catalog/IMG-20261017-WA0037.jpg', // Royal blue halter staircase gown on model
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
    <section className="w-full px-3 md:px-[1.5vw] py-4 md:py-8">
      {/* 2-column grid on mobile (Nishorama 1:1), 5-column on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2.5 sm:gap-3.5 md:gap-4">
        {MOBILE_CATEGORIES.map((cat, idx) => {
          const isFifth = idx === 4;
          const isSelected = activeCategory === cat.id;

          return (
            <div
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer select-none transition-all duration-300 ${
                isFifth ? 'col-span-2 md:col-span-1 aspect-[16/9] md:aspect-[3/4]' : 'aspect-[3/4]'
              } ${
                isSelected 
                  ? 'ring-2 ring-[#482922] scale-[0.99]' 
                  : 'hover:scale-[1.01]'
              }`}
            >
              {/* Category Model Image */}
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-108"
              />

              {/* Nishorama Subtle Vignette / Gradient Overlay */}
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors duration-300" />

              {/* Nishorama Centered Bold White Text */}
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center z-10 pointer-events-none">
                <h3 className="font-heading font-black text-xl sm:text-2xl md:text-xl lg:text-2xl text-white tracking-tight drop-shadow-md">
                  {cat.title}
                </h3>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
