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
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const lockPositionRef = useRef(0);
  
  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    // Set initial height to create scroll space
    section.style.height = sectionHeight;
    
    // Set up IntersectionObserver to detect when section comes into view
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setIsInView(isIntersecting);
        console.log(`Section in view: ${isIntersecting}`);
        
        if (isIntersecting && activeImage === 0) {
          setIsLocked(true);
          lockPositionRef.current = window.scrollY;
        }
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
      
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionTop = rect.top;
      
      if (isLocked) {
        const scrollDelta = window.scrollY - lockPositionRef.current;
        const maxScrollDelta = viewportHeight * 1.5;
        const newProgress = Math.min(Math.max(scrollDelta / maxScrollDelta, 0), 1);
        setScrollProgress(newProgress);
        
        const newImageIndex = Math.min(Math.floor(newProgress * totalImages), totalImages - 1);
        
        if (newImageIndex !== activeImage) {
          console.log(`Setting active image to ${newImageIndex}, progress: ${newProgress}`);
          setActiveImage(newImageIndex);
        }
        
        if (newProgress >= 0.99 && activeImage === totalImages - 1) {
          setIsLocked(false);
          console.log('Unlocking vertical scroll');
        } else {
          window.scrollTo(0, lockPositionRef.current);
        }
      } 
      else if (sectionTop < viewportHeight * 0.5 && sectionTop > -viewportHeight * 0.5) {
        if (activeImage === 0) {
          setIsLocked(true);
          lockPositionRef.current = window.scrollY;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sectionObserver.disconnect();
    };
  }, [totalImages, triggerThreshold, sectionHeight, isInView, activeImage, isLocked]);

  return { sectionRef, contentRef, activeImage, isInView, isLocked, scrollProgress };
};
