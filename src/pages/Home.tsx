import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Star, Users, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/20 blur-[120px] rounded-full" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold tracking-tight uppercase mb-6">
          Premium Event Management
        </span>
        <h1 className="text-5xl md:text-7xl mb-8 leading-[1.1] text-white">
          Crafting <span className="gradient-text">Unforgettable</span> <br />
          Experiences for Visionaries
        </h1>
        <p className="content-colored text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          From concept to execution, we bring your most ambitious events to life. 
          Nexus Events is the partner of choice for world-class organizations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/book" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2">
            Start Planning <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/portfolio" className="w-full sm:w-auto glass px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all text-white">
            View Our Work
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const Stats = () => (
  <section className="py-20 border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {[
          { label: "Events Hosted", value: "500+" },
          { label: "Happy Clients", value: "200+" },
          { label: "Countries", value: "15+" },
          { label: "Awards Won", value: "25" },
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
            <div className="text-slate-500 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-white/10" />
      </div>
      <Stats />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-white/10" />
      </div>
      
      {/* Brief Services Preview */}
      <section className="py-24 bg-slate-950/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl  mb-4 text-white">Our Expertise</h2>
              <p className="text-slate-400">We offer a comprehensive suite of services to ensure your event is nothing short of spectacular.</p>
            </div>
            <Link to="/services" className="text-brand-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
              All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Corporate Summits", icon: <Users className="w-6 h-6" /> },
              { title: "Product Launches", icon: <Star className="w-6 h-6" /> },
              { title: "Gala Dinners", icon: <Calendar className="w-6 h-6" /> },
            ].map((s, i) => (
              <div key={i} className="glass p-8 rounded-3xl">
                <div className="w-12 h-12 bg-brand-primary/20 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{s.title}</h3>
                <p className="text-slate-400 text-sm">Bespoke planning for high-stakes environments.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
