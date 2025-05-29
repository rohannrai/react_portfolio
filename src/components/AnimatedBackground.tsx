import { useEffect, useRef, useState } from 'react';
import * as anime from 'animejs';

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (!containerRef.current || isInitialized) return;

    try {
      // Create particles
      const particles = Array.from({ length: 30 }, (_, i) => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--color-secondary);
          border-radius: 50%;
          opacity: 0.3;
          pointer-events: none;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
        `;
        containerRef.current?.appendChild(particle);
        return particle;
      });

      // Animation
      const animation = anime.default({
        targets: particles,
        translateX: () => anime.default.random(-window.innerWidth / 3, window.innerWidth / 3),
        translateY: () => anime.default.random(-window.innerHeight / 3, window.innerHeight / 3),
        scale: () => anime.default.random(0.5, 1.5),
        opacity: () => anime.default.random(0.1, 0.4),
        duration: () => anime.default.random(3000, 6000),
        delay: anime.default.stagger(50),
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutQuad',
      });

      setIsInitialized(true);

      // Cleanup
      return () => {
        animation.pause();
        particles.forEach(particle => particle.remove());
      };
    } catch (error) {
      console.error('Error initializing animated background:', error);
    }
  }, [isInitialized]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        background: 'var(--color-primary)',
      }}
    />
  );
};

export default AnimatedBackground; 