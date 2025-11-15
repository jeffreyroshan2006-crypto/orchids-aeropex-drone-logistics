"use client";

import { Card } from "./ui/card";
import { ShoppingBag, Pill, Package, Zap, Clock, Leaf, MapPin, Smartphone, CheckCircle, Shield } from "lucide-react";

export default function Flyzo() {
  const deliverySteps = [
    {
      icon: Smartphone,
      title: "Browse & Order",
      description: "Open the Flyzo app, select items from partnered stores/fulfillment centers",
      step: "01",
    },
    {
      icon: Zap,
      title: "Autonomous Dispatch",
      description: "Our AI assigns the fastest Titan X1 drone from the nearest hub",
      step: "02",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Watch your order fly in live GPS view on the app",
      step: "03",
    },
    {
      icon: CheckCircle,
      title: "Safe Handover",
      description: "Drone lands autonomously, delivers to your doorstep or pickup point",
      step: "04",
    },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Ultra-Fast",
      description: "Delivery in 8–20 minutes (intra-city) vs 30–60 min traditional services",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Zero-emission autonomous drones, zero traffic congestion",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Shield,
      title: "24/7 Operation",
      description: "Available day & night, rain or shine (weather permitting)",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const categories = [
    {
      title: "Food & Groceries",
      description: "Fresh, fast delivery in 8–15 minutes",
      emoji: "🍔",
      color: "from-orange-500 to-red-600",
    },
    {
      title: "Medicines & Medical",
      description: "Critical medicines within the hour",
      emoji: "💊",
      color: "from-red-500 to-pink-600",
    },
    {
      title: "E-commerce Products",
      description: "Books, electronics, fashion delivered fast",
      emoji: "📦",
      color: "from-blue-500 to-indigo-600",
    },
    {
      title: "Logistics & Parcels",
      description: "B2B same-day delivery solutions",
      emoji: "🚚",
      color: "from-gray-600 to-gray-800",
    },
    {
      title: "Emergency Essentials",
      description: "Water, batteries, emergency kits on demand",
      emoji: "⚡",
      color: "from-yellow-500 to-orange-600",
    },
  ];

  const whyFlyzo = [
    {
      icon: Zap,
      title: "Lightning Speed",
      stat: "8-20 min",
      description: "Average delivery time across metros to tier-2 cities",
    },
    {
      icon: Leaf,
      title: "Zero Emissions",
      stat: "100%",
      description: "Electric autonomous drones with no carbon footprint",
    },
    {
      icon: Package,
      title: "Heavy Payload",
      stat: "45kg",
      description: "Titan X1 capacity for multiple orders in one trip",
    },
    {
      icon: MapPin,
      title: "Wide Coverage",
      stat: "150km",
      description: "Range connecting metros to rural areas seamlessly",
    },
  ];

  return (
    <section id="flyzo" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-[#FA8100]/10 rounded-full">
            <span className="text-[#FA8100] text-sm font-semibold">⚡ Instant Delivery Platform</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Flyzo – The Future of Instant Delivery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Revolutionary on-demand aerial delivery platform bringing ultra-fast, autonomous drone logistics to every corner of India. Like Zepto, Zomato, and Blinkit rolled into one—but powered by autonomous Titan X1 heavy-lift drones.
          </p>
        </div>

        {/* What You Can Order */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What You Can Order
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer group border-2 border-transparent hover:border-[#FA8100]"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                  {category.emoji}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{category.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
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

        {/* Why Flyzo Stats */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Flyzo?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyFlyzo.map((item, index) => (
              <Card key={index} className="p-8 text-center border-2 hover:border-[#FA8100] transition-all hover:shadow-lg group">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2139A0] to-[#FA8100] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-[#2139A0] mb-2">{item.stat}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group">
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="relative p-8 text-white">
                  <benefit.icon className="mb-4" size={40} />
                  <h4 className="text-2xl font-bold mb-3">{benefit.title}</h4>
                  <p className="leading-relaxed text-white/90">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Powered by Titan X1 */}
        <div className="bg-gradient-to-br from-[#2139A0] to-[#1a2d7a] rounded-3xl p-8 md:p-12 text-white mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-white text-sm font-semibold">🚁 Powered by Titan X1</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                The Backbone of India's Next-Gen Logistics
              </h3>
              <p className="text-lg text-white/90 mb-6 leading-relaxed">
                Heavy-lift autonomous hexacopter drones with up to 45kg payload capacity, 150km range, and redundant safety systems—ensuring your deliveries are fast, safe, and reliable.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-[#FA8100] flex-shrink-0" size={24} />
                  <span>Autonomous AI-powered navigation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-[#FA8100] flex-shrink-0" size={24} />
                  <span>Redundant safety systems for fail-safe operations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="text-[#FA8100] flex-shrink-0" size={24} />
                  <span>All-weather capability with real-time monitoring</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763210960690.png?width=800&height=800&resize=contain"
                  alt="Titan X1 Drone"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#FA8100] to-[#ff9933] rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Download Flyzo Today
            </h3>
            <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
              The future of delivery has taken flight. Experience ultra-fast, eco-friendly, and affordable delivery across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-[#FA8100] rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-block shadow-lg"
              >
                Get Started Now
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white text-white rounded-xl font-semibold hover:bg-white/20 transition-colors inline-block"
              >
                Request Partnership
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
