import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function VisualEngine({ mouse }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = (t) => {
      timeRef.current = t / 1000;
      const time = timeRef.current;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;

      ctx.clearRect(0, 0, W, H);

      const mx = (mouse.x - 0.5) * 24;
      const my = (mouse.y - 0.5) * 24;

      // Grid lines
      ctx.strokeStyle = 'rgba(30,41,59,0.8)';
      ctx.lineWidth = 0.5;
      const gridSize = 48;
      for (let x = 0; x < W; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Central glow orb
      const cx = W / 2 + mx * 0.4;
      const cy = H / 2 + my * 0.4;
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.5);
      grad.addColorStop(0, 'rgba(56,189,248,0.08)');
      grad.addColorStop(0.5, 'rgba(56,189,248,0.03)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);

      // Glass panels
      const panels = [
        { x: 0.35, y: 0.28, w: 0.38, h: 0.55, rot: -0.18, phase: 0 },
        { x: 0.5, y: 0.38, w: 0.3, h: 0.42, rot: 0.08, phase: 1.2 },
        { x: 0.22, y: 0.45, w: 0.25, h: 0.35, rot: 0.25, phase: 2.4 },
      ];

      panels.forEach((p, i) => {
        const floatY = Math.sin(time * 0.4 + p.phase) * 8;
        const floatX = Math.cos(time * 0.3 + p.phase) * 4;
        const px = W * p.x + mx * (0.3 + i * 0.1) + floatX;
        const py = H * p.y + my * (0.2 + i * 0.08) + floatY;
        const pw = W * p.w;
        const ph = H * p.h;

        ctx.save();
        ctx.translate(px, py);
        ctx.rotate(p.rot + Math.sin(time * 0.15 + p.phase) * 0.02);

        // Panel fill
        const panelGrad = ctx.createLinearGradient(-pw/2, -ph/2, pw/2, ph/2);
        panelGrad.addColorStop(0, `rgba(56,189,248,${0.04 - i * 0.01})`);
        panelGrad.addColorStop(0.5, `rgba(30,41,59,${0.15 - i * 0.03})`);
        panelGrad.addColorStop(1, `rgba(8,12,22,${0.08})`);
        ctx.fillStyle = panelGrad;
        ctx.strokeStyle = `rgba(56,189,248,${0.18 - i * 0.04})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.rect(-pw/2, -ph/2, pw, ph);
        ctx.fill();
        ctx.stroke();

        // Inner wireframe cross
        ctx.strokeStyle = `rgba(56,189,248,${0.08})`;
        ctx.lineWidth = 0.4;
        ctx.beginPath();
        ctx.moveTo(0, -ph/2); ctx.lineTo(0, ph/2);
        ctx.moveTo(-pw/2, 0); ctx.lineTo(pw/2, 0);
        ctx.stroke();

        // Corner ticks
        const tc = [[-pw/2,-ph/2],[pw/2,-ph/2],[pw/2,ph/2],[-pw/2,ph/2]];
        ctx.strokeStyle = `rgba(56,189,248,${0.35 - i * 0.08})`;
        ctx.lineWidth = 1;
        tc.forEach(([cx2, cy2]) => {
          const sx = cx2 < 0 ? 1 : -1;
          const sy = cy2 < 0 ? 1 : -1;
          ctx.beginPath();
          ctx.moveTo(cx2, cy2 + sy * 8);
          ctx.lineTo(cx2, cy2);
          ctx.lineTo(cx2 + sx * 8, cy2);
          ctx.stroke();
        });

        ctx.restore();
      });

      // Thin architectural lines
      const lines = [
        { x1: 0.1, y1: 0.15, x2: 0.9, y2: 0.18 },
        { x1: 0.05, y1: 0.82, x2: 0.75, y2: 0.85 },
        { x1: 0.6, y1: 0.1, x2: 0.62, y2: 0.9 },
      ];
      lines.forEach((l, i) => {
        const alpha = 0.1 + Math.sin(time * 0.5 + i) * 0.04;
        ctx.strokeStyle = `rgba(56,189,248,${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.setLineDash([4, 8]);
        ctx.beginPath();
        ctx.moveTo(W * l.x1, H * l.y1);
        ctx.lineTo(W * l.x2, H * l.y2);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Floating dots
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2 + time * 0.12;
        const r = Math.min(W, H) * 0.28;
        const dx = W/2 + mx * 0.5 + Math.cos(angle) * r;
        const dy = H/2 + my * 0.5 + Math.sin(angle) * r * 0.5;
        const alpha = 0.3 + Math.sin(time * 0.8 + i) * 0.2;
        ctx.fillStyle = `rgba(56,189,248,${alpha})`;
        ctx.beginPath();
        ctx.arc(dx, dy, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [mouse]);

  return (
    <motion.div
      className="absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.5 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
}
