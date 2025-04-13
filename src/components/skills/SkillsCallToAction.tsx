import React from "react";
import ParallaxSection from "@/components/ParallaxSection";
import Button from "@/components/Button";

interface SkillsCallToActionProps {
  title: string;
  description: string;
  contactBtnText: string;
  aboutBtnText: string;
  animationRef: React.RefObject<HTMLDivElement | null>;
  animationClass: string;
}

const SkillsCallToAction: React.FC<SkillsCallToActionProps> = ({
  title,
  description,
  contactBtnText,
  aboutBtnText,
  animationRef,
  animationClass,
}) => {
  return (
    <ParallaxSection
      id="cta"
      className="bg-primary/5 dark:bg-primary-dark/10 py-16"
    >
      <div
        ref={animationRef}
        className={`max-w-3xl mx-auto text-center fly-in ${animationClass}`}
      >
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            data-testid="button-contact"
          >
            {contactBtnText}
          </Button>
          <Button href="/about" variant="outline" data-testid="button-about">
            {aboutBtnText}
          </Button>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default SkillsCallToAction;
