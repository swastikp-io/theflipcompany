import React, { useEffect, useRef } from 'react';

export default function MatrixOverlay() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let timeoutId: number;

    const render = () => {
      const width = (canvas.width = window.innerWidth);
      const height = (canvas.height = window.innerHeight);

      ctx.clearRect(0, 0, width, height);
      ctx.font = '8px "Courier New", monospace';

      const charPool = '0123456789abcdef:;.,+-*/=<>#%$&@FLIP';
      const stepX = 12;
      const stepY = 14;

      for (let y = 10; y < height; y += stepY) {
        for (let x = 6; x < width; x += stepX) {
          const char = charPool[Math.floor(Math.random() * charPool.length)];
          const alpha = 0.08 + Math.random() * 0.18;
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fillText(char, x, y);
        }
      }
    };

    render();

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(render, 150);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover mix-blend-overlay opacity-80"
      />
      {/* Subtle scanline overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.3) 0px, rgba(0,0,0,0.3) 1px, transparent 1px, transparent 3px)'
        }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.65)_100%)]" />
    </div>
  );
}
