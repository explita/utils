---
sidebar_position: 8
title: API Reference
sidebarTitle: API Reference
---

# API Reference

Complete reference of exports, TypeScript signatures, and return types across all entry points.

## Entry Points

| Import Path | Contents |
| :--- | :--- |
| `@explita/utils` | String, Object, Date, Number, Array, and Misc utilities |
| `@explita/utils/react` | React hooks (`useClipboard`, `useOnClickOutside`, `useLocalStorage`, etc.) |
| `@explita/utils/axios` | `tryAxios` — optimized tryCatch for Axios with typed error schemas |
| `@explita/utils/file` | Browser file export (`saveCSVToFile`, `saveJSONToFile`, `saveXMLToFile`) |
| `@explita/utils/zod` | Zod validation helpers (`validateForm`, `mapZodIssues`, etc.) |

---

## 🔤 String Utilities

| Function | Signature | Description |
| :--- | :--- | :--- |
| `toCamelCase` | `(str: string): string` | Converts to camelCase |
| `toKebabCase` | `(str: string): string` | Converts to kebab-case |
| `toSnakeCase` | `(str: string): string` | Converts to snake_case |
| `toTitleCase` | `(str: string): string` | Converts to Title Case |
| `toSentenceCase` | `(str: string): string` | Converts to Sentence case |
| `capitalize` | `(str: string): string` | Capitalizes first character |
| `truncate` | `(str: string, maxLength: number, ellipsis?: string): string` | Truncates at word boundaries |
| `mask` | `(str: string, opts?: { start?, end?, char? }): string` | Masks sensitive characters |
| `pluralize` | `(count: number, singular: string, plural?: string, includeCount?: boolean): string` | Pluralizes nouns by count |
| `formatCurrency` | `(amount: number, currency?: string): string` | Formats currency with commas and decimals |
| `convertFileSize` | `(bytes: number, decimals?: number): string` | Formats bytes to KB, MB, GB |
| `buildQueryString` | `(params: Record<string, string> \| string[][] \| URLSearchParams): string` | Builds URL query string |
| `parseQueryString` | `(url: string): Record<string, string>` | Parses query parameters from URL or string |
| `slugify` | `(text: string): string` | Converts text to URL-friendly slug |
| `isEmpty` | `(value: unknown): boolean` | Robust empty check across all types |
| `isValidEmail` | `(email: string): boolean` | Validates email format |
| `isValidPassword` | `(password: string): boolean` | Validates password complexity |
| `truncateEmail` | `(email: string): string` | Hides email username characters |
| `uniqueString` | `(length: number, isPassword?: boolean): string` | Generates random unique string |
| `greeting` | `(name?: string, opts?: { morning?, afternoon?, evening? }): string` | Time-of-day greeting |
| `hexToRgb` | `(hex: string): string` | Converts Hex color to RGB string |
| `rgbToHex` | `(r: number, g: number, b: number): string` | Converts RGB values to Hex string |
| `randomColor` | `(type?: "hex" \| "rgb" \| "hsl"): string` | Generates random color code |
| `addOrdinal` | `(num: number): string` | Appends 1st, 2nd, 3rd ordinal suffix |
| `chunkSplit` | `(str: string \| number, size: number, delimiter?: string): string` | Splits string at intervals with delimiter |
| `nl2br` | `(str: string): string` | Converts newlines to `<br />` tags |
| `toRomanNumeral` | `(num: number): string` | Converts number (1-3999) to Roman numeral |

---

## 🗂️ Array Utilities

| Function | Signature | Description |
| :--- | :--- | :--- |
| `keyBy` | `<T, K extends keyof T>(array: T[], key: K): Record<string, T>` | Converts array to object indexed by key |
| `groupBy` | `<T, K extends keyof T>(array: T[], key: K): Record<string, T[]>` | Groups array elements by key into arrays |
| `sortBy` | `<T>(array: T[], iteratee: keyof T \| ((item: T) => any), order?: "asc" \| "desc"): T[]` | Non-mutating multi-type array sort |
| `partition` | `<T>(array: T[], predicate: (item: T) => boolean): [T[], T[]]` | Splits array into `[passed, failed]` |
| `chunk` / `chunkArray` | `<T>(array: T[], size: number): T[][]` | Splits array into chunks of given size |
| `intersection` | `<T>(...arrays: T[][]): T[]` | Returns common unique elements across arrays |
| `difference` | `<T>(first: T[], ...others: T[][]): T[]` | Returns elements in first array not in others |
| `unique` | `<T>(arr: T[]): T[]` | Removes duplicate values from array |
| `uniqueByKey` | `<T>(array: T[], key: keyof T): T[]` | Removes duplicates by key property |
| `findDuplicates` | `<T, K extends keyof T>(data: T[], key: K, message?: string): { _index, [key] }[]` | Finds duplicate objects in array |
| `shuffleArray` | `<T>(array: T[]): T[]` | Non-mutating Fisher-Yates array shuffle |
| `flatten` | `<T>(arr: any[]): T[]` | Flattens deeply nested arrays |

