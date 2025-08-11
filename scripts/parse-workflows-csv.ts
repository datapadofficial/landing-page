import fs from "fs";
import path from "path";
import Papa from "papaparse";

interface CsvWorkflow {
  ID: string;
  usecase: string;
  team: string;
  prompt: string;
  sources: string;
  "Mock CSV": string;
}

interface Workflow {
  id: string;
  slug: string;
  title: string;
  description: string;
  team: string;
  integrations: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  prompt: string;
  mockData?: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

function mapCategoryToSlug(team: string): string {
  const teamMap: { [key: string]: string } = {
    Marketing: "marketing",
    Sales: "sales",
    "Retail & E-Commerce": "retail-ecommerce",
    "Content & SEO": "content-seo",
    "Social Media & Brand": "social-media",
    "Product Management": "product-management",
    Finance: "finance",
    Agency: "agency",
    Growth: "growth",
    "Supply Chain": "supply-chain",
    CRM: "crm",
  };

  return teamMap[team] || slugify(team);
}

function parseIntegrations(sources: string): string[] {
  if (!sources || sources.trim() === "") return [];

  return sources
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
    .map((s) => s.replace(/\s+/g, "-").toLowerCase());
}

function estimateDifficulty(
  integrations: string[],
  prompt: string
): "beginner" | "intermediate" | "advanced" {
  if (integrations.length <= 2 && prompt.length < 200) return "beginner";
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

async function parseWorkflowsCsv() {
  const csvPath = path.join(process.cwd(), "content/csv/workflows.csv");
  const outputPath = path.join(process.cwd(), "src/lib/workflows.ts");

  if (!fs.existsSync(csvPath)) {
    console.error(`CSV file not found at ${csvPath}`);
    process.exit(1);
  }

  const csvContent = fs.readFileSync(csvPath, "utf8");
  const parsed = Papa.parse<CsvWorkflow>(csvContent, {
    header: true,
    skipEmptyLines: true,
  });

  if (parsed.errors && parsed.errors.length > 0) {
    console.error("CSV parse errors:", parsed.errors);
  }

  const workflows: Workflow[] = parsed.data
    .filter((row) => row && row.ID && row.usecase)
    .map((row) => {
      const integrations = parseIntegrations(row.sources);
      const difficulty = estimateDifficulty(integrations, row.prompt);

      return {
        id: row.ID,
        slug: slugify(row.usecase),
        title: row.usecase,
        description:
          row.prompt.length > 200
            ? row.prompt.substring(0, 200) + "..."
            : row.prompt,
        team: mapCategoryToSlug(row.team),
        integrations,
        difficulty,
        estimatedTime: estimateTime(difficulty),
        prompt: row.prompt,
        mockData: row["Mock CSV"] || undefined,
      };
    });

  // Generate TypeScript file content
  const tsContent = `export interface Workflow {
  id: string;
  slug: string;
  title: string;
  description: string;
  team: string;
  integrations: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  prompt: string;
  mockData?: string;
}

export const workflows: Workflow[] = ${JSON.stringify(workflows, null, 2)};

export function getWorkflowBySlug(slug: string): Workflow | undefined {
  return workflows.find((recipe) => recipe.slug === slug);
}

export function getAllWorkflows(): Workflow[] {
  return workflows;
}

export function getWorkflowsByCategory(team: string): Workflow[] {
  return workflows.filter((recipe) => recipe.team === team);
}

export function getWorkflowsByIntegration(integrationId: string): Workflow[] {
  return workflows.filter((recipe) => recipe.integrations.includes(integrationId));
}

export function getWorkflowsByDifficulty(difficulty: Workflow["difficulty"]): Workflow[] {
  return workflows.filter((recipe) => recipe.difficulty === difficulty);
}

export function getRelatedWorkflows(recipe: Workflow, limit: number = 4): Workflow[] {
  return workflows
    .filter(r => r.slug !== recipe.slug)
    .filter(r => r.team === recipe.team || r.integrations.some(i => recipe.integrations.includes(i)))
    .slice(0, limit);
}
`;

  fs.writeFileSync(outputPath, tsContent);
  console.log(`✅ Generated ${workflows.length} workflows in ${outputPath}`);

  // Log some stats
  const categories = [...new Set(workflows.map((r) => r.team))];
  const integrations = [...new Set(workflows.flatMap((r) => r.integrations))];

  console.log(`📊 Categories: ${categories.length} (${categories.join(", ")})`);
  console.log(
    `🔌 Integrations: ${integrations.length} unique integrations found`
  );
  console.log(
    `📈 Difficulty: ${
      workflows.filter((r) => r.difficulty === "beginner").length
    } beginner, ${
      workflows.filter((r) => r.difficulty === "intermediate").length
    } intermediate, ${
      workflows.filter((r) => r.difficulty === "advanced").length
    } advanced`
  );
}

parseWorkflowsCsv().catch(console.error);
