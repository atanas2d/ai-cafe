import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { useNavigate } from 'react-router-dom';
import type { CSSProperties } from 'react';

interface HeroProps {
  title: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
}

const heroBackdrop = new URL('../assets/images/BannerAlt1.jpg', import.meta.url).href;

export const Hero = ({ title, description, stats }: HeroProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section
      className="hero surface-gradient"
      style={{ '--hero-image-url': `url(${heroBackdrop})` } as CSSProperties}
    >
      <div className="hero__wrapper px-4 md:px-6 lg:px-8 section-container">
        <div className="hero__content">
          <Tag value="Nuvolo × Trane Technologies" severity="info" className="hero__tag" />
          <h1 className="hero__title">{title}</h1>
          <p className="hero__description">{description}</p>
          <div className="hero__actions">
            <Button label="View Meetings" icon="pi pi-calendar" onClick={() => navigate('/meetings')} size="large" />
            <Button
              label="Explore Tools"
              icon="pi pi-compass"
              severity="secondary"
              outlined
              onClick={() => navigate('/tools')}
              size="large"
            />
          </div>
        </div>
        <dl className="hero__stats">
          {stats.map(stat => (
            <div key={stat.label} className="hero__stat">
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
