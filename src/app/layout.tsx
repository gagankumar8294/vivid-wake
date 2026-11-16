import type { Metadata } from "next";
import "./globals.css";
import WebAnalyticsTracker from "@/components/WebAnalyticsTracker";

export const metadata: Metadata = {
  title: "VividWake — Cinematic 4K Video Lock Screen for Android | Download APK",
  description: "Download VividWake APK directly from our official website. 60 FPS video lock screen engine with zero wake delay, 0% background battery drain, and viral 4K wallpapers including GTA VI Lucia and Sabrina Carpenter.",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-neutral-950 text-neutral-100">
        {children}
        <WebAnalyticsTracker />
      </body>
    </html>
  );
}
