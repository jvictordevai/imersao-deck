import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';
import { OrbitScene } from '../scenes/OrbitScene';

interface SkillItem {
  name: string;
  desc: string;
  tag: string;
}

const skills: SkillItem[] = [
  { name: 'Análise de Excel', desc: 'Abre arquivo, lê fórmulas, entende abas vinculadas.', tag: 'data' },
  { name: 'Análise estatística', desc: 'Segmentação, séries temporais, correlações, outliers.', tag: 'data' },
  { name: 'Operação de arquivos', desc: 'Escreve, edita, exporta PDF/CSV/Markdown.', tag: 'io' },
  { name: 'Visualização', desc: 'Gera gráficos diretamente do dado.', tag: 'viz' },
  { name: 'Documento estruturado', desc: 'Relatórios, decks, sumários executivos.', tag: 'doc' },
  { name: 'Pesquisa web', desc: 'Enriquece com benchmark e contexto externo.', tag: 'research' },
];

export function S04Skills() {
  return (
    <SlideFrame background={<OrbitScene />}>
      <div className="grid grid-cols-[1fr_1.05fr] gap-16 items-center">
        <div className="space-y-7">
          <motion.span
            {...fadeUp(0.1)}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue"
          >
            03 · O conceito que muda o jogo
          </motion.span>

          <motion.h2
            {...fadeUp(0.22)}
            className="font-display text-[clamp(2.4rem,5vw,5rem)] leading-[1] tracking-tight font-bold"
          >
            <span className="gradient-text">Skills.</span>
          </motion.h2>

          <motion.p {...fadeUp(0.35)} className="text-xl text-ink-200 leading-relaxed max-w-[480px]">
            Capacidades especializadas que o Claude <strong className="text-ink-100">carrega
            sozinho</strong> quando o contexto pede.
          </motion.p>

          <motion.p {...fadeUp(0.48)} className="text-base text-ink-400 leading-relaxed max-w-[460px]">
            São como funcionários especialistas vivendo dentro do mesmo cérebro. Você não
            configura nada — o pedido aciona a skill certa.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              {...fadeUp(0.4 + i * 0.06)}
              whileHover={{ y: -3 }}
              className="glass rounded-2xl p-5 flex flex-col gap-2 border border-white/5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-semibold text-ink-100">{s.name}</h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent-blue/70 glass rounded-full px-2 py-0.5">
                  {s.tag}
                </span>
              </div>
              <p className="text-sm text-ink-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
