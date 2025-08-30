import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import IdeasShowcase from "@/components/IdeasShowcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <IdeasShowcase />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
