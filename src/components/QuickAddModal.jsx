import React, { useState } from 'react';
import { X, Check, Ruler } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function QuickAddModal() {
  const { quickAddProduct, setQuickAddProduct, addToCart, setIsSizeChartOpen } = useStore();
  const [selectedSize, setSelectedSize] = useState('M');

  if (!quickAddProduct) return null;

  const handleAdd = () => {
    addToCart(quickAddProduct, selectedSize, 1);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickAddProduct(null)}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-sm bg-white p-6 shadow-2xl z-10 border border-brand-dark animate-in fade-in zoom-in-95 duration-200 rounded-2xl">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-brand-border">
          <div>
            <span className="text-[10px] font-heading font-bold uppercase tracking-widest text-brand-muted">
              Select Size
            </span>
            <h3 className="font-heading font-black text-base uppercase text-brand-dark mt-0.5">
              {quickAddProduct.name}
            </h3>
            <p className="text-xs text-brand-muted">{quickAddProduct.color} • ₹{quickAddProduct.price}</p>
          </div>

          <button
            onClick={() => setQuickAddProduct(null)}
            className="p-1 hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Product Preview Thumbnail */}
        <div className="py-4 flex gap-4 items-center">
          <img 
            src={quickAddProduct.images ? quickAddProduct.images[0] : quickAddProduct.image} 
            alt={quickAddProduct.name}
            className="w-16 h-20 object-contain bg-[#EAE8E4] border border-brand-border rounded-lg" 
          />
          <div className="text-xs text-brand-muted">
            <p>Fits true to size.</p>
            <p className="mt-1 font-mono text-emerald-700 font-semibold">In stock & ready to ship</p>
          </div>
        </div>

        {/* Sizes Grid */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-heading font-bold uppercase tracking-wider text-brand-dark">
              Choose Size
            </span>
            <button
              type="button"
              onClick={() => setIsSizeChartOpen(true)}
              className="text-[11px] font-heading font-bold text-[#482922] flex items-center gap-1 underline underline-offset-2 hover:opacity-75 cursor-pointer"
            >
              <Ruler className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Size Guide</span>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {quickAddProduct.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-2 text-xs font-mono font-bold border transition-all cursor-pointer ${
                  selectedSize === size
                    ? 'border-brand-dark bg-brand-dark text-white'
                    : 'border-brand-border bg-brand-canvas text-brand-dark hover:border-brand-dark'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Bag CTA */}
        <button
          onClick={handleAdd}
          className="mt-6 w-full bg-[#482922] text-white hover:bg-black py-3 font-heading text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-colors cursor-pointer rounded-lg"
        >
          <Check className="w-3.5 h-3.5" />
          <span>Add to Bag — ₹{quickAddProduct.price}</span>
        </button>

        {/* Payment Methods Trust Banner */}
        <div className="mt-3 pt-3 border-t border-neutral-200 text-center space-y-1">
          <p className="font-heading font-bold text-[10px] uppercase text-[#482922] tracking-wider">
            Direct UPI & WhatsApp Orders:
          </p>
          <p className="text-[9px] font-mono text-neutral-600">
            Google Pay • PhonePe • Paytm • BHIM UPI • WhatsApp Order
          </p>
        </div>

      </div>
    </div>
  );
}
