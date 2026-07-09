import { Music, SkipBack, SkipForward, Play } from "lucide-react";

// TODO(eshan): swap in a real playlist embed (Spotify/Apple Music) or your favorites.
export default function MusicWindow() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 p-6">
      <div className="flex size-36 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d95e6f] to-[#a53a4b] shadow-lg">
        <Music size={56} className="text-white" aria-hidden />
      </div>
      <div className="text-center">
        <p className="text-[15px] font-semibold text-black/85">On repeat</p>
        <p className="text-[13px] text-black/55">A playlist is coming soon</p>
      </div>
      <div className="flex items-center gap-6 text-black/70" aria-hidden>
        <SkipBack size={20} />
        <span className="flex size-11 items-center justify-center rounded-full bg-black/8">
          <Play size={20} className="ml-0.5" />
        </span>
        <SkipForward size={20} />
      </div>
      <div className="h-1 w-48 overflow-hidden rounded-full bg-black/10" aria-hidden>
        <div className="h-full w-1/3 rounded-full bg-black/40" />
      </div>
    </div>
  );
}
