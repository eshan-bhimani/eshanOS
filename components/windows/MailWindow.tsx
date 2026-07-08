import { AtSign, Globe, Mail, Send } from "lucide-react";

const EMAIL = "bhimanieshan@gmail.com";

// TODO(eshan): confirm/replace social links.
const LINKS = [
  { label: "GitHub", href: "https://github.com/eshan-bhimani", icon: Globe },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eshan-bhimani",
    icon: AtSign,
  },
];

export default function MailWindow() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5 p-6 text-center">
      <div className="flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5e93d9] to-[#3f6fb0] shadow-md">
        <Mail size={32} className="text-white" aria-hidden />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-black/85">Get in touch</h1>
        <p className="mt-1 text-[13px] text-black/55">
          Whether it&apos;s a role, a project, or just to say hi.
        </p>
      </div>
      <a
        href={`mailto:${EMAIL}?subject=Hello%20Eshan`}
        className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-[13px] font-medium text-white shadow-sm hover:bg-blue-700"
      >
        <Send size={14} aria-hidden /> Email {EMAIL}
      </a>
      <div className="flex gap-4">
        {LINKS.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] font-medium text-black/60 hover:text-black/90"
          >
            <Icon size={16} aria-hidden /> {label}
          </a>
        ))}
      </div>
    </div>
  );
}
