'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import styles from './ConstellationViz.module.css';

// ── Category colors ──
const CATEGORIES = {
  Languages: { color: '#f59e0b', glow: 'rgba(245, 158, 11, 0.5)' },
  Backend: { color: '#8b5cf6', glow: 'rgba(139, 92, 246, 0.5)' },
  Frontend: { color: '#06b6d4', glow: 'rgba(6, 182, 212, 0.5)' },
  Databases: { color: '#10b981', glow: 'rgba(16, 185, 129, 0.5)' },
  Cloud: { color: '#6366f1', glow: 'rgba(99, 102, 241, 0.5)' },
  Domain: { color: '#f43f5e', glow: 'rgba(244, 63, 94, 0.5)' },
} as const;

type Category = keyof typeof CATEGORIES;

interface Node {
  id: number;
  label: string;
  category: Category;
  x: number; // 0-1 normalized
  y: number; // 0-1 normalized
  radius: number;
}

interface Connection {
  from: number;
  to: number;
}

// ── Nodes: key skills positioned in a visually pleasing layout ──
const NODES: Node[] = [
  // Languages (amber) — top-left cluster
  { id: 0, label: 'Java', category: 'Languages', x: 0.12, y: 0.18, radius: 7 },
  { id: 1, label: 'TypeScript', category: 'Languages', x: 0.22, y: 0.32, radius: 6 },
  { id: 2, label: 'Python', category: 'Languages', x: 0.08, y: 0.42, radius: 6 },
  { id: 3, label: 'SQL', category: 'Languages', x: 0.18, y: 0.10, radius: 5 },
  { id: 4, label: 'Go', category: 'Languages', x: 0.28, y: 0.20, radius: 5 },

  // Backend (violet) — center-left
  { id: 5, label: 'Spring Boot', category: 'Backend', x: 0.35, y: 0.38, radius: 7 },
  { id: 6, label: 'Node.js', category: 'Backend', x: 0.42, y: 0.22, radius: 6 },
  { id: 7, label: 'REST APIs', category: 'Backend', x: 0.50, y: 0.35, radius: 6 },
  { id: 8, label: 'Kafka', category: 'Backend', x: 0.38, y: 0.55, radius: 6 },
  { id: 9, label: 'Microservices', category: 'Backend', x: 0.48, y: 0.50, radius: 7 },

  // Frontend (cyan) — top-right
  { id: 10, label: 'React', category: 'Frontend', x: 0.65, y: 0.15, radius: 7 },
  { id: 11, label: 'Next.js', category: 'Frontend', x: 0.75, y: 0.25, radius: 6 },
  { id: 12, label: 'Angular', category: 'Frontend', x: 0.58, y: 0.28, radius: 5 },

  // Databases (emerald) — bottom-left
  { id: 13, label: 'PostgreSQL', category: 'Databases', x: 0.15, y: 0.65, radius: 6 },
  { id: 14, label: 'MongoDB', category: 'Databases', x: 0.25, y: 0.75, radius: 6 },
  { id: 15, label: 'Redis', category: 'Databases', x: 0.10, y: 0.80, radius: 5 },
  { id: 16, label: 'DynamoDB', category: 'Databases', x: 0.30, y: 0.88, radius: 5 },

  // Cloud (indigo) — right side
  { id: 17, label: 'AWS', category: 'Cloud', x: 0.82, y: 0.40, radius: 7 },
  { id: 18, label: 'Azure', category: 'Cloud', x: 0.88, y: 0.55, radius: 6 },
  { id: 19, label: 'Docker', category: 'Cloud', x: 0.72, y: 0.50, radius: 6 },
  { id: 20, label: 'Kubernetes', category: 'Cloud', x: 0.78, y: 0.65, radius: 6 },
  { id: 21, label: 'Terraform', category: 'Cloud', x: 0.90, y: 0.72, radius: 5 },

  // Domain (rose) — bottom-right
  { id: 22, label: 'Event-Driven', category: 'Domain', x: 0.55, y: 0.70, radius: 6 },
  { id: 23, label: 'HIPAA', category: 'Domain', x: 0.65, y: 0.80, radius: 5 },
  { id: 24, label: 'Payments', category: 'Domain', x: 0.50, y: 0.85, radius: 5 },
  { id: 25, label: 'HL7 FHIR', category: 'Domain', x: 0.75, y: 0.88, radius: 5 },
];

// ── Connections: linking related skills ──
const CONNECTIONS: Connection[] = [
  // Languages interconnections
  { from: 0, to: 1 }, { from: 0, to: 3 }, { from: 1, to: 4 }, { from: 2, to: 1 },
  // Languages → Backend
  { from: 0, to: 5 }, { from: 1, to: 6 }, { from: 0, to: 7 }, { from: 2, to: 8 },
  // Backend interconnections
  { from: 5, to: 7 }, { from: 6, to: 7 }, { from: 5, to: 9 }, { from: 8, to: 9 },
  { from: 5, to: 8 }, { from: 6, to: 9 },
  // Languages → Frontend
  { from: 1, to: 10 }, { from: 1, to: 12 },
  // Frontend interconnections
  { from: 10, to: 11 }, { from: 10, to: 12 },
  // Backend → Frontend
  { from: 6, to: 10 }, { from: 7, to: 12 },
  // Languages → Databases
  { from: 3, to: 13 }, { from: 0, to: 13 },
  // Backend → Databases
  { from: 5, to: 13 }, { from: 9, to: 14 }, { from: 8, to: 16 },
  // Databases interconnections
  { from: 13, to: 14 }, { from: 14, to: 15 }, { from: 14, to: 16 }, { from: 13, to: 15 },
  // Backend → Cloud
  { from: 9, to: 19 }, { from: 5, to: 17 }, { from: 9, to: 17 },
  // Frontend → Cloud
  { from: 11, to: 17 },
  // Cloud interconnections
  { from: 17, to: 18 }, { from: 17, to: 19 }, { from: 19, to: 20 }, { from: 18, to: 20 },
  { from: 20, to: 21 }, { from: 18, to: 21 },
  // Backend → Domain
  { from: 8, to: 22 }, { from: 9, to: 22 },
  // Domain interconnections
  { from: 22, to: 24 }, { from: 23, to: 25 }, { from: 22, to: 23 },
  // Cloud → Domain
  { from: 17, to: 23 }, { from: 18, to: 25 },
  // Databases → Domain
  { from: 13, to: 24 },
];

