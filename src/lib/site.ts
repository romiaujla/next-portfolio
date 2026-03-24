export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export const siteConfig = {
  name: "Your Name",
  role: "Full-Stack Developer",
  location: "Based in City, Country",
  summary:
    "I build performant web products with clear UX, strong frontend architecture, and reliable backend integrations.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://linkedin.com/in/your-handle" },
    { label: "Email", href: "mailto:you@example.com" },
  ] satisfies SocialLink[],
  skills: [
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
    "Docker",
  ],
  projects: [
    {
      title: "Project One",
      description:
        "A production-ready web app template with auth, analytics, and deployment automation.",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      href: "https://github.com/your-username/project-one",
    },
    {
      title: "Project Two",
      description:
        "A design-focused landing experience with motion, reusable components, and performance budgets.",
      tags: ["React", "Framer Motion", "Tailwind"],
      href: "https://github.com/your-username/project-two",
    },
  ] satisfies Project[],
} as const;
