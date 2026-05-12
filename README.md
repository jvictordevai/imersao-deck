# Imersão IA — Dashboards, Banco de Dados e Automações

Deck interativo em React + Three.js + Framer Motion para a aula da Imersão IA para Empresários.

13 slides, 6 cenas 3D, modo apresentação fullscreen, navegação por teclado/clicker, e exportação PDF nativa.

## Stack

- **Vite 7** + **React 19** + **TypeScript**
- **Tailwind CSS v3** — design system tokens (cores, tipografia, animações)
- **React Three Fiber + Three.js** — cenas 3D por slide
- **Framer Motion** — transições entre slides e micro-animações

## Como rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173/`.

Outros scripts:

```bash
npm run build       # build de produção
npm run preview     # serve o build
npm run typecheck   # tsc --noEmit
```

## Navegação

| Atalho | Ação |
|---|---|
| `→`, `↓`, `Space`, `Enter`, `PageDown` | Próximo slide |
| `←`, `↑`, `Backspace`, `PageUp` | Slide anterior |
| `Home` / `End` | Primeiro / último |
| `F` | Tela cheia (toggle) |
| `O` | Visão geral (grid de todos os slides) |
| `Esc` | Fecha visão geral |
| `⌘P` / `Ctrl+P` | Exporta o deck inteiro em PDF |

Clickers e apresentadores wireless (Logitech, etc.) enviam `PageUp`/`PageDown` ou setas — funcionam direto.

Toque nas metades esquerda/direita da tela navega no mobile.

## Exportar

Clique em **Exportar** no canto superior direito. Quatro formatos:

| Formato | O que gera | Quando usar |
|---|---|---|
| **PDF** | Deck inteiro · 1920×1080 · 2× DPI | Compartilhar deck completo, imprimir |
| **ZIP de PNGs** | Um PNG nomeado por slide | Subir slides individuais em redes sociais, blog, etc. |
| **PNG do slide atual** | Captura apenas o que está visível | Print rápido de um slide específico |
| **Imprimir (navegador)** | Diálogo nativo Cmd+P | Fallback se o export client-side falhar |

A geração é **100% client-side**. Cada slide é renderizado em container oculto (1920×1080), capturado com `html-to-image`, e combinado em PDF (`jsPDF`) ou ZIP (`JSZip`).

As animações de transição são neutralizadas durante export — todos os elementos aparecem no estado final. As cenas WebGL 3D são omitidas (renderizam como preto em captura estática); o conteúdo, paleta e tipografia são preservados.

## Estrutura

```
src/
├── App.tsx                  # controlador do deck (estado, hotkeys, modo print)
├── lib/
│   ├── slides.ts            # registro central dos slides
│   └── motion.ts            # helpers de animação compartilhados
├── hooks/
│   ├── useKeyboardNav.ts    # teclas + clicker
│   └── useFullscreen.ts     # Fullscreen API
├── components/
│   ├── SlideFrame.tsx       # moldura padrão (grid + vinheta)
│   ├── SlideStage.tsx       # transições entre slides (Framer)
│   ├── Chrome.tsx           # barra superior, progresso, contador
│   └── Overview.tsx         # grid de visão geral
├── scenes/                  # cenas 3D (R3F)
│   ├── Scene.tsx
│   ├── GlobeScene.tsx
│   ├── OrbitScene.tsx
│   ├── FlowScene.tsx
│   ├── HubScene.tsx
│   ├── PipelineScene.tsx
│   └── ShieldScene.tsx
└── slides/                  # 13 slides
    ├── S01Cover.tsx
    ├── S02Shift.tsx
    └── ...
```

## Conteúdo dos slides

| # | Slide | Cena 3D |
|---|---|---|
| 01 | Abertura — capa | Globo wireframe + partículas |
| 02 | Mudança de fundo (arquivo → conversa) | Fluxo de partículas |
| 03 | O que é o Claude (3 pilares) | — |
| 04 | Skills (capacidades especializadas) | Sistema orbital |
| 05 | Por que skills mudam o resultado | — |
| 06 | Conectores (Drive, Gmail, HubSpot…) | Hub central + nós |
| 07 | Skills × Conectores = operação real | — |
| 08 | Como o Claude lê a planilha (5 passos) | Pipeline horizontal |
| 09 | Tipos de insight (diagnóstico, padrão, risco) | — |
| 10 | Do diagnóstico à interface no Lovable | Mock dashboard |
| 11 | Lovable + conectores (4 quadrantes) | — |
| 12 | Aikido — camada de segurança | Cúpula de proteção |
| 13 | Próximos passos · ao vivo | — |

## Deploy

Deck é estático puro. Funciona em qualquer host de assets:

- **Vercel**: `vercel --prod` (auto-detecta Vite)
- **Netlify**: `netlify deploy --prod --dir=dist`
- **GitHub Pages**: `npm run build && gh-pages -d dist`
- **Cloudflare Pages**: conecte o repo e use build command `npm run build`, output `dist`

## Customização rápida

- **Cores**: `tailwind.config.js` → `theme.extend.colors`
- **Tipografia**: `index.html` (Google Fonts) + `tailwind.config.js` → `fontFamily`
- **Cenas 3D**: `src/scenes/*.tsx`
- **Reordenar slides**: `src/lib/slides.ts`
- **Conteúdo**: cada slide é um arquivo isolado em `src/slides/`

## Notas

- Node 22.11 funciona; Vite recomenda 22.12+. Sem impacto na geração.
- Path com caracteres não-ASCII (`Repositórios/`) é suportado pelo Vite 7 (rollup). Não use Vite 8 (rolldown) nesse cenário até a issue do native binding ser fechada.
- Para exibir em telão 4K, prefira a tela cheia (`F`) — o layout escala fluido via `clamp()`.
