import type { ComponentType } from 'react';
import { S01Cover } from '../slides/S01Cover';
import { S02Shift } from '../slides/S02Shift';
import { S03Claude } from '../slides/S03Claude';
import { S04Skills } from '../slides/S04Skills';
import { S05WhySkills } from '../slides/S05WhySkills';
import { S06Connectors } from '../slides/S06Connectors';
import { S07SkillsXConnectors } from '../slides/S07SkillsXConnectors';
import { S08Pipeline } from '../slides/S08Pipeline';
import { S09InsightTypes } from '../slides/S09InsightTypes';
import { S10ToInterface } from '../slides/S10ToInterface';
import { S11Lovable } from '../slides/S11Lovable';
import { S12Security } from '../slides/S12Security';
import { S13Flow } from '../slides/S13Flow';

export interface SlideMeta {
  id: string;
  title: string;
  Component: ComponentType;
}

export const slides: SlideMeta[] = [
  { id: '01', title: 'Abertura', Component: S01Cover },
  { id: '02', title: 'Mudança de fundo', Component: S02Shift },
  { id: '03', title: 'O que é o Claude', Component: S03Claude },
  { id: '04', title: 'Skills', Component: S04Skills },
  { id: '05', title: 'Por que skills mudam o jogo', Component: S05WhySkills },
  { id: '06', title: 'Conectores', Component: S06Connectors },
  { id: '07', title: 'Skills × Conectores', Component: S07SkillsXConnectors },
  { id: '08', title: 'Como o Claude lê a planilha', Component: S08Pipeline },
  { id: '09', title: 'Tipos de insight', Component: S09InsightTypes },
  { id: '10', title: 'Do diagnóstico à interface', Component: S10ToInterface },
  { id: '11', title: 'Lovable + conectores', Component: S11Lovable },
  { id: '12', title: 'Segurança (Aikido)', Component: S12Security },
  { id: '13', title: 'Próximos passos', Component: S13Flow },
];
