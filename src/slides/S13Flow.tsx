import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';

const steps = [
  { n: '01', t: 'Claude analisa planilha real', sub: 'Vendas · Financeiro · Operações' },
  { n: '02', t: 'Claude monta prompt para Lovable', sub: 'Componentes · filtros · paleta' },
  { n: '03', t: 'Dashboard conectado ao Sheets', sub: 'Atualização em tempo real' },
  { n: '04', t: 'Evolui para mini-CRM', sub: 'Mesmo projeto · mesma base' },
  { n: '05', t: 'Tour pelos conectores Lovable', sub: 'Stripe · Resend · n8n · WhatsApp' },
  { n: '06', t: 'Aikido protege o ambiente', sub: 'Scan automático · alertas' },
];

export function S13Flow() {
  return (
    <SlideFrame>
      <div className="space-y-14">
        <div className="space-y-5">
          <motion.span
            {...fadeUp(0.1)}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue"
          >
            12 · A partir daqui
          </motion.span>
          <motion.h2
            {...fadeUp(0.22)}
            className="font-display text-[clamp(2.2rem,4.5vw,4.8rem)] leading-[1.05] tracking-tight font-bold max-w-[1100px]"
          >
            Acabou a teoria.
            <br />
            <span className="gradient-text">Vamos abrir o Claude.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              {...fadeUp(0.4 + i * 0.08)}
              whileHover={{ x: 3 }}
              className="glass rounded-2xl p-6 border border-white/5 flex items-start gap-5"
            >
              <div className="font-mono text-3xl font-bold text-accent-blue/60 tabular-nums">
                {s.n}
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-100 leading-tight">
                  {s.t}
                </h3>
                <p className="text-sm text-ink-400 mt-1 leading-relaxed">{s.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div {...fadeUp(0.95)} className="flex items-center justify-between glass-strong rounded-3xl px-8 py-6 border border-white/10">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-400 mb-1">
              Atalhos
            </div>
            <div className="flex flex-wrap gap-2 font-mono text-xs">
              {[
                ['← →', 'navegar'],
                ['Space', 'avançar'],
                ['F', 'tela cheia'],
                ['O', 'visão geral'],
                ['⌘P', 'exportar PDF'],
              ].map(([k, v]) => (
                <span key={k} className="rounded-full px-3 py-1 border border-white/10 bg-white/[0.03] text-ink-200">
                  <span className="text-accent-blue">{k}</span> <span className="text-ink-400 ml-1">{v}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-400">Próximo</div>
            <div className="font-display text-2xl font-semibold text-ink-100">Demonstração ao vivo</div>
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
