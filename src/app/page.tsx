"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  FiDownload,
  FiShield,
  FiCheckCircle,
  FiAlertTriangle,
  FiSmartphone,
  FiZap,
  FiCpu,
  FiBatteryCharging,
  FiLock,
  FiChevronDown,
  FiChevronUp,
  FiChevronLeft,
  FiChevronRight,
  FiPause,
  FiPlay,
  FiArrowRight,
  FiHelpCircle,
  FiLayers,
  FiStar,
  FiHeart,
  FiFastForward,
  FiCamera,
  FiImage,
  FiX,
  FiXCircle,
  FiCheck,
  FiAward,
  FiGrid,
  FiShoppingBag,
  FiEye,
  FiVolume2,
  FiVolumeX,
  FiRefreshCw,
  FiMaximize2,
  FiSliders,
  FiWifi,
  FiMoon
} from "react-icons/fi";

type WallpaperKey = "lucia" | "wheelie" | "sabrina";

interface WallpaperItem {
  id: WallpaperKey;
  tag: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Gaming" | "Music & Pop Culture" | "Aesthetic";
  videoUrl: string;
  posterUrl: string;
  fallbackImage: string;
  resolution: string;
  framerate: string;
  fileSize: string;
  codec: string;
  duration: string;
  accentColor: string;
  glowColor: string;
}

const WALLPAPERS: Record<WallpaperKey, WallpaperItem> = {
  lucia: {
    id: "lucia",
    tag: "DROP #01 • VIRAL HIT",
    badge: "GTA VI 4K 60FPS",
    title: "GTA VI — Lucia Hypnotic Gaze",
    subtitle: "Vice City Midnight Gaze with Falling Embers",
    description:
      "The viral 4K portrait loop of Lucia from Grand Theft Auto VI. Featuring her intense hazel eye gaze, wind-swept brunette hair, layered diamond necklaces, and atmospheric floating embers. Rendered at 60 FPS in 1080×1920 vertical portrait for seamless mobile lock screen immersion.",
    category: "Gaming",
    videoUrl: "/videos/lucia_portrait_loop.mp4",
    posterUrl: "/videos/lucia_portrait_poster.jpg",
    fallbackImage: "/guide/step5_lockscreen_lucia.png",
    resolution: "1080 × 1920 (9:16)",
    framerate: "60 FPS Native",
    fileSize: "1.43 MB (FastStream)",
    codec: "H.264 / AVC (HW Accelerated)",
    duration: "9.8s Infinite Loop",
    accentColor: "from-amber-500 to-amber-600",
    glowColor: "rgba(245, 158, 11, 0.35)",
  },
  wheelie: {
    id: "wheelie",
    tag: "DROP #02 • HIGH ACTION",
    badge: "ACTION 60FPS",
    title: "GTA VI — Jason & Lucia Vice City Duo",
    subtitle: "Highway Wheelie Across Neon Ocean Drive",
    description:
      "High-octane motorcycle action on the neon-lit highway of Vice City. Jason and Lucia pulling off a high-speed wheelie under palm trees and retro street lamps. Seamlessly looped with zero cut stutter, engineered for AMOLED high-refresh-rate displays.",
    category: "Gaming",
    videoUrl: "/videos/lucia_wheelie_loop.mp4",
    posterUrl: "/videos/lucia_wheelie_poster.jpg",
    fallbackImage: "/guide/lucia_wheelie.jpg",
    resolution: "1080 × 1920 (9:16)",
    framerate: "60 FPS Native",
    fileSize: "3.82 MB (FastStream)",
    codec: "H.264 / AVC (HW Accelerated)",
    duration: "7.6s Infinite Loop",
    accentColor: "from-sky-500 to-teal-500",
    glowColor: "rgba(14, 165, 233, 0.35)",
  },
  sabrina: {
    id: "sabrina",
    tag: "DROP #03 • VIRAL MUSIC",
    badge: "MUSIC VIRAL",
    title: "Sabrina Carpenter — Taste Kiss Scene",
    subtitle: "Viral Pop-Culture Dynamic Sensation",
    description:
      "The acclaimed 60 FPS dynamic video wallpaper of Sabrina Carpenter from her viral 'Taste' music video. Perfectly framed for vertical smartphone displays with ultra-vivid color saturation and seamless audio-visual loop cadence.",
    category: "Music & Pop Culture",
    videoUrl: "/videos/sabrina_carpenter_loop.mp4",
    posterUrl: "/videos/sabrina_carpenter_poster.jpg",
    fallbackImage: "/guide/step4_lockscreen_sabrina.png",
    resolution: "1080 × 1920 (9:16)",
    framerate: "60 FPS Native",
    fileSize: "3.72 MB (FastStream)",
    codec: "H.264 / AVC (HW Accelerated)",
    duration: "14.1s Infinite Loop",
    accentColor: "from-rose-500 to-pink-600",
    glowColor: "rgba(244, 63, 94, 0.35)",
  },
};

const WALLPAPER_KEYS: WallpaperKey[] = ["lucia", "wheelie", "sabrina"];

