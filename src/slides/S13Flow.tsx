import { motion } from 'framer-motion';
import { QRCodeSVG } from 'qrcode.react';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';

const OPENACADEMY_URL = 'https://openacademyai.jvictordev.expert';

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
      <div className="space-y-10">
        <div className="space-y-5">
          <motion.span
            {...fadeUp(0.1)}
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue"
          >
            12 · A partir daqui
          </motion.span>
          <motion.h2
            {...fadeUp(0.22)}
            className="font-display text-[clamp(2rem,4vw,4.2rem)] leading-[1.05] tracking-tight font-bold max-w-[1100px]"
          >
            Acabou a teoria.
            <br />
            <span className="gradient-text">Vamos abrir o Claude.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-10 items-start">
          <div className="grid grid-cols-3 gap-3">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUp(0.4 + i * 0.08)}
                whileHover={{ x: 3 }}
                className="glass rounded-2xl p-5 border border-white/5 flex items-start gap-4"
              >
                <div className="font-mono text-2xl font-bold text-accent-blue/60 tabular-nums">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink-100 leading-tight">
                    {s.t}
                  </h3>
                  <p className="text-xs text-ink-400 mt-1 leading-relaxed">{s.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.aside
            {...fadeUp(0.6)}
            className="glass-strong rounded-3xl p-6 border border-accent-blue/30 flex flex-col items-center gap-3 w-[260px] shrink-0"
            style={{ boxShadow: '0 0 80px oklch(72% 0.18 250 / 0.18)' }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-blue">
              Material aberto
            </div>
            <div className="font-display text-lg font-semibold text-ink-100 text-center leading-tight">
              Documentação<br />completa em PT-BR
            </div>
            <div className="rounded-2xl bg-white p-3" aria-label="QR code para openacademy">
              <QRCodeSVG
                value={OPENACADEMY_URL}
                size={180}
                level="M"
                marginSize={0}
                fgColor="#0a0a14"
                bgColor="#ffffff"
              />
            </div>
            <div className="font-mono text-xs text-ink-300 break-all text-center leading-tight">
              openacademyai.jvictordev.expert
            </div>
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-400 text-center">
              Aponte a câmera
            </div>
          </motion.aside>
        </div>

        <motion.div
          {...fadeUp(1.05)}
          className="flex items-center justify-between glass rounded-2xl px-6 py-4 border border-white/5"
        >
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
                <span
                  key={k}
                  className="rounded-full px-3 py-1 border border-white/10 bg-white/[0.03] text-ink-200"
                >
                  <span className="text-accent-blue">{k}</span>{' '}
                  <span className="text-ink-400 ml-1">{v}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-[10px] uppercase tracking-wider text-ink-400">
              Próximo
            </div>
            <div className="font-display text-xl font-semibold text-ink-100">
              Demonstração ao vivo
            </div>
          </div>
        </motion.div>
      </div>
    </SlideFrame>
  );
}
