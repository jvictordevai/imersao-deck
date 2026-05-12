import { motion, AnimatePresence } from 'framer-motion';
import { slides } from '../lib/slides';

interface OverviewProps {
  open: boolean;
  current: number;
  onClose: () => void;
  onJump: (index: number) => void;
}

export function Overview({ open, current, onClose, onJump }: OverviewProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="screen-only fixed inset-0 z-50 bg-ink-950/85 backdrop-blur-xl overflow-auto no-scrollbar p-10"
          onClick={onClose}
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-3xl font-semibold text-ink-100">
                Visão geral
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="glass rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-ink-200/80 hover:text-ink-100"
              >
                Fechar · Esc
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {slides.map((slide, i) => {
                const isActive = i === current;
                return (
                  <motion.button
                    key={slide.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onJump(i);
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                    whileHover={{ y: -2 }}
                    className={`text-left rounded-xl overflow-hidden glass transition border ${
                      isActive ? 'border-accent-blue/60 ring-2 ring-accent-blue/20' : 'border-white/5'
                    }`}
                  >
                    <div className="aspect-[16/9] bg-gradient-to-br from-ink-900 to-ink-800 grid place-items-center relative overflow-hidden">
                      <span className="font-display text-5xl text-ink-700/40 font-bold">{slide.id}</span>
                      {isActive && (
                        <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                      )}
                    </div>
                    <div className="px-3 py-2.5 border-t border-white/5">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-ink-400">
                        Slide {slide.id}
                      </div>
                      <div className="text-sm text-ink-100 font-medium truncate">{slide.title}</div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
