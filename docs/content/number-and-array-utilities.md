---
sidebar_position: 5
title: Number & Array Utilities
---

# Number & Array Utilities

Powerful, non-mutating helpers for arrays and numeric calculations.

```typescript
import {
  chunk,
  keyBy,
  groupBy,
  sortBy,
  partition,
  intersection,
  difference,
  unique,
  uniqueByKey,
  findDuplicates,
  shuffleArray,
  flatten,
  clamp,
  formatCompactNumber,
  range,
  percentage,
  randomNumber,
  isNumeric,
} from "@explita/utils";
```

---

## 🗂️ Array Utilities

### `keyBy`
Converts an array of objects into a lookup dictionary keyed by a property.

```typescript
import { keyBy } from "@explita/utils";

const users = [
  { id: "u_1", name: "Alice", role: "Admin" },
  { id: "u_2", name: "Bob", role: "Member" },
];

const lookup = keyBy(users, "id");
/*
{
  "u_1": { id: "u_1", name: "Alice", role: "Admin" },
  "u_2": { id: "u_2", name: "Bob", role: "Member" }
}
*/
```

---

### `groupBy`
Groups array elements by a shared property value into arrays.

```typescript
import { groupBy } from "@explita/utils";

const inventory = [
  { category: "fruit", name: "Apple" },
  { category: "fruit", name: "Banana" },
  { category: "grain", name: "Rice" },
];

groupBy(inventory, "category");
/*
{
  fruit: [{ category: "fruit", name: "Apple" }, { category: "fruit", name: "Banana" }],
  grain: [{ category: "grain", name: "Rice" }]
}
*/
```

---

### `sortBy`
Non-mutating sort by object keys or custom iteratee functions with ascending / descending order.

```typescript
import { sortBy } from "@explita/utils";

const items = [
  { name: "Product C", price: 30 },
  { name: "Product A", price: 10 },
  { name: "Product B", price: 20 },
];

// Sort by property ascending
sortBy(items, "price");
// [{ price: 10, ... }, { price: 20, ... }, { price: 30, ... }]

// Sort by custom getter descending
sortBy(items, (item) => item.price, "desc");
// [{ price: 30, ... }, { price: 20, ... }, { price: 10, ... }]
```

---

### `partition`
Splits an array into two arrays based on a truthy / falsy predicate.

```typescript
import { partition } from "@explita/utils";

const numbers = [1, 2, 3, 4, 5, 6];
const [evens, odds] = partition(numbers, (n) => n % 2 === 0);

console.log(evens); // [2, 4, 6]
console.log(odds);  // [1, 3, 5]
```

---

### `chunk`
Splits an array into smaller sub-arrays of a specified chunk size.

```typescript
import { chunk } from "@explita/utils";

chunk([1, 2, 3, 4, 5, 6, 7], 3);
// [[1, 2, 3], [4, 5, 6], [7]]
```

---

### `intersection` & `difference`
Set-based mathematical operations on arrays.

```typescript
import { intersection, difference } from "@explita/utils";

// Common elements in all arrays
intersection([1, 2, 3], [2, 3, 4], [3, 5]);
// [3]

// Elements in the first array not present in other arrays
difference([1, 2, 3, 4], [2, 4]);
// [1, 3]
```

---

### `unique` & `uniqueByKey`
Removes duplicate values from primitive arrays or object arrays.

```typescript
import { unique, uniqueByKey } from "@explita/utils";

unique([1, 2, 2, 3, 1]); 
// [1, 2, 3]

uniqueByKey(
  [
    { id: 1, name: "Item A" },
    { id: 2, name: "Item B" },
    { id: 1, name: "Item A" },
  ],
  "id"
);
// [{ id: 1, name: "Item A" }, { id: 2, name: "Item B" }]
```

---

### `findDuplicates`
Identifies duplicate records in an array of objects based on a key.

```typescript
import { findDuplicates } from "@explita/utils";

const employees = [
  { email: "john@doe.com", name: "John" },
  { email: "jane@doe.com", name: "Jane" },
  { email: "john@doe.com", name: "John 2" },
];

findDuplicates(employees, "email", "Duplicate email found");
/*
[
  { _index: 2, email: "Duplicate email found" },
  { _index: 0, email: "Duplicate email found" }
]
*/
```

---

### `shuffleArray` & `flatten`

```typescript
import { shuffleArray, flatten } from "@explita/utils";

// Non-mutating Fisher-Yates shuffle
shuffleArray([1, 2, 3, 4, 5]); 
// [3, 1, 5, 2, 4]

// Deep array flattening
flatten([1, [2, [3, [4, 5]]]]);
// [1, 2, 3, 4, 5]
```

---

## 🔢 Number Utilities

### `clamp`
Restricts a value within minimum and maximum bounds.

```typescript
import { clamp } from "@explita/utils";

clamp(105, 0, 100); // 100 (capped at max)
clamp(-15, 0, 100); // 0   (capped at min)
clamp(42, 0, 100);  // 42  (within range)
```

---

### `formatCompactNumber`
Formats large numbers into compact human-readable representations.

```typescript
import { formatCompactNumber } from "@explita/utils";

formatCompactNumber(1250);     // "1.3K"
formatCompactNumber(2500000);  // "2.5M"
formatCompactNumber(8900000000); // "8.9B"
```

---

### `range`
Generates an array of sequential numbers with optional step.

```typescript
import { range } from "@explita/utils";

range(1, 5);     // [1, 2, 3, 4, 5]
range(0, 10, 2); // [0, 2, 4, 6, 8, 10]
range(3);        // [0, 1, 2, 3]
```

---

### `percentage`
Calculates percentage of a value relative to a total.

```typescript
import { percentage } from "@explita/utils";

percentage(200, 50);    // 25
percentage(3, 1, 2);    // 33.33 (precision = 2)
```

---

### `isNumeric` & `randomNumber`

```typescript
import { isNumeric, randomNumber } from "@explita/utils";

isNumeric("123.45"); // true
isNumeric("abc");    // false
isNumeric(NaN);      // false

randomNumber(6); // 6-digit random number (e.g. 583920)
```
