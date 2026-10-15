import React from 'react';
import { useStore } from '../context/StoreContext';

const SEARCH_CATEGORIES = [
  {
    title: "Popular Searches",
    keywords: ["Corset Tops", "Sleeveless Kurtis", "Halter Kurti", "Dabu Handloom", "White Cotton Pants", "Navratri Edit", "Deep Back Tunics", "3-Piece Sets", "Linen Trousers", "Short Kurtis"]
  },
  {
    title: "Trending Styles",
    keywords: ["Aarti Corset", "Moksha Halter", "Morli Bell Sleeve", "Umang Kurta", "Raw Edge Bottoms", "Emerald Festive", "Festive Bangers"]
  }
];

export default function PopularSearch() {
  const { setIsSearchOpen } = useStore();

  return (
    <section className="w-full px-4 md:px-[1vw] pb-[1vw]">
      <div className="bg-[#e6e6e6] p-6 md:p-[1.5vw] rounded-[2rem] md:rounded-[2.9rem] flex flex-col gap-6 md:gap-[2vw]">
        {SEARCH_CATEGORIES.map((cat) => (
          <div key={cat.title} className="flex flex-col gap-2 relative pb-3 border-b border-[#482922]/20 last:border-b-0">
            <h4 className="font-heading font-medium text-xs md:text-[0.9vw] text-[#482922]">
              {cat.title}
            </h4>
            <ul className="flex flex-wrap gap-2 md:gap-[0.6vw]">
              {cat.keywords.map((kw, idx) => (
                <li key={kw} className="inline-flex items-center">
                  <button
                    onClick={() => setIsSearchOpen(true)}
                    className="font-heading text-xs md:text-[0.85vw] text-[#482922]/80 hover:text-[#482922] transition-colors pr-2 md:pr-[0.6vw] border-r border-[#482922]/40 text-left"
                  >
                    {kw}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
