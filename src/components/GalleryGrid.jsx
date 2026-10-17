import React from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/mockData';

const GALLERY_SETS = [
  {
    item1: { img: "/images/catalog/IMG-20261017-WA0039.jpg", prodId: "prod-sitara-halter-peplum", title: "Sitara Halter Peplum Set" },
    item2: { img: "/images/catalog/IMG-20261017-WA0043.jpg", prodId: "prod-denim-halter", title: "Denim Chambray Halter Dress" },
    item3: { img: "/images/catalog/IMG-20261017-WA0032.jpg", prodId: "prod-beige-vest-set", title: "Beige Tailored Vest Set" },
    item4: { img: "/images/catalog/IMG-20261017-WA0027.jpg", prodId: "prod-surya-rust-anarkali", title: "Surya Rust Orange Anarkali" },
    item5: { img: "/images/catalog/IMG-20260930-WA0007.jpg", prodId: "prod-indigo-peplum-kurti", title: "Indigo Floral Kurti Set" },
  },
  {
    item1: { img: "/images/catalog/IMG-20261017-WA0030.jpg", prodId: "prod-noir-vest-trousers", title: "Noir Black Peplum Set" },
    item2: { img: "/images/catalog/IMG-20261017-WA0029.jpg", prodId: "prod-prism-coord", title: "Prism Geometric Co-ord" },
    item3: { img: "/images/catalog/IMG-20261017-WA0041.jpg", prodId: "prod-mustard-polka-gown", title: "Mustard Polka Festive Gown" },
    item4: { img: "/images/catalog/IMG-20261017-WA0053.jpg", prodId: "prod-baby-pink-anarkali", title: "Gulabo Baby Pink Anarkali" },
    item5: { img: "/images/catalog/IMG-20261018-WA0010.jpg", prodId: "prod-blue-chevron-halter-top", title: "Indus Blue Chevron Halter Top" },
  }
];

export default function GalleryGrid() {
  const { openProductDetail } = useStore();

  const handleItemClick = (item) => {
    const prod = PRODUCTS.find(p => p.id === item.prodId);
    if (prod) {
      openProductDetail(prod);
    }
  };

  return (
    <section className="w-full h-[85vh] md:h-[calc(100vh+4vw)] overflow-hidden py-[2vw] bg-[#F0F0F0]">
      {/* Moving Track */}
      <div className="w-max h-full flex animate-gallery-move">
        
        {/* Render 2 sets then duplicated set for seamless 100% infinite loop */}
        {[...GALLERY_SETS, ...GALLERY_SETS].map((set, setIndex) => (
          <div 
            key={setIndex}
            className="flex-shrink-0 w-[calc(100vw-14px)] max-w-[calc(100vw-14px)] h-full grid grid-cols-[2fr_1fr_1fr_1fr] grid-rows-5 gap-[1.2vw] pr-[1.2vw]"
          >
            {/* Item 1: Giant Featured Portrait (Columns 1-2, Rows 1-5) */}
            <div 
              role="button"
              tabIndex={0}
              data-lookbook-tile="true"
              onClick={() => handleItemClick(set.item1)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleItemClick(set.item1); }}
              className="col-span-2 row-span-5 h-full w-full overflow-hidden rounded-[40px] md:rounded-[72px] cursor-pointer shadow-sm group relative"
            >
              <img 
                src={set.item1.img} 
                alt={set.item1.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-6">
                <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider text-[#482922] opacity-0 group-hover:opacity-100 transition-opacity">
                  View Piece
                </span>
              </div>
            </div>

            {/* Item 2: Column 3, Rows 1-2 */}
            <div 
              role="button"
              tabIndex={0}
              data-lookbook-tile="true"
              onClick={() => handleItemClick(set.item2)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleItemClick(set.item2); }}
              className="col-start-3 row-span-2 h-full w-full overflow-hidden rounded-[28px] md:rounded-[48px] cursor-pointer shadow-sm group relative"
            >
              <img 
                src={set.item2.img} 
                alt={set.item2.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-4">
                <span className="bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider text-[#482922] opacity-0 group-hover:opacity-100 transition-opacity">
                  View Piece
                </span>
              </div>
            </div>

            {/* Item 3: Column 3, Rows 3-5 */}
            <div 
              role="button"
              tabIndex={0}
              data-lookbook-tile="true"
              onClick={() => handleItemClick(set.item3)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleItemClick(set.item3); }}
              className="col-start-3 row-start-3 row-span-3 h-full w-full overflow-hidden rounded-[28px] md:rounded-[48px] cursor-pointer shadow-sm group relative"
            >
              <img 
                src={set.item3.img} 
                alt={set.item3.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-4">
                <span className="bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider text-[#482922] opacity-0 group-hover:opacity-100 transition-opacity">
                  View Piece
                </span>
              </div>
            </div>

            {/* Item 4: Column 4, Rows 1-3 */}
            <div 
              role="button"
              tabIndex={0}
              data-lookbook-tile="true"
              onClick={() => handleItemClick(set.item4)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleItemClick(set.item4); }}
              className="col-start-4 row-span-3 h-full w-full overflow-hidden rounded-[28px] md:rounded-[48px] cursor-pointer shadow-sm group relative"
            >
              <img 
                src={set.item4.img} 
                alt={set.item4.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-4">
                <span className="bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider text-[#482922] opacity-0 group-hover:opacity-100 transition-opacity">
                  View Piece
                </span>
              </div>
            </div>

            {/* Item 5: Column 4, Rows 4-5 */}
            <div 
              role="button"
              tabIndex={0}
              data-lookbook-tile="true"
              onClick={() => handleItemClick(set.item5)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleItemClick(set.item5); }}
              className="col-start-4 row-start-4 row-span-2 h-full w-full overflow-hidden rounded-[28px] md:rounded-[48px] cursor-pointer shadow-sm group relative"
            >
              <img 
                src={set.item5.img} 
                alt={set.item5.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-end p-4">
                <span className="bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full text-[10px] font-heading font-bold uppercase tracking-wider text-[#482922] opacity-0 group-hover:opacity-100 transition-opacity">
                  View Piece
                </span>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
