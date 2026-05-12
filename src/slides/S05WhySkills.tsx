import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';

export function S05WhySkills() {
  return (
    <SlideFrame>
      <div className="space-y-12">
        <div className="space-y-5">
          <motion.span
            {...fadeUp(0.1)}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue"
          >
            04 · A diferença prática
          </motion.span>
          <motion.h2
            {...fadeUp(0.2)}
            className="font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.05] tracking-tight font-bold max-w-[1100px]"
          >
            Sem skills, resposta genérica. <br />
            Com skills, <span className="gradient-text">análise executável.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <motion.div
            {...fadeUp(0.35)}
            className="glass rounded-3xl p-8 border border-white/5 relative"
          >
            <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-wider text-ink-400">
              IA genérica
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-ink-400 mb-4">
              Resposta superficial
            </div>
            <p className="text-ink-200 text-lg leading-relaxed italic">
              "Sua planilha parece ter dados de vendas. Para uma análise mais profunda,
              recomendo um especialista em BI..."
            </p>
            <div className="mt-6 flex gap-2 flex-wrap">
              {['❌ não abriu', '❌ sem números', '❌ sem ação'].map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-ink-400 px-2 py-1 rounded-full border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp(0.5)}
            className="glass rounded-3xl p-8 border border-accent-blue/30 relative"
            style={{ boxShadow: '0 0 80px oklch(72% 0.18 250 / 0.12)' }}
          >
            <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-wider text-accent-blue">
              Claude + Skills
            </div>
            <div className="font-mono text-xs uppercase tracking-wider text-accent-blue mb-4">
              Diagnóstico executivo
            </div>
            <p className="text-ink-100 text-lg leading-relaxed">
              <span className="text-accent-blue font-medium">Identifiquei 3 padrões críticos</span>{' '}
              em <span className="font-mono text-base">vendas-Q1.xlsx</span>:
            </p>
            <ul className="mt-3 space-y-2 text-ink-200 text-[15px]">
              <li className="flex gap-2">
                <span className="text-accent-blue">→</span>
                <span>Vendedor X: ticket -38%, conversão 2x. Vendendo errado, não pouco.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-blue">→</span>
                <span>3 clientes = 41% da receita. Concentração crítica.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-blue">→</span>
                <span>Onboarding rápido = LTV 3.2x maior.</span>
              </li>
            </ul>
            <div className="mt-6 flex gap-2 flex-wrap">
              {['✓ leu arquivo', '✓ cifrão', '✓ ação'].map((t) => (
                <span key={t} className="font-mono text-[10px] uppercase tracking-wider text-accent-mint px-2 py-1 rounded-full border border-accent-mint/30 bg-accent-mint/5">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.75)}
          className="text-center text-ink-400 text-sm font-mono uppercase tracking-wider"
        >
          A diferença não está no modelo — está em o que ele pode efetivamente fazer.
        </motion.div>
      </div>
    </SlideFrame>
  );
}
