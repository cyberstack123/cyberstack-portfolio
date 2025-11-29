import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, Edit2, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
  isAdmin?: boolean;
  onDelete?: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isAdmin, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/admin/project/${project.id}`);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDelete) onDelete(project.id);
  };

  return (
    <div className="group relative block overflow-hidden rounded-xl bg-neutral-900 border border-white/5 hover:border-cyber-red/50 transition-colors duration-500">
      <Link to={`/project/${project.id}`} className="block">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-cyber-red text-xs font-bold uppercase tracking-widest mb-2 block">
                {project.category}
              </span>
              <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-cyber-red transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.summary}
              </p>
            </div>
            <div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white group-hover:bg-cyber-red group-hover:rotate-45 transition-all duration-300">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </div>
      </Link>
      
      {/* Admin Controls */}
      {isAdmin && (
        <div className="absolute top-4 right-4 flex gap-2 z-20">
            <button 
                onClick={handleEdit}
                className="p-2 bg-black/80 text-white rounded-full hover:bg-cyber-red transition-colors"
                title="Edit Project"
            >
                <Edit2 size={16} />
            </button>
            <button 
                onClick={handleDelete}
                className="p-2 bg-black/80 text-red-500 rounded-full hover:bg-red-600 hover:text-white transition-colors"
                title="Delete Project"
            >
                <Trash2 size={16} />
            </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;