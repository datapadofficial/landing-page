import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  ArrowRight, 
  CheckCircle,
  Zap,
  Target,
  BarChart3,
  Users,
  Shield,
  Cpu,
  Lightbulb
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Multi-Model AI - Advanced Intelligence",
  description: "Leverage multiple AI models working together for enhanced data analysis, deeper insights, and more accurate predictions.",
};

export default function MultiModelAIFeaturePage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-muted/50">
            Feature
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Multi-Model AI</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Harness the power of multiple AI models working in concert to deliver superior insights, 
          enhanced accuracy, and specialized analysis capabilities tailored to your specific data and business needs.
        </p>
      </div>

      {/* Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Ensemble AI Intelligence</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Specialized Models</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Different AI models optimized for specific tasks like forecasting, classification, and anomaly detection.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Target className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Enhanced Accuracy</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Consensus-based results from multiple models provide higher confidence and better accuracy.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-muted/20">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Adaptive Learning</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              AI models learn from each other and adapt to your specific data patterns and business context.
            </p>
          </div>
        </div>
      </section>

      {/* AI Model Types */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">AI Model Portfolio</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Analytical Models</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Large Language Models (LLMs) for natural language understanding
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Time series forecasting models for trend prediction
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Classification models for pattern recognition
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Anomaly detection models for outlier identification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Clustering models for segmentation analysis
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Specialized Models</h3>
            <div className="p-4 rounded-lg border bg-muted/20">
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Financial modeling for revenue and cost analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Marketing attribution models for campaign analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Customer lifetime value prediction models
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Churn prediction and retention models
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Supply chain optimization models
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">How Multi-Model AI Works</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Intelligent Model Selection</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium mx-auto mb-3">
                  1
                </div>
                <h4 className="font-medium mb-2">Query Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  AI analyzes your question to determine the most suitable models for the task.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium mx-auto mb-3">
                  2
                </div>
                <h4 className="font-medium mb-2">Model Ensemble</h4>
                <p className="text-sm text-muted-foreground">
                  Multiple specialized models work together to analyze different aspects of your data.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium mx-auto mb-3">
                  3
                </div>
                <h4 className="font-medium mb-2">Consensus Results</h4>
                <p className="text-sm text-muted-foreground">
                  Results are combined using advanced ensemble techniques for optimal accuracy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Multi-Model AI Applications</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 mb-2">
              <BarChart3 className="h-4 w-4 text-blue-500" />
              <h4 className="font-medium text-blue-700 dark:text-blue-300">Advanced Forecasting</h4>
            </div>
            <p className="text-sm text-blue-600 dark:text-blue-400">
              Combine time series, regression, and neural network models for superior prediction accuracy.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
            <div className="flex items-center gap-2 mb-2">
              <Users className="h-4 w-4 text-green-500" />
              <h4 className="font-medium text-green-700 dark:text-green-300">Customer Segmentation</h4>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400">
              Use clustering, classification, and behavioral models to create comprehensive customer profiles.
            </p>
          </div>
          <div className="p-4 rounded-lg border bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="h-4 w-4 text-purple-500" />
              <h4 className="font-medium text-purple-700 dark:text-purple-300">Fraud Detection</h4>
            </div>
            <p className="text-sm text-purple-600 dark:text-purple-400">
              Combine anomaly detection, pattern recognition, and rule-based models for comprehensive fraud prevention.
            </p>
          </div>
        </div>
      </section>

      {/* Advanced Capabilities */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Advanced AI Capabilities</h2>
        <div className="space-y-6">
          <div className="p-6 rounded-lg border bg-muted/20">
            <h3 className="text-lg font-medium mb-4">Example Multi-Model Queries</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Predict next quarter's sales with confidence intervals"</div>
                <div className="text-xs text-muted-foreground">Combines multiple forecasting models for robust predictions with uncertainty quantification</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Identify customers at risk of churning and recommend retention strategies"</div>
                <div className="text-xs text-muted-foreground">Uses ensemble of churn models plus recommendation systems</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Detect anomalies in financial transactions and classify risk levels"</div>
                <div className="text-xs text-muted-foreground">Combines anomaly detection with risk classification models</div>
              </div>
              <div className="p-4 rounded-lg border bg-background">
                <div className="text-sm text-muted-foreground mb-2">Ask Datapad:</div>
                <div className="font-medium mb-2">"Optimize marketing budget allocation across channels"</div>
                <div className="text-xs text-muted-foreground">Uses attribution, optimization, and forecasting models together</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Why Multi-Model AI Matters</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg border border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800">
            <h4 className="font-medium mb-3 text-green-700 dark:text-green-300">Enhanced Accuracy</h4>
            <ul className="text-sm text-green-600 dark:text-green-400 space-y-2">
              <li>• Consensus from multiple models reduces errors</li>
              <li>• Specialized models excel in their domains</li>
              <li>• Cross-validation improves reliability</li>
              <li>• Uncertainty quantification for confidence levels</li>
              <li>• Robust performance across different scenarios</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800">
            <h4 className="font-medium mb-3 text-blue-700 dark:text-blue-300">Business Value</h4>
            <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-2">
              <li>• More accurate business forecasts</li>
              <li>• Better risk assessment and management</li>
              <li>• Improved customer targeting and segmentation</li>
              <li>• Enhanced operational efficiency</li>
              <li>• Data-driven strategic decision making</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Getting Started with Multi-Model AI</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                1
              </div>
              <div>
                <h4 className="font-medium mb-2">Connect Your Data</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure your data sources are connected for comprehensive analysis.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                2
              </div>
              <div>
                <h4 className="font-medium mb-2">Ask Complex Questions</h4>
                <p className="text-sm text-muted-foreground">
                  Multi-model AI automatically activates for complex analytical queries.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-medium">
                3
              </div>
              <div>
                <h4 className="font-medium mb-2">Review Ensemble Results</h4>
                <p className="text-sm text-muted-foreground">
                  Get detailed explanations of how different models contributed to the final result.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
              <h4 className="font-medium mb-2 text-blue-700 dark:text-blue-300">Automatic Activation</h4>
              <ul className="text-sm text-blue-600 dark:text-blue-400 space-y-1">
                <li>• Complex forecasting queries</li>
                <li>• Multi-dimensional analysis requests</li>
                <li>• Risk assessment questions</li>
                <li>• Customer behavior predictions</li>
              </ul>
            </div>
            <div className="p-4 rounded-lg border bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
              <h4 className="font-medium mb-2 text-green-700 dark:text-green-300">Model Transparency</h4>
              <ul className="text-sm text-green-600 dark:text-green-400 space-y-1">
                <li>• See which models were used</li>
                <li>• Understand model confidence levels</li>
                <li>• Review ensemble methodology</li>
                <li>• Access detailed explanations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Next Steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/docs/features/ai-chat" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Try Advanced Queries</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              Ask complex analytical questions to experience multi-model AI
            </p>
          </Link>
          <Link href="/docs/integrations" className="p-4 rounded-lg border hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="h-4 w-4 text-primary" />
              <h4 className="font-medium">Connect Data Sources</h4>
            </div>
            <p className="text-sm text-muted-foreground">
              More data sources enable more sophisticated multi-model analysis
            </p>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t">
        <Link href="/docs/features/data-blending">
          <Button variant="outline" className="gap-2">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Data Blending
          </Button>
        </Link>
        <Link href="/docs/guides/effective-queries">
          <Button className="gap-2">
            Effective Queries Guide
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
