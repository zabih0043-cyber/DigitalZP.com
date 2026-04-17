import { motion } from 'framer-motion';

export default function StatusIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="translate-y-[2px] sm:translate-y-[8px] md:translate-y-0 lg:translate-y-[8px]"
    >
      <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
        Status: In Development / Active for Enquiries
      </span>
    </motion.div>
  );
}
