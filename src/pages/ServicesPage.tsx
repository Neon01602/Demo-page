import React from "react";
import { motion } from "motion/react";
import { Users, Star, Calendar, MapPin, Shield, Zap, Globe, Heart } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      title: "Corporate Summits",
      description: "High-impact conferences and summits that drive industry conversations and foster meaningful connections.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Product Launches",
      description: "Immersive experiences that make your brand the center of attention and leave a lasting impression on your audience.",
      icon: <Star className="w-6 h-6" />,
    },
    {
      title: "Gala Dinners",
      description: "Elegant evenings designed with meticulous attention to every detail, from gourmet catering to bespoke entertainment.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      title: "Destination Events",
      description: "Global logistics and planning for events in the world's most stunning locations, ensuring a seamless experience.",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: "Security & VIP",
      description: "Discreet and professional security services for high-profile guests and sensitive corporate gatherings.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "Tech Integration",
      description: "Cutting-edge AV, live streaming, and interactive technology to engage your audience both in-person and remotely.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Sustainable Planning",
      description: "Eco-friendly event solutions that minimize environmental impact without compromising on luxury or quality.",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      title: "Charity & Non-Profit",
      description: "Strategic planning for fundraising events that maximize donations and awareness for your cause.",
      icon: <Heart className="w-6 h-6" />,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl  mb-6 text-white">Our Services</h1>
          <p className="content-colored max-w-2xl mx-auto text-lg">
            We provide end-to-end event management solutions tailored to the unique needs of our global clientele.
          </p>
        </div>

        <hr className="border-white/10 mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="glass p-8 rounded-3xl transition-all border-white/5"
            >
              <div className="w-14 h-14 bg-brand-primary/20 rounded-2xl flex items-center justify-center text-brand-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="content-colored text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesPage;
