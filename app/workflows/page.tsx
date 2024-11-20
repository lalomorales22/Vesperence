"use client";

import { WorkflowCard } from "@/components/workflow-card";
import { SearchFilters } from "@/components/search-filters";

const SAMPLE_WORKFLOWS = [
  {
    title: "GPT-4 Content Generator",
    description: "Automatically generate high-quality content using GPT-4 with customizable templates and outputs.",
    author: "Sarah Chen",
    stars: 245,
    users: 1420,
    slug: "gpt4-content-generator"
  },
  {
    title: "Image Analysis Pipeline",
    description: "Process and analyze images using computer vision models with automated reporting.",
    author: "Michael Rodriguez",
    stars: 189,
    users: 890,
    slug: "image-analysis-pipeline"
  },
  {
    title: "Data Cleaning Automation",
    description: "Automated workflow for cleaning and preprocessing datasets with customizable rules.",
    author: "Alex Thompson",
    stars: 156,
    users: 670,
    slug: "data-cleaning-automation"
  },
  {
    title: "Multi-Model Sentiment Analysis",
    description: "Analyze sentiment across multiple languages using various AI models.",
    author: "Emma Wilson",
    stars: 134,
    users: 560,
    slug: "multi-model-sentiment"
  },
  {
    title: "Document Processing Suite",
    description: "Extract, analyze, and categorize information from documents using AI.",
    author: "David Kim",
    stars: 123,
    users: 450,
    slug: "document-processing-suite"
  },
  {
    title: "Social Media Monitor",
    description: "Track and analyze social media trends using AI-powered insights.",
    author: "Lisa Anderson",
    stars: 98,
    users: 320,
    slug: "social-media-monitor"
  }
];

export default function WorkflowsPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">Workflows</h1>
          <p className="text-xl text-muted-foreground">
            Discover and use AI workflows created by the community
          </p>
        </div>

        <SearchFilters placeholder="Search workflows..." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLE_WORKFLOWS.map((workflow) => (
            <WorkflowCard
              key={workflow.slug}
              {...workflow}
            />
          ))}
        </div>
      </div>
    </div>
  );
}