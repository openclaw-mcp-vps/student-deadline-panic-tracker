import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deadline Panic Tracker — Gamified Assignment Alerts",
  description: "Track assignments, calculate stress levels, and get escalating deadline alerts. Gamified progress system for college students."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="07b205c6-9cd8-4939-a367-89b83ebceb3c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
