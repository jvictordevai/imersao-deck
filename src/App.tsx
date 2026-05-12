import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { slides } from './lib/slides';
import { Chrome } from './components/Chrome';
import { Overview } from './components/Overview';
import { SlideStage } from './components/SlideStage';
import { Exporter } from './components/Exporter';
import { ExportProgress, type ExportProgressState } from './components/ExportProgress';
import type { ExportFormat } from './components/ExportMenu';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { useFullscreen } from './hooks/useFullscreen';
import {
  captureSlides,
  exportPDF,
  exportZipPNG,
  exportSinglePNG,
} from './lib/export';

function App() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [progress, setProgress] = useState<ExportProgressState | null>(null);
  const { isFullscreen, toggle: toggleFullscreen } = useFullscreen();
  const total = slides.length;
  const indexRef = useRef(index);
  const exporterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(total - 1, next));
      if (clamped === indexRef.current) return;
      setDirection(clamped > indexRef.current ? 1 : -1);
      setIndex(clamped);
      const url = new URL(window.location.href);
      url.hash = `#/${String(clamped + 1).padStart(2, '0')}`;
      window.history.replaceState(null, '', url.toString());
    },
    [total],
  );

  const next = useCallback(() => {
    if (overviewOpen) {
      setOverviewOpen(false);
      return;
    }
    goTo(indexRef.current + 1);
  }, [goTo, overviewOpen]);

  const prev = useCallback(() => {
    if (overviewOpen) {
      setOverviewOpen(false);
      return;
    }
    goTo(indexRef.current - 1);
  }, [goTo, overviewOpen]);

  const runExport = useCallback(
    async (format: ExportFormat) => {
      if (format === 'print') {
        window.print();
        return;
      }

      if (format === 'png-current') {
        // Mount exporter and capture only the current slide
        setExporting(true);
        await new Promise((r) => setTimeout(r, 400));
        if (!exporterRef.current) {
          setExporting(false);
          return;
        }
        try {
          setProgress({ current: 0, total: 1, label: slides[indexRef.current].title });
          const all = await captureSlides(exporterRef.current, {
            onProgress: () => undefined,
          });
          const target = all[indexRef.current];
          if (target) exportSinglePNG(target);
          setProgress({ current: 1, total: 1, label: 'Concluído' });
        } finally {
          setTimeout(() => {
            setExporting(false);
            setProgress(null);
          }, 500);
        }
        return;
      }

      setExporting(true);
      // Wait one paint cycle for Exporter to mount + R3F init
      await new Promise((r) => setTimeout(r, 500));

      if (!exporterRef.current) {
        setExporting(false);
        return;
      }

      try {
        const captured = await captureSlides(exporterRef.current, {
          onProgress: (current, total, label) => {
            setProgress({ current, total, label });
          },
        });

        if (format === 'pdf') {
          await exportPDF(captured);
        } else if (format === 'zip') {
          await exportZipPNG(captured);
        }
      } catch (err) {
        console.error('Export failed', err);
      } finally {
        setTimeout(() => {
          setExporting(false);
          setProgress(null);
        }, 400);
      }
    },
    [],
  );

  useKeyboardNav({
    onNext: next,
    onPrev: prev,
    onFirst: () => goTo(0),
    onLast: () => goTo(total - 1),
    onFullscreen: toggleFullscreen,
    onPrint: () => runExport('pdf'),
    onOverview: () => setOverviewOpen((v) => !v),
    enabled: !exporting,
  });

  useEffect(() => {
    const hash = window.location.hash.replace('#/', '');
    const parsed = parseInt(hash, 10);
    if (!Number.isNaN(parsed) && parsed >= 1 && parsed <= total) {
      setIndex(parsed - 1);
    }
  }, [total]);

  const currentSlide = useMemo(() => slides[index], [index]);
  const CurrentComponent = currentSlide.Component;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-ink-950">
      <div className="screen-only relative w-full h-full">
        <SlideStage index={index} direction={direction}>
          <CurrentComponent />
        </SlideStage>
      </div>

      <Chrome
        index={index}
        total={total}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onExport={runExport}
        onOverview={() => setOverviewOpen((v) => !v)}
      />

      <Overview
        open={overviewOpen}
        current={index}
        onClose={() => setOverviewOpen(false)}
        onJump={(i) => {
          setOverviewOpen(false);
          goTo(i);
        }}
      />

      <div className="screen-only fixed inset-0 z-10 grid grid-cols-[20%_60%_20%] pointer-events-none">
        <button
          type="button"
          aria-label="Slide anterior"
          onClick={prev}
          className="pointer-events-auto cursor-w-resize opacity-0"
        />
        <div />
        <button
          type="button"
          aria-label="Próximo slide"
          onClick={next}
          className="pointer-events-auto cursor-e-resize opacity-0"
        />
      </div>

      <Exporter ref={exporterRef} active={exporting} />
      <ExportProgress state={progress} />
    </div>
  );
}

export default App;
