"use client";

import { useEffect, useRef, useState } from "react";

type AnimationType = "fly-in-left" | "fly-in-right" | "fly-in-up";

interface UseAnimateOnScrollOptions {
  animationType?: AnimationType;
  delay?: number;
  threshold?: number;
  once?: boolean;
}

export default function useAnimateOnScroll({
  animationType = "fly-in-up",
  delay = 0,
  threshold = 0.2,
  once = true,
}: UseAnimateOnScrollOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Exit early if no browser or element ref not set
    if (typeof window === "undefined" || !ref.current) {
      return;
    }

    const element = ref.current;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, once]);

  // Create the animation class based on visibility
  const animationClass = isVisible
    ? `animate-${animationType} delay-${delay}`
    : "";

  return { ref, isVisible, animationClass };
}
