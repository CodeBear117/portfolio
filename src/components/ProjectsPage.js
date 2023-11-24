import React, { useState } from 'react';
import './styles/ProjectsPage.css'
import projects from './ProjectsList'

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="projects-container">
      <div className="projects-list">
        <h1>My Projects</h1>
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="project-item" 
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
      <div className="project-details">
        {selectedProject ? (
          <div>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.content}</p>
          </div>
        ) : (
          <p>Select a project to see details</p>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;