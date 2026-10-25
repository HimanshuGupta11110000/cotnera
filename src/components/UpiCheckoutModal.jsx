import React, { useState, useEffect } from 'react';
import { 
  X, 
  Check, 
  Copy, 
  ArrowRight, 
  ShieldCheck, 
  Smartphone, 
  QrCode, 
  Truck, 
  MessageCircle, 
  CheckCircle2, 
  ChevronLeft,
  CreditCard,
  Lock
} from 'lucide-react';
import { BRAND } from '../data/mockData';
import { useStore } from '../context/StoreContext';

export default function UpiCheckoutModal() {
  const { 
    isCheckoutOpen, 
    closeCheckout, 
    checkoutInitialMode, 
    cartItems, 
    cartSubtotal, 
    clearCart 
  } = useStore();

  const [step, setStep] = useState(1); // 1: Address, 2: Payment, 3: Success
  const [paymentMode, setPaymentMode] = useState(checkoutInitialMode || 'UPI');
  
  // Shipping form state
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    notes: '',
  });

  const [utrNumber, setUtrNumber] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [formErrors, setFormErrors] = useState({});

  // Generate a realistic order ID on open
  useEffect(() => {
    if (isCheckoutOpen) {
      document.body.style.overflow = 'hidden';
      const randomId = Math.floor(1000 + Math.random() * 9000);
      setOrderId(`#COT-${randomId}`);
      setStep(1);
      setPaymentMode(checkoutInitialMode || 'UPI');
    } else {
      document.body.style.overflow = '';
    }
  }, [isCheckoutOpen, checkoutInitialMode]);

  if (!isCheckoutOpen) return null;

  // Dynamic UPI URI prefilling beneficiary and total amount
  const upiUri = `upi://pay?pa=${BRAND.upiId}&pn=${encodeURIComponent(BRAND.upiName)}&am=${cartSubtotal}&cu=INR&tn=${encodeURIComponent(`Order-${orderId}`)}`;
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiUri)}`;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText(BRAND.upiId);
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2500);
  };

  const validateAddress = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Please enter your full name';
    if (!formData.phone.trim() || formData.phone.replace(/[^0-9]/g, '').length < 10) {
      errors.phone = 'Please enter a valid 10-digit WhatsApp number';
    }
    if (!formData.address.trim()) errors.address = 'Please enter your street address / flat no';
    if (!formData.city.trim()) errors.city = 'Please enter your city';
    if (!formData.pincode.trim() || formData.pincode.replace(/[^0-9]/g, '').length !== 6) {
      errors.pincode = 'Please enter a valid 6-digit pincode';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault();
    if (validateAddress()) {
      setStep(2);
    }
  };

  const handleLaunchUpi = (appScheme) => {
    let deepLink = upiUri;
    if (appScheme === 'phonepe') {
      deepLink = `phonepe://pay?pa=${BRAND.upiId}&pn=${encodeURIComponent(BRAND.upiName)}&am=${cartSubtotal}&cu=INR&tn=${encodeURIComponent(`Order-${orderId}`)}`;
    } else if (appScheme === 'paytm') {
      deepLink = `paytmmp://pay?pa=${BRAND.upiId}&pn=${encodeURIComponent(BRAND.upiName)}&am=${cartSubtotal}&cu=INR&tn=${encodeURIComponent(`Order-${orderId}`)}`;
    }
    window.location.href = deepLink;
  };

  const generateWhatsAppMessage = () => {
    let message = `✨ *NEW ORDER — COTNERA* ✨\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `📦 *Order ID:* ${orderId}\n`;
    message += `📅 *Date:* ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}\n\n`;
    
    message += `👗 *ITEMS ORDERED:*\n`;
    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. *${item.product.name}*\n`;
      message += `   • Size: ${item.size} | Qty: ${item.quantity}\n`;
      message += `   • Color: ${item.product.color}\n`;
      message += `   • Subtotal: ₹${item.product.price * item.quantity}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `💰 *Total Amount:* ₹${cartSubtotal} (All Taxes & Shipping Included)\n`;
    if (paymentMode === 'UPI') {
      message += `💳 *Payment Method:* Direct UPI (Google Pay / PhonePe / Paytm)\n`;
      if (utrNumber.trim()) {
        message += `📝 *UPI UTR / Ref No:* ${utrNumber.trim()}\n`;
      } else {
        message += `📝 *Payment Status:* Paid via UPI App / Verified\n`;
      }
    } else {
      message += `💬 *Payment Method:* Direct WhatsApp Order\n`;
      message += `📝 *Payment Status:* Order placed with Cotnera WhatsApp Concierge\n`;
    }

    message += `\n📍 *DELIVERY ADDRESS:*\n`;
    message += `• *Name:* ${formData.fullName}\n`;
    message += `• *WhatsApp / Phone:* +91 ${formData.phone}\n`;
    message += `• *Address:* ${formData.address}\n`;
    message += `• *City & State:* ${formData.city}${formData.state ? ', ' + formData.state : ''}\n`;
    message += `• *Pincode:* ${formData.pincode}\n`;
    if (formData.notes.trim()) {
      message += `• *Special Notes / Sizing:* ${formData.notes.trim()}\n`;
    }

    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `✨ *"Wear It. Style It. Rewear It."*\n`;
    message += `Please confirm my order dispatch! 🙏`;

    return message;
  };

  const handleCompleteOrder = () => {
    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const cleanPhone = BRAND.whatsapp.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${cleanPhone}?text=${encoded}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');

    // Move to in-app success step and clear cart
    setStep(3);
    clearCart();
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={() => {
          if (step === 3) closeCheckout();
          else if (window.confirm("Are you sure you want to cancel this checkout?")) closeCheckout();
        }}
      />

      {/* Main Checkout Container */}
      <div className="relative w-full max-w-xl bg-white border border-[#482922] shadow-2xl z-10 my-auto rounded-[1.2rem] md:rounded-[1.8rem] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Navigation Header */}
        <div className="bg-[#482922] text-white px-5 py-3.5 flex items-center justify-between border-b border-[#F6C582]/20">
          <div className="flex items-center gap-2.5">
            {step === 2 && (
              <button 
                onClick={() => setStep(1)}
                className="p-1 hover:bg-white/10 rounded-full transition-colors text-white"
                aria-label="Back"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <span className="font-heading font-black text-sm tracking-widest uppercase">
                COTNERA CHECKOUT
              </span>
              <div className="flex items-center gap-1.5 text-[10px] text-[#F6C582] font-mono">
                <span>{orderId}</span>
                <span>•</span>
                <span>Total: ₹{cartSubtotal}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => closeCheckout()}
            className="p-1.5 hover:bg-white/10 rounded-full transition-colors text-white/80 hover:text-white"
            aria-label="Close"
          >
            <X className="w-5 h-5 stroke-[2]" />
          </button>
        </div>

        {/* Step Indicator Bar */}
        <div className="grid grid-cols-3 text-center text-[10px] sm:text-xs font-heading font-bold border-b border-neutral-200 bg-neutral-50 py-2 px-4">
          <div className={`flex items-center justify-center gap-1.5 ${step >= 1 ? 'text-[#482922]' : 'text-neutral-400'}`}>
            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${step >= 1 ? 'bg-[#482922] text-white' : 'bg-neutral-300'}`}>1</span>
            <span>Delivery</span>
          </div>
          <div className={`flex items-center justify-center gap-1.5 ${step >= 2 ? 'text-[#482922]' : 'text-neutral-400'}`}>
            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${step >= 2 ? 'bg-[#482922] text-white' : 'bg-neutral-300'}`}>2</span>
            <span>UPI / Payment</span>
          </div>
          <div className={`flex items-center justify-center gap-1.5 ${step === 3 ? 'text-emerald-700 font-extrabold' : 'text-neutral-400'}`}>
            <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] ${step === 3 ? 'bg-emerald-600 text-white' : 'bg-neutral-300'}`}>3</span>
            <span>Confirmed</span>
          </div>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="p-5 md:p-6 overflow-y-auto flex-1 space-y-5">
          
          {/* ================= STEP 1: DELIVERY ADDRESS ================= */}
          {step === 1 && (
            <form onSubmit={handleProceedToPayment} className="space-y-4">
              
              {/* Order Items Summary Card */}
              <div className="bg-[#FAF8F5] border border-[#E9E4DC] p-3 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {cartItems.slice(0, 3).map((item, idx) => (
                      <img 
                        key={idx} 
                        src={item.product.images[0]} 
                        alt={item.product.name} 
                        className="w-10 h-12 object-contain rounded-md border-2 border-white shadow-xs bg-[#EAE8E4]"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xs uppercase text-[#482922]">
                      {cartItems.length} {cartItems.length === 1 ? 'Piece' : 'Pieces'} in Your Bag
                    </p>
                    <p className="text-[11px] text-neutral-500">Free domestic shipping applied</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-heading font-black text-sm text-[#482922]">₹{cartSubtotal}</p>
                  <p className="text-[9px] font-mono text-emerald-700 font-bold">ALL TAXES INCL.</p>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#482922] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full px-3.5 py-2.5 text-xs bg-neutral-50 border rounded-lg focus:outline-none focus:bg-white transition-colors ${
                      formErrors.fullName ? 'border-red-500' : 'border-neutral-300 focus:border-[#482922]'
                    }`}
                  />
                  {formErrors.fullName && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#482922] mb-1">
                    WhatsApp Phone Number (For Dispatch Tracking) *
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-xs font-mono font-bold bg-neutral-200 border border-r-0 border-neutral-300 rounded-l-lg text-neutral-700">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') })}
                      placeholder="9876543210"
                      className={`w-full px-3.5 py-2.5 text-xs bg-neutral-50 border rounded-r-lg focus:outline-none focus:bg-white font-mono transition-colors ${
                        formErrors.phone ? 'border-red-500' : 'border-neutral-300 focus:border-[#482922]'
                      }`}
                    />
                  </div>
                  {formErrors.phone && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.phone}</p>}
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#482922] mb-1">
                    Delivery Address (House/Flat No, Street, Landmark) *
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Flat 402, Lotus Residency, Near City Centre..."
                    className={`w-full px-3.5 py-2 text-xs bg-neutral-50 border rounded-lg focus:outline-none focus:bg-white transition-colors ${
                      formErrors.address ? 'border-red-500' : 'border-neutral-300 focus:border-[#482922]'
                    }`}
                  />
                  {formErrors.address && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.address}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#482922] mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Mumbai"
                      className={`w-full px-3.5 py-2 text-xs bg-neutral-50 border rounded-lg focus:outline-none focus:bg-white transition-colors ${
                        formErrors.city ? 'border-red-500' : 'border-neutral-300 focus:border-[#482922]'
                      }`}
                    />
                    {formErrors.city && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.city}</p>}
                  </div>

                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#482922] mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={formData.pincode}
                      onChange={(e) => setFormData({ ...formData, pincode: e.target.value.replace(/[^0-9]/g, '') })}
                      placeholder="e.g. 400001"
                      className={`w-full px-3.5 py-2 text-xs bg-neutral-50 border rounded-lg focus:outline-none focus:bg-white font-mono transition-colors ${
                        formErrors.pincode ? 'border-red-500' : 'border-neutral-300 focus:border-[#482922]'
                      }`}
                    />
                    {formErrors.pincode && <p className="text-[10px] text-red-500 mt-0.5">{formErrors.pincode}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#482922] mb-1">
                    Special Sizing or Delivery Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Need extra 1 inch sleeve length, or leave with security"
                    className="w-full px-3.5 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#482922] focus:bg-white"
                  />
                </div>
              </div>

              {/* Continue CTA */}
              <button
                type="submit"
                className="w-full mt-4 bg-[#482922] hover:bg-black text-white py-3.5 px-4 font-heading text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-xl shadow-md cursor-pointer"
              >
                <span>Continue to Payment Method</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 pt-2 text-[10px] text-neutral-500">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>Your contact info is strictly confidential and used only for delivery updates.</span>
              </div>
            </form>
          )}

          {/* ================= STEP 2: PAYMENT METHOD & DIRECT UPI ================= */}
          {step === 2 && (
            <div className="space-y-5">
              
              {/* Payment Mode Selector Tabs */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMode('UPI')}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    paymentMode === 'UPI'
                      ? 'border-[#482922] bg-[#FAF8F5] ring-2 ring-[#482922]/20'
                      : 'border-neutral-200 hover:border-neutral-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-black text-xs uppercase text-[#482922]">
                      Direct UPI
                    </span>
                    <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                      0% Fees
                    </span>
                  </div>
                  <p className="text-[10px] text-neutral-500 mt-1">Google Pay, PhonePe, Paytm, BHIM</p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMode('WHATSAPP')}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    paymentMode === 'WHATSAPP'
                      ? 'border-[#482922] bg-[#FAF8F5] ring-2 ring-[#482922]/20'
                      : 'border-neutral-200 hover:border-neutral-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-black text-xs uppercase text-[#482922]">
                      WhatsApp Order
                    </span>
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <p className="text-[10px] text-neutral-500 mt-1">Direct concierge assistance & ordering</p>
                </button>
              </div>

              {/* PAYMENT OPTION A: DIRECT UPI */}
              {paymentMode === 'UPI' && (
                <div className="space-y-4">
                  
                  {/* Amount to Pay Banner */}
                  <div className="bg-[#482922] text-white p-4 rounded-xl flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-wider text-[#F6C582] font-heading font-semibold">
                        Payable Amount (Zero Gateway Fee)
                      </p>
                      <p className="font-heading font-black text-2xl tracking-tight text-white mt-0.5">
                        ₹{cartSubtotal}
                      </p>
                    </div>
                    <div className="text-right text-[11px] text-white/80">
                      <p className="font-bold">Payee: {BRAND.upiName}</p>
                      <p className="font-mono text-[10px] text-[#F6C582]">{BRAND.upiId}</p>
                    </div>
                  </div>

                  {/* 1. Mobile Direct One-Click Launchers (GPay, PhonePe, Paytm, Any UPI) */}
                  <div className="space-y-2">
                    <p className="text-[11px] font-heading font-bold uppercase tracking-wider text-[#482922] flex items-center gap-1.5">
                      <Smartphone className="w-3.5 h-3.5 text-[#482922]" />
                      <span>Instant 1-Click Pay on Mobile (Opens Installed App):</span>
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      <button
                        type="button"
                        onClick={() => handleLaunchUpi('gpay')}
                        className="py-2.5 px-3 border border-neutral-300 bg-white hover:border-[#482922] hover:bg-neutral-50 rounded-lg flex flex-col items-center justify-center gap-1 transition-all shadow-xs cursor-pointer active:scale-95"
                      >
                        <span className="font-heading font-bold text-xs text-[#1a73e8]">GPay</span>
                        <span className="text-[8px] text-neutral-500 uppercase font-mono">Google Pay</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleLaunchUpi('phonepe')}
                        className="py-2.5 px-3 border border-neutral-300 bg-white hover:border-[#482922] hover:bg-neutral-50 rounded-lg flex flex-col items-center justify-center gap-1 transition-all shadow-xs cursor-pointer active:scale-95"
                      >
                        <span className="font-heading font-bold text-xs text-[#5f259f]">PhonePe</span>
                        <span className="text-[8px] text-neutral-500 uppercase font-mono">Instant Pay</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleLaunchUpi('paytm')}
                        className="py-2.5 px-3 border border-neutral-300 bg-white hover:border-[#482922] hover:bg-neutral-50 rounded-lg flex flex-col items-center justify-center gap-1 transition-all shadow-xs cursor-pointer active:scale-95"
                      >
                        <span className="font-heading font-bold text-xs text-[#00b9f5]">Paytm</span>
                        <span className="text-[8px] text-neutral-500 uppercase font-mono">UPI Transfer</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleLaunchUpi('generic')}
                        className="py-2.5 px-3 border border-neutral-300 bg-white hover:border-[#482922] hover:bg-neutral-50 rounded-lg flex flex-col items-center justify-center gap-1 transition-all shadow-xs cursor-pointer active:scale-95"
                      >
                        <span className="font-heading font-bold text-xs text-emerald-700">Any UPI</span>
                        <span className="text-[8px] text-neutral-500 uppercase font-mono">BHIM / CRED</span>
                      </button>
                    </div>
                  </div>

                  {/* 2. Desktop Dynamic QR Code & Copy UPI ID */}
                  <div className="bg-[#FAF8F5] border border-[#E9E4DC] p-4 rounded-xl flex flex-col sm:flex-row items-center gap-4">
                    <div className="bg-white p-2 border border-neutral-200 rounded-lg shadow-xs flex-shrink-0">
                      <img 
                        src={qrCodeUrl} 
                        alt="Cotnera UPI QR Code" 
                        className="w-28 h-28 object-contain"
                      />
                    </div>

                    <div className="space-y-2 text-center sm:text-left flex-1">
                      <div>
                        <div className="flex items-center justify-center sm:justify-start gap-1 text-[11px] font-heading font-bold uppercase text-[#482922]">
                          <QrCode className="w-3.5 h-3.5" />
                          <span>Scan QR Code to Pay</span>
                        </div>
                        <p className="text-[10px] text-neutral-500 mt-0.5">
                          Open any UPI App on your phone and scan the code to pay ₹{cartSubtotal} directly.
                        </p>
                      </div>

                      {/* Copyable UPI ID Box */}
                      <div className="flex items-center gap-2 bg-white border border-neutral-300 px-3 py-1.5 rounded-lg justify-between">
                        <span className="font-mono text-xs font-bold text-[#482922]">
                          {BRAND.upiId}
                        </span>
                        <button
                          type="button"
                          onClick={handleCopyUpi}
                          className="flex items-center gap-1 text-[10px] font-heading font-bold text-[#482922] hover:text-black uppercase cursor-pointer"
                        >
                          {copiedUpi ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-600" />
                              <span className="text-emerald-700 font-bold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 3. Optional UTR / Reference ID for immediate reconciliation */}
                  <div>
                    <label className="block text-[11px] font-heading font-bold uppercase tracking-wider text-[#482922] mb-1">
                      UPI Reference / UTR Number (Optional, for instant verification)
                    </label>
                    <input
                      type="text"
                      value={utrNumber}
                      onChange={(e) => setUtrNumber(e.target.value)}
                      placeholder="e.g. 429810238491 (found in your UPI app transaction history)"
                      className="w-full px-3.5 py-2 text-xs bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:border-[#482922] focus:bg-white font-mono"
                    />
                  </div>

                  {/* Confirmation CTA */}
                  <button
                    type="button"
                    onClick={handleCompleteOrder}
                    className="w-full bg-[#1e7e34] hover:bg-[#155724] text-white py-3.5 px-4 font-heading text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-xl shadow-md cursor-pointer active:scale-[0.99]"
                  >
                    <MessageCircle className="w-4 h-4 fill-white/20" />
                    <span>I Have Completed Payment — Confirm on WhatsApp</span>
                  </button>

                </div>
              )}

              {/* PAYMENT OPTION B: WHATSAPP DIRECT ORDER */}
              {paymentMode === 'WHATSAPP' && (
                <div className="space-y-4">
                  <div className="bg-[#FAF8F5] border border-[#E9E4DC] p-5 rounded-xl space-y-3">
                    <div className="flex items-center gap-2 text-emerald-800 font-heading font-bold text-xs uppercase">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      <span>Direct WhatsApp Order Concierge</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      Place your order for ₹{cartSubtotal} directly with Cotnera on WhatsApp. We will assist you with sizing, custom tailoring requests, and order confirmation.
                    </p>
                    <div className="border-t border-neutral-200 pt-3 text-[11px] text-neutral-500 space-y-1">
                      <p>• 24x7 Direct Support on Call & WhatsApp.</p>
                      <p>• Fast order routing with instant personal confirmation.</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCompleteOrder}
                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-3.5 px-4 font-heading text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all rounded-xl shadow-md cursor-pointer active:scale-[0.99]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Order to WhatsApp Concierge</span>
                  </button>
                </div>
              )}

              {/* Bottom Trust Badges */}
              <div className="border-t border-neutral-200 pt-3 flex items-center justify-between text-[10px] text-neutral-500 font-heading">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  100% Secure Payment
                </span>
                <span>Direct Studio Support</span>
                <span>Handcrafted in India</span>
              </div>

            </div>
          )}

          {/* ================= STEP 3: ORDER SUCCESS ================= */}
          {step === 3 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8 stroke-[2]" />
              </div>

              <div>
                <h3 className="font-heading font-black text-xl uppercase tracking-tight text-[#482922]">
                  Order Placed Successfully!
                </h3>
                <p className="font-mono text-sm font-bold text-emerald-700 mt-1">
                  Order ID: {orderId}
                </p>
                <p className="text-xs text-neutral-600 max-w-sm mx-auto mt-2 leading-relaxed">
                  Thank you for supporting handcrafted Indian craft! We have routed your order receipt directly to Cotnera on WhatsApp for confirmation and tracking.
                </p>
              </div>

              {/* Order Breakdown Box */}
              <div className="bg-[#FAF8F5] border border-[#E9E4DC] p-4 rounded-xl text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between font-bold text-[#482922]">
                  <span>Total Amount:</span>
                  <span>₹{cartSubtotal}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Payment Mode:</span>
                  <span>{paymentMode === 'UPI' ? 'Direct UPI' : 'WhatsApp Direct Order'}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Shipping To:</span>
                  <span className="truncate max-w-[180px]">{formData.fullName}, {formData.city}</span>
                </div>
              </div>

              {/* Manual WhatsApp Button in case popup blocked */}
              <div className="pt-2 space-y-2">
                <a
                  href={`https://wa.me/${BRAND.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(generateWhatsAppMessage())}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full max-w-sm mx-auto bg-[#1e7e34] hover:bg-[#155724] text-white py-3 px-4 rounded-xl font-heading text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white/20" />
                  <span>Open WhatsApp Order Chat</span>
                </a>

                <button
                  type="button"
                  onClick={() => closeCheckout()}
                  className="block w-full max-w-sm mx-auto text-xs font-heading font-semibold text-[#482922] hover:underline pt-2 cursor-pointer"
                >
                  Continue Browsing The Debut Drop
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
}
