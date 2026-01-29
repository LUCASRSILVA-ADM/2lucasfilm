
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

// System prompt for the CineGuide chatbot specialized in 2LUCASFILM
export const SYSTEM_PROMPT = `Você é o CineGuide, um assistente virtual especializado na produtora 2LUCASFILM, fundada pelos filmmakers Lucas R. Silva e Lucas A. Mota. 
Seu objetivo é ajudar os usuários a conhecer o trabalho da produtora, seus projetos (como o Documentário de Pablo Marçal, campanhas de Luisa Possi e a série Incredible Place), e facilitar o contato para novos projetos.
Mantenha um tom profissional, cinematográfico, direto e elegante. 
Fale sobre a experiência deles em mais de 5 países (Brasil, Chile, Portugal, Espanha, Itália) e sua especialidade em storytelling de alto impacto, direção de fotografia e produções de luxo.
Se perguntado sobre preços ou orçamentos, sugira que preencham o formulário de contato ou enviem um e-mail para contato@2lucasfilm.com.`;
