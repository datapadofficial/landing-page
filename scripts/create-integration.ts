#!/usr/bin/env node

/**
 * Quick integration creation script
 * Usage: npm run create:integration twitter-ads --category=advertising --custom-page
 */

import fs from "fs";
import path from "path";

function parseArgs() {
  const args = process.argv.slice(2);
  const id = args[0];

  if (!id) {
    console.error(
      "Usage: npm run create:integration integration-id --category=advertising --custom-page"
    );
    process.exit(1);
  }

  const category =
    args.find((arg) => arg.startsWith("--category="))?.split("=")[1] || "other";
  const hasCustomPage = args.includes("--custom-page");

  return { id, category, hasCustomPage };
}

function generateIntegrationName(id: string): string {
  return id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function createIntegration() {
  const { id, category, hasCustomPage } = parseArgs();
  const name = generateIntegrationName(id);

  const newIntegration = {
    id,
    name,
    description: `${name} integration for comprehensive data analysis and insights`,
    category: category as any,
    icon: `/images/integrations/${id}.png`,
    website: `https://${id.replace("-", "")}.com`,
    specs: {
      dataTypes: ["campaigns", "metrics", "insights"],
      updateFrequency: "Real-time",
      historicalData: "2+ years",
      apiDocs: `https://developers.${id.replace("-", "")}.com`,
    },
    seoContent: {
      overview: `# ${name} Integration\n\nConnect your ${name} account to Datapad for comprehensive analysis and optimization insights.`,
      useCases: `## Common Use Cases\n\n- Performance analysis\n- ROI optimization\n- Campaign monitoring\n- Competitive insights`,
      setup: `## Quick Setup\n\n1. Connect your ${name} account\n2. Select data to sync\n3. Start analyzing`,
    },
    hasCustomPage,
  };

  // Read existing integrations file
  const integrationsPath = path.join(process.cwd(), "src/lib/integrations.ts");
  let integrationsContent = fs.readFileSync(integrationsPath, "utf8");

  // Find the integrations array and add the new integration
  const integrationsMatch = integrationsContent.match(
    /export const integrations: Integration\[\] = (\[[\s\S]*?\]);/
  );
  if (!integrationsMatch) {
    console.error("Could not find integrations array in integrations.ts");
    process.exit(1);
  }

  const existingIntegrations = JSON.parse(integrationsMatch[1]);
  existingIntegrations.push(newIntegration);

  // Replace the integrations array
  const newIntegrationsArray = JSON.stringify(existingIntegrations, null, 2);
  integrationsContent = integrationsContent.replace(
    /export const integrations: Integration\[\] = \[[\s\S]*?\];/,
    `export const integrations: Integration[] = ${newIntegrationsArray};`
  );

  fs.writeFileSync(integrationsPath, integrationsContent);

  // Create custom page if requested
  if (hasCustomPage) {
    const customPageDir = path.join(
      process.cwd(),
      `src/components/integrations/${id}`
    );
    const customPagePath = path.join(customPageDir, "page.tsx");

    if (!fs.existsSync(customPageDir)) {
      fs.mkdirSync(customPageDir, { recursive: true });
    }

    const customPageContent = `"use client";

import { Integration } from "@/lib/integrations";
import { Workflow } from "@/lib/workflows";
import { IntegrationPageTemplate } from "@/components/templates/integration-page-template";

interface ${name.replace(/\s+/g, "")}PageProps {
  integration: Integration;
  workflows: Workflow[];
}

export default function ${name.replace(
      /\s+/g,
      ""
    )}Page({ integration, workflows }: ${name.replace(/\s+/g, "")}PageProps) {
  return (
    <IntegrationPageTemplate 
      integration={integration} 
      workflows={workflows}
      customContent={
        <div className="py-16">
          <div className="container">
            <div className="mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">
                Custom ${name} Features
              </h2>
              <p className="text-muted-foreground">
                Add your custom components and content here
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
}`;

    fs.writeFileSync(customPagePath, customPageContent);
    console.log(`📄 Created custom page: ${customPagePath}`);
  }

  console.log(`✅ Created integration: ${name}`);
  console.log(`🆔 ID: ${id}`);
  console.log(`📂 Category: ${category}`);
  console.log(`🎨 Custom Page: ${hasCustomPage ? "Yes" : "No"}`);
  console.log(`\n🌐 View at: /integrations/${id}`);
}

createIntegration().catch(console.error);
