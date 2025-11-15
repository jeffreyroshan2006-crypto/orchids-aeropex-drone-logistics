"use client";

import { Card } from "./ui/card";
import { Package, MapPin, Truck, CheckCircle, Clock, Shield } from "lucide-react";

export default function Flyzonow() {
  const deliverySteps = [
    {
      icon: Package,
      title: "Place Order",
      description: "Book your delivery through our app or partner platforms",
      step: "01",
    },
    {
      icon: MapPin,
      title: "Route Optimization",
      description: "AI calculates the fastest, safest path to your destination",
      step: "02",
    },
    {
      icon: Truck,
      title: "Drone Dispatch",
      description: "Titan X1 loads cargo and takes off autonomously",
      step: "03",
    },
    {
      icon: CheckCircle,
      title: "Secure Delivery",
      description: "GPS-guided landing with real-time tracking",
      step: "04",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Average delivery time of 30 minutes, regardless of terrain or traffic",
    },
    {
      icon: Shield,
      title: "Ultra Reliable",
      description: "98% on-time delivery rate with real-time tracking and updates",
    },
    {
      icon: Package,
      title: "Versatile Cargo",
      description: "From medical supplies to e-commerce packages up to 50kg",
    },
  ];

  const useCases = [
    {
      title: "Medical Emergency",
      description: "Urgent medicine & blood delivery to remote clinics",
      emoji: "🏥",
      color: "from-red-500 to-pink-600",
    },
    {
      title: "E-Commerce",
      description: "Last-mile delivery for online orders",
      emoji: "📦",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Agriculture",
      description: "Seeds, fertilizers, and tools to farms",
      emoji: "🌾",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Food Delivery",
      description: "Hot meals and groceries in minutes",
      emoji: "🍔",
      color: "from-orange-500 to-yellow-600",
    },
  ];

  return (
    <section id="flyzonow" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#FA8100]/10 rounded-full">
            <span className="text-[#FA8100] text-sm font-semibold">Delivery Service</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Flyzonow: Delivery at the Speed of Flight
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our revolutionary drone delivery service that connects India like never before. Fast, reliable, and accessible to all.
          </p>
        </div>

        {/* Delivery Process */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliverySteps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="p-6 h-full border-2 hover:border-[#2139A0] transition-all hover:shadow-lg group">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-[#2139A0] to-[#FA8100] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                  <div className="w-14 h-14 bg-[#2139A0]/10 group-hover:bg-[#2139A0] rounded-xl flex items-center justify-center mb-4 mt-2 transition-colors">
                    <step.icon className="text-[#2139A0] group-hover:text-white transition-colors" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </Card>
                {/* Connector Arrow */}
                {index < deliverySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="text-[#FA8100] text-2xl">→</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Flyzonow?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8 text-center border-2 hover:border-[#FA8100] transition-all hover:shadow-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2139A0] to-[#FA8100] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-white" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-gradient-to-br from-[#2139A0]/5 to-[#FA8100]/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Serving Every Need
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${useCase.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {useCase.emoji}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{useCase.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#2139A0] to-[#FA8100] rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Experience the Future of Delivery?
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Flyzonow for their delivery needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-[#2139A0] rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Get Started Today
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold hover:bg-white/20 transition-colors inline-block"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
