"use client";

import { useRef, type ComponentType, type ReactNode, type RefObject } from "react";
import { motion, useDragControls, useReducedMotion } from "framer-motion";
import type { AppIconProps } from "@/components/icons/AppIcons";

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

  return (
    <motion.div
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={dragConstraintsRef}
      initial={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 12 }}
      animate={reducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 8 }}
      transition={{ type: "spring", duration: 0.35, bounce: 0.2 }}
      onPointerDown={onFocus}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
      }}
      className={`absolute flex max-h-[calc(100vh-6rem)] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-xl border border-black/10 bg-white/80 backdrop-blur-2xl ${
        isActive
          ? "shadow-[0_22px_60px_rgba(0,0,0,0.35)]"
          : "shadow-[0_10px_30px_rgba(0,0,0,0.20)]"
      }`}
      role="dialog"
      aria-label={title}
    >
      <div
        ref={titleBarRef}
        onPointerDown={(e) => dragControls.start(e)}
        className="group flex h-9 shrink-0 cursor-grab touch-none items-center border-b border-black/5 bg-white/40 px-3 active:cursor-grabbing"
      >
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label={`Close ${title}`}
            onClick={onClose}
            onPointerDown={(e) => e.stopPropagation()}
            className="flex size-3 items-center justify-center rounded-full bg-[#ff5f57] text-[8px] font-bold text-black/0 transition group-hover:text-black/50"
          >
            ×
          </button>
          <button
            type="button"
            aria-label={`Minimize ${title}`}
            onClick={onMinimize}
            onPointerDown={(e) => e.stopPropagation()}
            className="flex size-3 items-center justify-center rounded-full bg-[#febc2e] text-[8px] font-bold text-black/0 transition group-hover:text-black/50"
          >
            −
          </button>
          <span
            aria-hidden
            className="size-3 rounded-full bg-black/10"
            title="Maximize (coming in v2)"
          />
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
      <div className="min-h-0 flex-1 select-text overflow-y-auto">{children}</div>
    </motion.div>
  );
}
