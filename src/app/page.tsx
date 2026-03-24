"use client";

import { HeroGraph } from "@/components/hero-graph";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Section, SkillChip } from "@/components/section";
import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Handshake, Mail, MapPin } from "lucide-react";

function getIcon(label: string) {
  if (label === "GitHub") return <Code2 className="h-4 w-4" />;
  if (label === "LinkedIn") return <Handshake className="h-4 w-4" />;
  return <Mail className="h-4 w-4" />;
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col px-6 sm:px-10">
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="flex flex-col items-start gap-8 pt-20 pb-20 sm:pt-28 md:flex-row md:items-center md:gap-12 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="min-w-0 flex-1 space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-(--border) px-3 py-1 text-xs font-medium tracking-wide text-(--muted)">
            <MapPin className="h-3.5 w-3.5" />
            {siteConfig.location}
          </div>

          <h1 className="text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </h1>

          <p className="text-lg font-medium text-(--accent)">
            {siteConfig.role}
          </p>

          <p className="max-w-xl text-base leading-relaxed text-(--muted)">
            {siteConfig.summary}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-wrap items-center gap-3 pt-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-(--accent) px-5 py-2.5 text-sm font-medium text-(--accent-foreground) transition hover:opacity-90"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </a>
            {siteConfig.socialLinks
              .filter((l) => l.label !== "Email")
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-(--border) px-4 py-2.5 text-sm font-medium transition hover:border-(--foreground)/20"
                >
                  {getIcon(link.label)}
                  {link.label}
                </a>
              ))}
          </motion.div>
        </motion.div>

        {/* 3D accent — right column on md+ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="hidden w-full shrink-0 md:block md:w-[340px] lg:w-[400px]"
        >
          <HeroGraph />
        </motion.div>
      </section>

      {/* ── Divider ────────────────────────────────────────── */}
      <hr className="border-(--border)" />

      {/* ── Skills ─────────────────────────────────────────── */}
      <div className="py-20">
        <FadeIn>
          <Section id="skills" title="Core Technologies">
            <StaggerContainer className="flex flex-wrap gap-2.5">
              {siteConfig.skills.map((skill) => (
                <StaggerItem key={skill}>
                  <SkillChip label={skill} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </Section>
        </FadeIn>
      </div>

      <hr className="border-(--border)" />

      {/* ── Experience ─────────────────────────────────────── */}
      <div className="py-20">
        <FadeIn>
          <Section id="experience" title="Professional Experience">
            <div className="grid gap-5 md:grid-cols-2">
              {siteConfig.experiences.map((experience, i) => (
                <FadeIn key={experience.title} delay={i * 0.08}>
                  <article className="group flex h-full flex-col rounded-2xl border border-(--border) bg-(--card) p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-(--accent)/30 hover:shadow-(--accent)/5 hover:shadow-lg">
                    <h3 className="text-base leading-snug font-semibold tracking-tight">
                      {experience.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-(--muted)">
                      {experience.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-(--foreground)/5 px-2.5 py-1 text-xs font-medium text-(--muted)"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </Section>
        </FadeIn>
      </div>

      <hr className="border-(--border)" />

      {/* ── Projects ───────────────────────────────────────── */}
      <div className="py-20">
        <FadeIn>
          <Section id="projects" title="Featured Projects">
            <div className="grid gap-5 md:grid-cols-2">
              {siteConfig.projects.map((project, i) => (
                <FadeIn key={project.title} delay={i * 0.08}>
                  <article className="group flex h-full flex-col rounded-2xl border border-(--border) bg-(--card) p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-(--accent)/30 hover:shadow-(--accent)/5 hover:shadow-lg">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-(--accent)/10 text-(--accent)">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <h3 className="text-base leading-snug font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-(--muted)">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-(--foreground)/5 px-2.5 py-1 text-xs font-medium text-(--muted)"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-4 border-t border-(--border) pt-5">
                      <a
                        href={project.sourceHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-(--accent) transition hover:opacity-80"
                      >
                        Source Code
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      <span className="rounded-full border border-(--border) px-3 py-1 text-xs font-medium text-(--muted)/60">
                        Demo — WIP
                      </span>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </Section>
        </FadeIn>
      </div>
    </main>
  );
}
