import { type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideStageProps {
  index: number;
  direction: 1 | -1;
  children: ReactNode;
}

const variants = {
  enter: (dir: 1 | -1) => ({
    x: dir > 0 ? 80 : -80,
    opacity: 0,
    filter: 'blur(8px)',
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: 'blur(0px)',
  },
  exit: (dir: 1 | -1) => ({
    x: dir > 0 ? -80 : 80,
    opacity: 0,
    filter: 'blur(8px)',
  }),
};

export function SlideStage({ index, direction, children }: SlideStageProps) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.4 },
            filter: { duration: 0.5 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
