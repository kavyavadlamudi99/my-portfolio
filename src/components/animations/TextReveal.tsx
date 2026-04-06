'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  gradient?: boolean;
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className,
  delay = 0,
  as = 'span',
  gradient = false,
}) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    }
  }, [isInView]);

  // Also trigger after mount for above-the-fold content
  useEffect(() => {
    const timer = setTimeout(() => setShouldAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0, 1],
      },
    },
  };

  const gradientStyle: React.CSSProperties = gradient
    ? {
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        backgroundSize: '200% 200%',
      }
    : {};

  const Tag = motion[as] as React.ComponentType<{
    ref: React.RefObject<HTMLElement>;
    className?: string;
    variants: Record<string, unknown>;
    initial: string;
    animate: string;
    style: React.CSSProperties;
    children: React.ReactNode;
  }>;

  return (
    <Tag
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={shouldAnimate ? 'visible' : 'hidden'}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0 0.3em',
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          style={{ display: 'inline-block', ...gradientStyle }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
};

export const LineReveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) setShouldAnimate(true);
  }, [isInView]);

  useEffect(() => {
    const timer = setTimeout(() => setShouldAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} style={{ overflow: 'hidden' }} className={className}>
      <motion.div
        initial={{ y: '110%', opacity: 0 }}
        animate={shouldAnimate ? { y: 0, opacity: 1 } : undefined}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.25, 0.4, 0, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
