import { Metadata } from "next";
import { Faq } from "@/components/faq";
import { MainCTA } from "@/components/main-cta";
import { AppPreview } from "@/components/creatives/app-preview";
import { MainLogos } from "@/components/main-logos";
import { FeatureGrid } from "@/components/features/feature-grid";
import UseCaseGrid from "@/components/use-case-grid";
import { SocialMediaTestimonials } from "@/components/social-media-testimonials";
import { ExcelAIAnalysisHowItWorksSection as HowItWorksSection } from "../excel-ai-analysis/excel-ai-analysis-how-it-works-section";
import { Stats } from "@/components/sections/stats";

import { MedicalHero } from "./medical-hero";

export const metadata: Metadata = {
  title: "AI Medical Data Analysis | Healthcare Analytics Platform | Datapad",
  description:
    "Activate HIPAA-ready AI medical data analysis that unifies EHR exports, clinical trials, and population health data into real-time dashboards, workflows, and predictive insights.",
  keywords: [
    "ai medical data analysis",
    "healthcare ai analytics",
    "clinical data analytics",
    "ai healthcare platform",
    "medical data intelligence",
    "hipaa compliant analytics",
    "ehr data analysis",
    "patient data analytics",
    "clinical decision support ai",
    "ai healthcare dashboard",
    "medical analytics software",
    "population health analytics",
    "healthcare reporting automation",
    "ai quality metrics healthcare",
    "medical research analytics",
    "ai patient monitoring",
    "care management analytics",
    "medical insights platform",
    "healthcare kpi dashboard",
    "clinical operations analytics",
    "ai health data visualization",
    "predictive healthcare analytics",
    "ai healthcare workflows",
    "value based care analytics",
    "healthcare performance intelligence",
    "medical compliance analytics",
  ].join(", "),
  openGraph: {
    title: "AI Medical Data Analysis | Healthcare Analytics Platform | Datapad",
    description:
      "Activate HIPAA-ready AI medical data analysis that unifies EHR exports, clinical trials, and population health data into real-time dashboards, workflows, and predictive insights.",
    url: "https://datapad.io/use-cases/medical-data-analysis",
    siteName: "Datapad",
    type: "website",
    images: [
      {
        url: "https://datapad.io/images/datapad-logo.svg",
        width: 1200,
        height: 630,
        alt: "AI Medical Data Analysis | Healthcare Analytics Platform | Datapad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@datapad",
    title: "AI Medical Data Analysis | Healthcare Analytics Platform | Datapad",
    description:
      "Activate HIPAA-ready AI medical data analysis that unifies EHR exports, clinical trials, and population health data into real-time dashboards, workflows, and predictive insights.",
    images: ["https://datapad.io/images/datapad-logo.svg"],
  },
  alternates: {
    canonical: "https://datapad.io/use-cases/medical-data-analysis",
  },
};

const FAQ_ITEMS = [
  {
    question: "What is AI medical data analysis?",
    answer:
      "AI medical data analysis uses machine learning to interpret EHR exports, laboratory feeds, imaging summaries, and survey data so care teams receive instant healthcare analytics, forecasts, and alerts without manual spreadsheet work.",
  },
  {
    question: "How does Datapad secure sensitive patient data?",
    answer:
      "Datapad delivers HIPAA-ready pipelines with encryption in transit and at rest, granular access controls, and audit-ready activity logs so every AI healthcare analytics workflow stays compliant and traceable.",
  },
  {
    question: "Can clinicians use natural language questions?",
    answer:
      "Yes. Physicians, researchers, and operations leaders can ask Datapad plain-language questions like 'Show readmissions by diagnosis' or 'Surface patients with abnormal lab values' and get AI medical data analysis answers immediately.",
  },
  {
    question: "Which medical data sources can I connect?",
    answer:
      "Connect EHR platforms, FHIR and HL7 feeds, clinical trial databases, claims systems, spreadsheets, and SQL warehouses. Datapad normalizes healthcare data for AI medical analytics in one governed workspace.",
  },
  {
    question: "Does Datapad create healthcare dashboards?",
    answer:
      "Datapad automatically assembles AI healthcare dashboards, population health scorecards, and care pathway reports so stakeholders view KPIs, gaps in care, and utilization insights in minutes.",
  },
  {
    question: "Can I automate quality reporting?",
    answer:
      "Yes. Generate HEDIS, MACRA, and internal quality metrics with scheduled AI healthcare reporting that keeps administrators aligned without version conflicts or manual spreadsheet consolidation.",
  },
  {
    question: "How fast is the setup?",
    answer:
      "Teams launch AI medical data analysis within days by syncing existing exports or connecting live databases. Datapad handles modeling, cleaning, and orchestration so analysts stay focused on clinical impact.",
  },
  {
    question: "Does Datapad support predictive healthcare analytics?",
    answer:
      "Built-in forecasting, risk scoring, and cohort detection help prioritize outreach, monitor chronic conditions, and anticipate capacity needs across service lines.",
  },
  {
    question: "Can I collaborate with cross-functional teams?",
    answer:
      "Share HIPAA-ready dashboards, comment on AI medical insights, and notify care teams or executives directly inside Datapad so every stakeholder works from a single source of truth.",
  },
  {
    question: "Is this suitable for research and clinical trials?",
    answer:
      "Researchers rely on Datapad to track enrollment, monitor adverse events, and align trial operations with AI healthcare analytics that surface anomalies and compliance issues early.",
  },
];

export default function MedicalDataAnalysisPage() {
  return (
    <main className="mx-auto flex max-w-7xl flex-col items-center">
      <MedicalHero />

      <AppPreview
        videoURL="/videos/features/ai-data-agent.mp4"
        seekPoints={[
          {
            start: 0,
            end: 4,
            title: "1. Ingest Clinical Data",
          },
          {
            start: 4,
            end: 12,
            title: "2. Ask Care Questions",
          },
          {
            start: 12,
            end: 18,
            title: "3. Deliver AI Insights",
          },
        ]}
      />

      <MainLogos />

      <Stats
        title="Trusted Across Healthcare"
        subtitle="Hospitals, research networks, and digital health teams rely on Datapad for governed AI healthcare analytics."
      />

      <UseCaseGrid />

      <FeatureGrid itemCount={6} />

      <SocialMediaTestimonials />

      <HowItWorksSection
        title={
          <h2 className="text-4xl font-medium md:text-5xl">
            Datapad AI Medical Data Analysis Platform
          </h2>
        }
        description="Deliver AI healthcare analytics across EHRs, clinical trials, and operations so every team can explore patient outcomes, utilization, and revenue performance inside one governed workspace."
        steps={[
          {
            title: "Connect every medical data source",
            description:
              "Unify FHIR feeds, HL7 interfaces, research registries, and legacy spreadsheets to run compliant ai medical data analysis that replaces brittle manual exports and ad-hoc macros.",
          },
          {
            title: "Ask natural language healthcare questions",
            description:
              "Clinicians and analysts describe the care metrics they need and Datapad builds the SQL, statistical models, and visualizations to surface ai healthcare analytics within seconds.",
          },
          {
            title: "Monitor quality and risk continuously",
            description:
              "Automate value-based care scorecards, readmission alerts, and capacity forecasts so leadership sees ai medical data insights before bottlenecks impact patient outcomes.",
          },
          {
            title: "Share HIPAA-ready dashboards",
            description:
              "Publish collaborative healthcare dashboards, embed them in EHR portals, and notify cross-functional teams with governed access controls and audit trails.",
          },
        ]}
      />

      <Faq
        heading="AI Medical Data Analysis: Frequently Asked Questions"
        items={FAQ_ITEMS}
      />

      <MainCTA />
    </main>
  );
}
