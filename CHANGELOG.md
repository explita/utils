# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
