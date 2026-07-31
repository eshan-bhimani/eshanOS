"use client";

import { useEffect, useRef, useState } from "react";
import { Music, SkipBack, SkipForward, Play, Pause, Volume2 } from "lucide-react";
import { sounds } from "@/lib/sound";

type Track = {
  title: string;
  artist: string;
  album: string;
  duration: string;
};

const TRACKS: Track[] = [
  { title: "Deep Focus (Graph RAG & HFT Beats)", artist: "eshanOS Synth", album: "Atlanta HQ", duration: "3:45" },
  { title: "Georgia Tech Coding Session", artist: "Klaus Building LoFi", album: "CS 2026", duration: "4:20" },
  { title: "SF & NYC Startup Dreams", artist: "Late Night Engineering", album: "Build & Ship", duration: "2:50" },
];

export default function MusicWindow() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number | null>(null);

  const track = TRACKS[currentTrackIdx];

  const togglePlay = () => {
    sounds.playClick();
    setIsPlaying((p) => !p);
  };

  const nextTrack = () => {
    sounds.playClick();
    setCurrentTrackIdx((idx) => (idx + 1) % TRACKS.length);
  };

  const prevTrack = () => {
    sounds.playClick();
    setCurrentTrackIdx((idx) => (idx - 1 + TRACKS.length) % TRACKS.length);
  };

  // Live Canvas Equalizer Bars
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let bars = Array.from({ length: 16 }, () => Math.random() * 0.5 + 0.2);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = canvas.width / bars.length - 2;

      bars.forEach((heightPct, idx) => {
        if (isPlaying) {
          // Animate height
          bars[idx] = Math.min(1, Math.max(0.1, heightPct + (Math.random() - 0.5) * 0.25));
        } else {
          bars[idx] = Math.max(0.08, heightPct * 0.95);
        }

        const h = bars[idx] * canvas.height;
        const x = idx * (barWidth + 2);
        const y = canvas.height - h;

        const grad = ctx.createLinearGradient(0, canvas.height, 0, 0);
        grad.addColorStop(0, "#ec4899");
        grad.addColorStop(1, "#8b5cf6");

        ctx.fillStyle = grad;
        ctx.fillRect(x, y, barWidth, h);
      });

      animFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6 bg-slate-950 text-white">
      {/* Album Cover */}
      <div className="relative flex size-32 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 shadow-xl">
        <Music size={48} className="text-white" aria-hidden />

        {isPlaying && (
          <span className="absolute right-2 top-2 flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
          </span>
        )}
      </div>

      {/* Track info */}
      <div className="text-center">
        <p className="text-sm font-bold text-white">{track.title}</p>
        <p className="text-xs text-slate-400">{track.artist} — {track.album}</p>
      </div>

      {/* Canvas Equalizer Visualizer */}
      <div className="h-10 w-48 rounded-lg bg-slate-900/80 p-1">
        <canvas ref={canvasRef} width={180} height={32} className="h-full w-full" />
      </div>

      {/* Play Controls */}
      <div className="flex items-center gap-6 text-slate-200">
        <button
          type="button"
          onClick={prevTrack}
          className="transition hover:scale-110 hover:text-white"
          aria-label="Previous track"
        >
          <SkipBack size={20} />
        </button>

        <button
          type="button"
          onClick={togglePlay}
          className="flex size-11 items-center justify-center rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 text-white shadow-lg transition hover:scale-105"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
        </button>

        <button
          type="button"
          onClick={nextTrack}
          className="transition hover:scale-110 hover:text-white"
          aria-label="Next track"
        >
          <SkipForward size={20} />
        </button>
      </div>

      <div className="flex items-center gap-2 text-xs text-slate-400">
        <Volume2 size={14} />
        <span>Playing Ambient Focus Audio</span>
      </div>
    </div>
  );
}
