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

      <p>
        I&apos;m currently a junior CS major at Georgia Tech, with threads in
        Intelligence and Systems &amp; Architecture. I transferred from UGA
        after my sophomore year in Summer 2026, and I anticipate graduating in
        May 2028.
      </p>
      <p>
        I&apos;m currently a SWE Intern at NCR Atleos at their Global HQ in
        Atlanta, where I&apos;m working on creating AI Agents and systems over
        data layers.
      </p>
      <p>
        I love building things that solve daily inconveniences — products that
        people actually want to use. Whether it&apos;s a tool that saves someone
        five minutes a day or a platform that fundamentally changes how people
        interact with a system, I&apos;m drawn to practical, impactful work.
      </p>
      <p>
        My long-term goal is to start a company in NYC or SF that builds a
        bridge between AI, tech, and the software development industries.
      </p>
    </div>
  );
}
