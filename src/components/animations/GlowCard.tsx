'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
  as?: 'div' | 'article';
}

export const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className,
  glowColor = 'rgba(59, 130, 246, 0.15)',
  onClick,
  as = 'div',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const Component = as === 'article' ? motion.article : motion.div;

  return (
    <Component
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
      style={{
        position: 'relative',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : undefined,
      }}
    >
      {/* Glow effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${glowColor}, transparent 40%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      {/* Glow border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.3), transparent 40%)`,
          pointerEvents: 'none',
          zIndex: 0,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          padding: '1px',
          borderRadius: 'inherit',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </Component>
  );
};
