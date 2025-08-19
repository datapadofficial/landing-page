import { Team } from "@/types/team";
import { teams } from "@/data/teams/teams";
import { Feature } from "@/types/feature";
import { Integration } from "@/types/integration";
import { features } from "@/data/features/features";
import { integrations } from "@/data/integrations/integrations";

export function getTeamBySlug(slug: string): Team | undefined {
  return teams.find((team) => team.slug === slug);
}

export function getAllTeams(): Team[] {
  return teams.sort((a, b) => a.priority - b.priority);
}

export function getTeamsByPriority(limit?: number): Team[] {
  const sorted = teams.sort((a, b) => a.priority - b.priority);
  return limit ? sorted.slice(0, limit) : sorted;
}

export function getFeaturedFeaturesForTeam(teamSlug: string): Feature[] {
  const team = getTeamBySlug(teamSlug);
  if (!team) return [];

  return features
    .filter((feature) => team.featuredFeatures.includes(feature.slug))
    .sort((a, b) => a.priority - b.priority);
}

export function getFeaturedIntegrationsForTeam(
  teamSlug: string
): Integration[] {
  const team = getTeamBySlug(teamSlug);
  if (!team) return [];

  return integrations.filter((integration) =>
    team.featuredIntegrations.includes(integration.id)
  );
}
