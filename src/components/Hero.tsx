import type { CSSProperties } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

interface HeroProps {
  title: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
}

interface HeroBanner {
  id: string;
  label: string;
  image: string;
}

const heroBanners: HeroBanner[] = [
  {
    id: 'design-sprint',
    label: 'Design Sprint',
    image: new URL('../assets/images/AICafeBanner2.jpg', import.meta.url).href
  },
  {
    id: 'evening-lab',
    label: 'Evening Lab',
    image: new URL('../assets/images/AICafeBanner3.jpg', import.meta.url).href
  }
];

const BANNER_STORAGE_KEY = 'aicafe_banner';

export const Hero = ({ title, description, stats }: HeroProps): JSX.Element => {
  const navigate = useNavigate();
  const [bannerId, setBannerId] = useState<HeroBanner['id']>(() => {
    if (typeof window === 'undefined') {
      return heroBanners[0].id;
    }

    try {
      const stored = window.localStorage.getItem(BANNER_STORAGE_KEY);
      if (stored && heroBanners.some(banner => banner.id === stored)) {
        return stored as HeroBanner['id'];
      }
    } catch (error) {
      console.warn('Unable to read hero banner preference:', error);
    }

    return heroBanners[0].id;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(BANNER_STORAGE_KEY, bannerId);
    } catch (error) {
      console.warn('Unable to persist hero banner preference:', error);
    }
  }, [bannerId]);

  const selectedBanner = useMemo(
    () => heroBanners.find(banner => banner.id === bannerId) ?? heroBanners[0],
    [bannerId]
  );

  return (
    <section
      className="hero surface-gradient"
      style={{ '--hero-image-url': `url(${selectedBanner.image})` } as CSSProperties}
    >
      <div className="hero__wrapper px-4 md:px-6 lg:px-8 section-container">
        <div className="hero__content">
          <Tag value="Nuvolo × Trane Technologies" severity="info" className="hero__tag" />
          <h1 className="hero__title">{title}</h1>
          <p className="hero__description">{description}</p>
          <div className="hero__actions">
            <Button
              label="View Meetings"
              icon="pi pi-calendar"
              onClick={() => navigate('/meetings')}
              size="large"
              className="hero__action hero__action--primary"
            />
            <Button
              label="Explore Tools"
              icon="pi pi-compass"
              onClick={() => navigate('/tools')}
              size="large"
              className="hero__action hero__action--support"
            />
          </div>
          <div className="hero__banner-switch" role="group" aria-label="Select hero background">
            <span className="hero__banner-switch-label">Header backdrop</span>
            <div className="hero__banner-options">
              {heroBanners.map(banner => {
                const isActive = banner.id === bannerId;
                return (
                  <button
                    key={banner.id}
                    type="button"
                    className={`hero__banner-chip${isActive ? ' hero__banner-chip--active' : ''}`}
                    onClick={() => setBannerId(banner.id)}
                    aria-pressed={isActive}
                  >
                    <span
                      className="hero__banner-thumb"
                      style={{ backgroundImage: `url(${banner.image})` }}
                      aria-hidden="true"
                    />
                    <span className="hero__banner-label">{banner.label}</span>
                  </button>
                );
              })}
            </div>
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
