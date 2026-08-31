---
sidebar_position: 4
title: Date Utilities
---

# Date Utilities

A comprehensive collection of date manipulation, comparison, humanization, and formatting helpers.

```typescript
import {
  formatDate,
  formatTime,
  formatDateTime,
  formatRelative,
  timeAgo,
  timeUntil,
  extractDate,
  startOfDay,
  endOfDay,
  minDate,
  maxDate,
  isFuture,
  isPast,
  isToday,
  isWithinInterval,
  toDate,
} from "@explita/utils";
```

---

## 🎨 Formatting & Humanization

### `formatDate`
Formats dates using flexible token patterns and escaped literals.

```typescript
import { formatDate } from "@explita/utils";

const date = new Date("2024-01-25T14:30:05");

formatDate(date); // "25/01/2024" (default pattern: DD/MM/YYYY)
formatDate(date, "YYYY-MM-DD"); // "2024-01-25"
formatDate(date, "MMMM D, YYYY"); // "January 25, 2024"
formatDate(date, "ddd, MMM DD"); // "Thu, Jan 25"
formatDate(date, "[Year:] YYYY"); // "Year: 2024" (brackets escape literals)
```

---

### `formatTime`
Formats time components with 12h/24h tokens and milliseconds.

```typescript
import { formatTime } from "@explita/utils";

const date = new Date("2024-01-25T14:30:05");

formatTime(date); // "02:30PM" (default: hh:mmA)
formatTime(date, "HH:mm:ss"); // "14:30:05" (24-hour)
formatTime(date, "h:mm a"); // "2:30 pm"
```

---

### `formatRelative`
Formats a date relative to the current day.

```typescript
import { formatRelative } from "@explita/utils";

formatRelative(new Date()); // "Today at 02:30PM"
formatRelative(Date.now() - 86400000); // "Yesterday at 02:30PM"
formatRelative(Date.now() + 86400000); // "Tomorrow at 02:30PM"
formatRelative("2024-01-25T14:30:00"); // "25/01/2024 at 02:30PM"
```

---

### `timeAgo`
Converts past timestamps into human-readable relative time strings (resilient against slight server clock skew).

```typescript
import { timeAgo } from "@explita/utils";

timeAgo(new Date(Date.now() - 10000)); // "a few seconds ago"
timeAgo(Date.now() - 5 * 60 * 1000); // "5 minutes ago"
timeAgo("2024-01-01"); // "X months ago"
```

---

### `timeUntil`
Calculates remaining time until a future date.

```typescript
import { timeUntil } from "@explita/utils";

timeUntil(Date.now() + 10 * 60 * 1000); // "in 10 minutes"
timeUntil(Date.now() + 2 * 3600 * 1000); // "in 2 hours"
timeUntil("2099-01-01"); // "in 75 years"
```

---

### `extractDate`
Extracts the local calendar date portion as a `YYYY-MM-DD` string without timezone shift.

```typescript
import { extractDate } from "@explita/utils";

extractDate(new Date("2024-01-25T14:30:00")); // "2024-01-25"
```

---

## 🔍 Comparisons & Checks

### `isFuture` & `isPast`
Checks whether a timestamp is in the future or past. Supports date-only comparison.

```typescript
import { isFuture, isPast } from "@explita/utils";

// Exact timestamp comparison (default: includeTime = true)
isFuture(new Date(Date.now() + 5000)); // true
isPast(new Date(Date.now() - 5000)); // true

// Date-only comparison (includeTime = false)
// isFuture treats today as valid until the day ends
isFuture("2099-01-01", false); // true
isPast("2000-01-01", false); // true
```

---

### `isToday`, `isTomorrow` & `isYesterday`

```typescript
import { isToday, isTomorrow, isYesterday } from "@explita/utils";

isToday(new Date()); // true
isTomorrow(new Date(Date.now() + 86400000)); // true
isYesterday(new Date(Date.now() - 86400000)); // true
```

---

### `isWithinInterval`
Checks if a target date falls within a start and end interval.

```typescript
import { isWithinInterval } from "@explita/utils";

isWithinInterval("2024-01-15", {
  start: "2024-01-01",
  end: "2024-01-31",
  ignoreTime: true,
}); // true
```

---

## ⏱️ Differences & Math

### `daysBetween`, `hoursBetween`, `minutesBetween`

```typescript
import { daysBetween, hoursBetween, minutesBetween } from "@explita/utils";

daysBetween("2024-01-01", "2024-01-11"); // 10
hoursBetween("2024-01-01T00:00:00", "2024-01-01T05:00:00"); // 5
minutesBetween("2024-01-01T12:00:00", "2024-01-01T12:45:00"); // 45
```

---

### `minDate` & `maxDate`
Returns the earliest or latest date from an array of dates, strings, or timestamps.

```typescript
import { minDate, maxDate } from "@explita/utils";

const dates = ["2024-01-01", new Date("2024-06-01"), Date.now()];

minDate(dates); // Date object for "2024-01-01"
maxDate(dates); // Date object for latest timestamp
minDate([]); // null
```

---

## 🔄 Manipulations & Boundaries

### `startOfDay` & `endOfDay`

```typescript
import { startOfDay, endOfDay } from "@explita/utils";

const d = new Date("2024-05-15T18:30:00");

startOfDay(d); // 2024-05-15 00:00:00.000
endOfDay(d); // 2024-05-15 23:59:59.999
```

---

### `shiftDays`, `shiftMonths`, `shiftYears`

```typescript
import { shiftDays, shiftMonths, shiftYears, shiftTime } from "@explita/utils";

const baseDate = new Date("2024-01-15");

shiftDays(baseDate, 5); // 2024-01-20
shiftDays(baseDate, -5); // 2024-01-10
shiftMonths(baseDate, 1); // 2024-02-15
shiftYears(baseDate, 1); // 2025-01-15

// Shift multiple units at once
shiftTime({ days: 2, hours: 3 }, baseDate);
```

---

### `toDate`
Safely converts any `Date`, string, or number timestamp into a valid `Date` object (returns `null` if invalid).

```typescript
import { toDate } from "@explita/utils";

toDate("2024-01-25"); // Date instance
toDate(1706189400000); // Date instance
toDate("invalid-string"); // null
toDate(null); // null
```
