---
sidebar_position: 2
title: String Utilities
---

# String Utilities

Practical helpers for string manipulation, case conversions, currency formatting, validation, masking, and URL query handling.

```typescript
import {
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  toTitleCase,
  toSentenceCase,
  capitalize,
  formatCurrency,
  convertFileSize,
  truncate,
  mask,
  pluralize,
  slugify,
  isEmpty,
  isValidEmail,
  buildQueryString,
  parseQueryString,
} from "@explita/utils";
```

---

## 🔤 Case Conversions

### `toCamelCase`
Converts any string to `camelCase`.

```typescript
import { toCamelCase } from "@explita/utils";

toCamelCase("hello-world"); // "helloWorld"
toCamelCase("Hello World"); // "helloWorld"
toCamelCase("USER_PROFILE_ID"); // "userProfileId"
```

---

### `toKebabCase` & `toSnakeCase`
Converts strings into delimiter-separated identifiers.

```typescript
import { toKebabCase, toSnakeCase } from "@explita/utils";

toKebabCase("UserProfileSetting"); // "user-profile-setting"
toSnakeCase("UserProfileSetting"); // "user_profile_setting"
```

---

### `toTitleCase` & `toSentenceCase`
Formats strings for UI titles and sentences.

```typescript
import { toTitleCase, toSentenceCase, capitalize } from "@explita/utils";

toTitleCase("hello_world"); // "Hello World"
toSentenceCase("FULL_TIME_EMPLOYEE"); // "Full time employee"
capitalize("javascript"); // "Javascript"
```

---

## ✂️ Text Formatting & Masking

### `truncate`
Truncates long strings at word boundaries with custom ellipsis.

```typescript
import { truncate } from "@explita/utils";

truncate("The quick brown fox jumps over the lazy dog", 20);
// "The quick brown fox..."

truncate("Short text", 20);
// "Short text"
```

---

### `mask`
Masks sensitive strings (phone numbers, card numbers, secrets) while leaving visible prefixes and suffixes.

```typescript
import { mask } from "@explita/utils";

mask("1234567890123456", { start: 4, end: 4, char: "*" });
// "1234********3456"

mask("supersecretapikey", { start: 3, end: 3 });
// "sup***********key"
```

---

### `truncateEmail`
Hides the middle characters of an email username for privacy displays.

```typescript
import { truncateEmail } from "@explita/utils";

truncateEmail("alexander@example.com");
// "alex*****@example.com"
```

---

### `pluralize`
Pluralizes nouns based on a quantity with built-in English rules.

```typescript
import { pluralize } from "@explita/utils";

pluralize(1, "apple"); // "1 apple"
pluralize(3, "apple"); // "3 apples"
pluralize(2, "person", "people"); // "2 people"
pluralize(0, "item"); // "0 items"
```

---

### `formatCurrency`
Formats numbers with currency symbols and thousand separators.

```typescript
import { formatCurrency } from "@explita/utils";

formatCurrency(1234.56, "$"); // "$1,234.56"
formatCurrency(0, "€"); // "€0.00"
formatCurrency(1000000, "₦"); // "₦1,000,000.00"
```

---

### `convertFileSize`
Formats byte sizes into appropriate human-readable units (Bytes, KB, MB, GB).

```typescript
import { convertFileSize } from "@explita/utils";

convertFileSize(512); // "512 Bytes"
convertFileSize(1048576); // "1.0 MB"
convertFileSize(1073741824, 2); // "1.00 GB"
```

---

## 🔗 URL & Query Strings

### `buildQueryString` & `parseQueryString`
Bidirectional query string generation and parsing supporting objects, arrays, and full URLs.

```typescript
import { buildQueryString, parseQueryString } from "@explita/utils";

// Build
buildQueryString({ page: "1", sort: "desc", filter: "active" });
// "page=1&sort=desc&filter=active"

// Parse (supports full URL or raw query)
parseQueryString("https://api.example.com/items?page=1&sort=desc");
// { page: "1", sort: "desc" }

parseQueryString("page=1&sort=desc");
// { page: "1", sort: "desc" }
```

---

### `slugify`
Converts arbitrary text into clean URL-friendly slugs.

```typescript
import { slugify } from "@explita/utils";

slugify("How to Build a Modern App in 2026!");
// "how-to-build-a-modern-app-in-2026"
```

---

## 🔍 Validation & Checks

### `isEmpty`
Checks if any value is empty (handles `null`, `undefined`, empty strings, empty arrays, `Map`/`Set`, and empty objects).

```typescript
import { isEmpty } from "@explita/utils";

isEmpty(""); // true
isEmpty("   "); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty(null); // true
isEmpty(new Map()); // true
isEmpty("Hello"); // false
isEmpty({ a: 1 }); // false
```

---

### `isValidEmail` & `isValidPassword`

```typescript
import { isValidEmail, isValidPassword } from "@explita/utils";

isValidEmail("user@example.com"); // true
isValidEmail("not-an-email"); // false

isValidPassword("StrongPass123!"); // true (checks length, uppercase, number, symbol)
```

---

## 🎨 Miscellaneous String Helpers

### `greeting`
Returns a contextual greeting based on local time of day.

```typescript
import { greeting } from "@explita/utils";

greeting("Sarah"); // "Good morning, Sarah" (or afternoon / evening)
```

---

### `uniqueString`
Generates cryptographically random alphanumeric or password-strength strings.

```typescript
import { uniqueString } from "@explita/utils";

uniqueString(16); // "aB3dE5gH1jK2mN4p"
uniqueString(16, true); // "nC4t@h5Ld^3o9Kv1" (with symbols)
```

---

### `hexToRgb` & `rgbToHex`

```typescript
import { hexToRgb, rgbToHex } from "@explita/utils";

hexToRgb("#FF0000"); // "rgb(255, 0, 0)"
rgbToHex(255, 0, 0); // "#FF0000"
```
