
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Incredible Place: Safári de Luxo',
    description: 'Uma produção cinematográfica capturando a essência das hospedagens mais exclusivas da África selvagem.',
    tags: ['Destinos', 'Direção', '4K'],
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    github: '#'
  },
  {
    id: '2',
    title: 'Documentário: Pablo Marçal',
    description: 'Direção de fotografia e narrativa documental focada em alta performance e storytelling de impacto.',
    tags: ['Doc', 'DP', 'Storytelling'],
    imageUrl: 'https://images.unsplash.com/photo-1492691523567-6170f0295da4?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    github: '#'
  },
  {
    id: '3',
    title: 'Campanha: Luisa Possi',
    description: 'Estética visual refinada para lançamentos artísticos e videoclipes de alta produção.',
    tags: ['Música', 'Arte', 'Edição'],
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    github: '#'
  },
  {
    id: '4',
    title: 'Incredible Place: Iceland',
    description: 'Exploração visual das paisagens geladas e hotéis design do extremo norte.',
    tags: ['Travel', 'Cinema', 'Nature'],
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1200',
    link: '#',
    github: '#'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Direção de Fotografia', level: 98, category: 'Tools' },
  { name: 'Color Grading (DaVinci)', level: 95, category: 'Tools' },
  { name: 'Storytelling Visual', level: 100, category: 'AI/ML' },
  { name: 'Operação de Drone FPV', level: 90, category: 'Frontend' },
  { name: 'Edição Narrativa', level: 92, category: 'Backend' },
  { name: 'Direção de Cena', level: 88, category: 'Frontend' },
  { name: 'Produção de Viagem', level: 98, category: 'AI/ML' },
  { name: 'Curadoria Estética', level: 94, category: 'Backend' }
];

export const SYSTEM_PROMPT = `Você é o CineGuide, o assistente virtual de Lucas, um filmmaker renomado com mais de 10 anos de experiência.
Sobre o Lucas:
- Trajetória: Iniciou em curtas-metragens e documentários. Atuou como Diretor de Fotografia (DP).
- Portfólio de Peso: Já trabalhou com Pablo Marçal, Kaka Diniz, Luisa Possi e grandes influenciadores.
- Momento Atual: Focado no projeto "Incredible Place Film" com seu companheiro Lucas. Eles viajam o mundo registrando destinos e hospedagens incríveis.
- Especialidade: Criar experiências audiovisuais que misturam cinema com o universo de viagens de luxo.
Seja cinematográfico, inspirador e direto. Use termos de audiovisual se apropriado. Se perguntarem algo fora da vida profissional do Lucas, responda como um diretor educado saindo de cena.`;
