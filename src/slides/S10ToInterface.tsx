import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';

export function S10ToInterface() {
  return (
    <SlideFrame>
      <div className="space-y-14">
        <div className="space-y-5">
          <motion.span
            {...fadeUp(0.1)}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue"
          >
            09 · A virada
          </motion.span>
          <motion.h2
            {...fadeUp(0.22)}
            className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] tracking-tight font-bold max-w-[1100px]"
          >
            Do diagnóstico no Claude
            <br />
            <span className="gradient-text">à interface no Lovable.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* Left: Claude output */}
          <motion.div {...fadeUp(0.4)} className="glass rounded-3xl p-7 border border-white/5">
            <div className="font-mono text-[10px] uppercase tracking-wider text-accent-blue mb-3">
              Claude → relatório
            </div>
            <div className="space-y-2 font-mono text-xs text-ink-200">
              <div className="text-ink-400"># Diagnóstico comercial Q1</div>
              <div>KPIs: <span className="text-accent-blue">conv 18.4% · CAC R$ 312 · LTV R$ 4.2k</span></div>
              <div>Gargalo: <span className="text-accent-ember">onboarding &gt; 14d</span></div>
              <div className="text-ink-400">## Componentes sugeridos</div>
              <div>- Hero KPI (4 cards)</div>
              <div>- Funil por vendedor</div>
              <div>- Cohort de retenção</div>
              <div>- Tabela clientes top-20</div>
              <div className="text-ink-400">## Filtros</div>
              <div>- período · vendedor · produto</div>
            </div>
          </motion.div>

          {/* Arrow */}
          <motion.div {...fadeUp(0.55)} className="flex flex-col items-center gap-2">
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-400">prompt</div>
            <div className="text-4xl text-accent-blue">→</div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-400">build</div>
          </motion.div>

          {/* Right: Lovable dashboard mock */}
          <motion.div {...fadeUp(0.7)} className="glass-strong rounded-3xl p-5 border border-white/10">
            <div className="font-mono text-[10px] uppercase tracking-wider text-accent-violet mb-3">
              Lovable → dashboard
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[
                { l: 'Conv', v: '18.4%', c: 'oklch(72% 0.18 250)' },
                { l: 'CAC', v: 'R$312', c: 'oklch(70% 0.22 295)' },
                { l: 'LTV', v: 'R$4.2k', c: 'oklch(82% 0.14 165)' },
                { l: 'Churn', v: '3.1%', c: 'oklch(78% 0.16 35)' },
              ].map((k) => (
                <div key={k.l} className="rounded-xl p-3 border border-white/10 bg-white/[0.02]">
                  <div className="text-[9px] font-mono uppercase tracking-wider text-ink-400">{k.l}</div>
                  <div className="text-lg font-display font-bold" style={{ color: k.c }}>
                    {k.v}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 rounded-xl p-3 border border-white/10 bg-white/[0.02] h-[80px] relative overflow-hidden">
              <div className="font-mono text-[9px] uppercase tracking-wider text-ink-400 mb-1">
                Funil por vendedor
              </div>
              <svg viewBox="0 0 200 50" className="w-full h-12">
                <path
                  d="M 0 40 Q 50 20 100 30 T 200 10"
                  fill="none"
                  stroke="oklch(72% 0.18 250)"
                  strokeWidth="2"
                />
                <path
                  d="M 0 45 Q 50 35 100 40 T 200 25"
                  fill="none"
                  stroke="oklch(70% 0.22 295)"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </svg>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {['período', 'vendedor', 'produto'].map((f) => (
                <div
                  key={f}
                  className="rounded-lg px-2 py-1 border border-white/10 bg-white/[0.02] font-mono text-[10px] uppercase tracking-wider text-ink-400 text-center"
                >
                  {f}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.95)}
          className="text-center text-ink-400 text-sm font-mono uppercase tracking-wider"
        >
          O Claude descreve a interface. O Lovable executa.
        </motion.div>
      </div>
    </SlideFrame>
  );
}
