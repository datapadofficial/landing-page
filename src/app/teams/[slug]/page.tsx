import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getTeamBySlug, getAllTeams } from "@/lib/teams";
import { getWorkflowsByTeam } from "@/lib/workflows";
import { getIntegrationsByIds } from "@/lib/integrations";
import { getFeatureBySlug } from "@/lib/features";
import { TeamPageTemplate } from "@/components/templates/team-page-template";

interface TeamPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const teams = getAllTeams();
  return teams.map((team) => ({
    slug: team.slug,
  }));
}

export async function generateMetadata({
  params,
}: TeamPageProps): Promise<Metadata> {
  const { slug } = await params;
  const team = getTeamBySlug(slug);

  if (!team) {
    return {
      title: "Team Not Found",
    };
  }

  return {
    title: team.seoTitle || `${team.name} Analytics - Datapad`,
    description: team.seoDescription || team.description,
    openGraph: {
      title: team.seoTitle || `${team.name} Analytics - Datapad`,
      description: team.seoDescription || team.description,
      type: "website",
    },
  };
}

export default async function TeamPage({ params }: TeamPageProps) {
  const { slug } = await params;
  const team = getTeamBySlug(slug);

  if (!team) {
    notFound();
  }

  const workflows = getWorkflowsByTeam(slug);
  const integrations = getIntegrationsByIds(team.featuredIntegrations);
  const features = team.featuredFeatures
    .map((slug) => getFeatureBySlug(slug))
    .filter(Boolean);

  // Check for custom page override (like marketing team)
  try {
    const CustomPage = await import(`../../../components/teams/${slug}/page`).then(
      (module) => module.default
    );
    return (
      <CustomPage
        team={team}
        workflows={workflows}
        integrations={integrations}
        features={features}
      />
    );
  } catch (error) {
    // No custom page found, use template
  }

  return (
    <TeamPageTemplate
      team={team}
      workflows={workflows}
      integrations={integrations}
      features={features}
    />
  );
}
