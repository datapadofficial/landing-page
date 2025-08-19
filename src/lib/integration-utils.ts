import { integrations } from "@/data/integrations/integrations";
import { Integration } from "@/types/integration";

export function getIntegrationById(id: string): Integration | undefined {
  return integrations.find((integration) => integration.id === id);
}

export function getAllIntegrations(): Integration[] {
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

// Note: This function references workflows, but we keep it here for cross-referencing
// The actual implementation would be: getWorkflowsByIntegration(integrationId)
