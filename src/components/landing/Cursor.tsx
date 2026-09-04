"use client";

import { useEffect } from "react";

/**
 * Two-part cursor: a dot that tracks the pointer exactly, and a ring that
 * lags behind it. Only ever activates for a real mouse — touch and
 * coarse-pointer devices keep their native cursor and this renders nothing.
 */
export function Cursor() {
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "lp-cur";
    ring.className = "lp-cur-ring";
    document.body.append(dot, ring);
    document.body.classList.add("lp-cursor-on");

    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;
    let seen = false;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      dot.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      if (!seen) {
        seen = true;
        rx = x;
        ry = y;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    let frame = requestAnimationFrame(function tick() {
      rx += (x - rx) * 0.1;
      ry += (y - ry) * 0.1;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      frame = requestAnimationFrame(tick);
    });

    const hot = () => document.body.classList.add("lp-hot");
    const cold = () => document.body.classList.remove("lp-hot");

    const targets = document.querySelectorAll<HTMLElement>(
      ".lp a, .lp button, .lp-svc-row, .lp-card, .lp-stat, .lp-tag, .lp-pill, .lp-cl, .lp-faq-item summary",
    );
    targets.forEach((el) => {
      el.addEventListener("mouseenter", hot);
      el.addEventListener("mouseleave", cold);
    });

    document.addEventListener("mousemove", onMove);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("mousemove", onMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", hot);
        el.removeEventListener("mouseleave", cold);
      });
      document.body.classList.remove("lp-cursor-on", "lp-hot");
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}
