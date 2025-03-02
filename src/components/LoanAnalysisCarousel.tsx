
import React from 'react';
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LoanAnalysisCarousel = () => {
  const images = [
    "/lovable-uploads/35089942-d73c-4857-8663-8b09449246a9.png", 
    "/lovable-uploads/418c9505-da9b-4a58-8a6e-831e849f8733.png", 
    "/lovable-uploads/f3ebc0d7-b4a4-4d09-a149-d9a8a8ea4664.png", 
    "/lovable-uploads/97379b64-58c1-42c2-9ad6-7e013b8665f9.png", 
    "/lovable-uploads/fffaa06e-eb86-46b4-a66b-128eff971a24.png"
  ];
  
  // Create refs for each image with different thresholds
  const image1Ref = useScrollAnimation(0.1, 0);
  const image2Ref = useScrollAnimation(0.15, 100);
  const image3Ref = useScrollAnimation(0.2, 200);
  const image4Ref = useScrollAnimation(0.25, 300);
  const image5Ref = useScrollAnimation(0.3, 400);
  
  // Store refs in an array for easier access
  const imageRefs = [image1Ref, image2Ref, image3Ref, image4Ref, image5Ref];

  return (
    <div className="w-full space-y-16 py-10">
      {images.map((src, index) => (
        <div 
          key={index} 
          ref={imageRefs[index]}
          className="opacity-0 translate-y-8 mx-auto max-w-4xl"
        >
          <div className="p-2">
            <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-accent/20">
              <img 
                src={src} 
                alt={`Loan Analysis Image ${index + 1}`} 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          <div className="text-center mt-4 text-white/70">
            <p className="text-lg font-medium">Image {index + 1} of {images.length}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoanAnalysisCarousel;
