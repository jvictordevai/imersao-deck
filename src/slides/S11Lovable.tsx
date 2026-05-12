import { motion } from 'framer-motion';
import { SlideFrame } from '../components/SlideFrame';
import { fadeUp } from '../lib/motion';

interface Quadrant {
  title: string;
  tagline: string;
  items: string[];
  color: string;
}

const quadrants: Quadrant[] = [
  {
    title: 'Dados em tempo real',
    tagline: 'Onde o dado vive',
    items: ['Google Sheets', 'Excel 365', 'Supabase', 'Postgres', 'Airtable'],
    color: 'oklch(72% 0.18 250)',
  },
  {
    title: 'Pagamento e financeiro',
    tagline: 'Onde o dinheiro flui',
    items: ['Stripe', 'Mercado Pago', 'Pagar.me', 'Asaas'],
    color: 'oklch(82% 0.14 165)',
  },
  {
    title: 'Comunicação',
    tagline: 'Onde a empresa fala',
    items: ['Resend', 'WhatsApp Business', 'Twilio', 'SendGrid'],
    color: 'oklch(78% 0.16 35)',
  },
  {
    title: 'Automação',
    tagline: 'Onde o robô trabalha',
    items: ['n8n', 'Zapier', 'Make', 'webhooks'],
    color: 'oklch(70% 0.22 295)',
  },
];

export function S11Lovable() {
  return (
    <SlideFrame>
      <div className="space-y-12">
        <div className="grid grid-cols-2 gap-12 items-end">
          <div className="space-y-5">
            <motion.span
              {...fadeUp(0.1)}
              className="font-mono text-[11px] uppercase tracking-[0.3em] text-accent-blue"
            >
              10 · A camada de construção
            </motion.span>
            <motion.h2
              {...fadeUp(0.22)}
              className="font-display text-[clamp(2.2rem,4.5vw,4.8rem)] leading-[1] tracking-tight font-bold"
            >
              <span className="gradient-text">Lovable.</span>
            </motion.h2>
          </div>
          <motion.p {...fadeUp(0.35)} className="text-lg text-ink-200 leading-relaxed max-w-[520px]">
            Texto vira interface conectada. Mesma lógica do Claude: conector nativo. Liga
            uma vez, usa pra sempre.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {quadrants.map((q, i) => (
            <motion.div
              key={q.title}
              {...fadeUp(0.4 + i * 0.12)}
              whileHover={{ y: -4 }}
              className="glass rounded-3xl p-7 border border-white/5 relative overflow-hidden"
            >
              <div
                className="absolute -top-12 -right-12 w-44 h-44 rounded-full blur-3xl opacity-20"
                style={{ background: q.color }}
              />
              <div className="flex items-start justify-between relative">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink-100">{q.title}</h3>
                  <div className="font-mono text-[10px] uppercase tracking-wider text-ink-400 mt-1">
                    {q.tagline}
                  </div>
                </div>
                <div
                  className="w-10 h-10 rounded-xl grid place-items-center text-xl font-bold"
                  style={{ background: `${q.color}1F`, color: q.color }}
                >
                  ◇
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-2 relative">
                {q.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full px-3 py-1 border border-white/10 bg-white/[0.03] text-sm text-ink-200"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideFrame>
  );
}
