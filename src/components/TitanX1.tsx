"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import { Battery, Gauge, Weight, Wind, Cpu, Shield } from "lucide-react";

export default function TitanX1() {
  const specs = [
    {
      icon: Weight,
      label: "Payload Capacity",
      value: "50kg+",
      description: "Heavy-lift capability for diverse cargo",
    },
    {
      icon: Gauge,
      label: "Max Range",
      value: "200+km",
      description: "Extended coverage for remote deliveries",
    },
    {
      icon: Battery,
      label: "Flight Time",
      value: "2.5-3.5Hr",
      description: "Varies with payload",
    },
    {
      icon: Wind,
      label: "Max Speed",
      value: "80 km/h",
      description: "Fast and reliable transport",
    },
    {
      icon: Cpu,
      label: "Autonomous AI",
      value: "Level 4",
      description: "Uses AI supercomputer for high level redundancy",
    },
    {
      icon: Shield,
      label: "Safety Rating",
      value: "5-Star",
      description: "Redundant systems & fail-safes",
    },
  ];

  const features = [
    "Hexacopter design for enhanced stability and redundancy",
    "AI-powered autonomous flight with real-time route optimization",
    "Weather-resistant construction for all-season operations",
    "Advanced GPS and sensor fusion for precision landing",
    "Remote monitoring and control capabilities",
    "Modular payload system for versatile cargo types",
  ];

  return (
    <section id="titan-x1" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#FA8100]/10 rounded-full">
            <span className="text-[#FA8100] text-sm font-semibold">Flagship Product</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Titan X1 Hexacopter
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our revolutionary heavy-lift autonomous drone, engineered for the toughest delivery challenges across India's diverse terrain.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
          <div className="relative aspect-[16/9] bg-gradient-to-br from-[#2139A0]/10 to-[#FA8100]/10">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763210960690.png?width=8000&height=8000&resize=contain"
              alt="Titan X1 Hexacopter"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Technical Specs Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <Card
                key={index}
                className="p-6 border-2 hover:border-[#2139A0] transition-all hover:shadow-lg group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#2139A0]/10 group-hover:bg-[#2139A0] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                    <spec.icon className="text-[#2139A0] group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">{spec.label}</div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">{spec.value}</div>
                    <div className="text-sm text-gray-500">{spec.description}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Features & Agricultural Use Case */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Key Features */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h3>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#FA8100] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-[#2139A0]/5 to-[#FA8100]/5 rounded-2xl">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Perfect For:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✈️ Agricultural supply delivery</li>
                <li>🏥 Medical emergency transport</li>
                <li>📦 E-commerce last-mile delivery</li>
                <li>🏔️ Remote area logistics</li>
                <li>🌾 Farm-to-market connectivity</li>
              </ul>
            </div>
          </div>

          {/* Agricultural Mission Image */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">In Action</h3>
            <div className="rounded-2xl overflow-hidden shadow-xl mb-4">
              <div className="relative aspect-square">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Aeronova_Titan_X1_Agricultural_Mission_-_Delivering_Seeds_and_Inputs_to_Remote_Farms-1763211143910.png?width=8000&height=8000&resize=contain"
                  alt="Titan X1 delivering agricultural supplies"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The Titan X1 in an agricultural mission, delivering seeds and farming inputs to remote villages. Our drones bridge the gap between suppliers and farmers, ensuring timely delivery of critical resources regardless of terrain or weather conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}