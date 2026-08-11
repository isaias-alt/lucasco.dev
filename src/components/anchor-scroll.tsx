"use client";

import { useEffect } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function animateScrollTo(targetY: number, duration: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  const startTime = performance.now();

  function step(now: number) {
    const progress = Math.min((now - startTime) / duration, 1);
    window.scrollTo({
      top: startY + distance * easeOutCubic(progress),
      behavior: "instant",
    });
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function scrollToHash(hash: string, animate: boolean) {
  const el = document.getElementById(hash.slice(1));
  if (!el) return;
  const targetY = el.getBoundingClientRect().top + window.scrollY;
  if (animate) {
    animateScrollTo(targetY, 500);
  } else {
    window.scrollTo({ top: targetY, behavior: "instant" });
  }
}

export function AnchorScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let initialScrollTimer: ReturnType<typeof setTimeout> | undefined;
    if (window.location.hash) {
      const hash = window.location.hash;
      initialScrollTimer = setTimeout(() => scrollToHash(hash, false), 0);
    }

    function handleHashChange() {
      if (window.location.hash) {
        scrollToHash(window.location.hash, !reduceMotion);
      }
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      clearTimeout(initialScrollTimer);
    };
  }, []);

  return null;
}
