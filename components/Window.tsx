"use client";

import { useRef, useState, type ComponentType, type ReactNode, type RefObject } from "react";
import { motion, useDragControls, useReducedMotion } from "framer-motion";
import type { AppIconProps } from "@/components/icons/AppIcons";
import { sounds } from "@/lib/sound";

type WindowProps = {
  title: string;
  icon?: ComponentType<AppIconProps>;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isActive: boolean;
  dragConstraintsRef: RefObject<HTMLDivElement | null>;
  onClose: () => void;
  onMinimize: () => void;
  onFocus: () => void;
  children: ReactNode;
};

export default function Window({
  title,
  icon: Icon,
  position,
  size,
  zIndex,
  isActive,
  dragConstraintsRef,
  onClose,
  onMinimize,
  onFocus,
  children,
}: WindowProps) {
  const dragControls = useDragControls();
  const reducedMotion = useReducedMotion();
  const titleBarRef = useRef<HTMLDivElement>(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [winSize, setWinSize] = useState(size);
  const isResizing = useRef(false);

  const toggleMaximize = () => {
    sounds.playClick();
    setIsMaximized((m) => !m);
  };

  const handlePointerDown = () => {
    sounds.playClick();
    onFocus();
  };

  const startResize = (e: React.PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    isResizing.current = true;

    const startX = e.clientX;
    const startY = e.clientY;
    const startW = winSize.width;
    const startH = winSize.height;

    const onPointerMove = (moveEvt: PointerEvent) => {
      if (!isResizing.current) return;
      const newW = Math.max(340, startW + (moveEvt.clientX - startX));
      const newH = Math.max(260, startH + (moveEvt.clientY - startY));
      setWinSize({ width: newW, height: newH });
    };

    const onPointerUp = () => {
      isResizing.current = false;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  return (
    <motion.div
      drag={!isMaximized}
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={dragConstraintsRef}
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 12 }}
      animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 8 }}
      transition={{ type: "spring", duration: 0.35, bounce: 0.2 }}
      onPointerDown={handlePointerDown}
      style={
        isMaximized
          ? {
              left: 12,
              top: 40,
              width: "calc(100vw - 24px)",
              height: "calc(100vh - 100px)",
              zIndex,
            }
          : {
              left: position.x,
              top: position.y,
              width: winSize.width,
              height: winSize.height,
              zIndex,
            }
      }
      className={`absolute flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white/85 backdrop-blur-2xl transition-all duration-200 ${
        isActive
          ? "shadow-[0_22px_60px_rgba(0,0,0,0.35)]"
          : "shadow-[0_10px_30px_rgba(0,0,0,0.20)]"
      }`}
      role="dialog"
      aria-label={title}
    >
      {/* Title bar */}
      <div
        ref={titleBarRef}
        onPointerDown={(e) => {
          if (!isMaximized) dragControls.start(e);
        }}
        onDoubleClick={toggleMaximize}
        className="group flex h-9 shrink-0 cursor-grab touch-none items-center border-b border-black/5 bg-white/40 px-3 active:cursor-grabbing"
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={`Close ${title}`}
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="flex size-3 items-center justify-center rounded-full bg-[#ff5f57] text-[8px] font-bold text-black/0 transition group-hover:text-black/50"
          >
            ×
          </button>
          <button
            type="button"
            aria-label={`Minimize ${title}`}
            onClick={() => {
              sounds.playMinimize();
              onMinimize();
            }}
            onPointerDown={(e) => e.stopPropagation()}
            className="flex size-3 items-center justify-center rounded-full bg-[#febc2e] text-[8px] font-bold text-black/0 transition group-hover:text-black/50"
          >
            −
          </button>
          <button
            type="button"
            aria-label={`Maximize ${title}`}
            onClick={toggleMaximize}
            onPointerDown={(e) => e.stopPropagation()}
            className="flex size-3 items-center justify-center rounded-full bg-[#28c840] text-[8px] font-bold text-black/0 transition group-hover:text-black/50"
          >
            +
          </button>
        </div>
        <span
          className={`absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 text-[13px] font-semibold ${
            isActive ? "text-black/80" : "text-black/40"
          }`}
        >
          {Icon && <Icon size={16} />}
          {title}
        </span>
      </div>

      {/* Body content */}
      <div className="min-h-0 flex-1 select-text overflow-y-auto">{children}</div>

      {/* Bottom-right resize handle */}
      {!isMaximized && (
        <div
          onPointerDown={startResize}
          className="absolute bottom-0 right-0 size-4 cursor-se-resize touch-none opacity-40 hover:opacity-100"
          title="Drag to resize window"
        >
          <svg className="size-full p-0.5 text-black/40" viewBox="0 0 16 16" fill="currentColor">
            <path d="M14 14H10V12H14V14ZM14 9H12V7H14V9Z" />
          </svg>
        </div>
      )}
    </motion.div>
  );
}
