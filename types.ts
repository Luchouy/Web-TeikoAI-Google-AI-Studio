import React from 'react';
import { LucideIcon } from 'lucide-react';

export type ViewType = 'home' | 'real-estate' | 'manifesto';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  text: string;
  image: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: string;
  visual: React.ReactNode;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PageData {
  hero: {
    badge: string;
    title: React.ReactNode;
    description: React.ReactNode;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: { label: string; value: string; icon: LucideIcon }[];
  };
  benefits: {
    title: string;
    subtitle: string;
    items: Benefit[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    items: PortfolioItem[];
  };
}