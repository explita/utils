import Link from "next/link";
import { BookOpen } from "lucide-react";
import { CopyButton } from "../copy-button";

export function CtaSection() {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Ready to Simplify Your Code?
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          One install command. Zero configuration. Hundreds of hours saved.
        </p>
      </div>

      {/* Code snippet with copy button */}
      <div className="inline-flex items-center gap-2 bg-slate-950 dark:bg-slate-900 border border-slate-800 rounded-xl px-5 py-3.5 shadow-xl">
        <span className="text-blue-400 font-mono text-sm font-semibold select-all">
          npm install @explita/utils
        </span>
        <CopyButton text="npm install @explita/utils" />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold rounded-xl px-7 py-3.5 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <BookOpen size={18} />
          Read Documentation
        </Link>
        <Link
          href="https://www.npmjs.com/package/@explita/utils"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-800 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-200 font-semibold border border-slate-200 dark:border-slate-700/80 rounded-xl px-7 py-3.5 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.586 18.586l-3.172-3.172a2 2 0 010-2.828l7.586-7.586a2 2 0 012.828 0l7.586 7.586a2 2 0 010 2.828l-3.172 3.172a2 2 0 01-2.828 0L10.414 18.9a2 2 0 01-2.828 0z" />
            <path d="M12.586 4.414l-7.586 7.586a2 2 0 000 2.828l3.172 3.172" />
          </svg>
          View on npm
        </Link>
      </div>
    </section>
  );
}
