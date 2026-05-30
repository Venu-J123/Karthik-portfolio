/**
 * Custom hook for optimized scroll handling
 */

import { useEffect, useState, useCallback, useRef } from 'react';
import { throttle } from '../utils/performance.utils';

interface UseOptimizedScrollOptions {
  throttleMs?: number;
  offset?: number;
}

export const useOptimizedScroll = (
  options: UseOptimizedScrollOptions = {}
) => {
  const { throttleMs = 100, offset = 50 } = options;
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Determine scroll direction
    setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
    lastScrollY.current = currentScrollY;
    
    // Update scrolled state
    setIsScrolled(currentScrollY > offset);
    
    // Calculate scroll progress
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (currentScrollY / totalHeight) * 100 : 0;
    setScrollProgress(Math.min(progress, 100));
  }, [offset]);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, throttleMs);
    
    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll, throttleMs]);

  return {
    isScrolled,
    scrollProgress,
    scrollDirection,
    scrollY: lastScrollY.current,
  };
};
