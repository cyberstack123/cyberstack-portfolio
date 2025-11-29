import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS as DEFAULT_PROJECTS } from '../constants';

interface ProjectContextType {
  projects: Project[];
  isAdmin: boolean;
  toggleAdmin: () => void;
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  getProject: (id: string) => Project | undefined;
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined);

export const useProjects = () => {
  const context = useContext(ProjectContext);
  if (!context) throw new Error('useProjects must be used within a ProjectProvider');
  return context;
};

export const ProjectProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedProjects = localStorage.getItem('cyberstack_projects');
    const storedAdmin = localStorage.getItem('cyberstack_is_admin');

    if (storedProjects) {
      try {
        setProjects(JSON.parse(storedProjects));
      } catch (e) {
        console.error("Failed to parse projects", e);
        setProjects(DEFAULT_PROJECTS);
      }
    } else {
      setProjects(DEFAULT_PROJECTS);
    }

    if (storedAdmin) {
      setIsAdmin(JSON.parse(storedAdmin));
    }
    
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('cyberstack_projects', JSON.stringify(projects));
    }
  }, [projects, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('cyberstack_is_admin', JSON.stringify(isAdmin));
    }
  }, [isAdmin, isLoaded]);

  const toggleAdmin = () => setIsAdmin(prev => !prev);

  const addProject = (project: Project) => {
    setProjects(prev => [project, ...prev]);
  };

  const updateProject = (updatedProject: Project) => {
    setProjects(prev => prev.map(p => p.id === updatedProject.id ? updatedProject : p));
  };

  const deleteProject = (id: string) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };

  const getProject = (id: string) => projects.find(p => p.id === id);

  return (
    <ProjectContext.Provider value={{ projects, isAdmin, toggleAdmin, addProject, updateProject, deleteProject, getProject }}>
      {children}
    </ProjectContext.Provider>
  );
};