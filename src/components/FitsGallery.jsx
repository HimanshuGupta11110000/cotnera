import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const FITS_TABS_DATA = [
  {
    name: 'Restocked',
    products: [
      { id: 'rf-1', name: 'Jini Short Kurti', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=85', price: 2499 },
      { id: 'rf-2', name: 'Loose Cotton Pants', image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=600&q=85', price: 1999 },
      { id: 'rf-3', name: 'Moksha Halter', image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&q=85', price: 1899 },
      { id: 'rf-4', name: 'Umang Block Tunic', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=85', price: 2199 },
    ]
  },
  {
    name: 'Bottoms',
    products: [
      { id: 'bf-1', name: 'White Linen Trouser', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=85', price: 1999 },
      { id: 'bf-2', name: 'Gathered Cotton Skirt', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=600&q=85', price: 2299 },
    ]
  },
  {
    name: 'Tops',
    products: [
      { id: 'tf-1', name: 'Aarti Corset Kurti', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=85', price: 2499 },
      { id: 'tf-2', name: 'Dabu Print Halter', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=600&q=85', price: 1899 },
    ]
  },
  {
    name: 'Dresses',
    products: [
      { id: 'df-1', name: 'Morli Slit Kurti Dress', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=85', price: 2299 },
      { id: 'df-2', name: 'Tiered Linen Maxi', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=85', price: 2799 },
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
                color: 'Editorial Silhouette',
                price: item.price,
                images: [item.image],
                sizes: ['XS', 'S', 'M', 'L', 'XL']
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
