import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  subtitle?: string;
  id?: string;
  children: ReactNode;
  padded?: boolean;
}

export const Section = ({ title, subtitle, id, children, padded = true }: SectionProps): JSX.Element => (
  <section id={id} className={padded ? 'py-4 md:py-6 lg:py-8' : ''}>
    <div className="px-3 md:px-6 lg:px-8 section-container">
      <header className="mb-4 md:mb-5 lg:mb-6 text-center">
        <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3">{title}</h2>
        {subtitle ? <p className="text-600 max-w-3xl mx-auto text-sm md:text-base">{subtitle}</p> : null}
      </header>
      {children}
    </div>
  </section>
);
