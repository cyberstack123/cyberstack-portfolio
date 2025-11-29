import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { useProjects } from '../context/ProjectContext';
import Button from '../components/ui/Button';
import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const { projects, isAdmin, deleteProject } = useProjects();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Work</h1>
                <div className="h-1 w-20 bg-cyber-red mb-8"></div>
                <p className="text-xl text-gray-400 max-w-xl">
                    A selection of digital products, brand identities, and campaigns crafted with precision.
                </p>
            </div>
            {isAdmin && (
                <Link to="/admin/project">
                    <Button className="flex items-center gap-2">
                        <Plus size={20} /> Add Project
                    </Button>
                </Link>
            )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    project={project} 
                    isAdmin={isAdmin} 
                    onDelete={deleteProject} 
                />
            ))}
        </div>

        {projects.length === 0 && (
            <div className="text-center py-20 bg-neutral-900 rounded-2xl border border-white/5 border-dashed">
                <p className="text-gray-500">No projects found.</p>
                {isAdmin && <p className="text-cyber-red mt-2">Click "Add Project" to get started.</p>}
            </div>
        )}
        
        <div className="mt-20 p-12 bg-neutral-900 rounded-2xl text-center border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-4">Have a project in mind?</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                I'm currently accepting new clients for Q3 2025. Secure your spot on the waitlist or start now.
            </p>
            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-black font-bold hover:bg-cyber-red hover:text-white transition-colors rounded">
                Let's Discuss
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;