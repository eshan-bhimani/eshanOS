"use client";

import { Apple } from "lucide-react";
import { useClock } from "@/lib/useClock";

export default function MenuBar({ activeAppName }: { activeAppName: string }) {
  const now = useClock();

  const clock = now
    ? `${now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })}  ${now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })}`
    : "";

  return (
    <header className="absolute inset-x-0 top-0 z-[10000] flex h-7 items-center justify-between bg-white/25 px-4 text-[13px] text-black/85 backdrop-blur-2xl">
      <div className="flex items-center gap-4">
        <Apple size={15} className="fill-current" aria-label="Apple menu" />
        <span className="font-semibold">{activeAppName}</span>
        <span className="hidden gap-4 text-black/70 sm:flex">
          <span>File</span>
          <span>Edit</span>
          <span>View</span>
          <span>Window</span>
          <span>Help</span>
        </span>
      </div>
      <div className="tabular-nums whitespace-pre">{clock}</div>
    </header>
  );
}
