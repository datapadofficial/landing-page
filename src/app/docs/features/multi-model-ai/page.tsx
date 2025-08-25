import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  CheckCircle, 
  Zap,
  Target,
  Settings,
  TrendingUp,
  Cpu,
  Layers,
  Shuffle,
  MessageSquare,
  Info
} from "lucide-react";
import Link from "next/link";
import { DocSection } from "@/components/docs/doc-section";
import { FeatureGrid } from "@/components/docs/feature-grid";

export const metadata: Metadata = {
  title: "Multi-Model AI - Best AI for Every Task",
  description: "Leverage Claude, ChatGPT, and other AI models for optimal results. Choose the right AI model for each specific data analysis task.",
};

const features = [
  {
    icon: Brain,
    title: "Multiple AI Models",
    description: "Access Claude, ChatGPT, Gemini, and other leading AI models from a single interface for different analysis needs."
  },
  {
    icon: Target,
    title: "Task-Optimized Selection",
    description: "Datapad automatically chooses the best AI model for each specific task to ensure optimal accuracy and performance."
  },
  {
    icon: Zap,
    title: "Seamless Switching",
    description: "Switch between AI models mid-conversation or compare results from multiple models side-by-side."
  }
];

const aiModels = [
  {
    name: "Claude (Anthropic)",
    specialty: "Complex reasoning and analysis",
    icon: Brain,
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/20",
    strengths: [
      "Advanced statistical analysis",
      "Complex data interpretation",
      "Detailed explanations",
      "Mathematical computations"
    ],
    bestFor: ["Financial analysis", "Research insights", "Complex queries", "Data science tasks"]
  },
  {
    name: "ChatGPT (OpenAI)",
    specialty: "Creative content and strategy",
    icon: MessageSquare,
    color: "text-green-500",
    bgColor: "bg-green-100 dark:bg-green-900/20",
    strengths: [
      "Content generation",
      "Marketing strategies",
      "Creative problem solving",
      "Business recommendations"
    ],
    bestFor: ["Marketing content", "Strategic planning", "Creative campaigns", "Business insights"]
  },
  {
    name: "Gemini (Google)",
    specialty: "Multi-modal analysis",
    icon: Layers,
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/20",
    strengths: [
      "Visual data analysis",
      "Pattern recognition",
      "Multi-format processing",
      "Technical documentation"
    ],
    bestFor: ["Image analysis", "Pattern detection", "Technical queries", "Multi-format data"]
  }
];

const useCases = [
  "Use Claude for complex statistical analysis and financial modeling",
  "Switch to ChatGPT for creative marketing campaign generation",
  "Leverage Gemini for analyzing charts and visual data patterns",
  "Compare model outputs for critical business decisions",
  "Use specialized models for domain-specific analysis",
  "Automatically route tasks to the most suitable AI model"
];

const modelSelection = [
  {
    category: "Data Analysis Tasks",
    description: "Statistical analysis and data interpretation",
    tasks: [
      { task: "Statistical modeling", model: "Claude", reason: "Advanced mathematical reasoning" },
      { task: "Trend analysis", model: "Auto-select", reason: "Best model chosen automatically" },
      { task: "Correlation analysis", model: "Claude", reason: "Complex relationship understanding" },
      { task: "Anomaly detection", model: "Gemini", reason: "Pattern recognition expertise" }
    ]
  },
  {
    category: "Content Generation",
    description: "Marketing and business content creation",
    tasks: [
      { task: "Marketing copy", model: "ChatGPT", reason: "Creative writing capabilities" },
      { task: "Executive summaries", model: "Claude", reason: "Analytical summarization" },
      { task: "Social media content", model: "ChatGPT", reason: "Engaging content creation" },
      { task: "Technical documentation", model: "Gemini", reason: "Technical accuracy" }
    ]
  }
];

