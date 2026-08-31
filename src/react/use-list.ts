import { useState, useCallback } from "react";

/**
 * A React hook for managing a list of items. The returned list can be modified
 * using the following methods:
 *
 * **Mutating methods:**
 * - `applyWhere`: Applies a callback function to each item in the list that
 *   matches the condition.
 * - `clear`: Removes all items from the list.
 * - `filter`: Removes all items from the list that do not match the condition.
 * - `insert`: Inserts items at the specified index in the list.
 * - `map`: Applies a callback function to each item in the list.
 * - `move`: Moves an item from one index to another.
 * - `moveDown`: Moves an item one position down (increases index).
 * - `moveUp`: Moves an item one position up (decreases index).
 * - `pop`: Removes the last item from the list.
 * - `prepend`: Inserts items at the beginning of the list.
 * - `push`: Adds new items to the end of the list.
 * - `remove`: Removes the items at the specified indices from the list.
 * - `removeIf`: Removes all items matching a condition.
 * - `replaceWhere`: Replaces all items matching a condition with a new value.
 * - `set`: Replaces the current list with the new items.
 * - `shift`: Removes the first item from the list.
 * - `sort`: Sorts the list using a compare function.
 * - `swap`: Swaps two items by their indices.
 * - `toggle`: Adds an item if not present, removes it if already present.
 * - `updateAt`: Updates the item at a specific index, or the first item
 *   matching a predicate.
 *
 * **Read-only methods:**
 * - `chunk`: Splits the list into groups of a given size.
 * - `every`: Checks whether all items match a condition.
 * - `findIndex`: Returns the index of the first item matching a condition.
 * - `first`: Returns the first item, or `undefined` if the list is empty.
 * - `includes`: Checks whether an item (or an item matching a predicate)
 *   exists in the list.
 * - `indexOf`: Returns the index of an item using `===`, or `-1`.
 * - `isEmpty`: Returns `true` if the list has no items.
 * - `isFirst`: Checks whether an item is at the first position.
 * - `isLast`: Checks whether an item is at the last position.
 * - `keys`: Returns an array of all indices in the list.
 * - `last`: Returns the last item, or `undefined` if the list is empty.
 * - `slice`: Returns a shallow copy of a portion of the list.
 * - `some`: Checks whether at least one item matches a condition.
 *
 * **Utility methods:**
 * - `reverse`: Reverses the list (immutable).
 * - `unique`: Removes duplicate items, optionally by a key function.
 *
 * The hook returns an array with two elements. The first element is the list
 * itself, and the second element is an object with the above methods.
 *
 * @param initialValue The initial value of the list (defaults to `[]`).
 * @returns A tuple containing the list and an object with the above methods.
 */
