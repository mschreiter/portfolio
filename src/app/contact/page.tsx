"use client";

import { useTranslations } from "next-intl";
import Section from "@/components/Section";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";
import Button from "@/components/Button";

const ContactPage = () => {
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
            {t("contact")}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Work in Progress
          </p>
        </div>
      </Section>

      {/* Content Section */}
      <Section id="contact" className="py-16">
        <div className="container mx-auto max-w-3xl">
          <div
            ref={contentAnimation.ref as React.RefObject<HTMLDivElement>}
            className={`fly-in ${contentAnimation.animationClass}`}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Coming Soon
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg text-center mb-8">
                The contact form is currently being developed. In the meantime,
                feel free to check out my other pages.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/about" variant="primary">
                  About Me
                </Button>
                <Button href="/skills" variant="outline">
                  My Skills
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ContactPage;
