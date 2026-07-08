import type { ComponentType } from "react";
import {
  BookOpen,
  FileText,
  FolderOpen,
  Mail,
  Music,
  User,
  type LucideIcon,
} from "lucide-react";

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
  icon: LucideIcon;
  color: string;
  component: ComponentType;
  /** Default window size on desktop; windows are draggable but not resizable in v1. */
  size: { width: number; height: number };
};

export const APPS: AppDefinition[] = [
  { id: "about", label: "About Me", icon: User, color: "#c98a5e", component: AboutWindow, size: { width: 560, height: 440 } },
  { id: "projects", label: "Projects", icon: FolderOpen, color: "#5e9dc9", component: ProjectsWindow, size: { width: 640, height: 480 } },
  { id: "resume", label: "Resume", icon: FileText, color: "#d98a3d", component: ResumeWindow, size: { width: 620, height: 520 } },
  { id: "mail", label: "Mail", icon: Mail, color: "#5e93d9", component: MailWindow, size: { width: 520, height: 400 } },
  { id: "blog", label: "Blog", icon: BookOpen, color: "#e0c15c", component: BlogWindow, size: { width: 560, height: 440 } },
  { id: "music", label: "Music", icon: Music, color: "#d95e6f", component: MusicWindow, size: { width: 420, height: 480 } },
];

export function getApp(id: AppId): AppDefinition {
  const app = APPS.find((a) => a.id === id);
  if (!app) throw new Error(`Unknown app: ${id}`);
  return app;
}
