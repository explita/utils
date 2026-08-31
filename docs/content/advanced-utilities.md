---
sidebar_position: 7
title: Advanced Utilities
---

# Advanced Utilities

Comprehensive guides and usage examples for Async Helpers, Axios Integration, File Exporters, and Zod Form Validation.

---

## ⚡ Async & Misc Helpers

```typescript
import {
  debounce,
  throttle,
  retry,
  delay,
  tryCatch,
  timeout,
  memoize,
  logger,
} from "@explita/utils";
```

### `tryCatch`
Executes async functions or promises and returns a Go-like tuple `[data, error]`, removing the need for nested try-catch blocks.

```typescript
import { tryCatch } from "@explita/utils";

// With a Promise
const [data, error] = await tryCatch(fetchUserData(userId));

if (error) {
  console.error("Failed to fetch user:", error.message);
  return;
}

console.log("User data:", data);

// With an async function / thunk
const [result, err] = await tryCatch(async () => {
  const response = await fetch("/api/endpoint");
  return response.json();
});
```

---

### `timeout`
Wraps any promise with a hard timeout deadline that rejects if the operation does not settle in time.

```typescript
import { timeout } from "@explita/utils";

try {
  const data = await timeout(
    fetch("https://api.example.com/slow-endpoint"),
    5000,
    "Request took longer than 5 seconds",
  );
} catch (err) {
  console.error(err.message); // "Request took longer than 5 seconds"
}
```

---

### `retry`
Retries a failing asynchronous operation a specified number of attempts with error propagation.

```typescript
import { retry } from "@explita/utils";

const data = await retry(
  async () => {
    return await api.getPaymentStatus(orderId);
  },
  3, // number of retry attempts
);
```

---

### `memoize`
Caches the return value of a function based on arguments. Includes direct access to the `.cache` map.

```typescript
import { memoize } from "@explita/utils";

const calculateFactorial = memoize((n: number): number => {
  if (n <= 1) return 1;
  return n * calculateFactorial(n - 1);
});

calculateFactorial(5); // Computes and caches
calculateFactorial(5); // Returns cached value immediately

// Clear cache if needed
calculateFactorial.cache.clear();
```

---

### `debounce` & `throttle`
Rate limits high-frequency function calls.

```typescript
import { debounce, throttle } from "@explita/utils";

// Debounce search input
const handleSearch = debounce((query: string) => {
  performSearch(query);
}, 300);

// Cancel pending debounced execution
handleSearch.cancel();

// Throttle scroll handler
const handleScroll = throttle(() => {
  checkScrollPosition();
}, 200);
```

---

### `delay`
Promisified sleep helper.

```typescript
import { delay } from "@explita/utils";

await delay(1000); // Pauses execution for 1 second
```

---

## 🌐 Axios Utilities

Specialized error-normalized wrapper around Axios requests with structured categorization.

```typescript
import { tryAxios } from "@explita/utils/axios";
import axios from "axios";

interface UserResponse {
  id: string;
  name: string;
}

interface ApiErrorResponse {
  message: string;
  errors?: Record<string, string[]>;
}

async function loadUser(userId: string) {
  const [data, error] = await tryAxios<UserResponse, ApiErrorResponse>(
    axios.get(`/api/users/${userId}`),
  );

  if (error) {
    // Categorized error kind: "network" | "logic" | "unknown"
    console.log("Error category:", error.kind);

    // Error snapshot metadata: name, message, stack
    console.log("Metadata:", error.meta);

    // Normalized message or backend error fields
    console.log("Message:", error.message);
    return null;
  }

  return data;
}
```

---

## 💾 File Exporters (Browser Only)

Browser-side utilities to generate and trigger automatic downloads for CSV, JSON, and XML files.

```typescript
import {
  saveCSVToFile,
  saveJSONToFile,
  saveXMLToFile,
} from "@explita/utils/file";

const reportData = [
  { id: 101, name: "Widget A", sales: 450 },
  { id: 102, name: "Widget B", sales: 820 },
];

// Export as CSV
saveCSVToFile(reportData, "monthly-sales.csv");

// Export as formatted JSON
saveJSONToFile(reportData, "backup-config.json");

// Export as XML
saveXMLToFile(reportData, "sales-report.xml");
```

---

## 🛡️ Zod Validation Helpers

Helpers for working with Zod schemas and HTML Form validation.

```typescript
import {
  validateForm,
  mapZodIssues,
  createDefaultValues,
} from "@explita/utils/zod";
import { z } from "zod";

const UserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18"),
});

// 1. Generate default form state from schema
const initialValues = createDefaultValues(UserSchema);
// { username: "", email: "", age: "" }

// 2. Validate FormData or object
async function handleSubmit(formData: FormData) {
  const result = await validateForm(formData, UserSchema);

  if (!result.success) {
    // result.errors is a clean mapped Record<string, string>
    console.log("Field errors:", result.errors);
    console.log("Display message:", result.message);
    return;
  }

  // result.data is strongly typed z.infer<typeof UserSchema>
  console.log("Validated user:", result.data);
}
```
