import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isInView].
 * Attach `ref` to any DOM element — `isInView` flips to true
 * the first time that element scrolls into the viewport.
 *
 * @param {IntersectionObserverInit} options - threshold, rootMargin, etc.
 */
export const useInView = (options = {}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, ...options }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};
