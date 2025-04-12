"use client";

import { ReactNode, useRef, useEffect, useState } from "react";
import Section from "./Section";

interface ParallaxSectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  backgroundImage?: string;
  speed?: number;
}

const ParallaxSection = ({
  id,
  children,
  className = "",
  backgroundImage,
  speed = 0.5,
}: ParallaxSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const { top } = sectionRef.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;

      // Calculate parallax offset
      const newOffset =
        (scrollPosition - (scrollPosition + top - window.innerHeight)) * speed;

      // Update state only if value has changed significantly
      if (Math.abs(newOffset - offset) > 1) {
        setOffset(newOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, offset]);

  const style = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transform: `translateY(${offset}px)`,
      }
    : {
        transform: `translateY(${offset}px)`,
      };

  return (
    <Section id={id} className={`overflow-hidden ${className}`}>
      <div ref={sectionRef} className="relative w-full h-full">
        {backgroundImage && (
          <div className="absolute inset-0 z-0" style={style} />
        )}
        <div className="relative z-10 container mx-auto px-4">{children}</div>
      </div>
    </Section>
  );
};

export default ParallaxSection;
