/**
 * Animation Components Library
 * All-in-one animation components for easy application across the portfolio
 * 
 * Usage:
 * import { FadeIn, SlideIn, ScaleIn, Stagger } from '@/shared/components/Animations';
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { ReactNode, Children, useState, useEffect, useRef } from 'react';
import { EASINGS } from '../../../config/animations.config';

// ============================================================================
// COMMON INTERFACES
// ============================================================================

interface BaseAnimationProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}

// ============================================================================
// 1. FADE IN ANIMATION
// ============================================================================

interface FadeInProps extends BaseAnimationProps {
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  direction = 'none',
  distance = 30,
  className,
  style,
  once = true,
}: FadeInProps) => {
  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: EASINGS.smooth,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 2. SLIDE IN ANIMATION
// ============================================================================

interface SlideInProps extends BaseAnimationProps {
  direction?: 'left' | 'right' | 'up' | 'down';
  distance?: number;
}

export const SlideIn = ({
  children,
  direction = 'left',
  delay = 0,
  duration = 0.6,
  distance = 100,
  className,
  style,
  once = true,
}: SlideInProps) => {
  const directionOffset = {
    left: { x: -distance },
    right: { x: distance },
    up: { y: -distance },
    down: { y: distance },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: EASINGS.smooth,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 3. SCALE IN ANIMATION
// ============================================================================

interface ScaleInProps extends BaseAnimationProps {
  initialScale?: number;
}

export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.5,
  initialScale = 0.8,
  className,
  style,
  once = true,
}: ScaleInProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: initialScale,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: EASINGS.smooth,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 4. ZOOM IN ANIMATION
// ============================================================================

interface ZoomInProps extends BaseAnimationProps {
  initialScale?: number;
}

export const ZoomIn = ({
  children,
  delay = 0,
  duration = 0.6,
  initialScale = 0.5,
  className,
  style,
  once = true,
}: ZoomInProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: initialScale,
        filter: 'blur(10px)',
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: EASINGS.smooth,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 5. ROTATE IN ANIMATION
// ============================================================================

interface RotateInProps extends BaseAnimationProps {
  rotation?: number;
}

export const RotateIn = ({
  children,
  delay = 0,
  duration = 0.7,
  rotation = -180,
  className,
  style,
  once = true,
}: RotateInProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        rotate: rotation,
        scale: 0.5,
      }}
      whileInView={{
        opacity: 1,
        rotate: 0,
        scale: 1,
      }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: EASINGS.smooth,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 6. STAGGER ANIMATION - Animates children sequentially
// ============================================================================

interface StaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  initialDelay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  className?: string;
  style?: React.CSSProperties;
  once?: boolean;
}

export const Stagger = ({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  direction = 'up',
  distance = 30,
  className,
  style,
  once = true,
}: StaggerProps) => {
  const directionOffset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  const childrenArray = Children.toArray(children);

  return (
    <div className={className} style={style}>
      {childrenArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            ...directionOffset[direction],
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          viewport={{ once, margin: '-50px' }}
          transition={{
            duration: 0.5,
            delay: initialDelay + index * staggerDelay,
            ease: EASINGS.smooth,
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

// ============================================================================
// 7. FLIP IN ANIMATION
// ============================================================================

interface FlipInProps extends BaseAnimationProps {
  axis?: 'x' | 'y';
}

export const FlipIn = ({
  children,
  axis = 'y',
  delay = 0,
  duration = 0.6,
  className,
  style,
  once = true,
}: FlipInProps) => {
  const rotateProperty = axis === 'x' ? 'rotateX' : 'rotateY';

  return (
    <motion.div
      initial={{
        opacity: 0,
        [rotateProperty]: 90,
      }}
      whileInView={{
        opacity: 1,
        [rotateProperty]: 0,
      }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: EASINGS.smooth,
      }}
      style={{
        perspective: '1000px',
        ...style,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
// ============================================================================
// 8. BOUNCE ANIMATION
// ============================================================================

interface BounceProps extends BaseAnimationProps {
  bounceHeight?: number;
}

export const Bounce = ({
  children,
  delay = 0,
  duration = 0.8,
  bounceHeight = 50,
  className,
  style,
  once = true,
}: BounceProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: bounceHeight,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: EASINGS.bounce,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 9. BLUR IN ANIMATION
// ============================================================================

interface BlurInProps extends BaseAnimationProps {
  blurAmount?: number;
}

export const BlurIn = ({
  children,
  delay = 0,
  duration = 0.6,
  blurAmount = 20,
  className,
  style,
  once = true,
}: BlurInProps) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: `blur(${blurAmount}px)`,
      }}
      whileInView={{
        opacity: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: EASINGS.smooth,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 10. REVEAL ANIMATION - Progressive reveal with curtain effect
// ============================================================================

interface RevealProps extends BaseAnimationProps {
  direction?: 'left' | 'right' | 'up' | 'down';
}

export const Reveal = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'left',
  className,
  style,
  once = true,
}: RevealProps) => {
  const clipPathStart = {
    left: 'inset(0 100% 0 0)',
    right: 'inset(0 0 0 100%)',
    up: 'inset(100% 0 0 0)',
    down: 'inset(0 0 100% 0)',
  };

  return (
    <motion.div
      initial={{
        clipPath: clipPathStart[direction],
      }}
      whileInView={{
        clipPath: 'inset(0 0 0 0)',
      }}
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: EASINGS.smooth,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// 11. TYPEWRITER ANIMATION - Types text character by character
// ============================================================================

interface TypeWriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  cursor?: boolean;
  onComplete?: () => void;
}

export const TypeWriter = ({
  text,
  delay = 0,
  speed = 50,
  className,
  style,
  cursor = true,
  onComplete,
}: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else if (onComplete) {
        onComplete();
      }
    }, delay * 1000);

    return () => clearTimeout(startDelay);
  }, [currentIndex, text, speed, delay, onComplete]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={className}
      style={style}
    >
      {displayedText}
      {cursor && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </motion.span>
  );
};

// ============================================================================
// 12. PARALLAX SCROLL ANIMATION
// ============================================================================

interface ParallaxScrollProps {
  children: ReactNode;
  speed?: number;
  direction?: 'up' | 'down';
  className?: string;
  style?: React.CSSProperties;
}

export const ParallaxScroll = ({
  children,
  speed = 0.5,
  direction = 'up',
  className,
  style,
}: ParallaxScrollProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const multiplier = direction === 'up' ? -100 : 100;
  const y = useTransform(scrollYProgress, [0, 1], [0, multiplier * speed]);

  return (
    <motion.div ref={ref} style={{ y, ...style }} className={className}>
      {children}
    </motion.div>
  );
};

// ============================================================================
// EXPORT ALL COMPONENTS
// ============================================================================

export default {
  FadeIn,
  SlideIn,
  ScaleIn,
  ZoomIn,
  RotateIn,
  Stagger,
  FlipIn,
  Bounce,
  BlurIn,
  Reveal,
  TypeWriter,
  ParallaxScroll,
};

