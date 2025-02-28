import { Button } from "@/components/ui/button";
import { PhoneCall, Menu, X } from "lucide-react";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleConnect = () => {
    window.location.href = "tel:+919769106890";
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white bg-neutral-950">PROFOUND</div>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white p-2" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white/80 hover:text-white transition-colors">Home Loan</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">About us</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Contact us</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a>
            <a href="https://btcalculator.profound.org.in/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-white border-white/20 bg-blue-700 hover:bg-blue-600">Calculator</Button>
            </a>
            <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]" onClick={handleConnect}>
              Connect
              <PhoneCall className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden pt-4`}>
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-white/80 hover:text-white transition-colors py-2">Deposit</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors py-2">About us</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors py-2">Contact us</a>
            <a href="#" className="text-white/80 hover:text-white transition-colors py-2">Pricing</a>
            <a href="https://btcalculator.profound.org.in/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full text-white border-white/20 bg-blue-700 hover:bg-blue-600">
                Calculator
              </Button>
            </a>
            <Button className="w-full bg-[#F2FF44] text-black hover:bg-[#E2EF34]" onClick={handleConnect}>
              Connect
              <PhoneCall className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navbar;