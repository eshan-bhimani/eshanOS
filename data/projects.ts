export type ProjectCategory = "AI & ML" | "Systems & HFT" | "Full-Stack";

export type Project = {
  name: string;
  category: ProjectCategory;
  description: string;
  metric?: string;
  stack: string[];
  link?: string;
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Polymarket Trading Bot",
    category: "Systems & HFT",
    description:
      "Hybrid Python/C++ high-frequency trading framework for Polymarket prediction markets. Cross-venue arbitrage with a PPO reinforcement learning agent and LSTM actor-critic network.",
    metric: "C++20 & PyTorch HFT Engine",
    stack: ["Python", "C++20", "PyTorch", "Gymnasium", "pybind11"],
    github: "https://github.com/eshan-bhimani/polymarket-hft-bot",
  },
  {
    name: "Switch",
    category: "AI & ML",
    description:
      "Chat with multiple LLMs in a single conversation. Switch between models mid-conversation without losing context — persistent threads, markdown rendering, and syntax-highlighted code blocks.",
    metric: "Multi-LLM Context Engine",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Anthropic"],
    link: "https://theswitchai.com",
    github: "https://github.com/importgabriel/switch",
  },
  {
    name: "CollectHub",
    category: "AI & ML",
    description:
      "Crop, grade, track, and trade — your entire card collection, managed in one place. PSA-ready auto-cropping with OpenCV, auto-orientation, Vault format export, and real-time auction intelligence.",
    metric: "75% Faster Processing",
    stack: ["Next.js", "FastAPI", "OpenCV", "Python", "Google Cloud"],
    github: "https://github.com/eshan-bhimani/CollectHub",
  },
  {
    name: "VesselNav",
    category: "Systems & HFT",
    description:
      "Cyber-Medical discovery platform for the human vascular system. Dark glassmorphism dashboard with a physics-based force graph, command palette pathfinder, and particle flow simulation.",
    metric: "Physics D3.js Force Graph",
    stack: ["React", "TypeScript", "D3.js", "Spring Boot", "PostgreSQL"],
    link: "https://vessel-nav-nu.vercel.app",
    github: "https://github.com/eshan-bhimani/vaso-map",
  },
  {
    name: "Order Book Simulator",
    category: "Systems & HFT",
    description:
      "Real-time limit order book simulator with a price-time priority matching engine, WebSocket streaming, Redis persistence, and a live web dashboard.",
    metric: "Low-Latency Matching Engine",
    stack: ["Python", "FastAPI", "WebSockets", "Redis"],
    github: "https://github.com/eshan-bhimani/order-book-simulator",
  },
  {
    name: "AutoTenant",
    category: "Full-Stack",
    description:
      "AI-powered property management platform that automates the entire rental workflow — from listing optimization and tenant screening to lease generation and payment processing.",
    metric: "Automated Lease & Screening Workflow",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Stripe", "Zillow API"],
    link: "https://autotennant.com",
    github: "https://github.com/eshan-bhimani/autotennant",
  },
  {
    name: "SwiftTrust",
    category: "Full-Stack",
    description:
      "Hold. Verify. Release. SwiftTrust holds funds in escrow until the buyer confirms delivery — built for Discord communities, ticket trades, and P2P software sales.",
    metric: "P2P Escrow System",
    stack: ["Next.js", "Supabase", "Stripe", "TypeScript", "Resend"],
    github: "https://github.com/eshan-bhimani/SwiftTrust",
  },
  {
    name: "FolioTrust",
    category: "Full-Stack",
    description:
      "Two-portal personal fund management app. Manager portal for allocations, approvals, and PDF reports. Investor portal for holdings, real-time P&L, and withdrawal requests.",
    metric: "Multi-Portal Portfolio Analytics",
    stack: ["Next.js", "TypeScript", "Supabase", "Alpaca API", "Coinbase API"],
    github: "https://github.com/eshan-bhimani/FolioTrust",
  },
];
