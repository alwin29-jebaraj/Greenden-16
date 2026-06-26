/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Menu, X, ShoppingBag, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activePage: 'home' | 'products' | 'contact';
  setActivePage: (page: 'home' | 'products' | 'contact') => void;
  cartItemCount: number;
  onCartClick: () => void;
}

export default function Navbar({ activePage, setActivePage, cartItemCount, onCartClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact' }
  ] as const;

  const handleNavClick = (page: 'home' | 'products' | 'contact') => {
    setActivePage(page);
    setIsMenuOpen(false);
  };

  return (
    <header id="greenden-navbar" className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-emerald-600/10 group-hover:bg-emerald-700 transition-all duration-300">
              <Leaf className="w-5 h-5 fill-white/10" />
            </div>
            <span className="font-display font-extrabold text-2xl tracking-tight text-emerald-950 group-hover:text-emerald-800 transition-colors">
              Greenden
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-[15px] font-semibold tracking-tight transition-colors cursor-pointer ${
                    isActive ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button
              onClick={onCartClick}
              className="relative w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all cursor-pointer"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-emerald-600 text-white font-sans text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 transition-all cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-[15px] font-semibold transition-all ${
                      isActive 
                        ? 'bg-emerald-50 text-emerald-800 border-l-4 border-emerald-600 pl-3' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-emerald-600 pl-4'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
