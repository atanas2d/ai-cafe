import { useMemo, useState } from 'react';
import { DataService } from '@/services/dataService';
import { Section } from '@/components/Section';
import { ToolCard } from '@/components/ToolCard';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { DataView } from 'primereact/dataview';
import type { Tool } from '@/types';

export const ToolsPage = (): JSX.Element => {
  const tools = useMemo(() => DataService.getTools(), []);
  const categories = useMemo(() => Array.from(new Set(tools.map(tool => tool.category))), [tools]);

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesCategory = category ? tool.category === category : true;
      const matchesQuery = query
        ? tool.name.toLowerCase().includes(query.toLowerCase()) ||
          tool.description.toLowerCase().includes(query.toLowerCase()) ||
          tool.tags?.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
        : true;
      return matchesCategory && matchesQuery;
    });
  }, [tools, query, category]);

  return (
    <div className="surface-section">
      <header className="px-4 md:px-6 lg:px-8 py-5 surface-card shadow-1">
        <h1 className="text-3xl font-bold mb-2">AI Tool Catalog</h1>
        <p className="text-600 max-w-3xl">
          Evaluated copilots, API platforms, and enablement tooling prioritized for secure rollout across the enterprise.
        </p>
        <div className="flex flex-column md:flex-row gap-3 mt-4">
          <span className="p-input-icon-left w-full md:w-20rem input-with-icon">
            <i className="pi pi-search" />
            <InputText
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, description, or tag"
              className="w-full"
            />
          </span>
          <Dropdown
            value={category}
            options={[{ label: 'All categories', value: null }, ...categories.map(cat => ({ label: cat, value: cat }))]}
            onChange={(e) => setCategory(e.value)}
            placeholder="Category"
            className="w-full md:w-16rem"
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
