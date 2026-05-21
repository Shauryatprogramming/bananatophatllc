import { useEffect, useRef } from 'react';

/**
 * Adds a 'is-visible' class to the element once it intersects the viewport.
 * Use with CSS that transitions from a hidden state when the class is added.
 *
 * - One-shot (unobserve after first reveal)
 * - Respects prefers-reduced-motion (immediately visible)
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
