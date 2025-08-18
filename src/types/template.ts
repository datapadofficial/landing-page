export interface WorkflowTemplate {
  id: string;
  slug: string;
  title: string;
  description: string;
  team: string;
  integrations: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  prompt: string;
  mockData?: string;
}
