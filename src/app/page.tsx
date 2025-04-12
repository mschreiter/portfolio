"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import ParallaxSection from "@/components/ParallaxSection";
import Button from "@/components/Button";
import SkillCard from "@/components/SkillCard";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";
import {
  FrontendIcon,
  BackendIcon,
  DatabaseIcon,
  DevOpsIcon,
  ToolsIcon,
} from "@/components/icons/SkillIcons";

// Placeholder image URL - Replace with your actual image
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/400x400";

const HomePage = () => {
  const t = useTranslations("HomePage");

  // Animation hooks for different sections
  const heroTitle = useAnimateOnScroll({
    animationType: "fly-in-left",
    delay: 200,
  });
  const heroImage = useAnimateOnScroll({
    animationType: "fly-in-right",
    delay: 400,
  });
  const aboutSection = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 300,
  });
  const skillsTitle = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 200,
  });

  // Animation hooks for skill cards with staggered delays
  const frontendCard = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 300,
  });
  const backendCard = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 400,
  });
  const dbCard = useAnimateOnScroll({ animationType: "fly-in-up", delay: 500 });
  const devOpsCard = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 600,
  });
  const toolsCard = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 700,
  });

  const contactSection = useAnimateOnScroll({
    animationType: "fly-in-up",
    delay: 300,
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
      {/* Hero Section */}
      <Section
        id="hero"
        fullHeight
        className="flex flex-col justify-center relative overflow-hidden"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div
            ref={heroTitle.ref as React.RefObject<HTMLDivElement>}
            className={`space-y-6 fly-in ${heroTitle.animationClass}`}
          >
            <div className="float float-delay-1">
              <p className="text-primary dark:text-primary-dark font-medium">
                {t("hero.greeting")}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                {t("hero.name")}
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">
                {t("hero.title")}
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
              {t("hero.description")}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="#skills" variant="primary">
                {t("hero.cta")}
              </Button>
              <Button href="/contact" variant="outline">
                {t("contact.button")}
              </Button>
            </div>
          </div>

          <div
            ref={heroImage.ref as React.RefObject<HTMLDivElement>}
            className={`relative fly-in ${heroImage.animationClass}`}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto float">
              <div className="absolute inset-0 bg-primary/20 dark:bg-primary-dark/20 rounded-full blur-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-full border-4 border-white dark:border-gray-800 shadow-lg">
                  <Image
                    src={PLACEHOLDER_IMAGE}
                    alt={t("hero.name")}
                    width={400}
                    height={400}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5L12 19M12 19L5 12M12 19L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Section>

      {/* About Me Section - with parallax effect */}
      <ParallaxSection id="about" className="bg-gray-50 dark:bg-gray-900">
        <div
          ref={aboutSection.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center fly-in ${aboutSection.animationClass}`}
        >
          <h2 className="text-3xl font-bold mb-6">{t("about.title")}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t("about.description")}
          </p>
          <Button href="/about" variant="secondary">
            {t("about.button")}
          </Button>
        </div>
      </ParallaxSection>

      {/* Skills Section */}
      <Section id="skills">
        <div
          ref={skillsTitle.ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 fly-in ${skillsTitle.animationClass}`}
        >
          <h2 className="text-3xl font-bold mb-4">{t("skills.title")}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("skills.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            ref={frontendCard.ref as React.RefObject<HTMLDivElement>}
            className={`fly-in ${frontendCard.animationClass}`}
          >
            <SkillCard
              title="Frontend"
              icon={<FrontendIcon className="w-10 h-10" />}
              skills={[
                "React",
                "Angular",
                "Next.js",
                "Tailwind CSS",
                "Styled Components",
              ]}
              description="Building modern, responsive user interfaces"
            />
          </div>

          <div
            ref={backendCard.ref as React.RefObject<HTMLDivElement>}
            className={`fly-in ${backendCard.animationClass}`}
          >
            <SkillCard
              title="Backend"
              icon={<BackendIcon className="w-10 h-10" />}
              skills={["Node.js", "Bun", "Java", "Spring Boot", "Express"]}
              description="Creating robust server-side applications"
            />
          </div>

          <div
            ref={dbCard.ref as React.RefObject<HTMLDivElement>}
            className={`fly-in ${dbCard.animationClass}`}
          >
            <SkillCard
              title="Databases"
              icon={<DatabaseIcon className="w-10 h-10" />}
              skills={["PostgreSQL", "MongoDB"]}
              description="Managing and optimizing data storage"
            />
          </div>

          <div
            ref={devOpsCard.ref as React.RefObject<HTMLDivElement>}
            className={`fly-in ${devOpsCard.animationClass}`}
          >
            <SkillCard
              title="DevOps"
              icon={<DevOpsIcon className="w-10 h-10" />}
              skills={["Docker", "GitHub Actions", "GitLab CI/CD", "Ansible"]}
              description="Streamlining development and deployment"
            />
          </div>

          <div
            ref={toolsCard.ref as React.RefObject<HTMLDivElement>}
            className={`fly-in ${toolsCard.animationClass}`}
          >
            <SkillCard
              title="Tools"
              icon={<ToolsIcon className="w-10 h-10" />}
              skills={["Jest", "JUnit Jupiter", "AWS"]}
              description="Essential tools for development"
            />
          </div>
        </div>

        <div className="text-center mt-10">
          <Button href="/skills" variant="outline">
            {t("skills.cta")}
          </Button>
        </div>
      </Section>

      {/* Contact Section */}
      <ParallaxSection id="contact" className="bg-gray-50 dark:bg-gray-900">
        <div
          ref={contactSection.ref as React.RefObject<HTMLDivElement>}
          className={`max-w-md mx-auto text-center fly-in ${contactSection.animationClass}`}
        >
          <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t("contact.description")}
          </p>
          <Button href="/contact" variant="primary">
            {t("contact.button")}
          </Button>
        </div>
      </ParallaxSection>
    </>
  );
};

export default HomePage;
