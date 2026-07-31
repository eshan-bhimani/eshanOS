"use client";

import { useState } from "react";
import { ExternalLink, Sparkles, Cpu, Layers } from "lucide-react";
import { PROJECTS, type ProjectCategory } from "@/data/projects";
import { sounds } from "@/lib/sound";

export default function ProjectsWindow() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>("All");

  const filtered = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-4 p-5">
      {/* Category filter tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/10 pb-3">
        <div className="flex flex-wrap gap-1.5">
          {(["All", "AI & ML", "Systems & HFT", "Full-Stack"] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                sounds.playClick();
                setActiveCategory(cat);
              }}
              className={`rounded-lg px-3 py-1 text-xs font-semibold transition ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-sm"
                  : "bg-black/5 text-black/60 hover:bg-black/10 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="font-mono text-xs text-black/50">
          Showing {filtered.length} projects
        </span>
      </div>

      {/* Projects Grid */}
      <div className="space-y-3">
        {filtered.map((project) => (
          <article
            key={project.name}
            className="group rounded-xl border border-black/8 bg-white/70 p-4 shadow-sm transition hover:border-blue-400/50 hover:bg-white hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-base font-bold text-black/85 group-hover:text-blue-600">
                    {project.name}
                  </h2>
                  <span className="rounded bg-black/5 px-2 py-0.5 text-[10px] font-semibold text-black/60">
                    {project.category}
                  </span>
                </div>
                {project.metric && (
                  <div className="mt-1 flex items-center gap-1 text-[11px] font-medium text-emerald-700">
                    <Sparkles size={12} className="text-emerald-600" />
                    <span>{project.metric}</span>
                  </div>
                )}
              </div>

              {(project.link || project.github) && (
                <a
                  href={project.link ?? project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name}`}
                  className="flex size-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition hover:bg-blue-600 hover:text-white"
                >
                  <ExternalLink size={14} aria-hidden />
                </a>
              )}
            </div>

            <p className="mt-2 text-xs leading-relaxed text-black/70">
              {project.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
