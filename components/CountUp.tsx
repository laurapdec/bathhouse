"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  target: number;
  duration?: number;
}

export default function CountUp({ target, duration = 1600 }: Props) {
  const [value, setValue] = useState(0);
  const spanRef = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;

        const startTime = performance.now();

        function tick(now: number) {
          const elapsed = now - startTime;
          const t = Math.min(elapsed / duration, 1);
          // ease-out quart: fast start, slows dramatically near end
          const eased = 1 - Math.pow(1 - t, 4);
          setValue(Math.round(eased * target));
          if (t < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={spanRef}>{value.toLocaleString()}</span>;
}
