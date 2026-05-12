import { forwardRef } from 'react';
import { MotionConfig } from 'framer-motion';
import { slides } from '../lib/slides';
import { SLIDE_WIDTH, SLIDE_HEIGHT } from '../lib/export';

interface ExporterProps {
  active: boolean;
}

/**
 * Hidden render container.
 * Mounts all slides at fixed 1920x1080 with motion + 3D disabled, ready for capture.
 */
export const Exporter = forwardRef<HTMLDivElement, ExporterProps>(function Exporter(
  { active },
  ref,
) {
  if (!active) return null;

  return (
    <div
      ref={ref}
      aria-hidden
      className="export-root"
      style={{
        position: 'fixed',
        top: 0,
        left: '-200vw',
        width: SLIDE_WIDTH,
        height: 'auto',
        zIndex: -1,
        background: 'oklch(10% 0.02 260)',
        pointerEvents: 'none',
      }}
    >
      <MotionConfig reducedMotion="always" transition={{ duration: 0 }}>
        {slides.map((s) => {
          const C = s.Component;
          return (
            <div
              key={s.id}
              data-slide-export
              data-slide-id={s.id}
              data-slide-title={s.title}
              style={{
                width: SLIDE_WIDTH,
                height: SLIDE_HEIGHT,
                overflow: 'hidden',
                position: 'relative',
                contain: 'layout paint',
              }}
            >
              <C />
            </div>
          );
        })}
      </MotionConfig>
    </div>
  );
});
