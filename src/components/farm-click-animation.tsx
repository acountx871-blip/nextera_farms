'use client';

import { useCallback, useRef, useEffect, useState } from 'react';

/* ─── Minimalistic SVG silhouettes for farm animals ─── */
const farmSVGs = [
  {
    label: 'chicken',
    viewBox: '0 0 40 40',
    render: (color: string) => (
      <g fill={color} stroke="none">
        {/* body */}
        <ellipse cx="20" cy="24" rx="9" ry="8" />
        {/* head */}
        <circle cx="28" cy="17" r="5" />
        {/* beak */}
        <polygon points="33,16 38,17 33,18" fill={color} opacity="0.8" />
        {/* comb */}
        <path d="M26 12 Q27 8 29 10 Q30 7 32 11" fill={color} opacity="0.7" />
        {/* eye */}
        <circle cx="29.5" cy="16" r="1" fill="white" />
        {/* legs */}
        <line x1="17" y1="31" x2="15" y2="38" stroke={color} strokeWidth="1.5" />
        <line x1="23" y1="31" x2="25" y2="38" stroke={color} strokeWidth="1.5" />
        {/* tail */}
        <path d="M11 20 Q7 16 9 12 Q11 15 12 18" fill={color} opacity="0.6" />
      </g>
    ),
  },
  {
    label: 'duck',
    viewBox: '0 0 40 40',
    render: (color: string) => (
      <g fill={color} stroke="none">
        {/* body */}
        <ellipse cx="18" cy="26" rx="11" ry="8" />
        {/* neck + head */}
        <ellipse cx="30" cy="16" rx="5" ry="7" transform="rotate(-15, 30, 16)" />
        {/* beak */}
        <polygon points="35,14 40,15 35,17" fill={color} opacity="0.8" />
        {/* eye */}
        <circle cx="31" cy="14" r="1" fill="white" />
        {/* wing */}
        <ellipse cx="15" cy="24" rx="6" ry="4" opacity="0.5" />
        {/* feet */}
        <path d="M14 33 L12 38 M14 33 L16 38 M14 33 L14 38" stroke={color} strokeWidth="1.2" fill="none" />
      </g>
    ),
  },
  {
    label: 'pig',
    viewBox: '0 0 40 40',
    render: (color: string) => (
      <g fill={color} stroke="none">
        {/* body */}
        <ellipse cx="20" cy="24" rx="12" ry="9" />
        {/* head */}
        <circle cx="31" cy="19" r="7" />
        {/* snout */}
        <ellipse cx="36" cy="20" rx="3" ry="2.5" opacity="0.7" />
        {/* nostrils */}
        <circle cx="35" cy="19.5" r="0.7" fill="white" />
        <circle cx="37" cy="19.5" r="0.7" fill="white" />
        {/* eye */}
        <circle cx="30" cy="16.5" r="1" fill="white" />
        {/* ears */}
        <path d="M27 13 Q26 8 29 10" fill={color} opacity="0.7" />
        <path d="M31 12 Q32 7 34 10" fill={color} opacity="0.7" />
        {/* legs */}
        <rect x="13" y="31" width="2.5" height="6" rx="1" />
        <rect x="18" y="31" width="2.5" height="6" rx="1" />
        <rect x="23" y="31" width="2.5" height="6" rx="1" />
        <rect x="28" y="31" width="2.5" height="6" rx="1" />
        {/* curly tail */}
        <path d="M8 22 Q4 20 6 17 Q8 14 10 16" stroke={color} strokeWidth="1.5" fill="none" />
      </g>
    ),
  },
  {
    label: 'egg',
    viewBox: '0 0 40 40',
    render: (color: string) => (
      <g fill="none" stroke={color} strokeWidth="1.8">
        <path d="M20 4 C14 4 10 12 10 20 C10 28 14 36 20 36 C26 36 30 28 30 20 C30 12 26 4 20 4Z" />
      </g>
    ),
  },
  {
    label: 'fowl',
    viewBox: '0 0 40 40',
    render: (color: string) => (
      <g fill={color} stroke="none">
        {/* body */}
        <ellipse cx="18" cy="22" rx="8" ry="10" />
        {/* long neck */}
        <path d="M24 15 Q28 8 27 6 Q26 4 25 6" strokeWidth="1.5" stroke={color} fill="none" />
        {/* head */}
        <circle cx="26" cy="7" r="3" />
        {/* beak */}
        <polygon points="29,6.5 33,7 29,7.5" opacity="0.8" />
        {/* eye */}
        <circle cx="27" cy="6" r="0.8" fill="white" />
        {/* legs */}
        <line x1="15" y1="31" x2="13" y2="38" stroke={color} strokeWidth="1.5" />
        <line x1="21" y1="31" x2="23" y2="38" stroke={color} strokeWidth="1.5" />
        {/* tail feathers */}
        <path d="M10 15 Q5 10 7 5 Q9 10 10 13" opacity="0.5" />
        <path d="M11 14 Q8 8 10 4" stroke={color} strokeWidth="1" fill="none" opacity="0.4" />
      </g>
    ),
  },
  {
    label: 'chick',
    viewBox: '0 0 40 40',
    render: (color: string) => (
      <g fill={color} stroke="none">
        {/* body - round and small */}
        <circle cx="20" cy="24" r="8" />
        {/* head */}
        <circle cx="20" cy="14" r="6" />
        {/* beak */}
        <polygon points="20,13 23,15 20,16" fill={color} opacity="0.8" />
        {/* eye */}
        <circle cx="21.5" cy="12.5" r="1" fill="white" />
        {/* wing */}
        <ellipse cx="14" cy="24" rx="3" ry="5" opacity="0.5" />
        {/* feet */}
        <path d="M17 31 L15 36 M17 31 L19 36" stroke={color} strokeWidth="1.2" fill="none" />
        {/* hair tuft */}
        <path d="M18 8 Q19 4 20 6 Q21 3 22 7" opacity="0.6" />
      </g>
    ),
  },
];

