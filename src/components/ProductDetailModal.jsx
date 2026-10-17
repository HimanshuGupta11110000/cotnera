import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Bookmark, 
  Check, 
  Truck, 
  RefreshCw, 
  MessageCircle, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  Zap
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { BRAND } from '../data/mockData';

const SIZE_MEASUREMENTS = {
  inches: {
    XXS: { chest: '32', waist: '26-28', hip: '34-36', length: '41' },
    XS:  { chest: '34', waist: '28-30', hip: '36-38', length: '41' },
    S:   { chest: '36', waist: '30-32', hip: '38-40', length: '41' },
    M:   { chest: '38', waist: '32-34', hip: '40-42', length: '41' },
    L:   { chest: '40', waist: '34-36', hip: '42-44', length: '41' },
    XL:  { chest: '42', waist: '36-38', hip: '44-46', length: '41' },
    XXL: { chest: '44', waist: '38-40', hip: '46-48', length: '41' },
  },
  cm: {
    XXS: { chest: '81',  waist: '66-71', hip: '86-91',   length: '104' },
    XS:  { chest: '86',  waist: '71-76', hip: '91-97',   length: '104' },
    S:   { chest: '91',  waist: '76-81', hip: '97-102',  length: '104' },
    M:   { chest: '97',  waist: '81-86', hip: '102-107', length: '104' },
    L:   { chest: '102', waist: '86-91', hip: '107-112', length: '104' },
    XL:  { chest: '107', waist: '91-97', hip: '112-117', length: '104' },
    XXL: { chest: '112', waist: '97-102',hip: '117-122', length: '104' },
  }
};

