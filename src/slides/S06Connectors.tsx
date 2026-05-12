import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';
import { HubScene } from '../scenes/HubScene';

interface Connector {
  name: string;
  category: string;
  color: string;
}

const connectors: Connector[] = [
  { name: 'Google Drive', category: 'arquivos', color: 'oklch(72% 0.18 250)' },
  { name: 'Google Sheets', category: 'planilhas', color: 'oklch(82% 0.14 165)' },
  { name: 'Gmail', category: 'email', color: 'oklch(78% 0.16 35)' },
  { name: 'Calendar', category: 'agenda', color: 'oklch(70% 0.22 295)' },
  { name: 'Notion', category: 'docs', color: 'oklch(92% 0.005 260)' },
  { name: 'HubSpot', category: 'crm', color: 'oklch(78% 0.16 35)' },
  { name: 'Supabase', category: 'banco', color: 'oklch(82% 0.14 165)' },
  { name: 'Canva', category: 'design', color: 'oklch(72% 0.18 250)' },
  { name: 'n8n', category: 'automação', color: 'oklch(70% 0.22 295)' },
  { name: 'Miro', category: 'whiteboard', color: 'oklch(78% 0.16 35)' },
  { name: 'Outlook 365', category: 'email', color: 'oklch(72% 0.18 250)' },
  { name: 'Exa', category: 'pesquisa', color: 'oklch(82% 0.14 165)' },
];

export function S06Connectors() {
  return (
    <SlideFrame background={<HubScene />}>
      <div className="space-y-10">
        <div className="grid grid-cols-2 gap-12 items-end">
          <div className="space-y-5">
            <motion.span
              {...fadeUp(0.1)}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue"
            >
              05 · Pontes oficiais
            </motion.span>
            <motion.h2
              {...fadeUp(0.22)}
              className="font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[1] tracking-tight font-bold"
            >
              <span className="gradient-text">Conectores.</span>
            </motion.h2>
          </div>
          <motion.p {...fadeUp(0.35)} className="text-lg text-ink-200 leading-relaxed max-w-[520px]">
            Pontes nativas entre o Claude e os sistemas onde sua empresa já trabalha.
            <br />
            <span className="text-ink-400">Sem API. Sem integração customizada. Só login.</span>
          </motion.p>
        </div>

        <div className="grid grid-cols-6 gap-3">
          {connectors.map((c, i) => (
            <motion.div
              key={c.name}
              {...fadeUp(0.4 + i * 0.04)}
              whileHover={{ y: -3, scale: 1.02 }}
              className="glass rounded-2xl p-4 flex flex-col gap-2 border border-white/5 hover:border-white/10 transition"
            >
              <div
                className="w-8 h-8 rounded-lg grid place-items-center font-mono text-xs font-bold"
                style={{ background: `${c.color}1F`, color: c.color }}
              >
                {c.name.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-100 leading-tight">{c.name}</div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-ink-400 mt-0.5">
                  {c.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp(0.95)}
          className="text-center text-ink-400 text-sm font-mono uppercase tracking-wider"
        >
          Conector não é integração que você liga. É braço que o Claude estende.
        </motion.div>
      </div>
    </SlideFrame>
  );
}
