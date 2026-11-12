import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VividWake — Cinematic 4K Video Lock Screen for Android | Download APK",
  description: "Download VividWake APK directly from our official website. 60 FPS video lock screen engine with zero wake delay, 0% background battery drain, and viral 4K wallpapers including GTA VI Lucia and Sabrina Carpenter.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col font-sans bg-neutral-950 text-neutral-100">
        {children}
      </body>
    </html>
  );
}
