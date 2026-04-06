'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const FloatingShapes: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Gradient orb top-right */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Gradient orb bottom-left */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '5%',
          width: '350px',
          height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Small floating dot */}
      <motion.div
        animate={{
          y: [0, -50, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '30%',
          left: '20%',
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          background: 'rgba(59, 130, 246, 0.4)',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)',
        }}
      />

      {/* Rotating ring */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '25%',
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          border: '1px solid rgba(59, 130, 246, 0.1)',
        }}
      />

      {/* Cross shape */}
      <motion.div
        animate={{
          rotate: [0, 90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'absolute',
          bottom: '30%',
          right: '15%',
          width: '20px',
          height: '20px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            width: '1px',
            height: '100%',
            background: 'rgba(139, 92, 246, 0.3)',
            transform: 'translateX(-50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            height: '1px',
            background: 'rgba(139, 92, 246, 0.3)',
            transform: 'translateY(-50%)',
          }}
        />
      </motion.div>

      {/* Grid pattern overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 100%)',
        }}
      />
    </div>
  );
};
