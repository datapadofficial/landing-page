import { integrations } from "@/data/integrations/integrations";
import { Integration } from "@/types/integration";
import { getTeamBySlug } from "@/lib/team-utils";

export function getIntegrationById(id: string): Integration | undefined {
  return integrations.find((integration) => integration.id === id);
}

export function getAllIntegrations(numberToShow?: number): Integration[] {
  if (numberToShow) {
    return integrations.slice(0, numberToShow);
  }
  return integrations;
}

export function getIntegrationsByCategory(
  category: Integration["category"]
): Integration[] {
  return integrations.filter(
    (integration) => integration.category === category
  );
}

export function getIntegrationsByIds(ids: string[]): Integration[] {
  return integrations.filter((integration) => ids.includes(integration.id));
}

export function getIntegrationsForTeam(teamSlug: string): Integration[] {
  const team = getTeamBySlug(teamSlug);
  if (!team) return [];

  return integrations.filter((integration) =>
    team.featuredIntegrations.includes(integration.id)
  );
}

// Note: This function references workflows, but we keep it here for cross-referencing
// The actual implementation would be: getWorkflowsByIntegration(integrationId)
