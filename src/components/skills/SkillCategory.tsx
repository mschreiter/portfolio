import React, { forwardRef } from "react";
import SkillGroup from "./SkillGroup";

interface SkillCategoryProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  animationClass: string;
  groups: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  }[];
}

// Using forwardRef to pass the ref from parent to child
const SkillCategory = forwardRef<HTMLDivElement, SkillCategoryProps>(
  ({ id, title, description, icon, animationClass, groups }, ref) => {
    return (
      <div ref={ref} className={`fly-in ${animationClass}`}>
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 text-primary dark:text-primary-dark mr-3">
              {icon}
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group, index) => (
            <SkillGroup
              key={`${id}-group-${index}`}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>
      </div>
    );
  },
);

SkillCategory.displayName = "SkillCategory";

export default SkillCategory;
