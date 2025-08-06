import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Hero7 } from "@/components/hero7";
import {
  MessageSquare,
  BarChart3,
  Zap,
  Users,
  Clock,
  Star,
  Shield,
} from "lucide-react";
import { AppPreview } from "@/components/app-preview";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero7
        heading="Better AI Outputs With Data-Backed Workflows"
        description="Generalistic AI is to shallow to meet your competitive business demands. Datapad analyses your existing data before takin any action; leading to 5x better results on ROI on average."
        button={{
          text: "Get Started Free",
          url: "#",
        }}
      />

      <AppPreview />

      {/* Trusted by section */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-6">
            Trusted by the world's most innovative teams
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "Company A",
              "Company B",
              "Company C",
              "Company D",
              "Company E",
            ].map((company) => (
              <div key={company} className="text-lg font-semibold">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Democratize Your Data, Make Better Executive Decisions
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform how your team interacts with data through AI-powered
              insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <MessageSquare
                  className="h-12 w-12 text-primary mb-4"
                  strokeWidth={1.5}
                />
                <CardTitle>Chat With Any Source</CardTitle>
                <CardDescription>
                  Remove data bottlenecks, get instant answers when you need
                  them
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3
                  className="h-12 w-12 text-primary mb-4"
                  strokeWidth={1.5}
                />
                <CardTitle>Automate Your Reporting</CardTitle>
                <CardDescription>
                  Receive AI-generated reports with deep-dive analysis on cause
                  & effect
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Zap
                  className="h-12 w-12 text-primary mb-4"
                  strokeWidth={1.5}
                />
                <CardTitle>Cross-Source Data Blending</CardTitle>
                <CardDescription>
                  Zero setup data blending with just basic prompting
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Users
                  className="h-12 w-12 text-primary mb-4"
                  strokeWidth={1.5}
                />
                <CardTitle>Enable Your Business Teams</CardTitle>
                <CardDescription>
                  Give everyone the power of a dedicated analyst
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Clock
                  className="h-12 w-12 text-primary mb-4"
                  strokeWidth={1.5}
                />
                <CardTitle>Real-Time Data</CardTitle>
                <CardDescription>
                  In-memory calculations with instant responses
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield
                  className="h-12 w-12 text-primary mb-4"
                  strokeWidth={1.5}
                />
                <CardTitle>Secure Data Access</CardTitle>
                <CardDescription>
                  Enterprise-grade security with role-based permissions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 px-4">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="h-6 w-6 fill-yellow-400 text-yellow-400"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              "The first time I used Datapad, I immediately knew reporting as we
              know it has just disappeared. Datapad is uncovering critical
              insights almost every day. The next generation of data is surely
              with AI and it's here."
            </h3>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-semibold">
                  AO
                </span>
              </div>
              <div>
                <div className="font-semibold">Ahmet Onur</div>
                <div className="text-muted-foreground">CEO, Kolektif House</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Data Experience?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of companies already using Datapad to make better
            decisions faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
