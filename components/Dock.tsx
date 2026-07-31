"use client";

import { motion, useReducedMotion } from "framer-motion";
import { APPS, type AppId } from "@/lib/apps";
import { sounds } from "@/lib/sound";

type DockProps = {
  runningApps: AppId[];
  onOpen: (id: AppId) => void;
};

export default function Dock({ runningApps, onOpen }: DockProps) {
  const reducedMotion = useReducedMotion();

  return (
    <nav
      aria-label="Dock"
      className="absolute inset-x-0 bottom-2 z-[9999] flex justify-center"
    >
      <div className="flex items-end gap-2.5 rounded-2xl border border-white/15 bg-black/35 px-3.5 pb-1 pt-2.5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
        {APPS.map((app) => {
          const Icon = app.icon;
          const running = runningApps.includes(app.id);
          return (
            <div key={app.id} className="group relative flex flex-col items-center">
              <span className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md bg-black/80 px-2 py-0.5 text-xs text-white opacity-0 transition group-hover:opacity-100 shadow-md">
                {app.label}
              </span>
              <motion.button
                type="button"
                aria-label={app.label}
                onClick={() => {
                  sounds.playOpen();
                  onOpen(app.id);
                }}
                whileHover={reducedMotion ? undefined : { scale: 1.25, y: -10 }}
                whileTap={reducedMotion ? undefined : { scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="flex items-center justify-center focus:outline-none"
              >
                <Icon size={48} />
              </motion.button>
              <span
                aria-hidden
                className={`mt-0.5 size-1 rounded-full bg-white/90 shadow ${
                  running ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          );
        })}
      </div>
    </nav>
  );
}
