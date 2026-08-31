---
sidebar_position: 6
title: React Hooks
---

# React Hooks

A collection of lightweight, SSR-friendly, and fully typed custom React hooks for everyday UI and state workflows.

```typescript
import {
  useLocalStorage,
  useList,
  useDebouncedValue,
  useDisclosure,
  useClipboard,
  useOnClickOutside,
  useMediaQuery,
  useIntersectionObserver,
  usePrevious,
  useIsMounted,
  useNetwork,
  useLocation,
  useWindowSize,
  useWindowScroll,
  stripTags,
} from "@explita/utils/react";
```

---

## State & Storage Hooks

### `useLocalStorage`
Persists state in `localStorage` with automatic JSON serialization, error recovery, and cross-tab/cross-hook synchronization.

```tsx
import { useLocalStorage } from "@explita/utils/react";

function ThemeToggle() {
  const [theme, setTheme, removeTheme] = useLocalStorage("app-theme", "light");

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <button onClick={removeTheme}>Reset</button>
    </div>
  );
}
```

#### Return Value
Returns a tuple `[value, setValue, remove]` also accessible via object properties `{ value, setValue, remove }`.

---

### `useList`
Rich array state management helper providing atomic list manipulation methods.

```tsx
import { useList } from "@explita/utils/react";

function TodoList() {
  const [todos, actions] = useList(["Design UI", "Write Tests"]);

  return (
    <div>
      <button onClick={() => actions.append("Ship to Production")}>
        Add Task
      </button>
      <button onClick={() => actions.filter((task) => !task.includes("Design"))}>
        Filter
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => actions.remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

### `useDebouncedValue`
Debounces input state changes with optional minimum string length constraints and immediate flush support.

```tsx
import { useState, useEffect } from "react";
import { useDebouncedValue } from "@explita/utils/react";

function SearchBar() {
  const [search, debouncedSearch, setSearch, flush] = useDebouncedValue("", {
    delay: 400,
    minLength: 2,
  });

  useEffect(() => {
    if (debouncedSearch) {
      console.log("Fetching API for:", debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Type to search..."
      />
      <button onClick={flush}>Search Now</button>
    </div>
  );
}
```

---

### `useDisclosure`
Manages open, close, and toggle boolean states with optional lifecycle callbacks (ideal for dialogs, drawers, and popovers).

```tsx
import { useDisclosure } from "@explita/utils/react";

function ModalExample() {
  const [isOpen, { open, close, toggle }] = useDisclosure(false, {
    onOpen: () => console.log("Modal opened"),
    onClose: () => console.log("Modal closed"),
  });

  return (
    <div>
      <button onClick={open}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <p>Modal Content</p>
          <button onClick={close}>Close</button>
        </div>
      )}
    </div>
  );
}
```

---

## DOM & UI Hooks

### `useClipboard`
Copies text to the user's clipboard and manages an auto-resetting `copied` feedback state.

```tsx
import { useClipboard } from "@explita/utils/react";

function CopyButton({ apiKey }: { apiKey: string }) {
  const { copy, copied, error } = useClipboard(2500);

  return (
    <div>
      <code>{apiKey}</code>
      <button onClick={() => copy(apiKey)}>
        {copied ? "Copied to clipboard!" : "Copy Key"}
      </button>
      {error && <span className="error">{error.message}</span>}
    </div>
  );
}
```

---

### `useOnClickOutside`
Detects clicks or touches outside of a referenced element to trigger actions like closing dropdowns or dismissing modals.

```tsx
import { useRef, useState } from "react";
import { useOnClickOutside } from "@explita/utils/react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen((prev) => !prev)}>Menu</button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Profile</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      )}
    </div>
  );
}
```

---

### `useMediaQuery`
Listens reactively to any CSS media query string.

```tsx
import { useMediaQuery } from "@explita/utils/react";

function ResponsiveNav() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  return (
    <nav>
      {isMobile ? <MobileMenuButton /> : <DesktopNavigationLinks />}
      <span>Mode: {isDarkMode ? "Dark" : "Light"}</span>
    </nav>
  );
}
```

---

### `useIntersectionObserver`
Monitors element visibility in the viewport using `IntersectionObserver`. Supports one-time triggers via `freezeOnceVisible`.

```tsx
import { useRef } from "react";
import { useIntersectionObserver } from "@explita/utils/react";

function LazyImage({ src, alt }: { src: string; alt: string }) {
  const imageRef = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(imageRef, {
    threshold: 0.2,
    freezeOnceVisible: true,
  });

  const isVisible = !!entry?.isIntersecting;

  return (
    <div ref={imageRef} className="image-container">
      {isVisible ? <img src={src} alt={alt} /> : <div className="placeholder" />}
    </div>
  );
}
```

---

## Lifecycle & Sensor Hooks

### `usePrevious`
Returns the previous value of a prop or state variable from the preceding render.

```tsx
import { useState } from "react";
import { usePrevious } from "@explita/utils/react";

function Counter() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Now: {count}, Before: {prevCount ?? "N/A"}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
```

---

### `useIsMounted`
Returns a callback that reports whether the component is currently mounted, preventing state updates after unmount.

```tsx
import { useEffect, useState } from "react";
import { useIsMounted } from "@explita/utils/react";

function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState<any>(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted()) {
          setUser(data);
        }
      });
  }, [userId, isMounted]);

  return <div>{user ? user.name : "Loading..."}</div>;
}
```

---

### `useNetwork`
Tracks real-time network status, connection speed, bandwidth, and connection type.

```tsx
import { useNetwork } from "@explita/utils/react";

function NetworkBanner() {
  const { online, downlink, effectiveType } = useNetwork();

  if (!online) {
    return <div className="offline-banner">You are currently offline.</div>;
  }

  return (
    <div className="status">
      Connection: {effectiveType} ({downlink} Mbps)
    </div>
  );
}
```

---

### `useLocation`
Retrieves the user's geolocation coordinates with high accuracy and error status.

```tsx
import { useLocation } from "@explita/utils/react";

function GeoWidget() {
  const [location, error, requestLocation] = useLocation();

  return (
    <div>
      {error && <p className="error">Error: {error}</p>}
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <button onClick={requestLocation}>Refresh Location</button>
    </div>
  );
}
```

---

### `useWindowSize` & `useWindowScroll`
Reactive window dimensions and scroll positions.

```tsx
import { useWindowSize, useWindowScroll } from "@explita/utils/react";

function PageIndicator() {
  const { width, isMobile, isDesktop } = useWindowSize();
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <p>Viewport: {width}px ({isMobile ? "Mobile" : "Desktop"})</p>
      <p>Scroll Y: {scroll.y}px</p>
      <button onClick={() => scrollTo({ x: 0, y: 0 })}>Back to Top</button>
    </div>
  );
}
```

---

## Utility Functions

### `stripTags`
Strips HTML tags from strings or React nodes.

```typescript
import { stripTags } from "@explita/utils/react";

stripTags("<p>Hello <strong>World</strong>!</p>");
// "Hello World!"
```
