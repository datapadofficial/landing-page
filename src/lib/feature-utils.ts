import { Feature } from "@/types/feature";
import { features } from "@/data/features/features";
import { getTeamBySlug } from "@/lib/team-utils";

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((feature) => feature.slug === slug);
}

export function getAllFeatures(): Feature[] {
  return features.sort((a, b) => a.priority - b.priority);
}

export function getFeaturesByCategory(
  category: Feature["category"]
): Feature[] {
  return features
    .filter((feature) => feature.category === category)
    .sort((a, b) => a.priority - b.priority);
}

export function getFeaturesForTeam(teamSlug: string): Feature[] {
  const team = getTeamBySlug(teamSlug);
  if (!team) return [];

  return features
    .filter((feature) => team.featuredFeatures.includes(feature.slug))
    .sort((a, b) => a.priority - b.priority);
}
