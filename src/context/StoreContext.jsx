import React, { createContext, useContext, useState, useMemo } from 'react';
import { BRAND, PRODUCTS } from '../data/mockData';

const StoreContext = createContext();

export function StoreProvider({ children }) {
  // Cart state
  const [cartItems, setCartItems] = useState([
    // Sample pre-added item for instant visual demonstration
    {
      product: PRODUCTS[0],
      size: 'M',
      quantity: 1,
    }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Quick Add Modal state
  const [quickAddProduct, setQuickAddProduct] = useState(null);

  // Story Viewer state
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  // Mega Menu & Search state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Cart operations
  const addToCart = (product, size, quantity = 1) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        item => item.product.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].quantity += quantity;
        return next;
      }
      return [...prev, { product, size, quantity }];
    });
    setQuickAddProduct(null);
    setIsCartOpen(true);
  };

  const removeFromCart = (productId, size) => {
    setCartItems(prev => prev.filter(item => !(item.product.id === productId && item.size === size)));
  };

  const updateQuantity = (productId, size, delta) => {
    setCartItems(prev => {
      return prev.map(item => {
        if (item.product.id === productId && item.size === size) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const cartCount = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  const cartSubtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
  }, [cartItems]);

  // Zero-fee WhatsApp Checkout order generator
  const proceedToWhatsAppOrder = (paymentMode = 'UPI') => {
    if (cartItems.length === 0) return;
    
    let message = `🛍️ *NEW ORDER - COTNERA*\n`;
    message += `─────────────────────────\n`;
    cartItems.forEach((item, idx) => {
      message += `${idx + 1}. *${item.product.name}*\n   • Size: ${item.size}\n   • Qty: ${item.quantity}\n   • Price: ₹${item.product.price * item.quantity}\n\n`;
    });
    message += `─────────────────────────\n`;
    message += `*Total Amount:* ₹${cartSubtotal} (All Taxes Included)\n\n`;
    message += `*Customer Delivery Details:*\n`;
    message += `• Name: \n`;
    message += `• Delivery Address: \n`;
    message += `• Pincode: \n`;
    if (paymentMode === 'COD') {
      message += `• Payment Mode: Cash on Delivery (COD)\n\n`;
      message += `Please confirm my order and share delivery details!`;
    } else {
      message += `• Payment Mode: Direct UPI (GPay / PhonePe / Paytm)\n\n`;
      message += `Please confirm my order and share UPI details for payment!`;
    }

    const encodedMessage = encodeURIComponent(message);
    const cleanPhone = BRAND.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${encodedMessage}`, '_blank');
  };

  // Story controls
  const openStory = (index = 0) => {
    setActiveStoryIndex(index);
    setIsStoryOpen(true);
  };

  const closeStory = () => {
    setIsStoryOpen(false);
  };

  const value = {
    cartItems,
    cartCount,
    cartSubtotal,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    proceedToWhatsAppOrder,
    quickAddProduct,
    setQuickAddProduct,
    isStoryOpen,
    activeStoryIndex,
    openStory,
    closeStory,
    isMenuOpen,
    setIsMenuOpen,
    isSearchOpen,
    setIsSearchOpen,
  };

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
}
