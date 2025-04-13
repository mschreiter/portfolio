import React from "react";

interface SkillItemProps {
  title: string;
  description: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ title, description }) => {
  return (
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
        <span className="font-medium">{title}</span>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </li>
  );
};

export default SkillItem;
