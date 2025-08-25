import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Mic, 
  CheckCircle, 
  Zap,
  Volume2,
  Brain,
  BarChart3,
  MessageSquare,
  Users,
  Settings,
  Headphones,
  Info
} from "lucide-react";
import Link from "next/link";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "Voice Mode - Voice-Activated Data Analysis",
  description: "Present data insights through voice interaction with real-time updates. Ask questions and hear responses with natural voice commands.",
};

const features = [
  {
    icon: Mic,
    title: "Voice Commands",
    description: "Ask questions about your data using natural speech - no typing required for hands-free analysis."
  },
  {
    icon: Volume2,
    title: "Spoken Responses",
    description: "Hear insights narrated back to you with context and explanations, perfect for presentations and accessibility."
  },
  {
    icon: BarChart3,
    title: "Real-time Visuals",
    description: "Charts and graphs update dynamically as you speak, providing immediate visual feedback to your questions."
  }
];

const voiceExamples = [
  "Show me this month's revenue compared to last month",
  "What's our top performing marketing channel?",
  "Break down sales by product category",
  "How is our customer retention trending?",
  "What caused the spike in conversions yesterday?",
  "Compare mobile versus desktop performance"
];

const useCases = [
  {
    title: "Executive Presentations",
    description: "Present data insights to stakeholders using voice commands",
    icon: Users,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    scenarios: [
      "Board meeting data presentations",
      "Client performance reviews",
      "Team stand-up updates",
      "Investor pitch demonstrations"
    ]
  },
  {
    title: "Accessibility Support",
    description: "Enable data analysis for users with visual impairments",
    icon: Headphones,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    scenarios: [
      "Screen reader compatibility",
      "Audio-first data exploration",
      "Voice-guided analytics",
      "Inclusive team collaboration"
    ]
  },
  {
    title: "Hands-free Analysis",
    description: "Analyze data while multitasking or away from keyboard",
    icon: Zap,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    scenarios: [
      "Walking meetings with data",
      "Kitchen table analysis sessions",
      "Car dashboard reviews",
      "Mobile-first exploration"
    ]
  }
];

const voiceFeatures = [
  {
    feature: "Natural Language Processing",
    description: "Advanced speech recognition with business context understanding",
    capabilities: [
      "Industry-specific terminology recognition",
      "Multi-accent and language support", 
      "Noise cancellation and clarity optimization",
      "Context-aware question interpretation"
    ]
  },
  {
    feature: "Intelligent Responses",
    description: "AI-generated spoken explanations with data insights",
    capabilities: [
      "Conversational tone and pacing",
      "Key insight highlighting",
      "Follow-up question suggestions",
      "Customizable response length"
    ]
  },
  {
    feature: "Visual Integration", 
    description: "Synchronized voice and visual data presentation",
    capabilities: [
      "Real-time chart generation",
      "Voice-guided visual navigation",
      "Annotation and highlighting",
      "Multi-screen presentation support"
    ]
  }
];

