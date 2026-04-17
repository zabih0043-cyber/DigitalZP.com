import { useState, useEffect } from 'react';

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canUseGlow =
      window.matchMedia('(pointer: fine)').matches &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    setEnabled(canUseGlow);

    if (!canUseGlow) {
      return undefined;
    }

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
    };
  }, [visible]);

  if (!enabled || !visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-10 transition-opacity duration-500 mix-blend-screen"
      style={{
        left: pos.x - 220,
        top: pos.y - 220,
        width: 440,
        height: 440,
        borderRadius: '50%',
        background: 'radial-gradient(circle, hsla(199, 89%, 60%, 0.075) 0%, hsla(199, 89%, 60%, 0.035) 28%, transparent 68%)',
        opacity: visible ? 1 : 0,
        filter: 'blur(12px)',
      }}
    />
  );
}
