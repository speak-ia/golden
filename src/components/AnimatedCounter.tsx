"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);

  return { count, ref };
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  duration = 2000,
}: {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { count } = useCountUp(value, duration, inView);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => setInView(e.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center">
      <span className="block text-4xl md:text-5xl font-bold text-[#c9a227]">
        {count}
        {suffix}
      </span>
      <span className="block text-sm md:text-base text-gray-400 mt-1">{label}</span>
    </div>
  );
}
