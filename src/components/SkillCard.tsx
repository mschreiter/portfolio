"use client";

import { ReactNode } from 'react';

interface SkillCardProps {
  title: string;
  icon: ReactNode;
  skills: string[];
}

const SkillCard = ({ title, icon, skills }: SkillCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-gray-800">
      <div className="flex items-center mb-4">
        <div className="text-primary dark:text-primary-dark mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <div className="mr-2 text-primary dark:text-primary-dark">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-gray-700 dark:text-gray-300">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;