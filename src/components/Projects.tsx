import { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, Github, ExternalLink, Code2, Sparkles } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'genai' | 'python' | 'web'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'genai', label: 'Generative AI' },
    { id: 'python', label: 'Python' },
    { id: 'web', label: 'Web Development' },
  ] as const;

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white text-slate-800 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold tracking-wider text-blue-600 uppercase mb-2">
              Featured Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
              Hands-On Projects & Prototypes
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Every project represents a specific learning milestone—from experimenting with LLM APIs to building responsive interfaces and practicing algorithmic logic.
            </p>
          </div>

          {/* Filter Tabs - Interactive Button Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  activeFilter === tab.id
                    ? 'bg-white text-slate-900 shadow-sm font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Optional Image for featured project */}
                {project.image && (
                  <div className="relative h-44 w-full bg-slate-900 overflow-hidden border-b border-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm text-slate-200 text-[11px] font-medium px-2.5 py-1 rounded-md">
                      {project.categoryLabel}
                    </div>
                  </div>
                )}

                <div className="p-6">
                  {/* Unboxed category metadata if no image */}
                  {!project.image && (
                    <div className="text-xs text-blue-600 font-semibold mb-2">
                      {project.categoryLabel}
                    </div>
                  )}

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack - Unboxed metadata */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 font-mono">
                      {project.techStack.map((tech, idx) => (
                        <span key={tech}>
                          {tech}
                          {idx < project.techStack.length - 1 && (
                            <span className="text-slate-300 ml-2" aria-hidden="true">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Working Actions */}
              <div className="px-6 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  Project Details
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-slate-500 hover:text-slate-900 transition-colors rounded-md hover:bg-slate-200/60"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Modal viewer for deep project walkthrough */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
