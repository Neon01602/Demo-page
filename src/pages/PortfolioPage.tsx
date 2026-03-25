import React from "react";
import { motion } from "motion/react";
import { MapPin, Calendar } from "lucide-react";

const PortfolioPage = () => {
  const projects = [
    {
      title: "TechVision Global Summit",
      client: "Microsoft",
      category: "Corporate",
      image: "https://picsum.photos/seed/tech1/1200/800",
      location: "San Francisco, CA",
      date: "Oct 2025",
    },
    {
      title: "Lumina Charity Gala",
      client: "Unicef",
      category: "Charity",
      image: "https://picsum.photos/seed/gala1/1200/800",
      location: "London, UK",
      date: "Dec 2025",
    },
    {
      title: "Apex Product Launch",
      client: "Tesla",
      category: "Launch",
      image: "https://picsum.photos/seed/launch1/1200/800",
      location: "Dubai, UAE",
      date: "Jan 2026",
    },
    {
      title: "Horizon Music Festival",
      client: "Live Nation",
      category: "Entertainment",
      image: "https://picsum.photos/seed/music1/1200/800",
      location: "Austin, TX",
      date: "Feb 2026",
    },
    {
      title: "Global Finance Forum",
      client: "Goldman Sachs",
      category: "Finance",
      image: "https://picsum.photos/seed/finance1/1200/800",
      location: "Singapore",
      date: "Mar 2026",
    },
    {
      title: "Oceanic Yacht Party",
      client: "Private Client",
      category: "Social",
      image: "https://picsum.photos/seed/yacht1/1200/800",
      location: "Monaco",
      date: "May 2025",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl  mb-6 text-white">Our Portfolio</h1>
          <p className="content-colored max-w-2xl mx-auto text-lg">
            Explore our history of creating world-class experiences for the world's most influential brands.
          </p>
        </div>

        <hr className="border-white/10 mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] aspect-video mb-8">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-1.5 rounded-full glass text-xs  uppercase tracking-widest text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl  text-white mb-2 group-hover:text-brand-primary transition-colors">{project.title}</h3>
                  <p className="content-colored font-medium mb-4 opacity-80">Client: {project.client}</p>
                  <div className="flex items-center gap-6 text-slate-500 text-sm">
                    <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {project.location}</span>
                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {project.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
