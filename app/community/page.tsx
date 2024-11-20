"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, MessageSquare, Github, Discord, Heart, Trophy } from "lucide-react";
import Link from "next/link";

const COMMUNITY_STATS = [
  { label: "Active Members", value: "10,000+", icon: Users },
  { label: "Daily Discussions", value: "500+", icon: MessageSquare },
  { label: "Open Source Projects", value: "150+", icon: Github },
  { label: "Contributors", value: "2,500+", icon: Heart },
];

const FEATURED_MEMBERS = [
  {
    name: "Sarah Chen",
    role: "AI Engineer",
    contributions: 156,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Michael Rodriguez",
    role: "Data Scientist",
    contributions: 142,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Emma Wilson",
    role: "ML Engineer",
    contributions: 128,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export default function CommunityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold sm:text-6xl">Join Our Community</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with AI enthusiasts, share knowledge, and collaborate on projects in our vibrant community.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              <Discord className="mr-2 h-5 w-5" />
              Join Discord
            </Button>
            <Button size="lg" variant="outline">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {COMMUNITY_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card key={stat.label} className="p-6 text-center space-y-2">
                  <div className="flex justify-center">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Members Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Members</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_MEMBERS.map((member) => (
              <Card key={member.name} className="p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <div className="flex items-center mt-2 text-sm">
                      <Trophy className="h-4 w-4 text-primary mr-1" />
                      {member.contributions} contributions
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Get Involved</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to contribute to our community. Start by joining our Discord server or checking out our GitHub repositories.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs">View Docs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}