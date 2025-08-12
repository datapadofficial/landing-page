import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getTeamBySlug, getAllTeams } from "@/lib/teams";
import { getWorkflowsByTeam } from "@/lib/workflows";
import { getIntegrationsByIds } from "@/lib/integrations";
import { getFeatureBySlug } from "@/lib/features";
import { TeamHero } from "@/components/team/team-hero";
import { TeamIntegrations } from "@/components/team/team-integrations";
import { TeamWorkflows } from "@/components/team/team-workflows";
import { TeamFeatures } from "@/components/team/team-features";
import { TeamCTA } from "@/components/team/team-cta";

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
      <TeamHero
        team={team}
        customContent={
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border">
            <h3 className="text-lg font-semibold mb-2">
              {team.name} Analytics Made Simple
            </h3>
            <p className="text-muted-foreground">
              Transform your {team.name.toLowerCase()} data into actionable
              insights with AI-powered analytics. Connect your tools and get
              answers to your most important questions in seconds.
            </p>
          </div>
        }
      />

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

      <TeamFeatures team={team} features={features} />

      <TeamCTA team={team} />
    </>
  );
}
