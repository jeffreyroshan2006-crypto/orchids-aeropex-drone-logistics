"use client";

import { Card } from "./ui/card";
import { Linkedin, Mail } from "lucide-react";

export default function Team() {
  const team = [
    {
      name: "Jeffrey Roshan S",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Aerospace engineer with a passion for making logistics accessible to all Indians",
      linkedin: "#",
      email: "jeffrey@aeropex.tech",
    },
    {
      name: "Partner Position",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
      bio: "AI and robotics expert driving autonomous flight technology",
      linkedin: "#",
      email: "partner@aeropex.tech",
    },
    {
      name: "Partner Position",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bio: "Logistics veteran optimizing delivery networks across India",
      linkedin: "#",
      email: "operations@aeropex.tech",
    },
    {
      name: "Partner Position",
      role: "Lead Engineer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Drone systems architect ensuring safety and reliability",
      linkedin: "#",
      email: "engineering@aeropex.tech",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#2139A0]/10 rounded-full">
            <span className="text-[#2139A0] text-sm font-semibold">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the Minds Behind Aeropex
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A diverse team of engineers, innovators, and logistics experts united by a vision to transform Indian delivery.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-[#2139A0] transition-all hover:shadow-xl group"
            >
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-[#2139A0]/10 to-[#FA8100]/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-[#FA8100] font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex space-x-3">
                  <a
                    href={member.linkedin}
                    className="w-9 h-9 bg-[#2139A0]/10 hover:bg-[#2139A0] rounded-lg flex items-center justify-center transition-colors group/icon"
                  >
                    <Linkedin size={18} className="text-[#2139A0] group-hover/icon:text-white" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-9 h-9 bg-[#FA8100]/10 hover:bg-[#FA8100] rounded-lg flex items-center justify-center transition-colors group/icon"
                  >
                    <Mail size={18} className="text-[#FA8100] group-hover/icon:text-white" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="bg-gradient-to-r from-[#2139A0] to-[#FA8100] rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h3>
          <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and impact.
          </p>
          <a
            href="mailto:careers@aeropex.tech"
            className="inline-block px-8 py-4 bg-white text-[#2139A0] rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  );
}
