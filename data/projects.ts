export type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
};

// TODO(eshan): replace with your real project list.
export const PROJECTS: Project[] = [
  {
    name: "EshanOS",
    description:
      "This site — a macOS-styled portfolio with a lock screen, draggable windows, and a dock.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/eshan-bhimani/eshanos",
  },
  {
    name: "Project Two",
    description: "One-line description of what it does and why it's interesting.",
    stack: ["React", "Node.js"],
  },
  {
    name: "Project Three",
    description: "One-line description of what it does and why it's interesting.",
    stack: ["Python"],
  },
];
