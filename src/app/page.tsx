import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-purple-500 selection:text-white">
      {/* Top Navigation */}
      <header className="border-b border-neutral-800/80 bg-neutral-950/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-md shadow-purple-500/20">
              <Image
                src="/logo.png"
                alt="Vivid Wake Logo"
                fill
                sizes="36px"
                className="object-cover"
                priority
              />
            </div>
            <span className="font-semibold text-lg tracking-tight text-white">
              Vivid<span className="text-purple-400">Wake</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              Web Portal
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          {/* Logo Showcase */}
          <div className="relative mb-8 group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-600 opacity-75 blur transition duration-500 group-hover:opacity-100" />
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl overflow-hidden bg-neutral-900 ring-1 ring-white/20 shadow-2xl flex items-center justify-center p-2">
              <Image
                src="/logo.png"
                alt="Vivid Wake Logo"
                width={128}
                height={128}
                className="w-full h-full object-contain drop-shadow"
                priority
              />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Vivid <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-300">Wake</span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-400 max-w-lg mb-8 leading-relaxed">
            Experience magical lock screen animations and seamless interactive video experiences designed to bring your display to life.
          </p>

          {/* Action / Status Pill */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-sm backdrop-blur-sm shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Connected with Mobile App Ecosystem
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-800/80 py-6 text-center text-xs text-neutral-500">
        <p>© 2026 Vivid Wake. All rights reserved.</p>
      </footer>
    </div>
  );
}
