import { useState, useEffect, useRef } from "react";

/**
 * Custom React hook for viewport entry detection.
 * Enables smooth, professional scroll-reveal animations.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility percentage to trigger (default: 0.15)
 * @param {string} options.rootMargin - Margin around the root (default: "0px")
 * @param {boolean} options.triggerOnce - Whether to only trigger once (default: true)
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(options = {}) {
  const { threshold = 0.15, rootMargin = "0px", triggerOnce = true } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      // Fallback for environments lacking IntersectionObserver
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}

export default useInView;
