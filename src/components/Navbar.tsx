
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const Navbar = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white bg-gray-900 hover:bg-gray-800">PROFOUND</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Deposit</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">About us</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Contact us</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Pricing</a>
          <a href="https://btcalculator.profound.org.in/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="text-white border-white/20 bg-blue-700 hover:bg-blue-600">Calculator</Button>
          </a>
          <Button className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]">
            Sign in
            <LogIn className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </nav>;
};

export default Navbar;
