"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import Button from "@/components/Button";
import SkillCard from "@/components/SkillCard";
import { FrontendIcon, BackendIcon, DatabaseIcon, DevOpsIcon, ToolsIcon } from "@/components/icons/SkillIcons";

// Placeholder image URL - Replace with your actual image
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/400x400";

const HomePage = () => {
  const t = useTranslations("HomePage");
  const [isVisible, setIsVisible] = useState(false);
  
  // Animate content on load
  useEffect(() => {
    setIsVisible(true);
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
          <div className={`space-y-6 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-primary dark:text-primary-dark font-medium">{t("hero.greeting")}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">{t("hero.name")}</h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300">{t("hero.title")}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
              {t("hero.description")}
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button href="#work" variant="primary">
                {t("hero.cta")}
              </Button>
              <Button href="/contact" variant="outline">
                {t("contact.button")}
              </Button>
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5L12 19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </Section>

      {/* About Me Section */}
      <Section id="about" className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">{t("about.title")}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t("about.description")}
          </p>
          <Button href="/about" variant="secondary">
            {t("about.button")}
          </Button>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("skills.title")}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("skills.description")}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard
            title="Frontend"
            icon={<FrontendIcon className="w-6 h-6" />}
            skills={['React', 'Angular', 'Next.js', 'Tailwind CSS', 'Styled Components']}
          />
          <SkillCard
            title="Backend"
            icon={<BackendIcon className="w-6 h-6" />}
            skills={['Node.js', 'Bun', 'Java', 'Spring Boot', 'Express']}
          />
          <SkillCard
            title="Databases"
            icon={<DatabaseIcon className="w-6 h-6" />}
            skills={['PostgreSQL', 'MongoDB']}
          />
          <SkillCard
            title="DevOps"
            icon={<DevOpsIcon className="w-6 h-6" />}
            skills={['Docker', 'GitHub Actions', 'GitLab CI/CD', 'Ansible']}
          />
          <SkillCard
            title="Tools"
            icon={<ToolsIcon className="w-6 h-6" />}
            skills={['Jest', 'JUnit Jupiter', 'AWS']}
          />
        </div>
        
        <div className="text-center mt-10">
          <Button href="/skills" variant="outline">
            {t("skills.cta")}
          </Button>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-gray-50 dark:bg-gray-900">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t("contact.title")}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {t("contact.description")}
          </p>
          <Button href="/contact" variant="primary">
            {t("contact.button")}
          </Button>
        </div>
      </Section>
    </>
  );
};

export default HomePage;