import Link from "next/link";
import { BookOpen, Package } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24 flex flex-col items-center justify-center text-center px-4">
      {/* Background radial highlight glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-125 bg-linear-to-b from-blue-500/10 via-cyan-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* Decorative Blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-300/10 dark:bg-blue-950/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-cyan-300/10 dark:bg-cyan-950/20 rounded-full blur-3xl pointer-events-none animate-pulse duration-5000" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        {/* Hero Title */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linear-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 border border-blue-200/50 dark:border-blue-500/30 text-blue-700 dark:text-blue-300 text-xs font-semibold select-none shadow-xs mb-4">
          <Package size={12} className="text-blue-500 dark:text-blue-400" />
          <span>TypeScript Utility Library</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight sm:leading-none text-slate-900 dark:text-white">
          Everyday Utilities.
          <span className="block mt-4 bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-cyan-600 to-teal-500 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400">
            Zero Dependencies.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
          A lightweight collection of TypeScript helpers and React hooks for
          strings, objects, dates, arrays, and more. Tree-shakable, type-safe,
          and ready to use.
        </p>

        {/* CTA Actions */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/docs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl px-7 py-3.5 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <BookOpen size={18} />
            Read Documentation
          </Link>
          <Link
            href="https://github.com/explita/utils"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700/80 rounded-xl px-7 py-3.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub Repository
          </Link>
        </div>

        {/* Metrics/Highlights badges row */}
        <div className="pt-10 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Tree-Shakable ESM</span>
          </div>
          <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-250 dark:border-slate-800 pt-2 sm:pt-0 sm:pl-8">
            <span className="w-2 h-2 rounded-full bg-cyan-500" />
            <span>70+ Utilities</span>
          </div>
          <div className="flex items-center gap-2 border-t sm:border-t-0 sm:border-l border-slate-250 dark:border-slate-800 pt-2 sm:pt-0 sm:pl-8">
            <span className="w-2 h-2 rounded-full bg-teal-500" />
            <span>14+ React Hooks</span>
          </div>
        </div>
      </div>
    </section>
  );
}
