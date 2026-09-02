"use client";

import { useEffect, useRef, type RefObject } from "react";

export function useScrollProgress(containerRef: RefObject<HTMLElement | null>) {
  const progress = useRef(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) {
        progress.current = 0;
        return;
      }
      const raw = -rect.top / scrollable;
      progress.current = Math.min(1, Math.max(0, raw));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [containerRef]);

  return progress;
}
