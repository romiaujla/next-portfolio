import { NotFoundChrome } from "@/components/not-found-chrome";
import Link from "next/link";
import { BriefcaseBusiness, Compass, Home, Layers3, Mail } from "lucide-react";

const quickLinks = [
  { href: "/#experience", label: "Experience", icon: BriefcaseBusiness },
  { href: "/#projects", label: "Projects", icon: Layers3 },
  { href: "/#contact", label: "Contact", icon: Mail },
];

export default function NotFound() {
  return (
    <>
      <NotFoundChrome />
      <main className="mx-auto flex w-full max-w-5xl flex-1 px-6 py-16 sm:px-10 sm:py-24">
        <section className="flex w-full items-center justify-center">
          <div className="w-full max-w-3xl rounded-[2rem] border border-(--border) bg-(--card) p-8 shadow-[0_20px_80px_-40px_color-mix(in_srgb,var(--foreground)_20%,transparent)] sm:p-12">
            <div className="grid gap-10 md:grid-cols-[220px_minmax(0,1fr)] md:items-center">
              <div className="flex justify-center">
                <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-(--accent)/20 bg-[radial-gradient(circle_at_center,color-mix(in_srgb,var(--accent)_12%,transparent),transparent_70%)]">
                  <div className="absolute inset-4 rounded-full border border-(--border)" />
                  <div className="absolute inset-10 rounded-full border border-(--accent)/25" />
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-(--accent)/30 bg-(--background) text-(--accent) shadow-sm">
                    <Compass className="h-10 w-10" />
                  </div>
                </div>
              </div>

              <div className="space-y-5 text-center md:text-left">
                <p className="text-sm font-medium tracking-[0.2em] text-(--accent) uppercase">
                  404 · Route not found
                </p>
                <h1 className="text-4xl leading-tight font-semibold tracking-tight sm:text-5xl">
                  Looks like you took a wrong turn.
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-(--muted)">
                  The page you were trying to reach doesn&apos;t exist, may have
                  moved, or was never part of this portfolio. The good news is
                  the useful parts are still one click away.
                </p>

                <div className="pt-2">
                  <Link
                    href="/"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-(--accent) px-5 py-2.5 text-sm font-medium text-(--accent-foreground) transition hover:opacity-90"
                  >
                    <Home className="h-4 w-4" />
                    Back to home
                  </Link>
                </div>

                <div className="pt-4">
                  <p className="mb-3 text-xs font-medium tracking-[0.18em] text-(--muted) uppercase">
                    Helpful shortcuts
                  </p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {quickLinks.map(({ href, label, icon: Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-(--border) bg-(--background) px-4 py-2 text-sm font-medium text-(--muted) transition hover:border-(--accent)/30 hover:text-(--accent)"
                      >
                        <Icon className="h-4 w-4" />
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
