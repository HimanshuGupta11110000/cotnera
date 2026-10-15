import React from 'react';

const GALLERY_SETS = [
  {
    item1: "/images/products/product_10.jpg", // Large hero: Amber Festive Anarkali
    item2: "/images/products/product_68.webp", // Sitara Halter Set
    item3: "/images/products/product_57.webp", // Maya Ikat Dress
    item4: "/images/products/product_79.webp", // Prism Geometric Set
    item5: "/images/products/product_19.jpg",  // Roohi Peach Kurti Set
  },
  {
    item1: "/images/products/product_68.webp", // Large hero: Sitara Halter Set
    item2: "/images/products/product_3.jpg",   // Prism Peplum Mannequin
    item3: "/images/products/product_24.jpg",  // Cotnera Tag Flat-lay
    item4: "/images/products/product_5.jpg",   // Noir Tailored Vest Set
    item5: "/images/products/product_7.webp",  // Sitara Back Halter Detail
  }
];

export default function GalleryGrid() {
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
            <div className="col-span-2 row-span-5 h-full w-full overflow-hidden rounded-[40px] md:rounded-[72px] cursor-pointer shadow-sm group">
              <img 
                src={set.item1} 
                alt="Cotnera Lookbook Campaign" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* Item 2: Column 3, Rows 1-2 */}
            <div className="col-start-3 row-span-2 h-full w-full overflow-hidden rounded-[28px] md:rounded-[48px] cursor-pointer shadow-sm group">
              <img 
                src={set.item2} 
                alt="Cotnera Silhouette" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* Item 3: Column 3, Rows 3-5 */}
            <div className="col-start-3 row-start-3 row-span-3 h-full w-full overflow-hidden rounded-[28px] md:rounded-[48px] cursor-pointer shadow-sm group">
              <img 
                src={set.item3} 
                alt="Cotnera Silhouette" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* Item 4: Column 4, Rows 1-3 */}
            <div className="col-start-4 row-span-3 h-full w-full overflow-hidden rounded-[28px] md:rounded-[48px] cursor-pointer shadow-sm group">
              <img 
                src={set.item4} 
                alt="Cotnera Silhouette" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* Item 5: Column 4, Rows 4-5 */}
            <div className="col-start-4 row-start-4 row-span-2 h-full w-full overflow-hidden rounded-[28px] md:rounded-[48px] cursor-pointer shadow-sm group">
              <img 
                src={set.item5} 
                alt="Cotnera Silhouette" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
