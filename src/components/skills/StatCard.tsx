import React from "react";

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 border border-gray-100 dark:border-gray-700 text-center">
      <div className="text-4xl font-bold text-primary dark:text-primary-dark mb-2">
        {value}
      </div>
      <div className="text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  );
};

export default StatCard;
