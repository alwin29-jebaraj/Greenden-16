/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ChevronDown, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data';

export default function Contact() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    plantInterest: 'General Inquiry'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // FAQ toggle state
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      plantInterest: 'General Inquiry'
    });
    setIsSubmitted(false);
  };

  return (
    <div id="greenden-contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-20">
      
      {/* Intro Header */}
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h1 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
          Connect With Our Green Experts
        </h1>
        <p className="text-slate-500 font-sans text-sm sm:text-base leading-relaxed">
          Have plant-care questions, order queries, or seeking landscaping recommendations? We are here to nurture your space. Leave a note below and our garden team will grow back to you!
        </p>
      </div>

      {/* Main Grid: Contact Cards & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column: Info list & Visual Frame */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-black text-slate-900 tracking-tight">
              Visit The Greenhouse
            </h2>
            <p className="text-slate-500 font-sans text-xs sm:text-sm leading-relaxed">
              Step into our physical nursery location in San Francisco to experience our full curated tropical canopy, grab healthy premium potting soils, or talk to our live experts.
            </p>
          </div>

          {/* Icon Cards */}
          <div className="space-y-4 font-sans">
            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-md shadow-slate-100/40">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/50 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-sm">Store Address</h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  850 Botanical Avenue, Conservatory District<br />San Francisco, CA 94118
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-md shadow-slate-100/40">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/50 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-sm">Digital Support</h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  hello@greenden.com<br />wholesale@greenden.com
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-md shadow-slate-100/40">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/50 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-sm">Gardening Line</h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  +1 (415) 555-PLNT<br />Mon–Fri: 9:00 AM – 6:00 PM PST
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-200/80 shadow-md shadow-slate-100/40">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100/50 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-sm">Boutique Hours</h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  Saturday: 10:00 AM – 5:00 PM PST<br />Sunday: 11:00 AM – 4:00 PM PST
                </p>
              </div>
            </div>
          </div>

          {/* Aesthetic Location Visualizer (Styled CSS Map Frame) */}
          <div className="relative rounded-2xl overflow-hidden aspect-video border border-slate-200 bg-slate-100 flex flex-col justify-end p-4 shadow-xs shadow-inner">
            {/* Soft grid background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#10b981_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center animate-ping absolute" />
              <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-white flex items-center justify-center text-white relative shadow-md">
                <MapPin className="w-4 h-4 fill-current" />
              </div>
            </div>
            
            {/* Map metadata card */}
            <div className="bg-white/95 backdrop-blur-xs p-3.5 rounded-xl border border-slate-200 relative shadow-sm text-left flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-slate-900">Greenden Sanctuary</p>
                <p className="text-[10px] text-slate-500">Golden Gate Park Adjacent</p>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100/50">Open Now</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/85 shadow-lg shadow-slate-100/60 text-left">
          
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="contact-form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-black text-slate-900">Send us a Message</h3>
                  <p className="text-slate-400 text-xs font-sans">Required fields are marked with a green asterisk (*)</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider font-sans">
                      Your Name <span className="text-emerald-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-xs font-sans"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider font-sans">
                      Email Address <span className="text-emerald-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-xs font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Topic dropdown */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider font-sans">
                      I Am Interested In
                    </label>
                    <select
                      value={formData.plantInterest}
                      onChange={(e) => setFormData({ ...formData, plantInterest: e.target.value })}
                      className="w-full bg-slate-50 text-slate-700 p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-xs font-sans"
                    >
                      <option value="General Inquiry">General Nursery Inquiry</option>
                      <option value="Plant Health Advice">Plant Health Advice</option>
                      <option value="Wholesale & Bulk">Wholesale Orders</option>
                      <option value="Landscaping Consult">Landscaping Consult</option>
                    </select>
                  </div>

                  {/* Subject field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider font-sans">
                      Message Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Caring for my fiddle-leaf"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-xs font-sans"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-600 uppercase tracking-wider font-sans">
                    Your Message <span className="text-emerald-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Write details about your plants, light, or general question here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 text-slate-800 placeholder-slate-400 p-3.5 rounded-xl border border-slate-200 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-xs font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-full shadow-lg shadow-emerald-200 hover:shadow-emerald-300 transition-all text-xs cursor-pointer disabled:bg-emerald-600/60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Dispatching Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send Green Message
                    </>
                  )}
                </button>
              </motion.form>
            ) : (
              /* Submission Success feedback block */
              <motion.div
                key="success-form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-6 max-w-md mx-auto"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-200 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-black text-2xl text-slate-900">Message Delivered!</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-sans">
                    Thank you, <span className="font-bold text-slate-800">{formData.name}</span>! Your request regarding <span className="italic font-medium text-emerald-850 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100/50">{formData.plantInterest}</span> has been securely delivered to our greenhouse team.
                  </p>
                  <p className="text-slate-500 text-xs font-sans">
                    A confirmation copy was routed to <span className="font-semibold text-slate-700">{formData.email}</span>. One of our horticulturists will reach back within 24 business hours.
                  </p>
                </div>

                <button
                  onClick={handleResetForm}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-6 py-3 rounded-full border border-slate-200 shadow-xs transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* FAQ Accordion Section */}
      <section className="bg-slate-50 rounded-[32px] p-6 sm:p-10 md:p-12 border border-slate-200 space-y-10">
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Queries
          </h2>
          <p className="text-slate-500 font-sans text-xs sm:text-sm">
            Everything you need to know about delivery, safety guarantee, and lifelong plant care guidance.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all text-left"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-5 font-display font-black text-sm sm:text-base text-slate-900 hover:text-emerald-600 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-650' : ''}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 border-t border-slate-100 pt-3 text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
