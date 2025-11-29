import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Project } from '../types';
import { ArrowLeft, CheckCircle, Edit } from 'lucide-react';
import Button from '../components/ui/Button';
import { useProjects } from '../context/ProjectContext';

const CaseStudy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getProject, isAdmin } = useProjects();
  const [project, setProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
        const found = getProject(id);
        if (found) setProject(found);
    }
  }, [id, getProject]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Loading Project or Not Found...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Hero Image */}
      <div className="w-full h-[60vh] relative">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 max-w-7xl mx-auto flex justify-between items-end">
            <div>
                <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
                    <ArrowLeft size={20} /> Back to Work
                </Link>
                <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-4 text-sm font-bold tracking-widest text-cyber-red uppercase">
                    <span>{project.category}</span>
                    <span className="text-gray-600">•</span>
                    <span>{project.client}</span>
                    <span className="text-gray-600">•</span>
                    <span>{project.year}</span>
                </div>
            </div>
            {isAdmin && (
                <button 
                    onClick={() => navigate(`/admin/project/${project.id}`)}
                    className="mb-4 flex items-center gap-2 bg-white/10 hover:bg-cyber-red text-white px-4 py-2 rounded transition-colors"
                >
                    <Edit size={16} /> Edit Details
                </button>
            )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 mt-20">
        {/* Project Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
                <h3 className="text-xl font-bold text-white mb-4 border-b border-cyber-red/30 pb-2 inline-block">The Problem</h3>
                <p className="text-gray-400 leading-relaxed">{project.details.problem}</p>
            </div>
            <div>
                <h3 className="text-xl font-bold text-white mb-4 border-b border-cyber-red/30 pb-2 inline-block">The Solution</h3>
                <p className="text-gray-400 leading-relaxed">{project.details.solution}</p>
            </div>
        </div>

        {/* Mockup / Image Placeholder */}
        <div className="w-full aspect-video bg-neutral-900 rounded-xl mb-20 flex items-center justify-center border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-cyber-red/5"></div>
            <p className="text-gray-600 font-display text-2xl z-10">High Fidelity Mockup Visual</p>
        </div>

        {/* Process */}
        <div className="mb-20">
            <h2 className="text-3xl font-display font-bold text-white mb-8">Design Process</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.details.process.map((step, idx) => (
                    <div key={idx} className="p-6 bg-neutral-900 rounded-lg border-l-2 border-cyber-red">
                        <span className="text-4xl font-black text-white/10 block mb-2">0{idx + 1}</span>
                        <span className="text-white font-bold">{step}</span>
                    </div>
                ))}
            </div>
        </div>

        {/* Visual Identity System */}
        <div className="mb-20">
            <h2 className="text-3xl font-display font-bold text-white mb-8">Visual System</h2>
            <div className="flex gap-6 mb-8">
                {project.details.colors.map((color, idx) => (
                    <div key={idx} className="space-y-2">
                        <div 
                            className="w-20 h-20 rounded-full shadow-lg border border-white/10" 
                            style={{ backgroundColor: color }}
                        ></div>
                        <p className="text-center text-xs text-gray-500 font-mono">{color}</p>
                    </div>
                ))}
            </div>
            <div className="p-8 bg-neutral-900 rounded-xl border border-white/5">
                <h4 className="text-gray-400 uppercase text-xs tracking-widest mb-4">Typography</h4>
                <div className="space-y-4">
                    <p className="text-4xl md:text-6xl text-white font-display font-bold">Montserrat Bold</p>
                    <p className="text-xl md:text-2xl text-gray-300 font-sans">Montserrat Regular for body copy.</p>
                </div>
            </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-r from-neutral-900 to-black p-8 md:p-12 rounded-2xl border border-white/10">
            <div className="md:flex items-center justify-between gap-8">
                <div>
                    <h2 className="text-3xl font-display font-bold text-white mb-4">Results</h2>
                    <p className="text-gray-300 mb-6">{project.details.result}</p>
                    <ul className="space-y-2">
                        {project.details.deliverables.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                                <CheckCircle size={14} className="text-cyber-red" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-8 md:mt-0 flex-shrink-0">
                    <Button>Visit Live Site</Button>
                </div>
            </div>
        </div>

        {/* Navigation */}
        <div className="mt-20 flex justify-between border-t border-white/10 pt-12">
            <Link to="/portfolio" className="text-gray-500 hover:text-white transition-colors">All Projects</Link>
            <Link to="/contact" className="text-cyber-red font-bold hover:underline">Start Your Project</Link>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;