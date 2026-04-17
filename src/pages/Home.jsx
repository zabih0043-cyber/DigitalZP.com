import { motion } from 'framer-motion';
import BorderDraw from '../components/holding/BorderDraw';
import ContactBlock from '../components/holding/ContactBlock';
import CursorGlow from '../components/holding/CursorGlow';
import FooterBar from '../components/holding/FooterBar';
import HeroMessage from '../components/holding/HeroMessage';
import StatusIndicator from '../components/holding/StatusIndicator';
import VisualEngine from '../components/holding/VisualEngine';
import { useIsMobile } from '../hooks/use-mobile';
import mobileBackgroundImage from '../../assets/image for mobile background only.png';

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="fixed inset-0 overflow-hidden bg-background overscroll-none">
      <div
        className="absolute inset-0 z-0 overflow-hidden md:hidden"
      >
        <img
          src={mobileBackgroundImage}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute right-[-30%] top-1/2 h-[92%] w-auto max-w-none -translate-y-1/2"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(2, 6, 23, 0.94) 0%, rgba(2, 6, 23, 0.86) 28%, rgba(2, 6, 23, 0.46) 58%, rgba(2, 6, 23, 0.14) 100%), linear-gradient(180deg, rgba(2, 6, 23, 0.52) 0%, rgba(2, 6, 23, 0.72) 58%, rgba(2, 6, 23, 0.92) 100%)',
          }}
        />
      </div>

      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(var(--muted-foreground)) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <CursorGlow />
      <BorderDraw />

      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex flex-col md:flex-row">
          <div className="relative z-20 flex flex-col justify-between px-6 py-8 sm:px-10 md:w-[60%] md:px-12 md:py-10 lg:px-14 lg:py-12">
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <span className="font-sora text-[1.55rem] font-semibold tracking-tight sm:text-[1.7rem]">
                  <span className="text-white/95">Digital</span>
                  <span className="text-[#6FE7FF] [text-shadow:0_0_16px_rgba(111,231,255,0.24)]">ZP</span>
                </span>
              </motion.div>
              <StatusIndicator />
            </div>

            <div className="flex-1 flex max-w-lg flex-col justify-start gap-6 pt-6 pb-6 sm:justify-center sm:gap-8 sm:pt-10 md:pb-8 lg:gap-10 lg:py-0">
              <div className="space-y-6 translate-y-3 md:-translate-y-3 lg:translate-y-0">
                <HeroMessage />
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-1.5 sm:space-y-2"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Our services:
                  </span>
                  <p className="font-mono text-sm text-[#6FE7FF] [text-shadow:0_0_16px_rgba(111,231,255,0.24)]">
                    Websites | Apps | AI Assistants
                  </p>
                </motion.div>
              </div>
              <ContactBlock />
            </div>

            <FooterBar />
          </div>

          {!isMobile && (
            <div className="relative z-0 hidden md:block md:w-[40%]">
              <VisualEngine />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
