"use client";

import { useEffect, useRef, useState } from "react";

export default function DrawSmiley({ className = "" }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [draw, setDraw] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDraw(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const strokeStyle = (delay: number, length: number) => ({
    strokeDasharray: length,
    strokeDashoffset: draw ? 0 : length,
    transition: `stroke-dashoffset 1.4s cubic-bezier(0.22, 1, 0.36, 1) ${delay}s`,
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      aria-hidden
    >
      {/* Left eye - short angled line */}
      <path
        d="M13 13 C14 17, 14.5 18, 13.5 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={strokeStyle(0.4, 10)}
      />
      {/* Right eye - short angled line */}
      <path
        d="M27 13 C28 17, 28.5 18, 27.5 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={strokeStyle(0.8, 10)}
      />
      {/* Smile - wide wobbly curve */}
      <path
        d="M10 27 C14 34, 26 34, 30 27"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        style={strokeStyle(1.2, 28)}
      />
    </svg>
  );
}
