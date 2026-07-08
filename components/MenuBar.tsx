"use client";

import { BatteryFull, Wifi } from "lucide-react";
import { APPS, type AppId } from "@/lib/apps";
import { useClock } from "@/lib/useClock";

type MenuBarProps = {
  onOpen: (id: AppId) => void;
};

export default function MenuBar({ onOpen }: MenuBarProps) {
  const now = useClock();

  const date = now?.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const time = now?.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <header className="absolute inset-x-0 top-0 z-[10000] flex h-8 items-center justify-between bg-black/45 px-4 text-[13px] text-white/90 backdrop-blur-2xl">
      <nav className="flex items-center gap-5" aria-label="Menu bar">
        <span className="font-semibold text-white">Eshan Bhimani</span>
        {APPS.filter((app) => app.menuLabel).map((app) => (
          <button
            key={app.id}
            type="button"
            onClick={() => onOpen(app.id)}
            className="hidden text-white/75 transition hover:text-white sm:block"
          >
            {app.menuLabel}
          </button>
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <Wifi size={15} aria-hidden className="text-white/80" />
        <BatteryFull size={18} aria-hidden className="text-white/80" />
        <span className="tabular-nums text-white/85">
          {date ? `${date.replace(/^(\w+) /, "$1, ")}` : ""}
        </span>
        <span className="tabular-nums">{time ?? ""}</span>
      </div>
    </header>
  );
}
