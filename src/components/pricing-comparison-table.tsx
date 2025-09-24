import { Check, Minus } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type PlanKey = "basic" | "pro" | "scale" | "enterprise";

type PlanColumn = {
  key: PlanKey;
  label: string;
};

type ComparisonFeature = {
  feature: string;
} & Record<PlanKey, string | boolean>;

const PLAN_COLUMNS: PlanColumn[] = [
  { key: "basic", label: "Basic" },
  { key: "pro", label: "Pro" },
  { key: "scale", label: "Scale" },
  { key: "enterprise", label: "Enterprise" },
];

const COMPARISON_FEATURES: ComparisonFeature[] = [
  {
    feature: "Users",
    basic: "1 user",
    pro: "Per workspace",
    scale: "Per workspace",
    enterprise: "Custom",
  },
  {
    feature: "Messages",
    basic: true,
    pro: true,
    scale: true,
    enterprise: true,
  },
  {
    feature: "File uploads",
    basic: true,
    pro: true,
    scale: true,
    enterprise: true,
  },
  {
    feature: "Dashboards",
    basic: false,
    pro: true,
    scale: true,
    enterprise: true,
  },
  {
    feature: "Data sources",
    basic: "1 (excl. databases)",
    pro: "10 (excl. databases)",
    scale: "Unlimited incl. databases",
    enterprise: "Unlimited incl. databases",
  },
  {
    feature: "Workflow & automations",
    basic: false,
    pro: false,
    scale: true,
    enterprise: true,
  },
  {
    feature: "Slack bot",
    basic: false,
    pro: false,
    scale: true,
    enterprise: true,
  },
  {
    feature: "Auto-learning agent",
    basic: false,
    pro: false,
    scale: true,
    enterprise: true,
  },
  {
    feature: "Support",
    basic: "Community",
    pro: "Email",
    scale: "Priority",
    enterprise: "Dedicated manager",
  },
  {
    feature: "Security & compliance",
    basic: "Standard",
    pro: "Standard",
    scale: "Advanced",
    enterprise: "Enterprise controls",
  },
  {
    feature: "Bring your own cloud",
    basic: false,
    pro: false,
    scale: false,
    enterprise: true,
  },
  {
    feature: "White-label options",
    basic: false,
    pro: false,
    scale: false,
    enterprise: true,
  },
];

const renderPlanValue = (value: string | boolean) => {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="size-5 text-primary" />
    ) : (
      <Minus className="size-5 text-muted-foreground" />
    );
  }

  return <span className="text-sm text-foreground">{value}</span>;
};

const PricingComparisonTable = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-8 sm:py-32 px-4 sm:px-0", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-center w-full overflow-x-auto">
          <Table className="w-full table-fixed caption-bottom min-w-[880px] lg:min-w-full">
            <TableHeader>
              <TableRow className="hover:bg-background">
                <TableHead className="text-muted-foreground"></TableHead>
                {PLAN_COLUMNS.map((plan) => (
                  <TableHead
                    key={plan.key}
                    className="font-bold text-primary"
                  >
                    {plan.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {COMPARISON_FEATURES.map((item) => (
                <TableRow key={item.feature} className="hover:bg-background">
                  <TableCell className="font-medium text-foreground">
                    {item.feature}
                  </TableCell>
                  {PLAN_COLUMNS.map((plan) => (
                    <TableCell key={plan.key}>
                      {renderPlanValue(item[plan.key])}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export { PricingComparisonTable };
