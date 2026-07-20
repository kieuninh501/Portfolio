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
    const forceTop = () => {
      documentElement.style.scrollBehavior = "auto";
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };
    const frameIds: number[] = [];
    const timeoutIds: number[] = [];

    forceTop();
    frameIds.push(window.requestAnimationFrame(forceTop));
    frameIds.push(window.requestAnimationFrame(() => frameIds.push(window.requestAnimationFrame(forceTop))));

    [0, 60, 180, 420, 900, 1400].forEach((delay) => {
      timeoutIds.push(window.setTimeout(forceTop, delay));
    });

    window.addEventListener("pageshow", forceTop);
    window.addEventListener("load", forceTop);

    return () => {
      frameIds.forEach((frameId) => window.cancelAnimationFrame(frameId));
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
      window.removeEventListener("pageshow", forceTop);
      window.removeEventListener("load", forceTop);
      documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return null;
}
