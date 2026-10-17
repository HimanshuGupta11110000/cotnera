import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const FITS_TABS_DATA = [
  {
    name: 'Most Wanted',
    products: [
      { id: 'prod-sitara-peplum', name: 'Sitara Halter Peplum Set', image: '/images/catalog/IMG-20261017-WA0039.jpg', price: 2339, color: 'Ivory & Gold', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'prod-denim-halter', name: 'Denim Halter Maxi Dress', image: '/images/catalog/IMG-20261017-WA0043.jpg', price: 2249, color: 'Indigo Chambray', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'prod-beige-vest', name: 'Beige Tailored Vest Set', image: '/images/catalog/IMG-20261017-WA0032.jpg', price: 2249, color: 'Warm Sand', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
      { id: 'prod-prism-coord', name: 'Prism Geometric Co-ord', image: '/images/catalog/IMG-20261017-WA0029.jpg', price: 1980, color: 'Slate & Sand', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    ]
  },
  {
    name: 'Co-ord Sets',
    products: [
      { id: 'prod-beige-vest', name: 'Beige Tailored Vest Set', image: '/images/catalog/IMG-20261017-WA0032.jpg', price: 2249, color: 'Warm Sand', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
      { id: 'prod-noir-vest', name: 'Noir Black Peplum Set', image: '/images/catalog/IMG-20261017-WA0030.jpg', price: 1709, color: 'Jet Black', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'prod-sitara-peplum', name: 'Sitara Halter Peplum Set', image: '/images/catalog/IMG-20261017-WA0039.jpg', price: 2339, color: 'Ivory & Gold', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'prod-prism-coord', name: 'Prism Geometric Co-ord', image: '/images/catalog/IMG-20261017-WA0029.jpg', price: 1980, color: 'Slate & Sand', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    ]
  },
  {
    name: 'Festive & Kurtis',
    products: [
      { id: 'prod-rust-orange-anarkali', name: 'Surya Rust Orange Anarkali', image: '/images/catalog/IMG-20261017-WA0027.jpg', price: 3149, color: 'Rust Orange', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
      { id: 'prod-pink-organza-anarkali', name: 'Gulabo Pink Organza Anarkali', image: '/images/catalog/IMG-20261017-WA0053.jpg', price: 2969, color: 'Rose Pink', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
      { id: 'prod-indigo-kurti', name: 'Indigo Floral Kurti Set', image: '/images/catalog/IMG-20260930-WA0007.jpg', price: 1799, color: 'Indigo Blue', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
      { id: 'prod-yellow-polka-anarkali', name: 'Mustard Polka Festive Gown', image: '/images/catalog/IMG-20261017-WA0041.jpg', price: 1620, color: 'Mustard Yellow', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    ]
  }
];

export default function FitsGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const { setQuickAddProduct, setActiveCategory } = useStore();

  return (
    <section id="curated-fits" className="w-full px-0 md:px-[1.5vw] pt-[1vw]">
      <div className="w-full bg-[#ebebeb] rounded-[2rem] md:rounded-[4vw] p-[1.5rem] md:p-[2.3vw_2.6vw] flex flex-col gap-[1vw] justify-center">
        
        {/* Title */}
        <h2 className="font-heading text-2xl md:text-[1.8vw] text-black font-semibold tracking-tight">
          Curated Fits for you
        </h2>

        {/* Capsule Tabs */}
        <div className="flex gap-[0.5vw] overflow-x-auto scrollbar-none pb-1">
          {FITS_TABS_DATA.map((tab, idx) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-1.5 md:px-[1.1vw] md:py-[0.6vw] rounded-full text-xs md:text-[0.8vw] font-heading font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#482922] text-[#F6C582] border border-[#F6C582] shadow-sm'
                  : 'bg-white text-black/70 border border-[#D5D5D5] hover:border-[#482922]'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Horizontal Products Grid with Extreme 4rem Rounded Pills */}
        <div className="flex gap-[1vw] overflow-x-auto scrollbar-none py-2">
          {FITS_TABS_DATA[activeTab].products.map((item) => (
            <div
              key={item.id}
              onClick={() => setQuickAddProduct({
                id: item.id,
                name: item.name,
                color: item.color || 'Handcrafted Cotton',
                price: item.price,
                images: [item.image],
                sizes: item.sizes || ['XS', 'S', 'M', 'L', 'XL']
              })}
              className="flex-shrink-0 min-w-[140px] md:min-w-[17.4vw] w-[140px] md:w-[17.4vw] aspect-[3/4] overflow-hidden rounded-[2rem] md:rounded-[4rem] relative group cursor-pointer shadow-sm bg-neutral-200"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 text-white opacity-90 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <p className="font-heading text-xs md:text-[0.8vw] font-bold uppercase">{item.name}</p>
                <p className="text-[11px] md:text-[0.7vw] font-mono font-bold text-[#F6C582]">₹{item.price}</p>
              </div>
            </div>
          ))}

          {/* Discover More Special Card */}
          <a
            href="#collection"
            onClick={() => setActiveCategory('all')}
            className="flex-shrink-0 min-w-[140px] md:min-w-[17.4vw] w-[140px] md:w-[17.4vw] aspect-[3/4] rounded-[2rem] md:rounded-[4rem] border border-[#482922] flex flex-col items-center justify-center gap-[0.6vw] bg-transparent hover:bg-white/40 transition-colors group cursor-pointer"
          >
            <div className="w-[2rem] h-[2rem] md:w-[2vw] md:h-[2vw] rounded-full border border-[#482922] flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-4 h-4 md:w-[1vw] md:h-[1vw] text-[#482922]" />
            </div>
            <span className="font-heading text-xs md:text-[0.85vw] font-semibold text-[#482922] relative pb-[0.2vw] border-b border-[#482922]">
              View All 22 Pieces
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
