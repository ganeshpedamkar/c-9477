
import { Card } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Their expertise in loan planning helped us save significantly on interest costs while maintaining optimal liquidity.",
      author: "Business Owner",
      role: "Corporate Client"
    },
    {
      quote: "The strategic tax planning advice for our property loan resulted in substantial savings through proper structuring.",
      author: "Property Investor",
      role: "Real Estate Client"
    },
    {
      quote: "Their comprehensive approach to security management helped us secure better terms with our lenders.",
      author: "Finance Director",
      role: "Enterprise Client"
    },
    // Adding duplicates for continuous scrolling effect
    {
      quote: "Their expertise in loan planning helped us save significantly on interest costs while maintaining optimal liquidity.",
      author: "Business Owner",
      role: "Corporate Client"
    },
    {
      quote: "The strategic tax planning advice for our property loan resulted in substantial savings through proper structuring.",
      author: "Property Investor",
      role: "Real Estate Client"
    },
    {
      quote: "Their comprehensive approach to security management helped us secure better terms with our lenders.",
      author: "Finance Director",
      role: "Enterprise Client"
    }
  ];

  const [scrollPosition, setScrollPosition] = useState(0);
  const testimonialRef = useScrollAnimation(0.1, 0); // Reduced threshold to 0.1 and delay to 0

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      setScrollPosition((prev) => {
        const itemWidth = window.innerWidth >= 768 ? 33.33 : 100; // percentage width of each item
        const newPosition = prev + 0.05; // Reduced speed for smoother scrolling
        
        // Reset position when all items have scrolled
        if (newPosition >= (testimonials.length / 2) * itemWidth) {
          return 0;
        }
        return newPosition;
      });
    }, 20); // Update every 20ms for smooth animation

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden" ref={testimonialRef}>
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Client Success Stories
        </h2>
        <p className="text-xl text-white/60 text-center mb-12 max-w-2xl mx-auto">
          Join our satisfied clients who have benefited from our expert loan planning services
        </p>
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${scrollPosition}%)`,
              width: `${testimonials.length * (window.innerWidth >= 768 ? 33.33 : 100)}%`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="px-4 flex-shrink-0"
                style={{ width: window.innerWidth >= 768 ? '33.33%' : '100%' }}
              >
                <Card className="p-6 hover-lift glass-effect h-full max-w-[90vw] md:max-w-none mx-auto">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white/80 mb-4 italic text-base md:text-lg break-words">{testimonial.quote}</p>
                  <div className="text-white font-semibold">{testimonial.author}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