---

## 🔢 Number Utilities

| Function | Signature | Description |
| :--- | :--- | :--- |
| `clamp` | `(value: number, min: number, max: number): number` | Restricts value between min and max |
| `formatCompactNumber` | `(num: number, locale?: string): string` | Formats large numbers (e.g. 1.2K, 3.4M) |
| `range` | `(start: number, end?: number, step?: number): number[]` | Generates sequential array of numbers |
| `percentage` | `(total: number, value: number, precision?: number): number` | Calculates percentage of value from total |
| `randomNumber` | `(length?: number): number` | Generates random integer of given length |
| `isNumeric` | `(value: any): boolean` | Checks if value is a valid numeric value |

---

## 📦 Object Utilities

| Function | Signature | Description |
| :--- | :--- | :--- |
| `deepMerge` | `<T, S>(target: T, source: S): T & S` | Recursively deep merges two objects |
| `get` | `<T>(object: any, path: string \| (string \| number)[], defaultValue?: T): T` | Safely retrieves nested value by path |
| `compactObject` | `<T>(obj: T, opts?: { removeEmptyStrings?: boolean }): Partial<T>` | Removes null, undefined, and empty values |
| `pickFromObject` | `<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K>` | Creates object with only picked keys |
| `omitFromObject` | `<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>` | Creates object without specified keys |
| `prependKeys` | `<T, P extends string>(obj: T, prefix: P): Object` | Prepends prefix to all object keys |
| `flattenObject` | `(obj: any, prefix?: string): any` | Flattens nested object with dot notation |
| `unflattenObject` | `<T>(obj: T): any` | Reconstructs flat dot-notation object |
| `isObject` | `(value: unknown): value is Record<string, any>` | Type guard for plain JavaScript objects |
| `jsonify` | `<T>(data: T): T` | Serializes BigInts and revives ISO dates |

---

## 📅 Date Utilities

| Function | Signature | Description |
| :--- | :--- | :--- |
| `formatDate` | `(date: Date \| string \| number, pattern?: string): string` | Formats date with custom token pattern |
| `formatTime` | `(date: Date \| string \| number, pattern?: string): string` | Formats time with 12h/24h tokens |
| `formatDateTime` | `(date: Date \| string \| number): string` | Formats combined date and time |
| `formatRelative` | `(date: Date \| string \| number): string` | Formats relative to today ("Today at 2:00PM") |
| `timeAgo` | `(date: Date \| string \| number): string` | Relative elapsed time ("5 minutes ago") |
| `timeUntil` | `(date: Date \| string \| number): string` | Relative remaining time ("in 2 hours") |
| `extractDate` | `(date?: Date \| string \| number): string` | Returns local `YYYY-MM-DD` string |
| `startOfDay` | `(date?: Date \| string \| number): Date` | Sets time to `00:00:00.000` local |
| `endOfDay` | `(date?: Date \| string \| number): Date` | Sets time to `23:59:59.999` local |
| `minDate` | `(arr: (Date \| string \| number)[]): Date \| null` | Returns earliest date in array |
| `maxDate` | `(arr: (Date \| string \| number)[]): Date \| null` | Returns latest date in array |
| `isFuture` | `(date: Date \| string \| number, includeTime?: boolean): boolean` | Checks if date is in the future |
| `isPast` | `(date: Date \| string \| number, includeTime?: boolean): boolean` | Checks if date is in the past |
| `isToday` | `(date: Date \| string \| number): boolean` | Checks if date is current day |
| `isTomorrow` | `(date: Date \| string \| number): boolean` | Checks if date is tomorrow |
| `isYesterday` | `(date: Date \| string \| number): boolean` | Checks if date was yesterday |
| `isWeekday` | `(date: Date \| string \| number): boolean` | Checks if date is Monday-Friday |
| `isWeekend` | `(date: Date \| string \| number): boolean` | Checks if date is Saturday-Sunday |
| `isWithinInterval` | `(target: DateInput, options: { start, end, ignoreTime? }): boolean` | Checks if date falls within interval |
| `isValidDate` | `(date: any): boolean` | Checks if date input is valid |
| `daysBetween` | `(date1: DateInput, date2: DateInput): number` | Absolute difference in days |
| `hoursBetween` | `(date1: DateInput, date2: DateInput): number` | Absolute difference in hours |
| `minutesBetween` | `(date1: DateInput, date2: DateInput): number` | Absolute difference in minutes |
| `secondsBetween` | `(date1: DateInput, date2: DateInput): number` | Absolute difference in seconds |
| `shiftDays` | `(date: DateInput, amount: number): Date` | Shifts date by N days |
| `shiftMonths` | `(date: DateInput, amount: number): Date` | Shifts date by N months |
| `shiftYears` | `(date: DateInput, amount: number): Date` | Shifts date by N years |
| `shiftTime` | `(shifts: ShiftTimeOptions, date?: DateInput): Date` | Shifts date across multiple time units |
| `toDate` | `(date: Date \| string \| number \| null \| undefined): Date \| null` | Robust conversion to Date instance |

