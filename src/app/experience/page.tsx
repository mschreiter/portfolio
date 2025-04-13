"use client";

import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import ParallaxSection from "@/components/ParallaxSection";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

const ExperiencePage = () => {
  const t = useTranslations("Header");

  // Animation hooks
  const headerAnimation = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 200,
  });
  const contentAnimation = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 400,
  });

  return (
    <>
      {/* Header Section */}
      <Section id="header" className="pt-24 pb-12">
        <div
          ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto text-center fly-in ${headerAnimation.animationClass}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t("experience")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Work in Progress
          </p>
        </div>
      </Section>

      {/* Content Section */}
      <ParallaxSection
        id="content"
        className="bg-gray-50 dark:bg-gray-900 py-16"
      >
        <div className="container mx-auto max-w-4xl">
          <div
            ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`mb-12 text-center fly-in ${contentAnimation.animationClass}`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-3xl font-bold mb-6">Coming Soon</h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                This page is currently under development. Please check back
                later for updates on my professional experience.
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
};

export default ExperiencePage;