export default function VoiceModePage() {
  return (
    <div className="flex flex-col gap-8">
      {/* Header */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground">Docs</Link>
          <span>/</span>
          <Link href="/docs/features" className="hover:text-foreground">Features</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
            <Mic className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Voice Mode</h1>
            <p className="text-xl text-muted-foreground">
              Voice-activated data analysis and presentation
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Mic className="h-3 w-3" />
            Voice Commands
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Volume2 className="h-3 w-3" />
            Spoken Responses
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Zap className="h-3 w-3" />
            Real-time Updates
          </Badge>
        </div>
      </div>

      <DocSection title="What You'll Get">
        <FeatureGrid features={features} />
      </DocSection>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">How Voice Mode Works</h2>
        <p className="text-muted-foreground">
          Experience hands-free data analysis with natural voice interaction.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-semibold">Activate Voice Mode</h3>
            <p className="text-sm text-muted-foreground">
              Click the microphone icon or use voice activation phrase
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-semibold">Speak Your Question</h3>
            <p className="text-sm text-muted-foreground">
              Ask about your data using natural language and business terms
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-semibold">See & Hear Results</h3>
            <p className="text-sm text-muted-foreground">
              Charts appear while AI narrates insights and explanations
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-semibold">Continue Conversation</h3>
            <p className="text-sm text-muted-foreground">
              Ask follow-up questions for deeper analysis
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* Voice Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Example Voice Commands</h2>
        <p className="text-muted-foreground">
          Here are some example questions you can ask using voice mode:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {voiceExamples.map((command, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 text-xs font-medium mt-0.5">
                    <Mic className="h-3 w-3" />
                  </div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    "{command}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">🎤 Voice Command Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>• Speak clearly and at a normal pace for best recognition</li>
            <li>• Use business terms and metric names from your connected data</li>
            <li>• Be specific about time periods and comparisons</li>
            <li>• Try follow-up questions like "Why?" or "Show me more detail"</li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Use Cases */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Voice Mode Use Cases</h2>
        <p className="text-muted-foreground">
          Discover how voice-activated analytics transforms different business scenarios.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 ${useCase.bgColor} rounded-lg flex items-center justify-center`}>
                    <useCase.icon className={`h-5 w-5 ${useCase.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{useCase.title}</CardTitle>
                    <CardDescription className="text-sm">{useCase.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-2">
                  {useCase.scenarios.map((scenario, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                      <span>{scenario}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Voice Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Voice Features</h2>
        <p className="text-muted-foreground">
          Sophisticated voice technology designed for professional data analysis.
        </p>
        
        <div className="space-y-6">
          {voiceFeatures.map((voiceFeature, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{voiceFeature.feature}</CardTitle>
                <CardDescription>{voiceFeature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {voiceFeature.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-muted-foreground">{capability}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Behind the Scenes */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Behind the Scenes</h2>
        <Card className="bg-gradient-to-r from-primary/5 to-emerald-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Voice AI Technology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Datapad's voice mode combines advanced speech recognition, natural language processing, and real-time data analysis. 
              The system understands business context, handles complex queries, and provides intelligent spoken responses with synchronized visuals.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Integration Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Voice Mode Integration</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageSquare className="h-5 w-5 text-blue-500" />
                AI Chat Integration
              </CardTitle>
              <CardDescription>
                Seamlessly switch between voice and text-based analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/features/ai-chat">
                  Learn About AI Chat
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <BarChart3 className="h-5 w-5 text-green-500" />
                Dashboard Presentation
              </CardTitle>
              <CardDescription>
                Use voice commands to navigate and present dashboards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href="/docs/features/dashboards">
                  Dashboard Features
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Settings className="h-5 w-5 text-purple-500" />
                Customization Options
              </CardTitle>
              <CardDescription>
                Adjust voice settings, response speed, and language preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">
                  • Voice activation phrases
                </div>
                <div className="text-xs text-muted-foreground">
                  • Response verbosity levels
                </div>
                <div className="text-xs text-muted-foreground">
                  • Audio output preferences
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator />

      {/* Best Practices */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Voice Mode Best Practices</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-blue-500" />
              Optimizing Voice Interactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Environment setup</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Ensure optimal audio conditions for best recognition accuracy
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Use a quality microphone in a quiet environment</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Clear communication</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Speak naturally using business terms your team understands
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ "Show me Q3 revenue by product line compared to Q2"</p>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Presentation flow</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Structure your questions for smooth presentation narrative
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Start with high-level overview, then drill down with follow-ups</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Getting Started */}
      <Card className="bg-gradient-to-r from-primary/5 to-emerald-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Ready to try voice-activated analytics?</CardTitle>
          <CardDescription>
            Connect your data sources and start asking questions with your voice.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://app.datapad.io/chat?voice=true">
                Try Voice Mode
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/get-started/quickstart">
                Quickstart Guide
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/docs/features/ai-chat">
                AI Chat Features
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      
    </div>
  );
}