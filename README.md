## @explita/utils

A lightweight and versatile collection of TypeScript utility functions and React hooks designed for everyday development needs. Streamline your Node.js, React, and Next.js projects with a powerful set of well-organized helpers for strings, arrays, dates, objects, and more.

#### Features

- **String Manipulation**: Comprehensive set of helpers for formatting, casing, and slugifying.
- **Object Transformation**: Deep merge, flatten, and unflatten objects with type safety.
- **Date Utilities**: Extensive helpers for formatting, shifting, and comparing dates.
- **Array Utilities**: Chunking, duplication finding, and shuffling.
- **React Hooks**: Premium hooks like `useList`, `useLocalStorage` (with cross-tab sync), and more.
- **File Export**: Save data as CSV, XML, or JSON directly from the browser.
- **Type Safety**: Built with TypeScript from the ground up.

#### Installation

```bash
# npm
npm install @explita/utils

# pnpm
pnpm add @explita/utils

# yarn
yarn add @explita/utils
```

---

#

### 📚 API Reference

#### 🧵 String Utilities

`import { ... } from "@explita/utils"`

| Function           | Description                           | Example                                            |
| :----------------- | :------------------------------------ | :------------------------------------------------- |
| `addOrdinal`       | Appends ordinal suffix to number.     | `addOrdinal(1) // "1st"`                           |
| `buildQueryString` | Builds query string from object.      | `buildQueryString({a:1}) // "a=1"`                 |
| `capitalize`       | Capitalizes the first letter.         | `capitalize("hello") // "Hello"`                   |
| `chunkSplit`       | Splits string with separator.         | `chunkSplit("123456", 3, "-") // "123-456"`        |
| `convertFileSize`  | Formats bytes to human-readable.      | `convertFileSize(1024) // "1.0 KB"`                |
| `formatCurrency`   | Formats number as currency.           | `formatCurrency(1000, "$") // "$1,000.00"`         |
| `greeting`         | Returns greeting based on time.       | `greeting("John") // "Good morning John"`          |
| `hexToRgb`         | Converts Hex color to RGB.            | `hexToRgb("#FF0000") // "rgb(255, 0, 0)"`          |
| `isEmpty`          | Checks if value is empty/null.        | `isEmpty("") // true`                              |
| `isValidEmail`     | Validates email format.               | `isValidEmail("test@test.com") // true`            |
| `isValidPassword`  | Validates password strength.          | `isValidPassword("Pass123!") // true`              |
| `isValidPhone`     | Validates phone number.               | `isValidPhone("+1234567") // true`                 |
| `nl2br`            | Replaces `\n` with `<br>`.            | `nl2br("hi\nthere") // "hi<br>there"`              |
| `parseQueryString` | Parses URL query to object.           | `parseQueryString("?a=1") // {a: "1"}`             |
| `randomColor`      | Generates random color (hex/rgb/hsl). | `randomColor("hex")`                               |
| `rgbToHex`         | Converts RGB color to Hex.            | `rgbToHex(255, 0, 0) // "#FF0000"`                 |
| `slugify`          | Creates a URL-friendly slug.          | `slugify("Hello World!") // "hello-world"`         |
| `toCamelCase`      | Converts string to camelCase.         | `toCamelCase("hello-world") // "helloWorld"`       |
| `toKebabCase`      | Converts string to kebab-case.        | `toKebabCase("Hello World") // "hello-world"`      |
| `toRomanNumeral`   | Converts number to Roman.             | `toRomanNumeral(4) // "IV"`                        |
| `toSentenceCase`   | Converts string to Sentence case.     | `toSentenceCase("hello world") // "Hello world"`   |
| `toSnakeCase`      | Converts string to snake_case.        | `toSnakeCase("Hello World") // "hello_world"`      |
| `toTitleCase`      | Converts string to Title Case.        | `toTitleCase("hello_world") // "Hello World"`      |
| `truncateEmail`    | Hides parts of an email.              | `truncateEmail("john@doe.com") // "jo***@doe.com"` |
| `uniqueString`     | Generates a random string.            | `uniqueString(10) // "aB3dE5gH1j"`                 |

---

#

#### 📦 Object Utilities

`import { ... } from "@explita/utils"`

