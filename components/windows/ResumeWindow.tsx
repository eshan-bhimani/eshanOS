import { Download } from "lucide-react";
import { RESUME, type ResumeEntry } from "@/data/resume";

function Section({ title, entries }: { title: string; entries: ResumeEntry[] }) {
  return (
    <section>
      <h2 className="text-[12px] font-semibold uppercase tracking-wider text-black/45">
        {title}
      </h2>
      <div className="mt-2 space-y-4">
        {entries.map((entry) => (
          <div key={`${entry.title}-${entry.org}`}>
            <div className="flex items-baseline justify-between gap-2">
              <h3 className="text-[14px] font-semibold text-black/85">
                {entry.title}
                <span className="font-normal text-black/55"> · {entry.org}</span>
              </h3>
              <span className="shrink-0 text-[12px] text-black/45">
                {entry.period}
              </span>
            </div>
            {entry.bullets.length > 0 && (
              <ul className="mt-1 list-disc space-y-0.5 pl-5 text-[13px] leading-relaxed text-black/65">
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
      {RESUME.pdf && (
        <a
          href={RESUME.pdf}
          download
          className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-3 py-1.5 text-[13px] font-medium text-white shadow-sm hover:bg-blue-700"
        >
          <Download size={14} aria-hidden /> Download PDF
        </a>
      )}
      <Section title="Experience" entries={RESUME.experience} />
      <Section title="Education" entries={RESUME.education} />
      <section>
        <h2 className="text-[12px] font-semibold uppercase tracking-wider text-black/45">
          Skills
        </h2>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {RESUME.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-black/6 px-2.5 py-0.5 text-[12px] font-medium text-black/70"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
