<div align="center">

# @explita/utils

A lightweight, high-performance collection of TypeScript utility functions and React hooks designed for everyday development.

[![npm version](https://img.shields.io/npm/v/@explita/utils.svg?style=flat-square)](https://www.npmjs.com/package/@explita/utils)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

[**Explore Full Documentation & Examples →**](https://utils.explita.com)

</div>

---

## 📦 Installation

```bash
# npm
npm install @explita/utils

# pnpm
pnpm add @explita/utils

# yarn
yarn add @explita/utils
```

---

## ⚡ Quick Start

```typescript
import {
  formatDate,
  formatRelative,
  timeAgo,
  keyBy,
  sortBy,
  clamp,
  formatCurrency,
  truncate,
  deepMerge,
  get,
  tryCatch,
} from "@explita/utils";

// 📅 Date Helpers
formatDate(new Date(), "YYYY-MM-DD"); // "2026-08-31"
timeAgo(Date.now() - 5 * 60 * 1000);   // "5 minutes ago"

// 🗂️ Array Helpers
keyBy([{ id: "u_1", name: "Alice" }], "id"); // { "u_1": { id: "u_1", name: "Alice" } }
sortBy([{ price: 20 }, { price: 10 }], "price"); // [{ price: 10 }, { price: 20 }]

// 🔢 Numbers & Strings
clamp(105, 0, 100);                    // 100
formatCurrency(1234.56, "$");          // "$1,234.56"
truncate("The quick brown fox jumps", 15); // "The quick..."

// 📦 Objects & Async
get({ user: { name: "Sarah" } }, "user.name"); // "Sarah"
const [data, error] = await tryCatch(fetchUser());
```

---

## 🎣 React Hooks

Import from `@explita/utils/react`:

```tsx
import {
  useLocalStorage,
  useList,
  useClipboard,
  useOnClickOutside,
  useMediaQuery,
  useDisclosure,
} from "@explita/utils/react";

function ProfileWidget() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const { copy, copied } = useClipboard(2000);
  const [isOpen, { toggle, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <button onClick={() => copy("api_key_123")}>
        {copied ? "Copied!" : "Copy API Key"}
      </button>
    </div>
  );
}
```

---

## 📚 Entry Points & Modules

| Entry Point | Description | Key Helpers |
| :--- | :--- | :--- |
| **`@explita/utils`** | Core utilities for dates, arrays, strings, objects, numbers, and async | `formatDate`, `timeAgo`, `keyBy`, `sortBy`, `clamp`, `get`, `deepMerge`, `tryCatch`, `timeout`, `memoize` |
| **`@explita/utils/react`** | React hooks with SSR safety | `useLocalStorage`, `useList`, `useClipboard`, `useOnClickOutside`, `useMediaQuery`, `useIntersectionObserver`, `usePrevious`, `useIsMounted` |
| **`@explita/utils/axios`** | Normalized Axios error handling | `tryAxios` (typed schemas with `kind`, `meta`, `original`) |
| **`@explita/utils/zod`** | Zod schema & form helpers | `validateForm`, `mapZodIssues`, `createDefaultValues`, `isZodIssue` |
| **`@explita/utils/file`** | Browser file exporters | `saveCSVToFile`, `saveJSONToFile`, `saveXMLToFile` |

---

## 📖 Detailed Documentation

For comprehensive API signatures, interactive examples, and guides, visit the documentation site:

- [String Utilities](https://utils.explita.com/docs/string-utilities)
- [Object Utilities](https://utils.explita.com/docs/object-utilities)
- [Date Utilities](https://utils.explita.com/docs/date-utilities)
- [Number & Array Utilities](https://utils.explita.com/docs/number-and-array-utilities)
- [React Hooks](https://utils.explita.com/docs/react-hooks)
- [Advanced Utilities (Async, Axios, File, Zod)](https://utils.explita.com/docs/advanced-utilities)
- [Full API Reference](https://utils.explita.com/docs/api-reference)

---

## 💖 Support & Community

- **Star on GitHub**: Give us a ⭐ on [GitHub](https://github.com/explita/utils) to help others discover the project.
- **Report Issues**: Found a bug or need a helper? Open an [issue](https://github.com/explita/utils/issues) or start a [discussion](https://github.com/explita/utils/discussions).
- **Sponsor**: Support continued development via [GitHub Sponsors](https://github.com/sponsors/explita) or [Ko-fi](https://ko-fi.com/explita).

---

## 📄 License

MIT © [Explita](https://github.com/explita)
