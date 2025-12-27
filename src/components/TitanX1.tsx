"use client";

import Image from "next/image";
import { Card } from "./ui/card";
import { Battery, Gauge, Weight, Wind, Cpu, Shield, Droplets, Map, Zap, CloudRain } from "lucide-react";

export default function TitanX1() {
  const titanSpecs = [
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

  const agriSpecs = [
    {
      icon: Droplets,
      label: "Tank Capacity",
      value: "20-50max",
      description: "High-capacity swappable sprayer tank",
    },
    {
      icon: Gauge,
      label: "Max Range",
      value: "200+km",
      description: "Extended farm coverage",
    },
    {
      icon: Battery,
      label: "Flight Time",
      value: "2.5-3.5Hr",
      description: "Hot-swappable battery system",
    },
    {
      icon: Map,
      label: "GPS Mapping",
      value: "Autonomous",
      description: "AI terrain-following for precise spraying",
    },
    {
      icon: CloudRain,
      label: "Weather Resistant",
      value: "IP67",
      description: "Dust and water resistant for Indian farms",
    },
    {
      icon: Zap,
      label: "Spray Control",
      value: "Variable-rate",
      description: "Eco-friendly sectional shut-off",
    },
  ];

  const titanFeatures = [
    "Hexacopter design for enhanced stability and redundancy",
    "AI-powered autonomous flight with real-time route optimization",
    "Weather-resistant construction for all-season operations",
    "Advanced GPS and sensor fusion for precision landing",
    "Remote monitoring and control capabilities",
    "Modular payload system for versatile cargo types",
  ];

    const agriFeatures = [
      "Heavy-lift hexacopter platform built from the robust Titan X1 chassis (carbon fiber arms, CNC aluminum hub, high-torque Hobbywing motors)",
      "20L* high-capacity swappable sprayer tank and multinozzle precision spray system",
      "Autonomous GPS-mapped flight planning and AI terrain-following for accurate, uniform spraying",
      "Variable-rate spray control, drift minimization, and sectional shut-off for eco-friendly operation",
      "Rugged all-weather body, dust and water resistant, optimized for Indian farm conditions",
      "Real-time telemetry, live remote monitoring, and digital field analytics via mobile/web app",
      "Hot-swappable battery system and quick-attach tank for rapid refilling and nonstop operations",
      "Real-time safety features: obstacle avoidance, emergency cut-off, LED strobes for low-light",
    ];

  return (
    <section id="titan-x1" className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#FA8100]/10 rounded-full">
            <span className="text-[#FA8100] text-sm font-semibold">Flagship Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Drone Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionary heavy-lift autonomous drones, engineered for delivery and agricultural challenges across India's diverse terrain.
          </p>
        </div>

        {/* Titan X1 Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Titan X1 Hexacopter
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Heavy-lift logistics drone for cargo delivery and remote area transport
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
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Technical Specifications
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {titanSpecs.map((spec, index) => (
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

          {/* Features & Use Case */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Key Features */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h4>
              <div className="space-y-4">
                {titanFeatures.map((feature, index) => (
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
                <h5 className="text-xl font-bold text-gray-900 mb-3">Perfect For:</h5>
                <ul className="space-y-2 text-gray-700">
                  <li>✈️ Agricultural supply delivery</li>
                  <li>🏥 Medical emergency transport</li>
                  <li>📦 E-commerce last-mile delivery</li>
                  <li>🏔️ Remote area logistics</li>
                  <li>🌾 Farm-to-market connectivity</li>
                </ul>
              </div>
            </div>

            {/* Mission Image */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">In Action</h4>
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
                The Titan X1 in an agricultural mission, delivering seeds and farming inputs to remote villages. Our drones bridge the gap between suppliers and farmers, ensuring timely delivery of critical resources.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-gray-200 my-20"></div>

        {/* Agri X1 Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aeropex Agri X1
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Advanced agricultural drone for precision spraying and crop management
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative aspect-[16/9] bg-gradient-to-br from-green-500/10 to-[#FA8100]/10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763214336573.png?width=8000&height=8000&resize=contain"
                alt="Aeropex Agri X1 Agricultural Drone"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Technical Specs Grid */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Technical Specifications
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agriSpecs.map((spec, index) => (
                <Card
                  key={index}
                  className="p-6 border-2 hover:border-green-600 transition-all hover:shadow-lg group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-600/10 group-hover:bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                      <spec.icon className="text-green-600 group-hover:text-white transition-colors" size={24} />
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

          {/* Features & Applications */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Key Features */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Advanced Features</h4>
              <div className="space-y-4">
                {agriFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
            </div>

            {/* Smart Applications */}
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Smart Applications</h4>
              <div className="space-y-6">
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200">
                  <h5 className="text-lg font-bold text-gray-900 mb-3">Precision Agriculture</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li>🌾 Pesticide & herbicide spraying</li>
                    <li>💧 Fertilizer application</li>
                    <li>🌱 Orchard & row crop support</li>
                    <li>📊 Crop health monitoring (optional sensor)</li>
                  </ul>
                </div>

                <div className="p-6 bg-gradient-to-br from-[#2139A0]/5 to-[#FA8100]/5 rounded-2xl">
                  <h5 className="text-lg font-bold text-gray-900 mb-3">Built for Indian Farms</h5>
                  <p className="text-gray-700 mb-3">
                    Designed specifically for Indian agricultural conditions with rugged all-weather construction and optimized for diverse terrain.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Dust & water resistant (IP67)</li>
                    <li>✅ Real-time field analytics via mobile/web</li>
                    <li>✅ Quick refilling for nonstop operations</li>
                    <li>✅ Eco-friendly drift minimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}