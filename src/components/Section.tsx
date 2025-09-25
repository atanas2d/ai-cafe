import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  id?: string;
  children: ReactNode;
  padded?: boolean;
}

export const Section = ({ title, subtitle, id, children, padded = true }: SectionProps): JSX.Element => (
  <section id={id} className={padded ? 'py-5 md:py-7' : ''}>
    <div className="px-4 md:px-6 lg:px-8">
      <header className="mb-4">
        <h2 className="font-semibold text-2xl md:text-3xl mb-2">{title}</h2>
        {subtitle ? <p className="text-600 max-w-3xl">{subtitle}</p> : null}
      </header>
      {children}
    </div>
  </section>
);
