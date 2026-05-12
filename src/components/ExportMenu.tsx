import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type ExportFormat = 'pdf' | 'zip' | 'png-current' | 'print';

interface ExportMenuProps {
  onPick: (format: ExportFormat) => void;
}

const items: Array<{ format: ExportFormat; label: string; sub: string; badge?: string }> = [
  { format: 'pdf', label: 'PDF', sub: 'Deck inteiro · 1920×1080 · 2x DPI', badge: 'recomendado' },
  { format: 'zip', label: 'ZIP de PNGs', sub: 'Um arquivo PNG por slide, alta resolução' },
  { format: 'png-current', label: 'PNG · slide atual', sub: 'Captura apenas o slide visível' },
  { format: 'print', label: 'Imprimir (navegador)', sub: 'Diálogo de impressão nativo · fallback' },
];

export function ExportMenu({ onPick }: ExportMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('mousedown', onClick);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative pointer-events-auto">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="text-[11px] font-mono uppercase tracking-wider text-ink-200/70 hover:text-ink-100 transition"
        title="Exportar"
      >
        Exportar
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-0 top-full mt-3 w-[320px] glass-strong rounded-2xl p-2 border border-white/10 shadow-2xl"
          >
            {items.map((it) => (
              <button
                key={it.format}
                type="button"
                onClick={() => {
                  setOpen(false);
                  onPick(it.format);
                }}
                className="w-full text-left p-3 rounded-xl hover:bg-white/5 transition flex items-start gap-3 group"
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent-blue/70 mt-1 w-10 shrink-0">
                  {it.format === 'pdf' && '.pdf'}
                  {it.format === 'zip' && '.zip'}
                  {it.format === 'png-current' && '.png'}
                  {it.format === 'print' && 'doc'}
                </span>
                <span className="flex-1">
                  <span className="flex items-center gap-2">
                    <span className="text-sm font-medium text-ink-100">{it.label}</span>
                    {it.badge && (
                      <span className="text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent-blue/15 text-accent-blue">
                        {it.badge}
                      </span>
                    )}
                  </span>
                  <span className="block text-[11px] text-ink-400 mt-0.5 leading-tight">
                    {it.sub}
                  </span>
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
