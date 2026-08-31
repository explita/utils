---
sidebar_position: 3
title: Object Utilities
---

# Object Utilities

Type-safe object manipulation utilities for deep merging, property retrieval, object compaction, flattening, picking, and serialization.

```typescript
import {
  deepMerge,
  get,
  compactObject,
  pickFromObject,
  omitFromObject,
  prependKeys,
  flattenObject,
  unflattenObject,
  isObject,
  jsonify,
} from "@explita/utils";
```

---

## 🛠️ Object Manipulation

### `deepMerge`
Recursively merges properties of two objects without mutating the target or corrupting atomic types like `Date` or `RegExp`.

```typescript
import { deepMerge } from "@explita/utils";

const target = {
  theme: { colors: { primary: "#000", secondary: "#fff" } },
  notifications: true,
};

const source = {
  theme: { colors: { primary: "#0070f3" } },
  version: "2.0",
};

const merged = deepMerge(target, source);
/*
{
  theme: {
    colors: {
      primary: "#0070f3",
      secondary: "#fff"
    }
  },
  notifications: true,
  version: "2.0"
}
*/
```

---

### `get`
Safely retrieves nested values using dot-notation paths or array paths with a fallback default.

```typescript
import { get } from "@explita/utils";

const data = {
  user: {
    profile: {
      addresses: [{ city: "San Francisco" }],
    },
  },
};

get(data, "user.profile.addresses.0.city"); // "San Francisco"
get(data, "user.settings.theme", "dark"); // "dark" (default value fallback)
get(data, "invalid.deep.path"); // undefined
```

---

### `compactObject`
Removes `null` and `undefined` (and optionally empty string) fields from an object. Ideal for cleaning query parameters and API payloads.

```typescript
import { compactObject } from "@explita/utils";

const formPayload = {
  name: "Sarah",
  age: 28,
  middleName: null,
  bio: undefined,
  website: "",
};

compactObject(formPayload);
// { name: "Sarah", age: 28, website: "" }

compactObject(formPayload, { removeEmptyStrings: true });
// { name: "Sarah", age: 28 }
```

---

### `pickFromObject` & `omitFromObject`
Creates new objects by including or excluding specified keys.

```typescript
import { pickFromObject, omitFromObject } from "@explita/utils";

const user = {
  id: "u_1",
  name: "John Doe",
  email: "john@example.com",
  passwordHash: "secret_hash",
  role: "admin",
};

// Pick only public fields
pickFromObject(user, ["id", "name", "email"]);
// { id: "u_1", name: "John Doe", email: "john@example.com" }

// Omit sensitive fields
omitFromObject(user, ["passwordHash"]);
// { id: "u_1", name: "John Doe", email: "john@example.com", role: "admin" }
```

---

### `prependKeys`
Prepends a prefix to all keys in an object (useful for query parameters, database joins, or table mapping).

```typescript
import { prependKeys } from "@explita/utils";

const userFilter = { name: "Alice", active: true };

prependKeys(userFilter, "user_");
// { user_name: "Alice", user_active: true }
```

---

## 🗜️ Flatten & Unflatten

### `flattenObject` & `unflattenObject`
Converts between deeply nested objects and flat objects with dot-delimited keys.

```typescript
import { flattenObject, unflattenObject } from "@explita/utils";

const nested = {
  app: {
    settings: {
      theme: "dark",
      features: ["auth", "analytics"],
    },
  },
};

// Flatten to dot notation
const flat = flattenObject(nested);
/*
{
  "app.settings.theme": "dark",
  "app.settings.features.0": "auth",
  "app.settings.features.1": "analytics"
}
*/

// Unflatten back to nested structure
const reconstructed = unflattenObject(flat);
// Equivalent to original `nested` object
```

---

## 🔍 Validation & Serialization

### `isObject`
Type guard that returns `true` exclusively for plain JavaScript objects (excluding arrays, `Date`, `RegExp`, `Map`, `Set`, and `null`).

```typescript
import { isObject } from "@explita/utils";

isObject({ a: 1 }); // true
isObject({}); // true
isObject([]); // false
isObject(new Date()); // false
isObject(null); // false
```

---

### `jsonify`
Prepares complex data structures for JSON serialization by properly encoding `BigInt` values and reviving ISO date strings back into `Date` instances.

```typescript
import { jsonify } from "@explita/utils";

const payload = {
  id: BigInt(9007199254740991),
  createdAt: "2024-01-25T14:30:00.000Z",
};

const processed = jsonify(payload);
// processed.id is number/string safe for JSON
// processed.createdAt is revived into a Date object instance
```
