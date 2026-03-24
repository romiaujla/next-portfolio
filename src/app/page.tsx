"use client";

import { Section, SkillChip } from "@/components/section";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Handshake, Mail, MapPin } from "lucide-react";

const container = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.08,
      duration: 0.4,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

function getIcon(label: string) {
  if (label === "GitHub") return <Code2 className="h-4 w-4" />;
  if (label === "LinkedIn") return <Handshake className="h-4 w-4" />;
  return <Mail className="h-4 w-4" />;
}

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-14 px-6 py-10 sm:px-10 md:gap-20 md:py-14">
      <motion.header
        variants={container}
        initial="hidden"
        animate="show"
        className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur-xl sm:p-10 dark:border-white/15 dark:bg-white/5"
      >
        <div className="absolute -top-36 right-[-72px] h-72 w-72 rounded-full bg-[radial-gradient(circle,_#ffb564_0%,_transparent_70%)] opacity-70 blur-sm" />
        <div className="absolute -bottom-40 -left-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,_#80a8ff_0%,_transparent_68%)] opacity-65 blur-sm" />

        <motion.div
          variants={item}
          className="relative flex items-center justify-between"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/65 px-3 py-1 text-xs font-medium tracking-wide dark:border-white/15 dark:bg-white/10">
            <MapPin className="h-3.5 w-3.5" />
            {siteConfig.location}
          </div>
          <ThemeToggle />
        </motion.div>

        <motion.div
          variants={item}
          className="relative mt-8 space-y-4 md:mt-10"
        >
          <p className="text-xs tracking-[0.2em] text-[color:var(--muted)] uppercase">
            {siteConfig.role}
          </p>
          <h1 className="text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[color:var(--muted)]">
            {siteConfig.summary}
          </p>
        </motion.div>

        <motion.div
          variants={item}
          className="relative mt-8 flex flex-wrap items-center gap-3"
        >
          {siteConfig.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-white dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15"
            >
              {getIcon(link.label)}
              {link.label}
            </a>
          ))}
        </motion.div>
      </motion.header>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-14"
      >
        <motion.div variants={item}>
          <Section
            id="skills"
            title="Tech Stack"
            description="Core tools currently in this boilerplate, ready for your real project and profile content."
          >
            <div className="flex flex-wrap gap-2.5">
              {siteConfig.skills.map((skill) => (
                <SkillChip key={skill} label={skill} />
              ))}
            </div>
          </Section>
        </motion.div>

        <motion.div variants={item}>
          <Section
            id="projects"
            title="Featured Work"
            description="Drop your own projects here. Each card is data-driven from src/lib/site.ts."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {siteConfig.projects.map((project) => (
                <article
                  key={project.title}
                  className="group rounded-2xl border border-black/10 bg-white/65 p-5 transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/15 dark:bg-white/5"
                >
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-black/5 px-2.5 py-1 text-xs font-medium dark:bg-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 group-hover:underline"
                  >
                    View project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </Section>
        </motion.div>
      </motion.div>
    </main>
  );
}
