import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';

interface Combo {
  skill: string;
  connector: string;
  result: string;
}

const combos: Combo[] = [
  {
    skill: 'Análise de Excel',
    connector: 'Google Drive',
    result: 'Diagnóstico direto na planilha compartilhada do time.',
  },
  {
    skill: 'Documento estruturado',
    connector: 'Gmail',
    result: 'Relatório executivo enviado por email, formatado, em segundos.',
  },
  {
    skill: 'Análise estatística',
    connector: 'HubSpot',
    result: 'Diagnóstico de pipeline comercial direto do CRM.',
  },
  {
    skill: 'Visualização',
    connector: 'Canva / Slides',
    result: 'Gráficos prontos pra apresentação executiva.',
  },
];

export function S07SkillsXConnectors() {
  return (
    <SlideFrame>
      <div className="space-y-14">
        <div className="space-y-5">
          <motion.span
            {...fadeUp(0.1)}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue"
          >
            06 · A multiplicação
          </motion.span>
          <motion.h2
            {...fadeUp(0.22)}
            className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] tracking-tight font-bold max-w-[1100px]"
          >
            Skill é <span className="text-accent-blue">o que ele sabe fazer.</span>
            <br />
            Conector é <span className="text-accent-violet">onde ele aplica.</span>
          </motion.h2>
        </div>

        <motion.div
          {...fadeUp(0.4)}
          className="glass-strong rounded-3xl py-10 px-8 flex items-center justify-center gap-8"
        >
          <div className="text-center">
            <div className="font-mono text-[10px] uppercase tracking-wider text-accent-blue mb-2">skill</div>
            <div className="font-display text-3xl md:text-4xl font-bold text-ink-100">o que ele sabe</div>
          </div>
          <div className="text-4xl text-ink-400 font-light">×</div>
          <div className="text-center">
            <div className="font-mono text-[10px] uppercase tracking-wider text-accent-violet mb-2">conector</div>
            <div className="font-display text-3xl md:text-4xl font-bold text-ink-100">onde aplica</div>
          </div>
          <div className="text-4xl text-ink-400 font-light">=</div>
          <div className="text-center">
            <div className="font-mono text-[10px] uppercase tracking-wider text-accent-ember mb-2">resultado</div>
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text">
              operação real
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4">
          {combos.map((c, i) => (
            <motion.div
              key={c.result}
              {...fadeUp(0.55 + i * 0.1)}
              className="glass rounded-2xl p-6 border border-white/5"
            >
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider">
                <span className="text-accent-blue">{c.skill}</span>
                <span className="text-ink-400">×</span>
                <span className="text-accent-violet">{c.connector}</span>
              </div>
              <p className="mt-3 text-ink-100 text-[17px] leading-relaxed">{c.result}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
