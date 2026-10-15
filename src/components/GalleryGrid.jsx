import React from 'react';

const GALLERY_SETS = [
  {
    item1: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85", // Large hero
    item2: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=85",
    item3: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=85",
    item4: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=85",
    item5: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=85",
  },
  {
    item1: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=85", // Large hero
    item2: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=800&q=85",
    item3: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=800&q=85",
    item4: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=800&q=85",
    item5: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=85",
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
