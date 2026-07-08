# eshanOS

A macOS-styled personal portfolio: lock screen → unlock → desktop with menu bar, dock,
desktop icons, and draggable app windows (About, Projects, Resume, Mail, Blog, Music).

Built with Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Click anywhere (or press Enter) on the lock screen to unlock.

## Swap in the real wallpapers

Both background images in `public/images/` are **generated placeholders** — replace them
with the real photos (keep the same filenames):

- `public/images/lock-screen-portrait.jpg` — your portrait photo (the converted
  `IMG_1887.HEIC`). The lock screen crops it with `object-position: center 30%`; tweak
  that in `components/LockScreen.tsx` if the framing cuts off your head at wide sizes.
- `public/images/desktop-golden-gate.jpg` — a real Golden Gate Bridge photo. Note that
  Apple doesn't ship a Golden Gate still in macOS's stock wallpaper set (their San
  Francisco imagery is the Sonoma aerial *screensaver*, which isn't redistributable), so
  the closest legal match is a high-res photo with that stock-wallpaper look. Two free,
  no-attribution options from Unsplash:
  - https://unsplash.com/photos/golden-gate-bridge-during-daytime-gZXx8lKAb7Y
  - https://unsplash.com/photos/the-golden-gate-bridge-spans-a-bay-HnQ21X8Gc7U

## Fill in your content

- `data/projects.ts` — real project list
- `data/resume.ts` — resume content, plus drop a PDF at `public/resume.pdf` and set `pdf: "/resume.pdf"`
- `components/windows/AboutWindow.tsx` — About Me copy
- `components/windows/MailWindow.tsx` — confirm GitHub/LinkedIn URLs

## Deploy

Zero-config on Vercel: import the repo and deploy.
