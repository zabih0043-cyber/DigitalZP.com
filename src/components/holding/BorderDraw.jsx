import { motion } from 'framer-motion';

export default function BorderDraw() {
  return (
    <>
      {/* Top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-px bg-border origin-left z-30"
      />
      {/* Bottom border */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-border origin-right z-30"
      />
      {/* Left border */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 bottom-0 w-px bg-border origin-top z-30"
      />
      {/* Right border */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 bottom-0 w-px bg-border origin-bottom z-30"
      />
      {/* Vertical split line (tablet and desktop) */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 bottom-0 hidden w-px bg-border origin-top z-30 md:block"
        style={{ left: '60%' }}
      />
    </>
  );
}
