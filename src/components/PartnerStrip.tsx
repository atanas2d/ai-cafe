import type { PartnerLogo } from '../types';

interface PartnerStripProps {
  partners: PartnerLogo[];
}

export const PartnerStrip = ({ partners }: PartnerStripProps): JSX.Element => (
  <section className="partner-strip surface-section py-4">
    <div className="section-container px-4 md:px-6 lg:px-8">
      <nav className="partner-strip__grid" aria-label="Program partners and tooling">
        {partners.map((partner) => (
          <a
            key={partner.id}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`partner-pill${partner.spanColumns ? ' partner-pill--wide' : ''}`}
          >
            <span className="partner-pill__icon" aria-hidden="true">
              <img src={partner.image} alt="" />
            </span>
            <span className="partner-pill__copy">
              <span className="partner-pill__name">{partner.name}</span>
              <span className="partner-pill__caption">{partner.caption}</span>
            </span>
          </a>
        ))}
      </nav>
    </div>
  </section>
);
