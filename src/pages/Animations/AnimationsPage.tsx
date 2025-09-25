import { animationPresets } from '@/data/animations';
import { AnimationPreview } from '@/components/AnimationPreview';
import { Section } from '@/components/Section';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';

export const AnimationsPage = (): JSX.Element => (
  <div className="surface-section">
    <header className="px-4 md:px-6 lg:px-8 py-5 surface-card shadow-1">
      <h1 className="text-3xl font-bold mb-2">Animation Showcase</h1>
      <p className="text-600 max-w-3xl">
        Bring energy to event intros or kiosks using these gradient presets tuned for AI Cafe branding. Use them as hero backgrounds or ambient stage visuals.
      </p>
    </header>

    <Section title="Interactive Gallery" subtitle="Preview gradient presets and copy their palettes into your favorite design tools.">
      <Carousel
        value={animationPresets}
        numVisible={1}
        numScroll={1}
        circular
        autoplayInterval={6000}
        itemTemplate={(preset) => (
          <div className="px-4">
            <AnimationPreview preset={preset} />
          </div>
        )}
      />
    </Section>

    <Section title="Usage Tips" subtitle="Blend gradients with blur overlays to create motion-rich hero sections.">
      <Card className="surface-card border-round-2xl">
        <ul className="m-0 pl-3 text-sm text-600 flex flex-column gap-2">
          <li>Use CSS animations like <code>background-position</code> shifts for subtle looping motion.</li>
          <li>Layer shapes or AI-generated illustrations above the gradients with mix-blend modes.</li>
          <li>Apply <code>backdrop-filter: blur</code> to cards and navigation for premium glassmorphism.</li>
        </ul>
      </Card>
    </Section>
  </div>
);
