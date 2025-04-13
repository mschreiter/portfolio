import React from "react";
import Section from "@/components/Section";

interface SkillsHeaderProps {
  title: string;
  subtitle: string;
  animationRef: React.RefObject<HTMLDivElement | null>;
  animationClass: string;
}

const SkillsHeader: React.FC<SkillsHeaderProps> = ({
  title,
  subtitle,
  animationRef,
  animationClass,
}) => {
  return (
    <Section id="skills-header" className="pt-24 pb-12">
      <div
        ref={animationRef}
        className={`max-w-4xl mx-auto text-center fly-in ${animationClass}`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      </div>
    </Section>
  );
};

export default SkillsHeader;
