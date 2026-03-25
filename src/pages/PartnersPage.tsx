import React from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, Zap, Heart } from "lucide-react";

const PartnerLogo = ({ logo, name }: { logo: string; name: string }) => {
  const [error, setError] = React.useState(false);

  if (error) {
    return (
      <span className="text-xl font-display font-bold text-white/40 group-hover:text-white transition-colors">
        {name}
      </span>
    );
  }

  return (
    <img 
      src={logo} 
      alt={name} 
      onError={() => setError(true)}
      className="max-h-full max-w-[140px] object-contain opacity-50 grayscale brightness-200 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-500"
      referrerPolicy="no-referrer"
    />
  );
};

const PartnersPage = () => {
  const partners = [
    { 
      name: "Microsoft", 
      category: "Technology Partner", 
      logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" 
    },
    { 
      name: "Google Cloud", 
      category: "Infrastructure Partner", 
      logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg" 
    },
    { 
      name: "Tesla", 
      category: "Mobility Partner", 
      logo: "https://www.vectorlogo.zone/logos/tesla/tesla-ar21.svg" 
    },
    { 
      name: "Rolex", 
      category: "Luxury Partner", 
      logo: "https://www.vectorlogo.zone/logos/rolex/rolex-ar21.svg" 
    },
    { 
      name: "Goldman Sachs", 
      category: "Financial Partner", 
      logo: "https://www.vectorlogo.zone/logos/goldmansachs/goldmansachs-ar21.svg" 
    },
    { 
      name: "Unicef", 
      category: "Impact Partner", 
      logo: "https://www.vectorlogo.zone/logos/unicef/unicef-ar21.svg" 
    },
    { 
      name: "Emirates", 
      category: "Aviation Partner", 
      logo: "https://www.vectorlogo.zone/logos/emirates/emirates-ar21.svg" 
    },
    { 
      name: "Spotify", 
      category: "Media Partner", 
      logo: "https://www.vectorlogo.zone/logos/spotify/spotify-ar21.svg" 
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
          <h1 className="text-4xl md:text-6xl  mb-6 text-white">Our Partners</h1>
          <p className="content-colored max-w-2xl mx-auto text-lg">
            We collaborate with industry leaders to deliver unparalleled quality and innovation in every event.
          </p>
        </div>

        <hr className="border-white/10 mb-20" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center group hover:border-brand-primary/30 transition-all"
            >
              <div className="h-20 flex items-center justify-center mb-6 logo-glow">
                <PartnerLogo logo={partner.logo} name={partner.name} />
              </div>
              <span className="text-[10px]  uppercase tracking-[0.2em] text-slate-500 group-hover:text-brand-primary transition-colors">
                {partner.category}
              </span>
            </motion.div>
          ))}
        </div>

        <hr className="border-white/10 mb-24" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="glass p-12 rounded-[3rem] text-center">
            <Award className="w-12 h-12 text-brand-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Certified Excellence</h3>
            <p className="content-colored text-sm">Recognized globally for our commitment to quality and innovation in event management.</p>
          </div>
          <div className="glass p-12 rounded-[3rem] text-center">
            <ShieldCheck className="w-12 h-12 text-brand-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Secure Partnerships</h3>
            <p className="content-colored text-sm">We maintain strict confidentiality and security protocols for all our corporate partners.</p>
          </div>
          <div className="glass p-12 rounded-[3rem] text-center">
            <Zap className="w-12 h-12 text-brand-accent mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">Rapid Integration</h3>
            <p className="content-colored text-sm">Seamlessly integrate your brand's technology and vision into our event infrastructure.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PartnersPage;
