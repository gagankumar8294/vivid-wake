import type { Metadata, Viewport } from "next";
import "./globals.css";
import WebAnalyticsTracker from "@/components/WebAnalyticsTracker";

export const viewport: Viewport = {
  themeColor: "#06090e",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vividwake.gksky.in"),
  title: "VividWake — 4K Dynamic Video Wallpapers for Mobile Android Lock Screen",
  description:
    "Download VividWake APK at vividwake.gksky.in — the #1 Android dynamic video wallpaper engine. Get seamless 60 FPS 4K live video wallpapers on your mobile lock screen with 0% battery drain and zero wake lag. Featuring GTA VI Lucia and Sabrina Carpenter dynamic loops.",
  applicationName: "VividWake",
  authors: [{ name: "VividWake Team", url: "https://vividwake.gksky.in" }],
  generator: "Next.js",
  keywords: [
    "VividWake",
    "vividwake",
    "vividwake.gksky.in",
    "dynamic wallpapers",
    "dynamic wallpapers for mobile",
    "video wallpapers for mobile",
    "dynamic video wallpaper android",
    "video lock screen android",
    "4K video wallpaper mobile",
    "seamless loop video wallpaper",
    "idle video wallpaper",
    "60 fps dynamic wallpaper",
    "GTA 6 Lucia live wallpaper",
    "GTA VI Lucia video wallpaper",
    "Sabrina Carpenter video wallpaper",
    "AMOLED dynamic wallpaper",
    "android live wallpaper apk",
    "vividwake apk download",
  ],
  creator: "VividWake",
  publisher: "VividWake",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://vividwake.gksky.in",
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "VividWake — 4K Dynamic Video Wallpapers for Mobile Android Lock Screen",
    description:
      "Transform your mobile lock screen with VividWake dynamic video wallpapers. Seamless 60 FPS hardware-decoded loops, zero wake delay, and 0% background battery drain.",
    url: "https://vividwake.gksky.in",
    siteName: "VividWake",
    images: [
      {
        url: "/videos/lucia_portrait_poster.jpg",
        width: 1080,
        height: 1920,
        alt: "VividWake Dynamic 4K Video Wallpaper on Mobile Lock Screen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VividWake — 4K Dynamic Video Wallpapers for Mobile",
    description:
      "Next-gen 60 FPS dynamic video wallpapers for your Android mobile lock screen with 0% battery drain.",
    images: ["/videos/lucia_portrait_poster.jpg"],
    creator: "@VividWake",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://vividwake.gksky.in/#website",
        url: "https://vividwake.gksky.in",
        name: "VividWake",
        alternateName: [
          "VividWake Wallpapers",
          "VividWake Dynamic Wallpapers",
          "vividwake.gksky.in",
          "VividWake Video Wallpaper Engine",
        ],
        description:
          "Official website of VividWake — 4K dynamic video wallpapers for mobile Android lock screens.",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://vividwake.gksky.in/?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "MobileApplication",
        "@id": "https://vividwake.gksky.in/#app",
        name: "VividWake",
        operatingSystem: "Android 9.0 and up",
        applicationCategory: "MultimediaApplication",
        fileSize: "19.7MB",
        installUrl: "https://vividwake.gksky.in/api/download",
        softwareVersion: "1.0.0",
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          ratingCount: "2840",
          bestRating: "5",
          worstRating: "1",
        },
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "VideoObject",
        name: "GTA VI Lucia Hypnotic Gaze Dynamic Video Wallpaper",
        description:
          "Hyper-realistic 4K 60FPS dynamic video lock screen wallpaper of GTA VI Lucia for mobile Android devices running VividWake.",
        thumbnailUrl: "https://vividwake.gksky.in/videos/lucia_portrait_poster.jpg",
        contentUrl: "https://vividwake.gksky.in/videos/lucia_portrait_loop.mp4",
        uploadDate: "2026-11-18T00:00:00Z",
        duration: "PT9.8S",
      },
      {
        "@type": "VideoObject",
        name: "GTA VI Jason and Lucia Vice City Duo Dynamic Video Wallpaper",
        description:
          "High-octane 60FPS dynamic video lock screen wallpaper of Jason and Lucia motorcycle wheelie in Vice City for mobile Android devices.",
        thumbnailUrl: "https://vividwake.gksky.in/videos/lucia_wheelie_poster.jpg",
        contentUrl: "https://vividwake.gksky.in/videos/lucia_wheelie_loop.mp4",
        uploadDate: "2026-11-18T00:00:00Z",
        duration: "PT7.6S",
      },
      {
        "@type": "VideoObject",
        name: "Sabrina Carpenter Taste Kiss Dynamic Video Wallpaper",
        description:
          "Viral 1080x1920 60FPS dynamic video lock screen wallpaper of Sabrina Carpenter for mobile Android devices running VividWake.",
        thumbnailUrl: "https://vividwake.gksky.in/videos/sabrina_carpenter_poster.jpg",
        contentUrl: "https://vividwake.gksky.in/videos/sabrina_carpenter_loop.mp4",
        uploadDate: "2026-11-18T00:00:00Z",
        duration: "PT14.1S",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What makes VividWake different from static wallpaper apps?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "VividWake is exclusively built for mobile dynamic video wallpapers. Instead of lifeless static images, VividWake renders 60 FPS hardware-accelerated video loops whenever you wake your mobile screen, pausing decoding immediately upon unlock for 0% background battery drain.",
            },
          },
          {
            "@type": "Question",
            name: "Does VividWake video wallpaper drain mobile battery?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No! VividWake utilizes Android's native MediaCodec hardware pipeline. The video only plays while the lock screen is active (typically 2-4 seconds) and consumes 0.0% background battery when the screen is off or while using apps.",
            },
          },
          {
            "@type": "Question",
            name: "How do I download and install VividWake APK on Android?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Download VividWake APK directly from vividwake.gksky.in. In Chrome, tap 'Download anyway', open your downloads, enable 'Allow from this source', and tap 'Install anyway' on Google Play Protect. Launch VividWake and tap 'Apply to Lock Screen' to start enjoying dynamic 4K video wallpapers.",
            },
          },
          {
            "@type": "Question",
            name: "Do VividWake dynamic video wallpapers work offline?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes! Once you download a dynamic video wallpaper from VividWake's Explore Store, the 60 FPS master file is encrypted and saved in your device's offline vault, looping seamlessly without requiring any mobile data.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" className="h-full antialiased dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#06090e] text-slate-100 selection:bg-teal-500 selection:text-black">
        {children}
        <WebAnalyticsTracker />
      </body>
    </html>
  );
}