export function useList<T>(initialValue: T[] = []) {
  const [list, setList] = useState<T[]>(initialValue);

  // ── Mutating methods ──────────────────────────────────────────────

  /**
   * Adds new items to the end of the list.
   *
   * @param items The items to push.
   */
  const push = useCallback((...items: T[]) => {
    setList((prev) => [...prev, ...items]);
  }, []);

  /**
   * Applies a callback function to each item in the list, replacing each
   * with the return value.
   *
   * @param callback The function to apply to each item.
   */
  const map = useCallback((callback: (value: T) => T) => {
    setList((prev) => prev.map(callback));
  }, []);

  /**
   * Applies a callback function to each item that matches the condition,
   * replacing it with the return value. Items that don't match are left
   * unchanged.
   *
   * @param condition The condition to test each item against.
   * @param fn The function to apply to matching items.
   */
  const applyWhere = useCallback(
    (condition: (item: T) => boolean, fn: (value: T) => T) => {
      setList((prev) =>
        prev.map((item) => (condition(item) ? fn(item) : item)),
      );
    },
    [],
  );

  /**
   * Removes all items from the list.
   */
  const clear = useCallback(() => {
    setList([]);
  }, []);

  /**
   * Removes all items from the list that do **not** match the condition.
   *
   * @param fn The condition to test each item against. Items that return
   *           `true` are kept.
   */
  const filter = useCallback((fn: (value: T) => boolean) => {
    setList((prev) => prev.filter(fn));
  }, []);

  /**
   * Inserts items at the specified index in the list.
   *
   * @param index The index at which to insert the items.
   * @param items The items to insert.
   */
  const insert = useCallback((index: number, ...items: T[]) => {
    setList((prev) => {
      const newList = [...prev];
      newList.splice(index, 0, ...items);
      return newList;
    });
  }, []);

  /**
   * Moves an item from one index to another, shifting other items as needed.
   *
   * @param from The index of the item to move.
   * @param to The target index to move the item to.
   */
  const move = useCallback((from: number, to: number) => {
    setList((prev) => {
      const newList = [...prev];
      const [moved] = newList.splice(from, 1);
      newList.splice(to, 0, moved);
      return newList;
    });
  }, []);

  /**
   * Moves an item one position down (increases its index by one). If the
   * item is already last, this is a no-op.
   *
   * @param index The index of the item to move down.
   */
  const moveDown = useCallback((index: number) => {
    setList((prev) => {
      if (index >= prev.length - 1) return prev;
      const newList = [...prev];
      const [moved] = newList.splice(index, 1);
      newList.splice(index + 1, 0, moved);
      return newList;
    });
  }, []);

  /**
   * Moves an item one position up (decreases its index by one). If the
   * item is already first, this is a no-op.
   *
   * @param index The index of the item to move up.
   */
  const moveUp = useCallback((index: number) => {
    setList((prev) => {
      if (index <= 0) return prev;
      const newList = [...prev];
      const [moved] = newList.splice(index, 1);
      newList.splice(index - 1, 0, moved);
      return newList;
    });
  }, []);

  /**
   * Removes the last item from the list.
   */
  const pop = useCallback(() => {
    setList((prev) => prev.slice(0, -1));
  }, []);

  /**
   * Inserts items at the beginning of the list.
   *
   * @param items The items to prepend.
   */
  const prepend = useCallback((...items: T[]) => {
    setList((prev) => [...items, ...prev]);
  }, []);

  /**
   * Removes the items at the specified indices from the list.
   *
   * @param indices One or more indices to remove.
   */
  const remove = useCallback((...indices: number[]) => {
    const indicesSet = new Set(indices);
    setList((prev) => prev.filter((_, i) => !indicesSet.has(i)));
  }, []);

  /**
   * Removes all items that match the condition.
   *
   * @param condition The condition to test each item against. Items that
   *                  return `true` are removed.
   */
  const removeIf = useCallback((condition: (item: T) => boolean) => {
    setList((prev) => prev.filter((item) => !condition(item)));
  }, []);

  /**
   * Replaces **all** items matching the condition with a new value.
   *
   * @param condition The condition to test each item against.
   * @param item The new value to assign to matching items.
   */
  const replaceWhere = useCallback(
    (condition: (item: T) => boolean, item: T) => {
      setList((prev) => prev.map((i) => (condition(i) ? item : i)));
    },
    [],
  );

  /**
   * Replaces the current list with the new items.
   *
   * @param items The items to replace the current list with.
   */
  const set = useCallback((...items: T[]) => {
    setList(items);
  }, []);

  /**
   * Removes the first item from the list.
   */
  const shift = useCallback(() => {
    setList((prev) => prev.slice(1));
  }, []);

  /**
   * Sorts the list using a compare function. Operates on a copy (immutable).
   *
   * @param comparator A function that defines the sort order. Should return
   *                   a negative number if `a` should come before `b`,
   *                   positive if `a` should come after `b`, or zero if they
   *                   are equal.
   */
  const sort = useCallback((comparator: (a: T, b: T) => number) => {
    setList((prev) => [...prev].sort(comparator));
  }, []);

  /**
   * Swaps two items by their indices.
   *
   * @param i The index of the first item.
   * @param j The index of the second item.
   */
  const swap = useCallback((i: number, j: number) => {
    setList((prev) => {
      const newList = [...prev];
      const tmp = newList[i];
      newList[i] = newList[j];
      newList[j] = tmp;
      return newList;
    });
  }, []);

  /**
   * Adds an item to the list if it is not already present (using `===`),
   * or removes it if it is already present.
   *
   * @param item The item to toggle.
   */
  const toggle = useCallback((item: T) => {
    setList((prev) => {
      const idx = prev.indexOf(item);
      if (idx === -1) return [...prev, item];
      return prev.filter((_, i) => i !== idx);
    });
  }, []);

  /**
   * Updates the item at a specific index, or the first item matching a
   * predicate function.
   *
   * @overload
   * @param index The index of the item to replace.
   * @param item The new value.
   *
   * @overload
   * @param predicate A function that returns `true` for the item to replace.
   * @param item The new value.
   */
  const updateAt = useCallback(
    (indexOrPredicate: number | ((item: T) => boolean), item: T) => {
      if (typeof indexOrPredicate === "function") {
        setList((prev) => {
          const idx = prev.findIndex(indexOrPredicate);
          if (idx === -1) return prev;
          const newList = [...prev];
          newList[idx] = item;
          return newList;
        });
      } else {
        setList((prev) => {
          const newList = [...prev];
          newList[indexOrPredicate] = item;
          return newList;
        });
      }
    },
    [],
  );

  // ── Read-only methods ────────────────────────────────────────────

  /**
   * Splits the list into groups of the given size.
   *
   * @param size The size of each chunk.
   * @returns An array of chunks.
   */
  const chunk = useCallback(
    (size: number) => {
      const result: T[][] = [];
      for (let i = 0; i < list.length; i += size) {
        result.push(list.slice(i, i + size));
      }
      return result;
    },
    [list],
  );

  /**
   * Returns `true` if **every** item in the list matches the condition.
   *
   * @param predicate The condition to test each item against.
   */
  const every = useCallback(
    (predicate: (item: T, index: number) => boolean) => list.every(predicate),
    [list],
  );

  /**
   * Returns the index of the first item matching the condition, or `-1`
   * if no match is found.
   *
   * @param predicate The condition to test each item against.
   */
  const findIndex = useCallback(
    (predicate: (item: T, index: number) => boolean) =>
      list.findIndex(predicate),
    [list],
  );

  /**
   * Returns the first item in the list, or `undefined` if the list is empty.
   */
  const first = useCallback(() => list[0], [list]);

  /**
   * Returns `true` if the list has no items.
   */
  const isEmpty = useCallback(() => list.length === 0, [list]);

  /**
   * Returns `true` if the given index is the first position in the list.
   *
   * @param index The index to check.
   */
  const isFirst = useCallback(
    (index: number) => list.length > 0 && index === 0,
    [list],
  );

  /**
   * Returns `true` if the given index is the last position in the list.
   *
   * @param index The index to check.
   */
  const isLast = useCallback(
    (index: number) => list.length > 0 && index === list.length - 1,
    [list],
  );

  /**
   * Returns an array of all indices in the list as strings
   * (e.g. `["0", "1", "2", ...]`), matching the convention of
   * `Object.keys()`.
   */
  const keys = useCallback(
    () => Array.from({ length: list.length }, (_, i) => String(i)),
    [list],
  );

  /**
   * Returns the last item in the list, or `undefined` if the list is empty.
   */
  const last = useCallback(() => list[list.length - 1], [list]);

  /**
   * Returns a shallow copy of a portion of the list.
   *
   * @param start The start index (inclusive).
   * @param end The end index (exclusive). Defaults to the list length.
   */
  const slice = useCallback(
    (start: number, end?: number) => list.slice(start, end),
    [list],
  );

  /**
   * Returns `true` if **at least one** item in the list matches the condition.
   *
   * @param predicate The condition to test each item against.
   */
  const some = useCallback(
    (predicate: (item: T, index: number) => boolean) => list.some(predicate),
    [list],
  );

  /**
   * Checks whether an item exists in the list using `===`, or whether any
   * item matches a predicate function.
   *
   * @overload
   * @param item The item to search for.
   *
   * @overload
   * @param predicate A function that returns `true` for the sought item.
   */
  const includes = useCallback(
    (itemOrPredicate: T | ((item: T) => boolean)): boolean => {
      if (typeof itemOrPredicate === "function") {
        return list.some(itemOrPredicate as (item: T) => boolean);
      }
      return list.includes(itemOrPredicate);
    },
    [list],
  );

  /**
   * Returns the index of an item using `===`, or `-1` if not found.
   *
   * @param item The item to search for.
   */
  const indexOf = useCallback((item: T) => list.indexOf(item), [list]);

  // ── Utility methods ──────────────────────────────────────────────

  /**
   * Reverses the list in place (immutable — operates on a copy).
   */
  const reverse = useCallback(() => {
    setList((prev) => [...prev].reverse());
  }, []);

  /**
   * Removes duplicate items from the list. Uses `===` by default, or a
   * key function for custom equality.
   *
   * @param keyFn Optional function to extract a unique key from each item.
   *              Useful for objects (e.g. `(item) => item.id`).
   */
  const unique = useCallback((keyFn?: (item: T) => unknown) => {
    setList((prev) => {
      if (keyFn) {
        const seen = new Set<unknown>();
        return prev.filter((item) => {
          const key = keyFn(item);
          if (seen.has(key)) return false;
          seen.add(key);
          return true;
        });
      }
      return [...new Set(prev)];
    });
  }, []);

  return [
    list,
    {
      applyWhere,
      chunk,
      clear,
      every,
      filter,
      findIndex,
      first,
      includes,
      indexOf,
      insert,
      isEmpty,
      isFirst,
      isLast,
      keys,
      last,
      map,
      move,
      moveDown,
      moveUp,
      pop,
      prepend,
      push,
      remove,
      removeIf,
      replaceWhere,
      reverse,
      set,
      shift,
      slice,
      some,
      sort,
      swap,
      toggle,
      unique,
      updateAt,
    },
  ] as const;
}
