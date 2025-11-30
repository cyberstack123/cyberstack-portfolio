import React from 'react';
import ProjectSlider from '../components/ProjectSlider';
import { PROJECTS } from '../data';

const Projects = () => {
  return (
    <div style={{minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px'}}>
      <div className="container">
        <div style={{textAlign: 'center', marginBottom: '80px'}}>
           <span className="text-red uppercase font-bold tracking-wide">Visual Archive</span>
           <h1 style={{fontSize: '60px', fontWeight: 800}}>Gallery</h1>
        </div>

        <div>
          {PROJECTS.map(project => (
            <ProjectSlider key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;