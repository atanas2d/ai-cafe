import type { AnimationPreset } from '../types';

export const animationPresets: AnimationPreset[] = [
  {
    id: 'aurora-flow',
    name: 'Aurora Flow',
    description: 'An ambient gradient inspired by polar light waves, ideal for energizing opening sessions.',
    gradient: ['#0ea5e9', '#6366f1', '#22d3ee'],
    accent: '#a855f7',
    backdrop: 'radial-gradient(circle at 20% 20%, rgba(14,165,233,0.35), transparent 55%)'
  },
  {
    id: 'sunset-vectors',
    name: 'Sunset Vectors',
    description: 'Warm oranges and reds blend into deep blues to echo the Trane Technologies palette.',
    gradient: ['#f97316', '#ef4444', '#1d4ed8'],
    accent: '#fbbf24',
    backdrop: 'radial-gradient(circle at 80% 30%, rgba(251,191,36,0.25), transparent 60%)'
  },
  {
    id: 'quantum-nebula',
    name: 'Quantum Nebula',
    description: 'High-contrast purples and cyan glows for futuristic dashboards and late-night demos.',
    gradient: ['#581c87', '#9333ea', '#06b6d4'],
    accent: '#fde68a',
    backdrop: 'radial-gradient(circle at 50% 60%, rgba(147,51,234,0.2), transparent 70%)'
  }
];
