"use client";

import React from 'react';

function ProjectModal({ project, onClose }) {
  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl p-8 max-h-[90vh] overflow-y-auto max-md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          onClick={onClose}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="flex gap-8 max-md:flex-col">
          {/* Project Image */}
          <div className="w-80 h-96 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 max-md:w-full max-md:h-64">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-left"
            />
          </div>

          {/* Project Info */}
          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-start mb-6 gap-4">
              <h2 className="text-3xl font-semibold text-gray-800">
                {project.title}
              </h2>
              
              <div className="flex gap-2 flex-shrink-0">
                <button 
                className="p-1.5 hover:bg-white/50 rounded-md transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.demoLink) {
                    window.open(project.demoLink, "_blank");
                  }
                }}
                aria-label="Open Live Demo"
              >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className="text-gray-600"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </button>
                
                <button
                className="p-1.5 hover:bg-white/50 rounded-md transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  if (project.githubLink) {
                    window.open(project.githubLink, "_blank");
                  }
                }}
                aria-label="Open GitHub Repository"
              >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="text-gray-600"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Overview Section */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Overview
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.overview}
              </p>
            </div>

            {/* Description Section */}
            <div className="mb-6 flex-1">
              <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
                Description
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;