/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Sprout, HeartHandshake, Sun, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { FEATURES, PLANTS } from '../data';
import heroBannerImage from '../assets/images/greenden_hero_banner_1782452406204.jpg';

export default function Home({ setActivePage, onSelectPlant }) {
  // Get popular plants for showcase
  const popularPlants = PLANTS.filter(p => p.isPopular).slice(0, 3);

  // Map string to Lucide component
  const getIcon = (name) => {
    switch (name) {
      case 'Sprout': return <Sprout className="w-6 h-6 text-emerald-600" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-emerald-600" />;
      case 'Sun': return <Sun className="w-6 h-6 text-emerald-600" />;
      default: return <Sprout className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div id="greenden-home" className="flex flex-col bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 to-white border-b border-slate-200 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-6 flex flex-col items-start space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1 bg-emerald-100/80 text-emerald-850 rounded-full text-xs font-bold uppercase tracking-wider"
              >
                <Sprout className="w-3.5 h-3.5" />
                <span>Nurture Your Space</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.12]"
              >
                Bring nature into <br/>your modern home.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-500 text-lg leading-relaxed max-w-xl text-left"
              >
                Discover a curated collection of indoor plants that purify your air and refresh your sanctuary. Greenden curates resilient, healthy plants to elevate any home or workspace.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 w-full sm:w-auto"
              >
                <button
                  onClick={() => setActivePage('products')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all cursor-pointer group"
                >
                  Browse Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('about-story');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-bold px-8 py-3.5 rounded-full shadow-xs transition-all cursor-pointer"
                >
                  Our Philosophy
                </button>
              </motion.div>
            </div>

            {/* Hero Image / Banner */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-video lg:aspect-square xl:aspect-video max-w-2xl mx-auto">
                <img
                  src={heroBannerImage}
                  alt="Cozy interior filled with thriving botanical plants"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating review card */}
              <div className="absolute -bottom-6 -left-2 sm:left-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3.5 max-w-xs">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-inner">
                  <Star className="w-5 h-5 fill-emerald-600 text-emerald-600" />
                </div>
                <div className="text-left">
                  <div className="flex gap-0.5 text-amber-500 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 leading-normal font-sans">
                    "My Monstera arrived perfectly healthy!" — Sarah L.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Brand Philosophy / Brief Introduction */}
      <section id="about-story" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Botanical Story
            </h2>
            <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full" />
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              Founded with the belief that everyone should have access to the healing powers of nature, Greenden is a green paradise for novice plant keepers and seasoned growers alike. We hand-select high-quality indoor house plants, package them carefully, and deliver them directly to your home with detailed lifelong care advice. Our mission is to promote wellness, reduce everyday stress, and cultivate sustainable habitats.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The Greenden Difference
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-base">
              We stand by our plants, our planet, and our people with a seamless, earth-first approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((feat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-slate-50 hover:bg-white hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-100/30 p-8 rounded-2xl border border-slate-200/60 transition-all duration-300 group flex flex-col items-start text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100/50 flex items-center justify-center mb-6 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-all">
                  {getIcon(feat.icon)}
                </div>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                  {feat.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Trending / Popular Plants Preview */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
            <div className="space-y-3">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Collection
              </h2>
              <p className="text-slate-500 text-sm sm:text-base">
                Discover our most requested and easy-to-grow green companions.
              </p>
            </div>
            <button
              onClick={() => setActivePage('products')}
              className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-bold text-sm uppercase tracking-tight transition-all cursor-pointer group"
            >
              View All Products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularPlants.map((plant) => (
              <div 
                key={plant.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-150 shadow-sm hover:shadow-md transition-all flex flex-col group text-left"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-100 shadow-inner flex items-center justify-center">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {plant.isPopular && (
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black px-2.5 py-1 rounded-lg uppercase tracking-wider shadow-sm">
                      Best Seller
                    </span>
                  )}
                  <span className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs text-slate-900 font-sans font-bold text-xs px-3 py-1.5 rounded-xl shadow-md border border-slate-100">
                    ${plant.price}.00
                  </span>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <span className="text-emerald-600 text-[10px] font-extrabold uppercase tracking-widest mb-2">
                    {plant.difficulty} Care
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {plant.name}
                  </h3>
                  <p className="text-slate-400 text-xs italic font-sans mb-4">
                    {plant.scientificName}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {plant.description}
                  </p>
                  
                  <button
                    onClick={() => onSelectPlant(plant.id)}
                    className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-slate-50 hover:bg-emerald-50 hover:text-emerald-800 hover:border-emerald-200 border border-slate-200 font-bold py-3 rounded-full transition-all cursor-pointer text-slate-700 text-xs"
                  >
                    View Details & Tips
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
