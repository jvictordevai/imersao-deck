import { motion } from 'framer-motion';
import { slides } from '../lib/slides';
import { ExportMenu, type ExportFormat } from './ExportMenu';

interface ChromeProps {
  index: number;
  total: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onExport: (format: ExportFormat) => void;
  onOverview: () => void;
}

export function Chrome({ index, total, isFullscreen, onToggleFullscreen, onExport, onOverview }: ChromeProps) {
  const progress = ((index + 1) / total) * 100;

  return (
    <>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="screen-only fixed top-0 left-0 right-0 z-40 px-6 py-4 flex items-center justify-between pointer-events-none"
      >
        <div className="flex items-center gap-3 glass rounded-full px-4 py-1.5 pointer-events-auto">
          <span className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
          <span className="font-mono text-[11px] tracking-wider uppercase text-ink-200/80">
            Imersão IA · 2026
          </span>
        </div>

        <div className="glass rounded-full px-4 py-1.5 flex items-center gap-3 pointer-events-auto">
          <button
            type="button"
            onClick={onOverview}
            className="text-[11px] font-mono uppercase tracking-wider text-ink-200/70 hover:text-ink-100 transition"
            title="Visão geral (O)"
          >
            Slides
          </button>
          <span className="text-ink-700">·</span>
          <ExportMenu onPick={onExport} />
          <span className="text-ink-700">·</span>
          <button
            type="button"
            onClick={onToggleFullscreen}
            className="text-[11px] font-mono uppercase tracking-wider text-ink-200/70 hover:text-ink-100 transition"
            title="Tela cheia (F)"
          >
            {isFullscreen ? 'Sair' : 'Cheia'}
          </button>
        </div>
      </motion.div>

      <div className="screen-only fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
        <div className="h-[2px] w-full bg-ink-800/40">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-ember"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <div className="px-6 py-3 flex items-center justify-between">
          <div className="glass rounded-full px-3 py-1 pointer-events-auto">
            <span className="font-mono text-[11px] tracking-wider text-ink-200/70">
              {String(index + 1).padStart(2, '0')}
              <span className="text-ink-700"> / </span>
              {String(total).padStart(2, '0')}
            </span>
          </div>
          <div className="glass rounded-full px-3 py-1 pointer-events-auto">
            <span className="font-mono text-[10px] tracking-wider text-ink-400">
              {slides[index]?.title}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