/* Color variants to mix */
const colorVariants = [
  'oklch(0.35 0.13 155)',  // farm green
  'oklch(0.50 0.10 155)',  // lighter green
  'oklch(0.78 0.14 75)',   // farm gold
  'oklch(0.32 0.06 55)',   // warm brown
  'oklch(0.55 0.08 140)',  // sage
];

interface Particle {
  id: number;
  x: number;
  y: number;
  svgIndex: number;
  colorIndex: number;
  angle: number;
  velocity: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  opacity: number;
}

let particleId = 0;

export function FarmClickAnimation({ children }: { children: React.ReactNode }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const animFrameRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const isAnimating = useRef(false);

  const handleClick = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    // Only trigger on blank areas
    const isInteractive = target.closest(
      'button, a, input, textarea, select, [role="button"], .sheet-overlay, label, [data-radix-collection-item], img, video, canvas'
    );
    if (isInteractive) return;

    const count = 7 + Math.floor(Math.random() * 5); // 7-11 particles
    const newParticles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.7;
      const velocity = 80 + Math.random() * 120;
      const svgIndex = Math.floor(Math.random() * farmSVGs.length);
      const colorIndex = Math.floor(Math.random() * colorVariants.length);

      newParticles.push({
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        svgIndex,
        colorIndex,
        angle,
        velocity,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 300,
        size: 18 + Math.random() * 16,
        opacity: 0.6 + Math.random() * 0.35,
      });
    }

    particlesRef.current = [...particlesRef.current, ...newParticles];
    setParticles((prev) => [...prev, ...newParticles]);

    // Start animation loop if not already running
    if (!isAnimating.current) {
      isAnimating.current = true;
      animFrameRef.current = requestAnimationFrame(animateLoop);
    }
  }, []);

  const animateLoop = useCallback(() => {
    const dt = 1 / 60; // fixed timestep for consistency

    const updated = particlesRef.current
      .map((p) => {
        const drag = 0.94;
        const newVelocity = p.velocity * drag;
        const dx = Math.cos(p.angle) * newVelocity * dt;
        const dy = Math.sin(p.angle) * newVelocity * dt + 50 * dt; // slight gravity
        const newOpacity = p.opacity - dt * 0.9;
        const newRotation = p.rotation + p.rotationSpeed * dt;

        return {
          ...p,
          x: p.x + dx,
          y: p.y + dy,
          velocity: newVelocity,
          opacity: Math.max(0, newOpacity),
          rotation: newRotation,
        };
      })
      .filter((p) => p.opacity > 0.01);

    particlesRef.current = updated;
    setParticles(updated);

    if (updated.length > 0) {
      animFrameRef.current = requestAnimationFrame(animateLoop);
    } else {
      isAnimating.current = false;
    }
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [handleClick]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <>
      {children}
      {mounted &&
        particles.map((p) => {
          const svg = farmSVGs[p.svgIndex];
          const color = colorVariants[p.colorIndex];
          return (
            <div
              key={p.id}
              className="pointer-events-none fixed z-[9999]"
              style={{
                left: p.x - p.size / 2,
                top: p.y - p.size / 2,
                width: p.size,
                height: p.size,
                opacity: p.opacity,
                transform: `rotate(${p.rotation}deg)`,
                willChange: 'transform, opacity',
              }}
            >
              <svg viewBox={svg.viewBox} className="w-full h-full">
                {svg.render(color)}
              </svg>
            </div>
          );
        })}
    </>
  );
}
