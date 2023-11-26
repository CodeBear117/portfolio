import React, { useState } from 'react';
import './styles/ProjectsPage.css'
import projects from './ProjectsList'

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-container">
      <div className="projects-list">
        <h1 className='page-title'>My Projects</h1>
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`project-item ${selectedProject && project.id === selectedProject.id ? 'selected' : ''}`} 
            onClick={() => setSelectedProject(project)}
          >
            <div className='project-title'>
            {project.title}
            </div>
            <div className='project-overview'>
            {project.overview}
            </div>
          </div>
        ))}
      </div>
      <div className="project-details-container">
        {selectedProject ? (
          <div>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.dates}</p>
            <img className={'title-image'} src={selectedProject.details.images[0]} alt={selectedProject.title} />
            <p className='project-description'>{selectedProject.details.description}</p>
          </div>
        ) : (
          <p>Select a project to see details</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;