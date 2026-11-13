"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  FiDownload,
  FiShield,
  FiCheckCircle,
  FiAlertTriangle,
  FiSettings,
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
  FiExternalLink,
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
  FiPlayCircle,
  FiActivity,
  FiShoppingBag,
  FiEye
} from "react-icons/fi";

export default function Home() {
  const wallpaperKeys = ["lucia", "sabrina", "wheelie"] as const;
  const [activeWallpaperTab, setActiveWallpaperTab] = useState<"lucia" | "sabrina" | "wheelie">("lucia");
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [beforeAfterChoice, setBeforeAfterChoice] = useState<"lucia" | "sabrina">("lucia");
  const [activeOemTab, setActiveOemTab] = useState<"motorola" | "samsung" | "xiaomi" | "oneplus" | "pixel">("motorola");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeStoreStep, setActiveStoreStep] = useState<number>(0);

  const storeSteps = [
    {
      step: 1,
      tag: "EXPLORE STORE",
      title: "Switch to 'Explore Store' Tab",
      desc: "Open VividWake on your Android device and tap the 'Explore Store' tab on the top segmented bar to load the real-time cloud catalog of viral 4K video wallpapers.",
      tip: "You can search drops by keywords or filter by categories like Gaming, Celebrity, and Aesthetics.",
      image: "/guide/store_step1_catalog.png",
      caption: "Explore Store Cloud Catalog Interface",
      accent: "teal"
    },
    {
      step: 2,
      tag: "CHOOSE & DOWNLOAD",
      title: "Select Wallpaper & Tap 'Download'",
      desc: "Scroll through curated drops including GTA VI Lucia Intense Portrait (7.02 MB), Sabrina Carpenter Taste (26.22 MB), or Lucia & Jason Wheelie (10.41 MB). Tap the purple 'Download' button to stream the 60fps MP4 master directly to your offline vault.",
      tip: "Files are stored locally in an encrypted vault, so they play 100% offline without using your mobile data.",
      image: "/guide/store_step2_browse.png",
      caption: "Real-Time 4K Catalog with 1-Tap Download",
      accent: "amber"
    },
    {
      step: 3,
      tag: "SYSTEM PREVIEW",
      title: "Tap 'Set Wallpaper' in Live Picker",
      desc: "As soon as the download finishes, VividWake automatically opens Android's native Live Wallpaper Picker. You can preview the 60 FPS video loop rendering smoothly on your screen. Tap 'Set wallpaper' at the bottom.",
      tip: "Android uses hardware OpenGL ES 3.0 decoding for instant 0ms latency with zero lag.",
      image: "/guide/store_step3_set_wallpaper_dialog.png",
      caption: "Native Android 15 Live Wallpaper Preview",
      accent: "purple"
    },
    {
      step: 4,
      tag: "APPLY DESTINATION",
      title: "Choose 'Home screen and lock screen'",
      desc: "When the system destination prompt appears, select 'Home screen and lock screen' (or lock screen only). This tells Android to bind VividWake's video engine to your power button wake events.",
      tip: "The video plays seamlessly on wake and instantly pauses decoding when unlocked, resulting in 0.0% background battery drain.",
      image: "/guide/store_step4_choose_destination.png",
      caption: "Android Destination Selector Dialog",
      accent: "sky"
    },
    {
      step: 5,
      tag: "PERMANENT VAULT",
      title: "Verified Active in 'My Wallpapers'",
      desc: "VividWake returns to the 'My Wallpapers' tab displaying your newly downloaded wallpaper marked with the bright green '✓ ACTIVE' badge. Your wallpaper is permanently saved on device and ready to switch anytime with 1 tap.",
      tip: "Download multiple wallpapers and switch between them instantly without waiting or re-downloading.",
      image: "/guide/store_step5_my_wallpapers_active.png",
      caption: "Offline Vault with Active Green Status Badge",
      accent: "emerald"
    },
    {
      step: 6,
      tag: "LIVE ON PHONE",
      title: "Lock Your Phone & Wake Up to 4K Motion!",
      desc: "Press your phone's power button to lock the screen, then press it again to wake it up. Behold the hypnotic 60 FPS native video loop playing live on your phone lock screen!",
      tip: "Tested and verified live on Motorola HelloUI (Android 15), Samsung OneUI, Google Pixel, Xiaomi HyperOS, and OnePlus.",
      image: "/guide/store_step6_live_lockscreen.png",
      caption: "Live 60 FPS Wallpaper Running on Physical Phone",
      accent: "teal"
    }
  ];

  useEffect(() => {
    if (isCarouselPaused) return;
    const interval = setInterval(() => {
      setActiveWallpaperTab((prev) => {
        const idx = wallpaperKeys.indexOf(prev);
        return wallpaperKeys[(idx + 1) % wallpaperKeys.length];
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isCarouselPaused]);

  const handleNextWallpaper = () => {
    setActiveWallpaperTab((prev) => {
      const idx = wallpaperKeys.indexOf(prev);
      return wallpaperKeys[(idx + 1) % wallpaperKeys.length];
    });
  };

  const handlePrevWallpaper = () => {
    setActiveWallpaperTab((prev) => {
      const idx = wallpaperKeys.indexOf(prev);
      return wallpaperKeys[(idx - 1 + wallpaperKeys.length) % wallpaperKeys.length];
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
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
        behavior: "smooth"
      });
    }
  };

  const oemGuides: Record<
    "motorola" | "samsung" | "xiaomi" | "oneplus" | "pixel",
    { brand: string; icon: React.ReactNode; steps: string[] }
  > = {
    motorola: {
      brand: "Motorola (HelloUI / Clean AOSP)",
      icon: <FiSmartphone className="text-teal-400 text-sm" />,
      steps: [
        "Tap 'Download VividWake APK' and tap 'Download anyway' in Chrome.",
        "Open Chrome Downloads, tap 'VividWake-v1.0.apk', and tap 'Settings' -> enable 'Allow from this source'.",
        "On the Play Protect dialog, tap 'More details' -> 'Install anyway'.",
        "Launch VividWake, tap 'Apply to Lock Screen', and select 'Home screen and lock screen'."
      ]
    },
    samsung: {
      brand: "Samsung (OneUI 6.0 / 6.1)",
      icon: <FiStar className="text-amber-400 text-sm" />,
      steps: [
        "Download APK and open via 'My Files' -> 'Downloads' or Chrome notifications.",
        "If Samsung 'Auto Blocker' is enabled: go to Settings -> Security and privacy -> Auto Blocker -> Temporarily toggle OFF.",
        "Allow installation from Chrome/My Files, then tap 'Install anyway' on Google Play Protect.",
        "Open VividWake -> Settings -> Battery -> Set to 'Unrestricted' for uninterrupted smooth 60fps playback."
      ]
    },
    xiaomi: {
      brand: "Xiaomi / POCO / Redmi (HyperOS / MIUI)",
      icon: <FiZap className="text-amber-400 text-sm" />,
      steps: [
        "Download APK -> In Package Installer, check 'I am aware of the possible risks' after the 10-second countdown.",
        "Tap 'OK' -> Tap 'More details' on Play Protect -> 'Install anyway'.",
        "Long-press VividWake app icon -> App info -> Enable 'Autostart' and set Battery Saver to 'No restrictions'.",
        "Set wallpaper via VividWake with 1-tap live application."
      ]
    },
    oneplus: {
      brand: "OnePlus / Realme / OPPO (OxygenOS / ColorOS)",
      icon: <FiActivity className="text-rose-400 text-sm" />,
      steps: [
        "Download APK -> Tap 'Install' -> Tap 'Settings' -> Enable 'Allow app installs from this source'.",
        "Tap 'Install anyway' on the security scan prompt.",
        "Go to App info -> Battery -> Enable 'Allow background activity' and 'Allow auto-launch'.",
        "Open VividWake and choose either Sabrina Carpenter or Lucia for immediate lock screen setup."
      ]
    },
    pixel: {
      brand: "Google Pixel (Android 14 / 15)",
      icon: <FiShield className="text-sky-400 text-sm" />,
      steps: [
        "Download APK in Chrome -> Tap 'Download anyway'.",
        "Tap notification -> Settings -> Enable 'Allow from this source'.",
        "When Play Protect prompt appears, tap 'More details' -> 'Install anyway'.",
        "Pixel native wallpaper chooser will open -> Select 'Home and lock screen'."
      ]
    }
  };

  const faqs = [
    {
      q: "Why does Chrome say 'File might be harmful'?",
      a: "This is Google Chrome's standard automated warning for EVERY .apk file downloaded outside the Google Play Store. It simply means the file is an application installer. VividWake contains ZERO malicious code, ZERO spyware, and ZERO tracking ads. Tap 'Download anyway' to safely proceed."
    },
    {
      q: "Why does Google Play Protect show 'Unrecognized app' or 'Blocked'?",
      a: "Google Play Protect displays this for all newly released direct APKs that use self-signed developer certificates. Because VividWake is distributed directly to users without Play Store middleman fees, Google flags it as 'unrecognized'. Simply tap 'More details' and click 'Install anyway' to complete the installation."
    },
    {
      q: "Will VividWake drain my phone battery?",
      a: "No! Unlike standard live wallpaper apps that continuously render in the background, VividWake's OpenGL ES engine automatically PAUSES decoding the exact millisecond your screen is locked or an app is in the foreground. It consumes 0.0% background battery."
    },
    {
      q: "Can I download both Sabrina Carpenter and GTA VI Lucia wallpapers?",
      a: "Yes! Both wallpapers come fully optimized in 4K 60FPS vertical format. You can switch between them with a single tap inside the 'My Wallpapers' or 'Explore Store' tabs."
    },
    {
      q: "How do I update VividWake in the future?",
      a: "VividWake features built-in version checking. When an update is ready, a clean in-app banner will notify you, allowing 1-tap download and seamless in-place upgrade without losing your downloaded wallpapers."
    }
  ];

  return (
    <div className="min-h-screen bg-[#06090e] text-slate-100 selection:bg-teal-500 selection:text-black">
      {/* Top Notification Announcement */}
      <div className="bg-gradient-to-r from-emerald-900/40 via-teal-900/30 to-amber-900/30 border-b border-teal-500/20 px-4 py-2 text-center text-xs md:text-sm flex items-center justify-center gap-2">
        <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-full text-xs font-bold shadow-sm">
          NEW v1.0.0
        </span>
        <span className="text-slate-200">
          Official Direct APK Release — GTA VI Lucia & Sabrina Carpenter 4K 60FPS Wallpapers available now!
        </span>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#06090e]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden ring-1 ring-teal-500/40 shadow-lg shadow-teal-500/20 flex items-center justify-center bg-slate-900">
              <Image
                src="/logo.png"
                alt="VividWake Logo"
                width={28}
                height={28}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-white">
                Vivid<span className="text-teal-400">Wake</span>
              </div>
              <div className="text-[10px] text-teal-400 font-semibold tracking-wider uppercase">
                Cinematic Lock Screen Engine
              </div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
            <a
              href="#before-after"
              onClick={(e) => scrollToSection(e, "before-after")}
              className="hover:text-teal-300 transition-colors cursor-pointer"
            >
              Before & After
            </a>
            <a
              href="#install-steps"
              onClick={(e) => scrollToSection(e, "install-steps")}
              className="hover:text-teal-300 transition-colors cursor-pointer"
            >
              Install Guide
            </a>
            <a
              href="#store-walkthrough"
              onClick={(e) => scrollToSection(e, "store-walkthrough")}
              className="hover:text-teal-300 transition-colors cursor-pointer font-bold text-slate-200"
            >
              Store & Setup Guide
            </a>
            <a
              href="#showcase"
              onClick={(e) => scrollToSection(e, "showcase")}
              className="hover:text-teal-300 transition-colors cursor-pointer"
            >
              Wallpapers
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
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FiDownload className="text-lg" />
            <span>Download APK (19.7 MB)</span>
          </a>
        </div>
      </header>

      {/* Hero Section: VISUAL FIRST APP SHOWCASE */}
      <section className="relative overflow-hidden pt-12 pb-16 px-6 text-center">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto mb-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 px-4 py-1.5 rounded-full text-xs font-semibold text-teal-300 mb-5">
            <FiShield className="text-sm" />
            <span>Verified Sideload APK • 100% Free & Safe • No Play Store Needed</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-4 leading-[1.08]">
            Cinematic 4K Video <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-amber-300">
              Lock Screens for Android
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
            Zero wake-up delay. 0% background battery drain. Real hardware-decoded 60 FPS video lock screen engine.
          </p>

          {/* Action Button */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="/api/download"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl text-base font-extrabold shadow-xl shadow-emerald-600/40 hover:shadow-emerald-600/60 transition-all hover:scale-105 active:scale-95"
            >
              <FiDownload className="text-xl" />
              <span>Download VividWake APK</span>
              <span className="text-xs font-semibold text-emerald-100 ml-1 opacity-90">v1.0.0 • 19.7 MB</span>
            </a>

            <a
              href="#install-steps"
              onClick={(e) => scrollToSection(e, "install-steps")}
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 px-7 py-4 rounded-xl text-base font-semibold backdrop-blur-md transition-all cursor-pointer"
            >
              <span>See Installation Steps</span>
              <FiChevronDown className="text-lg text-teal-400" />
            </a>
          </div>

          {/* TRIPLE PHONE APP INTERFACE SHOWCASE (IMAGE HEAVY) */}
          <div className="relative flex justify-center items-end gap-3 sm:gap-6 pt-4 pb-6 max-w-4xl mx-auto">
            {/* Phone 1: App Interface */}
            <div className="hidden sm:block w-52 md:w-60 transform -rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-30">
              <div className="rounded-[32px] overflow-hidden border-[5px] border-slate-800 shadow-2xl bg-black relative">
                <img
                  src="/guide/step3_app_screen.png"
                  alt="VividWake App Interface"
                  className="w-full h-auto block"
                />
                <div className="absolute top-3 left-3 bg-teal-500 text-black px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                  App Home
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-400 font-bold flex items-center justify-center gap-1.5">
                <FiSmartphone className="text-teal-400 text-sm" />
                <span>VividWake Manager</span>
              </div>
            </div>

            {/* Phone 2 (Center Hero): Active Lock Screen with Lucia 4K */}
            <div className="w-64 sm:w-72 md:w-80 transform scale-105 z-20 hover:scale-110 transition-all duration-300">
              <div className="rounded-[36px] overflow-hidden border-[6px] border-amber-400/80 shadow-[0_20px_60px_rgba(245,158,11,0.35)] bg-black relative">
                <img
                  src="/guide/step5_lockscreen_lucia.png"
                  alt="Lucia GTA VI Live Lock Screen"
                  className="w-full h-auto block"
                />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                  <FiAward className="text-black text-xs" />
                  <span>Active Lock Screen</span>
                </div>
              </div>
              <div className="mt-3 text-sm text-amber-300 font-extrabold flex items-center justify-center gap-1.5">
                <FiZap className="text-amber-400 text-base" />
                <span>GTA VI Lucia 4K 60FPS</span>
              </div>
            </div>

            {/* Phone 3: Explore Store Catalog */}
            <div className="hidden sm:block w-52 md:w-60 transform rotate-3 hover:rotate-0 transition-all duration-300 hover:scale-105 hover:z-30">
              <div className="rounded-[32px] overflow-hidden border-[5px] border-slate-800 shadow-2xl bg-black relative">
                <img
                  src="/guide/step2_explore_store_clean.png"
                  alt="Explore Store Catalog"
                  className="w-full h-auto block"
                />
                <div className="absolute top-3 left-3 bg-sky-500 text-black px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                  Store Catalog
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-400 font-bold flex items-center justify-center gap-1.5">
                <FiGrid className="text-sky-400 text-sm" />
                <span>Explore 4K Drops</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: BEFORE vs AFTER COMPARISON */}
      <section id="before-after" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
              Transform Your Phone
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Before vs After VividWake
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-2">
              See the immediate visual upgrade from dull static wallpapers to hardware-accelerated 60 FPS video loops.
            </p>

            {/* Choose After Wallpaper */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => setBeforeAfterChoice("lucia")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  beforeAfterChoice === "lucia"
                    ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Compare with GTA VI Lucia
              </button>
              <button
                onClick={() => setBeforeAfterChoice("sabrina")}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  beforeAfterChoice === "sabrina"
                    ? "bg-rose-500 text-white shadow-lg shadow-rose-500/20"
                    : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
              >
                Compare with Sabrina Carpenter
              </button>
            </div>
          </div>

          {/* Side-by-Side Comparison Container */}
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
            {/* BEFORE CARD */}
            <div className="bg-black/60 border border-rose-500/30 rounded-3xl p-6 text-center">
              <div className="inline-flex items-center gap-1.5 bg-rose-500/20 text-rose-300 border border-rose-500/40 px-3 py-1 rounded-full text-xs font-extrabold mb-4">
                <FiXCircle className="text-rose-400 text-sm" />
                <span>BEFORE VIVIDWAKE</span>
              </div>
              <div className="text-base font-bold text-white mb-2">
                Boring Static Lock Screen
              </div>
              <p className="text-xs text-slate-400 mb-5">
                Standard flat Android wallpaper. 0 motion, 0 aesthetic, lifeless display.
              </p>

              <div className="w-56 sm:w-64 mx-auto rounded-[32px] overflow-hidden border-4 border-slate-700 shadow-2xl bg-black">
                <img
                  src="/guide/before_default_lockscreen.png"
                  alt="Before: Default Static Lock Screen"
                  className="w-full h-auto block filter grayscale-[25%]"
                />
              </div>

              <div className="mt-4 flex flex-col gap-1.5 text-xs text-slate-400">
                <div className="flex items-center justify-center gap-1.5 text-rose-400">
                  <FiX className="text-rose-400" />
                  <span>Flat static image (no animation)</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-slate-500">
                  <FiX className="text-slate-500" />
                  <span>Generic uninspired look</span>
                </div>
              </div>
            </div>

            {/* AFTER CARD */}
            <div className="bg-black/60 border border-emerald-500/40 rounded-3xl p-6 text-center shadow-[0_0_50px_rgba(16,185,129,0.15)]">
              <div className="inline-flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full text-xs font-extrabold mb-4">
                <FiZap className="text-emerald-400 text-sm" />
                <span>AFTER VIVIDWAKE</span>
              </div>
              <div className="text-base font-bold text-white mb-2">
                Cinematic 4K 60FPS Video Loop
              </div>
              <p className="text-xs text-slate-400 mb-5">
                Hypnotic live motion the millisecond you press the power button with 0% battery drain!
              </p>

              <div className="w-56 sm:w-64 mx-auto rounded-[32px] overflow-hidden border-4 border-emerald-400 shadow-2xl shadow-emerald-500/30 bg-black">
                <img
                  src={
                    beforeAfterChoice === "lucia"
                      ? "/guide/step5_lockscreen_lucia.png"
                      : "/guide/step4_lockscreen_sabrina.png"
                  }
                  alt="After: VividWake 4K Live Lock Screen"
                  className="w-full h-auto block"
                />
              </div>

              <div className="mt-4 flex flex-col gap-1.5 text-xs text-slate-300 font-semibold">
                <div className="flex items-center justify-center gap-1.5 text-emerald-400">
                  <FiCheck className="text-emerald-400" />
                  <span>60 FPS Native hardware video loop</span>
                </div>
                <div className="flex items-center justify-center gap-1.5 text-teal-300">
                  <FiCheck className="text-teal-300" />
                  <span>0.0% background battery drain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: STEP-BY-STEP INSTALLATION & APP ONBOARDING (IMAGE HEAVY) */}
      <section id="install-steps" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            Step-By-Step Visual Guide
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            How To Install & Apply in 60 Seconds
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-2">
            Follow each visual step below. Tested and captured directly from Android 15.
          </p>
        </div>

        {/* 5 Sequential Step Cards with Visual Smartphone Mockups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Step 1: Chrome Warning */}
          <div className="bg-slate-900/60 border border-amber-500/30 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-amber-600 text-white px-2 py-0.5 rounded-md text-xs font-black">
                  STEP 1
                </span>
                <span className="text-[11px] text-amber-300 font-bold">Chrome Prompt</span>
              </div>
              <h4 className="text-sm font-extrabold text-white mb-2">
                Tap 'Download anyway'
              </h4>

              {/* Replica visual */}
              <div className="bg-black/50 border border-white/10 rounded-xl p-3 my-3">
                <div className="mb-1"><FiAlertTriangle className="text-amber-400 text-xl" /></div>
                <div className="text-[11px] font-bold text-white mb-1">File might be harmful</div>
                <div className="text-[10px] text-slate-400 mb-2">Do you want to download VividWake-v1.0.apk anyway?</div>
                <div className="text-right">
                  <span className="text-[10px] font-bold bg-sky-600 text-white px-2 py-1 rounded inline-flex items-center gap-1">
                    Download anyway <FiArrowRight className="text-xs" />
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[11px] text-amber-300/90 leading-normal">
              Google flags all direct APKs. Tap <strong>Download anyway</strong> to proceed safely.
            </p>
          </div>

          {/* Step 2: Allow Unknown Apps */}
          <div className="bg-slate-900/60 border border-sky-500/30 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-sky-600 text-white px-2 py-0.5 rounded-md text-xs font-black">
                  STEP 2
                </span>
                <span className="text-[11px] text-sky-300 font-bold">Permissions</span>
              </div>
              <h4 className="text-sm font-extrabold text-white mb-2">
                Enable 'Allow from source'
              </h4>

              {/* Replica visual */}
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
              Tap <strong>Settings</strong> <FiArrowRight className="inline mx-1 text-sky-400" /> Toggle switch to <strong>ON</strong> <FiArrowRight className="inline mx-1 text-sky-400" /> Press back.
            </p>
          </div>

          {/* Step 3: Google Play Protect */}
          <div className="bg-slate-900/60 border border-teal-500/30 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-teal-600 text-white px-2 py-0.5 rounded-md text-xs font-black">
                  STEP 3
                </span>
                <span className="text-[11px] text-teal-300 font-bold">Play Protect</span>
              </div>
              <h4 className="text-sm font-extrabold text-white mb-2">
                Tap 'Install anyway'
              </h4>

              {/* Replica visual */}
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
              Tap <strong>More details</strong> <FiArrowRight className="inline mx-1 text-teal-400" /> click <strong>Install anyway</strong>. Complete!
            </p>
          </div>

          {/* Step 4: Launch App & Set Permission */}
          <div className="bg-slate-900/60 border border-emerald-500/30 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-md text-xs font-black">
                  STEP 4
                </span>
                <span className="text-[11px] text-emerald-300 font-bold">App Setup</span>
              </div>
              <h4 className="text-sm font-extrabold text-white mb-2">
                Set Live Wallpaper
              </h4>

              <div className="rounded-xl overflow-hidden border border-white/10 my-3 bg-black">
                <img
                  src="/guide/step3_app_screen.png"
                  alt="App Setup Screen"
                  className="w-full h-32 object-cover object-top"
                />
              </div>
            </div>
            <p className="text-[11px] text-emerald-300/90 leading-normal">
              Tap <strong>"Apply to Lock Screen"</strong> <FiArrowRight className="inline mx-1 text-emerald-400" /> choose <em>Home screen and lock screen</em>.
            </p>
          </div>

          {/* Step 5: Download & Apply */}
          <div className="bg-slate-900/60 border border-purple-500/30 rounded-2xl p-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="bg-purple-600 text-white px-2 py-0.5 rounded-md text-xs font-black">
                  STEP 5
                </span>
                <span className="text-[11px] text-purple-300 font-bold">Instant Apply</span>
              </div>
              <h4 className="text-sm font-extrabold text-white mb-2">
                Enjoy 4K 60FPS
              </h4>

              <div className="rounded-xl overflow-hidden border border-white/10 my-3 bg-black">
                <img
                  src="/guide/step5_lockscreen_lucia.png"
                  alt="Lucia Lock Screen Live"
                  className="w-full h-32 object-cover object-top"
                />
              </div>
            </div>
            <p className="text-[11px] text-purple-300/90 leading-normal">
              Tap <strong>Apply</strong>! Lock your phone and wake it up to enjoy the cinematic loop!
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: HOW TO DOWNLOAD & SETUP FROM EXPLORE STORE (START FROM START) */}
      <section id="store-walkthrough" className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold text-teal-300 mb-4">
            <FiShoppingBag className="text-sm" />
            <span>START FROM START • EXPLORE STORE & SETUP GUIDE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            How to Download & Apply From Explore Store
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-3">
            Never get lost. Follow each step below captured live from Android 15 to browse, stream, and set your 4K 60FPS lock screen wallpaper in seconds.
          </p>
        </div>

        {/* Step Selector Tabs (Interactive 6-step nav) */}
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
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                  isActive ? "bg-teal-400 text-black" : "bg-slate-800 text-slate-300"
                }`}>
                  {st.step}
                </span>
                <span>{st.tag}</span>
              </button>
            );
          })}
        </div>

        {/* Highlighted Step Feature Card (Side by Side Walkthrough) */}
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

              {/* Pro Tip Box */}
              <div className="bg-black/40 border border-white/10 rounded-2xl p-4 mb-8">
                <div className="flex items-start gap-2.5">
                  <FiCheck className="text-emerald-400 text-lg flex-shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-normal">
                    <strong className="text-emerald-300">How It Works: </strong>
                    {storeSteps[activeStoreStep].tip}
                  </div>
                </div>
              </div>

              {/* Navigation buttons between steps */}
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
                  <span>Previous Step</span>
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

            {/* Step Smartphone Screenshot Preview */}
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

        {/* 6 Visual Cards Grid (All Steps at a Glance) */}
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

                <h4 className="text-sm font-bold text-white mb-2 line-clamp-1">
                  {st.title}
                </h4>

                <div className="rounded-xl overflow-hidden border border-white/10 my-2.5 bg-black h-40">
                  <img
                    src={st.image}
                    alt={st.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {st.desc}
                </p>
              </div>

              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-teal-400 font-semibold">
                <span>View Full Step</span>
                <FiArrowRight />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION: FEATURED WALLPAPERS SHOWCASE (AUTO-PLAYING CAROUSEL) */}
      <section id="showcase" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            Curated 4K Drops
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured 60 FPS Video Wallpapers
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-2">
            Captured live on physical Android devices running VividWake. Cycles automatically or click any card to inspect.
          </p>
        </div>

        {/* 3 Interactive Cards / Carousel Selectors */}
        <div className="grid sm:grid-cols-3 gap-4 mb-8">
          {/* Card 1: Lucia Editorial Portrait */}
          <button
            onClick={() => setActiveWallpaperTab("lucia")}
            className={`text-left p-4 sm:p-5 rounded-2xl transition-all cursor-pointer relative overflow-hidden border ${
              activeWallpaperTab === "lucia"
                ? "bg-amber-500/15 border-amber-500/60 shadow-lg shadow-amber-500/20 ring-1 ring-amber-500/40"
                : "bg-slate-900/60 border-white/5 hover:bg-slate-800/80 hover:border-white/10"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400">
                <FiStar className="text-amber-400 text-sm" />
                <span>DROP #1</span>
              </span>
              <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                4K 60FPS
              </span>
            </div>
            <div className="text-sm sm:text-base font-bold text-white mb-1">
              GTA VI — Lucia Editorial Portrait
            </div>
            <div className="text-[11px] text-slate-400">
              Hypnotic falling embers • 7.02 MB Full HD
            </div>

            {/* Active Card Progress Line */}
            {activeWallpaperTab === "lucia" && (
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-3">
                <div
                  key={`progress-lucia-${activeWallpaperTab}`}
                  className={`h-full bg-amber-400 ${!isCarouselPaused ? "animate-carousel-progress" : "w-full"}`}
                />
              </div>
            )}
          </button>

          {/* Card 2: Sabrina Carpenter Taste Kiss Scene */}
          <button
            onClick={() => setActiveWallpaperTab("sabrina")}
            className={`text-left p-4 sm:p-5 rounded-2xl transition-all cursor-pointer relative overflow-hidden border ${
              activeWallpaperTab === "sabrina"
                ? "bg-rose-500/15 border-rose-500/60 shadow-lg shadow-rose-500/20 ring-1 ring-rose-500/40"
                : "bg-slate-900/60 border-white/5 hover:bg-slate-800/80 hover:border-white/10"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-400">
                <FiHeart className="text-rose-400 text-sm" />
                <span>DROP #2</span>
              </span>
              <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                VIRAL HIT
              </span>
            </div>
            <div className="text-sm sm:text-base font-bold text-white mb-1">
              Sabrina Carpenter — Taste Kiss Scene
            </div>
            <div className="text-[11px] text-slate-400">
              Seamless 60fps loop • 26.22 MB Ultra HD
            </div>

            {/* Active Card Progress Line */}
            {activeWallpaperTab === "sabrina" && (
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-3">
                <div
                  key={`progress-sabrina-${activeWallpaperTab}`}
                  className={`h-full bg-rose-400 ${!isCarouselPaused ? "animate-carousel-progress" : "w-full"}`}
                />
              </div>
            )}
          </button>

          {/* Card 3: Lucia & Jason Highway Wheelie */}
          <button
            onClick={() => setActiveWallpaperTab("wheelie")}
            className={`text-left p-4 sm:p-5 rounded-2xl transition-all cursor-pointer relative overflow-hidden border ${
              activeWallpaperTab === "wheelie"
                ? "bg-sky-500/15 border-sky-500/60 shadow-lg shadow-sky-500/20 ring-1 ring-sky-500/40"
                : "bg-slate-900/60 border-white/5 hover:bg-slate-800/80 hover:border-white/10"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400">
                <FiFastForward className="text-sky-400 text-sm" />
                <span>DROP #3</span>
              </span>
              <span className="text-[10px] uppercase font-extrabold px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">
                ACTION 60FPS
              </span>
            </div>
            <div className="text-sm sm:text-base font-bold text-white mb-1">
              GTA VI — Lucia & Jason Wheelie
            </div>
            <div className="text-[11px] text-slate-400">
              Vice City highway action • 8.16 MB
            </div>

            {/* Active Card Progress Line */}
            {activeWallpaperTab === "wheelie" && (
              <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden mt-3">
                <div
                  key={`progress-wheelie-${activeWallpaperTab}`}
                  className={`h-full bg-sky-400 ${!isCarouselPaused ? "animate-carousel-progress" : "w-full"}`}
                />
              </div>
            )}
          </button>
        </div>

        {/* Carousel Showcase Container with Navigation Controls & Pause-on-Hover */}
        <div
          className="relative group"
          onMouseEnter={() => setIsCarouselPaused(true)}
          onMouseLeave={() => setIsCarouselPaused(false)}
        >
          {/* Top Bar with Status and Auto-play Toggle */}
          <div className="flex items-center justify-between mb-3 px-2">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">
                Wallpaper {activeWallpaperTab === "lucia" ? "1" : activeWallpaperTab === "sabrina" ? "2" : "3"} of 3
              </span>
              <span className="text-slate-600">•</span>
              <span className="hidden sm:inline text-slate-500">Hover over card to pause</span>
            </div>

            <button
              onClick={() => setIsCarouselPaused((p) => !p)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 text-xs text-slate-300 hover:text-white hover:border-teal-500/40 transition-colors cursor-pointer"
            >
              {isCarouselPaused ? (
                <>
                  <FiPlay className="text-teal-400 text-xs" />
                  <span>Resume Auto-Scroll</span>
                </>
              ) : (
                <>
                  <FiPause className="text-teal-400 text-xs" />
                  <span>Auto-Playing (4.5s)</span>
                </>
              )}
            </button>
          </div>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrevWallpaper}
            aria-label="Previous Wallpaper"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-900/90 border border-white/15 text-white flex items-center justify-center hover:bg-teal-500 hover:text-black hover:border-teal-400 transition-all shadow-2xl cursor-pointer"
          >
            <FiChevronLeft className="text-xl" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNextWallpaper}
            aria-label="Next Wallpaper"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-slate-900/90 border border-white/15 text-white flex items-center justify-center hover:bg-teal-500 hover:text-black hover:border-teal-400 transition-all shadow-2xl cursor-pointer"
          >
            <FiChevronRight className="text-xl" />
          </button>

          {/* Tab 1: Lucia Portrait */}
          {activeWallpaperTab === "lucia" && (
            <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-900/50 border border-amber-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-md transition-all duration-300">
              <div>
                <div className="inline-block bg-amber-500/15 text-amber-300 border border-amber-500/30 px-3 py-1 rounded-full text-xs font-bold mb-4">
                  VIRAL SOCIAL HIT
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                  GTA VI: Lucia Intense Editorial Portrait
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  The viral hyper-realistic portrait of GTA VI's Lucia. Featuring her intense hazel gaze, layered brunette hair, layered diamond necklaces, and atmospheric falling embers. Smoothly looping at 60 FPS in 1080×1920.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400">Resolution</div>
                    <div className="text-sm font-bold text-white">1080 × 1920 Full HD</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400">File Size</div>
                    <div className="text-sm font-bold text-white">7.02 MB (Optimized)</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400">Framerate</div>
                    <div className="text-sm font-bold text-teal-300">60 FPS Native Loop</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400">Apply Speed</div>
                    <div className="text-sm font-bold text-amber-300">1-Tap Direct Apply</div>
                  </div>
                </div>

                <a
                  href="/api/download"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black px-6 py-3 rounded-xl text-sm font-extrabold shadow-lg shadow-amber-500/20 transition-transform hover:scale-105 active:scale-95"
                >
                  <FiDownload />
                  <span>Get App & Set Lucia As Lock Screen</span>
                </a>
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                <div className="text-center">
                  <div className="w-56 rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl shadow-amber-500/20 bg-black">
                    <img
                      src="/guide/step5_lockscreen_lucia.png"
                      alt="Lucia Lock Screen Live on Device"
                      className="w-full h-auto block"
                    />
                  </div>
                  <div className="mt-2.5 text-xs text-amber-300 font-bold flex items-center justify-center gap-1.5">
                    <FiCamera className="text-amber-400" />
                    <span>Real Motorola g64 Lock Screen</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-56 rounded-3xl overflow-hidden border-4 border-slate-800 shadow-xl bg-black">
                    <img
                      src="/guide/lucia_portrait.jpg"
                      alt="Lucia Portrait Source"
                      className="w-full h-auto block"
                    />
                  </div>
                  <div className="mt-2.5 text-xs text-slate-400 font-medium flex items-center justify-center gap-1.5">
                    <FiImage className="text-slate-400" />
                    <span>4K Portrait Source Master</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Sabrina Carpenter */}
          {activeWallpaperTab === "sabrina" && (
            <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-900/50 border border-rose-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-md transition-all duration-300">
              <div>
                <div className="inline-block bg-rose-500/15 text-rose-300 border border-rose-500/30 px-3 py-1 rounded-full text-xs font-bold mb-4">
                  VIRAL TIKTOK HIT • 60 FPS
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                  Sabrina Carpenter: Taste Kiss Scene
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  The full viral 1080×1920 60fps video wallpaper of Sabrina Carpenter from the acclaimed 'Taste' music video. Seamless looping video with perfect portrait crop on your Android phone lock screen.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400">Clip Duration</div>
                    <div className="text-sm font-bold text-white">15 Seconds Full Scene</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400">Master Video</div>
                    <div className="text-sm font-bold text-white">26.22 MB Ultra HD</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400">Framerate</div>
                    <div className="text-sm font-bold text-rose-300">60 FPS Seamless Loop</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400">Engine Status</div>
                    <div className="text-sm font-bold text-teal-300">Active in My Wallpapers</div>
                  </div>
                </div>

                <a
                  href="/api/download"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white px-6 py-3 rounded-xl text-sm font-extrabold shadow-lg shadow-rose-500/20 transition-transform hover:scale-105 active:scale-95"
                >
                  <FiDownload />
                  <span>Download App & Apply Sabrina Wallpaper</span>
                </a>
              </div>

              <div className="flex justify-center gap-4 flex-wrap">
                <div className="text-center">
                  <div className="w-56 rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl shadow-rose-500/20 bg-black">
                    <img
                      src="/guide/step4_lockscreen_sabrina.png"
                      alt="Sabrina Carpenter Lock Screen Live"
                      className="w-full h-auto block"
                    />
                  </div>
                  <div className="mt-2.5 text-xs text-rose-300 font-bold flex items-center justify-center gap-1.5">
                    <FiCamera className="text-rose-400" />
                    <span>Real Lock Screen Live Playback</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="w-56 rounded-3xl overflow-hidden border-4 border-slate-800 shadow-xl bg-black">
                    <img
                      src="/guide/step1_my_wallpapers.png"
                      alt="Sabrina in My Wallpapers Tab"
                      className="w-full h-auto block"
                    />
                  </div>
                  <div className="mt-2.5 text-xs text-slate-400 font-medium flex items-center justify-center gap-1.5">
                    <FiSmartphone className="text-slate-400" />
                    <span>VividWake App Manager</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Lucia Wheelie */}
          {activeWallpaperTab === "wheelie" && (
            <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-900/50 border border-sky-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-md transition-all duration-300">
              <div>
                <div className="inline-block bg-sky-500/15 text-sky-300 border border-sky-500/30 px-3 py-1 rounded-full text-xs font-bold mb-4">
                  GTA VI ACTION • 60 FPS
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
                  Lucia & Jason: Vice City Highway Wheelie
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                  High-speed action sequence featuring Lucia riding pillion on a motorcycle wheelie across the sun-drenched neon streets of Vice City. Optimized for flawless looping.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400">Scene Type</div>
                    <div className="text-sm font-bold text-white">Cinematic Action</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400">File Size</div>
                    <div className="text-sm font-bold text-white">8.16 MB Compressed</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400">Audio Loop</div>
                    <div className="text-sm font-bold text-sky-300">Silent Seamless</div>
                  </div>
                  <div className="bg-black/30 p-3 rounded-xl border border-white/5">
                    <div className="text-[11px] text-slate-400">Category</div>
                    <div className="text-sm font-bold text-teal-300">Gaming / Vice City</div>
                  </div>
                </div>

                <a
                  href="/api/download"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-400 hover:to-sky-500 text-black px-6 py-3 rounded-xl text-sm font-extrabold shadow-lg shadow-sky-500/20 transition-transform hover:scale-105 active:scale-95"
                >
                  <FiDownload />
                  <span>Download VividWake to Apply</span>
                </a>
              </div>

              <div className="flex justify-center">
                <div className="text-center">
                  <div className="w-64 rounded-3xl overflow-hidden border-4 border-slate-800 shadow-2xl shadow-sky-500/20 bg-black">
                    <img
                      src="/guide/lucia_wheelie.jpg"
                      alt="Lucia Motorcycle Wheelie"
                      className="w-full h-auto block"
                    />
                  </div>
                  <div className="mt-2.5 text-xs text-sky-300 font-bold flex items-center justify-center gap-1.5">
                    <FiPlay className="text-sky-400" />
                    <span>Vice City Wheelie Preview</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Dot Navigation Indicators */}
          <div className="flex justify-center items-center gap-2.5 mt-6">
            {wallpaperKeys.map((k, i) => (
              <button
                key={k}
                onClick={() => setActiveWallpaperTab(k)}
                aria-label={`Go to wallpaper ${i + 1}`}
                className={`transition-all rounded-full cursor-pointer ${
                  activeWallpaperTab === k
                    ? "w-8 h-2.5 bg-teal-400 shadow-md shadow-teal-500/50"
                    : "w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OEM Specific Brand Guide */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            Device Optimization
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Optimized For Every Phone Brand
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-2">
            Select your phone manufacturer below for exact OEM settings and battery bypass instructions:
          </p>
        </div>

        {/* Brand Selector Buttons */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {(["motorola", "samsung", "xiaomi", "oneplus", "pixel"] as const).map((key) => {
            const isSel = activeOemTab === key;
            return (
              <button
                key={key}
                onClick={() => setActiveOemTab(key)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                  isSel
                    ? "bg-teal-500/20 text-teal-300 border border-teal-500/50 shadow-md shadow-teal-500/10"
                    : "bg-slate-900/60 text-slate-400 border border-white/5 hover:bg-slate-800"
                }`}
              >
                <span>{oemGuides[key].icon}</span>
                <span>{oemGuides[key].brand.split("(")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected OEM Content */}
        <div className="max-w-2xl mx-auto bg-slate-900/70 border border-teal-500/20 rounded-2xl p-6 md:p-8 backdrop-blur-md">
          <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <span>{oemGuides[activeOemTab].icon}</span>
            <span>{oemGuides[activeOemTab].brand}</span>
          </h4>
          <div className="space-y-3">
            {oemGuides[activeOemTab].steps.map((st, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-teal-500/15 text-teal-300 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {st}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Under The Hood / Battery Tech Table */}
      <section id="tech-specs" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-md">
          <div className="text-center mb-10">
            <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
              Performance Architecture
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Why VividWake Beats Traditional Wallpaper Apps
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="p-4 text-xs font-semibold text-slate-400">Feature</th>
                  <th className="p-4 text-sm font-extrabold text-teal-300">
                    <span className="inline-flex items-center gap-1.5">
                      <FiZap className="text-teal-400" />
                      <span>VividWake Engine</span>
                    </span>
                  </th>
                  <th className="p-4 text-xs font-semibold text-slate-500">Traditional Live Wallpapers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Background Battery Drain</td>
                  <td className="p-4 text-emerald-400 font-bold">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCheck className="text-emerald-400" />
                      <span>0.0% (Decoder & Surface paused)</span>
                    </span>
                  </td>
                  <td className="p-4 text-rose-400">
                    <span className="inline-flex items-center gap-1.5">
                      <FiX className="text-rose-400" />
                      <span>8% - 15% daily battery drain</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Wake-Up Lag</td>
                  <td className="p-4 text-emerald-400 font-bold">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCheck className="text-emerald-400" />
                      <span>0ms (Instant hardware attach)</span>
                    </span>
                  </td>
                  <td className="p-4 text-rose-400">
                    <span className="inline-flex items-center gap-1.5">
                      <FiX className="text-rose-400" />
                      <span>500ms - 1.2s black screen delay</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Video Decoder</td>
                  <td className="p-4 text-emerald-400 font-bold">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCheck className="text-emerald-400" />
                      <span>Native MediaCodec + OpenGL ES 3.0</span>
                    </span>
                  </td>
                  <td className="p-4 text-slate-400">Basic Software / WebViews</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Privacy & Ad-Trackers</td>
                  <td className="p-4 text-emerald-400 font-bold">
                    <span className="inline-flex items-center gap-1.5">
                      <FiShield className="text-emerald-400" />
                      <span>100% Ad-Free, No Data Mining</span>
                    </span>
                  </td>
                  <td className="p-4 text-rose-400">
                    <span className="inline-flex items-center gap-1.5">
                      <FiX className="text-rose-400" />
                      <span>Fullscreen pop-up ads</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Offline Mode</td>
                  <td className="p-4 text-emerald-400 font-bold">
                    <span className="inline-flex items-center gap-1.5">
                      <FiCheck className="text-emerald-400" />
                      <span>Encrypted Vault (Plays without Wi-Fi)</span>
                    </span>
                  </td>
                  <td className="p-4 text-slate-400">Requires continuous internet streaming</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            Got Questions?
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className={`bg-slate-900/60 rounded-xl overflow-hidden transition-all border ${
                  isOpen ? "border-teal-500/40" : "border-white/5"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 flex items-center justify-between text-left text-sm md:text-base font-bold text-white hover:text-teal-300 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <FiChevronUp className="text-teal-400 flex-shrink-0" />
                  ) : (
                    <FiChevronDown className="text-slate-500 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-slate-500">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Image src="/logo.png" alt="VividWake" width={18} height={18} className="object-contain" />
          <span className="font-bold text-slate-300">VividWake Sideload Distribution</span>
        </div>
        <p>© 2026 VividWake Team. All rights reserved. Sideload edition for Android 9.0 - Android 15.</p>
      </footer>
    </div>
  );
}
