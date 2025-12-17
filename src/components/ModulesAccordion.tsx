
import React, { useState } from 'react';
import { courseData } from '../data.ts';
import { ChevronDownIcon } from './Icons.tsx';

const AccordionItem = ({
  module,
  isOpen,
  onClick,
}: {
  module: { title: string; description: string };
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left py-5 px-6 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        aria-expanded={isOpen}
      >
        <span className="text-xl font-medium text-slate-800">{module.title}</span>
        <ChevronDownIcon
          className={`w-6 h-6 text-slate-500 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-5 text-slate-600/90">
            {module.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export const ModulesAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full rounded-lg bg-white shadow-lg border border-slate-200/80 overflow-hidden">
      {courseData.modules.map((module, index) => (
        <AccordionItem
          key={index}
          module={module}
          isOpen={openIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};
