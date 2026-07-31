"use client";

import { useState } from "react";
import { Bot, Send, User, Sparkles } from "lucide-react";
import { sounds } from "@/lib/sound";

type Message = {
  sender: "user" | "ai";
  text: string;
};

const SUGGESTED_PROMPTS = [
  "What is Eshan's experience with Neo4j Graph RAG at NCR Atleos?",
  "Tell me about Eshan's C++20 HFT Polymarket Bot project.",
  "Why is Eshan a great fit for Big Tech & Startup SWE roles?",
  "What are Eshan's Georgia Tech threads and coursework?",
];

const ANSWERS: Record<string, string> = {
  "What is Eshan's experience with Neo4j Graph RAG at NCR Atleos?":
    "At NCR Atleos (Global HQ in Atlanta), Eshan architected an enterprise knowledge graph in Neo4j with 10K+ nodes and 25K+ relationships across cross-domain internal data. He implemented a Graph RAG Q&A layer using LangChain and Cypher-generating LLM pipelines, as well as an AI semantic recommendation layer with Azure OpenAI that reduced Power BI scaffolding time by ~60%.",

  "Tell me about Eshan's C++20 HFT Polymarket Bot project.":
    "Eshan engineered a hybrid Python/C++ high-frequency trading (HFT) framework for Polymarket prediction markets. It executes cross-venue arbitrage using a PPO (Proximal Policy Optimization) reinforcement learning agent and LSTM actor-critic neural network, bound to low-latency C++20 modules via pybind11.",

  "Why is Eshan a great fit for Big Tech & Startup SWE roles?":
    "Eshan combines strong theoretical computer science fundamentals from Georgia Tech (3.86 GPA, Presidential Scholar, threads in Intelligence & Systems Architecture) with practical product engineering speed. He builds high-scale systems (Graph RAG, HFT engines, OpenCV image pipelines) and moves with startup velocity.",

  "What are Eshan's Georgia Tech threads and coursework?":
    "Eshan is a CS Junior at Georgia Tech pursuing the Intelligence (AI/ML) and Systems & Architecture threads. His coursework covers Algorithm Design, Systems Programming, Computer Architecture, Machine Learning, Database Systems, and Object-Oriented Software Design.",
};

export default function AIWindow() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hello! I'm Eshan's AI Assistant. Ask me anything about Eshan's internships, Georgia Tech background, high-frequency trading bot, or technical skills!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = (promptText: string) => {
    if (!promptText.trim()) return;

    sounds.playClick();
    const userMsg: Message = { sender: "user", text: promptText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let reply =
        ANSWERS[promptText] ||
        `Eshan is a Junior CS major at Georgia Tech (3.86 GPA) specializing in AI Systems, Graph RAG, and high-performance software engineering. You can reach out directly via email at bhimanieshan@gmail.com!`;

      if (promptText.toLowerCase().includes("contact") || promptText.toLowerCase().includes("email")) {
        reply = "You can contact Eshan directly at bhimanieshan@gmail.com or connect with him on LinkedIn at linkedin.com/in/eshan-bhimani.";
      } else if (promptText.toLowerCase().includes("switch")) {
        reply = "Switch is Eshan's multi-LLM chat platform allowing users to toggle between OpenAI and Anthropic models mid-conversation without losing context.";
      }

      setMessages((prev) => [...prev, { sender: "ai", text: reply }]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="flex h-full flex-col bg-slate-900 text-slate-100">
      {/* Header banner */}
      <div className="flex items-center gap-2.5 border-b border-slate-800 bg-slate-950/80 px-4 py-3">
        <div className="flex size-7 items-center justify-center rounded-full bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 text-white shadow-sm">
          <Sparkles size={14} />
        </div>
        <div>
          <h2 className="text-xs font-bold text-slate-200">Ask Eshan AI Assistant</h2>
          <p className="text-[11px] text-slate-400">Powered by Eshan's Portfolio Intelligence Engine</p>
        </div>
      </div>

      {/* Messages area */}
      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto p-4">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex items-start gap-2.5 ${
              m.sender === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                m.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gradient-to-tr from-sky-500 to-indigo-600 text-white"
              }`}
            >
              {m.sender === "user" ? <User size={14} /> : <Bot size={14} />}
            </div>
            <div
              className={`max-w-[82%] rounded-xl px-3.5 py-2.5 text-xs leading-relaxed ${
                m.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "border border-slate-800 bg-slate-800/80 text-slate-200"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Bot size={14} className="text-sky-400 animate-pulse" />
            <span>Thinking...</span>
          </div>
        )}
      </div>

      {/* Prompt Chips */}
      <div className="border-t border-slate-800/80 bg-slate-950/40 p-2.5">
        <p className="mb-1.5 text-[11px] font-medium text-slate-400">Suggested Questions for Recruiters:</p>
        <div className="flex flex-wrap gap-1.5">
          {SUGGESTED_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={() => sendMessage(prompt)}
              className="rounded-full border border-slate-700/80 bg-slate-800/60 px-2.5 py-1 text-[11px] text-slate-300 transition hover:border-sky-500 hover:bg-slate-700 hover:text-white"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
        className="flex items-center gap-2 border-t border-slate-800 bg-slate-950 px-3 py-2.5"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about Eshan..."
          className="flex-1 bg-transparent text-xs text-slate-100 placeholder-slate-500 focus:outline-none"
        />
        <button
          type="submit"
          className="flex size-7 items-center justify-center rounded-lg bg-sky-500 text-white transition hover:bg-sky-400"
          aria-label="Send message"
        >
          <Send size={13} />
        </button>
      </form>
    </div>
  );
}
