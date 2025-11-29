import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProjects } from '../context/ProjectContext';
import { Project } from '../types';
import Button from '../components/ui/Button';
import { ArrowLeft, Save, Trash2, Plus, X, Image as ImageIcon } from 'lucide-react';

const ProjectEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getProject, addProject, updateProject, deleteProject } = useProjects();
  
  const initialState: Project = {
    id: '',
    title: '',
    category: 'Brand Identity',
    client: '',
    year: new Date().getFullYear().toString(),
    summary: '',
    image: 'https://picsum.photos/800/600',
    gallery: [],
    details: {
      problem: '',
      solution: '',
      process: [],
      result: '',
      deliverables: [],
      colors: ['#000000', '#ffffff']
    }
  };

  const [formData, setFormData] = useState<Project>(initialState);
  const [processInput, setProcessInput] = useState('');
  const [deliverablesInput, setDeliverablesInput] = useState('');
  const [colorsInput, setColorsInput] = useState('');
  
  // Gallery Management State
  const [galleryInput, setGalleryInput] = useState('');

  useEffect(() => {
    if (id) {
      const project = getProject(id);
      if (project) {
        setFormData(project);
        setProcessInput(project.details.process.join('\n'));
        setDeliverablesInput(project.details.deliverables.join('\n'));
        setColorsInput(project.details.colors.join(', '));
      }
    }
  }, [id, getProject]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent as keyof Project] as any,
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddGalleryImage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (galleryInput.trim()) {
      setFormData(prev => ({
        ...prev,
        gallery: [...(prev.gallery || []), galleryInput.trim()]
      }));
      setGalleryInput('');
    }
  };

  const handleRemoveGalleryImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      gallery: (prev.gallery || []).filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const finalProject: Project = {
      ...formData,
      id: formData.id || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      gallery: formData.gallery && formData.gallery.length > 0 ? formData.gallery : [formData.image], // Fallback to main image if gallery empty
      details: {
        ...formData.details,
        process: processInput.split('\n').filter(s => s.trim()),
        deliverables: deliverablesInput.split('\n').filter(s => s.trim()),
        colors: colorsInput.split(',').map(s => s.trim()).filter(s => s)
      }
    };

    if (id) {
      updateProject(finalProject);
    } else {
      addProject(finalProject);
    }
    
    navigate('/portfolio');
  };

  const handleDelete = () => {
    if (id) {
      deleteProject(id);
      navigate('/portfolio');
    }
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
            <button onClick={() => navigate('/portfolio')} className="flex items-center gap-2 text-gray-400 hover:text-white">
                <ArrowLeft size={20} /> Cancel
            </button>
            <h1 className="text-3xl font-display font-bold text-white">
                {id ? 'Edit Project' : 'New Project'}
            </h1>
            {id && (
                <button onClick={handleDelete} className="text-red-500 hover:text-red-400 p-2">
                    <Trash2 size={24} />
                </button>
            )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-neutral-900/50 p-8 rounded-2xl border border-white/5">
            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Project Title</label>
                    <input 
                        type="text" name="title" value={formData.title} onChange={handleChange} required
                        className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Category</label>
                    <select 
                        name="category" value={formData.category} onChange={handleChange}
                        className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none"
                    >
                        <option>Brand Identity</option>
                        <option>Web3 & NFT</option>
                        <option>Web Strategy</option>
                        <option>Social Media</option>
                        <option>Other</option>
                    </select>
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Client Name</label>
                    <input 
                        type="text" name="client" value={formData.client} onChange={handleChange} required
                        className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Year</label>
                    <input 
                        type="text" name="year" value={formData.year} onChange={handleChange} required
                        className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none"
                    />
                </div>
            </div>

            {/* Main Image */}
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Cover Image URL (Main)</label>
                <div className="flex gap-4">
                    <input 
                        type="text" name="image" value={formData.image} onChange={handleChange} required
                        className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none"
                    />
                    {formData.image && (
                      <div className="shrink-0 w-12 h-12 bg-neutral-800 rounded border border-white/20 overflow-hidden">
                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    )}
                </div>
            </div>

            {/* Gallery Management */}
            <div className="bg-black/30 p-6 rounded-xl border border-white/5">
                <label className="block text-xs font-bold text-cyber-red uppercase mb-4 flex items-center gap-2">
                  <ImageIcon size={16} /> Gallery / Slider Images
                </label>
                
                <div className="flex gap-4 mb-4">
                    <input 
                        type="text" 
                        value={galleryInput} 
                        onChange={(e) => setGalleryInput(e.target.value)}
                        placeholder="Paste image URL here..."
                        className="flex-grow bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none"
                    />
                    <button 
                      onClick={handleAddGalleryImage}
                      className="bg-white/10 hover:bg-cyber-red text-white p-3 rounded transition-colors"
                      type="button"
                    >
                      <Plus size={20} />
                    </button>
                </div>

                {formData.gallery && formData.gallery.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {formData.gallery.map((url, index) => (
                      <div key={index} className="relative group aspect-video bg-neutral-800 rounded border border-white/10 overflow-hidden">
                        <img src={url} alt={`Gallery ${index}`} className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={() => handleRemoveGalleryImage(index)}
                          className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X size={14} />
                        </button>
                        <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] px-2 py-0.5 rounded">
                          Slide {index + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm italic">No gallery images added yet. The main cover image will be used.</p>
                )}
            </div>

            {/* Text Details */}
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Short Summary</label>
                <textarea 
                    name="summary" value={formData.summary} onChange={handleChange} required
                    className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none h-24"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">The Problem</label>
                    <textarea 
                        name="details.problem" value={formData.details.problem} onChange={handleChange} required
                        className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none h-32"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">The Solution</label>
                    <textarea 
                        name="details.solution" value={formData.details.solution} onChange={handleChange} required
                        className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none h-32"
                    />
                </div>
            </div>

            {/* Lists */}
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Process Steps (One per line)</label>
                    <textarea 
                        value={processInput} onChange={e => setProcessInput(e.target.value)}
                        className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none h-40 font-mono text-sm"
                        placeholder="Discovery Workshop&#10;Visual Exploration&#10;Design System"
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Deliverables (One per line)</label>
                    <textarea 
                        value={deliverablesInput} onChange={e => setDeliverablesInput(e.target.value)}
                        className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none h-40 font-mono text-sm"
                        placeholder="Logo Suite&#10;Brand Guidelines&#10;Social Assets"
                    />
                </div>
            </div>

            {/* Result & Colors */}
            <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Result / Outcome</label>
                <textarea 
                    name="details.result" value={formData.details.result} onChange={handleChange} required
                    className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none h-24"
                />
            </div>

            <div>
                 <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Brand Colors (Comma separated Hex)</label>
                 <input 
                    type="text" value={colorsInput} onChange={e => setColorsInput(e.target.value)}
                    className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-cyber-red outline-none"
                    placeholder="#FF1F1F, #0A0A0A, #FFFFFF"
                />
                <div className="flex gap-2 mt-2">
                    {colorsInput.split(',').map((c, i) => (
                        <div key={i} className="w-6 h-6 rounded-full border border-white/20" style={{ backgroundColor: c.trim() }}></div>
                    ))}
                </div>
            </div>

            <Button type="submit" className="w-full flex justify-center items-center gap-2">
                <Save size={20} /> Save Project
            </Button>
        </form>
      </div>
    </div>
  );
};

export default ProjectEditor;