#!/usr/bin/env node

/**
 * Quick workflow creation script
 * Usage: npm run create:workflow "Workflow Title" --team=marketing --integrations=facebook-ads,google-analytics
 */

import fs from "fs";
import path from "path";

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

function parseArgs() {
  const args = process.argv.slice(2);
  const title = args[0];

  if (!title) {
    console.error(
      'Usage: npm run create:workflow "Workflow Title" --team=marketing --integrations=facebook-ads,google-analytics'
    );
    process.exit(1);
  }

  const team =
    args.find((arg) => arg.startsWith("--team="))?.split("=")[1] || "marketing";
  const integrations = args
    .find((arg) => arg.startsWith("--integrations="))
    ?.split("=")[1]
    ?.split(",") || ["google-analytics"];

  return { title, team, integrations };
}

function estimateDifficulty(
  integrations: string[]
): "beginner" | "intermediate" | "advanced" {
  if (integrations.length <= 2) return "beginner";
  if (integrations.length <= 4) return "intermediate";
  return "advanced";
}

function estimateTime(
  difficulty: "beginner" | "intermediate" | "advanced"
): string {
  switch (difficulty) {
    case "beginner":
      return "5-10 minutes";
    case "intermediate":
      return "10-20 minutes";
    case "advanced":
      return "20-30 minutes";
  }
}

async function createWorkflow() {
  const { title, team, integrations } = parseArgs();
  const slug = slugify(title);
  const difficulty = estimateDifficulty(integrations);

  const newWorkflow = {
    id: `RCP-${Date.now()}`,
    slug,
    title,
    description: `Analyze ${title.toLowerCase()} with comprehensive insights and visualizations`,
    team,
    integrations,
    difficulty,
    estimatedTime: estimateTime(difficulty),
    prompt: `How can I analyze ${title.toLowerCase()}? Show me key metrics and trends.`,
    mockData: `${slug}_mock_data.csv`,
  };

  // Read existing workflows file
  const workflowsPath = path.join(process.cwd(), "src/lib/workflows.ts");
  let workflowsContent = fs.readFileSync(workflowsPath, "utf8");

  // Find the workflows array and add the new workflow
  const workflowsMatch = workflowsContent.match(
    /export const workflows: Workflow\[\] = (\[[\s\S]*?\]);/
  );
  if (!workflowsMatch) {
    console.error("Could not find workflows array in workflows.ts");
    process.exit(1);
  }

  const existingWorkflows = JSON.parse(workflowsMatch[1]);
  existingWorkflows.push(newWorkflow);

  // Replace the workflows array
  const newWorkflowsArray = JSON.stringify(existingWorkflows, null, 2);
  workflowsContent = workflowsContent.replace(
    /export const workflows: Workflow\[\] = \[[\s\S]*?\];/,
    `export const workflows: Workflow[] = ${newWorkflowsArray};`
  );

  fs.writeFileSync(workflowsPath, workflowsContent);

  console.log(`✅ Created workflow: ${title}`);
  console.log(`📝 Slug: ${slug}`);
  console.log(`📂 Category: ${team}`);
  console.log(`🔌 Integrations: ${integrations.join(", ")}`);
  console.log(`⚡ Difficulty: ${difficulty}`);
  console.log(`⏱️  Time: ${estimateTime(difficulty)}`);
  console.log(`\n🌐 View at: /workflows/${slug}`);
}

createWorkflow().catch(console.error);
