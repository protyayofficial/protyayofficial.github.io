import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types/types';
import { Helmet } from 'react-helmet';

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <>
      <Helmet>
        <title>Projects | Portfolio</title>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              My Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A collection of my work and contributions to the tech world
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
            {projects.map((project, index) => (
              <div key={project.id} className="transform hover:scale-105 transition-all duration-300">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
