"use client";

import { useEffect, useState } from "react";
import { Search, ExternalLink, Sparkles, Terminal, Code, Briefcase, FileText } from "lucide-react";
import { APPS, type AppId } from "@/lib/apps";
import { PROJECTS } from "@/data/projects";
import { RESUME } from "@/data/resume";
import { sounds } from "@/lib/sound";

type SpotlightProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (id: AppId) => void;
};

type ResultItem = {
  id: string;
  type: "app" | "project" | "skill" | "experience";
  title: string;
  subtitle: string;
  action: () => void;
};

export default function Spotlight({ isOpen, onClose, onOpenApp }: SpotlightProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        sounds.playClick();
        if (isOpen) onClose();
        else {
          // Open
          setQuery("");
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const results: ResultItem[] = [];

  // Apps
  APPS.forEach((app) => {
    if (!q || app.label.toLowerCase().includes(q) || app.id.includes(q)) {
      results.push({
        id: `app-${app.id}`,
        type: "app",
        title: app.label,
        subtitle: `Application — Open ${app.label}`,
        action: () => {
          sounds.playOpen();
          onOpenApp(app.id);
          onClose();
        },
      });
    }
  });

  // Projects
  PROJECTS.forEach((proj) => {
    if (
      !q ||
      proj.name.toLowerCase().includes(q) ||
      proj.description.toLowerCase().includes(q) ||
      proj.stack.some((s) => s.toLowerCase().includes(q))
    ) {
      results.push({
        id: `proj-${proj.name}`,
        type: "project",
        title: proj.name,
        subtitle: `Project (${proj.stack.slice(0, 3).join(", ")}) — ${proj.description.slice(0, 60)}...`,
        action: () => {
          sounds.playOpen();
          onOpenApp("projects");
          onClose();
        },
      });
    }
  });

  // Skills
  RESUME.skills.forEach((skill) => {
    if (!q || skill.toLowerCase().includes(q)) {
      results.push({
        id: `skill-${skill}`,
        type: "skill",
        title: skill,
        subtitle: "Technical Skill — View in Resume",
        action: () => {
          sounds.playOpen();
          onOpenApp("resume");
          onClose();
        },
      });
    }
  });

  // Experience
  RESUME.experience.forEach((exp) => {
    if (
      !q ||
      exp.title.toLowerCase().includes(q) ||
      exp.org.toLowerCase().includes(q) ||
      exp.bullets.some((b) => b.toLowerCase().includes(q))
    ) {
      results.push({
        id: `exp-${exp.org}`,
        type: "experience",
        title: `${exp.title} @ ${exp.org}`,
        subtitle: `${exp.period} — ${exp.bullets[0]}`,
        action: () => {
          sounds.playOpen();
          onOpenApp("resume");
          onClose();
        },
      });
    }
  });

  return (
    <div className="fixed inset-0 z-[50000] flex items-start justify-center pt-[15vh] px-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" onClick={onClose} />

      {/* Spotlight Dialog */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/20 bg-slate-900/85 p-3 shadow-2xl backdrop-blur-2xl text-white">
        <div className="flex items-center gap-3 border-b border-white/10 px-3 pb-3 pt-1">
          <Search size={20} className="text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Spotlight Search (e.g. Graph RAG, C++, Neo4j, Terminal, Ask AI)..."
            className="flex-1 bg-transparent text-sm text-white placeholder-slate-400 focus:outline-none"
            autoFocus
          />
          <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[10px] text-slate-300">ESC</kbd>
        </div>

        <div className="max-h-[360px] overflow-y-auto pt-2">
          {results.length === 0 ? (
            <p className="p-4 text-center text-xs text-slate-400">No matching results found</p>
          ) : (
            <div className="space-y-1">
              {results.slice(0, 10).map((res) => (
                <button
                  key={res.id}
                  type="button"
                  onClick={res.action}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs transition hover:bg-blue-600/60"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex size-7 items-center justify-center rounded-lg bg-white/10">
                      {res.type === "app" && <Sparkles size={14} className="text-sky-400" />}
                      {res.type === "project" && <Code size={14} className="text-emerald-400" />}
                      {res.type === "skill" && <Terminal size={14} className="text-purple-400" />}
                      {res.type !== "app" && res.type !== "project" && res.type !== "skill" && (
                        <Briefcase size={14} className="text-amber-400" />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{res.title}</p>
                      <p className="text-[11px] text-slate-300 line-clamp-1">{res.subtitle}</p>
                    </div>
                  </div>
                  <ExternalLink size={13} className="text-slate-400" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 px-3 pt-2 mt-2 text-[11px] text-slate-400">
          <span>Tip: Press <kbd className="text-slate-200">Cmd + K</kbd> anytime to toggle Spotlight</span>
          <span>{results.length} items available</span>
        </div>
      </div>
    </div>
  );
}
