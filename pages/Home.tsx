import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from '../components/ui/Button';
import ProjectCard from '../components/ProjectCard';
import { SERVICES } from '../constants';
import { useProjects } from '../context/ProjectContext';

const Home: React.FC = () => {
  const tagline = "CLARITY THROUGH COMPLEXITY";
  const { projects, isAdmin, deleteProject } = useProjects();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyber-red/10 via-cyber-dark to-cyber-dark z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyber-red/5 rounded-full blur-3xl animate-pulse-slow z-0" />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyber-red text-xs font-bold tracking-widest mb-8 animate-float">
            <span className="w-2 h-2 rounded-full bg-cyber-red animate-pulse"></span>
            LAUNCHING 2026
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-black text-white leading-tight mb-6 tracking-tighter">
            CYBER<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-red to-red-800">STACK</span>
          </h1>
          
          <div className="h-20 flex items-center justify-center">
             <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light">
                {tagline}
             </p>
          </div>

          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/portfolio">
              <Button>VIEW WORKS</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">START A PROJECT</Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-neutral-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-6">
                Redefining Brand Identity for the <span className="text-cyber-red">Digital Age</span>.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                CyberStack is more than a design studio; it's a digital architect. 
                Founded by Muaz Oyebisi, we specialize in constructing robust visual identities 
                and immersive Web3 experiences that stand the test of time.
              </p>
              <Link to="/about" className="text-white border-b border-cyber-red pb-1 hover:text-cyber-red transition-colors inline-flex items-center gap-2">
                Read About Founder <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-cyber-red/20 rounded-xl rotate-3 transition-transform group-hover:rotate-6"></div>
              <div className="relative bg-neutral-800 p-8 rounded-xl border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                    {SERVICES.map(s => (
                        <div key={s.id} className="p-4 bg-neutral-900 rounded border border-white/5 hover:border-cyber-red/30 transition-colors">
                            <h3 className="font-bold text-white mb-1">{s.title}</h3>
                            <p className="text-xs text-gray-500">Professional Grade</p>
                        </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
               <span className="text-cyber-red font-bold tracking-widest text-sm mb-2 block">SELECTED WORK</span>
               <h2 className="text-4xl md:text-5xl font-display font-bold text-white">Recent Projects</h2>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
              View All <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                isAdmin={isAdmin}
                onDelete={deleteProject}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/portfolio">
                <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-cyber-red/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Ready to upgrade your stack?</h2>
            <p className="text-xl text-gray-300 mb-10">Let's build a brand identity that outlasts the trends.</p>
            <Link to="/contact">
                <Button className="text-lg px-8 py-4">Let's Talk Business</Button>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;