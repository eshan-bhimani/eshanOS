"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Lock } from "lucide-react";
import { useClock } from "@/lib/useClock";

const NAME = "Eshan Bhimani";
const TYPE_SPEED_MS = 50;

function useTypedName(): string {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = setTimeout(() => setCount(NAME.length), 0);
      return () => clearTimeout(t);
    }
    const id = setInterval(() => {
      setCount((c) => {
        if (c >= NAME.length) {
          clearInterval(id);
          return c;
        }
        return c + 1;
      });
    }, TYPE_SPEED_MS);
    return () => clearInterval(id);
  }, []);

  return NAME.slice(0, count);
}

export default function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const typedName = useTypedName();
  const now = useClock();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Enter") onUnlock();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onUnlock]);

  const date = now?.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
  // macOS lock screen shows 12-hour time with no AM/PM suffix
  const time = now
    ?.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })
    .replace(/\s?[AP]M$/i, "");

  return (
    <div
      className="fixed inset-0 cursor-default"
      onClick={onUnlock}
      role="presentation"
    >
      <Image
        src="/images/eshanOS-lockscreen.jpg"
        alt=""
        fill
        priority
        quality={90}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "center 30%" }}
      />
      {/* legibility scrims, top for the clock, bottom for the name/unlock hint */}
      <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-black/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/55 to-transparent" />

      {/* Big time over date, Jason-style */}
      <div className="absolute inset-x-0 top-[16%] flex flex-col items-center text-white">
        <p className="text-[9rem] leading-none font-bold tracking-tight drop-shadow-md tabular-nums min-h-[9rem]">
          {time ?? " "}
        </p>
        <p className="mt-3 text-2xl font-medium tracking-wide drop-shadow-sm min-h-8">
          {date ?? " "}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-14 flex flex-col items-center gap-5 text-white">
        <p className="text-3xl font-bold drop-shadow-md min-h-9">
          {typedName}
          {typedName.length > 0 && <span className="caret" aria-hidden />}
        </p>
        <button
          type="button"
          onClick={onUnlock}
          className="flex items-center gap-2 rounded-lg bg-white/15 px-5 py-2 font-mono text-[13px] tracking-tight text-white/90 backdrop-blur-md transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white"
        >
          <Lock size={13} aria-hidden />
          Click or press enter to unlock
        </button>
      </div>
    </div>
  );
}
