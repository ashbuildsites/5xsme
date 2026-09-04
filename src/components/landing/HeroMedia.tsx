"use client";

import { useEffect, useRef } from "react";

type Props = {
  poster: string;
  /** Optional. With no video the poster is simply the hero. */
  video?: string;
  /** Lighter cut served to narrow viewports, where the full file is wasted. */
  videoMobile?: string;
  alt: string;
};

/**
 * The hero background. The poster image is the real content — it renders
 * immediately and is what a slow connection, a data-saver, or a reduced-motion
 * visitor keeps. The video is fetched only after load and cross-fades in over
 * the top, then pauses whenever the tab is hidden or the hero is off screen.
 */
export function HeroMedia({ poster, video, videoMobile, alt }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    const wrap = wrapRef.current;
    if (!v || !wrap || !video) return;

    const conn = (
      navigator as Navigator & {
        connection?: { saveData?: boolean; effectiveType?: string };
      }
    ).connection;

    const allowed =
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      !conn?.saveData &&
      !/(^|\W)(slow-)?2g$/.test(conn?.effectiveType ?? "");

    if (!allowed) return;

    let timer = 0;
    const play = () => {
      v.play().catch(() => {});
    };

    const start = () => {
      const small = window.matchMedia("(max-width: 900px)").matches;
      v.src = (small && videoMobile) || video;
      v.addEventListener(
        "canplay",
        () => {
          play();
          wrap.classList.add("video-on");
        },
        { once: true },
      );
      v.addEventListener("error", () => wrap.classList.remove("video-on"), {
        once: true,
      });
      v.load();
    };

    const onLoad = () => {
      timer = window.setTimeout(start, 400);
    };
    if (document.readyState === "complete") onLoad();
    else window.addEventListener("load", onLoad);

    const onVisibility = () => {
      if (!v.src) return;
      if (document.hidden) v.pause();
      else play();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!v.src) return;
        if (entry.isIntersecting) play();
        else v.pause();
      },
      { threshold: 0 },
    );
    io.observe(wrap);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", onLoad);
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
    };
  }, [video, videoMobile]);

  return (
    <div className="lp-hero-media" ref={wrapRef}>
      {/* eslint-disable-next-line @next/next/no-img-element -- full-bleed
          background art that must paint before hydration; next/image's
          wrapper fights the absolute-inset layering used here. */}
      <img id="lpHeroImg" src={poster} alt={alt} fetchPriority="high" />
      <video
        id="lpHeroVid"
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        tabIndex={-1}
      />
    </div>
  );
}
