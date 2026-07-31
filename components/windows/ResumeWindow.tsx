"use client";

import { Download, FileText, Sparkles } from "lucide-react";
import { RESUME, type ResumeEntry } from "@/data/resume";
import { sounds } from "@/lib/sound";

function Section({ title, entries }: { title: string; entries: ResumeEntry[] }) {
  return (
    <section>
      <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {title}
      </h2>
      <div className="mt-2.5 space-y-4">
        {entries.map((entry) => (
          <div key={`${entry.title}-${entry.org}`} className="rounded-xl border border-slate-200/80 bg-white/80 p-3.5 shadow-sm">
            <div className="flex flex-wrap items-baseline justify-between gap-1">
              <h3 className="text-sm font-bold text-slate-900">
                {entry.title}
                <span className="font-semibold text-blue-600"> · {entry.org}</span>
              </h3>
              <span className="shrink-0 text-xs font-medium text-slate-500">
                {entry.period}
              </span>
            </div>
            {entry.bullets.length > 0 && (
              <ul className="mt-2 list-disc space-y-1 pl-4 text-xs leading-relaxed text-slate-700">
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ResumeWindow() {
  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <div>
          <h1 className="text-lg font-bold text-slate-900">Eshan Bhimani — Resume</h1>
          <p className="text-xs text-slate-500">Georgia Tech CS Junior | SWE Intern @ NCR Atleos</p>
        </div>
        {RESUME.pdf && (
          <a
            href={RESUME.pdf}
            download
            onClick={() => sounds.playClick()}
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow hover:bg-blue-700"
          >
            <Download size={14} aria-hidden /> Download PDF
          </a>
        )}
      </div>

      <Section title="Experience" entries={RESUME.experience} />
      <Section title="Education" entries={RESUME.education} />

      <section>
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Core Technical Skills
        </h2>
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {RESUME.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-slate-200 bg-slate-100/80 px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-2xs"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
