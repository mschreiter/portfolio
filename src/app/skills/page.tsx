"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import ParallaxSection from "@/components/ParallaxSection";
import Button from "@/components/Button";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";
import {
  FrontendIcon,
  BackendIcon,
  DatabaseIcon,
  DevOpsIcon,
  ToolsIcon,
} from "@/components/icons/SkillIcons";

const SkillsPage = () => {
  const t = useTranslations("SkillsPage");

  // Animation hooks
  const headerAnimation = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 200,
  });
  const introAnimation = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 300,
  });

  // Skill category animations
  const frontendSection = useAnimateOnScroll({
    animationType: "fly-in-left",
    delay: 200,
  });
  const backendSection = useAnimateOnScroll({
    animationType: "fly-in-right",
    delay: 300,
  });
  const databaseSection = useAnimateOnScroll({
    animationType: "fly-in-left",
    delay: 400,
  });
  const devopsSection = useAnimateOnScroll({
    animationType: "fly-in-right",
    delay: 500,
  });
  const toolsSection = useAnimateOnScroll({
    animationType: "fly-in-left",
    delay: 600,
  });

  // Experience counter animations
  const experienceStats = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 300,
  });

  // CTA animation
  const ctaSection = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 200,
  });

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <>
      {/* Header Section */}
      <Section id="skills-header" className="pt-24 pb-12">
        <div
          ref={headerAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto text-center fly-in ${headerAnimation.animationClass}`}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t("subtitle")}
          </p>
        </div>
      </Section>

      {/* Intro Section */}
      <Section id="skills-intro">
        <div
          ref={introAnimation.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-4xl mx-auto fly-in ${introAnimation.animationClass}`}
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            {t("intro")}
          </p>
        </div>
      </Section>

      {/* Frontend Skills */}
      <ParallaxSection
        id="frontend-skills"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div
          ref={frontendSection.ref as React.RefObject<HTMLDivElement>}
          className={`fly-in ${frontendSection.animationClass}`}
        >
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <FrontendIcon className="w-8 h-8 text-primary dark:text-primary-dark mr-3" />
              <h2 className="text-3xl font-bold">{t("frontend.title")}</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("frontend.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("frontend.frameworks.title")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">React</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("frontend.frameworks.react")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Next.js</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("frontend.frameworks.nextjs")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Angular</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("frontend.frameworks.angular")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("frontend.styling.title")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Tailwind CSS</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("frontend.styling.tailwind")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Styled Components</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("frontend.styling.styledComponents")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Backend Skills */}
      <Section id="backend-skills">
        <div
          ref={backendSection.ref as React.RefObject<HTMLDivElement>}
          className={`fly-in ${backendSection.animationClass}`}
        >
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <BackendIcon className="w-8 h-8 text-primary dark:text-primary-dark mr-3" />
              <h2 className="text-3xl font-bold">{t("backend.title")}</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("backend.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("backend.node.title")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Node.js</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("backend.node.nodejs")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Express</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("backend.node.express")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Bun</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("backend.node.bun")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("backend.java.title")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Spring Boot</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("backend.java.spring")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Java</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("backend.java.core")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Database Skills */}
      <ParallaxSection
        id="database-skills"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div
          ref={databaseSection.ref as React.RefObject<HTMLDivElement>}
          className={`fly-in ${databaseSection.animationClass}`}
        >
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <DatabaseIcon className="w-8 h-8 text-primary dark:text-primary-dark mr-3" />
              <h2 className="text-3xl font-bold">{t("database.title")}</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("database.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("database.sql.title")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">PostgreSQL</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("database.sql.postgresql")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("database.nosql.title")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">MongoDB</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("database.nosql.mongodb")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* DevOps Skills */}
      <Section id="devops-skills">
        <div
          ref={devopsSection.ref as React.RefObject<HTMLDivElement>}
          className={`fly-in ${devopsSection.animationClass}`}
        >
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <DevOpsIcon className="w-8 h-8 text-primary dark:text-primary-dark mr-3" />
              <h2 className="text-3xl font-bold">{t("devops.title")}</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("devops.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("devops.container.title")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Docker</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("devops.container.docker")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("devops.ci.title")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">GitHub Actions</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("devops.ci.github")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">GitLab CI/CD</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("devops.ci.gitlab")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Tools Skills */}
      <ParallaxSection
        id="tools-skills"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <div
          ref={toolsSection.ref as React.RefObject<HTMLDivElement>}
          className={`fly-in ${toolsSection.animationClass}`}
        >
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <ToolsIcon className="w-8 h-8 text-primary dark:text-primary-dark mr-3" />
              <h2 className="text-3xl font-bold">{t("tools.title")}</h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t("tools.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("tools.testing.title")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">Jest</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("tools.testing.jest")}
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">JUnit Jupiter</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("tools.testing.junit")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("tools.cloud.title")}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 text-primary dark:text-primary-dark mt-1 flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="font-medium">AWS</span>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {t("tools.cloud.aws")}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Experience Stats */}
      <Section id="experience-stats" className="py-20">
        <div
          ref={experienceStats.ref as React.RefObject<HTMLDivElement>}
          className={`fly-in ${experienceStats.animationClass}`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">
              {t("stats.title")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-4xl font-bold text-primary dark:text-primary-dark mb-2">
                  2+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {t("stats.years")}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-4xl font-bold text-primary dark:text-primary-dark mb-2">
                  15+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {t("stats.projects")}
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 text-center">
                <div className="text-4xl font-bold text-primary dark:text-primary-dark mb-2">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {t("stats.technologies")}
                </div>
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
        <div
          ref={ctaSection.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center fly-in ${ctaSection.animationClass}`}
        >
          <h2 className="text-3xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              href="/contact"
              variant="primary"
              data-testid="button-contact"
            >
              {t("cta.contactBtn")}
            </Button>
            <Button href="/about" variant="outline" data-testid="button-about">
              {t("cta.aboutBtn")}
            </Button>
          </div>
        </div>
      </ParallaxSection>
    </>
  );
};

export default SkillsPage;
