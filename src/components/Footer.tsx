"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#2139A0] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-['Montserrat']">A</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white font-['Montserrat'] leading-tight">
                  Aeropex
                </span>
                <span className="text-xs text-gray-400 leading-tight">Technologies</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building the future of autonomous drone logistics and heavy-lift delivery solutions for India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-['Montserrat']">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Titan X1", "Flyzo", "Team", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-400 hover:text-[#FA8100] transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-['Montserrat']">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#titan-x1" className="text-gray-400 hover:text-[#FA8100] transition-colors text-sm">
                  Titan X1 Hexacopter
                </Link>
              </li>
              <li>
                <Link href="#flyzo" className="text-gray-400 hover:text-[#FA8100] transition-colors text-sm">
                  Flyzo Delivery
                </Link>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Agricultural Logistics</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Remote Area Delivery</span>
              </li>
              <li>
                <span className="text-gray-400 text-sm">Medical Supply Transport</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-['Montserrat']">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm">
                <Mail size={18} className="text-[#FA8100] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:admin@aeropex.co"
                  className="text-gray-400 hover:text-[#FA8100] transition-colors"
                >
                  admin@aeropex.co
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-[#FA8100] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Bangalore, Karnataka, India
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[#FA8100] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[#FA8100] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[#FA8100] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-[#FA8100] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Aeropex Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-[#FA8100] transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#FA8100] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}