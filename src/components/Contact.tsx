"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "admin@aeropex.co",
      link: "mailto:admin@aeropex.co",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Chennai, Tamil Nadu, India",
      link: "#",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 94446 46750",
      link: "tel:+919444646750",
    },
  ];

  return (
    <section id="contact" className="py-32 md:py-60 bg-[#020617] relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-[50rem] h-[50rem] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none opacity-40" />
      <div className="absolute bottom-0 right-0 w-[60rem] h-[60rem] bg-brand-orange/5 rounded-full blur-[180px] pointer-events-none opacity-50" />

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
            <MessageSquare size={14} className="text-brand-orange" />
            <span className="text-white/60 text-[10px] font-bold uppercase tracking-[0.3em]">
              Connect • Collaborate
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-tight">
            START THE <br />
            <span className="text-gradient-orange italic">CONVERSATION.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/40 leading-relaxed font-light max-w-2xl">
            Have questions about our autonomous systems or want to explore a partnership? 
            Our team is ready to help you navigate the future of logistics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 mb-24">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-dark p-12 rounded-[3rem] border border-white/5 group transition-all duration-500 hover:bg-white/[0.03]"
            >
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center mb-10 group-hover:bg-brand-orange/20 transition-all duration-500 border border-white/10">
                <info.icon className="text-white/40 group-hover:text-brand-orange transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{info.title}</h3>
              <a
                href={info.link}
                className="text-white/40 hover:text-brand-orange transition-colors text-lg font-light"
              >
                {info.content}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="glass-dark rounded-[3rem] p-10 md:p-16 border border-white/5 max-w-4xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 ml-4">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange/50 transition-colors placeholder:text-white/10"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 ml-4">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange/50 transition-colors placeholder:text-white/10"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 ml-4">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+91 00000 00000"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange/50 transition-colors placeholder:text-white/10"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 ml-4">Inquiry Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="How can we help?"
                  className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange/50 transition-colors placeholder:text-white/10"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/30 ml-4">Your Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Describe your inquiry in detail..."
                className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-orange/50 transition-colors placeholder:text-white/10 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-brand-orange text-white rounded-2xl py-6 font-bold text-lg hover:bg-brand-orange/90 transition-all shadow-[0_20px_40px_rgba(250,129,0,0.2)] flex items-center justify-center gap-4 group"
            >
              Send Secure Message
              <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
