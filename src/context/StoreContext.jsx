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

  // Dedicated UPI & Direct Checkout Modal state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutInitialMode, setCheckoutInitialMode] = useState('UPI');

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

  const clearCart = () => {
    setCartItems([]);
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

  const openCheckout = (mode = 'UPI') => {
    setCheckoutInitialMode(mode);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const closeCheckout = () => {
    setIsCheckoutOpen(false);
  };

  // Zero-fee WhatsApp Checkout order generator
  const proceedToWhatsAppOrder = (paymentMode = 'UPI') => {
    openCheckout(paymentMode);
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
    isCheckoutOpen,
    setIsCheckoutOpen,
    checkoutInitialMode,
    openCheckout,
    closeCheckout,
    clearCart,
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
