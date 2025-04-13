import React from "react";
import Section from "@/components/Section";

interface SkillsIntroProps {
  text: string;
  animationRef: React.RefObject<HTMLDivElement | null>;
  animationClass: string;
}

const SkillsIntro: React.FC<SkillsIntroProps> = ({
  text,
  animationRef,
  animationClass,
}) => {
  return (
    <Section id="skills-intro">
      <div
        ref={animationRef}
        className={`max-w-4xl mx-auto fly-in ${animationClass}`}
      >
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">{text}</p>
      </div>
    </Section>
  );
};

export default SkillsIntro;
