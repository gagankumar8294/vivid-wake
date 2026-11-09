import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vivid Wake",
  description: "Magical live wallpapers and seamless interactive video experiences.",
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
