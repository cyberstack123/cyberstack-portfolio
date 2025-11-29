import React from 'react';
import { SERVICES } from '../constants';
import { Shield, Target, Mail, Share2, Layers, PenTool, Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

// Icon mapping helper
const getIcon = (iconName: string) => {
    switch(iconName) {
        case 'Shield': return <Shield size={32} />;
        case 'Target': return <Target size={32} />;
        case 'Mail': return <Mail size={32} />;
        case 'Share2': return <Share2 size={32} />;
        case 'Hexagon': return <Hexagon size={32} />;
        default: return <Layers size={32} />;
    }
}

const Services: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
             <span className="text-cyber-red font-bold tracking-widest text-sm mb-4 block">WHAT WE DO</span>
             <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">Full Stack Creative</h1>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Comprehensive digital solutions tailored for growth. From visual identity to next-gen Web3 assets.
             </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
                <div key={service.id} className="group p-8 rounded-2xl bg-neutral-900 border border-white/5 hover:border-cyber-red/50 hover:bg-neutral-800/50 transition-all duration-300">
                    <div className="mb-6 p-4 w-fit rounded-xl bg-white/5 text-cyber-red group-hover:bg-cyber-red group-hover:text-white transition-colors duration-300">
                        {getIcon(service.icon)}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 font-display">{service.title}</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        {service.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                                <div className="w-1.5 h-1.5 bg-cyber-red rounded-full"></div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        {/* Future Expansion Box */}
        <div className="mt-8 p-8 rounded-2xl border border-dashed border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
            <div className="flex items-center gap-6">
                <div className="p-4 bg-white/5 rounded-xl text-gray-400">
                    <PenTool size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white mb-1">UI/UX Design</h3>
                    <p className="text-gray-400 text-sm">Coming Soon - Expansion Phase 2026</p>
                </div>
            </div>
            <div className="px-4 py-2 rounded-full bg-white/5 text-xs font-bold text-gray-400">
                IN DEVELOPMENT
            </div>
        </div>

        <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Unsure what you need?</h3>
            <Link to="/contact">
                <Button>Consult with Muaz</Button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
