
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import LoanAnalysisCarousel from "@/components/LoanAnalysisCarousel";

const Index = () => {
  const featuresRef = useScrollAnimation(0.4, 100);
  const analysisRef = useScrollAnimation(0.4, 200);
  const carouselRef = useScrollAnimation(0.1, 0); // Faster animation for carousel
  const testimonialsRef = useScrollAnimation(0.4, 200);
  const downloadRef = useScrollAnimation(0.4, 300);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <div ref={featuresRef}>
        <Features />
      </div>
      
      {/* Loan Cost vs. Benefit Analysis Section */}
      <div ref={analysisRef} className="py-20 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Loan Cost vs. Benefit Analysis
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
            Compare your ongoing Home Loan / LAP loan rates with the best rate and explore its impact on your savings and financials.
          </p>
          
          {/* Loan Analysis Carousel */}
          <div ref={carouselRef} className="transform transition-all duration-500 max-w-4xl mx-auto">
            <LoanAnalysisCarousel />
          </div>
          
          <Button
            onClick={() => window.open('https://btcalculator.profound.org.in/', '_blank')}
            className="px-8 py-6 text-lg bg-accent hover:bg-accent/90 flex items-center gap-2 mx-auto mt-8"
          >
            <Calculator className="w-5 h-5" />
            Calculate Savings
          </Button>
        </div>
      </div>
      
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      
      <div ref={downloadRef}>
        <Download />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
