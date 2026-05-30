/**
 * Optimized animation configurations and presets
 */

import { Transition, Variants } from 'motion/react';
import { prefersReducedMotion } from '../shared/utils/performance.utils';

// Optimized easing curves
export const EASINGS = {
  // Fast and snappy
  snap: [0.4, 0.0, 0.2, 1],
  // Smooth and natural
  smooth: [0.4, 0.0, 0.6, 1],
  // Bouncy and playful
  bounce: [0.68, -0.55, 0.265, 1.55],
  // Slow start, fast end
  accelerate: [0.4, 0.0, 1, 1],
  // Fast start, slow end
  decelerate: [0.0, 0.0, 0.2, 1],
} as const;

// Optimized transition presets
export const TRANSITIONS = {
  fast: {
    duration: 0.2,
    ease: EASINGS.snap,
  },
  normal: {
    duration: 0.3,
    ease: EASINGS.smooth,
  },
  slow: {
    duration: 0.5,
    ease: EASINGS.smooth,
  },
  spring: {
    type: 'spring' as const,
    stiffness: 400,
    damping: 30,
  },
  springBouncy: {
    type: 'spring' as const,
    stiffness: 300,
    damping: 20,
  },
} as const;

// Page transition variants (optimized for performance)
export const pageTransitionVariants: Variants = {
  initial: {
    opacity: 0,
    y: 10,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: TRANSITIONS.normal,
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: TRANSITIONS.fast,
  },
};

// Fade variants
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: TRANSITIONS.normal,
  },
  exit: { 
    opacity: 0,
    transition: TRANSITIONS.fast,
  },
};

// Slide up variants
export const slideUpVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: TRANSITIONS.normal,
  },
};

// Scale variants
export const scaleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: TRANSITIONS.normal,
  },
};

// Stagger container variants
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Stagger item variants
export const staggerItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: TRANSITIONS.fast,
  },
};

// Helper to get responsive duration based on user preferences
export const getResponsiveTransition = (
  transition: Transition
): Transition => {
  if (prefersReducedMotion()) {
    return {
      ...transition,
      duration: 0.01,
    };
  }
  return transition;
};

// Helper to create optimized motion props
export const createMotionProps = (
  variants?: Variants,
  transition?: Transition,
  layoutId?: string
) => {
  return {
    variants,
    transition: transition ? getResponsiveTransition(transition) : undefined,
    layoutId,
    // Performance optimizations
    style: {
      willChange: 'transform, opacity',
    },
  };
};

// Parallax scroll animation config
export const parallaxConfig = {
  offset: ['start end', 'end start'],
  speed: 0.5,
};

// Hover animation presets
export const HOVER_ANIMATIONS = {
  scale: {
    scale: 1.05,
    transition: TRANSITIONS.fast,
  },
  lift: {
    y: -4,
    transition: TRANSITIONS.fast,
  },
  glow: {
    boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
    transition: TRANSITIONS.fast,
  },
} as const;

// Tap animation presets
export const TAP_ANIMATIONS = {
  scale: {
    scale: 0.95,
  },
  press: {
    scale: 0.98,
  },
} as const;
