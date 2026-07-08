/**
 * Hand-drawn SVG recreations of macOS app icons (Contacts, Finder, Pages,
 * Mail, Notes, Music) so desktop/dock icons read as real Apple apps.
 * All share the macOS squircle silhouette via a common wrapper.
 */

export type AppIconProps = { size?: number };

function Squircle({
  size,
  children,
  defs,
  bg,
}: {
  size: number;
  children: React.ReactNode;
  defs?: React.ReactNode;
  bg: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      aria-hidden
      style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.35))" }}
    >
      <defs>{defs}</defs>
      <path
        d="M 31 2 h 38 c 20 0 29 9 29 29 v 38 c 0 20 -9 29 -29 29 h -38 c -20 0 -29 -9 -29 -29 v -38 c 0 -20 9 -29 29 -29 z"
        fill={bg}
      />
      <g clipPath="url(#sq-clip)">{children}</g>
      <clipPath id="sq-clip">
        <path d="M 31 2 h 38 c 20 0 29 9 29 29 v 38 c 0 20 -9 29 -29 29 h -38 c -20 0 -29 -9 -29 -29 v -38 c 0 -20 9 -29 29 -29 z" />
      </clipPath>
    </svg>
  );
}

/** About Me — macOS Contacts: tan leather book with contact card. */
export function ContactsIcon({ size = 48 }: AppIconProps) {
  return (
    <Squircle
      size={size}
      bg="url(#contacts-bg)"
      defs={
        <linearGradient id="contacts-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c9a175" />
          <stop offset="100%" stopColor="#9c703f" />
        </linearGradient>
      }
    >
      {/* binding tabs */}
      <rect x="8" y="18" width="10" height="8" rx="2.5" fill="#7a5527" />
      <rect x="8" y="34" width="10" height="8" rx="2.5" fill="#7a5527" />
      <rect x="8" y="50" width="10" height="8" rx="2.5" fill="#7a5527" />
      <rect x="8" y="66" width="10" height="8" rx="2.5" fill="#7a5527" />
      {/* card */}
      <rect x="22" y="14" width="66" height="72" rx="8" fill="#f5f0e8" />
      <circle cx="55" cy="42" r="12" fill="#b0b7c1" />
      <path d="M 33 74 c 0 -13 10 -20 22 -20 s 22 7 22 20 z" fill="#b0b7c1" />
    </Squircle>
  );
}

/** Projects — macOS Finder: two-tone blue smiling face. */
export function FinderIcon({ size = 48 }: AppIconProps) {
  return (
    <Squircle
      size={size}
      bg="url(#finder-bg)"
      defs={
        <>
          <linearGradient id="finder-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8fd3f7" />
            <stop offset="100%" stopColor="#4aa4e0" />
          </linearGradient>
          <linearGradient id="finder-dark" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b7fd4" />
            <stop offset="100%" stopColor="#1e5cb3" />
          </linearGradient>
        </>
      }
    >
      <path d="M 58 2 c -8 14 -12 30 -12 48 s 4 34 12 48 h 40 v -96 z" fill="url(#finder-dark)" />
      {/* eyes */}
      <path d="M 32 34 v 12" stroke="#123f7c" strokeWidth="5" strokeLinecap="round" />
      <path d="M 68 34 v 12" stroke="#eaf6ff" strokeWidth="5" strokeLinecap="round" />
      {/* smile */}
      <path
        d="M 22 62 c 8 9 18 13 28 13 s 22 -4 30 -13"
        fill="none"
        stroke="#123f7c"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </Squircle>
  );
}

/** Resume — macOS Pages: white page with orange pen. */
export function PagesIcon({ size = 48 }: AppIconProps) {
  return (
    <Squircle
      size={size}
      bg="url(#pages-bg)"
      defs={
        <>
          <linearGradient id="pages-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e8e8ec" />
          </linearGradient>
          <linearGradient id="pages-pen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffb03a" />
            <stop offset="100%" stopColor="#f07d1a" />
          </linearGradient>
        </>
      }
    >
      {/* faint text lines */}
      <g stroke="#c9c9d1" strokeWidth="4" strokeLinecap="round">
        <path d="M 22 26 h 34" />
        <path d="M 22 38 h 24" />
        <path d="M 64 70 h 14" />
        <path d="M 56 80 h 22" />
      </g>
      {/* pen, diagonal */}
      <g transform="rotate(45 50 50)">
        <rect x="44" y="8" width="12" height="52" rx="3" fill="url(#pages-pen)" />
        <path d="M 44 60 h 12 l -6 16 z" fill="#f9c77e" />
        <path d="M 47.5 69 l 2.5 7 l 2.5 -7 z" fill="#3a3a3a" />
        <rect x="44" y="14" width="12" height="5" fill="#d96a10" />
      </g>
    </Squircle>
  );
}

/** Mail — macOS Mail: blue gradient with white envelope. */
export function MailIcon({ size = 48 }: AppIconProps) {
  return (
    <Squircle
      size={size}
      bg="url(#mail-bg)"
      defs={
        <linearGradient id="mail-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6ab4f8" />
          <stop offset="100%" stopColor="#1f6fe0" />
        </linearGradient>
      }
    >
      <rect x="16" y="28" width="68" height="44" rx="7" fill="#ffffff" />
      <path
        d="M 18 32 L 50 55 L 82 32"
        fill="none"
        stroke="#c3d6ef"
        strokeWidth="4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M 18 70 L 40 50 M 82 70 L 60 50" stroke="#dde8f6" strokeWidth="3" strokeLinecap="round" />
    </Squircle>
  );
}

/** Blog — macOS Notes: yellow header strip over lined paper. */
export function NotesIcon({ size = 48 }: AppIconProps) {
  return (
    <Squircle
      size={size}
      bg="url(#notes-bg)"
      defs={
        <>
          <linearGradient id="notes-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ececf0" />
          </linearGradient>
          <linearGradient id="notes-top" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffd94e" />
            <stop offset="100%" stopColor="#f7b613" />
          </linearGradient>
        </>
      }
    >
      <rect x="2" y="2" width="96" height="26" fill="url(#notes-top)" />
      {/* perforation dots */}
      <g fill="#e2a30b">
        {Array.from({ length: 9 }, (_, i) => (
          <circle key={i} cx={14 + i * 9} cy="24" r="1.6" />
        ))}
      </g>
      <g stroke="#c9c9d1" strokeWidth="4" strokeLinecap="round">
        <path d="M 16 44 h 68" />
        <path d="M 16 58 h 68" />
        <path d="M 16 72 h 44" />
      </g>
    </Squircle>
  );
}

/** Music — Apple Music: red/pink gradient with white beamed note. */
export function MusicIcon({ size = 48 }: AppIconProps) {
  return (
    <Squircle
      size={size}
      bg="url(#music-bg)"
      defs={
        <linearGradient id="music-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fb5c74" />
          <stop offset="100%" stopColor="#fa233b" />
        </linearGradient>
      }
    >
      <g fill="#ffffff">
        <path d="M 40 26 l 34 -7 v 9 l -28 6 z" />
        <rect x="40" y="26" width="6" height="42" />
        <rect x="68" y="19" width="6" height="40" />
        <ellipse cx="36" cy="68" rx="11" ry="8" />
        <ellipse cx="64" cy="59" rx="11" ry="8" />
      </g>
    </Squircle>
  );
}
