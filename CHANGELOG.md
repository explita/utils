# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2026-08-31

### Added

- **React Hooks**:
  - `useClipboard`: Auto-resetting clipboard copy with customizable feedback timer.
  - `useOnClickOutside`: Detects clicks and touches outside a referenced element.
  - `useMediaQuery`: Reactive CSS media query evaluator.
  - `useIntersectionObserver`: Viewport intersection detector with `freezeOnceVisible` support.
  - `usePrevious`: Tracks the previous value of state or props across renders.
  - `useIsMounted`: Prevents setting state on unmounted components after async tasks.
- **Date Utilities**:
  - `endOfDay`: Calculates the last moment of the day (`23:59:59.999` local).
  - `timeUntil`: Human-readable countdown for future dates (e.g., `"in 2 hours"`).
  - `formatRelative`: Relative day formatting (e.g., `"Today at 2:30PM"`).
- **Array Utilities**:
  - `keyBy`: Indexes an array of objects into a lookup dictionary keyed by property.
  - `sortBy`: Non-mutating multi-type array sort by key or getter with `"asc"` / `"desc"`.
  - `partition`: Splits an array into `[passed, failed]` in a single pass.
  - `intersection`: Returns common unique elements across multiple arrays.
  - `difference`: Returns elements from the first array not present in other arrays.
- **Number Utilities**:
  - `clamp`: Restricts numbers within minimum and maximum bounds.
  - `formatCompactNumber`: Formats large numbers into compact notation (`1.2K`, `3.4M`, `8.9B`).
  - `range`: Generates sequential number arrays with custom step support.
- **String Utilities**:
  - `truncate`: Word-boundary aware text truncation with custom ellipsis.
  - `mask`: Masks sensitive string characters (phone numbers, card numbers, secrets).
  - `pluralize`: Pluralizes nouns based on count with built-in English rules.
- **Object Utilities**:
  - `get`: Safe dot-path deep property getter with fallback default value support.
  - `compactObject`: Cleans `null`, `undefined`, and optional empty strings from objects.
- **Misc Utilities**:
  - `timeout`: Promise timeout deadline wrapper that rejects on exceeded duration.
  - `memoize`: High-performance function memoization with custom key resolvers and `.cache` exposure.

### Fixed

- **SSR Safety**: Resolved `ReferenceError: navigator is not defined` in `useNetwork` and `useLocation` during server-side rendering in Next.js/Remix.
- **Date Comparisons**:
  - `isFuture` & `isPast`: Fixed date-only comparisons (`includeTime: false`) to properly preserve the active day until midnight.
  - `timeAgo`: Handled slight server clock skew/drift (< 60s) gracefully as `"a few seconds ago"` instead of throwing an error.
  - `startOfDay`: Fixed timezone offset bug where local dates were shifted into UTC.
  - `extractDate`: Fixed timezone bug where `.toISOString()` caused dates near midnight to shift calendar days.
  - `minDate` & `maxDate`: Added guards for empty arrays and non-Date timestamp inputs.
- **Object & String Fixes**:
  - `isObject`: Restricted to plain objects using `Object.prototype.toString` to preserve `Date`, `RegExp`, `Map`, and `Set` in `deepMerge`.
  - `findDuplicates`: Fixed bug ignoring falsy values (`0`, `false`, `""`).
  - `toTitleCase`: Lowercased word remainder to handle all-caps inputs properly.
  - `formatCurrency`: Ensured `0` formats with two decimal places (`$0.00`).
  - `parseQueryString`: Supported URLs both with and without `?`.
  - `isEmpty`: Added safe handling for `Date`, `RegExp`, `Map`, and `Set`.
  - `saveCSVToFile` & `saveXMLToFile`: Replaced blocking browser `alert()` with safe `console.warn`.

### Changed

- **Documentation**: Revamped entire Nextra documentation site (`packages/utils/docs`) with categorized sections, real-world code examples, TypeScript signatures, and Pagefind search indexing.

