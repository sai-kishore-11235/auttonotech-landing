import { useEffect, useRef, useState } from 'react';

export type ScrollRevealState = 'hidden' | 'loading' | 'visible';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  loadingDuration?: number;
  once?: boolean;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseScrollRevealOptions = {},
) {
  const {
    threshold = 0.12,
    rootMargin = '0px 0px -8% 0px',
    loadingDuration = 550,
    once = true,
  } = options;

  const ref = useRef<T>(null);
  const [state, setState] = useState<ScrollRevealState>('hidden');

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setState('visible');
      return;
    }

    let loadingTimer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setState('loading');
        loadingTimer = setTimeout(() => setState('visible'), loadingDuration);

        if (once) observer.unobserve(element);
      },
      { threshold, rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (loadingTimer) clearTimeout(loadingTimer);
    };
  }, [threshold, rootMargin, loadingDuration, once]);

  const className = `scroll-reveal scroll-reveal--${state}`;

  return { ref, state, className };
}
