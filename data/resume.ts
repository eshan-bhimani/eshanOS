export type ResumeEntry = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

export type Resume = {
  experience: ResumeEntry[];
  education: ResumeEntry[];
  skills: string[];
  /** Path to a downloadable PDF placed in /public, or null to hide the button. */
  pdf: string | null;
};

// TODO(eshan): replace with your real resume content, and drop a PDF at public/resume.pdf.
export const RESUME: Resume = {
  experience: [
    {
      title: "Software Engineer",
      org: "Company Name",
      period: "2024 — Present",
      bullets: [
        "What you built and the impact it had.",
        "Another accomplishment with a concrete number if possible.",
      ],
    },
    {
      title: "Software Engineering Intern",
      org: "Company Name",
      period: "Summer 2023",
      bullets: ["What you built and the impact it had."],
    },
  ],
  education: [
    {
      title: "B.S. Computer Science",
      org: "University Name",
      period: "2020 — 2024",
      bullets: [],
    },
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "SQL",
  ],
  pdf: null,
};
