export default function AboutWindow() {
  return (
    <div className="space-y-4 p-6 text-[14px] leading-relaxed text-black/80">
      <div className="flex items-center gap-4">
        <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-[#4a9df0] to-[#1e6fd6] text-2xl font-semibold text-white">
          EB
        </div>
        <div>
          <h1 className="text-2xl font-bold text-black">Eshan Bhimani</h1>
          <p className="font-mono text-[13px] text-blue-600">Software Engineer</p>
        </div>
      </div>

      {/* TODO(eshan): replace with your real About Me copy (2-3 short paragraphs). */}
      <p>
        Hi, I&apos;m Eshan — a software engineer who likes building polished,
        thoughtful products. This site is my take on a portfolio: a little
        operating system you can poke around in.
      </p>
      <p>
        Open <strong>Projects</strong> to see what I&apos;ve been building,{" "}
        <strong>Resume</strong> for the formal version, or <strong>Mail</strong>{" "}
        to get in touch.
      </p>
    </div>
  );
}
