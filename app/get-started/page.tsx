"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Code, Workflow, Share2 } from "lucide-react";
import Link from "next/link";

const GETTING_STARTED_STEPS = [
  {
    title: "Create an Account",
    description: "Sign up for a free account to access all features and join our community.",
    icon: Brain,
    cta: { text: "Sign Up Now", href: "/signup" }
  },
  {
    title: "Build Your First Workflow",
    description: "Learn how to create AI workflows using our visual builder.",
    icon: Workflow,
    cta: { text: "Start Building", href: "/docs/workflows" }
  },
  {
    title: "Join the Community",
    description: "Connect with other creators and share your knowledge.",
    icon: Share2,
    cta: { text: "Join Discord", href: "/discord" }
  },
  {
    title: "Contribute",
    description: "Help improve the platform by contributing to our open source projects.",
    icon: Code,
    cta: { text: "View GitHub", href: "/github" }
  }
];

export default function GetStartedPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold sm:text-6xl">Get Started with Vesperance</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to begin your journey with AI workflows.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GETTING_STARTED_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
                <Button asChild>
                  <Link href={step.cta.href}>{step.cta.text}</Link>
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Documentation Tabs */}
        <div className="pt-12">
          <Tabs defaultValue="quickstart" className="space-y-6">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="quickstart">Quick Start Guide</TabsTrigger>
              <TabsTrigger value="tutorials">Video Tutorials</TabsTrigger>
              <TabsTrigger value="examples">Example Projects</TabsTrigger>
            </TabsList>
            <TabsContent value="quickstart" className="space-y-4">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Start Guide</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Get up and running with Vesperance in minutes. Follow our step-by-step guide to create your first AI workflow.
                  </p>
                  <Button asChild>
                    <Link href="/docs/quickstart">View Guide</Link>
                  </Button>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="tutorials" className="space-y-4">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Video Tutorials</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Watch our comprehensive video tutorials to learn how to use all features of the platform.
                  </p>
                  <Button asChild>
                    <Link href="/tutorials">Watch Tutorials</Link>
                  </Button>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="examples" className="space-y-4">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Example Projects</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Explore example projects and templates to jumpstart your development.
                  </p>
                  <Button asChild>
                    <Link href="/examples">View Examples</Link>
                  </Button>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Help Section */}
        <div className="text-center py-12 space-y-6">
          <h2 className="text-3xl font-bold">Need Help?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our community is here to help you succeed. Join our Discord server or check out our documentation.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/docs">Documentation</Link>
            </Button>
            <Button asChild>
              <Link href="/discord">Join Discord</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}