## [0.2.0] - 2026-02-06

### Changed

- **Axios Utilities**: Refactored `tryAxios` to support flexible error schema generics.
- **Axios Utilities**: Enhanced `NormalizedAxiosError` to include the `original` AxiosError object and automatically spread response data (e.g., `message`, `errors`) into the error result.

## [0.1.2] - 2026-02-04

### Changed

- **Axios Utilities**: Enhanced `tryAxios` error response to include `kind` (network/logic/unknown) and `meta` (error snapshot) for better debugging.

## [0.1.1] - 2026-02-02

### Added

- **Date Utilities**: Added `startOfDay` for first-moment-of-day calculations.
- **Misc Utilities**: Added `logger` for conditional console logging with caller stack traces in errors.
- **String Utilities**: Added `capitalize` and `slugify` helpers (aliased to sentence and kebab case but more intuitive).
- **Axios Utilities**: Added `tryAxios` helper exported via `@explita/utils/axios`.

### Fixed

- **ISO 8601 Compliance**: Updated `weekOfYear` to correctly follow the ISO 8601 standard for week numbering.
- **Deep Merge Types**: Fixed a TypeScript structural typing issue in `deepMerge` that previously blocked adding new properties to a target object.
- **Typo Resolution**: Renamed `hours-beween` to `hours-between` and updated all internal references.
- **JSON Reviver**: Fixed a logic error in `jsonify` where it failed to correctly revive ISO date strings in some environments.
- **Jest ESM Support**: Resolved critical testing issues by configuring Jest for native ESM support (`jest.config.cjs`) and enabling `--experimental-vm-modules`.

### Changed

- **Package Segmentation**: Moved Axios utilities to a dedicated `@explita/utils/axios` export to keep the core package light.
- **Documentation**: Updated `README.md` to include documented missing utilities and organized the API reference into more granular sections.

## [0.1.0] - 2026-01-26

### Added

- **Barrel Exports**: Implemented `index.ts` for all utility modules (`array`, `date`, `file`, `misc`, `number`, `object`, `string`, `react`, `zod`) to simplify imports.
- **React Hooks**:
  - `useList`: Advanced state management for arrays with functional updates.
  - `useLocalStorage`: Persistent state with cross-tab synchronization and SSR safety.
  - `useDisclosure`, `useWindowSize`, `useNetwork`, `useLocation`, `useWindowScroll`.
  - `stripTags`: Utility to strip HTML tags from strings or React nodes.
- **Zod Validation**:
  - `validateForm`: Standardized form validation helper.
  - `mapZodIssues`: Helper to flatten Zod errors into a simple record.
  - `createDefaultValues`: Utility to generate initial state from Zod schemas.
  - `isZodIssue`: Type guard for Zod error handling.
- **String Utilities**: `isValidPhone`, `truncateEmail`, `greeting`, `addOrdinal`, `randomColor`, `toRomanNumeral`.
- **Date Utilities**: `extractDate`, `normalizeDate`, and 40+ other date helpers.
- **File Utilities**: Browser-only helpers to save data as CSV, XML, or JSON.

### Fixed

- **Deep Merge**: Refactored `deepMerge` to support adding new properties and return accurate intersection types.
- **Build Quality**: Updated `tsconfig.json` to ensure a clean `dist` structure without nested `src` directories.
- **SSR Safety**: Segmented browser-only utilities (File) and hooks into sub-paths to prevent crashes in Node.js/Next.js environments.
- **Type Safety**: Improved type definitions across the entire library, reaching zero TypeScript errors.

### Changed

- **Package Architecture**: Segmented exports in `package.json` to provide dedicated entry points for `@explita/utils/react`, `@explita/utils/zod`, and `@explita/utils/file`.
- **API Consistency**: Standardized function signatures to use positional arguments for better performance and readability.
- **Documentation**: Completely revamped `README.md` into a comprehensive API reference with usage examples.
