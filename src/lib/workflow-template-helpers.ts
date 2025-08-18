import { WorkflowTemplate } from "@/types/template";
import { workflows } from "@/data/workflow-templates/workflow-templates";

export function getWorkflowBySlug(slug: string): WorkflowTemplate | undefined {
  return workflows.find((workflow) => workflow.slug === slug);
}

export function getAllWorkflows(): WorkflowTemplate[] {
  return workflows;
}

export function getWorkflowsByTeam(team: string): WorkflowTemplate[] {
  return workflows.filter((workflow) => workflow.team === team);
}

export function getWorkflowsByIntegration(
  integrationId: string
): WorkflowTemplate[] {
  return workflows.filter((workflow) =>
    workflow.integrations.includes(integrationId)
  );
}

export function getWorkflowsByDifficulty(
  difficulty: WorkflowTemplate["difficulty"]
): WorkflowTemplate[] {
  return workflows.filter((workflow) => workflow.difficulty === difficulty);
}

export function getRelatedWorkflows(
  workflow: WorkflowTemplate,
  limit: number = 4
): WorkflowTemplate[] {
  return workflows
    .filter((w) => w.slug !== workflow.slug)
    .filter(
      (w) =>
        w.team === workflow.team ||
        w.integrations.some((i) => workflow.integrations.includes(i))
    )
    .slice(0, limit);
}
