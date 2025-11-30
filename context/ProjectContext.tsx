import React, { createContext, useContext, useState, useEffect } from 'react';
import { Project } from '../types';
import { PROJECTS as DEFAULT_PROJECTS } from '../constants';

interface ProjectContextType {
  projects: Project[];
  isAdmin: boolean;
  aboutImage: string;
  toggleAdmin: () => void;
  addProject: (project: Project) => void;
  updateProject: (project: Project) => void;
  deleteProject: (id: string) => void;
  getProject: (id: string) => Project | undefined;
  clearAllProjects: () => void;
  updateAboutImage: (image: string) => void;
  exportData: () => void; // New export function
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
  const [aboutImage, setAboutImage] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const storedProjects = localStorage.getItem('cyberstack_projects');
    const storedAdmin = localStorage.getItem('cyberstack_is_admin');
    const storedAboutImage = localStorage.getItem('cyberstack_about_image');

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

    if (storedAboutImage) {
      setAboutImage(storedAboutImage);
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

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('cyberstack_about_image', aboutImage);
    }
  }, [aboutImage, isLoaded]);

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

  const clearAllProjects = () => {
    if (window.confirm('WARNING: This will delete ALL projects, including sample data. This cannot be undone. Are you sure?')) {
      setProjects([]);
    }
  };

  const getProject = (id: string) => projects.find(p => p.id === id);

  const updateAboutImage = (image: string) => {
    setAboutImage(image);
  };

  const exportData = () => {
    const data = {
      timestamp: new Date().toISOString(),
      aboutImage,
      projects
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `cyberstack_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    alert("Backup saved! Keep this file safe. You can give this to a developer to make your changes permanent.");
  };

  return (
    <ProjectContext.Provider value={{ 
      projects, 
      isAdmin, 
      aboutImage,
      toggleAdmin, 
      addProject, 
      updateProject, 
      deleteProject, 
      getProject,
      clearAllProjects,
      updateAboutImage,
      exportData
    }}>
      {children}
    </ProjectContext.Provider>
  );
};