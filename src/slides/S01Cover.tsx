import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';
import { GlobeScene } from '../scenes/GlobeScene';

export function S01Cover() {
  return (
    <SlideFrame background={<GlobeScene />}>
      <div className="flex flex-col gap-8 max-w-[1100px]">
        <motion.div {...fadeUp(0.1)} className="flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue">
            Imersão IA · Para Empresários
          </span>
          <span className="h-px w-12 bg-accent-blue/40" />
        </motion.div>

        <motion.h1
          {...fadeUp(0.25)}
          className="font-display text-[clamp(3rem,7vw,7.5rem)] leading-[0.95] tracking-tight font-bold"
        >
          Dashboards, <br />
          <span className="gradient-text glow-text">Banco de Dados</span>
          <br />
          e Automações.
        </motion.h1>

        <motion.p
          {...fadeUp(0.45)}
          className="text-xl md:text-2xl text-ink-400 max-w-[640px] leading-relaxed"
        >
          O que muda quando a IA conversa com os dados da sua empresa — e executa em
          cima deles.
        </motion.p>

        <motion.div
          {...fadeUp(0.65)}
          className="flex items-center gap-4 pt-4 font-mono text-xs uppercase tracking-wider text-ink-400"
        >
          <span className="glass rounded-full px-4 py-2">2 horas · ao vivo</span>
          <span className="glass rounded-full px-4 py-2">Claude · Lovable · Aikido</span>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
