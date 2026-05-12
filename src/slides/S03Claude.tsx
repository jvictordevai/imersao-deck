import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';

interface Pillar {
  title: string;
  desc: string;
  icon: string;
  color: string;
}

const pillars: Pillar[] = [
  {
    title: 'Contexto longo',
    desc: '1 milhão de tokens. Lê planilha inteira, com todas as abas, sem perder o fio.',
    icon: '◇',
    color: 'oklch(72% 0.18 250)',
  },
  {
    title: 'Raciocínio profundo',
    desc: 'Pensa em etapas, valida hipótese, justifica conclusão antes de te entregar.',
    icon: '◈',
    color: 'oklch(70% 0.22 295)',
  },
  {
    title: 'Ação real',
    desc: 'Executa código, lê arquivos, conecta sistemas. Não é só responder.',
    icon: '◉',
    color: 'oklch(78% 0.16 35)',
  },
];

export function S03Claude() {
  return (
    <SlideFrame>
      <div className="space-y-14">
        <div className="space-y-6">
          <motion.span
            {...fadeUp(0.1)}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue"
          >
            02 · A ferramenta-base
          </motion.span>

          <motion.h2
            {...fadeUp(0.2)}
            className="font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.05] tracking-tight font-bold max-w-[1000px]"
          >
            Claude é o <span className="gradient-text">cérebro</span> que vamos usar.
          </motion.h2>

          <motion.p {...fadeUp(0.35)} className="text-lg text-ink-400 max-w-[700px]">
            Não é chatbot pra responder pergunta. É colega de trabalho que lê, raciocina e
            executa.
          </motion.p>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(0.5 + i * 0.12)}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-8 flex flex-col gap-5 border border-white/5 hover:border-white/10 transition"
            >
              <div
                className="w-12 h-12 rounded-2xl grid place-items-center text-2xl font-bold"
                style={{ background: `${p.color}1F`, color: p.color }}
              >
                {p.icon}
              </div>
              <div>
                <h3 className="font-display text-2xl font-semibold text-ink-100">{p.title}</h3>
                <p className="text-ink-400 mt-2 leading-relaxed text-[15px]">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
