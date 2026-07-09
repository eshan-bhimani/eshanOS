"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import { APPS, getApp, type AppId } from "@/lib/apps";
import LockScreen from "@/components/LockScreen";
import MenuBar from "@/components/MenuBar";
import Dock from "@/components/Dock";
import DesktopIcon from "@/components/DesktopIcon";
import Window from "@/components/Window";

type WindowState = {
  id: AppId;
  position: { x: number; y: number };
  zIndex: number;
  minimized: boolean;
};

const BASE_Z = 100;

export default function Desktop() {
  const [locked, setLocked] = useState(true);
  const [openWindows, setOpenWindows] = useState<WindowState[]>([]);
  const [selectedIcon, setSelectedIcon] = useState<AppId | null>(null);
  const [mobileApp, setMobileApp] = useState<AppId | null>(null);
  const nextZ = useRef(BASE_Z);
  const desktopRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  const unlock = useCallback(() => setLocked(false), []);

  const focusWindow = useCallback((id: AppId) => {
    nextZ.current += 1;
    setOpenWindows((wins) =>
      wins.map((w) =>
        w.id === id ? { ...w, zIndex: nextZ.current, minimized: false } : w
      )
    );
  }, []);

  const openApp = useCallback(
    (id: AppId) => {
      setOpenWindows((wins) => {
        if (wins.some((w) => w.id === id)) {
          nextZ.current += 1;
          return wins.map((w) =>
            w.id === id ? { ...w, zIndex: nextZ.current, minimized: false } : w
          );
        }
        nextZ.current += 1;
        const cascade = wins.length % 6;
        return [
          ...wins,
          {
            id,
            position: { x: 96 + cascade * 36, y: 72 + cascade * 32 },
            zIndex: nextZ.current,
            minimized: false,
          },
        ];
      });
    },
    []
  );

  const closeWindow = useCallback((id: AppId) => {
    setOpenWindows((wins) => wins.filter((w) => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id: AppId) => {
    setOpenWindows((wins) =>
      wins.map((w) => (w.id === id ? { ...w, minimized: true } : w))
    );
  }, []);

  const visibleWindows = openWindows.filter((w) => !w.minimized);
  const activeWindow =
    visibleWindows.length > 0
      ? visibleWindows.reduce((a, b) => (a.zIndex > b.zIndex ? a : b))
      : null;

  const MobileAppContent = mobileApp ? getApp(mobileApp).component : null;

  return (
    <main className="fixed inset-0 overflow-hidden bg-black">
      {/* ---------- Desktop (md and up) ---------- */}
      <div className="hidden h-full w-full md:block">
        <Image
          src="/images/desktop-golden-gate.jpg"
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />

        {!locked && (
          <>
            <MenuBar onOpen={openApp} />

            {/* desktop icons, right-aligned column like macOS */}
            <div
              className="absolute inset-x-0 top-7 bottom-24"
              ref={desktopRef}
              onClick={(e) => {
                if (e.target === e.currentTarget) setSelectedIcon(null);
              }}
            >
              <div className="absolute right-4 top-6 flex flex-col items-center gap-3">
                {APPS.map((app) => (
                  <DesktopIcon
                    key={app.id}
                    app={app}
                    selected={selectedIcon === app.id}
                    onSelect={() => setSelectedIcon(app.id)}
                    onOpen={() => {
                      setSelectedIcon(app.id);
                      openApp(app.id);
                    }}
                  />
                ))}
              </div>

              <AnimatePresence>
                {visibleWindows.map((win) => {
                  const app = getApp(win.id);
                  const Content = app.component;
                  return (
                    <Window
                      key={win.id}
                      title={app.label}
                      icon={app.icon}
                      position={win.position}
                      size={app.size}
                      zIndex={win.zIndex}
                      isActive={activeWindow?.id === win.id}
                      dragConstraintsRef={desktopRef}
                      onClose={() => closeWindow(win.id)}
                      onMinimize={() => minimizeWindow(win.id)}
                      onFocus={() => focusWindow(win.id)}
                    >
                      <Content />
                    </Window>
                  );
                })}
              </AnimatePresence>
            </div>

            <Dock
              runningApps={openWindows.map((w) => w.id)}
              onOpen={openApp}
            />
          </>
        )}
      </div>

      {/* ---------- Mobile (below md): full-screen app views ---------- */}
      <div className="block h-full w-full md:hidden">
        <Image
          src="/images/desktop-golden-gate.jpg"
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover"
        />
        {!locked &&
          (mobileApp && MobileAppContent ? (
            <div className="absolute inset-0 z-20 flex flex-col bg-white/90 backdrop-blur-2xl">
              <div className="flex h-12 shrink-0 items-center gap-2 border-b border-black/10 bg-white/60 px-3">
                <button
                  type="button"
                  onClick={() => setMobileApp(null)}
                  aria-label="Back to home"
                  className="flex items-center gap-1 text-[15px] font-medium text-blue-600"
                >
                  <ArrowLeft size={18} aria-hidden /> Back
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 text-[15px] font-semibold text-black/80">
                  {getApp(mobileApp).label}
                </span>
              </div>
              <div className="min-h-0 flex-1 select-text overflow-y-auto">
                <MobileAppContent />
              </div>
            </div>
          ) : (
            <div className="absolute inset-0 z-10 grid grid-cols-3 content-start gap-4 px-6 pt-16">
              {APPS.map((app) => {
                const Icon = app.icon;
                return (
                  <button
                    key={app.id}
                    type="button"
                    aria-label={app.label}
                    onClick={() => setMobileApp(app.id)}
                    className="flex flex-col items-center gap-1.5"
                  >
                    <Icon size={64} />
                    <span className="text-[13px] font-medium text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                      {app.label}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
      </div>

      {/* ---------- Lock screen overlay, crossfades out on unlock ---------- */}
      <AnimatePresence>
        {locked && (
          <motion.div
            key="lock"
            className="absolute inset-0 z-[20000]"
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.4, ease: "easeOut" }}
          >
            <LockScreen onUnlock={unlock} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
