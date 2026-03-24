export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  sourceHref: string;
};

export type Experience = {
  role: string;
  company: string;
  description: string;
  tags: string[];
};

export const siteConfig = {
  name: "Ramanpreet Aujla",
  role: "Full-Stack Engineer",
  location: "Canton, MI",
  summary:
    "Full-stack engineer with 6+ years of experience building scalable, high-performance applications in cloud-native environments. I modernize legacy systems and deliver React frontends with Node.js + TypeScript services that improve performance, delivery speed, and reliability.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/romiaujla" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:raujla0228@gmail.com" },
  ] satisfies SocialLink[],
  skills: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Angular",
    "Node.js",
    "Express",
    "REST APIs",
    "Tailwind CSS",
    "Material UI",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "Redis",
    "Prisma",
    "Docker",
    "Testcontainers",
    "GitHub Actions",
    "Playwright",
    "Jest",
    "AWS",
    "GCP",
  ],
  experiences: [
    {
      role: "Software Engineer (Contract)",
      company: "Ford Motor Company",
      description:
        "Leading modernization of Ford's global reservation platform from PEGA to React and Node.js + TypeScript services. Improved API latency from 2-3 seconds to sub-100ms and improved delivery flow with spec-driven and AI-assisted development.",
      tags: ["React", "TypeScript", "Node.js", "Redis", "Playwright"],
    },
    {
      role: "Software Engineering Team Lead",
      company: "Workd",
      description:
        "Led architecture and delivery of full-stack CRM platforms used by thousands of internal users. Drove API integrations, cloud deployments, reusable component patterns, and stronger testing practices across teams.",
      tags: ["TypeScript", "Angular", "Node.js", "SQL", "AWS"],
    },
    {
      role: "Software Engineer",
      company: "Workd",
      description:
        "Built full-stack CRM and e-commerce features, led client data migrations, and improved product usability and stability through automated testing and close collaboration with UI/UX teams.",
      tags: ["Angular", "Node.js", "MySQL", "Mocha", "Chai"],
    },
  ] satisfies Experience[],
  projects: [
    {
      title: "Crown App",
      description:
        "Multi-tenant monorepo focused on scalable web and API foundations, with Next.js App Router frontend, Express + Prisma backend, PostgreSQL, and workflow-driven engineering docs.",
      tags: ["Next.js", "Express", "Prisma", "PostgreSQL", "Playwright"],
      sourceHref: "https://github.com/romiaujla/crown-app",
    },
    {
      title: "CTB App",
      description:
        "Crown Trade Bot monorepo scaffold for API, web, and worker runtimes with typed contracts, docs-first architecture, Docker local stack, Postgres, and Redis-backed workflows.",
      tags: ["TypeScript", "Monorepo", "Docker", "Postgres", "Redis"],
      sourceHref: "https://github.com/romiaujla/ctb-app",
    },
  ] satisfies Project[],
} as const;
