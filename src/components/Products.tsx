/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, useEffect } from 'react';
import { 
  Search, SlidersHorizontal, Plus, Minus, Trash2, X, 
  ShoppingBag, Check, Droplets, Sun, Maximize2, ShoppingCart, Info
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Plant, CartItem } from '../types';
import { PLANTS } from '../data';

interface ProductsProps {
  cart: CartItem[];
  onAddToCart: (plant: Plant) => void;
  onUpdateCartQty: (plantId: string, delta: number) => void;
  onRemoveFromCart: (plantId: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  selectedPlantId: string | null;
  setSelectedPlantId: (plantId: string | null) => void;
}

export default function Products({
  cart,
  onAddToCart,
  onUpdateCartQty,
  onRemoveFromCart,
  isCartOpen,
  setIsCartOpen,
  selectedPlantId,
  setSelectedPlantId
}: ProductsProps) {
  // Filters & Sorting state
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Detail Modal target
  const activeModalPlant = useMemo(() => {
    if (!selectedPlantId) return null;
    return PLANTS.find(p => p.id === selectedPlantId) || null;
  }, [selectedPlantId]);

  // Categories definition
  const categories = [
    { id: 'all', label: 'All Plants' },
    { id: 'easy-care', label: 'Easy Care' },
    { id: 'air-purifying', label: 'Air Purifying' },
    { id: 'low-light', label: 'Low Light' },
    { id: 'pet-friendly', label: 'Pet Friendly' },
    { id: 'rare', label: 'Collector Rare' }
  ];

  // Filter and sort items
  const filteredPlants = useMemo(() => {
    let result = [...PLANTS];

    // 1. Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.scientificName.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    // 2. Category
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }

    // 3. Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'difficulty-asc') {
      const diffOrder = { 'Easy': 1, 'Medium': 2, 'Expert': 3 };
      result.sort((a, b) => diffOrder[a.difficulty] - diffOrder[b.difficulty]);
    } else if (sortBy === 'featured') {
      result.sort((a, b) => (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0));
    }

    return result;
  }, [searchQuery, activeCategory, sortBy]);

  // Calculate cart subtotal & quantity
  const cartSubtotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.plant.price * item.quantity, 0);
  }, [cart]);

  // Handlers
  const handleCheckout = () => {
    setCheckoutSuccess(true);
  };

  const handleCloseCheckoutSuccess = () => {
    setCheckoutSuccess(false);
    setIsCartOpen(false);
    // Remove all items in cart
    cart.forEach(item => onRemoveFromCart(item.plant.id));
  };

  return (
    <div id="greenden-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Search & Filters Controls bar */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md shadow-slate-100/50 mb-10 space-y-6">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-stretch">
          
          {/* Search box */}
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search plants, scientific names..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 text-slate-850 placeholder-slate-400 pl-12 pr-4 py-3.5 rounded-full border border-slate-200 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-sm font-sans"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sorter Dropdown */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <SlidersHorizontal className="w-4 h-4 text-slate-500 shrink-0" />
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap">Sort By</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full md:w-56 bg-slate-50 text-slate-700 text-sm py-3 px-4 rounded-full border border-slate-200 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-sans"
            >
              <option value="featured">Featured Favorites</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="difficulty-asc">Difficulty: Easy to Expert</option>
            </select>
          </div>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/15' 
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-600 font-semibold'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* No Results Fallback */}
      {filteredPlants.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto shadow-sm">
          <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-6">
            <Search className="w-8 h-8" />
          </div>
          <h3 className="font-display text-xl font-extrabold text-slate-900 mb-2">No Plants Found</h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 font-sans">
            We couldn't find any green matches for "{searchQuery}". Try modifying your keywords or clear the category filters.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('all');
            }}
            className="inline-flex bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-6 py-3 rounded-full shadow-md shadow-emerald-100 transition-all cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        /* Plant Products Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredPlants.map((plant) => {
            const isItemInCart = cart.some(item => item.plant.id === plant.id);
            return (
              <motion.div
                key={plant.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-emerald-100 hover:translate-y-[-2px] transition-all duration-300 flex flex-col text-left group relative animate-fade-in"
              >
                {/* Thumbnail Frame */}
                <div className="relative aspect-4/3 bg-slate-100 overflow-hidden flex items-center justify-center">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category overlay tags */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                    {plant.isPopular && (
                      <span className="bg-emerald-600 text-white text-[9px] font-black px-2 py-0.5 rounded-lg uppercase tracking-wider shadow-sm">
                        Popular
                      </span>
                    )}
                    <span className="bg-white/95 text-slate-700 text-[9px] font-bold px-2 py-0.5 rounded-lg uppercase tracking-wider shadow-xs border border-slate-150">
                      {plant.difficulty}
                    </span>
                  </div>
                  
                  {/* Floating price indicator */}
                  <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-slate-900 font-sans font-bold text-xs px-2.5 py-1 rounded-xl shadow-md border border-slate-100">
                    ${plant.price}.00
                  </span>

                  {/* Detail overlay hover trigger button */}
                  <button
                    onClick={() => setSelectedPlantId(plant.id)}
                    className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center cursor-pointer"
                    aria-label={`View detail for ${plant.name}`}
                  >
                    <span className="bg-white/95 text-slate-900 text-xs font-bold px-4 py-2.5 rounded-full shadow-lg flex items-center gap-1.5 scale-95 group-hover:scale-100 transition-all">
                      <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
                      Quick View
                    </span>
                  </button>
                </div>

                {/* Plant Card Body */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-display font-extrabold text-base text-slate-900 group-hover:text-emerald-600 transition-colors mb-0.5">
                    {plant.name}
                  </h3>
                  <p className="text-slate-400 text-[11px] italic mb-3 font-sans">
                    {plant.scientificName}
                  </p>
                  
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-6">
                    {plant.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setSelectedPlantId(plant.id)}
                      className="w-10 h-10 shrink-0 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 hover:border-emerald-200 transition-all cursor-pointer"
                      title="View Care Tips"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onAddToCart(plant)}
                      className={`flex-grow inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isItemInCart 
                          ? 'bg-emerald-50 text-emerald-850 border border-emerald-200' 
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-200'
                      }`}
                    >
                      {isItemInCart ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-750 stroke-[3px]" />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-3.5 h-3.5" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Slide-out Cart Panel / Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Dark overlay backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50 pointer-events-auto"
            />

            {/* Sliding Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col border-l border-slate-200"
            >
              {/* Header */}
              <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <h2 className="font-display font-extrabold text-lg text-slate-900">Your Botanical Cart</h2>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                  aria-label="Close Cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cart Items List */}
              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center max-w-xs mx-auto space-y-4">
                    <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-bold text-slate-900">Your cart is empty</h3>
                    <p className="text-slate-500 text-xs leading-relaxed font-sans">
                      You haven't selected any plant friends yet. Explore our catalog and add a few leafy companions!
                    </p>
                    <button
                      onClick={() => setIsCartOpen(false)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-2.5 rounded-full shadow-md shadow-emerald-200 transition-all cursor-pointer"
                    >
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div key={item.plant.id} className="flex gap-4 items-center border-b border-slate-100 pb-5 last:border-0 last:pb-0">
                      {/* Thumbnail */}
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                        <img
                          src={item.plant.image}
                          alt={item.plant.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Detail text */}
                      <div className="flex-grow text-left">
                        <h4 className="font-sans font-extrabold text-slate-900 text-sm">{item.plant.name}</h4>
                        <p className="text-slate-400 text-[10px] italic mb-2">{item.plant.scientificName}</p>
                        <span className="text-xs font-bold text-slate-700 font-sans">${item.plant.price}.00</span>
                      </div>

                      {/* Action buttons */}
                      <div className="flex flex-col items-end gap-2">
                        <button
                          onClick={() => onRemoveFromCart(item.plant.id)}
                          className="text-slate-400 hover:text-red-500 p-1 rounded-md hover:bg-red-50 transition-colors cursor-pointer"
                          aria-label={`Remove ${item.plant.name}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        
                        <div className="flex items-center border border-slate-200 rounded-full bg-slate-50 overflow-hidden">
                          <button
                            onClick={() => onUpdateCartQty(item.plant.id, -1)}
                            className="w-7 h-7 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-l-full transition-colors cursor-pointer"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-slate-800 text-xs font-bold font-sans">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateCartQty(item.plant.id, 1)}
                            className="w-7 h-7 flex items-center justify-center text-slate-500 hover:bg-slate-100 rounded-r-full transition-colors cursor-pointer"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Sticky Box */}
              {cart.length > 0 && (
                <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-bold font-sans">Estimated shipping</span>
                    <span className="text-emerald-700 font-bold font-sans uppercase text-[10px] tracking-wider bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100/50">FREE</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-800 font-extrabold font-sans text-base">Total Amount</span>
                    <span className="text-slate-950 font-black font-sans text-xl">${cartSubtotal}.00</span>
                  </div>

                  <button
                    onClick={handleCheckout}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-full shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all text-sm cursor-pointer"
                  >
                    Proceed to Secure Checkout
                  </button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Quick View Care Details Modal */}
      <AnimatePresence>
        {activeModalPlant && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlantId(null)}
              className="fixed inset-0 bg-black z-50 pointer-events-auto"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed inset-x-4 top-[8%] md:top-[12%] bottom-auto max-w-3xl mx-auto bg-white rounded-[32px] overflow-hidden shadow-2xl z-50 max-h-[80vh] flex flex-col border border-slate-200 text-left"
            >
              {/* Header / Dismiss */}
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => setSelectedPlantId(null)}
                  className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs shadow-md flex items-center justify-center text-slate-500 hover:text-slate-800 border border-slate-100 transition-all cursor-pointer"
                  aria-label="Dismiss Modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Scrollable Content wrapper */}
              <div className="overflow-y-auto flex-grow">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  
                  {/* Photo Frame */}
                  <div className="relative aspect-video md:aspect-auto md:h-full min-h-[250px] md:min-h-[400px] bg-slate-100 shadow-inner">
                    <img
                      src={activeModalPlant.image}
                      alt={activeModalPlant.name}
                      className="w-full h-full object-cover absolute inset-0"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Descriptions details */}
                  <div className="p-6 md:p-8 space-y-6">
                    <div>
                      <span className="text-emerald-850 text-[10px] font-bold uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100/50">
                        {activeModalPlant.difficulty} Maintenance
                      </span>
                      <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 mt-2 mb-0.5">
                        {activeModalPlant.name}
                      </h2>
                      <p className="text-slate-400 text-xs italic font-sans">
                        {activeModalPlant.scientificName}
                      </p>
                    </div>

                    <p className="text-slate-500 text-sm leading-relaxed font-sans">
                      {activeModalPlant.description}
                    </p>

                    {/* Quick Specs Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-150 flex flex-col items-center text-center">
                        <Sun className="w-4 h-4 text-emerald-600 mb-1" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Light</span>
                        <span className="text-[10px] font-bold text-slate-700 font-sans line-clamp-1">Indirect</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-150 flex flex-col items-center text-center">
                        <Droplets className="w-4 h-4 text-emerald-600 mb-1" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Water</span>
                        <span className="text-[10px] font-bold text-slate-700 font-sans line-clamp-1">Standard</span>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-2xl border border-slate-150 flex flex-col items-center text-center">
                        <ShoppingBag className="w-4 h-4 text-emerald-600 mb-1" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Size</span>
                        <span className="text-[10px] font-bold text-slate-700 font-sans line-clamp-1">{activeModalPlant.size}</span>
                      </div>
                    </div>

                    {/* Care Tips list */}
                    <div className="space-y-3">
                      <h4 className="font-display font-extrabold text-sm text-slate-900 uppercase tracking-wider">Expert Growing Tips</h4>
                      <ul className="space-y-2 text-slate-500 text-xs font-sans pl-1">
                        {activeModalPlant.careTips.map((tip, idx) => (
                          <li key={idx} className="flex gap-2 items-start leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Action bar */}
                    <div className="pt-4 border-t border-slate-150 flex items-center justify-between gap-4">
                      <div className="text-left">
                        <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest block font-sans">Price</span>
                        <span className="text-xl font-black text-slate-950 font-sans">${activeModalPlant.price}.00</span>
                      </div>

                      <button
                        onClick={() => {
                          onAddToCart(activeModalPlant);
                          setSelectedPlantId(null);
                        }}
                        className="flex-grow inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-full transition-all cursor-pointer text-sm shadow-lg shadow-emerald-200"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add To Cart
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Checkout Success Simulation Modal */}
      <AnimatePresence>
        {checkoutSuccess && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 pointer-events-auto"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-4 top-[20%] md:top-[30%] bottom-auto max-w-md mx-auto bg-white rounded-[32px] p-8 shadow-2xl z-50 border border-slate-200 text-center space-y-6 animate-scale-up"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-200">
                <Check className="w-8 h-8 stroke-[3.5px]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-black text-2xl text-slate-900">Order Confirmed!</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans">
                  Thank you for your green purchase! Your plants are being pampered and prepared with eco-friendly love. We've sent a detailed packing invoice and tracking schedule to your email.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-150 text-left">
                <div className="flex justify-between items-center text-xs font-sans text-slate-500 mb-1.5">
                  <span>Shipping Address</span>
                  <span className="font-bold text-slate-800">Digital Greenhouse, CA</span>
                </div>
                <div className="flex justify-between items-center text-xs font-sans text-slate-500">
                  <span>Estimated Delivery</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100/50">3-5 Business Days</span>
                </div>
              </div>

              <button
                onClick={handleCloseCheckoutSuccess}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-full shadow-lg shadow-emerald-200 transition-all text-sm cursor-pointer"
              >
                Wonderful, Thanks!
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
