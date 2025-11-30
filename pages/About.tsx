import React from 'react';
import { TIMELINE, FOUNDER_NAME, SOCIAL_LINKS } from '../constants';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import EditableImage from '../components/EditableImage';
import { useProjects } from '../context/ProjectContext';

const About: React.FC = () => {
  const { isAdmin, aboutImage, updateAboutImage } = useProjects();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="pt-20 pb-12 px-6 border-b border-white/5 bg-neutral-900/50">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">The Architect</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Meet the mind behind CyberStack. Combining creative artistry with strategic digital growth.
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-12">
        
        {/* Bio Section */}
        <div className="md:col-span-7 space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                {/* Editable Profile Image */}
                <div className="shrink-0">
                  <EditableImage 
                    imageSrc={aboutImage}
                    onImageUpdate={updateAboutImage}
                    isAdmin={isAdmin}
                    className="w-48 h-48 md:w-56 md:h-56 rounded-full border-[3px] border-cyber-red shadow-[0_0_20px_rgba(255,31,31,0.2)]"
                    placeholderText="Upload Photo"
                  />
                </div>
                
                <div className="prose prose-invert prose-lg pt-4">
                    <h3 className="text-2xl font-bold text-white mb-4">Hello, I'm {FOUNDER_NAME}.</h3>
                    <p className="text-gray-300">
                        I am a multidisciplinary designer and digital strategist focused on building resilient brand identities. 
                        Since 2020, I have navigated the evolving landscape of graphic design, transforming abstract concepts into 
                        tangible, high-impact visuals.
                    </p>
                </div>
            </div>

            <div className="prose prose-invert prose-lg">
                <p className="text-gray-300">
                    My approach is simple: <span className="text-cyber-red font-bold">Clarity through complexity.</span> 
                    I take the noisy, crowded digital world and distill it into clean, memorable brand experiences.
                </p>
                <p className="text-gray-300">
                    With a specialized focus on Web3 Creations and On-Chain Branding, I don't just design pretty logos; 
                    I build digital legacies. CyberStack represents the culmination of this journey—a dedicated studio 
                    launching fully in 2026 to serve the next generation of tech and lifestyle brands.
                </p>
            </div>

            <div className="flex gap-4 pt-4 justify-center md:justify-start">
                <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-cyber-red hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-cyber-red hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-cyber-red hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="p-3 bg-white/5 rounded-full hover:bg-cyber-red hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
        </div>

        {/* Timeline Section */}
        <div className="md:col-span-5 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10"></div>
            <div className="space-y-12">
                {TIMELINE.map((item, index) => (
                    <div key={index} className="relative pl-12 group">
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-neutral-900 border-2 border-white/20 flex items-center justify-center group-hover:border-cyber-red transition-colors z-10">
                            <div className="w-2 h-2 bg-white rounded-full group-hover:bg-cyber-red transition-colors"></div>
                        </div>
                        <span className="text-cyber-red font-bold font-display text-lg block mb-1">{item.year}</span>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>

      </div>

      {/* Philosophy Stats */}
      <div className="bg-white/5 border-y border-white/5 py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div>
                <div className="text-4xl font-display font-bold text-white mb-2">4+</div>
                <div className="text-xs tracking-widest text-gray-500 uppercase">Years Experience</div>
             </div>
             <div>
                <div className="text-4xl font-display font-bold text-white mb-2">50+</div>
                <div className="text-xs tracking-widest text-gray-500 uppercase">Projects Delivered</div>
             </div>
             <div>
                <div className="text-4xl font-display font-bold text-white mb-2">25%</div>
                <div className="text-xs tracking-widest text-gray-500 uppercase">Avg. Rev Growth</div>
             </div>
             <div>
                <div className="text-4xl font-display font-bold text-white mb-2">100%</div>
                <div className="text-xs tracking-widest text-gray-500 uppercase">Commitment</div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default About;