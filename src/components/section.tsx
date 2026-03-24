import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  title: string;
  description?: string;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("space-y-5", className)}>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {description ? (
          <p className="max-w-2xl text-sm text-(--muted)">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function SkillChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium tracking-wide dark:border-white/15 dark:bg-white/10">
      {label}
    </span>
  );
}