export default function Home() {
  const [activeKey, setActiveKey] = useState<WallpaperKey>("lucia");
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isScreenLocked, setIsScreenLocked] = useState(false);
  const [beforeAfterChoice, setBeforeAfterChoice] = useState<"lucia" | "sabrina">("lucia");
  const [activeOemTab, setActiveOemTab] = useState<"motorola" | "samsung" | "xiaomi" | "oneplus" | "pixel">("motorola");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeStoreStep, setActiveStoreStep] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState("09:41");
  const [currentDate, setCurrentDate] = useState("Wednesday, Nov 18");

  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const showcaseVideoRef = useRef<HTMLVideoElement | null>(null);

  // Update clock realistically
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, "0");
      const mins = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}:${mins}`);
      const options: Intl.DateTimeFormatOptions = { weekday: "long", month: "short", day: "numeric" };
      setCurrentDate(now.toLocaleDateString("en-US", options));
    };
    updateClock();
    const timer = setInterval(updateClock, 30000);
    return () => clearInterval(timer);
  }, []);

  // Handle hero video play/pause sync
  useEffect(() => {
    if (heroVideoRef.current) {
      if (isPlaying && !isScreenLocked) {
        heroVideoRef.current.play().catch(() => {});
      } else {
        heroVideoRef.current.pause();
      }
    }
  }, [isPlaying, isScreenLocked, activeKey]);

  const currentWallpaper = WALLPAPERS[activeKey];

  const handleNextWallpaper = () => {
    const idx = WALLPAPER_KEYS.indexOf(activeKey);
    setActiveKey(WALLPAPER_KEYS[(idx + 1) % WALLPAPER_KEYS.length]);
  };

  const handlePrevWallpaper = () => {
    const idx = WALLPAPER_KEYS.indexOf(activeKey);
    setActiveKey(WALLPAPER_KEYS[(idx - 1 + WALLPAPER_KEYS.length) % WALLPAPER_KEYS.length]);
  };

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
    if (heroVideoRef.current) {
      heroVideoRef.current.muted = !isMuted;
    }
    if (showcaseVideoRef.current) {
      showcaseVideoRef.current.muted = !isMuted;
    }
  };

  const toggleLockScreenSimulation = () => {
    setIsScreenLocked((prev) => !prev);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const storeSteps = [
    {
      step: 1,
      tag: "EXPLORE STORE",
      title: "Open VividWake & Browse Cloud Catalog",
      desc: "Open VividWake on your Android phone and switch to the 'Explore Store' tab. Browse our cloud catalog of dynamic 4K video wallpapers curated specifically for mobile lock screens.",
      tip: "Every wallpaper in the store is dynamic and hardware-tested on physical Android devices.",
      image: "/guide/step2_explore_store_clean.png",
      caption: "VividWake Cloud Catalog of 4K Dynamic Wallpapers",
    },
    {
      step: 2,
      tag: "STREAM & DOWNLOAD",
      title: "Tap 'Download' to Store in Device Vault",
      desc: "Select GTA VI Lucia, Jason & Lucia Vice City Duo, or Sabrina Carpenter. Tap the gold 'Download' button to stream the 60 FPS master video file directly into your offline vault.",
      tip: "Dynamic wallpapers are cached locally in an encrypted vault, so they play 100% offline with zero data usage.",
      image: "/guide/step2_explore_store_lucia.png",
      caption: "High-Speed CDN Video Stream & 1-Tap Offline Vaulting",
    },
    {
      step: 3,
      tag: "SYSTEM PREVIEW",
      title: "Instant Native Live Wallpaper Preview",
      desc: "VividWake automatically invokes Android's native Live Wallpaper Engine. You get a real-time live preview of the 60 FPS dynamic video loop playing on your display. Tap 'Set wallpaper' at the bottom.",
      tip: "Utilizes OpenGL ES 3.0 hardware rendering pipeline for zero touch latency.",
      image: "/guide/step3_fresh_launch.png",
      caption: "Android Native Live Wallpaper Picker Preview",
    },
    {
      step: 4,
      tag: "APPLY DESTINATION",
      title: "Choose 'Home screen and lock screen'",
      desc: "When the Android destination dialog appears, select 'Home screen and lock screen' (or lock screen only). This activates VividWake's video engine on your phone's power button wake events.",
      tip: "The video plays seamlessly the moment you wake the phone and pauses automatically the millisecond you unlock.",
      image: "/guide/step3_app_screen.png",
      caption: "VividWake Wallpaper Destination Configuration",
    },
    {
      step: 5,
      tag: "OFFLINE VAULT",
      title: "Verified Active in 'My Wallpapers'",
      desc: "Switch back to the 'My Wallpapers' tab. Your newly activated dynamic video wallpaper is marked with the bright green '✓ ACTIVE' badge. Switch between your downloaded video wallpapers anytime in 1 tap.",
      tip: "Store multiple dynamic video wallpapers offline without redownloading.",
      image: "/guide/step1_my_wallpapers.png",
      caption: "VividWake Offline Vault with Active Dynamic Wallpaper",
    },
    {
      step: 6,
      tag: "LIVE ON PHONE",
      title: "Wake Up to Hypnotic 60 FPS Motion!",
      desc: "Press your phone's power button to lock the screen, then tap or press it again to wake it up. Behold the hypnotic 60 FPS dynamic video loop playing seamlessly on your physical lock screen!",
      tip: "Verified live on Motorola HelloUI, Samsung OneUI, Google Pixel, Xiaomi HyperOS, and OnePlus.",
      image: "/guide/step5_lockscreen_lucia.png",
      caption: "Live 60 FPS Dynamic Video Wallpaper on Physical Device",
    },
  ];

  const oemGuides = {
    motorola: {
      brand: "Motorola (HelloUI / Clean AOSP)",
      icon: <FiSmartphone className="text-teal-400 text-sm" />,
      steps: [
        "Tap 'Download VividWake APK' and select 'Download anyway' in Chrome.",
        "Open Downloads, tap 'vividwake.apk', and enable 'Allow from this source'.",
        "On Google Play Protect, tap 'More details' -> 'Install anyway'.",
        "Launch VividWake, pick your favorite dynamic video wallpaper, and tap 'Apply to Lock Screen'.",
      ],
    },
    samsung: {
      brand: "Samsung (OneUI 6.0 / 6.1)",
      icon: <FiStar className="text-amber-400 text-sm" />,
      steps: [
        "Download APK -> open via 'My Files' -> 'Downloads'.",
        "If Samsung Auto Blocker is ON: Settings -> Security & Privacy -> Auto Blocker -> Temporarily toggle OFF.",
        "Allow installation from Chrome/My Files, then tap 'Install anyway' on Google Play Protect.",
        "Open VividWake -> Settings -> Battery -> Set to 'Unrestricted' for silky-smooth 60fps video playback.",
      ],
    },
    xiaomi: {
      brand: "Xiaomi / POCO / Redmi (HyperOS / MIUI)",
      icon: <FiZap className="text-amber-400 text-sm" />,
      steps: [
        "Download APK -> In Package Installer, check 'I am aware of possible risks' after the 10-second countdown.",
        "Tap 'OK' -> Tap 'More details' on Play Protect -> 'Install anyway'.",
        "Long-press VividWake app icon -> App info -> Enable 'Autostart' and set Battery Saver to 'No restrictions'.",
        "Apply your 60 FPS dynamic video wallpaper in 1 tap.",
      ],
    },
    oneplus: {
      brand: "OnePlus / Realme / OPPO (OxygenOS / ColorOS)",
      icon: <FiFastForward className="text-rose-400 text-sm" />,
      steps: [
        "Download APK -> Tap 'Install' -> Tap 'Settings' -> Enable 'Allow app installs from this source'.",
        "Tap 'Install anyway' on the security scan prompt.",
        "Go to App info -> Battery -> Enable 'Allow background activity'.",
        "Open VividWake and choose either Lucia or Sabrina for instant dynamic video wallpaper setup.",
      ],
    },
    pixel: {
      brand: "Google Pixel (Android 14 / 15)",
      icon: <FiShield className="text-sky-400 text-sm" />,
      steps: [
        "Download APK in Chrome -> Tap 'Download anyway'.",
        "Tap notification -> Settings -> Enable 'Allow from this source'.",
        "On Play Protect prompt, tap 'More details' -> 'Install anyway'.",
        "Pixel native wallpaper chooser will open -> Select 'Home and lock screen'.",
      ],
    },
  };

  const faqs = [
    {
      q: "What makes VividWake different from static wallpaper apps?",
      a: "VividWake is built exclusively for mobile dynamic video wallpapers. Static wallpapers are dead 2D pictures with 0 FPS. VividWake turns your phone screen into a living cinematic experience, playing hardware-decoded 60 FPS video loops every time you wake your mobile, with zero wake delay and zero battery drain.",
    },
    {
      q: "Will VividWake dynamic video wallpapers drain my mobile battery?",
      a: "No! Unlike unoptimized apps, VividWake utilizes Android's hardware MediaCodec and OpenGL ES 3.0 pipelines. The video only renders during lock screen wake (typically 2-4 seconds) and instantly pauses decoding the millisecond the screen turns off or unlocks into your apps. It consumes 0.0% background battery.",
    },
    {
      q: "Why does Chrome display 'File might be harmful' when downloading VividWake?",
      a: "This is Google Chrome's standard automated warning for every single .apk file downloaded outside the Google Play Store. It simply indicates an application installer file. VividWake contains zero malware, zero tracking ads, and zero spyware. Tap 'Download anyway' to proceed safely.",
    },
    {
      q: "Can I download multiple dynamic video wallpapers and use them offline?",
      a: "Yes! When you download a wallpaper in VividWake, the master 60 FPS video stream is cached locally in your phone's offline vault. You can switch between GTA VI Lucia, Jason & Lucia Duo, and Sabrina Carpenter anytime with a single tap, without using any internet data.",
    },
    {
      q: "Which Android versions and smartphone brands are supported?",
      a: "VividWake supports Android 9.0 up to the latest Android 15. It has been extensively tested on Motorola HelloUI, Samsung OneUI, Google Pixel, Xiaomi HyperOS, OnePlus OxygenOS, OPPO ColorOS, and Vivo FuntouchOS.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#06090e] text-slate-100 selection:bg-teal-500 selection:text-black">
      {/* Top Banner Announcement */}
      <aside aria-label="Official Release Announcement" className="bg-gradient-to-r from-emerald-950/80 via-teal-900/60 to-amber-950/80 border-b border-teal-500/20 px-4 py-2 text-center text-xs md:text-sm flex items-center justify-center gap-2">
        <span className="bg-emerald-600 text-white px-2.5 py-0.5 rounded-full text-[11px] font-black shadow-sm">
          VIVIDWAKE v1.0.0
        </span>
        <span className="text-slate-200">
          Official Release — 4K Dynamic Video Wallpapers for Mobile Android Lock Screen!
        </span>
      </aside>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#06090e]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-teal-500/40 shadow-lg shadow-teal-500/20 flex items-center justify-center bg-slate-900 group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="VividWake Dynamic Wallpapers Logo"
                width={28}
                height={28}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="text-xl font-black tracking-tight text-white flex items-center gap-1">
                <span>Vivid</span>
                <span className="text-teal-400">Wake</span>
                <span className="text-[10px] bg-teal-500/20 text-teal-300 border border-teal-500/30 px-1.5 py-0.2 rounded font-mono ml-1">
                  DYNAMIC
                </span>
              </div>
              <div className="text-[10px] text-teal-400 font-bold tracking-wider uppercase">
                4K Video Wallpapers for Mobile
              </div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-400">
            <a
              href="#simulator"
              onClick={(e) => scrollToSection(e, "simulator")}
              className="hover:text-teal-300 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Live Phone Loop</span>
            </a>
            <a
              href="#showcase"
              onClick={(e) => scrollToSection(e, "showcase")}
              className="hover:text-teal-300 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Dynamic Wallpapers</span>
            </a>
            <a
              href="#dynamic-vs-static"
              onClick={(e) => scrollToSection(e, "dynamic-vs-static")}
              className="hover:text-teal-300 transition-colors cursor-pointer"
            >
              Dynamic vs Static
            </a>
            <a
              href="#store-walkthrough"
              onClick={(e) => scrollToSection(e, "store-walkthrough")}
              className="hover:text-teal-300 transition-colors cursor-pointer font-bold text-slate-200"
            >
              Store & Setup
            </a>
            <a
              href="#tech-specs"
              onClick={(e) => scrollToSection(e, "tech-specs")}
              className="hover:text-teal-300 transition-colors cursor-pointer"
            >
              0% Battery Tech
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, "faq")}
              className="hover:text-teal-300 transition-colors cursor-pointer"
            >
              FAQ
            </a>
          </nav>

          <a
            href="/api/download"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white px-5 py-2.5 rounded-xl text-sm font-extrabold shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FiDownload className="text-lg" />
            <span>Download VividWake APK</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION: PRISTINE SEAMLESS VIDEO PRESENTATION */}
      <section
        id="simulator"
        className="relative overflow-hidden pt-10 pb-20 px-6 text-center border-b border-white/5"
      >
        {/* Ambient Backlight Glow Matching Wallpaper Theme */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 opacity-60"
          style={{ background: currentWallpaper.glowColor }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* SEO Super Tag */}
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 px-4 py-1.5 rounded-full text-xs font-semibold text-teal-300 mb-6">
            <FiZap className="text-sm text-teal-400" />
            <span>VividWake Official • #1 Mobile Dynamic Video Wallpaper Engine for Android</span>
          </div>

          {/* Main H1 Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-5 leading-[1.08]">
            Cinematic 4K Dynamic <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-amber-300">
              Video Wallpapers for Mobile
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Ditch dull static pictures forever. <strong>VividWake</strong> brings seamless 60 FPS hardware-decoded video loops to your mobile lock screen with <strong>0% background battery drain</strong> and <strong>zero wake lag</strong>.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="/api/download"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl text-base font-extrabold shadow-xl shadow-emerald-600/40 hover:shadow-emerald-600/60 transition-all hover:scale-105 active:scale-95"
            >
              <FiDownload className="text-xl" />
              <span>Download VividWake APK</span>
              <span className="text-xs font-semibold text-emerald-100 ml-1 opacity-90">v1.0.0 • 19.7 MB</span>
            </a>

            <a
              href="#showcase"
              onClick={(e) => scrollToSection(e, "showcase")}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 px-7 py-4 rounded-xl text-base font-semibold backdrop-blur-md transition-all cursor-pointer"
            >
              <span>Explore Dynamic Drops</span>
              <FiChevronDown className="text-lg text-teal-400" />
            </a>
          </div>

          {/* PRISTINE MOBILE SMARTPHONE MOCKUP WITH SEAMLESS LIVE VIDEO LOOP */}
          <div className="max-w-xl mx-auto">
            {/* Phone Switcher Tabs */}
            <div className="flex items-center justify-center gap-2 mb-6 overflow-x-auto pb-2 scrollbar-none">
              {WALLPAPER_KEYS.map((key) => {
                const item = WALLPAPERS[key];
                const isActive = activeKey === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveKey(key)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "bg-teal-500/25 text-teal-200 border border-teal-400/80 shadow-lg shadow-teal-500/20 scale-105"
                        : "bg-slate-900/80 text-slate-400 border border-white/10 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full ${isActive ? "bg-teal-400 animate-pulse" : "bg-slate-600"}`} />
                    <span>{item.title.split("—")[1]?.trim() || item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* REALISTIC SMARTPHONE CHASSIS */}
            <div className="relative mx-auto w-[290px] sm:w-[320px] md:w-[340px]">
              {/* Outer Phone Bezel with Titanium Finish */}
              <div className="relative rounded-[48px] p-3.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-[0_25px_80px_rgba(0,0,0,0.85)] border-[2px] border-slate-600/60 ring-1 ring-white/10">
                {/* Side volume and power buttons */}
                <div className="absolute -left-[5px] top-28 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
                <div className="absolute -left-[5px] top-42 w-[3px] h-10 bg-slate-600 rounded-l-sm" />
                <div className="absolute -right-[5px] top-32 w-[3px] h-14 bg-slate-600 rounded-r-sm" />

                {/* Inner Screen Display (19:9 Aspect Ratio) */}
                <div className="relative rounded-[38px] overflow-hidden bg-black aspect-[9/19.5] shadow-inner border border-black select-none">
                  {/* Punch Hole Camera Cutout */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-40 w-3.5 h-3.5 rounded-full bg-black ring-1 ring-white/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-900 ring-1 ring-blue-900/50" />
                  </div>

                  {/* Android Status Bar */}
                  <div className="absolute top-0 left-0 right-0 z-30 pt-3 px-6 flex items-center justify-between text-[11px] font-bold text-white tracking-wide drop-shadow-md">
                    <span>{currentTime}</span>
                    <div className="flex items-center gap-1.5 text-xs">
                      <FiWifi className="text-[12px]" />
                      <span className="text-[10px] font-mono">5G</span>
                      <div className="flex items-center gap-0.5">
                        <span className="text-[9px]">100%</span>
                        <div className="w-4 h-2.5 border border-white rounded-[2px] p-[1px] flex items-center">
                          <div className="w-full h-full bg-emerald-400 rounded-[1px]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* SEAMLESS PRISTINE VIDEO LOOP PLAYER */}
                  <div className="absolute inset-0 z-10 w-full h-full bg-black">
                    <video
                      key={currentWallpaper.videoUrl}
                      ref={heroVideoRef}
                      src={currentWallpaper.videoUrl}
                      poster={currentWallpaper.posterUrl}
                      autoPlay
                      loop
                      muted={isMuted}
                      playsInline
                      preload="auto"
                      disablePictureInPicture
                      controls={false}
                      className={`w-full h-full object-cover transition-opacity duration-300 ${
                        isScreenLocked ? "opacity-0" : "opacity-100"
                      }`}
                    />

                    {/* Simulating Screen Off / Black State */}
                    {isScreenLocked && (
                      <div className="absolute inset-0 bg-black flex flex-col items-center justify-center text-slate-500 z-20">
                        <FiMoon className="text-4xl text-slate-700 mb-2 animate-pulse" />
                        <div className="text-xs font-bold text-slate-600">Screen Sleep (0% Power)</div>
                        <div className="text-[10px] text-slate-700 mt-1">Tap 'Wake Phone' below to wake</div>
                      </div>
                    )}
                  </div>

                  {/* ANDROID LOCK SCREEN OVERLAY */}
                  {!isScreenLocked && (
                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 pointer-events-none">
                      {/* Top Clock and Date */}
                      <div className="pt-10 text-center drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                        <div className="text-[11px] font-semibold tracking-wider text-slate-200 uppercase mb-0.5">
                          {currentDate}
                        </div>
                        <div className="text-5xl sm:text-6xl font-light text-white tracking-tight font-sans">
                          {currentTime}
                        </div>
                        <div className="inline-flex items-center gap-1.5 mt-2 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-teal-300 border border-white/10">
                          <FiLock className="text-teal-400 text-xs" />
                          <span>VividWake Dynamic 60 FPS</span>
                        </div>
                      </div>

                      {/* Bottom Lock Screen Controls */}
                      <div className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                        <div className="text-center text-[10px] font-semibold text-slate-300/80 tracking-wider mb-4 animate-bounce">
                          Swipe up to unlock
                        </div>
                        <div className="flex items-center justify-between px-2">
                          <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-white text-sm shadow-lg">
                            <FiZap />
                          </div>
                          {/* Android bottom home bar */}
                          <div className="w-24 h-1 bg-white/80 rounded-full shadow-sm" />
                          <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/15 flex items-center justify-center text-white text-sm shadow-lg">
                            <FiCamera />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Badge floating on screen */}
                  <div className="absolute top-24 left-3 z-30">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-black px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow-md">
                      60 FPS LOOP
                    </span>
                  </div>
                </div>
              </div>

              {/* INTERACTIVE CONTROLS UNDER SIMULATOR */}
              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  onClick={toggleSound}
                  aria-label={isMuted ? "Unmute Dynamic Video" : "Mute Dynamic Video"}
                  className="px-3.5 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-teal-500/40 text-xs font-bold text-slate-200 flex items-center gap-2 cursor-pointer transition-colors shadow-md"
                >
                  {isMuted ? (
                    <>
                      <FiVolumeX className="text-slate-400 text-sm" />
                      <span>Audio Off</span>
                    </>
                  ) : (
                    <>
                      <FiVolume2 className="text-teal-400 text-sm animate-pulse" />
                      <span className="text-teal-300">Audio On</span>
                    </>
                  )}
                </button>

                <button
                  onClick={toggleLockScreenSimulation}
                  className={`px-3.5 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 cursor-pointer transition-colors shadow-md ${
                    isScreenLocked
                      ? "bg-teal-500 text-black border-teal-400 shadow-teal-500/30"
                      : "bg-slate-900 text-slate-200 border-white/10 hover:border-white/30"
                  }`}
                >
                  <FiLock className="text-sm" />
                  <span>{isScreenLocked ? "Wake Phone (Loop Starts)" : "Lock Phone (0% Drain)"}</span>
                </button>

                <button
                  onClick={handleNextWallpaper}
                  aria-label="Next Dynamic Wallpaper"
                  className="px-3 py-2 rounded-xl bg-slate-900 border border-white/10 hover:border-teal-500/40 text-xs font-bold text-slate-200 flex items-center gap-1.5 cursor-pointer transition-colors shadow-md"
                >
                  <span>Next</span>
                  <FiChevronRight className="text-sm" />
                </button>
              </div>

              {/* Wallpaper Quick Specs Pill */}
              <div className="mt-3 text-center">
                <div className="text-xs text-slate-400 font-medium">
                  Currently playing: <strong className="text-white">{currentWallpaper.title}</strong>
                </div>
                <div className="text-[11px] text-teal-400 font-mono mt-0.5">
                  {currentWallpaper.resolution} • {currentWallpaper.framerate} • {currentWallpaper.codec.split(" ")[0]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: WHY DYNAMIC WALLPAPERS FOR MOBILE (DYNAMIC VS STATIC) */}
      <section id="dynamic-vs-static" className="max-w-6xl mx-auto px-6 py-20 border-b border-white/5">
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
              The Evolution of Mobile Wallpapers
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Why Dynamic Video Beats Static Wallpapers
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-3">
              Standard static wallpapers are frozen in the past. VividWake turns your smartphone display into a living, responsive canvas every single time you wake your mobile screen.
            </p>

            {/* Selector */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setBeforeAfterChoice("lucia")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  beforeAfterChoice === "lucia"
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Compare GTA VI Lucia
              </button>
              <button
                onClick={() => setBeforeAfterChoice("sabrina")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  beforeAfterChoice === "sabrina"
                    ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Compare Sabrina Carpenter
              </button>
            </div>
          </div>

          {/* Side-by-Side Comparison Container */}
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* OLD WAY: STATIC WALLPAPER CARD */}
            <div className="bg-black/60 border border-rose-500/30 rounded-3xl p-6 text-center">
              <div className="inline-flex items-center gap-1.5 bg-rose-500/20 text-rose-300 border border-rose-500/40 px-3 py-1 rounded-full text-xs font-extrabold mb-4">
                <FiXCircle className="text-rose-400 text-sm" />
                <span>STATIC WALLPAPER (OLD WAY)</span>
              </div>
              <div className="text-base font-bold text-white mb-1">
                Dead 2D Static Picture
              </div>
              <p className="text-xs text-slate-400 mb-5">
                Standard flat PNG/JPG image. 0 motion, 0 framerate, lifeless locked screen.
              </p>

              <div className="w-56 sm:w-64 mx-auto rounded-[32px] overflow-hidden border-4 border-slate-700 shadow-2xl bg-black">
                <img
                  src="/guide/before_default_lockscreen.png"
                  alt="Static Mobile Wallpaper (Flat JPG)"
                  className="w-full h-auto block filter grayscale-[30%]"
                />
              </div>

              <div className="mt-5 flex flex-col gap-2 text-xs text-slate-400 text-left max-w-[240px] mx-auto">
                <div className="flex items-center gap-2 text-rose-400 font-semibold">
                  <FiX className="text-rose-400 flex-shrink-0" />
                  <span>0 FPS (Zero animation / motion)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <FiX className="text-slate-500 flex-shrink-0" />
                  <span>Flat colors, no dynamic highlights</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <FiX className="text-slate-500 flex-shrink-0" />
                  <span>Same repetitive boring display</span>
                </div>
              </div>
            </div>

            {/* NEW WAY: VIVIDWAKE DYNAMIC VIDEO WALLPAPER CARD */}
            <div className="bg-black/60 border border-emerald-500/40 rounded-3xl p-6 text-center shadow-[0_0_60px_rgba(16,185,129,0.18)]">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-extrabold mb-4">
                <FiZap className="text-emerald-400 text-sm" />
                <span>VIVIDWAKE DYNAMIC WALLPAPER</span>
              </div>
              <div className="text-base font-bold text-white mb-1">
                Hypnotic 60 FPS Video Loop
              </div>
              <p className="text-xs text-slate-400 mb-5">
                Living cinematic motion hardware-decoded the millisecond you press power!
              </p>

              <div className="w-56 sm:w-64 mx-auto rounded-[32px] overflow-hidden border-4 border-emerald-400 shadow-2xl shadow-emerald-500/30 bg-black">
                <img
                  src={
                    beforeAfterChoice === "lucia"
                      ? "/guide/step5_lockscreen_lucia.png"
                      : "/guide/step4_lockscreen_sabrina.png"
                  }
                  alt="VividWake Dynamic 4K Video Wallpaper on Android"
                  className="w-full h-auto block"
                />
              </div>

              <div className="mt-5 flex flex-col gap-2 text-xs text-slate-300 font-semibold text-left max-w-[240px] mx-auto">
                <div className="flex items-center gap-2 text-emerald-400">
                  <FiCheck className="text-emerald-400 flex-shrink-0" />
                  <span>60 FPS Fluid hardware-decoded loop</span>
                </div>
                <div className="flex items-center gap-2 text-teal-300">
                  <FiCheck className="text-teal-300 flex-shrink-0" />
                  <span>0.0% background battery consumption</span>
                </div>
                <div className="flex items-center gap-2 text-amber-300">
                  <FiCheck className="text-amber-300 flex-shrink-0" />
                  <span>Vibrant 4K AMOLED color grading</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FEATURED DYNAMIC VIDEO WALLPAPERS SHOWCASE */}
      <section id="showcase" className="max-w-6xl mx-auto px-6 py-20 border-b border-white/5">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            Curated 4K Video Master Drops
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Featured Mobile Dynamic Wallpapers
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-3">
            Hand-crafted 60 FPS vertical video wallpapers. Click any drop below to inspect technical specifications and live loop preview.
          </p>
        </div>

        {/* 3 Interactive Cards Grid */}
        <div className="grid sm:grid-cols-3 gap-5 mb-10">
          {WALLPAPER_KEYS.map((key) => {
            const item = WALLPAPERS[key];
            const isActive = activeKey === key;
            return (
              <button
                key={key}
                onClick={() => setActiveKey(key)}
                className={`text-left p-5 rounded-2xl transition-all cursor-pointer relative overflow-hidden border ${
                  isActive
                    ? "bg-slate-800/90 border-teal-400/80 shadow-xl shadow-teal-500/10 ring-1 ring-teal-400/30 scale-[1.02]"
                    : "bg-slate-900/60 border-white/10 hover:bg-slate-800/60 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-teal-400 flex items-center gap-1.5">
                    <FiStar className="text-xs" />
                    <span>{item.tag}</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                    {item.badge}
                  </span>
                </div>

                <div className="text-base font-bold text-white mb-1">{item.title}</div>
                <div className="text-xs text-slate-400 mb-3">{item.subtitle}</div>

                <div className="flex items-center gap-3 text-[11px] text-slate-400 font-mono">
                  <span>{item.resolution.split(" ")[0]}</span>
                  <span>•</span>
                  <span className="text-teal-300">{item.framerate}</span>
                  <span>•</span>
                  <span>{item.duration.split(" ")[0]}</span>
                </div>

                {isActive && (
                  <div className="mt-3 w-full h-1 bg-teal-400 rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* ACTIVE WALLPAPER DEEP-DIVE STAGE */}
        <div className="bg-slate-900/50 border border-teal-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-md">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Info Column */}
            <div>
              <div className="inline-block bg-teal-500/15 text-teal-300 border border-teal-500/30 px-3 py-1 rounded-full text-xs font-bold mb-4">
                {currentWallpaper.tag}
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                {currentWallpaper.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {currentWallpaper.description}
              </p>

              {/* Technical Specs Grid */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="bg-black/40 p-3.5 rounded-xl border border-white/5">
                  <div className="text-[11px] text-slate-400">Resolution</div>
                  <div className="text-sm font-bold text-white font-mono">{currentWallpaper.resolution}</div>
                </div>
                <div className="bg-black/40 p-3.5 rounded-xl border border-white/5">
                  <div className="text-[11px] text-slate-400">Framerate</div>
                  <div className="text-sm font-bold text-teal-300 font-mono">{currentWallpaper.framerate}</div>
                </div>
                <div className="bg-black/40 p-3.5 rounded-xl border border-white/5">
                  <div className="text-[11px] text-slate-400">Hardware Codec</div>
                  <div className="text-sm font-bold text-white font-mono">{currentWallpaper.codec}</div>
                </div>
                <div className="bg-black/40 p-3.5 rounded-xl border border-white/5">
                  <div className="text-[11px] text-slate-400">Background Battery</div>
                  <div className="text-sm font-bold text-emerald-400 font-mono">0.00% (Zero Drain)</div>
                </div>
              </div>

              {/* Download Wallpaper in App CTA */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/api/download"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-black px-6 py-3.5 rounded-xl text-sm font-extrabold shadow-lg shadow-teal-500/20 transition-transform hover:scale-105 active:scale-95"
                >
                  <FiDownload className="text-base" />
                  <span>Download App & Set Dynamic Wallpaper</span>
                </a>
              </div>
            </div>

            {/* Video Preview Column */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-64 sm:w-72 rounded-[36px] overflow-hidden border-[5px] border-slate-700 shadow-2xl shadow-teal-500/15 bg-black relative group">
                <video
                  ref={showcaseVideoRef}
                  src={currentWallpaper.videoUrl}
                  poster={currentWallpaper.posterUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="w-full h-auto block object-cover"
                />

                {/* Overlaid video tag */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-teal-300 border border-white/10 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>60 FPS Seamless Loop</span>
                </div>
              </div>

              <div className="mt-3 text-xs text-slate-400 font-semibold flex items-center gap-2">
                <FiCamera className="text-teal-400" />
                <span>Live master preview rendered via MediaCodec</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: HOW TO DOWNLOAD & APPLY FROM EXPLORE STORE */}
      <section id="store-walkthrough" className="max-w-6xl mx-auto px-6 py-20 border-b border-white/5">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-300 mb-4">
            <FiShoppingBag className="text-sm" />
            <span>VIVIDWAKE APP SETUP • START TO FINISH</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            How to Set Dynamic Video Wallpapers
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-3">
            Experience complete simplicity. Follow each step below captured live from physical Android devices to download, stream, and set your 4K dynamic video lock screen in 60 seconds.
          </p>
        </div>

        {/* Step Selector Tabs */}
        <div className="flex justify-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {storeSteps.map((st, idx) => {
            const isActive = activeStoreStep === idx;
            return (
              <button
                key={st.step}
                onClick={() => setActiveStoreStep(idx)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-teal-500/20 text-teal-300 border border-teal-500/60 shadow-lg shadow-teal-500/10"
                    : "bg-slate-900/60 text-slate-400 border border-white/5 hover:bg-slate-800"
                }`}
              >
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                    isActive ? "bg-teal-400 text-black" : "bg-slate-800 text-slate-300"
                  }`}
                >
                  {st.step}
                </span>
                <span>{st.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Active Walkthrough Step Card */}
        <div className="bg-slate-900/60 border border-teal-500/20 rounded-3xl p-6 md:p-10 backdrop-blur-md mb-12 relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Step Explanation Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-teal-500 text-black px-2.5 py-0.5 rounded-md text-xs font-extrabold">
                  STEP {storeSteps[activeStoreStep].step} OF {storeSteps.length}
                </span>
                <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
                  {storeSteps[activeStoreStep].tag}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                {storeSteps[activeStoreStep].title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {storeSteps[activeStoreStep].desc}
              </p>

              {/* How It Works Tip */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-4 mb-8">
                <div className="flex items-start gap-2.5">
                  <FiCheck className="text-emerald-400 text-lg flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-normal">
                    <strong className="text-emerald-300">How It Works: </strong>
                    {storeSteps[activeStoreStep].tip}
                  </div>
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  disabled={activeStoreStep === 0}
                  onClick={() => setActiveStoreStep((p) => Math.max(0, p - 1))}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeStoreStep === 0
                      ? "bg-slate-800/40 text-slate-600 border border-white/5 cursor-not-allowed"
                      : "bg-slate-800 text-slate-200 border border-white/10 hover:bg-slate-700 cursor-pointer"
                  }`}
                >
                  <FiChevronLeft />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => setActiveStoreStep((p) => (p + 1) % storeSteps.length)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-teal-500 hover:bg-teal-400 text-black flex items-center gap-1.5 shadow-md shadow-teal-500/20 transition-all cursor-pointer"
                >
                  <span>{activeStoreStep === storeSteps.length - 1 ? "Start Over" : "Next Step"}</span>
                  <FiArrowRight />
                </button>
              </div>
            </div>

            {/* Smartphone Screenshot Preview */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-64 sm:w-72 rounded-[36px] overflow-hidden border-[5px] border-slate-700 shadow-2xl shadow-teal-500/10 bg-black">
                <img
                  src={storeSteps[activeStoreStep].image}
                  alt={storeSteps[activeStoreStep].caption}
                  className="w-full h-auto block"
                />
              </div>
              <div className="mt-3 text-xs text-slate-400 font-semibold flex items-center gap-1.5">
                <FiCamera className="text-teal-400" />
                <span>{storeSteps[activeStoreStep].caption}</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Visual Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {storeSteps.map((st, idx) => (
            <div
              key={st.step}
              onClick={() => setActiveStoreStep(idx)}
              className={`rounded-2xl p-4 border transition-all cursor-pointer flex flex-col justify-between ${
                activeStoreStep === idx
                  ? "bg-slate-800/90 border-teal-500/50 shadow-lg shadow-teal-500/10 ring-1 ring-teal-500/30"
                  : "bg-slate-900/60 border-white/5 hover:bg-slate-800/60 hover:border-white/15"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="bg-slate-800 text-teal-300 border border-teal-500/30 px-2 py-0.5 rounded text-[11px] font-black">
                    STEP {st.step}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    {st.tag}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white mb-2 line-clamp-1">{st.title}</h4>

                <div className="rounded-xl overflow-hidden border border-white/10 my-2.5 bg-black h-40">
                  <img src={st.image} alt={st.title} className="w-full h-full object-cover object-top" />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">{st.desc}</p>
              </div>

              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-teal-400 font-semibold">
                <span>View Step Details</span>
                <FiArrowRight />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: ZERO WAKE DELAY & 0% BATTERY DRAIN ENGINE */}
      <section id="tech-specs" className="max-w-6xl mx-auto px-6 py-20 border-b border-white/5">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            Proprietary Video Lock Screen Engine
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            How VividWake Achieves 0% Battery Drain
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-3">
            Built from the ground up on Android's native hardware decoder pipelines to ensure seamless 60 FPS playback with zero impact on device battery life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 text-2xl mb-4">
              <FiCpu />
            </div>
            <h3 className="text-base font-extrabold text-white mb-2">
              Hardware MediaCodec Acceleration
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Videos are decoded directly on your smartphone's dedicated hardware GPU and video DSP, bypassing CPU load completely for maximum efficiency.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl mb-4">
              <FiBatteryCharging />
            </div>
            <h3 className="text-base font-extrabold text-white mb-2">
              Instant Decode Suspension
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              The exact millisecond your screen turns off or unlocks into your home screen, the video engine suspends decoding. Consumes 0.0% background battery.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl mb-4">
              <FiZap />
            </div>
            <h3 className="text-base font-extrabold text-white mb-2">
              Zero Wake-Up Delay (0ms Lag)
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              OpenGL ES 3.0 texture caching preloads the first frame into VRAM so the dynamic video springs to life the instant you press the power button.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: STEP-BY-STEP APK INSTALLATION GUIDE */}
      <section id="install-steps" className="max-w-6xl mx-auto px-6 py-20 border-b border-white/5">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            60-Second Installation
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            How to Install VividWake APK on Android
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-2">
            Because VividWake is distributed directly without app store middleman fees, follow these standard sideload steps.
          </p>
        </div>

        {/* 5 Sequential Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Step 1 */}
          <div className="bg-slate-900/60 border border-amber-500/30 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-amber-600 text-white px-2 py-0.5 rounded-md text-xs font-black">
                  STEP 1
                </span>
                <span className="text-[11px] text-amber-300 font-bold">Chrome Prompt</span>
              </div>
              <h4 className="text-sm font-extrabold text-white mb-2">Tap 'Download anyway'</h4>
              <div className="bg-black/50 border border-white/10 rounded-xl p-3 my-3">
                <div className="mb-1"><FiAlertTriangle className="text-amber-400 text-xl" /></div>
                <div className="text-[11px] font-bold text-white mb-1">File might be harmful</div>
                <div className="text-[10px] text-slate-400 mb-2">Do you want to download vividwake.apk anyway?</div>
                <div className="text-right">
                  <span className="text-[10px] font-bold bg-sky-600 text-white px-2 py-1 rounded inline-flex items-center gap-1">
                    Download anyway <FiArrowRight className="text-xs" />
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-amber-300/90 leading-normal">
              Chrome flags all APK files. Tap <strong>Download anyway</strong> to proceed safely.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-900/60 border border-sky-500/30 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-sky-600 text-white px-2 py-0.5 rounded-md text-xs font-black">
                  STEP 2
                </span>
                <span className="text-[11px] text-sky-300 font-bold">Permissions</span>
              </div>
              <h4 className="text-sm font-extrabold text-white mb-2">Enable 'Allow from source'</h4>
              <div className="bg-black/50 border border-white/10 rounded-xl p-3 my-3">
                <div className="text-[10px] text-slate-400 mb-1">Install unknown apps</div>
                <div className="flex items-center justify-between bg-slate-800 p-2 rounded-lg">
                  <span className="text-[10px] text-white font-semibold">Allow from this source</span>
                  <div className="w-8 h-4 bg-emerald-500 rounded-full flex items-center p-0.5">
                    <div className="w-3 h-3 bg-white rounded-full ml-auto shadow-sm" />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-sky-300/90 leading-normal">
              Tap <strong>Settings</strong> <FiArrowRight className="inline mx-1 text-sky-400" /> toggle switch to <strong>ON</strong>.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-900/60 border border-teal-500/30 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-teal-600 text-white px-2 py-0.5 rounded-md text-xs font-black">
                  STEP 3
                </span>
                <span className="text-[11px] text-teal-300 font-bold">Play Protect</span>
              </div>
              <h4 className="text-sm font-extrabold text-white mb-2">Tap 'Install anyway'</h4>
              <div className="bg-black/50 border border-white/10 rounded-xl p-3 my-3">
                <div className="mb-1"><FiShield className="text-teal-400 text-xl" /></div>
                <div className="text-[11px] font-bold text-white mb-1">Unrecognized app</div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[10px] text-sky-400 underline font-semibold">More details ▾</span>
                  <span className="text-[10px] font-bold bg-emerald-600 text-white px-2 py-1 rounded">
                    Install anyway
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-teal-300/90 leading-normal">
              Tap <strong>More details</strong> <FiArrowRight className="inline mx-1 text-teal-400" /> click <strong>Install anyway</strong>.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-900/60 border border-emerald-500/30 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-md text-xs font-black">
                  STEP 4
                </span>
                <span className="text-[11px] text-emerald-300 font-bold">App Setup</span>
              </div>
              <h4 className="text-sm font-extrabold text-white mb-2">Launch VividWake</h4>
              <div className="rounded-xl overflow-hidden border border-white/10 my-3 bg-black">
                <img src="/guide/step3_app_screen.png" alt="App Setup Screen" className="w-full h-32 object-cover object-top" />
              </div>
            </div>
            <p className="text-[11px] text-emerald-300/90 leading-normal">
              Tap <strong>"Apply to Lock Screen"</strong> <FiArrowRight className="inline mx-1 text-emerald-400" /> choose <em>Home screen and lock screen</em>.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-slate-900/60 border border-purple-500/30 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-purple-600 text-white px-2 py-0.5 rounded-md text-xs font-black">
                  STEP 5
                </span>
                <span className="text-[11px] text-purple-300 font-bold">Instant Apply</span>
              </div>
              <h4 className="text-sm font-extrabold text-white mb-2">Enjoy 4K 60FPS</h4>
              <div className="rounded-xl overflow-hidden border border-white/10 my-3 bg-black">
                <img src="/guide/step5_lockscreen_lucia.png" alt="Lucia Lock Screen Live" className="w-full h-32 object-cover object-top" />
              </div>
            </div>
            <p className="text-[11px] text-purple-300/90 leading-normal">
              Lock your phone and wake it up to enjoy the cinematic 60 FPS loop!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: BRAND-SPECIFIC OEM OPTIMIZATION GUIDES */}
      <section className="max-w-6xl mx-auto px-6 py-20 border-b border-white/5">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            Multi-Brand Compatibility
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Smartphone OEM Optimization Guide
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-2">
            Select your phone manufacturer below for tailored battery and permissions settings.
          </p>
        </div>

        {/* Brand Tabs */}
        <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          {(["motorola", "samsung", "xiaomi", "oneplus", "pixel"] as const).map((key) => {
            const oem = oemGuides[key];
            const isActive = activeOemTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveOemTab(key)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-teal-500 text-black shadow-lg shadow-teal-500/20 font-black"
                    : "bg-slate-900 text-slate-400 border border-white/5 hover:bg-slate-800"
                }`}
              >
                {oem.icon}
                <span>{oem.brand.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-teal-400 text-sm font-bold mb-4">
            {oemGuides[activeOemTab].icon}
            <span>{oemGuides[activeOemTab].brand} Setup Steps</span>
          </div>
          <div className="space-y-3">
            {oemGuides[activeOemTab].steps.map((st, i) => (
              <div key={i} className="flex items-start gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
                <span className="w-5 h-5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <span className="text-xs sm:text-sm text-slate-300">{st}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20 border-b border-white/5">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-2">
            Everything you need to know about VividWake dynamic video wallpapers for mobile.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-800/40"
                >
                  <span className="text-sm sm:text-base font-bold text-white">{faq.q}</span>
                  {isOpen ? (
                    <FiChevronUp className="text-teal-400 text-lg flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="text-slate-400 text-lg flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA: DOWNLOAD VIVIDWAKE APK */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="bg-gradient-to-b from-teal-950/40 to-slate-900/80 border border-teal-500/30 rounded-3xl p-8 md:p-14 relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/40 px-3.5 py-1 rounded-full text-xs font-bold text-teal-300 mb-4">
              <FiZap />
              <span>UPGRADE YOUR MOBILE LOCK SCREEN TODAY</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Ready for VividWake Dynamic Wallpapers?
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
              Download the official VividWake APK directly. 100% free, zero ads, zero middleman fees, and instant access to our entire 4K dynamic video cloud catalog.
            </p>

            <a
              href="/api/download"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 text-black px-9 py-4 rounded-xl text-base font-black shadow-xl shadow-teal-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              <FiDownload className="text-xl" />
              <span>Download VividWake APK (v1.0.0)</span>
            </a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <FiCheckCircle className="text-teal-400" />
                <span>100% Free & Safe</span>
              </span>
              <span className="flex items-center gap-1.5">
                <FiShield className="text-emerald-400" />
                <span>Zero Malware / Spyware</span>
              </span>
              <span className="flex items-center gap-1.5">
                <FiZap className="text-amber-400" />
                <span>0% Background Battery</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#03060a] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden ring-1 ring-teal-500/40 flex items-center justify-center bg-slate-900">
              <Image src="/logo.png" alt="VividWake Logo" width={20} height={20} className="object-contain" />
            </div>
            <div>
              <div className="text-base font-extrabold text-white">
                Vivid<span className="text-teal-400">Wake</span>
              </div>
              <div className="text-[10px] text-slate-500 font-mono">vividwake.gksky.in</div>
            </div>
          </div>

          <div className="text-xs text-slate-500 text-center md:text-right">
            © 2026 VividWake. All rights reserved. Dynamic video wallpapers for mobile Android devices.
          </div>
        </div>
      </footer>
    </div>
  );
}
