import React from 'react';
import { useHorizontalScrollSequence } from '@/hooks/useHorizontalScrollSequence';

const LoanAnalysisCarousel = () => {
  const images = [
    "/lovable-uploads/35089942-d73c-4857-8663-8b09449246a9.png", 
    "/lovable-uploads/418c9505-da9b-4a58-8a6e-831e849f8733.png", 
    "/lovable-uploads/f3ebc0d7-b4a4-4d09-a149-d9a8a8ea4664.png", 
    "/lovable-uploads/97379b64-58c1-42c2-9ad6-7e013b8665f9.png", 
    "/lovable-uploads/fffaa06e-eb86-46b4-a66b-128eff971a24.png"
  ];
  
  const { sectionRef, activeImage, isInView } = useHorizontalScrollSequence({
    totalImages: images.length,
    sectionHeight: '200vh', // Creates enough scroll space
  });

  return (
    <div ref={sectionRef} className="w-full relative">
      {/* Sticky container to keep images in view while scrolling */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-5xl w-full relative h-[60vh] overflow-hidden rounded-xl shadow-2xl">
          {/* Progress indicator */}
          <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
            {images.map((_, index) => (
              <div 
                key={index}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index <= activeImage ? 'bg-accent' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/20 z-10 pointer-events-none"></div>
          
          {/* Image container with horizontal scrolling effect */}
          <div 
            className="absolute inset-0 flex transition-transform duration-1000 ease-in-out"
            style={{ 
              transform: `translateX(-${activeImage * (100 / images.length)}%)`,
              width: `${images.length * 100}%` 
            }}
          >
            {images.map((src, index) => (
              <div 
                key={index} 
                className="relative flex-1"
                style={{ opacity: index <= activeImage ? 1 : 0.3, transition: 'opacity 0.5s ease-in-out' }}
              >
                <img 
                  src={src} 
                  alt={`Loan Analysis Image ${index + 1}`} 
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanAnalysisCarousel;
