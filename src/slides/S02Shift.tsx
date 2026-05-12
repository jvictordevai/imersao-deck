import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';
import { FlowScene } from '../scenes/FlowScene';

export function S02Shift() {
  return (
    <SlideFrame background={<FlowScene />}>
      <div className="grid grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <motion.span
            {...fadeUp(0.1)}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue"
          >
            01 · Mudança de fundo
          </motion.span>

          <motion.h2
            {...fadeUp(0.25)}
            className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] tracking-tight font-bold"
          >
            Antes, dado era <br />
            <span className="text-ink-400 line-through decoration-2 decoration-accent-ember/60">
              arquivo.
            </span>
            <br />
            Agora, dado é <span className="gradient-text">conversa.</span>
          </motion.h2>

          <motion.p {...fadeUp(0.5)} className="text-lg text-ink-400 max-w-[460px] leading-relaxed">
            A diferença não está no dado. Está em quem o lê, com que profundidade, e em
            quanto tempo.
          </motion.p>
        </div>

        <div className="space-y-6">
          {[
            { from: 'Planilha arquivada', to: 'Planilha analisada' },
            { from: 'Dashboard estático', to: 'Painel conversacional' },
            { from: 'Relatório mensal', to: 'Insight em segundos' },
            { from: 'Decisão por intuição', to: 'Decisão por evidência' },
          ].map((row, i) => (
            <motion.div
              key={i}
              {...fadeUp(0.4 + i * 0.1)}
              className="glass rounded-2xl px-6 py-5 flex items-center justify-between gap-6"
            >
              <span className="text-ink-400 text-sm md:text-base line-through decoration-accent-ember/40">
                {row.from}
              </span>
              <span className="text-ink-100 font-medium text-base md:text-lg">{row.to}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
