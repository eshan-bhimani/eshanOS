"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/data/projects";
import { RESUME } from "@/data/resume";
import { sounds } from "@/lib/sound";

type HistoryItem = {
  command: string;
  output: React.ReactNode;
};

export default function TerminalWindow() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs leading-relaxed text-zinc-300">
          <p className="font-bold text-emerald-400">
            eshanOS Terminal v2.5.0 (x86_64-apple-darwin)
          </p>
          <p className="text-zinc-400">
            Type <span className="font-mono text-emerald-400">help</span> to view available commands, or <span className="font-mono text-amber-300">sudo hire</span> for recruiters.
          </p>
        </div>
      ),
    },
  ]);
  const [matrixActive, setMatrixActive] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, matrixActive]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    if (!cmd) return;

    sounds.playClick();
    const cleanCmd = cmd.toLowerCase();
    let output: React.ReactNode = null;

    if (cleanCmd === "help" || cleanCmd === "commands") {
      output = (
        <div className="grid grid-cols-1 gap-1 text-xs text-zinc-300 sm:grid-cols-2">
          <div><span className="font-mono font-bold text-emerald-400">whoami / about</span> - Summary & Georgia Tech background</div>
          <div><span className="font-mono font-bold text-emerald-400">skills</span> - Technical skills breakdown</div>
          <div><span className="font-mono font-bold text-emerald-400">projects</span> - Active software & ML projects</div>
          <div><span className="font-mono font-bold text-emerald-400">cat resume.txt</span> - Print full resume</div>
          <div><span className="font-mono font-bold text-amber-300">sudo hire</span> - Direct recruiter decision panel</div>
          <div><span className="font-mono font-bold text-cyan-400">matrix</span> - Digital rain easter egg</div>
          <div><span className="font-mono font-bold text-zinc-400">clear</span> - Clear terminal buffer</div>
          <div><span className="font-mono font-bold text-zinc-400">contact</span> - Email & social handles</div>
        </div>
      );
    } else if (cleanCmd === "whoami" || cleanCmd === "about") {
      output = (
        <div className="space-y-1 text-xs text-zinc-300">
          <p><strong className="text-emerald-400">Eshan Bhimani</strong> — Junior CS Student @ Georgia Institute of Technology</p>
          <p className="text-zinc-400">Threads: Intelligence & Systems Architecture | GPA: 3.86/4.0</p>
          <p className="text-zinc-400">Current Role: SWE Intern @ NCR Atleos (Neo4j Graph RAG & Azure OpenAI)</p>
          <p className="text-zinc-400">Location: Atlanta, GA / NYC / SF</p>
        </div>
      );
    } else if (cleanCmd === "skills") {
      output = (
        <div className="space-y-2 text-xs text-zinc-300">
          <div>
            <span className="font-semibold text-emerald-400">Languages:</span>{" "}
            {RESUME.skills.slice(0, 7).join(" • ")}
          </div>
          <div>
            <span className="font-semibold text-cyan-400">Frameworks & Tools:</span>{" "}
            {RESUME.skills.slice(7, 16).join(" • ")}
          </div>
          <div>
            <span className="font-semibold text-purple-400">Data & AI/ML:</span>{" "}
            {RESUME.skills.slice(16).join(" • ")}
          </div>
        </div>
      );
    } else if (cleanCmd === "projects") {
      output = (
        <div className="space-y-2 text-xs text-zinc-300">
          {PROJECTS.map((p) => (
            <div key={p.name} className="border-l-2 border-emerald-500 pl-2">
              <div className="font-semibold text-emerald-400">{p.name}</div>
              <p className="text-zinc-400">{p.description}</p>
              <div className="mt-0.5 text-[11px] text-cyan-300">{p.stack.join(" • ")}</div>
            </div>
          ))}
        </div>
      );
    } else if (cleanCmd === "cat resume.txt" || cleanCmd === "resume") {
      output = (
        <div className="space-y-2 text-xs text-zinc-300">
          <p className="font-bold text-amber-300">--- RESUME SUMMARY ---</p>
          {RESUME.experience.map((exp) => (
            <div key={exp.title + exp.org}>
              <p className="font-semibold text-emerald-400">{exp.title} — {exp.org} ({exp.period})</p>
              <ul className="list-disc pl-4 text-zinc-400">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );
    } else if (cleanCmd === "sudo hire" || cleanCmd === "hire") {
      sounds.playSuccess();
      output = (
        <div className="rounded border border-emerald-500/50 bg-emerald-950/40 p-3 text-xs text-emerald-300">
          <p className="font-bold text-emerald-200">🚀 PERMISSION GRANTED: EXCELLENT CHOICE!</p>
          <p className="mt-1 text-zinc-300">
            Eshan brings strong system design, graph AI, Python, C++, and Next.js abilities. Let's schedule an interview or discussion!
          </p>
          <div className="mt-2 flex gap-3">
            <a
              href="mailto:bhimanieshan@gmail.com?subject=Recruiter%20Outreach%20-%20Interview%20Invitation"
              className="inline-block rounded bg-emerald-600 px-3 py-1 font-semibold text-zinc-950 hover:bg-emerald-500"
            >
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/eshan-bhimani"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-blue-600 px-3 py-1 font-semibold text-white hover:bg-blue-500"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      );
    } else if (cleanCmd === "matrix") {
      setMatrixActive((m) => !m);
      output = (
        <p className="text-xs text-emerald-400">
          {matrixActive ? "Matrix mode deactivated." : "Matrix rain activated! Type matrix to toggle."}
        </p>
      );
    } else if (cleanCmd === "contact") {
      output = (
        <div className="space-y-1 text-xs text-zinc-300">
          <p>Email: <a href="mailto:bhimanieshan@gmail.com" className="text-cyan-400 hover:underline">bhimanieshan@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/eshan-bhimani" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">github.com/eshan-bhimani</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/eshan-bhimani" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">linkedin.com/in/eshan-bhimani</a></p>
        </div>
      );
    } else if (cleanCmd === "clear") {
      setHistory([]);
      setInput("");
      return;
    } else {
      output = (
        <p className="text-xs text-rose-400">
          zsh: command not found: {cmd}. Type <span className="font-mono text-emerald-400">help</span> for commands.
        </p>
      );
    }

    setHistory((h) => [...h, { command: cmd, output }]);
    setInput("");
  };

  return (
    <div className="flex h-full flex-col bg-zinc-950 p-4 font-mono text-zinc-100 selection:bg-emerald-500/30 selection:text-emerald-200">
      {matrixActive && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-15">
          <div className="animate-pulse font-mono text-xs text-emerald-500">
            01000101 01010011 01001000 01000001 01001110 00100000 01000010 01001000 01001001 01001101 01000001 01001110 01001001
          </div>
        </div>
      )}
      <div className="min-h-0 flex-1 space-y-3 overflow-y-auto">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-emerald-400">eshan@macbook-pro</span>
              <span className="text-zinc-500">:~ $</span>
              <span className="text-zinc-200">{item.command}</span>
            </div>
            <div className="pt-0.5">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleCommand} className="mt-3 flex items-center gap-2 border-t border-zinc-800 pt-2 text-xs">
        <span className="text-emerald-400">eshan@macbook-pro</span>
        <span className="text-zinc-500">:~ $</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type 'help' or 'sudo hire'..."
          className="flex-1 bg-transparent text-zinc-100 focus:outline-none"
          autoFocus
        />
      </form>
    </div>
  );
}
