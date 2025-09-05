import { ReactNode } from "react";

interface ConnectionStep {
  title: string;
  description: string;
  content: ReactNode;
  warning?: {
    type: "info" | "warning" | "success";
    message: string;
  };
}

interface ConnectionStepsProps {
  steps: ConnectionStep[];
}

export function ConnectionSteps({ steps }: ConnectionStepsProps) {
  const getWarningColors = (type: "info" | "warning" | "success") => {
    switch (type) {
      case "info":
        return "border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-800 text-blue-700 dark:text-blue-300";
      case "warning":
        return "border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-800 text-amber-700 dark:text-amber-300";
      case "success":
        return "border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-800 text-green-700 dark:text-green-300";
    }
  };

  const getWarningPrefix = (type: "info" | "warning" | "success") => {
    switch (type) {
      case "info":
        return "💡";
      case "warning":
        return "⚠️";
      case "success":
        return "✅";
    }
  };

  return (
    <div className="space-y-6">
      {steps.map((step, index) => (
        <div key={index} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary font-medium text-sm">
              {index + 1}
            </div>
            <h3 className="text-lg font-medium">{step.title}</h3>
          </div>
          <div className="ml-10 space-y-3">
            <p className="text-muted-foreground">{step.description}</p>
            {step.content}
            {step.warning && (
              <div className={`p-3 rounded border ${getWarningColors(step.warning.type)}`}>
                <p className="text-sm">
                  {getWarningPrefix(step.warning.type)} <strong>{step.warning.type === "info" ? "Note" : step.warning.type === "warning" ? "Warning" : "Success"}:</strong> {step.warning.message}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
