"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Play, Zap, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]"
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-mesh opacity-40" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay scale-110 animate-pulse"
          style={{
            backgroundImage:
              "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763210960690.png?width=8000&height=8000&resize=contain')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/0 via-[#020617]/50 to-[#020617]" />
      </div>

      {/* Floating Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-brand-orange/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-brand-blue/10 rounded-full blur-[150px] pointer-events-none" 
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-48 text-center"
      >
        <motion.div 
          variants={itemVariants} 
          className="inline-flex items-center gap-2 mb-10 px-6 py-2 glass-dark rounded-full border border-white/10 hover:border-brand-orange/50 transition-colors cursor-default"
        >
          <div className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
          <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em]">
            Autonomous Flight Infrastructure 2.0
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl sm:text-8xl md:text-9xl font-bold text-white mb-10 leading-[0.9] tracking-tighter"
        >
          THE FUTURE OF <br />
          <span className="text-gradient-orange italic">FLIGHT</span>
        </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl text-white mb-14 leading-relaxed max-w-3xl mx-auto font-light"
          >
          Aeropex Technologies is architecting the next generation of heavy-lift logistics. 
          Bridging distance with autonomous intelligence and uncompromising power.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-brand-orange hover:bg-white hover:text-black text-white font-bold text-lg px-12 py-8 rounded-full shadow-[0_20px_40px_-15px_rgba(250,129,0,0.5)] group transition-all duration-500"
          >
            <Link href="#titan-x1">
              Explore Fleet
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="glass hover:bg-white/10 text-white border-white/10 font-bold text-lg px-12 py-8 rounded-full group transition-all duration-500"
          >
            <Link href="#flyzo">
              <Play className="mr-3 fill-white" size={18} />
              Flyzo Platform
            </Link>
          </Button>
        </motion.div>

        {/* Futuristic Stats Container */}
        <motion.div
          variants={itemVariants}
          className="mt-32 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {[
            { label: "Payload Power", value: "50kg+", icon: Zap, detail: "Industrial Grade" },
            { label: "Operation Radius", value: "90km", icon: Shield, detail: "Encrypted Link" },
            { label: "Delivery Speed", value: "8min", icon: Clock, detail: "Urban Average" },
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-dark p-8 rounded-[2.5rem] border border-white/5 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                <stat.icon size={80} />
              </div>
              <div className="relative z-10 text-left">
                <div className="text-brand-orange font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                  {stat.detail}
                </div>
                <div className="text-4xl font-bold text-white mb-2 tracking-tight">{stat.value}</div>
                <div className="text-sm text-white/40 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
    </section>
  );
}
