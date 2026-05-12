import { motion, AnimatePresence } from 'framer-motion';

export interface ExportProgressState {
  current: number;
  total: number;
  label: string;
}

interface ExportProgressProps {
  state: ExportProgressState | null;
}

export function ExportProgress({ state }: ExportProgressProps) {
  return (
    <AnimatePresence>
      {state && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="screen-only fixed inset-0 z-[60] bg-ink-950/85 backdrop-blur-xl grid place-items-center"
        >
          <motion.div
            initial={{ y: 20, scale: 0.95 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 20, scale: 0.95 }}
            className="glass-strong rounded-3xl p-10 w-[460px] border border-white/10"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue mb-2">
              Exportando
            </div>
            <div className="font-display text-2xl font-semibold text-ink-100 mb-1 truncate">
              {state.label}
            </div>
            <div className="text-sm text-ink-400 mb-6 font-mono tabular-nums">
              {state.current} de {state.total} slides
            </div>
            <div className="h-1.5 w-full bg-ink-800/60 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent-blue via-accent-violet to-accent-ember"
                initial={{ width: 0 }}
                animate={{ width: `${(state.current / state.total) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
