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
    <section id={id} className={cn("scroll-mt-24 space-y-8", className)}>
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-(--muted)">
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

export function SkillChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-(--border) bg-(--card) px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors hover:border-(--accent)/30 hover:text-(--accent)">
      {label}
    </span>
  );
}
