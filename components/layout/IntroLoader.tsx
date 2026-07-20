"use client";

import { useEffect, useState } from "react";

type IntroLoaderPhase = "intro" | "exit" | "done";

export function IntroLoader() {
  const [phase, setPhase] = useState<IntroLoaderPhase>(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return "done";
    }

    return "intro";
  });

  useEffect(() => {
    if (phase === "done") {
      return;
    }

    const exitTimer = window.setTimeout(() => setPhase("exit"), 580);
    const doneTimer = window.setTimeout(() => setPhase("done"), 1040);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(doneTimer);
    };
  }, [phase]);

  if (phase === "done") {
    return null;
  }

  return (
    <div aria-hidden="true" className={`intro-loader intro-loader--${phase}`}>
      <span className="intro-loader__panel intro-loader__panel--top" />
      <span className="intro-loader__panel intro-loader__panel--bottom" />
      <div className="intro-loader__content">
        <span className="intro-loader__brand">Kieu Ninh.</span>
        <span className="intro-loader__glow" />
      </div>
    </div>
  );
}
