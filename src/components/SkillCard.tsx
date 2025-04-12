"use client";

import { ReactNode, useState } from "react";

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
  description?: string;
}

const SkillCard = ({
  title,
  icon,
  skills,
  description = "Click to see skills",
}: SkillCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative w-full h-64 group perspective-1000"
      onClick={handleFlip}
      data-testid={`skill-card-${title}`}
    >
      <div
        className={`relative w-full h-full duration-700 transition-transform preserve-3d ${isFlipped ? "rotate-y-180" : ""}`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 p-6 flex flex-col items-center justify-center">
          <div className="text-primary dark:text-primary-dark mb-4 transform transition-transform group-hover:scale-110">
            <div className="w-16 h-16 flex items-center justify-center">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
            {description}
          </p>

          <div className="mt-4 text-primary dark:text-primary-dark text-sm">
            Click to flip
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 p-6 flex flex-col">
          <h3 className="text-lg font-semibold mb-4 text-center">
            {title} Skills
          </h3>
          <ul className="space-y-2 flex-grow overflow-auto">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center">
                <div className="mr-2 text-primary dark:text-primary-dark flex-shrink-0">
                  <svg
                    className="w-4 h-4"
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
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-primary dark:text-primary-dark text-sm text-center">
            Click to flip back
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
