import { Section } from '@/components/Section';
import { ResourceCategoryCard } from '@/components/ResourceCategoryCard';
import { LearningTrackCard } from '@/components/LearningTrackCard';
import { resourceCategories, learningTracks } from '@/data/resources';
import { Card } from 'primereact/card';

export const ResourcesPage = (): JSX.Element => (
  <div className="surface-section">
    <header className="px-4 md:px-6 lg:px-8 py-5 surface-card shadow-1">
      <h1 className="text-3xl font-bold mb-2">AI Learning Resources</h1>
      <p className="text-600 max-w-3xl">
        Curated guidebooks, governance frameworks, and learning paths to accelerate responsible AI adoption within Nuvolo & Trane.
      </p>
    </header>

    <Section title="Resource Collections" subtitle="Trusted starting points for copilots, automation patterns, and governance.">
      <div className="grid">
        {resourceCategories.map(category => (
          <div key={category.id} className="col-12 md:col-6">
            <ResourceCategoryCard category={category} />
          </div>
        ))}
      </div>
    </Section>

    <Section title="Learning Tracks" subtitle="Modular learning sprints designed for squads shipping AI into production.">
      <div className="grid">
        {learningTracks.map(track => (
          <div key={track.id} className="col-12 md:col-6">
            <LearningTrackCard track={track} />
          </div>
        ))}
      </div>
    </Section>

    <Section title="Getting Support" subtitle="We can help with roadmap prioritization, technical enablement, and adoption playbooks." padded={false}>
      <Card className="surface-card border-round-2xl mb-5">
        <p className="text-sm text-600 m-0">
          Reach out to <strong>aicafe@nuvolo.com</strong> to schedule office hours or request a focused enablement session. Join the Teams channel for drop-in Q&A.
        </p>
      </Card>
    </Section>
  </div>
);
