import React, { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Send, Calendar, Users, Star } from "lucide-react";

const BookingPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl  mb-6 text-white">Start Your Journey</h1>
          <p className="content-colored max-w-2xl mx-auto text-lg">
            Ready to create something extraordinary? Fill out the form below and our lead planners will reach out to you.
          </p>
        </div>

        <hr className="border-white/10 mb-16" />

        <div className="glass p-8 md:p-16 rounded-[3rem] border-brand-primary/20 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[80px] -z-10 rounded-full" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-secondary/10 blur-[80px] -z-10 rounded-full" />

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="text-green-500 w-12 h-12" />
              </div>
              <h2 className="text-4xl  mb-4 text-white">Inquiry Received!</h2>
              <p className="content-colored text-lg mb-8">Our event specialists will contact you within 24 hours to discuss your vision.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-brand-primary font-bold hover:underline"
              >
                Send another inquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Full Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white" placeholder="john@company.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Event Type</label>
                  <div className="relative">
                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white appearance-none cursor-pointer">
                      <option className="bg-slate-900">Corporate Conference</option>
                      <option className="bg-slate-900">Product Launch</option>
                      <option className="bg-slate-900">Gala Dinner</option>
                      <option className="bg-slate-900">Destination Wedding</option>
                      <option className="bg-slate-900">Other</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Estimated Guests</label>
                  <input type="number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white" placeholder="100+" />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-sm font-semibold text-slate-300 ml-1">Event Vision</label>
                <textarea rows={5} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-white resize-none" placeholder="Tell us more about your event, goals, and any specific requirements..."></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="w-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent text-white  py-5 rounded-2xl hover:opacity-90 transition-all shadow-xl shadow-brand-primary/20 flex items-center justify-center gap-3 text-lg">
                  Submit Inquiry <Send className="w-5 h-5" />
                </button>
              </div>
              
              <p className="text-center text-slate-500 text-xs">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          )}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4 text-slate-400">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              <Calendar className="w-5 h-5 text-brand-primary" />
            </div>
            <span className="text-sm">Flexible scheduling options available</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-brand-secondary" />
            </div>
            <span className="text-sm">Dedicated account manager for every client</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
              <Star className="w-5 h-5 text-brand-accent" />
            </div>
            <span className="text-sm">Global network of premium venues</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BookingPage;
