"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import ParallaxSection from "@/components/ParallaxSection";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";
import Button from "@/components/Button";

// Placeholder image URL - Replace with your actual image
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/400x400";

const AboutPage = () => {
  const t = useTranslations("AboutPage");

  // Animation hooks
  const introSection = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 200,
  });
  const imageAnimation = useAnimateOnScroll({
    animationType: "fly-in-left",
    delay: 300,
  });
  const bioAnimation = useAnimateOnScroll({
    animationType: "fly-in-right",
    delay: 400,
  });
  const experienceTitle = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 200,
  });
  const experienceItems = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 400,
  });
  const educationTitle = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 300,
  });
  const educationItems = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 500,
  });

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2022;

  return (
    <>
      {/* Intro Section */}
      <Section id="intro" className="pt-24 pb-12">
        <div
          ref={introSection.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto text-center fly-in ${introSection.animationClass}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </Section>

      {/* Bio Section */}
      <Section id="bio" className="py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Column */}
          <div
            ref={imageAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`fly-in ${imageAnimation.animationClass}`}
          >
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96 overflow-hidden rounded-2xl shadow-xl border-4 border-white dark:border-gray-800">
              <div className="absolute inset-0 bg-primary/10 rounded-2xl"></div>
              <Image
                src={PLACEHOLDER_IMAGE}
                alt="Profile"
                fill={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Bio Text Column */}
          <div
            ref={bioAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`space-y-6 fly-in ${bioAnimation.animationClass}`}
          >
            <h2 className="text-3xl font-bold">{t("bio.title")}</h2>

            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>{t("bio.intro", { years: yearsOfExperience })}</p>
              <p>{t("bio.motivation")}</p>
              <p>{t("bio.approach")}</p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="#experience" variant="primary">
                {t("bio.experienceBtn")}
              </Button>
              <Button href="/contact" variant="outline">
                {t("bio.contactBtn")}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <ParallaxSection
        id="experience"
        className="bg-gray-50 dark:bg-gray-900 py-16"
      >
        <div className="container mx-auto max-w-4xl">
          <div
            ref={experienceTitle.ref as React.RefObject<HTMLDivElement>}
            className={`mb-12 text-center fly-in ${experienceTitle.animationClass}`}
          >
            <h2 className="text-3xl font-bold mb-4">{t("experience.title")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("experience.subtitle")}
            </p>
          </div>

          <div
            ref={experienceItems.ref as React.RefObject<HTMLDivElement>}
            className={`space-y-10 fly-in ${experienceItems.animationClass}`}
          >
            {/* Experience Item */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-wrap justify-between items-start">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold">
                    {t("experience.job.title")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t("experience.job.company")}
                  </p>
                </div>
                <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary-dark rounded-full text-sm font-medium">
                  {t("experience.job.period")}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 dark:text-gray-300">
                  {t("experience.job.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Education Section */}
      <Section id="education" className="py-16">
        <div className="container mx-auto max-w-4xl">
          <div
            ref={educationTitle.ref as React.RefObject<HTMLDivElement>}
            className={`mb-12 text-center fly-in ${educationTitle.animationClass}`}
          >
            <h2 className="text-3xl font-bold mb-4">{t("education.title")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("education.subtitle")}
            </p>
          </div>

          <div
            ref={educationItems.ref as React.RefObject<HTMLDivElement>}
            className={`fly-in ${educationItems.animationClass}`}
          >
            {/* Education Item */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex flex-wrap justify-between items-start">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold">
                    {t("education.degree.name")}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t("education.degree.institution")}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary dark:text-primary-dark rounded-full text-sm font-medium">
                    {t("education.degree.grade")}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {t("education.degree.period")}
                  </span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-700 dark:text-gray-300">
                  {t("education.degree.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <ParallaxSection
        id="cta"
        className="bg-primary/5 dark:bg-primary-dark/10 py-16"
      >
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/skills" variant="primary">
              {t("cta.skillsBtn")}
            </Button>
            <Button href="/contact" variant="outline">
              {t("cta.contactBtn")}
            </Button>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
};

export default AboutPage;