// ── Particle along a connection ──
interface Particle {
  connectionIndex: number;
  t: number; // 0-1 progress
  speed: number;
  size: number;
}

interface ConstellationVizProps {
  className?: string;
}

export const ConstellationViz: React.FC<ConstellationVizProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);

  const initParticles = useCallback(() => {
    const particles: Particle[] = [];
    const count = Math.min(CONNECTIONS.length, 30);
    for (let i = 0; i < count; i++) {
      particles.push({
        connectionIndex: i % CONNECTIONS.length,
        t: Math.random(),
        speed: 0.0008 + Math.random() * 0.0012,
        size: 1.5 + Math.random() * 1.5,
      });
    }
    particlesRef.current = particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    initParticles();

    let width = 0;
    let height = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const getNodePos = (node: Node) => ({
      x: node.x * width,
      y: node.y * height,
    });

    const draw = () => {
      timeRef.current += 0.016;
      const t = timeRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      ctx.clearRect(0, 0, width, height);

      // ── Draw connections ──
      CONNECTIONS.forEach((conn) => {
        const a = getNodePos(NODES[conn.from]);
        const b = getNodePos(NODES[conn.to]);
        const midX = (a.x + b.x) / 2;
        const midY = (a.y + b.y) / 2;

        // Mouse proximity to connection midpoint
        const distToMouse = Math.sqrt((mx - midX) ** 2 + (my - midY) ** 2);
        const proximity = Math.max(0, 1 - distToMouse / 180);

        const baseAlpha = 0.06 + proximity * 0.18;
        const catColor = CATEGORIES[NODES[conn.from].category].color;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = catColor;
        ctx.globalAlpha = baseAlpha;
        ctx.lineWidth = 0.8 + proximity * 1.2;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });

      // ── Draw particles along connections ──
      particlesRef.current.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.connectionIndex = (p.connectionIndex + 1) % CONNECTIONS.length;
        }

        const conn = CONNECTIONS[p.connectionIndex];
        const a = getNodePos(NODES[conn.from]);
        const b = getNodePos(NODES[conn.to]);
        const px = a.x + (b.x - a.x) * p.t;
        const py = a.y + (b.y - a.y) * p.t;

        const catColor = CATEGORIES[NODES[conn.from].category].color;
        const distToMouse = Math.sqrt((mx - px) ** 2 + (my - py) ** 2);
        const proximity = Math.max(0, 1 - distToMouse / 200);
        const alpha = 0.3 + proximity * 0.5;
        const size = p.size + proximity * 2;

        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = catColor;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Glow
        if (proximity > 0.1) {
          ctx.beginPath();
          ctx.arc(px, py, size * 3, 0, Math.PI * 2);
          const grad = ctx.createRadialGradient(px, py, 0, px, py, size * 3);
          grad.addColorStop(0, catColor);
          grad.addColorStop(1, 'transparent');
          ctx.fillStyle = grad;
          ctx.globalAlpha = proximity * 0.2;
          ctx.fill();
        }
        ctx.globalAlpha = 1;
      });

      // ── Draw nodes ──
      NODES.forEach((node) => {
        const pos = getNodePos(node);
        const cat = CATEGORIES[node.category];
        const distToMouse = Math.sqrt((mx - pos.x) ** 2 + (my - pos.y) ** 2);
        const proximity = Math.max(0, 1 - distToMouse / 160);

        // Breathing animation
        const breathe = Math.sin(t * 1.5 + node.id * 0.7) * 0.15 + 1;
        const r = node.radius * breathe + proximity * 5;

        // Outer glow
        if (proximity > 0.05) {
          const glowR = r * 4;
          const grad = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, glowR);
          grad.addColorStop(0, cat.glow);
          grad.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, glowR, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.globalAlpha = proximity * 0.35;
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        // Node circle
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2);
        ctx.fillStyle = cat.color;
        ctx.globalAlpha = 0.25 + proximity * 0.6;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, r * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = cat.color;
        ctx.globalAlpha = 0.6 + proximity * 0.4;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Label
        const labelAlpha = proximity > 0.2 ? proximity : 0.35 + Math.sin(t + node.id) * 0.05;
        const fontSize = proximity > 0.2
          ? 10 + proximity * 3
          : 9;
        ctx.font = `500 ${fontSize}px 'Space Grotesk', system-ui, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        ctx.fillStyle = '#e2e8f0';
        ctx.globalAlpha = labelAlpha;

        // Text shadow for readability
        ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
        ctx.shadowBlur = 4;
        ctx.fillText(node.label, pos.x, pos.y + r + 6);
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initParticles]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: -1000, y: -1000 };
  }, []);

  return (
    <div className={`${styles.wrapper} ${className || ''}`}>
      <canvas
        ref={canvasRef}
        className={styles.canvas}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      <span className={styles.hint}>hover to explore</span>
      <div className={styles.legend}>
        {Object.entries(CATEGORIES).map(([name, { color }]) => (
          <span key={name} className={styles.legendItem}>
            <span className={styles.legendDot} style={{ background: color }} />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ConstellationViz;
