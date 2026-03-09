"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ProjectCard } from "./components/ProjectCard";
import { FilterDropdown } from "./components/FilterDropdown";
import { ProjectModal } from "./components/ProjectModal";
import { projectsData, categoryLabels } from "@/data/projectsData";

export default function ProjectsPage() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTechStack, setSelectedTechStack] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  // Filter projects based on selected filters with useMemo for performance
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      // Filter by category
      if (selectedCategories.length > 0 && !selectedCategories.includes(project.category)) {
        return false;
      }
      // Filter by tech stack
      if (selectedTechStack.length > 0) {
        const hasMatchingTag = project.tags.some((tag) =>
          selectedTechStack.includes(tag)
        );
        if (!hasMatchingTag) return false;
      }
      return true;
    });
  }, [selectedCategories, selectedTechStack]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-12 lg:py-16">
        {/* Header */}
        <header className="flex items-center justify-between mb-12 max-md:flex-col max-md:items-start max-md:gap-6">
          <div className="flex items-center gap-6">
            {/* Back/Home Button */}
            <Link
              href="/"
              className="flex items-center justify-center w-20 h-16 bg-muted hover:bg-secondary rounded-xl transition-colors group"
              aria-label="Go back home"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:-translate-x-0.5 transition-transform"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1"
              >
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
              </svg>
            </Link>

            <h1 className="text-3xl lg:text-4xl font-semibold text-foreground">
              Projects
            </h1>
          </div>

          {/* Filter Dropdown */}
          <FilterDropdown
            selectedCategories={selectedCategories}
            selectedTechStack={selectedTechStack}
            onCategoryChange={setSelectedCategories}
            onTechStackChange={setSelectedTechStack}
          />
        </header>

        {/* Active Filters Display */}
        {(selectedCategories.length > 0 || selectedTechStack.length > 0) && (
          <div className="mb-8 flex items-center gap-2 flex-wrap">
            <span className="text-sm text-muted-foreground">Showing:</span>
            {selectedCategories.map((cat) => (
              <span
                key={cat}
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  cat === 'swe'
                    ? 'bg-blue-100 text-blue-700'
                    : cat === 'uiux'
                    ? 'bg-purple-100 text-purple-700'
                    : 'bg-green-100 text-green-700'
                }`}
              >
                {categoryLabels[cat]}
              </span>
            ))}
            {selectedTechStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-200 text-gray-800 text-xs font-medium rounded-full"
              >
                {tech}
              </span>
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              ({filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''})
            </span>
          </div>
        )}

        {/* Projects Grid - 3 Columns */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <ProjectCard
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">
              No projects found
            </h3>
            <p className="text-muted-foreground max-w-md">
              Try adjusting your filters to see more projects.
            </p>
          </div>
        )}

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
}