import React from 'react';
import ProjectSlider from '../components/ProjectSlider';
import { useProjects } from '../context/ProjectContext';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import { Plus } from 'lucide-react';

const Projects: React.FC = () => {
  const { projects, isAdmin, deleteProject } = useProjects();

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
             <span className="text-cyber-red font-bold tracking-widest text-sm mb-4 block">VISUAL ARCHIVE</span>
             <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Gallery</h1>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                A curated slide of recent visual experiments and brand assets.
             </p>
        </div>

        {isAdmin && (
            <div className="flex justify-center mb-16">
                <Link to="/admin/project">
                    <Button className="flex items-center gap-2">
                        <Plus size={20} /> Add New Project
                    </Button>
                </Link>
            </div>
        )}

        <div className="space-y-12">
            {projects.map((project) => (
                <ProjectSlider
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    category={project.category}
                    images={project.gallery || [project.image]} // Fallback to main image if no gallery
                    isAdmin={isAdmin}
                    onDelete={deleteProject}
                />
            ))}
        </div>

        {projects.length === 0 && (
            <div className="text-center py-20 bg-neutral-900 rounded-2xl border border-white/5 border-dashed">
                <p className="text-gray-500">No projects found.</p>
                {isAdmin && <p className="text-cyber-red mt-2">Click "Add New Project" to get started.</p>}
            </div>
        )}
        
        <div className="mt-20 text-center border-t border-white/5 pt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Want to see the details?</h3>
            <Link to="/portfolio">
                <Button variant="outline">View Full Case Studies</Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;