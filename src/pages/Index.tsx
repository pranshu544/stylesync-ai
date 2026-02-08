import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Transformations from "@/components/landing/Transformations";
import Benefits from "@/components/landing/Benefits";
import PricingPreview from "@/components/landing/PricingPreview";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <HowItWorks />
      <Transformations />
      <Benefits />
      <PricingPreview />
    </main>
    <Footer />
  </div>
);

export default Index;
