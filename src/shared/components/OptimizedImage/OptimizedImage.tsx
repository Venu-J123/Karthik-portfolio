/**
 * Optimized Image component with lazy loading and performance enhancements
 */

import { useState, useEffect, useRef, memo } from 'react';
import { Box, Skeleton } from '@mui/material';
import { createLazyObserver } from '../../utils/performance.utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  borderRadius?: string | number;
  loading?: 'lazy' | 'eager';
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const OptimizedImageComponent = ({
  src,
  alt,
  width = '100%',
  height = 'auto',
  objectFit = 'cover',
  borderRadius = 0,
  loading = 'lazy',
  fallbackSrc,
  onLoad,
  onError,
  className,
  style,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string | null>(loading === 'eager' ? src : null);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (loading === 'lazy' && imgRef.current && !currentSrc) {
      observerRef.current = createLazyObserver((entry) => {
        setCurrentSrc(src);
        observerRef.current?.disconnect();
      });

      observerRef.current.observe(imgRef.current);

      return () => {
        observerRef.current?.disconnect();
      };
    }
  }, [src, loading, currentSrc]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    if (fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(false);
    }
    onError?.();
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        borderRadius,
      }}
      className={className}
    >
      {!isLoaded && !hasError && (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            bgcolor: 'rgba(255, 255, 255, 0.05)',
          }}
        />
      )}
      
      <img
        ref={imgRef}
        src={currentSrc || undefined}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        loading={loading}
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
          display: hasError ? 'none' : 'block',
          ...style,
        }}
      />
      
      {hasError && !fallbackSrc && (
        <Box
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(255, 255, 255, 0.05)',
            color: 'rgba(255, 255, 255, 0.5)',
          }}
        >
          Failed to load image
        </Box>
      )}
    </Box>
  );
};

export const OptimizedImage = memo(OptimizedImageComponent);
