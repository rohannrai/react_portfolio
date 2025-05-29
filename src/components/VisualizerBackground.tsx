import { useEffect, useRef } from 'react';

const VisualizerBackground = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    import('animejs').then((animeModule) => {
      const anime = animeModule.default;

      // Animate the outer ring
      anime({
        targets: '#outer-ring',
        rotate: 360,
        duration: 8000,
        easing: 'linear',
        loop: true,
      });

      // Animate the inner ring
      anime({
        targets: '#inner-ring',
        rotate: -360,
        duration: 12000,
        easing: 'linear',
        loop: true,
      });

      // Animate the dots
      anime({
        targets: '.dot',
        translateY: [0, -10, 0],
        delay: anime.stagger(100, { start: 0 }),
        duration: 2000,
        direction: 'alternate',
        easing: 'easeInOutSine',
        loop: true,
      });
    });
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1,
        background: 'var(--color-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
      }}
    >
      <svg
        ref={svgRef}
        width="600"
        height="600"
        viewBox="0 0 600 600"
        style={{ display: 'block' }}
      >
        {/* Outer ring */}
        <g id="outer-ring" style={{ transformOrigin: '50% 50%' }}>
          <circle
            cx="300"
            cy="300"
            r="250"
            stroke="#fff"
            strokeWidth="8"
            fill="none"
            strokeDasharray="40 20"
          />
        </g>
        {/* Inner ring */}
        <g id="inner-ring" style={{ transformOrigin: '50% 50%' }}>
          <circle
            cx="300"
            cy="300"
            r="180"
            stroke="#fff"
            strokeWidth="4"
            fill="none"
            strokeDasharray="20 10"
          />
        </g>
        {/* Dots */}
        <g>
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i / 24) * 2 * Math.PI;
            const x = 300 + Math.cos(angle) * 210;
            const y = 300 + Math.sin(angle) * 210;
            return (
              <circle
                key={i}
                className="dot"
                cx={x}
                cy={y}
                r="7"
                fill="#fff"
                opacity="0.7"
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default VisualizerBackground; 