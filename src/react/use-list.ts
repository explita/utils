import { useState } from "react";

/**
 * A React hook for managing a list of items. The returned list can be modified
 * using the following methods:
 *
 * - `apply`: Applies a callback function to each item in the list.
 * - `applyWhere`: Applies a callback function to each item in the list that
 *   matches the condition.
 * - `append`: Adds new items to the end of the list.
 * - `filter`: Removes all items from the list that do not match the condition.
 * - `insert`: Inserts items at the specified index in the list.
 * - `pop`: Removes the last item from the list.
 * - `prepend`: Inserts items at the beginning of the list.
 * - `remove`: Removes the items at the specified indices from the list.
 * - `set`: Replaces the current list with the new items.
 * - `shift`: Removes the first item from the list.
 *
 * The hook returns an array with two elements. The first element is the list
 * itself, and the second element is an object with the above methods.
 *
 * @param initialValue The initial value of the list.
 * @returns A tuple containing the list and an object with the above methods.
 */
export function useList<T>(initialValue: T[]) {
  const [list, setList] = useState<T[]>(initialValue || []);

  /**
   * Adds new items to the end of the list.
   * @param items The new items to add to the list.
   */
  function append(...items: T[]) {
    setList((prev) => [...prev, ...items]);
  }

  /**
   * Applies a callback function to each item in the list.
   * @param callback The callback function to apply to each item.
   */
  function apply(callback: (value: T) => T) {
    setList((prev) => prev.map(callback));
  }

  /**
   * Applies a callback function to each item in the list that matches the condition.
   * @param condition The condition to apply to each item.
   * @param fn The callback function to apply to each item that matches the condition.
   */
  function applyWhere(condition: (item: T) => boolean, fn: (value: T) => T) {
    setList((prev) => prev.map((item) => (condition(item) ? fn(item) : item)));
  }

  /**
   * Removes all items from the list that do not match the condition.
   * @param fn The condition to apply to each item.
   */
  function filter(fn: (value: T) => boolean) {
    setList((prev) => prev.filter(fn));
  }

  /**
   * Inserts items at the specified index in the list.
   * @param index The index to insert the items at.
   * @param items The items to insert.
   */
  function insert(index: number, ...items: T[]) {
    setList((prev) => {
      const newList = [...prev];
      newList.splice(index, 0, ...items);
      return newList;
    });
  }

  /**
   * Removes the last item from the list.
   */
  function pop() {
    setList((prev) => {
      const newList = [...prev];
      newList.pop();
      return newList;
    });
  }

  /**
   * Inserts items at the beginning of the list.
   * @param items The items to insert.
   */
  function prepend(...items: T[]) {
    setList((prev) => [...items, ...prev]);
  }

  /**
   * Removes the items at the specified indices from the list.
   * @param indices The indices to remove.
   */
  function remove(...indices: number[]) {
    setList((prev) => prev.filter((_, i) => !indices.includes(i)));
  }

  /**
   * Replaces the current list with the new items.
   * @param items The items to replace the current list with.
   */
  function set(...items: T[]) {
    setList(items);
  }

  /**
   * Removes the first item from the list.
   */

  function shift() {
    setList((prev) => {
      const newList = [...prev];
      newList.shift();
      return newList;
    });
  }

  return [
    list,
    {
      apply,
      applyWhere,
      append,
      filter,
      insert,
      pop,
      prepend,
      remove,
      set,
      shift,
    },
  ] as const;
}
