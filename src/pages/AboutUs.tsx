
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutUs = () => {
  const contentRef = useScrollAnimation(0.4, 100);
  const consultantRef = useScrollAnimation(0.4, 100);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">About Us</h1>
          
          <div ref={contentRef} className="space-y-8 text-white/80 mb-16">
            <p className="text-lg leading-relaxed">
              At <span className="text-white font-semibold">PROFOUND</span>, we are committed to transforming the way borrowers plan and manage their loans. Our expertise lies in structuring loans strategically to maximize benefits in terms of cost efficiency, flexibility, liquidity management, tax optimization, security planning, and risk mitigation.
            </p>
            
            <p className="text-lg leading-relaxed">
              We believe that a well-planned loan is not just about securing funds but about aligning financial commitments with long-term goals. Our approach ensures borrowers minimize costs, optimize tax outflows, and safeguard their financial future through meticulous worst-case scenario planning and structured ownership strategies.
            </p>
            
            <p className="text-lg leading-relaxed">
              <span className="text-white font-semibold">PROFOUND</span> is more than just a consultancy—it's a collective of passionate professionals from diverse fields, united by a shared vision to simplify and streamline loan processes. We act as catalysts, guiding clients with expert insights, educating them on best practices, and implementing standardized processes to ensure seamless, efficient, and consistent results.
            </p>
            
            <p className="text-xl font-medium text-white italic text-center">
              With <span className="text-white font-bold">PROFOUND</span>, you don't just take a loan—you take a well-planned financial decision.
            </p>
          </div>
          
          <div ref={consultantRef} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Principal Consultant</h2>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="rounded-full bg-blue-600/20 p-1">
                <div className="w-40 h-40 rounded-full bg-blue-700/30 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">GP</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">CA. Ganesh Rajaram Pedamkar</h3>
                
                <div className="space-y-2 text-white/80">
                  <p className="text-lg"><span className="font-semibold text-white">Qualification:</span> Chartered Accountant, Certified Associate of Indian Institute of Bankers, Bachelor of Commerce from MCC.</p>
                  
                  <p className="text-lg">
                    The <span className="text-white font-semibold">PROFOUND</span> is the brain child of Mr. Ganesh Pedamkar, He is having 21+ post qualification experience in Loan planning and execution field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
