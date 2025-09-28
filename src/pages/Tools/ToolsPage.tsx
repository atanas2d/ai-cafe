import { useEffect, useMemo, useState } from 'react';
import { DataService } from '../../services/dataService';
import { Section } from '../../components/Section';
import { ToolCard } from '../../components/ToolCard';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { DataView } from 'primereact/dataview';
import type { Tool } from '../../types';

export const ToolsPage = (): JSX.Element => {
  const [allTools, setAllTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const fetchedTools = await DataService.getTools();
        setAllTools(fetchedTools);
      } catch (err) {
        setError('Failed to fetch tools.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  const categories = useMemo(() => Array.from(new Set(allTools.map(tool => tool.category))), [allTools]);

  const filteredTools = useMemo(() => {
    return allTools.filter(tool => {
      const matchesCategory = category ? tool.category === category : true;
      const matchesQuery = query
        ? tool.name.toLowerCase().includes(query.toLowerCase()) ||
          tool.description.toLowerCase().includes(query.toLowerCase()) ||
          tool.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [allTools, query, category]);

  if (loading) {
    return <div className="surface-section p-5 text-center">Loading tools...</div>;
  }

  if (error) {
    return <div className="surface-section p-5 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="surface-section">
      <header className="px-3 md:px-6 lg:px-8 py-4 md:py-5 surface-card shadow-1">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">AI Tool Catalog</h1>
        <p className="text-600 max-w-3xl text-sm md:text-base">
          Evaluated copilots, API platforms, and enablement tooling prioritized for secure rollout across the enterprise.
        </p>
        <div className="flex flex-column gap-3 mt-4">
          <span className="p-input-icon-left w-full input-with-icon">
            <i className="pi pi-search" />
            <InputText
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools..."
              className="w-full"
            />
          </span>
          <Dropdown
            value={category}
            options={[{ label: 'All categories', value: null }, ...categories.map(cat => ({ label: cat, value: cat }))]}
            onChange={(e) => setCategory(e.value)}
            placeholder="Filter by category"
            className="w-full"
          />
        </div>
      </header>

      <Section title={`${filteredTools.length} tool${filteredTools.length === 1 ? '' : 's'} available`}>
        <DataView
          className="tools-dataview"
          value={filteredTools}
          layout="grid"
          paginator
          rows={8}
          emptyMessage="No tools match your filters yet"
          itemTemplate={(tool: Tool) => (
            <div className="tool-card-cell">
              <ToolCard tool={tool} />
            </div>
          )}
        />
      </Section>
    </div>
  );
};
