"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Workflow, Star, Users } from "lucide-react";
import Link from "next/link";

interface WorkflowCardProps {
  title: string;
  description: string;
  author: string;
  stars: number;
  users: number;
  slug: string;
}

export function WorkflowCard({
  title,
  description,
  author,
  stars,
  users,
  slug,
}: WorkflowCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <div className="p-6 flex-1 space-y-4">
        <div className="flex items-start justify-between">
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
            <Workflow className="h-5 w-5 text-primary" />
          </div>
          <Button variant="ghost" size="icon">
            <Star className="h-4 w-4" />
          </Button>
        </div>
        <div>
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">by {author}</p>
        </div>
        <p className="text-muted-foreground">{description}</p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Star className="h-4 w-4 mr-1" />
            {stars}
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            {users}
          </div>
        </div>
      </div>
      <div className="p-6 pt-0">
        <Button className="w-full" asChild>
          <Link href={`/workflows/${slug}`}>View Workflow</Link>
        </Button>
      </div>
    </Card>
  );
}