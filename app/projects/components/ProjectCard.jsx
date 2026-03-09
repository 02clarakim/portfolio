'use client';

import { ExternalLink, Github } from 'lucide-react';
import { CategoryBadge } from './CategoryBadge';

export function ProjectCard({ project, onClick }) {
  return (
    <div
      className="group relative bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer overflow-hidden animate-fade-in h-full flex flex-col"
      onClick={onClick}
    >
      {/* Category Badge - Top Left */}
      <div className="absolute top-4 left-4 z-10">
        <CategoryBadge category={project.category} />
      </div>

      {/* Action Buttons - Top Right */}
      <div className="absolute top-4 right-4 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {project.demoLink && (
          <button
            className="p-2 bg-white/50 rounded-lg hover:bg-white/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.demoLink, '_blank');
            }}
            aria-label="Open Live Demo"
          >
            <ExternalLink className="w-4 h-4 text-gray-600" />
          </button>
        )}
        {project.githubLink && (
          <button
            className="p-2 bg-white/50 rounded-lg hover:bg-white/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.githubLink, '_blank');
            }}
            aria-label="Open GitHub"
          >
            <Github className="w-4 h-4 text-gray-600" />
          </button>
        )}
      </div>

      {/* Project Image */}
      <div className="w-full aspect-[16/10] flex items-center justify-center overflow-hidden rounded-lg border border-gray-200/50">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500"
          />
        ) : (
          <div className="text-gray-400 text-sm">{project.title}</div>
        )}
      </div>

      {/* Project Info */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed flex-1">
          {project.overview}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 bg-gray-200/50 text-gray-700 text-xs font-medium rounded-lg backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2.5 py-1 text-gray-500 text-xs">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
