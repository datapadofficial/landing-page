import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  getWorkflowBySlug,
  getAllWorkflows,
  getRelatedWorkflows,
} from "@/lib/workflows";
import { WorkflowPageTemplate } from "@/components/templates/workflow-page-template";

interface WorkflowPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const workflows = getAllWorkflows();
  return workflows.map((workflow) => ({
    slug: workflow.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkflowPageProps): Promise<Metadata> {
  const { slug } = await params;
  const workflow = getWorkflowBySlug(slug);

  if (!workflow) {
    return {
      title: "Workflow Not Found",
    };
  }

  return {
    title: `${workflow.title} - Analytics Workflow | Datapad`,
    description: workflow.description,
    keywords: `${workflow.title}, analytics workflow, ${workflow.team} analytics, business intelligence, Datapad`,
    openGraph: {
      title: `${workflow.title} - Analytics Workflow | Datapad`,
      description: workflow.description,
      type: "article",
    },
  };
}

export default async function WorkflowPage({ params }: WorkflowPageProps) {
  const { slug } = await params;
  const workflow = getWorkflowBySlug(slug);

  if (!workflow) {
    notFound();
  }

  const relatedWorkflows = getRelatedWorkflows(workflow);

  return (
    <WorkflowPageTemplate
      workflow={workflow}
      relatedWorkflows={relatedWorkflows}
    />
  );
}
