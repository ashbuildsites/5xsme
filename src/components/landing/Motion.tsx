"use client";

import { useEffect } from "react";

/**
 * The whole scroll choreography for the landing page.
 *
 * It runs once on mount, after the DOM the sections render is in place, and
 * tears every ScrollTrigger and tween back down on unmount so a client-side
 * navigation away from `/` doesn't leave pinned spacers behind.
 *
 * Everything here is an enhancement: if GSAP fails to load, or the visitor
 * asked for reduced motion, the page is still a complete, readable document —
 * the only thing that changes is that things don't move.
 */
export function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let dispose = () => {};
    let cancelled = false;

    // The preloader covers the whole page, so it must come down even if the
    // animation libraries never arrive. This is the backstop for a failed
    // chunk load, a blocked CDN, or an exception before the timeline runs.
    const liftPreloader = () => {
      document.getElementById("lpPre")?.remove();
      document.body.classList.remove("lp-locked");
      document.querySelector<HTMLElement>(".lp-logo")?.style.removeProperty("visibility");
    };
    const failsafe = window.setTimeout(liftPreloader, 8000);

    (async () => {
      let gsap: typeof import("gsap").gsap;
      let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;
      let Lenis: typeof import("lenis").default;
      try {
        const mods = await Promise.all([
          import("gsap"),
          import("gsap/ScrollTrigger"),
          import("lenis"),
        ]);
        gsap = mods[0].gsap;
        ScrollTrigger = mods[1].ScrollTrigger;
        Lenis = mods[2].default;
      } catch {
        liftPreloader();
        return;
      }
      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        const compact = window.matchMedia("(max-width: 700px)").matches;
        const desktop = window.matchMedia("(min-width: 901px)").matches;

        /* ---------------------------------------------- smooth scrolling */

        let lenis: InstanceType<typeof Lenis> | null = null;
        let ticker: ((time: number) => void) | null = null;
        let floatFrame = 0;

        if (!reduced) {
          lenis = new Lenis({
            duration: 1.35,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
          });
          lenis.on("scroll", ScrollTrigger.update);
          ticker = (time: number) => lenis?.raf(time * 1000);
          gsap.ticker.add(ticker);
          gsap.ticker.lagSmoothing(0);
        }

        /* ------------------------------------------------- hero entrance */

        const heroLines = gsap.utils.toArray<HTMLElement>(".lp-hero-h .ln > span");
        const heroCtas = gsap.utils.toArray<HTMLElement>(".lp-hero-cta .lp-btn");
        const heroMedia = gsap.utils.toArray<HTMLElement>("#lpHeroImg, #lpHeroVid");

        if (!reduced) {
          gsap.set(heroLines, { yPercent: 115 });
          gsap.set(heroCtas, { y: 26, opacity: 0 });
          gsap.set(".lp-hero-kicker", { opacity: 0, y: 14 });
        }
        gsap.set(heroMedia, { scale: 1.04 });

        const playHeroIntro = () => {
          if (reduced) {
            gsap.set(heroLines, { yPercent: 0 });
            gsap.set(heroCtas, { y: 0, opacity: 1 });
            gsap.set(".lp-hero-kicker", { opacity: 1, y: 0 });
            return;
          }
          gsap
            .timeline()
            .to(heroMedia, { scale: 1, duration: 2, ease: "power3.out" }, 0)
            .to(".lp-hero-kicker", { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.2)
            .to(
              heroLines,
              { yPercent: 0, duration: 1.2, stagger: 0.12, ease: "power4.out" },
              0.3,
            )
            .to(
              heroCtas,
              { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" },
              0.95,
            );
        };

        /* ----------------------------------------------------- preloader */

        const pre = document.getElementById("lpPre");
        const preStage = document.getElementById("lpPreStage");
        const preMark = document.getElementById("lpPreMark");
        const navLogo = document.querySelector<HTMLElement>(".lp-logo");

        const finishPreloader = () => {
          window.clearTimeout(failsafe);
          pre?.remove();
          document.body.classList.remove("lp-locked");
          lenis?.start();
          playHeroIntro();
          ScrollTrigger.refresh();
        };

        if (pre && preStage && preMark && !reduced) {
          lenis?.stop();
          document.body.classList.add("lp-locked");
          gsap.set(navLogo, { autoAlpha: 0 });
          gsap.set(preStage, { autoAlpha: 0, y: 34, scale: 0.9 });
          gsap.set(preMark, { clipPath: "inset(0 100% 0 0)" });

          gsap
            .timeline()
            .fromTo(
              ".lp-pre-field",
              { opacity: 0.05, scale: 1.08 },
              { opacity: 0.34, scale: 1, duration: 0.75, ease: "power2.out" },
            )
            .to(".lp-pre-scan", { xPercent: 230, duration: 1.05, ease: "power4.inOut" }, "-=.42")
            .to(
              preStage,
              { autoAlpha: 1, y: 0, scale: 1, duration: 0.72, ease: "power4.out" },
              "-=.78",
            )
            .to(
              preMark,
              { clipPath: "inset(0 0% 0 0)", duration: 0.92, ease: "power4.inOut" },
              "-=.62",
            )
            .to(
              preStage,
              {
                filter: "drop-shadow(0 0 34px rgba(255,15,45,.22))",
                duration: 0.5,
                ease: "power2.out",
              },
              "-=.55",
            )
            .to(".lp-pre-line", { scaleX: 1, duration: 0.75, ease: "power3.inOut" }, "-=.55")
            .to(
              ".lp-pre-copy, .lp-pre-index",
              { y: -8, autoAlpha: 0.78, duration: 0.55, ease: "power2.out" },
              "-=.65",
            )
            .to(
              preMark,
              { scale: 1.03, duration: 0.48, yoyo: true, repeat: 1, ease: "power2.inOut" },
              "-=.28",
            )
            .to(
              ".lp-pre-shutter",
              { clipPath: "inset(0 0% 0 0)", duration: 0.42, ease: "power4.inOut" },
              "-=.06",
            )
            // The mark flies to where the nav logo sits, so the preloader
            // hands off to the page instead of just disappearing.
            .to(
              preStage,
              {
                x: () => {
                  if (!navLogo) return 0;
                  const a = preStage.getBoundingClientRect();
                  const b = navLogo.getBoundingClientRect();
                  return b.left + b.width / 2 - (a.left + a.width / 2);
                },
                y: () => {
                  if (!navLogo) return 0;
                  const a = preStage.getBoundingClientRect();
                  const b = navLogo.getBoundingClientRect();
                  return b.top + b.height / 2 - (a.top + a.height / 2);
                },
                scale: () => {
                  if (!navLogo) return 0.2;
                  const a = preStage.getBoundingClientRect();
                  const b = navLogo.getBoundingClientRect();
                  return b.width / a.width;
                },
                duration: 0.9,
                ease: "expo.inOut",
              },
              "-=.08",
            )
            .to(
              pre,
              {
                clipPath: "inset(0 0 0 100%)",
                duration: 0.78,
                ease: "power4.inOut",
                onStart: () => gsap.set(navLogo, { autoAlpha: 1 }),
                onComplete: finishPreloader,
              },
              "-=.34",
            );
        } else {
          finishPreloader();
        }

        if (reduced) return;

        /* ------------------------------------------------- hero scrub out */

        if (!compact) {
          gsap.to(heroMedia, {
            yPercent: 10,
            scale: 1.03,
            ease: "none",
            scrollTrigger: {
              trigger: ".lp-hero",
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
        gsap.to(".lp-hero-content", {
          yPercent: -22,
          opacity: 0.15,
          ease: "none",
          scrollTrigger: {
            trigger: ".lp-hero",
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        /* --------------------------------------------------- marquee loops */

        const loop = (id: string, duration: number, dir = 1) => {
          const el = document.getElementById(id);
          if (!el || el.dataset.looped) return;
          // Tripled so the -33.333% wrap point is seamless at any width.
          el.innerHTML = el.innerHTML + el.innerHTML + el.innerHTML;
          el.dataset.looped = "1";
          gsap.to(el, {
            xPercent: -33.333 * dir,
            repeat: -1,
            duration,
            ease: "none",
            force3D: true,
          });
        };
        loop("lpMarq", 86);
        loop("lpLogoRail", 64);
        loop("lpQuoteMarq", 122);

        /* --------------------------------------- philosophy word-by-word */

        const philo = document.getElementById("lpPhiloTxt");
        if (philo) {
          const words = gsap.utils.toArray<HTMLElement>(".pw", philo);
          gsap.to(words, {
            color: (i: number) =>
              words[i].dataset.accent === "1" ? "#D10021" : "#121212",
            stagger: 0.06,
            ease: "none",
            scrollTrigger: {
              trigger: ".lp-philo",
              start: "top 72%",
              end: "bottom 55%",
              scrub: true,
            },
          });
        }

        /* ------------------------------------------------- stack gallery */

        const stacks = gsap.utils.toArray<HTMLElement>(".lp-stk");
        if (stacks.length) {
          gsap.set(stacks, { yPercent: (i: number) => (i === 0 ? 0 : 101) });
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#lpStack",
              start: "top top",
              end: "+=300%",
              pin: ".lp-stack-pin",
              scrub: 1,
              anticipatePin: 1,
            },
          });
          stacks.forEach((s, i) => {
            if (i === 0) return;
            tl.to(s, { yPercent: 0, ease: "none" }, i - 1);
            if (!compact) {
              tl.to(
                stacks[i - 1].querySelector("img"),
                { yPercent: -12, scale: 1.06, ease: "none" },
                i - 1,
              );
            }
          });
        }

        /* ------------------------------------------------- band parallax */

        if (!compact) {
          gsap.utils.toArray<HTMLElement>(".lp-band-r").forEach((row) => {
            const sp = Number(row.dataset.sp ?? 0);
            gsap.fromTo(
              row,
              { x: sp },
              {
                x: -sp,
                ease: "none",
                scrollTrigger: {
                  trigger: row,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          });
        }

        /* --------------------------------------------- horizontal work rail */

        const rail = document.getElementById("lpRail");
        const railNum = document.getElementById("lpRailNum");
        if (rail) {
          const distance = () => rail.scrollWidth - window.innerWidth + 112;
          const cards = rail.children.length;
          gsap.to(rail, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: ".lp-work",
              start: "top top",
              end: () => "+=" + distance(),
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (!railNum) return;
                const idx = Math.min(cards - 1, Math.floor(self.progress * cards));
                railNum.textContent = String(idx + 1).padStart(2, "0");
              },
            },
          });
        }

        /* ------------------------------------------------- services rows */

        const float = document.getElementById("lpSvcFloat");
        const floatImg = document.getElementById("lpSvcFloatImg") as HTMLImageElement | null;
        if (float && floatImg && desktop) {
          const rots = ["-7deg", "5deg", "-9deg", "6deg", "-5deg", "8deg", "-6deg", "4deg", "-8deg"];
          let tx = 0;
          let ty = 0;
          let cx = 0;
          let cy = 0;
          const follow = () => {
            cx += (tx - cx) * 0.12;
            cy += (ty - cy) * 0.12;
            float.style.left = `${cx}px`;
            float.style.top = `${cy}px`;
            floatFrame = requestAnimationFrame(follow);
          };

          gsap.utils.toArray<HTMLElement>(".lp-svc-row").forEach((row, i) => {
            const rot = rots[i % rots.length];
            row.addEventListener("mouseenter", () => {
              floatImg.src = row.dataset.img ?? "";
              float.style.transform = `translate(-50%,-50%) rotate(${rot}) scale(1)`;
              float.classList.add("is-on");
              cancelAnimationFrame(floatFrame);
              follow();
            });
            row.addEventListener("mouseleave", () => {
              float.classList.remove("is-on");
              float.style.transform = `translate(-50%,-50%) rotate(${rot}) scale(.7)`;
              cancelAnimationFrame(floatFrame);
            });
            row.addEventListener("mousemove", (e) => {
              tx = e.clientX;
              ty = e.clientY;
            });
          });
        }

        gsap.utils.toArray<HTMLElement>(".lp-svc-row").forEach((row) => {
          gsap.from(row, {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: row, start: "top 92%" },
          });
        });

        /* ---------------------------------------------- heading reveals */

        gsap.utils.toArray<HTMLElement>(".lp-sec-h").forEach((h) => {
          gsap.from(h, {
            y: 70,
            opacity: 0,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: { trigger: h, start: "top 88%" },
          });
        });
        gsap.utils.toArray<HTMLElement>(".lp-sec-lbl").forEach((l) => {
          gsap.from(l, {
            x: -30,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: l, start: "top 90%" },
          });
        });

        /* ------------------------------------------------------- about */

        gsap.from(".lp-about-img", {
          clipPath: "inset(100% 0 0 0)",
          duration: 1.4,
          ease: "power4.inOut",
          scrollTrigger: { trigger: ".lp-about", start: "top 70%" },
        });
        gsap.from(".lp-about-txt p, .lp-tags", {
          y: 40,
          opacity: 0,
          stagger: 0.12,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".lp-about-txt", start: "top 80%" },
        });
        gsap.from(".lp-about-badge", {
          scale: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: { trigger: ".lp-about", start: "top 55%" },
        });

        /* ------------------------------------------- collaborators pin */

        if (desktop && document.getElementById("lpCollab")) {
          const cimgs = gsap.utils.toArray<HTMLElement>(".lp-cimg");
          const items = gsap.utils.toArray<HTMLElement>(".lp-cl");
          const num = document.getElementById("lpCollabNum");
          const count = cimgs.length;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: "#lpCollab",
              start: "top top",
              end: "+=250%",
              pin: ".lp-collab-pin",
              scrub: 1,
              anticipatePin: 1,
              onUpdate: (self) => {
                const idx = Math.min(count - 1, Math.floor(self.progress * count));
                if (num) num.textContent = String(idx + 1);
                items.forEach((it, i) => it.classList.toggle("is-on", i === idx));
              },
            },
          });
          cimgs.forEach((im, i) => {
            if (i === 0) return;
            tl.to(im, { clipPath: "inset(0% 0 0 0)", ease: "none" }, i - 1);
          });
        }

        /* ------------------------------------------------------- stats */

        gsap.utils.toArray<HTMLElement>(".lp-stat-n").forEach((el) => {
          // Some stat bands print a pre-formatted figure ("365K+") with no
          // count-up target. Animating those to Number(undefined) wipes them
          // out, so leave anything without a data-t exactly as rendered.
          if (el.dataset.t === undefined) return;
          const target = Number(el.dataset.t);
          const suffix = el.dataset.s ?? "";
          const o = { v: 0 };
          ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            once: true,
            onEnter: () => {
              gsap.to(o, {
                v: target,
                duration: 1.6,
                ease: "power2.out",
                onUpdate: () => {
                  el.textContent = Math.round(o.v) + suffix;
                },
              });
            },
          });
        });
        gsap.from(".lp-stat", {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".lp-stats", start: "top 85%" },
        });

        /* --------------------------------------------------- faq + contact */

        gsap.from(".lp-faq-item", {
          y: 38,
          opacity: 0,
          stagger: 0.08,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: ".lp-faq-list", start: "top 84%" },
        });
        gsap.from(".lp-contact-grid > *", {
          y: 60,
          opacity: 0,
          stagger: 0.15,
          duration: 1.1,
          ease: "power3.out",
          scrollTrigger: { trigger: ".lp-contact-grid", start: "top 82%" },
        });

        /* ------------------------------------------------- footer wordmark */

        if (document.getElementById("lpFtBig"))
        gsap.fromTo(
          "#lpFtBig",
          { scale: 0.35, autoAlpha: 0, y: 90 },
          {
            scale: 1,
            autoAlpha: 1,
            y: 0,
            ease: "none",
            force3D: true,
            scrollTrigger: {
              trigger: ".lp-footer",
              start: "top 95%",
              end: "top 35%",
              scrub: 1.25,
              invalidateOnRefresh: true,
            },
          },
        );
        gsap.from(".lp-ft-grid > div", {
          y: 40,
          opacity: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: ".lp-ft-grid", start: "top 90%" },
        });

        /* ----------------------------------------------- magnetic buttons */

        document
          .querySelectorAll<HTMLElement>(".lp-btn, .lp-send, .lp-card-go")
          .forEach((b) => {
            b.addEventListener("mousemove", (e) => {
              const r = b.getBoundingClientRect();
              gsap.to(b, {
                x: (e.clientX - r.left - r.width / 2) * 0.25,
                y: (e.clientY - r.top - r.height / 2) * 0.25,
                duration: 0.4,
                ease: "power2.out",
              });
            });
            b.addEventListener("mouseleave", () =>
              gsap.to(b, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,.4)" }),
            );
          });

        /* ------------------------------------------------- anchor scrolls */

        document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
          a.addEventListener("click", (e) => {
            const id = a.getAttribute("href");
            if (!id || id.length < 2) return;
            const t = document.querySelector(id);
            if (!t) return;
            e.preventDefault();
            if (lenis) lenis.scrollTo(t as HTMLElement, { offset: 0, duration: 1.6 });
            else t.scrollIntoView({ behavior: "smooth" });
          });
        });

        return () => {
          if (ticker) gsap.ticker.remove(ticker);
          cancelAnimationFrame(floatFrame);
          lenis?.destroy();
          document.body.classList.remove("lp-locked");
        };
      });

      dispose = () => {
        ctx.revert();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    })();

    return () => {
      cancelled = true;
      window.clearTimeout(failsafe);
      dispose();
    };
  }, []);

  return null;
}
