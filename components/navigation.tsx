"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X, Workflow, Brain, Share2 } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <Brain className="h-6 w-6 text-primary mr-2" />
              <span className="font-bold text-xl">Vesperance</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/workflows" className="text-muted-foreground hover:text-primary">
              Workflows
            </Link>
            <Link href="/marketplace" className="text-muted-foreground hover:text-primary">
              Marketplace
            </Link>
            <Link href="/community" className="text-muted-foreground hover:text-primary">
              Community
            </Link>
            <ModeToggle />
            <Button>Get Started</Button>
          </div>

          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-2 inline-flex items-center justify-center p-2 rounded-md text-primary hover:bg-muted"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/workflows"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
            >
              Workflows
            </Link>
            <Link
              href="/marketplace"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
            >
              Marketplace
            </Link>
            <Link
              href="/community"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
            >
              Community
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}