import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { useNavigate } from 'react-router-dom';

interface HeroProps {
  title: string;
  description: string;
  stats: Array<{ label: string; value: string }>;
}

export const Hero = ({ title, description, stats }: HeroProps): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section className="surface-gradient min-h-26rem flex align-items-center py-6">
      <div className="px-4 md:px-6 lg:px-8 grid gap-6 md:gap-8 md:grid-nogutter align-items-center">
        <div className="col-12 md:col-6 flex flex-column gap-4">
          <Tag value="Nuvolo × Trane Technologies" severity="info" className="w-max" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-50 line-height-2">{title}</h1>
          <p className="text-lg text-primary-100 max-w-25rem">{description}</p>
          <div className="flex gap-3 flex-wrap">
            <Button label="View Meetings" icon="pi pi-calendar" onClick={() => navigate('/meetings')} />
            <Button
              label="Explore Tools"
              icon="pi pi-compass"
              severity="secondary"
              outlined
              onClick={() => navigate('/tools')}
            />
          </div>
        </div>
        <div className="col-12 md:col-6">
          <div className="surface-card border-round-2xl shadow-3 p-4 flex flex-column gap-4">
            <h2 className="text-900 text-xl font-semibold">Community Snapshot</h2>
            <div className="grid grid-nogutter">
              {stats.map(stat => (
                <div key={stat.label} className="col-12 md:col-4 flex flex-column">
                  <span className="text-4xl font-bold text-primary">{stat.value}</span>
                  <span className="text-600">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="border-round-xl bg-primary-50 p-3 text-primary-900">
              <p className="m-0 text-sm">
                The AI Cafe connects product, engineering, design, and operations teams to ship safe, AI-powered workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
