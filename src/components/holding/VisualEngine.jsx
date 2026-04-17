import { motion } from 'framer-motion';
import visualImage from '../../../assets/image-crisp.png';

export default function VisualEngine() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-full w-full overflow-hidden md:overflow-visible"
    >
      <div
        className="absolute inset-y-0 -left-[48%] z-0 hidden w-[108%] overflow-hidden opacity-[0.34] md:block"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.78) 18%, black 34%, black 86%, rgba(0,0,0,0.5) 94%, transparent 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.78) 18%, black 34%, black 86%, rgba(0,0,0,0.5) 94%, transparent 100%)',
        }}
      >
        <img
          src={visualImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full scale-[1.02] object-cover object-[32%_center] [filter:brightness(0.92)_contrast(1.06)_saturate(0.98)_blur(1px)]"
        />
      </div>

      <div
        className="absolute inset-y-0 -left-[16%] z-[1] w-[116%] overflow-hidden"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 8%, black 18%, black 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.55) 8%, black 18%, black 100%)',
        }}
      >
        <img
          src={visualImage}
          alt="Abstract digital architecture visual"
          className="absolute inset-0 z-0 h-full w-full object-cover object-[39%_center] [filter:brightness(1.12)_contrast(1.12)_saturate(1.08)]"
        />
      </div>
      <div className="absolute inset-y-0 left-0 z-10 w-[30%] bg-gradient-to-r from-background/88 via-background/38 to-transparent" />
      <div className="absolute inset-y-0 left-[6%] z-10 w-[18%] bg-background/16 blur-3xl" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/24 via-transparent to-background/10" />
    </motion.div>
  );
}
