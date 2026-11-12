"use client";

import React, { useState } from "react";
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
  FiExternalLink,
  FiPlay,
  FiArrowRight,
  FiHelpCircle
} from "react-icons/fi";

export default function Home() {
  const [activeWallpaperTab, setActiveWallpaperTab] = useState<"lucia" | "sabrina" | "wheelie">("lucia");
  const [activeOemTab, setActiveOemTab] = useState<"motorola" | "samsung" | "xiaomi" | "oneplus" | "pixel">("motorola");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const oemGuides = {
    motorola: {
      brand: "Motorola (HelloUI / Clean AOSP)",
      icon: "📱",
      steps: [
        "Tap 'Download VividWake APK' and tap 'Download anyway' in Chrome.",
        "Open Chrome Downloads, tap 'VividWake-v1.0.apk', and tap 'Settings' -> enable 'Allow from this source'.",
        "On the Play Protect dialog, tap 'More details' -> 'Install anyway'.",
        "Launch VividWake, tap 'Apply to Lock Screen', and select 'Home screen and lock screen'."
      ]
    },
    samsung: {
      brand: "Samsung (OneUI 6.0 / 6.1)",
      icon: "✨",
      steps: [
        "Download APK and open via 'My Files' -> 'Downloads' or Chrome notifications.",
        "If Samsung 'Auto Blocker' is enabled: go to Settings -> Security and privacy -> Auto Blocker -> Temporarily toggle OFF.",
        "Allow installation from Chrome/My Files, then tap 'Install anyway' on Google Play Protect.",
        "Open VividWake -> Settings -> Battery -> Set to 'Unrestricted' for uninterrupted smooth 60fps playback."
      ]
    },
    xiaomi: {
      brand: "Xiaomi / POCO / Redmi (HyperOS / MIUI)",
      icon: "⚡",
      steps: [
        "Download APK -> In Package Installer, check 'I am aware of the possible risks' after the 10-second countdown.",
        "Tap 'OK' -> Tap 'More details' on Play Protect -> 'Install anyway'.",
        "Long-press VividWake app icon -> App info -> Enable 'Autostart' and set Battery Saver to 'No restrictions'.",
        "Set wallpaper via VividWake with 1-tap live application."
      ]
    },
    oneplus: {
      brand: "OnePlus / Realme / OPPO (OxygenOS / ColorOS)",
      icon: "🚀",
      steps: [
        "Download APK -> Tap 'Install' -> Tap 'Settings' -> Enable 'Allow app installs from this source'.",
        "Tap 'Install anyway' on the security scan prompt.",
        "Go to App info -> Battery -> Enable 'Allow background activity' and 'Allow auto-launch'.",
        "Open VividWake and choose either Sabrina Carpenter or Lucia for immediate lock screen setup."
      ]
    },
    pixel: {
      brand: "Google Pixel (Android 14 / 15)",
      icon: "💎",
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
      <div className="bg-gradient-to-r from-emerald-900/30 via-teal-900/30 to-amber-900/20 border-b border-teal-500/20 px-4 py-2 text-center text-xs md:text-sm flex items-center justify-center gap-2">
        <span className="bg-emerald-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
          NEW v1.0.0
        </span>
        <span className="text-slate-300">
          Official Direct APK Release — GTA VI Lucia & Sabrina Carpenter 4K 60FPS Wallpapers available now!
        </span>
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-[#06090e]/90 backdrop-blur-md border-b border-white/5">
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

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#showcase" className="hover:text-teal-300 transition-colors">
              Wallpapers
            </a>
            <a href="#install-guide" className="hover:text-teal-300 transition-colors">
              Install Guide
            </a>
            <a href="#inapp-walkthrough" className="hover:text-teal-300 transition-colors">
              App Setup
            </a>
            <a href="#tech-specs" className="hover:text-teal-300 transition-colors">
              0% Battery Tech
            </a>
            <a href="#faq" className="hover:text-teal-300 transition-colors">
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

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-12 px-6 text-center">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 px-4 py-1.5 rounded-full text-xs font-semibold text-teal-300 mb-6">
            <FiShield className="text-sm" />
            <span>Verified Safe Direct APK • No App Store Account Needed</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
            Transform Your Lock Screen Into A <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-sky-300 to-amber-300">
              Cinematic 4K Live Experience
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            VividWake brings hardware-accelerated 60 FPS video lock screens to Android with <strong className="text-white">0% background battery drain</strong> and <strong className="text-white">zero wake-up lag</strong>. Direct sideload release.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="/api/download"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl text-base font-extrabold shadow-xl shadow-emerald-600/40 hover:shadow-emerald-600/60 transition-all hover:scale-105 active:scale-95"
            >
              <FiDownload className="text-xl" />
              <span>Download VividWake APK</span>
              <span className="text-xs font-medium text-emerald-100 ml-1 opacity-90">v1.0.0 • 19.7 MB</span>
            </a>

            <a
              href="#install-guide"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 px-7 py-4 rounded-xl text-base font-semibold backdrop-blur-md transition-all"
            >
              <span>Installation & Warning Bypass</span>
              <FiChevronDown className="text-lg text-teal-400" />
            </a>
          </div>

          {/* Quick Hardware Spec Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto p-4 rounded-2xl bg-slate-900/60 border border-white/5 backdrop-blur-md">
            <div className="flex items-center gap-3 p-3 text-left">
              <FiBatteryCharging className="text-teal-400 text-2xl flex-shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">0% Idle Battery</div>
                <div className="text-[11px] text-slate-400">GL loop paused when awake</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 text-left">
              <FiZap className="text-sky-400 text-2xl flex-shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">0ms Wake Delay</div>
                <div className="text-[11px] text-slate-400">Instant power button playback</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 text-left">
              <FiCpu className="text-amber-400 text-2xl flex-shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">60 FPS Native</div>
                <div className="text-[11px] text-slate-400">OpenGL ES 3.0 Decoded</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 text-left">
              <FiLock className="text-purple-400 text-2xl flex-shrink-0" />
              <div>
                <div className="text-sm font-bold text-white">Encrypted Vault</div>
                <div className="text-[11px] text-slate-400">100% Offline playback</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Wallpapers Showcase */}
      <section id="showcase" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            Curated 4K Drops
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Featured 60 FPS Video Wallpapers
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-2">
            Captured live on physical Android devices running VividWake. Click to preview the real lock screen visuals.
          </p>
        </div>

        {/* Wallpaper Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          <button
            onClick={() => setActiveWallpaperTab("lucia")}
            className={`px-5 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeWallpaperTab === "lucia"
                ? "bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-lg shadow-amber-500/10"
                : "bg-slate-900/60 text-slate-400 border border-white/5 hover:bg-slate-800"
            }`}
          >
            <span>👑 GTA VI — Lucia Editorial Portrait</span>
          </button>

          <button
            onClick={() => setActiveWallpaperTab("sabrina")}
            className={`px-5 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeWallpaperTab === "sabrina"
                ? "bg-rose-500/20 text-rose-300 border border-rose-500/50 shadow-lg shadow-rose-500/10"
                : "bg-slate-900/60 text-slate-400 border border-white/5 hover:bg-slate-800"
            }`}
          >
            <span>💋 Sabrina Carpenter — Taste Kiss Scene</span>
          </button>

          <button
            onClick={() => setActiveWallpaperTab("wheelie")}
            className={`px-5 py-3 rounded-xl text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
              activeWallpaperTab === "wheelie"
                ? "bg-sky-500/20 text-sky-300 border border-sky-500/50 shadow-lg shadow-sky-500/10"
                : "bg-slate-900/60 text-slate-400 border border-white/5 hover:bg-slate-800"
            }`}
          >
            <span>🏍️ GTA VI — Lucia & Jason Wheelie</span>
          </button>
        </div>

        {/* Tab 1: Lucia Portrait */}
        {activeWallpaperTab === "lucia" && (
          <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-900/50 border border-amber-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-md">
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
                <div className="mt-2.5 text-xs text-amber-300 font-bold">
                  📸 Real Motorola g64 Lock Screen
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
                <div className="mt-2.5 text-xs text-slate-400 font-medium">
                  ✨ 4K Portrait Source Master
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Sabrina Carpenter */}
        {activeWallpaperTab === "sabrina" && (
          <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-900/50 border border-rose-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-md">
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
                <div className="mt-2.5 text-xs text-rose-300 font-bold">
                  📸 Real Lock Screen Live Playback
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
                <div className="mt-2.5 text-xs text-slate-400 font-medium">
                  📱 VividWake App Manager
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Lucia Wheelie */}
        {activeWallpaperTab === "wheelie" && (
          <div className="grid md:grid-cols-2 gap-10 items-center bg-slate-900/50 border border-sky-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-md">
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
                <div className="mt-2.5 text-xs text-sky-300 font-bold">
                  🏍️ Vice City Wheelie Preview
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Manual Sideload Installation Guide (OEM Warnings & Bypasses) */}
      <section id="install-guide" className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-900/60 border border-white/10 rounded-3xl p-8 md:p-14 backdrop-blur-md">
          <div className="text-center mb-12">
            <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
              Direct Sideload Walkthrough
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              How To Safely Install On Android
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto mt-2">
              Because VividWake is released directly to users without Play Store middleman restrictions, Android displays standard security verification prompts. Follow these 3 simple steps to accept and install:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1: Chrome Warning */}
            <div className="bg-black/40 border border-amber-500/30 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-amber-600 text-white px-2.5 py-1 rounded-lg text-xs font-extrabold">
                    STEP 1
                  </span>
                  <span className="text-amber-400 text-xs font-bold flex items-center gap-1.5">
                    <FiAlertTriangle /> Chrome Download
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  Tap 'Download anyway'
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  When downloading via Chrome, Android prompts: <em className="text-slate-200">"File might be harmful. Do you want to download VividWake-v1.0.apk anyway?"</em>
                </p>

                {/* Replica Card */}
                <div className="bg-slate-800/90 border border-white/10 rounded-xl p-4 mb-4">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-amber-400 text-xl">⚠️</span>
                    <div>
                      <div className="text-xs font-bold text-white">File might be harmful</div>
                      <div className="text-[11px] text-slate-400">Do you want to download VividWake-v1.0.apk anyway?</div>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <span className="text-xs text-slate-400 px-2 py-1">Cancel</span>
                    <span className="text-xs font-bold bg-sky-600 text-white px-3 py-1 rounded-md shadow-md shadow-sky-600/40">
                      Download anyway ➔
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/10 border-l-2 border-amber-500 p-2.5 rounded-r-lg text-xs text-amber-300">
                💡 <strong>Why this appears:</strong> Standard Google warning for ANY direct APK download outside the Play Store. VividWake is 100% clean and safe.
              </div>
            </div>

            {/* Step 2: Allow Unknown Apps */}
            <div className="bg-black/40 border border-sky-500/30 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-sky-600 text-white px-2.5 py-1 rounded-lg text-xs font-extrabold">
                    STEP 2
                  </span>
                  <span className="text-sky-400 text-xs font-bold flex items-center gap-1.5">
                    <FiSettings /> System Security
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  Enable 'Allow from this source'
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  When opening the downloaded file: <em className="text-slate-200">"For your security, your phone is not allowed to install unknown apps from this source."</em>
                </p>

                {/* Replica Card */}
                <div className="bg-slate-800/90 border border-white/10 rounded-xl p-4 mb-4">
                  <div className="text-[11px] text-slate-400 mb-2">Chrome • Install unknown apps</div>
                  <div className="flex items-center justify-between bg-black/40 p-2.5 rounded-lg">
                    <span className="text-xs font-semibold text-white">Allow from this source</span>
                    <div className="w-10 h-5 bg-emerald-500 rounded-full flex items-center p-0.5">
                      <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sky-500/10 border-l-2 border-sky-500 p-2.5 rounded-r-lg text-xs text-sky-300">
                👉 <strong>Action:</strong> Tap <strong>Settings</strong> ➔ Toggle switch to <strong>ON</strong> ➔ Press Back to resume install.
              </div>
            </div>

            {/* Step 3: Google Play Protect */}
            <div className="bg-black/40 border border-emerald-500/30 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-emerald-600 text-white px-2.5 py-1 rounded-lg text-xs font-extrabold">
                    STEP 3
                  </span>
                  <span className="text-teal-400 text-xs font-bold flex items-center gap-1.5">
                    <FiShield /> Play Protect
                  </span>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  Tap 'More details' ➔ 'Install anyway'
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  Play Protect may display: <em className="text-slate-200">"Play Protect doesn't recognize this app's developer"</em> or <em className="text-slate-200">"Blocked by Play Protect"</em>.
                </p>

                {/* Replica Card */}
                <div className="bg-slate-800/90 border border-white/10 rounded-xl p-4 mb-4">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-teal-400 text-base">🛡️</span>
                    <span className="text-xs font-bold text-white">Play Protect Alert</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mb-3">
                    Apps from unrecognized developers can sometimes be unsafe.
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-sky-400 underline font-semibold">More details ▾</span>
                    <span className="text-xs font-bold bg-emerald-600 text-white px-3 py-1 rounded-md shadow-md shadow-emerald-600/40">
                      Install anyway
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/10 border-l-2 border-emerald-500 p-2.5 rounded-r-lg text-xs text-teal-300">
                ✅ <strong>Done:</strong> Tap <strong>More details</strong>, then click <strong>Install anyway</strong>. App installs immediately!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* In-App Setup Walkthrough (Real Device Screenshots) */}
      <section id="inapp-walkthrough" className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="text-xs font-bold tracking-widest text-teal-400 uppercase mb-2">
            In-App Setup Walkthrough
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            How To Download & Apply Live Wallpapers
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-2">
            Visual step-by-step walkthrough captured directly from the live app on Motorola g64.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="h-80 bg-black relative overflow-hidden">
              <img
                src="/guide/step1_my_wallpapers.png"
                alt="My Wallpapers Tab"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-3 left-3 bg-emerald-600 text-white px-2.5 py-1 rounded-md text-xs font-extrabold">
                STEP 1
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white mb-2">
                  Launch App & Enable Permission
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tap <strong>"Apply to Lock Screen"</strong>. The Android Live Wallpaper chooser opens — select <strong>"Home screen and lock screen"</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="h-80 bg-black relative overflow-hidden">
              <img
                src="/guide/step2_explore_store_clean.png"
                alt="Explore Store Catalog"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-3 left-3 bg-sky-600 text-white px-2.5 py-1 rounded-md text-xs font-extrabold">
                STEP 2
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white mb-2">
                  Browse 'Explore Store' Tab
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Browse curated 4K 60FPS viral wallpapers including <em>GTA VI Lucia Portrait</em>, <em>Lucia Wheelie</em>, and VIP drops.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="h-80 bg-slate-950 relative flex flex-col justify-center items-center p-6 border-b border-white/5">
              <div className="absolute top-3 left-3 bg-amber-600 text-white px-2.5 py-1 rounded-md text-xs font-extrabold">
                STEP 3
              </div>

              {/* Progress UI Card */}
              <div className="w-full bg-slate-900 border border-teal-500/30 rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2 mb-3">
                  <FiDownload className="text-teal-400 text-base" />
                  <span className="text-xs font-bold text-white">Setting up download...</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-2">
                  <div className="w-3/4 h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>Encrypted vault stream</span>
                  <span className="text-teal-300 font-bold">Ready in 2s</span>
                </div>
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white mb-2">
                  Fast Vault Download
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tap <strong>Download</strong>. VividWake displays an emerald setup indicator and streams the 4K 60FPS video into your offline encrypted vault.
                </p>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-slate-900/60 border border-white/10 rounded-2xl overflow-hidden flex flex-col">
            <div className="h-80 bg-black relative overflow-hidden">
              <img
                src="/guide/step5_lockscreen_lucia.png"
                alt="Lucia Applied on Lock Screen"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute top-3 left-3 bg-purple-600 text-white px-2.5 py-1 rounded-md text-xs font-extrabold">
                STEP 4
              </div>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-white mb-2">
                  1-Tap Instant 'Apply'
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Tap <strong>Apply</strong>! The lock screen immediately updates. Press your phone's power button to enjoy the seamless 4K loop!
                </p>
              </div>
            </div>
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
                  <th className="p-4 text-sm font-extrabold text-teal-300">✨ VividWake Engine</th>
                  <th className="p-4 text-xs font-semibold text-slate-500">Traditional Live Wallpapers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Background Battery Drain</td>
                  <td className="p-4 text-emerald-400 font-bold">⚡ 0.0% (Decoder & Surface paused)</td>
                  <td className="p-4 text-rose-400">❌ 8% - 15% daily battery drain</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Wake-Up Lag</td>
                  <td className="p-4 text-emerald-400 font-bold">⚡ 0ms (Instant hardware attach)</td>
                  <td className="p-4 text-rose-400">❌ 500ms - 1.2s black screen delay</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Video Decoder</td>
                  <td className="p-4 text-emerald-400 font-bold">⚡ Native MediaCodec + OpenGL ES 3.0</td>
                  <td className="p-4 text-slate-400">Basic Software / WebViews</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Privacy & Ad-Trackers</td>
                  <td className="p-4 text-emerald-400 font-bold">🛡️ 100% Ad-Free, No Data Mining</td>
                  <td className="p-4 text-rose-400">❌ Fullscreen pop-up ads</td>
                </tr>
                <tr>
                  <td className="p-4 text-slate-200 font-medium">Offline Mode</td>
                  <td className="p-4 text-emerald-400 font-bold">⚡ Encrypted Vault (Plays without Wi-Fi)</td>
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

      {/* Floating Bottom CTA Bar */}
      <div className="sticky bottom-0 z-40 bg-[#06090e]/95 border-t border-teal-500/20 backdrop-blur-lg px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm sm:text-base font-extrabold text-white">
              Ready to elevate your phone screen?
            </div>
            <div className="text-xs text-slate-400">
              Download VividWake APK directly • No Play Store required • 100% Free & Safe
            </div>
          </div>

          <a
            href="/api/download"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105 active:scale-95"
          >
            <FiDownload className="text-base" />
            <span>Download VividWake APK (19.7 MB)</span>
          </a>
        </div>
      </div>

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
