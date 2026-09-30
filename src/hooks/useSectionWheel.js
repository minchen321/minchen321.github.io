import { useEffect, useRef } from 'react';

const WHEEL_THRESHOLD = 100;
const GESTURE_GAP = 150;
const SECTION_COOLDOWN = 1000;

const canScrollWithin = (target, container, delta) => {
  for (
    let element = target;
    element && element !== container;
    element = element.parentElement
  ) {
    const { overflowY } = window.getComputedStyle(element);
    if (!/auto|scroll/.test(overflowY)) continue;
    const remaining = element.scrollHeight - element.clientHeight;
    if (
      remaining > 0 &&
      (delta < 0 ? element.scrollTop > 0 : element.scrollTop < remaining - 1)
    ) {
      return true;
    }
  }
  return false;
};

export const useSectionWheel = (enabled) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!enabled || !container) return;
    let distance = 0;
    let lastEvent = 0;
    let lastSectionChange = -Infinity;
    let consumed = false;

    const handleWheel = (event) => {
      // Preserve native zooming, horizontal gestures, and nested scrolling.
      if (
        event.ctrlKey ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY) ||
        canScrollWithin(event.target, container, event.deltaY)
      ) {
        event.stopPropagation();
        return;
      }

      const now = Date.now();
      if (now - lastEvent > GESTURE_GAP) {
        distance = 0;
        consumed = false;
      }
      lastEvent = now;

      const unit =
        event.deltaMode === 1
          ? 16
          : event.deltaMode === 2
            ? window.innerHeight
            : 1;
      const delta = event.deltaY * unit;
      if (Math.sign(delta) !== Math.sign(distance)) distance = 0;
      distance += delta;

      if (
        consumed ||
        now - lastSectionChange < SECTION_COOLDOWN ||
        Math.abs(distance) < WHEEL_THRESHOLD ||
        Math.abs(event.deltaY) <= 1
      ) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }

      consumed = true;
      lastSectionChange = now;
      // Let the scroller handle one event per deliberate gesture.
    };

    container.addEventListener('wheel', handleWheel, {
      capture: true,
      passive: false,
    });
    return () => container.removeEventListener('wheel', handleWheel, true);
  }, [enabled]);

  return containerRef;
};
