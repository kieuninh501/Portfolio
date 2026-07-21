"use client";

import { useLayoutEffect } from "react";

export function ScrollToHero() {
  useLayoutEffect(() => {
    window.history.scrollRestoration = "manual";

    if (window.location.hash) {
      return;
    }

    const documentElement = document.documentElement;
    const previousScrollBehavior = documentElement.style.scrollBehavior;
    let shouldReset = true;
    const forceTop = () => {
      if (!shouldReset) {
        return;
      }

      documentElement.style.scrollBehavior = "auto";
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    const frameIds: number[] = [];
    const timeoutIds: number[] = [];
    const cleanup = () => {
      frameIds.forEach((frameId) => window.cancelAnimationFrame(frameId));
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      window.removeEventListener("wheel", stopReset);
      window.removeEventListener("touchstart", stopReset);
      window.removeEventListener("pointerdown", stopReset);
      window.removeEventListener("keydown", stopReset);
      window.removeEventListener("pageshow", forceTop);
      window.removeEventListener("load", forceTop);
    };
    const stopReset = () => {
      if (!shouldReset) {
        return;
      }

      shouldReset = false;
      cleanup();
      documentElement.style.scrollBehavior = previousScrollBehavior;
    };

    forceTop();
    frameIds.push(window.requestAnimationFrame(forceTop));
    frameIds.push(window.requestAnimationFrame(() => frameIds.push(window.requestAnimationFrame(forceTop))));

    [60, 180, 420].forEach((delay) => {
      timeoutIds.push(window.setTimeout(forceTop, delay));
    });

    window.addEventListener("pageshow", forceTop);
    window.addEventListener("load", forceTop);
    window.addEventListener("wheel", stopReset, { passive: true });
    window.addEventListener("touchstart", stopReset, { passive: true });
    window.addEventListener("pointerdown", stopReset, { passive: true });
    window.addEventListener("keydown", stopReset);
    timeoutIds.push(window.setTimeout(stopReset, 700));

    return () => {
      cleanup();
      documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return null;
}
