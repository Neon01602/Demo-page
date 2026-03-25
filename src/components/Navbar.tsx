import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Star } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
              <Star className="text-white w-5 h-5" />
            </div>
            <span className="font-display  text-xl tracking-tighter">NEXUS EVENTS</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-brand-primary' : 'text-slate-400 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`text-sm font-medium transition-colors ${isActive('/services') ? 'text-brand-primary' : 'text-slate-400 hover:text-white'}`}
            >
              Services
            </Link>
            <Link 
              to="/portfolio" 
              className={`text-sm font-medium transition-colors ${isActive('/portfolio') ? 'text-brand-primary' : 'text-slate-400 hover:text-white'}`}
            >
              Portfolio
            </Link>
            <Link 
              to="/partners" 
              className={`text-sm font-medium transition-colors ${isActive('/partners') ? 'text-brand-primary' : 'text-slate-400 hover:text-white'}`}
            >
              Partners
            </Link>
            <Link to="/book">
              <button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
