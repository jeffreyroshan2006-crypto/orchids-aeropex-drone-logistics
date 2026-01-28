"use client";

import Image from "next/image";
import { Battery, Gauge, Weight, Wind, Cpu, Shield, Droplets, Map, Zap, CloudRain, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function TitanX1() {
  const titanSpecs = [
    { icon: Weight, label: "Payload Capacity", value: "50kg+", desc: "Heavy-lift capability" },
    { icon: Gauge, label: "Max Range", value: "90km", desc: "Extended coverage" },
    { icon: Battery, label: "Flight Time", value: "1.5Hr", desc: "Varies with payload" },
    { icon: Wind, label: "Max Speed", value: "80 km/h", desc: "Fast and reliable" },
    { icon: Cpu, label: "Autonomous AI", value: "Level 4", desc: "AI supercomputer" },
    { icon: Shield, label: "Safety Rating", value: "5-Star", desc: "Redundant systems" },
  ];

  const agriSpecs = [
    { icon: Droplets, label: "Tank Capacity", value: "20-50L", desc: "Swappable sprayer" },
    { icon: Gauge, label: "Max Range", value: "90km", desc: "Extended farm coverage" },
    { icon: Battery, label: "Flight Time", value: "1.5Hr", desc: "Hot-swappable system" },
    { icon: Map, label: "GPS Mapping", value: "Auto", desc: "Terrain-following" },
    { icon: CloudRain, label: "Weather", value: "IP67", desc: "Dust & water resistant" },
    { icon: Zap, label: "Spray Control", value: "Variable", desc: "Eco-friendly" },
  ];

  return (
    <section id="titan-x1" className="py-32 md:py-60 bg-[#020617] relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-40"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 glass-dark rounded-full border border-white/5">
            <span className="text-brand-orange text-[10px] font-bold uppercase tracking-[0.3em]">
              The Fleet • Engineering Excellence
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-tight">
            FORGING THE <br />
            <span className="text-gradient-orange italic">UNSTOPPABLE.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-3xl mx-auto">
            Our flagship autonomous platforms are engineered to dominate the most demanding logistics 
            and agricultural landscapes across the subcontinent.
          </p>
        </motion.div>

        {/* Titan X1 Section */}
        <div className="mb-60">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-brand-orange/40" />
                <span className="text-brand-orange font-bold text-xs uppercase tracking-[0.3em]">Flagship Logistics</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">TITAN X1 <span className="font-light opacity-30">HEXACOPTER</span></h3>
              <p className="text-white/40 text-xl mb-12 leading-relaxed font-light">
                A powerhouse of autonomous flight. The Titan X1 is the definitive answer to heavy-lift 
                logistics, combining industrial-grade durability with surgical precision.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {[
                  "Full Carbon Fiber Chassis",
                  "AI Flight Optimization",
                  "Multi-Sensor Fusion",
                  "Modular Cargo Interface",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/60 group">
                    <div className="w-6 h-6 rounded-full glass flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                      <CheckCircle2 size={12} className="text-brand-orange" />
                    </div>
                    <span className="font-medium text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <motion.button 
                whileHover={{ gap: "2rem" }}
                className="flex items-center gap-4 text-white font-bold text-lg border-b border-white/10 pb-4 hover:border-brand-orange/40 transition-all w-full"
              >
                Technical Specifications <ChevronRight className="text-brand-orange" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/3] rounded-[4rem] overflow-hidden glass shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10 group"
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763210960690.png?width=8000&height=8000&resize=contain"
                alt="Titan X1"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 glass-dark px-8 py-4 rounded-3xl border border-white/10">
                <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1 font-bold">In-Flight Status</div>
                <div className="text-brand-orange font-bold text-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
                  Live Deployment Active
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {titanSpecs.map((spec, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-dark p-8 rounded-[2.5rem] border border-white/5 hover:bg-white/[0.03] transition-all duration-500"
              >
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                  <spec.icon className="text-white/40" size={24} />
                </div>
                <div className="text-2xl font-bold text-white mb-2 tracking-tight">{spec.value}</div>
                <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold leading-tight">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Agri X1 Section */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32 lg:flex-row-reverse">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:order-2"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-green-500/40" />
                <span className="text-green-500 font-bold text-xs uppercase tracking-[0.3em]">Precision Agriculture</span>
              </div>
              <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">AGRI X1 <span className="font-light opacity-30">PRECISION</span></h3>
              <p className="text-white/40 text-xl mb-12 leading-relaxed font-light">
                Redefining the agricultural backbone of India. The Agri X1 delivers autonomous spraying 
                and crop intelligence that maximizes yield while minimizing resource waste.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                {[
                  "50L Swappable Sprayer",
                  "Terrain-Following AI",
                  "Variable-Rate Controls",
                  "Hot-Swappable Energy",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-white/60 group">
                    <div className="w-6 h-6 rounded-full glass flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                      <CheckCircle2 size={12} className="text-green-500" />
                    </div>
                    <span className="font-medium text-sm tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <motion.button 
                whileHover={{ gap: "2rem" }}
                className="flex items-center gap-4 text-white font-bold text-lg border-b border-white/10 pb-4 hover:border-green-500/40 transition-all w-full"
              >
                Agricultural Impact Report <ChevronRight className="text-green-500" />
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative aspect-[4/3] rounded-[4rem] overflow-hidden glass shadow-[0_40px_100px_rgba(0,0,0,0.8)] border border-white/10 lg:order-1 group"
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763214336573.png?width=8000&height=8000&resize=contain"
                alt="Agri X1"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              <div className="absolute top-10 right-10 glass-dark px-8 py-4 rounded-3xl border border-white/10">
                <div className="text-[10px] text-white/40 uppercase tracking-[0.2em] mb-1 font-bold">Field Testing</div>
                <div className="text-green-500 font-bold text-sm flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Eco-Impact: Optimized
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {agriSpecs.map((spec, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass-dark p-8 rounded-[2.5rem] border border-white/5 hover:bg-white/[0.03] transition-all duration-500"
              >
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                  <spec.icon className="text-white/40" size={24} />
                </div>
                <div className="text-2xl font-bold text-white mb-2 tracking-tight">{spec.value}</div>
                <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold leading-tight">{spec.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
