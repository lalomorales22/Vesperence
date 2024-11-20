"use client";

import { MarketplaceCard } from "@/components/marketplace-card";
import { SearchFilters } from "@/components/search-filters";

const SAMPLE_ITEMS = [
  {
    title: "Enterprise AI Suite",
    description: "Complete enterprise-grade AI workflow solution with advanced features and support.",
    author: "Enterprise Solutions Inc.",
    price: 499.99,
    stars: 485,
    downloads: 2340,
    slug: "enterprise-ai-suite"
  },
  {
    title: "AI Content Creator Pro",
    description: "Professional content creation workflow with SEO optimization and multi-platform support.",
    author: "Digital Creators Co.",
    price: 79.99,
    stars: 325,
    downloads: 1560,
    slug: "content-creator-pro"
  },
  {
    title: "Data Science Toolkit",
    description: "Comprehensive data science workflow bundle with advanced analytics and visualization.",
    author: "DataMind Labs",
    price: 299.99,
    stars: 275,
    downloads: 890,
    slug: "data-science-toolkit"
  },
  {
    title: "AI Marketing Assistant",
    description: "Automated marketing workflow with campaign optimization and performance tracking.",
    author: "MarketAI Solutions",
    price: 149.99,
    stars: 198,
    downloads: 780,
    slug: "marketing-assistant"
  },
  {
    title: "NLP Processing Bundle",
    description: "Advanced natural language processing workflows for text analysis and generation.",
    author: "Language Tech Co.",
    price: 199.99,
    stars: 167,
    downloads: 560,
    slug: "nlp-bundle"
  },
  {
    title: "Computer Vision Pack",
    description: "Professional computer vision workflows for image and video processing.",
    author: "Vision AI Labs",
    price: 249.99,
    stars: 145,
    downloads: 430,
    slug: "computer-vision-pack"
  }
];

export default function MarketplacePage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Marketplace</h1>
          <p className="text-xl text-muted-foreground">
            Premium AI workflows and templates for professional use
          </p>
        </div>

        <SearchFilters placeholder="Search marketplace..." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_ITEMS.map((item) => (
            <MarketplaceCard
              key={item.slug}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
}