---

## ⚡ Misc & Async Utilities

| Function | Signature | Description |
| :--- | :--- | :--- |
| `tryCatch` | `<T, E = Error>(promiseOrFn: Promise<T> \| (() => T \| Promise<T>)): Promise<[T, null] \| [null, E]>` | Clean tuple-based error handling |
| `timeout` | `<T>(promise: Promise<T>, ms: number, errorMessage?: string): Promise<T>` | Rejects promise if exceeded timeout |
| `retry` | `<T>(fn: () => Promise<T>, retries?: number): Promise<T>` | Retries async function N times |
| `memoize` | `<T extends (...args: any[]) => any>(fn: T, keyResolver?: Function): T & { cache: Map }` | Caches return value based on args |
| `debounce` | `<T extends (...args: any[]) => void>(fn: T, delay: number): T & { cancel: () => void }` | Debounces function execution |
| `throttle` | `(fn: Function, limit: number): Function` | Throttles function execution frequency |
| `delay` | `(ms: number): Promise<void>` | Promisified sleep |
| `logger` | `Logger` | Conditional console logging utility |

---

## 🎣 React Hooks (`@explita/utils/react`)

| Hook | Signature | Description |
| :--- | :--- | :--- |
| `useClipboard` | `(timeout?: number): { copy, copied, error }` | Copies text with auto-resetting status |
| `useOnClickOutside` | `<T extends HTMLElement>(ref: RefObject<T>, handler: (e) => void): void` | Detects clicks outside ref element |
| `useMediaQuery` | `(query: string): boolean` | Evaluates CSS media query reactively |
| `useIntersectionObserver` | `<T extends HTMLElement>(ref: RefObject<T>, options?: Options): IntersectionObserverEntry \| null` | Viewport visibility detector |
| `usePrevious` | `<T>(value: T): T \| undefined` | Tracks previous value across renders |
| `useIsMounted` | `(): () => boolean` | Checks if component is currently mounted |
| `useLocalStorage` | `<T>(key: string, initialValue: T, options?: Options): UseLocalStorageReturn<T>` | Persistent state with cross-tab sync |
| `useList` | `<T>(initial?: T[]): [T[], ListActions<T>]` | Rich array state management helper |
| `useDebouncedValue` | `<T>(initial: T, delayOrOptions?: number \| Options): [value, debounced, setValue, flush]` | Debounced value with min length |
| `useDisclosure` | `(initialState?: boolean, options?: Options): [isOpen, { open, close, toggle }]` | Open/Close/Toggle boolean manager |
| `useNetwork` | `(): NetworkData` | Real-time network status and metrics |
| `useLocation` | `(): [location, error, requestPermission]` | Geolocation coordinates and status |
| `useWindowSize` | `(): { width, height, isMobile, isTablet, isDesktop }` | Responsive window dimensions |
| `useWindowScroll` | `(): [{ x, y }, scrollTo]` | Window scroll position and actions |
| `stripTags` | `(input: string \| ReactNode): string` | Strips HTML tags from string or node |

---

## 🌐 Axios Utilities (`@explita/utils/axios`)

| Function | Signature | Description |
| :--- | :--- | :--- |
| `tryAxios` | `<T, E>(promiseOrFn: Promise<AxiosResponse<T>> \| Function): Promise<[T, null] \| [null, NormalizedAxiosError<E>]>` | Categorized Axios error wrapper (`kind`, `meta`, `original`) |

---

## 💾 File Exporters (`@explita/utils/file`)

| Function | Signature | Description |
| :--- | :--- | :--- |
| `saveCSVToFile` | `<T extends Record<string, any>[]>(data: T, name: string): void` | Exports object array as CSV download |
| `saveJSONToFile` | `<T>(data: T, name: string): void` | Exports data as formatted JSON download |
| `saveXMLToFile` | `<T extends Record<string, any>[]>(data: T, name: string): void` | Exports object array as XML download |

---

## 🛡️ Zod Validation (`@explita/utils/zod`)

| Function | Signature | Description |
| :--- | :--- | :--- |
| `validateForm` | `<Schema extends z.ZodObject>(formData: FormData \| object, schema: Schema): Promise<ValidationResponse>` | Validates form data against Zod schema |
| `mapZodIssues` | `(issues?: z.ZodError["issues"]): Record<string, string>` | Maps Zod issues to flat field error map |
| `createDefaultValues` | `<T extends z.ZodObject>(schema?: T): z.infer<T>` | Generates default form state from schema |
| `isZodIssue` | `(issues: any): issues is z.ZodError["issues"]` | Type guard for Zod issues |
| `isZodSchema` | `(schema: unknown): schema is z.ZodObject` | Type guard for Zod object schema |
