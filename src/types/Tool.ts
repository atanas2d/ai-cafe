/**
 * Tool Type Definitions
 * Based on CLAUDE.md data architecture
 */

export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  vendor: string;
  description: string;
  features: Feature[];
  pricing: Pricing;
  integration: Integration;
  useCases: UseCase[];
  alternatives: string[];        // Tool IDs
  rating?: number;
  reviews?: Review[];
  documentation?: string;
  accessLevel: 'public' | 'corporate' | 'beta';
  tags: string[];
  lastUpdated: string;           // ISO date string
}

export interface Feature {
  name: string;
  description: string;
  availability: 'free' | 'paid' | 'enterprise';
}

export interface Pricing {
  model: 'free' | 'freemium' | 'subscription' | 'enterprise';
  tiers?: PricingTier[];
  corporateLicense?: boolean;
}

export interface PricingTier {
  name: string;
  price: number;
  period: 'monthly' | 'yearly';
  features: string[];
}

export interface Integration {
  servicenow: boolean;
  teams: boolean;
  office365: boolean;
  customAPI: boolean;
  webhooks: boolean;
}

export interface UseCase {
  title: string;
  description: string;
  department?: string;
  impact: 'low' | 'medium' | 'high';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export enum ToolCategory {
  LLM = 'Large Language Models',
  CODE = 'Code Generation',
  IMAGE = 'Image Generation',
  AUTOMATION = 'Automation',
  ANALYTICS = 'Analytics',
  WORKFLOW = 'Workflow',
  ENTERPRISE = 'Enterprise AI'
}

// API Response types
export interface ToolsResponse {
  tools: Tool[];
  lastUpdated: string;
  version: string;
}

// Filter types
export interface ToolFilters {
  category?: ToolCategory;
  vendor?: string;
  accessLevel?: Tool['accessLevel'];
  priceModel?: Pricing['model'];
  integration?: keyof Integration;
}

export interface ToolSearchResult {
  tools: Tool[];
  total: number;
  query: string;
  filters?: ToolFilters;
}