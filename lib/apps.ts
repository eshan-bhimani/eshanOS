import type { ComponentType } from "react";

import {
  ContactsIcon,
  FinderIcon,
  MailIcon,
  MusicIcon,
  NotesIcon,
  PagesIcon,
  TerminalIcon,
  AIIcon,
  SettingsIcon,
  type AppIconProps,
} from "@/components/icons/AppIcons";
import AboutWindow from "@/components/windows/AboutWindow";
import BlogWindow from "@/components/windows/BlogWindow";
import MailWindow from "@/components/windows/MailWindow";
import MusicWindow from "@/components/windows/MusicWindow";
import ProjectsWindow from "@/components/windows/ProjectsWindow";
import ResumeWindow from "@/components/windows/ResumeWindow";
import TerminalWindow from "@/components/windows/TerminalWindow";
import AIWindow from "@/components/windows/AIWindow";
import SettingsWindow from "@/components/windows/SettingsWindow";

export type AppId =
  | "about"
  | "projects"
  | "resume"
  | "terminal"
  | "ai"
  | "mail"
  | "blog"
  | "music"
  | "settings";

export type AppDefinition = {
  id: AppId;
  label: string;
  /** Menu bar shortcut label (Jason-style top nav); null to omit from the menu bar. */
  menuLabel: string | null;
  icon: ComponentType<AppIconProps>;
  component: ComponentType<any>;
  /** Default window size on desktop. */
  size: { width: number; height: number };
};

export const APPS: AppDefinition[] = [
  { id: "about", label: "About Me", menuLabel: "About", icon: ContactsIcon, component: AboutWindow, size: { width: 580, height: 460 } },
  { id: "projects", label: "Projects", menuLabel: "Projects", icon: FinderIcon, component: ProjectsWindow, size: { width: 680, height: 520 } },
  { id: "resume", label: "Resume", menuLabel: "Resume", icon: PagesIcon, component: ResumeWindow, size: { width: 640, height: 540 } },
  { id: "terminal", label: "Terminal", menuLabel: "Terminal", icon: TerminalIcon, component: TerminalWindow, size: { width: 620, height: 420 } },
  { id: "ai", label: "Ask AI", menuLabel: "Ask AI", icon: AIIcon, component: AIWindow, size: { width: 540, height: 500 } },
  { id: "mail", label: "Mail", menuLabel: "Contact", icon: MailIcon, component: MailWindow, size: { width: 520, height: 400 } },
  { id: "blog", label: "Blog", menuLabel: "Blog", icon: NotesIcon, component: BlogWindow, size: { width: 600, height: 480 } },
  { id: "music", label: "Music", menuLabel: "Music", icon: MusicIcon, component: MusicWindow, size: { width: 440, height: 480 } },
  { id: "settings", label: "Settings", menuLabel: null, icon: SettingsIcon, component: SettingsWindow, size: { width: 540, height: 460 } },
];

export function getApp(id: AppId): AppDefinition {
  const app = APPS.find((a) => a.id === id);
  if (!app) throw new Error(`Unknown app: ${id}`);
  return app;
}