export default function MultiModelAIPage() {
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
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Multi-Model AI</h1>
            <p className="text-xl text-muted-foreground">
              Leverage the best AI models for optimal results in every task
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <Badge variant="secondary" className="gap-1">
            <Brain className="h-3 w-3" />
            Multiple Models
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Target className="h-3 w-3" />
            Task-Optimized
          </Badge>
          <Badge variant="secondary" className="gap-1">
            <Zap className="h-3 w-3" />
            Auto-Selection
          </Badge>
        </div>
      </div>

      <DocSection title="What You'll Get">
        <FeatureGrid features={features} />
      </DocSection>

      {/* How It Works */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">How Multi-Model AI Works</h2>
        <p className="text-muted-foreground">
          Access the best AI models for every data analysis and business task.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">1</span>
            </div>
            <h3 className="font-semibold">Ask Your Question</h3>
            <p className="text-sm text-muted-foreground">
              Submit your data analysis question or business task
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">2</span>
            </div>
            <h3 className="font-semibold">AI Model Selection</h3>
            <p className="text-sm text-muted-foreground">
              System automatically chooses the best AI model for your task
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">3</span>
            </div>
            <h3 className="font-semibold">Optimized Analysis</h3>
            <p className="text-sm text-muted-foreground">
              Get results tailored to each model's specific strengths
            </p>
          </div>
          
          <div className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">4</span>
            </div>
            <h3 className="font-semibold">Compare & Switch</h3>
            <p className="text-sm text-muted-foreground">
              Compare outputs or manually switch models as needed
            </p>
          </div>
        </div>
      </div>

      <Separator />

      {/* AI Models */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Available AI Models</h2>
        <p className="text-muted-foreground">
          Each AI model has unique strengths optimized for different types of tasks:
        </p>
        
        <div className="space-y-6">
          {aiModels.map((model, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${model.bgColor} rounded-lg flex items-center justify-center`}>
                    <model.icon className={`h-6 w-6 ${model.color}`} />
                </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">{model.name}</CardTitle>
                    <CardDescription className="text-base">{model.specialty}</CardDescription>
              </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Core Strengths</h4>
                    <ul className="space-y-2">
                      {model.strengths.map((strength, strengthIndex) => (
                        <li key={strengthIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Best For</h4>
                    <ul className="space-y-2">
                      {model.bestFor.map((use, useIndex) => (
                        <li key={useIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
              </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Use Cases */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Multi-Model Use Cases</h2>
        <p className="text-muted-foreground">
          Here are examples of how different AI models excel at different tasks:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {useCases.map((useCase, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-medium mt-0.5">
                    {index + 1}
          </div>
                  <p className="text-sm font-medium group-hover:text-primary transition-colors">
                    {useCase}
            </p>
          </div>
              </CardContent>
            </Card>
          ))}
            </div>
        
        <div className="bg-muted/50 p-4 rounded-lg">
          <h4 className="font-medium mb-2">🤖 Multi-Model Tips</h4>
          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
            <li>• Let auto-selection choose the best model for most tasks</li>
            <li>• Manually switch models to compare different approaches</li>
            <li>• Use model-specific strengths for specialized analysis</li>
            <li>• Combine insights from multiple models for critical decisions</li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Model Selection Examples */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Smart Model Selection</h2>
        <p className="text-muted-foreground">
          Examples of how Datapad automatically selects the best AI model for different tasks.
        </p>
        
        <div className="space-y-6">
          {modelSelection.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{category.category}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex-1">
                        <h5 className="font-medium text-sm">{task.task}</h5>
                        <p className="text-xs text-muted-foreground">{task.reason}</p>
                      </div>
                      <Badge variant="outline" className="ml-4">
                        {task.model}
                      </Badge>
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
        <Card className="bg-gradient-to-r from-primary/5 to-yellow-500/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cpu className="h-5 w-5" />
              Intelligent Model Routing
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Datapad's multi-model system analyzes each query to determine the optimal AI model based on task type, complexity, 
              and desired output format. The system continuously learns from results to improve model selection over time.
            </p>
          </CardContent>
        </Card>
              </div>

      <Separator />

      {/* Advanced Features */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced Multi-Model Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shuffle className="h-5 w-5 text-blue-500" />
                Model Comparison
              </CardTitle>
              <CardDescription>
                Compare outputs from multiple AI models side-by-side
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">• Side-by-side analysis</div>
                <div className="text-xs text-muted-foreground">• Confidence scoring</div>
                <div className="text-xs text-muted-foreground">• Best answer selection</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Settings className="h-5 w-5 text-green-500" />
                Custom Preferences
              </CardTitle>
              <CardDescription>
                Set model preferences for different types of analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">• Task-specific defaults</div>
                <div className="text-xs text-muted-foreground">• Performance preferences</div>
                <div className="text-xs text-muted-foreground">• Custom routing rules</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <TrendingUp className="h-5 w-5 text-purple-500" />
                Performance Analytics
              </CardTitle>
              <CardDescription>
                Track which models perform best for your specific use cases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">• Model performance tracking</div>
                <div className="text-xs text-muted-foreground">• Usage analytics</div>
                <div className="text-xs text-muted-foreground">• Optimization recommendations</div>
              </div>
            </CardContent>
          </Card>
        </div>
          </div>

      <Separator />

      {/* Best Practices */}
          <div className="space-y-6">
        <h2 className="text-2xl font-semibold">Multi-Model Best Practices</h2>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Info className="h-5 w-5 text-blue-500" />
              Maximizing Multi-Model Benefits
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Trust the auto-selection</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  The system chooses models based on proven performance for each task type
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Let the system auto-select models for optimal results</p>
            </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Compare for critical decisions</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Use multiple models to validate important business decisions
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Compare model outputs for high-stakes analysis</p>
            </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-medium mb-2">Leverage model strengths</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Manually select specific models when you need their unique capabilities
                </p>
                <div className="p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-sm text-green-800 dark:text-green-200">✓ Use Claude for complex analysis, ChatGPT for creative content</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>

      {/* Getting Started */}
      <Card className="bg-gradient-to-r from-primary/5 to-yellow-500/5 border-primary/20">
        <CardHeader>
          <CardTitle>Ready to leverage multiple AI models?</CardTitle>
          <CardDescription>
            Experience the power of choosing the right AI model for every data analysis task.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://app.datapad.io/chat">
                Try Multi-Model AI
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