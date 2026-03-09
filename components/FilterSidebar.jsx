"use client";

import React, { useState } from 'react';

function FilterSidebar({ isOpen, onToggle }) {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTechStack, setSelectedTechStack] = useState([]);

  const categories = ['Coding', 'UI/UX Design', 'Consulting/Case Studies'];
  const techStack = ['Python', 'Javascript', 'HTML/CSS', 'React', 'TensorFlow', 'Figma'];

  const toggleCategory = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleTech = (tech) => {
    setSelectedTechStack(prev => 
      prev.includes(tech) ? prev.filter(t => t !== tech) : [...prev, tech]
    );
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-[999] md:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed right-10 top-[133px] w-[304px] bg-white rounded-xl shadow-lg p-8 z-[1000] transition-transform duration-300 max-md:top-0 max-md:right-0 max-md:h-screen max-md:rounded-none ${
          isOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h3 className="text-2xl font-bold text-gray-800">Filter</h3>
          
          <button 
            className="p-2 hover:bg-gray-100 rounded-md transition-colors md:hidden"
            onClick={onToggle}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              className="text-gray-600"
            >
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Category Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Category</h4>
          <ul className="space-y-2">
            {categories.map(cat => (
              <li 
                key={cat}
                className={`text-base cursor-pointer px-3 py-2 rounded-md transition-all ${
                  selectedCategories.includes(cat)
                    ? 'bg-gray-800 text-white font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => toggleCategory(cat)}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Tech Stack</h4>
          <ul className="space-y-2">
            {techStack.map(tech => (
              <li 
                key={tech}
                className={`text-base cursor-pointer px-3 py-2 rounded-md transition-all ${
                  selectedTechStack.includes(tech)
                    ? 'bg-gray-800 text-white font-medium'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => toggleTech(tech)}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Clear Filters Button */}
        {(selectedCategories.length > 0 || selectedTechStack.length > 0) && (
          <button
            className="w-full py-2.5 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => {
              setSelectedCategories([]);
              setSelectedTechStack([]);
            }}
          >
            Clear All Filters
          </button>
        )}
      </div>
    </>
  );
}

export default FilterSidebar;