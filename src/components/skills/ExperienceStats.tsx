import React from "react";
import Section from "@/components/Section";
import StatCard from "./StatCard";

interface ExperienceStatsProps {
  title: string;
  stats: {
    value: string;
    label: string;
  }[];
  animationRef: React.RefObject<HTMLDivElement | null>;
  animationClass: string;
}

const ExperienceStats: React.FC<ExperienceStatsProps> = ({
  title,
  stats,
  animationRef,
  animationClass,
}) => {
  return (
    <Section id="experience-stats" className="py-20">
      <div ref={animationRef} className={`fly-in ${animationClass}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceStats;
