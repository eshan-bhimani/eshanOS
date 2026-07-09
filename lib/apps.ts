import type { ComponentType } from "react";

import {
  ContactsIcon,
  FinderIcon,
  MailIcon,
  MusicIcon,
  NotesIcon,
  PagesIcon,
  type AppIconProps,
} from "@/components/icons/AppIcons";
import AboutWindow from "@/components/windows/AboutWindow";
import BlogWindow from "@/components/windows/BlogWindow";
import MailWindow from "@/components/windows/MailWindow";
import MusicWindow from "@/components/windows/MusicWindow";
import ProjectsWindow from "@/components/windows/ProjectsWindow";
import ResumeWindow from "@/components/windows/ResumeWindow";

export type AppId = "about" | "projects" | "resume" | "mail" | "blog" | "music";

export type AppDefinition = {
  id: AppId;
  label: string;
  /** Menu bar shortcut label (Jason-style top nav); null to omit from the menu bar. */
  menuLabel: string | null;
  icon: ComponentType<AppIconProps>;
  component: ComponentType;
  /** Default window size on desktop; windows are draggable but not resizable in v1. */
  size: { width: number; height: number };
};

export const APPS: AppDefinition[] = [
  { id: "about", label: "About Me", menuLabel: "About", icon: ContactsIcon, component: AboutWindow, size: { width: 560, height: 440 } },
  { id: "projects", label: "Projects", menuLabel: "Projects", icon: FinderIcon, component: ProjectsWindow, size: { width: 640, height: 480 } },
  { id: "resume", label: "Resume", menuLabel: "Resume", icon: PagesIcon, component: ResumeWindow, size: { width: 620, height: 520 } },
  { id: "mail", label: "Mail", menuLabel: "Contact", icon: MailIcon, component: MailWindow, size: { width: 520, height: 400 } },
  { id: "blog", label: "Blog", menuLabel: "Blog", icon: NotesIcon, component: BlogWindow, size: { width: 560, height: 440 } },
  { id: "music", label: "Music", menuLabel: "Music", icon: MusicIcon, component: MusicWindow, size: { width: 420, height: 480 } },
];

export function getApp(id: AppId): AppDefinition {
  const app = APPS.find((a) => a.id === id);
  if (!app) throw new Error(`Unknown app: ${id}`);
  return app;
}
