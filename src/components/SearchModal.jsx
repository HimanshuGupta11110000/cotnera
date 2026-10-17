import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { useStore } from '../context/StoreContext';

const POPULAR_SEARCHES = [
  'Most Wanted',
  'Co-ord Sets',
  'Denim Halter',
  'Sitara Peplum',
  'Beige Tailored Vest',
  'Prism Geometric',
  'Indigo Kurti',
  'Festive Anarkali',
];

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setQuickAddProduct } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filteredProducts = query.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.color.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 md:pt-24 px-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Search Modal Box */}
      <div className="relative w-full max-w-2xl bg-white shadow-2xl z-10 border border-brand-border p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b-2 border-brand-dark pb-3">
          <Search className="w-5 h-5 text-brand-dark mr-3 stroke-[2]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH PRODUCTS, STYLES, COLORS..."
            className="w-full bg-transparent font-heading text-sm md:text-base font-bold uppercase tracking-wide placeholder:text-neutral-400 focus:outline-none"
          />
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1 text-brand-muted hover:text-brand-dark cursor-pointer ml-2"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Popular Search Suggestions */}
        {query.trim() === '' && (
          <div className="mt-6">
            <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-brand-muted block mb-3">
              Popular Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {POPULAR_SEARCHES.map((chip) => (
                <button
                  key={chip}
                  onClick={() => setQuery(chip)}
                  className="px-3 py-1.5 border border-brand-border bg-brand-canvas hover:border-brand-dark text-xs font-heading font-medium tracking-wide uppercase transition-colors"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Live Filtered Results */}
        {query.trim() !== '' && (
          <div className="mt-6 max-h-96 overflow-y-auto">
            <span className="text-[11px] font-heading font-bold uppercase tracking-widest text-brand-muted block mb-3">
              {filteredProducts.length} Results Found
            </span>

            {filteredProducts.length === 0 ? (
              <p className="text-sm text-brand-muted py-6 text-center">
                No styles found matching "{query}". Try checking your spelling or explore popular keywords above.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProducts.map((p) => (
                  <div 
                    key={p.id}
                    className="flex gap-3 p-2 border border-brand-border hover:border-brand-dark transition-colors group cursor-pointer"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setQuickAddProduct(p);
                    }}
                  >
                    <img 
                      src={p.images[0]} 
                      alt={p.name}
                      className="w-16 h-20 object-cover bg-neutral-100" 
                    />
                    <div className="flex flex-col justify-center">
                      <h4 className="font-heading text-xs font-bold uppercase text-brand-dark group-hover:underline">
                        {p.name}
                      </h4>
                      <span className="text-[11px] text-brand-muted">{p.color}</span>
                      <span className="text-xs font-bold font-mono text-brand-dark mt-1">₹{p.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
