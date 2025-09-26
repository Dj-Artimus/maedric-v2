import { useEffect } from "react";

export function useSmartWindowSnap({
  debounceMs = 120, // how long after scroll stops to trigger snap
  threshold = 0.5, // fraction of section height that must be scrolled to trigger snap
  settleMs = 700, // how long to wait after scrolling ends before allowing another snap
} = {}) {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | null = null;
    let isAutoScrolling = false;
    let startY: number | null = null;
    let startIndex: number | null = null;

    const getSections = () =>
      Array.from(document.querySelectorAll<HTMLElement>("[data-snap]"));

    const getNearestIndex = () => {
      const sections = getSections();
      if (!sections.length) return 0;
      const center = window.innerHeight / 2;
      let min = Infinity;
      let best = 0;
      sections.forEach((s, i) => {
        const r = s.getBoundingClientRect();
        const sCenter = r.top + r.height / 2;
        const dist = Math.abs(sCenter - center);
        if (dist < min) {
          min = dist;
          best = i;
        }
      });
      return best;
    };

    const onScrollEnd = () => {
      timer = null;
      // Respect external suppression flag (set by ScrollToTop or anything else)
      if (window.__suppressSmartSnap) {
        startY = null;
        startIndex = null;
        return;
      }

      if (isAutoScrolling) return;

      const sections = getSections();
      if (!sections.length) return;

      const currentY = window.scrollY;
      if (startY == null || startIndex == null) return;

      const delta = currentY - startY;
      const sIndex = Math.max(0, Math.min(sections.length - 1, startIndex));
      const sectionEl = sections[sIndex];
      const sectionHeight = sectionEl.getBoundingClientRect().height;
      const thresholdPx = sectionHeight * threshold;

      if (Math.abs(delta) < thresholdPx) {
        startY = null;
        startIndex = null;
        return; // not enough scroll, no snap
      }

      let targetIndex = sIndex + (delta > 0 ? 1 : -1);
      targetIndex = Math.max(0, Math.min(sections.length - 1, targetIndex));

      // ✅ If last section and scrolling down → allow footer, no snap
      if (targetIndex === sections.length - 1 && delta > 0) {
        startY = null;
        startIndex = null;
        return;
      }

      const header = document.querySelector("header") as HTMLElement | null;
      const headerHeight = header?.offsetHeight ?? 0;

      const rect = sections[targetIndex].getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;

      // ✅ Scroll to *top* of section, not center
      const desiredScrollTop = Math.max(0, absoluteTop - headerHeight);

      isAutoScrolling = true;
      window.scrollTo({ top: desiredScrollTop, behavior: "smooth" });

      setTimeout(() => {
        isAutoScrolling = false;
        startY = null;
        startIndex = null;
      }, settleMs);
    };

    const onScroll = () => {
      // If someone disabled snapping globally, ignore scroll events
      if (isAutoScrolling || window.__suppressSmartSnap) return;

      if (startY == null) {
        startY = window.scrollY;
        startIndex = getNearestIndex();
      }
      if (timer) clearTimeout(timer);
      timer = setTimeout(onScrollEnd, debounceMs);
    };

    const resetStart = () => {
      startY = null;
      startIndex = null;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchstart", resetStart, { passive: true });
    window.addEventListener("wheel", resetStart, { passive: true });
    window.addEventListener("resize", resetStart);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchstart", resetStart);
      window.removeEventListener("wheel", resetStart);
      window.removeEventListener("resize", resetStart);
      if (timer) clearTimeout(timer);
    };
  }, [debounceMs, threshold, settleMs]);
}
