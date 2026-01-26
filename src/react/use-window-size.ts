import { useEffect, useState } from "react";

function calculateSizes() {
  if (typeof window === "undefined") {
    return {
      width: 0,
      height: 0,
      isMobile: false,
      isTablet: false,
      isDesktop: false,
    };
  }
  const width = window.innerWidth;
  return {
    width,
    height: window.innerHeight,
    isMobile: width < 768,
    isTablet: width >= 768 && width < 1024,
    isDesktop: width >= 1024,
  };
}

/**
 * useWindowSize hook
 *
 * Returns the current window size with the following properties:
 * - width (number): the width of the window
 * - height (number): the height of the window
 * - isMobile (boolean): whether the window is a mobile device
 * - isTablet (boolean): whether the window is a tablet device
 * - isDesktop (boolean): whether the window is a desktop device
 *
 * The hook will automatically update the state when the window is resized.
 *
 * @returns {{width: number, height: number, isMobile: boolean, isTablet: boolean, isDesktop: boolean}}
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(() => calculateSizes());

  useEffect(() => {
    setWindowSize(calculateSizes());

    function handleResize() {
      setWindowSize(calculateSizes());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
