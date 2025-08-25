import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface DocHeaderProps {
  badge?: {
    text: string;
    variant?: "default" | "secondary" | "destructive" | "outline";
  };
  title: string;
  description: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export function DocHeader({ badge, title, description, icon, children }: DocHeaderProps) {
  return (
    <div className="space-y-4">
      {badge && (
        <div className="flex items-center gap-2">
          <Badge variant={badge.variant || "outline"} className="bg-muted/50">
            {badge.text}
          </Badge>
        </div>
      )}
      <div className="flex items-center gap-4">
        {icon && (
          <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm border">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mt-2">
            {description}
          </p>
        </div>
      </div>
      {children}
    </div>
  );
}
