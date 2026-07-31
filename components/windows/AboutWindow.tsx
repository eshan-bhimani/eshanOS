"use client";

import { Award, Briefcase, GraduationCap, MapPin, Sparkles } from "lucide-react";

export default function AboutWindow() {
  return (
    <div className="space-y-4 p-6 text-xs leading-relaxed text-slate-800">
      {/* Header Profile */}
      <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
        <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-xl font-bold text-white shadow-md">
          EB
        </div>
        <div>
          <h1 className="text-xl font-bold text-slate-900">Eshan Bhimani</h1>
          <p className="font-mono text-xs font-semibold text-blue-600">Software Engineer & Systems Specialist</p>
          <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-slate-500">
            <span className="flex items-center gap-1"><MapPin size={12} /> Atlanta, GA / NYC / SF</span>
            <span className="flex items-center gap-1"><GraduationCap size={12} /> Georgia Tech '28</span>
          </div>
        </div>
      </div>

      {/* Georgia Tech Card */}
      <div className="rounded-xl border border-amber-200 bg-amber-50/70 p-3.5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-bold text-amber-900">
            <GraduationCap size={16} className="text-amber-700" /> Georgia Institute of Technology
          </span>
          <span className="rounded bg-amber-200/80 px-2 py-0.5 font-mono text-[10px] font-bold text-amber-900">
            GPA: 3.86 / 4.0
          </span>
        </div>
        <p className="mt-1 text-slate-700">
          Threads in <strong>Intelligence (AI/ML)</strong> & <strong>Systems & Architecture</strong>. Presidential Scholar, Dean's List, Zell Miller Scholar. Transferred after sophomore year in 2026.
        </p>
      </div>

      {/* NCR Atleos Card */}
      <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-3.5 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 font-bold text-blue-900">
            <Briefcase size={16} className="text-blue-700" /> SWE Intern @ NCR Atleos (Global HQ)
          </span>
          <span className="rounded bg-blue-200/80 px-2 py-0.5 text-[10px] font-bold text-blue-900">
            May 2026 — Present
          </span>
        </div>
        <p className="mt-1 text-slate-700">
          Architecting an enterprise knowledge graph in Neo4j with 10K+ nodes and 25K+ relationships, paired with a Graph RAG query layer (LangChain + Azure OpenAI) that cut BI scaffolding time by <strong>~60%</strong>.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="space-y-2">
        <h2 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500">
          <Sparkles size={14} className="text-blue-600" /> Engineering Vision
        </h2>
        <p>
          I love building high-scale, impactful products that solve tangible problems — from low-latency C++ prediction market trading engines to enterprise AI graph systems.
        </p>
        <p>
          My long-term ambition is to found an engineering-first startup in NYC or San Francisco that builds next-generation developer tools and AI infrastructure.
        </p>
      </div>
    </div>
  );
}
