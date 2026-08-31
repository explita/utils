import { Type, Layers, Calendar, Hash, FileDown, Atom } from "lucide-react";

const FEATURES_LIST = [
  {
    icon: <Type className="text-blue-600 dark:text-blue-400" size={24} />,
    title: "String Manipulation",
    description:
      "25+ helpers for formatting, casing, truncate, mask, pluralize, slugifying, validation, and color conversion.",
    color:
      "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/5 dark:to-indigo-500/5 border-blue-100 dark:border-blue-500/10",
  },
  {
    icon: <Layers className="text-cyan-600 dark:text-cyan-400" size={24} />,
    title: "Object Transformation",
    description:
      "Deep merge, get (dot path), compactObject, flatten/unflatten, pick/omit, key prefixing, and BigInt-safe JSON.",
    color:
      "from-cyan-500/10 to-teal-500/10 dark:from-cyan-500/5 dark:to-teal-500/5 border-cyan-100 dark:border-cyan-500/10",
  },
  {
    icon: (
      <Calendar className="text-violet-600 dark:text-violet-400" size={24} />
    ),
    title: "Date Utilities",
    description:
      "30+ helpers for formatting, formatRelative, timeAgo, timeUntil, start/end of day, shifting, and interval checks.",
    color:
      "from-violet-500/10 to-purple-500/10 dark:from-violet-500/5 dark:to-purple-500/5 border-violet-100 dark:border-violet-500/10",
  },
  {
    icon: <Hash className="text-fuchsia-600 dark:text-fuchsia-400" size={24} />,
    title: "Number & Array",
    description:
      "keyBy, sortBy, partition, clamp, formatCompactNumber, range, chunking, deduplication, and set operations.",
    color:
      "from-fuchsia-500/10 to-pink-500/10 dark:from-fuchsia-500/5 dark:to-pink-500/5 border-fuchsia-100 dark:border-fuchsia-500/10",
  },
  {
    icon: <Atom className="text-amber-600 dark:text-amber-400" size={24} />,
    title: "React Hooks",
    description:
      "useClipboard, useOnClickOutside, useMediaQuery, useIntersectionObserver, useLocalStorage, useList, and more.",
    color:
      "from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5 border-amber-100 dark:border-amber-500/10",
  },
  {
    icon: (
      <FileDown className="text-emerald-600 dark:text-emerald-400" size={24} />
    ),
    title: "File Export & Async",
    description:
      "Save CSV/XML/JSON from browser, Zod validation helpers, tryAxios, timeout, memoize, debounce, and retry.",
    color:
      "from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5 border-emerald-100 dark:border-emerald-500/10",
  },
];

export function Features() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Everything You Need, Nothing You Don&apos;t
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          A comprehensive set of utilities organized by category — import only
          what you need, tree-shaken away by your bundler.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURES_LIST.map((feat, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden bg-white dark:bg-slate-900/40 border ${feat.color} rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500/20 dark:hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1`}
          >
            {/* Top icon holder */}
            <div className="mb-4 inline-flex items-center justify-center p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 group-hover:scale-110 transition-transform duration-300">
              {feat.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-200 mb-2">
              {feat.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {feat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
