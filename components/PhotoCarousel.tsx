"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";

const photos = [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg",
  "IMG_0005.jpg", "IMG_0322.jpg", "IMG_0323.jpg",
  "IMG_0330.jpg", "IMG_0332.jpg", "IMG_0335.jpg", "IMG_0337.jpg",
  "IMG_0342.jpeg", "IMG_0343.jpeg",
  "IMG_0348.jpg", "IMG_0350.jpg", "IMG_0353.jpg",
  "IMG_0357.jpg", "IMG_0360.jpg", "IMG_0364.jpg", "IMG_0366.jpg",
  "IMG_0368.jpg", "IMG_0370.jpg",
  "IMG_0652.jpeg",
  "IMG_0823.jpeg", "IMG_0826.jpeg",
  "IMG_7517.jpg", "IMG_7519.jpg",
  "IMG_7624.jpg", "IMG_7625.jpg", "IMG_7626.jpg",
  "IMG_9941.jpg", "IMG_9943.jpg",
  "IMG_9962.jpg", "IMG_9967.jpg",
];

function wrap(i: number, len: number) {
  return ((i % len) + len) % len;
}

const RENDER_COUNT = 6;
const CENTER_IDX = 2;
const SLIDE_PCT = 52;
const GAP_PCT = 2;
const DURATION = "0.5s";
const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

function getStyles(dist: number) {
  const t = Math.min(Math.abs(dist), 3);
  return {
    opacity: Math.max(1 - t * 0.3, 0.2),
    blur: t * 2.5,
    scale: Math.max(1 - t * 0.1, 0.7),
  };
}

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [sliding, setSliding] = useState(0); // -1, 0, 1
  const lockRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const total = photos.length;

  const slide = useCallback(
    (dir: number) => {
      if (lockRef.current) return;
      lockRef.current = true;
      // Force a layout read so the browser registers the starting position
      trackRef.current?.getBoundingClientRect();
      setAnimate(true);
      setSliding(dir);
    },
    [],
  );

  const prev = useCallback(() => slide(-1), [slide]);
  const next = useCallback(() => slide(1), [slide]);

  function handleTransitionEnd(e: React.TransitionEvent) {
    if (e.target !== e.currentTarget || e.propertyName !== "transform") return;
    // Snap: update current, reset slide offset instantly (no animation)
    setAnimate(false);
    setSliding(0);
    setCurrent((c) => wrap(c + (sliding), total));
    lockRef.current = false;
  }

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [prev, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const handleTouchEnd = () => {
    if (touchDeltaX.current > 50) prev();
    else if (touchDeltaX.current < -50) next();
  };

  // Build slides array
  const slides: number[] = [];
  for (let i = -CENTER_IDX; i < RENDER_COUNT - CENTER_IDX; i++) {
    slides.push(wrap(current + i, total));
  }

  const stride = SLIDE_PCT + GAP_PCT;
  const restX = 50 - CENTER_IDX * stride - SLIDE_PCT / 2;
  const tx = restX - sliding * stride;

  return (
    <div className="relative select-none">
      <div
        className="overflow-hidden rounded-2xl bg-sand/30"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex py-6"
          style={{
            gap: `${GAP_PCT}%`,
            transform: `translateX(${tx}%)`,
            transition: animate ? `transform ${DURATION} ${EASING}` : "none",
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((photoIndex, i) => {
            // At rest (sliding=0): slot i has distance |i - CENTER_IDX| from center
            // When sliding: the destination distance determines target blur/scale
            const destDist = i - CENTER_IDX - sliding;
            const { opacity, blur, scale } = getStyles(destDist);
            return (
              <div
                key={`slot-${i}`}
                className="flex-shrink-0"
                style={{
                  width: `${SLIDE_PCT}%`,
                  opacity,
                  filter: blur > 0.1 ? `blur(${blur}px)` : "none",
                  transform: `scale(${scale})`,
                  transition: animate
                    ? `opacity ${DURATION} ${EASING}, filter ${DURATION} ${EASING}, transform ${DURATION} ${EASING}`
                    : "none",
                }}
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={`/${photos[photoIndex]}`}
                    alt={`Bathhouse workshop photo ${photoIndex + 1}`}
                    fill
                    sizes="52vw"
                    className="object-cover"
                    priority={i <= 3}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/80 backdrop-blur-sm border border-sand flex items-center justify-center text-ink hover:bg-cream transition-colors z-20"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/80 backdrop-blur-sm border border-sand flex items-center justify-center text-ink hover:bg-cream transition-colors z-20"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <p className="text-center text-xs text-ink-light mt-3">
        {current + 1} / {total}
      </p>
    </div>
  );
}
