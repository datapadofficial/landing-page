import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Mic, 
  ArrowRight, 
  CheckCircle,
  Users,
  Presentation,
  Volume2,
  MessageSquare,
  BarChart3,
  Lightbulb,
  Zap
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Voice Mode - Hands-Free Data Analysis",
  description: "Use voice commands to analyze your data, create visualizations, and present insights with Datapad's Voice Mode feature.",
};

export default function VoiceModeFeaturePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Feature
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Voice Mode</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Interact with your data using natural speech. Present insights, create visualizations, 
          and get answers hands-free with Datapad's advanced voice recognition and response system.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Voice-Powered Data Analysis</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Mic className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Natural Speech Recognition</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Ask questions and give commands using natural speech patterns in multiple languages.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Volume2 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Spoken Responses</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Receive detailed explanations and insights through high-quality text-to-speech.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Presentation className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Presentation Mode</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Navigate dashboards and present data insights hands-free during meetings.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Voice Mode Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Voice Commands</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Data queries and analysis requests
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Dashboard navigation and filtering
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Chart creation and customization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Report generation and export
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Meeting presentation controls
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Advanced Features</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Multi-language support
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Context-aware conversations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Background noise filtering
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Real-time data updates
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Custom voice shortcuts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Perfect For</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <Presentation className="h-4 w-4 text-blue-500" />
              <h4 className="font-medium text-blue-700 dark:text-blue-300">Executive Presentations</h4>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Navigate dashboards and present insights hands-free during board meetings and executive reviews.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-green-500" />
              <h4 className="font-medium text-green-700 dark:text-green-300">Team Collaborations</h4>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400">
              Analyze data together in real-time while keeping hands free for note-taking and discussion.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-purple-500" />
              <h4 className="font-medium text-purple-700 dark:text-purple-300">Mobile Analysis</h4>
            </div>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              Access and analyze data on mobile devices when typing is inconvenient or impossible.
            </p>
          </div>
        </div>
      </section>

      {/* Voice Commands Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Example Voice Commands</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Data Analysis Commands</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Say:</div>
                <div className="font-medium mb-2">"Show me this month's sales by region"</div>
                <div className="text-xs text-muted-foreground">Creates a regional sales breakdown chart for the current month</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Say:</div>
                <div className="font-medium mb-2">"What were our top performing products last quarter?"</div>
                <div className="text-xs text-muted-foreground">Generates a product performance analysis with rankings</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Say:</div>
                <div className="font-medium mb-2">"Compare this year's revenue to last year"</div>
                <div className="text-xs text-muted-foreground">Creates a year-over-year revenue comparison visualization</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Say:</div>
                <div className="font-medium mb-2">"Filter the dashboard to show only enterprise customers"</div>
                <div className="text-xs text-muted-foreground">Applies customer segment filters across all dashboard widgets</div>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Presentation Commands</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Say:</div>
                <div className="font-medium mb-2">"Next slide please"</div>
                <div className="text-xs text-muted-foreground">Navigates to the next dashboard or report section</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Say:</div>
                <div className="font-medium mb-2">"Explain this chart to the team"</div>
                <div className="text-xs text-muted-foreground">Provides spoken analysis of the currently displayed visualization</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Say:</div>
                <div className="font-medium mb-2">"Zoom in on the Q3 data"</div>
                <div className="text-xs text-muted-foreground">Focuses the view on third quarter data points</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Say:</div>
                <div className="font-medium mb-2">"Create a summary of key insights"</div>
                <div className="text-xs text-muted-foreground">Generates and speaks a summary of the most important findings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Setup Guide */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Getting Started with Voice Mode</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium mb-2">Enable Microphone Access</h4>
                <p className="text-sm text-muted-foreground">
                  Grant microphone permissions in your browser or app settings.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium mb-2">Configure Voice Settings</h4>
                <p className="text-sm text-muted-foreground">
                  Choose your preferred language, voice speed, and activation method.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                3
              </div>
              <div>
                <h4 className="font-medium mb-2">Start Speaking</h4>
                <p className="text-sm text-muted-foreground">
                  Click the voice button or use the wake word to begin voice interaction.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Voice Quality Tips</h4>
              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                <li>• Speak clearly and at normal pace</li>
                <li>• Use a quality microphone when possible</li>
                <li>• Minimize background noise</li>
                <li>• Practice with simple commands first</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Supported Languages</h4>
              <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                <li>• English (US, UK, AU)</li>
                <li>• Spanish (ES, MX)</li>
                <li>• French (FR, CA)</li>
                <li>• German, Portuguese, Italian</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Voice Mode Best Practices</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
            <h4 className="font-medium mb-3 text-green-700 dark:text-green-300">Effective Commands</h4>
            <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
              <li>• Be specific about time periods and metrics</li>
              <li>• Use business terms your team understands</li>
              <li>• Break complex requests into smaller parts</li>
              <li>• Pause between commands for processing</li>
              <li>• Use consistent terminology for better recognition</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
            <h4 className="font-medium mb-3 text-blue-700 dark:text-blue-300">Presentation Tips</h4>
            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
              <li>• Practice voice commands before important meetings</li>
              <li>• Have backup navigation methods ready</li>
              <li>• Use clear, business-appropriate language</li>
              <li>• Test audio setup in the meeting room</li>
              <li>• Keep voice commands simple during presentations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/docs/features/ai-chat" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Try AI Chat</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Start with text-based AI interactions before using voice mode
            </p>
          </Link>
          <Link href="/docs/features/dashboards" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Create Dashboards</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Build dashboards to use with voice navigation and presentation
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/features/text-to-sql-python">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Text-to-SQL & Python
          </Button>
        </Link>
        <Link href="/docs/features/shareable-reports">
          <Button className="gap-2">
            Shareable Reports
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
