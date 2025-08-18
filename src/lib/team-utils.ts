import { Team } from "@/types/team";
import { teams } from "@/data/teams/teams";

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
