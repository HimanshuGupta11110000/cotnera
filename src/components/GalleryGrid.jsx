import React from 'react';

const GALLERY_SETS = [
  {
    item1: "/images/catalog/IMG-20261017-WA0039.jpg", // Sitara Halter Peplum Set
    item2: "/images/catalog/IMG-20261017-WA0043.jpg", // Denim Halter Maxi
    item3: "/images/catalog/IMG-20261017-WA0032.jpg", // Beige Vest Set
    item4: "/images/catalog/IMG-20261017-WA0027.jpg", // Surya Rust Anarkali
    item5: "/images/catalog/IMG-20260930-WA0007.jpg", // Indigo Floral Kurti
  },
  {
    item1: "/images/catalog/IMG-20261017-WA0030.jpg", // Noir Black Vest Set
    item2: "/images/catalog/IMG-20261017-WA0029.jpg", // Prism Geometric Co-ord
    item3: "/images/catalog/IMG-20261017-WA0041.jpg", // Mustard Polka Festive Gown
    item4: "/images/catalog/IMG-20261017-WA0053.jpg", // Gulabo Pink Organza Anarkali
    item5: "/images/catalog/IMG-20261018-WA0020.jpg", // Maya Green Ikat Slit Dress
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
