import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "@explita/utils — TypeScript Utility Library & React Hooks",
  description:
    "A lightweight collection of TypeScript utility functions and React hooks for everyday development. String helpers, object utilities, date formatting, arrays, and more.",
  keywords: [
    "typescript",
    "utilities",
    "utils",
    "react hooks",
    "string helpers",
    "date formatting",
    "object utilities",
    "array utilities",
    "explita",
    "type-safe",
    "tree-shakable",
  ],
  authors: [{ name: "explita" }],
  openGraph: {
    title: "@explita/utils — TypeScript Utility Library & React Hooks",
    description:
      "Tree-shakable, type-safe TypeScript utility functions and React hooks for strings, objects, dates, arrays, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${font.className} antialiased min-h-full flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
