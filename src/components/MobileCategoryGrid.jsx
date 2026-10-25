import React from 'react';
import { useStore } from '../context/StoreContext';

const MOBILE_CATEGORIES = [
  {
    id: 'trouser',
    title: 'Trousers',
    image: '/images/catalog/trouser-navy-front.jpg',
  },
  {
    id: 'most-wanted',
    title: 'Most wanted',
    image: '/images/catalog/IMG-20261018-WA0010.jpg',
  },
  {
    id: 'coord-sets',
    title: 'Co-ord Sets',
    image: '/images/catalog/IMG-20261017-WA0032.jpg',
  },
  {
    id: 'kurti',
    title: 'Kurtis',
    image: '/images/catalog/kurti-pink-hakoba-front.jpg',
  },
  {
    id: 'festive',
    title: 'Festive Collection',
    image: '/images/catalog/IMG-20261018-WA0035.jpg',
  },
  {
    id: 'dresses',
    title: 'Dresses',
    image: '/images/catalog/IMG-20261017-WA0037.jpg',
  },
];

export default function MobileCategoryGrid() {
  const { activeCategory, navigateToCollection } = useStore();

  const handleCategorySelect = (categoryId) => {
    navigateToCollection(categoryId);
  };

  return (
    <section className="w-full px-3 md:px-[1.5vw] py-4 md:py-8">
      {/* 2-column grid on mobile, 3-col on tablet, 6-column on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3.5 md:gap-4">
        {MOBILE_CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat.id;

          return (
            <div
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer select-none transition-all duration-300 aspect-[3/4] ${
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
