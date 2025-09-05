import { CheckCircle } from "lucide-react";

interface PrerequisitesSectionProps {
  title?: string;
  requirements: string[];
}

export function PrerequisitesSection({ 
  title = "Before You Connect", 
  requirements 
}: PrerequisitesSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="p-4 rounded-lg border bg-muted/20">
        <h3 className="font-medium mb-3">Requirements</h3>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {requirements.map((requirement, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              {requirement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
