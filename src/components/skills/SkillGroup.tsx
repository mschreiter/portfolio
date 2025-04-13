import React from "react";
import SkillItem from "./SkillItem";

interface SkillGroupProps {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <SkillItem
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default SkillGroup;
