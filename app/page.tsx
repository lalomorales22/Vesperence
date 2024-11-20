import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Brain, Workflow, Share2, DollarSign } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl font-bold sm:text-6xl">
            Build and Share AI Workflows
          </h1>
          <p className="text-xl text-muted-foreground">
            Join the community-driven platform where you can create, share, and monetize AI workflows.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              View Workflows
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Vesperance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Workflow className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Build Workflows</h3>
              <p className="text-muted-foreground">
                Create powerful AI workflows using our intuitive visual builder and extensive template library.
              </p>
            </Card>
            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Share2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Share Knowledge</h3>
              <p className="text-muted-foreground">
                Join a vibrant community of creators and share your expertise with others.
              </p>
            </Card>
            <Card className="p-6 space-y-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Earn Revenue</h3>
              <p className="text-muted-foreground">
                Monetize your workflows and templates through our marketplace.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground">
            Join our community today and start building your AI workflows.
          </p>
          <Button size="lg" asChild>
            <Link href="/signup">Create Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}