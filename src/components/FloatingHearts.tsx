import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  rotation: number;
  type: 'heart' | 'circle' | 'sparkle';
  speedY: number;
  speedX: number;
  opacity: number;
}

export function FloatingHeartsBurst({ onComplete }: { onComplete?: () => void }) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      '#E8A598', // soft dusty pink
      '#F3D8D8', // blush
      '#DEB078', // warm honey pasta
      '#A3B19B', // muted sage
      '#D48170', // warm terracotta
      '#FBE9E7', // pale peach
    ];

    const initialParticles: Particle[] = Array.from({ length: 42 }).map((_, i) => ({
      id: i,
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 160,
      y: window.innerHeight * 0.7 + (Math.random() - 0.5) * 80,
      size: Math.random() * 14 + 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      type: i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'sparkle' : 'circle',
      speedY: -(Math.random() * 7 + 4),
      speedX: (Math.random() - 0.5) * 8,
      opacity: 1,
    }));

    setParticles(initialParticles);

    const startTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;

      if (elapsed > 3.8) {
        if (onComplete) onComplete();
        return;
      }

      setParticles((prev) =>
        prev.map((p) => ({
          ...p,
          x: p.x + p.speedX * 0.98,
          y: p.y + p.speedY,
          speedY: p.speedY + 0.16, // gentle gravity
          rotation: p.rotation + p.speedX * 1.5,
          opacity: Math.max(0, 1 - elapsed / 3.4),
        }))
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}px`,
            top: `${p.y}px`,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
            opacity: p.opacity,
            transition: 'opacity 0.1s linear',
          }}
        >
          {p.type === 'heart' ? (
            <svg
              width={p.size}
              height={p.size}
              viewBox="0 0 24 24"
              fill={p.color}
              className="drop-shadow-xs"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : p.type === 'sparkle' ? (
            <svg
              width={p.size * 0.9}
              height={p.size * 0.9}
              viewBox="0 0 24 24"
              fill={p.color}
            >
              <path d="M12 2L14 9L21 12L14 15L12 22L10 15L3 12L10 9L12 2Z" />
            </svg>
          ) : (
            <div
              style={{
                width: `${p.size * 0.55}px`,
                height: `${p.size * 0.55}px`,
                backgroundColor: p.color,
                borderRadius: '50%',
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
