/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Plant, CartItem } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Navigation active tab State
  const [activePage, setActivePage] = useState<'home' | 'products' | 'contact'>('home');

  // Shopping Cart State
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Selected plant for "Quick View / Care Tips" Modal
  const [selectedPlantId, setSelectedPlantId] = useState<string | null>(null);

  // Cart Handlers
  const handleAddToCart = (plant: Plant) => {
    setCart((prevCart) => {
      const existingItemIdx = prevCart.findIndex((item) => item.plant.id === plant.id);
      if (existingItemIdx > -1) {
        // Increment quantity if already exists
        const newCart = [...prevCart];
        newCart[existingItemIdx].quantity += 1;
        return newCart;
      }
      // Otherwise add brand new item
      return [...prevCart, { plant, quantity: 1 }];
    });
  };

  const handleUpdateCartQty = (plantId: string, delta: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.plant.id === plantId) {
            return { ...item, quantity: item.quantity + delta };
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // Remove item if quantity drops to 0 or less
    });
  };

  const handleRemoveFromCart = (plantId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.plant.id !== plantId));
  };

  // Switch to products page and immediately open the Care Tips Modal
  const handleSelectPlant = (plantId: string) => {
    setSelectedPlantId(plantId);
    setActivePage('products');
  };

  // Total quantity of items in the cart
  const totalCartItems = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  // Page switcher mapper
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <Home 
            setActivePage={setActivePage} 
            onSelectPlant={handleSelectPlant} 
          />
        );
      case 'products':
        return (
          <Products
            cart={cart}
            onAddToCart={handleAddToCart}
            onUpdateCartQty={handleUpdateCartQty}
            onRemoveFromCart={handleRemoveFromCart}
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            selectedPlantId={selectedPlantId}
            setSelectedPlantId={setSelectedPlantId}
          />
        );
      case 'contact':
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} onSelectPlant={handleSelectPlant} />;
    }
  };

  return (
    <div id="greenden-root" className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans select-none overflow-x-hidden antialiased text-slate-900">
      {/* Responsive Navigation Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        cartItemCount={totalCartItems}
        onCartClick={() => setIsCartOpen(true)}
      />

      {/* Main Content with smooth fade-in transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Aesthetic Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
