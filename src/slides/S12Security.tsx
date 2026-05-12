import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';
import { ShieldScene } from '../scenes/ShieldScene';

interface Coverage {
  code: string;
  name: string;
  desc: string;
}

const coverage: Coverage[] = [
  { code: 'SCA', name: 'Dependências', desc: 'Bibliotecas com falha conhecida.' },
  { code: 'SAST', name: 'Código-fonte', desc: 'Padrões inseguros no que foi escrito.' },
  { code: 'DAST', name: 'App rodando', desc: 'Vulnerabilidade em runtime.' },
  { code: 'IaC', name: 'Infraestrutura', desc: 'Configuração de cloud mal feita.' },
  { code: 'Secrets', name: 'Chaves expostas', desc: 'Token ou senha vazada em commit.' },
  { code: 'Container', name: 'Imagem', desc: 'Vulnerabilidade na base do container.' },
];

export function S12Security() {
  return (
    <SlideFrame background={<ShieldScene />}>
      <div className="space-y-12">
        <div className="grid grid-cols-2 gap-12 items-end">
          <div className="space-y-5">
            <motion.span
              {...fadeUp(0.1)}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-mint"
            >
              11 · A camada esquecida
            </motion.span>
            <motion.h2
              {...fadeUp(0.22)}
              className="font-display text-[clamp(2.2rem,4.5vw,4.8rem)] leading-[1] tracking-tight font-bold"
            >
              <span className="gradient-text">Aikido.</span>
            </motion.h2>
            <motion.p {...fadeUp(0.35)} className="text-lg text-ink-200 leading-relaxed max-w-[480px]">
              Tudo isso roda em cima da sua operação. Quem está protegendo?
            </motion.p>
          </div>
          <motion.div {...fadeUp(0.5)} className="glass-strong rounded-3xl p-6 border border-accent-mint/30">
            <div className="font-mono text-[10px] uppercase tracking-wider text-accent-mint mb-2">
              Plataforma all-in-one
            </div>
            <p className="text-ink-100 text-[17px] leading-relaxed">
              Monitoramento contínuo de vulnerabilidades em <strong>código</strong>,{' '}
              <strong>dependências</strong>, <strong>infraestrutura</strong> e{' '}
              <strong>cloud</strong>.
            </p>
            <p className="text-ink-400 text-sm mt-3 leading-relaxed">
              Substitui Snyk, Wiz e SonarQube em um só painel.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {coverage.map((c, i) => (
            <motion.div
              key={c.code}
              {...fadeUp(0.55 + i * 0.08)}
              whileHover={{ y: -3 }}
              className="glass rounded-2xl p-5 border border-white/5"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="font-display text-lg font-semibold text-ink-100">{c.name}</div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-accent-mint glass rounded-full px-2 py-0.5">
                  {c.code}
                </span>
              </div>
              <p className="text-sm text-ink-400 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp(1.05)}
          className="text-center text-ink-400 text-sm font-mono uppercase tracking-wider"
        >
          Construir rápido sem proteger é montar passivo.
        </motion.div>
      </div>
    </SlideFrame>
  );
}
