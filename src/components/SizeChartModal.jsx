import React, { useState } from 'react';
import { X, Ruler, Sparkles, MessageCircle } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { BRAND } from '../data/mockData';

const SIZE_CHART_INCHES = [
  { size: 'XXS', bust: '32', waist: '26-28', hip: '34-36', length: '41' },
  { size: 'XS',  bust: '34', waist: '28-30', hip: '36-38', length: '41' },
  { size: 'S',   bust: '36', waist: '30-32', hip: '38-40', length: '41' },
  { size: 'M',   bust: '38', waist: '32-34', hip: '40-42', length: '41' },
  { size: 'L',   bust: '40', waist: '34-36', hip: '42-44', length: '41' },
  { size: 'XL',  bust: '42', waist: '36-38', hip: '44-46', length: '41' },
  { size: 'XXL', bust: '44', waist: '38-40', hip: '46-48', length: '41' },
];

const SIZE_CHART_CM = [
  { size: 'XXS', bust: '81',  waist: '66-71', hip: '86-91',   length: '104' },
  { size: 'XS',  bust: '86',  waist: '71-76', hip: '91-97',   length: '104' },
  { size: 'S',   bust: '91',  waist: '76-81', hip: '97-102',  length: '104' },
  { size: 'M',   bust: '97',  waist: '81-86', hip: '102-107', length: '104' },
  { size: 'L',   bust: '102', waist: '86-91', hip: '107-112', length: '104' },
  { size: 'XL',  bust: '107', waist: '91-97', hip: '112-117', length: '104' },
  { size: 'XXL', bust: '112', waist: '97-102',hip: '117-122', length: '104' },
];

export default function SizeChartModal() {
  const { isSizeChartOpen, setIsSizeChartOpen } = useStore();
  const [unit, setUnit] = useState('inches'); // 'inches' | 'cm'

  if (!isSizeChartOpen) return null;

  const rows = unit === 'inches' ? SIZE_CHART_INCHES : SIZE_CHART_CM;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4">
      {/* Dark backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsSizeChartOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl z-10 border border-[#482922]/20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#482922] text-white p-5 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Ruler className="w-4 h-4 text-[#F6C582]" />
              <span className="font-heading font-black text-xs uppercase tracking-widest text-[#F6C582]">
                Body Measurements
              </span>
            </div>
            <h3 className="font-heading font-black text-lg md:text-xl uppercase tracking-tight mt-1 text-white">
              Cotnera Size Guide
            </h3>
            <p className="text-xs text-white/70 font-mono mt-0.5">
              Handcrafted in Pure Breathable Indian Cotton
            </p>
          </div>

          <button
            onClick={() => setIsSizeChartOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Size Chart"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Units Switcher Bar */}
        <div className="px-5 py-3 bg-[#FAF8F5] border-b border-[#E9E4DC] flex items-center justify-between">
          <span className="text-xs font-heading font-bold text-[#482922] uppercase tracking-wider">
            Measurement Unit
          </span>
          <div className="inline-flex rounded-full bg-white border border-[#D5D5D5] p-0.5 shadow-xs">
            <button
              onClick={() => setUnit('inches')}
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                unit === 'inches'
                  ? 'bg-[#482922] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              Inches
            </button>
            <button
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all ${
                unit === 'cm'
                  ? 'bg-[#482922] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-black'
              }`}
            >
              CM
            </button>
          </div>
        </div>

        {/* Measurement Table */}
        <div className="p-5 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b-2 border-[#482922] text-[#482922] font-heading uppercase tracking-wider">
                <th className="py-2.5 px-3 font-black">Size</th>
                <th className="py-2.5 px-3 font-bold">Bust</th>
                <th className="py-2.5 px-3 font-bold">Waist</th>
                <th className="py-2.5 px-3 font-bold">Hip</th>
                <th className="py-2.5 px-3 font-bold">Length</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 font-mono">
              {rows.map((row, idx) => (
                <tr 
                  key={row.size}
                  className={`hover:bg-[#FAF8F5] transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]/50'
                  }`}
                >
                  <td className="py-2 px-3 font-heading font-black text-[#482922] bg-[#FAF8F5]/80">
                    {row.size}
                  </td>
                  <td className="py-2 px-3 text-neutral-700">{row.bust}</td>
                  <td className="py-2 px-3 text-neutral-700">{row.waist}</td>
                  <td className="py-2 px-3 text-neutral-700">{row.hip}</td>
                  <td className="py-2 px-3 text-neutral-700">{row.length}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Fit Guide Tags */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            <span className="px-2.5 py-1 bg-[#482922] text-[#F6C582] text-[10px] font-heading font-bold uppercase rounded-md">
              Tailored Fit
            </span>
            <span className="px-2.5 py-1 bg-[#482922] text-[#F6C582] text-[10px] font-heading font-bold uppercase rounded-md">
              Structured
            </span>
            <span className="px-2.5 py-1 bg-[#482922] text-[#F6C582] text-[10px] font-heading font-bold uppercase rounded-md">
              100% Pure Cotton
            </span>
          </div>

          {/* Fitting Notes from Nishorama Screenshot */}
          <div className="mt-3 p-3 bg-[#FAF8F5] border border-[#E9E4DC] rounded-xl text-[11px] text-[#482922]/80 leading-relaxed">
            <p className="font-semibold text-[#482922]">Fitting Recommendation:</p>
            <p className="mt-0.5">
              • Fits true to size according to body measurements. If you prefer a relaxed or loose silhouette, size up.
            </p>
            <p className="mt-0.5">
              • Natural variations of up to 0.5–1 inch may occur as each garment is individually cut and hand-tailored.
            </p>
          </div>

          {/* Bespoke Tailoring CTA */}
          <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-[11px] text-neutral-600 text-center sm:text-left">
              <span className="font-bold text-[#482922] flex items-center justify-center sm:justify-start gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" /> Need custom size or height adjustments?
              </span>
              <span>We offer free bespoke alterations on WhatsApp before dispatch.</span>
            </div>
            <a
              href={`https://wa.me/916397943289?text=${encodeURIComponent('Hi Cotnera! I need custom sizing help for an order.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-3.5 py-1.5 rounded-full text-xs font-heading font-bold transition-transform hover:scale-105 shrink-0 shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}
