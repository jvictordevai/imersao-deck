import type { Transition } from 'framer-motion';

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as [number, number, number, number];

export type FadeOptions = {
  delay?: number;
  duration?: number;
  y?: number;
  blur?: number;
};

interface FadeMotion {
  initial: { opacity: number; y: number; filter: string };
  animate: { opacity: number; y: number; filter: string };
  transition: Transition;
}

export function fadeUp(delay = 0, duration = 0.7, y = 20, blur = 8): FadeMotion {
  return {
    initial: { opacity: 0, y, filter: `blur(${blur}px)` },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
    transition: { duration, delay, ease: EASE_OUT_EXPO },
  };
}
