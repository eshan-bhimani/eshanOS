import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EshanOS — Eshan Bhimani",
  description:
    "The personal portfolio of Eshan Bhimani, styled as a macOS desktop. Unlock to explore projects, resume, and more.",
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
