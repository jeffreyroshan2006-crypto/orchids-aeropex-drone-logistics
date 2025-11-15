"use client";

import { Card } from "./ui/card";

export default function Team() {
  const team = [
    {
      name: "JEFFREY ROSHAN S",
      role: "Founder & CEO",
    },
    {
      name: "NAREN.P",
      role: "Co-Founder & CTO",
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
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-8 border-2 hover:border-[#2139A0] transition-all hover:shadow-xl group min-w-[280px]"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-[#FA8100] font-semibold text-lg">{member.role}</p>
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