export default function ProductDetailModal() {
  const { 
    selectedProduct, 
    closeProductDetail, 
    addToCart, 
    openCheckout, 
    setIsSizeChartOpen 
  } = useStore();

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('S');
  const [measurementUnit, setMeasurementUnit] = useState('inches'); // 'inches' | 'cm'
  const [isSaved, setIsSaved] = useState(false);
  const [openAccordion, setOpenAccordion] = useState('details'); // 'details' | 'shipping' | 'returns' | null
  const [addedSuccess, setAddedSuccess] = useState(false);

  // Reset state when a new product is selected
  useEffect(() => {
    if (selectedProduct) {
      setActiveImageIdx(0);
      setSelectedSize(selectedProduct.sizes?.[1] || selectedProduct.sizes?.[0] || 'S');
      setAddedSuccess(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProduct]);

  if (!selectedProduct) return null;

  const images = (selectedProduct.images && selectedProduct.images.length > 0)
    ? selectedProduct.images 
    : [selectedProduct.image];

  const currentMeasurements = SIZE_MEASUREMENTS[measurementUnit][selectedSize] || SIZE_MEASUREMENTS[measurementUnit]['S'];
  const unitLabel = measurementUnit === 'inches' ? 'Inch' : 'CM';

  const handleAddToCart = () => {
    addToCart(selectedProduct, selectedSize, 1);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart(selectedProduct, selectedSize, 1);
    closeProductDetail();
    openCheckout('UPI');
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(prev => prev === section ? null : section);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-black/75 backdrop-blur-md p-0 md:p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Background overlay click */}
      <div 
        className="fixed inset-0 cursor-pointer"
        onClick={closeProductDetail}
        aria-hidden="true"
      />

      {/* Main PDP Modal Container (Nishorama 1:1 Layout) */}
      <div className="relative w-full max-w-5xl bg-white md:rounded-3xl shadow-2xl z-10 overflow-hidden flex flex-col max-h-[100vh] md:max-h-[92vh]">
        
        {/* Top Floating Close Button */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30">
          <button
            onClick={closeProductDetail}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/90 hover:bg-white text-[#482922] flex items-center justify-center transition-all shadow-md cursor-pointer hover:scale-105"
            aria-label="Close Product View"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-0">
          
          {/* ================= LEFT / CENTER: IMAGE GALLERY (55%) ================= */}
          <div className="md:col-span-7 bg-[#FBF9F6] p-4 sm:p-6 flex flex-col justify-between relative border-b md:border-b-0 md:border-r border-neutral-200">
            
            {/* Main Stage Image */}
            <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-lg mx-auto rounded-2xl overflow-hidden shadow-xs bg-neutral-100 select-none">
              
              {/* Top Chips */}
              <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5 pointer-events-none">
                <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-heading font-medium text-[#482922] shadow-xs">
                  {selectedProduct.fabric?.includes('Cotton') ? 'Pure Cotton' : 'Handcrafted'}
                </span>
                <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-heading font-medium text-[#482922] shadow-xs">
                  Slim Fit
                </span>
                <span className="bg-[#482922] text-[#F6C582] px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-tight shadow-xs">
                  10% OFF
                </span>
              </div>

              {/* Model Size Check Top/Bottom Banner */}
              <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
                <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-heading font-medium text-neutral-800 shadow-xs">
                  Model is wearing size XS
                </span>
              </div>

              <img
                src={images[activeImageIdx]}
                alt={`${selectedProduct.name} - view ${activeImageIdx + 1}`}
                className="w-full h-full object-cover object-top transition-all duration-300"
              />

              {/* Slider Arrows (only if multiple images) */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIdx(prev => (prev > 0 ? prev - 1 : images.length - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#482922] flex items-center justify-center shadow-md cursor-pointer z-20"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIdx(prev => (prev < images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#482922] flex items-center justify-center shadow-md cursor-pointer z-20"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Photo Counter Pill (e.g. 1/4) */}
                  <div className="absolute bottom-3 right-3 z-10 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full text-white text-[10px] font-mono font-medium">
                    {activeImageIdx + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Strip (if multiple images) */}
            {images.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-4 overflow-x-auto py-1">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIdx(idx)}
                    className={`relative w-14 h-18 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImageIdx === idx 
                        ? 'border-[#482922] scale-105 shadow-sm' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* ================= RIGHT: PRODUCT DETAILS & ACTIONS (45%) ================= */}
          <div className="md:col-span-5 p-5 sm:p-7 flex flex-col justify-between bg-white">
            <div>
              
              {/* Title & Wishlist Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h1 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tight text-[#482922] leading-tight">
                    {selectedProduct.name}
                  </h1>
                  <p className="text-xs sm:text-sm text-neutral-500 font-heading mt-1">
                    {selectedProduct.style || 'Signature Designer Piece'} • {selectedProduct.color}
                  </p>
                </div>

                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className="p-2 text-neutral-400 hover:text-[#482922] transition-colors cursor-pointer"
                  aria-label="Save to Wishlist"
                >
                  <Bookmark className={`w-5 h-5 ${isSaved ? 'fill-[#482922] text-[#482922]' : ''}`} />
                </button>
              </div>

              {/* Price Row (Matches Nishorama with cut price and 10% discount) */}
              <div className="mt-4 flex items-baseline gap-2.5 pb-4 border-b border-neutral-100">
                <span className="font-heading font-black text-xl sm:text-2xl text-[#482922]">
                  (Rs. {selectedProduct.price.toLocaleString('en-IN')})
                </span>
                {selectedProduct.originalPrice && (
                  <span className="text-sm font-mono text-neutral-400 line-through">
                    ₹{selectedProduct.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                <span className="bg-[#482922] text-[#F6C582] text-[10px] font-mono font-bold px-2 py-0.5 rounded-full">
                  10% OFF INAUGURAL
                </span>
              </div>

              {/* Nishorama Size Measurements Bar & "What's my size ?" Button */}
              <div className="mt-5 bg-[#FAF8F5] border border-[#E9E4DC] rounded-xl p-3">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E9E4DC]">
                  {/* Inches / CM Toggle */}
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-heading font-bold uppercase text-[#482922]">Unit:</span>
                    <div className="inline-flex rounded-full bg-white border border-[#D5D5D5] p-0.5 shadow-2xs">
                      <button
                        onClick={() => setMeasurementUnit('inches')}
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                          measurementUnit === 'inches' 
                            ? 'bg-[#482922] text-white shadow-2xs' 
                            : 'text-neutral-500 hover:text-black'
                        }`}
                      >
                        Inches
                      </button>
                      <button
                        onClick={() => setMeasurementUnit('cm')}
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                          measurementUnit === 'cm' 
                            ? 'bg-[#482922] text-white shadow-2xs' 
                            : 'text-neutral-500 hover:text-black'
                        }`}
                      >
                        CM
                      </button>
                    </div>
                  </div>

                  {/* What's my size ? Button (Triggers SizeChartModal) */}
                  <button
                    onClick={() => setIsSizeChartOpen(true)}
                    className="bg-[#482922] hover:bg-black text-white text-[11px] font-heading font-bold px-3 py-1 rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    What's my size ?
                  </button>
                </div>

                {/* Dynamic Measurements Display for Selected Size */}
                <div className="grid grid-cols-4 gap-1 text-center font-mono">
                  <div className="bg-white/80 rounded-md p-1.5 border border-[#E9E4DC]/60">
                    <span className="block text-[9px] uppercase tracking-wider text-neutral-400 font-heading">Chest</span>
                    <span className="text-xs font-bold text-[#482922]">{currentMeasurements.chest} <span className="text-[9px] text-neutral-400">{unitLabel}</span></span>
                  </div>
                  <div className="bg-white/80 rounded-md p-1.5 border border-[#E9E4DC]/60">
                    <span className="block text-[9px] uppercase tracking-wider text-neutral-400 font-heading">High Waist</span>
                    <span className="text-xs font-bold text-[#482922]">{currentMeasurements.waist} <span className="text-[9px] text-neutral-400">{unitLabel}</span></span>
                  </div>
                  <div className="bg-white/80 rounded-md p-1.5 border border-[#E9E4DC]/60">
                    <span className="block text-[9px] uppercase tracking-wider text-neutral-400 font-heading">Hip</span>
                    <span className="text-xs font-bold text-[#482922]">{currentMeasurements.hip} <span className="text-[9px] text-neutral-400">{unitLabel}</span></span>
                  </div>
                  <div className="bg-white/80 rounded-md p-1.5 border border-[#E9E4DC]/60">
                    <span className="block text-[9px] uppercase tracking-wider text-neutral-400 font-heading">Length</span>
                    <span className="text-xs font-bold text-[#482922]">{currentMeasurements.length} <span className="text-[9px] text-neutral-400">{unitLabel}</span></span>
                  </div>
                </div>
              </div>

              {/* Nishorama Size Pill Buttons */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#482922]">
                    Select Size: <span className="text-neutral-500 font-mono">({selectedSize})</span>
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-1.5">
                  {(selectedProduct.sizes || ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL']).map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`py-2 text-xs font-mono font-bold rounded-xl border transition-all cursor-pointer ${
                        selectedSize === sz
                          ? 'border-[#482922] bg-[#482922] text-white shadow-sm scale-102'
                          : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons: ADD TO CART & BUY NOW (Nishorama 1:1) */}
              <div className="mt-6 flex flex-col gap-2.5">
                
                {/* 1. Add to Cart Button */}
                <button
                  onClick={handleAddToCart}
                  className="w-full py-3.5 border-2 border-[#482922] bg-white hover:bg-neutral-50 text-[#482922] rounded-xl font-heading text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs"
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700">Added to Cart!</span>
                    </>
                  ) : (
                    <span>Add to Cart</span>
                  )}
                </button>

                {/* 2. Direct Buy Now / UPI Checkout Button */}
                <button
                  onClick={handleBuyNow}
                  className="w-full py-3.5 bg-[#482922] hover:bg-black text-white rounded-xl font-heading text-xs sm:text-sm font-black uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Zap className="w-4 h-4 text-[#F6C582] fill-[#F6C582]" />
                  <span>Buy Now — Direct 1-Click Pay</span>
                </button>
              </div>

              {/* Nishorama Trust Badges */}
              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-[11px] text-neutral-600">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#482922]" />
                  <span>Cash On Delivery Available</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <RefreshCw className="w-4 h-4 text-[#482922]" />
                  <span>Easy 7 Days Returns</span>
                </div>
              </div>

              {/* Accordions: Details, Shipping, Returns, Custom Sizing */}
              <div className="mt-5 divide-y divide-neutral-100 border-t border-b border-neutral-100">
                
                {/* Details & Description */}
                <div className="py-2.5">
                  <button
                    onClick={() => toggleAccordion('details')}
                    className="w-full flex items-center justify-between text-left font-heading text-xs font-bold uppercase tracking-wider text-[#482922] cursor-pointer"
                  >
                    <span>Details & Description</span>
                    {openAccordion === 'details' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'details' && (
                    <div className="mt-2 text-xs text-neutral-600 leading-relaxed font-sans space-y-1">
                      <p>{selectedProduct.description}</p>
                      <p className="pt-1"><strong className="text-neutral-800">Fabric:</strong> {selectedProduct.fabric || '100% Breathable Indian Cotton'}</p>
                      <p><strong className="text-neutral-800">Fit:</strong> {selectedProduct.fit || 'Regular fit. Falls gracefully over body.'}</p>
                      <p><strong className="text-neutral-800">Care:</strong> Gentle hand wash in cold water or dry clean. Line dry in shade.</p>
                    </div>
                  )}
                </div>

                {/* Shipping & Delivery */}
                <div className="py-2.5">
                  <button
                    onClick={() => toggleAccordion('shipping')}
                    className="w-full flex items-center justify-between text-left font-heading text-xs font-bold uppercase tracking-wider text-[#482922] cursor-pointer"
                  >
                    <span>Shipping & Delivery</span>
                    {openAccordion === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'shipping' && (
                    <div className="mt-2 text-xs text-neutral-600 leading-relaxed font-sans space-y-1">
                      <p>• Dispatched within 24-48 hours from our studio.</p>
                      <p>• Free express delivery across India on all prepaid orders.</p>
                      <p>• Tracking link sent directly to your WhatsApp & SMS upon dispatch.</p>
                    </div>
                  )}
                </div>

                {/* Return & Exchange */}
                <div className="py-2.5">
                  <button
                    onClick={() => toggleAccordion('returns')}
                    className="w-full flex items-center justify-between text-left font-heading text-xs font-bold uppercase tracking-wider text-[#482922] cursor-pointer"
                  >
                    <span>Return & Exchange</span>
                    {openAccordion === 'returns' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'returns' && (
                    <div className="mt-2 text-xs text-neutral-600 leading-relaxed font-sans space-y-1">
                      <p>• 7-day hassle-free replacement or size exchange.</p>
                      <p>• Simple 1-click exchange request directly via WhatsApp concierge.</p>
                      <p>• Reverse pickup arranged from your doorstep.</p>
                    </div>
                  )}
                </div>

              </div>

              {/* WhatsApp Custom Sizing CTA */}
              <div className="mt-4 p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-heading font-bold text-emerald-900">
                    Need Custom Sizing or Alterations?
                  </h4>
                  <p className="text-[11px] text-emerald-700 mt-0.5">
                    Chat with founders Akanksha & Riya directly on WhatsApp
                  </p>
                </div>
                <a
                  href={`https://wa.me/916397943289?text=${encodeURIComponent(`Hi Akanksha & Riya! I want custom sizing for ${selectedProduct.name} (Code: ${selectedProduct.id})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-heading font-bold flex items-center gap-1 transition-colors cursor-pointer shrink-0"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
