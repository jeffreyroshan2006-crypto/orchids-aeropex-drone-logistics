"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Titan X1", href: "#titan-x1" },
    { name: "Flyzo", href: "#flyzo" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-4 px-4" : "py-8 px-6"
      }`}
    >
      <div className={`max-w-7xl mx-auto rounded-[2rem] transition-all duration-500 overflow-hidden ${
        scrolled ? "glass shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-white/20" : "bg-transparent border-transparent"
      }`}>
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo / Name */}
          <Link href="#home" className="group flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold tracking-tighter text-white group-hover:text-brand-orange transition-all duration-300">
                AEROPEX <span className="text-white group-hover:text-brand-orange">TECHNOLOGIES</span>
              </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 glass-dark px-2 py-1 rounded-full border border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-5 py-2 text-sm font-medium text-white/60 hover:text-white rounded-full transition-all relative group"
              >
                {link.name}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-orange transition-all group-hover:w-1/2" />
              </Link>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-white text-black hover:bg-brand-orange hover:text-white font-bold rounded-full px-8 py-2 transition-all duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(250,129,0,0.4)]"
            >
              <Link href="#contact" className="flex items-center gap-2">
                Launch App <ArrowRight size={16} />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-white glass hover:bg-white/10 transition-all"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="md:hidden fixed inset-0 z-40 bg-black/80 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm space-y-8 text-center"
            >
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-4xl font-bold text-white/80 hover:text-brand-orange transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  asChild
                  className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-8 text-xl rounded-2xl"
                >
                  <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </motion.div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/40 hover:text-white transition-colors"
              >
                Close Menu
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
