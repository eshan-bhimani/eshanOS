import { ExternalLink } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export default function ProjectsWindow() {
  return (
    <div className="space-y-3 p-5">
      <p className="font-mono text-[13px] text-black/55">
        Projects — {PROJECTS.length} items
      </p>
      {PROJECTS.map((project) => (
        <article
          key={project.name}
          className="rounded-lg border border-black/8 bg-white/70 p-4 shadow-sm"
        >
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-[15px] font-semibold text-black/85">
              {project.name}
            </h2>
            {(project.link || project.github) && (
              <a
                href={project.link ?? project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name}`}
                className="text-blue-600 hover:text-blue-700"
              >
                <ExternalLink size={15} aria-hidden />
              </a>
            )}
          </div>
          <p className="mt-1 text-[13px] leading-relaxed text-black/65">
            {project.description}
          </p>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-500/10 px-2 py-0.5 text-[11px] font-medium text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
