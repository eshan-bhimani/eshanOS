"use client";

import { useState } from "react";
import { Check, Image as ImageIcon, Volume2, VolumeX, Sliders } from "lucide-react";
import { sounds } from "@/lib/sound";

export type WallpaperId = "lockscreen" | "san-francisco" | "abstract" | "cyberpunk";

export const WALLPAPERS: { id: WallpaperId; label: string; src: string }[] = [
  { id: "lockscreen", label: "Golden Gate Bridge", src: "/images/images.jpeg" },
  { id: "san-francisco", label: "San Francisco Portrait", src: "/images/eshanOS-lockscreen.jpg" },
  { id: "abstract", label: "Sonoma Dark Aerial", src: "/images/images.jpeg" },
];

type SettingsProps = {
  currentWallpaper?: string;
  onSelectWallpaper?: (src: string) => void;
  soundEnabled?: boolean;
  onToggleSound?: (enabled: boolean) => void;
};

export default function SettingsWindow({
  currentWallpaper = "/images/images.jpeg",
  onSelectWallpaper,
  soundEnabled = true,
  onToggleSound,
}: SettingsProps) {
  const [selectedWp, setSelectedWp] = useState(currentWallpaper);
  const [sound, setSound] = useState(soundEnabled);

  const handleWpChange = (src: string) => {
    setSelectedWp(src);
    sounds.playClick();
    if (onSelectWallpaper) onSelectWallpaper(src);
  };

  const handleSoundToggle = () => {
    const next = !sound;
    setSound(next);
    sounds.setEnabled(next);
    if (next) sounds.playSuccess();
    if (onToggleSound) onToggleSound(next);
  };

  return (
    <div className="space-y-6 p-6 text-xs text-slate-800">
      <div>
        <h2 className="flex items-center gap-2 text-sm font-bold text-slate-900">
          <ImageIcon size={16} className="text-blue-600" /> Desktop Wallpaper
        </h2>
        <p className="mt-0.5 text-slate-500">Choose a high-resolution macOS desktop background</p>

        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {WALLPAPERS.map((wp) => (
            <button
              key={wp.id}
              type="button"
              onClick={() => handleWpChange(wp.src)}
              className={`group relative flex flex-col items-center overflow-hidden rounded-xl border p-1 text-left transition ${
                selectedWp === wp.src
                  ? "border-blue-600 ring-2 ring-blue-500/40"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="relative h-20 w-full overflow-hidden rounded-lg bg-slate-200">
                <img
                  src={wp.src}
                  alt={wp.label}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                {selectedWp === wp.src && (
                  <div className="absolute right-1.5 top-1.5 flex size-5 items-center justify-center rounded-full bg-blue-600 text-white shadow">
                    <Check size={12} />
                  </div>
                )}
              </div>
              <span className="mt-1.5 px-1 font-medium text-slate-700">{wp.label}</span>
            </button>
          ))}
        </div>
      </div>

      <hr className="border-slate-200" />

      <div>
        <h2 className="flex items-center gap-2 text-sm font-bold text-slate-900">
          <Sliders size={16} className="text-blue-600" /> Audio & Sound Effects
        </h2>
        <p className="mt-0.5 text-slate-500">Synthesized macOS Web Audio sound FX on window clicks & unlock</p>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-3.5">
          <div className="flex items-center gap-3">
            {sound ? <Volume2 size={18} className="text-blue-600" /> : <VolumeX size={18} className="text-slate-400" />}
            <div>
              <p className="font-semibold text-slate-800">macOS Sound Effects</p>
              <p className="text-[11px] text-slate-500">Window open, minimize, click, and unlock feedback</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleSoundToggle}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              sound ? "bg-blue-600" : "bg-slate-300"
            }`}
          >
            <span
              className={`pointer-events-none inline-block size-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                sound ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
