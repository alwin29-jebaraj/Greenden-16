/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Leaf, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Footer({ setActivePage }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer id="greenden-footer" className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div 
              onClick={() => setActivePage('home')} 
              className="flex items-center gap-2 cursor-pointer group w-fit"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-950 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-900 transition-colors">
                <Leaf className="w-4.5 h-4.5" />
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                Greenden
              </span>
            </div>
            
            <p className="text-xs sm:text-sm leading-relaxed max-w-sm text-slate-500 font-sans">
              Cultivating serene spaces with hand-selected, resilient live plants. We make indoor plant guardianship accessible, joyful, and sustainable for homes and classrooms.
            </p>

            <p className="text-xs font-sans text-slate-600">
              © 2026 Greenden Nursery Inc. All rights reserved.
            </p>
          </div>

          {/* Nav Col */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-widest font-display">Directory</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              <li>
                <button 
                  onClick={() => setActivePage('home')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Home Welcome
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActivePage('products')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Plant Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActivePage('contact')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact & FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Collections Shortcut */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-widest font-display">Popular Classes</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-500 font-sans">
              <li className="hover:text-emerald-400 transition-colors cursor-default">Easy Care Favorites</li>
              <li className="hover:text-emerald-400 transition-colors cursor-default">NASA Air Purifiers</li>
              <li className="hover:text-emerald-400 transition-colors cursor-default">Furry-Friend Friendly</li>
              <li className="hover:text-emerald-400 transition-colors cursor-default">Collector Rare Cultivars</li>
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-white text-xs font-extrabold uppercase tracking-widest font-display">Garden Newsletter</h4>
            <p className="text-xs leading-relaxed text-slate-500 font-sans">
              Join the club for 10% off your next purchase, alongside seasonal plant-care tips and exclusive releases.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form 
                  key="sub-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe} 
                  className="relative mt-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-900 text-white placeholder-slate-600 pl-4 pr-12 py-3 rounded-xl border border-slate-800 focus:outline-none focus:border-emerald-500 transition-all text-xs font-sans"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 w-9 h-9 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center transition-all cursor-pointer"
                    aria-label="Subscribe"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="sub-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-950/40 text-emerald-400 p-3.5 rounded-xl border border-emerald-900/40 flex items-center gap-2.5 text-xs font-sans text-left mt-2"
                >
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3px]" />
                  </div>
                  <span>10% Discount Coupon Sent!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-600 font-sans">
          <p>Designed with ❤️ for student web layout instruction.</p>
          <div className="flex gap-4">
            <span className="hover:text-slate-500 transition-colors cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-500 transition-colors cursor-pointer">Terms & Conditions</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
