import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';
import { PipelineScene } from '../scenes/PipelineScene';

interface Step {
  n: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  { n: '01', title: 'Recebe arquivo', desc: 'Identifica formato, abas, tamanho, codificação.' },
  { n: '02', title: 'Carrega skill', desc: 'Ativa análise de Excel automaticamente.' },
  { n: '03', title: 'Inspeciona', desc: 'Tipos de coluna, integridade, duplicatas, lacunas.' },
  { n: '04', title: 'Raciocina', desc: 'Segmenta, calcula KPIs, encontra padrões.' },
  { n: '05', title: 'Entrega', desc: 'Diagnóstico, recomendações, próximos passos.' },
];

export function S08Pipeline() {
  return (
    <SlideFrame background={<PipelineScene />}>
      <div className="space-y-14">
        <div className="space-y-5">
          <motion.span
            {...fadeUp(0.1)}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue"
          >
            07 · O que acontece nos bastidores
          </motion.span>
          <motion.h2
            {...fadeUp(0.22)}
            className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.05] tracking-tight font-bold max-w-[1100px]"
          >
            Quando você joga uma planilha,
            <br />
            <span className="gradient-text">isto acontece em segundos.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-5 gap-3 relative">
          <div className="absolute left-0 right-0 top-[44px] h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent pointer-events-none" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              {...fadeUp(0.4 + i * 0.12)}
              className="glass rounded-2xl p-6 border border-white/5 relative"
            >
              <div className="w-[88px] h-[88px] -mt-12 mx-auto rounded-2xl glass-strong border border-accent-blue/20 grid place-items-center mb-4 font-mono text-xl font-bold text-accent-blue">
                {s.n}
              </div>
              <h3 className="font-display text-xl font-semibold text-ink-100 text-center">
                {s.title}
              </h3>
              <p className="text-sm text-ink-400 mt-2 leading-relaxed text-center">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp(1.0)}
          className="text-center text-ink-400 text-sm font-mono uppercase tracking-wider"
        >
          Você não precisa pedir nada disso. Ele faz porque entendeu o pedido.
        </motion.div>
      </div>
    </SlideFrame>
  );
}
