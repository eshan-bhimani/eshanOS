"use client";

import { Wifi, Volume2, Moon, Sun, Monitor, BatteryFull } from "lucide-react";
import { sounds } from "@/lib/sound";

type ControlCenterProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpenApp: (id: any) => void;
};

export default function ControlCenter({ isOpen, onClose, onOpenApp }: ControlCenterProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed right-3 top-9 z-[50000] w-80 rounded-2xl border border-white/20 bg-slate-900/85 p-3 shadow-2xl backdrop-blur-2xl text-white text-xs">
      <div className="grid grid-cols-2 gap-2">
        {/* Network & Connectivity */}
        <div className="flex flex-col justify-between rounded-xl bg-white/10 p-3">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-blue-600">
              <Wifi size={14} />
            </div>
            <div>
              <p className="font-semibold">Wi-Fi</p>
              <p className="text-[10px] text-slate-300">Georgia Tech 5G</p>
            </div>
          </div>
        </div>

        {/* Battery */}
        <div className="flex flex-col justify-between rounded-xl bg-white/10 p-3">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-emerald-600">
              <BatteryFull size={14} />
            </div>
            <div>
              <p className="font-semibold">Battery</p>
              <p className="text-[10px] text-emerald-300">100% Charged</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sound Volume Slider */}
      <div className="mt-2 rounded-xl bg-white/10 p-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="flex items-center gap-1.5 font-medium">
            <Volume2 size={14} className="text-sky-400" /> Sound Output
          </span>
          <span className="text-[10px] text-slate-300">Built-in Speakers</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="80"
          onChange={() => sounds.playClick()}
          className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-blue-500"
        />
      </div>

      {/* System Shortcuts */}
      <div className="mt-2 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => {
            sounds.playOpen();
            onOpenApp("settings");
            onClose();
          }}
          className="flex items-center gap-2 rounded-xl bg-white/10 p-2.5 transition hover:bg-white/20"
        >
          <Monitor size={14} className="text-amber-400" />
          <span className="font-medium">System Prefs</span>
        </button>

        <button
          type="button"
          onClick={() => {
            sounds.playOpen();
            onOpenApp("terminal");
            onClose();
          }}
          className="flex items-center gap-2 rounded-xl bg-white/10 p-2.5 transition hover:bg-white/20"
        >
          <Moon size={14} className="text-purple-400" />
          <span className="font-medium">CLI Terminal</span>
        </button>
      </div>
    </div>
  );
}