| Function          | Description                        | Example                                    |
| :---------------- | :--------------------------------- | :----------------------------------------- |
| `deepMerge`       | Deeply merges two objects.         | `deepMerge({a:1}, {b:2}) // {a:1, b:2}`    |
| `flattenObject`   | Flattens a nested object.          | `flattenObject({a:{b:1}}) // {"a.b": 1}`   |
| `isObject`        | Checks if value is a plain object. | `isObject({}) // true`                     |
| `jsonify`         | Handles BigInts & Dates for JSON.  | `jsonify(objWithBigInt)`                   |
| `omitFromObject`  | Removes specific keys.             | `omitFromObject(obj, ['password'])`        |
| `pickFromObject`  | Picks specific keys.               | `pickFromObject(obj, ['id', 'name'])`      |
| `prependKeys`     | Adds prefix to all object keys.    | `prependKeys({a:1}, "p_") // {p_a: 1}`     |
| `unflattenObject` | Restores a flattened object.       | `unflattenObject({"a.b": 1}) // {a:{b:1}}` |

---

#

#### 📅 Date Utilities

`import { ... } from "@explita/utils"`

| Function           | Description                       | Example                                |
| :----------------- | :-------------------------------- | :------------------------------------- |
| `formatDate`       | Advanced date formatting.         | `formatDate(date, "YYYY-MM-DD")`       |
| `formatTime`       | Advanced time formatting.         | `formatTime(date, "hh:mm A")`          |
| `formatDateTime`   | Combined date & time format.      | `formatDateTime(date)`                 |
| `timeAgo`          | Returns relative time string.     | `timeAgo(pastDate) // "2 hours ago"`   |
| `dayOfYear`        | Gets day number of the year.      | `dayOfYear(date) // 1-366`             |
| `daysBetween`      | Calculates diff in days.          | `daysBetween(date1, date2)`            |
| `daysInMonth`      | Gets number of days in month.     | `daysInMonth(2024, 1) // 29`           |
| `daysSince`        | Days elapsed since date.          | `daysSince(pastDate)`                  |
| `daysUntil`        | Days remaining until date.        | `daysUntil(futureDate)`                |
| `endOfMonth`       | Returns last moment of month.     | `endOfMonth(date)`                     |
| `extractDate`      | Gets `YYYY-MM-DD` string.         | `extractDate(date)`                    |
| `extractDOB`       | Parses DOB from identifier.       | `extractDOB("ID_NUMBER")`              |
| `firstDayOfMonth`  | Returns first day of month Date.  | `firstDayOfMonth(date)`                |
| `getDayName`       | Gets full day name.               | `getDayName(date) // "Monday"`         |
| `getMonthName`     | Gets full month name.             | `getMonthName(date) // "January"`      |
| `isFuture`         | Checks if date is in future.      | `isFuture(date)`                       |
| `isPast`           | Checks if date is in past.        | `isPast(date)`                         |
| `isToday`          | Checks if date is today.          | `isToday(date)`                        |
| `isValidDate`      | Robust valid date check.          | `isValidDate("2024-01-01") // true`    |
| `isWeekday`        | Checks if day is Mon-Fri.         | `isWeekday(date)`                      |
| `isWeekend`        | Checks if day is Sat-Sun.         | `isWeekend(date)`                      |
| `isWithinInterval` | Checks if date is in range.       | `isWithinInterval(date, {start, end})` |
| `isYesterday`      | Checks if date was yesterday.     | `isYesterday(date)`                    |
| `lastDayOfMonth`   | Returns last day of month Date.   | `lastDayOfMonth(date)`                 |
| `normalizeDate`    | Sets time to 00:00:00.            | `normalizeDate(date)`                  |
| `shiftDays`        | Adds/subtracts days.              | `shiftDays(date, 5)`                   |
| `shiftMonths`      | Adds/subtracts months.            | `shiftMonths(date, 1)`                 |
| `shiftYears`       | Adds/subtracts years.             | `shiftYears(date, 1)`                  |
| `startOfMonth`     | Returns first moment of month.    | `startOfMonth(date)`                   |
| `toDate`           | Robust conversion to Date object. | `toDate("2024-01-01")`                 |
| `weekOfYear`       | Gets week number of the year.     | `weekOfYear(date)`                     |

---

#

#### 🔢 Number Utilities

`import { ... } from "@explita/utils"`

