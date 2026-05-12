import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';

interface Insight {
  label: string;
  example: string;
  color: string;
  glyph: string;
}

const insights: Insight[] = [
  {
    label: 'Diagnóstico',
    example:
      'Vendedor X tem ticket médio 38% menor mas conversão 2x maior. Está vendendo errado, não pouco.',
    color: 'oklch(72% 0.18 250)',
    glyph: '◇',
  },
  {
    label: 'Padrão oculto',
    example:
      'Clientes que compram nos primeiros 14 dias têm LTV 3.2x maior. Onboarding rápido = retenção.',
    color: 'oklch(70% 0.22 295)',
    glyph: '◈',
  },
  {
    label: 'Risco silencioso',
    example:
      '3 clientes representam 41% da receita anual. Concentração crítica não monitorada.',
    color: 'oklch(78% 0.16 35)',
    glyph: '◉',
  },
];

export function S09InsightTypes() {
  return (
    <SlideFrame>
      <div className="space-y-14">
        <div className="space-y-5">
          <motion.span
            {...fadeUp(0.1)}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue"
          >
            08 · O tipo de saída
          </motion.span>
          <motion.h2
            {...fadeUp(0.22)}
            className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] tracking-tight font-bold max-w-[1100px]"
          >
            Não é resumo da planilha.
            <br />
            É <span className="gradient-text">leitura de negócio.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {insights.map((it, i) => (
            <motion.div
              key={it.label}
              {...fadeUp(0.4 + i * 0.15)}
              whileHover={{ y: -6 }}
              className="glass rounded-3xl p-8 border border-white/5 flex flex-col gap-5 relative overflow-hidden"
            >
              <div
                className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-30"
                style={{ background: it.color }}
              />
              <div
                className="w-14 h-14 rounded-2xl grid place-items-center text-3xl font-bold relative"
                style={{ background: `${it.color}1F`, color: it.color }}
              >
                {it.glyph}
              </div>
              <h3 className="font-display text-2xl font-semibold text-ink-100">{it.label}</h3>
              <p className="text-ink-200 text-[17px] leading-relaxed italic">"{it.example}"</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp(0.95)}
          className="text-center text-ink-400 text-sm font-mono uppercase tracking-wider"
        >
          O que um analista sênior entregaria depois de dois dias estudando seus dados.
        </motion.div>
      </div>
    </SlideFrame>
  );
}
