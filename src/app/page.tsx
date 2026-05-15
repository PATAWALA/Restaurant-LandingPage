import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Problems from "@/components/Problems";
import RestaurantExamples from "@/components/RestaurantExamples";
import Comparison from "@/components/Comparison";
import Benefits from "@/components/Benefits";
import Opportunities from "@/components/Opportunities";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Problems />
        <Comparison />
        <Benefits />
        <Opportunities />
        <Testimonials />
        <RestaurantExamples />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}