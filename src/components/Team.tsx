"use client";

import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "JEFFREY ROSHAN S",
      role: "Founder & CEO",
      bio: "Visionary leader with a passion for autonomous aerial infrastructure and logistics innovation.",
    },
    {
      name: "Shoaib Ahamed M",
      role: "CTO",
      bio: "Technical architect specializing in flight control systems and deep-learning autonomous navigation.",
    },
  ];

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
    <section id="team" className="py-32 md:py-60 bg-[#020617] relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[60rem] h-[60rem] bg-brand-orange/5 rounded-full blur-[180px] pointer-events-none opacity-50" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none" />

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
            <Users size={14} className="text-brand-orange" />
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">
              Leadership • Innovation
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-tight">
            MEET THE <br />
            <span className="text-gradient-orange italic">ARCHITECTS.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-2xl">
            A diverse team of engineers and visionaries united by a singular goal: 
            dissolving the barriers of distance through autonomous flight.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-40"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -15 }}
              className="glass-dark p-12 rounded-[3rem] border border-white/5 group transition-all duration-500 hover:bg-white/[0.03]"
            >
              <div className="mb-10">
                <h3 className="text-4xl font-bold text-white mb-2 tracking-tight group-hover:text-brand-orange transition-colors">{member.name}</h3>
                <div className="text-brand-orange font-bold text-xs uppercase tracking-[0.3em]">{member.role}</div>
              </div>
              <p className="text-white/30 leading-relaxed font-light text-lg mb-10">
                {member.bio}
              </p>
              <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-brand-orange/20 transition-all duration-500">
                <ArrowRight size={20} className="text-white/40 group-hover:text-brand-orange" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="glass-dark rounded-[4rem] p-12 md:p-24 relative overflow-hidden border border-white/5"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="text-center relative z-10">
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">Join Our Mission</h3>
            <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-2xl mx-auto mb-14">
              We're always looking for talented individuals who share our passion for innovation and impact.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="mailto:careers@aeropex.tech"
                className="inline-flex items-center gap-4 px-10 py-5 bg-brand-orange text-white rounded-full font-bold text-lg hover:bg-brand-orange/90 transition-all shadow-[0_20px_40px_rgba(250,129,0,0.2)]"
              >
                View Open Positions
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
