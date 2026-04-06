'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, Variants } from 'framer-motion';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  scale?: number;
  rotate?: number;
}

const getInitial = (direction: Direction, distance: number, scale?: number, rotate?: number) => {
  const base: Record<string, number> = { opacity: 0 };
  if (scale) base.scale = scale;
  if (rotate) base.rotate = rotate;

  switch (direction) {
    case 'up': return { ...base, y: distance };
    case 'down': return { ...base, y: -distance };
    case 'left': return { ...base, x: distance };
    case 'right': return { ...base, x: -distance };
    case 'none': return base;
  }
};

function useIsVisible(ref: React.RefObject<HTMLElement | null>, once = true) {
  const [visible, setVisible] = useState(false);

  const checkVisibility = useCallback(() => {
    if (!ref.current || visible) return;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < windowHeight + 100 && rect.bottom > -100) {
      setVisible(true);
    }
  }, [ref, visible]);

  useEffect(() => {
    // Check immediately on mount
    checkVisibility();

    // IntersectionObserver for reliable detection
    const el = ref.current;
    if (!el || visible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '100px 0px' }
    );
    observer.observe(el);

    // Scroll listener as fallback
    const onScroll = () => checkVisibility();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [ref, once, visible, checkVisibility]);

  return visible;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  distance = 60,
  className,
  once = true,
  scale,
  rotate,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref, once);

  return (
    <motion.div
      ref={ref}
      initial={getInitial(direction, distance, scale, rotate)}
      animate={isVisible ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 } : undefined}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className, staggerDelay = 0.1 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};
