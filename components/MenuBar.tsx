"use client";

import { BatteryFull, Wifi, Search, SlidersHorizontal } from "lucide-react";
import { APPS, type AppId } from "@/lib/apps";
import { useClock } from "@/lib/useClock";
import { sounds } from "@/lib/sound";

type MenuBarProps = {
  onOpen: (id: AppId) => void;
  onOpenSpotlight?: () => void;
  onToggleControlCenter?: () => void;
};

export default function MenuBar({
  onOpen,
  onOpenSpotlight,
  onToggleControlCenter,
}: MenuBarProps) {
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
        <button
          type="button"
          onClick={() => {
            sounds.playClick();
            onOpen("about");
          }}
          className="font-semibold text-white transition hover:text-blue-300"
        >
          Eshan Bhimani
        </button>
        {APPS.filter((app) => app.menuLabel).map((app) => (
          <button
            key={app.id}
            type="button"
            onClick={() => {
              sounds.playClick();
              onOpen(app.id);
            }}
            className="hidden text-white/75 transition hover:text-white sm:block"
          >
            {app.menuLabel}
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-3.5">
        <button
          type="button"
          aria-label="Spotlight Search"
          onClick={() => {
            sounds.playClick();
            if (onOpenSpotlight) onOpenSpotlight();
          }}
          className="rounded p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
          title="Spotlight Search (Cmd+K)"
        >
          <Search size={14} />
        </button>

        <button
          type="button"
          aria-label="Control Center"
          onClick={() => {
            sounds.playClick();
            if (onToggleControlCenter) onToggleControlCenter();
          }}
          className="rounded p-1 text-white/80 transition hover:bg-white/10 hover:text-white"
          title="Control Center"
        >
          <SlidersHorizontal size={14} />
        </button>

        <div className="hidden items-center gap-2.5 sm:flex">
          <Wifi size={14} aria-hidden className="text-white/80" />
          <BatteryFull size={16} aria-hidden className="text-white/80" />
        </div>

        <span className="tabular-nums text-white/85">
          {date ? `${date.replace(/^(\w+) /, "$1, ")}` : ""}
        </span>
        <span className="tabular-nums font-medium">{time ?? ""}</span>
      </div>
    </header>
  );
}