| Function     | Description                 | Example                       |
| :----------- | :-------------------------- | :---------------------------- |
| `isNumeric`  | Robust numeric check.       | `isNumeric("123.45") // true` |
| `percentage` | Calculates percentage.      | `percentage(50, 200) // 25`   |
| `random`     | Generates a random integer. | `random(1, 100)`              |

---

#

#### 🧪 Array Utilities

`import { ... } from "@explita/utils"`

| Function         | Description                | Example                                 |
| :--------------- | :------------------------- | :-------------------------------------- |
| `chunk`          | Splits array into sizes.   | `chunk([1,2,3,4], 2) // [[1,2], [3,4]]` |
| `findDuplicates` | Finds duplicates by key.   | `findDuplicates(data, 'email')`         |
| `flattenArray`   | Flattens a nested array.   | `flattenArray([[1], [2]]) // [1, 2]`    |
| `groupByKey`     | Groups objects by key.     | `groupByKey(users, 'role')`             |
| `shuffle`        | Randomizes array order.    | `shuffle([1, 2, 3])`                    |
| `unique`         | Removes duplicates.        | `unique([1, 2, 2, 3]) // [1, 2, 3]`     |
| `uniqueByKey`    | Removes duplicates by key. | `uniqueByKey(data, 'id')`               |

---

#

#### ⚡ Misc Utilities

`import { ... } from "@explita/utils"`

| Function   | Description                     | Example                       |
| :--------- | :------------------------------ | :---------------------------- |
| `debounce` | Limits function execution rate. | `debounce(fn, 500)`           |
| `delay`    | Promisified timeout.            | `await delay(1000)`           |
| `retry`    | Retries a failing function.     | `await retry(fn, {times: 3})` |
| `throttle` | Limits execution frequency.     | `throttle(fn, 500)`           |
| `tryAxios` | Optimized tryCatch for Axios.   | `tryAxios(api.get(url))`      |
| `tryCatch` | Clean async error handling.     | `tryCatch(fetch(url))`        |

---

#

#### 💾 File Utilities (Browser Only)

`import { ... } from "@explita/utils/file"`

| Function         | Description           | Example                          |
| :--------------- | :-------------------- | :------------------------------- |
| `saveCSVToFile`  | Exports data as CSV.  | `saveCSVToFile(data, "users")`   |
| `saveJSONToFile` | Exports data as JSON. | `saveJSONToFile(data, "config")` |
| `saveXMLToFile`  | Exports data as XML.  | `saveXMLToFile(data, "report")`  |

---

#

#### 🛡️ Zod Validation

`import { ... } from "@explita/utils/zod"`

| Function              | Description                                                                 | Example                       |
| :-------------------- | :-------------------------------------------------------------------------- | :---------------------------- |
| `validateForm`        | Validates FormData or objects using Zod schemas with clean error responses. | `validateForm(data, schema)`  |
| `mapZodIssues`        | Converts Zod issues into a flat `Record<string, string>`.                   | `mapZodIssues(error.issues)`  |
| `createDefaultValues` | Generates initial values based on a Zod schema.                             | `createDefaultValues(schema)` |
| `isZodIssue`          | Type guard for Zod issues.                                                  | `isZodIssue(error)`           |

---

#

#### ⚛️ React Hooks

`import { ... } from "@explita/utils/react"`

| Hook              | Description                                                          |
| :---------------- | :------------------------------------------------------------------- |
| `stripTags`       | Utility to strip HTML tags from string or ReactNode.                 |
| `useDisclosure`   | Open/Close/Toggle management for modals and drawers.                 |
| `useList`         | Advanced state management for arrays (append, filter, remove, etc.). |
| `useLocalStorage` | Persistent state with auto-serialization and cross-tab sync.         |
| `useLocation`     | Geolocation manager with permission handling.                        |
| `useNetwork`      | Current online status and connection details (rtt, downlink).        |
| `useWindowScroll` | Reactive scroll positions and programmatic scroll helpers.           |
| `useWindowSize`   | Responsive window dimensions and device type booleans.               |

#

**Example Usage:**

```tsx
import { useList, useLocalStorage } from "@explita/utils/react";

function App() {
  const [items, { append, remove }] = useList(["Task 1"]);
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <div className={theme}>
      <button onClick={() => append("New Task")}>Add</button>
      {items.map((it, i) => (
        <div onClick={() => remove(i)}>{it}</div>
      ))}
    </div>
  );
}
```

---

#

### 📄 License

MIT © [Explita](https://github.com/explita)
