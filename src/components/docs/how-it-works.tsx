interface HowItWorksStep {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  title?: string;
  steps: HowItWorksStep[];
}

export function HowItWorks({ title = "How It Works", steps }: HowItWorksProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div key={step.number} className="text-center space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
              <span className="text-primary font-bold">{step.number}</span>
            </div>
            <h3 className="font-semibold">{step.title}</h3>
            <p className="text-sm text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
