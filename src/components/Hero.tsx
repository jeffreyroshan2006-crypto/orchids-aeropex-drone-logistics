"use client";

import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1763210960690.png?width=8000&height=8000&resize=contain')",
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2139A0]/90 via-[#2139A0]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-[#FA8100]/20 backdrop-blur-sm border border-[#FA8100]/30 rounded-full">
            <span className="text-white text-sm font-semibold">
              🚁 Revolutionizing Drone Logistics in India
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Future of
            <span className="block text-[#FA8100]">Fast, Reliable, Efficient Deliveries and Agricultural Logistics Drones</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl">
            Aeropex Technologies is pioneering autonomous drone logistics with the Titan X1 hexacopter and Flyzo rapid delivery service, transforming how goods reach remote and urban areas across India.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-[#FA8100] hover:bg-[#e07400] text-white font-semibold text-lg px-8 py-6 group"
            >
              <Link href="#titan-x1">
                Explore Titan X1
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#2139A0] font-semibold text-lg px-8 py-6 group"
            >
              <Link href="#flyzo">
                Learn About Flyzo
                <Play className="ml-2" size={20} />
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8">
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">50kg+</div>
              <div className="text-sm text-white/70">Payload Capacity</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">200km</div>
              <div className="text-sm text-white/70">Max Range</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">5-30min</div>
              <div className="text-sm text-white/70">Avg Delivery</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}