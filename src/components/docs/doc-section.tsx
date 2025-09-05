import { ReactNode } from "react";

interface DocSectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function DocSection({ title, children, className = "" }: DocSectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      <h2 className="text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
