import React from "react";
import { Link } from "react-router-dom";
import { Star, Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Star className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tighter text-white">SAVORY EVENTS</span>
          </div>
          <p className="text-slate-400 max-w-sm mb-8">
            The world's leading event management agency specializing in high-end corporate and social experiences.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
            <li><Link to="/partners" className="hover:text-white transition-colors">Partners</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white">Contact Us</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> hello@savoryevents.com</li>
            <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> +1 (555) 123-4567</li>
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4" /> 123 Event Plaza, NY</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
        © 2026 Savory Events Management. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
