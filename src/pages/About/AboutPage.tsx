import { Section } from '../../components/Section';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';

export const AboutPage = (): JSX.Element => {
  return (
    <div className="surface-section">
      <header className="px-3 md:px-6 lg:px-8 py-4 md:py-5 surface-card shadow-1">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">About AI Cafe</h1>
        <p className="text-600 max-w-3xl text-sm md:text-base">
          Learn about our mission, values, and the people behind the AI Cafe learning community at Trane Technologies & Nuvolo.
        </p>
      </header>

      <Section
        title="Our Mission"
        subtitle="Democratizing AI knowledge and fostering responsible innovation across the enterprise"
      >
        <div className="grid">
          <div className="col-12 lg:col-8 mx-auto">
            <Card className="text-center">
              <div className="py-4">
                <h3 className="text-xl font-semibold mb-3">Empowering Teams Through AI Education</h3>
                <p className="text-600 mb-4 line-height-3">
                  AI Cafe is more than just a learning initiative - it&apos;s a community-driven platform where
                  Trane Technologies and Nuvolo employees come together to explore, learn, and share knowledge
                  about artificial intelligence tools and technologies. Through hands-on demonstrations,
                  collaborative problem-solving, and responsible AI practices, we&apos;re building the foundation
                  for enterprise AI adoption.
                </p>
                <div className="flex flex-wrap justify-content-center gap-2">
                  <Tag value="Learning Community" severity="info" />
                  <Tag value="Hands-on Demos" severity="success" />
                  <Tag value="Enterprise AI" severity="warning" />
                  <Tag value="Knowledge Sharing" severity="secondary" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section
        title="What We Do"
        subtitle="Regular sessions, tool evaluations, and collaborative exploration of AI technologies"
      >
        <div className="grid">
          <div className="col-12 md:col-6 lg:col-3 p-2 md:p-3">
            <Card className="h-full text-center">
              <div className="py-3">
                <i className="pi pi-users text-3xl text-primary mb-3"></i>
                <h4 className="font-semibold mb-2">Weekly Sessions</h4>
                <p className="text-600 text-sm">
                  Regular meetings featuring tool demonstrations, use case discussions, and collaborative problem-solving
                </p>
              </div>
            </Card>
          </div>
          <div className="col-12 md:col-6 lg:col-3 p-2 md:p-3">
            <Card className="h-full text-center">
              <div className="py-3">
                <i className="pi pi-cog text-3xl text-primary mb-3"></i>
                <h4 className="font-semibold mb-2">Tool Evaluation</h4>
                <p className="text-600 text-sm">
                  Systematic evaluation of AI copilots, platforms, and tools for enterprise rollout consideration
                </p>
              </div>
            </Card>
          </div>
          <div className="col-12 md:col-6 lg:col-3 p-2 md:p-3">
            <Card className="h-full text-center">
              <div className="py-3">
                <i className="pi pi-shield text-3xl text-primary mb-3"></i>
                <h4 className="font-semibold mb-2">Responsible AI</h4>
                <p className="text-600 text-sm">
                  Focus on secure, ethical, and responsible AI implementation aligned with corporate policies
                </p>
              </div>
            </Card>
          </div>
          <div className="col-12 md:col-6 lg:col-3 p-2 md:p-3">
            <Card className="h-full text-center">
              <div className="py-3">
                <i className="pi pi-share-alt text-3xl text-primary mb-3"></i>
                <h4 className="font-semibold mb-2">Knowledge Sharing</h4>
                <p className="text-600 text-sm">
                  Open platform for sharing insights, best practices, and lessons learned from AI implementations
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section
        title="Community Impact"
        subtitle="Building AI literacy and fostering innovation across teams"
      >
        <div className="grid">
          <div className="col-12 md:col-6 p-2 md:p-3">
            <Card>
              <div className="flex align-items-center gap-3 mb-3">
                <i className="pi pi-chart-line text-2xl text-green-500"></i>
                <h4 className="font-semibold m-0">Growing Participation</h4>
              </div>
              <p className="text-600 mb-3">
                Our community has grown from a small group of AI enthusiasts to an active network of
                employees across multiple departments, all eager to explore AI&apos;s potential in their work.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag value="8+ Sessions Completed" severity="success" />
                <Tag value="Multiple Departments" severity="info" />
              </div>
            </Card>
          </div>
          <div className="col-12 md:col-6 p-2 md:p-3">
            <Card>
              <div className="flex align-items-center gap-3 mb-3">
                <i className="pi pi-lightbulb text-2xl text-yellow-500"></i>
                <h4 className="font-semibold m-0">Innovation Catalyst</h4>
              </div>
              <p className="text-600 mb-3">
                By providing a safe space to experiment and learn, AI Cafe serves as a catalyst for
                innovation, helping teams identify practical AI applications for their specific challenges.
              </p>
              <div className="flex flex-wrap gap-2">
                <Tag value="Real Use Cases" severity="warning" />
                <Tag value="Practical Applications" severity="secondary" />
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section
        title="Get Involved"
        subtitle="Join our community and be part of the AI transformation"
      >
        <div className="grid">
          <div className="col-12 lg:col-8 mx-auto">
            <Card className="text-center">
              <div className="py-4">
                <h3 className="text-xl font-semibold mb-3">Ready to Join the AI Cafe Community?</h3>
                <p className="text-600 mb-4 line-height-3">
                  Whether you&apos;re an AI novice or expert, there&apos;s a place for you in our community.
                  Attend our sessions, share your experiences, and help shape the future of AI at
                  Trane Technologies and Nuvolo.
                </p>
                <div className="flex flex-column sm:flex-row gap-3 justify-content-center">
                  <Button
                    label="Join Teams Channel"
                    icon="pi pi-microsoft"
                    className="p-button-rounded"
                    onClick={() => window.open('https://teams.microsoft.com', '_blank', 'noopener,noreferrer')}
                  />
                  <Button
                    label="View Upcoming Sessions"
                    icon="pi pi-calendar"
                    severity="secondary"
                    className="p-button-rounded"
                    onClick={() => window.location.href = '/meetings'}
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section
        title="Contact & Leadership"
        subtitle="Connect with our community leaders and get your questions answered"
      >
        <div className="grid">
          <div className="col-12 md:col-6 p-2 md:p-3">
            <Card>
              <h4 className="font-semibold mb-3">Program Leadership</h4>
              <div className="flex flex-column gap-3">
                <div className="flex align-items-center gap-3">
                  <i className="pi pi-user text-xl text-primary"></i>
                  <div>
                    <div className="font-semibold">Atanas Dimitrov (Bat Nas)</div>
                    <div className="text-600 text-sm">Project Lead & Technical Coordinator</div>
                  </div>
                </div>
                <div className="flex align-items-center gap-3">
                  <i className="pi pi-users text-xl text-primary"></i>
                  <div>
                    <div className="font-semibold">Community Contributors</div>
                    <div className="text-600 text-sm">Nino, Plamen Tanev, and active community members</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="col-12 md:col-6 p-2 md:p-3">
            <Card>
              <h4 className="font-semibold mb-3">Get Connected</h4>
              <div className="flex flex-column gap-3">
                <div className="flex align-items-center gap-3">
                  <i className="pi pi-microsoft text-xl text-primary"></i>
                  <div>
                    <div className="font-semibold">Teams Channel</div>
                    <div className="text-600 text-sm">AI Cafe - Trane Technologies</div>
                  </div>
                </div>
                <div className="flex align-items-center gap-3">
                  <i className="pi pi-github text-xl text-primary"></i>
                  <div>
                    <div className="font-semibold">GitHub Repository</div>
                    <div className="text-600 text-sm">Source code and documentation</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
};