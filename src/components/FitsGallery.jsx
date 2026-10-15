import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const FITS_TABS_DATA = [
  {
    name: 'Debut Drop',
    products: [
      { id: 'prod-amber', name: 'The Amber Anarkali Gown', image: '/images/products/product_10.jpg', price: 3499, color: 'Golden Mustard', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
      { id: 'prod-sitara', name: 'Sitara Halter Peplum Set', image: '/images/products/product_68.webp', price: 2899, color: 'Ivory & Gold', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'prod-maya', name: 'Maya Ikat Slit Midi Dress', image: '/images/products/product_57.webp', price: 2699, color: 'Forest Olive', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'prod-roohi', name: 'Roohi Peach Kurti Set', image: '/images/products/product_19.jpg', price: 2999, color: 'Peach Fuzz', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    ]
  },
  {
    name: 'Co-ord Sets',
    products: [
      { id: 'prod-sitara', name: 'Sitara Halter Peplum Set', image: '/images/products/product_68.webp', price: 2899, color: 'Ivory & Gold', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'prod-prism', name: 'Prism Geometric Co-ord', image: '/images/products/product_79.webp', price: 2799, color: 'Slate & Sand', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'prod-noir', name: 'Noir Tailored Vest Set', image: '/images/products/product_5.jpg', price: 2599, color: 'Jet Black', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
    ]
  },
  {
    name: 'Festive & Dresses',
    products: [
      { id: 'prod-amber', name: 'The Amber Anarkali Gown', image: '/images/products/product_10.jpg', price: 3499, color: 'Golden Mustard', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
      { id: 'prod-maya', name: 'Maya Ikat Slit Midi Dress', image: '/images/products/product_57.webp', price: 2699, color: 'Forest Olive', sizes: ['XS', 'S', 'M', 'L', 'XL'] },
      { id: 'prod-roohi', name: 'Roohi Peach Kurti Set', image: '/images/products/product_19.jpg', price: 2999, color: 'Peach Fuzz', sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
    ]
  }
];

export default function FitsGallery() {
  const [activeTab, setActiveTab] = useState(0);
  const { setQuickAddProduct } = useStore();

  return (
    <section id="curated-fits" className="w-full px-0 md:px-[1.5vw] pt-[1vw]">
      <div className="w-full bg-[#ebebeb] rounded-[2rem] md:rounded-[4vw] p-[1.5rem] md:p-[2.3vw_2.6vw] flex flex-col gap-[1vw] justify-center">
        
        {/* Title */}
        <h1 className="font-heading text-2xl md:text-[1.8vw] text-black font-semibold tracking-tight">
          Curated Fits for you
        </h1>

        {/* Capsule Tabs */}
        <div className="flex gap-[0.5vw] overflow-x-auto scrollbar-none pb-1">
          {FITS_TABS_DATA.map((tab, idx) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-1.5 md:px-[1.1vw] md:py-[0.6vw] rounded-full text-xs md:text-[0.8vw] font-heading font-medium transition-all whitespace-nowrap cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#482922] text-[#ffffffb3] border border-[#F6C582] shadow-sm'
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="font-heading text-xs md:text-[0.8vw] font-bold uppercase">{item.name}</p>
                <p className="text-[11px] md:text-[0.7vw] font-mono font-bold">₹{item.price}</p>
              </div>
            </div>
          ))}

          {/* Discover More Special Card */}
          <a
            href="#shop-all"
            className="flex-shrink-0 min-w-[140px] md:min-w-[17.4vw] w-[140px] md:w-[17.4vw] aspect-[3/4] rounded-[2rem] md:rounded-[4rem] border border-[#482922] flex flex-col items-center justify-center gap-[0.6vw] bg-transparent hover:bg-white/40 transition-colors group cursor-pointer"
          >
            <div className="w-[2rem] h-[2rem] md:w-[2vw] md:h-[2vw] rounded-full border border-[#482922] flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-4 h-4 md:w-[1vw] md:h-[1vw] text-[#482922]" />
            </div>
            <span className="font-heading text-xs md:text-[0.85vw] font-semibold text-[#482922] relative pb-[0.2vw] border-b border-[#482922]">
              Discover More
            </span>
          </a>
        </div>

      </div>
    </section>
  );
}
