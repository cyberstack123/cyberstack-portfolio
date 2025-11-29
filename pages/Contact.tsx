import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { Mail, MapPin, Phone, Sparkles } from 'lucide-react';
import { generateCreativeBrief } from '../services/geminiService';
import { SERVICES, SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  // Simple form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // AI Feature state
  const [ideaInput, setIdeaInput] = useState('');
  const [selectedService, setSelectedService] = useState(SERVICES[0].title);
  const [aiBrief, setAiBrief] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleAiGenerate = async () => {
    if (!ideaInput) return;
    setIsGenerating(true);
    const brief = await generateCreativeBrief(ideaInput, selectedService);
    setAiBrief(brief);
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the mailto link
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Project Details:\n${formData.message}`
    );
    
    // Open email client
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Left Col: Contact Info & AI Tool */}
        <div>
            <h1 className="text-5xl font-display font-bold text-white mb-6">Let's build the future.</h1>
            <p className="text-xl text-gray-400 mb-12">
                Ready to elevate your brand? Reach out for a consultation or use our AI assistant to draft a quick brief.
            </p>

            <div className="space-y-6 mb-16">
                <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyber-red">
                        <Mail size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-bold">Email</p>
                        <p className="font-medium">{SOCIAL_LINKS.email}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-cyber-red">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 uppercase font-bold">Location</p>
                        <p className="font-medium">Remote / Global</p>
                    </div>
                </div>
            </div>

            {/* AI Assistant Widget */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-cyber-red/20 shadow-[0_0_30px_rgba(255,31,31,0.05)]">
                <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="text-cyber-red" size={20} />
                    <h3 className="font-display font-bold text-white">CyberStack AI Assistant</h3>
                </div>
                <p className="text-sm text-gray-400 mb-4">
                    Not sure how to describe your project? Enter a rough idea, and I'll generate a professional brief for you.
                </p>
                
                <div className="space-y-4">
                    <select 
                        className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-cyber-red outline-none"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                    >
                        {SERVICES.map(s => <option key={s.id} value={s.title}>{s.title}</option>)}
                    </select>
                    <textarea 
                        className="w-full bg-black/50 border border-white/10 rounded p-3 text-white text-sm focus:border-cyber-red outline-none h-24 resize-none"
                        placeholder="e.g. I want a logo that looks like a neon fox for a gaming company..."
                        value={ideaInput}
                        onChange={(e) => setIdeaInput(e.target.value)}
                    />
                    <button 
                        onClick={handleAiGenerate}
                        disabled={isGenerating || !ideaInput}
                        className="w-full py-2 bg-white/10 hover:bg-cyber-red text-white text-xs font-bold uppercase tracking-widest rounded transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                        {isGenerating ? 'Processing...' : 'Generate Brief'}
                    </button>
                </div>

                {/* AI Output Area */}
                {aiBrief && (
                    <div className="mt-6 p-4 bg-black/80 rounded border border-white/10 text-gray-300 text-sm animate-pulse-slow">
                        <div dangerouslySetInnerHTML={{ __html: aiBrief }} className="prose prose-invert prose-sm" />
                        <button 
                            className="mt-4 text-cyber-red text-xs hover:underline"
                            onClick={() => {
                                setFormData({ ...formData, message: `Here is the generated brief:\n\n${aiBrief.replace(/<[^>]*>?/gm, '')}` });
                            }}
                        >
                            Use this in contact form ↓
                        </button>
                    </div>
                )}
            </div>
        </div>

        {/* Right Col: Standard Form */}
        <div className="bg-neutral-900/50 p-8 md:p-12 rounded-2xl border border-white/5 h-fit sticky top-24">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Name</label>
                    <input 
                        type="text" 
                        className="w-full bg-black border border-white/10 rounded p-4 text-white focus:border-cyber-red outline-none transition-colors"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Email</label>
                    <input 
                        type="email" 
                        className="w-full bg-black border border-white/10 rounded p-4 text-white focus:border-cyber-red outline-none transition-colors"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />
                </div>
                <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Project Details</label>
                    <textarea 
                        className="w-full bg-black border border-white/10 rounded p-4 text-white focus:border-cyber-red outline-none transition-colors h-40 resize-none"
                        placeholder="Tell me about your timeline, budget, and goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                    />
                </div>
                <Button className="w-full" type="submit">SUBMIT REQUEST</Button>
                <p className="text-xs text-gray-600 text-center">
                    This will open your email client to send the request to {SOCIAL_LINKS.email}.
                </p>
            </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;