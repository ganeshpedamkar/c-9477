
import { useEffect, useRef, useState } from 'react';

interface UseHorizontalScrollSequenceProps {
  totalImages: number;
  triggerThreshold?: number;
  sectionHeight?: string;
}

export const useHorizontalScrollSequence = ({
  totalImages,
  triggerThreshold = 0.2,
  sectionHeight = '300vh',
}: UseHorizontalScrollSequenceProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const lockPositionRef = useRef(0);
  const bodyStyleRef = useRef<CSSStyleDeclaration['overflow']>('');
  
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
          // Save current body overflow style
          bodyStyleRef.current = document.body.style.overflow;
          // Lock body scroll
          document.body.style.overflow = 'hidden';
          // Apply fixed positioning to content
          content.classList.add('scroll-locked');
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
        const wheel = window.event as WheelEvent;
        const delta = wheel ? wheel.deltaY : 20; // Default to positive delta (scroll down) if not available
        const scrollDirection = delta > 0 ? 1 : -1; // 1 for down, -1 for up
        
        // Calculate progress based on accumulated scroll delta
        let newProgress = scrollProgress + (scrollDirection * 0.05);
        newProgress = Math.max(0, Math.min(1, newProgress)); // Clamp between 0 and 1
        setScrollProgress(newProgress);
        
        const newImageIndex = Math.min(Math.floor(newProgress * totalImages), totalImages - 1);
        
        if (newImageIndex !== activeImage) {
          console.log(`Setting active image to ${newImageIndex}, progress: ${newProgress}`);
          setActiveImage(newImageIndex);
        }
        
        if (newProgress >= 0.99 && activeImage === totalImages - 1) {
          setIsLocked(false);
          console.log('Unlocking vertical scroll');
          // Restore body scroll
          document.body.style.overflow = bodyStyleRef.current;
          // Remove fixed positioning from content
          content.classList.remove('scroll-locked');
          // Ensure we scroll past this section
          window.scrollTo(0, lockPositionRef.current + section.offsetHeight * 0.6);
        }
      } 
      else if (sectionTop < viewportHeight * 0.5 && sectionTop > -viewportHeight * 0.5) {
        if (activeImage === 0 && !isLocked) {
          setIsLocked(true);
          lockPositionRef.current = window.scrollY;
          // Save current body overflow style
          bodyStyleRef.current = document.body.style.overflow;
          // Lock body scroll
          document.body.style.overflow = 'hidden';
          // Apply fixed positioning to content
          content.classList.add('scroll-locked');
        }
      }
    };

    // Use wheel event for better control
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('scroll', handleScroll);
      sectionObserver.disconnect();
      // Ensure body overflow is restored when component unmounts
      document.body.style.overflow = bodyStyleRef.current;
    };
  }, [totalImages, triggerThreshold, sectionHeight, isInView, activeImage, isLocked, scrollProgress]);

  return { sectionRef, contentRef, activeImage, isInView, isLocked, scrollProgress };
};
