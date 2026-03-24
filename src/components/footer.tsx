import { siteConfig } from "@/lib/site";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-(--border)">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:px-10">
        <div className="space-y-6">
          <p className="text-sm font-medium tracking-widest text-(--muted) uppercase">
            Get in touch
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something
            <br />
            <span className="text-(--accent)">together.</span>
          </h2>
          <p className="max-w-md text-base leading-relaxed text-(--muted)">
            I&apos;m open to new opportunities, collaborations, and interesting
            conversations. Say hello.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`mailto:${siteConfig.socialLinks.find((l) => l.label === "Email")?.href.replace("mailto:", "")}`}
              className="inline-flex items-center gap-2 rounded-full bg-(--accent) px-5 py-2.5 text-sm font-medium text-(--accent-foreground) transition hover:opacity-90"
            >
              <Mail className="h-4 w-4" />
              Say Hello
            </a>
            {siteConfig.socialLinks
              .filter((l) => l.label !== "Email")
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-(--border) px-4 py-2.5 text-sm font-medium transition hover:border-(--foreground)/20"
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-(--border) pt-8 sm:flex-row">
          <p className="text-sm text-(--muted)">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="text-xs text-(--muted)/60">
            Built with Next.js, Tailwind CSS & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
