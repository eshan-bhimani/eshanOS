"use client";

import type { AppDefinition } from "@/lib/apps";

type DesktopIconProps = {
  app: AppDefinition;
  selected: boolean;
  onSelect: () => void;
  onOpen: () => void;
};

export default function DesktopIcon({
  app,
  selected,
  onSelect,
  onOpen,
}: DesktopIconProps) {
  const Icon = app.icon;
  return (
    <button
      type="button"
      aria-label={`${app.label} — double-click to open`}
      onClick={onSelect}
      onDoubleClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter") onOpen();
      }}
      className="flex w-24 flex-col items-center gap-1 rounded-lg p-2 focus-visible:outline-2 focus-visible:outline-white/80"
    >
      <span
        className={`flex items-center justify-center rounded-xl p-1 transition ${
          selected ? "bg-white/25 ring-1 ring-white/40" : ""
        }`}
      >
        <Icon size={52} />
      </span>
      <span
        className={`rounded px-1.5 py-0.5 text-[13px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] ${
          selected ? "bg-blue-500/90" : ""
        }`}
      >
        {app.label}
      </span>
    </button>
  );
}
