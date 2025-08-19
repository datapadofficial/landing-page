import { competitors } from "@/data/competitors/competitors";
import { Competitor } from "@/types/competitor";

export function getAllCompetitors(): Competitor[] {
  return competitors;
}

export function getCompetitorById(id: string): Competitor | undefined {
  return competitors.find((competitor) => competitor.id === id);
}

export function getCompetitorSlugs(): string[] {
  return competitors.map((competitor) => competitor.id);
}
