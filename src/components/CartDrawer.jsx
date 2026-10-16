import React, { useEffect } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShieldCheck, ArrowRight, ShoppingBag } from 'lucide-react';
import { BRAND, PRODUCTS } from '../data/mockData';
import { useStore } from '../context/StoreContext';

export default function CartDrawer() {
  const { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    cartSubtotal, 
    updateQuantity, 
    removeFromCart, 
    proceedToWhatsAppOrder,
    openCheckout,
    setQuickAddProduct
  } = useStore();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl z-10 flex flex-col justify-between border-l border-brand-border animate-in slide-in-from-right duration-300">
        
        {/* Cart Top Header */}
        <div className="p-5 border-b border-brand-border bg-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-heading font-black text-sm uppercase tracking-widest text-brand-dark">
              Your Bag
            </span>
            <span className="text-xs font-mono font-bold text-brand-muted">
              ( ₹{cartSubtotal} )
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 border border-brand-dark hover:bg-brand-dark hover:text-white transition-colors cursor-pointer"
            aria-label="Close Bag"
          >
            <X className="w-4 h-4 stroke-[2]" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="bg-brand-canvas px-5 py-2.5 border-b border-brand-border text-[11px] font-heading uppercase tracking-wide">
          {cartSubtotal >= BRAND.freeShippingThreshold ? (
            <p className="text-emerald-700 font-bold flex items-center gap-1.5">
              <span>🎉 You have unlocked Free Domestic Shipping!</span>
            </p>
          ) : (
            <p className="text-brand-muted">
              Add <span className="font-bold text-brand-dark">₹{BRAND.freeShippingThreshold - cartSubtotal}</span> more for <span className="font-bold text-brand-dark">Free Shipping</span>
            </p>
          )}
          <div className="w-full bg-neutral-200 h-1.5 mt-2 rounded-full overflow-hidden">
            <div 
              className="bg-brand-dark h-full transition-all duration-300"
              style={{ width: `${Math.min(100, (cartSubtotal / BRAND.freeShippingThreshold) * 100)}%` }}
            />
          </div>
        </div>

        {/* Cart Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          
          {/* EMPTY STATE */}
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full border border-brand-border bg-white flex items-center justify-center text-brand-muted">
                <ShoppingBag className="w-7 h-7 stroke-[1.5]" />
              </div>
              <h3 className="font-heading font-black text-xl uppercase tracking-tight text-brand-dark">
                Your Bag is Empty!
              </h3>
              <p className="text-xs text-brand-muted max-w-xs">
                Looks like you haven't added any of our bold ethnic pieces yet. Let's get you started!
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="mt-2 bg-brand-dark text-white px-6 py-2.5 font-heading text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors"
              >
                Explore New In
              </button>

              {/* Empty Cart Upsell Suggestions */}
              <div className="w-full border-t border-brand-border pt-6 mt-6 text-left">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="font-heading font-bold text-xs uppercase text-brand-dark">Curated for you</p>
                    <p className="text-[10px] text-brand-muted">Trending this week</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {PRODUCTS.slice(0, 2).map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => setQuickAddProduct(item)}
                      className="border border-brand-border bg-white p-2 cursor-pointer hover:border-brand-dark transition-colors group"
                    >
                      <img src={item.images[0]} alt={item.name} className="w-full h-24 object-cover" />
                      <p className="font-heading text-[11px] font-bold uppercase truncate mt-1.5 group-hover:underline">
                        {item.name}
                      </p>
                      <p className="text-[11px] font-mono font-bold text-brand-dark">₹{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* POPULATED ITEMS LIST */
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div 
                  key={`${item.product.id}-${item.size}`}
                  className="flex gap-4 p-3 bg-white border border-brand-border"
                >
                  {/* Thumbnail */}
                  <img 
                    src={item.product.images[0]} 
                    alt={item.product.name}
                    className="w-20 h-24 object-cover bg-neutral-100 flex-shrink-0" 
                  />

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-heading text-xs font-bold uppercase tracking-tight text-brand-dark">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          className="text-neutral-400 hover:text-brand-accent-red transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-brand-muted mt-0.5">{item.product.color}</p>
                      <div className="inline-block mt-1 px-1.5 py-0.5 bg-neutral-100 border border-neutral-200 text-[10px] font-bold font-mono">
                        SIZE: {item.size}
                      </div>
                    </div>

                    {/* Quantity Stepper & Price */}
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-neutral-100">
                      <div className="flex items-center border border-brand-border bg-brand-canvas">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, -1)}
                          className="p-1 hover:bg-neutral-200 transition-colors text-brand-dark"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-mono font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, 1)}
                          className="p-1 hover:bg-neutral-200 transition-colors text-brand-dark"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-heading font-black text-xs tracking-tight text-brand-dark">
                        ₹{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Cart Bottom Summary & Checkout CTAs */}
        {cartItems.length > 0 && (
          <div className="p-5 bg-white border-t border-brand-border space-y-3">
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-brand-muted uppercase font-heading">Taxes & Shipping</span>
              <span className="font-bold text-emerald-700">Free Domestic Shipping (All taxes incl.)</span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-neutral-200">
              <span className="font-heading font-black text-sm uppercase tracking-wide text-brand-dark">
                Estimated Total
              </span>
              <span className="font-heading font-black text-base tracking-tight text-brand-dark">
                ₹{cartSubtotal}
              </span>
            </div>

            {/* Comprehensive "We Accept All Payment Methods" Trust Strip */}
            <div className="bg-[#FAF8F5] border border-[#E9E4DC] p-3 rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-[10px] uppercase text-[#482922] tracking-wider">
                  Payment Methods Accepted:
                </span>
                <span className="text-[9px] font-mono text-emerald-700 font-bold">100% SECURE</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[9px] font-heading font-semibold text-neutral-700">
                <span className="px-2 py-0.5 bg-white border border-neutral-200 rounded text-[#1a73e8]">Google Pay</span>
                <span className="px-2 py-0.5 bg-white border border-neutral-200 rounded text-[#5f259f]">PhonePe</span>
                <span className="px-2 py-0.5 bg-white border border-neutral-200 rounded text-[#00b9f5]">Paytm</span>
                <span className="px-2 py-0.5 bg-white border border-neutral-200 rounded text-emerald-700">BHIM UPI</span>
                <span className="px-2 py-0.5 bg-white border border-neutral-200 rounded text-neutral-800">COD</span>
                <span className="px-2 py-0.5 bg-white border border-neutral-200 rounded text-neutral-600">NetBanking</span>
              </div>
            </div>

            {/* Primary Checkout CTA (Direct UPI Flow) */}
            <button
              onClick={() => openCheckout('UPI')}
              className="w-full bg-[#482922] hover:bg-black text-white py-3.5 px-4 font-heading text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer rounded-lg active:scale-[0.99]"
            >
              <span>Pay via UPI (GPay / PhonePe / Paytm)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Secondary Checkout CTA (Cash On Delivery Flow) */}
            <button
              onClick={() => openCheckout('COD')}
              className="w-full border border-[#482922] bg-white text-[#482922] hover:bg-neutral-50 py-2.5 px-4 font-heading text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer rounded-lg active:scale-[0.99]"
            >
              <span>Pay Cash on Delivery (COD)</span>
            </button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-2 pt-1 text-[10px] text-brand-muted">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero Gateway Commission • Direct WhatsApp Updates</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
