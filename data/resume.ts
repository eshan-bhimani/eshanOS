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

export const RESUME: Resume = {
  experience: [
    {
      title: "Software Engineer Intern",
      org: "NCR Atleos",
      period: "May 2026 — Present",
      bullets: [
        "Architecting an enterprise knowledge graph in Neo4j with 10K+ nodes and 25K+ relationships across cross-domain internal data",
        "Implementing a Graph RAG Q&A layer via LangChain and Cypher-generating LLM pipelines for non-technical stakeholders",
        "Building an AI semantic layer recommendation engine with Azure OpenAI that reduces Power BI scaffolding time by ~60%",
      ],
    },
    {
      title: "Software Engineer Intern",
      org: "ConventionConnection",
      period: "Dec 2025 — Present",
      bullets: [
        "Engineered an AI-powered image processing pipeline with OpenCV and FastAPI, cutting manual processing time by 75%",
        "Architected a pricing engine and auction monitor in Python with 90 rules and real-time bid tracking across marketplaces",
        "Built a domain-aware trade matching engine with a weighted scoring algorithm across grade, set, and grading company",
      ],
    },
    {
      title: "Software Engineer (Research) Intern",
      org: "Algoverse AI",
      period: "Sep 2025 — Mar 2026",
      bullets: [
        "Developed a novel multi-task benchmark evaluating LLMs' vision-based tool use in geolocation reasoning; submitted to COLM 2026",
        "Automated 300+ location data collection via Python/Selenium and Street View API with programmatic validation",
        "Refactored codebase to production-ready with CI/CD and 50+ automated tests, reducing setup time by 20%",
      ],
    },
    {
      title: "Undergraduate Researcher",
      org: "University of Georgia",
      period: "Sep 2025 — Apr 2026",
      bullets: [
        "Developed high-performance spectral preprocessing algorithms in Python for signal normalization and noise reduction",
        "Architected modular data pipelines to automate raw spectral data transformation into analysis-ready formats",
        "Implemented programmatic verification systems using NumPy, SciPy to validate signal accuracy across data lifecycle",
      ],
    },
  ],
  education: [
    {
      title: "B.S. Computer Science",
      org: "Georgia Institute of Technology",
      period: "2026 — 2028",
      bullets: [
        "Concentration: Intelligence (AI/ML) & Systems Architecture",
        "GPA: 3.86 / 4.0 — Presidential Scholar, Dean's List, Zell Miller Scholarship",
      ],
    },
  ],
  skills: [
    "Python",
    "C++20",
    "Java",
    "TypeScript",
    "JavaScript",
    "SQL",
    "Bash",
    "React",
    "Next.js",
    "FastAPI",
    "Spring Boot",
    "Node.js",
    "D3.js",
    "Docker",
    "AWS",
    "Neo4j",
    "PostgreSQL",
    "Redis",
    "OpenCV",
    "Azure OpenAI",
    "LangChain",
    "LangGraph",
    "PyTorch",
  ],
  pdf: "/resume.pdf",
};
