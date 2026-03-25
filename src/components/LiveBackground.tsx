import React from "react";

const LiveBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {/* Base dark grey layer */}
      <div className="absolute inset-0 bg-[#0a0a0c]" />
      
      {/* Animated abstract shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-primary/10 blur-[120px] rounded-full animate-float" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/10 blur-[120px] rounded-full animate-float-delayed" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-brand-accent/5 blur-[100px] rounded-full animate-float" />
      
      {/* Mesh grid overlay for texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] animate-grid" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px' 
        }} 
      />
      
      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default LiveBackground;
