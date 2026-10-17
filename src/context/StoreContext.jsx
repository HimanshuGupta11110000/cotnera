import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { BRAND, PRODUCTS } from '../data/mockData';

const StoreContext = createContext();

export function StoreProvider({ children }) {
  // Cart state
  const [cartItems, setCartItems] = useState([
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

  // Multi-Page Routing state: { type: 'home' } | { type: 'collection', category: 'kurtis' }
  const getInitialRoute = () => {
    if (typeof window === 'undefined') return { type: 'home' };
    const path = window.location.pathname;
    const hash = window.location.hash;

    if (path.startsWith('/collections/')) {
      const cat = path.replace('/collections/', '').replace(/\/$/, '');
      if (cat) return { type: 'collection', category: cat };
    }
    if (hash.startsWith('#collections/')) {
      const cat = hash.replace('#collections/', '');
      if (cat) return { type: 'collection', category: cat };
    }
    return { type: 'home' };
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  // Full Nishorama-Style Product Detail Modal (PDP) state
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    if (product && window.history.pushState) {
      window.history.pushState({ productId: product.id }, '', `/products/${product.id}`);
    }
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
    if (window.history.pushState) {
      if (currentRoute.type === 'collection') {
        window.history.pushState({}, '', `/collections/${currentRoute.category}`);
      } else {
        window.history.pushState({}, '', '/');
      }
    }
  };

  // Dedicated Navigation Controls
  const navigateToHome = () => {
    setCurrentRoute({ type: 'home' });
    setSelectedProduct(null);
    if (window.history.pushState) {
      window.history.pushState({}, '', '/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCollection = (category) => {
    setCurrentRoute({ type: 'collection', category });
    setActiveCategory(category);
    setSelectedProduct(null);
    if (window.history.pushState) {
      window.history.pushState({}, '', `/collections/${category}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Browser PopState (Back / Forward button handling)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path.startsWith('/products/')) {
        const prodId = path.replace('/products/', '').replace(/\/$/, '');
        const prod = PRODUCTS.find(p => p.id === prodId);
        if (prod) setSelectedProduct(prod);
      } else {
        setSelectedProduct(null);
        setCurrentRoute(getInitialRoute());
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Check initial URL for direct /products/:id link
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/products/')) {
        const prodId = path.replace('/products/', '').replace(/\/$/, '');
        const prod = PRODUCTS.find(p => p.id === prodId);
        if (prod) setSelectedProduct(prod);
      }
    }
  }, []);

  // Story Viewer state
  const [isStoryOpen, setIsStoryOpen] = useState(false);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  // Mega Menu & Search state
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Size Chart Modal state
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);

  // Active Category Filter for Products
  const [activeCategory, setActiveCategory] = useState('all');

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

  const proceedToWhatsAppOrder = (paymentMode = 'UPI') => {
    openCheckout(paymentMode);
  };

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
    selectedProduct,
    setSelectedProduct,
    openProductDetail,
    closeProductDetail,
    currentRoute,
    setCurrentRoute,
    navigateToHome,
    navigateToCollection,
    isStoryOpen,
    activeStoryIndex,
    openStory,
    closeStory,
    isMenuOpen,
    setIsMenuOpen,
    isSearchOpen,
    setIsSearchOpen,
    isSizeChartOpen,
    setIsSizeChartOpen,
    activeCategory,
    setActiveCategory,
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
