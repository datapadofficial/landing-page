import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getTeamBySlug, getAllTeams } from "@/lib/team-utils";
import { getWorkflowsByTeam } from "@/lib/workflow-template-helpers";
import { getIntegrationsByIds } from "@/lib/integration-utils";
import { getFeatureBySlug } from "@/lib/feature-utils";
import { TeamHero } from "@/components/team/team-hero";
import { TeamIntegrations } from "@/components/team/team-integrations";
import { TeamWorkflows } from "@/components/team/team-workflows";
import { TeamFeatures } from "@/components/team/team-features";
import { TeamCTA } from "@/components/team/team-cta";
import { MainLogos } from "@/components/main-logos";
import { TeamValuePropositions } from "@/components/team/team-value-propositions";

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
    const CustomPage = await import(
      `../../../components/teams/${slug}/page`
    ).then((module) => module.default);
    return (
      <CustomPage
        team={team}
        workflows={workflows}
        integrations={integrations}
        features={features}
      />
    );
  } catch {
    // No custom page found, use template
  }

  return (
    <>
      <TeamHero team={team} />

      {/* Logos section */}
      <MainLogos
        title={
          <div className="text-center">
            <h2 className="mb-4 text-xl font-bold text-balance md:text-2xl lg:text-3xl">
              Powering the world's best {team.name.toLowerCase()} teams.
              <br className="max-md:hidden" />
              <span className="text-muted-foreground">
                From next-gen startups to established enterprises.
              </span>
            </h2>
          </div>
        }
      />

      <TeamValuePropositions team={team} />

      <TeamFeatures team={team} features={features} />

      <TeamIntegrations
        team={team}
        integrations={integrations}
        customContent={
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">
              Connect Your {team.name} Stack
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Integrate all your {team.name.toLowerCase()} tools and get a
              unified view of your performance, metrics, and insights across
              every platform.
            </p>
          </div>
        }
      />

      <TeamWorkflows
        team={team}
        workflows={workflows}
        customContent={
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">{team.name} Workflows</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready-to-use analytics workflows designed specifically for{" "}
              {team.name.toLowerCase()} teams. Get instant insights without the
              complexity.
            </p>
          </div>
        }
      />

      <TeamCTA team={team} />
    </>
  );
}
