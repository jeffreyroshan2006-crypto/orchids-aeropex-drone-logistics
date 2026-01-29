"use client";

import { Target, Eye, Zap, ArrowRight, ShieldCheck, Globe, Cpu } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
    },
  };

  return (
    <section id="about" className="py-32 md:py-60 bg-[#020617] relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80rem] h-[80rem] bg-brand-orange/5 rounded-full blur-[180px] pointer-events-none opacity-50" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mb-32"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1 glass-dark rounded-full border border-white/5">
            <Globe size={14} className="text-brand-orange" />
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">
              Global Vision • Indian Roots
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-tight">
            REDEFINING THE <br />
            <span className="text-gradient-orange italic">POSSIBLE.</span>
          </h2>
            <p className="text-xl md:text-2xl text-white leading-relaxed font-light max-w-2xl">
              Aeropex Technologies isn't just a drone company. We are architects of a new era in logistics, 
              dissolving the barriers of distance through autonomous flight.
            </p>
        </motion.div>

        {/* Core Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-40"
        >
          {[
            {
              title: "Autonomous Intelligence",
              icon: Cpu,
              desc: "Deep-learning flight systems that adapt to terrain, weather, and dynamic obstacles in real-time.",
              accent: "group-hover:text-brand-orange",
            },
            {
              title: "Uncompromising Power",
              icon: Zap,
              desc: "Heavy-lift engineering designed to transport 50kg+ over vast distances without hesitation.",
              accent: "group-hover:text-brand-blue",
            },
            {
              title: "Digital Sovereignty",
              icon: ShieldCheck,
              desc: "Fully encrypted mission control and data security protocols ensuring every flight is protected.",
              accent: "group-hover:text-brand-orange",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              className="glass-dark p-12 rounded-[3rem] border border-white/5 group transition-all duration-500 hover:bg-white/[0.03]"
            >
              <div className="w-16 h-16 glass rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-white/10">
                <item.icon className={`text-white/60 ${item.accent} transition-colors duration-500`} size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{item.title}</h3>
              <p className="text-white/30 leading-relaxed font-light text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Founder's Vision / Story */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="glass-dark rounded-[4rem] p-12 md:p-24 relative overflow-hidden border border-white/5"
        >
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid md:grid-cols-2 gap-24 items-center relative z-10">
            <div>
              <div className="text-brand-orange font-bold text-xs uppercase tracking-[0.4em] mb-8">Established 2025</div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">The Journey to 1,000 Villages</h3>
                <div className="space-y-8 text-white leading-relaxed text-xl font-light">
                  <p>
                    Aeropex Technologies was founded with a singular, audacious goal: to ensure that no 
                    community in India is ever too remote for essential supplies.
                  </p>
                <p>
                  What started as a prototype in a Chennai lab has evolved into a sophisticated network 
                  of autonomous aerial infrastructure, powered by the industry-leading Titan X1.
                </p>
              </div>
              <motion.div whileHover={{ x: 10 }} className="mt-14">
                <a href="#contact" className="group inline-flex items-center gap-4 text-white font-bold text-lg hover:text-brand-orange transition-colors">
                  Join the Mission 
                  <span className="w-12 h-px bg-white/20 group-hover:bg-brand-orange/40 transition-colors" />
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </motion.div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Precision Rate", val: "99.8%", color: "text-white" },
                { label: "Active Corridors", val: "24", color: "text-brand-orange" },
                { label: "Uptime", val: "99.9%", color: "text-brand-orange" },
                { label: "Payload Safety", val: "100%", color: "text-white" },
              ].map((stat, i) => (
                <div key={i} className="glass-dark p-10 rounded-[2.5rem] border border-white/5 hover:border-brand-orange/20 transition-all duration-500 text-center">
                  <div className={`text-5xl font-bold mb-4 tracking-tighter ${stat.color}`}>{stat.val}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
