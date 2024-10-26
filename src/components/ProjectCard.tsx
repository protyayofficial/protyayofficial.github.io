import React from 'react';
import { Project } from '../types/types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 p-4">
      <div className="mb-4 aspect-w-16 aspect-h-9"> {/* Changed for aspect ratio */}
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover transition duration-300 ease-in-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            {/* <span className="text-white text-lg font-semibold">No Image Available</span> */}
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
      <div className="relative z-10 p-4 space-y-3">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="text-gray-300 text-sm text-justify">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-blue-500/30 text-blue-300 shadow"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition duration-300 ease-in-out"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
