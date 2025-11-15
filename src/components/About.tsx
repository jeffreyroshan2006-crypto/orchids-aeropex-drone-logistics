"use client";

import { Target, Eye, Zap } from "lucide-react";
import { Card } from "./ui/card";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#2139A0]/10 rounded-full">
            <span className="text-[#2139A0] text-sm font-semibold">About Aeropex</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Transforming Indian Logistics
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to revolutionize how goods are transported across India, making deliveries faster, more efficient, and accessible to everyone.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 border-2 hover:border-[#2139A0] transition-all hover:shadow-lg">
            <div className="w-14 h-14 bg-[#2139A0] rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To democratize logistics in India by deploying autonomous heavy-lift drones that connect remote villages to urban centers, ensuring critical supplies reach everyone efficiently.
            </p>
          </Card>

          <Card className="p-8 border-2 hover:border-[#FA8100] transition-all hover:shadow-lg">
            <div className="w-14 h-14 bg-[#FA8100] rounded-xl flex items-center justify-center mb-6">
              <Eye className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become India's leading drone logistics provider, creating a network of autonomous delivery systems that make distance irrelevant and improve lives nationwide.
            </p>
          </Card>

          <Card className="p-8 border-2 hover:border-[#2139A0] transition-all hover:shadow-lg">
            <div className="w-14 h-14 bg-[#2139A0] rounded-xl flex items-center justify-center mb-6">
              <Zap className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600 leading-relaxed">
              Innovation, reliability, and accessibility drive everything we do. We're committed to safety, sustainability, and empowering communities through cutting-edge technology.
            </p>
          </Card>
        </div>

        {/* Story Section */}
        <div className="bg-gradient-to-br from-[#2139A0]/5 to-[#FA8100]/5 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2023, Aeropex Technologies emerged from a simple observation: millions of Indians in remote areas face challenges accessing essential goods due to poor infrastructure and long distances.
                </p>
                <p>
                  Our team of aerospace engineers, AI specialists, and logistics experts came together to build a solution that would leapfrog traditional infrastructure limitations using autonomous drone technology.
                </p>
                <p>
                  Today, with our flagship Titan X1 hexacopter and Flyzonow delivery service, we're making that vision a reality, delivering everything from medical supplies to agricultural inputs across India's diverse terrain.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="text-4xl font-bold text-[#2139A0] mb-2">500+</div>
                <div className="text-sm text-gray-600">Successful Deliveries</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="text-4xl font-bold text-[#FA8100] mb-2">50+</div>
                <div className="text-sm text-gray-600">Villages Served</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="text-4xl font-bold text-[#2139A0] mb-2">98%</div>
                <div className="text-sm text-gray-600">On-Time Rate</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <div className="text-4xl font-bold text-[#FA8100] mb-2">24/7</div>
                <div className="text-sm text-gray-600">Operations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
