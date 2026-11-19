import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * useScrollToTop hook
 * Automatically scrolls the browser viewport to top whenever the pathname changes.
 */
export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    });
  }, [pathname]);
}

