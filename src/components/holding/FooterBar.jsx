import { motion } from 'framer-motion';

export default function FooterBar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6, duration: 0.8 }}
      className="pt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground/60 sm:pt-0 md:translate-y-3 lg:translate-y-0"
    >
      <span>
        <span className="relative top-[1px] text-sm">©</span>{' '}
        {new Date().getFullYear()} DigitalZP Collective
      </span>
    </motion.div>
  );
}
