"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import ParallaxSection from "@/components/ParallaxSection";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

// Skill section components
import SkillsHeader from "@/components/skills/SkillsHeader";
import SkillsIntro from "@/components/skills/SkillsIntro";
import SkillCategory from "@/components/skills/SkillCategory";
import ExperienceStats from "@/components/skills/ExperienceStats";
import SkillsCallToAction from "@/components/skills/SkillsCallToAction";

// Icons
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

  // Experience stats animation
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

  // Define skills data
  const frontendGroups = [
    {
      title: t("frontend.frameworks.title"),
      items: [
        { title: "React", description: t("frontend.frameworks.react") },
        { title: "Next.js", description: t("frontend.frameworks.nextjs") },
        { title: "Angular", description: t("frontend.frameworks.angular") },
      ],
    },
    {
      title: t("frontend.styling.title"),
      items: [
        { title: "Tailwind CSS", description: t("frontend.styling.tailwind") },
        {
          title: "Styled Components",
          description: t("frontend.styling.styledComponents"),
        },
      ],
    },
  ];

  const backendGroups = [
    {
      title: t("backend.node.title"),
      items: [
        { title: "Node.js", description: t("backend.node.nodejs") },
        { title: "Express", description: t("backend.node.express") },
        { title: "Bun", description: t("backend.node.bun") },
      ],
    },
    {
      title: t("backend.java.title"),
      items: [
        { title: "Spring Boot", description: t("backend.java.spring") },
        { title: "Java", description: t("backend.java.core") },
      ],
    },
  ];

  const databaseGroups = [
    {
      title: t("database.sql.title"),
      items: [
        { title: "PostgreSQL", description: t("database.sql.postgresql") },
      ],
    },
    {
      title: t("database.nosql.title"),
      items: [{ title: "MongoDB", description: t("database.nosql.mongodb") }],
    },
  ];

  const devopsGroups = [
    {
      title: t("devops.container.title"),
      items: [{ title: "Docker", description: t("devops.container.docker") }],
    },
    {
      title: t("devops.ci.title"),
      items: [
        { title: "GitHub Actions", description: t("devops.ci.github") },
        { title: "GitLab CI/CD", description: t("devops.ci.gitlab") },
      ],
    },
  ];

  const toolsGroups = [
    {
      title: t("tools.testing.title"),
      items: [
        { title: "Jest", description: t("tools.testing.jest") },
        { title: "JUnit Jupiter", description: t("tools.testing.junit") },
      ],
    },
    {
      title: t("tools.cloud.title"),
      items: [{ title: "AWS", description: t("tools.cloud.aws") }],
    },
  ];

  const experienceStatsData = [
    { value: "2+", label: t("stats.years") },
    { value: "15+", label: t("stats.projects") },
    { value: "5+", label: t("stats.technologies") },
  ];

  return (
    <>
      <SkillsHeader
        title={t("title")}
        subtitle={t("subtitle")}
        animationRef={headerAnimation.ref}
        animationClass={headerAnimation.animationClass}
      />

      <SkillsIntro
        text={t("intro")}
        animationRef={introAnimation.ref}
        animationClass={introAnimation.animationClass}
      />

      {/* Frontend Skills */}
      <ParallaxSection
        id="frontend-skills"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <SkillCategory
          id="frontend"
          title={t("frontend.title")}
          description={t("frontend.description")}
          icon={<FrontendIcon className="w-8 h-8" />}
          animationClass={frontendSection.animationClass}
          ref={frontendSection.ref}
          groups={frontendGroups}
        />
      </ParallaxSection>

      {/* Backend Skills */}
      <Section id="backend-skills">
        <SkillCategory
          id="backend"
          title={t("backend.title")}
          description={t("backend.description")}
          icon={<BackendIcon className="w-8 h-8" />}
          animationClass={backendSection.animationClass}
          ref={backendSection.ref}
          groups={backendGroups}
        />
      </Section>

      {/* Database Skills */}
      <ParallaxSection
        id="database-skills"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <SkillCategory
          id="database"
          title={t("database.title")}
          description={t("database.description")}
          icon={<DatabaseIcon className="w-8 h-8" />}
          animationClass={databaseSection.animationClass}
          ref={databaseSection.ref}
          groups={databaseGroups}
        />
      </ParallaxSection>

      {/* DevOps Skills */}
      <Section id="devops-skills">
        <SkillCategory
          id="devops"
          title={t("devops.title")}
          description={t("devops.description")}
          icon={<DevOpsIcon className="w-8 h-8" />}
          animationClass={devopsSection.animationClass}
          ref={devopsSection.ref}
          groups={devopsGroups}
        />
      </Section>

      {/* Tools Skills */}
      <ParallaxSection
        id="tools-skills"
        className="bg-gray-50 dark:bg-gray-900"
      >
        <SkillCategory
          id="tools"
          title={t("tools.title")}
          description={t("tools.description")}
          icon={<ToolsIcon className="w-8 h-8" />}
          animationClass={toolsSection.animationClass}
          ref={toolsSection.ref}
          groups={toolsGroups}
        />
      </ParallaxSection>

      {/* Experience Stats */}
      <ExperienceStats
        title={t("stats.title")}
        stats={experienceStatsData}
        animationRef={experienceStats.ref}
        animationClass={experienceStats.animationClass}
      />

      {/* Call to Action */}
      <SkillsCallToAction
        title={t("cta.title")}
        description={t("cta.description")}
        contactBtnText={t("cta.contactBtn")}
        aboutBtnText={t("cta.aboutBtn")}
        animationRef={ctaSection.ref}
        animationClass={ctaSection.animationClass}
      />
    </>
  );
};

export default SkillsPage;
