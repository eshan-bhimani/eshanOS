import { BookOpen } from "lucide-react";

export default function BlogWindow() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e0c15c] to-[#b89738] shadow-md">
        <BookOpen size={32} className="text-white" aria-hidden />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-black/85">Blog</h1>
        <p className="mt-1 max-w-xs text-[13px] leading-relaxed text-black/55">
          Writing coming soon — notes on things I&apos;m building and learning.
        </p>
      </div>
    </div>
  );
}
