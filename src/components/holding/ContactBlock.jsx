import { motion } from 'framer-motion';

export default function ContactBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mt-auto space-y-3 pt-10 md:mt-0 md:pt-0"
    >
      <div className="flex flex-col gap-2">
        <a
          href="mailto:web@digitalZP.com"
          className="group inline-flex w-fit self-start items-center gap-3 rounded-sm font-mono text-sm text-white/86 transition-[color,opacity] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#A6E7FF] hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        >
          <span className="text-xs tracking-[0.08em] text-white/34 transition-[color,opacity] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#7FD7F6] group-hover:opacity-100">[E]</span>
          <span className="relative opacity-95 transition-[color,opacity,text-shadow] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[text-shadow:0_0_12px_rgba(127,215,246,0.10)]">
            projects@digitalZP.com
          </span>
        </a>
        <a
          href="tel:+27794262133"
          className="group inline-flex w-fit self-start items-center gap-3 rounded-sm font-mono text-sm text-white/86 transition-[color,opacity] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#A6E7FF] hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
        >
          <span className="text-xs tracking-[0.08em] text-white/34 transition-[color,opacity] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-[#7FD7F6] group-hover:opacity-100">[T]</span>
          <span className="relative opacity-95 transition-[color,opacity,text-shadow] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[text-shadow:0_0_12px_rgba(127,215,246,0.10)]">
            +27 79 426 2133
          </span>
        </a>
      </div>

      <motion.a
        href="mailto:web@digitalZP.com"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="group mt-3 inline-flex w-fit self-start items-center gap-2 rounded-sm font-inter text-sm font-medium text-white/78 transition-[color,opacity,text-shadow] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-[#A6E7FF] hover:[text-shadow:0_0_12px_rgba(127,215,246,0.10)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
      >
        Get in touch
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="text-white/52 transition-[transform,color,opacity] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[3px] group-hover:text-[#89DCF8] group-hover:opacity-100"
        >
          <path d="M1 7H13M13 7L7.5 1.5M13 7L7.5 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.a>
    </motion.div>
  );
}
