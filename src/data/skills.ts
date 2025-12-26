export type SkillCategory = 'frontend' | 'backend' | 'tools' | 'special';

export interface Skill {
  name: string;
  level: 'iniciante' | 'intermediário' | 'avançado';
  category: SkillCategory;
}

export const skills: Skill[] = [
  // Frontend
  { name: 'HTML5', level: 'avançado', category: 'frontend' },
  { name: 'CSS3', level: 'avançado', category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 'avançado', category: 'frontend' },
  { name: 'TypeScript', level: 'intermediário', category: 'frontend' },
  { name: 'React', level: 'intermediário', category: 'frontend' },
  { name: 'Next.js', level: 'intermediário', category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 'intermediário', category: 'backend' },
  { name: 'PHP', level: 'intermediário', category: 'backend' },

  // Special (seu diferencial)
  { name: 'Moodle (LMS)', level: 'avançado', category: 'special' },

  // Tools
  { name: 'Git & GitHub', level: 'avançado', category: 'tools' },
  { name: 'Azure / Cloud', level: 'intermediário', category: 'tools' },
];
