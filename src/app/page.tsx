import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TitanX1 from "@/components/TitanX1";
import Flyzo from "@/components/Flyzo";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <TitanX1 />
      <Flyzo />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}