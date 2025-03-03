
import { useEffect, useRef, useState } from 'react';

interface UseHorizontalScrollSequenceProps {
  totalImages: number;
  triggerThreshold?: number;
  sectionHeight?: string;
}

export const useHorizontalScrollSequence = ({
  totalImages,
  triggerThreshold = 0.2,
  sectionHeight = '100vh',
}: UseHorizontalScrollSequenceProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Set initial height to create scroll space
    section.style.height = sectionHeight;
    
    // Set up IntersectionObserver to detect when section comes into view
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        console.log(`Section in view: ${entry.isIntersecting}`);
      },
      {
        threshold: triggerThreshold,
        rootMargin: '0px',
      }
    );
    
    sectionObserver.observe(section);

    // Scroll handler
    const handleScroll = () => {
      if (!section || !isInView) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate progress through the section (0 to 1)
      const startTriggerPoint = windowHeight * 0.5;
      const distanceScrolled = startTriggerPoint - sectionTop;
      const totalScrollDistance = sectionHeight;
      let scrollProgress = Math.min(Math.max(distanceScrolled / totalScrollDistance, 0), 1);
      
      // Map scroll progress to image index
      const imageIndex = Math.min(Math.floor(scrollProgress * totalImages), totalImages - 1);
      
      if (imageIndex !== activeImage) {
        console.log(`Setting active image to ${imageIndex}, progress: ${scrollProgress}`);
        setActiveImage(imageIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionObserver.disconnect();
    };
  }, [totalImages, triggerThreshold, sectionHeight, isInView, activeImage]);

  return { sectionRef, activeImage, isInView };
};
