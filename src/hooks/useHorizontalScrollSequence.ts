
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
  const initialScrollYRef = useRef(0);
  const bodyStyleRef = useRef<string>('');
  
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
        
        if (isIntersecting && activeImage === 0 && !isLocked) {
          lockScroll();
        }
      },
      {
        threshold: triggerThreshold,
        rootMargin: '0px',
      }
    );
    
    sectionObserver.observe(section);

    const lockScroll = () => {
      setIsLocked(true);
      initialScrollYRef.current = window.scrollY;
      lockPositionRef.current = window.scrollY;
      
      // Save current body overflow style and set to hidden
      bodyStyleRef.current = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      
      // Apply fixed positioning to content
      if (content) {
        content.style.position = 'fixed';
        content.style.top = '0';
        content.style.left = '0';
        content.style.width = '100%';
        content.style.zIndex = '1000';
      }
    };
    
    const unlockScroll = () => {
      setIsLocked(false);
      
      // Restore body scroll style
      document.body.style.overflow = bodyStyleRef.current;
      
      // Remove fixed positioning from content
      if (content) {
        content.style.position = '';
        content.style.top = '';
        content.style.left = '';
        content.style.width = '';
        content.style.zIndex = '';
      }
      
      // Scroll to where we would have been after the sequence
      window.scrollTo(0, lockPositionRef.current + section.offsetHeight * 0.6);
    };

    // Handle wheel events to control horizontal scrolling while locked
    const handleWheel = (e: WheelEvent) => {
      if (!isLocked || !isInView) return;
      
      e.preventDefault();
      
      // Calculate progress based on wheel delta
      const delta = e.deltaY;
      const scrollDirection = delta > 0 ? 1 : -1; // 1 for down, -1 for up
      
      // Calculate new progress value
      let newProgress = scrollProgress + (scrollDirection * 0.05);
      newProgress = Math.max(0, Math.min(1, newProgress)); // Clamp between 0 and 1
      setScrollProgress(newProgress);
      
      // Calculate new active image based on progress
      const newImageIndex = Math.floor(newProgress * totalImages);
      if (newImageIndex !== activeImage && newImageIndex < totalImages) {
        setActiveImage(newImageIndex);
      }
      
      // Check if we've reached the end of the sequence
      if (newProgress >= 0.99 && activeImage >= totalImages - 1) {
        unlockScroll();
      }
    };

    // Add wheel event listener with passive: false to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      sectionObserver.disconnect();
      
      // Ensure body overflow is restored when component unmounts
      document.body.style.overflow = bodyStyleRef.current || '';
    };
  }, [totalImages, triggerThreshold, sectionHeight, isInView, activeImage, isLocked, scrollProgress]);

  return { sectionRef, contentRef, activeImage, isInView, isLocked, scrollProgress };
};
