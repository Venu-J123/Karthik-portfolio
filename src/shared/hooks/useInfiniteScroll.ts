import { useEffect, useRef, useCallback } from 'react';

interface UseInfiniteScrollOptions {
  speed?: number; // Pixels per frame
  pauseOnHover?: boolean;
}

export const useInfiniteScroll = (
  containerRef: React.RefObject<HTMLDivElement | null>,
  options: UseInfiniteScrollOptions = {}
) => {
  const { speed = 0.5, pauseOnHover = true } = options;
  const animationFrameRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  // Wrap scroll position instantly to maintain the infinite illusion
  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const singleCopyWidth = container.scrollWidth / 3;
    if (singleCopyWidth > 0) {
      if (container.scrollLeft >= singleCopyWidth * 2) {
        // If we scrolled past the second copy, jump back by one copy
        container.scrollLeft -= singleCopyWidth;
      } else if (container.scrollLeft <= singleCopyWidth) {
        // If we scrolled before the second copy, jump forward by one copy
        container.scrollLeft += singleCopyWidth;
      }
    }
  }, [containerRef]);

  const startScrolling = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const run = () => {
      if (!isPausedRef.current) {
        container.scrollLeft += speed;
      }
      animationFrameRef.current = requestAnimationFrame(run);
    };

    animationFrameRef.current = requestAnimationFrame(run);
  }, [containerRef, speed]);

  const stopScrolling = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      isPausedRef.current = true;
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      isPausedRef.current = false;
    }
  }, [pauseOnHover]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial scroll position to the start of the second copy (middle section)
    const initScroll = () => {
      const singleCopyWidth = container.scrollWidth / 3;
      if (singleCopyWidth > 0 && container.scrollLeft === 0) {
        container.scrollLeft = singleCopyWidth;
      }
    };

    // Run scroll initialization after layout stabilizes
    const timeoutId = setTimeout(initScroll, 100);

    // Event listeners
    container.addEventListener('scroll', handleScroll, { passive: true });
    
    if (pauseOnHover) {
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('touchstart', handleMouseEnter, { passive: true });
      container.addEventListener('touchend', handleMouseLeave, { passive: true });
    }

    startScrolling();

    return () => {
      clearTimeout(timeoutId);
      stopScrolling();
      if (container) {
        container.removeEventListener('scroll', handleScroll);
        if (pauseOnHover) {
          container.removeEventListener('mouseenter', handleMouseEnter);
          container.removeEventListener('mouseleave', handleMouseLeave);
          container.removeEventListener('touchstart', handleMouseEnter);
          container.removeEventListener('touchend', handleMouseLeave);
        }
      }
    };
  }, [containerRef, pauseOnHover, startScrolling, stopScrolling, handleScroll, handleMouseEnter, handleMouseLeave]);

  return {
    pause: () => { isPausedRef.current = true; },
    resume: () => { isPausedRef.current = false; }
  };
};
