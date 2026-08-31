import { Package, Box, Check, X } from "lucide-react";

const MODE_CORE = {
  icon: <Package size={20} />,
  title: "Core Utilities",
  tagline: "Framework-agnostic, tree-shakable",
  highlights: [
    "25+ string helpers (truncate, mask, pluralize, slugify)",
    "Object utilities (deepMerge, get, compactObject)",
    "30+ date utilities (formatDate, timeAgo, timeUntil)",
    "Number, array, and async utilities (keyBy, sortBy, timeout, memoize)",
  ],
  ideal: "Node.js, API routes, framework-agnostic apps",
  gradient: "from-blue-500 to-cyan-600",
  border: "border-blue-200 dark:border-blue-800/60",
  bg: "bg-blue-50/50 dark:bg-blue-950/30",
};

const MODE_FRAMEWORK = {
  icon: <Box size={20} />,
  title: "Framework Extras",
  tagline: "React hooks & platform-specific subpaths",
  highlights: [
    "useClipboard, useOnClickOutside, useMediaQuery, useIntersectionObserver",
    "useList, useLocalStorage (cross-tab sync), useDisclosure",
    "tryAxios — typed error handling with kind & meta",
    "Zod validation, browser file export (CSV/XML/JSON)",
  ],
  ideal: "React, Next.js, Remix, and browser-only contexts",
  gradient: "from-violet-500 to-purple-600",
  border: "border-violet-200 dark:border-violet-800/60",
  bg: "bg-violet-50/50 dark:bg-violet-950/30",
};

export function TwoModes() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Two Entry Points for Any Project
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Use the core package everywhere, or reach for framework-specific
          subpaths when you need React hooks or platform features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[MODE_CORE, MODE_FRAMEWORK].map((mode, i) => (
          <div
            key={i}
            className={`relative overflow-hidden ${mode.bg} border ${mode.border} rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
          >
            {/* Top gradient bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${mode.gradient}`}
            />

            <div className="space-y-5">
              {/* Header */}
              <div className="flex items-center gap-3">
                <div
                  className={`inline-flex items-center justify-center p-2.5 rounded-xl bg-linear-to-br ${mode.gradient} text-white shadow-md`}
                >
                  {mode.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                    {mode.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {mode.tagline}
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2">
                {mode.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-emerald-500"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Ideal for */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-700/60">
                <X size={12} className="rotate-45" />
                <span>Best for: {mode.ideal}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
