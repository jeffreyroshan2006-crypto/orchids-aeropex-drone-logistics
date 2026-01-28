"use client";

import { ShoppingBag, Pill, Package, Zap, Clock, Leaf, MapPin, Smartphone, CheckCircle, Shield, ChevronRight, Apple, Play } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Flyzo() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const deliverySteps = [
    {
      icon: Smartphone,
      title: "Order",
      description: "Select items from elite partner hubs through our neural-link app.",
      step: "01",
    },
    {
      icon: Zap,
      title: "Dispatch",
      description: "AI optimizes the fastest Titan route for immediate takeoff.",
      step: "02",
    },
    {
      icon: MapPin,
      title: "Track",
      description: "Live 4K telemetry feed directly to your mobile device.",
      step: "03",
    },
    {
      icon: Package,
      title: "Pod Drop",
      description: "Precision landing at your nearest secure Aero-Pod.",
      step: "04",
    },
    {
      icon: CheckCircle,
      title: "Collect",
      description: "Secure OTP access. Instant physical confirmation.",
      step: "05",
    },
  ];

  const categories = [
    {
      title: "Elite Dining",
      description: "Gourmet deliveries in under 12 minutes.",
      icon: Apple,
      color: "from-orange-500/20 to-brand-orange/40",
    },
    {
      title: "Bio-Medical",
      description: "Critical supplies within the golden hour.",
      icon: Pill,
      color: "from-red-500/20 to-brand-blue/40",
    },
    {
      title: "Cyber-Store",
      description: "Next-gen electronics delivered instantly.",
      icon: Smartphone,
      color: "from-blue-500/20 to-cyan-400/40",
    },
  ];

  return (
    <section id="flyzo" className="py-32 md:py-60 bg-[#020617] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-40"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 glass-dark rounded-full border border-white/5">
            <Zap size={14} className="text-brand-orange" />
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">
              The Flyzo Ecosystem • Instant Logistics
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-tight">
            THE PULSE OF <br />
            <span className="text-gradient-orange italic">INSTANT.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-3xl mx-auto">
            Flyzo is more than an app; it's the interface for India's first autonomous aerial 
            delivery network. Experience a world where distance is irrelevant.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className={`glass-dark p-12 rounded-[3.5rem] border border-white/5 relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative z-10">
                <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                  <cat.icon className="text-white/60" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{cat.title}</h3>
                <p className="text-white/30 text-lg font-light leading-relaxed mb-10">{cat.description}</p>
                <div className="flex items-center gap-2 text-brand-orange font-bold text-sm tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                  Explore <ChevronRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Delivery Flow */}
        <div className="mb-60">
          <h3 className="text-4xl font-bold text-white mb-24 text-center tracking-tighter">The Journey of an Order</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {deliverySteps.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative text-center group"
              >
                <div className="w-20 h-20 glass rounded-[2rem] flex items-center justify-center mx-auto mb-10 relative z-10 group-hover:bg-brand-orange/20 transition-all duration-500 border border-white/10 group-hover:scale-110">
                  <step.icon className="text-white/60 group-hover:text-white" size={28} />
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-brand-orange text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4 tracking-tight">{step.title}</h4>
                <p className="text-white/30 text-sm font-light leading-relaxed">{step.description}</p>
                
                {i < deliverySteps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-px bg-gradient-to-r from-brand-orange/40 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Feature Cards / Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-60">
          {[
            { title: "Ultra-Fast Telemetry", stat: "8-20m", label: "Delivery Speed", color: "text-brand-orange" },
            { title: "Sustainable Sky", stat: "Zero", label: "Carbon Footprint", color: "text-green-500" },
            { title: "Hyper-Connect", stat: "90km", label: "Operating Radius", color: "text-brand-blue" },
          ].map((benefit, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.05 }}
              className="glass-dark p-12 rounded-[3.5rem] border border-white/5 text-center group"
            >
              <div className="text-[10px] text-white/30 uppercase tracking-[0.4em] mb-4 font-bold">{benefit.title}</div>
              <div className={`text-7xl font-bold mb-4 tracking-tighter ${benefit.color} group-hover:scale-110 transition-transform duration-500`}>
                {benefit.stat}
              </div>
              <div className="text-white font-bold text-lg tracking-tight">{benefit.label}</div>
            </motion.div>
          ))}
        </div>

        {/* App Download CTA - Luxurious Look */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-dark rounded-[5rem] p-12 md:p-24 relative overflow-hidden border border-white/5"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 text-center">
            <h3 className="text-5xl md:text-7xl font-bold text-white mb-10 tracking-tighter">THE FUTURE IN <br /> YOUR POCKET.</h3>
            <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-3xl mx-auto mb-16">
              Download the Flyzo application and join the elite circle of autonomous logistics. 
              Available on all major platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-4 bg-white text-black px-10 py-6 rounded-full font-bold text-lg hover:shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)] transition-all"
              >
                <Apple size={28} /> App Store
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-4 glass text-white px-10 py-6 rounded-full font-bold text-lg border-white/10 hover:bg-white/5 transition-all"
              >
                <Play className="fill-white" size={28} /> Play Store
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
