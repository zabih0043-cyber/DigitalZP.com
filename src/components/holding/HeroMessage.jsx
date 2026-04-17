import { motion } from 'framer-motion';

export default function HeroMessage() {
  return (
    <div className="space-y-3 sm:space-y-5">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono font-semibold text-foreground leading-tight tracking-tight"
        style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', letterSpacing: '-0.04em' }}
      >
        A premium{' '}
        <span className="text-[#6FE7FF] [text-shadow:0_0_16px_rgba(111,231,255,0.24)]">
          website
        </span>
        <span className="block">is coming soon.</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md font-mono text-sm leading-relaxed text-muted-foreground"
      >
        Currently architecting digital products for industry leaders. Our full portfolio is arriving shortly.
      </motion.p>
    </div>
  );
}
