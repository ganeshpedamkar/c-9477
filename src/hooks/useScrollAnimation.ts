
import { useEffect, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.4, delay = 0) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add visible debugging to see when this is triggered
          console.log(`Element intersected with threshold ${threshold}`);
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '20px 0px', // Add some margin to trigger a bit earlier
      }
    );

    if (ref.current) {
      ref.current.classList.add('opacity-0', 'translate-y-8');
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);

  return ref;
};
