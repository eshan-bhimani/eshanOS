export type Project = {
  name: string;
  description: string;
  stack: string[];
  link?: string;
  github?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Switch",
    description:
      "Chat with multiple LLMs in a single conversation. Switch between models mid-conversation without losing context — persistent threads, markdown rendering, and syntax-highlighted code blocks.",
    stack: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Anthropic"],
    link: "https://theswitchai.com",
    github: "https://github.com/importgabriel/switch",
  },
  {
    name: "AutoTenant",
    description:
      "AI-powered property management platform that automates the entire rental workflow — from listing optimization and tenant screening to lease generation and payment processing.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Stripe", "Zillow API"],
    link: "https://autotennant.com",
    github: "https://github.com/eshan-bhimani/autotennant",
  },
  {
    name: "CollectHub",
    description:
      "Crop, grade, track, and trade — your entire baseball card collection, managed in one place. PSA-ready auto-cropping, auto-orientation, Vault format export, and auction intelligence.",
    stack: ["Next.js", "FastAPI", "OpenCV", "Python", "Google Cloud"],
    github: "https://github.com/eshan-bhimani/CollectHub",
  },
  {
    name: "SwiftTrust",
    description:
      "Hold. Verify. Release. SwiftTrust holds funds in escrow until the buyer confirms delivery — built for Discord communities, ticket trades, and P2P software sales.",
    stack: ["Next.js", "Supabase", "Stripe", "TypeScript", "Resend"],
    github: "https://github.com/eshan-bhimani/SwiftTrust",
  },
  {
    name: "VesselNav",
    description:
      "Cyber-Medical discovery platform for the human vascular system. Dark glassmorphism dashboard with a physics-based force graph, command palette pathfinder, and particle flow simulation.",
    stack: ["React", "TypeScript", "D3.js", "Spring Boot", "PostgreSQL"],
    link: "https://vessel-nav-nu.vercel.app",
    github: "https://github.com/eshan-bhimani/vaso-map",
  },
  {
    name: "Polymarket Trading Bot",
    description:
      "Hybrid Python/C++ high-frequency trading framework for Polymarket BTC prediction markets. Cross-venue arbitrage with a PPO reinforcement learning agent and LSTM actor-critic network.",
    stack: ["Python", "C++20", "PyTorch", "Gymnasium", "pybind11"],
    github: "https://github.com/eshan-bhimani/polymarket-hft-bot",
  },
  {
    name: "FolioTrust",
    description:
      "Two-portal personal fund management app. Manager portal for allocations, approvals, and PDF reports. Investor portal for holdings, real-time P&L, and withdrawal requests.",
    stack: ["Next.js", "TypeScript", "Supabase", "Alpaca API", "Coinbase API"],
    github: "https://github.com/eshan-bhimani/FolioTrust",
  },
  {
    name: "Order Book Simulator",
    description:
      "Real-time limit order book simulator with a price-time priority matching engine, WebSocket streaming, Redis persistence, and a live web dashboard.",
    stack: ["Python", "FastAPI", "WebSockets", "Redis"],
    github: "https://github.com/eshan-bhimani/order-book-simulator",
  },
];
