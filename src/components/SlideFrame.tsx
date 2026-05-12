import { type ReactNode } from 'react';
import clsx from 'clsx';

interface SlideFrameProps {
  children: ReactNode;
  background?: ReactNode;
  className?: string;
  noGrid?: boolean;
}

export function SlideFrame({ children, background, className, noGrid }: SlideFrameProps) {
  return (
    <section
      className={clsx(
        'w-full h-full relative overflow-hidden bg-ink-950 text-ink-100',
        'flex items-center justify-center',
        'slide-print print-hide-3d',
        className,
      )}
    >
      {/* Background scene */}
      <div className="absolute inset-0 z-0 pointer-events-none">{background}</div>

      {/* Optional dotted grid */}
      {!noGrid && <div className="absolute inset-0 z-[1] grid-bg pointer-events-none" />}

      {/* Vignette */}
      <div className="absolute inset-0 z-[2] pointer-events-none [background:radial-gradient(ellipse_at_center,transparent_30%,oklch(10%_0.02_260)_100%)]" />

      {/* Content layer */}
      <div className="relative z-10 w-full h-full px-16 py-20 flex items-center">
        <div className="w-full max-w-[1400px] mx-auto">{children}</div>
      </div>
    </section>
  );
}
