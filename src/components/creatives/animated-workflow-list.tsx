"use client";

import Image from "next/image";
import {
  AnimatedList,
  AnimatedListItem,
} from "@/components/magicui/animated-list";
import { WorkflowTemplate } from "@/types/template";
import { getAllWorkflows } from "@/lib/workflow-template-helpers";

const WorkflowCard = ({ workflow }: { workflow: WorkflowTemplate }) => {
  return (
    <div className="bg-white dark:bg-white-5  rounded-lg border p-3 backdrop-blur-sm hover:border-border/60 transition-all duration-200">
      <div className="flex items-center justify-between mb-2">
        <div className="rounded border border-border/20 overflow-hidden bg-background/50 flex-shrink-0">
          <Image
            src={`/images/integrations/${workflow.integrations[0]}.png`}
            alt={workflow.integrations[0]}
            width={18}
            height={18}
          />
        </div>
      </div>
      <p className="font-medium mb-1 line-clamp-1">{workflow.title}</p>
      {/* <p className="text-xs text-muted-foreground leading-tight line-clamp-1">
        {workflow.description}
      </p> */}
    </div>
  );
};

export function AnimatedWorkflowList({ integration }: { integration: string }) {
  let workflows = getAllWorkflows();
  if (integration) {
    workflows = workflows.filter((workflow) =>
      workflow.integrations.includes(integration)
    );
  }
  return (
    <div className="relative h-[280px] w-full overflow-hidden">
      <AnimatedList delay={2000} className="max-h-[280px] overflow-hidden">
        {workflows.map((workflow) => (
          <AnimatedListItem key={workflow.id}>
            <WorkflowCard workflow={workflow} />
          </AnimatedListItem>
        ))}
      </AnimatedList>
    </div>
  );
}
