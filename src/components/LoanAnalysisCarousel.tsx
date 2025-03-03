import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const LoanAnalysisCarousel = () => {
  const [activeImage, setActiveImage] = useState(0);
  const images = ["/lovable-uploads/35089942-d73c-4857-8663-8b09449246a9.png", "/lovable-uploads/418c9505-da9b-4a58-8a6e-831e849f8733.png", "/lovable-uploads/f3ebc0d7-b4a4-4d09-a149-d9a8a8ea4664.png", "/lovable-uploads/97379b64-58c1-42c2-9ad6-7e013b8665f9.png", "/lovable-uploads/fffaa06e-eb86-46b4-a66b-128eff971a24.png"];
  useEffect(() => {
    // Auto-advance carousel every 4 seconds
    const interval = setInterval(() => {
      setActiveImage(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);
  return <div className="w-full my-10">
      <Carousel className="w-full" opts={{
      align: "center",
      loop: true
    }} setApi={api => {
      if (api) {
        api.on('select', () => {
          setActiveImage(api.selectedScrollSnap());
        });
      }
    }}>
        <CarouselContent>
          {images.map((src, index) => <CarouselItem key={index} className="md:basis-3/4 lg:basis-2/3">
              <div className="p-2">
                <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-accent/20">
                  <img src={src} alt={`Loan Analysis Image ${index + 1}`} className="w-full h-auto object-scale-down" />
                </div>
              </div>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-black/40 hover:bg-black/60 text-white border-none" />
        <CarouselNext className="right-4 bg-black/40 hover:bg-black/60 text-white border-none" />
      </Carousel>
      
      <div className="flex justify-center mt-6 gap-2">
        {images.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-colors ${activeImage === index ? 'bg-accent' : 'bg-gray-300'}`} onClick={() => setActiveImage(index)} />)}
      </div>
    </div>;
};
export default LoanAnalysisCarousel;