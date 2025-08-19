import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getTeamBySlug, getAllTeams } from "@/lib/team-utils";
import { getWorkflowsByTeam } from "@/lib/workflow-template-helpers";
import { getIntegrationsByIds } from "@/lib/integration-utils";
import { getFeatureBySlug } from "@/lib/feature-utils";
import { TeamHero } from "@/components/team/team-hero";
import { TeamIntegrations } from "@/components/team/team-integrations";
import { TeamWorkflows } from "@/components/team/team-workflows";
import { TeamCTA } from "@/components/team/team-cta";
import { MainLogos } from "@/components/main-logos";
import { getFeaturedFeaturesForTeam } from "@/lib/team-utils";
import { FeatureAccordion } from "@/components/features/feature-accordion";
import { PainPoints } from "@/components/pain-points";
import { WorkflowsSection } from "@/components/workflows-section";
import { WorkflowGallery } from "@/components/workflows/workflow-gallery";

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
      <MainLogos />

      {/* Pain Points Component */}
      <PainPoints
        painPoints={team.painPoints || []}
        title={
          <>
            Common {team.name}{" "}
            <span className="text-chart-red">Pain Points</span>
          </>
        }
        subtitle={`See why ${team.name.toLowerCase()} teams are struggling with data analysis and reporting.`}
      />

      {/* Workflows Section */}
      <WorkflowsSection
        title={
          <>
            <span className="text-primary">We Fixed It With AI</span>
            <br />
            Press a Button, Watch Your {team.name} ROI Increase
          </>
        }
        description={`Stop wasting hours creating content that doesn't convert. Get AI that actually generates your ${team.name.toLowerCase()} campaigns, blog posts, email sequences, and sales scripts - ready to copy-paste in minutes.`}
        workflows={workflows}
      />

      {/* Related Workflows Gallery */}
      {workflows.length > 0 && (
        <WorkflowGallery
          workflows={workflows}
          title={
            <>
              A Battle-Tested Recipe <br />
              For Every {team.name} Scenario
            </>
          }
          subtitle={
            <p className="text-muted-foreground text-lg max-w-2xl text-center">
              Get actionable campaigns and strategies from your{" "}
              {team.name.toLowerCase()} data in seconds, not spreadsheets.
              Copy-paste ready.
            </p>
          }
          maxDisplay={9}
          viewAllLink={`/workflows?team=${team.slug}`}
          viewAllText={`View All ${workflows.length} ${team.name} Workflows`}
        />
      )}

      <FeatureAccordion
        title={<h2>Why {team.name} Teams Choose Datapad</h2>}
        subtitle={
          <p className="mx-auto text-muted-foreground md:text-xl">
            Discover how Datapad transforms {team.name.toLowerCase()} analytics
            and reporting
          </p>
        }
        features={getFeaturedFeaturesForTeam(slug)}
      />

      <TeamIntegrations team={team} integrations={integrations} />

      <TeamWorkflows
        team={team}
        workflows={workflows}
        customContent={
          <div className="text-center mb-12 flex flex-col items-center gap-8">
            <h2>{team.name} Workflows</h2>
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
